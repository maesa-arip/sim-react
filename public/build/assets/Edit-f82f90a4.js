import{K as c,r as f,a as s}from"./app-f5e75cbf.js";import d from"./Form-03a23e7c.js";import"./InputError-9a19ede7.js";import"./InputLabel-4c7d594a.js";import"./PrimaryButton-8f268ebf.js";import"./SecondaryButton-bc67938b.js";import"./TextInput-fd8f85ce.js";function k({setIsOpenEditDialog:e,model:t}){const{data:r,setData:o,put:m,reset:n,errors:i}=c({name:t.name}),p=a=>e(!1),u=a=>{a.preventDefault(),m(route("riskCategories.update",t.id),{data:r,onSuccess:()=>{n(),e(!1)}})};return f.useEffect(()=>{o({...r,name:t.name})},[t]),s("form",{onSubmit:u,children:s(d,{errors:i,data:r,setData:o,submit:"Update",closeButton:p})})}export{k as default};
