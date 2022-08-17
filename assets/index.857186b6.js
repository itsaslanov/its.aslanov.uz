const U_=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};U_();function Cc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const F_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$_=Cc(F_);function jf(t){return!!t||t===""}function Ac(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=je(s)?j_(s):Ac(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(je(t))return t;if(Fe(t))return t}}const B_=/;(?![^(]*\))/g,V_=/:(.+)/;function j_(t){const e={};return t.split(B_).forEach(n=>{if(n){const s=n.split(V_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Bt(t){let e="";if(je(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const s=Bt(t[n]);s&&(e+=s+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function q_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=ua(t[s],e[s]);return n}function ua(t,e){if(t===e)return!0;let n=_h(t),s=_h(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Yr(t),s=Yr(e),n||s)return t===e;if(n=X(t),s=X(e),n||s)return n&&s?q_(t,e):!1;if(n=Fe(t),s=Fe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ua(t[o],e[o]))return!1}}return String(t)===String(e)}function qf(t,e){return t.findIndex(n=>ua(n,e))}const Xe=t=>je(t)?t:t==null?"":X(t)||Fe(t)&&(t.toString===zf||!ie(t.toString))?JSON.stringify(t,Hf,2):String(t),Hf=(t,e)=>e&&e.__v_isRef?Hf(t,e.value):js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:da(e)?{[`Set(${e.size})`]:[...e.values()]}:Fe(e)&&!X(e)&&!Wf(e)?String(e):e,ke={},Vs=[],$t=()=>{},H_=()=>!1,K_=/^on[^a-z]/,ha=t=>K_.test(t),Rc=t=>t.startsWith("onUpdate:"),it=Object.assign,Nc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},z_=Object.prototype.hasOwnProperty,pe=(t,e)=>z_.call(t,e),X=Array.isArray,js=t=>Ii(t)==="[object Map]",da=t=>Ii(t)==="[object Set]",_h=t=>Ii(t)==="[object Date]",ie=t=>typeof t=="function",je=t=>typeof t=="string",Yr=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",Kf=t=>Fe(t)&&ie(t.then)&&ie(t.catch),zf=Object.prototype.toString,Ii=t=>zf.call(t),W_=t=>Ii(t).slice(8,-1),Wf=t=>Ii(t)==="[object Object]",Dc=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fo=Cc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},G_=/-(\w)/g,Zt=fa(t=>t.replace(G_,(e,n)=>n?n.toUpperCase():"")),X_=/\B([A-Z])/g,Ts=fa(t=>t.replace(X_,"-$1").toLowerCase()),pa=fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),rl=fa(t=>t?`on${pa(t)}`:""),Jr=(t,e)=>!Object.is(t,e),qs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ko=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},So=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vh;const Q_=()=>vh||(vh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Kt;class Y_{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Kt&&(this.parent=Kt,this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Kt;try{return Kt=this,e()}finally{Kt=n}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function J_(t,e=Kt){e&&e.active&&e.effects.push(t)}const Oc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Gf=t=>(t.w&Fn)>0,Xf=t=>(t.n&Fn)>0,Z_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Fn},ev=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Gf(r)&&!Xf(r)?r.delete(t):e[n++]=r,r.w&=~Fn,r.n&=~Fn}e.length=n}},Ll=new WeakMap;let Rr=0,Fn=1;const Ml=30;let Mt;const ls=Symbol(""),Ul=Symbol("");class Pc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,J_(this,s)}run(){if(!this.active)return this.fn();let e=Mt,n=Pn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Mt,Mt=this,Pn=!0,Fn=1<<++Rr,Rr<=Ml?Z_(this):wh(this),this.fn()}finally{Rr<=Ml&&ev(this),Fn=1<<--Rr,Mt=this.parent,Pn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Mt===this?this.deferStop=!0:this.active&&(wh(this),this.onStop&&this.onStop(),this.active=!1)}}function wh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Pn=!0;const Qf=[];function cr(){Qf.push(Pn),Pn=!1}function ur(){const t=Qf.pop();Pn=t===void 0?!0:t}function St(t,e,n){if(Pn&&Mt){let s=Ll.get(t);s||Ll.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Oc()),Yf(r)}}function Yf(t,e){let n=!1;Rr<=Ml?Xf(t)||(t.n|=Fn,n=!Gf(t)):n=!t.has(Mt),n&&(t.add(Mt),Mt.deps.push(t))}function fn(t,e,n,s,r,i){const o=Ll.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?Dc(n)&&a.push(o.get("length")):(a.push(o.get(ls)),js(t)&&a.push(o.get(Ul)));break;case"delete":X(t)||(a.push(o.get(ls)),js(t)&&a.push(o.get(Ul)));break;case"set":js(t)&&a.push(o.get(ls));break}if(a.length===1)a[0]&&Fl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Fl(Oc(l))}}function Fl(t,e){const n=X(t)?t:[...t];for(const s of n)s.computed&&bh(s);for(const s of n)s.computed||bh(s)}function bh(t,e){(t!==Mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const tv=Cc("__proto__,__v_isRef,__isVue"),Jf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yr)),nv=Lc(),sv=Lc(!1,!0),rv=Lc(!0),Eh=iv();function iv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ye(this);for(let i=0,o=this.length;i<o;i++)St(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ye)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){cr();const s=ye(this)[e].apply(this,n);return ur(),s}}),t}function Lc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?bv:sp:e?np:tp).get(s))return s;const o=X(s);if(!t&&o&&pe(Eh,r))return Reflect.get(Eh,r,i);const a=Reflect.get(s,r,i);return(Yr(r)?Jf.has(r):tv(r))||(t||St(s,"get",r),e)?a:Me(a)?o&&Dc(r)?a:a.value:Fe(a)?t?rp(a):Ti(a):a}}const ov=Zf(),av=Zf(!0);function Zf(t=!1){return function(n,s,r,i){let o=n[s];if(Zr(o)&&Me(o)&&!Me(r))return!1;if(!t&&!Zr(r)&&($l(r)||(r=ye(r),o=ye(o)),!X(n)&&Me(o)&&!Me(r)))return o.value=r,!0;const a=X(n)&&Dc(s)?Number(s)<n.length:pe(n,s),l=Reflect.set(n,s,r,i);return n===ye(i)&&(a?Jr(r,o)&&fn(n,"set",s,r):fn(n,"add",s,r)),l}}function lv(t,e){const n=pe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&fn(t,"delete",e,void 0),s}function cv(t,e){const n=Reflect.has(t,e);return(!Yr(e)||!Jf.has(e))&&St(t,"has",e),n}function uv(t){return St(t,"iterate",X(t)?"length":ls),Reflect.ownKeys(t)}const ep={get:nv,set:ov,deleteProperty:lv,has:cv,ownKeys:uv},hv={get:rv,set(t,e){return!0},deleteProperty(t,e){return!0}},dv=it({},ep,{get:sv,set:av}),Mc=t=>t,ga=t=>Reflect.getPrototypeOf(t);function Ji(t,e,n=!1,s=!1){t=t.__v_raw;const r=ye(t),i=ye(e);n||(e!==i&&St(r,"get",e),St(r,"get",i));const{has:o}=ga(r),a=s?Mc:n?$c:ei;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Zi(t,e=!1){const n=this.__v_raw,s=ye(n),r=ye(t);return e||(t!==r&&St(s,"has",t),St(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function eo(t,e=!1){return t=t.__v_raw,!e&&St(ye(t),"iterate",ls),Reflect.get(t,"size",t)}function Ih(t){t=ye(t);const e=ye(this);return ga(e).has.call(e,t)||(e.add(t),fn(e,"add",t,t)),this}function Th(t,e){e=ye(e);const n=ye(this),{has:s,get:r}=ga(n);let i=s.call(n,t);i||(t=ye(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Jr(e,o)&&fn(n,"set",t,e):fn(n,"add",t,e),this}function xh(t){const e=ye(this),{has:n,get:s}=ga(e);let r=n.call(e,t);r||(t=ye(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&fn(e,"delete",t,void 0),i}function kh(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&fn(t,"clear",void 0,void 0),n}function to(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ye(o),l=e?Mc:t?$c:ei;return!t&&St(a,"iterate",ls),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function no(t,e,n){return function(...s){const r=this.__v_raw,i=ye(r),o=js(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?Mc:e?$c:ei;return!e&&St(i,"iterate",l?Ul:ls),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function wn(t){return function(...e){return t==="delete"?!1:this}}function fv(){const t={get(i){return Ji(this,i)},get size(){return eo(this)},has:Zi,add:Ih,set:Th,delete:xh,clear:kh,forEach:to(!1,!1)},e={get(i){return Ji(this,i,!1,!0)},get size(){return eo(this)},has:Zi,add:Ih,set:Th,delete:xh,clear:kh,forEach:to(!1,!0)},n={get(i){return Ji(this,i,!0)},get size(){return eo(this,!0)},has(i){return Zi.call(this,i,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:to(!0,!1)},s={get(i){return Ji(this,i,!0,!0)},get size(){return eo(this,!0)},has(i){return Zi.call(this,i,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:to(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=no(i,!1,!1),n[i]=no(i,!0,!1),e[i]=no(i,!1,!0),s[i]=no(i,!0,!0)}),[t,n,e,s]}const[pv,gv,mv,yv]=fv();function Uc(t,e){const n=e?t?yv:mv:t?gv:pv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(pe(n,r)&&r in s?n:s,r,i)}const _v={get:Uc(!1,!1)},vv={get:Uc(!1,!0)},wv={get:Uc(!0,!1)},tp=new WeakMap,np=new WeakMap,sp=new WeakMap,bv=new WeakMap;function Ev(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Iv(t){return t.__v_skip||!Object.isExtensible(t)?0:Ev(W_(t))}function Ti(t){return Zr(t)?t:Fc(t,!1,ep,_v,tp)}function Tv(t){return Fc(t,!1,dv,vv,np)}function rp(t){return Fc(t,!0,hv,wv,sp)}function Fc(t,e,n,s,r){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Iv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Hs(t){return Zr(t)?Hs(t.__v_raw):!!(t&&t.__v_isReactive)}function Zr(t){return!!(t&&t.__v_isReadonly)}function $l(t){return!!(t&&t.__v_isShallow)}function ip(t){return Hs(t)||Zr(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function op(t){return ko(t,"__v_skip",!0),t}const ei=t=>Fe(t)?Ti(t):t,$c=t=>Fe(t)?rp(t):t;function ap(t){Pn&&Mt&&(t=ye(t),Yf(t.dep||(t.dep=Oc())))}function lp(t,e){t=ye(t),t.dep&&Fl(t.dep)}function Me(t){return!!(t&&t.__v_isRef===!0)}function Ae(t){return cp(t,!1)}function xv(t){return cp(t,!0)}function cp(t,e){return Me(t)?t:new kv(t,e)}class kv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:ei(e)}get value(){return ap(this),this._value}set value(e){e=this.__v_isShallow?e:ye(e),Jr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ei(e),lp(this))}}function ve(t){return Me(t)?t.value:t}const Sv={get:(t,e,n)=>ve(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Me(r)&&!Me(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function up(t){return Hs(t)?t:new Proxy(t,Sv)}class Cv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Pc(e,()=>{this._dirty||(this._dirty=!0,lp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ye(this);return ap(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Av(t,e,n=!1){let s,r;const i=ie(t);return i?(s=t,r=$t):(s=t.get,r=t.set),new Cv(s,r,i||!r,n)}function Ln(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){ma(i,e,n)}return r}function Ot(t,e,n,s){if(ie(t)){const i=Ln(t,e,n,s);return i&&Kf(i)&&i.catch(o=>{ma(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ot(t[i],e,n,s));return r}function ma(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Ln(l,null,10,[t,o,a]);return}}Rv(t,n,r,s)}function Rv(t,e,n,s=!0){console.error(t)}let Co=!1,Bl=!1;const Tt=[];let sn=0;const Fr=[];let Nr=null,Ps=0;const $r=[];let kn=null,Ls=0;const hp=Promise.resolve();let Bc=null,Vl=null;function dp(t){const e=Bc||hp;return t?e.then(this?t.bind(this):t):e}function Nv(t){let e=sn+1,n=Tt.length;for(;e<n;){const s=e+n>>>1;ti(Tt[s])<t?e=s+1:n=s}return e}function fp(t){(!Tt.length||!Tt.includes(t,Co&&t.allowRecurse?sn+1:sn))&&t!==Vl&&(t.id==null?Tt.push(t):Tt.splice(Nv(t.id),0,t),pp())}function pp(){!Co&&!Bl&&(Bl=!0,Bc=hp.then(yp))}function Dv(t){const e=Tt.indexOf(t);e>sn&&Tt.splice(e,1)}function gp(t,e,n,s){X(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),pp()}function Ov(t){gp(t,Nr,Fr,Ps)}function Pv(t){gp(t,kn,$r,Ls)}function ya(t,e=null){if(Fr.length){for(Vl=e,Nr=[...new Set(Fr)],Fr.length=0,Ps=0;Ps<Nr.length;Ps++)Nr[Ps]();Nr=null,Ps=0,Vl=null,ya(t,e)}}function mp(t){if(ya(),$r.length){const e=[...new Set($r)];if($r.length=0,kn){kn.push(...e);return}for(kn=e,kn.sort((n,s)=>ti(n)-ti(s)),Ls=0;Ls<kn.length;Ls++)kn[Ls]();kn=null,Ls=0}}const ti=t=>t.id==null?1/0:t.id;function yp(t){Bl=!1,Co=!0,ya(t),Tt.sort((n,s)=>ti(n)-ti(s));const e=$t;try{for(sn=0;sn<Tt.length;sn++){const n=Tt[sn];n&&n.active!==!1&&Ln(n,null,14)}}finally{sn=0,Tt.length=0,mp(),Co=!1,Bc=null,(Tt.length||Fr.length||$r.length)&&yp(t)}}function Lv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ke;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ke;d&&(r=n.map(f=>f.trim())),h&&(r=n.map(So))}let a,l=s[a=rl(e)]||s[a=rl(Zt(e))];!l&&i&&(l=s[a=rl(Ts(e))]),l&&Ot(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ot(c,t,6,r)}}function _p(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!ie(t)){const l=c=>{const u=_p(c,e,!0);u&&(a=!0,it(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(s.set(t,null),null):(X(i)?i.forEach(l=>o[l]=null):it(o,i),s.set(t,o),o)}function _a(t,e){return!t||!ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,Ts(e))||pe(t,e))}let ht=null,va=null;function Ao(t){const e=ht;return ht=t,va=t&&t.type.__scopeId||null,e}function xi(t){va=t}function ki(){va=null}function ne(t,e=ht,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Uh(-1);const i=Ao(e),o=t(...r);return Ao(i),s._d&&Uh(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function il(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:b}=t;let v,E;const w=Ao(t);try{if(n.shapeFlag&4){const S=r||s;v=zt(u.call(S,S,h,i,f,d,m)),E=l}else{const S=e;v=zt(S.length>1?S(i,{attrs:l,slots:a,emit:c}):S(i,null)),E=e.props?l:Mv(l)}}catch(S){Vr.length=0,ma(S,t,1),v=G(Pt)}let C=v;if(E&&b!==!1){const S=Object.keys(E),{shapeFlag:Q}=C;S.length&&Q&7&&(o&&S.some(Rc)&&(E=Uv(E,o)),C=gn(C,E))}return n.dirs&&(C=gn(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),v=C,Ao(w),v}const Mv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ha(n))&&((e||(e={}))[n]=t[n]);return e},Uv=(t,e)=>{const n={};for(const s in t)(!Rc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Fv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Sh(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!_a(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Sh(s,o,c):!0:!!o;return!1}function Sh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!_a(n,i))return!0}return!1}function $v({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const vp=t=>t.__isSuspense;function Bv(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):Pv(t)}function po(t,e){if(Qe){let n=Qe.provides;const s=Qe.parent&&Qe.parent.provides;s===n&&(n=Qe.provides=Object.create(s)),n[t]=e}}function cn(t,e,n=!1){const s=Qe||ht;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ie(e)?e.call(s.proxy):e}}const Ch={};function Br(t,e,n){return wp(t,e,n)}function wp(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ke){const a=Qe;let l,c=!1,u=!1;if(Me(t)?(l=()=>t.value,c=$l(t)):Hs(t)?(l=()=>t,s=!0):X(t)?(u=!0,c=t.some(E=>Hs(E)||$l(E)),l=()=>t.map(E=>{if(Me(E))return E.value;if(Hs(E))return ss(E);if(ie(E))return Ln(E,a,2)})):ie(t)?e?l=()=>Ln(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ot(t,a,3,[d])}:l=$t,e&&s){const E=l;l=()=>ss(E())}let h,d=E=>{h=v.onStop=()=>{Ln(E,a,4)}};if(ri)return d=$t,e?n&&Ot(e,a,3,[l(),u?[]:void 0,d]):l(),$t;let f=u?[]:Ch;const m=()=>{if(!!v.active)if(e){const E=v.run();(s||c||(u?E.some((w,C)=>Jr(w,f[C])):Jr(E,f)))&&(h&&h(),Ot(e,a,3,[E,f===Ch?void 0:f,d]),f=E)}else v.run()};m.allowRecurse=!!e;let b;r==="sync"?b=m:r==="post"?b=()=>et(m,a&&a.suspense):b=()=>Ov(m);const v=new Pc(l,b);return e?n?m():f=v.run():r==="post"?et(v.run.bind(v),a&&a.suspense):v.run(),()=>{v.stop(),a&&a.scope&&Nc(a.scope.effects,v)}}function Vv(t,e,n){const s=this.proxy,r=je(t)?t.includes(".")?bp(s,t):()=>s[t]:t.bind(s,s);let i;ie(e)?i=e:(i=e.handler,n=e);const o=Qe;Ys(this);const a=wp(r,i.bind(s),n);return o?Ys(o):cs(),a}function bp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ss(t,e){if(!Fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))ss(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)ss(t[n],e);else if(da(t)||js(t))t.forEach(n=>{ss(n,e)});else if(Wf(t))for(const n in t)ss(t[n],e);return t}function jv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xs(()=>{t.isMounted=!0}),Vc(()=>{t.isUnmounting=!0}),t}const Rt=[Function,Array],qv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Rt,onEnter:Rt,onAfterEnter:Rt,onEnterCancelled:Rt,onBeforeLeave:Rt,onLeave:Rt,onAfterLeave:Rt,onLeaveCancelled:Rt,onBeforeAppear:Rt,onAppear:Rt,onAfterAppear:Rt,onAppearCancelled:Rt},setup(t,{slots:e}){const n=Kp(),s=jv();let r;return()=>{const i=e.default&&Tp(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const b of i)if(b.type!==Pt){o=b;break}}const a=ye(t),{mode:l}=a;if(s.isLeaving)return ol(o);const c=Ah(o);if(!c)return ol(o);const u=jl(c,a,s,n);Ro(c,u);const h=n.subTree,d=h&&Ah(h);let f=!1;const{getTransitionKey:m}=c.type;if(m){const b=m();r===void 0?r=b:b!==r&&(r=b,f=!0)}if(d&&d.type!==Pt&&(!es(c,d)||f)){const b=jl(d,a,s,n);if(Ro(d,b),l==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.update()},ol(o);l==="in-out"&&c.type!==Pt&&(b.delayLeave=(v,E,w)=>{const C=Ip(s,d);C[String(d.key)]=d,v._leaveCb=()=>{E(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},Ep=qv;function Ip(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function jl(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:b,onAppear:v,onAfterAppear:E,onAppearCancelled:w}=e,C=String(t.key),S=Ip(n,t),Q=(W,oe)=>{W&&Ot(W,s,9,oe)},re=(W,oe)=>{const de=oe[1];Q(W,oe),X(W)?W.every(Pe=>Pe.length<=1)&&de():W.length<=1&&de()},ue={mode:i,persisted:o,beforeEnter(W){let oe=a;if(!n.isMounted)if(r)oe=b||a;else return;W._leaveCb&&W._leaveCb(!0);const de=S[C];de&&es(t,de)&&de.el._leaveCb&&de.el._leaveCb(),Q(oe,[W])},enter(W){let oe=l,de=c,Pe=u;if(!n.isMounted)if(r)oe=v||l,de=E||c,Pe=w||u;else return;let U=!1;const Ne=W._enterCb=lt=>{U||(U=!0,lt?Q(Pe,[W]):Q(de,[W]),ue.delayedLeave&&ue.delayedLeave(),W._enterCb=void 0)};oe?re(oe,[W,Ne]):Ne()},leave(W,oe){const de=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return oe();Q(h,[W]);let Pe=!1;const U=W._leaveCb=Ne=>{Pe||(Pe=!0,oe(),Ne?Q(m,[W]):Q(f,[W]),W._leaveCb=void 0,S[de]===t&&delete S[de])};S[de]=t,d?re(d,[W,U]):U()},clone(W){return jl(W,e,n,s)}};return ue}function ol(t){if(wa(t))return t=gn(t),t.children=null,t}function Ah(t){return wa(t)?t.children?t.children[0]:void 0:t}function Ro(t,e){t.shapeFlag&6&&t.component?Ro(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Tp(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===we?(o.patchFlag&128&&r++,s=s.concat(Tp(o.children,e,a))):(e||o.type!==Pt)&&s.push(a!=null?gn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function xp(t){return ie(t)?{setup:t,name:t.name}:t}const Ks=t=>!!t.type.__asyncLoader,wa=t=>t.type.__isKeepAlive,Hv={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Kp(),s=n.ctx;if(!s.renderer)return()=>{const w=e.default&&e.default();return w&&w.length===1?w[0]:w};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=s,d=h("div");s.activate=(w,C,S,Q,re)=>{const ue=w.component;c(w,C,S,0,a),l(ue.vnode,w,C,S,ue,a,Q,w.slotScopeIds,re),et(()=>{ue.isDeactivated=!1,ue.a&&qs(ue.a);const W=w.props&&w.props.onVnodeMounted;W&&Nt(W,ue.parent,w)},a)},s.deactivate=w=>{const C=w.component;c(w,d,null,1,a),et(()=>{C.da&&qs(C.da);const S=w.props&&w.props.onVnodeUnmounted;S&&Nt(S,C.parent,w),C.isDeactivated=!0},a)};function f(w){al(w),u(w,n,a,!0)}function m(w){r.forEach((C,S)=>{const Q=Gl(C.type);Q&&(!w||!w(Q))&&b(S)})}function b(w){const C=r.get(w);!o||C.type!==o.type?f(C):o&&al(o),r.delete(w),i.delete(w)}Br(()=>[t.include,t.exclude],([w,C])=>{w&&m(S=>Dr(w,S)),C&&m(S=>!Dr(C,S))},{flush:"post",deep:!0});let v=null;const E=()=>{v!=null&&r.set(v,ll(n.subTree))};return xs(E),Sp(E),Vc(()=>{r.forEach(w=>{const{subTree:C,suspense:S}=n,Q=ll(C);if(w.type===Q.type){al(Q);const re=Q.component.da;re&&et(re,S);return}f(w)})}),()=>{if(v=null,!e.default)return null;const w=e.default(),C=w[0];if(w.length>1)return o=null,w;if(!si(C)||!(C.shapeFlag&4)&&!(C.shapeFlag&128))return o=null,C;let S=ll(C);const Q=S.type,re=Gl(Ks(S)?S.type.__asyncResolved||{}:Q),{include:ue,exclude:W,max:oe}=t;if(ue&&(!re||!Dr(ue,re))||W&&re&&Dr(W,re))return o=S,C;const de=S.key==null?Q:S.key,Pe=r.get(de);return S.el&&(S=gn(S),C.shapeFlag&128&&(C.ssContent=S)),v=de,Pe?(S.el=Pe.el,S.component=Pe.component,S.transition&&Ro(S,S.transition),S.shapeFlag|=512,i.delete(de),i.add(de)):(i.add(de),oe&&i.size>parseInt(oe,10)&&b(i.values().next().value)),S.shapeFlag|=256,o=S,vp(C.type)?C:S}}},Kv=Hv;function Dr(t,e){return X(t)?t.some(n=>Dr(n,e)):je(t)?t.split(",").includes(e):t.test?t.test(e):!1}function zv(t,e){kp(t,"a",e)}function Wv(t,e){kp(t,"da",e)}function kp(t,e,n=Qe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ba(e,s,n),n){let r=n.parent;for(;r&&r.parent;)wa(r.parent.vnode)&&Gv(s,e,n,r),r=r.parent}}function Gv(t,e,n,s){const r=ba(e,t,s,!0);Cp(()=>{Nc(s[e],r)},n)}function al(t){let e=t.shapeFlag;e&256&&(e-=256),e&512&&(e-=512),t.shapeFlag=e}function ll(t){return t.shapeFlag&128?t.ssContent:t}function ba(t,e,n=Qe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;cr(),Ys(n);const a=Ot(e,n,t,o);return cs(),ur(),a});return s?r.unshift(i):r.push(i),i}}const vn=t=>(e,n=Qe)=>(!ri||t==="sp")&&ba(t,e,n),Xv=vn("bm"),xs=vn("m"),Qv=vn("bu"),Sp=vn("u"),Vc=vn("bum"),Cp=vn("um"),Yv=vn("sp"),Jv=vn("rtg"),Zv=vn("rtc");function ew(t,e=Qe){ba("ec",t,e)}function Ut(t,e){const n=ht;if(n===null)return t;const s=Ia(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=ke]=e[i];ie(o)&&(o={mounted:o,updated:o}),o.deep&&ss(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Gn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(cr(),Ot(l,n,8,[t.el,a,t,e]),ur())}}const jc="components";function Si(t,e){return Np(jc,t,!0,e)||t}const Ap=Symbol();function Rp(t){return je(t)?Np(jc,t,!1)||t:t||Ap}function Np(t,e,n=!0,s=!1){const r=ht||Qe;if(r){const i=r.type;if(t===jc){const a=Gl(i,!1);if(a&&(a===e||a===Zt(e)||a===pa(Zt(e))))return i}const o=Rh(r[t]||i[t],e)||Rh(r.appContext[t],e);return!o&&s?i:o}}function Rh(t,e){return t&&(t[e]||t[Zt(e)]||t[pa(Zt(e))])}function ct(t,e,n,s){let r;const i=n&&n[s];if(X(t)||je(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Fe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function rs(t,e,n={},s,r){if(ht.isCE||ht.parent&&Ks(ht.parent)&&ht.parent.isCE)return G("slot",e==="default"?null:{name:e},s&&s());let i=t[e];i&&i._c&&(i._d=!1),q();const o=i&&Dp(i(n)),a=pn(we,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Dp(t){return t.some(e=>si(e)?!(e.type===Pt||e.type===we&&!Dp(e.children)):!0)?t:null}const ql=t=>t?zp(t)?Ia(t)||t.proxy:ql(t.parent):null,No=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ql(t.parent),$root:t=>ql(t.root),$emit:t=>t.emit,$options:t=>Pp(t),$forceUpdate:t=>t.f||(t.f=()=>fp(t.update)),$nextTick:t=>t.n||(t.n=dp.bind(t.proxy)),$watch:t=>Vv.bind(t)}),tw={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==ke&&pe(s,e))return o[e]=1,s[e];if(r!==ke&&pe(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&pe(c,e))return o[e]=3,i[e];if(n!==ke&&pe(n,e))return o[e]=4,n[e];Hl&&(o[e]=0)}}const u=No[e];let h,d;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ke&&pe(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,pe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==ke&&pe(r,e)?(r[e]=n,!0):s!==ke&&pe(s,e)?(s[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ke&&pe(t,o)||e!==ke&&pe(e,o)||(a=i[0])&&pe(a,o)||pe(s,o)||pe(No,o)||pe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Hl=!0;function nw(t){const e=Pp(t),n=t.proxy,s=t.ctx;Hl=!1,e.beforeCreate&&Nh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:b,deactivated:v,beforeDestroy:E,beforeUnmount:w,destroyed:C,unmounted:S,render:Q,renderTracked:re,renderTriggered:ue,errorCaptured:W,serverPrefetch:oe,expose:de,inheritAttrs:Pe,components:U,directives:Ne,filters:lt}=e;if(c&&sw(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Se in o){const be=o[Se];ie(be)&&(s[Se]=be.bind(n))}if(r){const Se=r.call(n,n);Fe(Se)&&(t.data=Ti(Se))}if(Hl=!0,i)for(const Se in i){const be=i[Se],Et=ie(be)?be.bind(n,n):ie(be.get)?be.get.bind(n,n):$t,As=!ie(be)&&ie(be.set)?be.set.bind(n):$t,nn=yt({get:Et,set:As});Object.defineProperty(s,Se,{enumerable:!0,configurable:!0,get:()=>nn.value,set:qt=>nn.value=qt})}if(a)for(const Se in a)Op(a[Se],s,n,Se);if(l){const Se=ie(l)?l.call(n):l;Reflect.ownKeys(Se).forEach(be=>{po(be,Se[be])})}u&&Nh(u,t,"c");function Ue(Se,be){X(be)?be.forEach(Et=>Se(Et.bind(n))):be&&Se(be.bind(n))}if(Ue(Xv,h),Ue(xs,d),Ue(Qv,f),Ue(Sp,m),Ue(zv,b),Ue(Wv,v),Ue(ew,W),Ue(Zv,re),Ue(Jv,ue),Ue(Vc,w),Ue(Cp,S),Ue(Yv,oe),X(de))if(de.length){const Se=t.exposed||(t.exposed={});de.forEach(be=>{Object.defineProperty(Se,be,{get:()=>n[be],set:Et=>n[be]=Et})})}else t.exposed||(t.exposed={});Q&&t.render===$t&&(t.render=Q),Pe!=null&&(t.inheritAttrs=Pe),U&&(t.components=U),Ne&&(t.directives=Ne)}function sw(t,e,n=$t,s=!1){X(t)&&(t=Kl(t));for(const r in t){const i=t[r];let o;Fe(i)?"default"in i?o=cn(i.from||r,i.default,!0):o=cn(i.from||r):o=cn(i),Me(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Nh(t,e,n){Ot(X(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Op(t,e,n,s){const r=s.includes(".")?bp(n,s):()=>n[s];if(je(t)){const i=e[t];ie(i)&&Br(r,i)}else if(ie(t))Br(r,t.bind(n));else if(Fe(t))if(X(t))t.forEach(i=>Op(i,e,n,s));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&Br(r,i,t)}}function Pp(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Do(l,c,o,!0)),Do(l,e,o)),i.set(e,l),l}function Do(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Do(t,i,n,!0),r&&r.forEach(o=>Do(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=rw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const rw={data:Dh,props:Jn,emits:Jn,methods:Jn,computed:Jn,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Jn,directives:Jn,watch:ow,provide:Dh,inject:iw};function Dh(t,e){return e?t?function(){return it(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function iw(t,e){return Jn(Kl(t),Kl(e))}function Kl(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Jn(t,e){return t?it(it(Object.create(null),t),e):e}function ow(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const s in e)n[s]=pt(t[s],e[s]);return n}function aw(t,e,n,s=!1){const r={},i={};ko(i,Ea,1),t.propsDefaults=Object.create(null),Lp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Tv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function lw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ye(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(_a(t.emitsOptions,d))continue;const f=e[d];if(l)if(pe(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const m=Zt(d);r[m]=zl(l,a,m,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{Lp(t,e,r,i)&&(c=!0);let u;for(const h in a)(!e||!pe(e,h)&&((u=Ts(h))===h||!pe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=zl(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!pe(e,h)&&!0)&&(delete i[h],c=!0)}c&&fn(t,"set","$attrs")}function Lp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(fo(l))continue;const c=e[l];let u;r&&pe(r,u=Zt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:_a(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=ye(n),c=a||ke;for(let u=0;u<i.length;u++){const h=i[u];n[h]=zl(r,l,h,c[h],t,!pe(c,h))}}return o}function zl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&ie(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(Ys(r),s=c[n]=l.call(null,e),cs())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ts(n))&&(s=!0))}return s}function Mp(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!ie(t)){const u=h=>{l=!0;const[d,f]=Mp(h,e,!0);it(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return s.set(t,Vs),Vs;if(X(i))for(let u=0;u<i.length;u++){const h=Zt(i[u]);Oh(h)&&(o[h]=ke)}else if(i)for(const u in i){const h=Zt(u);if(Oh(h)){const d=i[u],f=o[h]=X(d)||ie(d)?{type:d}:d;if(f){const m=Mh(Boolean,f.type),b=Mh(String,f.type);f[0]=m>-1,f[1]=b<0||m<b,(m>-1||pe(f,"default"))&&a.push(h)}}}const c=[o,a];return s.set(t,c),c}function Oh(t){return t[0]!=="$"}function Ph(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Lh(t,e){return Ph(t)===Ph(e)}function Mh(t,e){return X(e)?e.findIndex(n=>Lh(n,t)):ie(e)&&Lh(e,t)?0:-1}const Up=t=>t[0]==="_"||t==="$stable",qc=t=>X(t)?t.map(zt):[zt(t)],cw=(t,e,n)=>{if(e._n)return e;const s=ne((...r)=>qc(e(...r)),n);return s._c=!1,s},Fp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Up(r))continue;const i=t[r];if(ie(i))e[r]=cw(r,i,s);else if(i!=null){const o=qc(i);e[r]=()=>o}}},$p=(t,e)=>{const n=qc(e);t.slots.default=()=>n},uw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),ko(e,"_",n)):Fp(e,t.slots={})}else t.slots={},e&&$p(t,e);ko(t.slots,Ea,1)},hw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ke;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(it(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Fp(e,r)),o=e}else e&&($p(t,e),o={default:1});if(i)for(const a in r)!Up(a)&&!(a in o)&&delete r[a]};function Bp(){return{app:null,config:{isNativeTag:H_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dw=0;function fw(t,e){return function(s,r=null){ie(s)||(s=Object.assign({},s)),r!=null&&!Fe(r)&&(r=null);const i=Bp(),o=new Set;let a=!1;const l=i.app={_uid:dw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Rw,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ie(c.install)?(o.add(c),c.install(l,...u)):ie(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=G(s,r);return d.appContext=i,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Ia(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function Wl(t,e,n,s,r=!1){if(X(t)){t.forEach((d,f)=>Wl(d,e&&(X(e)?e[f]:e),n,s,r));return}if(Ks(s)&&!r)return;const i=s.shapeFlag&4?Ia(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ke?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(je(c)?(u[c]=null,pe(h,c)&&(h[c]=null)):Me(c)&&(c.value=null)),ie(l))Ln(l,a,12,[o,u]);else{const d=je(l),f=Me(l);if(d||f){const m=()=>{if(t.f){const b=d?u[l]:l.value;r?X(b)&&Nc(b,i):X(b)?b.includes(i)||b.push(i):d?(u[l]=[i],pe(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,pe(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,et(m,n)):m()}}}const et=Bv;function pw(t){return gw(t)}function gw(t,e){const n=Q_();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=$t,cloneNode:m,insertStaticContent:b}=t,v=(p,g,_,k=null,x=null,D=null,L=!1,N=null,O=!!g.dynamicChildren)=>{if(p===g)return;p&&!es(p,g)&&(k=V(p),At(p,x,D,!0),p=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:A,ref:K,shapeFlag:$}=g;switch(A){case Hc:E(p,g,_,k);break;case Pt:w(p,g,_,k);break;case go:p==null&&C(g,_,k,L);break;case we:Ne(p,g,_,k,x,D,L,N,O);break;default:$&1?re(p,g,_,k,x,D,L,N,O):$&6?lt(p,g,_,k,x,D,L,N,O):($&64||$&128)&&A.process(p,g,_,k,x,D,L,N,O,Ce)}K!=null&&x&&Wl(K,p&&p.ref,D,g||p,!g)},E=(p,g,_,k)=>{if(p==null)s(g.el=a(g.children),_,k);else{const x=g.el=p.el;g.children!==p.children&&c(x,g.children)}},w=(p,g,_,k)=>{p==null?s(g.el=l(g.children||""),_,k):g.el=p.el},C=(p,g,_,k)=>{[p.el,p.anchor]=b(p.children,g,_,k,p.el,p.anchor)},S=({el:p,anchor:g},_,k)=>{let x;for(;p&&p!==g;)x=d(p),s(p,_,k),p=x;s(g,_,k)},Q=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=d(p),r(p),p=_;r(g)},re=(p,g,_,k,x,D,L,N,O)=>{L=L||g.type==="svg",p==null?ue(g,_,k,x,D,L,N,O):de(p,g,x,D,L,N,O)},ue=(p,g,_,k,x,D,L,N)=>{let O,A;const{type:K,props:$,shapeFlag:z,transition:ee,patchFlag:ge,dirs:Ie}=p;if(p.el&&m!==void 0&&ge===-1)O=p.el=m(p.el);else{if(O=p.el=o(p.type,D,$&&$.is,$),z&8?u(O,p.children):z&16&&oe(p.children,O,null,k,x,D&&K!=="foreignObject",L,N),Ie&&Gn(p,null,k,"created"),$){for(const De in $)De!=="value"&&!fo(De)&&i(O,De,null,$[De],D,p.children,k,x,P);"value"in $&&i(O,"value",null,$.value),(A=$.onVnodeBeforeMount)&&Nt(A,k,p)}W(O,p,p.scopeId,L,k)}Ie&&Gn(p,null,k,"beforeMount");const Te=(!x||x&&!x.pendingBranch)&&ee&&!ee.persisted;Te&&ee.beforeEnter(O),s(O,g,_),((A=$&&$.onVnodeMounted)||Te||Ie)&&et(()=>{A&&Nt(A,k,p),Te&&ee.enter(O),Ie&&Gn(p,null,k,"mounted")},x)},W=(p,g,_,k,x)=>{if(_&&f(p,_),k)for(let D=0;D<k.length;D++)f(p,k[D]);if(x){let D=x.subTree;if(g===D){const L=x.vnode;W(p,L,L.scopeId,L.slotScopeIds,x.parent)}}},oe=(p,g,_,k,x,D,L,N,O=0)=>{for(let A=O;A<p.length;A++){const K=p[A]=N?Sn(p[A]):zt(p[A]);v(null,K,g,_,k,x,D,L,N)}},de=(p,g,_,k,x,D,L)=>{const N=g.el=p.el;let{patchFlag:O,dynamicChildren:A,dirs:K}=g;O|=p.patchFlag&16;const $=p.props||ke,z=g.props||ke;let ee;_&&Xn(_,!1),(ee=z.onVnodeBeforeUpdate)&&Nt(ee,_,g,p),K&&Gn(g,p,_,"beforeUpdate"),_&&Xn(_,!0);const ge=x&&g.type!=="foreignObject";if(A?Pe(p.dynamicChildren,A,N,_,k,ge,D):L||Et(p,g,N,null,_,k,ge,D,!1),O>0){if(O&16)U(N,g,$,z,_,k,x);else if(O&2&&$.class!==z.class&&i(N,"class",null,z.class,x),O&4&&i(N,"style",$.style,z.style,x),O&8){const Ie=g.dynamicProps;for(let Te=0;Te<Ie.length;Te++){const De=Ie[Te],Lt=$[De],Rs=z[De];(Rs!==Lt||De==="value")&&i(N,De,Lt,Rs,x,p.children,_,k,P)}}O&1&&p.children!==g.children&&u(N,g.children)}else!L&&A==null&&U(N,g,$,z,_,k,x);((ee=z.onVnodeUpdated)||K)&&et(()=>{ee&&Nt(ee,_,g,p),K&&Gn(g,p,_,"updated")},k)},Pe=(p,g,_,k,x,D,L)=>{for(let N=0;N<g.length;N++){const O=p[N],A=g[N],K=O.el&&(O.type===we||!es(O,A)||O.shapeFlag&70)?h(O.el):_;v(O,A,K,null,k,x,D,L,!0)}},U=(p,g,_,k,x,D,L)=>{if(_!==k){for(const N in k){if(fo(N))continue;const O=k[N],A=_[N];O!==A&&N!=="value"&&i(p,N,A,O,L,g.children,x,D,P)}if(_!==ke)for(const N in _)!fo(N)&&!(N in k)&&i(p,N,_[N],null,L,g.children,x,D,P);"value"in k&&i(p,"value",_.value,k.value)}},Ne=(p,g,_,k,x,D,L,N,O)=>{const A=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:z,slotScopeIds:ee}=g;ee&&(N=N?N.concat(ee):ee),p==null?(s(A,_,k),s(K,_,k),oe(g.children,_,K,x,D,L,N,O)):$>0&&$&64&&z&&p.dynamicChildren?(Pe(p.dynamicChildren,z,_,x,D,L,N),(g.key!=null||x&&g===x.subTree)&&Vp(p,g,!0)):Et(p,g,_,K,x,D,L,N,O)},lt=(p,g,_,k,x,D,L,N,O)=>{g.slotScopeIds=N,p==null?g.shapeFlag&512?x.ctx.activate(g,_,k,L,O):tn(g,_,k,x,D,L,O):Ue(p,g,O)},tn=(p,g,_,k,x,D,L)=>{const N=p.component=Tw(p,k,x);if(wa(p)&&(N.ctx.renderer=Ce),xw(N),N.asyncDep){if(x&&x.registerDep(N,Se),!p.el){const O=N.subTree=G(Pt);w(null,O,g,_)}return}Se(N,p,g,_,x,D,L)},Ue=(p,g,_)=>{const k=g.component=p.component;if(Fv(p,g,_))if(k.asyncDep&&!k.asyncResolved){be(k,g,_);return}else k.next=g,Dv(k.update),k.update();else g.el=p.el,k.vnode=g},Se=(p,g,_,k,x,D,L)=>{const N=()=>{if(p.isMounted){let{next:K,bu:$,u:z,parent:ee,vnode:ge}=p,Ie=K,Te;Xn(p,!1),K?(K.el=ge.el,be(p,K,L)):K=ge,$&&qs($),(Te=K.props&&K.props.onVnodeBeforeUpdate)&&Nt(Te,ee,K,ge),Xn(p,!0);const De=il(p),Lt=p.subTree;p.subTree=De,v(Lt,De,h(Lt.el),V(Lt),p,x,D),K.el=De.el,Ie===null&&$v(p,De.el),z&&et(z,x),(Te=K.props&&K.props.onVnodeUpdated)&&et(()=>Nt(Te,ee,K,ge),x)}else{let K;const{el:$,props:z}=g,{bm:ee,m:ge,parent:Ie}=p,Te=Ks(g);if(Xn(p,!1),ee&&qs(ee),!Te&&(K=z&&z.onVnodeBeforeMount)&&Nt(K,Ie,g),Xn(p,!0),$&&ae){const De=()=>{p.subTree=il(p),ae($,p.subTree,p,x,null)};Te?g.type.__asyncLoader().then(()=>!p.isUnmounted&&De()):De()}else{const De=p.subTree=il(p);v(null,De,_,k,p,x,D),g.el=De.el}if(ge&&et(ge,x),!Te&&(K=z&&z.onVnodeMounted)){const De=g;et(()=>Nt(K,Ie,De),x)}(g.shapeFlag&256||Ie&&Ks(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&p.a&&et(p.a,x),p.isMounted=!0,g=_=k=null}},O=p.effect=new Pc(N,()=>fp(A),p.scope),A=p.update=()=>O.run();A.id=p.uid,Xn(p,!0),A()},be=(p,g,_)=>{g.component=p;const k=p.vnode.props;p.vnode=g,p.next=null,lw(p,g.props,k,_),hw(p,g.children,_),cr(),ya(void 0,p.update),ur()},Et=(p,g,_,k,x,D,L,N,O=!1)=>{const A=p&&p.children,K=p?p.shapeFlag:0,$=g.children,{patchFlag:z,shapeFlag:ee}=g;if(z>0){if(z&128){nn(A,$,_,k,x,D,L,N,O);return}else if(z&256){As(A,$,_,k,x,D,L,N,O);return}}ee&8?(K&16&&P(A,x,D),$!==A&&u(_,$)):K&16?ee&16?nn(A,$,_,k,x,D,L,N,O):P(A,x,D,!0):(K&8&&u(_,""),ee&16&&oe($,_,k,x,D,L,N,O))},As=(p,g,_,k,x,D,L,N,O)=>{p=p||Vs,g=g||Vs;const A=p.length,K=g.length,$=Math.min(A,K);let z;for(z=0;z<$;z++){const ee=g[z]=O?Sn(g[z]):zt(g[z]);v(p[z],ee,_,null,x,D,L,N,O)}A>K?P(p,x,D,!0,!1,$):oe(g,_,k,x,D,L,N,O,$)},nn=(p,g,_,k,x,D,L,N,O)=>{let A=0;const K=g.length;let $=p.length-1,z=K-1;for(;A<=$&&A<=z;){const ee=p[A],ge=g[A]=O?Sn(g[A]):zt(g[A]);if(es(ee,ge))v(ee,ge,_,null,x,D,L,N,O);else break;A++}for(;A<=$&&A<=z;){const ee=p[$],ge=g[z]=O?Sn(g[z]):zt(g[z]);if(es(ee,ge))v(ee,ge,_,null,x,D,L,N,O);else break;$--,z--}if(A>$){if(A<=z){const ee=z+1,ge=ee<K?g[ee].el:k;for(;A<=z;)v(null,g[A]=O?Sn(g[A]):zt(g[A]),_,ge,x,D,L,N,O),A++}}else if(A>z)for(;A<=$;)At(p[A],x,D,!0),A++;else{const ee=A,ge=A,Ie=new Map;for(A=ge;A<=z;A++){const It=g[A]=O?Sn(g[A]):zt(g[A]);It.key!=null&&Ie.set(It.key,A)}let Te,De=0;const Lt=z-ge+1;let Rs=!1,gh=0;const xr=new Array(Lt);for(A=0;A<Lt;A++)xr[A]=0;for(A=ee;A<=$;A++){const It=p[A];if(De>=Lt){At(It,x,D,!0);continue}let Ht;if(It.key!=null)Ht=Ie.get(It.key);else for(Te=ge;Te<=z;Te++)if(xr[Te-ge]===0&&es(It,g[Te])){Ht=Te;break}Ht===void 0?At(It,x,D,!0):(xr[Ht-ge]=A+1,Ht>=gh?gh=Ht:Rs=!0,v(It,g[Ht],_,null,x,D,L,N,O),De++)}const mh=Rs?mw(xr):Vs;for(Te=mh.length-1,A=Lt-1;A>=0;A--){const It=ge+A,Ht=g[It],yh=It+1<K?g[It+1].el:k;xr[A]===0?v(null,Ht,_,yh,x,D,L,N,O):Rs&&(Te<0||A!==mh[Te]?qt(Ht,_,yh,2):Te--)}}},qt=(p,g,_,k,x=null)=>{const{el:D,type:L,transition:N,children:O,shapeFlag:A}=p;if(A&6){qt(p.component.subTree,g,_,k);return}if(A&128){p.suspense.move(g,_,k);return}if(A&64){L.move(p,g,_,Ce);return}if(L===we){s(D,g,_);for(let $=0;$<O.length;$++)qt(O[$],g,_,k);s(p.anchor,g,_);return}if(L===go){S(p,g,_);return}if(k!==2&&A&1&&N)if(k===0)N.beforeEnter(D),s(D,g,_),et(()=>N.enter(D),x);else{const{leave:$,delayLeave:z,afterLeave:ee}=N,ge=()=>s(D,g,_),Ie=()=>{$(D,()=>{ge(),ee&&ee()})};z?z(D,ge,Ie):Ie()}else s(D,g,_)},At=(p,g,_,k=!1,x=!1)=>{const{type:D,props:L,ref:N,children:O,dynamicChildren:A,shapeFlag:K,patchFlag:$,dirs:z}=p;if(N!=null&&Wl(N,null,_,p,!0),K&256){g.ctx.deactivate(p);return}const ee=K&1&&z,ge=!Ks(p);let Ie;if(ge&&(Ie=L&&L.onVnodeBeforeUnmount)&&Nt(Ie,g,p),K&6)B(p.component,_,k);else{if(K&128){p.suspense.unmount(_,k);return}ee&&Gn(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,_,x,Ce,k):A&&(D!==we||$>0&&$&64)?P(A,g,_,!1,!0):(D===we&&$&384||!x&&K&16)&&P(O,g,_),k&&Tr(p)}(ge&&(Ie=L&&L.onVnodeUnmounted)||ee)&&et(()=>{Ie&&Nt(Ie,g,p),ee&&Gn(p,null,g,"unmounted")},_)},Tr=p=>{const{type:g,el:_,anchor:k,transition:x}=p;if(g===we){I(_,k);return}if(g===go){Q(p);return}const D=()=>{r(_),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(p.shapeFlag&1&&x&&!x.persisted){const{leave:L,delayLeave:N}=x,O=()=>L(_,D);N?N(p.el,D,O):O()}else D()},I=(p,g)=>{let _;for(;p!==g;)_=d(p),r(p),p=_;r(g)},B=(p,g,_)=>{const{bum:k,scope:x,update:D,subTree:L,um:N}=p;k&&qs(k),x.stop(),D&&(D.active=!1,At(L,p,g,_)),N&&et(N,g),et(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},P=(p,g,_,k=!1,x=!1,D=0)=>{for(let L=D;L<p.length;L++)At(p[L],g,_,k,x)},V=p=>p.shapeFlag&6?V(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),Ee=(p,g,_)=>{p==null?g._vnode&&At(g._vnode,null,null,!0):v(g._vnode||null,p,g,null,null,null,_),mp(),g._vnode=p},Ce={p:v,um:At,m:qt,r:Tr,mt:tn,mc:oe,pc:Et,pbc:Pe,n:V,o:t};let ce,ae;return e&&([ce,ae]=e(Ce)),{render:Ee,hydrate:ce,createApp:fw(Ee,ce)}}function Xn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Vp(t,e,n=!1){const s=t.children,r=e.children;if(X(s)&&X(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Sn(r[i]),a.el=o.el),n||Vp(o,a))}}function mw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const yw=t=>t.__isTeleport,we=Symbol(void 0),Hc=Symbol(void 0),Pt=Symbol(void 0),go=Symbol(void 0),Vr=[];let Ft=null;function q(t=!1){Vr.push(Ft=t?null:[])}function _w(){Vr.pop(),Ft=Vr[Vr.length-1]||null}let ni=1;function Uh(t){ni+=t}function jp(t){return t.dynamicChildren=ni>0?Ft||Vs:null,_w(),ni>0&&Ft&&Ft.push(t),t}function Y(t,e,n,s,r,i){return jp(y(t,e,n,s,r,i,!0))}function pn(t,e,n,s,r){return jp(G(t,e,n,s,r,!0))}function si(t){return t?t.__v_isVNode===!0:!1}function es(t,e){return t.type===e.type&&t.key===e.key}const Ea="__vInternal",qp=({key:t})=>t!=null?t:null,mo=({ref:t,ref_key:e,ref_for:n})=>t!=null?je(t)||Me(t)||ie(t)?{i:ht,r:t,k:e,f:!!n}:t:null;function y(t,e=null,n=null,s=0,r=null,i=t===we?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qp(e),ref:e&&mo(e),scopeId:va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Kc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),ni>0&&!o&&Ft&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ft.push(l),l}const G=vw;function vw(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Ap)&&(t=Pt),si(t)){const a=gn(t,e,!0);return n&&Kc(a,n),ni>0&&!i&&Ft&&(a.shapeFlag&6?Ft[Ft.indexOf(t)]=a:Ft.push(a)),a.patchFlag|=-2,a}if(Aw(t)&&(t=t.__vccOpts),e){e=ww(e);let{class:a,style:l}=e;a&&!je(a)&&(e.class=Bt(a)),Fe(l)&&(ip(l)&&!X(l)&&(l=it({},l)),e.style=Ac(l))}const o=je(t)?1:vp(t)?128:yw(t)?64:Fe(t)?4:ie(t)?2:0;return y(t,e,n,s,r,o,i,!0)}function ww(t){return t?ip(t)||Ea in t?it({},t):t:null}function gn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?bw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&qp(a),ref:e&&e.ref?n&&r?X(r)?r.concat(mo(e)):[r,mo(e)]:mo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==we?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gn(t.ssContent),ssFallback:t.ssFallback&&gn(t.ssFallback),el:t.el,anchor:t.anchor}}function He(t=" ",e=0){return G(Hc,null,t,e)}function Hp(t,e){const n=G(go,null,t);return n.staticCount=e,n}function ps(t="",e=!1){return e?(q(),pn(Pt,null,t)):G(Pt,null,t)}function zt(t){return t==null||typeof t=="boolean"?G(Pt):X(t)?G(we,null,t.slice()):typeof t=="object"?Sn(t):G(Hc,null,String(t))}function Sn(t){return t.el===null||t.memo?t:gn(t)}function Kc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Kc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ea in e)?e._ctx=ht:r===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:ht},n=32):(e=String(e),s&64?(n=16,e=[He(e)]):n=8);t.children=e,t.shapeFlag|=n}function bw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Bt([e.class,s.class]));else if(r==="style")e.style=Ac([e.style,s.style]);else if(ha(r)){const i=e[r],o=s[r];o&&i!==o&&!(X(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Nt(t,e,n,s=null){Ot(t,e,7,[n,s])}const Ew=Bp();let Iw=0;function Tw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Ew,i={uid:Iw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Y_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mp(s,r),emitsOptions:_p(s,r),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:s.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Lv.bind(null,i),t.ce&&t.ce(i),i}let Qe=null;const Kp=()=>Qe||ht,Ys=t=>{Qe=t,t.scope.on()},cs=()=>{Qe&&Qe.scope.off(),Qe=null};function zp(t){return t.vnode.shapeFlag&4}let ri=!1;function xw(t,e=!1){ri=e;const{props:n,children:s}=t.vnode,r=zp(t);aw(t,n,r,e),uw(t,s);const i=r?kw(t,e):void 0;return ri=!1,i}function kw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=op(new Proxy(t.ctx,tw));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Cw(t):null;Ys(t),cr();const i=Ln(s,t,0,[t.props,r]);if(ur(),cs(),Kf(i)){if(i.then(cs,cs),e)return i.then(o=>{Fh(t,o,e)}).catch(o=>{ma(o,t,0)});t.asyncDep=i}else Fh(t,i,e)}else Wp(t,e)}function Fh(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=up(e)),Wp(t,n)}let $h;function Wp(t,e,n){const s=t.type;if(!t.render){if(!e&&$h&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=it(it({isCustomElement:i,delimiters:a},o),l);s.render=$h(r,c)}}t.render=s.render||$t}Ys(t),cr(),nw(t),ur(),cs()}function Sw(t){return new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}})}function Cw(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Sw(t))},slots:t.slots,emit:t.emit,expose:e}}function Ia(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(up(op(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in No)return No[n](t)}}))}function Gl(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function Aw(t){return ie(t)&&"__vccOpts"in t}const yt=(t,e)=>Av(t,e,ri);function zc(t,e,n){const s=arguments.length;return s===2?Fe(e)&&!X(e)?si(e)?G(t,null,[e]):G(t,e):G(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&si(n)&&(n=[n]),G(t,e,n))}const Rw="3.2.37",Nw="http://www.w3.org/2000/svg",ts=typeof document<"u"?document:null,Bh=ts&&ts.createElement("template"),Dw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?ts.createElementNS(Nw,t):ts.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>ts.createTextNode(t),createComment:t=>ts.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ts.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Bh.innerHTML=s?`<svg>${t}</svg>`:t;const a=Bh.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ow(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Pw(t,e,n){const s=t.style,r=je(n);if(n&&!r){for(const i in n)Xl(s,i,n[i]);if(e&&!je(e))for(const i in e)n[i]==null&&Xl(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Vh=/\s*!important$/;function Xl(t,e,n){if(X(n))n.forEach(s=>Xl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Lw(t,e);Vh.test(n)?t.setProperty(Ts(s),n.replace(Vh,""),"important"):t[s]=n}}const jh=["Webkit","Moz","ms"],cl={};function Lw(t,e){const n=cl[e];if(n)return n;let s=Zt(e);if(s!=="filter"&&s in t)return cl[e]=s;s=pa(s);for(let r=0;r<jh.length;r++){const i=jh[r]+s;if(i in t)return cl[e]=i}return e}const qh="http://www.w3.org/1999/xlink";function Mw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(qh,e.slice(6,e.length)):t.setAttributeNS(qh,e,n);else{const i=$_(e);n==null||i&&!jf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Uw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=jf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Gp,Fw]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Ql=0;const $w=Promise.resolve(),Bw=()=>{Ql=0},Vw=()=>Ql||($w.then(Bw),Ql=Gp());function ns(t,e,n,s){t.addEventListener(e,n,s)}function jw(t,e,n,s){t.removeEventListener(e,n,s)}function qw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Hw(e);if(s){const c=i[e]=Kw(s,r);ns(t,a,c,l)}else o&&(jw(t,a,o,l),i[e]=void 0)}}const Hh=/(?:Once|Passive|Capture)$/;function Hw(t){let e;if(Hh.test(t)){e={};let n;for(;n=t.match(Hh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ts(t.slice(2)),e]}function Kw(t,e){const n=s=>{const r=s.timeStamp||Gp();(Fw||r>=n.attached-1)&&Ot(zw(s,n.value),e,5,[s])};return n.value=t,n.attached=Vw(),n}function zw(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Kh=/^on[a-z]/,Ww=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?Ow(t,s,r):e==="style"?Pw(t,n,s):ha(e)?Rc(e)||qw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gw(t,e,s,r))?Uw(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Mw(t,e,s,r))};function Gw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Kh.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Kh.test(e)&&je(n)?!1:e in t}const bn="transition",kr="animation",Wc=(t,{slots:e})=>zc(Ep,Xw(t),e);Wc.displayName="Transition";const Xp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Wc.props=it({},Ep.props,Xp);const Qn=(t,e=[])=>{X(t)?t.forEach(n=>n(...e)):t&&t(...e)},zh=t=>t?X(t)?t.some(e=>e.length>1):t.length>1:!1;function Xw(t){const e={};for(const U in t)U in Xp||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=Qw(r),b=m&&m[0],v=m&&m[1],{onBeforeEnter:E,onEnter:w,onEnterCancelled:C,onLeave:S,onLeaveCancelled:Q,onBeforeAppear:re=E,onAppear:ue=w,onAppearCancelled:W=C}=e,oe=(U,Ne,lt)=>{Yn(U,Ne?u:a),Yn(U,Ne?c:o),lt&&lt()},de=(U,Ne)=>{U._isLeaving=!1,Yn(U,h),Yn(U,f),Yn(U,d),Ne&&Ne()},Pe=U=>(Ne,lt)=>{const tn=U?ue:w,Ue=()=>oe(Ne,U,lt);Qn(tn,[Ne,Ue]),Wh(()=>{Yn(Ne,U?l:i),En(Ne,U?u:a),zh(tn)||Gh(Ne,s,b,Ue)})};return it(e,{onBeforeEnter(U){Qn(E,[U]),En(U,i),En(U,o)},onBeforeAppear(U){Qn(re,[U]),En(U,l),En(U,c)},onEnter:Pe(!1),onAppear:Pe(!0),onLeave(U,Ne){U._isLeaving=!0;const lt=()=>de(U,Ne);En(U,h),Zw(),En(U,d),Wh(()=>{!U._isLeaving||(Yn(U,h),En(U,f),zh(S)||Gh(U,s,v,lt))}),Qn(S,[U,lt])},onEnterCancelled(U){oe(U,!1),Qn(C,[U])},onAppearCancelled(U){oe(U,!0),Qn(W,[U])},onLeaveCancelled(U){de(U),Qn(Q,[U])}})}function Qw(t){if(t==null)return null;if(Fe(t))return[ul(t.enter),ul(t.leave)];{const e=ul(t);return[e,e]}}function ul(t){return So(t)}function En(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Yn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Wh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Yw=0;function Gh(t,e,n,s){const r=t._endId=++Yw,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Jw(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),i()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Jw(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(bn+"Delay"),i=s(bn+"Duration"),o=Xh(r,i),a=s(kr+"Delay"),l=s(kr+"Duration"),c=Xh(a,l);let u=null,h=0,d=0;e===bn?o>0&&(u=bn,h=o,d=i.length):e===kr?c>0&&(u=kr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?bn:kr:null,d=u?u===bn?i.length:l.length:0);const f=u===bn&&/\b(transform|all)(,|$)/.test(n[bn+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function Xh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Qh(n)+Qh(t[s])))}function Qh(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Zw(){return document.body.offsetHeight}const Oo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>qs(e,n):e};function eb(t){t.target.composing=!0}function Yh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rn={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Oo(r);const i=s||r.props&&r.props.type==="number";ns(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=So(a)),t._assign(a)}),n&&ns(t,"change",()=>{t.value=t.value.trim()}),e||(ns(t,"compositionstart",eb),ns(t,"compositionend",Yh),ns(t,"change",Yh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Oo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&So(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Qp={deep:!0,created(t,e,n){t._assign=Oo(n),ns(t,"change",()=>{const s=t._modelValue,r=tb(t),i=t.checked,o=t._assign;if(X(s)){const a=qf(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(da(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Yp(t,i))})},mounted:Jh,beforeUpdate(t,e,n){t._assign=Oo(n),Jh(t,e,n)}};function Jh(t,{value:e,oldValue:n},s){t._modelValue=e,X(e)?t.checked=qf(e,s.props.value)>-1:da(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=ua(e,Yp(t,!0)))}function tb(t){return"_value"in t?t._value:t.value}function Yp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const nb=["ctrl","shift","alt","meta"],sb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>nb.some(n=>t[`${n}Key`]&&!e.includes(n))},Ta=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=sb[e[r]];if(i&&i(n,e))return}return t(n,...s)},rb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ib=(t,e)=>n=>{if(!("key"in n))return;const s=Ts(n.key);if(e.some(r=>r===s||rb[r]===s))return t(n)},ob=it({patchProp:Ww},Dw);let Zh;function ab(){return Zh||(Zh=pw(ob))}const lb=(...t)=>{const e=ab().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=cb(s);if(!r)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function cb(t){return je(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ms=typeof window<"u";function ub(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const xe=Object.assign;function hl(t,e){const n={};for(const s in e){const r=e[s];n[s]=Vt(r)?r.map(t):t(r)}return n}const jr=()=>{},Vt=Array.isArray,hb=/\/$/,db=t=>t.replace(hb,"");function dl(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=mb(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function fb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ed(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pb(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Js(e.matched[s],n.matched[r])&&Jp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Jp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gb(t[n],e[n]))return!1;return!0}function gb(t,e){return Vt(t)?td(t,e):Vt(e)?td(e,t):t===e}function td(t,e){return Vt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function mb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var ii;(function(t){t.pop="pop",t.push="push"})(ii||(ii={}));var qr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qr||(qr={}));function yb(t){if(!t)if(Ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),db(t)}const _b=/^[^#]+#/;function vb(t,e){return t.replace(_b,"#")+e}function wb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const xa=()=>({left:window.pageXOffset,top:window.pageYOffset});function bb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=wb(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function nd(t,e){return(history.state?history.state.position-e:-1)+t}const Yl=new Map;function Eb(t,e){Yl.set(t,e)}function Ib(t){const e=Yl.get(t);return Yl.delete(t),e}let Tb=()=>location.protocol+"//"+location.host;function Zp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),ed(l,"")}return ed(n,t)+s+r}function xb(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const f=Zp(t,location),m=n.value,b=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}v=b?d.position-b.position:0}else s(f);r.forEach(E=>{E(n.value,m,{delta:v,type:ii.pop,direction:v?v>0?qr.forward:qr.back:qr.unknown})})};function l(){o=n.value}function c(d){r.push(d);const f=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return i.push(f),f}function u(){const{history:d}=window;!d.state||d.replaceState(xe({},d.state,{scroll:xa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function sd(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?xa():null}}function kb(t){const{history:e,location:n}=window,s={value:Zp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Tb()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=xe({},e.state,sd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=xe({},r.value,e.state,{forward:l,scroll:xa()});i(u.current,u,!0);const h=xe({},sd(s.value,l,null),{position:u.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function Sb(t){t=yb(t);const e=kb(t),n=xb(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=xe({location:"",base:t,go:s,createHref:vb.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Cb(t){return typeof t=="string"||t&&typeof t=="object"}function eg(t){return typeof t=="string"||typeof t=="symbol"}const In={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tg=Symbol("");var rd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rd||(rd={}));function Zs(t,e){return xe(new Error,{type:t,[tg]:!0},e)}function Tn(t,e){return t instanceof Error&&tg in t&&(e==null||!!(t.type&e))}const id="[^/]+?",Ab={sensitive:!1,strict:!1,start:!0,end:!0},Rb=/[.+*?^${}()[\]/\\]/g;function Nb(t,e){const n=xe({},Ab,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(Rb,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:b,optional:v,regexp:E}=d;i.push({name:m,repeatable:b,optional:v});const w=E||id;if(w!==id){f+=10;try{new RegExp(`(${w})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${m}" (${w}): `+S.message)}}let C=b?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(C=v&&c.length<2?`(?:/${C})`:"/"+C),v&&(C+="?"),r+=C,f+=20,v&&(f+=-8),b&&(f+=-20),w===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",m=i[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:b,optional:v}=f,E=m in c?c[m]:"";if(Vt(E)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const w=Vt(E)?E.join("/"):E;if(!w)if(v)d.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=w}}return u}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Db(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ob(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Db(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(od(s))return 1;if(od(r))return-1}return r.length-s.length}function od(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pb={type:0,value:""},Lb=/[a-zA-Z0-9_]/;function Mb(t){if(!t)return[[]];if(t==="/")return[[Pb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function h(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:Lb.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function Ub(t,e,n){const s=Nb(Mb(t.path),n),r=xe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Fb(t,e){const n=[],s=new Map;e=ld({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const f=!d,m=Bb(u);m.aliasOf=d&&d.record;const b=ld(e,u),v=[m];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of C)v.push(xe({},m,{components:d?d.record.components:m.components,path:S,aliasOf:d?d.record:m}))}let E,w;for(const C of v){const{path:S}=C;if(h&&S[0]!=="/"){const Q=h.record.path,re=Q[Q.length-1]==="/"?"":"/";C.path=h.record.path+(S&&re+S)}if(E=Ub(C,h,b),d?d.alias.push(E):(w=w||E,w!==E&&w.alias.push(E),f&&u.name&&!ad(E)&&o(u.name)),m.children){const Q=m.children;for(let re=0;re<Q.length;re++)i(Q[re],E,d&&d.children[re])}d=d||E,l(E)}return w?()=>{o(w)}:jr}function o(u){if(eg(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&Ob(u,n[h])>=0&&(u.record.path!==n[h].record.path||!ng(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!ad(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},m,b;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Zs(1,{location:u});b=d.record.name,f=xe($b(h.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),u.params),m=d.stringify(f)}else if("path"in u)m=u.path,d=n.find(w=>w.re.test(m)),d&&(f=d.parse(m),b=d.record.name);else{if(d=h.name?s.get(h.name):n.find(w=>w.re.test(h.path)),!d)throw Zs(1,{location:u,currentLocation:h});b=d.record.name,f=xe({},h.params,u.params),m=d.stringify(f)}const v=[];let E=d;for(;E;)v.unshift(E.record),E=E.parent;return{name:b,path:m,params:f,matched:v,meta:jb(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function $b(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Bb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Vb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Vb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function ad(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jb(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function ld(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ng(t,e){return e.children.some(n=>n===t||ng(t,n))}const sg=/#/g,qb=/&/g,Hb=/\//g,Kb=/=/g,zb=/\?/g,rg=/\+/g,Wb=/%5B/g,Gb=/%5D/g,ig=/%5E/g,Xb=/%60/g,og=/%7B/g,Qb=/%7C/g,ag=/%7D/g,Yb=/%20/g;function Gc(t){return encodeURI(""+t).replace(Qb,"|").replace(Wb,"[").replace(Gb,"]")}function Jb(t){return Gc(t).replace(og,"{").replace(ag,"}").replace(ig,"^")}function Jl(t){return Gc(t).replace(rg,"%2B").replace(Yb,"+").replace(sg,"%23").replace(qb,"%26").replace(Xb,"`").replace(og,"{").replace(ag,"}").replace(ig,"^")}function Zb(t){return Jl(t).replace(Kb,"%3D")}function e0(t){return Gc(t).replace(sg,"%23").replace(zb,"%3F")}function t0(t){return t==null?"":e0(t).replace(Hb,"%2F")}function Po(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function n0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(rg," "),o=i.indexOf("="),a=Po(o<0?i:i.slice(0,o)),l=o<0?null:Po(i.slice(o+1));if(a in e){let c=e[a];Vt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function cd(t){let e="";for(let n in t){const s=t[n];if(n=Zb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vt(s)?s.map(i=>i&&Jl(i)):[s&&Jl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function s0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Vt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const r0=Symbol(""),ud=Symbol(""),ka=Symbol(""),lg=Symbol(""),Zl=Symbol("");function Sr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Cn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Zs(4,{from:n,to:e})):h instanceof Error?a(h):Cb(h)?a(Zs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(s&&s.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function fl(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(i0(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Cn(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=ub(c)?c.default:c;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Cn(d,n,s,i,o)()}))}}return r}function i0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hd(t){const e=cn(ka),n=cn(lg),s=yt(()=>e.resolve(ve(t.to))),r=yt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Js.bind(null,u));if(d>-1)return d;const f=dd(l[c-2]);return c>1&&dd(u)===f&&h[h.length-1].path!==f?h.findIndex(Js.bind(null,l[c-2])):d}),i=yt(()=>r.value>-1&&c0(n.params,s.value.params)),o=yt(()=>r.value>-1&&r.value===n.matched.length-1&&Jp(n.params,s.value.params));function a(l={}){return l0(l)?e[ve(t.replace)?"replace":"push"](ve(t.to)).catch(jr):Promise.resolve()}return{route:s,href:yt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const o0=xp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hd,setup(t,{slots:e}){const n=Ti(hd(t)),{options:s}=cn(ka),r=yt(()=>({[fd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[fd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:zc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),a0=o0;function l0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function c0(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Vt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function dd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fd=(t,e,n)=>t!=null?t:e!=null?e:n,u0=xp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=cn(Zl),r=yt(()=>t.route||s.value),i=cn(ud,0),o=yt(()=>{let c=ve(i);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=yt(()=>r.value.matched[o.value]);po(ud,yt(()=>o.value+1)),po(r0,a),po(Zl,r);const l=Ae();return Br(()=>[l.value,a.value,t.name],([c,u,h],[d,f,m])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Js(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=r.value,u=a.value,h=u&&u.components[t.name],d=t.name;if(!h)return pd(n.default,{Component:h,route:c});const f=u.props[t.name],m=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=zc(h,xe({},m,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return pd(n.default,{Component:v,route:c})||v}}});function pd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const cg=u0;function h0(t){const e=Fb(t.routes,t),n=t.parseQuery||n0,s=t.stringifyQuery||cd,r=t.history,i=Sr(),o=Sr(),a=Sr(),l=xv(In);let c=In;Ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hl.bind(null,I=>""+I),h=hl.bind(null,t0),d=hl.bind(null,Po);function f(I,B){let P,V;return eg(I)?(P=e.getRecordMatcher(I),V=B):V=I,e.addRoute(V,P)}function m(I){const B=e.getRecordMatcher(I);B&&e.removeRoute(B)}function b(){return e.getRoutes().map(I=>I.record)}function v(I){return!!e.getRecordMatcher(I)}function E(I,B){if(B=xe({},B||l.value),typeof I=="string"){const ae=dl(n,I,B.path),p=e.resolve({path:ae.path},B),g=r.createHref(ae.fullPath);return xe(ae,p,{params:d(p.params),hash:Po(ae.hash),redirectedFrom:void 0,href:g})}let P;if("path"in I)P=xe({},I,{path:dl(n,I.path,B.path).path});else{const ae=xe({},I.params);for(const p in ae)ae[p]==null&&delete ae[p];P=xe({},I,{params:h(I.params)}),B.params=h(B.params)}const V=e.resolve(P,B),Ee=I.hash||"";V.params=u(d(V.params));const Ce=fb(s,xe({},I,{hash:Jb(Ee),path:V.path})),ce=r.createHref(Ce);return xe({fullPath:Ce,hash:Ee,query:s===cd?s0(I.query):I.query||{}},V,{redirectedFrom:void 0,href:ce})}function w(I){return typeof I=="string"?dl(n,I,l.value.path):xe({},I)}function C(I,B){if(c!==I)return Zs(8,{from:B,to:I})}function S(I){return ue(I)}function Q(I){return S(xe(w(I),{replace:!0}))}function re(I){const B=I.matched[I.matched.length-1];if(B&&B.redirect){const{redirect:P}=B;let V=typeof P=="function"?P(I):P;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=w(V):{path:V},V.params={}),xe({query:I.query,hash:I.hash,params:"path"in V?{}:I.params},V)}}function ue(I,B){const P=c=E(I),V=l.value,Ee=I.state,Ce=I.force,ce=I.replace===!0,ae=re(P);if(ae)return ue(xe(w(ae),{state:Ee,force:Ce,replace:ce}),B||P);const p=P;p.redirectedFrom=B;let g;return!Ce&&pb(s,V,P)&&(g=Zs(16,{to:p,from:V}),As(V,V,!0,!1)),(g?Promise.resolve(g):oe(p,V)).catch(_=>Tn(_)?Tn(_,2)?_:Et(_):Se(_,p,V)).then(_=>{if(_){if(Tn(_,2))return ue(xe(w(_.to),{state:Ee,force:Ce,replace:ce}),B||p)}else _=Pe(p,V,!0,ce,Ee);return de(p,V,_),_})}function W(I,B){const P=C(I,B);return P?Promise.reject(P):Promise.resolve()}function oe(I,B){let P;const[V,Ee,Ce]=d0(I,B);P=fl(V.reverse(),"beforeRouteLeave",I,B);for(const ae of V)ae.leaveGuards.forEach(p=>{P.push(Cn(p,I,B))});const ce=W.bind(null,I,B);return P.push(ce),Ns(P).then(()=>{P=[];for(const ae of i.list())P.push(Cn(ae,I,B));return P.push(ce),Ns(P)}).then(()=>{P=fl(Ee,"beforeRouteUpdate",I,B);for(const ae of Ee)ae.updateGuards.forEach(p=>{P.push(Cn(p,I,B))});return P.push(ce),Ns(P)}).then(()=>{P=[];for(const ae of I.matched)if(ae.beforeEnter&&!B.matched.includes(ae))if(Vt(ae.beforeEnter))for(const p of ae.beforeEnter)P.push(Cn(p,I,B));else P.push(Cn(ae.beforeEnter,I,B));return P.push(ce),Ns(P)}).then(()=>(I.matched.forEach(ae=>ae.enterCallbacks={}),P=fl(Ce,"beforeRouteEnter",I,B),P.push(ce),Ns(P))).then(()=>{P=[];for(const ae of o.list())P.push(Cn(ae,I,B));return P.push(ce),Ns(P)}).catch(ae=>Tn(ae,8)?ae:Promise.reject(ae))}function de(I,B,P){for(const V of a.list())V(I,B,P)}function Pe(I,B,P,V,Ee){const Ce=C(I,B);if(Ce)return Ce;const ce=B===In,ae=Ms?history.state:{};P&&(V||ce?r.replace(I.fullPath,xe({scroll:ce&&ae&&ae.scroll},Ee)):r.push(I.fullPath,Ee)),l.value=I,As(I,B,P,ce),Et()}let U;function Ne(){U||(U=r.listen((I,B,P)=>{if(!Tr.listening)return;const V=E(I),Ee=re(V);if(Ee){ue(xe(Ee,{replace:!0}),V).catch(jr);return}c=V;const Ce=l.value;Ms&&Eb(nd(Ce.fullPath,P.delta),xa()),oe(V,Ce).catch(ce=>Tn(ce,12)?ce:Tn(ce,2)?(ue(ce.to,V).then(ae=>{Tn(ae,20)&&!P.delta&&P.type===ii.pop&&r.go(-1,!1)}).catch(jr),Promise.reject()):(P.delta&&r.go(-P.delta,!1),Se(ce,V,Ce))).then(ce=>{ce=ce||Pe(V,Ce,!1),ce&&(P.delta?r.go(-P.delta,!1):P.type===ii.pop&&Tn(ce,20)&&r.go(-1,!1)),de(V,Ce,ce)}).catch(jr)}))}let lt=Sr(),tn=Sr(),Ue;function Se(I,B,P){Et(I);const V=tn.list();return V.length?V.forEach(Ee=>Ee(I,B,P)):console.error(I),Promise.reject(I)}function be(){return Ue&&l.value!==In?Promise.resolve():new Promise((I,B)=>{lt.add([I,B])})}function Et(I){return Ue||(Ue=!I,Ne(),lt.list().forEach(([B,P])=>I?P(I):B()),lt.reset()),I}function As(I,B,P,V){const{scrollBehavior:Ee}=t;if(!Ms||!Ee)return Promise.resolve();const Ce=!P&&Ib(nd(I.fullPath,0))||(V||!P)&&history.state&&history.state.scroll||null;return dp().then(()=>Ee(I,B,Ce)).then(ce=>ce&&bb(ce)).catch(ce=>Se(ce,I,B))}const nn=I=>r.go(I);let qt;const At=new Set,Tr={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,hasRoute:v,getRoutes:b,resolve:E,options:t,push:S,replace:Q,go:nn,back:()=>nn(-1),forward:()=>nn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:tn.add,isReady:be,install(I){const B=this;I.component("RouterLink",a0),I.component("RouterView",cg),I.config.globalProperties.$router=B,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>ve(l)}),Ms&&!qt&&l.value===In&&(qt=!0,S(r.location).catch(Ee=>{}));const P={};for(const Ee in In)P[Ee]=yt(()=>l.value[Ee]);I.provide(ka,B),I.provide(lg,Ti(P)),I.provide(Zl,l);const V=I.unmount;At.add(I),I.unmount=function(){At.delete(I),At.size<1&&(c=In,U&&U(),U=null,l.value=In,qt=!1,Ue=!1),V()}}};return Tr}function Ns(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function d0(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Js(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Js(c,l))||r.push(l))}return[n,s,r]}function ug(){return cn(ka)}const f0="/assets/menu.0a0301f7.svg";/**
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
 */const hg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},p0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):p0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},g0=function(t){const e=hg(t);return dg.encodeByteArray(e,!0)},fg=function(t){return g0(t).replace(/\./g,"")},m0=function(t){try{return dg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class y0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function gg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _0(){return Ye().indexOf("Electron/")>=0}function yg(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function v0(){return Ye().indexOf("MSAppHost/")>=0}function w0(){return typeof indexedDB=="object"}function b0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const E0="FirebaseError";class Hn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=E0,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?I0(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Hn(r,a,s)}}function I0(t,e){return t.replace(T0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const T0=/\{\$([^}]+)}/g;function x0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(gd(i)&&gd(o)){if(!Lo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function gd(t){return t!==null&&typeof t=="object"}/**
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
 */function Ai(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Or(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Pr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function k0(t,e){const n=new S0(t,e);return n.subscribe.bind(n)}class S0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");C0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=pl),r.error===void 0&&(r.error=pl),r.complete===void 0&&(r.complete=pl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function C0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pl(){}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zn="[DEFAULT]";/**
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
 */class A0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new y0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(N0(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:R0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R0(t){return t===Zn?void 0:t}function N0(t){return t.instantiationMode==="EAGER"}/**
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
 */class D0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new A0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const O0={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},P0=me.INFO,L0={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},M0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=L0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xc{constructor(e){this.name=e,this._logLevel=P0,this._logHandler=M0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?O0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const U0=(t,e)=>e.some(n=>t instanceof n);let md,yd;function F0(){return md||(md=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $0(){return yd||(yd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _g=new WeakMap,ec=new WeakMap,vg=new WeakMap,gl=new WeakMap,Qc=new WeakMap;function B0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_g.set(n,t)}).catch(()=>{}),Qc.set(e,t),e}function V0(t){if(ec.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ec.set(t,e)}let tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ec.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function j0(t){tc=t(tc)}function q0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ml(this),e,...n);return vg.set(s,e.sort?e.sort():[e]),Mn(s)}:$0().includes(t)?function(...e){return t.apply(ml(this),e),Mn(_g.get(this))}:function(...e){return Mn(t.apply(ml(this),e))}}function H0(t){return typeof t=="function"?q0(t):(t instanceof IDBTransaction&&V0(t),U0(t,F0())?new Proxy(t,tc):t)}function Mn(t){if(t instanceof IDBRequest)return B0(t);if(gl.has(t))return gl.get(t);const e=H0(t);return e!==t&&(gl.set(t,e),Qc.set(e,t)),e}const ml=t=>Qc.get(t);function K0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Mn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Mn(o.result),l.oldVersion,l.newVersion,Mn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const z0=["get","getKey","getAll","getAllKeys","count"],W0=["put","add","delete","clear"],yl=new Map;function _d(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yl.get(e))return yl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=W0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||z0.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return yl.set(e,i),i}j0(t=>({...t,get:(e,n,s)=>_d(e,n)||t.get(e,n,s),has:(e,n)=>!!_d(e,n)||t.has(e,n)}));/**
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
 */class G0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(X0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function X0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nc="@firebase/app",vd="0.7.29";/**
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
 */const Yc=new Xc("@firebase/app"),Q0="@firebase/app-compat",Y0="@firebase/analytics-compat",J0="@firebase/analytics",Z0="@firebase/app-check-compat",eE="@firebase/app-check",tE="@firebase/auth",nE="@firebase/auth-compat",sE="@firebase/database",rE="@firebase/database-compat",iE="@firebase/functions",oE="@firebase/functions-compat",aE="@firebase/installations",lE="@firebase/installations-compat",cE="@firebase/messaging",uE="@firebase/messaging-compat",hE="@firebase/performance",dE="@firebase/performance-compat",fE="@firebase/remote-config",pE="@firebase/remote-config-compat",gE="@firebase/storage",mE="@firebase/storage-compat",yE="@firebase/firestore",_E="@firebase/firestore-compat",vE="firebase",wE="9.9.1";/**
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
 */const wg="[DEFAULT]",bE={[nc]:"fire-core",[Q0]:"fire-core-compat",[J0]:"fire-analytics",[Y0]:"fire-analytics-compat",[eE]:"fire-app-check",[Z0]:"fire-app-check-compat",[tE]:"fire-auth",[nE]:"fire-auth-compat",[sE]:"fire-rtdb",[rE]:"fire-rtdb-compat",[iE]:"fire-fn",[oE]:"fire-fn-compat",[aE]:"fire-iid",[lE]:"fire-iid-compat",[cE]:"fire-fcm",[uE]:"fire-fcm-compat",[hE]:"fire-perf",[dE]:"fire-perf-compat",[fE]:"fire-rc",[pE]:"fire-rc-compat",[gE]:"fire-gcs",[mE]:"fire-gcs-compat",[yE]:"fire-fst",[_E]:"fire-fst-compat","fire-js":"fire-js",[vE]:"fire-js-all"};/**
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
 */const Mo=new Map,sc=new Map;function EE(t,e){try{t.container.addComponent(e)}catch(n){Yc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gs(t){const e=t.name;if(sc.has(e))return Yc.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,t);for(const n of Mo.values())EE(n,t);return!0}function Sa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const IE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ms=new Ci("app","Firebase",IE);/**
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
 */class TE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
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
 */const hr=wE;function xE(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:wg,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw ms.create("bad-app-name",{appName:String(s)});const r=Mo.get(s);if(r){if(Lo(t,r.options)&&Lo(n,r.config))return r;throw ms.create("duplicate-app",{appName:s})}const i=new D0(s);for(const a of sc.values())i.addComponent(a);const o=new TE(t,n,i);return Mo.set(s,o),o}function Jc(t=wg){const e=Mo.get(t);if(!e)throw ms.create("no-app",{appName:t});return e}function Gt(t,e,n){var s;let r=(s=bE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yc.warn(a.join(" "));return}gs(new $n(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const kE="firebase-heartbeat-database",SE=1,oi="firebase-heartbeat-store";let _l=null;function bg(){return _l||(_l=K0(kE,SE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(oi)}}}).catch(t=>{throw ms.create("storage-open",{originalErrorMessage:t.message})})),_l}async function CE(t){var e;try{return(await bg()).transaction(oi).objectStore(oi).get(Eg(t))}catch(n){throw ms.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function wd(t,e){var n;try{const r=(await bg()).transaction(oi,"readwrite");return await r.objectStore(oi).put(e,Eg(t)),r.done}catch(s){throw ms.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function Eg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const AE=1024,RE=30*24*60*60*1e3;class NE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=RE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bd(),{heartbeatsToSend:n,unsentEntries:s}=DE(this._heartbeatsCache.heartbeats),r=fg(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function bd(){return new Date().toISOString().substring(0,10)}function DE(t,e=AE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ed(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ed(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class OE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w0()?b0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await CE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ed(t){return fg(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function PE(t){gs(new $n("platform-logger",e=>new G0(e),"PRIVATE")),gs(new $n("heartbeat",e=>new NE(e),"PRIVATE")),Gt(nc,vd,t),Gt(nc,vd,"esm2017"),Gt("fire-js","")}PE("");var LE="firebase",ME="9.9.1";/**
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
 */Gt(LE,ME,"app");var UE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Zc=Zc||{},Z=UE||self;function Uo(){}function rc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ri(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function FE(t){return Object.prototype.hasOwnProperty.call(t,vl)&&t[vl]||(t[vl]=++$E)}var vl="closure_uid_"+(1e9*Math.random()>>>0),$E=0;function BE(t,e,n){return t.call.apply(t.bind,arguments)}function VE(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=BE:st=VE,st.apply(null,arguments)}function so(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function at(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Kn(){this.s=this.s,this.o=this.o}var jE=0;Kn.prototype.s=!1;Kn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),jE!=0)&&FE(this)};Kn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ig=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Tg=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function qE(t){e:{var e=PI;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Id(t){return Array.prototype.concat.apply([],arguments)}function eu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Fo(t){return/^[\s\xa0]*$/.test(t)}var Td=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function gt(t,e){return t.indexOf(e)!=-1}function wl(t,e){return t<e?-1:t>e?1:0}var mt;e:{var xd=Z.navigator;if(xd){var kd=xd.userAgent;if(kd){mt=kd;break e}}mt=""}function tu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function xg(t){const e={};for(const n in t)e[n]=t[n];return e}var Sd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Sd.length;i++)n=Sd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function nu(t){return nu[" "](t),t}nu[" "]=Uo;function HE(t){var e=WE;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var KE=gt(mt,"Opera"),er=gt(mt,"Trident")||gt(mt,"MSIE"),Sg=gt(mt,"Edge"),ic=Sg||er,Cg=gt(mt,"Gecko")&&!(gt(mt.toLowerCase(),"webkit")&&!gt(mt,"Edge"))&&!(gt(mt,"Trident")||gt(mt,"MSIE"))&&!gt(mt,"Edge"),zE=gt(mt.toLowerCase(),"webkit")&&!gt(mt,"Edge");function Ag(){var t=Z.document;return t?t.documentMode:void 0}var $o;e:{var bl="",El=function(){var t=mt;if(Cg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Sg)return/Edge\/([\d\.]+)/.exec(t);if(er)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(zE)return/WebKit\/(\S+)/.exec(t);if(KE)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(El&&(bl=El?El[1]:""),er){var Il=Ag();if(Il!=null&&Il>parseFloat(bl)){$o=String(Il);break e}}$o=bl}var WE={};function GE(){return HE(function(){let t=0;const e=Td(String($o)).split("."),n=Td("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=wl(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||wl(r[2].length==0,i[2].length==0)||wl(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var oc;if(Z.document&&er){var Cd=Ag();oc=Cd||parseInt($o,10)||void 0}else oc=void 0;var XE=oc,QE=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",Uo,e),Z.removeEventListener("test",Uo,e)}catch{}return t}();function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};function ai(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Cg){e:{try{nu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:YE[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ai.Z.h.call(this)}}at(ai,dt);var YE={2:"touch",3:"pen",4:"mouse"};ai.prototype.h=function(){ai.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ni="closure_listenable_"+(1e6*Math.random()|0),JE=0;function ZE(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++JE,this.ca=this.fa=!1}function Ca(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Aa(t){this.src=t,this.g={},this.h=0}Aa.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=lc(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ZE(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function ac(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Ig(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ca(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function lc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var su="closure_lm_"+(1e6*Math.random()|0),Tl={};function Rg(t,e,n,s,r){if(s&&s.once)return Dg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Rg(t,e[i],n,s,r);return null}return n=ou(n),t&&t[Ni]?t.N(e,n,Ri(s)?!!s.capture:!!s,r):Ng(t,e,n,!1,s,r)}function Ng(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ri(r)?!!r.capture:!!r,a=iu(t);if(a||(t[su]=a=new Aa(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=eI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)QE||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Pg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eI(){function t(n){return e.call(t.src,t.listener,n)}var e=tI;return t}function Dg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Dg(t,e[i],n,s,r);return null}return n=ou(n),t&&t[Ni]?t.O(e,n,Ri(s)?!!s.capture:!!s,r):Ng(t,e,n,!0,s,r)}function Og(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Og(t,e[i],n,s,r);else s=Ri(s)?!!s.capture:!!s,n=ou(n),t&&t[Ni]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=lc(i,n,s,r),-1<n&&(Ca(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=iu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lc(e,n,s,r)),(n=-1<t?e[t]:null)&&ru(n))}function ru(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ni])ac(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Pg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=iu(e))?(ac(n,t),n.h==0&&(n.src=null,e[su]=null)):Ca(t)}}}function Pg(t){return t in Tl?Tl[t]:Tl[t]="on"+t}function tI(t,e){if(t.ca)t=!0;else{e=new ai(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&ru(t),t=n.call(s,e)}return t}function iu(t){return t=t[su],t instanceof Aa?t:null}var xl="__closure_events_fn_"+(1e9*Math.random()>>>0);function ou(t){return typeof t=="function"?t:(t[xl]||(t[xl]=function(e){return t.handleEvent(e)}),t[xl])}function Ze(){Kn.call(this),this.i=new Aa(this),this.P=this,this.I=null}at(Ze,Kn);Ze.prototype[Ni]=!0;Ze.prototype.removeEventListener=function(t,e,n,s){Og(this,t,e,n,s)};function rt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var r=e;e=new dt(s,t),kg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ro(o,s,!0,e)&&r}if(o=e.g=t,r=ro(o,s,!0,e)&&r,r=ro(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ro(o,s,!1,e)&&r}Ze.prototype.M=function(){if(Ze.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ca(n[s]);delete t.g[e],t.h--}}this.I=null};Ze.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ze.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ro(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&ac(t.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var au=Z.JSON.stringify;function nI(){var t=Mg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sI{constructor(){this.h=this.g=null}add(e,n){const s=Lg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Lg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new rI,t=>t.reset());class rI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function iI(t){Z.setTimeout(()=>{throw t},0)}function lu(t,e){cc||oI(),uc||(cc(),uc=!0),Mg.add(t,e)}var cc;function oI(){var t=Z.Promise.resolve(void 0);cc=function(){t.then(aI)}}var uc=!1,Mg=new sI;function aI(){for(var t;t=nI();){try{t.h.call(t.g)}catch(n){iI(n)}var e=Lg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}uc=!1}function Ra(t,e){Ze.call(this),this.h=t||1,this.g=e||Z,this.j=st(this.kb,this),this.l=Date.now()}at(Ra,Ze);M=Ra.prototype;M.da=!1;M.S=null;M.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),rt(this,"tick"),this.da&&(cu(this),this.start()))}};M.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cu(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}M.M=function(){Ra.Z.M.call(this),cu(this),delete this.g};function uu(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function Ug(t){t.g=uu(()=>{t.g=null,t.i&&(t.i=!1,Ug(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lI extends Kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ug(this)}M(){super.M(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function li(t){Kn.call(this),this.h=t,this.g={}}at(li,Kn);var Ad=[];function Fg(t,e,n,s){Array.isArray(n)||(n&&(Ad[0]=n.toString()),n=Ad);for(var r=0;r<n.length;r++){var i=Rg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function $g(t){tu(t.g,function(e,n){this.g.hasOwnProperty(n)&&ru(e)},t),t.g={}}li.prototype.M=function(){li.Z.M.call(this),$g(this)};li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Na(){this.g=!0}Na.prototype.Aa=function(){this.g=!1};function cI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function uI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Fs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dI(t,n)+(s?" "+s:"")})}function hI(t,e){t.info(function(){return"TIMEOUT: "+e})}Na.prototype.info=function(){};function dI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return au(n)}catch{return e}}var ks={},Rd=null;function Da(){return Rd=Rd||new Ze}ks.Ma="serverreachability";function Bg(t){dt.call(this,ks.Ma,t)}at(Bg,dt);function ci(t){const e=Da();rt(e,new Bg(e))}ks.STAT_EVENT="statevent";function Vg(t,e){dt.call(this,ks.STAT_EVENT,t),this.stat=e}at(Vg,dt);function _t(t){const e=Da();rt(e,new Vg(e,t))}ks.Na="timingevent";function jg(t,e){dt.call(this,ks.Na,t),this.size=e}at(jg,dt);function Di(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var Oa={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},qg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function hu(){}hu.prototype.h=null;function Nd(t){return t.h||(t.h=t.i())}function Hg(){}var Oi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function du(){dt.call(this,"d")}at(du,dt);function fu(){dt.call(this,"c")}at(fu,dt);var hc;function Pa(){}at(Pa,hu);Pa.prototype.g=function(){return new XMLHttpRequest};Pa.prototype.i=function(){return{}};hc=new Pa;function Pi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new li(this),this.P=fI,t=ic?125:void 0,this.W=new Ra(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Kg}function Kg(){this.i=null,this.g="",this.h=!1}var fI=45e3,dc={},Bo={};M=Pi.prototype;M.setTimeout=function(t){this.P=t};function fc(t,e,n){t.K=1,t.v=Ma(mn(e)),t.s=n,t.U=!0,zg(t,null)}function zg(t,e){t.F=Date.now(),Li(t),t.A=mn(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Zg(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Kg,t.g=vm(t.l,n?e:null,!t.s),0<t.O&&(t.L=new lI(st(t.Ia,t,t.g),t.O)),Fg(t.V,t.g,"readystatechange",t.gb),e=t.H?xg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ci(),cI(t.j,t.u,t.A,t.m,t.X,t.s)}M.gb=function(t){t=t.target;const e=this.L;e&&on(t)==3?e.l():this.Ia(t)};M.Ia=function(t){try{if(t==this.g)e:{const u=on(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||ic||this.g&&(this.h.h||this.g.ga()||Ld(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ci(3):ci(2)),La(this);var n=this.g.ba();this.N=n;t:if(Wg(this)){var s=Ld(this.g);t="";var r=s.length,i=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){is(this),Hr(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,uI(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fo(a)){var c=a;break t}}c=null}if(n=c)Fs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,pc(this,n);else{this.i=!1,this.o=3,_t(12),is(this),Hr(this);break e}}this.U?(Gg(this,u,o),ic&&this.i&&u==3&&(Fg(this.V,this.W,"tick",this.fb),this.W.start())):(Fs(this.j,this.m,o,null),pc(this,o)),u==4&&is(this),this.i&&!this.I&&(u==4?gm(this.l,this):(this.i=!1,Li(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,_t(12)):(this.o=0,_t(13)),is(this),Hr(this)}}}catch{}finally{}};function Wg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Gg(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=pI(t,n),r==Bo){e==4&&(t.o=4,_t(14),s=!1),Fs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==dc){t.o=4,_t(15),Fs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Fs(t.j,t.m,r,null),pc(t,r);Wg(t)&&r!=Bo&&r!=dc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,_t(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Eu(e),e.L=!0,_t(11))):(Fs(t.j,t.m,n,"[Invalid Chunked Response]"),is(t),Hr(t))}M.fb=function(){if(this.g){var t=on(this.g),e=this.g.ga();this.C<e.length&&(La(this),Gg(this,t,e),this.i&&t!=4&&Li(this))}};function pI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Bo:(n=Number(e.substring(n,s)),isNaN(n)?dc:(s+=1,s+n>e.length?Bo:(e=e.substr(s,n),t.C=s+n,e)))}M.cancel=function(){this.I=!0,is(this)};function Li(t){t.Y=Date.now()+t.P,Xg(t,t.P)}function Xg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Di(st(t.eb,t),e)}function La(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}M.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(hI(this.j,this.A),this.K!=2&&(ci(),_t(17)),is(this),this.o=2,Hr(this)):Xg(this,this.Y-t)};function Hr(t){t.l.G==0||t.I||gm(t.l,t)}function is(t){La(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,cu(t.W),$g(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function pc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||gc(n.i,t))){if(n.I=t.N,!t.J&&gc(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ho(n),$a(n);else break e;bu(n),_t(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Di(st(n.ab,n),6e3));if(1>=nm(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else os(n,11)}else if((t.J||n.g==t)&&Ho(n),!Fo(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.i;!i.g&&(gt(m,"spdy")||gt(m,"quic")||gt(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(mu(i,i.h),i.h=null))}if(s.D){const b=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.sa=b,Le(s.F,s.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=_m(s,s.H?s.la:null,s.W),o.J){sm(s.i,o);var a=o,l=s.K;l&&a.setTimeout(l),a.B&&(La(a),Li(a)),s.g=o}else fm(s);0<n.l.length&&Ba(n)}else c[0]!="stop"&&c[0]!="close"||os(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?os(n,7):wu(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}ci(4)}catch{}}function gI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(rc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function pu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(rc(t)||typeof t=="string")Tg(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(rc(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=gI(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function dr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof dr)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}M=dr.prototype;M.R=function(){gu(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};M.T=function(){return gu(this),this.g.concat()};function gu(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];ys(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],ys(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}M.get=function(t,e){return ys(this.h,t)?this.h[t]:e};M.set=function(t,e){ys(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};M.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function ys(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Qg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function mI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function _s(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof _s){this.g=e!==void 0?e:t.g,Vo(this,t.j),this.s=t.s,jo(this,t.i),qo(this,t.m),this.l=t.l,e=t.h;var n=new ui;n.i=e.i,e.g&&(n.g=new dr(e.g),n.h=e.h),Dd(this,n),this.o=t.o}else t&&(n=String(t).match(Qg))?(this.g=!!e,Vo(this,n[1]||"",!0),this.s=Kr(n[2]||""),jo(this,n[3]||"",!0),qo(this,n[4]),this.l=Kr(n[5]||"",!0),Dd(this,n[6]||"",!0),this.o=Kr(n[7]||"")):(this.g=!!e,this.h=new ui(null,this.g))}_s.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Lr(e,Od,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Lr(e,Od,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Lr(n,n.charAt(0)=="/"?bI:wI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Lr(n,II)),t.join("")};function mn(t){return new _s(t)}function Vo(t,e,n){t.j=n?Kr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jo(t,e,n){t.i=n?Kr(e,!0):e}function qo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Dd(t,e,n){e instanceof ui?(t.h=e,TI(t.h,t.g)):(n||(e=Lr(e,EI)),t.h=new ui(e,t.g))}function Le(t,e,n){t.h.set(e,n)}function Ma(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yI(t){return t instanceof _s?mn(t):new _s(t,void 0)}function _I(t,e,n,s){var r=new _s(null,void 0);return t&&Vo(r,t),e&&jo(r,e),n&&qo(r,n),s&&(r.l=s),r}function Kr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Lr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Od=/[#\/\?@]/g,wI=/[#\?:]/g,bI=/[#\?]/g,EI=/[#\?@]/g,II=/#/g;function ui(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zn(t){t.g||(t.g=new dr,t.h=0,t.i&&mI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=ui.prototype;M.add=function(t,e){zn(this),this.i=null,t=fr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Yg(t,e){zn(t),e=fr(t,e),ys(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ys(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&gu(t)))}function Jg(t,e){return zn(t),e=fr(t,e),ys(t.g.h,e)}M.forEach=function(t,e){zn(this),this.g.forEach(function(n,s){Tg(n,function(r){t.call(e,r,s,this)},this)},this)};M.T=function(){zn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};M.R=function(t){zn(this);var e=[];if(typeof t=="string")Jg(this,t)&&(e=Id(e,this.g.get(fr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Id(e,t[n])}return e};M.set=function(t,e){return zn(this),this.i=null,t=fr(this,t),Jg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Zg(t,e,n){Yg(t,e),0<n.length&&(t.i=null,t.g.set(fr(t,e),eu(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function fr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function TI(t,e){e&&!t.j&&(zn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Yg(this,s),Zg(this,r,n))},t)),t.j=e}var xI=class{constructor(t,e){this.h=t,this.g=e}};function em(t){this.l=t||kI,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ea&&Z.g.Ea()&&Z.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kI=10;function tm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function nm(t){return t.h?1:t.g?t.g.size:0}function gc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function mu(t,e){t.g?t.g.add(e):t.h=e}function sm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}em.prototype.cancel=function(){if(this.i=rm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return eu(t.i)}function yu(){}yu.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)};yu.prototype.parse=function(t){return Z.JSON.parse(t,void 0)};function SI(){this.g=new yu}function CI(t,e,n){const s=n||"";try{pu(t,function(r,i){let o=r;Ri(r)&&(o=au(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function AI(t,e){const n=new Na;if(Z.Image){const s=new Image;s.onload=so(io,n,s,"TestLoadImage: loaded",!0,e),s.onerror=so(io,n,s,"TestLoadImage: error",!1,e),s.onabort=so(io,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=so(io,n,s,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function io(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Mi(t){this.l=t.$b||null,this.j=t.ib||!1}at(Mi,hu);Mi.prototype.g=function(){return new Ua(this.l,this.j)};Mi.prototype.i=function(t){return function(){return t}}({});function Ua(t,e){Ze.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=_u,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}at(Ua,Ze);var _u=0;M=Ua.prototype;M.open=function(t,e){if(this.readyState!=_u)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hi(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Z).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ui(this)),this.readyState=_u};M.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hi(this)),this.g&&(this.readyState=3,hi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;im(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function im(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}M.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ui(this):hi(this),this.readyState==3&&im(this)}};M.Ua=function(t){this.g&&(this.response=this.responseText=t,Ui(this))};M.Ta=function(t){this.g&&(this.response=t,Ui(this))};M.ha=function(){this.g&&Ui(this)};function Ui(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hi(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function hi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var RI=Z.JSON.parse;function qe(t){Ze.call(this),this.headers=new dr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=om,this.K=this.L=!1}at(qe,Ze);var om="",NI=/^https?$/i,DI=["POST","PUT"];M=qe.prototype;M.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():hc.g(),this.C=this.u?Nd(this.u):Nd(hc),this.g.onreadystatechange=st(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Pd(this,i);return}t=n||"";const r=new dr(this.headers);s&&pu(s,function(i,o){r.set(o,i)}),s=qE(r.T()),n=Z.FormData&&t instanceof Z.FormData,!(0<=Ig(DI,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{cm(this),0<this.B&&((this.K=OI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.pa,this)):this.A=uu(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Pd(this,i)}};function OI(t){return er&&GE()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function PI(t){return t.toLowerCase()=="content-type"}M.pa=function(){typeof Zc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function Pd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,am(t),Fa(t)}function am(t){t.D||(t.D=!0,rt(t,"complete"),rt(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,rt(this,"complete"),rt(this,"abort"),Fa(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fa(this,!0)),qe.Z.M.call(this)};M.Fa=function(){this.s||(this.F||this.v||this.l?lm(this):this.cb())};M.cb=function(){lm(this)};function lm(t){if(t.h&&typeof Zc<"u"&&(!t.C[1]||on(t)!=4||t.ba()!=2)){if(t.v&&on(t)==4)uu(t.Fa,0,t);else if(rt(t,"readystatechange"),on(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Qg)[1]||null;if(!r&&Z.self&&Z.self.location){var i=Z.self.location.protocol;r=i.substr(0,i.length-1)}s=!NI.test(r?r.toLowerCase():"")}n=s}if(n)rt(t,"complete"),rt(t,"success");else{t.m=6;try{var o=2<on(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",am(t)}}finally{Fa(t)}}}}function Fa(t,e){if(t.g){cm(t);const n=t.g,s=t.C[0]?Uo:null;t.g=null,t.C=null,e||rt(t,"ready");try{n.onreadystatechange=s}catch{}}}function cm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function on(t){return t.g?t.g.readyState:0}M.ba=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}};M.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),RI(e)}};function Ld(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case om:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Da=function(){return this.m};M.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function LI(t){let e="";return tu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function vu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=LI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function Cr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function um(t){this.za=0,this.l=[],this.h=new Na,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Cr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Cr("baseRetryDelayMs",5e3,t),this.$a=Cr("retryDelaySeedMs",1e4,t),this.Ya=Cr("forwardChannelMaxRetries",2,t),this.ra=Cr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new em(t&&t.concurrentRequestLimit),this.Ca=new SI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}M=um.prototype;M.ma=8;M.G=1;function wu(t){if(hm(t),t.G==3){var e=t.V++,n=mn(t.F);Le(n,"SID",t.J),Le(n,"RID",e),Le(n,"TYPE","terminate"),Fi(t,n),e=new Pi(t,t.h,e,void 0),e.K=2,e.v=Ma(mn(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon&&(n=Z.navigator.sendBeacon(e.v.toString(),"")),!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=vm(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Li(e)}ym(t)}M.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function $a(t){t.g&&(Eu(t),t.g.cancel(),t.g=null)}function hm(t){$a(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Ho(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function kl(t,e){t.l.push(new xI(t.Za++,e)),t.G==3&&Ba(t)}function Ba(t){tm(t.i)||t.m||(t.m=!0,lu(t.Ha,t),t.C=0)}function MI(t,e){return nm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Di(st(t.Ha,t,e),mm(t,t.C)),t.C++,!0)}M.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Pi(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=xg(i),kg(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=dm(this,r,e),n=mn(this.F),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),Fi(this,n),this.o&&i&&vu(n,this.o,i),mu(this.i,r),this.Ra&&Le(n,"TYPE","init"),this.ja?(Le(n,"$req",e),Le(n,"SID","null"),r.$=!0,fc(r,n,null)):fc(r,n,e),this.G=2}}else this.G==3&&(t?Md(this,t):this.l.length==0||tm(this.i)||Md(this))};function Md(t,e){var n;e?n=e.m:n=t.V++;const s=mn(t.F);Le(s,"SID",t.J),Le(s,"RID",n),Le(s,"AID",t.U),Fi(t,s),t.o&&t.s&&vu(s,t.o,t.s),n=new Pi(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=dm(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),mu(t.i,n),fc(n,s,e)}function Fi(t,e){t.j&&pu({},function(n,s){Le(e,s,n)})}function dm(t,e,n){n=Math.min(t.l.length,n);var s=t.j?st(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=i,0>c)i=Math.max(0,r[l].h-100),a=!1;else try{CI(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function fm(t){t.g||t.u||(t.Y=1,lu(t.Ga,t),t.A=0)}function bu(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Di(st(t.Ga,t),mm(t,t.A)),t.A++,!0)}M.Ga=function(){if(this.u=null,pm(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Di(st(this.bb,this),t)}};M.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,_t(10),$a(this),pm(this))};function Eu(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function pm(t){t.g=new Pi(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=mn(t.oa);Le(e,"RID","rpc"),Le(e,"SID",t.J),Le(e,"CI",t.N?"0":"1"),Le(e,"AID",t.U),Fi(t,e),Le(e,"TYPE","xmlhttp"),t.o&&t.s&&vu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ma(mn(e)),n.s=null,n.U=!0,zg(n,t)}M.ab=function(){this.v!=null&&(this.v=null,$a(this),bu(this),_t(19))};function Ho(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function gm(t,e){var n=null;if(t.g==e){Ho(t),Eu(t),t.g=null;var s=2}else if(gc(t.i,e))n=e.D,sm(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Da(),rt(s,new jg(s,n)),Ba(t)}else fm(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&MI(t,e)||s==2&&bu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:os(t,5);break;case 4:os(t,10);break;case 3:os(t,6);break;default:os(t,2)}}}function mm(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function os(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=st(t.jb,t);n||(n=new _s("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||Vo(n,"https"),Ma(n)),AI(n.toString(),s)}else _t(2);t.G=0,t.j&&t.j.va(e),ym(t),hm(t)}M.jb=function(t){t?(this.h.info("Successfully pinged google.com"),_t(2)):(this.h.info("Failed to ping google.com"),_t(1))};function ym(t){t.G=0,t.I=-1,t.j&&((rm(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,eu(t.l),t.l.length=0),t.j.ua())}function _m(t,e,n){let s=yI(n);if(s.i!="")e&&jo(s,e+"."+s.i),qo(s,s.m);else{const r=Z.location;s=_I(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&tu(t.aa,function(r,i){Le(s,i,r)}),e=t.D,n=t.sa,e&&n&&Le(s,e,n),Le(s,"VER",t.ma),Fi(t,s),s}function vm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new qe(new Mi({ib:!0})):new qe(t.qa),e.L=t.H,e}function wm(){}M=wm.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Oa=function(){};function Ko(){if(er&&!(10<=Number(XE)))throw Error("Environmental error: no available transport.")}Ko.prototype.g=function(t,e){return new Ct(t,e)};function Ct(t,e){Ze.call(this),this.g=new um(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Fo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new pr(this)}at(Ct,Ze);Ct.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),lu(st(t.hb,t,e))),_t(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=_m(t,null,t.W),Ba(t)};Ct.prototype.close=function(){wu(this.g)};Ct.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,kl(this.g,e)}else this.v?(e={},e.__data__=au(t),kl(this.g,e)):kl(this.g,t)};Ct.prototype.M=function(){this.g.j=null,delete this.j,wu(this.g),delete this.g,Ct.Z.M.call(this)};function bm(t){du.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}at(bm,du);function Em(){fu.call(this),this.status=1}at(Em,fu);function pr(t){this.g=t}at(pr,wm);pr.prototype.xa=function(){rt(this.g,"a")};pr.prototype.wa=function(t){rt(this.g,new bm(t))};pr.prototype.va=function(t){rt(this.g,new Em)};pr.prototype.ua=function(){rt(this.g,"b")};Ko.prototype.createWebChannel=Ko.prototype.g;Ct.prototype.send=Ct.prototype.u;Ct.prototype.open=Ct.prototype.m;Ct.prototype.close=Ct.prototype.close;Oa.NO_ERROR=0;Oa.TIMEOUT=8;Oa.HTTP_ERROR=6;qg.COMPLETE="complete";Hg.EventType=Oi;Oi.OPEN="a";Oi.CLOSE="b";Oi.ERROR="c";Oi.MESSAGE="d";Ze.prototype.listen=Ze.prototype.N;qe.prototype.listenOnce=qe.prototype.O;qe.prototype.getLastError=qe.prototype.La;qe.prototype.getLastErrorCode=qe.prototype.Da;qe.prototype.getStatus=qe.prototype.ba;qe.prototype.getResponseJson=qe.prototype.Qa;qe.prototype.getResponseText=qe.prototype.ga;qe.prototype.send=qe.prototype.ea;var UI=function(){return new Ko},FI=function(){return Da()},Sl=Oa,$I=qg,BI=ks,Ud={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},VI=Mi,oo=Hg,jI=qe;const Fd="@firebase/firestore";/**
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
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let gr="9.9.1";/**
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
 */const vs=new Xc("@firebase/firestore");function $d(){return vs.logLevel}function j(t,...e){if(vs.logLevel<=me.DEBUG){const n=e.map(Iu);vs.debug(`Firestore (${gr}): ${t}`,...n)}}function Bn(t,...e){if(vs.logLevel<=me.ERROR){const n=e.map(Iu);vs.error(`Firestore (${gr}): ${t}`,...n)}}function Bd(t,...e){if(vs.logLevel<=me.WARN){const n=e.map(Iu);vs.warn(`Firestore (${gr}): ${t}`,...n)}}function Iu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function te(t="Unexpected state"){const e=`FIRESTORE (${gr}) INTERNAL ASSERTION FAILED: `+t;throw Bn(e),new Error(e)}function Re(t,e){t||te()}function se(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class us{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class qI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class KI{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new us;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new us,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new us)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Re(typeof s.accessToken=="string"),new qI(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new wt(e)}}class zI{constructor(e,n,s){this.type="FirstParty",this.user=wt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class WI{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new zI(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XI{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.p=n.token,new GI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function QI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Im{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=QI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function _e(t,e){return t<e?-1:t>e?1:0}function tr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ke(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new Ke(0,0))}static max(){return new le(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class di{constructor(e,n,s){n===void 0?n=0:n>e.length&&te(),s===void 0?s=e.length-n:s>e.length-n&&te(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof di?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends di{construct(e,n,s){return new Oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const YI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends di{construct(e,n,s){return new ut(e,n,s)}static isValidIdentifier(e){return YI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new F(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new F(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new F(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Oe.fromString(e))}static fromName(e){return new H(Oe.fromString(e).popFirst(5))}static empty(){return new H(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Oe(e.slice()))}}function JI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=le.fromTimestamp(s===1e9?new Ke(n+1,0):new Ke(n,s));return new Vn(r,H.empty(),e)}function ZI(t){return new Vn(t.readTime,t.key,-1)}class Vn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Vn(le.min(),H.empty(),-1)}static max(){return new Vn(le.max(),H.empty(),-1)}}function eT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
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
 */const tT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $i(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==tT)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,s)=>{n(e)})}static reject(e){return new R((n,s)=>{s(e)})}static waitFor(e){return new R((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=R.resolve(!1);for(const s of e)n=n.next(r=>r?R.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new R((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new R((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Bi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Tu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function Vd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Tm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Tu.ot=-1;class We{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ao(this.root,e,this.comparator,!0)}}class ao{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:tt.RED,this.left=r!=null?r:tt.EMPTY,this.right=i!=null?i:tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new tt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return tt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(t,e,n,s,r){return this}insert(t,e,n){return new tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jd(this.data.getIterator())}getIteratorFrom(e){return new jd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class jd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new ze(ut.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return tr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const sT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jn(t){if(Re(!!t),typeof t=="string"){let e=0;const n=sT.exec(t);if(Re(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function nr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */function xm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function km(t){const e=t.mapValue.fields.__previous_value__;return xm(e)?km(e):e}function fi(t){const e=jn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class rT{constructor(e,n,s,r,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class sr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new sr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Va(t){return t==null}function zo(t){return t===0&&1/t==-1/0}function iT(t){return typeof t=="number"&&Number.isInteger(t)&&!zo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const lo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ws(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xm(t)?4:oT(t)?9007199254740991:10:te()}function en(t,e){if(t===e)return!0;const n=ws(t);if(n!==ws(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fi(t).isEqual(fi(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=jn(s.timestampValue),o=jn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return nr(s.bytesValue).isEqual(nr(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ve(s.geoPointValue.latitude)===Ve(r.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ve(s.integerValue)===Ve(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ve(s.doubleValue),o=Ve(r.doubleValue);return i===o?zo(i)===zo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return tr(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Vd(i)!==Vd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!en(i[a],o[a])))return!1;return!0}(t,e);default:return te()}}function pi(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function rr(t,e){if(t===e)return 0;const n=ws(t),s=ws(e);if(n!==s)return _e(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ve(r.integerValue||r.doubleValue),a=Ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return qd(t.timestampValue,e.timestampValue);case 4:return qd(fi(t),fi(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(r,i){const o=nr(r),a=nr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=_e(o[l],a[l]);if(c!==0)return c}return _e(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=_e(Ve(r.latitude),Ve(i.latitude));return o!==0?o:_e(Ve(r.longitude),Ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=rr(o[l],a[l]);if(c)return c}return _e(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===lo.mapValue&&i===lo.mapValue)return 0;if(r===lo.mapValue)return 1;if(i===lo.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=_e(a[u],c[u]);if(h!==0)return h;const d=rr(o[a[u]],l[c[u]]);if(d!==0)return d}return _e(a.length,c.length)}(t.mapValue,e.mapValue);default:throw te()}}function qd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=jn(t),s=jn(e),r=_e(n.seconds,s.seconds);return r!==0?r:_e(n.nanos,s.nanos)}function zs(t){return mc(t)}function mc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=jn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?nr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=mc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${mc(s.fields[a])}`;return i+"}"}(t.mapValue):te();var e,n}function Hd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yc(t){return!!t&&"integerValue"in t}function xu(t){return!!t&&"arrayValue"in t}function Kd(t){return!!t&&"nullValue"in t}function zd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yo(t){return!!t&&"mapValue"in t}function zr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return mr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=zr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zr(n)}setAll(e){let n=ut.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=zr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];yo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){mr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Dt(zr(this.value))}}function Sm(t){const e=[];return mr(t.fields,(n,s)=>{const r=new ut([n]);if(yo(s)){const i=Sm(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Xt(e)}/**
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
 */class nt{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new nt(e,0,le.min(),le.min(),Dt.empty(),0)}static newFoundDocument(e,n,s){return new nt(e,1,n,le.min(),s,0)}static newNoDocument(e,n){return new nt(e,2,n,le.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,le.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class aT{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Wd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new aT(t,e,n,s,r,i,o)}function ku(t){const e=se(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+zs(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Va(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>zs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>zs(s)).join(",")),e.ut=n}return e.ut}function lT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${zs(s.value)}`;var s}).join(", ")}]`),Va(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>zs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>zs(n)).join(",")),`Target(${e})`}function Su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!mT(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!en(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xd(t.startAt,e.startAt)&&Xd(t.endAt,e.endAt)}function _c(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class vt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new cT(e,n,s):n==="array-contains"?new dT(e,s):n==="in"?new fT(e,s):n==="not-in"?new pT(e,s):n==="array-contains-any"?new gT(e,s):new vt(e,n,s)}static ct(e,n,s){return n==="in"?new uT(e,s):new hT(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(rr(n,this.value)):n!==null&&ws(this.value)===ws(n)&&this.at(rr(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class cT extends vt{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.at(n)}}class uT extends vt{constructor(e,n){super(e,"in",n),this.keys=Cm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hT extends vt{constructor(e,n){super(e,"not-in",n),this.keys=Cm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class dT extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xu(n)&&pi(n.arrayValue,this.value)}}class fT extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pi(this.value.arrayValue,n)}}class pT extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pi(this.value.arrayValue,n)}}class gT extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>pi(this.value.arrayValue,s))}}class Wo{constructor(e,n){this.position=e,this.inclusive=n}}class Ws{constructor(e,n="asc"){this.field=e,this.dir=n}}function mT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Gd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=rr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Xd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class yr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function yT(t,e,n,s,r,i,o,a){return new yr(t,e,n,s,r,i,o,a)}function Cu(t){return new yr(t)}function _T(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Au(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ru(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Am(t){return t.collectionGroup!==null}function gi(t){const e=se(t);if(e.lt===null){e.lt=[];const n=Ru(e),s=Au(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new Ws(n)),e.lt.push(new Ws(ut.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Ws(ut.keyField(),i))}}}return e.lt}function bs(t){const e=se(t);if(!e.ft)if(e.limitType==="F")e.ft=Wd(e.path,e.collectionGroup,gi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of gi(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ws(i.field,o))}const s=e.endAt?new Wo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Wo(e.startAt.position,e.startAt.inclusive):null;e.ft=Wd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.ft}function vT(t,e,n){return new yr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ja(t,e){return Su(bs(t),bs(e))&&t.limitType===e.limitType}function Rm(t){return`${ku(bs(t))}|lt:${t.limitType}`}function vc(t){return`Query(target=${lT(bs(t))}; limitType=${t.limitType})`}function Nu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Gd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,gi(n),s)||n.endAt&&!function(r,i,o){const a=Gd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,gi(n),s))}(t,e)}function wT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Nm(t){return(e,n)=>{let s=!1;for(const r of gi(t)){const i=bT(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function bT(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?rr(a,l):te()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return te()}}/**
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
 */function Dm(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zo(e)?"-0":e}}function Om(t){return{integerValue:""+t}}function ET(t,e){return iT(e)?Om(e):Dm(t,e)}/**
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
 */class qa{constructor(){this._=void 0}}function IT(t,e,n){return t instanceof Go?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof mi?Lm(t,e):t instanceof yi?Mm(t,e):function(s,r){const i=Pm(s,r),o=Qd(i)+Qd(s._t);return yc(i)&&yc(s._t)?Om(o):Dm(s.wt,o)}(t,e)}function TT(t,e,n){return t instanceof mi?Lm(t,e):t instanceof yi?Mm(t,e):n}function Pm(t,e){return t instanceof Xo?yc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Go extends qa{}class mi extends qa{constructor(e){super(),this.elements=e}}function Lm(t,e){const n=Um(e);for(const s of t.elements)n.some(r=>en(r,s))||n.push(s);return{arrayValue:{values:n}}}class yi extends qa{constructor(e){super(),this.elements=e}}function Mm(t,e){let n=Um(e);for(const s of t.elements)n=n.filter(r=>!en(r,s));return{arrayValue:{values:n}}}class Xo extends qa{constructor(e,n){super(),this.wt=e,this._t=n}}function Qd(t){return Ve(t.integerValue||t.doubleValue)}function Um(t){return xu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xT(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof mi&&s instanceof mi||n instanceof yi&&s instanceof yi?tr(n.elements,s.elements,en):n instanceof Xo&&s instanceof Xo?en(n._t,s._t):n instanceof Go&&s instanceof Go}(t.transform,e.transform)}class kT{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ha{}function Fm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bm(t.key,un.none()):new Vi(t.key,t.data,un.none());{const n=t.data,s=Dt.empty();let r=new ze(ut.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ss(t.key,s,new Xt(r.toArray()),un.none())}}function ST(t,e,n){t instanceof Vi?function(s,r,i){const o=s.value.clone(),a=Jd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ss?function(s,r,i){if(!_o(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Jd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll($m(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Wr(t,e,n,s){return t instanceof Vi?function(r,i,o,a){if(!_o(r.precondition,i))return o;const l=r.value.clone(),c=Zd(r.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ss?function(r,i,o,a){if(!_o(r.precondition,i))return o;const l=Zd(r.fieldTransforms,a,i),c=i.data;return c.setAll($m(r)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return _o(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function CT(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Pm(s.transform,r||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(s.field,i))}return n||null}function Yd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&tr(n,s,(r,i)=>xT(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vi extends Ha{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ss extends Ha{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $m(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Jd(t,e,n){const s=new Map;Re(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,TT(o,a,n[r]))}return s}function Zd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,IT(i,o,e))}return s}class Bm extends Ha{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AT extends Ha{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class RT{constructor(e){this.count=e}}/**
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
 */var Be,fe;function NT(t){switch(t){default:return te();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Vm(t){if(t===void 0)return Bn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Be.OK:return T.OK;case Be.CANCELLED:return T.CANCELLED;case Be.UNKNOWN:return T.UNKNOWN;case Be.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Be.INTERNAL:return T.INTERNAL;case Be.UNAVAILABLE:return T.UNAVAILABLE;case Be.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Be.NOT_FOUND:return T.NOT_FOUND;case Be.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Be.ABORTED:return T.ABORTED;case Be.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Be.DATA_LOSS:return T.DATA_LOSS;default:return te()}}(fe=Be||(Be={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class _r{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){mr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Tm(this.inner)}size(){return this.innerSize}}/**
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
 */const DT=new We(H.comparator);function yn(){return DT}const jm=new We(H.comparator);function Mr(...t){let e=jm;for(const n of t)e=e.insert(n.key,n);return e}function qm(t){let e=jm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function as(){return Gr()}function Hm(){return Gr()}function Gr(){return new _r(t=>t.toString(),(t,e)=>t.isEqual(e))}const OT=new We(H.comparator),PT=new ze(H.comparator);function he(...t){let e=PT;for(const n of t)e=e.add(n);return e}const LT=new ze(_e);function Km(){return LT}/**
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
 */class Ka{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,ji.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ka(le.min(),s,Km(),yn(),he())}}class ji{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new ji(ot.EMPTY_BYTE_STRING,n,he(),he(),he())}}/**
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
 */class vo{constructor(e,n,s,r){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=r}}class zm{constructor(e,n){this.targetId=e,this.It=n}}class Wm{constructor(e,n,s=ot.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ef{constructor(){this.Tt=0,this.Et=nf(),this.At=ot.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=he(),n=he(),s=he();return this.Et.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:te()}}),new ji(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=nf()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class MT{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=yn(),this.Bt=tf(),this.Lt=new ze(_e)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Ot(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,r)=>{this.jt(r)&&n(r)})}zt(e){const n=e.targetId,s=e.It.count,r=this.Ht(n);if(r){const i=r.target;if(_c(i))if(s===0){const o=new H(i.path);this.Kt(n,o,nt.newNoDocument(o,le.min()))}else Re(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&_c(a.target)){const l=new H(a.target.path);this.$t.get(l)!==null||this.Xt(o,l)||this.Kt(o,l,nt.newNoDocument(l,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let s=he();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ht(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const r=new Ka(e,n,this.Lt,this.$t,s);return this.$t=yn(),this.Bt=tf(),this.Lt=new ze(_e),r}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new ef,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new ze(_e),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new ef),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function tf(){return new We(H.comparator)}function nf(){return new We(H.comparator)}/**
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
 */const UT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),FT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class $T{constructor(e,n){this.databaseId=e,this.dt=n}}function Qo(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gm(t,e){return t.dt?e.toBase64():e.toUint8Array()}function BT(t,e){return Qo(t,e.toTimestamp())}function hn(t){return Re(!!t),le.fromTimestamp(function(e){const n=jn(e);return new Ke(n.seconds,n.nanos)}(t))}function Du(t,e){return function(n){return new Oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Xm(t){const e=Oe.fromString(t);return Re(Jm(e)),e}function wc(t,e){return Du(t.databaseId,e.path)}function Cl(t,e){const n=Xm(e);if(n.get(1)!==t.databaseId.projectId)throw new F(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Qm(n))}function bc(t,e){return Du(t.databaseId,e)}function VT(t){const e=Xm(t);return e.length===4?Oe.emptyPath():Qm(e)}function Ec(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qm(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sf(t,e,n){return{name:wc(t,e),fields:n.value.mapValue.fields}}function jT(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(l,c){return l.dt?(Re(c===void 0||typeof c=="string"),ot.fromBase64String(c||"")):(Re(c===void 0||c instanceof Uint8Array),ot.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?T.UNKNOWN:Vm(l.code);return new F(c,l.message||"")}(o);n=new Wm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Cl(t,s.document.name),i=hn(s.document.updateTime),o=new Dt({mapValue:{fields:s.document.fields}}),a=nt.newFoundDocument(r,i,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new vo(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Cl(t,s.document),i=s.readTime?hn(s.readTime):le.min(),o=nt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new vo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Cl(t,s.document),i=s.removedTargetIds||[];n=new vo([],i,r,null)}else{if(!("filter"in e))return te();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new RT(r),o=s.targetId;n=new zm(o,i)}}return n}function qT(t,e){let n;if(e instanceof Vi)n={update:sf(t,e.key,e.value)};else if(e instanceof Bm)n={delete:wc(t,e.key)};else if(e instanceof Ss)n={update:sf(t,e.key,e.data),updateMask:ZT(e.fieldMask)};else{if(!(e instanceof AT))return te();n={verify:wc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Go)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof mi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof yi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Xo)return{fieldPath:i.field.canonicalString(),increment:o._t};throw te()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:BT(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:te()}(t,e.precondition)),n}function HT(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?hn(s.updateTime):hn(r);return i.isEqual(le.min())&&(i=hn(r)),new kT(i,s.transformResults||[])}(n,e))):[]}function KT(t,e){return{documents:[bc(t,e.path)]}}function zT(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=bc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=bc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length===0)return;const c=l.map(u=>function(h){if(h.op==="=="){if(zd(h.value))return{unaryFilter:{field:Ds(h.field),op:"IS_NAN"}};if(Kd(h.value))return{unaryFilter:{field:Ds(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(zd(h.value))return{unaryFilter:{field:Ds(h.field),op:"IS_NOT_NAN"}};if(Kd(h.value))return{unaryFilter:{field:Ds(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ds(h.field),op:QT(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Ds(u.field),direction:XT(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,c){return l.dt||Va(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function WT(t){let e=VT(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Re(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Ym(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Ws($s(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Va(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Wo(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Wo(d,h)}(n.endAt)),yT(e,r,o,i,a,"F",l,c)}function GT(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return te()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ym(t){return t?t.unaryFilter!==void 0?[JT(t)]:t.fieldFilter!==void 0?[YT(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Ym(e)).reduce((e,n)=>e.concat(n)):te():[]}function XT(t){return UT[t]}function QT(t){return FT[t]}function Ds(t){return{fieldPath:t.canonicalString()}}function $s(t){return ut.fromServerFormat(t.fieldPath)}function YT(t){return vt.create($s(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(t.fieldFilter.op),t.fieldFilter.value)}function JT(t){switch(t.unaryFilter.op){case"IS_NAN":const e=$s(t.unaryFilter.field);return vt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=$s(t.unaryFilter.field);return vt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$s(t.unaryFilter.field);return vt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=$s(t.unaryFilter.field);return vt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return te()}}function ZT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Jm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ex{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&ST(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Wr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Wr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Hm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=Fm(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&tr(this.mutations,e.mutations,(n,s)=>Yd(n,s))&&tr(this.baseMutations,e.baseMutations,(n,s)=>Yd(n,s))}}class Ou{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Re(e.mutations.length===s.length);let r=OT;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ou(e,n,s,r)}}/**
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
 */class tx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class hs{constructor(e,n,s,r,i=le.min(),o=le.min(),a=ot.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new hs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new hs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class nx{constructor(e){this.ne=e}}function sx(t){const e=WT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vT(e,e.limit,"L"):e}/**
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
 */class rx{constructor(){this.ze=new ix}addToCollectionParentIndex(e,n){return this.ze.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Vn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Vn.min())}updateCollectionGroup(e,n,s){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class ix{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ze(Oe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ze(Oe.comparator)).toArray()}}/**
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
 */class ir{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new ir(0)}static Rn(){return new ir(-1)}}/**
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
 */class ox{constructor(){this.changes=new _r(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?R.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ax{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class lx{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&Wr(s.mutation,r,Xt.empty(),Ke.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,he()).next(()=>s))}getLocalViewOfDocuments(e,n,s=he()){const r=as();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Mr();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=as();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,he()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=yn();const o=Gr(),a=Gr();return n.forEach((l,c)=>{const u=s.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof Ss)?i=i.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),Wr(u.mutation,c,u.mutation.getFieldMask(),Ke.now()))}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new ax(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Gr();let r=new We((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Xt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(r.get(a.batchId)||he()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Hm();u.forEach(d=>{if(!i.has(d)){const f=Fm(n.get(d),s.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return R.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Am(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):R.resolve(as());let a=-1,l=i;return o.next(c=>R.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.getBaseDocument(e,u,h).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,he())).next(u=>({batchId:a,changes:qm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let r=Mr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Mr();return this.indexManager.getCollectionParents(e,r).next(o=>R.forEach(o,a=>{const l=function(c,u){return new yr(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,nt.newInvalidDocument(c)))});let o=Mr();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Wr(c.mutation,l,Xt.empty(),Ke.now()),Nu(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):R.resolve(nt.newInvalidDocument(n))}}/**
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
 */class cx{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return R.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:hn(s.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:sx(s.bundledQuery),readTime:hn(s.readTime)}}(n)),R.resolve()}}/**
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
 */class ux{constructor(){this.overlays=new We(H.comparator),this.Xn=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const s=as();return R.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ie(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),R.resolve()}getOverlaysForCollection(e,n,s){const r=as(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return R.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new We((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=as(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=as(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return R.resolve(a)}ie(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new tx(n,s));let i=this.Xn.get(n);i===void 0&&(i=he(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
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
 */class Pu{constructor(){this.Zn=new ze(Ge.ts),this.es=new ze(Ge.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new Ge(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new Ge(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new H(new Oe([])),s=new Ge(n,e),r=new Ge(n,e+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new H(new Oe([])),s=new Ge(n,e),r=new Ge(n,e+1);let i=he();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ge(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ge{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return H.comparator(e.key,n.key)||_e(e.ls,n.ls)}static ns(e,n){return _e(e.ls,n.ls)||H.comparator(e.key,n.key)}}/**
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
 */class hx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new ze(Ge.ts)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ex(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new Ge(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ge(n,0),r=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ze(_e);return n.forEach(r=>{const i=new Ge(r,0),o=new Ge(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),R.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new Ge(new H(i),0);let a=new ze(_e);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ls)),!0)},o),R.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Re(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return R.forEach(n.mutations,r=>{const i=new Ge(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new Ge(n,0),r=this.ds.firstAfterOrEqual(s);return R.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class dx{constructor(e){this.ps=e,this.docs=new We(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return R.resolve(s?s.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let s=yn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():nt.newInvalidDocument(r))}),R.resolve(s)}getAllFromCollection(e,n,s){let r=yn();const i=new H(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||eT(ZI(l),s)<=0||(r=r.insert(l.key,l.mutableCopy()))}return R.resolve(r)}getAllFromCollectionGroup(e,n,s,r){te()}Is(e,n){return R.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new fx(this)}getSize(e){return R.resolve(this.size)}}class fx extends ox{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(s)}),R.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class px{constructor(e){this.persistence=e,this.Ts=new _r(n=>ku(n),Su),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Es=0,this.As=new Pu,this.targetCount=0,this.Rs=ir.An()}forEachTarget(e,n){return this.Ts.forEach((s,r)=>n(r)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),R.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new ir(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.vn(n),R.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),R.waitFor(i).next(()=>r)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return R.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),R.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),R.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return R.resolve(s)}containsKey(e,n){return R.resolve(this.As.containsKey(n))}}/**
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
 */class gx{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Tu(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new px(this),this.indexManager=new rx,this.remoteDocumentCache=function(s){return new dx(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new nx(n),this.Ds=new cx(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ux,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new hx(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){j("MemoryPersistence","Starting transaction:",e);const r=new mx(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(e,n){return R.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class mx extends nT{constructor(e){super(),this.currentSequenceNumber=e}}class Lu{constructor(e){this.persistence=e,this.ks=new Pu,this.Os=null}static Ms(e){return new Lu(e)}get Fs(){if(this.Os)return this.Os;throw te()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),R.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),R.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Fs,s=>{const r=H.fromPath(s);return this.$s(e,r).next(i=>{i||n.removeEntry(r,le.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return R.or([()=>R.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class Mu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(e,n){let s=he(),r=he();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Mu(e,n.fromCache,s,r)}}/**
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
 */class yx{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ci(e,n).next(i=>i||this.xi(e,n,r,s)).next(i=>i||this.Ni(e,n))}Ci(e,n){return R.resolve(null)}xi(e,n,s,r){return _T(n)||r.isEqual(le.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(i=>{const o=this.ki(n,i);return this.Oi(n,o,s,r)?this.Ni(e,n):($d()<=me.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),vc(n)),this.Mi(e,o,n,JI(r,-1)))})}ki(e,n){let s=new ze(Nm(e));return n.forEach((r,i)=>{Nu(e,i)&&(s=s.add(i))}),s}Oi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,n){return $d()<=me.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",vc(n)),this.Di.getDocumentsMatchingQuery(e,n,Vn.min())}Mi(e,n,s,r){return this.Di.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class _x{constructor(e,n,s,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new We(_e),this.Bi=new _r(i=>ku(i),Su),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lx(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function vx(t,e,n,s){return new _x(t,e,n,s)}async function Zm(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=he();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Ki:c,removedBatchIds:o,addedBatchIds:a}))})})}function wx(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=R.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(m=>{const b=l.docVersions.get(f);Re(b!==null),m.version.compareTo(b)<0&&(u.applyToRemoteDocument(m,l),m.isValidDocument()&&(m.setReadTime(l.commitVersion),c.addEntry(m)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=he();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function ey(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function bx(t,e){const n=se(t),s=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(ot.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(h,f),function(m,b,v){return m.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,f,u)&&a.push(n.Vs.updateTargetData(i,f))});let l=yn(),c=he();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Ex(i,o,e.documentUpdates).next(u=>{l=u.Gi,c=u.Qi})),!s.isEqual(le.min())){const u=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.$i=r,i))}function Ex(t,e,n){let s=he(),r=he();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=yn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Gi:o,Qi:r}})}function Ix(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Tx(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Vs.getTargetData(s,e).next(i=>i?(r=i,R.resolve(r)):n.Vs.allocateTargetId(s).next(o=>(r=new hs(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function Ic(t,e,n){const s=se(t),r=s.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Bi(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(r.target)}function rf(t,e,n){const s=se(t);let r=le.min(),i=he();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=se(a),h=u.Bi.get(c);return h!==void 0?R.resolve(u.$i.get(h)):u.Vs.getTargetData(l,c)}(s,o,bs(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?r:le.min(),n?i:he())).next(a=>(xx(s,wT(e),a),{documents:a,ji:i})))}function xx(t,e,n){let s=le.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Li.set(e,s)}class of{constructor(){this.activeTargetIds=Km()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kx{constructor(){this.Fr=new of,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new of,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Sx{Br(e){}shutdown(){}}/**
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
 */class af{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Cx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Ax{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class Rx extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);j("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(e,o,a,s).then(l=>(j("RestConnection","Received: ",l),l),l=>{throw Bd("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}ao(e,n,s,r,i,o){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+gr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=Cx[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,r){return new Promise((i,o)=>{const a=new jI;a.listenOnce($I.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Sl.NO_ERROR:const c=a.getResponseJson();j("Connection","XHR received:",JSON.stringify(c)),i(c);break;case Sl.TIMEOUT:j("Connection",'RPC "'+e+'" timed out'),o(new F(T.DEADLINE_EXCEEDED,"Request time out"));break;case Sl.HTTP_ERROR:const u=a.getStatus();if(j("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const m=f.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(h.status);o(new F(d,h.message))}else o(new F(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new F(T.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{j("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=UI(),o=FI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new VI({})),this.uo(a.initMessageHeaders,n,s),pg()||mg()||_0()||yg()||v0()||gg()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=r.join("");j("Connection","Creating WebChannel: "+l,a);const c=i.createWebChannel(l,a);let u=!1,h=!1;const d=new Ax({jr:m=>{h?j("Connection","Not sending because WebChannel is closed:",m):(u||(j("Connection","Opening WebChannel transport."),c.open(),u=!0),j("Connection","WebChannel sending:",m),c.send(m))},Wr:()=>c.close()}),f=(m,b,v)=>{m.listen(b,E=>{try{v(E)}catch(w){setTimeout(()=>{throw w},0)}})};return f(c,oo.EventType.OPEN,()=>{h||j("Connection","WebChannel transport opened.")}),f(c,oo.EventType.CLOSE,()=>{h||(h=!0,j("Connection","WebChannel transport closed"),d.eo())}),f(c,oo.EventType.ERROR,m=>{h||(h=!0,Bd("Connection","WebChannel transport errored:",m),d.eo(new F(T.UNAVAILABLE,"The operation could not be completed")))}),f(c,oo.EventType.MESSAGE,m=>{var b;if(!h){const v=m.data[0];Re(!!v);const E=v,w=E.error||((b=E[0])===null||b===void 0?void 0:b.error);if(w){j("Connection","WebChannel received error:",w);const C=w.status;let S=function(re){const ue=Be[re];if(ue!==void 0)return Vm(ue)}(C),Q=w.message;S===void 0&&(S=T.INTERNAL,Q="Unknown error status: "+C+" with message "+w.message),h=!0,d.eo(new F(S,Q)),c.close()}else j("Connection","WebChannel received:",v),d.no(v)}}),f(o,BI.STAT_EVENT,m=>{m.stat===Ud.PROXY?j("Connection","Detected buffering proxy"):m.stat===Ud.NOPROXY&&j("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Al(){return typeof document<"u"?document:null}/**
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
 */function za(t){return new $T(t,!0)}class ty{constructor(e,n,s=1e3,r=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&j("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class ny{constructor(e,n,s,r,i,o,a,l){this.js=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new ty(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Bn(n.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new F(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nx extends ny{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=jT(this.wt,e),s=function(r){if(!("targetChange"in r))return le.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?le.min():i.readTime?hn(i.readTime):le.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=Ec(this.wt),n.addTarget=function(r,i){let o;const a=i.target;return o=_c(a)?{documents:KT(r,a)}:{query:zT(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Gm(r,i.resumeToken):i.snapshotVersion.compareTo(le.min())>0&&(o.readTime=Qo(r,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=GT(this.wt,e);s&&(n.labels=s),this.Mo(n)}jo(e){const n={};n.database=Ec(this.wt),n.removeTarget=e,this.Mo(n)}}class Dx extends ny{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=HT(e.writeResults,e.commitTime),s=hn(e.commitTime);return this.listener.Jo(s,n)}return Re(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Ec(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>qT(this.wt,s))};this.Mo(n)}}/**
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
 */class Ox extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new F(T.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(T.UNKNOWN,r.toString())})}ao(e,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(T.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class Px{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Bn(n),this.su=!1):j("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class Lx{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{Cs(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=se(a);l.lu.add(4),await qi(l),l._u.set("Unknown"),l.lu.delete(4),await Wa(l)}(this))})}),this._u=new Px(s,r)}}async function Wa(t){if(Cs(t))for(const e of t.fu)await e(!0)}async function qi(t){for(const e of t.fu)await e(!1)}function sy(t,e){const n=se(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),$u(n)?Fu(n):vr(n).Co()&&Uu(n,e))}function ry(t,e){const n=se(t),s=vr(n);n.hu.delete(e),s.Co()&&iy(n,e),n.hu.size===0&&(s.Co()?s.ko():Cs(n)&&n._u.set("Unknown"))}function Uu(t,e){t.wu.Nt(e.targetId),vr(t).Qo(e)}function iy(t,e){t.wu.Nt(e),vr(t).jo(e)}function Fu(t){t.wu=new MT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),vr(t).start(),t._u.iu()}function $u(t){return Cs(t)&&!vr(t).Do()&&t.hu.size>0}function Cs(t){return se(t).lu.size===0}function oy(t){t.wu=void 0}async function Mx(t){t.hu.forEach((e,n)=>{Uu(t,e)})}async function Ux(t,e){oy(t),$u(t)?(t._u.uu(e),Fu(t)):t._u.set("Unknown")}async function Fx(t,e,n){if(t._u.set("Online"),e instanceof Wm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Yo(t,s)}else if(e instanceof vo?t.wu.Ut(e):e instanceof zm?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(le.min()))try{const s=await ey(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.hu.get(l);c&&r.hu.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const l=r.hu.get(a);if(!l)return;r.hu.set(a,l.withResumeToken(ot.EMPTY_BYTE_STRING,l.snapshotVersion)),iy(r,a);const c=new hs(l.target,a,1,l.sequenceNumber);Uu(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await Yo(t,s)}}async function Yo(t,e,n){if(!Bi(e))throw e;t.lu.add(1),await qi(t),t._u.set("Offline"),n||(n=()=>ey(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Wa(t)})}function ay(t,e){return e().catch(n=>Yo(t,n,e))}async function Ga(t){const e=se(t),n=qn(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;$x(e);)try{const r=await Ix(e.localStore,s);if(r===null){e.au.length===0&&n.ko();break}s=r.batchId,Bx(e,r)}catch(r){await Yo(e,r)}ly(e)&&cy(e)}function $x(t){return Cs(t)&&t.au.length<10}function Bx(t,e){t.au.push(e);const n=qn(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function ly(t){return Cs(t)&&!qn(t).Do()&&t.au.length>0}function cy(t){qn(t).start()}async function Vx(t){qn(t).Xo()}async function jx(t){const e=qn(t);for(const n of t.au)e.Ho(n.mutations)}async function qx(t,e,n){const s=t.au.shift(),r=Ou.from(s,e,n);await ay(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ga(t)}async function Hx(t,e){e&&qn(t).zo&&await async function(n,s){if(r=s.code,NT(r)&&r!==T.ABORTED){const i=n.au.shift();qn(n).No(),await ay(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ga(n)}var r}(t,e),ly(t)&&cy(t)}async function lf(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=Cs(n);n.lu.add(3),await qi(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Wa(n)}async function Kx(t,e){const n=se(t);e?(n.lu.delete(2),await Wa(n)):e||(n.lu.add(2),await qi(n),n._u.set("Unknown"))}function vr(t){return t.mu||(t.mu=function(e,n,s){const r=se(e);return r.tu(),new Nx(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:Mx.bind(null,t),Jr:Ux.bind(null,t),Go:Fx.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),$u(t)?Fu(t):t._u.set("Unknown")):(await t.mu.stop(),oy(t))})),t.mu}function qn(t){return t.gu||(t.gu=function(e,n,s){const r=se(e);return r.tu(),new Dx(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:Vx.bind(null,t),Jr:Hx.bind(null,t),Yo:jx.bind(null,t),Jo:qx.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Ga(t)):(await t.gu.stop(),t.au.length>0&&(j("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
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
 */class Bu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new us,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Bu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vu(t,e){if(Bn("AsyncQueue",`${e}: ${t}`),Bi(t))return new F(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=Mr(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new Gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Gs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class cf{constructor(){this.yu=new We(H.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):te():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class or{constructor(e,n,s,r,i,o,a,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new or(e,n,Gs.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ja(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class zx{constructor(){this.Iu=void 0,this.listeners=[]}}class Wx{constructor(){this.queries=new _r(e=>Rm(e),ja),this.onlineState="Unknown",this.Tu=new Set}}async function Gx(t,e){const n=se(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new zx),r)try{i.Iu=await n.onListen(s)}catch(o){const a=Vu(o,`Initialization of query '${vc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&ju(n)}async function Xx(t,e){const n=se(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Qx(t,e){const n=se(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&ju(n)}function Yx(t,e,n){const s=se(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ju(t){t.Tu.forEach(e=>{e.next()})}class Jx{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new or(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class uy{constructor(e){this.key=e}}class hy{constructor(e){this.key=e}}class Zx{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=he(),this.mutatedKeys=he(),this.Lu=Nm(e),this.Uu=new Gs(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new cf,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),f=Nu(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),b=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?m!==b&&(s.track({type:3,doc:f}),v=!0):this.Qu(d,f)||(s.track({type:2,doc:f}),v=!0,(l&&this.Lu(f,l)>0||c&&this.Lu(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Gu:s,Oi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((c,u)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return f(h)-f(d)}(c.type,u.type)||this.Lu(c.doc,u.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,i.length!==0||l?{snapshot:new or(this.query,e.Uu,r,i,e.mutatedKeys,a===0,l,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new cf,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=he(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new hy(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new uy(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=he();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return or.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class ek{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class tk{constructor(e){this.key=e,this.Xu=!1}}class nk{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new _r(a=>Rm(a),ja),this.ec=new Map,this.nc=new Set,this.sc=new We(H.comparator),this.ic=new Map,this.rc=new Pu,this.oc={},this.uc=new Map,this.cc=ir.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function sk(t,e){const n=fk(t);let s,r;const i=n.tc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await Tx(n.localStore,bs(e));n.isPrimaryClient&&sy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await rk(n,e,s,a==="current")}return r}async function rk(t,e,n,s){t.hc=(u,h,d)=>async function(f,m,b,v){let E=m.view.Ku(b);E.Oi&&(E=await rf(f.localStore,m.query,!1).then(({documents:S})=>m.view.Ku(S,E)));const w=v&&v.targetChanges.get(m.targetId),C=m.view.applyChanges(E,f.isPrimaryClient,w);return hf(f,m.targetId,C.zu),C.snapshot}(t,u,h,d);const r=await rf(t.localStore,e,!0),i=new Zx(e,r.ji),o=i.Ku(r.documents),a=ji.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),l=i.applyChanges(o,t.isPrimaryClient,a);hf(t,n,l.zu);const c=new ek(e,n,i);return t.tc.set(e,c),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function ik(t,e){const n=se(t),s=n.tc.get(e),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter(i=>!ja(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ic(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ry(n.remoteStore,s.targetId),Tc(n,s.targetId)}).catch($i)):(Tc(n,s.targetId),await Ic(n.localStore,s.targetId,!0))}async function ok(t,e,n){const s=pk(t);try{const r=await function(i,o){const a=se(i),l=Ke.now(),c=o.reduce((d,f)=>d.add(f.key),he());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=yn(),m=he();return a.Ui.getEntries(d,c).next(b=>{f=b,f.forEach((v,E)=>{E.isValidDocument()||(m=m.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(b=>{u=b;const v=[];for(const E of o){const w=CT(E,u.get(E.key).overlayedDocument);w!=null&&v.push(new Ss(E.key,w,Sm(w.value.mapValue),un.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,v,o)}).next(b=>{h=b;const v=b.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(d,b.batchId,v)})}).then(()=>({batchId:h.batchId,changes:qm(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let l=i.oc[i.currentUser.toKey()];l||(l=new We(_e)),l=l.insert(o,a),i.oc[i.currentUser.toKey()]=l}(s,r.batchId,n),await Hi(s,r.changes),await Ga(s.remoteStore)}catch(r){const i=Vu(r,"Failed to persist write");n.reject(i)}}async function dy(t,e){const n=se(t);try{const s=await bx(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ic.get(i);o&&(Re(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?Re(o.Xu):r.removedDocuments.size>0&&(Re(o.Xu),o.Xu=!1))}),await Hi(n,s,e)}catch(s){await $i(s)}}function uf(t,e,n){const s=se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=se(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Eu(o)&&(l=!0)}),l&&ju(a)}(s.eventManager,e),r.length&&s.Zu.Go(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ak(t,e,n){const s=se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ic.get(e),i=r&&r.key;if(i){let o=new We(H.comparator);o=o.insert(i,nt.newNoDocument(i,le.min()));const a=he().add(i),l=new Ka(le.min(),new Map,new ze(_e),o,a);await dy(s,l),s.sc=s.sc.remove(i),s.ic.delete(e),qu(s)}else await Ic(s.localStore,e,!1).then(()=>Tc(s,e,n)).catch($i)}async function lk(t,e){const n=se(t),s=e.batch.batchId;try{const r=await wx(n.localStore,e);py(n,s,null),fy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Hi(n,r)}catch(r){await $i(r)}}async function ck(t,e,n){const s=se(t);try{const r=await function(i,o){const a=se(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Re(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);py(s,e,n),fy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Hi(s,r)}catch(r){await $i(r)}}function fy(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function py(t,e,n){const s=se(t);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function Tc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||gy(t,s)})}function gy(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(ry(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),qu(t))}function hf(t,e,n){for(const s of n)s instanceof uy?(t.rc.addReference(s.key,e),uk(t,s)):s instanceof hy?(j("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||gy(t,s.key)):te()}function uk(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(j("SyncEngine","New document in limbo: "+n),t.nc.add(s),qu(t))}function qu(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new H(Oe.fromString(e)),s=t.cc.next();t.ic.set(s,new tk(n)),t.sc=t.sc.insert(n,s),sy(t.remoteStore,new hs(bs(Cu(n.path)),s,2,Tu.ot))}}async function Hi(t,e,n){const s=se(t),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,l)=>{o.push(s.hc(l,e,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),r.push(c);const u=Mu.Vi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,l){const c=se(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(l,h=>R.forEach(h.Pi,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>R.forEach(h.vi,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Bi(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.$i.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);c.$i=c.$i.insert(h,m)}}}(s.localStore,i))}async function hk(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const s=await Zm(n.localStore,e);n.currentUser=e,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new F(T.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Hi(n,s.Ki)}}function dk(t,e){const n=se(t),s=n.ic.get(e);if(s&&s.Xu)return he().add(s.key);{let r=he();const i=n.ec.get(e);if(!i)return r;for(const o of i){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function fk(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ak.bind(null,e),e.Zu.Go=Qx.bind(null,e.eventManager),e.Zu.lc=Yx.bind(null,e.eventManager),e}function pk(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ck.bind(null,e),e}class gk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=za(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return vx(this.persistence,new yx,e.initialUser,this.wt)}_c(e){return new gx(Lu.Ms,this.wt)}dc(e){return new kx}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=hk.bind(null,this.syncEngine),await Kx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Wx}createDatastore(e){const n=za(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Rx(r));var r;return function(i,o,a,l){return new Ox(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>uf(this.syncEngine,a,0),o=af.V()?new af:new Sx,new Lx(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,l,c){const u=new nk(s,r,i,o,a,l);return c&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=se(e);j("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await qi(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class yk{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class _k{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=wt.UNAUTHENTICATED,this.clientId=Im.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new us;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Vu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function vk(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Zm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function wk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bk(t);j("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>lf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>lf(e.remoteStore,i)),t.onlineComponents=e}async function bk(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await vk(t,new gk)),t.offlineComponents}async function my(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await wk(t,new mk)),t.onlineComponents}function Ek(t){return my(t).then(e=>e.syncEngine)}async function df(t){const e=await my(t),n=e.eventManager;return n.onListen=sk.bind(null,e.syncEngine),n.onUnlisten=ik.bind(null,e.syncEngine),n}const ff=new Map;/**
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
 */function yy(t,e,n){if(!n)throw new F(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ik(t,e,n,s){if(e===!0&&s===!0)throw new F(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pf(t){if(!H.isDocumentKey(t))throw new F(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gf(t){if(H.isDocumentKey(t))throw new F(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function wo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xa(t);throw new F(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class mf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ik("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Hu{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mf({}),this._settingsFrozen=!1,e instanceof sr?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new F(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sr(r.options.projectId)}(e))}get app(){if(!this._app)throw new F(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new HI;switch(n.type){case"gapi":const s=n.client;return Re(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new WI(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new F(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ff.get(e);n&&(j("ComponentProvider","Removing Datastore"),ff.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class kt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class wr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new wr(this.firestore,e,this._query)}}class Un extends wr{constructor(e,n,s){super(e,n,Cu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new H(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function Jo(t,e,...n){if(t=Je(t),yy("collection","path",e),t instanceof Hu){const s=Oe.fromString(e,...n);return gf(s),new Un(t,null,s)}{if(!(t instanceof kt||t instanceof Un))throw new F(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Oe.fromString(e,...n));return gf(s),new Un(t.firestore,null,s)}}function Tk(t,e,...n){if(t=Je(t),arguments.length===1&&(e=Im.I()),yy("doc","path",e),t instanceof Hu){const s=Oe.fromString(e,...n);return pf(s),new kt(t,null,new H(s))}{if(!(t instanceof kt||t instanceof Un))throw new F(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Oe.fromString(e,...n));return pf(s),new kt(t.firestore,t instanceof Un?t.converter:null,new H(s))}}/**
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
 */class xk{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new ty(this,"async_queue_retry"),this.Kc=()=>{const n=Al();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Al();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Al();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new us;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!Bi(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Bn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Oc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=Bu.createAndSchedule(this,e,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&te()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function yf(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Zo extends Hu{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new xk,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||vy(this),this._firestoreClient.terminate()}}function kk(t=Jc()){return Sa(t,"firestore").getImmediate()}function _y(t){return t._firestoreClient||vy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function vy(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new rT(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _k(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class Ku{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ar{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ar(ot.fromBase64String(e))}catch(n){throw new F(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ar(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class wy{constructor(e){this._methodName=e}}/**
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
 */class zu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */const Sk=/^__.*__$/;class Ck{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vi(e,this.data,n,this.fieldTransforms)}}function by(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Wu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Wu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.sa(e),r}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return ea(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(by(this.Zc)&&Sk.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class Ak{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||za(e)}aa(e,n,s,r=!1){return new Wu({Zc:e,methodName:n,ca:s,path:ut.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Ey(t){const e=t._freezeSettings(),n=za(t._databaseId);return new Ak(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Rk(t,e,n,s,r,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,r);xy("Data must be an object, but it was:",o,s);const a=Iy(s,o);let l,c;if(i.merge)l=new Xt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Dk(e,h,n);if(!o.contains(d))throw new F(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Pk(u,d)||u.push(d)}l=new Xt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Ck(new Dt(a),l,c)}function Nk(t,e,n,s=!1){return Gu(n,t.aa(s?4:3,e))}function Gu(t,e){if(Ty(t=Je(t)))return xy("Unsupported field value:",e,t),Iy(t,e);if(t instanceof wy)return function(n,s){if(!by(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Gu(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ET(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ke.fromDate(n);return{timestampValue:Qo(s.wt,r)}}if(n instanceof Ke){const r=new Ke(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Qo(s.wt,r)}}if(n instanceof zu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ar)return{bytesValue:Gm(s.wt,n._byteString)};if(n instanceof kt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Du(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${Xa(n)}`)}(t,e)}function Iy(t,e){const n={};return Tm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mr(t,(s,r)=>{const i=Gu(r,e.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Ty(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof zu||t instanceof ar||t instanceof kt||t instanceof wy)}function xy(t,e,n){if(!Ty(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Xa(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function Dk(t,e,n){if((e=Je(e))instanceof Ku)return e._internalPath;if(typeof e=="string")return ky(t,e);throw ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ok=new RegExp("[~\\*/\\[\\]]");function ky(t,e,n){if(e.search(Ok)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ku(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ea(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new F(T.INVALID_ARGUMENT,a+t+l)}function Pk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Sy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Lk extends Sy{data(){return super.data()}}function Qa(t,e){return typeof e=="string"?ky(t,e):e instanceof Ku?e._internalPath:e._delegate._internalPath}/**
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
 */class Ur{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cy extends Sy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Qa("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class bo extends Cy{data(e={}){return super.data(e)}}class Mk{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ur(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new bo(this._firestore,this._userDataWriter,s.key,s,new Ur(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new bo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ur(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new bo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ur(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:Uk(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Uk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
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
 */function Fk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ay{}function Xu(t,...e){for(const n of e)t=n._apply(t);return t}class $k extends Ay{constructor(e,n,s){super(),this.fa=e,this.da=n,this._a=s,this.type="where"}_apply(e){const n=Ey(e.firestore),s=function(r,i,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new F(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){vf(u,c);const f=[];for(const m of u)f.push(_f(a,r,m));h={arrayValue:{values:f}}}else h=_f(a,r,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||vf(u,c),h=Nk(o,i,u,c==="in"||c==="not-in");const d=vt.create(l,c,h);return function(f,m){if(m.ht()){const v=Ru(f);if(v!==null&&!v.isEqual(m.field))throw new F(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${v.toString()}' and '${m.field.toString()}'`);const E=Au(f);E!==null&&Ry(f,m.field,E)}const b=function(v,E){for(const w of v.filters)if(E.indexOf(w.op)>=0)return w.op;return null}(f,function(v){switch(v){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(b!==null)throw b===m.op?new F(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new F(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${b.toString()}' filters.`)}(r,d),d}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new wr(e.firestore,e.converter,function(r,i){const o=r.filters.concat([i]);return new yr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(e._query,s))}}function Bk(t,e,n){const s=e,r=Qa("where",t);return new $k(r,s,n)}class Vk extends Ay{constructor(e,n){super(),this.fa=e,this.wa=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new F(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ws(r,i);return function(a,l){if(Au(a)===null){const c=Ru(a);c!==null&&Ry(a,c,l.field)}}(s,o),o}(e._query,this.fa,this.wa);return new wr(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new yr(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Qu(t,e="asc"){const n=e,s=Qa("orderBy",t);return new Vk(s,n)}function _f(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new F(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Am(e)&&n.indexOf("/")!==-1)throw new F(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Oe.fromString(n));if(!H.isDocumentKey(s))throw new F(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Hd(t,new H(s))}if(n instanceof kt)return Hd(t,n._key);throw new F(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xa(n)}.`)}function vf(t,e){if(!Array.isArray(t)||t.length===0)throw new F(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new F(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ry(t,e,n){if(!n.isEqual(e))throw new F(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class jk{convertValue(e,n="none"){switch(ws(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){const s={};return mr(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new zu(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=km(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(fi(e));default:return null}}convertTimestamp(e){const n=jn(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Oe.fromString(e);Re(Jm(s));const r=new sr(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||Bn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function qk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Ny extends jk{constructor(e){super(),this.firestore=e}convertBytes(e){return new ar(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function Hk(t,e){const n=wo(t.firestore,Zo),s=Tk(t),r=qk(t.converter,e);return Kk(n,[Rk(Ey(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,un.exists(!1))]).then(()=>s)}function Dy(t,...e){var n,s,r;t=Je(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||yf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(yf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let l,c,u;if(t instanceof kt)c=wo(t.firestore,Zo),u=Cu(t._key.path),l={next:h=>{e[o]&&e[o](zk(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=wo(t,wr);c=wo(h.firestore,Zo),u=h._query;const d=new Ny(c);l={next:f=>{e[o]&&e[o](new Mk(c,d,h,f))},error:e[o+1],complete:e[o+2]},Fk(t._query)}return function(h,d,f,m){const b=new yk(m),v=new Jx(d,b,f);return h.asyncQueue.enqueueAndForget(async()=>Gx(await df(h),v)),()=>{b.Tc(),h.asyncQueue.enqueueAndForget(async()=>Xx(await df(h),v))}}(_y(c),u,a,l)}function Kk(t,e){return function(n,s){const r=new us;return n.asyncQueue.enqueueAndForget(async()=>ok(await Ek(n),s,r)),r.promise}(_y(t),e)}function zk(t,e,n){const s=n.docs.get(e._key),r=new Ny(t);return new Cy(t,r,e._key,s,new Ur(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){gr=n})(hr),gs(new $n("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Zo(r,new KI(n.getProvider("auth-internal")),new XI(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Gt(Fd,"3.4.13",t),Gt(Fd,"3.4.13","esm2017")})();/**
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
 */const Oy="firebasestorage.googleapis.com",Py="storageBucket",Wk=2*60*1e3,Gk=10*60*1e3;/**
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
 */class $e extends Hn{constructor(e,n){super(Rl(e),`Firebase Storage: ${n} (${Rl(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$e.prototype)}_codeEquals(e){return Rl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Rl(t){return"storage/"+t}function Yu(){const t="An unknown error occurred, please check the error payload for server response.";return new $e("unknown",t)}function Xk(t){return new $e("object-not-found","Object '"+t+"' does not exist.")}function Qk(t){return new $e("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Yk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $e("unauthenticated",t)}function Jk(){return new $e("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Zk(t){return new $e("unauthorized","User does not have permission to access '"+t+"'.")}function e1(){return new $e("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Ly(){return new $e("canceled","User canceled the upload/download.")}function t1(t){return new $e("invalid-url","Invalid URL '"+t+"'.")}function n1(t){return new $e("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function s1(){return new $e("no-default-bucket","No default bucket found. Did you set the '"+Py+"' property when initializing the app?")}function My(){return new $e("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function r1(){return new $e("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function i1(){return new $e("no-download-url","The given file does not have any download URLs.")}function xc(t){return new $e("invalid-argument",t)}function Uy(){return new $e("app-deleted","The Firebase app was deleted.")}function o1(t){return new $e("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Xr(t,e){return new $e("invalid-format","String does not match format '"+t+"': "+e)}function Ar(t){throw new $e("internal-error","Internal error: "+t)}/**
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
 */class xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=xt.makeFromUrl(e,n)}catch{return new xt(e,"")}if(s.path==="")return s;throw n1(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(S){S.path_=decodeURIComponent(S.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),m={bucket:1,path:3},b=n===Oy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",E=new RegExp(`^https?://${b}/${r}/${v}`,"i"),C=[{regex:a,indices:l,postModify:i},{regex:f,indices:m,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let S=0;S<C.length;S++){const Q=C[S],re=Q.regex.exec(e);if(re){const ue=re[Q.indices.bucket];let W=re[Q.indices.path];W||(W=""),s=new xt(ue,W),Q.postModify(s);break}}if(s==null)throw t1(e);return s}}class a1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function l1(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){r=setTimeout(()=>{r=null,t(f,l())},v)}function d(){i&&clearTimeout(i)}function f(v,...E){if(c){d();return}if(v){d(),u.call(null,v,...E);return}if(l()||o){d(),u.call(null,v,...E);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,h(C)}let m=!1;function b(v){m||(m=!0,d(),!c&&(r!==null?(v||(a=2),clearTimeout(r),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function c1(t){t(!1)}/**
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
 */function u1(t){return t!==void 0}function h1(t){return typeof t=="function"}function d1(t){return typeof t=="object"&&!Array.isArray(t)}function Ya(t){return typeof t=="string"||t instanceof String}function wf(t){return Ju()&&t instanceof Blob}function Ju(){return typeof Blob<"u"}function bf(t,e,n,s){if(s<e)throw xc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw xc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ki(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Fy(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var ds;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ds||(ds={}));/**
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
 */class f1{constructor(e,n,s,r,i,o,a,l,c,u,h){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,f)=>{this.resolve_=d,this.reject_=f,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new co(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ds.NO_ERROR,l=i.getStatus();if(!a||this.isRetryStatusCode_(l)){const u=i.getErrorCode()===ds.ABORT;s(!1,new co(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new co(c,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());u1(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Yu();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?Uy():Ly();o(l)}else{const l=e1();o(l)}};this.canceled_?n(!1,new co(!1,null,!0)):this.backoffId_=l1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&c1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||i}}class co{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function p1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function g1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function m1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function y1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _1(t,e,n,s,r,i){const o=Fy(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return m1(l,e),p1(l,n),g1(l,i),y1(l,s),new f1(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
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
 */function v1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function w1(...t){const e=v1();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Ju())return new Blob(t);throw new $e("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function b1(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function E1(t){return atob(t)}/**
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
 */const Wt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Nl{constructor(e,n){this.data=e,this.contentType=n||null}}function I1(t,e){switch(t){case Wt.RAW:return new Nl($y(e));case Wt.BASE64:case Wt.BASE64URL:return new Nl(By(t,e));case Wt.DATA_URL:return new Nl(x1(e),k1(e))}throw Yu()}function $y(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function T1(t){let e;try{e=decodeURIComponent(t)}catch{throw Xr(Wt.DATA_URL,"Malformed data URL.")}return $y(e)}function By(t,e){switch(t){case Wt.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Xr(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Wt.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Xr(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=E1(e)}catch{throw Xr(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Vy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Xr(Wt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=S1(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function x1(t){const e=new Vy(t);return e.base64?By(Wt.BASE64,e.rest):T1(e.rest)}function k1(t){return new Vy(t).contentType}function S1(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class An{constructor(e,n){let s=0,r="";wf(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(wf(this.data_)){const s=this.data_,r=b1(s,e,n);return r===null?null:new An(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new An(s,!0)}}static getBlob(...e){if(Ju()){const n=e.map(s=>s instanceof An?s.data_:s);return new An(w1.apply(null,n))}else{const n=e.map(o=>Ya(o)?I1(Wt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[i++]=o[a]}),new An(r,!0)}}uploadData(){return this.data_}}/**
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
 */function jy(t){let e;try{e=JSON.parse(t)}catch{return null}return d1(e)?e:null}/**
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
 */function C1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function A1(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function qy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function R1(t,e){return e}class ft{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||R1}}let uo=null;function N1(t){return!Ya(t)||t.length<2?t:qy(t)}function Hy(){if(uo)return uo;const t=[];t.push(new ft("bucket")),t.push(new ft("generation")),t.push(new ft("metageneration")),t.push(new ft("name","fullPath",!0));function e(i,o){return N1(o)}const n=new ft("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new ft("size");return r.xform=s,t.push(r),t.push(new ft("timeCreated")),t.push(new ft("updated")),t.push(new ft("md5Hash",null,!0)),t.push(new ft("cacheControl",null,!0)),t.push(new ft("contentDisposition",null,!0)),t.push(new ft("contentEncoding",null,!0)),t.push(new ft("contentLanguage",null,!0)),t.push(new ft("contentType",null,!0)),t.push(new ft("metadata","customMetadata",!0)),uo=t,uo}function D1(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new xt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function O1(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return D1(s,t),s}function Ky(t,e,n){const s=jy(e);return s===null?null:O1(t,s,n)}function P1(t,e,n,s){const r=jy(e);if(r===null||!Ya(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=Ki(d,n,s),m=Fy({alt:"media",token:c});return f+m})[0]}function zy(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class br{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function dn(t){if(!t)throw Yu()}function Zu(t,e){function n(s,r){const i=Ky(t,r,e);return dn(i!==null),i}return n}function L1(t,e){function n(s,r){const i=Ky(t,r,e);return dn(i!==null),P1(i,r,t.host,t._protocol)}return n}function zi(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Jk():r=Yk():n.getStatus()===402?r=Qk(t.bucket):n.getStatus()===403?r=Zk(t.path):r=s,r.serverResponse=s.serverResponse,r}return e}function Wy(t){const e=zi(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Xk(t.path)),i.serverResponse=r.serverResponse,i}return n}function M1(t,e,n){const s=e.fullServerUrl(),r=Ki(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new br(r,i,Zu(t,n),o);return a.errorHandler=Wy(e),a}function U1(t,e,n){const s=e.fullServerUrl(),r=Ki(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new br(r,i,L1(t,n),o);return a.errorHandler=Wy(e),a}function F1(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Gy(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=F1(null,e)),s}function $1(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let S=0;S<2;S++)C=C+Math.random().toString().slice(2);return C}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Gy(e,s,r),u=zy(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=An.getBlob(h,s,d);if(f===null)throw My();const m={name:c.fullPath},b=Ki(i,t.host,t._protocol),v="POST",E=t.maxUploadRetryTime,w=new br(b,v,Zu(t,n),E);return w.urlParams=m,w.headers=o,w.body=f.uploadData(),w.errorHandler=zi(e),w}class ta{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function eh(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{dn(!1)}return dn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function B1(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=Gy(e,s,r),a={name:o.fullPath},l=Ki(i,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=zy(o,n),d=t.maxUploadRetryTime;function f(b){eh(b);let v;try{v=b.getResponseHeader("X-Goog-Upload-URL")}catch{dn(!1)}return dn(Ya(v)),v}const m=new br(l,c,f,d);return m.urlParams=a,m.headers=u,m.body=h,m.errorHandler=zi(e),m}function V1(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(c){const u=eh(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{dn(!1)}h||dn(!1);const d=Number(h);return dn(!isNaN(d)),new ta(d,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new br(n,o,i,a);return l.headers=r,l.errorHandler=zi(e),l}const Ef=256*1024;function j1(t,e,n,s,r,i,o,a){const l=new ta(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw r1();const c=l.total-l.current;let u=c;r>0&&(u=Math.min(u,r));const h=l.current,d=h+u,m={"X-Goog-Upload-Command":u===c?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`},b=s.slice(h,d);if(b===null)throw My();function v(S,Q){const re=eh(S,["active","final"]),ue=l.current+u,W=s.size();let oe;return re==="final"?oe=Zu(e,i)(S,Q):oe=null,new ta(ue,W,re==="final",oe)}const E="POST",w=e.maxUploadRetryTime,C=new br(n,E,v,w);return C.headers=m,C.body=b.uploadData(),C.progressCallback=a||null,C.errorHandler=zi(t),C}const bt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Dl(t){switch(t){case"running":case"pausing":case"canceling":return bt.RUNNING;case"paused":return bt.PAUSED;case"success":return bt.SUCCESS;case"canceled":return bt.CANCELED;case"error":return bt.ERROR;default:return bt.ERROR}}/**
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
 */class q1{constructor(e,n,s){if(h1(e)||n!=null||s!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=s!=null?s:void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Os(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class H1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ds.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ds.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ds.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Ar("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ar("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ar("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ar("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ar("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class K1 extends H1{initXhr(){this.xhr_.responseType="text"}}function Us(){return new K1}/**
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
 */class z1{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Hy(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{this._request=void 0,this._chunkMultiplier=1,r._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=r,this._transition("error"))},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals("canceled")?this.completeTransitions_():(this._error=r,this._transition("error"))},this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=B1(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Us,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=V1(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,Us,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Ef*this._chunkMultiplier,n=new ta(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=j1(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Us,r,i);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ef*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=M1(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,Us,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=$1(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,Us,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Ly(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Dl(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new q1(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Dl(this._state)){case bt.SUCCESS:Os(this._resolve.bind(null,this.snapshot))();break;case bt.CANCELED:case bt.ERROR:const n=this._reject;Os(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Dl(this._state)){case bt.RUNNING:case bt.PAUSED:e.next&&Os(e.next.bind(e,this.snapshot))();break;case bt.SUCCESS:e.complete&&Os(e.complete.bind(e))();break;case bt.CANCELED:case bt.ERROR:e.error&&Os(e.error.bind(e,this._error))();break;default:e.error&&Os(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Es{constructor(e,n){this._service=e,n instanceof xt?this._location=n:this._location=xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Es(e,n)}get root(){const e=new xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qy(this._location.path)}get storage(){return this._service}get parent(){const e=C1(this._location.path);if(e===null)return null;const n=new xt(this._location.bucket,e);return new Es(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw o1(e)}}function W1(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new z1(t,new An(e),n)}function G1(t){t._throwIfRoot("getDownloadURL");const e=U1(t.storage,t._location,Hy());return t.storage.makeRequestWithTokens(e,Us).then(n=>{if(n===null)throw i1();return n})}function X1(t,e){const n=A1(t._location.path,e),s=new xt(t._location.bucket,n);return new Es(t.storage,s)}/**
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
 */function Q1(t){return/^[A-Za-z]+:\/\//.test(t)}function Y1(t,e){return new Es(t,e)}function Xy(t,e){if(t instanceof th){const n=t;if(n._bucket==null)throw s1();const s=new Es(n,n._bucket);return e!=null?Xy(s,e):s}else return e!==void 0?X1(t,e):t}function J1(t,e){if(e&&Q1(e)){if(t instanceof th)return Y1(t,e);throw xc("To use ref(service, url), the first argument must be a Storage instance.")}else return Xy(t,e)}function If(t,e){const n=e==null?void 0:e[Py];return n==null?null:xt.makeFromBucketSpec(n,t)}class th{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Oy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Wk,this._maxUploadRetryTime=Gk,this._requests=new Set,r!=null?this._bucket=xt.makeFromBucketSpec(r,this._host):this._bucket=If(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=xt.makeFromBucketSpec(this._url,e):this._bucket=If(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Es(this,e)}_makeRequest(e,n,s,r){if(this._deleted)return new a1(Uy());{const i=_1(e,this._appId,s,r,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Tf="@firebase/storage",xf="0.9.9";/**
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
 */const Qy="storage";function Z1(t,e,n){return t=Je(t),W1(t,e,n)}function eS(t){return t=Je(t),G1(t)}function tS(t,e){return t=Je(t),J1(t,e)}function nS(t=Jc(),e){return t=Je(t),Sa(t,Qy).getImmediate({identifier:e})}function sS(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new th(n,s,r,e,hr)}function rS(){gs(new $n(Qy,sS,"PUBLIC").setMultipleInstances(!0)),Gt(Tf,xf,""),Gt(Tf,xf,"esm2017")}rS();function nh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Yy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iS=Yy,Jy=new Ci("auth","Firebase",Yy());/**
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
 */const kf=new Xc("@firebase/auth");function Eo(t,...e){kf.logLevel<=me.ERROR&&kf.error(`Auth (${hr}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw sh(t,...e)}function Qt(t,...e){return sh(t,...e)}function oS(t,e,n){const s=Object.assign(Object.assign({},iS()),{[e]:n});return new Ci("auth","Firebase",s).create(e,{appName:t.name})}function sh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Jy.create(t,...e)}function J(t,e,...n){if(!t)throw sh(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eo(e),new Error(e)}function _n(t,e){t||an(e)}/**
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
 */const Sf=new Map;function ln(t){_n(t instanceof Function,"Expected a class definition");let e=Sf.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sf.set(t,e),e)}/**
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
 */function aS(t,e){const n=Sa(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Lo(i,e!=null?e:{}))return r;jt(r,"already-initialized")}return n.initialize({options:e})}function lS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function kc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cS(){return Cf()==="http:"||Cf()==="https:"}function Cf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function uS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cS()||gg()||"connection"in navigator)?navigator.onLine:!0}function hS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=pg()||mg()}get(){return uS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rh(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Zy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const fS=new Wi(3e4,6e4);function Ja(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gi(t,e,n,s,r={}){return e_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ai(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Zy.fetch()(t_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function e_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},dS),e);try{const r=new pS(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ho(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ho(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ho(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw oS(t,u,c);jt(t,u)}}catch(r){if(r instanceof Hn)throw r;jt(t,"network-request-failed")}}async function Za(t,e,n,s,r={}){const i=await Gi(t,e,n,s,r);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function t_(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?rh(t.config,r):`${t.config.apiScheme}://${r}`}class pS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Qt(this.auth,"network-request-failed")),fS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ho(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Qt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function gS(t,e){return Gi(t,"POST","/v1/accounts:delete",e)}async function mS(t,e){return Gi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yS(t,e=!1){const n=Je(t),s=await n.getIdToken(e),r=ih(s);J(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Qr(Ol(r.auth_time)),issuedAtTime:Qr(Ol(r.iat)),expirationTime:Qr(Ol(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ol(t){return Number(t)*1e3}function ih(t){var e;const[n,s,r]=t.split(".");if(n===void 0||s===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const i=m0(s);return i?JSON.parse(i):(Eo("Failed to decode base64 JWT payload"),null)}catch(i){return Eo("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function _S(t){const e=ih(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _i(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Hn&&vS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function vS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class n_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qr(this.lastLoginAt),this.creationTime=Qr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function na(t){var e;const n=t.auth,s=await t.getIdToken(),r=await _i(t,mS(n,{idToken:s}));J(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?IS(i.providerUserInfo):[],a=ES(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new n_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function bS(t){const e=Je(t);await na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ES(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function IS(t){return t.map(e=>{var{providerId:n}=e,s=nh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function TS(t,e){const n=await e_(t,{},async()=>{const s=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=t_(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_S(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await TS(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new vi;return s&&(J(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(J(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
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
 */function xn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fs{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=nh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new n_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _i(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yS(this,e)}reload(){return bS(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new fs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await na(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _i(this,gS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:S,isAnonymous:Q,providerData:re,stsTokenManager:ue}=n;J(C&&ue,e,"internal-error");const W=vi.fromJSON(this.name,ue);J(typeof C=="string",e,"internal-error"),xn(h,e.name),xn(d,e.name),J(typeof S=="boolean",e,"internal-error"),J(typeof Q=="boolean",e,"internal-error"),xn(f,e.name),xn(m,e.name),xn(b,e.name),xn(v,e.name),xn(E,e.name),xn(w,e.name);const oe=new fs({uid:C,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:Q,photoURL:m,phoneNumber:f,tenantId:b,stsTokenManager:W,createdAt:E,lastLoginAt:w});return re&&Array.isArray(re)&&(oe.providerData=re.map(de=>Object.assign({},de))),v&&(oe._redirectEventId=v),oe}static async _fromIdTokenResponse(e,n,s=!1){const r=new vi;r.updateFromServerResponse(n);const i=new fs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await na(i),i}}/**
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
 */class s_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}s_.type="NONE";const Af=s_;/**
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
 */function Io(t,e,n){return`firebase:${t}:${e}:${n}`}class Xs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Io(this.userKey,r.apiKey,i),this.fullPersistenceKey=Io("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Xs(ln(Af),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||ln(Af);const o=Io(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=fs._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xs(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Xs(i,e,s))}}/**
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
 */function Rf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(o_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(l_(e))return"Blackberry";if(c_(e))return"Webos";if(oh(e))return"Safari";if((e.includes("chrome/")||i_(e))&&!e.includes("edge/"))return"Chrome";if(a_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function r_(t=Ye()){return/firefox\//i.test(t)}function oh(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function i_(t=Ye()){return/crios\//i.test(t)}function o_(t=Ye()){return/iemobile/i.test(t)}function a_(t=Ye()){return/android/i.test(t)}function l_(t=Ye()){return/blackberry/i.test(t)}function c_(t=Ye()){return/webos/i.test(t)}function el(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xS(t=Ye()){var e;return el(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kS(){return yg()&&document.documentMode===10}function u_(t=Ye()){return el(t)||a_(t)||c_(t)||l_(t)||/windows phone/i.test(t)||o_(t)}function SS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function h_(t,e=[]){let n;switch(t){case"Browser":n=Rf(Ye());break;case"Worker":n=`${Rf(Ye())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${s}`}/**
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
 */class CS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const r of this.queue)await r(e),r.onAbort&&s.push(r.onAbort)}catch(r){s.reverse();for(const i of s)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=r)===null||n===void 0?void 0:n.message})}}}/**
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
 */class AS{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nf(this),this.idTokenSubscription=new Nf(this),this.beforeStateQueue=new CS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Xs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await na(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=h_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function ah(t){return Je(t)}class Nf{constructor(e){this.auth=e,this.observer=null,this.addObserver=k0(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class lh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function RS(t,e){return Gi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function NS(t,e){return Za(t,"POST","/v1/accounts:signInWithPassword",Ja(t,e))}/**
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
 */async function DS(t,e){return Za(t,"POST","/v1/accounts:signInWithEmailLink",Ja(t,e))}async function OS(t,e){return Za(t,"POST","/v1/accounts:signInWithEmailLink",Ja(t,e))}/**
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
 */class wi extends lh{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new wi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new wi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return NS(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return DS(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return RS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return OS(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qs(t,e){return Za(t,"POST","/v1/accounts:signInWithIdp",Ja(t,e))}/**
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
 */const PS="http://localhost";class Is extends lh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=nh(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Is(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Qs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qs(e,n)}buildRequest(){const e={requestUri:PS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
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
 */function LS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MS(t){const e=Or(Pr(t)).link,n=e?Or(Pr(e)).deep_link_id:null,s=Or(Pr(t)).deep_link_id;return(s?Or(Pr(s)).link:null)||s||n||e||t}class ch{constructor(e){var n,s,r,i,o,a;const l=Or(Pr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=LS((r=l.mode)!==null&&r!==void 0?r:null);J(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=MS(e);try{return new ch(n)}catch{return null}}}/**
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
 */class Er{constructor(){this.providerId=Er.PROVIDER_ID}static credential(e,n){return wi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ch.parseLink(n);return J(s,"argument-error"),wi._fromEmailAndCode(e,s.code,s.tenantId)}}Er.PROVIDER_ID="password";Er.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Er.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class d_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xi extends d_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rn extends Xi{constructor(){super("facebook.com")}static credential(e){return Is._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends Xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Is._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Nn.credential(n,s)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class Dn extends Xi{constructor(){super("github.com")}static credential(e){return Is._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
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
 */class On extends Xi{constructor(){super("twitter.com")}static credential(e,n){return Is._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return On.credential(n,s)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
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
 */class lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await fs._fromIdTokenResponse(e,s,r),o=Df(s);return new lr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Df(s);return new lr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Df(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class sa extends Hn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,sa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new sa(e,n,s,r)}}function f_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?sa._fromErrorAndOperation(t,i,e,s):i})}async function US(t,e,n=!1){const s=await _i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return lr._forOperation(t,"link",s)}/**
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
 */async function FS(t,e,n=!1){var s;const{auth:r}=t,i="reauthenticate";try{const o=await _i(t,f_(r,i,e,t),n);J(o.idToken,r,"internal-error");const a=ih(o.idToken);J(a,r,"internal-error");const{sub:l}=a;return J(t.uid===l,r,"user-mismatch"),lr._forOperation(t,i,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),o}}/**
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
 */async function p_(t,e,n=!1){const s="signIn",r=await f_(t,s,e),i=await lr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function $S(t,e){return p_(ah(t),e)}function BS(t,e,n){return $S(Je(t),Er.credential(e,n))}function uh(t,e,n,s){return Je(t).onAuthStateChanged(e,n,s)}function VS(t){return Je(t).signOut()}const ra="__sak";/**
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
 */class g_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function jS(){const t=Ye();return oh(t)||el(t)}const qS=1e3,HS=10;class m_ extends g_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jS()&&SS(),this.fallbackToPolling=u_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);kS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,HS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},qS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}m_.type="LOCAL";const KS=m_;/**
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
 */class y_ extends g_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}y_.type="SESSION";const __=y_;/**
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
 */function zS(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new tl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await zS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tl.receivers=[];/**
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
 */function hh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class WS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=hh("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Yt(){return window}function GS(t){Yt().location.href=t}/**
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
 */function v_(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function XS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YS(){return v_()?self:null}/**
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
 */const w_="firebaseLocalStorageDb",JS=1,ia="firebaseLocalStorage",b_="fbase_key";class Qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nl(t,e){return t.transaction([ia],e?"readwrite":"readonly").objectStore(ia)}function ZS(){const t=indexedDB.deleteDatabase(w_);return new Qi(t).toPromise()}function Sc(){const t=indexedDB.open(w_,JS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ia,{keyPath:b_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ia)?e(s):(s.close(),await ZS(),e(await Sc()))})})}async function Of(t,e,n){const s=nl(t,!0).put({[b_]:e,value:n});return new Qi(s).toPromise()}async function eC(t,e){const n=nl(t,!1).get(e),s=await new Qi(n).toPromise();return s===void 0?null:s.value}function Pf(t,e){const n=nl(t,!0).delete(e);return new Qi(n).toPromise()}const tC=800,nC=3;class E_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>nC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return v_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tl._getInstance(YS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XS(),!this.activeServiceWorker)return;this.sender=new WS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sc();return await Of(e,ra,"1"),await Pf(e,ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Of(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>eC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=nl(r,!1).getAll();return new Qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E_.type="LOCAL";const sC=E_;/**
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
 */function rC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iC(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Qt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",rC().appendChild(s)})}function oC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Wi(3e4,6e4);/**
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
 */function aC(t,e){return e?ln(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class dh extends lh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lC(t){return p_(t.auth,new dh(t),t.bypassAuthState)}function cC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),FS(n,new dh(t),t.bypassAuthState)}async function uC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),US(n,new dh(t),t.bypassAuthState)}/**
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
 */class I_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lC;case"linkViaPopup":case"linkViaRedirect":return uC;case"reauthViaPopup":case"reauthViaRedirect":return cC;default:jt(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hC=new Wi(2e3,1e4);class Bs extends I_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Bs.currentPopupAction&&Bs.currentPopupAction.cancel(),Bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=hh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,hC.get())};e()}}Bs.currentPopupAction=null;/**
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
 */const dC="pendingRedirect",To=new Map;class fC extends I_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=To.get(this.auth._key());if(!e){try{const s=await pC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pC(t,e){const n=yC(e),s=mC(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function gC(t,e){To.set(t._key(),e)}function mC(t){return ln(t._redirectPersistence)}function yC(t){return Io(dC,t.config.apiKey,t.name)}async function _C(t,e,n=!1){const s=ah(t),r=aC(s,e),o=await new fC(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const vC=10*60*1e3;class wC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!T_(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lf(e))}saveEventToCache(e){this.cachedEventUids.add(Lf(e)),this.lastProcessedEventTime=Date.now()}}function Lf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function T_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return T_(t);default:return!1}}/**
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
 */async function EC(t,e={}){return Gi(t,"GET","/v1/projects",e)}/**
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
 */const IC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TC=/^https?/;async function xC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EC(t);for(const n of e)try{if(kC(n))return}catch{}jt(t,"unauthorized-domain")}function kC(t){const e=kc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!TC.test(n))return!1;if(IC.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const SC=new Wi(3e4,6e4);function Mf(){const t=Yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CC(t){return new Promise((e,n)=>{var s,r,i;function o(){Mf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mf(),n(Qt(t,"network-request-failed"))},timeout:SC.get()})}if(!((r=(s=Yt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Yt().gapi)===null||i===void 0)&&i.load)o();else{const a=oC("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},iC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xo=null,e})}let xo=null;function AC(t){return xo=xo||CC(t),xo}/**
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
 */const RC=new Wi(5e3,15e3),NC="__/auth/iframe",DC="emulator/auth/iframe",OC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LC(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rh(e,DC):`https://${t.config.authDomain}/${NC}`,s={apiKey:e.apiKey,appName:t.name,v:hr},r=PC.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ai(s).slice(1)}`}async function MC(t){const e=await AC(t),n=Yt().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:LC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OC,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=Yt().setTimeout(()=>{i(o)},RC.get());function l(){Yt().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const UC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FC=500,$C=600,BC="_blank",VC="http://localhost";class Uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jC(t,e,n,s=FC,r=$C){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},UC),{width:s.toString(),height:r.toString(),top:i,left:o}),c=Ye().toLowerCase();n&&(a=i_(c)?BC:n),r_(c)&&(e=e||VC,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(xS(c)&&a!=="_self")return qC(e||"",a),new Uf(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new Uf(h)}function qC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const HC="__/auth/handler",KC="emulator/auth/handler";function Ff(t,e,n,s,r,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:hr,eventId:r};if(e instanceof d_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",x0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof Xi){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${zC(t)}?${Ai(a).slice(1)}`}function zC({config:t}){return t.emulator?rh(t,KC):`https://${t.authDomain}/${HC}`}/**
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
 */const Pl="webStorageSupport";class WC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=__,this._completeRedirectFn=_C,this._overrideRedirectResult=gC}async _openPopup(e,n,s,r){var i;_n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ff(e,n,s,kc(),r);return jC(e,o,hh())}async _openRedirect(e,n,s,r){return await this._originValidation(e),GS(Ff(e,n,s,kc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(_n(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await MC(e),s=new wC(e);return n.register("authEvent",r=>(J(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pl,{type:Pl},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Pl];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return u_()||oh()||el()}}const GC=WC;var $f="@firebase/auth",Bf="0.20.5";/**
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
 */class XC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function QC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YC(t){gs(new $n("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,l)=>{J(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),J(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h_(t)},u=new AS(a,l,c);return lS(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gs(new $n("auth-internal",e=>{const n=ah(e.getProvider("auth").getImmediate());return(s=>new XC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt($f,Bf,QC(t)),Gt($f,Bf,"esm2017")}/**
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
 */function JC(t=Jc()){const e=Sa(t,"auth");return e.isInitialized()?e.getImmediate():aS(t,{popupRedirectResolver:GC,persistence:[sC,KS,__]})}YC("Browser");const ZC={apiKey:"AIzaSyBOddjMrPqNP6j__epku9_tgqHI97nuVAM",authDomain:"aslanov-c939e.firebaseapp.com",projectId:"aslanov-c939e",storageBucket:"aslanov-c939e.appspot.com",messagingSenderId:"307245842602",appId:"1:307245842602:web:4982330aff14821e34d0d3"},fh=xE(ZC),oa=kk(fh),eA=nS(fh),bi=JC(fh);const Wn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},x_=t=>(xi("data-v-18bf191f"),t=t(),ki(),t),tA={class:"bg-gray md:bg-black"},nA=x_(()=>y("h1",null,null,-1)),sA=x_(()=>y("button",{type:"button"},[y("img",{src:f0})],-1)),rA=[sA],iA=He("Home"),oA=He("About"),aA=He("Projects"),lA=He("Contact"),cA={key:0},uA=He("Admin"),hA={__name:"AppNav",setup(t){const e=Ae("");let n=Ae(!1);const s=()=>{if(!n.value)return e.value="pb-0",n.value=!0;if(e.value="",n.value)return n.value=!1},r=ug(),i=Ae(!1),o=()=>{confirm("are you sure?")&&VS(bi).then(()=>{r.push("/")})};return xs(()=>{uh(bi,a=>{a?(i.value=!0,r.push("/admin")):i.value=!1})}),(a,l)=>{const c=Si("RouterLink");return q(),Y("div",tA,[y("nav",{class:Bt(["max-w-[1080px] mx-auto py-14px md:py-28px md:flex md:justify-between md:items-center",e.value])},[y("div",{class:"flex items-center justify-between bar"},[nA,y("div",{onClick:s,class:"flex md:hidden px-24px xl:px-0"},rA)]),y("ul",{class:Bt([ve(n)?"flex":"hidden","lg:px-0 flex-col mt-14px gap-0 md:flex md:space-y-0 md:flex-row md:items-center md:gap-20px md:mt-0 uppercase"])},[y("li",null,[G(c,{to:"/"},{default:ne(()=>[iA]),_:1})]),y("li",null,[G(c,{to:"/about"},{default:ne(()=>[oA]),_:1})]),y("li",null,[G(c,{to:"/projects"},{default:ne(()=>[aA]),_:1})]),y("li",null,[G(c,{to:"/contact"},{default:ne(()=>[lA]),_:1})]),i.value?(q(),Y("li",cA,[G(c,{to:"/admin"},{default:ne(()=>[uA]),_:1})])):ps("",!0),y("li",null,[i.value?(q(),Y("button",{key:0,onClick:o,class:"button text-[14px] bg-lightRed py-[12px] p-2 rounded-none hover:opacity-50 uppercase w-full md:py-[2px] md:rounded"}," Log out ")):ps("",!0)])],2)],2)])}}},dA=Wn(hA,[["__scopeId","data-v-18bf191f"]]),fA="/assets/github-rounded.ab05a861.svg",pA="/assets/behance-rounded.cbdefa78.svg",gA="/assets/linkedin-rounded.307ce29a.svg",mA="/assets/stars.7d6b97fb.png";const yA={},k_=t=>(xi("data-v-d6ffd74d"),t=t(),ki(),t),_A={class:"bg-gray py-24px"},vA={class:"max-w-[1080px] px-[14px] xl:px-0 mx-auto"},wA={class:"flex gap-[24px] flex-col md:flex-row md:justify-between items-center"},bA={class:"self-start mt-14px flex gap-10px md:gap-20px uppercase"},EA=He("Home"),IA=He("About"),TA=He("Projects"),xA=He("Contact"),kA=Hp('<ul class="flex gap-[10px] self-start" data-v-d6ffd74d><li class="hover:opacity-50 transition-all" data-v-d6ffd74d><a href="https://github.com/itsaslanov" target="_blank" data-v-d6ffd74d><img src="'+fA+'" class="w-[32px]" alt="github" data-v-d6ffd74d></a></li><li class="hover:opacity-50 transition-all" data-v-d6ffd74d><a href="https://www.behance.net/itsaslanov" target="_blank" data-v-d6ffd74d><img src="'+pA+'" class="w-[32px]" alt="behance" data-v-d6ffd74d></a></li><li class="hover:opacity-50 transition-all" data-v-d6ffd74d><a href="#" target="_blank" data-v-d6ffd74d><img src="'+gA+'" class="w-[32px]" alt="linkedin" data-v-d6ffd74d></a></li></ul>',1),SA=k_(()=>y("div",{class:"w-[100%] mx-auto bg-lightBlue h-[1px] mt-24px"},null,-1)),CA=k_(()=>y("div",{class:"flex justify-center mt-24px"},[y("span",{class:"text-[14px] text-[#DADADA] tracking-[1px] flex gap-1"},[He("Designed and built by Aslanov "),y("img",{src:mA,class:"w-[22px]",alt:""})])],-1));function AA(t,e){const n=Si("RouterLink");return q(),Y("footer",_A,[y("div",vA,[y("div",wA,[y("ul",bA,[y("li",null,[G(n,{to:"/"},{default:ne(()=>[EA]),_:1})]),y("li",null,[G(n,{to:"/about"},{default:ne(()=>[IA]),_:1})]),y("li",null,[G(n,{to:"/projects"},{default:ne(()=>[TA]),_:1})]),y("li",null,[G(n,{to:"/contact"},{default:ne(()=>[xA]),_:1})])]),kA]),SA,CA])])}const RA=Wn(yA,[["render",AA],["__scopeId","data-v-d6ffd74d"]]);const NA={__name:"App",setup(t){return(e,n)=>(q(),Y(we,null,[G(dA),G(ve(cg),null,{default:ne(({Component:s})=>[G(Wc,{name:"fade",mode:"out-in"},{default:ne(()=>[(q(),pn(Rp(s)))]),_:2},1024)]),_:1}),G(RA,{class:"mt-24px"})],64))}},S_="/assets/github.be7809c9.svg",C_="/assets/eye-line.5f848273.svg",ph="/assets/arrow.b65a3ba5.svg",A_="/assets/behance.26c3577c.svg",R_="/assets/person.b3154a2b.png",DA={class:"flex flex-col gap-12px md:gap-20px md:flex-row md:mt-0px"},OA=y("div",{class:"w-full md:max-w-[275px]"},[y("img",{src:R_,class:"w-full border border-lightBlue rounded-6px custom-box-shadow"})],-1),PA={class:"w-full bg-gray border border-lightBlue rounded-[6px] custom-box-shadow px-[14px] py-[20px] md:py-[42px] lg:px-[60px] flex flex-col gap-20px"},LA=y("h2",{class:"uppercase text-[22px] text-22px font-medium"},"Azizbek Aslanov",-1),MA={class:"flex flex-col gap-5px list-disc text-[16px] ml-12px font-normal"},UA=He(" More about me? "),FA={__name:"AppHeader",setup(t){const e=Ae([{title:"Web front-end developer, with 2 years of experience."},{title:"Have a deep knowledge of UI/UX design."},{title:"Have great soft skills."}]);return(n,s)=>{const r=Si("router-link");return q(),Y("div",DA,[OA,y("div",PA,[LA,y("ul",MA,[(q(!0),Y(we,null,ct(e.value,i=>(q(),Y("li",null,Xe(i.title),1))),256))]),G(r,{class:"text-[16px] text-aqua underline font-normal",to:"/about"},{default:ne(()=>[UA]),_:1})])])}}},$A={class:"flex gap-[8px]"},BA={class:"text-[18px] uppercase text-aqua self-center"},aa={__name:"BaseBadge",props:{contentText:{type:String},badge:{type:Boolean,default:!1}},setup(t){const e=t,n=yt(()=>{if(e.badge===!1)return"hidden"});return(s,r)=>(q(),Y("div",$A,[y("h1",BA,Xe(t.contentText),1),y("span",{class:Bt([ve(n),"uppercase bg-lightRed h-max px-6px py-2px rounded-[4px] self-center text-[14px]"])},"Top",2)]))}},VA={},jA={class:"rounded-6px bg-gray border border-lightBlue custom-box-shadow"};function qA(t,e){return q(),Y("div",jA,[rs(t.$slots,"image"),rs(t.$slots,"hashtag"),rs(t.$slots,"title"),rs(t.$slots,"buttons")])}const la=Wn(VA,[["render",qA]]);const HA=["is-default","is-primary","is-secondary"],Jt={__name:"BaseButton",props:{color:{type:String,default:()=>"default",validation:t=>HA.includes(t)}},setup(t){const{color:e}=t,n=yt(()=>({[`is-${e}`]:!0}));return(s,r)=>(q(),Y("button",{class:Bt([ve(n),"base-button flex gap-2 w-full p-[4px] md:p-[2px] justify-center rounded"])},[rs(s.$slots,"default")],2))}};const KA={},zA={class:"rounded-6px bg-gray border border-lightBlue custom-box-shadow pb-2 w-full"},WA=Hp('<div class="bg-[#939393] skeleton-box w-full h-[188px] rounded-t-6px" data-v-1e2334ea></div><div class="bg-[#939393] skeleton-box w-[100px] ml-3 h-[15px] mt-3 rounded-sm" data-v-1e2334ea></div><div class="bg-[#939393] skeleton-box w-[230px] ml-3 h-[15px] mt-4 rounded-sm" data-v-1e2334ea></div><div class="flex gap-[10px]" data-v-1e2334ea><div class="bg-[#939393] skeleton-box w-[110px] ml-3 h-[25px] mt-3 rounded-sm" data-v-1e2334ea></div><div class="bg-[#939393] skeleton-box w-[110px] h-[25px] mt-3 rounded-sm" data-v-1e2334ea></div></div>',4),GA=[WA];function XA(t,e){return q(),Y("div",zA,GA)}const ca=Wn(KA,[["render",XA],["__scopeId","data-v-1e2334ea"]]),QA={class:"max-w-[1080px] px-[14px] xl:px-0 mx-auto"},YA={key:0,class:"grid-system mt-14px"},JA={class:"grid-system mt-14px"},ZA=["src"],eR={class:"flex flex-wrap gap-2 text-sm py-12px px-12px"},tR={class:"block pb-12px px-12px text-lg text-18px"},nR=y("div",{class:"px-12px"},[y("div",{class:"mb-12px w-[100%] mx-auto bg-lightBlue h-[1px]"})],-1),sR={class:"pb-12px px-12px md:flex md:gap-8px md:justify-center"},rR=["href"],iR=y("img",{src:S_,alt:"github",class:"w-[20px] self-center"},null,-1),oR=y("span",null,"Github",-1),aR=y("div",{class:"h-[10px] block md:h-[0px] md:hidden"},null,-1),lR=["href"],cR=y("img",{src:C_,alt:"eye-line",class:"w-[20px] self-center"},null,-1),uR=y("span",null,"Preview",-1),hR={class:"flex items-center justify-end"},dR=y("span",{class:"flex gap-[8px] text-lg text-aqua mt-18px text-[15px]"},[y("img",{src:ph,alt:""}),He(" View more ")],-1),fR={key:1,class:"grid-system mt-14px"},pR={class:"grid-system mt-14px"},gR=["src"],mR={class:"flex flex-wrap gap-2 text-sm py-12px px-12px"},yR={class:"block pb-12px px-12px text-lg text-18px"},_R=y("div",{class:"px-12px"},[y("div",{class:"mb-12px w-[100%] mx-auto bg-lightBlue h-[1px]"})],-1),vR={class:"pb-12px px-12px md:flex md:gap-8px md:justify-center"},wR=["href"],bR=y("img",{src:A_,alt:"github",class:"w-[20px] self-center"},null,-1),ER=y("span",null,"Behance",-1),IR=[bR,ER],TR={class:"flex items-center justify-end"},xR=y("span",{class:"flex gap-[8px] text-lg text-aqua mt-18px text-[15px]"},[y("img",{src:ph,alt:""}),He(" View more ")],-1),kR={__name:"HomeView",setup(t){const e=Ae(!1),n=Ae([]),s=Ae([]);return xs(()=>{const r=Jo(oa,"cards"),i=Xu(r,Bk("limited","==",!0),Qu("date","desc"));Dy(i,o=>{n.value=[],s.value=[],e.value=!0,o.forEach(a=>{a.data().type==="programming"&&n.value.push({id:a.data().id,img:a.data().img,hashtags:a.data().hashtags,title:a.data().title,githubLink:a.data().githubLink,previewLink:a.data().previewLink}),a.data().type==="designing"&&s.value.push({id:a.data().id,img:a.data().img,hashtags:a.data().hashtags,title:a.data().title,previewLink:a.data().previewLink})})}),e.value=!1}),(r,i)=>{const o=Si("RouterLink");return q(),Y("div",QA,[G(FA,{class:"mt-[14px] md:mt-[0px]"}),G(aa,{class:"mt-14px",contentText:"Front-end projects",badge:!0}),e.value?ps("",!0):(q(),Y("div",YA,[(q(),Y(we,null,ct(4,a=>G(ca,{key:a.id})),64))])),y("div",JA,[(q(!0),Y(we,null,ct(n.value,a=>(q(),pn(la,{key:a.id,class:"hover:opacity-90"},{image:ne(()=>[y("img",{src:a.img,class:"rounded-t-6px",alt:""},null,8,ZA)]),hashtag:ne(()=>[y("ul",eR,[(q(!0),Y(we,null,ct(a.hashtags,l=>(q(),Y("li",{class:"text-aqua bg-darkBlue px-[5px] rounded-sm",key:l}," #"+Xe(l),1))),128))])]),title:ne(()=>[y("div",tR,Xe(a.title),1)]),buttons:ne(()=>[nR,y("div",sR,[y("a",{href:a.githubLink,class:"w-full",target:"_blank"},[G(Jt,{color:"default",class:"flex gap-[8px]"},{default:ne(()=>[iR,oR]),_:1})],8,rR),aR,y("a",{href:a.previewLink,class:"w-full",target:"_blank"},[G(Jt,{color:"primary",class:"flex gap-[8px]"},{default:ne(()=>[cR,uR]),_:1})],8,lR)])]),_:2},1024))),128))]),y("div",hR,[G(o,{to:"/projects",class:"hover:opacity-50 transition-all"},{default:ne(()=>[dR]),_:1})]),G(aa,{contentText:"UI design projects",badge:!0}),e.value?ps("",!0):(q(),Y("div",fR,[(q(),Y(we,null,ct(4,a=>G(ca,{key:a.id})),64))])),y("div",pR,[(q(!0),Y(we,null,ct(s.value,a=>(q(),pn(la,{key:a.id,class:"hover:opacity-90"},{image:ne(()=>[y("img",{src:a.img,class:"rounded-t-6px",alt:""},null,8,gR)]),hashtag:ne(()=>[y("ul",mR,[(q(!0),Y(we,null,ct(a.hashtags,l=>(q(),Y("li",{class:"text-aqua bg-darkBlue px-[5px] rounded-sm",key:l}," #"+Xe(l),1))),128))])]),title:ne(()=>[y("div",yR,Xe(a.title),1)]),buttons:ne(()=>[_R,y("div",vR,[G(Jt,{color:"secondary"},{default:ne(()=>[y("a",{href:a.previewLink,class:"flex gap-[8px] justify-center w-full",target:"_blank"},IR,8,wR)]),_:2},1024)])]),_:2},1024))),128))]),y("div",TR,[G(o,{to:"/projects",class:"hover:opacity-50 transition-all"},{default:ne(()=>[xR]),_:1})])])}}},SR={class:"max-w-[1080px] px-[14px] xl:px-0 mx-auto"},CR={class:"flex flex-col md:flex-row gap-12px md:gap-20px mt-[14px] md:mt-[0px]"},AR=y("div",{class:"w-full md:max-w-[275px]"},[y("img",{src:R_,class:"w-full border border-lightBlue rounded-6px custom-box-shadow"})],-1),RR={class:"w-full bg-gray rounded-md border border-lightBlue py-14px md:py-28px px-[20px] md:px-[60px]"},NR=y("span",{class:"uppercase text-[12px] text-aqua"},"Full name:",-1),DR={class:"uppercase text-[18px] font-medium md:text-[22px] text-18px"},OR=y("span",{class:"uppercase text-[12px] text-aqua block mt-14px"},"Job:",-1),PR={class:"text-[18px] text-18px"},LR=y("span",{class:"uppercase text-[12px] text-aqua block mt-14px"},"About me:",-1),MR={class:"text-[16px] text-start md:text-justify"},UR=y("span",{class:"uppercase text-[12px] text-aqua block mt-14px"},"front-end skills:",-1),FR={class:"mt-6px flex flex-wrap gap-[8px] text-16px"},$R=y("ul",{class:"mt-4 list-disc ml-12px"},[y("li",{class:"hover:opacity-50 transition-all"},[y("a",{href:"https://www.frontendmentor.io/profile/itsaslanov",target:"_blank",class:"block underline"},"My Frontend Mentor profile")])],-1),BR=y("span",{class:"uppercase text-[12px] text-aqua block mt-14px"},"UI/UX skills:",-1),VR={class:"mt-6px flex flex-wrap gap-[8px] text-16px"},jR=y("span",{class:"uppercase text-[12px] text-aqua block mt-14px"},"some certificates:",-1),qR={class:"flex flex-col gap-5px list-disc text-[16px] text-16px ml-12px font-normal underline"},HR=["href"],KR=y("span",{class:"uppercase text-[12px] text-aqua block mt-14px"},"My goal:",-1),zR={class:"text-[16px] text-16px text-start md:text-justify"},WR={__name:"AboutView",setup(t){const e={fullName:"Azizbek Aslanov",job:"Front-end developer",aboutPersonSelf:"Hey there, I am a front-end developer, with 2 years of experience. Also, I have a deep knowledge of UI/UX design. I really do enjoy what I do, and much more responsible for the projects I get. Currently, I am working on VUE.js to hone my Javascript skill. I also do enjoy learning new technologies. Apart from that, I have great communication skills in English. Last but not least, I have an IELTS certificate(5.5 B2, August 7 2021), which shows the level of my English. Even though it has been a pretty long time, I am still enhancing my English (probably now C1).",frontEndSkills:[{skill:"Html5"},{skill:"Css3"},{skill:"Scss"},{skill:"Bootstrap5"},{skill:"Tailwind"},{skill:"Bulma"},{skill:"Javascript"},{skill:"Gsap"},{skill:"Vuejs"},{skill:"Pinia"},{skill:"Git"},{skill:"Github"}],uiDesignSkills:[{skill:"AdobePhotoshop"},{skill:"Figma"},{skill:"AdobeXD"}],certificates:[{name:"IELTS certificate",link:"https://firebasestorage.googleapis.com/v0/b/aslanov-c939e.appspot.com/o/my-IELTS.pdf?alt=media&token=48c0d8b7-83c9-4dc7-bd66-a21c81e7ab88"},{name:"Udemy UI/UX certificate",link:"https://firebasestorage.googleapis.com/v0/b/aslanov-c939e.appspot.com/o/udemy.pdf?alt=media&token=a040fec1-93ef-4942-b822-5c024a07edfa"}],goal:"Well, I would say that I want to work with a great team, also participate in large projects in order to boost my js skill. I guess that working with a great team leads to much more experience."},{fullName:n,job:s,aboutPersonSelf:r,frontEndSkills:i,uiDesignSkills:o,certificates:a,goal:l}=e;return(c,u)=>(q(),Y("div",SR,[y("div",CR,[AR,y("div",RR,[NR,y("h2",DR,Xe(ve(n)),1),OR,y("h3",PR,Xe(ve(s)),1),LR,y("h3",MR,Xe(ve(r)),1),UR,y("ul",FR,[(q(!0),Y(we,null,ct(ve(i),h=>(q(),Y("li",{class:"text-aqua bg-darkBlue px-[5px] rounded-sm",key:h.id}," #"+Xe(h.skill),1))),128))]),$R,BR,y("ul",VR,[(q(!0),Y(we,null,ct(ve(o),h=>(q(),Y("li",{class:"text-aqua bg-darkBlue px-[5px] rounded-sm",key:h.id},"#"+Xe(h.skill),1))),128))]),jR,y("ul",qR,[(q(!0),Y(we,null,ct(ve(a),h=>(q(),Y("li",{class:"hover:opacity-50 transition-all",key:h.id},[y("a",{href:h.link,target:"_blank"},Xe(h.name),9,HR)]))),128))]),KR,y("h3",zR,Xe(ve(l)),1)])])]))}};const GR={class:"max-w-[1080px] px-[14px] xl:px-0 mx-auto"},XR={key:0,class:"grid-system mt-14px"},QR={class:"grid-system mt-14px"},YR=["src"],JR={class:"flex flex-wrap gap-2 text-sm py-12px px-12px"},ZR={class:"block pb-12px px-12px text-lg text-18px"},eN=y("div",{class:"px-12px"},[y("div",{class:"mb-12px w-[100%] mx-auto bg-lightBlue h-[1px]"})],-1),tN={class:"pb-12px px-12px md:flex md:gap-8px md:justify-center"},nN=["href"],sN=y("img",{src:S_,alt:"github",class:"w-[20px] self-center"},null,-1),rN=y("span",null,"Github",-1),iN=y("div",{class:"h-[10px] block md:h-[0px] md:hidden"},null,-1),oN=["href"],aN=y("img",{src:C_,alt:"eye-line",class:"w-[20px] self-center"},null,-1),lN=y("span",null,"Preview",-1),cN={key:1,class:"grid-system mt-14px"},uN={class:"grid-system mt-14px"},hN=["src"],dN={class:"flex flex-wrap gap-2 text-sm py-12px px-12px"},fN={class:"block pb-12px px-12px text-lg text-18px"},pN=y("div",{class:"px-12px"},[y("div",{class:"mb-12px w-[100%] mx-auto bg-lightBlue h-[1px]"})],-1),gN={class:"pb-12px px-12px md:flex md:gap-8px md:justify-center"},mN=["href"],yN=y("img",{src:A_,alt:"github",class:"w-[20px] self-center"},null,-1),_N=y("span",null,"Behance",-1),vN=[yN,_N],wN={__name:"ProjectsView",setup(t){const e=Ae(!1),n=Ae([]),s=Ae([]);return xs(()=>{const r=Jo(oa,"cards"),i=Xu(r,Qu("date"));Dy(i,o=>{e.value=!0,n.value=[],s.value=[],o.forEach(a=>{a.data().type==="programming"&&n.value.push({id:a.data().id,img:a.data().img,hashtags:a.data().hashtags,title:a.data().title,githubLink:a.data().githubLink,previewLink:a.data().previewLink}),a.data().type==="designing"&&s.value.push({id:a.data().id,img:a.data().img,hashtags:a.data().hashtags,title:a.data().title,previewLink:a.data().previewLink})})}),e.value=!1}),(r,i)=>(q(),Y("div",GR,[G(aa,{class:"mt-[14px] md:mt-[0px]",contentText:"Front-end projects",badge:!1}),e.value?ps("",!0):(q(),Y("div",XR,[(q(),Y(we,null,ct(4,o=>G(ca,{key:o.id})),64))])),y("div",QR,[(q(!0),Y(we,null,ct(n.value,o=>(q(),pn(la,{key:o.id,class:"hover:opacity-90"},{image:ne(()=>[y("img",{src:o.img,class:"rounded-t-6px",alt:""},null,8,YR)]),hashtag:ne(()=>[y("ul",JR,[(q(!0),Y(we,null,ct(o.hashtags,a=>(q(),Y("li",{class:"text-aqua bg-darkBlue px-[5px] rounded-sm",key:a}," #"+Xe(a),1))),128))])]),title:ne(()=>[y("div",ZR,Xe(o.title),1)]),buttons:ne(()=>[eN,y("div",tN,[y("a",{href:o.githubLink,class:"w-full",target:"_blank"},[G(Jt,{color:"default",class:"flex gap-[8px]"},{default:ne(()=>[sN,rN]),_:1})],8,nN),iN,y("a",{href:o.previewLink,class:"w-full",target:"_blank"},[G(Jt,{color:"primary",class:"flex gap-[8px]"},{default:ne(()=>[aN,lN]),_:1})],8,oN)])]),_:2},1024))),128))]),G(aa,{class:"mt-14px",contentText:"UI design projects",badge:!1}),e.value?ps("",!0):(q(),Y("div",cN,[(q(),Y(we,null,ct(4,o=>G(ca,{key:o.id})),64))])),y("div",uN,[(q(!0),Y(we,null,ct(s.value,o=>(q(),pn(la,{key:o.id,class:"hover:opacity-90"},{image:ne(()=>[y("img",{src:o.img,class:"rounded-t-6px",alt:""},null,8,hN)]),hashtag:ne(()=>[y("ul",dN,[(q(!0),Y(we,null,ct(o.hashtags,a=>(q(),Y("li",{class:"text-aqua bg-darkBlue px-[5px] rounded-sm",key:a}," #"+Xe(a),1))),128))])]),title:ne(()=>[y("div",fN,Xe(o.title),1)]),buttons:ne(()=>[pN,y("div",gN,[G(Jt,{color:"secondary"},{default:ne(()=>[y("a",{href:o.previewLink,class:"flex gap-[8px] justify-center w-full",target:"_blank"},vN,8,mN)]),_:2},1024)])]),_:2},1024))),128))])]))}},Ei={_origin:"https://api.emailjs.com"},bN=(t,e="https://api.emailjs.com")=>{Ei._userID=t,Ei._origin=e},N_=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Vf{constructor(e){this.status=e.status,this.text=e.responseText}}const D_=(t,e,n={})=>new Promise((s,r)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:o})=>{const a=new Vf(o);a.status===200||a.text==="OK"?s(a):r(a)}),i.addEventListener("error",({target:o})=>{r(new Vf(o))}),i.open("POST",Ei._origin+t,!0),Object.keys(n).forEach(o=>{i.setRequestHeader(o,n[o])}),i.send(e)}),EN=(t,e,n,s)=>{const r=s||Ei._userID;N_(r,t,e);const i={lib_version:"3.6.2",user_id:r,service_id:t,template_id:e,template_params:n};return D_("/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})},IN=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},TN=(t,e,n,s)=>{const r=s||Ei._userID,i=IN(n);N_(r,t,e);const o=new FormData(i);return o.append("lib_version","3.6.2"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",r),D_("/api/v1.0/email/send-form",o)},xN={init:bN,send:EN,sendForm:TN},kN={class:"max-w-[1080px] px-[14px] xl:px-0 mx-auto"},SN=["onSubmit"],CN=y("h1",{class:"text-[24px] mb-[4px] mt-[14px] md:mt-[80px] flex gap-2 justify-center uppercase"},"Send your message to me",-1),AN={class:"block"},RN=y("span",{class:"block text-[14px] font-medium text-slate-700 mb-[4px]"},"Name:",-1),NN=["value"],DN={class:"block"},ON=y("span",{class:"block text-[14px] font-medium text-slate-700 mb-[4px]"},[He("Email: "),y("span",{class:"text-lightRed opacity-60"},"(please, add your own email to text you back)")],-1),PN=["value"],LN={class:"block"},MN=y("span",{class:"block text-[14px] font-medium text-slate-700 mb-[4px]"},"Message:",-1),UN=["value"],FN=He(" Send "),$N={__name:"ContactView",setup(t){const e=Ae(null),n=Ae(null),s=()=>{xN.sendForm("service_id","template_id",n.value,"qIzHieFa7Mryt3qMG").then(()=>{alert("Message sent!"),e.value=""},r=>{alert("Message not sent",r)})};return(r,i)=>(q(),Y("div",kN,[y("form",{onSubmit:Ta(s,["prevent"]),ref_key:"form",ref:n,class:"flex flex-col gap-4 max-w-[600px] mx-auto"},[CN,y("label",AN,[RN,y("input",{type:"text",name:"user_name",value:e.value,class:"border-[2px] px-[12px] py-[6px] w-full rounded border-lightBlue bg-black outline-none block focus:border-aqua"},null,8,NN)]),y("label",DN,[ON,y("input",{type:"email",name:"user_email",value:e.value,class:"border-[2px] px-[12px] py-[6px] w-full rounded border-lightBlue bg-black outline-none block focus:border-aqua"},null,8,PN)]),y("label",LN,[MN,y("textarea",{rows:"10",type:"text",name:"message",value:e.value,class:"border-[2px] px-[12px] py-[6px] w-full rounded border-lightBlue bg-black outline-none block focus:border-aqua"},null,8,UN)]),G(Jt,{color:"secondary",class:"md:py-[6px] py-6px mb-[60px] md:mb-[80px]"},{default:ne(()=>[rs(r.$slots,"default",{},()=>[FN])]),_:3})],40,SN)]))}},O_="/assets/img.b98b815f.svg";function P_(){const t=Ae(""),e=Ae(""),n=Ae(""),s=Ae([]),r=Ae(null),i=Ae(0),o=yt({get:()=>s.value.map(f=>`#${f}`).join(" "),set:f=>{s.value=f.split(" ").map(m=>m.replace("#",""))}}),a=()=>{s.value=s.value.filter(f=>f&&f.trim())},l=f=>{i.value=f.bytesTransferred/f.totalBytes*100},c=async f=>{const m=tS(eA,f.name),b=Z1(m,f),v=b.on("state_changed",l);return new Promise((E,w)=>{b.then(C=>{v(),E(eS(C.ref))}).catch(w)})},u=Jo(oa,"cards"),h=async f=>await Hk(u,f),d=Xu(Jo(oa,"cards"),Qu("date"));return{title:t,previewLink:e,hashtags:s,githubLink:n,uploadImg:r,uploadValue:i,hashtagsInput:o,onHashtagInputBlur:a,onImageUploadStatusChanged:l,uploadImage:c,addCardToFirebase:h,collectionQuery:d}}const Ir=t=>(xi("data-v-92c00f31"),t=t(),ki(),t),BN=["onSubmit"],VN={class:"rounded border-aqua border-dashed border-[2px] bg-black py-[20px] cursor-pointer"},jN=Ir(()=>y("span",{class:"flex flex-col justify-center items-center gap-[6px] mt-[25px] w-full"},[y("img",{src:O_,class:"w-[58px] h-[58px]",alt:""}),y("span",{class:"block"},"Drop your image here"),y("span",{class:"block text-[13px] text-aqua"},"Image should be 1020x756px")],-1)),qN={class:"block"},HN=Ir(()=>y("span",{class:"block text-[14px] font-medium text-slate-700 mb-[4px] opacity-40"},"Hashtags:",-1)),KN={class:"block"},zN=Ir(()=>y("span",{class:"block text-[14px] font-medium text-slate-700 mb-[4px] opacity-40 dd"},"Title:",-1)),WN={class:"block"},GN=Ir(()=>y("span",{class:"block text-[14px] font-medium text-slate-700 mb-[4px] opacity-40"},"Github repo link:",-1)),XN={class:"block"},QN=Ir(()=>y("span",{class:"block text-[14px] font-medium text-slate-700 mb-[4px] opacity-40"},"Preview link(Netlify):",-1)),YN={class:"flex gap-2 items-center"},JN=Ir(()=>y("span",{class:"block text-[14px] font-medium text-slate-700 mb-[4px] bg-black opacity-40 rounded-[4px]"},"Top:",-1)),ZN=He("Post a new card"),eD={__name:"AppProgramming",setup(t){const{title:e,previewLink:n,hashtags:s,githubLink:r,uploadImg:i,hashtagsInput:o,onHashtagInputBlur:a,uploadImage:l,addCardToFirebase:c}=P_(),u=Ae(!1),h=async()=>{const d=await l(i.value.files[0]),f="programming";await c({date:Date.now(),img:d,hashtags:s.value,title:e.value,githubLink:r.value,previewLink:n.value,type:f,limited:u.value}),s.value=[],e.value="",r.value="",n.value="",u.value=""};return(d,f)=>(q(),Y("form",{onSubmit:Ta(h,["prevent"]),class:"flex flex-col gap-[32px]"},[y("label",VN,[jN,y("input",{type:"file",ref_key:"uploadImg",ref:i,class:"invisible outline-none block"},null,512)]),y("label",qN,[HN,Ut(y("input",{type:"text","onUpdate:modelValue":f[0]||(f[0]=m=>Me(o)?o.value=m:null),onBlur:f[1]||(f[1]=(...m)=>ve(a)&&ve(a)(...m)),onKeyup:f[2]||(f[2]=ib((...m)=>ve(a)&&ve(a)(...m),["delete"])),class:"border-[2px] px-[12px] py-[6px] w-full rounded border-aqua bg-black outline-none block text-aqua"},null,544),[[rn,ve(o)]])]),y("label",KN,[zN,Ut(y("input",{type:"text","onUpdate:modelValue":f[3]||(f[3]=m=>Me(e)?e.value=m:null),class:"border-[2px] px-[12px] py-[6px] w-full rounded border-aqua bg-black outline-none block"},null,512),[[rn,ve(e)]])]),y("label",WN,[GN,Ut(y("input",{type:"text","onUpdate:modelValue":f[4]||(f[4]=m=>Me(r)?r.value=m:null),class:"border-[2px] px-[12px] py-[6px] w-full rounded border-aqua bg-black outline-none block"},null,512),[[rn,ve(r)]])]),y("label",XN,[QN,Ut(y("input",{type:"text","onUpdate:modelValue":f[5]||(f[5]=m=>Me(n)?n.value=m:null),class:"border-[2px] px-[12px] py-[6px] w-full rounded border-aqua bg-black outline-none block"},null,512),[[rn,ve(n)]])]),y("label",YN,[JN,Ut(y("input",{type:"checkbox","onUpdate:modelValue":f[6]||(f[6]=m=>u.value=m),class:"border-[2px] px-[12px] py-[6px] rounded custom-checkbox border-aqua outline-none block"},null,512),[[Qp,u.value]])]),G(Jt,{class:"w-full bg-aqua"},{default:ne(()=>[ZN]),_:1})],40,BN))}},tD=Wn(eD,[["__scopeId","data-v-92c00f31"]]);const Yi=t=>(xi("data-v-2e87b4ef"),t=t(),ki(),t),nD=["onSubmit"],sD={class:"rounded border-aqua border-dashed border-[2px] bg-black py-[20px] cursor-pointer"},rD=Yi(()=>y("span",{class:"flex flex-col justify-center items-center gap-[6px] mt-[25px] w-full"},[y("img",{src:O_,class:"w-[58px] h-[58px]",alt:""}),y("span",{class:"block"},"Drop your image here"),y("span",{class:"block text-[13px] text-aqua"},"Image should be 1020x756px")],-1)),iD={class:"block"},oD=Yi(()=>y("span",{class:"block text-[14px] font-medium text-slate-700 mb-[4px] opacity-40"},"Hashtags:",-1)),aD={class:"block"},lD=Yi(()=>y("span",{class:"block text-[14px] font-medium text-slate-700 mb-[4px] opacity-40 dd"},"Title:",-1)),cD={class:"block"},uD=Yi(()=>y("span",{class:"block text-[14px] font-medium text-slate-700 mb-[4px] opacity-40"},"Behance link:",-1)),hD={class:"flex gap-2 items-center"},dD=Yi(()=>y("span",{class:"block text-[14px] font-medium text-slate-700 mb-[4px] bg-black opacity-40 rounded-[4px]"},"Top:",-1)),fD=He("Post a new card"),pD={__name:"AppDesigning",setup(t){const{title:e,previewLink:n,hashtags:s,uploadImg:r,hashtagsInput:i,onHashtagInputBlur:o,uploadImage:a,addCardToFirebase:l}=P_(),c=Ae(!1),u=async()=>{const h=await a(r.value.files[0]),d="designing";await l({date:Date.now(),img:h,hashtags:s.value,title:e.value,previewLink:n.value,type:d,limited:c.value}),s.value=[],e.value="",n.value="",c.value=""};return(h,d)=>(q(),Y("form",{class:"flex flex-col gap-[32px]",onSubmit:Ta(u,["prevent"])},[y("label",sD,[rD,y("input",{type:"file",ref_key:"uploadImg",ref:r,class:"invisible outline-none block"},null,512)]),y("label",iD,[oD,Ut(y("input",{"onUpdate:modelValue":d[0]||(d[0]=f=>Me(i)?i.value=f:null),onBlur:d[1]||(d[1]=(...f)=>ve(o)&&ve(o)(...f)),type:"text",class:"border-[2px] px-[12px] py-[6px] w-full rounded border-aqua bg-black outline-none block text-aqua"},null,544),[[rn,ve(i)]])]),y("label",aD,[lD,Ut(y("input",{"onUpdate:modelValue":d[2]||(d[2]=f=>Me(e)?e.value=f:null),type:"text",class:"border-[2px] px-[12px] py-[6px] w-full rounded border-aqua bg-black outline-none block"},null,512),[[rn,ve(e)]])]),y("label",cD,[uD,Ut(y("input",{"onUpdate:modelValue":d[3]||(d[3]=f=>Me(n)?n.value=f:null),type:"text",class:"border-[2px] px-[12px] py-[6px] w-full rounded border-aqua bg-black outline-none block"},null,512),[[rn,ve(n)]])]),y("label",hD,[dD,Ut(y("input",{type:"checkbox","onUpdate:modelValue":d[4]||(d[4]=f=>c.value=f),class:"border-[2px] px-[12px] py-[6px] rounded custom-checkbox border-aqua outline-none block"},null,512),[[Qp,c.value]])]),G(Jt,{class:"w-full bg-aqua mb-[0px] md:mb-[64px]"},{default:ne(()=>[fD]),_:1})],40,nD))}},gD=Wn(pD,[["__scopeId","data-v-2e87b4ef"]]);const mD={components:{AppProgramming:tD,AppDesigning:gD},data(){return{selectedTab:"AppProgramming"}},methods:{setSelectedTab(t){this.selectedTab=t}},computed:{programming(){if(this.selectedTab==="AppProgramming")return"active"},designing(){if(this.selectedTab==="AppDesigning")return"active"}}},yD={class:"max-w-[650px] px-[14px] xl:px-0 mx-auto mt-3 md:mt-0"},_D={class:"w-full bg-white flex mb-[32px]"};function vD(t,e,n,s,r,i){return q(),Y("div",yD,[y("div",_D,[y("button",{class:Bt(["custom-btn uppercase",i.programming]),onClick:e[0]||(e[0]=o=>i.setSelectedTab("AppProgramming"))},"Programming",2),y("button",{class:Bt(["custom-btn uppercase",i.designing]),onClick:e[1]||(e[1]=o=>i.setSelectedTab("AppDesigning"))},"Designing",2)]),(q(),pn(Kv,null,[(q(),pn(Rp(r.selectedTab)))],1024))])}const wD=Wn(mD,[["render",vD],["__scopeId","data-v-33eb5771"]]);const sl=t=>(xi("data-v-58f17f03"),t=t(),ki(),t),bD={class:"absolute h-full w-full top-0 left-0 bg-black"},ED={class:"m-[20px] w-fit"},ID=sl(()=>y("span",{class:"flex w-max gap-[6px] text-[18px]"},[y("img",{src:ph,class:"rotate-180 w-[24px]",alt:""}),He(" Back to Home ")],-1)),TD=["onSubmit"],xD=sl(()=>y("h1",{class:"text-[34px] text-center mb-[8px]"},"Log in",-1)),kD={class:"block"},SD=sl(()=>y("span",{class:"block text-[14px] font-medium text-slate-700 mb-[4px]"},"Email:",-1)),CD={class:"block w-full"},AD=sl(()=>y("span",{class:"block text-[14px] font-medium text-slate-700 mb-[4px]"},"Password:",-1)),RD={key:0,class:"text-lightRed"},ND=He(" Enter "),DD={__name:"LoginView",setup(t){const e=ug(),n=Ae(!1),s=Ae(""),r=Ae(""),i=Ae(""),o=Ae(""),a="@gmail.com",l=()=>{BS(bi,s.value+a,r.value).then(c=>{c.user,e.push("/admin"),i.value="is-primary"}).catch(c=>{c.code,c.message,o.value="email or password was incorrect",i.value="border-lightRed"})};return xs(async()=>{uh(bi,c=>{c?(e.push("/admin"),n.value=!0):n.value=!1})}),(c,u)=>{const h=Si("RouterLink");return q(),Y("div",bD,[y("div",ED,[G(h,{class:"hover:opacity-50 transition-all",to:"/"},{default:ne(()=>[ID]),_:1})]),y("form",{onSubmit:Ta(l,["prevent"]),class:"absolute top-[50%] left-[50%] custom-transform flex flex-col gap-4 w-[400px]"},[xD,y("label",kD,[SD,Ut(y("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=d=>s.value=d),class:Bt([i.value,"border-[2px] px-[12px] py-[6px] w-full rounded border-lightBlue bg-black outline-none block focus:border-aqua"])},null,2),[[rn,s.value]])]),y("label",CD,[AD,Ut(y("input",{type:"password","onUpdate:modelValue":u[1]||(u[1]=d=>r.value=d),class:Bt([i.value,"border-[2px] px-[12px] py-[6px] w-full rounded border-lightBlue bg-black outline-none block focus:border-aqua"])},null,2),[[rn,r.value]])]),o.value?(q(),Y("p",RD,Xe(o.value),1)):ps("",!0),G(Jt,{color:"secondary",class:"md:py-[6px] py-6px"},{default:ne(()=>[rs(c.$slots,"default",{},()=>[ND],!0)]),_:3})],40,TD)])}}},OD=Wn(DD,[["__scopeId","data-v-58f17f03"]]),L_=h0({history:Sb("/"),routes:[{path:"/",name:"home",component:kR},{path:"/about",name:"about",component:WR},{path:"/projects",name:"projects",component:wN},{path:"/contact",name:"contact",component:$N},{path:"/login",name:"login",component:OD},{path:"/admin",name:"admin",component:wD,meta:{requiresAuth:!0}}]}),PD=()=>new Promise((t,e)=>{const n=uh(bi,s=>{n(),t(s)},e)});L_.beforeEach(async(t,e,n)=>{t.matched.some(s=>s.meta.requiresAuth)?await PD()?n():n("/login"):n()});const M_=lb(NA);M_.use(L_);M_.mount("#app");
