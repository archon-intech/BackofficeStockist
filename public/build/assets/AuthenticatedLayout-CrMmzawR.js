import{k as R,o as N,c as J,w as v,a as d,u as w,j as k,z as q,A as Y,e as Q,r as Z,m as ee}from"./app-DFg3Xq1j.js";const te={__name:"NavigationMenu",setup($){return(_,C)=>{const p=R("v-list-item"),P=R("v-list");return N(),J(P,{nav:""},{default:v(()=>[d(w(k),{href:"/dashboard",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-view-dashboard",title:"Dashboard",link:""})]),_:1}),d(w(k),{href:"/profile",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-account",title:"Profile",link:""})]),_:1}),d(w(k),{href:"/member",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-account-group",title:"Member",link:""})]),_:1}),d(w(k),{href:"/product",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-package-variant",title:"Product",link:""})]),_:1}),d(w(k),{href:"/paket",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-package-variant",title:"Paket",link:""})]),_:1}),d(w(k),{href:"/member",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-gift",title:"Bonus",link:""})]),_:1}),d(w(k),{href:"/member",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-ticket",title:"Ticket",link:""})]),_:1}),d(w(k),{href:"/store",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-store",title:"Store",link:""})]),_:1}),d(w(k),{href:"/member",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-storefront",title:"Official Store Moment",link:""})]),_:1}),d(w(k),{href:"/order",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-cart",title:"Order",link:""})]),_:1}),d(w(k),{href:"/promo",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-tag",title:"Promo",link:""})]),_:1}),d(w(k),{href:"/balance",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-scale-balance",title:"Balance",link:""})]),_:1}),d(w(k),{href:"/member",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-wrench",title:"Automaintenance",link:""})]),_:1}),d(w(k),{href:"/member",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-file-document-outline",title:"Bukti Potong Pajak",link:""})]),_:1}),d(w(k),{href:"/deposit",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-currency-usd",title:"Deposit",link:""})]),_:1}),d(w(k),{href:"/barcode",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-barcode",title:"Barcode",link:""})]),_:1}),d(w(k),{href:"/member",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-account-settings",title:"Administrator",link:""})]),_:1}),d(w(k),{href:"/member",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-bank",title:"Bank",link:""})]),_:1}),d(w(k),{href:"/manufacture",method:"get",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-factory",title:"Manufacture",link:""})]),_:1}),d(w(k),{href:"/logout",method:"post",as:"div"},{default:v(()=>[d(p,{"prepend-icon":"mdi-exit-to-app",title:"Log Out",link:""})]),_:1})]),_:1})}}};var re={exports:{}};function ne($){throw new Error('Could not dynamically require "'+$+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var K={exports:{}},X;function ae(){return X||(X=1,function($,_){(function(C,p){$.exports=p()})(q,function(){var C=C||function(p,P){var b;if(typeof window<"u"&&window.crypto&&(b=window.crypto),typeof self<"u"&&self.crypto&&(b=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(b=globalThis.crypto),!b&&typeof window<"u"&&window.msCrypto&&(b=window.msCrypto),!b&&typeof q<"u"&&q.crypto&&(b=q.crypto),!b&&typeof ne=="function")try{b=Y}catch{}var L=function(){if(b){if(typeof b.getRandomValues=="function")try{return b.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof b.randomBytes=="function")try{return b.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},D=Object.create||function(){function e(){}return function(o){var s;return e.prototype=o,s=new e,e.prototype=null,s}}(),A={},i=A.lib={},z=i.Base=function(){return{extend:function(e){var o=D(this);return e&&o.mixIn(e),(!o.hasOwnProperty("init")||this.init===o.init)&&(o.init=function(){o.$super.init.apply(this,arguments)}),o.init.prototype=o,o.$super=this,o},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var o in e)e.hasOwnProperty(o)&&(this[o]=e[o]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),m=i.WordArray=z.extend({init:function(e,o){e=this.words=e||[],o!=P?this.sigBytes=o:this.sigBytes=e.length*4},toString:function(e){return(e||y).stringify(this)},concat:function(e){var o=this.words,s=e.words,c=this.sigBytes,u=e.sigBytes;if(this.clamp(),c%4)for(var h=0;h<u;h++){var H=s[h>>>2]>>>24-h%4*8&255;o[c+h>>>2]|=H<<24-(c+h)%4*8}else for(var S=0;S<u;S+=4)o[c+S>>>2]=s[S>>>2];return this.sigBytes+=u,this},clamp:function(){var e=this.words,o=this.sigBytes;e[o>>>2]&=4294967295<<32-o%4*8,e.length=p.ceil(o/4)},clone:function(){var e=z.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var o=[],s=0;s<e;s+=4)o.push(L());return new m.init(o,e)}}),g=A.enc={},y=g.Hex={stringify:function(e){for(var o=e.words,s=e.sigBytes,c=[],u=0;u<s;u++){var h=o[u>>>2]>>>24-u%4*8&255;c.push((h>>>4).toString(16)),c.push((h&15).toString(16))}return c.join("")},parse:function(e){for(var o=e.length,s=[],c=0;c<o;c+=2)s[c>>>3]|=parseInt(e.substr(c,2),16)<<24-c%8*4;return new m.init(s,o/2)}},B=g.Latin1={stringify:function(e){for(var o=e.words,s=e.sigBytes,c=[],u=0;u<s;u++){var h=o[u>>>2]>>>24-u%4*8&255;c.push(String.fromCharCode(h))}return c.join("")},parse:function(e){for(var o=e.length,s=[],c=0;c<o;c++)s[c>>>2]|=(e.charCodeAt(c)&255)<<24-c%4*8;return new m.init(s,o)}},f=g.Utf8={stringify:function(e){try{return decodeURIComponent(escape(B.stringify(e)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(e){return B.parse(unescape(encodeURIComponent(e)))}},l=i.BufferedBlockAlgorithm=z.extend({reset:function(){this._data=new m.init,this._nDataBytes=0},_append:function(e){typeof e=="string"&&(e=f.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(e){var o,s=this._data,c=s.words,u=s.sigBytes,h=this.blockSize,H=h*4,S=u/H;e?S=p.ceil(S):S=p.max((S|0)-this._minBufferSize,0);var T=S*h,I=p.min(T*4,u);if(T){for(var W=0;W<T;W+=h)this._doProcessBlock(c,W);o=c.splice(0,T),s.sigBytes-=I}return new m.init(o,I)},clone:function(){var e=z.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});i.Hasher=l.extend({cfg:z.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var o=this._doFinalize();return o},blockSize:16,_createHelper:function(e){return function(o,s){return new e.init(s).finalize(o)}},_createHmacHelper:function(e){return function(o,s){return new x.HMAC.init(e,s).finalize(o)}}});var x=A.algo={};return A}(Math);return C})}(K)),K.exports}(function($,_){(function(C,p){$.exports=p(ae())})(q,function(C){return function(p){var P=C,b=P.lib,L=b.WordArray,D=b.Hasher,A=P.algo,i=[];(function(){for(var f=0;f<64;f++)i[f]=p.abs(p.sin(f+1))*4294967296|0})();var z=A.MD5=D.extend({_doReset:function(){this._hash=new L.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(f,l){for(var x=0;x<16;x++){var e=l+x,o=f[e];f[e]=(o<<8|o>>>24)&16711935|(o<<24|o>>>8)&4278255360}var s=this._hash.words,c=f[l+0],u=f[l+1],h=f[l+2],H=f[l+3],S=f[l+4],T=f[l+5],I=f[l+6],W=f[l+7],O=f[l+8],j=f[l+9],F=f[l+10],U=f[l+11],V=f[l+12],E=f[l+13],M=f[l+14],G=f[l+15],t=s[0],r=s[1],n=s[2],a=s[3];t=m(t,r,n,a,c,7,i[0]),a=m(a,t,r,n,u,12,i[1]),n=m(n,a,t,r,h,17,i[2]),r=m(r,n,a,t,H,22,i[3]),t=m(t,r,n,a,S,7,i[4]),a=m(a,t,r,n,T,12,i[5]),n=m(n,a,t,r,I,17,i[6]),r=m(r,n,a,t,W,22,i[7]),t=m(t,r,n,a,O,7,i[8]),a=m(a,t,r,n,j,12,i[9]),n=m(n,a,t,r,F,17,i[10]),r=m(r,n,a,t,U,22,i[11]),t=m(t,r,n,a,V,7,i[12]),a=m(a,t,r,n,E,12,i[13]),n=m(n,a,t,r,M,17,i[14]),r=m(r,n,a,t,G,22,i[15]),t=g(t,r,n,a,u,5,i[16]),a=g(a,t,r,n,I,9,i[17]),n=g(n,a,t,r,U,14,i[18]),r=g(r,n,a,t,c,20,i[19]),t=g(t,r,n,a,T,5,i[20]),a=g(a,t,r,n,F,9,i[21]),n=g(n,a,t,r,G,14,i[22]),r=g(r,n,a,t,S,20,i[23]),t=g(t,r,n,a,j,5,i[24]),a=g(a,t,r,n,M,9,i[25]),n=g(n,a,t,r,H,14,i[26]),r=g(r,n,a,t,O,20,i[27]),t=g(t,r,n,a,E,5,i[28]),a=g(a,t,r,n,h,9,i[29]),n=g(n,a,t,r,W,14,i[30]),r=g(r,n,a,t,V,20,i[31]),t=y(t,r,n,a,T,4,i[32]),a=y(a,t,r,n,O,11,i[33]),n=y(n,a,t,r,U,16,i[34]),r=y(r,n,a,t,M,23,i[35]),t=y(t,r,n,a,u,4,i[36]),a=y(a,t,r,n,S,11,i[37]),n=y(n,a,t,r,W,16,i[38]),r=y(r,n,a,t,F,23,i[39]),t=y(t,r,n,a,E,4,i[40]),a=y(a,t,r,n,c,11,i[41]),n=y(n,a,t,r,H,16,i[42]),r=y(r,n,a,t,I,23,i[43]),t=y(t,r,n,a,j,4,i[44]),a=y(a,t,r,n,V,11,i[45]),n=y(n,a,t,r,G,16,i[46]),r=y(r,n,a,t,h,23,i[47]),t=B(t,r,n,a,c,6,i[48]),a=B(a,t,r,n,W,10,i[49]),n=B(n,a,t,r,M,15,i[50]),r=B(r,n,a,t,T,21,i[51]),t=B(t,r,n,a,V,6,i[52]),a=B(a,t,r,n,H,10,i[53]),n=B(n,a,t,r,F,15,i[54]),r=B(r,n,a,t,u,21,i[55]),t=B(t,r,n,a,O,6,i[56]),a=B(a,t,r,n,G,10,i[57]),n=B(n,a,t,r,I,15,i[58]),r=B(r,n,a,t,E,21,i[59]),t=B(t,r,n,a,S,6,i[60]),a=B(a,t,r,n,U,10,i[61]),n=B(n,a,t,r,h,15,i[62]),r=B(r,n,a,t,j,21,i[63]),s[0]=s[0]+t|0,s[1]=s[1]+r|0,s[2]=s[2]+n|0,s[3]=s[3]+a|0},_doFinalize:function(){var f=this._data,l=f.words,x=this._nDataBytes*8,e=f.sigBytes*8;l[e>>>5]|=128<<24-e%32;var o=p.floor(x/4294967296),s=x;l[(e+64>>>9<<4)+15]=(o<<8|o>>>24)&16711935|(o<<24|o>>>8)&4278255360,l[(e+64>>>9<<4)+14]=(s<<8|s>>>24)&16711935|(s<<24|s>>>8)&4278255360,f.sigBytes=(l.length+1)*4,this._process();for(var c=this._hash,u=c.words,h=0;h<4;h++){var H=u[h];u[h]=(H<<8|H>>>24)&16711935|(H<<24|H>>>8)&4278255360}return c},clone:function(){var f=D.clone.call(this);return f._hash=this._hash.clone(),f}});function m(f,l,x,e,o,s,c){var u=f+(l&x|~l&e)+o+c;return(u<<s|u>>>32-s)+l}function g(f,l,x,e,o,s,c){var u=f+(l&e|x&~e)+o+c;return(u<<s|u>>>32-s)+l}function y(f,l,x,e,o,s,c){var u=f+(l^x^e)+o+c;return(u<<s|u>>>32-s)+l}function B(f,l,x,e,o,s,c){var u=f+(x^(l|~e))+o+c;return(u<<s|u>>>32-s)+l}P.MD5=D._createHelper(z),P.HmacMD5=D._createHmacHelper(z)}(Math),C.MD5})})(re);const ie={data(){return{drawer:!1,rail:!1}},computed:{avatar(){return"https://archonproject.com/demo-moment-stockist/control-panel/assets/img/logo-archon.webp"}},watch:{$page:{handler(){const $=ee(),_=this.$page.props.flash;_&&(_.success||_.error)&&(_.success?$.success(_.success):_.error&&$.error(_.error))}}},mounted(){this.drawer=!this.$vuetify.display.mobile}},se=Object.assign(ie,{__name:"AuthenticatedLayout",setup($){return(_,C)=>{const p=R("v-list-item"),P=R("v-list"),b=R("v-divider"),L=R("v-navigation-drawer"),D=R("v-app-bar-nav-icon"),A=R("v-toolbar-title"),i=R("v-app-bar"),z=R("v-container"),m=R("v-main"),g=R("v-app");return N(),J(g,{class:"bg-grey-lighten-4"},{default:v(()=>[d(L,{modelValue:_.drawer,"onUpdate:modelValue":C[0]||(C[0]=y=>_.drawer=y),rail:_.rail,permanent:""},{default:v(()=>[d(P,null,{default:v(()=>[d(p,{"prepend-avatar":_.avatar,title:_.$page.props.auth.user.name,subtitle:_.$page.props.auth.user.email},null,8,["prepend-avatar","title","subtitle"])]),_:1}),d(b),d(te)]),_:1},8,["modelValue","rail"]),d(i,{color:"primary"},{default:v(()=>[_.$vuetify.display.mobile?(N(),J(D,{key:0,onClick:C[1]||(C[1]=Q(y=>_.drawer=!_.drawer,["stop"]))})):(N(),J(D,{key:1,onClick:C[2]||(C[2]=Q(y=>_.rail=!_.rail,["stop"]))})),d(A,{text:"ERP Stockist"})]),_:1}),d(m,null,{default:v(()=>[d(z,null,{default:v(()=>[Z(_.$slots,"default")]),_:3})]),_:3})]),_:3})}}});export{se as _};