import{K as f,r as v,a as p}from"./app-f5e75cbf.js";import y from"./Form-a12c5b07.js";import"./InputError-9a19ede7.js";import"./InputLabel-4c7d594a.js";import"./ListBoxPage-c829aeee.js";import"./transition-8157427c.js";import"./keyboard-0fc7e943.js";import"./use-tracked-pointer-e3e568b6.js";import"./use-resolve-button-type-b44da143.js";import"./PrimaryButton-8f268ebf.js";import"./SecondaryButton-bc67938b.js";import"./TextInput-fd8f85ce.js";function V({setIsOpenEditDialog:e,model:t,ShouldMap:s}){const{data:r,setData:a,put:u,reset:i,errors:n}=f({value:t.value,name:t.name,type:t.type}),m=o=>e(!1),c=o=>{o.preventDefault(),u(route("controlValues.update",t.id),{data:r,onSuccess:()=>{i(),e(!1)}})};return v.useEffect(()=>{a({...r,value:t.value,name:t.name,type:t.type})},[t]),p("form",{onSubmit:c,children:p(y,{errors:n,data:r,model:t,ShouldMap:s,setData:a,submit:"Update",closeButton:m})})}export{V as default};
