var oe=Object.defineProperty;var ie=(t,e,s)=>e in t?oe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var R=(t,e,s)=>(ie(t,typeof e!="symbol"?e+"":e,s),s),K=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var a=(t,e,s)=>(K(t,e,"read from private field"),s?s.call(t):e.get(t)),w=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},f=(t,e,s,o)=>(K(t,e,"write to private field"),o?o.call(t,s):e.set(t,s),s),P=(t,e,s,o)=>({set _(n){f(t,e,n,s)},get _(){return a(t,e,o)}}),x=(t,e,s)=>(K(t,e,"access private method"),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const ce="AAp",ae="S85",X={viewbox:ce,ng:ae},le="_9NO",ue={container:le},h={size:4,start:2};function z(t,e,s=0){if(t==null)return null;if(t.ctor){const r=typeof t.ctor_args=="function"?t.ctor_args(s):t.ctor_args,[i,c]=t.ctor.apply(t,r);return e[t.name]=c,i}const o=document.createElement(t.tag),n={};e[t.name]=n,n.native=o;for(const r of t.props||[])o[r.name]=r.value;for(const r of t.children||[])if(r.count){const i=[];for(let c=0;c<r.count;c++){const l={},u=z(r,l);i.push(l[r.name]),o.appendChild(u)}n[r.name]=i}else o.appendChild(z(r,n));return o}const me="knw",he="VCb",fe="k1Z",de="pK2",pe="WMm",ge="KLp",ve="qtr",we="wVH",_e="_59R",be="xlp",ye="C3R",xe="_0ks",Ne="i0L",ke="qsW",je="pT3",ze="_3EV",Le="gDf",Ee="E1B",Oe="Tqo",Ae="lf5",_={shell:me,fadein:he,fadeIn:fe,kernel:de,empty:pe,v1:ge,v2:ve,v4:we,v8:_e,v16:be,v32:ye,v64:xe,v128:Ne,v256:ke,v512:je,v1024:ze,v2048:Le,vx:Ee,vxx:Oe,vxxx:Ae},Se={name:"shell",tag:"div",props:[{name:"className",value:`${_.fadein} ${_.shell} ${D(0)}`}],children:[{name:"kernel",tag:"span",props:[{name:"className",value:_.kernel}]}]};function D(t){let e="empty";return t&&(e=`v${t}`),e in _?_[e]:t<1e4?_.vx:t<1e5?_.vxx:_.vxxx}function B(t){if(!t)return"";const e=String(t),s=5;if(e.length<=s)return e;const o=Math.ceil(e.length/s),n=Math.floor(e.length/o),r=e.length%o,i=Array.from({length:o}).fill(n).map((u,v)=>v<r?u+1:u),c=[];let l=0;for(let u=0;u<i.length;u++)c.push(e.substring(l,l+=i[u]));return c.join(" ")}function Te(t){const e={},s=z(Se,e),{shell:o,shell:{kernel:n}}=e;n.native.innerText=B(t);const r={spawn:i=>{r.value=i,setTimeout(()=>{s.classList.remove(_.fadein),s.clientWidth,s.classList.add(_.fadein)})}};return Object.defineProperty(r,"value",{get:()=>{const i=n.native.innerText.replace(/\s/g,"");return i?Number(i):null},set:i=>{const c=r.value;if(c===i)return;const l=D(c),u=D(i);o.native.classList.replace(l,u),n.native.innerText=B(i)},enumerable:!0}),[s,r]}const Me={name:"grid",tag:"div",props:[{name:"className",value:ue.container}],children:[{name:"rows",tag:"div",count:h.size,children:[{name:"cells",ctor:Te,count:h.size}]}]};function Ce(){const t={},e=z(Me,t),{grid:{rows:s}}=t;return[e,{native:e,get(n,r){return s[r].cells[n].value},set(n,r,i){s[r].cells[n].value=i},animate(n,r,{dx:i=0,dy:c=0}){const u=e.children[r].children[n].animate([{transform:`translateX(${i*100}%) translateY(${c*100}%)`}],50*(Math.abs(i)+Math.abs(c)));return new Promise(v=>{u.onfinish=v})},spawn(n,r,i){s[r].cells[n].spawn(i)},clear(){for(let n=0;n<h.size;n++)for(let r=0;r<h.size;r++)s[n].cells[r].value=null}}]}const $e="_1xN",Re="t23",Ke="D4R",Pe="AFH",qe="kzn",Ie="oOR",De="Vs1",j={banner:$e,header:Re,version:Ke,boards:Pe,board:qe,category:Ie,score:De},Ve={name:"shell",tag:"div",props:[{name:"className",value:j.banner}],children:[{name:"header",tag:"div",props:[{name:"className",value:j.header}],children:[{name:"title",tag:"span",props:[{name:"innerText",value:"1024"}]},{name:"version",tag:"span",props:[{name:"innerText",value:"v0.2.0"},{name:"className",value:j.version},{name:"href",value:'https://github.com/pseudocc/{"version":"v0.2.0"}-1024/tree/{"version":"v0.2.0"}-1024-v0.2.0'}]}]},{name:"kernel",tag:"div",props:[{name:"className",value:j.boards}],children:[{name:"score",ctor:G,ctor_args:["SCORE",0]},{name:"best",ctor:G,ctor_args:["BEST",0]}]}]},We={name:"shell",tag:"div",props:[{name:"className",value:j.board}],children:[{name:"name",tag:"p",props:[{name:"className",value:j.category}]},{name:"kernel",tag:"span",props:[{name:"className",value:j.score}]}]};function G(t,e){const s={},o=z(We,s),{shell:{kernel:n,name:r}}=s;r.native.innerText=t,n.native.innerText=String(e);const i={};return Object.defineProperty(i,"value",{get:()=>Number(n.native.innerText),set:c=>{n.native.innerText=String(c)},enumerable:!0}),[o,i]}function Ye(){const t={},e=z(Ve,t),s=t.shell.kernel,o={};for(const n in s)n!=="native"&&Object.defineProperty(o,n,{get:()=>s[n].value,set:r=>{s[n].value=r},enumerable:!0});return[e,o]}class p{constructor(e){R(this,"power");this.power=e}get is_null(){return this===J}static can_merge(e,s){for(const o of[e,s])if(o==null)throw Error("cells should not be null!");return e.power===s.power}static try_merge(e,s){let o=null;try{this.can_merge(e,s)&&(o=new p(e.power+1))}finally{return o}}static get Null(){return J}}const J=Object.freeze(new p(Symbol("NULL-CELL"))),Z=[1129,65521],Fe=2147483647;class He{constructor(e=0){R(this,"seed");this.seed=e}next(){return this.seed=(Z[1]*this.seed+Z[0])%Fe,this.seed}}const q={length:h.size},Ue={up:0,down:1,left:2,right:3},Xe={init:0,cond(t){return t<h.size},step:1},Be={init:h.size-1,cond(t){return t>=0},step:-1};function Ge(t,e){return[t,e]}function Je(t,e){return[e,t]}var m,N,b,O,g,k,S,V,A,C,T,W;const U=class{constructor(e,s){w(this,S);w(this,A);w(this,T);w(this,m,void 0);w(this,N,void 0);w(this,b,void 0);w(this,O,void 0);w(this,g,void 0);w(this,k,void 0);if(e==null)throw new Error('Event subscriber: parameter "anim" is null!');f(this,m,Array.from(q).map(()=>Array.from(q))),f(this,k,new He(s)),this.anim=e,this.scoref=o=>Math.pow(2,o)}get seed(){return a(this,k).seed}get moves(){const e=Object.entries(a(this,O)),s=[];for(const[o,n]of e)n&&s.push(o);return s}get score(){return a(this,N)}set score(e){f(this,N,e),e>a(this,b)&&f(this,b,e)}get best(){return a(this,b)}set best(e){f(this,b,e)}get grid(){return a(this,m)}new_game(){f(this,N,0),f(this,g,h.size*h.size);for(const e of a(this,m))e.fill(p.Null);for(let e=0;e<h.start;e++)x(this,T,W).call(this);x(this,A,C).call(this)}move(e){if(!a(this,O)[e])return!1;const s=Ue[e],o=s&2?Ge:Je,n=s&1?Be:Xe;f(this,g,0);for(let r=0;r<h.size;r++){let i,c;for(i=n.init+n.step,c=n.init;n.cond(i);i+=n.step){const[l,u]=o(r,i),[v,L]=o(r,c),M=p.try_merge(a(this,m)[v][L],a(this,m)[l][u]);M?(this.score+=this.scoref(M.power),a(this,m)[l][u]=p.Null,a(this,m)[v][L]=M,this.anim("merge",{to:[L,v],from:[u,l],value:M.power}),c=i=i+n.step):a(this,m)[l][u].is_null||(c=i)}for(i=c=n.init;n.cond(i);i+=n.step){const[l,u]=o(r,i);if(a(this,m)[l][u].is_null){P(this,g)._++;continue}if(i!=c){const[v,L]=o(r,c);a(this,m)[v][L]=a(this,m)[l][u],a(this,m)[l][u]=p.Null,this.anim("move",{from:[u,l],to:[L,v]})}c+=n.step}}return x(this,T,W).call(this),x(this,A,C).call(this),!0}get cache(){const e=[];for(const s of a(this,m))for(const o of s){const n=String.fromCharCode(o.is_null?122:65+o.power);e.push(n)}return{best:a(this,b),score:a(this,N),seed:a(this,k).seed,empty:a(this,g),grid:e.join("")}}static from(e,s){var n;const o=new U(e,s.seed);f(o,b,s.best),f(o,N,s.score),f(o,g,s.empty);for(let r=0,i=0;r<h.size;r++){const c=a(o,m)[r];for(let l=0;l<h.size;l++){const u=s.grid.charCodeAt(i++);u===122?c[l]=p.Null:(c[l]=new p(u-65),o.anim("spawn",{at:[l,r],value:c[l].power}))}}return x(n=o,A,C).call(n),o}};let $=U;m=new WeakMap,N=new WeakMap,b=new WeakMap,O=new WeakMap,g=new WeakMap,k=new WeakMap,S=new WeakSet,V=function(e){let s=!1,o=!1;for(let n=0;n<h.size;n++){const r=e(n);let i=0;for(let c=0;c<h.size;c++){const l=r[c];if(l.is_null)i++;else if(i){if(c===i){if(o=!0,s)return[!0,!0]}else if(c!=h.size)return[!0,!0];i=0}else if(c&&p.can_merge(l,r[c-1]))return[!0,!0]}if(i&&i!==h.size&&(s=!0,o))return[!0,!0]}return[s,o]},A=new WeakSet,C=function(){const[e,s]=x(this,S,V).call(this,r=>Array.from(q).map((i,c)=>a(this,m)[c][r])),[o,n]=x(this,S,V).call(this,r=>a(this,m)[r]);f(this,O,{up:s,down:e,left:n,right:o})},T=new WeakSet,W=function(){if(!a(this,g))return;let e=a(this,k).next()%a(this,g);const s=a(this,k).next()%10?0:1;for(let o=0;o<h.size;o++)for(let n=0;n<h.size;n++)if(a(this,m)[o][n].is_null&&!e--){a(this,m)[o][n]=new p(s),this.anim("spawn",{at:[n,o],value:s});break}P(this,g)._--};const Ze=document.querySelector("#app"),Qe={name:"main",tag:"div",props:[{name:"className",value:X.viewbox}],children:[{name:"banner",ctor:Ye},{name:"grid",ctor:Ce},{name:"new",tag:"input",props:[{name:"type",value:"button"},{name:"value",value:"NEW GAME"},{name:"onclick",value:H},{name:"className",value:X.ng}]}]},ee={},I=t=>Math.pow(2,t),et=z(Qe,ee),{main:d}=ee;Ze.appendChild(et);const E={spawn:[],merge:[],move:[]};function Q(t,e){t==="spawn"?E.spawn.push(e):t==="merge"?E.merge.push(e):t==="move"&&E.move.push(e)}const te="core-1024";async function F(){let t;const e=[];for(;t=E.merge.shift();){const{from:[n,r],to:[i,c],value:l}=t,u=d.grid.animate(n,r,{dx:i-n,dy:c-r}).then(()=>{d.grid.set(n,r,null),d.grid.set(i,c,I(l))});e.push(u)}await Promise.all(e);const s=[],o=y.grid;for(;t=E.move.shift();){const{from:[n,r],to:[i,c]}=t,l=o[c][i],u=d.grid.animate(n,r,{dx:i-n,dy:c-r}).then(()=>{d.grid.set(n,r,null),d.grid.set(i,c,I(l.power))});s.push(u)}for(await Promise.all(s);t=E.spawn.shift();){const{at:[n,r],value:i}=t;d.grid.spawn(n,r,I(i))}d.banner.best=y.best,d.banner.score=y.score,localStorage.setItem(te,JSON.stringify(y.cache))}let y;function ne(){const t=localStorage.getItem(te);if(t)try{const e=JSON.parse(t);y=$.from(Q,e),F()}catch{localStorage.clear(),ne()}else{const e=Date.now();y=new $(Q,e),y.best=0,H()}}function H(){d.grid.clear(),y.new_game(),F()}function se(t){y.move(t)&&F()}document.addEventListener("keydown",t=>{const e=["altKey","ctrlKey","metaKey","shiftKey"].some(o=>t[o]),s={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",s:"down",a:"left",d:"right"};if(!e){if(t.key=="r"){H();return}se(s[t.key])}});const re=d.grid.native;let Y;re.addEventListener("touchstart",t=>{t.touches.length>1||([Y]=t.touches)});re.addEventListener("touchend",t=>{if(t.touches.length>1)return;const[e]=t.changedTouches,s=e.pageX-Y.pageX,o=Math.abs(s),n=e.pageY-Y.pageY,r=Math.abs(n);if(Math.max(o,r)<10)return;const i=o>r?s>0?"right":"left":n>0?"down":"up";se(i)});ne();
