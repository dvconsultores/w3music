(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22b99c","chunk-2d22b99c"],{f051:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));const r=(e,t)=>t.some(t=>e instanceof t);let o,s;function i(){return o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c=new WeakMap,u=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap;function l(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{t(g(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),p.set(t,e),t}function D(e){if(u.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});u.set(e,t)}let b={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||d.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function v(e){b=e(b)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(e)?function(...t){return e.apply(h(this),t),g(c.get(this))}:function(...t){return g(e.apply(h(this),t))}:function(t,...n){const r=e.call(h(this),t,...n);return d.set(r,t.sort?t.sort():[t]),g(r)}}function I(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&D(e),r(e,i())?new Proxy(e,b):e)}function g(e){if(e instanceof IDBRequest)return l(e);if(f.has(e))return f.get(e);const t=I(e);return t!==e&&(f.set(e,t),p.set(t,e)),t}const h=e=>p.get(e);function m(e,t,{blocked:n,upgrade:r,blocking:o,terminated:s}={}){const i=indexedDB.open(e,t),a=g(i);return r&&i.addEventListener("upgradeneeded",e=>{r(g(i.result),e.oldVersion,e.newVersion,g(i.transaction),e)}),n&&i.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),o&&e.addEventListener("versionchange",e=>o(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const B=["get","getKey","getAll","getAllKeys","count"],y=["put","add","delete","clear"],E=new Map;function L(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(E.get(t))return E.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=y.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!B.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,o?"readwrite":"readonly");let i=s.store;return r&&(i=i.index(t.shift())),(await Promise.all([i[n](...t),o&&s.done]))[0]};return E.set(t,s),s}v(e=>({...e,get:(t,n,r)=>L(t,n)||e.get(t,n,r),has:(t,n)=>!!L(t,n)||e.has(t,n)}))}}]);
//# sourceMappingURL=chunk-2d22b99c.9a43de4a.js.map