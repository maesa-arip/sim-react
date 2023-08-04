<?php

namespace App\Http\Controllers;

use App\Http\Resources\RiskTypeResource;
use App\Models\RiskType;
use Illuminate\Http\Request;

class RiskTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public $loadDefault = 10;
    public function index(Request $request)
    {
        $riskTypes = RiskType::query();
        if ($request->q) {
            $riskTypes->where('name','like','%'.$request->q.'%');
        }

        if ($request->has(['field','direction'])) {
            $riskTypes->orderBy($request->field,$request->direction);
        }
        $riskTypes = (
            RiskTypeResource::collection($riskTypes->latest()->fastPaginate($request->load)->withQueryString())
        )->additional([
            'attributes' => [
                'total' => 1100,
                'per_page' =>10,
            ],
            'filtered' => [
                'load' => $request->load ?? $this->loadDefault,
                'q' => $request->q ?? '',
                'page' => $request->page ?? 1,
                'field' => $request->field ?? '',
                'direction' => $request->direction ?? '',

            ]
        ]);
        return inertia('Master/RiskType/Index',['riskTypes'=>$riskTypes]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        RiskType::create($validated);
        return back()->with([
            'type' => 'success',
            'message' => 'Data Tipe risiko berhasil disimpan',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RiskType  $riskType
     * @return \Illuminate\Http\Response
     */
    public function show(RiskType $riskType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RiskType  $riskType
     * @return \Illuminate\Http\Response
     */
    public function edit(RiskType $riskType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\RiskType  $riskType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RiskType $riskType)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $riskType->update($validated);
        return back()->with([
            'type' => 'success',
            'message' => 'Tipe risiko berhasil diubah',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RiskType  $riskType
     * @return \Illuminate\Http\Response
     */
    public function destroy(RiskType $riskType)
    {
        $riskType->delete();
        return back()->with([
            'type' => 'success',
            'message' => 'Tipe risiko berhasil dihapus',
        ]);
    }
}
