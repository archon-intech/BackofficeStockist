import{T as y,k as s,o as C,f as k,a as e,u as t,Z as S,w as o,b as _,e as U,j as N,d as i,F as T,O as B}from"./app-DFg3Xq1j.js";import{_ as M}from"./AuthenticatedLayout-CrMmzawR.js";import{_ as O}from"./Breadcrumbs-eqMAb9UO.js";const j={class:"mb-5"},F=_("h5",{class:"text-h5 font-weight-bold"},"Create Store",-1),R={name:"StoreCreate",data(){return{type:[{text:"Reguler",value:"R"},{text:"Master",value:"M"}],breadcrumbs:[{title:"Dashboard",disabled:!1,href:"/dashboard"},{title:"Store",disabled:!1,href:"/toko"},{title:"Create",disabled:!0}]}}},E=Object.assign(R,{props:{id:{type:String,required:!0}},setup(p){const a=y({code:null,owner_id:p.id,name:null,address:null,phone:null,phone_with_whatsapp:null,type:null,taxpayer_identification_number:null}),c=()=>{a.post("/member/toko",{onSuccess:()=>{B.visit("/member")}})};return(m,l)=>{const d=s("v-text-field"),n=s("v-col"),f=s("v-checkbox"),v=s("v-select"),b=s("v-row"),V=s("v-card-text"),g=s("v-spacer"),u=s("v-btn"),h=s("v-card-actions"),x=s("v-form"),w=s("v-card");return C(),k(T,null,[e(t(S),{title:"Create Store"}),e(M,null,{default:o(()=>[_("div",j,[F,e(O,{items:m.breadcrumbs,class:"pa-0 mt-1"},null,8,["items"])]),e(w,null,{default:o(()=>[e(x,{onSubmit:U(c,["prevent"])},{default:o(()=>[e(V,null,{default:o(()=>[e(b,null,{default:o(()=>[e(n,{cols:"12",sm:"12",md:"6"},{default:o(()=>[e(d,{modelValue:t(a).code,"onUpdate:modelValue":l[0]||(l[0]=r=>t(a).code=r),label:"Code",variant:"underlined","error-messages":t(a).errors.code},null,8,["modelValue","error-messages"])]),_:1}),e(n,{cols:"12",sm:"12",md:"6"},{default:o(()=>[e(d,{modelValue:t(a).name,"onUpdate:modelValue":l[1]||(l[1]=r=>t(a).name=r),label:"Name",variant:"underlined","error-messages":t(a).errors.name},null,8,["modelValue","error-messages"])]),_:1}),e(n,{cols:"12",sm:"12",md:"12"},{default:o(()=>[e(d,{modelValue:t(a).address,"onUpdate:modelValue":l[2]||(l[2]=r=>t(a).address=r),label:"Address",variant:"underlined","error-messages":t(a).errors.address},null,8,["modelValue","error-messages"])]),_:1}),e(n,{cols:"12",sm:"12",md:"6"},{default:o(()=>[e(d,{modelValue:t(a).phone,"onUpdate:modelValue":l[3]||(l[3]=r=>t(a).phone=r),label:"Phone",variant:"underlined","error-messages":t(a).errors.phone},null,8,["modelValue","error-messages"])]),_:1}),e(n,{cols:"12",sm:"12",md:"6"},{default:o(()=>[e(f,{modelValue:t(a).phone_with_whatsapp,"onUpdate:modelValue":l[4]||(l[4]=r=>t(a).phone_with_whatsapp=r),label:"Whatsapp",value:"1","error-messages":t(a).errors.phone_with_whatsapp},null,8,["modelValue","error-messages"])]),_:1}),e(n,{cols:"12",sm:"12",md:"6"},{default:o(()=>[e(v,{modelValue:t(a).type,"onUpdate:modelValue":l[5]||(l[5]=r=>t(a).type=r),items:m.type,"item-title":"text","item-value":"value",label:"Type",variant:"underlined","error-messages":t(a).errors.type},null,8,["modelValue","items","error-messages"])]),_:1}),e(n,{cols:"12",sm:"12",md:"6"},{default:o(()=>[e(d,{modelValue:t(a).taxpayer_identification_number,"onUpdate:modelValue":l[6]||(l[6]=r=>t(a).taxpayer_identification_number=r),label:"Number Tax",variant:"underlined","error-messages":t(a).errors.taxpayer_identification_number},null,8,["modelValue","error-messages"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(g),e(t(N),{href:"/member",as:"div"},{default:o(()=>[e(u,{text:""},{default:o(()=>[i("Cancel")]),_:1})]),_:1}),e(u,{type:"submit",color:"primary"},{default:o(()=>[i("Create")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{E as default};