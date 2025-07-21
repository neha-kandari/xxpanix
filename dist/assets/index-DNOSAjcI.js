import{j as c,m as me,A as np,u as rp,a as sp,b as kn,c as Nn}from"./motion-CP3tcBSA.js";import{a as ip,r as C,R as op,b as Ti}from"./vendor-BaVwoRKI.js";import{M as ap,X as lp,F as cp,I as up,a as hp,b as dp,P as fp,C as wh,c as bh,Z as xh,H as mp,D as pp,T as gp,A as pc}from"./icons-DMQ0nmy8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Oo={},gc=ip;Oo.createRoot=gc.createRoot,Oo.hydrateRoot=gc.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Br(){return Br=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Br.apply(this,arguments)}var Ut;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ut||(Ut={}));const yc="popstate";function yp(n){n===void 0&&(n={});function e(r,s){let{pathname:i,search:a,hash:l}=r.location;return Mo("",{pathname:i,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(r,s){return typeof s=="string"?s:ni(s)}return _p(e,t,null,n)}function ge(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Eh(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vp(){return Math.random().toString(36).substr(2,8)}function vc(n,e){return{usr:n.state,key:n.key,idx:e}}function Mo(n,e,t,r){return t===void 0&&(t=null),Br({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Jn(e):e,{state:t,key:e&&e.key||r||vp()})}function ni(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Jn(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function _p(n,e,t,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,l=Ut.Pop,u=null,d=m();d==null&&(d=0,a.replaceState(Br({},a.state,{idx:d}),""));function m(){return(a.state||{idx:null}).idx}function y(){l=Ut.Pop;let A=m(),j=A==null?null:A-d;d=A,u&&u({action:l,location:N.location,delta:j})}function w(A,j){l=Ut.Push;let V=Mo(N.location,A,j);d=m()+1;let M=vc(V,d),K=N.createHref(V);try{a.pushState(M,"",K)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;s.location.assign(K)}i&&u&&u({action:l,location:N.location,delta:1})}function S(A,j){l=Ut.Replace;let V=Mo(N.location,A,j);d=m();let M=vc(V,d),K=N.createHref(V);a.replaceState(M,"",K),i&&u&&u({action:l,location:N.location,delta:0})}function R(A){let j=s.location.origin!=="null"?s.location.origin:s.location.href,V=typeof A=="string"?A:ni(A);return V=V.replace(/ $/,"%20"),ge(j,"No window.location.(origin|href) available to create URL for href: "+V),new URL(V,j)}let N={get action(){return l},get location(){return n(s,a)},listen(A){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(yc,y),u=A,()=>{s.removeEventListener(yc,y),u=null}},createHref(A){return e(s,A)},createURL:R,encodeLocation(A){let j=R(A);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:w,replace:S,go(A){return a.go(A)}};return N}var _c;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(_c||(_c={}));function wp(n,e,t){return t===void 0&&(t="/"),bp(n,e,t)}function bp(n,e,t,r){let s=typeof e=="string"?Jn(e):e,i=ya(s.pathname||"/",t);if(i==null)return null;let a=Th(n);xp(a);let l=null;for(let u=0;l==null&&u<a.length;++u){let d=Vp(i);l=kp(a[u],d)}return l}function Th(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let s=(i,a,l)=>{let u={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(ge(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=zt([r,u.relativePath]),m=t.concat(u);i.children&&i.children.length>0&&(ge(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Th(i.children,e,m,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:Cp(d,i.index),routesMeta:m})};return n.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,a);else for(let u of Ih(i.path))s(i,a,u)}),e}function Ih(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,s=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=Ih(r.join("/")),l=[];return l.push(...a.map(u=>u===""?i:[i,u].join("/"))),s&&l.push(...a),l.map(u=>n.startsWith("/")&&u===""?"/":u)}function xp(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Rp(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Ep=/^:[\w-]+$/,Tp=3,Ip=2,Ap=1,Sp=10,Pp=-2,wc=n=>n==="*";function Cp(n,e){let t=n.split("/"),r=t.length;return t.some(wc)&&(r+=Pp),e&&(r+=Ip),t.filter(s=>!wc(s)).reduce((s,i)=>s+(Ep.test(i)?Tp:i===""?Ap:Sp),r)}function Rp(n,e){return n.length===e.length&&n.slice(0,-1).every((r,s)=>r===e[s])?n[n.length-1]-e[e.length-1]:0}function kp(n,e,t){let{routesMeta:r}=n,s={},i="/",a=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,m=i==="/"?e:e.slice(i.length)||"/",y=Np({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},m),w=u.route;if(!y)return null;Object.assign(s,y.params),a.push({params:s,pathname:zt([i,y.pathname]),pathnameBase:Lp(zt([i,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(i=zt([i,y.pathnameBase]))}return a}function Np(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=Dp(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((d,m,y)=>{let{paramName:w,isOptional:S}=m;if(w==="*"){let N=l[y]||"";a=i.slice(0,i.length-N.length).replace(/(.)\/+$/,"$1")}const R=l[y];return S&&!R?d[w]=void 0:d[w]=(R||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:a,pattern:n}}function Dp(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Eh(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function Vp(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Eh(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function ya(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function jp(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:s=""}=typeof n=="string"?Jn(n):n;return{pathname:t?t.startsWith("/")?t:Op(t,e):e,search:Fp(r),hash:Up(s)}}function Op(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function po(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mp(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ah(n,e){let t=Mp(n);return e?t.map((r,s)=>s===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Sh(n,e,t,r){r===void 0&&(r=!1);let s;typeof n=="string"?s=Jn(n):(s=Br({},n),ge(!s.pathname||!s.pathname.includes("?"),po("?","pathname","search",s)),ge(!s.pathname||!s.pathname.includes("#"),po("#","pathname","hash",s)),ge(!s.search||!s.search.includes("#"),po("#","search","hash",s)));let i=n===""||s.pathname==="",a=i?"/":s.pathname,l;if(a==null)l=t;else{let y=e.length-1;if(!r&&a.startsWith("..")){let w=a.split("/");for(;w[0]==="..";)w.shift(),y-=1;s.pathname=w.join("/")}l=y>=0?e[y]:"/"}let u=jp(s,l),d=a&&a!=="/"&&a.endsWith("/"),m=(i||a===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(d||m)&&(u.pathname+="/"),u}const zt=n=>n.join("/").replace(/\/\/+/g,"/"),Lp=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Fp=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Up=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Bp(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Ph=["post","put","patch","delete"];new Set(Ph);const zp=["get",...Ph];new Set(zp);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zr(){return zr=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},zr.apply(this,arguments)}const va=C.createContext(null),$p=C.createContext(null),_n=C.createContext(null),Ii=C.createContext(null),wn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Ch=C.createContext(null);function Wp(n,e){let{relative:t}=e===void 0?{}:e;es()||ge(!1);let{basename:r,navigator:s}=C.useContext(_n),{hash:i,pathname:a,search:l}=kh(n,{relative:t}),u=a;return r!=="/"&&(u=a==="/"?r:zt([r,a])),s.createHref({pathname:u,search:l,hash:i})}function es(){return C.useContext(Ii)!=null}function Zn(){return es()||ge(!1),C.useContext(Ii).location}function Rh(n){C.useContext(_n).static||C.useLayoutEffect(n)}function ts(){let{isDataRoute:n}=C.useContext(wn);return n?rg():qp()}function qp(){es()||ge(!1);let n=C.useContext(va),{basename:e,future:t,navigator:r}=C.useContext(_n),{matches:s}=C.useContext(wn),{pathname:i}=Zn(),a=JSON.stringify(Ah(s,t.v7_relativeSplatPath)),l=C.useRef(!1);return Rh(()=>{l.current=!0}),C.useCallback(function(d,m){if(m===void 0&&(m={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let y=Sh(d,JSON.parse(a),i,m.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:zt([e,y.pathname])),(m.replace?r.replace:r.push)(y,m.state,m)},[e,r,a,i,n])}function kh(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=C.useContext(_n),{matches:s}=C.useContext(wn),{pathname:i}=Zn(),a=JSON.stringify(Ah(s,r.v7_relativeSplatPath));return C.useMemo(()=>Sh(n,JSON.parse(a),i,t==="path"),[n,a,i,t])}function Hp(n,e){return Gp(n,e)}function Gp(n,e,t,r){es()||ge(!1);let{navigator:s}=C.useContext(_n),{matches:i}=C.useContext(wn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let d=Zn(),m;if(e){var y;let A=typeof e=="string"?Jn(e):e;u==="/"||(y=A.pathname)!=null&&y.startsWith(u)||ge(!1),m=A}else m=d;let w=m.pathname||"/",S=w;if(u!=="/"){let A=u.replace(/^\//,"").split("/");S="/"+w.replace(/^\//,"").split("/").slice(A.length).join("/")}let R=wp(n,{pathname:S}),N=Jp(R&&R.map(A=>Object.assign({},A,{params:Object.assign({},l,A.params),pathname:zt([u,s.encodeLocation?s.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:zt([u,s.encodeLocation?s.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),i,t,r);return e&&N?C.createElement(Ii.Provider,{value:{location:zr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Ut.Pop}},N):N}function Kp(){let n=ng(),e=Bp(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),t?C.createElement("pre",{style:s},t):null,null)}const Xp=C.createElement(Kp,null);class Qp extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?C.createElement(wn.Provider,{value:this.props.routeContext},C.createElement(Ch.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yp(n){let{routeContext:e,match:t,children:r}=n,s=C.useContext(va);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(wn.Provider,{value:e},r)}function Jp(n,e,t,r){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var i;if(!t)return null;if(t.errors)n=t.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,l=(s=t)==null?void 0:s.errors;if(l!=null){let m=a.findIndex(y=>y.route.id&&l?.[y.route.id]!==void 0);m>=0||ge(!1),a=a.slice(0,Math.min(a.length,m+1))}let u=!1,d=-1;if(t&&r&&r.v7_partialHydration)for(let m=0;m<a.length;m++){let y=a[m];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=m),y.route.id){let{loaderData:w,errors:S}=t,R=y.route.loader&&w[y.route.id]===void 0&&(!S||S[y.route.id]===void 0);if(y.route.lazy||R){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((m,y,w)=>{let S,R=!1,N=null,A=null;t&&(S=l&&y.route.id?l[y.route.id]:void 0,N=y.route.errorElement||Xp,u&&(d<0&&w===0?(sg("route-fallback"),R=!0,A=null):d===w&&(R=!0,A=y.route.hydrateFallbackElement||null)));let j=e.concat(a.slice(0,w+1)),V=()=>{let M;return S?M=N:R?M=A:y.route.Component?M=C.createElement(y.route.Component,null):y.route.element?M=y.route.element:M=m,C.createElement(Yp,{match:y,routeContext:{outlet:m,matches:j,isDataRoute:t!=null},children:M})};return t&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?C.createElement(Qp,{location:t.location,revalidation:t.revalidation,component:N,error:S,children:V(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):V()},null)}var Nh=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Nh||{}),Dh=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Dh||{});function Zp(n){let e=C.useContext(va);return e||ge(!1),e}function eg(n){let e=C.useContext($p);return e||ge(!1),e}function tg(n){let e=C.useContext(wn);return e||ge(!1),e}function Vh(n){let e=tg(),t=e.matches[e.matches.length-1];return t.route.id||ge(!1),t.route.id}function ng(){var n;let e=C.useContext(Ch),t=eg(),r=Vh();return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function rg(){let{router:n}=Zp(Nh.UseNavigateStable),e=Vh(Dh.UseNavigateStable),t=C.useRef(!1);return Rh(()=>{t.current=!0}),C.useCallback(function(s,i){i===void 0&&(i={}),t.current&&(typeof s=="number"?n.navigate(s):n.navigate(s,zr({fromRouteId:e},i)))},[n,e])}const bc={};function sg(n,e,t){bc[n]||(bc[n]=!0)}function ig(n,e){n?.v7_startTransition,n?.v7_relativeSplatPath}function Ot(n){ge(!1)}function og(n){let{basename:e="/",children:t=null,location:r,navigationType:s=Ut.Pop,navigator:i,static:a=!1,future:l}=n;es()&&ge(!1);let u=e.replace(/^\/*/,"/"),d=C.useMemo(()=>({basename:u,navigator:i,static:a,future:zr({v7_relativeSplatPath:!1},l)}),[u,l,i,a]);typeof r=="string"&&(r=Jn(r));let{pathname:m="/",search:y="",hash:w="",state:S=null,key:R="default"}=r,N=C.useMemo(()=>{let A=ya(m,u);return A==null?null:{location:{pathname:A,search:y,hash:w,state:S,key:R},navigationType:s}},[u,m,y,w,S,R,s]);return N==null?null:C.createElement(_n.Provider,{value:d},C.createElement(Ii.Provider,{children:t,value:N}))}function ag(n){let{children:e,location:t}=n;return Hp(Lo(e),t)}new Promise(()=>{});function Lo(n,e){e===void 0&&(e=[]);let t=[];return C.Children.forEach(n,(r,s)=>{if(!C.isValidElement(r))return;let i=[...e,s];if(r.type===C.Fragment){t.push.apply(t,Lo(r.props.children,i));return}r.type!==Ot&&ge(!1),!r.props.index||!r.props.children||ge(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Lo(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fo(){return Fo=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Fo.apply(this,arguments)}function lg(n,e){if(n==null)return{};var t={},r=Object.keys(n),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function cg(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ug(n,e){return n.button===0&&(!e||e==="_self")&&!cg(n)}const hg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],dg="6";try{window.__reactRouterVersion=dg}catch{}const fg="startTransition",xc=op[fg];function mg(n){let{basename:e,children:t,future:r,window:s}=n,i=C.useRef();i.current==null&&(i.current=yp({window:s,v5Compat:!0}));let a=i.current,[l,u]=C.useState({action:a.action,location:a.location}),{v7_startTransition:d}=r||{},m=C.useCallback(y=>{d&&xc?xc(()=>u(y)):u(y)},[u,d]);return C.useLayoutEffect(()=>a.listen(m),[a,m]),C.useEffect(()=>ig(r),[r]),C.createElement(og,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:a,future:r})}const pg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,we=C.forwardRef(function(e,t){let{onClick:r,relative:s,reloadDocument:i,replace:a,state:l,target:u,to:d,preventScrollReset:m,viewTransition:y}=e,w=lg(e,hg),{basename:S}=C.useContext(_n),R,N=!1;if(typeof d=="string"&&gg.test(d)&&(R=d,pg))try{let M=new URL(window.location.href),K=d.startsWith("//")?new URL(M.protocol+d):new URL(d),ie=ya(K.pathname,S);K.origin===M.origin&&ie!=null?d=ie+K.search+K.hash:N=!0}catch{}let A=Wp(d,{relative:s}),j=yg(d,{replace:a,state:l,target:u,preventScrollReset:m,relative:s,viewTransition:y});function V(M){r&&r(M),M.defaultPrevented||j(M)}return C.createElement("a",Fo({},w,{href:R||A,onClick:N||i?r:V,ref:t,target:u}))});var Ec;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ec||(Ec={}));var Tc;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Tc||(Tc={}));function yg(n,e){let{target:t,replace:r,state:s,preventScrollReset:i,relative:a,viewTransition:l}=e===void 0?{}:e,u=ts(),d=Zn(),m=kh(n,{relative:a});return C.useCallback(y=>{if(ug(y,t)){y.preventDefault();let w=r!==void 0?r:ni(d)===ni(m);u(n,{replace:w,state:s,preventScrollReset:i,relative:a,viewTransition:l})}},[d,u,m,r,s,t,n,i,a,l])}const vg=()=>{};var Ic={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},_g=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=i>>2,y=(i&3)<<4|l>>4;let w=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(w=64)),r.push(t[m],t[y],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(jh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_g(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||y==null)throw new wg;const w=i<<2|l>>4;if(r.push(w),d!==64){const S=l<<4&240|d>>2;if(r.push(S),y!==64){const R=d<<6&192|y;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bg=function(n){const e=jh(n);return Oh.encodeByteArray(e,!0)},ri=function(n){return bg(n).replace(/\./g,"")},Mh=function(n){try{return Oh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=()=>xg().__FIREBASE_DEFAULTS__,Tg=()=>{if(typeof process>"u"||typeof Ic>"u")return;const n=Ic.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ig=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Mh(n[1]);return e&&JSON.parse(e)},Ai=()=>{try{return vg()||Eg()||Tg()||Ig()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Lh=n=>{var e,t;return(t=(e=Ai())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ag=n=>{const e=Lh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Fh=()=>{var n;return(n=Ai())===null||n===void 0?void 0:n.config},Uh=n=>{var e;return(e=Ai())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Bh(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ri(JSON.stringify(t)),ri(JSON.stringify(a)),""].join(".")}const Dr={};function Cg(){const n={prod:[],emulator:[]};for(const e of Object.keys(Dr))Dr[e]?n.emulator.push(e):n.prod.push(e);return n}function Rg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ac=!1;function zh(n,e){if(typeof window>"u"||typeof document>"u"||!er(window.location.host)||Dr[n]===e||Dr[n]||Ac)return;Dr[n]=e;function t(w){return`__firebase__banner__${w}`}const r="__firebase__banner",i=Cg().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function u(w,S){w.setAttribute("width","24"),w.setAttribute("id",S),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Ac=!0,a()},w}function m(w,S){w.setAttribute("id",S),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=Rg(r),S=t("text"),R=document.getElementById(S)||document.createElement("span"),N=t("learnmore"),A=document.getElementById(N)||document.createElement("a"),j=t("preprendIcon"),V=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const M=w.element;l(M),m(A,N);const K=d();u(V,j),M.append(V,R,A,K),document.body.appendChild(M)}i?(R.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Ng(){var n;const e=(n=Ai())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Og(){const n=De();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Mg(){return!Ng()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lg(){try{return typeof indexedDB=="object"}catch{return!1}}function Fg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="FirebaseError";class St extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ug,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Bg(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new St(s,l,r)}}function Bg(n,e){return n.replace(zg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zg=/\{\$([^}]+)}/g;function $g(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function fn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Sc(i)&&Sc(a)){if(!fn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Sc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Sr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Pr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Wg(n,e){const t=new qg(n,e);return t.subscribe.bind(t)}class qg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Hg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=go),s.error===void 0&&(s.error=go),s.complete===void 0&&(s.complete=go);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function go(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n){return n&&n._delegate?n._delegate:n}class mn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Sg;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xg(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kg(n){return n===cn?void 0:n}function Xg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const Yg={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Jg=Y.INFO,Zg={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},ey=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Zg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _a{constructor(e){this.name=e,this._logLevel=Jg,this._logHandler=ey,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const ty=(n,e)=>e.some(t=>n instanceof t);let Pc,Cc;function ny(){return Pc||(Pc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ry(){return Cc||(Cc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $h=new WeakMap,Uo=new WeakMap,Wh=new WeakMap,yo=new WeakMap,wa=new WeakMap;function sy(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t($t(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&$h.set(t,n)}).catch(()=>{}),wa.set(e,n),e}function iy(n){if(Uo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Uo.set(n,e)}let Bo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Uo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function oy(n){Bo=n(Bo)}function ay(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(vo(this),e,...t);return Wh.set(r,e.sort?e.sort():[e]),$t(r)}:ry().includes(n)?function(...e){return n.apply(vo(this),e),$t($h.get(this))}:function(...e){return $t(n.apply(vo(this),e))}}function ly(n){return typeof n=="function"?ay(n):(n instanceof IDBTransaction&&iy(n),ty(n,ny())?new Proxy(n,Bo):n)}function $t(n){if(n instanceof IDBRequest)return sy(n);if(yo.has(n))return yo.get(n);const e=ly(n);return e!==n&&(yo.set(n,e),wa.set(e,n)),e}const vo=n=>wa.get(n);function cy(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=$t(a);return r&&a.addEventListener("upgradeneeded",u=>{r($t(a.result),u.oldVersion,u.newVersion,$t(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const uy=["get","getKey","getAll","getAllKeys","count"],hy=["put","add","delete","clear"],_o=new Map;function Rc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(_o.get(e))return _o.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=hy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||uy.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return _o.set(e,i),i}oy(n=>({...n,get:(e,t,r)=>Rc(e,t)||n.get(e,t,r),has:(e,t)=>!!Rc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function fy(n){const e=n.getComponent();return e?.type==="VERSION"}const zo="@firebase/app",kc="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new _a("@firebase/app"),my="@firebase/app-compat",py="@firebase/analytics-compat",gy="@firebase/analytics",yy="@firebase/app-check-compat",vy="@firebase/app-check",_y="@firebase/auth",wy="@firebase/auth-compat",by="@firebase/database",xy="@firebase/data-connect",Ey="@firebase/database-compat",Ty="@firebase/functions",Iy="@firebase/functions-compat",Ay="@firebase/installations",Sy="@firebase/installations-compat",Py="@firebase/messaging",Cy="@firebase/messaging-compat",Ry="@firebase/performance",ky="@firebase/performance-compat",Ny="@firebase/remote-config",Dy="@firebase/remote-config-compat",Vy="@firebase/storage",jy="@firebase/storage-compat",Oy="@firebase/firestore",My="@firebase/ai",Ly="@firebase/firestore-compat",Fy="firebase",Uy="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="[DEFAULT]",By={[zo]:"fire-core",[my]:"fire-core-compat",[gy]:"fire-analytics",[py]:"fire-analytics-compat",[vy]:"fire-app-check",[yy]:"fire-app-check-compat",[_y]:"fire-auth",[wy]:"fire-auth-compat",[by]:"fire-rtdb",[xy]:"fire-data-connect",[Ey]:"fire-rtdb-compat",[Ty]:"fire-fn",[Iy]:"fire-fn-compat",[Ay]:"fire-iid",[Sy]:"fire-iid-compat",[Py]:"fire-fcm",[Cy]:"fire-fcm-compat",[Ry]:"fire-perf",[ky]:"fire-perf-compat",[Ny]:"fire-rc",[Dy]:"fire-rc-compat",[Vy]:"fire-gcs",[jy]:"fire-gcs-compat",[Oy]:"fire-fst",[Ly]:"fire-fst-compat",[My]:"fire-vertex","fire-js":"fire-js",[Fy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Map,zy=new Map,Wo=new Map;function Nc(n,e){try{n.container.addComponent(e)}catch(t){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qn(n){const e=n.name;if(Wo.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;Wo.set(e,n);for(const t of $r.values())Nc(t,n);for(const t of zy.values())Nc(t,n);return!0}function ba(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $e(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new ns("app","Firebase",$y);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=Uy;function qh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$o,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Wt.create("bad-app-name",{appName:String(s)});if(t||(t=Fh()),!t)throw Wt.create("no-options");const i=$r.get(s);if(i){if(fn(t,i.options)&&fn(r,i.config))return i;throw Wt.create("duplicate-app",{appName:s})}const a=new Qg(s);for(const u of Wo.values())a.addComponent(u);const l=new Wy(t,r,a);return $r.set(s,l),l}function Hh(n=$o){const e=$r.get(n);if(!e&&n===$o&&Fh())return qh();if(!e)throw Wt.create("no-app",{appName:n});return e}function Dc(){return Array.from($r.values())}function qt(n,e,t){var r;let s=(r=By[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(l.join(" "));return}qn(new mn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="firebase-heartbeat-database",Hy=1,Wr="firebase-heartbeat-store";let wo=null;function Gh(){return wo||(wo=cy(qy,Hy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Wr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),wo}async function Gy(n){try{const t=(await Gh()).transaction(Wr),r=await t.objectStore(Wr).get(Kh(n));return await t.done,r}catch(e){if(e instanceof St)Et.warn(e.message);else{const t=Wt.create("idb-get",{originalErrorMessage:e?.message});Et.warn(t.message)}}}async function Vc(n,e){try{const r=(await Gh()).transaction(Wr,"readwrite");await r.objectStore(Wr).put(e,Kh(n)),await r.done}catch(t){if(t instanceof St)Et.warn(t.message);else{const r=Wt.create("idb-set",{originalErrorMessage:t?.message});Et.warn(r.message)}}}function Kh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=1024,Xy=30;class Qy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Jy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=jc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Xy){const a=Zy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Et.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jc(),{heartbeatsToSend:r,unsentEntries:s}=Yy(this._heartbeatsCache.heartbeats),i=ri(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Et.warn(t),""}}}function jc(){return new Date().toISOString().substring(0,10)}function Yy(n,e=Ky){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Oc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Oc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Jy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lg()?Fg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Gy(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Oc(n){return ri(JSON.stringify({version:2,heartbeats:n})).length}function Zy(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(n){qn(new mn("platform-logger",e=>new dy(e),"PRIVATE")),qn(new mn("heartbeat",e=>new Qy(e),"PRIVATE")),qt(zo,kc,n),qt(zo,kc,"esm2017"),qt("fire-js","")}ev("");var tv="firebase",nv="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(tv,nv,"app");function xa(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Xh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rv=Xh,Qh=new ns("auth","Firebase",Xh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new _a("@firebase/auth");function sv(n,...e){si.logLevel<=Y.WARN&&si.warn(`Auth (${tr}): ${n}`,...e)}function qs(n,...e){si.logLevel<=Y.ERROR&&si.error(`Auth (${tr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n,...e){throw Ta(n,...e)}function tt(n,...e){return Ta(n,...e)}function Ea(n,e,t){const r=Object.assign(Object.assign({},rv()),{[e]:t});return new ns("auth","Firebase",r).create(e,{appName:n.name})}function bt(n){return Ea(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iv(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xe(n,"argument-error"),Ea(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ta(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Qh.create(n,...e)}function W(n,e,...t){if(!n)throw Ta(e,...t)}function _t(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qs(e),new Error(e)}function Tt(n,e){n||_t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ov(){return Mc()==="http:"||Mc()==="https:"}function Mc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ov()||Vg()||"connection"in navigator)?navigator.onLine:!0}function lv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tt(t>e,"Short delay should be less than long delay!"),this.isMobile=kg()||jg()}get(){return av()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n,e){Tt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hv=new ss(3e4,6e4);function tn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pt(n,e,t,r,s={}){return Jh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=rs(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return Dg()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&er(n.emulatorConfig.host)&&(d.credentials="include"),Yh.fetch()(await Zh(n,n.config.apiHost,t,l),d)})}async function Jh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},cv),e);try{const s=new fv(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Vs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Vs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Vs(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ea(n,m,d);Xe(n,m)}}catch(s){if(s instanceof St)throw s;Xe(n,"network-request-failed",{message:String(s)})}}async function is(n,e,t,r,s={}){const i=await Pt(n,e,t,r,s);return"mfaPendingCredential"in i&&Xe(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Zh(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Ia(n.config,s):`${n.config.apiScheme}://${s}`;return uv.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function dv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),hv.get())})}}function Vs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=tt(n,e,r);return s.customData._tokenResponse=t,s}function Lc(n){return n!==void 0&&n.enterprise!==void 0}class mv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return dv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function pv(n,e){return Pt(n,"GET","/v2/recaptchaConfig",tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(n,e){return Pt(n,"POST","/v1/accounts:delete",e)}async function ii(n,e){return Pt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yv(n,e=!1){const t=Fe(n),r=await t.getIdToken(e),s=Aa(r);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Vr(bo(s.auth_time)),issuedAtTime:Vr(bo(s.iat)),expirationTime:Vr(bo(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function bo(n){return Number(n)*1e3}function Aa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return qs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Mh(t);return s?JSON.parse(s):(qs("Failed to decode base64 JWT payload"),null)}catch(s){return qs("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Fc(n){const e=Aa(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof St&&vv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function vv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vr(this.lastLoginAt),this.creationTime=Vr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Hn(n,ii(t,{idToken:r}));W(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ed(i.providerUserInfo):[],l=bv(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!l?.length,m=u?d:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ho(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,y)}async function wv(n){const e=Fe(n);await oi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bv(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ed(n){return n.map(e=>{var{providerId:t}=e,r=xa(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(n,e){const t=await Jh(n,{},async()=>{const r=rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Zh(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&er(n.emulatorConfig.host)&&(u.credentials="include"),Yh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ev(n,e){return Pt(n,"POST","/v2/accounts:revokeToken",tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=Fc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await xv(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Un;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return _t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ze{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=xa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _v(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ho(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yv(this,e)}reload(){return wv(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await oi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(bt(this.auth));const e=await this.getIdToken();return await Hn(this,gv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,u,d,m;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(l=t.tenantId)!==null&&l!==void 0?l:void 0,A=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,j=(d=t.createdAt)!==null&&d!==void 0?d:void 0,V=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:M,emailVerified:K,isAnonymous:ie,providerData:re,stsTokenManager:x}=t;W(M&&x,e,"internal-error");const g=Un.fromJSON(this.name,x);W(typeof M=="string",e,"internal-error"),Vt(y,e.name),Vt(w,e.name),W(typeof K=="boolean",e,"internal-error"),W(typeof ie=="boolean",e,"internal-error"),Vt(S,e.name),Vt(R,e.name),Vt(N,e.name),Vt(A,e.name),Vt(j,e.name),Vt(V,e.name);const v=new Ze({uid:M,auth:e,email:w,emailVerified:K,displayName:y,isAnonymous:ie,photoURL:R,phoneNumber:S,tenantId:N,stsTokenManager:g,createdAt:j,lastLoginAt:V});return re&&Array.isArray(re)&&(v.providerData=re.map(b=>Object.assign({},b))),A&&(v._redirectEventId=A),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Un;s.updateFromServerResponse(t);const i=new Ze({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await oi(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ed(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new Un;l.updateFromIdToken(r);const u=new Ze({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ho(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=new Map;function wt(n){Tt(n instanceof Function,"Expected a class definition");let e=Uc.get(n);return e?(Tt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Uc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}td.type="NONE";const Bc=td;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(n,e,t){return`firebase:${n}:${e}:${t}`}class Bn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Hs(this.userKey,s.apiKey,i),this.fullPersistenceKey=Hs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ii(this.auth,{idToken:e}).catch(()=>{});return t?Ze._fromGetAccountInfoResponse(this.auth,t,e):null}return Ze._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Bn(wt(Bc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||wt(Bc);const a=Hs(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const m=await d._get(a);if(m){let y;if(typeof m=="string"){const w=await ii(e,{idToken:m}).catch(()=>{});if(!w)break;y=await Ze._fromGetAccountInfoResponse(e,w,m)}else y=Ze._fromJSON(e,m);d!==i&&(l=y),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Bn(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Bn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(id(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ad(e))return"Blackberry";if(ld(e))return"Webos";if(rd(e))return"Safari";if((e.includes("chrome/")||sd(e))&&!e.includes("edge/"))return"Chrome";if(od(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function nd(n=De()){return/firefox\//i.test(n)}function rd(n=De()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sd(n=De()){return/crios\//i.test(n)}function id(n=De()){return/iemobile/i.test(n)}function od(n=De()){return/android/i.test(n)}function ad(n=De()){return/blackberry/i.test(n)}function ld(n=De()){return/webos/i.test(n)}function Sa(n=De()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Tv(n=De()){var e;return Sa(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Iv(){return Og()&&document.documentMode===10}function cd(n=De()){return Sa(n)||od(n)||ld(n)||ad(n)||/windows phone/i.test(n)||id(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n,e=[]){let t;switch(n){case"Browser":t=zc(De());break;case"Worker":t=`${zc(De())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${tr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sv(n,e={}){return Pt(n,"GET","/v2/passwordPolicy",tn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=6;class Cv{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Pv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $c(this),this.idTokenSubscription=new $c(this),this.beforeStateQueue=new Av(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Bn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ii(this,{idToken:e}),r=await Ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if($e(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u?.user&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oi(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(bt(this));const t=e?Fe(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sv(this),t=new Cv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ev(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wt(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await Bn.create(this,[wt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ud(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&sv(`Error while retrieving App Check token: ${t.error}`),t?.token}}function nn(n){return Fe(n)}class $c{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wg(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kv(n){Si=n}function hd(n){return Si.loadJS(n)}function Nv(){return Si.recaptchaEnterpriseScript}function Dv(){return Si.gapiScript}function Vv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class jv{constructor(){this.enterprise=new Ov}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ov{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Mv="recaptcha-enterprise",dd="NO_RECAPTCHA";class Lv{constructor(e){this.type=Mv,this.auth=nn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{pv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new mv(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;Lc(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(dd)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jv().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Lc(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Nv();u.length!==0&&(u+=l),hd(u).then(()=>{s(l,i,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Wc(n,e,t,r=!1,s=!1){const i=new Lv(n);let a;if(s)a=dd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Go(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Wc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Wc(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(n,e){const t=ba(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(fn(i,e??{}))return s;Xe(s,"already-initialized")}return t.initialize({options:e})}function Uv(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(wt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Bv(n,e,t){const r=nn(n);W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=fd(e),{host:a,port:l}=zv(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(fn(d,r.config.emulator)&&fn(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,er(a)?(Bh(`${i}//${a}${u}`),zh("Auth",!0)):$v()}function fd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zv(n){const e=fd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:qc(a)}}}function qc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $v(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _t("not implemented")}_getIdTokenResponse(e){return _t("not implemented")}_linkToIdToken(e,t){return _t("not implemented")}_getReauthenticationResolver(e){return _t("not implemented")}}async function Wv(n,e){return Pt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(n,e){return is(n,"POST","/v1/accounts:signInWithPassword",tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(n,e){return is(n,"POST","/v1/accounts:signInWithEmailLink",tn(n,e))}async function Gv(n,e){return is(n,"POST","/v1/accounts:signInWithEmailLink",tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Pa{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new qr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new qr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Go(e,t,"signInWithPassword",qv);case"emailLink":return Hv(e,{email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Go(e,r,"signUpPassword",Wv);case"emailLink":return Gv(e,{idToken:t,email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(n,e){return is(n,"POST","/v1/accounts:signInWithIdp",tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="http://localhost";class pn extends Pa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=xa(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new pn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return zn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zn(e,t)}buildRequest(){const e={requestUri:Kv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qv(n){const e=Sr(Pr(n)).link,t=e?Sr(Pr(e)).deep_link_id:null,r=Sr(Pr(n)).deep_link_id;return(r?Sr(Pr(r)).link:null)||r||t||e||n}class Ca{constructor(e){var t,r,s,i,a,l;const u=Sr(Pr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,y=Xv((s=u.mode)!==null&&s!==void 0?s:null);W(d&&m&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Qv(e);try{return new Ca(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.providerId=nr.PROVIDER_ID}static credential(e,t){return qr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ca.parseLink(t);return W(r,"argument-error"),qr._fromEmailAndCode(e,r.code,r.tenantId)}}nr.PROVIDER_ID="password";nr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Ra{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends os{constructor(){super("facebook.com")}static credential(e){return pn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends os{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pn._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return st.credential(t,r)}catch{return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends os{constructor(){super("github.com")}static credential(e){return pn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends os{constructor(){super("twitter.com")}static credential(e,t){return pn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ft.credential(t,r)}catch{return null}}}Ft.TWITTER_SIGN_IN_METHOD="twitter.com";Ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yv(n,e){return is(n,"POST","/v1/accounts:signUp",tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ze._fromIdTokenResponse(e,r,s),a=Hc(r);return new gn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Hc(r);return new gn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Hc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends St{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ai.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ai(e,t,r,s)}}function md(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ai._fromErrorAndOperation(n,i,e,r):i})}async function Jv(n,e,t=!1){const r=await Hn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zv(n,e,t=!1){const{auth:r}=n;if($e(r.app))return Promise.reject(bt(r));const s="reauthenticate";try{const i=await Hn(n,md(r,s,e,n),t);W(i.idToken,r,"internal-error");const a=Aa(i.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(n.uid===l,r,"user-mismatch"),gn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Xe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(n,e,t=!1){if($e(n.app))return Promise.reject(bt(n));const r="signIn",s=await md(n,r,e),i=await gn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function e0(n,e){return pd(nn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gd(n){const e=nn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function t0(n,e,t){if($e(n.app))return Promise.reject(bt(n));const r=nn(n),a=await Go(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yv).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&gd(n),u}),l=await gn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function n0(n,e,t){return $e(n.app)?Promise.reject(bt(n)):e0(Fe(n),nr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gd(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(n,e){return Pt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Fe(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Hn(r,r0(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function i0(n,e,t,r){return Fe(n).onIdTokenChanged(e,t,r)}function o0(n,e,t){return Fe(n).beforeAuthStateChanged(e,t)}function a0(n,e,t,r){return Fe(n).onAuthStateChanged(e,t,r)}function Gc(n){return Fe(n).signOut()}const li="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(li,"1"),this.storage.removeItem(li),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=1e3,c0=10;class vd extends yd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Iv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,c0):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},l0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vd.type="LOCAL";const u0=vd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d extends yd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_d.type="SESSION";const wd=_d;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Pi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await h0(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=ka("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const w=y;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(w.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return window}function f0(n){it().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function m0(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function p0(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function g0(){return bd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="firebaseLocalStorageDb",y0=1,ci="firebaseLocalStorage",Ed="fbase_key";class as{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ci(n,e){return n.transaction([ci],e?"readwrite":"readonly").objectStore(ci)}function v0(){const n=indexedDB.deleteDatabase(xd);return new as(n).toPromise()}function Ko(){const n=indexedDB.open(xd,y0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ci,{keyPath:Ed})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ci)?e(r):(r.close(),await v0(),e(await Ko()))})})}async function Kc(n,e,t){const r=Ci(n,!0).put({[Ed]:e,value:t});return new as(r).toPromise()}async function _0(n,e){const t=Ci(n,!1).get(e),r=await new as(t).toPromise();return r===void 0?null:r.value}function Xc(n,e){const t=Ci(n,!0).delete(e);return new as(t).toPromise()}const w0=800,b0=3;class Td{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ko(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>b0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pi._getInstance(g0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await m0(),!this.activeServiceWorker)return;this.sender=new d0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||p0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ko();return await Kc(e,li,"1"),await Xc(e,li),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>_0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ci(s,!1).getAll();return new as(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Td.type="LOCAL";const x0=Td;new ss(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(n,e){return e?wt(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends Pa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function E0(n){return pd(n.auth,new Na(n),n.bypassAuthState)}function T0(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),Zv(t,new Na(n),n.bypassAuthState)}async function I0(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),Jv(t,new Na(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return E0;case"linkViaPopup":case"linkViaRedirect":return I0;case"reauthViaPopup":case"reauthViaRedirect":return T0;default:Xe(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=new ss(2e3,1e4);async function Sd(n,e,t){if($e(n.app))return Promise.reject(tt(n,"operation-not-supported-in-this-environment"));const r=nn(n);iv(n,e,Ra);const s=Id(r,t);return new un(r,"signInViaPopup",e,s).executeNotNull()}class un extends Ad{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const e=ka();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,A0.get())};e()}}un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="pendingRedirect",Gs=new Map;class P0 extends Ad{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Gs.get(this.auth._key());if(!e){try{const r=await C0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Gs.set(this.auth._key(),e)}return this.bypassAuthState||Gs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function C0(n,e){const t=N0(e),r=k0(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function R0(n,e){Gs.set(n._key(),e)}function k0(n){return wt(n._redirectPersistence)}function N0(n){return Hs(S0,n.config.apiKey,n.name)}async function D0(n,e,t=!1){if($e(n.app))return Promise.reject(bt(n));const r=nn(n),s=Id(r,e),a=await new P0(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=10*60*1e3;class j0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!O0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Pd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(tt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=V0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qc(e))}saveEventToCache(e){this.cachedEventUids.add(Qc(e)),this.lastProcessedEventTime=Date.now()}}function Qc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Pd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function O0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(n,e={}){return Pt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F0=/^https?/;async function U0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await M0(n);for(const t of e)try{if(B0(t))return}catch{}Xe(n,"unauthorized-domain")}function B0(n){const e=qo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!F0.test(t))return!1;if(L0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=new ss(3e4,6e4);function Yc(){const n=it().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function $0(n){return new Promise((e,t)=>{var r,s,i;function a(){Yc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yc(),t(tt(n,"network-request-failed"))},timeout:z0.get()})}if(!((s=(r=it().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=it().gapi)===null||i===void 0)&&i.load)a();else{const l=Vv("iframefcb");return it()[l]=()=>{gapi.load?a():t(tt(n,"network-request-failed"))},hd(`${Dv()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Ks=null,e})}let Ks=null;function W0(n){return Ks=Ks||$0(n),Ks}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=new ss(5e3,15e3),H0="__/auth/iframe",G0="emulator/auth/iframe",K0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},X0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Q0(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ia(e,G0):`https://${n.config.authDomain}/${H0}`,r={apiKey:e.apiKey,appName:n.name,v:tr},s=X0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${rs(r).slice(1)}`}async function Y0(n){const e=await W0(n),t=it().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:Q0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:K0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=tt(n,"network-request-failed"),l=it().setTimeout(()=>{i(a)},q0.get());function u(){it().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Z0=500,e_=600,t_="_blank",n_="http://localhost";class Jc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function r_(n,e,t,r=Z0,s=e_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},J0),{width:r.toString(),height:s.toString(),top:i,left:a}),d=De().toLowerCase();t&&(l=sd(d)?t_:t),nd(d)&&(e=e||n_,u.scrollbars="yes");const m=Object.entries(u).reduce((w,[S,R])=>`${w}${S}=${R},`,"");if(Tv(d)&&l!=="_self")return s_(e||"",l),new Jc(null);const y=window.open(e||"",l,m);W(y,n,"popup-blocked");try{y.focus()}catch{}return new Jc(y)}function s_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="__/auth/handler",o_="emulator/auth/handler",a_=encodeURIComponent("fac");async function Zc(n,e,t,r,s,i){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:tr,eventId:s};if(e instanceof Ra){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",$g(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))a[m]=y}if(e instanceof os){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await n._getAppCheckToken(),d=u?`#${a_}=${encodeURIComponent(u)}`:"";return`${l_(n)}?${rs(l).slice(1)}${d}`}function l_({config:n}){return n.emulator?Ia(n,o_):`https://${n.authDomain}/${i_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="webStorageSupport";class c_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wd,this._completeRedirectFn=D0,this._overrideRedirectResult=R0}async _openPopup(e,t,r,s){var i;Tt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Zc(e,t,r,qo(),s);return r_(e,a,ka())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Zc(e,t,r,qo(),s);return f0(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Tt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Y0(e),r=new j0(e);return t.register("authEvent",s=>(W(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xo,{type:xo},s=>{var i;const a=(i=s?.[0])===null||i===void 0?void 0:i[xo];a!==void 0&&t(!!a),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=U0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cd()||rd()||Sa()}}const u_=c_;var eu="@firebase/auth",tu="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function f_(n){qn(new mn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ud(n)},d=new Rv(r,s,i,u);return Uv(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),qn(new mn("auth-internal",e=>{const t=nn(e.getProvider("auth").getImmediate());return(r=>new h_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(eu,tu,d_(n)),qt(eu,tu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=5*60,p_=Uh("authIdTokenMaxAge")||m_;let nu=null;const g_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>p_)return;const s=t?.token;nu!==s&&(nu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function y_(n=Hh()){const e=ba(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Fv(n,{popupRedirectResolver:u_,persistence:[x0,u0,wd]}),r=Uh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=g_(i.toString());o0(t,a,()=>a(t.currentUser)),i0(t,l=>a(l))}}const s=Lh("auth");return s&&Bv(t,`http://${s}`),t}function v_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}kv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=tt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",v_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});f_("Browser");var ru=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ht,Cd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,g){function v(){}v.prototype=g.prototype,x.D=g.prototype,x.prototype=new v,x.prototype.constructor=x,x.C=function(b,E,I){for(var _=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)_[Ue-2]=arguments[Ue];return g.prototype[E].apply(b,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,g,v){v||(v=0);var b=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)b[E]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(E=0;16>E;++E)b[E]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=x.g[0],v=x.g[1],E=x.g[2];var I=x.g[3],_=g+(I^v&(E^I))+b[0]+3614090360&4294967295;g=v+(_<<7&4294967295|_>>>25),_=I+(E^g&(v^E))+b[1]+3905402710&4294967295,I=g+(_<<12&4294967295|_>>>20),_=E+(v^I&(g^v))+b[2]+606105819&4294967295,E=I+(_<<17&4294967295|_>>>15),_=v+(g^E&(I^g))+b[3]+3250441966&4294967295,v=E+(_<<22&4294967295|_>>>10),_=g+(I^v&(E^I))+b[4]+4118548399&4294967295,g=v+(_<<7&4294967295|_>>>25),_=I+(E^g&(v^E))+b[5]+1200080426&4294967295,I=g+(_<<12&4294967295|_>>>20),_=E+(v^I&(g^v))+b[6]+2821735955&4294967295,E=I+(_<<17&4294967295|_>>>15),_=v+(g^E&(I^g))+b[7]+4249261313&4294967295,v=E+(_<<22&4294967295|_>>>10),_=g+(I^v&(E^I))+b[8]+1770035416&4294967295,g=v+(_<<7&4294967295|_>>>25),_=I+(E^g&(v^E))+b[9]+2336552879&4294967295,I=g+(_<<12&4294967295|_>>>20),_=E+(v^I&(g^v))+b[10]+4294925233&4294967295,E=I+(_<<17&4294967295|_>>>15),_=v+(g^E&(I^g))+b[11]+2304563134&4294967295,v=E+(_<<22&4294967295|_>>>10),_=g+(I^v&(E^I))+b[12]+1804603682&4294967295,g=v+(_<<7&4294967295|_>>>25),_=I+(E^g&(v^E))+b[13]+4254626195&4294967295,I=g+(_<<12&4294967295|_>>>20),_=E+(v^I&(g^v))+b[14]+2792965006&4294967295,E=I+(_<<17&4294967295|_>>>15),_=v+(g^E&(I^g))+b[15]+1236535329&4294967295,v=E+(_<<22&4294967295|_>>>10),_=g+(E^I&(v^E))+b[1]+4129170786&4294967295,g=v+(_<<5&4294967295|_>>>27),_=I+(v^E&(g^v))+b[6]+3225465664&4294967295,I=g+(_<<9&4294967295|_>>>23),_=E+(g^v&(I^g))+b[11]+643717713&4294967295,E=I+(_<<14&4294967295|_>>>18),_=v+(I^g&(E^I))+b[0]+3921069994&4294967295,v=E+(_<<20&4294967295|_>>>12),_=g+(E^I&(v^E))+b[5]+3593408605&4294967295,g=v+(_<<5&4294967295|_>>>27),_=I+(v^E&(g^v))+b[10]+38016083&4294967295,I=g+(_<<9&4294967295|_>>>23),_=E+(g^v&(I^g))+b[15]+3634488961&4294967295,E=I+(_<<14&4294967295|_>>>18),_=v+(I^g&(E^I))+b[4]+3889429448&4294967295,v=E+(_<<20&4294967295|_>>>12),_=g+(E^I&(v^E))+b[9]+568446438&4294967295,g=v+(_<<5&4294967295|_>>>27),_=I+(v^E&(g^v))+b[14]+3275163606&4294967295,I=g+(_<<9&4294967295|_>>>23),_=E+(g^v&(I^g))+b[3]+4107603335&4294967295,E=I+(_<<14&4294967295|_>>>18),_=v+(I^g&(E^I))+b[8]+1163531501&4294967295,v=E+(_<<20&4294967295|_>>>12),_=g+(E^I&(v^E))+b[13]+2850285829&4294967295,g=v+(_<<5&4294967295|_>>>27),_=I+(v^E&(g^v))+b[2]+4243563512&4294967295,I=g+(_<<9&4294967295|_>>>23),_=E+(g^v&(I^g))+b[7]+1735328473&4294967295,E=I+(_<<14&4294967295|_>>>18),_=v+(I^g&(E^I))+b[12]+2368359562&4294967295,v=E+(_<<20&4294967295|_>>>12),_=g+(v^E^I)+b[5]+4294588738&4294967295,g=v+(_<<4&4294967295|_>>>28),_=I+(g^v^E)+b[8]+2272392833&4294967295,I=g+(_<<11&4294967295|_>>>21),_=E+(I^g^v)+b[11]+1839030562&4294967295,E=I+(_<<16&4294967295|_>>>16),_=v+(E^I^g)+b[14]+4259657740&4294967295,v=E+(_<<23&4294967295|_>>>9),_=g+(v^E^I)+b[1]+2763975236&4294967295,g=v+(_<<4&4294967295|_>>>28),_=I+(g^v^E)+b[4]+1272893353&4294967295,I=g+(_<<11&4294967295|_>>>21),_=E+(I^g^v)+b[7]+4139469664&4294967295,E=I+(_<<16&4294967295|_>>>16),_=v+(E^I^g)+b[10]+3200236656&4294967295,v=E+(_<<23&4294967295|_>>>9),_=g+(v^E^I)+b[13]+681279174&4294967295,g=v+(_<<4&4294967295|_>>>28),_=I+(g^v^E)+b[0]+3936430074&4294967295,I=g+(_<<11&4294967295|_>>>21),_=E+(I^g^v)+b[3]+3572445317&4294967295,E=I+(_<<16&4294967295|_>>>16),_=v+(E^I^g)+b[6]+76029189&4294967295,v=E+(_<<23&4294967295|_>>>9),_=g+(v^E^I)+b[9]+3654602809&4294967295,g=v+(_<<4&4294967295|_>>>28),_=I+(g^v^E)+b[12]+3873151461&4294967295,I=g+(_<<11&4294967295|_>>>21),_=E+(I^g^v)+b[15]+530742520&4294967295,E=I+(_<<16&4294967295|_>>>16),_=v+(E^I^g)+b[2]+3299628645&4294967295,v=E+(_<<23&4294967295|_>>>9),_=g+(E^(v|~I))+b[0]+4096336452&4294967295,g=v+(_<<6&4294967295|_>>>26),_=I+(v^(g|~E))+b[7]+1126891415&4294967295,I=g+(_<<10&4294967295|_>>>22),_=E+(g^(I|~v))+b[14]+2878612391&4294967295,E=I+(_<<15&4294967295|_>>>17),_=v+(I^(E|~g))+b[5]+4237533241&4294967295,v=E+(_<<21&4294967295|_>>>11),_=g+(E^(v|~I))+b[12]+1700485571&4294967295,g=v+(_<<6&4294967295|_>>>26),_=I+(v^(g|~E))+b[3]+2399980690&4294967295,I=g+(_<<10&4294967295|_>>>22),_=E+(g^(I|~v))+b[10]+4293915773&4294967295,E=I+(_<<15&4294967295|_>>>17),_=v+(I^(E|~g))+b[1]+2240044497&4294967295,v=E+(_<<21&4294967295|_>>>11),_=g+(E^(v|~I))+b[8]+1873313359&4294967295,g=v+(_<<6&4294967295|_>>>26),_=I+(v^(g|~E))+b[15]+4264355552&4294967295,I=g+(_<<10&4294967295|_>>>22),_=E+(g^(I|~v))+b[6]+2734768916&4294967295,E=I+(_<<15&4294967295|_>>>17),_=v+(I^(E|~g))+b[13]+1309151649&4294967295,v=E+(_<<21&4294967295|_>>>11),_=g+(E^(v|~I))+b[4]+4149444226&4294967295,g=v+(_<<6&4294967295|_>>>26),_=I+(v^(g|~E))+b[11]+3174756917&4294967295,I=g+(_<<10&4294967295|_>>>22),_=E+(g^(I|~v))+b[2]+718787259&4294967295,E=I+(_<<15&4294967295|_>>>17),_=v+(I^(E|~g))+b[9]+3951481745&4294967295,x.g[0]=x.g[0]+g&4294967295,x.g[1]=x.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,x.g[2]=x.g[2]+E&4294967295,x.g[3]=x.g[3]+I&4294967295}r.prototype.u=function(x,g){g===void 0&&(g=x.length);for(var v=g-this.blockSize,b=this.B,E=this.h,I=0;I<g;){if(E==0)for(;I<=v;)s(this,x,I),I+=this.blockSize;if(typeof x=="string"){for(;I<g;)if(b[E++]=x.charCodeAt(I++),E==this.blockSize){s(this,b),E=0;break}}else for(;I<g;)if(b[E++]=x[I++],E==this.blockSize){s(this,b),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var g=1;g<x.length-8;++g)x[g]=0;var v=8*this.o;for(g=x.length-8;g<x.length;++g)x[g]=v&255,v/=256;for(this.u(x),x=Array(16),g=v=0;4>g;++g)for(var b=0;32>b;b+=8)x[v++]=this.g[g]>>>b&255;return x};function i(x,g){var v=l;return Object.prototype.hasOwnProperty.call(v,x)?v[x]:v[x]=g(x)}function a(x,g){this.h=g;for(var v=[],b=!0,E=x.length-1;0<=E;E--){var I=x[E]|0;b&&I==g||(v[E]=I,b=!1)}this.g=v}var l={};function u(x){return-128<=x&&128>x?i(x,function(g){return new a([g|0],0>g?-1:0)}):new a([x|0],0>x?-1:0)}function d(x){if(isNaN(x)||!isFinite(x))return y;if(0>x)return A(d(-x));for(var g=[],v=1,b=0;x>=v;b++)g[b]=x/v|0,v*=4294967296;return new a(g,0)}function m(x,g){if(x.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(x.charAt(0)=="-")return A(m(x.substring(1),g));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(g,8)),b=y,E=0;E<x.length;E+=8){var I=Math.min(8,x.length-E),_=parseInt(x.substring(E,E+I),g);8>I?(I=d(Math.pow(g,I)),b=b.j(I).add(d(_))):(b=b.j(v),b=b.add(d(_)))}return b}var y=u(0),w=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(N(this))return-A(this).m();for(var x=0,g=1,v=0;v<this.g.length;v++){var b=this.i(v);x+=(0<=b?b:4294967296+b)*g,g*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(R(this))return"0";if(N(this))return"-"+A(this).toString(x);for(var g=d(Math.pow(x,6)),v=this,b="";;){var E=K(v,g).g;v=j(v,E.j(g));var I=((0<v.g.length?v.g[0]:v.h)>>>0).toString(x);if(v=E,R(v))return I+b;for(;6>I.length;)I="0"+I;b=I+b}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function R(x){if(x.h!=0)return!1;for(var g=0;g<x.g.length;g++)if(x.g[g]!=0)return!1;return!0}function N(x){return x.h==-1}n.l=function(x){return x=j(this,x),N(x)?-1:R(x)?0:1};function A(x){for(var g=x.g.length,v=[],b=0;b<g;b++)v[b]=~x.g[b];return new a(v,~x.h).add(w)}n.abs=function(){return N(this)?A(this):this},n.add=function(x){for(var g=Math.max(this.g.length,x.g.length),v=[],b=0,E=0;E<=g;E++){var I=b+(this.i(E)&65535)+(x.i(E)&65535),_=(I>>>16)+(this.i(E)>>>16)+(x.i(E)>>>16);b=_>>>16,I&=65535,_&=65535,v[E]=_<<16|I}return new a(v,v[v.length-1]&-2147483648?-1:0)};function j(x,g){return x.add(A(g))}n.j=function(x){if(R(this)||R(x))return y;if(N(this))return N(x)?A(this).j(A(x)):A(A(this).j(x));if(N(x))return A(this.j(A(x)));if(0>this.l(S)&&0>x.l(S))return d(this.m()*x.m());for(var g=this.g.length+x.g.length,v=[],b=0;b<2*g;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var E=0;E<x.g.length;E++){var I=this.i(b)>>>16,_=this.i(b)&65535,Ue=x.i(E)>>>16,We=x.i(E)&65535;v[2*b+2*E]+=_*We,V(v,2*b+2*E),v[2*b+2*E+1]+=I*We,V(v,2*b+2*E+1),v[2*b+2*E+1]+=_*Ue,V(v,2*b+2*E+1),v[2*b+2*E+2]+=I*Ue,V(v,2*b+2*E+2)}for(b=0;b<g;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=g;b<2*g;b++)v[b]=0;return new a(v,0)};function V(x,g){for(;(x[g]&65535)!=x[g];)x[g+1]+=x[g]>>>16,x[g]&=65535,g++}function M(x,g){this.g=x,this.h=g}function K(x,g){if(R(g))throw Error("division by zero");if(R(x))return new M(y,y);if(N(x))return g=K(A(x),g),new M(A(g.g),A(g.h));if(N(g))return g=K(x,A(g)),new M(A(g.g),g.h);if(30<x.g.length){if(N(x)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var v=w,b=g;0>=b.l(x);)v=ie(v),b=ie(b);var E=re(v,1),I=re(b,1);for(b=re(b,2),v=re(v,2);!R(b);){var _=I.add(b);0>=_.l(x)&&(E=E.add(v),I=_),b=re(b,1),v=re(v,1)}return g=j(x,E.j(g)),new M(E,g)}for(E=y;0<=x.l(g);){for(v=Math.max(1,Math.floor(x.m()/g.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),I=d(v),_=I.j(g);N(_)||0<_.l(x);)v-=b,I=d(v),_=I.j(g);R(I)&&(I=w),E=E.add(I),x=j(x,_)}return new M(E,x)}n.A=function(x){return K(this,x).h},n.and=function(x){for(var g=Math.max(this.g.length,x.g.length),v=[],b=0;b<g;b++)v[b]=this.i(b)&x.i(b);return new a(v,this.h&x.h)},n.or=function(x){for(var g=Math.max(this.g.length,x.g.length),v=[],b=0;b<g;b++)v[b]=this.i(b)|x.i(b);return new a(v,this.h|x.h)},n.xor=function(x){for(var g=Math.max(this.g.length,x.g.length),v=[],b=0;b<g;b++)v[b]=this.i(b)^x.i(b);return new a(v,this.h^x.h)};function ie(x){for(var g=x.g.length+1,v=[],b=0;b<g;b++)v[b]=x.i(b)<<1|x.i(b-1)>>>31;return new a(v,x.h)}function re(x,g){var v=g>>5;g%=32;for(var b=x.g.length-v,E=[],I=0;I<b;I++)E[I]=0<g?x.i(I+v)>>>g|x.i(I+v+1)<<32-g:x.i(I+v);return new a(E,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Cd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Ht=a}).apply(typeof ru<"u"?ru:typeof self<"u"?self:typeof window<"u"?window:{});var js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rd,Cr,kd,Xs,Xo,Nd,Dd,Vd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,f){return o==Array.prototype||o==Object.prototype||(o[h]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof js=="object"&&js];for(var h=0;h<o.length;++h){var f=o[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,h){if(h)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var T=o[p];if(!(T in f))break e;f=f[T]}o=o[o.length-1],p=f[o],h=h(p),h!=p&&h!=null&&e(f,o,{configurable:!0,writable:!0,value:h})}}function i(o,h){o instanceof String&&(o+="");var f=0,p=!1,T={next:function(){if(!p&&f<o.length){var P=f++;return{value:h(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(o){return o||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function d(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function m(o,h,f){return o.call.apply(o.bind,arguments)}function y(o,h,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,p),o.apply(h,T)}}return function(){return o.apply(h,arguments)}}function w(o,h,f){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,w.apply(null,arguments)}function S(o,h){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function R(o,h){function f(){}f.prototype=h.prototype,o.aa=h.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,T,P){for(var O=Array(arguments.length-2),se=2;se<arguments.length;se++)O[se-2]=arguments[se];return h.prototype[T].apply(p,O)}}function N(o){const h=o.length;if(0<h){const f=Array(h);for(let p=0;p<h;p++)f[p]=o[p];return f}return[]}function A(o,h){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(u(p)){const T=o.length||0,P=p.length||0;o.length=T+P;for(let O=0;O<P;O++)o[T+O]=p[O]}else o.push(p)}}class j{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(o){return/^[\s\xa0]*$/.test(o)}function M(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var ie=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function re(o,h,f){for(const p in o)h.call(f,o[p],p,o)}function x(o,h){for(const f in o)h.call(void 0,o[f],f,o)}function g(o){const h={};for(const f in o)h[f]=o[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,h){let f,p;for(let T=1;T<arguments.length;T++){p=arguments[T];for(f in p)o[f]=p[f];for(let P=0;P<v.length;P++)f=v[P],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function E(o){var h=1;o=o.split(":");const f=[];for(;0<h&&o.length;)f.push(o.shift()),h--;return o.length&&f.push(o.join(":")),f}function I(o){l.setTimeout(()=>{throw o},0)}function _(){var o=In;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class Ue{constructor(){this.h=this.g=null}add(h,f){const p=We.get();p.set(h,f),this.h?this.h.next=p:this.g=p,this.h=p}}var We=new j(()=>new Qe,o=>o.reset());class Qe{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,z=!1,In=new Ue,ur=()=>{const o=l.Promise.resolve(void 0);Be=()=>{o.then(ps)}};var ps=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(f){I(f)}var h=We;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}z=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var Ve=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return o}();function nt(o,h){if(ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(ie){e:{try{K(h.nodeName);var T=!0;break e}catch{}T=!1}T||(h=null)}}else f=="mouseover"?h=o.fromElement:f=="mouseout"&&(h=o.toElement);this.relatedTarget=h,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:gs[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&nt.aa.h.call(this)}}R(nt,ee);var gs={2:"touch",3:"pen",4:"mouse"};nt.prototype.h=function(){nt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var le="closure_listenable_"+(1e6*Math.random()|0),ys=0;function An(o,h,f,p,T){this.listener=o,this.proxy=null,this.src=h,this.type=f,this.capture=!!p,this.ha=T,this.key=++ys,this.da=this.fa=!1}function mt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ct(o){this.src=o,this.g={},this.h=0}Ct.prototype.add=function(o,h,f,p,T){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var O=Hi(o,h,p,T);return-1<O?(h=o[O],f||(h.fa=!1)):(h=new An(h,this.src,P,!!p,T),h.fa=f,o.push(h)),h};function Rt(o,h){var f=h.type;if(f in o.g){var p=o.g[f],T=Array.prototype.indexOf.call(p,h,void 0),P;(P=0<=T)&&Array.prototype.splice.call(p,T,1),P&&(mt(h),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Hi(o,h,f,p){for(var T=0;T<o.length;++T){var P=o[T];if(!P.da&&P.listener==h&&P.capture==!!f&&P.ha==p)return T}return-1}var Gi="closure_lm_"+(1e6*Math.random()|0),Ki={};function gl(o,h,f,p,T){if(Array.isArray(h)){for(var P=0;P<h.length;P++)gl(o,h[P],f,p,T);return null}return f=_l(f),o&&o[le]?o.K(h,f,d(p)?!!p.capture:!1,T):Sm(o,h,f,!1,p,T)}function Sm(o,h,f,p,T,P){if(!h)throw Error("Invalid event type");var O=d(T)?!!T.capture:!!T,se=Qi(o);if(se||(o[Gi]=se=new Ct(o)),f=se.add(h,f,p,O,P),f.proxy)return f;if(p=Pm(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)Ve||(T=O),T===void 0&&(T=!1),o.addEventListener(h.toString(),p,T);else if(o.attachEvent)o.attachEvent(vl(h.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Pm(){function o(f){return h.call(o.src,o.listener,f)}const h=Cm;return o}function yl(o,h,f,p,T){if(Array.isArray(h))for(var P=0;P<h.length;P++)yl(o,h[P],f,p,T);else p=d(p)?!!p.capture:!!p,f=_l(f),o&&o[le]?(o=o.i,h=String(h).toString(),h in o.g&&(P=o.g[h],f=Hi(P,f,p,T),-1<f&&(mt(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[h],o.h--)))):o&&(o=Qi(o))&&(h=o.g[h.toString()],o=-1,h&&(o=Hi(h,f,p,T)),(f=-1<o?h[o]:null)&&Xi(f))}function Xi(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[le])Rt(h.i,o);else{var f=o.type,p=o.proxy;h.removeEventListener?h.removeEventListener(f,p,o.capture):h.detachEvent?h.detachEvent(vl(f),p):h.addListener&&h.removeListener&&h.removeListener(p),(f=Qi(h))?(Rt(f,o),f.h==0&&(f.src=null,h[Gi]=null)):mt(o)}}}function vl(o){return o in Ki?Ki[o]:Ki[o]="on"+o}function Cm(o,h){if(o.da)o=!0;else{h=new nt(h,this);var f=o.listener,p=o.ha||o.src;o.fa&&Xi(o),o=f.call(p,h)}return o}function Qi(o){return o=o[Gi],o instanceof Ct?o:null}var Yi="__closure_events_fn_"+(1e9*Math.random()>>>0);function _l(o){return typeof o=="function"?o:(o[Yi]||(o[Yi]=function(h){return o.handleEvent(h)}),o[Yi])}function Se(){qe.call(this),this.i=new Ct(this),this.M=this,this.F=null}R(Se,qe),Se.prototype[le]=!0,Se.prototype.removeEventListener=function(o,h,f,p){yl(this,o,h,f,p)};function je(o,h){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=h.type||h,typeof h=="string")h=new ee(h,o);else if(h instanceof ee)h.target=h.target||o;else{var T=h;h=new ee(p,o),b(h,T)}if(T=!0,f)for(var P=f.length-1;0<=P;P--){var O=h.g=f[P];T=vs(O,p,!0,h)&&T}if(O=h.g=o,T=vs(O,p,!0,h)&&T,T=vs(O,p,!1,h)&&T,f)for(P=0;P<f.length;P++)O=h.g=f[P],T=vs(O,p,!1,h)&&T}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var f=o.g[h],p=0;p<f.length;p++)mt(f[p]);delete o.g[h],o.h--}}this.F=null},Se.prototype.K=function(o,h,f,p){return this.i.add(String(o),h,!1,f,p)},Se.prototype.L=function(o,h,f,p){return this.i.add(String(o),h,!0,f,p)};function vs(o,h,f,p){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var T=!0,P=0;P<h.length;++P){var O=h[P];if(O&&!O.da&&O.capture==f){var se=O.listener,Ee=O.ha||O.src;O.fa&&Rt(o.i,O),T=se.call(Ee,p)!==!1&&T}}return T&&!p.defaultPrevented}function wl(o,h,f){if(typeof o=="function")f&&(o=w(o,f));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(o,h||0)}function bl(o){o.g=wl(()=>{o.g=null,o.i&&(o.i=!1,bl(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class Rm extends qe{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:bl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hr(o){qe.call(this),this.h=o,this.g={}}R(hr,qe);var xl=[];function El(o){re(o.g,function(h,f){this.g.hasOwnProperty(f)&&Xi(h)},o),o.g={}}hr.prototype.N=function(){hr.aa.N.call(this),El(this)},hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ji=l.JSON.stringify,km=l.JSON.parse,Nm=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Zi(){}Zi.prototype.h=null;function Tl(o){return o.h||(o.h=o.i())}function Il(){}var dr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eo(){ee.call(this,"d")}R(eo,ee);function to(){ee.call(this,"c")}R(to,ee);var rn={},Al=null;function _s(){return Al=Al||new Se}rn.La="serverreachability";function Sl(o){ee.call(this,rn.La,o)}R(Sl,ee);function fr(o){const h=_s();je(h,new Sl(h))}rn.STAT_EVENT="statevent";function Pl(o,h){ee.call(this,rn.STAT_EVENT,o),this.stat=h}R(Pl,ee);function Oe(o){const h=_s();je(h,new Pl(h,o))}rn.Ma="timingevent";function Cl(o,h){ee.call(this,rn.Ma,o),this.size=h}R(Cl,ee);function mr(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},h)}function pr(){this.g=!0}pr.prototype.xa=function(){this.g=!1};function Dm(o,h,f,p,T,P){o.info(function(){if(o.g)if(P)for(var O="",se=P.split("&"),Ee=0;Ee<se.length;Ee++){var te=se[Ee].split("=");if(1<te.length){var Pe=te[0];te=te[1];var Ce=Pe.split("_");O=2<=Ce.length&&Ce[1]=="type"?O+(Pe+"="+te+"&"):O+(Pe+"=redacted&")}}else O=null;else O=P;return"XMLHTTP REQ ("+p+") [attempt "+T+"]: "+h+`
`+f+`
`+O})}function Vm(o,h,f,p,T,P,O){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+T+"]: "+h+`
`+f+`
`+P+" "+O})}function Sn(o,h,f,p){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+Om(o,f)+(p?" "+p:"")})}function jm(o,h){o.info(function(){return"TIMEOUT: "+h})}pr.prototype.info=function(){};function Om(o,h){if(!o.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var T=p[1];if(Array.isArray(T)&&!(1>T.length)){var P=T[0];if(P!="noop"&&P!="stop"&&P!="close")for(var O=1;O<T.length;O++)T[O]=""}}}}return Ji(f)}catch{return h}}var ws={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Rl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},no;function bs(){}R(bs,Zi),bs.prototype.g=function(){return new XMLHttpRequest},bs.prototype.i=function(){return{}},no=new bs;function kt(o,h,f,p){this.j=o,this.i=h,this.l=f,this.R=p||1,this.U=new hr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kl}function kl(){this.i=null,this.g="",this.h=!1}var Nl={},ro={};function so(o,h,f){o.L=1,o.v=Is(pt(h)),o.m=f,o.P=!0,Dl(o,null)}function Dl(o,h){o.F=Date.now(),xs(o),o.A=pt(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Gl(f.i,"t",p),o.C=0,f=o.j.J,o.h=new kl,o.g=hc(o.j,f?h:null,!o.m),0<o.O&&(o.M=new Rm(w(o.Y,o,o.g),o.O)),h=o.U,f=o.g,p=o.ca;var T="readystatechange";Array.isArray(T)||(T&&(xl[0]=T.toString()),T=xl);for(var P=0;P<T.length;P++){var O=gl(f,T[P],p||h.handleEvent,!1,h.h||h);if(!O)break;h.g[O.key]=O}h=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),fr(),Dm(o.i,o.u,o.A,o.l,o.R,o.m)}kt.prototype.ca=function(o){o=o.target;const h=this.M;h&&gt(o)==3?h.j():this.Y(o)},kt.prototype.Y=function(o){try{if(o==this.g)e:{const Ce=gt(this.g);var h=this.g.Ba();const Rn=this.g.Z();if(!(3>Ce)&&(Ce!=3||this.g&&(this.h.h||this.g.oa()||ec(this.g)))){this.J||Ce!=4||h==7||(h==8||0>=Rn?fr(3):fr(2)),io(this);var f=this.g.Z();this.X=f;t:if(Vl(this)){var p=ec(this.g);o="";var T=p.length,P=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sn(this),gr(this);var O="";break t}this.h.i=new l.TextDecoder}for(h=0;h<T;h++)this.h.h=!0,o+=this.h.i.decode(p[h],{stream:!(P&&h==T-1)});p.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=f==200,Vm(this.i,this.u,this.A,this.l,this.R,Ce,f),this.o){if(this.T&&!this.K){t:{if(this.g){var se,Ee=this.g;if((se=Ee.g?Ee.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(se)){var te=se;break t}}te=null}if(f=te)Sn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oo(this,f);else{this.o=!1,this.s=3,Oe(12),sn(this),gr(this);break e}}if(this.P){f=!0;let Ye;for(;!this.J&&this.C<O.length;)if(Ye=Mm(this,O),Ye==ro){Ce==4&&(this.s=4,Oe(14),f=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==Nl){this.s=4,Oe(15),Sn(this.i,this.l,O,"[Invalid Chunk]"),f=!1;break}else Sn(this.i,this.l,Ye,null),oo(this,Ye);if(Vl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ce!=4||O.length!=0||this.h.h||(this.s=1,Oe(16),f=!1),this.o=this.o&&f,!f)Sn(this.i,this.l,O,"[Invalid Chunked Response]"),sn(this),gr(this);else if(0<O.length&&!this.W){this.W=!0;var Pe=this.j;Pe.g==this&&Pe.ba&&!Pe.M&&(Pe.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),fo(Pe),Pe.M=!0,Oe(11))}}else Sn(this.i,this.l,O,null),oo(this,O);Ce==4&&sn(this),this.o&&!this.J&&(Ce==4?ac(this.j,this):(this.o=!1,xs(this)))}else ep(this.g),f==400&&0<O.indexOf("Unknown SID")?(this.s=3,Oe(12)):(this.s=0,Oe(13)),sn(this),gr(this)}}}catch{}finally{}};function Vl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Mm(o,h){var f=o.C,p=h.indexOf(`
`,f);return p==-1?ro:(f=Number(h.substring(f,p)),isNaN(f)?Nl:(p+=1,p+f>h.length?ro:(h=h.slice(p,p+f),o.C=p+f,h)))}kt.prototype.cancel=function(){this.J=!0,sn(this)};function xs(o){o.S=Date.now()+o.I,jl(o,o.I)}function jl(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=mr(w(o.ba,o),h)}function io(o){o.B&&(l.clearTimeout(o.B),o.B=null)}kt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(jm(this.i,this.A),this.L!=2&&(fr(),Oe(17)),sn(this),this.s=2,gr(this)):jl(this,this.S-o)};function gr(o){o.j.G==0||o.J||ac(o.j,o)}function sn(o){io(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,El(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function oo(o,h){try{var f=o.j;if(f.G!=0&&(f.g==o||ao(f.h,o))){if(!o.K&&ao(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(h)}catch{p=null}if(Array.isArray(p)&&p.length==3){var T=p;if(T[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)ks(f),Cs(f);else break e;ho(f),Oe(18)}}else f.za=T[1],0<f.za-f.T&&37500>T[2]&&f.F&&f.v==0&&!f.C&&(f.C=mr(w(f.Za,f),6e3));if(1>=Ll(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else an(f,11)}else if((o.K||f.g==o)&&ks(f),!V(h))for(T=f.Da.g.parse(h),h=0;h<T.length;h++){let te=T[h];if(f.T=te[0],te=te[1],f.G==2)if(te[0]=="c"){f.K=te[1],f.ia=te[2];const Pe=te[3];Pe!=null&&(f.la=Pe,f.j.info("VER="+f.la));const Ce=te[4];Ce!=null&&(f.Aa=Ce,f.j.info("SVER="+f.Aa));const Rn=te[5];Rn!=null&&typeof Rn=="number"&&0<Rn&&(p=1.5*Rn,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Ye=o.g;if(Ye){const Ds=Ye.g?Ye.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ds){var P=p.h;P.g||Ds.indexOf("spdy")==-1&&Ds.indexOf("quic")==-1&&Ds.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(lo(P,P.h),P.h=null))}if(p.D){const mo=Ye.g?Ye.g.getResponseHeader("X-HTTP-Session-Id"):null;mo&&(p.ya=mo,oe(p.I,p.D,mo))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var O=o;if(p.qa=uc(p,p.J?p.ia:null,p.W),O.K){Fl(p.h,O);var se=O,Ee=p.L;Ee&&(se.I=Ee),se.B&&(io(se),xs(se)),p.g=O}else ic(p);0<f.i.length&&Rs(f)}else te[0]!="stop"&&te[0]!="close"||an(f,7);else f.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?an(f,7):uo(f):te[0]!="noop"&&f.l&&f.l.ta(te),f.v=0)}}fr(4)}catch{}}var Lm=class{constructor(o,h){this.g=o,this.map=h}};function Ol(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ml(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ll(o){return o.h?1:o.g?o.g.size:0}function ao(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function lo(o,h){o.g?o.g.add(h):o.h=h}function Fl(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Ol.prototype.cancel=function(){if(this.i=Ul(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ul(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const f of o.g.values())h=h.concat(f.D);return h}return N(o.i)}function Fm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var h=[],f=o.length,p=0;p<f;p++)h.push(o[p]);return h}h=[],f=0;for(p in o)h[f++]=o[p];return h}function Um(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var h=[];o=o.length;for(var f=0;f<o;f++)h.push(f);return h}h=[],f=0;for(const p in o)h[f++]=p;return h}}}function Bl(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var f=Um(o),p=Fm(o),T=p.length,P=0;P<T;P++)h.call(void 0,p[P],f&&f[P],o)}var zl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bm(o,h){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),T=null;if(0<=p){var P=o[f].substring(0,p);T=o[f].substring(p+1)}else P=o[f];h(P,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function on(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof on){this.h=o.h,Es(this,o.j),this.o=o.o,this.g=o.g,Ts(this,o.s),this.l=o.l;var h=o.i,f=new _r;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),$l(this,f),this.m=o.m}else o&&(h=String(o).match(zl))?(this.h=!1,Es(this,h[1]||"",!0),this.o=yr(h[2]||""),this.g=yr(h[3]||"",!0),Ts(this,h[4]),this.l=yr(h[5]||"",!0),$l(this,h[6]||"",!0),this.m=yr(h[7]||"")):(this.h=!1,this.i=new _r(null,this.h))}on.prototype.toString=function(){var o=[],h=this.j;h&&o.push(vr(h,Wl,!0),":");var f=this.g;return(f||h=="file")&&(o.push("//"),(h=this.o)&&o.push(vr(h,Wl,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(vr(f,f.charAt(0)=="/"?Wm:$m,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",vr(f,Hm)),o.join("")};function pt(o){return new on(o)}function Es(o,h,f){o.j=f?yr(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function Ts(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function $l(o,h,f){h instanceof _r?(o.i=h,Gm(o.i,o.h)):(f||(h=vr(h,qm)),o.i=new _r(h,o.h))}function oe(o,h,f){o.i.set(h,f)}function Is(o){return oe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function yr(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function vr(o,h,f){return typeof o=="string"?(o=encodeURI(o).replace(h,zm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function zm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Wl=/[#\/\?@]/g,$m=/[#\?:]/g,Wm=/[#\?]/g,qm=/[#\?@]/g,Hm=/#/g;function _r(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function Nt(o){o.g||(o.g=new Map,o.h=0,o.i&&Bm(o.i,function(h,f){o.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=_r.prototype,n.add=function(o,h){Nt(this),this.i=null,o=Pn(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(h),this.h+=1,this};function ql(o,h){Nt(o),h=Pn(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Hl(o,h){return Nt(o),h=Pn(o,h),o.g.has(h)}n.forEach=function(o,h){Nt(this),this.g.forEach(function(f,p){f.forEach(function(T){o.call(h,T,p,this)},this)},this)},n.na=function(){Nt(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let p=0;p<h.length;p++){const T=o[p];for(let P=0;P<T.length;P++)f.push(h[p])}return f},n.V=function(o){Nt(this);let h=[];if(typeof o=="string")Hl(this,o)&&(h=h.concat(this.g.get(Pn(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)h=h.concat(o[f])}return h},n.set=function(o,h){return Nt(this),this.i=null,o=Pn(this,o),Hl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},n.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function Gl(o,h,f){ql(o,h),0<f.length&&(o.i=null,o.g.set(Pn(o,h),N(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var p=h[f];const P=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var T=P;O[p]!==""&&(T+="="+encodeURIComponent(String(O[p]))),o.push(T)}}return this.i=o.join("&")};function Pn(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function Gm(o,h){h&&!o.j&&(Nt(o),o.i=null,o.g.forEach(function(f,p){var T=p.toLowerCase();p!=T&&(ql(this,p),Gl(this,T,f))},o)),o.j=h}function Km(o,h){const f=new pr;if(l.Image){const p=new Image;p.onload=S(Dt,f,"TestLoadImage: loaded",!0,h,p),p.onerror=S(Dt,f,"TestLoadImage: error",!1,h,p),p.onabort=S(Dt,f,"TestLoadImage: abort",!1,h,p),p.ontimeout=S(Dt,f,"TestLoadImage: timeout",!1,h,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else h(!1)}function Xm(o,h){const f=new pr,p=new AbortController,T=setTimeout(()=>{p.abort(),Dt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(T),P.ok?Dt(f,"TestPingServer: ok",!0,h):Dt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(T),Dt(f,"TestPingServer: error",!1,h)})}function Dt(o,h,f,p,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),p(f)}catch{}}function Qm(){this.g=new Nm}function Ym(o,h,f){const p=f||"";try{Bl(o,function(T,P){let O=T;d(T)&&(O=Ji(T)),h.push(p+P+"="+encodeURIComponent(O))})}catch(T){throw h.push(p+"type="+encodeURIComponent("_badmap")),T}}function As(o){this.l=o.Ub||null,this.j=o.eb||!1}R(As,Zi),As.prototype.g=function(){return new Ss(this.l,this.j)},As.prototype.i=function(o){return function(){return o}}({});function Ss(o,h){Se.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ss,Se),n=Ss.prototype,n.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,br(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,br(this)),this.g&&(this.readyState=3,br(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Kl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Kl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?wr(this):br(this),this.readyState==3&&Kl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,wr(this))},n.Qa=function(o){this.g&&(this.response=o,wr(this))},n.ga=function(){this.g&&wr(this)};function wr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,br(o)}n.setRequestHeader=function(o,h){this.u.append(o,h)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=h.next();return o.join(`\r
`)};function br(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Xl(o){let h="";return re(o,function(f,p){h+=p,h+=":",h+=f,h+=`\r
`}),h}function co(o,h,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Xl(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):oe(o,h,f))}function he(o){Se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(he,Se);var Jm=/^https?$/i,Zm=["POST","PUT"];n=he.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,h,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():no.g(),this.v=this.o?Tl(this.o):Tl(no),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(P){Ql(this,P);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var T in p)f.set(T,p[T]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())f.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),T=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Zm,h,void 0))||p||T||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,O]of f)this.g.setRequestHeader(P,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zl(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Ql(this,P)}};function Ql(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,Yl(o),Ps(o)}function Yl(o){o.A||(o.A=!0,je(o,"complete"),je(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,je(this,"complete"),je(this,"abort"),Ps(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ps(this,!0)),he.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Jl(this):this.bb())},n.bb=function(){Jl(this)};function Jl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||gt(o)!=4||o.Z()!=2)){if(o.u&&gt(o)==4)wl(o.Ea,0,o);else if(je(o,"readystatechange"),gt(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var p;if(p=O===0){var T=String(o.D).match(zl)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),p=!Jm.test(T?T.toLowerCase():"")}f=p}if(f)je(o,"complete"),je(o,"success");else{o.m=6;try{var P=2<gt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Yl(o)}}finally{Ps(o)}}}}function Ps(o,h){if(o.g){Zl(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||je(o,"ready");try{f.onreadystatechange=p}catch{}}}function Zl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function gt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),km(h)}};function ec(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ep(o){const h={};o=(o.g&&2<=gt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(V(o[p]))continue;var f=E(o[p]);const T=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=h[T]||[];h[T]=P,P.push(f)}x(h,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xr(o,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||h}function tc(o){this.Aa=0,this.i=[],this.j=new pr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xr("baseRetryDelayMs",5e3,o),this.cb=xr("retryDelaySeedMs",1e4,o),this.Wa=xr("forwardChannelMaxRetries",2,o),this.wa=xr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ol(o&&o.concurrentRequestLimit),this.Da=new Qm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=tc.prototype,n.la=8,n.G=1,n.connect=function(o,h,f,p){Oe(0),this.W=o,this.H=h||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=uc(this,null,this.W),Rs(this)};function uo(o){if(nc(o),o.G==3){var h=o.U++,f=pt(o.I);if(oe(f,"SID",o.K),oe(f,"RID",h),oe(f,"TYPE","terminate"),Er(o,f),h=new kt(o,o.j,h),h.L=2,h.v=Is(pt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=hc(h.j,null),h.g.ea(h.v)),h.F=Date.now(),xs(h)}cc(o)}function Cs(o){o.g&&(fo(o),o.g.cancel(),o.g=null)}function nc(o){Cs(o),o.u&&(l.clearTimeout(o.u),o.u=null),ks(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Rs(o){if(!Ml(o.h)&&!o.s){o.s=!0;var h=o.Ga;Be||ur(),z||(Be(),z=!0),In.add(h,o),o.B=0}}function tp(o,h){return Ll(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=mr(w(o.Ga,o,h),lc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const T=new kt(this,this.j,o);let P=this.o;if(this.S&&(P?(P=g(P),b(P,this.S)):P=this.S),this.m!==null||this.O||(T.H=P,P=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(h+=p,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=sc(this,T,h),f=pt(this.I),oe(f,"RID",o),oe(f,"CVER",22),this.D&&oe(f,"X-HTTP-Session-Id",this.D),Er(this,f),P&&(this.O?h="headers="+encodeURIComponent(String(Xl(P)))+"&"+h:this.m&&co(f,this.m,P)),lo(this.h,T),this.Ua&&oe(f,"TYPE","init"),this.P?(oe(f,"$req",h),oe(f,"SID","null"),T.T=!0,so(T,f,null)):so(T,f,h),this.G=2}}else this.G==3&&(o?rc(this,o):this.i.length==0||Ml(this.h)||rc(this))};function rc(o,h){var f;h?f=h.l:f=o.U++;const p=pt(o.I);oe(p,"SID",o.K),oe(p,"RID",f),oe(p,"AID",o.T),Er(o,p),o.m&&o.o&&co(p,o.m,o.o),f=new kt(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),h&&(o.i=h.D.concat(o.i)),h=sc(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),lo(o.h,f),so(f,p,h)}function Er(o,h){o.H&&re(o.H,function(f,p){oe(h,p,f)}),o.l&&Bl({},function(f,p){oe(h,p,f)})}function sc(o,h,f){f=Math.min(o.i.length,f);var p=o.l?w(o.l.Na,o.l,o):null;e:{var T=o.i;let P=-1;for(;;){const O=["count="+f];P==-1?0<f?(P=T[0].g,O.push("ofs="+P)):P=0:O.push("ofs="+P);let se=!0;for(let Ee=0;Ee<f;Ee++){let te=T[Ee].g;const Pe=T[Ee].map;if(te-=P,0>te)P=Math.max(0,T[Ee].g-100),se=!1;else try{Ym(Pe,O,"req"+te+"_")}catch{p&&p(Pe)}}if(se){p=O.join("&");break e}}}return o=o.i.splice(0,f),h.D=o,p}function ic(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;Be||ur(),z||(Be(),z=!0),In.add(h,o),o.v=0}}function ho(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=mr(w(o.Fa,o),lc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,oc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=mr(w(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Oe(10),Cs(this),oc(this))};function fo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function oc(o){o.g=new kt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=pt(o.qa);oe(h,"RID","rpc"),oe(h,"SID",o.K),oe(h,"AID",o.T),oe(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&oe(h,"TO",o.ja),oe(h,"TYPE","xmlhttp"),Er(o,h),o.m&&o.o&&co(h,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Is(pt(h)),f.m=null,f.P=!0,Dl(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Cs(this),ho(this),Oe(19))};function ks(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function ac(o,h){var f=null;if(o.g==h){ks(o),fo(o),o.g=null;var p=2}else if(ao(o.h,h))f=h.D,Fl(o.h,h),p=1;else return;if(o.G!=0){if(h.o)if(p==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var T=o.B;p=_s(),je(p,new Cl(p,f)),Rs(o)}else ic(o);else if(T=h.s,T==3||T==0&&0<h.X||!(p==1&&tp(o,h)||p==2&&ho(o)))switch(f&&0<f.length&&(h=o.h,h.i=h.i.concat(f)),T){case 1:an(o,5);break;case 4:an(o,10);break;case 3:an(o,6);break;default:an(o,2)}}}function lc(o,h){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*h}function an(o,h){if(o.j.info("Error code "+h),h==2){var f=w(o.fb,o),p=o.Xa;const T=!p;p=new on(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Es(p,"https"),Is(p),T?Km(p.toString(),f):Xm(p.toString(),f)}else Oe(2);o.G=0,o.l&&o.l.sa(h),cc(o),nc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function cc(o){if(o.G=0,o.ka=[],o.l){const h=Ul(o.h);(h.length!=0||o.i.length!=0)&&(A(o.ka,h),A(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function uc(o,h,f){var p=f instanceof on?pt(f):new on(f);if(p.g!="")h&&(p.g=h+"."+p.g),Ts(p,p.s);else{var T=l.location;p=T.protocol,h=h?h+"."+T.hostname:T.hostname,T=+T.port;var P=new on(null);p&&Es(P,p),h&&(P.g=h),T&&Ts(P,T),f&&(P.l=f),p=P}return f=o.D,h=o.ya,f&&h&&oe(p,f,h),oe(p,"VER",o.la),Er(o,p),p}function hc(o,h,f){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new he(new As({eb:f})):new he(o.pa),h.Ha(o.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function dc(){}n=dc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ns(){}Ns.prototype.g=function(o,h){return new ze(o,h)};function ze(o,h){Se.call(this),this.g=new tc(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!V(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!V(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new Cn(this)}R(ze,Se),ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){uo(this.g)},ze.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Ji(o),o=f);h.i.push(new Lm(h.Ya++,o)),h.G==3&&Rs(h)},ze.prototype.N=function(){this.g.l=null,delete this.j,uo(this.g),delete this.g,ze.aa.N.call(this)};function fc(o){eo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const f in h){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}R(fc,eo);function mc(){to.call(this),this.status=1}R(mc,to);function Cn(o){this.g=o}R(Cn,dc),Cn.prototype.ua=function(){je(this.g,"a")},Cn.prototype.ta=function(o){je(this.g,new fc(o))},Cn.prototype.sa=function(o){je(this.g,new mc)},Cn.prototype.ra=function(){je(this.g,"b")},Ns.prototype.createWebChannel=Ns.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,Vd=function(){return new Ns},Dd=function(){return _s()},Nd=rn,Xo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ws.NO_ERROR=0,ws.TIMEOUT=8,ws.HTTP_ERROR=6,Xs=ws,Rl.COMPLETE="complete",kd=Rl,Il.EventType=dr,dr.OPEN="a",dr.CLOSE="b",dr.ERROR="c",dr.MESSAGE="d",Se.prototype.listen=Se.prototype.K,Cr=Il,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,Rd=he}).apply(typeof js<"u"?js:typeof self<"u"?self:typeof window<"u"?window:{});const su="@firebase/firestore",iu="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new _a("@firebase/firestore");function jn(){return yn.logLevel}function L(n,...e){if(yn.logLevel<=Y.DEBUG){const t=e.map(Da);yn.debug(`Firestore (${rr}): ${n}`,...t)}}function It(n,...e){if(yn.logLevel<=Y.ERROR){const t=e.map(Da);yn.error(`Firestore (${rr}): ${n}`,...t)}}function Kt(n,...e){if(yn.logLevel<=Y.WARN){const t=e.map(Da);yn.warn(`Firestore (${rr}): ${n}`,...t)}}function Da(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,jd(n,r,t)}function jd(n,e,t){let r=`FIRESTORE (${rr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw It(r),new Error(r)}function ne(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||jd(e,s,r)}function G(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends St{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class __{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ke.UNAUTHENTICATED))}shutdown(){}}class w_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class b_{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string",31837,{l:r}),new Od(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new ke(e)}}class x_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class E_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new x_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ou{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class T_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$e(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ou(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ou(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=I_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function Qo(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return Q(r,s);{const i=Md(),a=A_(i.encode(au(n,t)),i.encode(au(e,t)));return a!==0?a:Q(r,s)}}t+=r>65535?2:1}return Q(n.length,e.length)}function au(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function A_(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Q(n[t],e[t]);return Q(n.length,e.length)}function Gn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="__name__";class rt{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&q(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return rt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=rt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Q(e.length,t.length)}static compareSegments(e,t){const r=rt.isNumericId(e),s=rt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?rt.extractNumericId(e).compare(rt.extractNumericId(t)):Qo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ht.fromString(e.substring(4,e.length-2))}}class ce extends rt{construct(e,t,r){return new ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ce(t)}static emptyPath(){return new ce([])}}const S_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends rt{construct(e,t,r){return new Ie(e,t,r)}static isValidIdentifier(e){return S_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lu}static keyField(){return new Ie([lu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new B(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new B(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(t)}static emptyPath(){return new Ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ce.fromString(e))}static fromName(e){return new $(ce.fromString(e).popFirst(5))}static empty(){return new $(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(n,e,t){if(!t)throw new B(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function C_(n,e,t,r){if(e===!0&&r===!0)throw new B(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cu(n){if(!$.isDocumentKey(n))throw new B(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ld(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ja(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Hr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ja(n);throw new B(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n,e){const t={typeString:n};return e&&(t.value=e),t}function ls(n,e){if(!Ld(n))throw new B(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new B(D.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=-62135596800,hu=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*hu);return new ae(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<uu)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hu}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ls(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-uu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:pe("string",ae._jsonSchemaVersion),seconds:pe("number"),nanoseconds:pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static fromTimestamp(e){return new H(e)}static min(){return new H(new ae(0,0))}static max(){return new H(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=-1;function R_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new ae(t+1,0):new ae(t,r));return new Xt(s,$.empty(),e)}function k_(n){return new Xt(n.readTime,n.key,Gr)}class Xt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Xt(H.min(),$.empty(),Gr)}static max(){return new Xt(H.max(),$.empty(),Gr)}}function N_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==D_)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(m=>{a[d]=m,++l,l===i&&r(a)},m=>s(m))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function j_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ir(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ri.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=-1;function ki(n){return n==null}function ui(n){return n===0&&1/n==-1/0}function O_(n){return typeof n=="number"&&Number.isInteger(n)&&!ui(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="";function M_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=du(e)),e=L_(n.get(t),e);return du(e)}function L_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Fd:t+="";break;default:t+=i}}return t}function du(n){return n+Fd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ud(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Os(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Os(this.root,e,this.comparator,!1)}getReverseIterator(){return new Os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Os(this.root,e,this.comparator,!0)}}class Os{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Te.RED,this.left=s??Te.EMPTY,this.right=i??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Te(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Te.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new mu(this.data.getIterator())}getIteratorFrom(e){return new mu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class mu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new et([])}unionWith(e){let t=new _e(Ie.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new et(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Gn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bd("Invalid base64 string: "+i):i}}(e);return new Ae(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const F_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=F_.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(n.seconds),nanos:de(n.nanos)}}function de(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yt(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="server_timestamp",$d="__type__",Wd="__previous_value__",qd="__local_write_time__";function Ma(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[$d])===null||t===void 0?void 0:t.stringValue)===zd}function Ni(n){const e=n.mapValue.fields[Wd];return Ma(e)?Ni(e):e}function Kr(n){const e=Qt(n.mapValue.fields[qd].timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,t,r,s,i,a,l,u,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m}}const hi="(default)";class Xr{constructor(e,t){this.projectId=e,this.database=t||hi}static empty(){return new Xr("","")}get isDefaultDatabase(){return this.database===hi}isEqual(e){return e instanceof Xr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="__type__",B_="__max__",Ms={mapValue:{}},Gd="__vector__",di="value";function Jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ma(n)?4:$_(n)?9007199254740991:z_(n)?10:11:q(28295,{value:n})}function ut(n,e){if(n===e)return!0;const t=Jt(n);if(t!==Jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Kr(n).isEqual(Kr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Qt(s.timestampValue),l=Qt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Yt(s.bytesValue).isEqual(Yt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return de(s.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return de(s.integerValue)===de(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=de(s.doubleValue),l=de(i.doubleValue);return a===l?ui(a)===ui(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Gn(n.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(fu(a)!==fu(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!ut(a[u],l[u])))return!1;return!0}(n,e);default:return q(52216,{left:n})}}function Qr(n,e){return(n.values||[]).find(t=>ut(t,e))!==void 0}function Kn(n,e){if(n===e)return 0;const t=Jt(n),r=Jt(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=de(i.integerValue||i.doubleValue),u=de(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return pu(n.timestampValue,e.timestampValue);case 4:return pu(Kr(n),Kr(e));case 5:return Qo(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Yt(i),u=Yt(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const m=Q(l[d],u[d]);if(m!==0)return m}return Q(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Q(de(i.latitude),de(a.latitude));return l!==0?l:Q(de(i.longitude),de(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return gu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,u,d,m;const y=i.fields||{},w=a.fields||{},S=(l=y[di])===null||l===void 0?void 0:l.arrayValue,R=(u=w[di])===null||u===void 0?void 0:u.arrayValue,N=Q(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((m=R?.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:gu(S,R)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ms.mapValue&&a===Ms.mapValue)return 0;if(i===Ms.mapValue)return 1;if(a===Ms.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const w=Qo(u[y],m[y]);if(w!==0)return w;const S=Kn(l[u[y]],d[m[y]]);if(S!==0)return S}return Q(u.length,m.length)}(n.mapValue,e.mapValue);default:throw q(23264,{le:t})}}function pu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=Qt(n),r=Qt(e),s=Q(t.seconds,r.seconds);return s!==0?s:Q(t.nanos,r.nanos)}function gu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Kn(t[s],r[s]);if(i)return i}return Q(t.length,r.length)}function Xn(n){return Yo(n)}function Yo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Yt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Yo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Yo(t.fields[a])}`;return s+"}"}(n.mapValue):q(61005,{value:n})}function Qs(n){switch(Jt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ni(n);return e?16+Qs(e):16;case 5:return 2*n.stringValue.length;case 6:return Yt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Qs(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return bn(r.fields,(i,a)=>{s+=i.length+Qs(a)}),s}(n.mapValue);default:throw q(13486,{value:n})}}function Jo(n){return!!n&&"integerValue"in n}function La(n){return!!n&&"arrayValue"in n}function yu(n){return!!n&&"nullValue"in n}function vu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ys(n){return!!n&&"mapValue"in n}function z_(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Hd])===null||t===void 0?void 0:t.stringValue)===Gd}function jr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return bn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=jr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=jr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function $_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.value=e}static empty(){return new Ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ys(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jr(t)}setAll(e){let t=Ie.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=jr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ys(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ut(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ys(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){bn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ge(jr(this.value))}}function Kd(n){const e=[];return bn(n.fields,(t,r)=>{const s=new Ie([t]);if(Ys(r)){const i=Kd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ne(e,0,H.min(),H.min(),H.min(),Ge.empty(),0)}static newFoundDocument(e,t,r,s){return new Ne(e,1,t,H.min(),r,s,0)}static newNoDocument(e,t){return new Ne(e,2,t,H.min(),H.min(),Ge.empty(),0)}static newUnknownDocument(e,t){return new Ne(e,3,t,H.min(),H.min(),Ge.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){this.position=e,this.inclusive=t}}function _u(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),t.key):r=Kn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ut(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t="asc"){this.field=e,this.dir=t}}function W_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{}class ve extends Xd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new H_(e,t,r):t==="array-contains"?new X_(e,r):t==="in"?new Q_(e,r):t==="not-in"?new Y_(e,r):t==="array-contains-any"?new J_(e,r):new ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new G_(e,r):new K_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Kn(t,this.value)):t!==null&&Jt(this.value)===Jt(t)&&this.matchesComparison(Kn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends Xd{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new ht(e,t)}matches(e){return Qd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Qd(n){return n.op==="and"}function Yd(n){return q_(n)&&Qd(n)}function q_(n){for(const e of n.filters)if(e instanceof ht)return!1;return!0}function Zo(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+Xn(n.value);if(Yd(n))return n.filters.map(e=>Zo(e)).join(",");{const e=n.filters.map(t=>Zo(t)).join(",");return`${n.op}(${e})`}}function Jd(n,e){return n instanceof ve?function(r,s){return s instanceof ve&&r.op===s.op&&r.field.isEqual(s.field)&&ut(r.value,s.value)}(n,e):n instanceof ht?function(r,s){return s instanceof ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Jd(a,s.filters[l]),!0):!1}(n,e):void q(19439)}function Zd(n){return n instanceof ve?function(t){return`${t.field.canonicalString()} ${t.op} ${Xn(t.value)}`}(n):n instanceof ht?function(t){return t.op.toString()+" {"+t.getFilters().map(Zd).join(" ,")+"}"}(n):"Filter"}class H_ extends ve{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class G_ extends ve{constructor(e,t){super(e,"in",t),this.keys=ef("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class K_ extends ve{constructor(e,t){super(e,"not-in",t),this.keys=ef("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ef(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class X_ extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return La(t)&&Qr(t.arrayValue,this.value)}}class Q_ extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qr(this.value.arrayValue,t)}}class Y_ extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qr(this.value.arrayValue,t)}}class J_ extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!La(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Qr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Pe=null}}function bu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Z_(n,e,t,r,s,i,a)}function Fa(n){const e=G(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Zo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ki(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Xn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Xn(r)).join(",")),e.Pe=t}return e.Pe}function Ua(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!W_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Jd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wu(n.startAt,e.startAt)&&wu(n.endAt,e.endAt)}function ea(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ew(n,e,t,r,s,i,a,l){return new Di(n,e,t,r,s,i,a,l)}function Ba(n){return new Di(n)}function xu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function tw(n){return n.collectionGroup!==null}function Or(n){const e=G(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new _e(Ie.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new mi(i,r))}),t.has(Ie.keyField().canonicalString())||e.Te.push(new mi(Ie.keyField(),r))}return e.Te}function ot(n){const e=G(n);return e.Ie||(e.Ie=nw(e,Or(n))),e.Ie}function nw(n,e){if(n.limitType==="F")return bu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new mi(s.field,i)});const t=n.endAt?new fi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fi(n.startAt.position,n.startAt.inclusive):null;return bu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ta(n,e,t){return new Di(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vi(n,e){return Ua(ot(n),ot(e))&&n.limitType===e.limitType}function tf(n){return`${Fa(ot(n))}|lt:${n.limitType}`}function On(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Zd(s)).join(", ")}]`),ki(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Xn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Xn(s)).join(",")),`Target(${r})`}(ot(n))}; limitType=${n.limitType})`}function ji(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Or(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=_u(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,Or(r),s)||r.endAt&&!function(a,l,u){const d=_u(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,Or(r),s))}(n,e)}function rw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nf(n){return(e,t)=>{let r=!1;for(const s of Or(n)){const i=sw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function sw(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?Kn(u,d):q(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ud(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=new ue($.comparator);function At(){return iw}const rf=new ue($.comparator);function Rr(...n){let e=rf;for(const t of n)e=e.insert(t.key,t);return e}function sf(n){let e=rf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function hn(){return Mr()}function of(){return Mr()}function Mr(){return new xn(n=>n.toString(),(n,e)=>n.isEqual(e))}const ow=new ue($.comparator),aw=new _e($.comparator);function J(...n){let e=aw;for(const t of n)e=e.add(t);return e}const lw=new _e(Q);function cw(){return lw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ui(e)?"-0":e}}function af(n){return{integerValue:""+n}}function uw(n,e){return O_(e)?af(e):za(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this._=void 0}}function hw(n,e,t){return n instanceof pi?function(s,i){const a={fields:{[$d]:{stringValue:zd},[qd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ma(i)&&(i=Ni(i)),i&&(a.fields[Wd]=i),{mapValue:a}}(t,e):n instanceof Yr?cf(n,e):n instanceof Jr?uf(n,e):function(s,i){const a=lf(s,i),l=Eu(a)+Eu(s.Ee);return Jo(a)&&Jo(s.Ee)?af(l):za(s.serializer,l)}(n,e)}function dw(n,e,t){return n instanceof Yr?cf(n,e):n instanceof Jr?uf(n,e):t}function lf(n,e){return n instanceof gi?function(r){return Jo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class pi extends Oi{}class Yr extends Oi{constructor(e){super(),this.elements=e}}function cf(n,e){const t=hf(e);for(const r of n.elements)t.some(s=>ut(s,r))||t.push(r);return{arrayValue:{values:t}}}class Jr extends Oi{constructor(e){super(),this.elements=e}}function uf(n,e){let t=hf(e);for(const r of n.elements)t=t.filter(s=>!ut(s,r));return{arrayValue:{values:t}}}class gi extends Oi{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Eu(n){return de(n.integerValue||n.doubleValue)}function hf(n){return La(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function fw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Yr&&s instanceof Yr||r instanceof Jr&&s instanceof Jr?Gn(r.elements,s.elements,ut):r instanceof gi&&s instanceof gi?ut(r.Ee,s.Ee):r instanceof pi&&s instanceof pi}(n.transform,e.transform)}class mw{constructor(e,t){this.version=e,this.transformResults=t}}class xt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Js(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Mi{}function df(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new mf(n.key,xt.none()):new cs(n.key,n.data,xt.none());{const t=n.data,r=Ge.empty();let s=new _e(Ie.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new En(n.key,r,new et(s.toArray()),xt.none())}}function pw(n,e,t){n instanceof cs?function(s,i,a){const l=s.value.clone(),u=Iu(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof En?function(s,i,a){if(!Js(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Iu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(ff(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Lr(n,e,t,r){return n instanceof cs?function(i,a,l,u){if(!Js(i.precondition,a))return l;const d=i.value.clone(),m=Au(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof En?function(i,a,l,u){if(!Js(i.precondition,a))return l;const d=Au(i.fieldTransforms,u,a),m=a.data;return m.setAll(ff(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(i,a,l){return Js(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function gw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=lf(r.transform,s||null);i!=null&&(t===null&&(t=Ge.empty()),t.set(r.field,i))}return t||null}function Tu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Gn(r,s,(i,a)=>fw(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class cs extends Mi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class En extends Mi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ff(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Iu(n,e,t){const r=new Map;ne(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,dw(a,l,t[s]))}return r}function Au(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,hw(i,a,e))}return r}class mf extends Mi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yw extends Mi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&pw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Lr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Lr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=of();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=df(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&Gn(this.mutations,e.mutations,(t,r)=>Tu(t,r))&&Gn(this.baseMutations,e.baseMutations,(t,r)=>Tu(t,r))}}class $a{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ne(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return ow}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new $a(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,Z;function bw(n){switch(n){case D.OK:return q(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function pf(n){if(n===void 0)return It("GRPC error has no .code"),D.UNKNOWN;switch(n){case fe.OK:return D.OK;case fe.CANCELLED:return D.CANCELLED;case fe.UNKNOWN:return D.UNKNOWN;case fe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case fe.INTERNAL:return D.INTERNAL;case fe.UNAVAILABLE:return D.UNAVAILABLE;case fe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case fe.NOT_FOUND:return D.NOT_FOUND;case fe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case fe.ABORTED:return D.ABORTED;case fe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case fe.DATA_LOSS:return D.DATA_LOSS;default:return q(39323,{code:n})}}(Z=fe||(fe={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=new Ht([4294967295,4294967295],0);function Su(n){const e=Md().encode(n),t=new Cd;return t.update(e),new Uint8Array(t.digest())}function Pu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ht([t,r],0),new Ht([s,i],0)]}class Wa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new kr(`Invalid padding: ${t}`);if(r<0)throw new kr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new kr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new kr(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ht.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Ht.fromNumber(r)));return s.compare(xw)===1&&(s=new Ht([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Su(e),[r,s]=Pu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Wa(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.fe===0)return;const t=Su(e),[r,s]=Pu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class kr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,us.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Li(H.min(),s,new ue(Q),At(),J())}}class us{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new us(r,t,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class gf{constructor(e,t){this.targetId=e,this.De=t}}class yf{constructor(e,t,r=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Cu{constructor(){this.ve=0,this.Ce=Ru(),this.Fe=Ae.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=J(),t=J(),r=J();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:q(38017,{changeType:i})}}),new us(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Ru()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ne(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Ew{constructor(e){this.We=e,this.Ge=new Map,this.ze=At(),this.je=Ls(),this.Je=Ls(),this.He=new ue(Q)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:q(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,s)=>{this.nt(s)&&t(s)})}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(ea(i))if(r===0){const a=new $(i.path);this.Xe(t,a,Ne.newNoDocument(a,H.min()))}else ne(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),u=l?this.ut(l,e,a):1;if(u!==0){this.rt(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Yt(r).toUint8Array()}catch(u){if(u instanceof Bd)return Kt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Wa(a,s,i)}catch(u){return Kt(u instanceof kr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,i,null),s++)}),s}Pt(e){const t=new Map;this.Ge.forEach((i,a)=>{const l=this.st(a);if(l){if(i.current&&ea(l.target)){const u=new $(l.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Ne.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}});let r=J();this.Je.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.st(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(e));const s=new Li(e,t,this.He,this.ze,r);return this.ze=At(),this.je=Ls(),this.Je=Ls(),this.He=new ue(Q),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Cu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new _e(Q),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new _e(Q),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Cu),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ls(){return new ue($.comparator)}function Ru(){return new ue($.comparator)}const Tw={asc:"ASCENDING",desc:"DESCENDING"},Iw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Aw={and:"AND",or:"OR"};class Sw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function na(n,e){return n.useProto3Json||ki(e)?e:{value:e}}function yi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Pw(n,e){return yi(n,e.toTimestamp())}function at(n){return ne(!!n,49232),H.fromTimestamp(function(t){const r=Qt(t);return new ae(r.seconds,r.nanos)}(n))}function qa(n,e){return ra(n,e).canonicalString()}function ra(n,e){const t=function(s){return new ce(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function _f(n){const e=ce.fromString(n);return ne(Tf(e),10190,{key:e.toString()}),e}function sa(n,e){return qa(n.databaseId,e.path)}function Eo(n,e){const t=_f(e);if(t.get(1)!==n.databaseId.projectId)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(bf(t))}function wf(n,e){return qa(n.databaseId,e)}function Cw(n){const e=_f(n);return e.length===4?ce.emptyPath():bf(e)}function ia(n){return new ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bf(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ku(n,e,t){return{name:sa(n,e),fields:t.value.mapValue.fields}}function Rw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:q(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(ne(m===void 0||typeof m=="string",58123),Ae.fromBase64String(m||"")):(ne(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Ae.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const m=d.code===void 0?D.UNKNOWN:pf(d.code);return new B(m,d.message||"")}(a);t=new yf(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Eo(n,r.document.name),i=at(r.document.updateTime),a=r.document.createTime?at(r.document.createTime):H.min(),l=new Ge({mapValue:{fields:r.document.fields}}),u=Ne.newFoundDocument(s,i,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];t=new Zs(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Eo(n,r.document),i=r.readTime?at(r.readTime):H.min(),a=Ne.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Zs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Eo(n,r.document),i=r.removedTargetIds||[];t=new Zs([],i,s,null)}else{if(!("filter"in e))return q(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ww(s,i),l=r.targetId;t=new gf(l,a)}}return t}function kw(n,e){let t;if(e instanceof cs)t={update:ku(n,e.key,e.value)};else if(e instanceof mf)t={delete:sa(n,e.key)};else if(e instanceof En)t={update:ku(n,e.key,e.data),updateMask:Uw(e.fieldMask)};else{if(!(e instanceof yw))return q(16599,{Rt:e.type});t={verify:sa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof pi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Yr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Jr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof gi)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw q(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Pw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q(27497)}(n,e.precondition)),t}function Nw(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?at(s.updateTime):at(i);return a.isEqual(H.min())&&(a=at(i)),new mw(a,s.transformResults||[])}(t,e))):[]}function Dw(n,e){return{documents:[wf(n,e.path)]}}function Vw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=wf(n,s);const i=function(d){if(d.length!==0)return Ef(ht.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(w){return{field:Mn(w.field),direction:Mw(w.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=na(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:s}}function jw(n){let e=Cw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ne(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(y){const w=xf(y);return w instanceof ht&&Yd(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(w=>function(R){return new mi(Ln(R.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(w))}(t.orderBy));let l=null;t.limit&&(l=function(y){let w;return w=typeof y=="object"?y.value:y,ki(w)?null:w}(t.limit));let u=null;t.startAt&&(u=function(y){const w=!!y.before,S=y.values||[];return new fi(S,w)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const w=!y.before,S=y.values||[];return new fi(S,w)}(t.endAt)),ew(e,s,a,i,l,"F",u,d)}function Ow(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ln(t.unaryFilter.field);return ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ln(t.unaryFilter.field);return ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ln(t.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ln(t.unaryFilter.field);return ve.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(n):n.fieldFilter!==void 0?function(t){return ve.create(Ln(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ht.create(t.compositeFilter.filters.map(r=>xf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(t.compositeFilter.op))}(n):q(30097,{filter:n})}function Mw(n){return Tw[n]}function Lw(n){return Iw[n]}function Fw(n){return Aw[n]}function Mn(n){return{fieldPath:n.canonicalString()}}function Ln(n){return Ie.fromServerFormat(n.fieldPath)}function Ef(n){return n instanceof ve?function(t){if(t.op==="=="){if(vu(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NAN"}};if(yu(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vu(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NOT_NAN"}};if(yu(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mn(t.field),op:Lw(t.op),value:t.value}}}(n):n instanceof ht?function(t){const r=t.getFilters().map(s=>Ef(s));return r.length===1?r[0]:{compositeFilter:{op:Fw(t.op),filters:r}}}(n):q(54877,{filter:n})}function Uw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Tf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,r,s,i=H.min(),a=H.min(),l=Ae.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e){this.gt=e}}function zw(n){const e=jw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ta(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(){this.Dn=new Ww}addToCollectionParentIndex(e,t){return this.Dn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Xt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Xt.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class Ww{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new _e(ce.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _e(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},If=41943040;class Le{static withCacheSize(e){return new Le(e,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le.DEFAULT_COLLECTION_PERCENTILE=10,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Le.DEFAULT=new Le(If,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Le.DISABLED=new Le(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Qn(0)}static ur(){return new Qn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="LruGarbageCollector",qw=1048576;function Vu([n,e],[t,r]){const s=Q(n,t);return s===0?Q(e,r):s}class Hw{constructor(e){this.Tr=e,this.buffer=new _e(Vu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Vu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Gw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){L(Du,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ir(t)?L(Du,"Ignoring IndexedDB error during garbage collection: ",t):await sr(t)}await this.Rr(3e5)})}}class Kw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Ri.ue);const r=new Hw(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Nu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nu):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,l,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s))).next(y=>(r=y,l=Date.now(),this.removeTargets(e,r,t))).next(y=>(i=y,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(d=Date.now(),jn()<=Y.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${y} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:y})))}}function Xw(n,e){return new Kw(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this.changes=new xn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Lr(r.mutation,s,et.empty(),ae.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,t,r=J()){const s=hn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Rr();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=hn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,J()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=At();const a=Mr(),l=function(){return Mr()}();return t.forEach((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof En)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Lr(m.mutation,d,m.mutation.getFieldMask(),ae.now())):a.set(d.key,et.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>{var y;return l.set(d,new Yw(m,(y=a.get(d))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Mr();let s=new ue((a,l)=>a-l),i=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||et.empty();m=l.applyToLocalView(d,m),r.set(u,m);const y=(s.get(l.batchId)||J()).add(u);s=s.insert(l.batchId,y)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,m=u.value,y=of();m.forEach(w=>{if(!i.has(w)){const S=df(t.get(w),r.get(w));S!==null&&y.set(w,S),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(hn());let l=Gr,u=i;return a.next(d=>k.forEach(d,(m,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(m)?k.resolve():this.remoteDocumentCache.getEntry(e,m).next(w=>{u=u.insert(m,w)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,J())).next(m=>({batchId:l,changes:sf(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let s=Rr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Rr();return this.indexManager.getCollectionParents(e,i).next(l=>k.forEach(l,u=>{const d=function(y,w){return new Di(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((y,w)=>{a=a.insert(y,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Ne.newInvalidDocument(m)))});let l=Rr();return a.forEach((u,d)=>{const m=i.get(u);m!==void 0&&Lr(m.mutation,d,et.empty(),ae.now()),ji(t,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return k.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(s){return{id:s.id,version:s.version,createTime:at(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(s){return{name:s.name,query:zw(s.bundledQuery),readTime:at(s.readTime)}}(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.overlays=new ue($.comparator),this.kr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=hn();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.wt(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=hn(),i=t.length+1,a=new $(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ue((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=hn(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=hn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=s)););return k.resolve(l)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new _w(t,r));let i=this.kr.get(t);i===void 0&&(i=J(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.sessionToken=Ae.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.qr=new _e(be.Qr),this.$r=new _e(be.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new be(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new be(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new $(new ce([])),r=new be(t,e),s=new be(t,e+1),i=[];return this.$r.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new $(new ce([])),r=new be(t,e),s=new be(t,e+1);let i=J();return this.$r.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new be(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class be{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return $.comparator(e.key,t.key)||Q(e.Hr,t.Hr)}static Ur(e,t){return Q(e.Hr,t.Hr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new _e(be.Qr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new vw(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Yr=this.Yr.add(new be(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Oa:this.er-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new be(t,0),s=new be(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],a=>{const l=this.Zr(a.Hr);i.push(l)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new _e(Q);return t.forEach(s=>{const i=new be(s,0),a=new be(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],l=>{r=r.add(l.Hr)})}),k.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const a=new be(new $(i),0);let l=new _e(Q);return this.Yr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Hr)),!0)},a),k.resolve(this.ei(l))}ei(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ne(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return k.forEach(t.mutations,s=>{const i=new be(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new be(t,0),s=this.Yr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.ni=e,this.docs=function(){return new ue($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Ne.newInvalidDocument(t))}getEntries(e,t){let r=At();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ne.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=At();const a=t.path,l=new $(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||N_(k_(m),r)<=0||(s.has(m.key)||ji(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){q(9500)}ri(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new sb(this)}getSize(e){return k.resolve(this.size)}}class sb extends Qw{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.persistence=e,this.ii=new xn(t=>Fa(t),Ua),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.si=0,this.oi=new Ha,this.targetCount=0,this._i=Qn.ar()}forEachTarget(e,t){return this.ii.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),k.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Qn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.hr(t),k.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ri(0),this.ci=!1,this.ci=!0,this.li=new tb,this.referenceDelegate=e(this),this.hi=new ib(this),this.indexManager=new $w,this.remoteDocumentCache=function(s){return new rb(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new Bw(t),this.Ti=new Zw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new nb(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new ob(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return k.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class ob extends V_{constructor(e){super(),this.currentSequenceNumber=e}}class Ga{constructor(e){this.persistence=e,this.Ai=new Ha,this.Ri=null}static Vi(e){return new Ga(e)}get mi(){if(this.Ri)return this.Ri;throw q(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.mi,r=>{const s=$.fromPath(r);return this.fi(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return k.or([()=>k.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class vi{constructor(e,t){this.persistence=e,this.gi=new xn(r=>M_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Xw(this,t)}static Vi(e,t){return new vi(e,t)}Ii(){}di(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return k.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?k.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,a=>this.Sr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,H.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Qs(e.data.value)),t}Sr(e,t,r){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=J(),s=J();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ka(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Mg()?8:j_(De())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new ab;return this.ws(e,t,a).next(l=>{if(i.result=l,this.Rs)return this.Ss(e,t,a,l.size)})}).next(()=>i.result)}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(jn()<=Y.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",On(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(jn()<=Y.DEBUG&&L("QueryEngine","Query:",On(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(jn()<=Y.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",On(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ot(t))):k.resolve())}ps(e,t){if(xu(t))return k.resolve(null);let r=ot(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ta(t,null,"F"),r=ot(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=J(...i);return this.gs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.bs(t,l);return this.Ds(t,d,a,u.readTime)?this.ps(e,ta(t,null,"F")):this.vs(e,d,t,u)}))})))}ys(e,t,r,s){return xu(t)||s.isEqual(H.min())?k.resolve(null):this.gs.getDocuments(e,r).next(i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?k.resolve(null):(jn()<=Y.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),On(t)),this.vs(e,a,t,R_(s,Gr)).next(l=>l))})}bs(e,t){let r=new _e(nf(e));return t.forEach((s,i)=>{ji(e,i)&&(r=r.add(i))}),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return jn()<=Y.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",On(t)),this.gs.getDocumentsMatchingQuery(e,t,Xt.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="LocalStore",cb=3e8;class ub{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new ue(Q),this.Ms=new xn(i=>Fa(i),Ua),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function hb(n,e,t,r){return new ub(n,e,t,r)}async function Sf(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=J();for(const d of s){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){l.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:l}))})})}function db(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,d,m){const y=d.batch,w=y.keys();let S=k.resolve();return w.forEach(R=>{S=S.next(()=>m.getEntry(u,R)).next(N=>{const A=d.docVersions.get(R);ne(A!==null,48541),N.version.compareTo(A)<0&&(y.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),m.addEntry(N)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=J();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Pf(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function fb(n,e){const t=G(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const l=[];e.targetChanges.forEach((m,y)=>{const w=s.get(y);if(!w)return;l.push(t.hi.removeMatchingKeys(i,m.removedDocuments,y).next(()=>t.hi.addMatchingKeys(i,m.addedDocuments,y)));let S=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?S=S.withResumeToken(Ae.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(y,S),function(N,A,j){return N.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=cb?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(w,S,m)&&l.push(t.hi.updateTargetData(i,S))});let u=At(),d=J();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(mb(i,a,e.documentUpdates).next(m=>{u=m.Ls,d=m.ks})),!r.isEqual(H.min())){const m=t.hi.getLastRemoteSnapshotVersion(i).next(y=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(m)}return k.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.Fs=s,i))}function mb(n,e,t){let r=J(),s=J();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=At();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(H.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):L(Xa,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ls:a,ks:s}})}function pb(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Oa),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gb(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.hi.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.hi.allocateTargetId(r).next(a=>(s=new Bt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function oa(n,e,t){const r=G(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ir(a))throw a;L(Xa,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function ju(n,e,t){const r=G(n);let s=H.min(),i=J();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,m){const y=G(u),w=y.Ms.get(m);return w!==void 0?k.resolve(y.Fs.get(w)):y.hi.getTargetData(d,m)}(r,a,ot(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:H.min(),t?i:J())).next(l=>(yb(r,rw(e),l),{documents:l,qs:i})))}function yb(n,e,t){let r=n.xs.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.xs.set(e,r)}class Ou{constructor(){this.activeTargetIds=cw()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vb{constructor(){this.Fo=new Ou,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ou,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="ConnectivityMonitor";class Lu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){L(Mu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){L(Mu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs=null;function aa(){return Fs===null?Fs=function(){return 268435456+Math.round(2147483648*Math.random())}():Fs++,"0x"+Fs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="RestConnection",wb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bb{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===hi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=aa(),l=this.Go(e,t.toUriEncodedString());L(To,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:d}=new URL(l),m=er(d);return this.jo(e,l,u,r,m).then(y=>(L(To,`Received RPC '${e}' ${a}: `,y),y),y=>{throw Kt(To,`RPC '${e}' ${a} failed with error: `,y,"url: ",l,"request:",r),y})}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,t){const r=wb[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="WebChannelConnection";class Eb extends bb{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=aa();return new Promise((l,u)=>{const d=new Rd;d.setWithCredentials(!0),d.listenOnce(kd.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Xs.NO_ERROR:const y=d.getResponseJson();L(Re,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),l(y);break;case Xs.TIMEOUT:L(Re,`RPC '${e}' ${a} timed out`),u(new B(D.DEADLINE_EXCEEDED,"Request time out"));break;case Xs.HTTP_ERROR:const w=d.getStatus();if(L(Re,`RPC '${e}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const R=S?.error;if(R&&R.status&&R.message){const N=function(j){const V=j.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(V)>=0?V:D.UNKNOWN}(R.status);u(new B(N,R.message))}else u(new B(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new B(D.UNAVAILABLE,"Connection failed."));break;default:q(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{L(Re,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);L(Re,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",m,r,15)})}P_(e,t,r){const s=aa(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Vd(),l=Dd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");L(Re,`Creating RPC '${e}' stream ${s}: ${m}`,u);const y=a.createWebChannel(m,u);this.T_(y);let w=!1,S=!1;const R=new xb({Ho:A=>{S?L(Re,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(w||(L(Re,`Opening RPC '${e}' stream ${s} transport.`),y.open(),w=!0),L(Re,`RPC '${e}' stream ${s} sending:`,A),y.send(A))},Yo:()=>y.close()}),N=(A,j,V)=>{A.listen(j,M=>{try{V(M)}catch(K){setTimeout(()=>{throw K},0)}})};return N(y,Cr.EventType.OPEN,()=>{S||(L(Re,`RPC '${e}' stream ${s} transport opened.`),R.s_())}),N(y,Cr.EventType.CLOSE,()=>{S||(S=!0,L(Re,`RPC '${e}' stream ${s} transport closed`),R.__(),this.I_(y))}),N(y,Cr.EventType.ERROR,A=>{S||(S=!0,Kt(Re,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),R.__(new B(D.UNAVAILABLE,"The operation could not be completed")))}),N(y,Cr.EventType.MESSAGE,A=>{var j;if(!S){const V=A.data[0];ne(!!V,16349);const M=V,K=M?.error||((j=M[0])===null||j===void 0?void 0:j.error);if(K){L(Re,`RPC '${e}' stream ${s} received error:`,K);const ie=K.status;let re=function(v){const b=fe[v];if(b!==void 0)return pf(b)}(ie),x=K.message;re===void 0&&(re=D.INTERNAL,x="Unknown error status: "+ie+" with message "+K.message),S=!0,R.__(new B(re,x)),y.close()}else L(Re,`RPC '${e}' stream ${s} received:`,V),R.a_(V)}}),N(l,Nd.STAT_EVENT,A=>{A.stat===Xo.PROXY?L(Re,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===Xo.NOPROXY&&L(Re,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.o_()},0),R}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Io(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n){return new Sw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="PersistentStream";class Rf{constructor(e,t,r,s,i,a,l,u){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Cf(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(It(t.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===t&&this.W_(r,s)},r=>{e(()=>{const s=new B(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return L(Fu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(L(Fu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Tb extends Rf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Rw(this.serializer,e),r=function(i){if(!("targetChange"in i))return H.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?at(a.readTime):H.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=ia(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=ea(u)?{documents:Dw(i,u)}:{query:Vw(i,u).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=vf(i,a.resumeToken);const d=na(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(H.min())>0){l.readTime=yi(i,a.snapshotVersion.toTimestamp());const d=na(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=Ow(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=ia(this.serializer),t.removeTarget=e,this.k_(t)}}class Ib extends Rf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Nw(e.writeResults,e.commitTime),r=at(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=ia(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>kw(this.serializer,r))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{}class Sb extends Ab{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,ra(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(D.UNKNOWN,i.toString())})}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Jo(e,ra(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(D.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Pb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(It(t),this._a=!1):L("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="RemoteStore";class Cb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{Tn(this)&&(L(vn,"Restarting streams for network reachability change."),await async function(u){const d=G(u);d.Ia.add(4),await hs(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Ui(d)}(this))})}),this.Aa=new Pb(r,s)}}async function Ui(n){if(Tn(n))for(const e of n.da)await e(!0)}async function hs(n){for(const e of n.da)await e(!1)}function kf(n,e){const t=G(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Za(t)?Ja(t):or(t).x_()&&Ya(t,e))}function Qa(n,e){const t=G(n),r=or(t);t.Ta.delete(e),r.x_()&&Nf(t,e),t.Ta.size===0&&(r.x_()?r.B_():Tn(t)&&t.Aa.set("Unknown"))}function Ya(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}or(n).H_(e)}function Nf(n,e){n.Ra.$e(e),or(n).Y_(e)}function Ja(n){n.Ra=new Ew({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),or(n).start(),n.Aa.aa()}function Za(n){return Tn(n)&&!or(n).M_()&&n.Ta.size>0}function Tn(n){return G(n).Ia.size===0}function Df(n){n.Ra=void 0}async function Rb(n){n.Aa.set("Online")}async function kb(n){n.Ta.forEach((e,t)=>{Ya(n,e)})}async function Nb(n,e){Df(n),Za(n)?(n.Aa.la(e),Ja(n)):n.Aa.set("Unknown")}async function Db(n,e,t){if(n.Aa.set("Online"),e instanceof yf&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ta.delete(l),s.Ra.removeTarget(l))}(n,e)}catch(r){L(vn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _i(n,r)}else if(e instanceof Zs?n.Ra.Ye(e):e instanceof gf?n.Ra.it(e):n.Ra.et(e),!t.isEqual(H.min()))try{const r=await Pf(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Ra.Pt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ta.get(d);m&&i.Ta.set(d,m.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const m=i.Ta.get(u);if(!m)return;i.Ta.set(u,m.withResumeToken(Ae.EMPTY_BYTE_STRING,m.snapshotVersion)),Nf(i,u);const y=new Bt(m.target,u,d,m.sequenceNumber);Ya(i,y)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){L(vn,"Failed to raise snapshot:",r),await _i(n,r)}}async function _i(n,e,t){if(!ir(e))throw e;n.Ia.add(1),await hs(n),n.Aa.set("Offline"),t||(t=()=>Pf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L(vn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Ui(n)})}function Vf(n,e){return e().catch(t=>_i(n,t,e))}async function Bi(n){const e=G(n),t=Zt(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Oa;for(;Vb(e);)try{const s=await pb(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,jb(e,s)}catch(s){await _i(e,s)}jf(e)&&Of(e)}function Vb(n){return Tn(n)&&n.Pa.length<10}function jb(n,e){n.Pa.push(e);const t=Zt(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function jf(n){return Tn(n)&&!Zt(n).M_()&&n.Pa.length>0}function Of(n){Zt(n).start()}async function Ob(n){Zt(n).na()}async function Mb(n){const e=Zt(n);for(const t of n.Pa)e.X_(t.mutations)}async function Lb(n,e,t){const r=n.Pa.shift(),s=$a.from(r,e,t);await Vf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Bi(n)}async function Fb(n,e){e&&Zt(n).Z_&&await async function(r,s){if(function(a){return bw(a)&&a!==D.ABORTED}(s.code)){const i=r.Pa.shift();Zt(r).N_(),await Vf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Bi(r)}}(n,e),jf(n)&&Of(n)}async function Uu(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),L(vn,"RemoteStore received new credentials");const r=Tn(t);t.Ia.add(3),await hs(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ui(t)}async function Ub(n,e){const t=G(n);e?(t.Ia.delete(2),await Ui(t)):e||(t.Ia.add(2),await hs(t),t.Aa.set("Unknown"))}function or(n){return n.Va||(n.Va=function(t,r,s){const i=G(t);return i.ia(),new Tb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:Rb.bind(null,n),e_:kb.bind(null,n),n_:Nb.bind(null,n),J_:Db.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),Za(n)?Ja(n):n.Aa.set("Unknown")):(await n.Va.stop(),Df(n))})),n.Va}function Zt(n){return n.ma||(n.ma=function(t,r,s){const i=G(t);return i.ia(),new Ib(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Ob.bind(null,n),n_:Fb.bind(null,n),ea:Mb.bind(null,n),ta:Lb.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await Bi(n)):(await n.ma.stop(),n.Pa.length>0&&(L(vn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new el(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tl(n,e){if(It("AsyncQueue",`${e}: ${n}`),ir(n))return new B(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{static emptySet(e){return new $n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=Rr(),this.sortedSet=new ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $n)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new $n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(){this.fa=new ue($.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):q(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class Yn{constructor(e,t,r,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Yn(e,t,$n.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class zb{constructor(){this.queries=zu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=G(t),i=s.queries;s.queries=zu(),i.forEach((a,l)=>{for(const u of l.wa)u.onError(r)})})(this,new B(D.ABORTED,"Firestore shutting down"))}}function zu(){return new xn(n=>tf(n),Vi)}async function $b(n,e){const t=G(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new Bb,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=tl(a,`Initialization of query '${On(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&nl(t)}async function Wb(n,e){const t=G(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function qb(n,e){const t=G(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.wa)l.Ca(s)&&(r=!0);a.ya=s}}r&&nl(t)}function Hb(n,e,t){const r=G(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function nl(n){n.Da.forEach(e=>{e.next()})}var la,$u;($u=la||(la={})).Fa="default",$u.Cache="cache";class Gb{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Yn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==la.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.key=e}}class Lf{constructor(e){this.key=e}}class Kb{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=J(),this.mutatedKeys=J(),this.Xa=nf(e),this.eu=new $n(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Bu,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,y)=>{const w=s.get(m),S=ji(this.query,y)?y:null,R=!!w&&this.mutatedKeys.has(w.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let A=!1;w&&S?w.data.isEqual(S.data)?R!==N&&(r.track({type:3,doc:S}),A=!0):this.iu(w,S)||(r.track({type:2,doc:S}),A=!0,(u&&this.Xa(S,u)>0||d&&this.Xa(S,d)<0)&&(l=!0)):!w&&S?(r.track({type:0,doc:S}),A=!0):w&&!S&&(r.track({type:1,doc:w}),A=!0,(u||d)&&(l=!0)),A&&(S?(a=a.add(S),i=N?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{eu:a,ru:r,Ds:l,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((m,y)=>function(S,R){const N=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{At:A})}};return N(S)-N(R)}(m.type,y.type)||this.Xa(m.doc,y.doc)),this.su(r),s=s!=null&&s;const l=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,d=u!==this.Ya;return this.Ya=u,a.length!==0||d?{snapshot:new Yn(this.query,e.eu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Bu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=J(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new Lf(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new Mf(r))}),t}uu(e){this.Ha=e.qs,this.Za=J();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Yn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const rl="SyncEngine";class Xb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Qb{constructor(e){this.key=e,this.lu=!1}}class Yb{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new xn(l=>tf(l),Vi),this.Tu=new Map,this.Iu=new Set,this.du=new ue($.comparator),this.Eu=new Map,this.Au=new Ha,this.Ru={},this.Vu=new Map,this.mu=Qn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Jb(n,e,t=!0){const r=Wf(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Ff(r,e,t,!0),s}async function Zb(n,e){const t=Wf(n);await Ff(t,e,!0,!1)}async function Ff(n,e,t,r){const s=await gb(n.localStore,ot(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await ex(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&kf(n.remoteStore,s),l}async function ex(n,e,t,r,s){n.gu=(y,w,S)=>async function(N,A,j,V){let M=A.view.nu(j);M.Ds&&(M=await ju(N.localStore,A.query,!1).then(({documents:x})=>A.view.nu(x,M)));const K=V&&V.targetChanges.get(A.targetId),ie=V&&V.targetMismatches.get(A.targetId)!=null,re=A.view.applyChanges(M,N.isPrimaryClient,K,ie);return qu(N,A.targetId,re._u),re.snapshot}(n,y,w,S);const i=await ju(n.localStore,e,!0),a=new Kb(e,i.qs),l=a.nu(i.documents),u=us.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);qu(n,t,d._u);const m=new Xb(e,t,a);return n.Pu.set(e,m),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function tx(n,e,t){const r=G(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(a=>!Vi(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await oa(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Qa(r.remoteStore,s.targetId),ca(r,s.targetId)}).catch(sr)):(ca(r,s.targetId),await oa(r.localStore,s.targetId,!0))}async function nx(n,e){const t=G(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Qa(t.remoteStore,r.targetId))}async function rx(n,e,t){const r=ux(n);try{const s=await function(a,l){const u=G(a),d=ae.now(),m=l.reduce((S,R)=>S.add(R.key),J());let y,w;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=At(),N=J();return u.Os.getEntries(S,m).next(A=>{R=A,R.forEach((j,V)=>{V.isValidDocument()||(N=N.add(j))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(A=>{y=A;const j=[];for(const V of l){const M=gw(V,y.get(V.key).overlayedDocument);M!=null&&j.push(new En(V.key,M,Kd(M.value.mapValue),xt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,j,l)}).next(A=>{w=A;const j=A.applyToLocalDocumentSet(y,N);return u.documentOverlayCache.saveOverlays(S,A.batchId,j)})}).then(()=>({batchId:w.batchId,changes:sf(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.Ru[a.currentUser.toKey()];d||(d=new ue(Q)),d=d.insert(l,u),a.Ru[a.currentUser.toKey()]=d}(r,s.batchId,t),await ds(r,s.changes),await Bi(r.remoteStore)}catch(s){const i=tl(s,"Failed to persist write");t.reject(i)}}async function Uf(n,e){const t=G(n);try{const r=await fb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Eu.get(i);a&&(ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?ne(a.lu,14607):s.removedDocuments.size>0&&(ne(a.lu,42227),a.lu=!1))}),await ds(t,r,e)}catch(r){await sr(r)}}function Wu(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=G(a);u.onlineState=l;let d=!1;u.queries.forEach((m,y)=>{for(const w of y.wa)w.va(l)&&(d=!0)}),d&&nl(u)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sx(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new ue($.comparator);a=a.insert(i,Ne.newNoDocument(i,H.min()));const l=J().add(i),u=new Li(H.min(),new Map,new ue(Q),a,l);await Uf(r,u),r.du=r.du.remove(i),r.Eu.delete(e),sl(r)}else await oa(r.localStore,e,!1).then(()=>ca(r,e,t)).catch(sr)}async function ix(n,e){const t=G(n),r=e.batch.batchId;try{const s=await db(t.localStore,e);zf(t,r,null),Bf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ds(t,s)}catch(s){await sr(s)}}async function ox(n,e,t){const r=G(n);try{const s=await function(a,l){const u=G(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,l).next(y=>(ne(y!==null,37113),m=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);zf(r,e,t),Bf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ds(r,s)}catch(s){await sr(s)}}function Bf(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function zf(n,e,t){const r=G(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function ca(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||$f(n,r)})}function $f(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Qa(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),sl(n))}function qu(n,e,t){for(const r of t)r instanceof Mf?(n.Au.addReference(r.key,e),ax(n,r)):r instanceof Lf?(L(rl,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||$f(n,r.key)):q(19791,{yu:r})}function ax(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(L(rl,"New document in limbo: "+t),n.Iu.add(r),sl(n))}function sl(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new $(ce.fromString(e)),r=n.mu.next();n.Eu.set(r,new Qb(t)),n.du=n.du.insert(t,r),kf(n.remoteStore,new Bt(ot(Ba(t.path)),r,"TargetPurposeLimboResolution",Ri.ue))}}async function ds(n,e,t){const r=G(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{a.push(r.gu(u,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(m=t?.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){s.push(d);const y=Ka.Es(u.targetId,d);i.push(y)}}))}),await Promise.all(a),r.hu.J_(s),await async function(u,d){const m=G(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>k.forEach(d,w=>k.forEach(w.Is,S=>m.persistence.referenceDelegate.addReference(y,w.targetId,S)).next(()=>k.forEach(w.ds,S=>m.persistence.referenceDelegate.removeReference(y,w.targetId,S)))))}catch(y){if(!ir(y))throw y;L(Xa,"Failed to update sequence numbers: "+y)}for(const y of d){const w=y.targetId;if(!y.fromCache){const S=m.Fs.get(w),R=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(R);m.Fs=m.Fs.insert(w,N)}}}(r.localStore,i))}async function lx(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){L(rl,"User change. New user:",e.toKey());const r=await Sf(t.localStore,e);t.currentUser=e,function(i,a){i.Vu.forEach(l=>{l.forEach(u=>{u.reject(new B(D.CANCELLED,a))})}),i.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ds(t,r.Bs)}}function cx(n,e){const t=G(n),r=t.Eu.get(e);if(r&&r.lu)return J().add(r.key);{let s=J();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const l=t.Pu.get(a);s=s.unionWith(l.view.tu)}return s}}function Wf(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sx.bind(null,e),e.hu.J_=qb.bind(null,e.eventManager),e.hu.pu=Hb.bind(null,e.eventManager),e}function ux(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ix.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ox.bind(null,e),e}class wi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fi(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return hb(this.persistence,new lb,e.initialUser,this.serializer)}Du(e){return new Af(Ga.Vi,this.serializer)}bu(e){return new vb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wi.provider={build:()=>new wi};class hx extends wi{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ne(this.persistence.referenceDelegate instanceof vi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Gw(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new Af(r=>vi.Vi(r,t),this.serializer)}}class ua{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lx.bind(null,this.syncEngine),await Ub(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zb}()}createDatastore(e){const t=Fi(e.databaseInfo.databaseId),r=function(i){return new Eb(i)}(e.databaseInfo);return function(i,a,l,u){return new Sb(i,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new Cb(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Wu(this.syncEngine,t,0),function(){return Lu.C()?new Lu:new _b}())}createSyncEngine(e,t){return function(s,i,a,l,u,d,m){const y=new Yb(s,i,a,l,u,d);return m&&(y.fu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=G(s);L(vn,"RemoteStore shutting down."),i.Ia.add(5),await hs(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ua.provider={build:()=>new ua};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):It("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="FirestoreClient";class fx{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ke.UNAUTHENTICATED,this.clientId=Va.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{L(en,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L(en,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=tl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ao(n,e){n.asyncQueue.verifyOperationInProgress(),L(en,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Sf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Kt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{L("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Kt("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=e}async function Hu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await mx(n);L(en,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Uu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Uu(e.remoteStore,s)),n._onlineComponents=e}async function mx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(en,"Using user provided OfflineComponentProvider");try{await Ao(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Kt("Error using user provided cache. Falling back to memory cache: "+t),await Ao(n,new wi)}}else L(en,"Using default OfflineComponentProvider"),await Ao(n,new hx(void 0));return n._offlineComponents}async function qf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(en,"Using user provided OnlineComponentProvider"),await Hu(n,n._uninitializedComponentsProvider._online)):(L(en,"Using default OnlineComponentProvider"),await Hu(n,new ua))),n._onlineComponents}function px(n){return qf(n).then(e=>e.syncEngine)}async function gx(n){const e=await qf(n),t=e.eventManager;return t.onListen=Jb.bind(null,e.syncEngine),t.onUnlisten=tx.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Zb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nx.bind(null,e.syncEngine),t}function yx(n,e,t={}){const r=new Gt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const m=new dx({next:w=>{m.Ou(),a.enqueueAndForget(()=>Wb(i,y));const S=w.docs.has(l);!S&&w.fromCache?d.reject(new B(D.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&u&&u.source==="server"?d.reject(new B(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new Gb(Ba(l.path),m,{includeMetadataChanges:!0,ka:!0});return $b(i,y)}(await gx(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="firestore.googleapis.com",Ku=!0;class Xu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gf,this.ssl=Ku}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ku;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=If;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qw)throw new B(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}C_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class il{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new __;switch(r.type){case"firstParty":return new E_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Gu.get(t);r&&(L("ComponentProvider","Removing Datastore"),Gu.delete(t),r.terminate())}(this),Promise.resolve()}}function vx(n,e,t,r={}){var s;n=Hr(n,il);const i=er(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;i&&(Bh(`https://${u}`),zh("Firestore",!0)),a.host!==Gf&&a.host!==u&&Kt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:u,ssl:i,emulatorOptions:r});if(!fn(d,l)&&(n._setSettings(d),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=ke.MOCK_USER;else{m=Pg(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new B(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new ke(w)}n._authCredentials=new w_(new Od(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ol(this.firestore,e,this._query)}}class xe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}toJSON(){return{type:xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ls(t,xe._jsonSchema))return new xe(e,r||null,new $(ce.fromString(t.referencePath)))}}xe._jsonSchemaVersion="firestore/documentReference/1.0",xe._jsonSchema={type:pe("string",xe._jsonSchemaVersion),referencePath:pe("string")};class Zr extends ol{constructor(e,t,r){super(e,t,Ba(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new $(e))}withConverter(e){return new Zr(this.firestore,e,this._path)}}function Fr(n,e,...t){if(n=Fe(n),arguments.length===1&&(e=Va.newId()),P_("doc","path",e),n instanceof il){const r=ce.fromString(e,...t);return cu(r),new xe(n,null,new $(r))}{if(!(n instanceof xe||n instanceof Zr))throw new B(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ce.fromString(e,...t));return cu(r),new xe(n.firestore,n instanceof Zr?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="AsyncQueue";class Yu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Cf(this,"async_queue_retry"),this.oc=()=>{const r=Io();r&&L(Qu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Io();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Gt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ir(e))throw e;L(Qu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,It("INTERNAL UNHANDLED ERROR: ",Ju(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=el.createAndSchedule(this,e,t,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&q(47125,{hc:Ju(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ju(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class al extends il{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Yu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yu(e),this._firestoreClient=void 0,await e}}}function _x(n,e){const t=typeof n=="object"?n:Hh(),r=typeof n=="string"?n:hi,s=ba(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ag("firestore");i&&vx(s,...i)}return s}function Kf(n){if(n._terminated)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||wx(n),n._firestoreClient}function wx(n){var e,t,r;const s=n._freezeSettings(),i=function(l,u,d,m){return new U_(l,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Hf(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new fx(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const u=l?._online.build();return{_offline:l?._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ke(Ae.fromBase64String(e))}catch(t){throw new B(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ke(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ke._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ls(e,Ke._jsonSchema))return Ke.fromBase64String(e.bytes)}}Ke._jsonSchemaVersion="firestore/bytes/1.0",Ke._jsonSchema={type:pe("string",Ke._jsonSchemaVersion),bytes:pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:lt._jsonSchemaVersion}}static fromJSON(e){if(ls(e,lt._jsonSchema))return new lt(e.latitude,e.longitude)}}lt._jsonSchemaVersion="firestore/geoPoint/1.0",lt._jsonSchema={type:pe("string",lt._jsonSchemaVersion),latitude:pe("number"),longitude:pe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ls(e,ct._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ct(e.vectorValues);throw new B(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ct._jsonSchemaVersion="firestore/vectorValue/1.0",ct._jsonSchema={type:pe("string",ct._jsonSchemaVersion),vectorValues:pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=/^__.*__$/;class xx{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new En(e,this.data,this.fieldMask,t,this.fieldTransforms):new cs(e,this.data,t,this.fieldTransforms)}}function Qf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ec:n})}}class cl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new cl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return bi(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Qf(this.Ec)&&bx.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Ex{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Fi(e)}Dc(e,t,r,s=!1){return new cl({Ec:e,methodName:t,bc:r,path:Ie.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tx(n){const e=n._freezeSettings(),t=Fi(n._databaseId);return new Ex(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ix(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);em("Data must be an object, but it was:",a,r);const l=Jf(r,a);let u,d;if(i.merge)u=new et(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const w=Ax(e,y,t);if(!a.contains(w))throw new B(D.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Px(m,w)||m.push(w)}u=new et(m),d=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=a.fieldTransforms;return new xx(new Ge(l),u,d)}function Yf(n,e){if(Zf(n=Fe(n)))return em("Unsupported field value:",e,n),Jf(n,e);if(n instanceof Xf)return function(r,s){if(!Qf(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=Yf(l,s.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ae.fromDate(r);return{timestampValue:yi(s.serializer,i)}}if(r instanceof ae){const i=new ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yi(s.serializer,i)}}if(r instanceof lt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ke)return{bytesValue:vf(s.serializer,r._byteString)};if(r instanceof xe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ct)return function(a,l){return{mapValue:{fields:{[Hd]:{stringValue:Gd},[di]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw l.wc("VectorValues must only contain numeric values.");return za(l.serializer,d)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${ja(r)}`)}(n,e)}function Jf(n,e){const t={};return Ud(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bn(n,(r,s)=>{const i=Yf(s,e.Vc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Zf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof lt||n instanceof Ke||n instanceof xe||n instanceof Xf||n instanceof ct)}function em(n,e,t){if(!Zf(t)||!Ld(t)){const r=ja(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Ax(n,e,t){if((e=Fe(e))instanceof ll)return e._internalPath;if(typeof e=="string")return tm(n,e);throw bi("Field path arguments must be of type string or ",n,!1,void 0,t)}const Sx=new RegExp("[~\\*/\\[\\]]");function tm(n,e,t){if(e.search(Sx)>=0)throw bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ll(...e.split("."))._internalPath}catch{throw bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function bi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new B(D.INVALID_ARGUMENT,l+n+u)}function Px(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Cx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Cx extends nm{data(){return super.data()}}function rm(n,e){return typeof e=="string"?tm(n,e):e instanceof ll?e._internalPath:e._delegate._internalPath}class Rx{convertValue(e,t="none"){switch(Jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return bn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[di].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>de(a.doubleValue));return new ct(i)}convertGeoPoint(e){return new lt(de(e.latitude),de(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ni(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Kr(e));default:return null}}convertTimestamp(e){const t=Qt(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ce.fromString(e);ne(Tf(r),9688,{name:e});const s=new Xr(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(t)||It(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Nr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dn extends nm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ei(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(rm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=dn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}dn._jsonSchemaVersion="firestore/documentSnapshot/1.0",dn._jsonSchema={type:pe("string",dn._jsonSchemaVersion),bundleSource:pe("string","DocumentSnapshot"),bundleName:pe("string"),bundle:pe("string")};class ei extends dn{data(e={}){return super.data(e)}}class Ur{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Nr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ei(this._firestore,this._userDataWriter,r.key,r,new Nr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new ei(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Nr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new ei(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Nr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:Nx(l.type),doc:u,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ur._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Va.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Nx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(n){n=Hr(n,xe);const e=Hr(n.firestore,al);return yx(Kf(e),n._key).then(t=>jx(e,n,t))}Ur._jsonSchemaVersion="firestore/querySnapshot/1.0",Ur._jsonSchema={type:pe("string",Ur._jsonSchemaVersion),bundleSource:pe("string","QuerySnapshot"),bundleName:pe("string"),bundle:pe("string")};class Dx extends Rx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ke(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,t)}}function ha(n,e,t){n=Hr(n,xe);const r=Hr(n.firestore,al),s=kx(n.converter,e,t);return Vx(r,[Ix(Tx(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,xt.none())])}function Vx(n,e){return function(r,s){const i=new Gt;return r.asyncQueue.enqueueAndForget(async()=>rx(await px(r),s,i)),i.promise}(Kf(n),e)}function jx(n,e,t){const r=t.docs.get(e._key),s=new Dx(n);return new dn(n,s,e._key,r,new Nr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){rr=s})(tr),qn(new mn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new al(new b_(r.getProvider("auth-internal")),new T_(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new B(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xr(d.options.projectId,m)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),qt(su,iu,e),qt(su,iu,"esm2017")})();const Ox={apiKey:"AIzaSyBdmB-BBrwOIXXQQ87UfAHjAmoJEqJ7V4s",authDomain:"xpanix-b2f7c.firebaseapp.com",projectId:"xpanix-b2f7c",storageBucket:"xpanix-b2f7c.firebasestorage.app",messagingSenderId:"654509076160",appId:"1:654509076160:web:f4f52ee9e07c1388f8c725"};let So,Je,Wn;try{So=Dc().length?Dc()[0]:qh(Ox),Je=y_(So),Wn=_x(So)}catch(n){throw console.error("Firebase initialization failed:",n),new Error("Firebase configuration error. Please check your environment variables.")}function Mx(){const[n,e]=C.useState(null),[t,r]=C.useState(!0);return C.useEffect(()=>{const s=a0(Je,i=>{e(i),r(!1)});return()=>s()},[]),{user:n,loading:t}}function Lx(){const[n,e]=C.useState(!1),{user:t}=Mx(),r=ts(),s=Zn(),i=a=>{if(a.preventDefault(),s.pathname==="/"){const l=document.getElementById("about");l&&l.scrollIntoView({behavior:"smooth"})}else r("/"),setTimeout(()=>{const l=document.getElementById("about");l&&l.scrollIntoView({behavior:"smooth"})},100)};return c.jsxs("header",{className:"w-full fixed top-0 left-0 z-30 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300",children:[c.jsxs("nav",{className:"container mx-auto flex items-center justify-between py-4 px-4 sm:px-10",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"bg-white rounded w-8 h-8 flex items-center justify-center",children:c.jsx("span",{className:"text-black text-lg font-bold font-mono",children:"X"})}),c.jsx("span",{className:"text-lg font-bold text-white font-mono tracking-widest",children:"Xpanix"})]}),c.jsxs("div",{className:"hidden lg:flex items-center gap-4 md:gap-6 xl:gap-10",children:[c.jsxs("ul",{className:"flex items-center gap-2 md:gap-4 xl:gap-8 text-white font-mono text-xs md:text-sm xl:text-base tracking-widest uppercase",children:[c.jsx("li",{className:"group relative px-1",children:c.jsxs(we,{to:"/",className:"relative z-10 px-3 py-1 transition-colors duration-300",children:[c.jsx("span",{className:"absolute inset-0 bg-white rounded-md scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"}),c.jsx("span",{className:"relative z-10 group-hover:text-black transition-colors duration-300",children:"Home"})]})}),c.jsx("li",{className:"group relative px-1",children:c.jsxs("a",{href:"#about",onClick:i,className:"relative z-10 px-3 py-1 transition-colors duration-300 cursor-pointer",children:[c.jsx("span",{className:"absolute inset-0 bg-white rounded-md scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"}),c.jsx("span",{className:"relative z-10 group-hover:text-black transition-colors duration-300",children:"About"})]})}),[{to:"/services",label:"Services"},{to:"/portfolio",label:"Portfolio"},{to:"/contact",label:"Contact us"}].map(a=>c.jsx("li",{className:"group relative px-1",children:c.jsxs(we,{to:a.to,className:"relative z-10 px-3 py-1 transition-colors duration-300",children:[c.jsx("span",{className:"absolute inset-0 bg-white rounded-md scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"}),c.jsx("span",{className:"relative z-10 group-hover:text-black transition-colors duration-300",children:a.label})]})},a.to))]}),c.jsx("div",{className:"ml-2 flex gap-1 md:gap-2 xl:ml-4",children:t?c.jsx("button",{onClick:async()=>{await Gc(Je),window.location.href="/login"},className:"px-3 py-1 md:px-4 md:py-1.5 xl:px-5 xl:py-2 bg-red-600 text-white font-mono rounded hover:bg-red-700 transition-all tracking-widest uppercase text-xs md:text-sm xl:text-base shadow-md backdrop-blur duration-300",children:"Sign Out"}):c.jsxs(c.Fragment,{children:[c.jsx(we,{to:"/login",children:c.jsx("button",{className:"px-3 py-1 md:px-4 md:py-1.5 xl:px-5 xl:py-2 bg-white text-black font-mono rounded hover:bg-gray-200 transition-all tracking-widest uppercase text-xs md:text-sm xl:text-base shadow-md backdrop-blur duration-300",children:"log in"})}),c.jsx(we,{to:"/signup",children:c.jsx("button",{className:"px-3 py-1 md:px-4 md:py-1.5 xl:px-5 xl:py-2 bg-black text-white font-mono rounded border border-white hover:bg-white hover:text-black transition-all tracking-widest uppercase text-xs md:text-sm xl:text-base shadow-md backdrop-blur duration-300",children:"Sign up"})})]})})]}),c.jsx("div",{className:"lg:hidden flex items-center",children:c.jsx("button",{className:"text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400",onClick:()=>e(!0),"aria-label":"Open menu",children:c.jsx(ap,{size:28})})})]}),n&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-start justify-center bg-black/60",children:c.jsxs("div",{className:"relative mt-8 w-[95vw] max-w-md rounded-2xl bg-black shadow-2xl flex flex-col items-stretch p-0",children:[c.jsxs("div",{className:"flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"bg-white rounded w-8 h-8 flex items-center justify-center",children:c.jsx("span",{className:"text-black text-lg font-bold font-mono",children:"X"})}),c.jsx("span",{className:"text-base font-bold text-white font-mono tracking-widest",children:"Xpanix"})]}),c.jsx("button",{className:"text-white p-2 rounded hover:bg-white/10 transition",onClick:()=>e(!1),"aria-label":"Close menu",children:c.jsx(lp,{size:24})})]}),c.jsxs("div",{className:"flex flex-col gap-2 px-6 py-6",children:[c.jsx(we,{to:"/",className:"text-white text-lg py-1 hover:text-blue-400 transition",onClick:()=>e(!1),children:"Home"}),c.jsx("a",{href:"#about",onClick:a=>{e(!1),i(a)},className:"text-white text-lg py-1 hover:text-blue-400 transition cursor-pointer",children:"About"}),c.jsx(we,{to:"/services",className:"text-white text-lg py-1 hover:text-blue-400 transition",onClick:()=>e(!1),children:"Services"}),c.jsx(we,{to:"/portfolio",className:"text-white text-lg py-1 hover:text-blue-400 transition",onClick:()=>e(!1),children:"Portfolio"}),c.jsx(we,{to:"/contact",className:"text-white text-lg py-1 hover:text-blue-400 transition",onClick:()=>e(!1),children:"Contact us"}),c.jsx("div",{className:"py-2"}),c.jsx("div",{className:"flex gap-2 mt-2",children:t?c.jsx("button",{className:"w-full py-3 rounded-lg bg-red-600 text-white font-semibold text-base shadow hover:bg-red-700 transition",onClick:async()=>{await Gc(Je),window.location.href="/login",e(!1)},children:"Sign Out"}):c.jsxs(c.Fragment,{children:[c.jsx(we,{to:"/login",className:"w-1/2",onClick:()=>e(!1),children:c.jsx("button",{className:"w-full py-3 rounded-lg bg-white text-black font-semibold text-base shadow hover:bg-gray-200 transition",children:"log in"})}),c.jsx(we,{to:"/signup",className:"w-1/2",onClick:()=>e(!1),children:c.jsx("button",{className:"w-full py-3 rounded-lg bg-black text-white font-semibold text-base border border-white shadow hover:bg-white hover:text-black transition",children:"Sign up"})})]})})]})]})})]})}function Fx(){return c.jsxs("footer",{className:"w-full bg-black text-white pt-16 pb-8",children:[c.jsxs("div",{className:"max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[c.jsxs("div",{className:"lg:col-span-1",children:[c.jsx("div",{className:"mb-6",children:c.jsx("h2",{className:"text-2xl font-bold",children:c.jsx("span",{className:"text-blue-400",children:"Xpanix"})})}),c.jsx("p",{className:"text-gray-300 mb-6 leading-relaxed",children:"Empowering businesses through innovative digital solutions and cutting-edge technology services."}),c.jsxs("div",{className:"flex gap-4",children:[c.jsx("a",{href:"#",className:"bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition duration-300","aria-label":"Facebook",children:c.jsx(cp,{className:"w-5 h-5"})}),c.jsx("a",{href:"#",className:"bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition duration-300","aria-label":"Instagram",children:c.jsx(up,{className:"w-5 h-5"})})]})]}),c.jsxs("div",{children:[c.jsxs("h3",{className:"text-lg font-semibold mb-6 relative",children:["Quick Links",c.jsx("div",{className:"absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"})]}),c.jsxs("ul",{className:"space-y-3",children:[c.jsx("li",{children:c.jsx(we,{to:"/",className:"text-gray-300 hover:text-white transition duration-300",children:"Home"})}),c.jsx("li",{children:c.jsx(we,{to:"/about",className:"text-gray-300 hover:text-white transition duration-300",children:"About Us"})}),c.jsx("li",{children:c.jsx(we,{to:"/services",className:"text-gray-300 hover:text-white transition duration-300",children:"Services"})}),c.jsx("li",{children:c.jsx(we,{to:"/portfolio",className:"text-gray-300 hover:text-white transition duration-300",children:"Portfolio"})}),c.jsx("li",{children:c.jsx(we,{to:"/contact",className:"text-gray-300 hover:text-white transition duration-300",children:"Contact"})})]})]}),c.jsxs("div",{children:[c.jsxs("h3",{className:"text-lg font-semibold mb-6 relative",children:["Our Services",c.jsx("div",{className:"absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"})]}),c.jsxs("ul",{className:"space-y-3",children:[c.jsx("li",{className:"text-gray-300",children:"Web Development"}),c.jsx("li",{className:"text-gray-300",children:"App Development"}),c.jsx("li",{className:"text-gray-300",children:"Digital Marketing"}),c.jsx("li",{className:"text-gray-300",children:"Product Listing"})]})]}),c.jsxs("div",{children:[c.jsxs("h3",{className:"text-lg font-semibold mb-6 relative",children:["Contact Info",c.jsx("div",{className:"absolute bottom-0 left-0 w-12 h-0.5 bg-blue-400"})]}),c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx(hp,{className:"w-5 h-5 text-blue-400 mt-1 flex-shrink-0"}),c.jsxs("span",{className:"text-gray-300 leading-relaxed",children:["2, Eadgah Road Model Town Panipat",c.jsx("br",{}),"Haryana"]})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(dp,{className:"w-5 h-5 text-blue-400 flex-shrink-0"}),c.jsx("a",{href:"mailto:info.xpanix@gmail.com",className:"text-gray-300 hover:text-white transition duration-300",children:"info.xpanix@gmail.com"})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(fp,{className:"w-5 h-5 text-blue-400 flex-shrink-0"}),c.jsx("a",{href:"tel:+918930005190",className:"text-gray-300 hover:text-white transition duration-300",children:"+91 8930005190"})]})]})]})]}),c.jsx("div",{className:"max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 px-6",children:c.jsxs("div",{className:"text-center text-gray-400 text-sm",children:["©"," 2024 Xpanix. All rights reserved."]})})]})}let im=-1;const ar=n=>{addEventListener("pageshow",e=>{e.persisted&&(im=e.timeStamp,n(e))},!0)},dt=(n,e,t,r)=>{let s,i;return a=>{e.value>=0&&(a||r)&&(i=e.value-(s??0),(i||s===void 0)&&(s=e.value,e.delta=i,e.rating=((l,u)=>l>u[1]?"poor":l>u[0]?"needs-improvement":"good")(e.value,t),n(e)))}},ul=n=>{requestAnimationFrame(()=>requestAnimationFrame(()=>n()))},hl=()=>{const n=performance.getEntriesByType("navigation")[0];if(n&&n.responseStart>0&&n.responseStart<performance.now())return n},fs=()=>hl()?.activationStart??0,ft=(n,e=-1)=>{const t=hl();let r="navigate";return im>=0?r="back-forward-cache":t&&(document.prerendering||fs()>0?r="prerender":document.wasDiscarded?r="restore":t.type&&(r=t.type.replace(/_/g,"-"))),{name:n,value:e,rating:"good",delta:0,entries:[],id:`v5-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,navigationType:r}},Po=new WeakMap;function dl(n,e){return Po.get(n)||Po.set(n,new e),Po.get(n)}class Ux{t;i=0;o=[];h(e){if(e.hadRecentInput)return;const t=this.o[0],r=this.o.at(-1);this.i&&t&&r&&e.startTime-r.startTime<1e3&&e.startTime-t.startTime<5e3?(this.i+=e.value,this.o.push(e)):(this.i=e.value,this.o=[e]),this.t?.(e)}}const ms=(n,e,t={})=>{try{if(PerformanceObserver.supportedEntryTypes.includes(n)){const r=new PerformanceObserver(s=>{Promise.resolve().then(()=>{e(s.getEntries())})});return r.observe({type:n,buffered:!0,...t}),r}}catch{}},fl=n=>{let e=!1;return()=>{e||(n(),e=!0)}};let Fn=-1;const Zu=()=>document.visibilityState!=="hidden"||document.prerendering?1/0:0,xi=n=>{document.visibilityState==="hidden"&&Fn>-1&&(Fn=n.type==="visibilitychange"?n.timeStamp:0,Bx())},eh=()=>{addEventListener("visibilitychange",xi,!0),addEventListener("prerenderingchange",xi,!0)},Bx=()=>{removeEventListener("visibilitychange",xi,!0),removeEventListener("prerenderingchange",xi,!0)},om=()=>{if(Fn<0){const n=fs();Fn=(document.prerendering?void 0:globalThis.performance.getEntriesByType("visibility-state").filter(t=>t.name==="hidden"&&t.startTime>n)[0]?.startTime)??Zu(),eh(),ar(()=>{setTimeout(()=>{Fn=Zu(),eh()})})}return{get firstHiddenTime(){return Fn}}},zi=n=>{document.prerendering?addEventListener("prerenderingchange",()=>n(),!0):n()},th=[1800,3e3],am=(n,e={})=>{zi(()=>{const t=om();let r,s=ft("FCP");const i=ms("paint",a=>{for(const l of a)l.name==="first-contentful-paint"&&(i.disconnect(),l.startTime<t.firstHiddenTime&&(s.value=Math.max(l.startTime-fs(),0),s.entries.push(l),r(!0)))});i&&(r=dt(n,s,th,e.reportAllChanges),ar(a=>{s=ft("FCP"),r=dt(n,s,th,e.reportAllChanges),ul(()=>{s.value=performance.now()-a.timeStamp,r(!0)})}))})},nh=[.1,.25],zx=(n,e={})=>{am(fl(()=>{let t,r=ft("CLS",0);const s=dl(e,Ux),i=l=>{for(const u of l)s.h(u);s.i>r.value&&(r.value=s.i,r.entries=s.o,t())},a=ms("layout-shift",i);a&&(t=dt(n,r,nh,e.reportAllChanges),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(i(a.takeRecords()),t(!0))}),ar(()=>{s.i=0,r=ft("CLS",0),t=dt(n,r,nh,e.reportAllChanges),ul(()=>t())}),setTimeout(t))}))};let lm=0,Co=1/0,Us=0;const $x=n=>{for(const e of n)e.interactionId&&(Co=Math.min(Co,e.interactionId),Us=Math.max(Us,e.interactionId),lm=Us?(Us-Co)/7+1:0)};let da;const rh=()=>da?lm:performance.interactionCount??0,Wx=()=>{"interactionCount"in performance||da||(da=ms("event",$x,{type:"event",buffered:!0,durationThreshold:0}))};let sh=0;class qx{u=[];l=new Map;m;v;p(){sh=rh(),this.u.length=0,this.l.clear()}P(){const e=Math.min(this.u.length-1,Math.floor((rh()-sh)/50));return this.u[e]}h(e){if(this.m?.(e),!e.interactionId&&e.entryType!=="first-input")return;const t=this.u.at(-1);let r=this.l.get(e.interactionId);if(r||this.u.length<10||e.duration>t.T){if(r?e.duration>r.T?(r.entries=[e],r.T=e.duration):e.duration===r.T&&e.startTime===r.entries[0].startTime&&r.entries.push(e):(r={id:e.interactionId,entries:[e],T:e.duration},this.l.set(r.id,r),this.u.push(r)),this.u.sort((s,i)=>i.T-s.T),this.u.length>10){const s=this.u.splice(10);for(const i of s)this.l.delete(i.id)}this.v?.(r)}}}const cm=n=>{const e=globalThis.requestIdleCallback||setTimeout;document.visibilityState==="hidden"?n():(n=fl(n),document.addEventListener("visibilitychange",n,{once:!0}),e(()=>{n(),document.removeEventListener("visibilitychange",n)}))},ih=[200,500],Hx=(n,e={})=>{globalThis.PerformanceEventTiming&&"interactionId"in PerformanceEventTiming.prototype&&zi(()=>{Wx();let t,r=ft("INP");const s=dl(e,qx),i=l=>{cm(()=>{for(const d of l)s.h(d);const u=s.P();u&&u.T!==r.value&&(r.value=u.T,r.entries=u.entries,t())})},a=ms("event",i,{durationThreshold:e.durationThreshold??40});t=dt(n,r,ih,e.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(i(a.takeRecords()),t(!0))}),ar(()=>{s.p(),r=ft("INP"),t=dt(n,r,ih,e.reportAllChanges)}))})};class Gx{m;h(e){this.m?.(e)}}const oh=[2500,4e3],Kx=(n,e={})=>{zi(()=>{const t=om();let r,s=ft("LCP");const i=dl(e,Gx),a=u=>{e.reportAllChanges||(u=u.slice(-1));for(const d of u)i.h(d),d.startTime<t.firstHiddenTime&&(s.value=Math.max(d.startTime-fs(),0),s.entries=[d],r())},l=ms("largest-contentful-paint",a);if(l){r=dt(n,s,oh,e.reportAllChanges);const u=fl(()=>{a(l.takeRecords()),l.disconnect(),r(!0)});for(const d of["keydown","click","visibilitychange"])addEventListener(d,()=>cm(u),{capture:!0,once:!0});ar(d=>{s=ft("LCP"),r=dt(n,s,oh,e.reportAllChanges),ul(()=>{s.value=performance.now()-d.timeStamp,r(!0)})})}})},ah=[800,1800],fa=n=>{document.prerendering?zi(()=>fa(n)):document.readyState!=="complete"?addEventListener("load",()=>fa(n),!0):setTimeout(n)},Xx=(n,e={})=>{let t=ft("TTFB"),r=dt(n,t,ah,e.reportAllChanges);fa(()=>{const s=hl();s&&(t.value=Math.max(s.responseStart-fs(),0),t.entries=[s],r(!0),ar(()=>{t=ft("TTFB",0),r=dt(n,t,ah,e.reportAllChanges),r(!0)}))})};function Qx(){if(!(typeof window>"u")){if(zx(Dn),am(Dn),Hx(Dn),Kx(Dn),Xx(Dn),"PerformanceObserver"in window){const n=new PerformanceObserver(e=>{e.getEntries().forEach(t=>{t.duration>50&&(console.warn("Long task detected:",{duration:t.duration,startTime:t.startTime,name:t.name}),Dn({name:"Long Task",value:t.duration,id:`long-task-${Date.now()}`}))})});try{n.observe({entryTypes:["longtask"]})}catch{console.warn("Long task observer not supported")}}if("PerformanceObserver"in window){const n=new PerformanceObserver(e=>{e.getEntries().forEach(t=>{!t.hadRecentInput&&t.value>.1&&console.warn("Layout shift detected:",{value:t.value,sources:t.sources})})});try{n.observe({entryTypes:["layout-shift"]})}catch{console.warn("Layout shift observer not supported")}}}}function Dn({name:n,value:e,id:t}){typeof window<"u"&&typeof window.gtag<"u"&&window.gtag("event",n,{custom_parameter_1:e,custom_parameter_2:t})}function Yx(){if(typeof window>"u")return;const n={"Largest Contentful Paint":2500,"First Input Delay":100,"Cumulative Layout Shift":.1,"First Contentful Paint":1800,"Time to First Byte":800};window.addEventListener("load",()=>{setTimeout(()=>{Object.entries(n).forEach(([e,t])=>{console.log(`Performance Budget Check - ${e}: ${t}ms/units`)})},3e3)})}function Jx(n,e={}){if(typeof window>"u"||!("IntersectionObserver"in window))return null;const t={root:null,rootMargin:"50px",threshold:.1,...e};return new IntersectionObserver(n,t)}function Zx(){if(typeof window>"u")return;document.querySelectorAll("img:not([loading])").forEach((e,t)=>{t<3?e.setAttribute("loading","eager"):e.setAttribute("loading","lazy")})}function eE(){return C.useEffect(()=>{Qx(),Yx();const n=setTimeout(()=>{Zx()},1e3);return()=>clearTimeout(n)},[]),null}const tE=[{value:100,suffix:"+",label:"Projects Completed"},{value:50,suffix:"+",label:"Happy Clients"},{value:99,suffix:"%",label:"Success Rate"},{value:4,suffix:"+",label:"Years Experience"}];function Bs(n,e=1200){const[t,r]=C.useState(0),s=C.useRef(null);return C.useEffect(()=>{let i=0;const a=Math.ceil(n/(e/16));function l(){if(i+=a,i>=n){r(n);return}r(i),s.current=setTimeout(l,16)}return l(),()=>{s.current&&clearTimeout(s.current)}},[n,e]),t}function nE(){const n=C.useMemo(()=>tE,[]),e=Bs(n[0].value,1200),t=Bs(n[1].value,1400),r=Bs(n[2].value,1600),s=Bs(n[3].value,1800),i=[e,t,r,s];return c.jsx("div",{className:"relative w-full py-2 bg-transparent overflow-hidden",children:c.jsx("div",{className:"relative z-10 flex flex-row items-center justify-between gap-2 sm:gap-6 md:gap-10 px-1 sm:px-2 md:px-4",children:n.map((a,l)=>c.jsxs("div",{className:"flex flex-col items-center flex-1 min-w-[60px]",children:[c.jsxs("span",{className:"text-lg sm:text-2xl md:text-4xl font-bold text-gray-100 mb-1",children:[i[l],a.suffix]}),c.jsx("span",{className:"text-xs sm:text-sm md:text-base text-gray-300 font-medium text-center",children:a.label})]},a.label))})})}function rE(){return c.jsx("div",{className:"absolute left-0 right-0 bottom-0 w-full h-[220px] pointer-events-none z-10",children:c.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 1440 220",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",style:{display:"block"},children:[c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:"wave-gradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[c.jsx("stop",{offset:"0%",stopColor:"#fff",stopOpacity:"0.7"}),c.jsx("stop",{offset:"100%",stopColor:"#fff",stopOpacity:"0"})]}),c.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[c.jsx("feGaussianBlur",{stdDeviation:"16",result:"coloredBlur"}),c.jsxs("feMerge",{children:[c.jsx("feMergeNode",{in:"coloredBlur"}),c.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),c.jsx("g",{filter:"url(#glow)",children:c.jsx("path",{children:c.jsx("animate",{attributeName:"d",dur:"6s",repeatCount:"indefinite",values:`
                M0,160 Q360,80 720,160 T1440,160 V220 H0Z;
                M0,160 Q360,200 720,120 T1440,160 V220 H0Z;
                M0,160 Q360,80 720,160 T1440,160 V220 H0Z
              `})})}),c.jsx("g",{children:c.jsx("path",{d:"M0,160 Q360,80 720,160 T1440,160 V220 H0Z",fill:"url(#wave-gradient)",opacity:"0.5",filter:"url(#glow)",transform:"scale(1,-1) translate(0,-320)"})})]})})}const Ro=["stand out","lead","grow","scale","succeed"];function sE(){const[n,e]=C.useState(0),[t,r]=C.useState(0),[s,i]=C.useState(!1);return C.useEffect(()=>{if(t===Ro[n].length+1&&!s){setTimeout(()=>i(!0),1e3);return}if(t===0&&s){i(!1),e(l=>(l+1)%Ro.length);return}const a=setTimeout(()=>{r(l=>l+(s?-1:1))},s?60:120);return()=>clearTimeout(a)},[t,n,s]),c.jsx("span",{className:"bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-extrabold",children:Ro[n].substring(0,t)})}function iE({children:n}){const e=ts(),[t,r]=C.useState(!1);C.useEffect(()=>{r(!0)},[]),C.useEffect(()=>{const a=setInterval(()=>{const l=document.querySelector("spline-viewer");if(l&&l.shadowRoot){const u=l.shadowRoot.querySelector("#logo");u&&(u.remove(),clearInterval(a))}},500);return()=>clearInterval(a)},[]);const s=()=>{e("/contact")},i=()=>{e("/portfolio")};return c.jsxs("section",{className:"relative w-full min-h-[400px] min-h-screen h-[100dvh] flex items-center justify-center overflow-hidden bg-black",children:[c.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center z-20 px-2 sm:px-4 pointer-events-none",children:[c.jsx("div",{className:"mb-4 sm:mb-6",children:c.jsx("span",{className:"px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/60 text-white text-xs sm:text-sm font-medium border border-white/10 shadow-lg backdrop-blur-md",children:"Crafting Unique Brand Identities"})}),c.jsxs("h1",{className:"text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 sm:mb-6 drop-shadow-lg leading-tight whitespace-nowrap",children:["Empowering Brands to ",c.jsx(sE,{})]}),c.jsx("p",{className:"text-xs xs:text-sm sm:text-base md:text-lg text-gray-200 text-center max-w-xs sm:max-w-md md:max-w-xl mb-6 sm:mb-8",children:"Smart IT solutions that power your growth — from web and app development to design and digital ads."}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-center justify-center mb-10 max-w-md",children:[c.jsx("button",{onClick:s,className:"w-full sm:w-auto px-6 py-3 rounded-full bg-black/80 backdrop-blur-md text-white font-medium text-sm sm:text-base border border-white/20 shadow-lg pointer-events-auto relative overflow-hidden hover:bg-black/90 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-[140px]",children:"Get Started Now"}),c.jsx("button",{onClick:i,className:"w-full sm:w-auto px-6 py-3 rounded-full bg-black/80 backdrop-blur-md text-white font-medium text-sm sm:text-base border border-white/20 shadow-lg pointer-events-auto relative overflow-hidden hover:bg-black/90 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl min-w-[140px]",children:"See Projects"})]}),c.jsx("div",{className:"w-full max-w-3xl mx-auto",children:c.jsx(nE,{})})]}),n&&c.jsx("div",{className:"absolute inset-0 w-full h-full z-10 flex items-center justify-center px-2 sm:px-4",children:c.jsx("div",{className:"w-full h-full max-w-full max-h-full flex items-center justify-center",children:c.jsx("div",{className:"w-full h-full sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full flex items-center justify-center",children:n})})}),c.jsx(rE,{})]})}const lh=(n,e,t,r)=>{n.style.transition=`${e} ${t}ms ${r}`},vt=(n,e,t)=>Math.min(Math.max(n,e),t);class oE{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=a=>{const{width:l,height:u}=a,d=Math.sqrt(l**2+u**2);return{width:d,height:d}},this.setSize=a=>{const l=this.calculateGlareSize(a);this.glareEl.style.width=`${l.width}px`,this.glareEl.style.height=`${l.height}px`},this.update=(a,l,u,d)=>{this.updateAngle(a,l.glareReverse),this.updateOpacity(a,l,u,d)},this.updateAngle=(a,l)=>{const{xPercentage:u,yPercentage:d}=a,m=180/Math.PI,y=u?Math.atan2(d,-u)*m:0;this.glareAngle=y-(l?180:0)},this.updateOpacity=(a,l,u,d)=>{const{xPercentage:m,yPercentage:y}=a,{glarePosition:w,glareReverse:S,glareMaxOpacity:R}=l,N=u?-1:1,A=d?-1:1,j=S?-1:1;let V=0;switch(w){case"top":V=-m*N*j;break;case"right":V=y*A*j;break;case"bottom":case void 0:V=m*N*j;break;case"left":V=-y*A*j;break;case"all":V=Math.hypot(m,y)}const M=vt(V,0,100);this.glareOpacity=M*R/100},this.render=a=>{const{glareColor:l}=a;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${l} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const r={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},s=this.calculateGlareSize(e),i={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${s.width}px`,height:`${s.height}px`};Object.assign(this.glareWrapperEl.style,r),Object.assign(this.glareEl.style,i)}}let aE=class{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{const{xPercentage:r,yPercentage:s}=e,{tiltMaxAngleX:i,tiltMaxAngleY:a}=t;this.tiltAngleX=r*i/100,this.tiltAngleY=s*a/100*-1},this.updateTiltManualInput=(e,t)=>{const{tiltAngleXManual:r,tiltAngleYManual:s,tiltMaxAngleX:i,tiltMaxAngleY:a}=t;(r!==null||s!==null)&&(this.tiltAngleX=r!==null?r:0,this.tiltAngleY=s!==null?s:0,e.xPercentage=100*this.tiltAngleX/i,e.yPercentage=100*this.tiltAngleY/a)},this.updateTiltReverse=e=>{const t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:t}=e;this.tiltAngleX=vt(this.tiltAngleX,-90,90),this.tiltAngleY=vt(this.tiltAngleY,-90,90),t&&(this.tiltAngleX=t==="x"?this.tiltAngleX:0,this.tiltAngleY=t==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:t,tiltMaxAngleY:r}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/r*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}};const lE={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class Ei extends C.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;typeof e=="function"?await e()==="granted"&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t({event:e})},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:t}=this.props;if(this.setTransitions(),t&&t({event:e}),this.props.reset){const r=new CustomEvent("autoreset");this.onMove(r)}},this.processInput=e=>{const{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":{const{tiltAngleXInitial:r,tiltAngleYInitial:s,tiltMaxAngleX:i,tiltMaxAngleY:a}=this.props,l=s/a*100;this.wrapperEl.clientPosition.xPercentage=vt(r/i*100,-100,100),this.wrapperEl.clientPosition.yPercentage=vt(l,-100,100),this.wrapperEl.scale=1;break}}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:t,tiltMaxAngleY:r}=this.props,s=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=s/r*100,this.wrapperEl.clientPosition.xPercentage=vt(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=vt(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:t,flipVertically:r,flipHorizontally:s}=this.props;e!=="autoreset"&&e!=="deviceorientation"&&e!=="propChange"&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,r,s)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let t,r;if(e){const{x:s,y:i}=this.wrapperEl.clientPosition;t=i/window.innerHeight*200-100,r=s/window.innerWidth*200-100}else{const{size:{width:s,height:i,left:a,top:l},clientPosition:{x:u,y:d}}=this.wrapperEl;t=(d-l)/i*200-100,r=(u-a)/s*200-100}this.wrapperEl.clientPosition.xPercentage=vt(t,-100,100),this.wrapperEl.clientPosition.yPercentage=vt(r,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new aE,this.initGlare(),this.setSize(),this.addEventListeners(),typeof CustomEvent>"u")return;const e=new CustomEvent("autoreset");this.mainLoop(e);const t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new oE(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:t}=this.props;if(!t)return;let r=0,s=0;this.glare&&(r=this.glare.glareAngle,s=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:r,glareOpacity:s,event:e})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:t}=this.props;lh(this.wrapperEl.node,"all",e,t),this.glare&&lh(this.glare.glareEl,"opacity",e,t)}render(){const{children:e,className:t,style:r}=this.props;return c.jsx("div",{ref:s=>{this.wrapperEl.node=s},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:r,children:e})}}Ei.defaultProps=lE;function um(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=um(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function cE(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=um(n))&&(r&&(r+=" "),r+=e);return r}const ml="-",uE=n=>{const e=dE(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:a=>{const l=a.split(ml);return l[0]===""&&l.length!==1&&l.shift(),hm(l,e)||hE(a)},getConflictingClassGroupIds:(a,l)=>{const u=t[a]||[];return l&&r[a]?[...u,...r[a]]:u}}},hm=(n,e)=>{if(n.length===0)return e.classGroupId;const t=n[0],r=e.nextPart.get(t),s=r?hm(n.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=n.join(ml);return e.validators.find(({validator:a})=>a(i))?.classGroupId},ch=/^\[(.+)\]$/,hE=n=>{if(ch.test(n)){const e=ch.exec(n)[1],t=e?.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},dE=n=>{const{theme:e,classGroups:t}=n,r={nextPart:new Map,validators:[]};for(const s in t)ma(t[s],r,s,e);return r},ma=(n,e,t,r)=>{n.forEach(s=>{if(typeof s=="string"){const i=s===""?e:uh(e,s);i.classGroupId=t;return}if(typeof s=="function"){if(fE(s)){ma(s(r),e,t,r);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([i,a])=>{ma(a,uh(e,i),t,r)})})},uh=(n,e)=>{let t=n;return e.split(ml).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},fE=n=>n.isThemeGetter,mE=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const s=(i,a)=>{t.set(i,a),e++,e>n&&(e=0,r=t,t=new Map)};return{get(i){let a=t.get(i);if(a!==void 0)return a;if((a=r.get(i))!==void 0)return s(i,a),a},set(i,a){t.has(i)?t.set(i,a):s(i,a)}}},pa="!",ga=":",pE=ga.length,gE=n=>{const{prefix:e,experimentalParseClassName:t}=n;let r=s=>{const i=[];let a=0,l=0,u=0,d;for(let R=0;R<s.length;R++){let N=s[R];if(a===0&&l===0){if(N===ga){i.push(s.slice(u,R)),u=R+pE;continue}if(N==="/"){d=R;continue}}N==="["?a++:N==="]"?a--:N==="("?l++:N===")"&&l--}const m=i.length===0?s:s.substring(u),y=yE(m),w=y!==m,S=d&&d>u?d-u:void 0;return{modifiers:i,hasImportantModifier:w,baseClassName:y,maybePostfixModifierPosition:S}};if(e){const s=e+ga,i=r;r=a=>a.startsWith(s)?i(a.substring(s.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:a,maybePostfixModifierPosition:void 0}}if(t){const s=r;r=i=>t({className:i,parseClassName:s})}return r},yE=n=>n.endsWith(pa)?n.substring(0,n.length-1):n.startsWith(pa)?n.substring(1):n,vE=n=>{const e=Object.fromEntries(n.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const s=[];let i=[];return r.forEach(a=>{a[0]==="["||e[a]?(s.push(...i.sort(),a),i=[]):i.push(a)}),s.push(...i.sort()),s}},_E=n=>({cache:mE(n.cacheSize),parseClassName:gE(n),sortModifiers:vE(n),...uE(n)}),wE=/\s+/,bE=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:s,sortModifiers:i}=e,a=[],l=n.trim().split(wE);let u="";for(let d=l.length-1;d>=0;d-=1){const m=l[d],{isExternal:y,modifiers:w,hasImportantModifier:S,baseClassName:R,maybePostfixModifierPosition:N}=t(m);if(y){u=m+(u.length>0?" "+u:u);continue}let A=!!N,j=r(A?R.substring(0,N):R);if(!j){if(!A){u=m+(u.length>0?" "+u:u);continue}if(j=r(R),!j){u=m+(u.length>0?" "+u:u);continue}A=!1}const V=i(w).join(":"),M=S?V+pa:V,K=M+j;if(a.includes(K))continue;a.push(K);const ie=s(j,A);for(let re=0;re<ie.length;++re){const x=ie[re];a.push(M+x)}u=m+(u.length>0?" "+u:u)}return u};function xE(){let n=0,e,t,r="";for(;n<arguments.length;)(e=arguments[n++])&&(t=dm(e))&&(r&&(r+=" "),r+=t);return r}const dm=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=dm(n[r]))&&(t&&(t+=" "),t+=e);return t};function EE(n,...e){let t,r,s,i=a;function a(u){const d=e.reduce((m,y)=>y(m),n());return t=_E(d),r=t.cache.get,s=t.cache.set,i=l,l(u)}function l(u){const d=r(u);if(d)return d;const m=bE(u,t);return s(u,m),m}return function(){return i(xE.apply(null,arguments))}}const ye=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},fm=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,mm=/^\((?:(\w[\w-]*):)?(.+)\)$/i,TE=/^\d+\/\d+$/,IE=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,AE=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,SE=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,PE=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,CE=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Vn=n=>TE.test(n),X=n=>!!n&&!Number.isNaN(Number(n)),jt=n=>!!n&&Number.isInteger(Number(n)),ko=n=>n.endsWith("%")&&X(n.slice(0,-1)),yt=n=>IE.test(n),RE=()=>!0,kE=n=>AE.test(n)&&!SE.test(n),pm=()=>!1,NE=n=>PE.test(n),DE=n=>CE.test(n),VE=n=>!F(n)&&!U(n),jE=n=>lr(n,vm,pm),F=n=>fm.test(n),ln=n=>lr(n,_m,kE),No=n=>lr(n,UE,X),hh=n=>lr(n,gm,pm),OE=n=>lr(n,ym,DE),zs=n=>lr(n,wm,NE),U=n=>mm.test(n),Tr=n=>cr(n,_m),ME=n=>cr(n,BE),dh=n=>cr(n,gm),LE=n=>cr(n,vm),FE=n=>cr(n,ym),$s=n=>cr(n,wm,!0),lr=(n,e,t)=>{const r=fm.exec(n);return r?r[1]?e(r[1]):t(r[2]):!1},cr=(n,e,t=!1)=>{const r=mm.exec(n);return r?r[1]?e(r[1]):t:!1},gm=n=>n==="position"||n==="percentage",ym=n=>n==="image"||n==="url",vm=n=>n==="length"||n==="size"||n==="bg-size",_m=n=>n==="length",UE=n=>n==="number",BE=n=>n==="family-name",wm=n=>n==="shadow",zE=()=>{const n=ye("color"),e=ye("font"),t=ye("text"),r=ye("font-weight"),s=ye("tracking"),i=ye("leading"),a=ye("breakpoint"),l=ye("container"),u=ye("spacing"),d=ye("radius"),m=ye("shadow"),y=ye("inset-shadow"),w=ye("text-shadow"),S=ye("drop-shadow"),R=ye("blur"),N=ye("perspective"),A=ye("aspect"),j=ye("ease"),V=ye("animate"),M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],ie=()=>[...K(),U,F],re=()=>["auto","hidden","clip","visible","scroll"],x=()=>["auto","contain","none"],g=()=>[U,F,u],v=()=>[Vn,"full","auto",...g()],b=()=>[jt,"none","subgrid",U,F],E=()=>["auto",{span:["full",jt,U,F]},jt,U,F],I=()=>[jt,"auto",U,F],_=()=>["auto","min","max","fr",U,F],Ue=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],We=()=>["start","end","center","stretch","center-safe","end-safe"],Qe=()=>["auto",...g()],Be=()=>[Vn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...g()],z=()=>[n,U,F],In=()=>[...K(),dh,hh,{position:[U,F]}],ur=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ps=()=>["auto","cover","contain",LE,jE,{size:[U,F]}],qe=()=>[ko,Tr,ln],ee=()=>["","none","full",d,U,F],Ve=()=>["",X,Tr,ln],nt=()=>["solid","dashed","dotted","double"],gs=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],le=()=>[X,ko,dh,hh],ys=()=>["","none",R,U,F],An=()=>["none",X,U,F],mt=()=>["none",X,U,F],Ct=()=>[X,U,F],Rt=()=>[Vn,"full",...g()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[yt],breakpoint:[yt],color:[RE],container:[yt],"drop-shadow":[yt],ease:["in","out","in-out"],font:[VE],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[yt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[yt],shadow:[yt],spacing:["px",X],text:[yt],"text-shadow":[yt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Vn,F,U,A]}],container:["container"],columns:[{columns:[X,F,U,l]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:ie()}],overflow:[{overflow:re()}],"overflow-x":[{"overflow-x":re()}],"overflow-y":[{"overflow-y":re()}],overscroll:[{overscroll:x()}],"overscroll-x":[{"overscroll-x":x()}],"overscroll-y":[{"overscroll-y":x()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:v()}],"inset-x":[{"inset-x":v()}],"inset-y":[{"inset-y":v()}],start:[{start:v()}],end:[{end:v()}],top:[{top:v()}],right:[{right:v()}],bottom:[{bottom:v()}],left:[{left:v()}],visibility:["visible","invisible","collapse"],z:[{z:[jt,"auto",U,F]}],basis:[{basis:[Vn,"full","auto",l,...g()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[X,Vn,"auto","initial","none",F]}],grow:[{grow:["",X,U,F]}],shrink:[{shrink:["",X,U,F]}],order:[{order:[jt,"first","last","none",U,F]}],"grid-cols":[{"grid-cols":b()}],"col-start-end":[{col:E()}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":b()}],"row-start-end":[{row:E()}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":_()}],"auto-rows":[{"auto-rows":_()}],gap:[{gap:g()}],"gap-x":[{"gap-x":g()}],"gap-y":[{"gap-y":g()}],"justify-content":[{justify:[...Ue(),"normal"]}],"justify-items":[{"justify-items":[...We(),"normal"]}],"justify-self":[{"justify-self":["auto",...We()]}],"align-content":[{content:["normal",...Ue()]}],"align-items":[{items:[...We(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...We(),{baseline:["","last"]}]}],"place-content":[{"place-content":Ue()}],"place-items":[{"place-items":[...We(),"baseline"]}],"place-self":[{"place-self":["auto",...We()]}],p:[{p:g()}],px:[{px:g()}],py:[{py:g()}],ps:[{ps:g()}],pe:[{pe:g()}],pt:[{pt:g()}],pr:[{pr:g()}],pb:[{pb:g()}],pl:[{pl:g()}],m:[{m:Qe()}],mx:[{mx:Qe()}],my:[{my:Qe()}],ms:[{ms:Qe()}],me:[{me:Qe()}],mt:[{mt:Qe()}],mr:[{mr:Qe()}],mb:[{mb:Qe()}],ml:[{ml:Qe()}],"space-x":[{"space-x":g()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":g()}],"space-y-reverse":["space-y-reverse"],size:[{size:Be()}],w:[{w:[l,"screen",...Be()]}],"min-w":[{"min-w":[l,"screen","none",...Be()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[a]},...Be()]}],h:[{h:["screen","lh",...Be()]}],"min-h":[{"min-h":["screen","lh","none",...Be()]}],"max-h":[{"max-h":["screen","lh",...Be()]}],"font-size":[{text:["base",t,Tr,ln]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,U,No]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ko,F]}],"font-family":[{font:[ME,F,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,U,F]}],"line-clamp":[{"line-clamp":[X,"none",U,No]}],leading:[{leading:[i,...g()]}],"list-image":[{"list-image":["none",U,F]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",U,F]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:z()}],"text-color":[{text:z()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...nt(),"wavy"]}],"text-decoration-thickness":[{decoration:[X,"from-font","auto",U,ln]}],"text-decoration-color":[{decoration:z()}],"underline-offset":[{"underline-offset":[X,"auto",U,F]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:g()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",U,F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",U,F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:In()}],"bg-repeat":[{bg:ur()}],"bg-size":[{bg:ps()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},jt,U,F],radial:["",U,F],conic:[jt,U,F]},FE,OE]}],"bg-color":[{bg:z()}],"gradient-from-pos":[{from:qe()}],"gradient-via-pos":[{via:qe()}],"gradient-to-pos":[{to:qe()}],"gradient-from":[{from:z()}],"gradient-via":[{via:z()}],"gradient-to":[{to:z()}],rounded:[{rounded:ee()}],"rounded-s":[{"rounded-s":ee()}],"rounded-e":[{"rounded-e":ee()}],"rounded-t":[{"rounded-t":ee()}],"rounded-r":[{"rounded-r":ee()}],"rounded-b":[{"rounded-b":ee()}],"rounded-l":[{"rounded-l":ee()}],"rounded-ss":[{"rounded-ss":ee()}],"rounded-se":[{"rounded-se":ee()}],"rounded-ee":[{"rounded-ee":ee()}],"rounded-es":[{"rounded-es":ee()}],"rounded-tl":[{"rounded-tl":ee()}],"rounded-tr":[{"rounded-tr":ee()}],"rounded-br":[{"rounded-br":ee()}],"rounded-bl":[{"rounded-bl":ee()}],"border-w":[{border:Ve()}],"border-w-x":[{"border-x":Ve()}],"border-w-y":[{"border-y":Ve()}],"border-w-s":[{"border-s":Ve()}],"border-w-e":[{"border-e":Ve()}],"border-w-t":[{"border-t":Ve()}],"border-w-r":[{"border-r":Ve()}],"border-w-b":[{"border-b":Ve()}],"border-w-l":[{"border-l":Ve()}],"divide-x":[{"divide-x":Ve()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ve()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...nt(),"hidden","none"]}],"divide-style":[{divide:[...nt(),"hidden","none"]}],"border-color":[{border:z()}],"border-color-x":[{"border-x":z()}],"border-color-y":[{"border-y":z()}],"border-color-s":[{"border-s":z()}],"border-color-e":[{"border-e":z()}],"border-color-t":[{"border-t":z()}],"border-color-r":[{"border-r":z()}],"border-color-b":[{"border-b":z()}],"border-color-l":[{"border-l":z()}],"divide-color":[{divide:z()}],"outline-style":[{outline:[...nt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[X,U,F]}],"outline-w":[{outline:["",X,Tr,ln]}],"outline-color":[{outline:z()}],shadow:[{shadow:["","none",m,$s,zs]}],"shadow-color":[{shadow:z()}],"inset-shadow":[{"inset-shadow":["none",y,$s,zs]}],"inset-shadow-color":[{"inset-shadow":z()}],"ring-w":[{ring:Ve()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:z()}],"ring-offset-w":[{"ring-offset":[X,ln]}],"ring-offset-color":[{"ring-offset":z()}],"inset-ring-w":[{"inset-ring":Ve()}],"inset-ring-color":[{"inset-ring":z()}],"text-shadow":[{"text-shadow":["none",w,$s,zs]}],"text-shadow-color":[{"text-shadow":z()}],opacity:[{opacity:[X,U,F]}],"mix-blend":[{"mix-blend":[...gs(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":gs()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[X]}],"mask-image-linear-from-pos":[{"mask-linear-from":le()}],"mask-image-linear-to-pos":[{"mask-linear-to":le()}],"mask-image-linear-from-color":[{"mask-linear-from":z()}],"mask-image-linear-to-color":[{"mask-linear-to":z()}],"mask-image-t-from-pos":[{"mask-t-from":le()}],"mask-image-t-to-pos":[{"mask-t-to":le()}],"mask-image-t-from-color":[{"mask-t-from":z()}],"mask-image-t-to-color":[{"mask-t-to":z()}],"mask-image-r-from-pos":[{"mask-r-from":le()}],"mask-image-r-to-pos":[{"mask-r-to":le()}],"mask-image-r-from-color":[{"mask-r-from":z()}],"mask-image-r-to-color":[{"mask-r-to":z()}],"mask-image-b-from-pos":[{"mask-b-from":le()}],"mask-image-b-to-pos":[{"mask-b-to":le()}],"mask-image-b-from-color":[{"mask-b-from":z()}],"mask-image-b-to-color":[{"mask-b-to":z()}],"mask-image-l-from-pos":[{"mask-l-from":le()}],"mask-image-l-to-pos":[{"mask-l-to":le()}],"mask-image-l-from-color":[{"mask-l-from":z()}],"mask-image-l-to-color":[{"mask-l-to":z()}],"mask-image-x-from-pos":[{"mask-x-from":le()}],"mask-image-x-to-pos":[{"mask-x-to":le()}],"mask-image-x-from-color":[{"mask-x-from":z()}],"mask-image-x-to-color":[{"mask-x-to":z()}],"mask-image-y-from-pos":[{"mask-y-from":le()}],"mask-image-y-to-pos":[{"mask-y-to":le()}],"mask-image-y-from-color":[{"mask-y-from":z()}],"mask-image-y-to-color":[{"mask-y-to":z()}],"mask-image-radial":[{"mask-radial":[U,F]}],"mask-image-radial-from-pos":[{"mask-radial-from":le()}],"mask-image-radial-to-pos":[{"mask-radial-to":le()}],"mask-image-radial-from-color":[{"mask-radial-from":z()}],"mask-image-radial-to-color":[{"mask-radial-to":z()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":K()}],"mask-image-conic-pos":[{"mask-conic":[X]}],"mask-image-conic-from-pos":[{"mask-conic-from":le()}],"mask-image-conic-to-pos":[{"mask-conic-to":le()}],"mask-image-conic-from-color":[{"mask-conic-from":z()}],"mask-image-conic-to-color":[{"mask-conic-to":z()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:In()}],"mask-repeat":[{mask:ur()}],"mask-size":[{mask:ps()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",U,F]}],filter:[{filter:["","none",U,F]}],blur:[{blur:ys()}],brightness:[{brightness:[X,U,F]}],contrast:[{contrast:[X,U,F]}],"drop-shadow":[{"drop-shadow":["","none",S,$s,zs]}],"drop-shadow-color":[{"drop-shadow":z()}],grayscale:[{grayscale:["",X,U,F]}],"hue-rotate":[{"hue-rotate":[X,U,F]}],invert:[{invert:["",X,U,F]}],saturate:[{saturate:[X,U,F]}],sepia:[{sepia:["",X,U,F]}],"backdrop-filter":[{"backdrop-filter":["","none",U,F]}],"backdrop-blur":[{"backdrop-blur":ys()}],"backdrop-brightness":[{"backdrop-brightness":[X,U,F]}],"backdrop-contrast":[{"backdrop-contrast":[X,U,F]}],"backdrop-grayscale":[{"backdrop-grayscale":["",X,U,F]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[X,U,F]}],"backdrop-invert":[{"backdrop-invert":["",X,U,F]}],"backdrop-opacity":[{"backdrop-opacity":[X,U,F]}],"backdrop-saturate":[{"backdrop-saturate":[X,U,F]}],"backdrop-sepia":[{"backdrop-sepia":["",X,U,F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":g()}],"border-spacing-x":[{"border-spacing-x":g()}],"border-spacing-y":[{"border-spacing-y":g()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",U,F]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[X,"initial",U,F]}],ease:[{ease:["linear","initial",j,U,F]}],delay:[{delay:[X,U,F]}],animate:[{animate:["none",V,U,F]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[N,U,F]}],"perspective-origin":[{"perspective-origin":ie()}],rotate:[{rotate:An()}],"rotate-x":[{"rotate-x":An()}],"rotate-y":[{"rotate-y":An()}],"rotate-z":[{"rotate-z":An()}],scale:[{scale:mt()}],"scale-x":[{"scale-x":mt()}],"scale-y":[{"scale-y":mt()}],"scale-z":[{"scale-z":mt()}],"scale-3d":["scale-3d"],skew:[{skew:Ct()}],"skew-x":[{"skew-x":Ct()}],"skew-y":[{"skew-y":Ct()}],transform:[{transform:[U,F,"","none","gpu","cpu"]}],"transform-origin":[{origin:ie()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Rt()}],"translate-x":[{"translate-x":Rt()}],"translate-y":[{"translate-y":Rt()}],"translate-z":[{"translate-z":Rt()}],"translate-none":["translate-none"],accent:[{accent:z()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:z()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",U,F]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":g()}],"scroll-mx":[{"scroll-mx":g()}],"scroll-my":[{"scroll-my":g()}],"scroll-ms":[{"scroll-ms":g()}],"scroll-me":[{"scroll-me":g()}],"scroll-mt":[{"scroll-mt":g()}],"scroll-mr":[{"scroll-mr":g()}],"scroll-mb":[{"scroll-mb":g()}],"scroll-ml":[{"scroll-ml":g()}],"scroll-p":[{"scroll-p":g()}],"scroll-px":[{"scroll-px":g()}],"scroll-py":[{"scroll-py":g()}],"scroll-ps":[{"scroll-ps":g()}],"scroll-pe":[{"scroll-pe":g()}],"scroll-pt":[{"scroll-pt":g()}],"scroll-pr":[{"scroll-pr":g()}],"scroll-pb":[{"scroll-pb":g()}],"scroll-pl":[{"scroll-pl":g()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",U,F]}],fill:[{fill:["none",...z()]}],"stroke-w":[{stroke:[X,Tr,ln,No]}],stroke:[{stroke:["none",...z()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},$E=EE(zE);function pl(...n){return $E(cE(n))}const fh=({background:n="transparent",minSize:e=.4,maxSize:t=1,particleDensity:r=100,className:s,particleColor:i="#FFFFFF"})=>{const[a,l]=C.useState([]),u=C.useRef(null);return C.useEffect(()=>{if(!u.current)return;const d=u.current,{width:m,height:y}=d.getBoundingClientRect(),w=Array.from({length:r},(S,R)=>({id:R,x:Math.random()*m,y:Math.random()*y,size:Math.random()*(t-e)+e,duration:Math.random()*3+2,delay:Math.random()*2}));l(w)},[r,t,e]),c.jsx("div",{ref:u,className:s,style:{background:n,position:"relative",overflow:"hidden"},children:a.map(d=>c.jsx(me.div,{className:"absolute rounded-full",style:{left:d.x,top:d.y,width:d.size,height:d.size,backgroundColor:i},animate:{opacity:[0,1,0],scale:[0,1,0],y:[0,-20,0]},transition:{duration:d.duration,delay:d.delay,repeat:1/0,ease:"easeInOut"}},d.id))})},WE=({children:n,className:e})=>{const[t,r]=C.useState(!1),s=C.useRef(null),[i,a]=C.useState(0),[l,u]=C.useState([]);return C.useEffect(()=>{if(s.current){a(s.current?.clientWidth??0);const d=s.current?.clientHeight??0,m=Math.floor(d/10),y=Array.from({length:m},(w,S)=>(S+1)*(d/(m+1)));u(y)}},[]),c.jsxs("div",{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),ref:s,className:"relative hover:bg-neutral-900 group/cover inline-block dark:bg-neutral-900 bg-neutral-100 px-2 py-2 transition duration-200 rounded-sm",style:{transformOrigin:"center",willChange:"transform"},children:[c.jsx(np,{children:t&&c.jsx(me.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{opacity:{duration:.4,ease:"easeInOut"}},className:"h-full w-full overflow-hidden absolute inset-0",children:c.jsxs(me.div,{animate:{translateX:["-50%","0%"]},transition:{translateX:{duration:12,ease:"linear",repeat:1/0}},className:"w-[200%] h-full flex",children:[c.jsx(fh,{background:"transparent",minSize:.4,maxSize:1,particleDensity:500,className:"w-full h-full",particleColor:"#FFFFFF"}),c.jsx(fh,{background:"transparent",minSize:.4,maxSize:1,particleDensity:500,className:"w-full h-full",particleColor:"#FFFFFF"})]})})}),l.map((d,m)=>c.jsx(qE,{hovered:t,duration:2+m%3,delay:1+m%2,width:i,style:{top:`${d}px`}},m)),c.jsx(me.span,{initial:{scale:1,transformOrigin:"center center",display:"inline-block"},whileHover:{scale:.85,transition:{duration:1.5,ease:"easeOut"}},className:pl("dark:text-white inline-block text-neutral-900 relative z-20 group-hover/cover:text-white transition duration-200 cursor-pointer",e),children:n}),c.jsx(Ws,{className:"absolute -right-[2px] -top-[2px]"}),c.jsx(Ws,{className:"absolute -bottom-[2px] -right-[2px]"}),c.jsx(Ws,{className:"absolute -left-[2px] -top-[2px]"}),c.jsx(Ws,{className:"absolute -bottom-[2px] -left-[2px]"})]})},qE=({className:n,delay:e,duration:t,hovered:r,width:s=600,...i})=>{const a=C.useId();return c.jsxs(me.svg,{width:s??"600",height:"1",viewBox:`0 0 ${s??"600"} 1`,fill:"none",xmlns:"http://www.w3.org/2000/svg",className:pl("absolute inset-x-0 w-full",n),...i,children:[c.jsx(me.path,{d:`M0 0.5H${s??"600"}`,stroke:`url(#svgGradient-${a})`}),c.jsx("defs",{children:c.jsxs(me.linearGradient,{id:`svgGradient-${a}`,gradientUnits:"userSpaceOnUse",initial:{x1:"0%",x2:r?"-10%":"-5%",y1:0,y2:0},animate:{x1:"110%",x2:r?"100%":"105%",y1:0,y2:0},transition:{duration:r?.8:t??2.5,ease:r?[.25,.46,.45,.94]:"linear",repeat:1/0,delay:r?.5:0,repeatDelay:r?1.5:e??1},children:[c.jsx("stop",{stopColor:"#2EB9DF",stopOpacity:"0"}),c.jsx("stop",{stopColor:"#3b82f6"}),c.jsx("stop",{offset:"1",stopColor:"#3b82f6",stopOpacity:"0"})]},String(r))})]})},Ws=({className:n})=>c.jsx("div",{className:pl("pointer-events-none animate-pulse group-hover/cover:hidden group-hover/cover:opacity-100 group h-2 w-2 rounded-full bg-neutral-600 dark:bg-white opacity-20 group-hover/cover:bg-white",n)}),Do=[{icon:c.jsx(wh,{className:"w-5 h-5"}),title:"100K+ Design & Dev Hours Logged",desc:"Building powerful and intuitive digital interfaces across devices."},{icon:c.jsx(bh,{className:"w-5 h-5"}),title:"1000+ Hours Invested in Dev & Design",desc:"Our growing team is actively building innovative and custom digital solutions."},{icon:c.jsx(xh,{className:"w-5 h-5"}),title:"100% Client Satisfaction",desc:"Every client we've worked with has seen real value — and we're just getting started."}];function HE(){const e=[.13,.5,.87],t=C.useRef(null),r=C.useRef(null),[s,i]=C.useState(!1);return C.useEffect(()=>{const a=new IntersectionObserver(([l])=>{i(l.isIntersecting)},{rootMargin:"-100px",threshold:.1});return r.current&&a.observe(r.current),()=>{r.current&&a.unobserve(r.current)}},[]),c.jsxs("section",{ref:r,id:"about",className:"w-full py-16 flex flex-col items-center justify-center",children:[c.jsx("div",{className:"mb-4",children:c.jsx("span",{className:"px-4 py-1.5 rounded-full bg-black/80 text-white text-sm font-medium shadow border border-white/10",children:"About Us"})}),c.jsx("h2",{className:"text-3xl md:text-5xl font-extrabold text-white text-center mb-2 drop-shadow-lg leading-tight",children:"We don't wait. We fix."}),c.jsxs("div",{className:"text-lg md:text-2xl font-semibold text-white text-center mb-4",children:["at ",c.jsx(WE,{className:"inline-block align-middle",children:"lightning speed."})]}),c.jsxs("div",{className:"text-gray-300 text-center max-w-2xl mx-auto mb-10 text-base md:text-lg",children:["We empower businesses to thrive in the digital age through modern IT solutions —",c.jsx("br",{}),"from custom websites and mobile apps to engaging UI/UX design and optimized product listings."]}),c.jsxs("div",{className:"w-full max-w-5xl mx-auto flex flex-col items-center mt-12 mb-20",children:[c.jsxs("div",{className:"w-full flex md:hidden relative",style:{minHeight:300},children:[c.jsx(me.div,{className:"absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-white/60 to-white/10 z-0",initial:{height:0},animate:s?{height:"100%"}:{height:0},transition:{duration:2.5,ease:[.4,0,.2,1]}}),c.jsx("div",{className:"flex flex-col w-full pl-16",children:Do.map((a,l)=>c.jsxs("div",{className:"relative flex items-center mb-16 min-h-[120px]",children:[c.jsx(me.div,{className:"absolute -left-10 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-black flex items-center justify-center shadow-lg z-10",initial:{opacity:0,scale:.5},animate:s?{opacity:1,scale:1}:{opacity:0,scale:.5},transition:{delay:2.5*e[l],duration:.4,type:"spring",stiffness:300,damping:20}}),c.jsx(me.div,{className:"absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-white/30 z-0",initial:{width:0},animate:s?{width:"2rem"}:{width:0},transition:{delay:2.5*e[l],duration:.4,ease:[.4,0,.2,1]},style:{marginLeft:"calc(1.5rem + 2px)"}}),c.jsx(me.div,{className:"w-full",initial:{opacity:0,y:32},animate:s?{opacity:1,y:0}:{opacity:0,y:32},transition:{delay:2.5*e[l]+.05,duration:.6,ease:[.4,0,.2,1]},children:c.jsx(Ei,{glareEnable:!0,glareMaxOpacity:.15,scale:1.04,tiltMaxAngleX:12,tiltMaxAngleY:12,transitionSpeed:250,className:"w-full h-full",children:c.jsxs("div",{className:"bg-gradient-to-br from-black/80 to-gray-900/80 rounded-xl border border-white/10 shadow-lg p-6 w-full min-w-[220px] max-w-xs flex flex-col items-start",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-2 text-white font-semibold text-base",children:[a.icon,c.jsx("span",{className:"text-xs font-medium",children:a.title})]}),c.jsx("div",{className:"text-gray-300 text-sm font-normal",children:a.desc})]})})})]},l))})]}),c.jsxs("div",{className:"hidden md:block w-full",children:[c.jsxs("div",{className:"relative w-full flex flex-row items-center justify-center",style:{minHeight:80},children:[c.jsx(me.div,{ref:t,className:"absolute top-1/2 left-0 right-0 h-0.5 w-full bg-gradient-to-r from-white/60 to-white/10",initial:{width:0},animate:s?{width:"100%"}:{width:0},transition:{duration:2.5,ease:[.4,0,.2,1]},style:{right:0}}),c.jsx("div",{className:"flex flex-row w-full justify-between items-center relative z-10",children:Do.map((a,l)=>c.jsxs(me.div,{className:"flex flex-col items-center w-1/3 relative",initial:{opacity:0,scale:.5},animate:s?{opacity:1,scale:1}:{opacity:0,scale:.5},transition:{delay:2.5*e[l],duration:.4,type:"spring",stiffness:300,damping:20},style:{minHeight:60},children:[c.jsx("div",{className:"w-6 h-6 rounded-full bg-white border-4 border-black flex items-center justify-center shadow-lg z-10"}),c.jsx("div",{className:"absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-white/30 z-0"})]},l))})]}),c.jsx("div",{className:"flex flex-row w-full justify-between items-start gap-6 mt-0",children:Do.map((a,l)=>c.jsx(me.div,{className:"w-[320px] flex flex-col items-center",initial:{opacity:0,y:32},animate:s?{opacity:1,y:0}:{opacity:0,y:32},transition:{delay:2.5*e[l]+.05,duration:.6,ease:[.4,0,.2,1]},children:c.jsx(Ei,{glareEnable:!0,glareMaxOpacity:.15,scale:1.04,tiltMaxAngleX:12,tiltMaxAngleY:12,transitionSpeed:250,className:"w-full h-full",children:c.jsxs("div",{className:"bg-gradient-to-br from-black/80 to-gray-900/80 rounded-xl border border-white/10 shadow-lg p-6 w-full h-[180px] flex flex-col items-start",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-2 text-white font-semibold text-base",children:[a.icon,c.jsx("span",{className:"text-xs md:text-sm font-medium",children:a.title})]}),c.jsx("div",{className:"text-gray-300 text-sm md:text-base font-normal",children:a.desc})]})})},l))})]})]}),c.jsxs("div",{className:"w-full flex flex-col items-center justify-center mt-24 px-2 sm:px-0",children:[c.jsx("div",{className:"mb-4",children:c.jsx("span",{className:"px-4 py-1.5 rounded-full bg-black/80 text-white text-sm font-medium shadow border border-white/10",children:"Our Values"})}),c.jsx("h2",{className:"text-3xl md:text-5xl font-extrabold text-white text-center mb-4 drop-shadow-lg leading-tight",children:"The Values Behind Xtract"}),c.jsxs("div",{className:"text-gray-300 text-center max-w-2xl mx-auto mb-10 text-base md:text-lg",children:["We bring passion and precision to every solution. From idea to execution,",c.jsx("br",{}),"we partner with clients to build digital products that last."]}),c.jsxs("div",{className:"w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-8",children:[c.jsxs("div",{className:"rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 sm:p-6 border border-white/10 flex flex-col items-start transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl cursor-pointer",children:[c.jsxs("div",{className:"mb-3 text-white font-bold text-lg sm:text-xl flex items-center gap-2",children:[c.jsx("span",{className:"text-xl sm:text-2xl",children:"💡"}),"Driving Digital Innovation"]}),c.jsx("div",{className:"text-gray-300 text-sm sm:text-base mb-2",children:"We use the latest tech stacks and design tools to deliver modern, scalable, and high-performing solutions."})]}),c.jsxs("div",{className:"rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 sm:p-6 border border-white/10 flex flex-col items-start transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl cursor-pointer",children:[c.jsxs("div",{className:"mb-3 text-white font-bold text-lg sm:text-xl flex items-center gap-2",children:[c.jsx("span",{className:"text-xl sm:text-2xl",children:"🤝"}),"Integrity in Everything We Build"]}),c.jsx("div",{className:"text-gray-300 text-sm sm:text-base mb-2",children:"Honesty, transparency, and quality are the foundation of our client relationships."})]}),c.jsxs("div",{className:"rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 sm:p-6 border border-white/10 flex flex-col items-start transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl cursor-pointer",children:[c.jsxs("div",{className:"mb-3 text-white font-bold text-lg sm:text-xl flex items-center gap-2",children:[c.jsx("span",{className:"text-xl sm:text-2xl",children:"🚀"}),"Empowering Brands to Grow"]}),c.jsx("div",{className:"text-gray-300 text-sm sm:text-base mb-2",children:"We don't just build — we create long-term digital ecosystems that evolve with your business."})]}),c.jsxs("div",{className:"rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 sm:p-6 border border-white/10 flex flex-col items-start transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl cursor-pointer",children:[c.jsxs("div",{className:"mb-3 text-white font-bold text-lg sm:text-xl flex items-center gap-2",children:[c.jsx("span",{className:"text-xl sm:text-2xl",children:"🎯"}),"Clients First, Always"]}),c.jsx("div",{className:"text-gray-300 text-sm sm:text-base mb-2",children:"We listen, adapt, and deliver — prioritizing your goals at every stage of the process."})]})]})]})]})}function mh({children:n,className:e="",delay:t=0}){const r=C.useRef(null),s=rp();return C.useEffect(()=>{const i=r.current;if(!i)return;let a;return typeof window<"u"&&"IntersectionObserver"in window?(a=new IntersectionObserver(([l])=>{l.isIntersecting&&(s.start({opacity:1,y:0,transition:{duration:.7,delay:t}}),a.disconnect())},{threshold:.15}),a.observe(i)):s.start({opacity:1,y:0,transition:{duration:.7,delay:t}}),()=>a&&a.disconnect()},[s,t]),c.jsx(me.div,{ref:r,initial:{opacity:0,y:32},animate:s,className:e,children:n})}const ph=[{icon:c.jsx(xh,{size:28,className:"text-blue-400"}),title:"Enhanced Brand Visibility",desc:"Stand out in the digital crowd with tailor-made websites, apps, and listings that reflect your brand identity and capture attention."},{icon:c.jsx(mp,{size:28,className:"text-purple-400"}),title:"Better User Experience",desc:"We design intuitive and engaging interfaces that keep users hooked and coming back — from first click to final conversion."},{icon:c.jsx(bh,{size:28,className:"text-pink-400"}),title:"Round-the-Clock Reachability",desc:"Your online presence never sleeps. Our optimized solutions ensure your brand stays active, accessible, and high-performing 24/7."},{icon:c.jsx(pp,{size:28,className:"text-green-400"}),title:"Cost-Effective Solutions",desc:"We blend modern tools with efficient workflows to deliver high-quality digital solutions without breaking your budget."},{icon:c.jsx(gp,{size:28,className:"text-yellow-400"}),title:"Performance-Focused Strategy",desc:"From traffic to engagement to conversion, we build with data in mind to help you grow smarter and scale faster."},{icon:c.jsx(wh,{size:28,className:"text-indigo-400"}),title:"Scalable Digital Growth",desc:"Whether you're a startup or scaling enterprise, our solutions grow with your business — seamlessly and sustainably."}];function GE(){return c.jsxs("section",{className:"w-full py-16 px-2 sm:px-6 md:px-10 lg:px-20 flex flex-col items-center bg-transparent",children:[c.jsx("div",{className:"mb-4",children:c.jsx("span",{className:"px-4 py-1.5 rounded-full bg-black/80 text-white text-sm font-medium shadow border border-white/10",children:"Benefits"})}),c.jsxs("h2",{className:"text-3xl md:text-5xl font-extrabold text-white text-center mb-4 drop-shadow-lg leading-tight",children:["The Key Benefits of Building",c.jsx("br",{className:"hidden md:block"})," Your Digital Presence with Us"]}),c.jsx("p",{className:"text-gray-300 text-center max-w-2xl mx-auto mb-12 text-base md:text-lg",children:"Discover how our IT services empower your brand online — by boosting visibility, enhancing user engagement, and driving smart digital growth"}),c.jsxs("div",{className:"w-full max-w-6xl",children:[c.jsxs("div",{className:"flex flex-col gap-8 relative md:hidden",children:[c.jsx("div",{className:"absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/30 via-white/10 to-purple-500/30 z-0"}),ph.map((n,e)=>c.jsx(mh,{delay:e*.1,children:c.jsxs("div",{className:"relative pl-14",children:[c.jsx("span",{className:"absolute left-2 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-black z-10 shadow-lg animate-pulse"}),c.jsxs("div",{className:"rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6 flex flex-col gap-3 shadow-lg backdrop-blur-md",children:[c.jsx("div",{children:n.icon}),c.jsx("div",{className:"text-lg font-semibold text-white",children:n.title}),c.jsx("div",{className:"text-gray-300 text-sm",children:n.desc})]})]})},e))]}),c.jsx("div",{className:"hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6",children:ph.map((n,e)=>c.jsx(mh,{delay:e*.1,children:c.jsx(Ei,{glareEnable:!0,glareMaxOpacity:.15,scale:1.04,tiltMaxAngleX:12,tiltMaxAngleY:12,transitionSpeed:250,className:"w-full h-full",children:c.jsxs("div",{className:"rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6 flex flex-col gap-3 shadow-lg backdrop-blur-md",children:[c.jsx("div",{children:n.icon}),c.jsx("div",{className:"text-lg font-semibold text-white",children:n.title}),c.jsx("div",{className:"text-gray-300 text-sm",children:n.desc})]})})},e))})]})]})}let ti=!1,Ir=null,Me=null,Ar=null;const $i=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,Wi=()=>{const n=navigator.deviceMemory,e=navigator.hardwareConcurrency;return n&&n<4||e&&e<4},qi=()=>{const n=navigator.connection;return n?n.effectiveType==="slow-2g"||n.effectiveType==="2g"||n.effectiveType==="3g"||n.saveData===!0:!1},bm=(n="low")=>{if(ti)return Promise.resolve();if(Ir)return Ir;const e=$i(),t=Wi(),r=qi();return e&&t&&r?(console.log("Skipping Spline loading due to poor device/network conditions"),Promise.resolve()):(Ir=new Promise((s,i)=>{if(customElements.get("spline-viewer")){ti=!0,s();return}const a=()=>{if(Me){Me.addEventListener("load",()=>s()),Me.addEventListener("error",()=>i());return}Me=document.createElement("script"),Me.type="module",Me.src="https://unpkg.com/@splinetool/viewer@1.10.24/build/spline-viewer.js",Me.async=!0,Me.defer=!0,n==="high"&&!e?Me.setAttribute("fetchpriority","high"):Me.setAttribute("fetchpriority","low"),Me.onload=()=>{ti=!0,Me=null,s()},Me.onerror=()=>{Me=null,Ir=null,i(new Error("Failed to load Spline viewer script"))},document.head.appendChild(Me)},u=e&&r?1e4:e&&t?8e3:e?5e3:r?3e3:n==="high"?0:1e3;n==="high"&&!e?a():"requestIdleCallback"in window?requestIdleCallback(a,{timeout:u+5e3}):setTimeout(a,u)}),Ir)},xm=(n=.1,e="100px")=>{const t=$i(),r=Wi(),s=t?.3:n,i=t?"200px":e;return(a,l)=>{if(t&&r&&qi())return console.log("Skipping Spline animation on low-end mobile device"),()=>{};if(!("IntersectionObserver"in window))return setTimeout(l,t?5e3:2e3),()=>{};const u=new IntersectionObserver(d=>{d.forEach(m=>{m.isIntersecting&&(Ar&&clearTimeout(Ar),Ar=setTimeout(()=>{l(),u.unobserve(a)},t?500:150))})},{threshold:s,rootMargin:i,trackVisibility:!0,delay:t?200:100});return u.observe(a),()=>{u.unobserve(a),Ar&&clearTimeout(Ar)}}},KE=()=>{if(typeof window>"u")return;const n=$i(),e=Wi(),t=qi();if(n&&(e||t))return;if(window.innerWidth>768&&!n){const a=document.createElement("link");a.rel="modulepreload",a.href="https://unpkg.com/@splinetool/viewer@1.10.24/build/spline-viewer.js",a.crossOrigin="anonymous",document.head.appendChild(a);return}let r=!1;const s=()=>{r=!0};["mousedown","keydown","touchstart","pointerdown"].forEach(a=>{document.addEventListener(a,s,{once:!0,passive:!0})}),setTimeout(()=>{if(!r&&!ti){const a=document.createElement("link");a.rel="modulepreload",a.href="https://unpkg.com/@splinetool/viewer@1.10.24/build/spline-viewer.js",a.crossOrigin="anonymous",document.head.appendChild(a)}},n?8e3:3e3)},Em=()=>{const n=$i(),e=Wi(),t=qi();return!(n&&e&&t)};function XE(){const n=C.useRef(null),[e,t]=C.useState(!1),[r,s]=C.useState(!1),[i,a]=C.useState(!0);return C.useEffect(()=>{a(Em())},[]),C.useEffect(()=>!n.current||!i?void 0:xm(.05,"50px")(n.current,()=>{s(!0),t(!0)}),[i]),C.useEffect(()=>{e&&i&&bm("high").catch(console.error)},[e,i]),i?c.jsx("div",{ref:n,style:{width:"100vw",height:"100vh",position:"absolute",top:0,left:0,zIndex:1,backgroundColor:"transparent"},children:e&&Ti.createElement("spline-viewer",{"loading-anim":!0,url:"https://prod.spline.design/AhURSIIipGjuVZ8K/scene.splinecode",style:{width:"100%",height:"100%",display:"block",opacity:r?1:0,transition:"opacity 0.3s ease-in-out"}})}):c.jsx("div",{style:{width:"100vw",height:"100vh",position:"absolute",top:0,left:0,zIndex:1,background:"linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsx("div",{style:{width:"200px",height:"200px",background:"radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",borderRadius:"50%",opacity:.6}})})}const QE=()=>c.jsx("div",{className:"flex items-center justify-center p-8",children:c.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white"})});function gh({children:n,fallback:e=QE,rootMargin:t="100px",threshold:r=.1,className:s=""}){const[i,a]=C.useState(!1),l=C.useRef(null);return C.useEffect(()=>{const u=l.current;if(!u)return;const d=Jx(m=>{m.forEach(y=>{y.isIntersecting&&(a(!0),d?.unobserve(u))})},{rootMargin:t,threshold:r});if(d)return d.observe(u),()=>d.disconnect();a(!0)},[t,r]),c.jsx("div",{ref:l,className:s,children:i?c.jsx(C.Suspense,{fallback:c.jsx(e,{}),children:n}):c.jsx("div",{style:{minHeight:"200px"},className:"flex items-center justify-center",children:c.jsx("div",{className:"w-4 h-4 bg-gray-400 rounded-full animate-pulse"})})})}function YE(){return C.useEffect(()=>{KE()},[]),c.jsxs(c.Fragment,{children:[c.jsx(iE,{children:c.jsx(XE,{})}),c.jsx(gh,{rootMargin:"200px",className:"min-h-screen",children:c.jsx(HE,{})}),c.jsx(gh,{rootMargin:"200px",className:"min-h-screen",children:c.jsx(GE,{})})]})}function JE(){return c.jsx("div",{className:"min-h-screen bg-black text-white",children:c.jsxs("div",{className:"container mx-auto px-6 py-20",children:[c.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-8",children:"About Xpanix"}),c.jsx("p",{className:"text-xl text-gray-300 mb-8",children:"We are a team of passionate developers and designers committed to delivering innovative digital solutions that help businesses thrive in the digital age."}),c.jsxs("div",{className:"grid md:grid-cols-2 gap-12",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Our Mission"}),c.jsx("p",{className:"text-gray-300",children:"To empower businesses through cutting-edge technology solutions and exceptional digital experiences."})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Our Vision"}),c.jsx("p",{className:"text-gray-300",children:"To be the leading technology partner that transforms ideas into successful digital products."})]})]})]})})}const Vo=[{key:"web",label:"Web Dev",icon:"🌐",heading:"Web Development",content:c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"font-bold text-base md:text-lg mb-2",children:"Custom-Built Websites That Convert and Scale"}),c.jsx("div",{className:"text-sm md:text-base mb-4",children:"We specialize in building fast, responsive, and user-friendly websites tailored to your business goals. From landing pages to full-scale dynamic platforms, we ensure your site not only looks great but also performs flawlessly across devices. With modern tech stacks, SEO optimization, and scalable backend architectures, we create digital experiences that drive results — whether it's lead generation, eCommerce, or portfolio showcasing."}),c.jsx("div",{className:"text-sm md:text-base font-semibold mb-1",children:"Services include:"}),c.jsxs("ul",{className:"list-disc pl-5 text-sm md:text-base space-y-1",children:[c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"Business & Portfolio Websites"})}),c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"E-Commerce & CMS Development"})}),c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"SEO-Optimized & Mobile-First Design"})}),c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"Custom Web Applications"})}),c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"Ongoing Maintenance & Support"})})]})]})},{key:"app",label:"App Dev",icon:"📱",heading:"App Development",content:c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"font-bold text-base md:text-lg mb-2",children:"Modern Mobile Apps for Every Platform"}),c.jsx("div",{className:"text-sm md:text-base mb-4",children:"We build high-performance mobile applications for iOS and Android, focusing on seamless user experience, robust functionality, and scalable architecture. Whether you need a business app, eCommerce solution, or custom tool, we deliver apps that engage and retain users."}),c.jsx("div",{className:"text-sm md:text-base font-semibold mb-1",children:"Services include:"}),c.jsxs("ul",{className:"list-disc pl-5 text-sm md:text-base space-y-1",children:[c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"iOS & Android App Development"})}),c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"Cross-Platform Solutions"})}),c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"UI/UX Design & Prototyping"})}),c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"App Store Optimization"})}),c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"Ongoing Support & Updates"})})]})]})},{key:"marketing",label:"Digital Marketing",icon:"📈",heading:"Digital Marketing",content:c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"font-bold text-base md:text-lg mb-2",children:"Grow Your Reach & Revenue"}),c.jsx("div",{className:"text-sm md:text-base mb-4",children:"Our digital marketing services help you connect with your audience and drive measurable results. From social media campaigns to targeted ads and SEO, we help you build brand awareness and generate leads."}),c.jsx("div",{className:"text-sm md:text-base font-semibold mb-1",children:"Services include:"}),c.jsxs("ul",{className:"list-disc pl-5 text-sm md:text-base space-y-1",children:[c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"Social Media Marketing"})}),c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"Facebook & Instagram Ads"})}),c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"SEO & Content Marketing"})}),c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"Analytics & Reporting"})})]})]})},{key:"listing",label:"Product Listing",icon:"🛒",heading:"Product Listing",content:c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"font-bold text-base md:text-lg mb-2",children:"Showcase & Sell Your Products Online"}),c.jsx("div",{className:"text-sm md:text-base mb-4",children:"We help you list, manage, and optimize your products on eCommerce platforms for maximum visibility and sales. Our team ensures your listings are attractive, informative, and conversion-focused."}),c.jsx("div",{className:"text-sm md:text-base font-semibold mb-1",children:"Services include:"}),c.jsxs("ul",{className:"list-disc pl-5 text-sm md:text-base space-y-1",children:[c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"Shopify & WooCommerce Setup"})}),c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"Product Photography & Descriptions"})}),c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"SEO for Product Listings"})}),c.jsx("li",{children:c.jsx("span",{className:"font-bold",children:"Inventory Management"})})]})]})}];function ZE(){const[n,e]=C.useState("web"),t=Vo.find(r=>r.key===n)||Vo[0];return c.jsx("section",{className:"w-full flex flex-col items-center justify-center py-10 px-2 md:px-0",children:c.jsxs("div",{className:"w-full max-w-xl md:max-w-2xl lg:max-w-3xl bg-[#151515] rounded-2xl shadow-2xl mx-auto p-0 border border-white/10",children:[c.jsx("div",{className:"flex flex-row gap-2 md:gap-4 p-3 md:p-4 pb-0",children:Vo.map(r=>c.jsx("button",{className:`px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-200 focus:outline-none ${n===r.key?"bg-white text-black shadow-md":"bg-neutral-800 text-white hover:bg-neutral-700"}`,onClick:()=>e(r.key),children:r.label},r.key))}),c.jsxs("div",{className:"p-5 md:p-8 text-white",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-3 justify-center",children:[c.jsx("span",{className:"text-2xl md:text-3xl",children:t.icon}),c.jsx("span",{className:"text-xl md:text-2xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:t.heading})]}),t.content]})]})})}function yh(){const n=C.useRef(null),[e,t]=C.useState(!1),[r,s]=C.useState(!1),[i,a]=C.useState(!0),[l,u]=C.useState(!1);C.useEffect(()=>{u(!0),a(Em())},[]),C.useEffect(()=>!n.current||!i||!l?void 0:xm(.1,"150px")(n.current,()=>{s(!0),t(!0)}),[i,l]),C.useEffect(()=>{e&&i&&l&&bm("low").catch(console.error)},[e,i,l]);const d=()=>c.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",borderRadius:"8px"},children:c.jsx("div",{style:{width:"120px",height:"120px",background:"linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",borderRadius:"50%",opacity:.8}})});return l?i?c.jsx("div",{ref:n,style:{width:"100%",height:"100%",display:"block"},children:e&&Ti.createElement("spline-viewer",{url:"https://prod.spline.design/bunikdfDgR9Y2Y-Q/scene.splinecode",style:{width:"100%",height:"100%",display:"block",opacity:r?1:0,transition:"opacity 0.4s ease-in-out"}})}):c.jsx(d,{}):c.jsx(d,{})}function He({title:n,description:e}){return c.jsxs("div",{className:"bg-black/30 backdrop-blur-sm border border-gray-800 p-5 rounded-lg w-full md:w-[220px] hover:bg-white hover:text-black transition-all duration-300 group",children:[c.jsx("h3",{className:"text-lg font-bold mb-2",children:n}),c.jsx("p",{className:"text-sm opacity-80 group-hover:opacity-100",children:e})]})}function eT(){return c.jsxs("main",{className:"relative min-h-screen w-full bg-black text-white overflow-hidden",children:[c.jsxs("div",{className:"text-center pt-20 md:pt-28 pb-4 md:pb-8 relative z-10 px-4",children:[c.jsx("h1",{className:"text-3xl md:text-4xl font-bold mb-2",children:"Scale Your Business at the"}),c.jsx("h1",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Speed of Tech"}),c.jsx("p",{className:"max-w-2xl mx-auto text-center text-sm md:text-base",children:"From websites and mobile apps to digital marketing and Shopify solutions — we deliver IT services that launch your business forward at lightning speed."})]}),c.jsxs("div",{className:"relative w-full",children:[c.jsxs("div",{className:"md:hidden flex flex-col items-center gap-4 px-4 pb-10 z-10 relative",children:[c.jsx("div",{className:"h-[300px] w-full relative mb-4",children:c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsx(yh,{})})}),c.jsx(He,{title:"APP DEVELOPMENT",description:"We develop modern apps with tech that can help your business grow"}),c.jsx(He,{title:"WEB DEVELOPMENT",description:"Responsive, high-performance websites tailored to your brand"}),c.jsx(He,{title:"DIGITAL MARKETING",description:"Targeted Facebook & Instagram ads to grow your reach and revenue"}),c.jsx(He,{title:"SHOPIFY ECOMMERCE",description:"We build modern apps that can help your business grow"}),c.jsx(He,{title:"PRODUCT LISTING",description:"We develop modern apps, tech that can help your business grow"}),c.jsx(He,{title:"SEO",description:"Result-driven SEO strategies to boost your ranking and organic traffic"})]}),c.jsxs("div",{className:"hidden md:block relative h-[600px]",children:[c.jsx("div",{className:"absolute inset-0 z-0 flex items-center justify-center",children:c.jsx(yh,{})}),c.jsx("div",{className:"absolute top-0 left-[15%] z-10 lg:left-[20%]",children:c.jsx(He,{title:"APP DEVELOPMENT",description:"We develop modern apps with tech that can help your business grow"})}),c.jsx("div",{className:"absolute top-0 right-[15%] z-10 lg:right-[20%]",children:c.jsx(He,{title:"WEB DEVELOPMENT",description:"Responsive, high-performance websites tailored to your brand"})}),c.jsx("div",{className:"absolute top-[40%] left-[5%] z-10 lg:left-[10%]",children:c.jsx(He,{title:"DIGITAL MARKETING",description:"Targeted Facebook & Instagram ads to grow your reach and revenue"})}),c.jsx("div",{className:"absolute top-[40%] right-[5%] z-10 lg:right-[10%]",children:c.jsx(He,{title:"SHOPIFY ECOMMERCE",description:"We build modern apps that can help your business grow"})}),c.jsx("div",{className:"absolute bottom-[5%] left-[15%] z-10 lg:left-[20%]",children:c.jsx(He,{title:"PRODUCT LISTING",description:"We develop modern apps, tech that can help your business grow"})}),c.jsx("div",{className:"absolute bottom-[5%] right-[15%] z-10 lg:right-[20%]",children:c.jsx(He,{title:"SEO",description:"Result-driven SEO strategies to boost your ranking and organic traffic"})})]})]}),c.jsx(ZE,{})]})}const Tm=()=>{const n=document.getElementById("all-projects");n&&n.scrollIntoView({behavior:"smooth"})},tT=({products:n})=>{const e=n.slice(0,5),t=n.slice(5,10),r=n.slice(10,15),s=Ti.useRef(null),{scrollYProgress:i}=sp({target:s,offset:["start start","end start"]}),a={stiffness:300,damping:30,bounce:100},l=kn(Nn(i,[0,1],[0,1e3]),a),u=kn(Nn(i,[0,1],[0,-1e3]),a),d=kn(Nn(i,[0,.2],[15,0]),a),m=kn(Nn(i,[0,.2],[.2,1]),a),y=kn(Nn(i,[0,.2],[20,0]),a),w=kn(Nn(i,[0,.2],[-700,500]),a),S=C.useMemo(()=>e,[e]),R=C.useMemo(()=>t,[t]),N=C.useMemo(()=>r,[r]);return c.jsxs("div",{ref:s,className:"h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]",children:[c.jsx(nT,{}),c.jsxs(me.div,{style:{rotateX:d,rotateZ:y,translateY:w,opacity:m},className:"",children:[c.jsx(me.div,{className:"flex flex-row-reverse space-x-reverse space-x-20 mb-20",children:S.map(A=>c.jsx(jo,{product:A,translate:l},A.title))}),c.jsx(me.div,{className:"flex flex-row  mb-20 space-x-20 ",children:R.map(A=>c.jsx(jo,{product:A,translate:u},A.title))}),c.jsx(me.div,{className:"flex flex-row-reverse space-x-reverse space-x-20",children:N.map(A=>c.jsx(jo,{product:A,translate:l},A.title))})]})]})},nT=()=>c.jsxs("div",{className:"flex flex-col items-center justify-center text-center w-full max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-20",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-6 py-2 bg-[#181f2a] border border-[#25304a] rounded-full text-white text-lg font-semibold mb-8 shadow-lg",children:[c.jsx("span",{className:"text-amber-400 text-xl",children:"★"}),"Partnership Excellence Since 2020"]}),c.jsx("h1",{className:"text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white",children:"Our Portfolio"}),c.jsxs("p",{className:"text-2xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-normal",children:["Four years of collaborative excellence, delivering innovative digital solutions as ",c.jsx("span",{className:"font-bold text-white",children:"trusted partners"})]}),c.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 mb-12",children:[c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-4xl md:text-5xl font-extrabold text-[#a6b3c9] mb-1",children:"100+"}),c.jsx("div",{className:"text-lg text-gray-300",children:"Projects"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-4xl md:text-5xl font-extrabold text-[#a6b3c9] mb-1",children:"99%"}),c.jsx("div",{className:"text-lg text-gray-300",children:"Partnership Success"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-4xl md:text-5xl font-extrabold text-[#a6b3c9] mb-1",children:"50+"}),c.jsx("div",{className:"text-lg text-gray-300",children:"Trusted Clients"})]}),c.jsxs("div",{className:"text-center",children:[c.jsx("div",{className:"text-4xl md:text-5xl font-extrabold text-[#a6b3c9] mb-1",children:"4+"}),c.jsx("div",{className:"text-lg text-gray-300",children:"Years Partnership"})]})]}),c.jsxs("button",{onClick:Tm,className:"inline-flex items-center gap-2 px-8 py-4 bg-[#3b4861] hover:bg-[#4a5a7a] text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 group shadow-lg",children:["Explore Our Work",c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 group-hover:translate-x-1 transition-transform",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})]}),jo=({product:n,translate:e})=>c.jsxs(me.div,{style:{x:e},whileHover:{y:-20},className:"group/product h-96 w-[30rem] relative flex-shrink-0",children:[c.jsx("div",{onClick:Tm,className:"block group-hover/product:shadow-2xl cursor-pointer",children:c.jsx("img",{src:n.thumbnail,height:"600",width:"600",className:"object-cover object-left-top absolute h-full w-full inset-0",alt:n.title})}),c.jsx("div",{className:"absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"}),c.jsx("h2",{className:"absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white",children:n.title})]},n.title),rT=["All","Web Development","UI/UX Design"],vh=[{id:1,title:"Corporate Website",description:"A professional website for a corporate business featuring service showcases, team profiles, and client testimonials.",image:"/1.png",category:"Web Development",technologies:["HTML","CSS","JavaScript","Bootstrap"],liveUrl:"https://xpanix.github.io/TechAhead/",featured:!0},{id:2,title:"Portfolio Website",description:"A creative portfolio website showcasing projects, skills, and professional achievements with modern design elements.",image:"/3.png",category:"Web Development",technologies:["HTML","CSS","JavaScript","GSAP"],liveUrl:"https://xpanix.github.io/Portfolio/",featured:!0},{id:3,title:"Fast Food Website",description:"A vibrant fast food restaurant website with menu displays, online ordering capabilities, and location information.",image:"/4.png",category:"Web Development",technologies:["HTML","CSS","JavaScript","Bootstrap"],liveUrl:"https://xpanix.github.io/Foodie-Hub/",featured:!0},{id:4,title:"Web Design Prototype",description:"An innovative web design prototype created in Figma, demonstrating modern UI principles and user experience design.",image:"/5.png",category:"UI/UX Design",technologies:["Figma"],liveUrl:"https://www.figma.com/proto/Y4u3Y6VhELgxUBfVE6gNzJ/TechGadget---Technology-Website--Community-?page-id=0%3A1&node-id=1-2&p=f&viewport=489%2C487%2C0.13&t=2pHDNP3x2IG1b12r-1&scaling=min-zoom&content-scaling=fixed",featured:!0},{id:5,title:"Travel Agency Website",description:"An engaging travel website offering tour packages, destination galleries, and inquiry forms to attract potential travelers.",image:"/2.png",category:"Web Development",technologies:["html","css","javascript","bootstrap"],liveUrl:"https://www.ruhanitrips.com/",featured:!0},{id:6,title:"Art Gallery Website",description:"A visually rich online art gallery showcasing artwork collections, artist bios, and exhibition details.",image:"/6.png",category:"Web Development",technologies:["html","css","javascript","bootstrap"],liveUrl:"https://neha-kandari.github.io/photoframe/#home",featured:!0},{id:7,title:"Gym Website",description:"A Figma-based design for a fitness-focused website featuring workout plans, trainer profiles, and membership options.",image:"/7.png",category:"UI/UX Design",technologies:["figma"],liveUrl:"https://www.figma.com/proto/b1wR3W4cUSryI4rBCJZpKR/Fitness---Gym-Website-Design--Fitmaker---Community-?page-id=0%3A1&node-id=2-47&viewport=358%2C196%2C0.09&t=mwZMGDfZmv7MZiUO-1&scaling=min-zoom&content-scaling=fixed"},{id:8,title:"E-commerce Website",description:"A full-featured e-commerce platform with product listings, modern UI components, and a responsive layout built using the latest stack.",image:"/9.png",category:"Web Development",technologies:["next.js","tailwindcss","typescript","shadcn/ui"],liveUrl:"https://pmakemobilelcd.com/"},{id:9,title:"Interior Design Website",description:"A creative Figma prototype for an interior design firm, highlighting project galleries, service sections, and design concepts.",image:"/8.png",category:"UI/UX Design",technologies:["figma"],liveUrl:"https://www.figma.com/proto/Idofiu2yi7cPfZXd53ySWR/Panto---Furniture-Landing-Page-Design--Community-?page-id=0%3A1&node-id=1-2&p=f&viewport=489%2C487%2C0.13&t=VHCoQAXjUXJufzTR-1&scaling=min-zoom&content-scaling=fixed"},{id:10,title:"Furniture E-commerce Website",description:"A clean and elegant e-commerce UI/UX concept for a furniture brand, featuring product views, categories, and smooth interactions.",image:"/10.png",category:"UI/UX Design",technologies:["figma"],liveUrl:"https://www.figma.com/proto/lpHV3fKVx2mYmgBysqr0fg/eCommerce-Website-%7C-Web-Page-Design?page-id=0%3A1&node-id=117-336&p=f&viewport=200%2C264%2C0.07&t=Ly4kCpErwUh0JVJl-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=117%3A1143"}],sT=()=>{const[n,e]=C.useState("All"),[t,r]=C.useState(!1),s=C.useMemo(()=>n==="All"?vh:vh.filter(l=>l.category===n),[n]),i=C.useMemo(()=>t?s:s.slice(0,4),[t,s]),a=l=>{e(l),r(!1)};return c.jsx("div",{id:"all-projects",className:"min-h-screen pt-20 bg-black text-white",children:c.jsx("section",{className:"py-8 px-4 bg-black",children:c.jsxs("div",{className:"max-w-7xl mx-auto",children:[c.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-center mb-6 text-white",children:"All Projects"}),c.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-6",children:rT.map(l=>c.jsx("button",{onClick:()=>a(l),className:`px-3 py-1.5 rounded-lg font-medium transition-all duration-300 text-xs md:text-sm ${n===l?"bg-slate-600 text-white shadow-md":"bg-neutral-900 text-white hover:bg-slate-800 border border-neutral-700"}`,children:l},l))}),c.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6",children:i.map(l=>c.jsxs("div",{className:"group bg-neutral-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-neutral-700 flex flex-col h-full text-white",children:[c.jsxs("div",{className:"relative h-32 md:h-40 lg:h-48 overflow-hidden bg-black",children:[c.jsx("img",{src:l.image,alt:l.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"}),c.jsx("div",{className:"absolute top-2 left-2",children:c.jsx("span",{className:"px-1.5 py-0.5 bg-slate-700 text-white text-[10px] md:text-xs rounded",children:l.category})})]}),c.jsxs("div",{className:"p-2 md:p-3 lg:p-4 flex flex-col flex-grow",children:[c.jsx("h3",{className:"text-sm md:text-base lg:text-lg font-bold mb-1 md:mb-2 line-clamp-2 text-white",children:l.title}),c.jsx("p",{className:"text-white text-xs md:text-sm mb-2 md:mb-3 line-clamp-2 md:line-clamp-3 flex-grow",children:l.description}),c.jsx("div",{className:"hidden md:flex flex-wrap gap-1.5 mb-3 min-h-[24px]",children:l.technologies.slice(0,3).map(u=>c.jsx("span",{className:"px-2 py-1 bg-neutral-800 text-white text-xs rounded",children:u},u))}),c.jsx("div",{className:"mt-auto",children:c.jsx(we,{to:l.liveUrl,className:"block w-full text-center py-1.5 md:py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors text-xs md:text-sm",children:"View Project"})})]})]},l.id))}),s.length>4&&c.jsx("div",{className:"text-center",children:c.jsx("button",{onClick:()=>r(!t),className:"inline-flex items-center gap-2 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg group text-sm md:text-base",children:t?c.jsxs(c.Fragment,{children:["Show Less Projects",c.jsx(pc,{size:16,className:"rotate-90 group-hover:translate-y-1 transition-transform"})]}):c.jsxs(c.Fragment,{children:["Show More Projects (",s.length-4," more)",c.jsx(pc,{size:16,className:"group-hover:translate-x-1 transition-transform"})]})})})]})})})},_h=["/Desktop - 1.png","/Desktop - 2.png","/Desktop - 3.png","/Desktop - 4.png","/Desktop - 5.png","/Desktop - 6.png"],iT=["E-Commerce Platform","Mobile Banking App","Healthcare Dashboard","Real Estate Platform","Education Management System","Restaurant Ordering System","Travel Booking Platform","Fitness Tracking App","Social Media Dashboard","Inventory Management System","CRM Software","Project Management Tool","Analytics Dashboard","Content Management System","AI-Powered Chatbot"],oT=iT.map((n,e)=>({title:n,link:`/portfolio/${n.toLowerCase().replace(/ /g,"-")}`,thumbnail:_h[e%_h.length]}));function aT(){return c.jsxs("div",{className:"bg-black",children:[c.jsx(tT,{products:oT}),c.jsx(sT,{})]})}function lT(){const[n,e]=C.useState({name:"",email:"",phone:"",message:""}),t=s=>{e({...n,[s.target.name]:s.target.value})},r=s=>{s.preventDefault();const i=`
Hello,

I am reaching out through your website contact form. Here are my details:

Name: ${n.name}
Email: ${n.email}
Phone: ${n.phone}

Message:
${n.message}

Best regards,
${n.name}
    `.trim(),a=`mailto:info.xpanix@gmail.com?subject=Contact Form Submission - ${encodeURIComponent(n.name)}&body=${encodeURIComponent(i)}`;window.location.href=a};return c.jsx("div",{className:"bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-lg p-8 rounded-3xl border border-gray-700/50 shadow-2xl",children:c.jsxs("form",{className:"space-y-6",onSubmit:r,children:[c.jsxs("div",{className:"space-y-2",children:[c.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-300",children:"Name"}),c.jsx("input",{type:"text",id:"name",name:"name",className:"w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm",required:!0,value:n.name,onChange:t})]}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300",children:"Email"}),c.jsx("input",{type:"email",id:"email",name:"email",className:"w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm",required:!0,value:n.email,onChange:t})]}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-300",children:"Phone"}),c.jsx("input",{type:"tel",id:"phone",name:"phone",className:"w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm",required:!0,value:n.phone,onChange:t})]}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-300",children:"Message"}),c.jsx("textarea",{id:"message",name:"message",rows:6,className:"w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none",required:!0,value:n.message,onChange:t})]}),c.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg border border-gray-600/50",children:"Submit"})]})})}function cT(){return c.jsx("div",{className:"min-h-screen bg-black text-white relative overflow-hidden",children:c.jsx("div",{className:"relative z-10 min-h-screen flex items-center justify-center px-4 py-20",children:c.jsxs("div",{className:"w-full max-w-7xl mx-auto",children:[c.jsxs("div",{className:"text-center mb-16",children:[c.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-6 text-white uppercase tracking-wider",children:"CONTACT US"}),c.jsx("h2",{className:"text-xl md:text-2xl font-medium mb-4 text-white",children:"Skip the Middlemen – Talk Directly to the Developer!"}),c.jsx("p",{className:"text-gray-400 text-base md:text-lg max-w-4xl mx-auto leading-relaxed",children:"We believe in clear, fast, and honest communication. That's why when you reach out to us, you won't be passed through layers of sales person and managers."})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",children:[c.jsxs("div",{className:"space-y-8",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-4",children:"Get in touch"}),c.jsx("p",{className:"text-gray-400 text-lg mb-8 leading-relaxed",children:"Have questions or ready to transform your business with AI automation?"})]}),c.jsxs("div",{className:"space-y-6",children:[c.jsx("a",{href:"mailto:info.xpanix@gmail.com?subject=Contact%20Inquiry&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.",className:"block bg-gradient-to-r from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 group cursor-pointer",children:c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",children:c.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Email us"}),c.jsx("p",{className:"text-gray-400",children:"info.xpanix@gmail.com"})]}),c.jsx("div",{className:"ml-auto",children:c.jsx("svg",{className:"w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})})]})}),c.jsx("a",{href:"https://wa.me/918930005190?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.",target:"_blank",rel:"noopener noreferrer",className:"block bg-gradient-to-r from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 group cursor-pointer",children:c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",children:c.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Call us"}),c.jsx("p",{className:"text-gray-400",children:"+91 8930005190"})]}),c.jsx("div",{className:"ml-auto",children:c.jsx("svg",{className:"w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})})]})}),c.jsx("a",{href:"https://www.google.com/maps/search/?api=1&query=2+Eadgah+Road+Model+Town+Panipat+Haryana+India",target:"_blank",rel:"noopener noreferrer",className:"block bg-gradient-to-r from-gray-900/80 to-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 group cursor-pointer",children:c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",children:c.jsxs("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-semibold mb-1",children:"Our location"}),c.jsx("p",{className:"text-gray-400",children:"2, Eadgah Road Model Town Panipat Haryana"})]}),c.jsx("div",{className:"ml-auto",children:c.jsx("svg",{className:"w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})})]})})]})]}),c.jsx("div",{className:"lg:pl-8 pt-8 lg:pt-12",children:c.jsx(lT,{})})]})]})})})}const Im=new st;Im.setCustomParameters({prompt:"select_account"});const uT=()=>{const[n,e]=C.useState(""),[t,r]=C.useState(""),[s,i]=C.useState(""),[a,l]=C.useState(null),[u,d]=C.useState(!1),[m,y]=C.useState(null),[w,S]=C.useState(!1),R=ts(),N=async()=>{l(null);try{const M=(await Sd(Je,Im)).user,K=await sm(Fr(Wn,"users",M.uid));!K.exists()||!K.data().phone?(y(M),d(!0)):(S(!0),setTimeout(()=>{S(!1),R("/")},1500))}catch(V){console.error("Google Sign-In Error:",V);const M=V;M.code==="auth/popup-closed-by-user"?l("Sign-in was cancelled. Please try again."):M.code==="auth/popup-blocked"?l("Popup was blocked by your browser. Please allow popups and try again."):M.code==="auth/auth-domain-config-required"?l("Google Sign-In is not properly configured. Please contact support."):M.code==="auth/operation-not-allowed"?l("Google Sign-In is not enabled. Please contact support."):M.code==="auth/unauthorized-domain"?l("This domain is not authorized for Google Sign-In."):l(`Sign-in failed: ${M.message||"Unknown error"}`)}},A=async V=>{V.preventDefault(),m&&(await ha(Fr(Wn,"users",m.uid),{phone:s,name:m.displayName,email:m.email},{merge:!0}),d(!1),S(!0),setTimeout(()=>{S(!1),R("/")},1500))},j=async V=>{V.preventDefault(),l(null);try{await n0(Je,n,t),R("/")}catch(M){l(M.message)}};return c.jsxs("div",{className:"flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800",children:[c.jsxs("div",{className:"bg-black bg-opacity-60 rounded-xl shadow-lg p-8 w-full max-w-md",children:[c.jsxs("div",{className:"flex flex-col items-center mb-6",children:[c.jsx("div",{className:"bg-gray-800 rounded-full p-3 mb-2",children:c.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:c.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})})}),c.jsx("h2",{className:"text-2xl font-bold text-white mb-1",children:"Welcome back"}),c.jsx("p",{className:"text-gray-400 text-sm",children:"Sign in with Google or Email"})]}),c.jsx("div",{className:"flex justify-center mb-4",children:c.jsxs("button",{className:"bg-gray-700 hover:bg-gray-600 p-2 rounded-full flex items-center gap-2",onClick:N,children:[c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",className:"w-5 h-5",children:c.jsxs("g",{children:[c.jsx("path",{fill:"#4285F4",d:"M43.6 20.5H42V20H24v8h11.3C34.7 32.1 29.8 35 24 35c-6.1 0-11.3-4.1-13.1-9.6s-.3-11.3 4.6-14.7c4.9-3.4 11.5-2.7 15.7 1.6l6.2-6.2C33.1 2.1 28.7 0 24 0 10.7 0 0 10.7 0 24s10.7 24 24 24c12.2 0 22.3-9.3 23.8-21.2.1-.7.2-1.3.2-2 0-1.3-.1-2.5-.4-3.7z"}),c.jsx("path",{fill:"#34A853",d:"M6.3 14.6l6.6 4.8C14.5 16.1 19 13 24 13c3.1 0 6 .9 8.3 2.6l6.2-6.2C34.7 4.1 29.8 1 24 1 14.1 1 5.7 7.6 2.1 16.1l6.2-1.5z"}),c.jsx("path",{fill:"#FBBC05",d:"M24 47c5.8 0 11.1-2.2 15.2-5.8l-7.1-5.8C29.8 37.9 27 39 24 39c-5 0-9.5-3.1-11.3-7.6l-6.6 5.1C5.7 40.4 14.1 47 24 47z"}),c.jsx("path",{fill:"#EA4335",d:"M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-4.1 5.5-7.3 6.2l7.1 5.8C41.7 36.2 44 30.6 44 24c0-1.3-.1-2.5-.4-3.7z"})]})}),c.jsx("span",{className:"text-white",children:"Sign in with Google"})]})}),c.jsxs("div",{className:"flex items-center mb-4",children:[c.jsx("div",{className:"flex-grow h-px bg-gray-700"}),c.jsx("span",{className:"mx-2 text-gray-500 text-xs",children:"OR"}),c.jsx("div",{className:"flex-grow h-px bg-gray-700"})]}),c.jsxs("form",{onSubmit:j,children:[c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-gray-400 text-sm mb-1",children:"Email Address"}),c.jsx("input",{type:"email",className:"w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500",placeholder:"Enter your email...",required:!0,value:n,onChange:V=>e(V.target.value)})]}),c.jsxs("div",{className:"mb-2",children:[c.jsx("label",{className:"block text-gray-400 text-sm mb-1",children:"Password"}),c.jsx("input",{type:"password",className:"w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500",placeholder:"********",required:!0,value:t,onChange:V=>r(V.target.value)})]}),c.jsx("div",{className:"flex justify-end mb-4",children:c.jsx("a",{href:"#",className:"text-xs text-gray-400 hover:underline",children:"Forgot Password?"})}),a&&c.jsx("div",{className:"text-red-500 text-sm mb-2",children:a}),c.jsx("button",{type:"submit",className:"w-full py-2 rounded bg-gray-700 text-white font-semibold hover:bg-gray-600 transition",children:"Sign in"})]}),c.jsxs("div",{className:"mt-4 text-center text-gray-400 text-sm",children:["Don't have an account yet?"," ",c.jsx(we,{to:"/signup",className:"text-blue-400 hover:underline",children:"Sign up"})]})]}),u&&c.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50",children:c.jsxs("div",{className:"bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm",children:[c.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:"Enter your phone number"}),c.jsxs("form",{onSubmit:A,children:[c.jsx("input",{type:"tel",className:"w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 mb-4",placeholder:"Enter your phone number...",required:!0,value:s,onChange:V=>i(V.target.value)}),c.jsx("button",{type:"submit",className:"w-full py-2 rounded bg-gray-700 text-white font-semibold hover:bg-gray-600 transition",children:"Save Phone Number"})]})]})}),w&&c.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50",children:c.jsxs("div",{className:"bg-green-600 p-6 rounded-lg shadow-lg w-full max-w-sm flex flex-col items-center",children:[c.jsx("svg",{className:"w-10 h-10 text-white mb-2",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})}),c.jsx("span",{className:"text-white text-lg font-semibold",children:"Sign in successful!"})]})})]})};function hT(){return c.jsx(uT,{})}const Am=new st;Am.setCustomParameters({prompt:"select_account"});const dT=()=>{const[n,e]=C.useState(""),[t,r]=C.useState(""),[s,i]=C.useState(""),[a,l]=C.useState(""),[u,d]=C.useState(null),[m,y]=C.useState(!1),w=ts(),S=async()=>{d(null);try{const j=(await Sd(Je,Am)).user,V=await sm(Fr(Wn,"users",j.uid));!V.exists()||!V.data().phone?y(!0):setTimeout(()=>{w("/")},1500)}catch(A){console.error("Google Sign-In Error:",A);const j=A;j.code==="auth/popup-closed-by-user"?d("Sign-in was cancelled. Please try again."):j.code==="auth/popup-blocked"?d("Popup was blocked by your browser. Please allow popups and try again."):j.code==="auth/auth-domain-config-required"?d("Google Sign-In is not properly configured. Please contact support."):j.code==="auth/operation-not-allowed"?d("Google Sign-In is not enabled. Please contact support."):j.code==="auth/unauthorized-domain"?d("This domain is not authorized for Google Sign-In."):d(`Sign-in failed: ${j.message||"Unknown error"}`)}},R=async A=>{A.preventDefault();try{await ha(Fr(Wn,"users",Je.currentUser?.uid||""),{phone:t,name:Je.currentUser?.displayName,email:Je.currentUser?.email},{merge:!0}),y(!1),setTimeout(()=>{w("/")},1500)}catch(j){d(j.message)}},N=async A=>{A.preventDefault(),d(null);try{console.log("Attempting to create user with email/password...");const j=await t0(Je,s,a);console.log("User created successfully:",j.user),j.user&&(await s0(j.user,{displayName:n}),console.log("Profile updated successfully"),await ha(Fr(Wn,"users",j.user.uid),{name:n,email:s,phone:t}),console.log("User data stored in Firestore successfully")),w("/")}catch(j){console.error("Email/Password Sign-up Error:",j);const V=j;V.code==="auth/email-already-in-use"?d("This email is already registered. Please use a different email or try logging in."):V.code==="auth/weak-password"?d("Password is too weak. Please use at least 6 characters."):V.code==="auth/invalid-email"?d("Please enter a valid email address."):V.code==="auth/operation-not-allowed"?d("Email/password authentication is not enabled. Please contact support."):d(`Registration failed: ${V.message||"Unknown error"}`)}};return c.jsxs("div",{className:"flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800",children:[c.jsxs("div",{className:"bg-black bg-opacity-60 rounded-xl shadow-lg p-8 w-full max-w-md",children:[c.jsxs("div",{className:"flex flex-col items-center mb-6",children:[c.jsx("div",{className:"bg-gray-800 rounded-full p-3 mb-2",children:c.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:c.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})})}),c.jsx("h2",{className:"text-2xl font-bold text-white mb-1",children:"Create an account"}),c.jsx("p",{className:"text-gray-400 text-sm",children:"Sign up with Google or Email"})]}),c.jsx("div",{className:"flex justify-center mb-4",children:c.jsxs("button",{className:"bg-gray-700 hover:bg-gray-600 p-2 rounded-full flex items-center gap-2",onClick:S,children:[c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",className:"w-5 h-5",children:c.jsxs("g",{children:[c.jsx("path",{fill:"#4285F4",d:"M43.6 20.5H42V20H24v8h11.3C34.7 32.1 29.8 35 24 35c-6.1 0-11.3-4.1-13.1-9.6s-.3-11.3 4.6-14.7c4.9-3.4 11.5-2.7 15.7 1.6l6.2-6.2C33.1 2.1 28.7 0 24 0 10.7 0 0 10.7 0 24s10.7 24 24 24c12.2 0 22.3-9.3 23.8-21.2.1-.7.2-1.3.2-2 0-1.3-.1-2.5-.4-3.7z"}),c.jsx("path",{fill:"#34A853",d:"M6.3 14.6l6.6 4.8C14.5 16.1 19 13 24 13c3.1 0 6 .9 8.3 2.6l6.2-6.2C34.7 4.1 29.8 1 24 1 14.1 1 5.7 7.6 2.1 16.1l6.2-1.5z"}),c.jsx("path",{fill:"#FBBC05",d:"M24 47c5.8 0 11.1-2.2 15.2-5.8l-7.1-5.8C29.8 37.9 27 39 24 39c-5 0-9.5-3.1-11.3-7.6l-6.6 5.1C5.7 40.4 14.1 47 24 47z"}),c.jsx("path",{fill:"#EA4335",d:"M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-4.1 5.5-7.3 6.2l7.1 5.8C41.7 36.2 44 30.6 44 24c0-1.3-.1-2.5-.4-3.7z"})]})}),c.jsx("span",{className:"text-white",children:"Sign up with Google"})]})}),c.jsxs("div",{className:"flex items-center mb-4",children:[c.jsx("div",{className:"flex-grow h-px bg-gray-700"}),c.jsx("span",{className:"mx-2 text-gray-500 text-xs",children:"OR"}),c.jsx("div",{className:"flex-grow h-px bg-gray-700"})]}),c.jsxs("form",{onSubmit:N,children:[c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-gray-400 text-sm mb-1",children:"Name"}),c.jsx("input",{type:"text",className:"w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500",placeholder:"Enter your name...",required:!0,value:n,onChange:A=>e(A.target.value)})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-gray-400 text-sm mb-1",children:"Phone Number"}),c.jsx("input",{type:"tel",className:"w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500",placeholder:"Enter your phone number...",required:!0,value:t,onChange:A=>r(A.target.value)})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-gray-400 text-sm mb-1",children:"Email Address"}),c.jsx("input",{type:"email",className:"w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500",placeholder:"Enter your email...",required:!0,value:s,onChange:A=>i(A.target.value)})]}),c.jsxs("div",{className:"mb-2",children:[c.jsx("label",{className:"block text-gray-400 text-sm mb-1",children:"Password"}),c.jsx("input",{type:"password",className:"w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500",placeholder:"********",required:!0,value:a,onChange:A=>l(A.target.value)})]}),u&&c.jsx("div",{className:"text-red-500 text-sm mb-2",children:u}),c.jsx("button",{type:"submit",className:"w-full py-2 rounded bg-gray-700 text-white font-semibold hover:bg-gray-600 transition",children:"Sign up"})]}),c.jsxs("div",{className:"mt-4 text-center text-gray-400 text-sm",children:["Already have an account?"," ",c.jsx(we,{to:"/login",className:"text-blue-400 hover:underline",children:"Sign in"})]})]}),m&&c.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50",children:c.jsxs("div",{className:"bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm",children:[c.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:"Enter your phone number"}),c.jsxs("form",{onSubmit:R,children:[c.jsx("input",{type:"tel",className:"w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 mb-4",placeholder:"Enter your phone number...",required:!0,value:t,onChange:A=>r(A.target.value)}),c.jsx("button",{type:"submit",className:"w-full py-2 rounded bg-gray-700 text-white font-semibold hover:bg-gray-600 transition",children:"Save Phone Number"})]})]})})]})};function fT(){return c.jsx(dT,{})}function mT(){const n=Zn(),e=n.pathname==="/login"||n.pathname==="/signup";return c.jsxs("div",{className:"antialiased bg-black min-h-screen",children:[c.jsx(eE,{}),!e&&c.jsx(Lx,{}),c.jsx("main",{children:c.jsxs(ag,{children:[c.jsx(Ot,{path:"/",element:c.jsx(YE,{})}),c.jsx(Ot,{path:"/about",element:c.jsx(JE,{})}),c.jsx(Ot,{path:"/services",element:c.jsx(eT,{})}),c.jsx(Ot,{path:"/portfolio",element:c.jsx(aT,{})}),c.jsx(Ot,{path:"/contact",element:c.jsx(cT,{})}),c.jsx(Ot,{path:"/login",element:c.jsx(hT,{})}),c.jsx(Ot,{path:"/signup",element:c.jsx(fT,{})})]})}),!e&&c.jsx(Fx,{})]})}Oo.createRoot(document.getElementById("root")).render(c.jsx(Ti.StrictMode,{children:c.jsx(mg,{children:c.jsx(mT,{})})}));
