import{_ as S}from"./AuthenticatedLayout-CrMmzawR.js";import{_ as k}from"./Breadcrumbs-eqMAb9UO.js";import{k as c,o as _,f as M,a as o,u as v,Z as B,w as t,b as p,d as u,t as h,l as C,c as g,j as y,F as I}from"./app-DFg3Xq1j.js";const V={class:"mb-5"},L=p("h5",{class:"text-h5 font-weight-bold"},"Balance",-1),T={class:"d-flex flex-wrap align-center"},A={style:{"white-space":"nowrap"}},F={style:{"white-space":"nowrap"}},N={style:{"white-space":"nowrap","text-align":"right"}},j={name:"BalanceIndex",props:{data:{type:Object}},data(){return{headers:[{title:"Code",key:"code"},{title:"Owner",key:"owner.name"},{title:"Date",key:"created_at"},{title:"Type",key:"type"},{title:"Amount",key:"amount"}],breadcrumbs:[{title:"Dashboard",disabled:!1,href:"/dashboard"},{title:"Balance",disabled:!0}],isLoadingTable:!1,search:null,deleteDialog:!1,isLoading:!1,deleteId:null}},methods:{loadItems({page:n,itemsPerPage:e,sortBy:s,search:d}){this.isLoadingTable=!0;var r={page:n,limit:e,sort:s[0]};d&&(r.search=d),this.$inertia.get("/balance",r,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{this.isLoadingTable=!1}})},deleteItem(n){this.deleteId=n.id,this.deleteDialog=!0},submitDelete(){this.isLoading=!0,this.$inertia.delete(`/balance/${this.deleteId}`,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{this.isLoading=!1,this.deleteDialog=!1}})},formatDate(n){const e=new Date(n),s=e.getDate().toString().padStart(2,"0"),d=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getFullYear(),l=e.getHours().toString().padStart(2,"0"),i=e.getMinutes().toString().padStart(2,"0");return`${s}-${d}-${r} ${l}:${i}`},formatDate2(n){const e=new Date(n),d=new Date-e,r=Math.floor(d/1e3),l=Math.floor(r/60),i=Math.floor(l/60),f=Math.floor(i/24),m=Math.floor(f/30);return m>0?`${m} months ago`:f>0?`${f} days ago`:i>0?`${i} hours ago`:l>0?`${l} minutes ago`:`${r} seconds ago`},formatMoney(n){const e=n.toString(),s=e.startsWith("-"),d=s?e.slice(1):e,[r,l]=d.split(".");let i=r.replace(/\B(?=(\d{3})+(?!\d))/g,".");const f=l?`.${l}`:".00";let m=i+f;return m=`Rp ${s?"-":""}${m}`,m}}},H=Object.assign(j,{setup(n){return(e,s)=>{const d=c("v-text-field"),r=c("v-spacer"),l=c("v-btn"),i=c("v-icon"),f=c("v-data-table-server"),m=c("v-card"),b=c("v-card-text"),D=c("v-card-actions"),w=c("v-dialog"),$=c("v-row");return _(),M(I,null,[o(v(B),{title:"Balance"}),o(S,null,{default:t(()=>[p("div",V,[L,o(k,{items:e.breadcrumbs,class:"pa-0 mt-1"},null,8,["items"])]),o(m,{class:"pa-4"},{default:t(()=>[p("div",T,[o(d,{modelValue:e.search,"onUpdate:modelValue":s[0]||(s[0]=a=>e.search=a),label:"Search",variant:"underlined","prepend-inner-icon":"mdi-magnify","hide-details":"",clearable:"","single-line":""},null,8,["modelValue"]),o(r),o(l,{color:"primary"},{default:t(()=>[u("Filter")]),_:1})]),o(f,{items:n.data.data,"items-length":n.data.total,headers:e.headers,search:e.search,class:"elevation-0",loading:e.isLoadingTable,"onUpdate:options":e.loadItems},{"item.created_at":t(({item:a})=>[p("div",A,h(e.formatDate(a.created_at)),1),p("div",F,h(e.formatDate2(a.created_at)),1)]),"item.amount":t(({item:a})=>[p("div",N,[p("span",{style:C({color:a.amount<0?"red":"inherit"})},h(e.formatMoney(a.amount)),5)])]),"item.type":t(({item:a})=>[p("div",null,[a.type=="D"?(_(),g(l,{key:0,color:"warning"},{default:t(()=>[u("Deposit")]),_:1})):a.type=="B"?(_(),g(l,{key:1,color:"success"},{default:t(()=>[u("Barcode")]),_:1})):(_(),g(l,{key:2,color:"error"},{default:t(()=>[u("Starter Kit")]),_:1}))])]),"item.store.id":t(({item:a})=>[p("div",null,[a.store?(_(),g(l,{key:0,color:"success"},{default:t(()=>[u("Available")]),_:1})):(_(),g(l,{key:1,color:"error"},{default:t(()=>[u("Not Available")]),_:1}))])]),"item.gender":t(({item:a})=>[u(h(a.gender=="male"?"Male":"Female"),1)]),"item.action":t(({item:a})=>[o(v(y),{href:`/balance/${a.id}/edit`,as:"button"},{default:t(()=>[o(i,{color:"warning",icon:"mdi-pencil",size:"small"})]),_:2},1032,["href"]),o(v(y),{href:`/balance/${a.id}/edit`,as:"button"},{default:t(()=>[o(i,{color:"info",icon:"mdi-eye",size:"small"})]),_:2},1032,["href"]),o(i,{class:"ml-2",color:"error",icon:"mdi-delete",size:"small",onClick:z=>e.deleteItem(a)},null,8,["onClick"])]),_:2},1032,["items","items-length","headers","search","loading","onUpdate:options"])]),_:1}),o($,{justify:"center"},{default:t(()=>[o(w,{modelValue:e.deleteDialog,"onUpdate:modelValue":s[2]||(s[2]=a=>e.deleteDialog=a),persistent:"",width:"auto"},{default:t(()=>[o(m,null,{default:t(()=>[o(b,null,{default:t(()=>[u("Are you sure you want to delete this item?")]),_:1}),o(D,null,{default:t(()=>[o(r),o(l,{color:"error",text:"",onClick:s[1]||(s[1]=a=>e.deleteDialog=!1)},{default:t(()=>[u("Cancel")]),_:1}),o(l,{color:"primary",loading:e.isLoading,text:"",onClick:e.submitDelete},{default:t(()=>[u("Delete")]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)}}});export{H as default};