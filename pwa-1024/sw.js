if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const t=e=>s(e,d),c={module:{uri:d},exports:o,require:t};i[d]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.4d4b182d.css",revision:null},{url:"assets/index.a9afaf0d.js",revision:null},{url:"index.html",revision:"813b7489644168a43b09ee3980d2729b"},{url:"registerSW.js",revision:"4c838e80457a7ad02328f2aa78e45852"},{url:"vanilla.min.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"favicon.svg",revision:"71dcfd191507c31dc79efe3341dfa3b9"},{url:"pwa-192x192.png",revision:"f24c9384006bbc8de95ed69990459dca"},{url:"pwa-512x512.png",revision:"4db5b8fe442a8f8fdc6e35cd40138057"},{url:"manifest.webmanifest",revision:"bdc5bb161296feab781200077ec25ec1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
