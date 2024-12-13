import{_ as C}from"./AuthenticatedLayout-CrMmzawR.js";import{_ as V}from"./Breadcrumbs-eqMAb9UO.js";import{k as c,o as v,f as I,a as t,u as _,Z as L,w as o,b as u,j as w,d as m,t as f,c as S,F as P,m as M}from"./app-DFg3Xq1j.js";const T={class:"mb-5"},A=u("h5",{class:"text-h5 font-weight-bold"},"Store",-1),U={class:"d-flex flex-wrap align-center"},j={name:"StoreIndex",props:{data:{type:Object}},data(){return{passwordDialog:!1,password:"",userId:null,headers:[{title:"Name",key:"name"},{title:"Owner",key:"member.name"},{title:"Address",key:"address"},{title:"Phone",key:"phone"},{title:"Status",key:"is_blocked"},{title:"Activation Date",key:"created_at"},{title:"Action",key:"action",sortable:!1}],breadcrumbs:[{title:"Dashboard",disabled:!1,href:"/dashboard"},{title:"Store",disabled:!0}],isLoadingTable:!1,search:null,deleteDialog:!1,isLoading:!1,deleteId:null}},methods:{shareWhatsApp(s,e){const l=encodeURIComponent(`https://archonproject.com/demo-moment-stockist/${e}`),r=`https://wa.me/${s}?text=${l}`;window.open(r,"_blank")},link(s){const e=`https://archonproject.com/demo-moment-stockist/${encodeURIComponent(s)}`;window.open(e,"_blank")},cancelPassword(){this.passwordDialog=!1,this.password=""},showPasswordDialog(s){this.userId=s,this.passwordDialog=!0},submitPassword(){this.isLoading=!0,this.$inertia.post(`/store/activate/${this.userId}`,{password:this.password},{onSuccess:()=>{this.isLoading=!1,this.passwordDialog=!1},onError:s=>{this.isLoading=!1,M().error("Password Anda Salah")}})},loadItems({page:s,itemsPerPage:e,sortBy:l,search:r}){this.isLoadingTable=!0;var i={page:s,limit:e,sort:l[0]};r&&(i.search=r),this.$inertia.get("/store",i,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{this.isLoadingTable=!1}})},deleteItem(s){this.deleteId=s.id,this.deleteDialog=!0},submitDelete(){this.isLoading=!0,this.$inertia.delete(`/store/${this.deleteId}`,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{this.isLoading=!1,this.deleteDialog=!1}})},formatDate(s){const e=new Date(s),l=e.getDate().toString().padStart(2,"0"),r=(e.getMonth()+1).toString().padStart(2,"0"),i=e.getFullYear(),n=e.getHours().toString().padStart(2,"0"),d=e.getMinutes().toString().padStart(2,"0");return`${l}-${r}-${i} ${n}:${d}`},formatDate2(s){const e=new Date(s),r=new Date-e,i=Math.floor(r/1e3),n=Math.floor(i/60),d=Math.floor(n/60),h=Math.floor(d/24),p=Math.floor(h/30);return p>0?`${p} months ago`:h>0?`${h} days ago`:d>0?`${d} hours ago`:n>0?`${n} minutes ago`:`${i} seconds ago`},addThousandSeparator(s){return s===null?"":s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},E=Object.assign(j,{setup(s){return(e,l)=>{const r=c("v-text-field"),i=c("v-spacer"),n=c("v-btn"),d=c("v-icon"),h=c("v-data-table-server"),p=c("v-card"),b=c("v-card-text"),k=c("v-card-actions"),D=c("v-dialog"),$=c("v-row"),y=c("v-card-title");return v(),I(P,null,[t(_(L),{title:"Store"}),t(C,null,{default:o(()=>[u("div",T,[A,t(V,{items:e.breadcrumbs,class:"pa-0 mt-1"},null,8,["items"])]),t(p,{class:"pa-4"},{default:o(()=>[u("div",U,[t(r,{modelValue:e.search,"onUpdate:modelValue":l[0]||(l[0]=a=>e.search=a),label:"Search",variant:"underlined","prepend-inner-icon":"mdi-magnify","hide-details":"",clearable:"","single-line":""},null,8,["modelValue"]),t(i),t(_(w),{href:"/store/create",as:"div"},{default:o(()=>[t(n,{color:"primary"},{default:o(()=>[m("Create")]),_:1})]),_:1})]),t(h,{items:s.data.data,"items-length":s.data.total,headers:e.headers,search:e.search,class:"elevation-0",loading:e.isLoadingTable,"onUpdate:options":e.loadItems},{"item.name":o(({item:a})=>[u("div",null,f(a.name),1),u("div",null,f(a.code),1)]),"item.member.name":o(({item:a})=>[u("div",null,f(a.member.name),1),u("div",null,f(a.member.user.name),1)]),"item.created_at":o(({item:a})=>[u("div",null,f(e.formatDate(a.created_at)),1),u("div",null,f(e.formatDate2(a.created_at)),1)]),"item.is_blocked":o(({item:a})=>[u("div",null,[a.is_blocked===0?(v(),S(n,{key:0,onClick:g=>e.showPasswordDialog(a.id),color:"success"},{default:o(()=>[m("Active")]),_:2},1032,["onClick"])):(v(),S(n,{key:1,color:"error",onClick:g=>e.showPasswordDialog(a.id)},{default:o(()=>[m("Inactive")]),_:2},1032,["onClick"]))])]),"item.action":o(({item:a})=>[t(_(w),{href:`/store/${a.id}/edit`,as:"button"},{default:o(()=>[t(d,{color:"warning",icon:"mdi-pencil",size:"small"})]),_:2},1032,["href"]),t(_(w),{href:`/store/${a.id}`,as:"button"},{default:o(()=>[t(d,{color:"info",icon:"mdi-eye",size:"small"})]),_:2},1032,["href"]),t(d,{color:"success",size:"small",onClick:g=>e.shareWhatsApp(a.phone,a.member.user.name),icon:"mdi-whatsapp"},null,8,["onClick"]),t(d,{onClick:g=>e.link(a.member.user.name),color:"info",icon:"mdi-link",size:"small"},null,8,["onClick"]),t(d,{class:"ml-2",color:"error",icon:"mdi-delete",size:"small",onClick:g=>e.deleteItem(a)},null,8,["onClick"])]),_:2},1032,["items","items-length","headers","search","loading","onUpdate:options"])]),_:1}),t($,{justify:"center"},{default:o(()=>[t(D,{modelValue:e.deleteDialog,"onUpdate:modelValue":l[2]||(l[2]=a=>e.deleteDialog=a),persistent:"",width:"auto"},{default:o(()=>[t(p,null,{default:o(()=>[t(b,null,{default:o(()=>[m("Are you sure you want to delete this item?")]),_:1}),t(k,null,{default:o(()=>[t(i),t(n,{color:"error",text:"",onClick:l[1]||(l[1]=a=>e.deleteDialog=!1)},{default:o(()=>[m("Cancel")]),_:1}),t(n,{color:"primary",loading:e.isLoading,text:"",onClick:e.submitDelete},{default:o(()=>[m("Delete")]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),t($,{justify:"center"},{default:o(()=>[t(D,{modelValue:e.passwordDialog,"onUpdate:modelValue":l[4]||(l[4]=a=>e.passwordDialog=a),persistent:"",width:"400px"},{default:o(()=>[t(p,null,{default:o(()=>[t(y,null,{default:o(()=>[m("Enter Password")]),_:1}),t(b,null,{default:o(()=>[t(r,{modelValue:e.password,"onUpdate:modelValue":l[3]||(l[3]=a=>e.password=a),label:"Password",type:"password"},null,8,["modelValue"])]),_:1}),t(k,null,{default:o(()=>[t(n,{color:"error",text:"",onClick:e.cancelPassword},{default:o(()=>[m("Cancel")]),_:1},8,["onClick"]),t(i),t(n,{color:"primary",onClick:e.submitPassword},{default:o(()=>[m("Submit")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)}}});export{E as default};
