<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\RiskRegister;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public $loadDefault = 15;
    public function index(Request $request)
    {
        $users = User::query()->with('roles');
        if ($request->q) {
            $users->where('name','like','%'.$request->q.'%')
            ->orWhere('email','like','%'.$request->q.'%')
            ;
        }
        if ($request->has(['field','direction'])) {
            $users->orderBy($request->field,$request->direction);
        }
        $users = (
            UserResource::collection($users->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => 1100,
                'per_page' =>15,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
                'field' => $request->field ?? '',
                'direction' => $request->direction ?? '',

            ]
        ]);
        $roles = Role::get();
        // $roles = Role::pluck('name', 'id');
        return inertia('Users/Index',['users'=>$users, 'roles'=>$roles]);
    }
    public function store(Request $request)
    {
        // dd($request->all());
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            // 'roles' => ['required', 'array'],
        ]);
        $request->merge([
            'password' => Hash::make('password'),
        ]);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        $user->syncRoles($request->input('roles'));

        return back()->with([
            'type' => 'success',
            'message' => 'User berhasil dibuat',
        ]);
    }
    public function update(Request $request, User $user)
    {
        // dd($request->all());
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'email','unique:users,email,'. optional($user)->id],
        ]);
        $user->update($validated);
        $user->syncRoles($request->input('roles'));
        return back()->with([
            'type' => 'success',
            'message' => 'User berhasil diubah',
        ]);
    }
    public function destroy(User $user)
    {
        $user->delete();
        return back()->with([
            'type' => 'success',
            'message' => 'User berhasil dihapus',
        ]);
    }
}
