import{T as y,k as l,o as P,f as U,a as e,u as s,Z as N,w as a,b as _,e as O,j,d as p,F as k,O as B}from"./app-DFg3Xq1j.js";import{_ as C}from"./AuthenticatedLayout-CrMmzawR.js";import{_ as F}from"./Breadcrumbs-eqMAb9UO.js";const S={class:"mb-5"},M=_("h5",{class:"text-h5 font-weight-bold"},"Edit People",-1),T={name:"PeopleEdit",data(){return{genders:[{text:"Male",value:"male"},{text:"Female",value:"female"}],breadcrumbs:[{title:"Dashboard",disabled:!1,href:"/dashboard"},{title:"People",disabled:!1,href:"/people"},{title:"Edit",disabled:!0}]}}},D=Object.assign(T,{props:{person:{type:Object,required:!0}},setup(c){const n=c,t=y({name:n.person.name,email:n.person.email,phone:n.person.phone,gender:n.person.gender,address:n.person.address}),f=()=>{t.patch("/people/"+n.person.id,{onSuccess:()=>{B.visit("/people")}})};return(u,o)=>{const m=l("v-text-field"),d=l("v-col"),v=l("v-select"),b=l("v-textarea"),g=l("v-row"),V=l("v-card-text"),x=l("v-spacer"),i=l("v-btn"),h=l("v-card-actions"),w=l("v-form"),E=l("v-card");return P(),U(k,null,[e(s(N),{title:"Edit People"}),e(C,null,{default:a(()=>[_("div",S,[M,e(F,{items:u.breadcrumbs,class:"pa-0 mt-1"},null,8,["items"])]),e(E,null,{default:a(()=>[e(w,{onSubmit:O(f,["prevent"])},{default:a(()=>[e(V,null,{default:a(()=>[e(g,null,{default:a(()=>[e(d,{cols:"12",sm:"12",md:"6"},{default:a(()=>[e(m,{modelValue:s(t).name,"onUpdate:modelValue":o[0]||(o[0]=r=>s(t).name=r),label:"Name",variant:"underlined","error-messages":s(t).errors.name},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",sm:"12",md:"6"},{default:a(()=>[e(v,{modelValue:s(t).gender,"onUpdate:modelValue":o[1]||(o[1]=r=>s(t).gender=r),items:u.genders,"item-title":"text","item-value":"value",label:"Gender",variant:"underlined","error-messages":s(t).errors.gender},null,8,["modelValue","items","error-messages"])]),_:1}),e(d,{cols:"12",sm:"12",md:"6"},{default:a(()=>[e(m,{modelValue:s(t).email,"onUpdate:modelValue":o[2]||(o[2]=r=>s(t).email=r),label:"Email",variant:"underlined",type:"email","error-messages":s(t).errors.email},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",sm:"12",md:"6"},{default:a(()=>[e(m,{modelValue:s(t).phone,"onUpdate:modelValue":o[3]||(o[3]=r=>s(t).phone=r),label:"Phone",variant:"underlined",type:"tel","error-messages":s(t).errors.phone},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",sm:"12"},{default:a(()=>[e(b,{modelValue:s(t).address,"onUpdate:modelValue":o[4]||(o[4]=r=>s(t).address=r),label:"Address",variant:"underlined","error-messages":s(t).errors.address},null,8,["modelValue","error-messages"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:a(()=>[e(x),e(s(j),{href:"/people",as:"div"},{default:a(()=>[e(i,{text:""},{default:a(()=>[p("Cancel")]),_:1})]),_:1}),e(i,{type:"submit",color:"primary"},{default:a(()=>[p("Save")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{D as default};
