import{r as g,j as s,F as N,a as e}from"./app-f5e75cbf.js";import{I as r}from"./InputError-9a19ede7.js";import{I as n}from"./InputLabel-4c7d594a.js";import{L as x}from"./ListBoxPage-c829aeee.js";import{P as y}from"./PrimaryButton-8f268ebf.js";import{S as I}from"./SecondaryButton-bc67938b.js";import{T as c}from"./TextInput-fd8f85ce.js";import"./transition-8157427c.js";import"./keyboard-0fc7e943.js";import"./use-tracked-pointer-e3e568b6.js";import"./use-resolve-button-type-b44da143.js";function E({errors:l,submit:p,data:m,setData:t,ShouldMap:i,model:o,closeButton:u}){const d=a=>{t({...m,type:a.id})},v=[{name:"Pilih"}],[f,h]=g.useState(()=>o?i[o.type-1]:v[0]);return s(N,{children:[e("div",{className:"px-4 py-5 bg-white sm:p-6",children:s("div",{className:"grid grid-cols-12 gap-6",children:[s("div",{className:"col-span-12",children:[e(n,{for:"value",value:"Nilai"}),e(c,{id:"value",value:m.value,handleChange:a=>t("value",a.target.value),type:"number",className:"block w-full mt-1"}),e(r,{message:l.value,className:"mt-2"})]}),s("div",{className:"col-span-12",children:[e(n,{for:"name",value:"Nama"}),e(c,{id:"name",value:m.name,handleChange:a=>t("name",a.target.value),type:"text",className:"block w-full mt-1"}),e(r,{message:l.name,className:"mt-2"})]}),s("div",{className:"col-span-12",children:[e(n,{for:"type",value:"Tipe"}),e(x,{ShouldMap:i,selected:f,onChange:a=>{d(a),h(a)}}),e(r,{message:l.type,className:"mt-2"})]})]})}),s("div",{className:"px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[e(y,{children:p}),e(I,{className:"mx-2",onClick:u,children:"Batal"})]})]})}export{E as default};
