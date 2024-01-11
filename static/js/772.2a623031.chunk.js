"use strict";(self.webpackChunkmarvel_app=self.webpackChunkmarvel_app||[]).push([[772],{957:(e,t,a)=>{a.d(t,{Z:()=>n});const s=a.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",c=a.p+"static/media/Avengers_logo.9eaf219344d83362e830.png";var r=a(184);const n=()=>(0,r.jsxs)("div",{className:"app__banner",children:[(0,r.jsx)("img",{src:s,alt:"Avengers"}),(0,r.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,r.jsx)("br",{}),"Stay tuned!"]}),(0,r.jsx)("img",{src:c,alt:"Avengers logo"})]})},613:(e,t,a)=>{a.d(t,{Z:()=>r});const s=a.p+"static/media/error.42292aa12b6bc303ce99.gif";var c=a(184);const r=()=>(0,c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:s,alt:"error message"})},501:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var s=a(772),c=a(791),r=a(557),n=a(523),o=a(957),i=a(184);const l=e=>{let{Component:t,dataType:a}=e;const{id:l}=(0,s.UO)(),[d,u]=(0,c.useState)(null),{getComic:p,getCharacter:m,clearError:h,process:g,setProcess:b}=(0,r.Z)();(0,c.useEffect)((()=>{v()}),[l]);const v=()=>{switch(h(),a){case"comic":p(l).then(f).then((()=>b("confirmed")));break;case"character":m(l).then(f).then((()=>b("confirmed")));break;default:throw new Error("Unexpected case")}},f=e=>{u(e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{}),(0,n.Z)(g,t,d)]})}},557:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(791);const c=()=>{const{request:e,clearError:t,process:a,setProcess:c}=(()=>{const[e,t]=(0,s.useState)("waiting");return{request:(0,s.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t("loading");try{const t=await fetch(e,{method:a,body:s,headers:c});if(!t.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(t.status));return await t.json()}catch(r){throw t("error"),r}}),[]),clearError:(0,s.useCallback)((()=>{t("loading")}),[]),process:e,setProcess:t}})(),r="https://gateway.marvel.com:443/v1/public/",n="apikey=1a829f32205e74795c839fd08a9bcba7",o=e=>({id:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),i=e=>{var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(r,"characters?limit=9&offset=").concat(t,"&").concat(n))).data.results.map(o)},getCharacterByName:async t=>(await e("".concat(r,"characters?name=").concat(t,"&").concat(n))).data.results.map(o),getCharacter:async t=>{const a=await e("".concat(r,"characters/").concat(t,"?").concat(n));return o(a.data.results[0])},clearError:t,getAllComics:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await e("".concat(r,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(n))).data.results.map(i)},getComic:async t=>{const a=await e("".concat(r,"comics/").concat(t,"?").concat(n));return i(a.data.results[0])},process:a,setProcess:c}}},523:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(288),c=a(613),r=a(184);const n=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,r.jsxs)("div",{className:"skeleton",children:[(0,r.jsxs)("div",{className:"pulse skeleton__header",children:[(0,r.jsx)("div",{className:"pulse skeleton__circle"}),(0,r.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,r.jsx)("div",{className:"pulse skeleton__block"}),(0,r.jsx)("div",{className:"pulse skeleton__block"}),(0,r.jsx)("div",{className:"pulse skeleton__block"})]})]}),o=(e,t,a)=>{switch(e){case"waiting":return(0,r.jsx)(n,{});case"loading":return(0,r.jsx)(s.Z,{});case"confirmed":return(0,r.jsx)(t,{data:a});case"error":return(0,r.jsx)(c.Z,{});default:throw new Error("Unexpected default state")}}}}]);
//# sourceMappingURL=772.2a623031.chunk.js.map