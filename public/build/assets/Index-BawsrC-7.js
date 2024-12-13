import{_ as S}from"./AuthenticatedLayout-CrMmzawR.js";import{_ as $}from"./Breadcrumbs-eqMAb9UO.js";import{k as u,o as y,f as k,a as t,u as f,Z as O,w as e,b as l,j as p,d as r,t as h,c as v,F as L}from"./app-DFg3Xq1j.js";const C={class:"mb-5"},V=l("h5",{class:"text-h5 font-weight-bold"},"Order",-1),E={class:"d-flex flex-wrap align-center"},I={style:{display:"flex","flex-direction":"row",gap:"10px"}},M={style:{display:"flex","align-items":"center"}},T=l("span",{style:{"margin-left":"5px"}},"20 Orders",-1),N=l("div",{style:{display:"flex","align-items":"center"}},[l("span",{style:{"margin-left":"5px"}},"TOTAL")],-1),z={style:{display:"flex","align-items":"center"}},A=l("span",{style:{"margin-left":"5px"}},"6 Orders",-1),B=l("div",{style:{display:"flex","align-items":"center"}},[l("span",{style:{"margin-left":"5px"}},"PENDING")],-1),j={style:{display:"flex","align-items":"center"}},P=l("span",{style:{"margin-left":"5px"}},"2 Orders",-1),U=l("div",{style:{display:"flex","align-items":"center"}},[l("span",{style:{"margin-left":"5px"}},"PROCESSED")],-1),F={style:{display:"flex","align-items":"center"}},R=l("span",{style:{"margin-left":"5px"}},"3 Orders",-1),H=l("div",{style:{display:"flex","align-items":"center"}},[l("span",{style:{"margin-left":"5px"}},"ON DELIVERY")],-1),Y={style:{display:"flex","align-items":"center"}},G=l("span",{style:{"margin-left":"5px"}},"5 Orders",-1),Z=l("div",{style:{display:"flex","align-items":"center"}},[l("span",{style:{"margin-left":"5px"}},"DELIVERED")],-1),q={style:{display:"flex","align-items":"center"}},J=l("span",{style:{"margin-left":"5px"}},"4 Orders",-1),K=l("div",{style:{display:"flex","align-items":"center"}},[l("span",{style:{"margin-left":"5px"}},"CANCELLED")],-1),Q={name:"OrderIndex",props:{data:{type:Object}},data(){return{headers:[{title:"Date",key:"created_at"},{title:"Customer",key:"seller.name"},{title:"Status",key:"status"},{title:"Action",key:"action",sortable:!1}],breadcrumbs:[{title:"Dashboard",disabled:!1,href:"/dashboard"},{title:"Order",disabled:!0}],isLoadingTable:!1,search:null,deleteDialog:!1,isLoading:!1,deleteId:null}},methods:{loadItems({page:o,itemsPerPage:s,sortBy:d,search:_}){this.isLoadingTable=!0;var m={page:o,limit:s,sort:d[0]};_&&(m.search=_),this.$inertia.get("/order",m,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{this.isLoadingTable=!1}})},deleteItem(o){this.deleteId=o.id,this.deleteDialog=!0},submitDelete(){this.isLoading=!0,this.$inertia.delete(`/order/${this.deleteId}`,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{this.isLoading=!1,this.deleteDialog=!1}})},formatDate(o){const s=new Date(o),d=s.getDate().toString().padStart(2,"0"),_=(s.getMonth()+1).toString().padStart(2,"0"),m=s.getFullYear(),c=s.getHours().toString().padStart(2,"0"),i=s.getMinutes().toString().padStart(2,"0");return`${d}-${_}-${m} ${c}:${i}`},formatDate2(o){const s=new Date(o),_=new Date-s,m=Math.floor(_/1e3),c=Math.floor(m/60),i=Math.floor(c/60),n=Math.floor(i/24),g=Math.floor(n/30);return g>0?`${g} months ago`:n>0?`${n} days ago`:i>0?`${i} hours ago`:c>0?`${c} minutes ago`:`${m} seconds ago`},addThousandSeparator(o){return o===null?"":o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},te=Object.assign(Q,{setup(o){return(s,d)=>{const _=u("v-text-field"),m=u("v-spacer"),c=u("v-btn"),i=u("v-icon"),n=u("v-card"),g=u("v-data-table-server"),b=u("v-card-text"),x=u("v-card-actions"),D=u("v-dialog"),w=u("v-row");return y(),k(L,null,[t(f(O),{title:"Order"}),t(S,null,{default:e(()=>[l("div",C,[V,t($,{items:s.breadcrumbs,class:"pa-0 mt-1"},null,8,["items"])]),t(n,{class:"pa-4"},{default:e(()=>[l("div",E,[t(_,{modelValue:s.search,"onUpdate:modelValue":d[0]||(d[0]=a=>s.search=a),label:"Search",variant:"underlined","prepend-inner-icon":"mdi-magnify","hide-details":"",clearable:"","single-line":""},null,8,["modelValue"]),t(m),t(f(p),{href:"/order/create",as:"div"},{default:e(()=>[t(c,{color:"primary"},{default:e(()=>[r("Create")]),_:1})]),_:1})]),l("div",I,[t(n,{width:"200"},{title:e(()=>[l("div",M,[t(i,{color:"primary",size:"small",style:{"vertical-align":"middle"}},{default:e(()=>[r("mdi-basket")]),_:1}),T])]),subtitle:e(()=>[N]),_:1}),t(n,{width:"200"},{title:e(()=>[l("div",z,[t(i,{color:"warning",size:"small",style:{"vertical-align":"middle"}},{default:e(()=>[r("mdi-clock")]),_:1}),A])]),subtitle:e(()=>[B]),_:1}),t(n,{width:"200"},{title:e(()=>[l("div",j,[t(i,{color:"primary",size:"small",style:{"vertical-align":"middle"}},{default:e(()=>[r("mdi-cogs")]),_:1}),P])]),subtitle:e(()=>[U]),_:1}),t(n,{width:"200"},{title:e(()=>[l("div",F,[t(i,{color:"primary",size:"small",style:{"vertical-align":"middle"}},{default:e(()=>[r("mdi-truck-delivery")]),_:1}),R])]),subtitle:e(()=>[H]),_:1}),t(n,{width:"200"},{title:e(()=>[l("div",Y,[t(i,{color:"success",size:"small",style:{"vertical-align":"middle"}},{default:e(()=>[r("mdi-check-circle")]),_:1}),G])]),subtitle:e(()=>[Z]),_:1}),t(n,{width:"200"},{title:e(()=>[l("div",q,[t(i,{color:"danger",size:"small",style:{"vertical-align":"middle"}},{default:e(()=>[r("mdi-close-circle")]),_:1}),J])]),subtitle:e(()=>[K]),_:1})]),t(g,{items:o.data.data,"items-length":o.data.total,headers:s.headers,search:s.search,class:"elevation-0",loading:s.isLoadingTable,"onUpdate:options":s.loadItems},{"item.name":e(({item:a})=>[l("div",null,h(a.name),1),l("div",null,h(a.code),1)]),"item.seller.name":e(({item:a})=>[l("div",null,h(a.seller.name),1),l("div",null,h(a.seller.user.name),1)]),"item.created_at":e(({item:a})=>[l("div",null,h(s.formatDate(a.created_at)),1),l("div",null,h(a.code),1)]),"item.is_blocked":e(({item:a})=>[l("div",null,[a.is_blocked===0?(y(),v(c,{key:0,color:"success"},{default:e(()=>[r("Active")]),_:1})):(y(),v(c,{key:1,color:"error"},{default:e(()=>[r("Inactive")]),_:1}))])]),"item.action":e(({item:a})=>[t(f(p),{href:`/order/${a.id}/edit`,as:"button",title:"Cancel"},{default:e(()=>[t(i,{color:"warning",icon:"mdi-close"})]),_:2},1032,["href"]),t(f(p),{href:`/order/${a.id}/edit`,as:"button",title:"Process"},{default:e(()=>[t(i,{color:"info",icon:"mdi-check"})]),_:2},1032,["href"]),t(f(p),{href:`/order/${a.id}/edit`,as:"button",title:"View"},{default:e(()=>[t(i,{color:"success",icon:"mdi-eye"})]),_:2},1032,["href"]),t(f(p),{href:`/order/${a.id}/edit`,as:"button",title:"Deliver"},{default:e(()=>[t(i,{color:"danger",icon:"mdi-truck-delivery"})]),_:2},1032,["href"]),t(f(p),{href:`/order/${a.id}`,as:"button",title:"Download"},{default:e(()=>[t(i,{color:"info",icon:"mdi-download"})]),_:2},1032,["href"]),t(f(p),{href:`/order/${a.id}`,as:"button",title:"Print"},{default:e(()=>[t(i,{color:"info",icon:"mdi-printer"})]),_:2},1032,["href"])]),_:2},1032,["items","items-length","headers","search","loading","onUpdate:options"])]),_:1}),t(w,{justify:"center"},{default:e(()=>[t(D,{modelValue:s.deleteDialog,"onUpdate:modelValue":d[2]||(d[2]=a=>s.deleteDialog=a),persistent:"",width:"auto"},{default:e(()=>[t(n,null,{default:e(()=>[t(b,null,{default:e(()=>[r("Are you sure you want to delete this item?")]),_:1}),t(x,null,{default:e(()=>[t(m),t(c,{color:"error",text:"",onClick:d[1]||(d[1]=a=>s.deleteDialog=!1)},{default:e(()=>[r("Cancel")]),_:1}),t(c,{color:"primary",loading:s.isLoading,text:"",onClick:s.submitDelete},{default:e(()=>[r("Delete")]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)}}});export{te as default};