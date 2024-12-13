import{_ as w}from"./AuthenticatedLayout-CrMmzawR.js";import{_ as S}from"./Breadcrumbs-eqMAb9UO.js";import{k as c,o as _,f as M,a,u as g,Z as I,w as t,b as f,j as b,d as m,t as h,c as v,F as C}from"./app-DFg3Xq1j.js";const P={class:"mb-5"},V=f("h5",{class:"text-h5 font-weight-bold"},"Paket",-1),L={class:"d-flex flex-wrap align-center"},A={style:{"white-space":"nowrap"}},T={style:{"white-space":"nowrap"}},N={style:{"white-space":"nowrap","text-align":"right"}},B={name:"PaketIndex",props:{data:{type:Object}},data(){return{headers:[{title:"Name",key:"name"},{title:"Price",key:"price"},{title:"Status",key:"is_enabled"},{title:"Action",key:"action",sortable:!1}],breadcrumbs:[{title:"Dashboard",disabled:!1,href:"/dashboard"},{title:"Paket",disabled:!0}],isLoadingTable:!1,search:null,deleteDialog:!1,isLoading:!1,deleteId:null}},methods:{loadItems({page:n,itemsPerPage:e,sortBy:l,search:d}){this.isLoadingTable=!0;var r={page:n,limit:e,sort:l[0]};d&&(r.search=d),this.$inertia.get("/paket",r,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{this.isLoadingTable=!1}})},deleteItem(n){this.deleteId=n.id,this.deleteDialog=!0},submitDelete(){this.isLoading=!0,this.$inertia.delete(`/paket/${this.deleteId}`,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{this.isLoading=!1,this.deleteDialog=!1}})},formatDate(n){const e=new Date(n),l=e.getDate().toString().padStart(2,"0"),d=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getFullYear(),s=e.getHours().toString().padStart(2,"0"),i=e.getMinutes().toString().padStart(2,"0");return`${l}-${d}-${r} ${s}:${i}`},formatDate2(n){const e=new Date(n),d=new Date-e,r=Math.floor(d/1e3),s=Math.floor(r/60),i=Math.floor(s/60),p=Math.floor(i/24),u=Math.floor(p/30);return u>0?`${u} months ago`:p>0?`${p} days ago`:i>0?`${i} hours ago`:s>0?`${s} minutes ago`:`${r} seconds ago`},formatMoney(n){const e=n.toString(),l=e.startsWith("-"),d=l?e.slice(1):e,[r,s]=d.split(".");let i=r.replace(/\B(?=(\d{3})+(?!\d))/g,".");const p=s?`.${s}`:".00";let u=i+p;return u=`Rp ${l?"-":""}${u}`,u}}},H=Object.assign(B,{setup(n){return(e,l)=>{const d=c("v-text-field"),r=c("v-spacer"),s=c("v-btn"),i=c("v-icon"),p=c("v-data-table-server"),u=c("v-card"),k=c("v-card-text"),y=c("v-card-actions"),$=c("v-dialog"),D=c("v-row");return _(),M(C,null,[a(g(I),{title:"Paket"}),a(w,null,{default:t(()=>[f("div",P,[V,a(S,{items:e.breadcrumbs,class:"pa-0 mt-1"},null,8,["items"])]),a(u,{class:"pa-4"},{default:t(()=>[f("div",L,[a(d,{modelValue:e.search,"onUpdate:modelValue":l[0]||(l[0]=o=>e.search=o),label:"Search",variant:"underlined","prepend-inner-icon":"mdi-magnify","hide-details":"",clearable:"","single-line":""},null,8,["modelValue"]),a(r),a(g(b),{href:"/paket/create",as:"div"},{default:t(()=>[a(s,{color:"primary"},{default:t(()=>[m("Create")]),_:1})]),_:1})]),a(p,{items:n.data.data,"items-length":n.data.total,headers:e.headers,search:e.search,class:"elevation-0",loading:e.isLoadingTable,"onUpdate:options":e.loadItems},{"item.created_at":t(({item:o})=>[f("div",A,h(e.formatDate(o.created_at)),1),f("div",T,h(e.formatDate2(o.created_at)),1)]),"item.price":t(({item:o})=>[f("div",N,h(e.formatMoney(o.price)),1)]),"item.is_enabled":t(({item:o})=>[f("div",null,[o.is_enabled==1?(_(),v(s,{key:0,color:"success"},{default:t(()=>[m("Aktif")]),_:1})):(_(),v(s,{key:1,color:"error"},{default:t(()=>[m("Inactive")]),_:1}))])]),"item.store.id":t(({item:o})=>[f("div",null,[o.store?(_(),v(s,{key:0,color:"success"},{default:t(()=>[m("Available")]),_:1})):(_(),v(s,{key:1,color:"error"},{default:t(()=>[m("Not Available")]),_:1}))])]),"item.gender":t(({item:o})=>[m(h(o.gender=="male"?"Male":"Female"),1)]),"item.action":t(({item:o})=>[a(g(b),{href:`/paket/${o.id}/edit`,as:"button"},{default:t(()=>[a(i,{color:"warning",icon:"mdi-pencil",size:"small"})]),_:2},1032,["href"]),a(g(b),{href:`/paket/${o.id}/edit`,as:"button"},{default:t(()=>[a(i,{color:"info",icon:"mdi-eye",size:"small"})]),_:2},1032,["href"]),a(i,{class:"ml-2",color:"error",icon:"mdi-delete",size:"small",onClick:j=>e.deleteItem(o)},null,8,["onClick"])]),_:2},1032,["items","items-length","headers","search","loading","onUpdate:options"])]),_:1}),a(D,{justify:"center"},{default:t(()=>[a($,{modelValue:e.deleteDialog,"onUpdate:modelValue":l[2]||(l[2]=o=>e.deleteDialog=o),persistent:"",width:"auto"},{default:t(()=>[a(u,null,{default:t(()=>[a(k,null,{default:t(()=>[m("Are you sure you want to delete this item?")]),_:1}),a(y,null,{default:t(()=>[a(r),a(s,{color:"error",text:"",onClick:l[1]||(l[1]=o=>e.deleteDialog=!1)},{default:t(()=>[m("Cancel")]),_:1}),a(s,{color:"primary",loading:e.isLoading,text:"",onClick:e.submitDelete},{default:t(()=>[m("Delete")]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)}}});export{H as default};
