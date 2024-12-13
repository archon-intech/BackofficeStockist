import{_ as P}from"./AuthenticatedLayout-CrMmzawR.js";import{_ as C}from"./Breadcrumbs-eqMAb9UO.js";import{k as u,o as h,f as V,a as t,u as g,Z as I,w as a,b as p,d as m,t as _,l as M,c as $,j as S,F as L,m as T}from"./app-DFg3Xq1j.js";const A={class:"mb-5"},U=p("h5",{class:"text-h5 font-weight-bold"},"Promo",-1),j={class:"d-flex flex-wrap align-center"},B={style:{"white-space":"nowrap"}},z={style:{"white-space":"nowrap"}},F={style:{"white-space":"nowrap","text-align":"right"}},N={name:"PromoIndex",props:{data:{type:Object}},data(){return{passwordDialog:!1,password:"",userId:null,headers:[{title:"Requirement",key:"requirement"},{title:"Status",key:"status"},{title:"Action",key:"action",sortable:!1}],breadcrumbs:[{title:"Dashboard",disabled:!1,href:"/dashboard"},{title:"Promo",disabled:!0}],isLoadingTable:!1,search:null,deleteDialog:!1,isLoading:!1,deleteId:null}},methods:{cancelPassword(){this.passwordDialog=!1,this.password=""},showPasswordDialog(r){this.userId=r,this.passwordDialog=!0},submitPassword(){this.isLoading=!0,this.$inertia.post(`/promo/activate/${this.userId}`,{password:this.password},{onSuccess:()=>{this.isLoading=!1,this.passwordDialog=!1},onError:r=>{this.isLoading=!1,T().error("Password Anda Salah")}})},loadItems({page:r,itemsPerPage:e,sortBy:s,search:i}){this.isLoadingTable=!0;var n={page:r,limit:e,sort:s[0]};i&&(n.search=i),this.$inertia.get("/promo",n,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{this.isLoadingTable=!1}})},deleteItem(r){this.deleteId=r.id,this.deleteDialog=!0},submitDelete(){this.isLoading=!0,this.$inertia.delete(`/promo/${this.deleteId}`,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{this.isLoading=!1,this.deleteDialog=!1}})},formatDate(r){const e=new Date(r),s=e.getDate().toString().padStart(2,"0"),i=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getFullYear(),l=e.getHours().toString().padStart(2,"0"),d=e.getMinutes().toString().padStart(2,"0");return`${s}-${i}-${n} ${l}:${d}`},formatDate2(r){const e=new Date(r),i=new Date-e,n=Math.floor(i/1e3),l=Math.floor(n/60),d=Math.floor(l/60),f=Math.floor(d/24),c=Math.floor(f/30);return c>0?`${c} months ago`:f>0?`${f} days ago`:d>0?`${d} hours ago`:l>0?`${l} minutes ago`:`${n} seconds ago`},formatMoney(r){const e=r.toString(),s=e.startsWith("-"),i=s?e.slice(1):e,[n,l]=i.split(".");let d=n.replace(/\B(?=(\d{3})+(?!\d))/g,".");const f=l?`.${l}`:".00";let c=d+f;return c=`Rp ${s?"-":""}${c}`,c}}},O=Object.assign(N,{setup(r){return(e,s)=>{const i=u("v-text-field"),n=u("v-spacer"),l=u("v-btn"),d=u("v-icon"),f=u("v-data-table-server"),c=u("v-card"),w=u("v-card-text"),v=u("v-card-actions"),b=u("v-dialog"),D=u("v-row"),k=u("v-card-title");return h(),V(L,null,[t(g(I),{title:"Promo"}),t(P,null,{default:a(()=>[p("div",A,[U,t(C,{items:e.breadcrumbs,class:"pa-0 mt-1"},null,8,["items"])]),t(c,{class:"pa-4"},{default:a(()=>[p("div",j,[t(i,{modelValue:e.search,"onUpdate:modelValue":s[0]||(s[0]=o=>e.search=o),label:"Search",variant:"underlined","prepend-inner-icon":"mdi-magnify","hide-details":"",clearable:"","single-line":""},null,8,["modelValue"]),t(n),t(l,{color:"primary"},{default:a(()=>[m("Filter")]),_:1})]),t(f,{items:r.data.data,"items-length":r.data.total,headers:e.headers,search:e.search,class:"elevation-0",loading:e.isLoadingTable,"onUpdate:options":e.loadItems},{"item.created_at":a(({item:o})=>[p("div",B,_(e.formatDate(o.created_at)),1),p("div",z,_(e.formatDate2(o.created_at)),1)]),"item.amount":a(({item:o})=>[p("div",F,[p("span",{style:M({color:o.amount<0?"red":"inherit"})},_(e.formatMoney(o.amount)),5)])]),"item.status":a(({item:o})=>[p("div",null,[o.status==1?(h(),$(l,{key:0,onClick:y=>e.showPasswordDialog(o.id),color:"success"},{default:a(()=>[m("Aktif")]),_:2},1032,["onClick"])):(h(),$(l,{key:1,color:"error",onClick:y=>e.showPasswordDialog(o.id)},{default:a(()=>[m("Inactive")]),_:2},1032,["onClick"]))])]),"item.action":a(({item:o})=>[t(g(S),{href:`/promo/${o.id}/edit`,as:"button"},{default:a(()=>[t(d,{color:"warning",icon:"mdi-pencil",size:"small"})]),_:2},1032,["href"]),t(g(S),{href:`/promo/${o.id}/edit`,as:"button"},{default:a(()=>[t(d,{color:"info",icon:"mdi-eye",size:"small"})]),_:2},1032,["href"]),t(d,{class:"ml-2",color:"error",icon:"mdi-delete",size:"small",onClick:y=>e.deleteItem(o)},null,8,["onClick"])]),_:2},1032,["items","items-length","headers","search","loading","onUpdate:options"])]),_:1}),t(D,{justify:"center"},{default:a(()=>[t(b,{modelValue:e.deleteDialog,"onUpdate:modelValue":s[2]||(s[2]=o=>e.deleteDialog=o),persistent:"",width:"auto"},{default:a(()=>[t(c,null,{default:a(()=>[t(w,null,{default:a(()=>[m("Are you sure you want to delete this item?")]),_:1}),t(v,null,{default:a(()=>[t(n),t(l,{color:"error",text:"",onClick:s[1]||(s[1]=o=>e.deleteDialog=!1)},{default:a(()=>[m("Cancel")]),_:1}),t(l,{color:"primary",loading:e.isLoading,text:"",onClick:e.submitDelete},{default:a(()=>[m("Delete")]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(D,{justify:"center"},{default:a(()=>[t(b,{modelValue:e.passwordDialog,"onUpdate:modelValue":s[4]||(s[4]=o=>e.passwordDialog=o),persistent:"",width:"400px"},{default:a(()=>[t(c,null,{default:a(()=>[t(k,null,{default:a(()=>[m("Enter Password")]),_:1}),t(w,null,{default:a(()=>[t(i,{modelValue:e.password,"onUpdate:modelValue":s[3]||(s[3]=o=>e.password=o),label:"Password",type:"password"},null,8,["modelValue"])]),_:1}),t(v,null,{default:a(()=>[t(l,{color:"error",text:"",onClick:e.cancelPassword},{default:a(()=>[m("Cancel")]),_:1},8,["onClick"]),t(n),t(l,{color:"primary",onClick:e.submitPassword},{default:a(()=>[m("Submit")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)}}});export{O as default};