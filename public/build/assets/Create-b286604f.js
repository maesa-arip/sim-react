import{K as c,a as e}from"./app-f5e75cbf.js";import f from"./Form-2bdcb27e.js";import"./InputError-9a19ede7.js";import"./InputLabel-4c7d594a.js";import"./PrimaryButton-8f268ebf.js";import"./SecondaryButton-bc67938b.js";import"./TextInput-fd8f85ce.js";import"./TextInputCheckbox-4bddded6.js";function C({setIsOpenAddDialog:t,roles:s,enabled:m,setEnabled:a}){const{data:o,setData:i,post:n,reset:p,errors:u}=c({name:"",email:"",password:""});return e("form",{onSubmit:r=>{r.preventDefault(),n(route("users.store"),{data:o,onSuccess:()=>{p(),t(!1)}})},children:e(f,{errors:u,data:o,roles:s,enabled:m,setEnabled:a,setData:i,submit:"Simpan",closeButton:r=>t(!1)})})}export{C as default};
