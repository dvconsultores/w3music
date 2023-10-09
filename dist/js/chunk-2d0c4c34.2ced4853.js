(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4c34","chunk-2d0c4c34"],{"3be4":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return dh})),n.d(t,"b",(function(){return ll})),n.d(t,"c",(function(){return Yc})),n.d(t,"d",(function(){return qc})),n.d(t,"e",(function(){return ph})),n.d(t,"f",(function(){return hl})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return fl})),n.d(t,"i",(function(){return yh})),n.d(t,"j",(function(){return wh})),n.d(t,"k",(function(){return L})),n.d(t,"l",(function(){return Ph})),n.d(t,"m",(function(){return gt})),n.d(t,"n",(function(){return z})),n.d(t,"o",(function(){return K})),n.d(t,"p",(function(){return Fc})),n.d(t,"q",(function(){return I})),n.d(t,"r",(function(){return it})),n.d(t,"s",(function(){return p})),n.d(t,"t",(function(){return Nc})),n.d(t,"u",(function(){return kh})),n.d(t,"v",(function(){return zh})),n.d(t,"w",(function(){return Kh})),n.d(t,"x",(function(){return rl})),n.d(t,"y",(function(){return Gc})),n.d(t,"z",(function(){return Kc})),n.d(t,"A",(function(){return Lc})),n.d(t,"B",(function(){return Nh})),n.d(t,"C",(function(){return Bh})),n.d(t,"D",(function(){return ol})),n.d(t,"E",(function(){return zc})),n.d(t,"F",(function(){return el})),n.d(t,"G",(function(){return tl})),n.d(t,"H",(function(){return il})),n.d(t,"I",(function(){return oh})),n.d(t,"J",(function(){return ih})),n.d(t,"K",(function(){return Jc})),n.d(t,"L",(function(){return Fh})),n.d(t,"M",(function(){return _h})),n.d(t,"N",(function(){return Eh})),n.d(t,"O",(function(){return Th})),n.d(t,"P",(function(){return Sh})),n.d(t,"Q",(function(){return xh})),n.d(t,"R",(function(){return Ch})),n.d(t,"S",(function(){return jh})),n.d(t,"T",(function(){return Zl})),n.d(t,"U",(function(){return eh})),n.d(t,"V",(function(){return al})),n.d(t,"W",(function(){return ul})),n.d(t,"X",(function(){return Rh})),n.d(t,"Y",(function(){return Oh})),n.d(t,"Z",(function(){return Xl})),n.d(t,"ab",(function(){return $l})),n.d(t,"bb",(function(){return $c})),n.d(t,"cb",(function(){return jc})),n.d(t,"db",(function(){return qh})),n.d(t,"eb",(function(){return Gh})),n.d(t,"fb",(function(){return Dh})),n.d(t,"gb",(function(){return f})),n.d(t,"hb",(function(){return Ih})),n.d(t,"ib",(function(){return rh})),n.d(t,"jb",(function(){return nh})),n.d(t,"kb",(function(){return Ah})),n.d(t,"lb",(function(){return sl})),n.d(t,"mb",(function(){return Hl}));var r=n("9bff"),s=n("999f"),i=n("8aba"),o=n("c2d8"),a=n("9c68");const u="@firebase/firestore";
/**
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
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
/**
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
 */
let l="10.4.0";
/**
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
 */const h=new i["b"]("@firebase/firestore");function d(){return h.logLevel}function f(e){h.setLogLevel(e)}function m(e,...t){if(h.logLevel<=i["a"].DEBUG){const n=t.map(y);h.debug(`Firestore (${l}): ${e}`,...n)}}function g(e,...t){if(h.logLevel<=i["a"].ERROR){const n=t.map(y);h.error(`Firestore (${l}): ${e}`,...n)}}function p(e,...t){if(h.logLevel<=i["a"].WARN){const n=t.map(y);h.warn(`Firestore (${l}): ${e}`,...n)}}function y(e){if("string"==typeof e)return e;try{
/**
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
 */
return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
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
 */function w(e="Unexpected state"){const t=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+e;throw g(t),new Error(t)}function v(e,t){e||w()}function I(e,t){e||w()}function _(e,t){return e}
/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends o["c"]{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
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
 */class S{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class x{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class C{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class D{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new T;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new T,e.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const t=s;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new T)}},0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(v("string"==typeof t.accessToken),new S(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return v(null===e||"string"==typeof e),new c(e)}}class A{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=c.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class N{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new A(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&m("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const n=e.token!==this.R;return this.R=e.token,m("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(v("string"==typeof e.token),this.R=e.token,new k(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function O(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class F{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=O(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function M(e,t){return e<t?-1:e>t?1:0}function V(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function P(e){return e+"\0"}
/**
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
 */class L{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return L.fromMillis(Date.now())}static fromDate(e){return L.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new L(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?M(this.nanoseconds,e.nanoseconds):M(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new L(0,0))}static max(){return new U(new L(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class q{constructor(e,t,n){void 0===t?t=0:t>e.length&&w(),void 0===n?n=e.length-t:n>e.length-t&&w(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===q.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof q?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class B extends q{construct(e,t,n){return new B(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new E(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new B(t)}static emptyPath(){return new B([])}}const G=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends q{construct(e,t,n){return new K(e,t,n)}static isValidIdentifier(e){return G.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new E(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new E(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new E(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new K(t)}static emptyPath(){return new K([])}}
/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(B.fromString(e))}static fromName(e){return new z(B.fromString(e).popFirst(5))}static empty(){return new z(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===B.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return B.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new B(e.slice()))}}
/**
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
 */class j{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function $(e){return e.fields.find(e=>2===e.kind)}function Q(e){return e.fields.filter(e=>2!==e.kind)}j.UNKNOWN_ID=-1;class H{constructor(e,t){this.fieldPath=e,this.kind=t}}class W{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new W(0,J.min())}}function Y(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=U.fromTimestamp(1e9===r?new L(n+1,0):new L(n,r));return new J(s,z.empty(),t)}function X(e){return new J(e.readTime,e.key,-1)}class J{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new J(U.min(),z.empty(),-1)}static max(){return new J(U.max(),z.empty(),-1)}}function Z(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=z.comparator(e.documentKey,t.documentKey),0!==n?n:M(e.largestBatchId,t.largestBatchId))}
/**
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
 */const ee="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class te{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
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
 */async function ne(e){if(e.code!==b.FAILED_PRECONDITION||e.message!==ee)throw e;m("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class re{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new re((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof re?t:re.resolve(t)}catch(e){return re.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):re.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):re.reject(t)}static resolve(e){return new re((t,n)=>{t(e)})}static reject(e){return new re((t,n)=>{n(e)})}static waitFor(e){return new re((t,n)=>{let r=0,s=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++s,i&&s===r&&t()},e=>n(e))}),i=!0,s===r&&t()})}static or(e){let t=re.resolve(!1);for(const n of e)t=t.next(e=>e?re.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new re((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const u=a;t(e[u]).next(e=>{i[u]=e,++o,o===s&&n(i)},e=>r(e))}})}static doWhile(e,t){return new re((n,r)=>{const s=()=>{!0===e()?t().next(()=>{s()},r):n()};s()})}}
/**
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
 */class se{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new T,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new ae(e,t.error)):this.m.resolve()},this.transaction.onerror=t=>{const n=de(t.target.error);this.m.reject(new ae(e,n))}}static open(e,t,n,r){try{return new se(t,e.transaction(r,n))}catch(e){throw new ae(t,e)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(m("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ce(t)}}class ie{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===ie.D(Object(o["q"])())&&g("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return m("SimpleDb","Removing database:",e),le(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Object(o["v"])())return!1;if(ie.v())return!0;const e=Object(o["q"])(),t=ie.D(e),n=0<t&&t<10,r=ie.F(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static v(){var t;return"undefined"!=typeof e&&"YES"===(null===(t=Object({NODE_ENV:"production",VUE_APP_CONTRACT_NFT:"nft2.w3music2023.testnet",VUE_APP_NETWORK:"testnet",VUE_APP_URL_GRAPH:"https://api.thegraph.com/subgraphs/name/hrpalencia/w3musictestnet",VUE_APP_CONTRACT_SOCIAL:"v1.social08.testnet",VUE_APP_API_BASE_URL_SOCIAL:"https://ipfs.near.social/ipfs/",VUE_APP_NODE_API:"https://develop.globaldv.tech/w3service",VUE_APP_IPFS:".ipfs.nftstorage.link",VUE_APP_IPFS_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGVkOTdhZTMxZjIwRjEzODY0NTU2MDY2MDQ4ZUI0YkY0NkZDRTUyMUQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4OTYyMDk4MDk1NiwibmFtZSI6IlczTXVzaWMifQ.-vXecGHBpB62MCRtXsGsWJkwTEA2-7PobHCrMtMWsvs",VUE_APP_PUBLIC_KEY:"-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAn1KIrhSPFy/ZrSSNgfK6zXPI8qU5N2chddFATSp8tPSl8ajCQ7T/JiJ5Nh/LK1cRfgYjg4ktqLPxW5lro4qNge7bOMxVCMEtRXZVte5dGwXrQiKnb11Wz7R+5pkD57TpTkehkVgIDBswSCKBdFMAA/4K7vlBTr43f8GNAeeuidiFmcb02ZbrG8VUP/vw+9Qs8XcZOUqp5I0KYHmyCW6PNsHK89G8PMihi3VtWH2hNlTA4Md+rtVo4NAh9iM125DoSBRUJHUlIHH3ru0ifx9CPpAqCEQ7Y5w1MGTV84bijU6azNylOuHADUYwaiuR9ppRZR2nltlWGHGqk9H1k66TEQIDAQAB-----END PUBLIC KEY-----",VUE_APP_CHAT_FIREBASE:"TESTNET",BASE_URL:"/w3music/"}))||void 0===t?void 0:t.M)}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static F(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async N(e){return this.db||(m("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new ae(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new E(b.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new E(b.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ae(e,r))},r.onupgradeneeded=e=>{m("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.S.B(t,r.transaction,e.oldVersion,this.version).next(()=>{m("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const s="readonly"===t;let i=0;for(;;){++i;try{this.db=await this.N(e);const t=se.open(this.db,e,s?"readonly":"readwrite",n),i=r(t).next(e=>(t.p(),e)).catch(e=>(t.abort(e),re.reject(e))).toPromise();return i.catch(()=>{}),await t.g,i}catch(e){const t=e,n="FirebaseError"!==t.name&&i<3;if(m("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class oe{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return le(this.q.delete())}}class ae extends E{constructor(e,t){super(b.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ue(e){return"IndexedDbTransactionError"===e.name}class ce{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(m("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(m("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),le(n)}add(e){return m("SimpleDb","ADD",this.store.name,e,e),le(this.store.add(e))}get(e){return le(this.store.get(e)).next(t=>(void 0===t&&(t=null),m("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return m("SimpleDb","DELETE",this.store.name,e),le(this.store.delete(e))}count(){return m("SimpleDb","COUNT",this.store.name),le(this.store.count())}G(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.j(e,(e,n)=>{t.push(n)}).next(()=>t)}{const e=this.store.getAll(n.range);return new re((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new re((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}J(e,t){m("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.j(r,(e,t,n)=>n.delete())}Z(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.j(r,t)}X(e){const t=this.cursor({});return new re((n,r)=>{t.onerror=e=>{const t=de(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}j(e,t){const n=[];return new re((r,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void r();const i=new oe(s),o=t(s.primaryKey,s.value,i);if(o instanceof re){const e=o.catch(e=>(i.done(),re.reject(e)));n.push(e)}i.isDone?r():null===i.U?s.continue():s.continue(i.U)}}).next(()=>re.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function le(e){return new re((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=de(e.target.error);n(t)}})}let he=!1;function de(e){const t=ie.D(Object(o["q"])());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return he||(he=!0,setTimeout(()=>{throw e},0)),e}}return e}class fe{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}te(e){m("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{m("IndexBackiller","Documents written: "+await this.ee.ne())}catch(e){ue(e)?m("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await ne(e)}await this.te(6e4)})}}class me{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const n=new Set;let r=t,s=!0;return re.doWhile(()=>!0===s&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return m("IndexBackiller","Processing collection: "+t),this.ie(e,t,r).next(e=>{r-=e,n.add(t)});s=!1})).next(()=>t-r)}ie(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(e,s).next(()=>this.se(r,n)).next(n=>(m("IndexBackiller","Updating offset: "+n),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>s.size)}))}se(e,t){let n=e;return t.changes.forEach((e,t)=>{const r=X(t);Z(r,n)>0&&(n=r)}),new J(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
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
 */class ge{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}function pe(e){return null==e}function ye(e){return 0===e&&1/e==-1/0}function we(e){return"number"==typeof e&&Number.isInteger(e)&&!ye(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
 */function ve(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=_e(t)),t=Ie(e.get(n),t);return _e(t)}function Ie(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const t=e.charAt(s);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function _e(e){return e+""}function be(e){const t=e.length;if(v(t>=2),2===t)return v(""===e.charAt(0)&&""===e.charAt(1)),B.emptyPath();const n=t-2,r=[];let s="";for(let i=0;i<t;){const t=e.indexOf("",i);switch((t<0||t>n)&&w(),e.charAt(t+1)){case"":const n=e.substring(i,t);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=e.substring(i,t),s+="\0";break;case"":s+=e.substring(i,t+1);break;default:w()}i=t+2}return new B(r)}
/**
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
 */ge.ae=-1;const Ee=["userId","batchId"];
/**
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
 */function Te(e,t){return[e,ve(t)]}function Se(e,t,n){return[e,ve(t),n]}const xe={},Ce=["prefixPath","collectionGroup","readTime","documentId"],De=["prefixPath","collectionGroup","documentId"],Ae=["collectionGroup","readTime","prefixPath","documentId"],Ne=["canonicalId","targetId"],ke=["targetId","path"],Re=["path","targetId"],Oe=["collectionId","parent"],Fe=["indexId","uid"],Me=["uid","sequenceNumber"],Ve=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Pe=["indexId","uid","orderedDocumentKey"],Le=["userId","collectionPath","documentId"],Ue=["userId","collectionPath","largestBatchId"],qe=["userId","collectionGroup","largestBatchId"],Be=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ge=[...Be,"documentOverlays"],Ke=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ze=Ke,je=[...ze,"indexConfiguration","indexState","indexEntries"];
/**
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
 */class $e extends te{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function Qe(e,t){const n=_(e);return ie.O(n.ue,t)}
/**
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
 */function He(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function We(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ye(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */class Xe{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new Xe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Je(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Je(this.root,e,this.comparator,!1)}getReverseIterator(){return new Je(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Je(this.root,e,this.comparator,!0)}}class Je{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:Ze.RED,this.left=null!=r?r:Ze.EMPTY,this.right=null!=s?s:Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new Ze(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ze.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw w();if(this.right.isRed())throw w();const e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1,Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,t,n,r,s){return this}insert(e,t,n){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class et{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tt(this.data.getIterator())}getIteratorFrom(e){return new tt(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof et))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new et(this.comparator);return t.data=e,t}}class tt{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function nt(e){return e.hasNext()?e.getNext():void 0}
/**
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
 */class rt{constructor(e){this.fields=e,e.sort(K.comparator)}static empty(){return new rt([])}unionWith(e){let t=new et(K.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new rt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return V(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
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
 */class st extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */function it(){return"undefined"!=typeof atob}
/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new st("Invalid base64 string: "+e):e}}(e);return new ot(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return M(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const at=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ut(e){if(v(!!e),"string"==typeof e){let t=0;const n=at.exec(e);if(v(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ct(e.seconds),nanos:ct(e.nanos)}}function ct(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function lt(e){return"string"==typeof e?ot.fromBase64String(e):ot.fromUint8Array(e)}
/**
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
 */function ht(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function dt(e){const t=e.mapValue.fields.__previous_value__;return ht(t)?dt(t):t}function ft(e){const t=ut(e.mapValue.fields.__local_write_time__.timestampValue);return new L(t.seconds,t.nanos)}
/**
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
 */class mt{constructor(e,t,n,r,s,i,o,a,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=u}}class gt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new gt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof gt&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */const pt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},yt={nullValue:"NULL_VALUE"};function wt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ht(e)?4:Rt(e)?9007199254740991:10:w()}function vt(e,t){if(e===t)return!0;const n=wt(e);if(n!==wt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ft(e).isEqual(ft(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ut(e.timestampValue),r=ut(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return lt(e.bytesValue).isEqual(lt(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ct(e.geoPointValue.latitude)===ct(t.geoPointValue.latitude)&&ct(e.geoPointValue.longitude)===ct(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ct(e.integerValue)===ct(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ct(e.doubleValue),r=ct(t.doubleValue);return n===r?ye(n)===ye(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return V(e.arrayValue.values||[],t.arrayValue.values||[],vt);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(He(n)!==He(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!vt(n[s],r[s])))return!1;return!0}(e,t);default:return w()}}function It(e,t){return void 0!==(e.values||[]).find(e=>vt(e,t))}function _t(e,t){if(e===t)return 0;const n=wt(e),r=wt(t);if(n!==r)return M(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return M(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ct(e.integerValue||e.doubleValue),r=ct(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return bt(e.timestampValue,t.timestampValue);case 4:return bt(ft(e),ft(t));case 5:return M(e.stringValue,t.stringValue);case 6:return function(e,t){const n=lt(e),r=lt(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=M(n[s],r[s]);if(0!==e)return e}return M(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=M(ct(e.latitude),ct(t.latitude));return 0!==n?n:M(ct(e.longitude),ct(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=_t(n[s],r[s]);if(e)return e}return M(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===pt.mapValue&&t===pt.mapValue)return 0;if(e===pt.mapValue)return 1;if(t===pt.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=M(r[o],i[o]);if(0!==e)return e;const t=_t(n[r[o]],s[i[o]]);if(0!==t)return t}return M(r.length,i.length)}(e.mapValue,t.mapValue);default:throw w()}}function bt(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return M(e,t);const n=ut(e),r=ut(t),s=M(n.seconds,r.seconds);return 0!==s?s:M(n.nanos,r.nanos)}function Et(e){return Tt(e)}function Tt(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=ut(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return lt(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return z.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Tt(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${Tt(e.fields[s])}`;return n+"}"}(e.mapValue):w()}function St(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function xt(e){return!!e&&"integerValue"in e}function Ct(e){return!!e&&"arrayValue"in e}function Dt(e){return!!e&&"nullValue"in e}function At(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Nt(e){return!!e&&"mapValue"in e}function kt(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return We(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=kt(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=kt(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Rt(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Ot(e){return"nullValue"in e?yt:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?St(gt.empty(),z.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:w()}function Ft(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?St(gt.empty(),z.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?pt:w()}function Mt(e,t){const n=_t(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Vt(e,t){const n=_t(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Nt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=kt(t)}setAll(e){let t=K.emptyPath(),n={},r=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=kt(e):r.push(s.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());Nt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Nt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){We(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Pt(kt(this.value))}}function Lt(e){const t=[];return We(e.fields,(e,n)=>{const r=new K([e]);if(Nt(n)){const e=Lt(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new rt(t)
/**
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
 */}class Ut{constructor(e,t,n,r,s,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ut(e,0,U.min(),U.min(),U.min(),Pt.empty(),0)}static newFoundDocument(e,t,n,r){return new Ut(e,1,t,U.min(),n,r,0)}static newNoDocument(e,t){return new Ut(e,2,t,U.min(),U.min(),Pt.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,U.min(),U.min(),Pt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class qt{constructor(e,t){this.position=e,this.inclusive=t}}function Bt(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?z.comparator(z.fromName(o.referenceValue),n.key):_t(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Gt(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!vt(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class Kt{constructor(e,t="asc"){this.field=e,this.dir=t}}function zt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
 */class jt{}class $t extends jt{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new nn(e,t,n):"array-contains"===t?new an(e,n):"in"===t?new un(e,n):"not-in"===t?new cn(e,n):"array-contains-any"===t?new ln(e,n):new $t(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new rn(e,n):new sn(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(_t(t,this.value)):null!==t&&wt(this.value)===wt(t)&&this.matchesComparison(_t(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Qt extends jt{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Qt(e,t)}matches(e){return Ht(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(e=>e.isInequality());return null!==e?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Ht(e){return"and"===e.op}function Wt(e){return"or"===e.op}function Yt(e){return Xt(e)&&Ht(e)}function Xt(e){for(const t of e.filters)if(t instanceof Qt)return!1;return!0}function Jt(e){if(e instanceof $t)return e.field.canonicalString()+e.op.toString()+Et(e.value);if(Yt(e))return e.filters.map(e=>Jt(e)).join(",");{const t=e.filters.map(e=>Jt(e)).join(",");return`${e.op}(${t})`}}function Zt(e,t){return e instanceof $t?function(e,t){return t instanceof $t&&e.op===t.op&&e.field.isEqual(t.field)&&vt(e.value,t.value)}(e,t):e instanceof Qt?function(e,t){return t instanceof Qt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&Zt(n,t.filters[r]),!0)}(e,t):void w()}function en(e,t){const n=e.filters.concat(t);return Qt.create(n,e.op)}function tn(e){return e instanceof $t?function(e){return`${e.field.canonicalString()} ${e.op} ${Et(e.value)}`}(e):e instanceof Qt?function(e){return e.op.toString()+" {"+e.getFilters().map(tn).join(" ,")+"}"}(e):"Filter"}class nn extends $t{constructor(e,t,n){super(e,t,n),this.key=z.fromName(n.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class rn extends $t{constructor(e,t){super(e,"in",t),this.keys=on("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sn extends $t{constructor(e,t){super(e,"not-in",t),this.keys=on("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function on(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>z.fromName(e.referenceValue))}class an extends $t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ct(t)&&It(t.arrayValue,this.value)}}class un extends $t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&It(this.value.arrayValue,t)}}class cn extends $t{constructor(e,t){super(e,"not-in",t)}matches(e){if(It(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!It(this.value.arrayValue,t)}}class ln extends $t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ct(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>It(this.value.arrayValue,e))}}
/**
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
 */class hn{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.he=null}}function dn(e,t=null,n=[],r=[],s=null,i=null,o=null){return new hn(e,t,n,r,s,i,o)}function fn(e){const t=_(e);if(null===t.he){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Jt(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),pe(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Et(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Et(e)).join(",")),t.he=e}return t.he}function mn(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!zt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Zt(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Gt(e.startAt,t.startAt)&&Gt(e.endAt,t.endAt)}function gn(e){return z.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function pn(e,t){return e.filters.filter(e=>e instanceof $t&&e.field.isEqual(t))}function yn(e,t,n){let r=yt,s=!0;for(const i of pn(e,t)){let e=yt,t=!0;switch(i.op){case"<":case"<=":e=Ot(i.value);break;case"==":case"in":case">=":e=i.value;break;case">":e=i.value,t=!1;break;case"!=":case"not-in":e=yt}Mt({value:r,inclusive:s},{value:e,inclusive:t})<0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];Mt({value:r,inclusive:s},{value:e,inclusive:n.inclusive})<0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}function wn(e,t,n){let r=pt,s=!0;for(const i of pn(e,t)){let e=pt,t=!0;switch(i.op){case">=":case">":e=Ft(i.value),t=!1;break;case"==":case"in":case"<=":e=i.value;break;case"<":e=i.value,t=!1;break;case"!=":case"not-in":e=pt}Vt({value:r,inclusive:s},{value:e,inclusive:t})>0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];Vt({value:r,inclusive:s},{value:e,inclusive:n.inclusive})>0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}
/**
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
 */class vn{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function In(e,t,n,r,s,i,o,a){return new vn(e,t,n,r,s,i,o,a)}function _n(e){return new vn(e)}function bn(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function En(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Tn(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Sn(e){return null!==e.collectionGroup}function xn(e){const t=_(e);if(null===t.Pe){t.Pe=[];const e=Tn(t),n=En(t);if(null!==e&&null===n)e.isKeyField()||t.Pe.push(new Kt(e)),t.Pe.push(new Kt(K.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.Pe.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Kt(K.keyField(),e))}}}return t.Pe}function Cn(e){const t=_(e);return t.Ie||(t.Ie=Dn(t,xn(e))),t.Ie}function Dn(e,t){if("F"===e.limitType)return dn(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new Kt(e.field,t)});const n=e.endAt?new qt(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new qt(e.startAt.position,e.startAt.inclusive):null;return dn(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function An(e,t){t.getFirstInequalityField(),Tn(e);const n=e.filters.concat([t]);return new vn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Nn(e,t,n){return new vn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function kn(e,t){return mn(Cn(e),Cn(t))&&e.limitType===t.limitType}function Rn(e){return`${fn(Cn(e))}|lt:${e.limitType}`}function On(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>tn(e)).join(", ")}]`),pe(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Et(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Et(e)).join(",")),`Target(${t})`}(Cn(e))}; limitType=${e.limitType})`}function Fn(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):z.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of xn(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Bt(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,xn(e),t))&&!(e.endAt&&!function(e,t,n){const r=Bt(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,xn(e),t))}(e,t)}function Mn(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Vn(e){return(t,n)=>{let r=!1;for(const s of xn(e)){const e=Pn(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function Pn(e,t,n){const r=e.field.isKeyField()?z.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?_t(r,s):w()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return w()}}
/**
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
 */class Ln{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){We(this.inner,(t,n)=>{for(const[r,s]of n)e(r,s)})}isEmpty(){return Ye(this.inner)}size(){return this.innerSize}}
/**
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
 */const Un=new Xe(z.comparator);function qn(){return Un}const Bn=new Xe(z.comparator);function Gn(...e){let t=Bn;for(const n of e)t=t.insert(n.key,n);return t}function Kn(e){let t=Bn;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function zn(){return $n()}function jn(){return $n()}function $n(){return new Ln(e=>e.toString(),(e,t)=>e.isEqual(t))}const Qn=new Xe(z.comparator),Hn=new et(z.comparator);function Wn(...e){let t=Hn;for(const n of e)t=t.add(n);return t}const Yn=new et(M);function Xn(){return Yn}
/**
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
 */function Jn(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ye(t)?"-0":t}}function Zn(e){return{integerValue:""+e}}function er(e,t){return we(t)?Zn(t):Jn(e,t)}
/**
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
 */class tr{constructor(){this._=void 0}}function nr(e,t,n){return e instanceof ir?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ht(t)&&(t=dt(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof or?ar(e,t):e instanceof ur?cr(e,t):function(e,t){const n=sr(e,t),r=hr(n)+hr(e.Te);return xt(n)&&xt(e.Te)?Zn(r):Jn(e.serializer,r)}(e,t)}function rr(e,t,n){return e instanceof or?ar(e,t):e instanceof ur?cr(e,t):n}function sr(e,t){return e instanceof lr?function(e){return xt(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class ir extends tr{}class or extends tr{constructor(e){super(),this.elements=e}}function ar(e,t){const n=dr(t);for(const r of e.elements)n.some(e=>vt(e,r))||n.push(r);return{arrayValue:{values:n}}}class ur extends tr{constructor(e){super(),this.elements=e}}function cr(e,t){let n=dr(t);for(const r of e.elements)n=n.filter(e=>!vt(e,r));return{arrayValue:{values:n}}}class lr extends tr{constructor(e,t){super(),this.serializer=e,this.Te=t}}function hr(e){return ct(e.integerValue||e.doubleValue)}function dr(e){return Ct(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class fr{constructor(e,t){this.field=e,this.transform=t}}function mr(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof or&&t instanceof or||e instanceof ur&&t instanceof ur?V(e.elements,t.elements,vt):e instanceof lr&&t instanceof lr?vt(e.Te,t.Te):e instanceof ir&&t instanceof ir}(e.transform,t.transform)}class gr{constructor(e,t){this.version=e,this.transformResults=t}}class pr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pr}static exists(e){return new pr(void 0,e)}static updateTime(e){return new pr(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yr(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class wr{}function vr(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ar(e.key,pr.none()):new Tr(e.key,e.data,pr.none());{const n=e.data,r=Pt.empty();let s=new et(K.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new Sr(e.key,r,new rt(s.toArray()),pr.none())}}function Ir(e,t,n){e instanceof Tr?function(e,t,n){const r=e.value.clone(),s=Cr(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Sr?function(e,t,n){if(!yr(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Cr(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(xr(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function _r(e,t,n,r){return e instanceof Tr?function(e,t,n,r){if(!yr(e.precondition,t))return n;const s=e.value.clone(),i=Dr(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof Sr?function(e,t,n,r){if(!yr(e.precondition,t))return n;const s=Dr(e.fieldTransforms,r,t),i=t.data;return i.setAll(xr(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return yr(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function br(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=sr(r.transform,e||null);null!=s&&(null===n&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function Er(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&V(e,t,(e,t)=>mr(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Tr extends wr{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Sr extends wr{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xr(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Cr(e,t,n){const r=new Map;v(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,rr(o,a,n[s]))}return r}function Dr(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,nr(e,i,t))}return r}class Ar extends wr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nr extends wr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class kr{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Ir(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=_r(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=_r(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=jn();return this.mutations.forEach(r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=vr(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Wn())}isEqual(e){return this.batchId===e.batchId&&V(this.mutations,e.mutations,(e,t)=>Er(e,t))&&V(this.baseMutations,e.baseMutations,(e,t)=>Er(e,t))}}class Rr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){v(e.mutations.length===n.length);let r=function(){return Qn}();const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Rr(e,t,n,r)}}
/**
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
 */class Or{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */
/**
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
 */
class Fr{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
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
 */var Mr,Vr;function Pr(e){switch(e){default:return w();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Lr(e){if(void 0===e)return g("GRPC error has no .code"),b.UNKNOWN;switch(e){case Mr.OK:return b.OK;case Mr.CANCELLED:return b.CANCELLED;case Mr.UNKNOWN:return b.UNKNOWN;case Mr.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Mr.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Mr.INTERNAL:return b.INTERNAL;case Mr.UNAVAILABLE:return b.UNAVAILABLE;case Mr.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Mr.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Mr.NOT_FOUND:return b.NOT_FOUND;case Mr.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Mr.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Mr.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Mr.ABORTED:return b.ABORTED;case Mr.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Mr.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Mr.DATA_LOSS:return b.DATA_LOSS;default:return w()}}(Vr=Mr||(Mr={}))[Vr.OK=0]="OK",Vr[Vr.CANCELLED=1]="CANCELLED",Vr[Vr.UNKNOWN=2]="UNKNOWN",Vr[Vr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Vr[Vr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Vr[Vr.NOT_FOUND=5]="NOT_FOUND",Vr[Vr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Vr[Vr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Vr[Vr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Vr[Vr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Vr[Vr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Vr[Vr.ABORTED=10]="ABORTED",Vr[Vr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Vr[Vr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Vr[Vr.INTERNAL=13]="INTERNAL",Vr[Vr.UNAVAILABLE=14]="UNAVAILABLE",Vr[Vr.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
let Ur=null;
/**
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
 */function qr(){return new TextEncoder}
/**
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
 */const Br=new a["d"]([4294967295,4294967295],0);function Gr(e){const t=qr().encode(e),n=new a["e"];return n.update(t),new Uint8Array(n.digest())}function Kr(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new a["d"]([n,r],0),new a["d"]([s,i],0)]}class zr{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new jr("Invalid padding: "+t);if(n<0)throw new jr("Invalid hash count: "+n);if(e.length>0&&0===this.hashCount)throw new jr("Invalid hash count: "+n);if(0===e.length&&0!==t)throw new jr("Invalid padding when bitmap length is 0: "+t);this.Ae=8*e.length-t,this.Re=a["d"].fromNumber(this.Ae)}Ve(e,t,n){let r=e.add(t.multiply(a["d"].fromNumber(n)));return 1===r.compare(Br)&&(r=new a["d"]([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Re).toNumber()}me(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ae)return!1;const t=Gr(e),[n,r]=Kr(t);for(let s=0;s<this.hashCount;s++){const e=this.Ve(n,r,s);if(!this.me(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),i=new zr(s,r,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Ae)return;const t=Gr(e),[n,r]=Kr(t);for(let s=0;s<this.hashCount;s++){const e=this.Ve(n,r,s);this.fe(e)}}fe(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class jr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class $r{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Qr.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new $r(U.min(),r,new Xe(M),qn(),Wn())}}class Qr{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Qr(n,t,Wn(),Wn(),Wn())}}
/**
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
 */class Hr{constructor(e,t,n,r){this.ge=e,this.removedTargetIds=t,this.key=n,this.pe=r}}class Wr{constructor(e,t){this.targetId=e,this.ye=t}}class Yr{constructor(e,t,n=ot.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Xr{constructor(){this.we=0,this.Se=es(),this.be=ot.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return 0!==this.we}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=Wn(),t=Wn(),n=Wn();return this.Se.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:w()}}),new Qr(this.be,this.De,e,t,n)}Oe(){this.Ce=!1,this.Se=es()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class Jr{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=qn(),this.Ue=Zr(),this.We=new Xe(M)}Ge(e){for(const t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(const t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,t=>{const n=this.Je(t);switch(e.state){case 0:this.Ye(t)&&n.Me(e.resumeToken);break;case 1:n.ke(),n.ve||n.Oe(),n.Me(e.resumeToken);break;case 2:n.ke(),n.ve||this.removeTarget(t);break;case 3:this.Ye(t)&&(n.qe(),n.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),n.Me(e.resumeToken));break;default:w()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((e,n)=>{this.Ye(n)&&t(n)})}Xe(e){const t=e.targetId,n=e.ye.count,r=this.et(t);if(r){const s=r.target;if(gn(s))if(0===n){const e=new z(s.path);this.je(t,e,Ut.newNoDocument(e,U.min()))}else v(1===n);else{const r=this.tt(t);if(r!==n){const n=this.nt(e),s=n?this.rt(n,e,r):1;if(0!==s){this.Ze(t);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(t,e)}null==Ur||Ur.it(function(e,t,n,r,s){var i,o,a,u,c,l;const h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===s,hashCount:null!==(i=null==d?void 0:d.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(u=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==u?u:0,padding:null!==(l=null===(c=null==d?void 0:d.bits)||void 0===c?void 0:c.padding)&&void 0!==l?l:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),h}
/**
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
 */(r,e.ye,this.Qe.st(),n,s))}}}}nt(e){const t=e.ye.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=t;let i,o;try{i=lt(n).toUint8Array()}catch(e){if(e instanceof st)return p("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new zr(i,r,s)}catch(e){return p(e instanceof jr?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Ae?null:o}rt(e,t,n){return t.ye.count===n-this.ot(e,t.targetId)?0:2}ot(e,t){const n=this.Qe.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const s=this.Qe.st(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.je(t,n,null),r++)}),r}_t(e){const t=new Map;this.Ke.forEach((n,r)=>{const s=this.et(r);if(s){if(n.current&&gn(s.target)){const t=new z(s.target.path);null!==this.$e.get(t)||this.ut(r,t)||this.je(r,t,Ut.newNoDocument(t,e))}n.Fe&&(t.set(r,n.xe()),n.Oe())}});let n=Wn();this.Ue.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.et(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.$e.forEach((t,n)=>n.setReadTime(e));const r=new $r(e,t,this.We,this.$e,n);return this.$e=qn(),this.Ue=Zr(),this.We=new Xe(M),r}ze(e,t){if(!this.Ye(e))return;const n=this.ut(e,t.key)?2:0;this.Je(e).Ne(t.key,n),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}je(e,t,n){if(!this.Ye(e))return;const r=this.Je(e);this.ut(e,t)?r.Ne(t,1):r.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),n&&(this.$e=this.$e.insert(t,n))}removeTarget(e){this.Ke.delete(e)}tt(e){const t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new Xr,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new et(M),this.Ue=this.Ue.insert(e,t)),t}Ye(e){const t=null!==this.et(e);return t||m("WatchChangeAggregator","Detected inactive target",e),t}et(e){const t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Xr),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,null)})}ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function Zr(){return new Xe(z.comparator)}function es(){return new Xe(z.comparator)}const ts=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),ns=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),rs=(()=>{const e={and:"AND",or:"OR"};return e})();class ss{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function is(e,t){return e.useProto3Json||pe(t)?t:{value:t}}function os(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function as(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function us(e,t){return os(e,t.toTimestamp())}function cs(e){return v(!!e),U.fromTimestamp(function(e){const t=ut(e);return new L(t.seconds,t.nanos)}(e))}function ls(e,t){return function(e){return new B(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function hs(e){const t=B.fromString(e);return v(Ps(t)),t}function ds(e,t){return ls(e.databaseId,t.path)}function fs(e,t){const n=hs(t);if(n.get(1)!==e.databaseId.projectId)throw new E(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new z(ys(n))}function ms(e,t){return ls(e.databaseId,t)}function gs(e){const t=hs(e);return 4===t.length?B.emptyPath():ys(t)}function ps(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ys(e){return v(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ws(e,t,n){return{name:ds(e,t),fields:n.value.mapValue.fields}}function vs(e,t,n){const r=fs(e,t.name),s=cs(t.updateTime),i=t.createTime?cs(t.createTime):U.min(),o=new Pt({mapValue:{fields:t.fields}}),a=Ut.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function Is(e,t){return"found"in t?function(e,t){v(!!t.found),t.found.name,t.found.updateTime;const n=fs(e,t.found.name),r=cs(t.found.updateTime),s=t.found.createTime?cs(t.found.createTime):U.min(),i=new Pt({mapValue:{fields:t.found.fields}});return Ut.newFoundDocument(n,r,s,i)}(e,t):"missing"in t?function(e,t){v(!!t.missing),v(!!t.readTime);const n=fs(e,t.missing),r=cs(t.readTime);return Ut.newNoDocument(n,r)}(e,t):w()}function _s(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:w()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(e,t){return e.useProto3Json?(v(void 0===t||"string"==typeof t),ot.fromBase64String(t||"")):(v(void 0===t||t instanceof Uint8Array),ot.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?b.UNKNOWN:Lr(e.code);return new E(t,e.message||"")}(o);n=new Yr(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=fs(e,r.document.name),i=cs(r.document.updateTime),o=r.document.createTime?cs(r.document.createTime):U.min(),a=new Pt({mapValue:{fields:r.document.fields}}),u=Ut.newFoundDocument(s,i,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Hr(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=fs(e,r.document),i=r.readTime?cs(r.readTime):U.min(),o=Ut.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Hr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=fs(e,r.document),i=r.removedTargetIds||[];n=new Hr([],i,s,null)}else{if(!("filter"in t))return w();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:s}=e,i=new Fr(r,s),o=e.targetId;n=new Wr(o,i)}}return n}function bs(e,t){let n;if(t instanceof Tr)n={update:ws(e,t.key,t.value)};else if(t instanceof Ar)n={delete:ds(e,t.key)};else if(t instanceof Sr)n={update:ws(e,t.key,t.data),updateMask:Vs(t.fieldMask)};else{if(!(t instanceof Nr))return w();n={verify:ds(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof ir)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof or)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ur)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof lr)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw w()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:us(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:w()}(e,t.precondition)),n}function Es(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?pr.updateTime(cs(e.updateTime)):void 0!==e.exists?pr.exists(e.exists):pr.none()}(t.currentDocument):pr.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)v("REQUEST_TIME"===t.setToServerValue),n=new ir;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new or(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new ur(e)}else"increment"in t?n=new lr(e,t.increment):w();const r=K.fromServerFormat(t.fieldPath);return new fr(r,n)}(e,t)):[];if(t.update){t.update.name;const s=fs(e,t.update.name),i=new Pt({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new rt(t.map(e=>K.fromServerFormat(e)))}(t.updateMask);return new Sr(s,i,e,n,r)}return new Tr(s,i,n,r)}if(t.delete){const r=fs(e,t.delete);return new Ar(r,n)}if(t.verify){const r=fs(e,t.verify);return new Nr(r,n)}return w()}function Ts(e,t){return e&&e.length>0?(v(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?cs(e.updateTime):cs(t);return n.isEqual(U.min())&&(n=cs(t)),new gr(n,e.transformResults||[])}(e,t))):[]}function Ss(e,t){return{documents:[ms(e,t.path)]}}function xs(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ms(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ms(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0!==e.length)return Ms(Qt.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:Os(e.field),direction:Ns(e.dir)}}(e))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=is(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Cs(e){let t=gs(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){v(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=As(e);return t instanceof Qt&&Yt(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map(e=>function(e){return new Kt(Fs(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,pe(t)?null:t}(n.limit));let u=null;n.startAt&&(u=function(e){const t=!!e.before,n=e.values||[];return new qt(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new qt(n,t)}(n.endAt)),In(t,s,o,i,a,"F",u,c)}function Ds(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return w()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function As(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Fs(e.unaryFilter.field);return $t.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Fs(e.unaryFilter.field);return $t.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Fs(e.unaryFilter.field);return $t.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Fs(e.unaryFilter.field);return $t.create(s,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(e):void 0!==e.fieldFilter?function(e){return $t.create(Fs(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Qt.create(e.compositeFilter.filters.map(e=>As(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return w()}}(e.compositeFilter.op))}(e):w()}function Ns(e){return ts[e]}function ks(e){return ns[e]}function Rs(e){return rs[e]}function Os(e){return{fieldPath:e.canonicalString()}}function Fs(e){return K.fromServerFormat(e.fieldPath)}function Ms(e){return e instanceof $t?function(e){if("=="===e.op){if(At(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NAN"}};if(Dt(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(At(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NOT_NAN"}};if(Dt(e.value))return{unaryFilter:{field:Os(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(e.field),op:ks(e.op),value:e.value}}}(e):e instanceof Qt?function(e){const t=e.getFilters().map(e=>Ms(e));return 1===t.length?t[0]:{compositeFilter:{op:Rs(e.op),filters:t}}}(e):w()}function Vs(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ps(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */class Ls{constructor(e,t,n,r,s=U.min(),i=U.min(),o=ot.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Ls(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ls(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
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
 */class Us{constructor(e){this.ht=e}}function qs(e,t){let n;if(t.document)n=vs(e.ht,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=z.fromSegments(t.noDocument.path),r=zs(t.noDocument.readTime);n=Ut.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return w();{const e=z.fromSegments(t.unknownDocument.path),r=zs(t.unknownDocument.version);n=Ut.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new L(e[0],e[1]);return U.fromTimestamp(t)}(t.readTime)),n}function Bs(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Gs(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:ds(e,t.key),fields:t.data.value.mapValue.fields,updateTime:os(e,t.version.toTimestamp()),createTime:os(e,t.createTime.toTimestamp())}}(e.ht,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ks(t.version)};else{if(!t.isUnknownDocument())return w();r.unknownDocument={path:n.path.toArray(),version:Ks(t.version)}}return r}function Gs(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Ks(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function zs(e){const t=new L(e.seconds,e.nanoseconds);return U.fromTimestamp(t)}function js(e,t){const n=(t.baseMutations||[]).map(t=>Es(e.ht,t));for(let i=0;i<t.mutations.length-1;++i){const e=t.mutations[i];if(i+1<t.mutations.length&&void 0!==t.mutations[i+1].transform){const n=t.mutations[i+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const r=t.mutations.map(t=>Es(e.ht,t)),s=L.fromMillis(t.localWriteTimeMs);return new kr(t.batchId,s,n,r)}function $s(e){const t=zs(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?zs(e.lastLimboFreeSnapshotVersion):U.min();let r;return r=function(e){return void 0!==e.documents}(e.query)?function(e){return v(1===e.documents.length),Cn(_n(gs(e.documents[0])))}(e.query):function(e){return Cn(Cs(e))}(e.query),new Ls(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,ot.fromBase64String(e.resumeToken))}function Qs(e,t){const n=Ks(t.snapshotVersion),r=Ks(t.lastLimboFreeSnapshotVersion);let s;s=gn(t.target)?Ss(e.ht,t.target):xs(e.ht,t.target);const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:fn(t.target),readTime:n,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Hs(e){const t=Cs({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Nn(t,t.limit,"L"):t}function Ws(e,t){return new Or(t.largestBatchId,Es(e.ht,t.overlayMutation))}function Ys(e,t){const n=t.path.lastSegment();return[e,ve(t.path.popLast()),n]}function Xs(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Ks(r.readTime),documentKey:ve(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
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
 */class Js{getBundleMetadata(e,t){return Zs(e).get(t).next(e=>{if(e)return function(e){return{id:e.bundleId,createTime:zs(e.createTime),version:e.version}}(e)})}saveBundleMetadata(e,t){return Zs(e).put(function(e){return{bundleId:e.id,createTime:Ks(cs(e.createTime)),version:e.version}}(t))}getNamedQuery(e,t){return ei(e).get(t).next(e=>{if(e)return function(e){return{name:e.name,query:Hs(e.bundledQuery),readTime:zs(e.readTime)}}(e)})}saveNamedQuery(e,t){return ei(e).put(function(e){return{name:e.name,readTime:Ks(cs(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Zs(e){return Qe(e,"bundles")}function ei(e){return Qe(e,"namedQueries")}
/**
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
 */class ti{constructor(e,t){this.serializer=e,this.userId=t}static Pt(e,t){const n=t.uid||"";return new ti(e,n)}getOverlay(e,t){return ni(e).get(Ys(this.userId,t)).next(e=>e?Ws(this.serializer,e):null)}getOverlays(e,t){const n=zn();return re.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){const r=[];return n.forEach((n,s)=>{const i=new Or(t,s);r.push(this.It(e,i))}),re.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(ve(e.getCollectionPath())));const s=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);s.push(ni(e).J("collectionPathOverlayIndex",r))}),re.waitFor(s)}getOverlaysForCollection(e,t,n){const r=zn(),s=ve(t),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ni(e).G("collectionPathOverlayIndex",i).next(e=>{for(const t of e){const e=Ws(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const s=zn();let i;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ni(e).Z({index:"collectionGroupOverlayIndex",range:o},(e,t,n)=>{const o=Ws(this.serializer,t);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()}).next(()=>s)}It(e,t){return ni(e).put(function(e,t,n){const[r,s,i]=Ys(t,n.mutation.key);return{userId:t,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:bs(e.ht,n.mutation)}}(this.serializer,this.userId,t))}}function ni(e){return Qe(e,"documentOverlays")}
/**
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
 */class ri{constructor(){}dt(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(ct(e.integerValue));else if("doubleValue"in e){const n=ct(e.doubleValue);isNaN(n)?this.At(t,13):(this.At(t,15),ye(n)?t.Rt(0):t.Rt(n))}else if("timestampValue"in e){const n=e.timestampValue;this.At(t,20),"string"==typeof n?t.Vt(n):(t.Vt(""+(n.seconds||"")),t.Rt(n.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(lt(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.At(t,45),t.Rt(n.latitude||0),t.Rt(n.longitude||0)}else"mapValue"in e?Rt(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):w()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){const n=e.fields||{};this.At(t,55);for(const r of Object.keys(n))this.ft(r,t),this.Tt(n[r],t)}bt(e,t){const n=e.values||[];this.At(t,50);for(const r of n)this.Tt(r,t)}wt(e,t){this.At(t,37),z.fromName(e).path.forEach(e=>{this.At(t,60),this.Dt(e,t)})}At(e,t){e.Rt(t)}gt(e){e.Rt(2)}}function si(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function ii(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=si(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}ri.Ct=new ri;class oi{constructor(){this.buffer=new Uint8Array(1024),this.position=0}vt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Bt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ft(e);else if(e<2048)this.Ft(960|e>>>6),this.Ft(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ft(480|e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e);else{const e=t.codePointAt(0);this.Ft(240|e>>>18),this.Ft(128|63&e>>>12),this.Ft(128|63&e>>>6),this.Ft(128|63&e)}}this.Mt()}Lt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ot(e);else if(e<2048)this.Ot(960|e>>>6),this.Ot(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ot(480|e>>>12),this.Ot(128|63&e>>>6),this.Ot(128|63&e);else{const e=t.codePointAt(0);this.Ot(240|e>>>18),this.Ot(128|63&e>>>12),this.Ot(128|63&e>>>6),this.Ot(128|63&e)}}this.Nt()}kt(e){const t=this.qt(e),n=ii(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Kt(e){const t=this.qt(e),n=ii(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ft(e){const t=255&e;0===t?(this.Ut(0),this.Ut(255)):255===t?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;0===t?(this.Gt(0),this.Gt(255)):255===t?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class ai{constructor(e){this.jt=e}yt(e){this.jt.vt(e)}Vt(e){this.jt.Bt(e)}Rt(e){this.jt.kt(e)}Et(){this.jt.$t()}}class ui{constructor(e){this.jt=e}yt(e){this.jt.xt(e)}Vt(e){this.jt.Lt(e)}Rt(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ci{constructor(){this.jt=new oi,this.Ht=new ai(this.jt),this.Jt=new ui(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return 0===e?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}
/**
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
 */class li{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Zt(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new li(this.indexId,this.documentKey,this.arrayValue,n)}}function hi(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=di(e.arrayValue,t.arrayValue),0!==n?n:(n=di(e.directionalValue,t.directionalValue),0!==n?n:z.comparator(e.documentKey,t.documentKey)))}function di(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
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
 */class fi{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Xt=e.orderBy,this.en=[];for(const t of e.filters){const e=t;e.isInequality()?this.tn=e:this.en.push(e)}}nn(e){v(e.collectionGroup===this.collectionId);const t=$(e);if(void 0!==t&&!this.rn(t))return!1;const n=Q(e);let r=new Set,s=0,i=0;for(;s<n.length&&this.rn(n[s]);++s)r=r.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(void 0!==this.tn){if(!r.has(this.tn.field.canonicalString())){const e=n[s];if(!this.sn(this.tn,e)||!this.on(this.Xt[i++],e))return!1}++s}for(;s<n.length;++s){const e=n[s];if(i>=this.Xt.length||!this.on(this.Xt[i++],e))return!1}return!0}_n(){let e=new et(K.comparator);const t=[];for(const n of this.en)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new H(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new H(n.field,0))}for(const n of this.Xt)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new H(n.field,"asc"===n.dir?0:1)));return new j(j.UNKNOWN_ID,this.collectionId,t,W.empty())}rn(e){for(const t of this.en)if(this.sn(t,e))return!0;return!1}sn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}on(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
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
 */function mi(e){var t,n;if(v(e instanceof $t||e instanceof Qt),e instanceof $t){if(e instanceof un){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map(t=>$t.create(e.field,"==",t)))||[];return Qt.create(r,"or")}return e}const r=e.filters.map(e=>mi(e));return Qt.create(r,e.op)}function gi(e){if(0===e.getFilters().length)return[];const t=vi(mi(e));return v(wi(t)),pi(t)||yi(t)?[t]:t.getFilters()}function pi(e){return e instanceof $t}function yi(e){return e instanceof Qt&&Yt(e)}function wi(e){return pi(e)||yi(e)||function(e){if(e instanceof Qt&&Wt(e)){for(const t of e.getFilters())if(!pi(t)&&!yi(t))return!1;return!0}return!1}(e)}function vi(e){if(v(e instanceof $t||e instanceof Qt),e instanceof $t)return e;if(1===e.filters.length)return vi(e.filters[0]);const t=e.filters.map(e=>vi(e));let n=Qt.create(t,e.op);return n=bi(n),wi(n)?n:(v(n instanceof Qt),v(Ht(n)),v(n.filters.length>1),n.filters.reduce((e,t)=>Ii(e,t)))}function Ii(e,t){let n;return v(e instanceof $t||e instanceof Qt),v(t instanceof $t||t instanceof Qt),n=e instanceof $t?t instanceof $t?function(e,t){return Qt.create([e,t],"and")}(e,t):_i(e,t):t instanceof $t?_i(t,e):function(e,t){if(v(e.filters.length>0&&t.filters.length>0),Ht(e)&&Ht(t))return en(e,t.getFilters());const n=Wt(e)?e:t,r=Wt(e)?t:e,s=n.filters.map(e=>Ii(e,r));return Qt.create(s,"or")}(e,t),bi(n)}function _i(e,t){if(Ht(t))return en(t,e.getFilters());{const n=t.filters.map(t=>Ii(e,t));return Qt.create(n,"or")}}function bi(e){if(v(e instanceof $t||e instanceof Qt),e instanceof $t)return e;const t=e.getFilters();if(1===t.length)return bi(t[0]);if(Xt(e))return e;const n=t.map(e=>bi(e)),r=[];return n.forEach(t=>{t instanceof $t?r.push(t):t instanceof Qt&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:Qt.create(r,e.op)
/**
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
 */}class Ei{constructor(){this.an=new Ti}addToCollectionParentIndex(e,t){return this.an.add(t),re.resolve()}getCollectionParents(e,t){return re.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return re.resolve()}deleteFieldIndex(e,t){return re.resolve()}deleteAllFieldIndexes(e){return re.resolve()}createTargetIndexes(e,t){return re.resolve()}getDocumentsMatchingTarget(e,t){return re.resolve(null)}getIndexType(e,t){return re.resolve(0)}getFieldIndexes(e,t){return re.resolve([])}getNextCollectionGroupToUpdate(e){return re.resolve(null)}getMinOffset(e,t){return re.resolve(J.min())}getMinOffsetFromCollectionGroup(e,t){return re.resolve(J.min())}updateCollectionGroup(e,t,n){return re.resolve()}updateIndexEntries(e,t){return re.resolve()}}class Ti{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new et(B.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new et(B.comparator)).toArray()}}
/**
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
 */const Si=new Uint8Array(0);class xi{constructor(e,t){this.user=e,this.databaseId=t,this.un=new Ti,this.cn=new Ln(e=>fn(e),(e,t)=>mn(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.un.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.un.add(t)});const s={collectionId:n,parent:ve(r)};return Ci(e).put(s)}return re.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[P(t),""],!1,!0);return Ci(e).G(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(be(r.parent))}return n})}addFieldIndex(e,t){const n=Ai(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}}(t);delete r.indexId;const s=n.add(r);if(t.indexState){const n=Ni(e);return s.next(e=>{n.put(Xs(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=Ai(e),r=Ni(e),s=Di(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ai(e),n=Di(e),r=Ni(e);return t.J().next(()=>n.J()).next(()=>r.J())}createTargetIndexes(e,t){return re.forEach(this.ln(t),t=>this.getIndexType(e,t).next(n=>{if(0===n||1===n){const n=new fi(t);return this.addFieldIndex(e,n._n())}}))}getDocumentsMatchingTarget(e,t){const n=Di(e);let r=!0;const s=new Map;return re.forEach(this.ln(t),t=>this.hn(e,t).next(e=>{r&&(r=!!e),s.set(t,e)})).next(()=>{if(r){let e=Wn();const r=[];return re.forEach(s,(s,i)=>{m("IndexedDbIndexManager",`Using index ${function(e){return`id=${e.indexId}|cg=${e.collectionGroup}|f=${e.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`}(s)} to execute ${fn(t)}`);const o=function(e,t){const n=$(t);if(void 0===n)return null;for(const r of pn(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,s),a=function(e,t){const n=new Map;for(const r of Q(t))for(const t of pn(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(i,s),u=function(e,t){const n=[];let r=!0;for(const s of Q(t)){const t=0===s.kind?yn(e,s.fieldPath,e.startAt):wn(e,s.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new qt(n,r)}(i,s),c=function(e,t){const n=[];let r=!0;for(const s of Q(t)){const t=0===s.kind?wn(e,s.fieldPath,e.endAt):yn(e,s.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new qt(n,r)}(i,s),l=this.Pn(s,i,u),h=this.Pn(s,i,c),d=this.In(s,i,a),f=this.dn(s.indexId,o,l,u.inclusive,h,c.inclusive,d);return re.forEach(f,s=>n.H(s,t.limit).next(t=>{t.forEach(t=>{const n=z.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return re.resolve(null)})}ln(e){let t=this.cn.get(e);return t||(t=0===e.filters.length?[e]:gi(Qt.create(e.filters,"and")).map(t=>dn(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.cn.set(e,t),t)}dn(e,t,n,r,s,i,o){const a=(null!=t?t.length:1)*Math.max(n.length,s.length),u=a/(null!=t?t.length:1),c=[];for(let l=0;l<a;++l){const a=t?this.Tn(t[l/u]):Si,h=this.En(e,a,n[l%u],r),d=this.An(e,a,s[l%u],i),f=o.map(t=>this.En(e,a,t,!0));c.push(...this.createRange(h,d,f))}return c}En(e,t,n,r){const s=new li(e,z.empty(),t,n);return r?s:s.Zt()}An(e,t,n,r){const s=new li(e,z.empty(),t,n);return r?s.Zt():s}hn(e,t){const n=new fi(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(const r of e)n.nn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;const r=this.ln(t);return re.forEach(r,t=>this.hn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new et(K.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n)}Rn(e,t){const n=new ci;for(const r of Q(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const s=n.Yt(r.kind);ri.Ct.dt(e,s)}return n.zt()}Tn(e){const t=new ci;return ri.Ct.dt(e,t.Yt(0)),t.zt()}Vn(e,t){const n=new ci;return ri.Ct.dt(St(this.databaseId,t),n.Yt(function(e){const t=Q(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.zt()}In(e,t,n){if(null===n)return[];let r=[];r.push(new ci);let s=0;for(const i of Q(e)){const e=n[s++];for(const n of r)if(this.mn(t,i.fieldPath)&&Ct(e))r=this.fn(r,i,e);else{const t=n.Yt(i.kind);ri.Ct.dt(e,t)}}return this.gn(r)}Pn(e,t,n){return this.In(e,t,n.position)}gn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}fn(e,t,n){const r=[...e],s=[];for(const i of n.arrayValue.values||[])for(const e of r){const n=new ci;n.seed(e.zt()),ri.Ct.dt(i,n.Yt(t.kind)),s.push(n)}return s}mn(e,t){return!!e.filters.find(e=>e instanceof $t&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=Ai(e),r=Ni(e);return(t?n.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.G()).next(e=>{const t=[];return re.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new W(t.sequenceNumber,new J(zs(t.readTime),new z(be(t.documentKey)),t.largestBatchId)):W.empty(),r=e.fields.map(([e,t])=>new H(K.fromServerFormat(e),t));return new j(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:M(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=Ai(e),s=Ni(e);return this.pn(e).next(e=>r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(t=>re.forEach(t,t=>s.put(Xs(t.indexId,this.user,e,n)))))}updateIndexEntries(e,t){const n=new Map;return re.forEach(t,(t,r)=>{const s=n.get(t.collectionGroup);return(s?re.resolve(s):this.getFieldIndexes(e,t.collectionGroup)).next(s=>(n.set(t.collectionGroup,s),re.forEach(s,n=>this.yn(e,t,n).next(t=>{const s=this.wn(r,n);return t.isEqual(s)?re.resolve():this.Sn(e,r,n,t,s)}))))})}bn(e,t,n,r){return Di(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.Vn(n,t.key),documentKey:t.key.path.toArray()})}Dn(e,t,n,r){return Di(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.Vn(n,t.key),t.key.path.toArray()])}yn(e,t,n){const r=Di(e);let s=new et(hi);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.Vn(n,t)])},(e,r)=>{s=s.add(new li(n.indexId,t,r.arrayValue,r.directionalValue))}).next(()=>s)}wn(e,t){let n=new et(hi);const r=this.Rn(t,e);if(null==r)return n;const s=$(t);if(null!=s){const i=e.data.field(s.fieldPath);if(Ct(i))for(const s of i.arrayValue.values||[])n=n.add(new li(t.indexId,e.key,this.Tn(s),r))}else n=n.add(new li(t.indexId,e.key,Si,r));return n}Sn(e,t,n,r,s){m("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(e,t,n,r,s){const i=e.getIterator(),o=t.getIterator();let a=nt(i),u=nt(o);for(;a||u;){let e=!1,t=!1;if(a&&u){const r=n(a,u);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(u),u=nt(o)):t?(s(a),a=nt(i)):(a=nt(i),u=nt(o))}}(r,s,hi,r=>{i.push(this.bn(e,t,n,r))},r=>{i.push(this.Dn(e,t,n,r))}),re.waitFor(i)}pn(e){let t=1;return Ni(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>hi(e,t)).filter((e,t,n)=>!t||0!==hi(e,n[t-1]));const r=[];r.push(e);for(const i of n){const n=hi(i,e),s=hi(i,t);if(0===n)r[0]=e.Zt();else if(n>0&&s<0)r.push(i),r.push(i.Zt());else if(s>0)break}r.push(t);const s=[];for(let i=0;i<r.length;i+=2){if(this.Cn(r[i],r[i+1]))return[];const e=[r[i].indexId,this.uid,r[i].arrayValue,r[i].directionalValue,Si,[]],t=[r[i+1].indexId,this.uid,r[i+1].arrayValue,r[i+1].directionalValue,Si,[]];s.push(IDBKeyRange.bound(e,t))}return s}Cn(e,t){return hi(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(ki)}getMinOffset(e,t){return re.mapArray(this.ln(t),t=>this.hn(e,t).next(e=>e||w())).next(ki)}}function Ci(e){return Qe(e,"collectionParents")}function Di(e){return Qe(e,"indexEntries")}function Ai(e){return Qe(e,"indexConfiguration")}function Ni(e){return Qe(e,"indexState")}function ki(e){v(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const s=e[r].indexState.offset;Z(s,t)<0&&(t=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new J(t.readTime,t.documentKey,n)}
/**
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
 */const Ri={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Oi{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Oi(e,Oi.DEFAULT_COLLECTION_PERCENTILE,Oi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */function Fi(e,t,n){const r=e.store("mutations"),s=e.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Z({range:o},(e,t,n)=>(a++,n.delete()));i.push(u.next(()=>{v(1===a)}));const c=[];for(const l of n.mutations){const e=Se(t,l.key.path,n.batchId);i.push(s.delete(e)),c.push(l.key)}return re.waitFor(i).next(()=>c)}function Mi(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw w();t=e.noDocument}return JSON.stringify(t).length}
/**
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
 */Oi.DEFAULT_COLLECTION_PERCENTILE=10,Oi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oi.DEFAULT=new Oi(41943040,Oi.DEFAULT_COLLECTION_PERCENTILE,Oi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oi.DISABLED=new Oi(-1,0,0);class Vi{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.vn={}}static Pt(e,t,n,r){v(""!==e.uid);const s=e.isAuthenticated()?e.uid:"";return new Vi(s,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Li(e).Z({index:"userMutationsIndex",range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const s=Ui(e),i=Li(e);return i.add({}).next(o=>{v("number"==typeof o);const a=new kr(o,t,n,r),u=function(e,t,n){const r=n.baseMutations.map(t=>bs(e.ht,t)),s=n.mutations.map(t=>bs(e.ht,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}}(this.serializer,this.userId,a),c=[];let l=new et((e,t)=>M(e.canonicalString(),t.canonicalString()));for(const e of r){const t=Se(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),c.push(i.put(u)),c.push(s.put(t,xe))}return l.forEach(t=>{c.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.vn[o]=a.keys()}),re.waitFor(c).next(()=>a)})}lookupMutationBatch(e,t){return Li(e).get(t).next(e=>e?(v(e.userId===this.userId),js(this.serializer,e)):null)}Fn(e,t){return this.vn[t]?re.resolve(this.vn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.vn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Li(e).Z({index:"userMutationsIndex",range:r},(e,t,r)=>{t.userId===this.userId&&(v(t.batchId>=n),s=js(this.serializer,t)),r.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Li(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Li(e).G("userMutationsIndex",t).next(e=>e.map(e=>js(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Te(this.userId,t.path),r=IDBKeyRange.lowerBound(n),s=[];return Ui(e).Z({range:r},(n,r,i)=>{const[o,a,u]=n,c=be(a);if(o===this.userId&&t.path.isEqual(c))return Li(e).get(u).next(e=>{if(!e)throw w();v(e.userId===this.userId),s.push(js(this.serializer,e))});i.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new et(M);const r=[];return t.forEach(t=>{const s=Te(this.userId,t.path),i=IDBKeyRange.lowerBound(s),o=Ui(e).Z({range:i},(e,r,s)=>{const[i,o,a]=e,u=be(o);i===this.userId&&t.path.isEqual(u)?n=n.add(a):s.done()});r.push(o)}),re.waitFor(r).next(()=>this.Mn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,s=Te(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new et(M);return Ui(e).Z({range:i},(e,t,s)=>{const[i,a,u]=e,c=be(a);i===this.userId&&n.isPrefixOf(c)?c.length===r&&(o=o.add(u)):s.done()}).next(()=>this.Mn(e,o))}Mn(e,t){const n=[],r=[];return t.forEach(t=>{r.push(Li(e).get(t).next(e=>{if(null===e)throw w();v(e.userId===this.userId),n.push(js(this.serializer,e))}))}),re.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return Fi(e.ue,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.xn(t.batchId)}),re.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}xn(e){delete this.vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return re.resolve();const n=IDBKeyRange.lowerBound(function(e){return[e]}(this.userId)),r=[];return Ui(e).Z({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=be(e[1]);r.push(t)}else n.done()}).next(()=>{v(0===r.length)})})}containsKey(e,t){return Pi(e,this.userId,t)}On(e){return qi(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Pi(e,t,n){const r=Te(t,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Ui(e).Z({range:i,Y:!0},(e,n,r)=>{const[i,a,u]=e;i===t&&a===s&&(o=!0),r.done()}).next(()=>o)}function Li(e){return Qe(e,"mutations")}function Ui(e){return Qe(e,"documentMutations")}function qi(e){return Qe(e,"mutationQueues")}
/**
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
 */class Bi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Bi(0)}static Ln(){return new Bi(-1)}}
/**
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
 */class Gi{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.kn(e).next(t=>{const n=new Bi(t.highestTargetId);return t.highestTargetId=n.next(),this.qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.kn(e).next(e=>U.fromTimestamp(new L(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.kn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.kn(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.qn(e,r)))}addTargetData(e,t){return this.Qn(e,t).next(()=>this.kn(e).next(n=>(n.targetCount+=1,this.Kn(t,n),this.qn(e,n))))}updateTargetData(e,t){return this.Qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ki(e).delete(t.targetId)).next(()=>this.kn(e)).next(t=>(v(t.targetCount>0),t.targetCount-=1,this.qn(e,t)))}removeTargets(e,t,n){let r=0;const s=[];return Ki(e).Z((i,o)=>{const a=$s(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(e,a)))}).next(()=>re.waitFor(s)).next(()=>r)}forEachTarget(e,t){return Ki(e).Z((e,n)=>{const r=$s(n);t(r)})}kn(e){return zi(e).get("targetGlobalKey").next(e=>(v(null!==e),e))}qn(e,t){return zi(e).put("targetGlobalKey",t)}Qn(e,t){return Ki(e).put(Qs(this.serializer,t))}Kn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.kn(e).next(e=>e.targetCount)}getTargetData(e,t){const n=fn(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Ki(e).Z({range:r,index:"queryTargetsIndex"},(e,n,r)=>{const i=$s(n);mn(t,i.target)&&(s=i,r.done())}).next(()=>s)}addMatchingKeys(e,t,n){const r=[],s=ji(e);return t.forEach(t=>{const i=ve(t.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(e,n,t))}),re.waitFor(r)}removeMatchingKeys(e,t,n){const r=ji(e);return re.forEach(t,t=>{const s=ve(t.path);return re.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=ji(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=ji(e);let s=Wn();return r.Z({range:n,Y:!0},(e,t,n)=>{const r=be(e[1]),i=new z(r);s=s.add(i)}).next(()=>s)}containsKey(e,t){const n=ve(t.path),r=IDBKeyRange.bound([n],[P(n)],!1,!0);let s=0;return ji(e).Z({index:"documentTargetsIndex",Y:!0,range:r},([e,t],n,r)=>{0!==e&&(s++,r.done())}).next(()=>s>0)}lt(e,t){return Ki(e).get(t).next(e=>e?$s(e):null)}}function Ki(e){return Qe(e,"targets")}function zi(e){return Qe(e,"targetGlobal")}function ji(e){return Qe(e,"targetDocuments")}
/**
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
 */function $i([e,t],[n,r]){const s=M(e,n);return 0===s?M(t,r):s}class Qi{constructor(e){this.$n=e,this.buffer=new et($i),this.Un=0}Wn(){return++this.Un}Gn(e){const t=[e,this.Wn()];if(this.buffer.size<this.$n)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();$i(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Hi{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.zn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.jn(6e4)}stop(){this.zn&&(this.zn.cancel(),this.zn=null)}get started(){return null!==this.zn}jn(e){m("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.zn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.zn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ue(e)?m("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ne(e)}await this.jn(3e5)})}}class Wi{constructor(e,t){this.Hn=e,this.params=t}calculateTargetCount(e,t){return this.Hn.Jn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return re.resolve(ge.ae);const n=new Qi(t);return this.Hn.forEachTarget(e,e=>n.Gn(e.sequenceNumber)).next(()=>this.Hn.Yn(e,e=>n.Gn(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Hn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Hn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(m("LruGarbageCollector","Garbage collection skipped; disabled"),re.resolve(Ri)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(m("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ri):this.Zn(e,t))}getCacheSize(e){return this.Hn.getCacheSize(e)}Zn(e,t){let n,r,s,o,a,u,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(m("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,o=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(s=t,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(c=Date.now(),d()<=i["a"].DEBUG&&m("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${s} targets in `+(u-a)+"ms\n"+`\tRemoved ${e} documents in `+(c-u)+"ms\n"+`Total Duration: ${c-l}ms`),re.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e})))}}function Yi(e,t){return new Wi(e,t)}
/**
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
 */class Xi{constructor(e,t){this.db=e,this.garbageCollector=Yi(this,t)}Jn(e){const t=this.Xn(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Xn(e){let t=0;return this.Yn(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Yn(e,t){return this.er(e,(e,n)=>t(n))}addReference(e,t,n){return Ji(e,n)}removeReference(e,t,n){return Ji(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ji(e,t)}tr(e,t){return function(e,t){let n=!1;return qi(e).X(r=>Pi(e,r,t).next(e=>(e&&(n=!0),re.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.er(e,(i,o)=>{if(o<=t){const t=this.tr(e,i).next(t=>{if(!t)return s++,n.getEntry(e,i).next(()=>(n.removeEntry(i,U.min()),ji(e).delete(function(e){return[0,ve(e.path)]}(i))))});r.push(t)}}).next(()=>re.waitFor(r)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ji(e,t)}er(e,t){const n=ji(e);let r,s=ge.ae;return n.Z({index:"documentTargetsIndex"},([e,n],{path:i,sequenceNumber:o})=>{0===e?(s!==ge.ae&&t(new z(be(r)),s),s=o,r=i):s=ge.ae}).next(()=>{s!==ge.ae&&t(new z(be(r)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ji(e,t){return ji(e).put(function(e,t){return{targetId:0,path:ve(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
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
 */class Zi{constructor(){this.changes=new Ln(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?re.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */class eo{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return so(e).put(n)}removeEntry(e,t,n){return so(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Gs(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.nr(e,n)))}getEntry(e,t){let n=Ut.newInvalidDocument(t);return so(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(io(t))},(e,r)=>{n=this.rr(t,r)}).next(()=>n)}ir(e,t){let n={size:0,document:Ut.newInvalidDocument(t)};return so(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(io(t))},(e,r)=>{n={document:this.rr(t,r),size:Mi(r)}}).next(()=>n)}getEntries(e,t){let n=qn();return this.sr(e,t,(e,t)=>{const r=this.rr(e,t);n=n.insert(e,r)}).next(()=>n)}_r(e,t){let n=qn(),r=new Xe(z.comparator);return this.sr(e,t,(e,t)=>{const s=this.rr(e,t);n=n.insert(e,s),r=r.insert(e,Mi(t))}).next(()=>({documents:n,ar:r}))}sr(e,t,n){if(t.isEmpty())return re.resolve();let r=new et(ao);t.forEach(e=>r=r.add(e));const s=IDBKeyRange.bound(io(r.first()),io(r.last())),i=r.getIterator();let o=i.getNext();return so(e).Z({index:"documentKeyIndex",range:s},(e,t,r)=>{const s=z.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&ao(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,t),o=i.hasNext()?i.getNext():null),o?r.W(io(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,s){const i=t.path,o=[i.popLast().toArray(),i.lastSegment(),Gs(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return so(e).G(IDBKeyRange.bound(o,a,!0)).next(e=>{null==s||s.incrementDocumentReadCount(e.length);let n=qn();for(const s of e){const e=this.rr(z.fromSegments(s.prefixPath.concat(s.collectionGroup,s.documentId)),s);e.isFoundDocument()&&(Fn(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let s=qn();const i=oo(t,n),o=oo(t,J.max());return so(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(i,o,!0)},(e,t,n)=>{const i=this.rr(z.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);s=s.insert(i.key,i),s.size===r&&n.done()}).next(()=>s)}newChangeBuffer(e){return new no(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return ro(e).get("remoteDocumentGlobalKey").next(e=>(v(!!e),e))}nr(e,t){return ro(e).put("remoteDocumentGlobalKey",t)}rr(e,t){if(t){const e=qs(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(U.min()))return e}return Ut.newInvalidDocument(e)}}function to(e){return new eo(e)}class no extends Zi{constructor(e,t){super(),this.ur=e,this.trackRemovals=t,this.cr=new Ln(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new et((e,t)=>M(e.canonicalString(),t.canonicalString()));return this.changes.forEach((s,i)=>{const o=this.cr.get(s);if(t.push(this.ur.removeEntry(e,s,o.readTime)),i.isValidDocument()){const a=Bs(this.ur.serializer,i);r=r.add(s.path.popLast());const u=Mi(a);n+=u-o.size,t.push(this.ur.addEntry(e,s,a))}else if(n-=o.size,this.trackRemovals){const n=Bs(this.ur.serializer,i.convertToNoDocument(U.min()));t.push(this.ur.addEntry(e,s,n))}}),r.forEach(n=>{t.push(this.ur.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.ur.updateMetadata(e,n)),re.waitFor(t)}getFromCache(e,t){return this.ur.ir(e,t).next(e=>(this.cr.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.ur._r(e,t).next(({documents:e,ar:t})=>(t.forEach((t,n)=>{this.cr.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function ro(e){return Qe(e,"remoteDocumentGlobal")}function so(e){return Qe(e,"remoteDocumentsV14")}function io(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function oo(e,t){const n=t.documentKey.path.toArray();return[e,Gs(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function ao(e,t){const n=e.path.toArray(),r=t.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=M(n[i],r[i]),s)return s;return s=M(n.length,r.length),s||(s=M(n[n.length-2],r[r.length-2]),s||M(n[n.length-1],r[r.length-1]))
/**
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
 */
/**
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
 */}class uo{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
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
 */class co{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&_r(n.mutation,e,rt.empty(),L.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Wn()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Wn()){const r=zn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=Gn();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=zn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Wn()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let s=qn();const i=$n(),o=function(){return $n()}();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Sr)?s=s.insert(t.key,t):void 0!==o?(i.set(t.key,o.mutation.getFieldMask()),_r(o.mutation,t,o.mutation.getFieldMask(),L.now())):i.set(t.key,rt.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new uo(t,null!==(n=i.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){const n=$n();let r=new Xe((e,t)=>e-t),s=Wn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const s of e)s.keys().forEach(e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||rt.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||Wn()).add(e);r=r.insert(s.batchId,a)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,c=jn();u.forEach(e=>{if(!s.has(e)){const r=vr(t.get(e),n.get(e));null!==r&&c.set(e,r),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,a,c))}return re.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return z.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sn(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):re.resolve(zn());let o=-1,a=s;return i.next(t=>re.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?re.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,a,t,Wn())).next(e=>({batchId:o,changes:Kn(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(e=>{let t=Gn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const s=t.collectionGroup;let i=Gn();return this.indexManager.getCollectionParents(e,s).next(o=>re.forEach(o,o=>{const a=function(e,t){return new vn(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(s));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r))).next(e=>{s.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Ut.newInvalidDocument(r)))});let n=Gn();return e.forEach((e,r)=>{const i=s.get(e);void 0!==i&&_r(i.mutation,r,rt.empty(),L.now()),Fn(t,r)&&(n=n.insert(e,r))}),n})}}
/**
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
 */class lo{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return re.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:cs(e.createTime)}}(t)),re.resolve()}getNamedQuery(e,t){return re.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,function(e){return{name:e.name,query:Hs(e.bundledQuery),readTime:cs(e.readTime)}}(t)),re.resolve()}}
/**
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
 */class ho{constructor(){this.overlays=new Xe(z.comparator),this.Pr=new Map}getOverlay(e,t){return re.resolve(this.overlays.get(t))}getOverlays(e,t){const n=zn();return re.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.It(e,t,r)}),re.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Pr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Pr.delete(n)),re.resolve()}getOverlaysForCollection(e,t,n){const r=zn(),s=t.length+1,i=new z(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return re.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new Xe((e,t)=>e-t);const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=zn(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=zn(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((e,t)=>o.set(e,t)),o.size()>=r)break;return re.resolve(o)}It(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Or(t,n));let s=this.Pr.get(t);void 0===s&&(s=Wn(),this.Pr.set(t,s)),this.Pr.set(t,s.add(n.key))}}
/**
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
 */class fo{constructor(){this.Ir=new et(mo.dr),this.Tr=new et(mo.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const n=new mo(e,t);this.Ir=this.Ir.add(n),this.Tr=this.Tr.add(n)}Ar(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Rr(new mo(e,t))}Vr(e,t){e.forEach(e=>this.removeReference(e,t))}mr(e){const t=new z(new B([])),n=new mo(t,e),r=new mo(t,e+1),s=[];return this.Tr.forEachInRange([n,r],e=>{this.Rr(e),s.push(e.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const t=new z(new B([])),n=new mo(t,e),r=new mo(t,e+1);let s=Wn();return this.Tr.forEachInRange([n,r],e=>{s=s.add(e.key)}),s}containsKey(e){const t=new mo(e,0),n=this.Ir.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class mo{constructor(e,t){this.key=e,this.yr=t}static dr(e,t){return z.comparator(e.key,t.key)||M(e.yr,t.yr)}static Er(e,t){return M(e.yr,t.yr)||z.comparator(e.key,t.key)}}
/**
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
 */class go{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new et(mo.dr)}checkEmpty(e){return re.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new kr(s,t,n,r);this.mutationQueue.push(i);for(const o of r)this.Sr=this.Sr.add(new mo(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return re.resolve(i)}lookupMutationBatch(e,t){return re.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Dr(n),s=r<0?0:r;return re.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return re.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return re.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new mo(t,0),r=new mo(t,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([n,r],e=>{const t=this.br(e.yr);s.push(t)}),re.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new et(M);return t.forEach(e=>{const t=new mo(e,0),r=new mo(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,r],e=>{n=n.add(e.yr)})}),re.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;z.isDocumentKey(s)||(s=s.child(""));const i=new mo(new z(s),0);let o=new et(M);return this.Sr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.yr)),!0)},i),re.resolve(this.Cr(o))}Cr(e){const t=[];return e.forEach(e=>{const n=this.br(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){v(0===this.vr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Sr;return re.forEach(t.mutations,r=>{const s=new mo(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Sr=n})}xn(e){}containsKey(e,t){const n=new mo(t,0),r=this.Sr.firstAfterOrEqual(n);return re.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,re.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
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
 */class po{constructor(e){this.Fr=e,this.docs=function(){return new Xe(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.Fr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return re.resolve(n?n.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let n=qn();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ut.newInvalidDocument(e))}),re.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=qn();const i=t.path,o=new z(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||Z(X(o),n)<=0||(r.has(o.key)||Fn(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return re.resolve(s)}getAllFromCollectionGroup(e,t,n,r){w()}Mr(e,t){return re.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new yo(this)}getSize(e){return re.resolve(this.size)}}class yo extends Zi{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ur.addEntry(e,r)):this.ur.removeEntry(n)}),re.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}
/**
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
 */class wo{constructor(e){this.persistence=e,this.Or=new Ln(e=>fn(e),mn),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Nr=0,this.Br=new fo,this.targetCount=0,this.Lr=Bi.Bn()}forEachTarget(e,t){return this.Or.forEach((e,n)=>t(n)),re.resolve()}getLastRemoteSnapshotVersion(e){return re.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return re.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),re.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Nr&&(this.Nr=t),re.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Bi(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,re.resolve()}updateTargetData(e,t){return this.Qn(t),re.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,re.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Or.forEach((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Or.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),re.waitFor(s).next(()=>r)}getTargetCount(e){return re.resolve(this.targetCount)}getTargetData(e,t){const n=this.Or.get(t)||null;return re.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Ar(t,n),re.resolve()}removeMatchingKeys(e,t,n){this.Br.Vr(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(t=>{s.push(r.markPotentiallyOrphaned(e,t))}),re.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),re.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.pr(t);return re.resolve(n)}containsKey(e,t){return re.resolve(this.Br.containsKey(t))}}
/**
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
 */class vo{constructor(e,t){this.kr={},this.overlays={},this.qr=new ge(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new wo(this),this.indexManager=new Ei,this.remoteDocumentCache=function(e){return new po(e)}(e=>this.referenceDelegate.$r(e)),this.serializer=new Us(t),this.Ur=new lo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ho,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.kr[e.toKey()];return n||(n=new go(t,this.referenceDelegate),this.kr[e.toKey()]=n),n}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,n){m("MemoryPersistence","Starting transaction:",e);const r=new Io(this.qr.next());return this.referenceDelegate.Wr(),n(r).next(e=>this.referenceDelegate.Gr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}zr(e,t){return re.or(Object.values(this.kr).map(n=>()=>n.containsKey(e,t)))}}class Io extends te{constructor(e){super(),this.currentSequenceNumber=e}}class _o{constructor(e){this.persistence=e,this.jr=new fo,this.Hr=null}static Jr(e){return new _o(e)}get Yr(){if(this.Hr)return this.Hr;throw w()}addReference(e,t,n){return this.jr.addReference(n,t),this.Yr.delete(n.toString()),re.resolve()}removeReference(e,t,n){return this.jr.removeReference(n,t),this.Yr.add(n.toString()),re.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),re.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach(e=>this.Yr.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Yr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Wr(){this.Hr=new Set}Gr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return re.forEach(this.Yr,n=>{const r=z.fromPath(n);return this.Zr(e,r).next(e=>{e||t.removeEntry(r,U.min())})}).next(()=>(this.Hr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zr(e,t).next(e=>{e?this.Yr.delete(t.toString()):this.Yr.add(t.toString())})}$r(e){return 0}Zr(e,t){return re.or([()=>re.resolve(this.jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zr(e,t)])}}
/**
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
 */class bo{constructor(e){this.serializer=e}B(e,t,n,r){const s=new se("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ee,{unique:!0}),e.createObjectStore("documentMutations")}(e),Eo(e),function(e){e.createObjectStore("remoteDocuments")}(e));let i=re.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Eo(e)),i=i.next(()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(s))),n<4&&r>=4&&(0!==n&&(i=i.next(()=>function(e,t){return t.store("mutations").G().next(n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ee,{unique:!0});const r=t.store("mutations"),s=n.map(e=>r.put(e));return re.waitFor(s)})}(e,s))),i=i.next(()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(i=i.next(()=>this.ei(s))),n<6&&r>=6&&(i=i.next(()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.ti(s)))),n<7&&r>=7&&(i=i.next(()=>this.ni(s))),n<8&&r>=8&&(i=i.next(()=>this.ri(e,s))),n<9&&r>=9&&(i=i.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&r>=10&&(i=i.next(()=>this.ii(s))),n<11&&r>=11&&(i=i.next(()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&r>=12&&(i=i.next(()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Le});t.createIndex("collectionPathOverlayIndex",Ue,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",qe,{unique:!1})}(e)})),n<13&&r>=13&&(i=i.next(()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Ce});t.createIndex("documentKeyIndex",De),t.createIndex("collectionGroupIndex",Ae)}(e)).next(()=>this.si(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&r>=14&&(i=i.next(()=>this.oi(e,s))),n<15&&r>=15&&(i=i.next(()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Fe}).createIndex("sequenceNumberIndex",Me,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Ve}).createIndex("documentKeyIndex",Pe,{unique:!1})}(e))),i}ti(e){let t=0;return e.store("remoteDocuments").Z((e,n)=>{t+=Mi(n)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ei(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.G().next(t=>re.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.G("userMutationsIndex",r).next(n=>re.forEach(n,n=>{v(n.userId===t.userId);const r=js(this.serializer,n);return Fi(e,t.userId,r).next(()=>{})}))}))}ni(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(e=>{const r=[];return n.Z((n,s)=>{const i=new B(n),o=function(e){return[0,ve(e)]}(i);r.push(t.get(o).next(n=>n?re.resolve():(n=>t.put({targetId:0,path:ve(n),sequenceNumber:e.highestListenSequenceNumber}))(i)))}).next(()=>re.waitFor(r))})}ri(e,t){e.createObjectStore("collectionParents",{keyPath:Oe});const n=t.store("collectionParents"),r=new Ti,s=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:ve(r)})}};return t.store("remoteDocuments").Z({Y:!0},(e,t)=>{const n=new B(e);return s(n.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([e,t,n],r)=>{const i=be(t);return s(i.popLast())}))}ii(e){const t=e.store("targets");return t.Z((e,n)=>{const r=$s(n),s=Qs(this.serializer,r);return t.put(s)})}si(e,t){const n=t.store("remoteDocuments"),r=[];return n.Z((e,n)=>{const s=t.store("remoteDocumentsV14"),i=function(e){return e.document?new z(B.fromString(e.document.name).popFirst(5)):e.noDocument?z.fromSegments(e.noDocument.path):e.unknownDocument?z.fromSegments(e.unknownDocument.path):w()}
/**
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
 */(n).path.toArray(),o={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(s.put(o))}).next(()=>re.waitFor(r))}oi(e,t){const n=t.store("mutations"),r=to(this.serializer),s=new vo(_o.Jr,this.serializer.ht);return n.G().next(e=>{const n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Wn();js(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),re.forEach(n,(e,n)=>{const i=new c(n),o=ti.Pt(this.serializer,i),a=s.getIndexManager(i),u=Vi.Pt(i,this.serializer,a,s.referenceDelegate);return new co(r,u,o,a).recalculateAndSaveOverlaysForDocumentKeys(new $e(t,ge.ae),e).next()})})}}function Eo(e){e.createObjectStore("targetDocuments",{keyPath:ke}).createIndex("documentTargetsIndex",Re,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Ne,{unique:!0}),e.createObjectStore("targetGlobal")}const To="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class So{constructor(e,t,n,r,s,i,o,a,u,c,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this._i=s,this.window=i,this.document=o,this.ai=u,this.ui=c,this.ci=l,this.qr=null,this.Qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.li=null,this.inForeground=!1,this.hi=null,this.Pi=null,this.Ii=Number.NEGATIVE_INFINITY,this.di=e=>Promise.resolve(),!So.C())throw new E(b.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Xi(this,r),this.Ti=t+"main",this.serializer=new Us(a),this.Ei=new ie(this.Ti,this.ci,new bo(this.serializer)),this.Kr=new Gi(this.referenceDelegate,this.serializer),this.remoteDocumentCache=to(this.serializer),this.Ur=new Js,this.window&&this.window.localStorage?this.Ai=this.window.localStorage:(this.Ai=null,!1===c&&g("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ri().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(b.FAILED_PRECONDITION,To);return this.Vi(),this.mi(),this.fi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Kr.getHighestSequenceNumber(e))}).then(e=>{this.qr=new ge(e,this.ai)}).then(()=>{this.Qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}gi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.k(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this._i.enqueueAndForget(async()=>{this.started&&await this.Ri()}))}Ri(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Co(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.pi(e).next(e=>{e||(this.isPrimary=!1,this._i.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.yi(e)).next(t=>this.isPrimary&&!t?this.wi(e).next(()=>!1):!!t&&this.Si(e).next(()=>!0))).catch(e=>{if(ue(e))return m("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return m("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this._i.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}pi(e){return xo(e).get("owner").next(e=>re.resolve(this.bi(e)))}Di(e){return Co(e).delete(this.clientId)}async Ci(){if(this.isPrimary&&!this.vi(this.Ii,18e5)){this.Ii=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=Qe(e,"clientMetadata");return t.G().next(e=>{const n=this.Fi(e,18e5),r=e.filter(e=>-1===n.indexOf(e));return re.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ai)for(const t of e)this.Ai.removeItem(this.Mi(t.clientId))}}fi(){this.Pi=this._i.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ri().then(()=>this.Ci()).then(()=>this.fi()))}bi(e){return!!e&&e.ownerId===this.clientId}yi(e){return this.ui?re.resolve(!0):xo(e).get("owner").next(t=>{if(null!==t&&this.vi(t.leaseTimestampMs,5e3)&&!this.xi(t.ownerId)){if(this.bi(t)&&this.networkEnabled)return!0;if(!this.bi(t)){if(!t.allowTabSynchronization)throw new E(b.FAILED_PRECONDITION,To);return!1}}return!(!this.networkEnabled||!this.inForeground)||Co(e).G().next(e=>void 0===this.Fi(e,5e3).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&m("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Qr=!1,this.Oi(),this.Pi&&(this.Pi.cancel(),this.Pi=null),this.Ni(),this.Bi(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new $e(e,ge.ae);return this.wi(t).next(()=>this.Di(t))}),this.Ei.close(),this.Li()}Fi(e,t){return e.filter(e=>this.vi(e.updateTimeMs,t)&&!this.xi(e.clientId))}ki(){return this.runTransaction("getActiveClients","readonly",e=>Co(e).G().next(e=>this.Fi(e,18e5).map(e=>e.clientId)))}get started(){return this.Qr}getMutationQueue(e,t){return Vi.Pt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new xi(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return ti.Pt(this.serializer,e)}getBundleCache(){return this.Ur}runTransaction(e,t,n){m("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",s=function(e){return 15===e?je:14===e?ze:13===e?Ke:12===e?Ge:11===e?Be:void w()}(this.ci);let i;return this.Ei.runTransaction(e,r,s,r=>(i=new $e(r,this.qr?this.qr.next():ge.ae),"readwrite-primary"===t?this.pi(i).next(e=>!!e||this.yi(i)).next(t=>{if(!t)throw g(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this._i.enqueueRetryable(()=>this.di(!1)),new E(b.FAILED_PRECONDITION,ee);return n(i)}).next(e=>this.Si(i).next(()=>e)):this.qi(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}qi(e){return xo(e).get("owner").next(e=>{if(null!==e&&this.vi(e.leaseTimestampMs,5e3)&&!this.xi(e.ownerId)&&!this.bi(e)&&!(this.ui||this.allowTabSynchronization&&e.allowTabSynchronization))throw new E(b.FAILED_PRECONDITION,To)})}Si(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return xo(e).put("owner",t)}static C(){return ie.C()}wi(e){const t=xo(e);return t.get("owner").next(e=>this.bi(e)?(m("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):re.resolve())}vi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(g(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Vi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.hi=()=>{this._i.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ri()))},this.document.addEventListener("visibilitychange",this.hi),this.inForeground="visible"===this.document.visibilityState)}Ni(){this.hi&&(this.document.removeEventListener("visibilitychange",this.hi),this.hi=null)}mi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.li=()=>{this.Oi();const e=/(?:Version|Mobile)\/1[456]/;Object(o["z"])()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this._i.enterRestrictedMode(!0),this._i.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.li))}Bi(){this.li&&(this.window.removeEventListener("pagehide",this.li),this.li=null)}xi(e){var t;try{const n=null!==(null===(t=this.Ai)||void 0===t?void 0:t.getItem(this.Mi(e)));return m("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return g("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Oi(){if(this.Ai)try{this.Ai.setItem(this.Mi(this.clientId),String(Date.now()))}catch(e){g("Failed to set zombie client id.",e)}}Li(){if(this.Ai)try{this.Ai.removeItem(this.Mi(this.clientId))}catch(e){}}Mi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function xo(e){return Qe(e,"owner")}function Co(e){return Qe(e,"clientMetadata")}function Do(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
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
 */}class Ao{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Qi=n,this.Ki=r}static $i(e,t){let n=Wn(),r=Wn();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Ao(e,t.fromCache,n,r)}}
/**
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
 */class No{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
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
 */class ko{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}getDocumentsMatchingQuery(e,t,n,r){const s={result:null};return this.Hi(e,t).next(e=>{s.result=e}).next(()=>{if(!s.result)return this.Ji(e,t,r,n).next(e=>{s.result=e})}).next(()=>{if(s.result)return;const n=new No;return this.Yi(e,t,n).next(r=>{if(s.result=r,this.Wi)return this.Zi(e,t,n,r.size)})}).next(()=>s.result)}Zi(e,t,n,r){return n.documentReadCount<this.Gi?(d()<=i["a"].DEBUG&&m("QueryEngine","SDK will not create cache indexes for query:",On(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),re.resolve()):(d()<=i["a"].DEBUG&&m("QueryEngine","Query:",On(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.zi*r?(d()<=i["a"].DEBUG&&m("QueryEngine","The SDK decides to create cache indexes for query:",On(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cn(t))):re.resolve())}Hi(e,t){if(bn(t))return re.resolve(null);let n=Cn(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=Nn(t,null,"F"),n=Cn(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const s=Wn(...r);return this.ji.getDocuments(e,s).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const i=this.Xi(t,r);return this.es(t,i,s,n.readTime)?this.Hi(e,Nn(t,null,"F")):this.ts(e,i,t,n)}))})))}Ji(e,t,n,r){return bn(t)||r.isEqual(U.min())?re.resolve(null):this.ji.getDocuments(e,n).next(s=>{const o=this.Xi(t,s);return this.es(t,o,n,r)?re.resolve(null):(d()<=i["a"].DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),On(t)),this.ts(e,o,t,Y(r,-1)).next(e=>e))})}Xi(e,t){let n=new et(Vn(e));return t.forEach((t,r)=>{Fn(e,r)&&(n=n.add(r))}),n}es(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Yi(e,t,n){return d()<=i["a"].DEBUG&&m("QueryEngine","Using full collection scan to execute query:",On(t)),this.ji.getDocumentsMatchingQuery(e,t,J.min(),n)}ts(e,t,n,r){return this.ji.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
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
 */class Ro{constructor(e,t,n,r){this.persistence=e,this.ns=t,this.serializer=r,this.rs=new Xe(M),this.ss=new Ln(e=>fn(e),mn),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(n)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new co(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.rs))}}function Oo(e,t,n,r){return new Ro(e,t,n,r)}async function Fo(e,t){const n=_(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(s=>(r=s,n.us(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const s=[],i=[];let o=Wn();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({cs:e,removedBatchIds:s,addedBatchIds:i}))})})}function Mo(e,t){const n=_(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=re.resolve();return i.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const i=n.docVersions.get(e);v(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,s))}(n,e,t,s).next(()=>s.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Wn();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}function Vo(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Kr.getLastRemoteSnapshotVersion(e))}function Po(e,t){const n=_(e),r=t.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const i=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const o=[];t.targetChanges.forEach((i,a)=>{const u=s.get(a);if(!u)return;o.push(n.Kr.removeMatchingKeys(e,i.removedDocuments,a).next(()=>n.Kr.addMatchingKeys(e,i.addedDocuments,a)));let c=u.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(ot.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,r)),s=s.insert(a,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,c,i)&&o.push(n.Kr.updateTargetData(e,c))});let a=qn(),u=Wn();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Lo(e,i,t.documentUpdates).next(e=>{a=e.ls,u=e.hs})),!r.isEqual(U.min())){const t=n.Kr.getLastRemoteSnapshotVersion(e).next(t=>n.Kr.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return re.waitFor(o).next(()=>i.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,u)).next(()=>a)}).then(e=>(n.rs=s,e))}function Lo(e,t,n){let r=Wn(),s=Wn();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=qn();return n.forEach((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(U.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):m("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{ls:r,hs:s}})}function Uo(e,t){const n=_(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function qo(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Kr.getTargetData(e,t).next(s=>s?(r=s,re.resolve(r)):n.Kr.allocateTargetId(e).next(s=>(r=new Ls(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.Kr.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.rs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.rs=n.rs.insert(e.targetId,e),n.ss.set(t,e.targetId)),e})}async function Bo(e,t,n){const r=_(e),s=r.rs.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,e=>r.persistence.referenceDelegate.removeTarget(e,s))}catch(e){if(!ue(e))throw e;m("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.rs=r.rs.remove(t),r.ss.delete(s.target)}function Go(e,t,n){const r=_(e);let s=U.min(),i=Wn();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=_(e),s=r.ss.get(n);return void 0!==s?re.resolve(r.rs.get(s)):r.Kr.getTargetData(t,n)}(r,e,Cn(t)).next(t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(e,t.targetId).next(e=>{i=e})}).next(()=>r.ns.getDocumentsMatchingQuery(e,t,n?s:U.min(),n?i:Wn())).next(e=>(jo(r,Mn(t),e),{documents:e,Ps:i})))}function Ko(e,t){const n=_(e),r=_(n.Kr),s=n.rs.get(t);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",e=>r.lt(e,t).next(e=>e?e.target:null))}function zo(e,t){const n=_(e),r=n.os.get(t)||U.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n._s.getAllFromCollectionGroup(e,t,Y(r,-1),Number.MAX_SAFE_INTEGER)).then(e=>(jo(n,t,e),e))}function jo(e,t,n){let r=e.os.get(t)||U.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.os.set(t,r)}async function $o(e,t,n,r){const s=_(e);let i=Wn(),o=qn();for(const c of n){const e=t.Is(c.metadata.name);c.document&&(i=i.add(e));const n=t.ds(c);n.setReadTime(t.Ts(c.metadata.readTime)),o=o.insert(e,n)}const a=s._s.newChangeBuffer({trackRemovals:!0}),u=await qo(s,function(e){return Cn(_n(B.fromString("__bundle__/docs/"+e)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",e=>Lo(e,a,o).next(t=>(a.apply(e),t)).next(t=>s.Kr.removeMatchingKeysForTargetId(e,u.targetId).next(()=>s.Kr.addMatchingKeys(e,i,u.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(e,t.ls,t.hs)).next(()=>t.ls)))}async function Qo(e,t,n=Wn()){const r=await qo(e,Cn(Hs(t.bundledQuery))),s=_(e);return s.persistence.runTransaction("Save named query","readwrite",e=>{const i=cs(t.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.Ur.saveNamedQuery(e,t);const o=r.withResumeToken(ot.EMPTY_BYTE_STRING,i);return s.rs=s.rs.insert(o.targetId,o),s.Kr.updateTargetData(e,o).next(()=>s.Kr.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>s.Kr.addMatchingKeys(e,n,r.targetId)).next(()=>s.Ur.saveNamedQuery(e,t))})}function Ho(e,t){return`firestore_clients_${e}_${t}`}function Wo(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+="_"+t.uid),r}function Yo(e,t){return`firestore_targets_${e}_${t}`}class Xo{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Es(e,t,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new E(r.error.code,r.error.message))),i?new Xo(e,t,r.state,s):(g("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}As(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Jo{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Es(e,t){const n=JSON.parse(t);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new E(n.error.code,n.error.message))),s?new Jo(e,n.state,r):(g("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}As(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Zo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Es(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=Xn();for(let i=0;r&&i<n.activeTargetIds.length;++i)r=we(n.activeTargetIds[i]),s=s.add(n.activeTargetIds[i]);return r?new Zo(e,s):(g("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class ea{constructor(e,t){this.clientId=e,this.onlineState=t}static Es(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new ea(t.clientId,t.onlineState):(g("SharedClientState","Failed to parse online state: "+e),null)}}class ta{constructor(){this.activeTargetIds=Xn()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class na{constructor(e,t,n,r,s){this.window=e,this._i=t,this.persistenceKey=n,this.fs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.gs=this.ps.bind(this),this.ys=new Xe(M),this.started=!1,this.ws=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ss=Ho(this.persistenceKey,this.fs),this.bs=function(e){return"firestore_sequence_number_"+e}
/**
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
 */(this.persistenceKey),this.ys=this.ys.insert(this.fs,new ta),this.Ds=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this.Cs=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.vs=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.Fs=function(e){return"firestore_online_state_"+e}(this.persistenceKey),this.Ms=function(e){return"firestore_bundle_loaded_v2_"+e}(this.persistenceKey),this.window.addEventListener("storage",this.gs)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.ki();for(const n of e){if(n===this.fs)continue;const e=this.getItem(Ho(this.persistenceKey,n));if(e){const t=Zo.Es(n,e);t&&(this.ys=this.ys.insert(t.clientId,t))}}this.xs();const t=this.storage.getItem(this.Fs);if(t){const e=this.Os(t);e&&this.Ns(e)}for(const n of this.ws)this.ps(n);this.ws=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Bs(this.ys)}isActiveQueryTarget(e){let t=!1;return this.ys.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,t,n){this.Ls(e,t,n),this.ks(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Yo(this.persistenceKey,e));if(n){const r=Jo.Es(e,n);r&&(t=r.state)}}return this.qs.Rs(e),this.xs(),t}removeLocalQueryTarget(e){this.qs.Vs(e),this.xs()}isLocalQueryTarget(e){return this.qs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Yo(this.persistenceKey,e))}updateQueryState(e,t,n){this.Qs(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.ks(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Ks(e)}notifyBundleLoaded(e){this.$s(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.gs),this.removeItem(this.Ss),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return m("SharedClientState","READ",e,t),t}setItem(e,t){m("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){m("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ps(e){const t=e;if(t.storageArea===this.storage){if(m("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ss)return void g("Received WebStorage notification for local change. Another client might have garbage-collected our state");this._i.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.Ds.test(t.key)){if(null==t.newValue){const e=this.Us(t.key);return this.Ws(e,null)}{const e=this.Gs(t.key,t.newValue);if(e)return this.Ws(e.clientId,e)}}else if(this.Cs.test(t.key)){if(null!==t.newValue){const e=this.zs(t.key,t.newValue);if(e)return this.js(e)}}else if(this.vs.test(t.key)){if(null!==t.newValue){const e=this.Hs(t.key,t.newValue);if(e)return this.Js(e)}}else if(t.key===this.Fs){if(null!==t.newValue){const e=this.Os(t.newValue);if(e)return this.Ns(e)}}else if(t.key===this.bs){const e=function(e){let t=ge.ae;if(null!=e)try{const n=JSON.parse(e);v("number"==typeof n),t=n}catch(e){g("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==ge.ae&&this.sequenceNumberHandler(e)}else if(t.key===this.Ms){const e=this.Ys(t.newValue);await Promise.all(e.map(e=>this.syncEngine.Zs(e)))}}else this.ws.push(t)})}}get qs(){return this.ys.get(this.fs)}xs(){this.setItem(this.Ss,this.qs.As())}Ls(e,t,n){const r=new Xo(this.currentUser,e,t,n),s=Wo(this.persistenceKey,this.currentUser,e);this.setItem(s,r.As())}ks(e){const t=Wo(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ks(e){const t={clientId:this.fs,onlineState:e};this.storage.setItem(this.Fs,JSON.stringify(t))}Qs(e,t,n){const r=Yo(this.persistenceKey,e),s=new Jo(e,t,n);this.setItem(r,s.As())}$s(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Ms,t)}Us(e){const t=this.Ds.exec(e);return t?t[1]:null}Gs(e,t){const n=this.Us(e);return Zo.Es(n,t)}zs(e,t){const n=this.Cs.exec(e),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return Xo.Es(new c(s),r,t)}Hs(e,t){const n=this.vs.exec(e),r=Number(n[1]);return Jo.Es(r,t)}Os(e){return ea.Es(e)}Ys(e){return JSON.parse(e)}async js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Xs(e.batchId,e.state,e.error);m("SharedClientState","Ignoring mutation for non-active user "+e.user.uid)}Js(e){return this.syncEngine.eo(e.targetId,e.state,e.error)}Ws(e,t){const n=t?this.ys.insert(e,t):this.ys.remove(e),r=this.Bs(this.ys),s=this.Bs(n),i=[],o=[];return s.forEach(e=>{r.has(e)||i.push(e)}),r.forEach(e=>{s.has(e)||o.push(e)}),this.syncEngine.no(i,o).then(()=>{this.ys=n})}Ns(e){this.ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Bs(e){let t=Xn();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class ra{constructor(){this.ro=new ta,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,n){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new ta,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class sa{so(e){}shutdown(){}}
/**
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
 */class ia{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let oa=null;function aa(){return null===oa?oa=function(){return 268435456+Math.round(2147483648*Math.random())}():oa++,"0x"+oa.toString(16)
/**
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
 */}const ua={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class ca{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}
/**
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
 */const la="WebChannelConnection";class ha extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${r}`,this.wo="(default)"===this.databaseId.database?"project_id="+n:`project_id=${n}&database_id=${r}`}get So(){return!1}bo(e,t,n,r,s){const i=aa(),o=this.Do(e,t);m("RestConnection",`Sending RPC '${e}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(a,r,s),this.vo(e,o,a,n).then(t=>(m("RestConnection",`Received RPC '${e}' ${i}: `,t),t),t=>{throw p("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",o,"request:",n),t})}Fo(e,t,n,r,s,i){return this.bo(e,t,n,r,s)}Co(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+l}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Do(e,t){const n=ua[e];return`${this.po}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,r){const s=aa();return new Promise((i,o)=>{const u=new a["h"];u.setWithCredentials(!0),u.listenOnce(a["c"].COMPLETE,()=>{try{switch(u.getLastErrorCode()){case a["a"].NO_ERROR:const t=u.getResponseJson();m(la,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case a["a"].TIMEOUT:m(la,`RPC '${e}' ${s} timed out`),o(new E(b.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=u.getStatus();if(m(la,`RPC '${e}' ${s} failed with status:`,n,"response text:",u.getResponseText()),n>0){let e=u.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(t)>=0?t:b.UNKNOWN}(t.status);o(new E(e,t.message))}else o(new E(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else o(new E(b.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{m(la,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);m(la,`RPC '${e}' ${s} sending request:`,r),u.send(t,"POST",c,n,15)})}Mo(e,t,n){const r=aa(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a["i"])(),o=Object(a["j"])(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Co(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const l=s.join("");m(la,`Creating RPC '${e}' stream ${r}: ${l}`,u);const h=i.createWebChannel(l,u);let d=!1,f=!1;const g=new ca({ho:t=>{f?m(la,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(m(la,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),m(la,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},Po:()=>h.close()}),y=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return y(h,a["g"].EventType.OPEN,()=>{f||m(la,`RPC '${e}' stream ${r} transport opened.`)}),y(h,a["g"].EventType.CLOSE,()=>{f||(f=!0,m(la,`RPC '${e}' stream ${r} transport closed`),g.mo())}),y(h,a["g"].EventType.ERROR,t=>{f||(f=!0,p(la,`RPC '${e}' stream ${r} transport errored:`,t),g.mo(new E(b.UNAVAILABLE,"The operation could not be completed")))}),y(h,a["g"].EventType.MESSAGE,t=>{var n;if(!f){const s=t.data[0];v(!!s);const i=s,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){m(la,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Mr[e];if(void 0!==t)return Lr(t)}(t),s=o.message;void 0===n&&(n=b.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),f=!0,g.mo(new E(n,s)),h.close()}else m(la,`RPC '${e}' stream ${r} received:`,s),g.fo(s)}}),y(o,a["b"].STAT_EVENT,t=>{t.stat===a["f"].PROXY?m(la,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===a["f"].NOPROXY&&m(la,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.Vo()},0),g}}
/**
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
 */
/**
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
 */function da(){return"undefined"!=typeof window?window:null}function fa(){return"undefined"!=typeof document?document:null}
/**
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
 */function ma(e){return new ss(e,!0)}
/**
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
 */class ga{constructor(e,t,n=1e3,r=1.5,s=6e4){this._i=e,this.timerId=t,this.xo=n,this.Oo=r,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const t=Math.floor(this.Bo+this.Ko()),n=Math.max(0,Date.now()-this.ko),r=Math.max(0,t-n);r>0&&m("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,r,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}
/**
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
 */class pa{constructor(e,t,n,r,s,i,o,a){this._i=e,this.Uo=n,this.Wo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new ga(e,t)}Jo(){return 1===this.state||5===this.state||this.Yo()}Yo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,t){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,4!==e?this.Ho.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(g(t.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===b.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),t=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Go===t&&this.__(e,n)},t=>{e(()=>{const e=new E(b.UNKNOWN,"Fetching auth token failed: "+t.message);return this.a_(e)})})}__(e,t){const n=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io(()=>{n(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(e=>{n(()=>this.a_(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return m("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}o_(e){return t=>{this._i.enqueueAndForget(()=>this.Go===e?t():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ya extends pa{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){this.Ho.reset();const t=_s(this.serializer,e),n=function(e){if(!("targetChange"in e))return U.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?U.min():t.readTime?cs(t.readTime):U.min()}(e);return this.listener.c_(t,n)}l_(e){const t={};t.database=ps(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=gn(r)?{documents:Ss(e,r)}:{query:xs(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=as(e,t.resumeToken);const r=is(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(U.min())>0){n.readTime=os(e,t.snapshotVersion.toTimestamp());const r=is(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=Ds(this.serializer,e);n&&(t.labels=n),this.n_(t)}h_(e){const t={};t.database=ps(this.serializer),t.removeTarget=e,this.n_(t)}}class wa extends pa{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,t){return this.connection.Mo("Write",e,t)}onMessage(e){if(v(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const t=Ts(e.writeResults,e.commitTime),n=cs(e.commitTime);return this.listener.T_(n,t)}return v(!e.writeResults||0===e.writeResults.length),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=ps(this.serializer),this.n_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>bs(this.serializer,e))};this.n_(t)}}
/**
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
 */class va extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.R_=!1}V_(){if(this.R_)throw new E(b.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.bo(e,t,n,r,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(b.UNKNOWN,e.toString())})}Fo(e,t,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Fo(e,t,n,s,i,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(b.UNKNOWN,e.toString())})}terminate(){this.R_=!0}}class Ia{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){0===this.f_&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){"Online"===this.state?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_("Connection failed 1 times. Most recent error: "+e.toString()),this.w_("Offline")))}set(e){this.D_(),this.f_=0,"Online"===e&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(g(t),this.p_=!1):m("OnlineStateTracker",t)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}
/**
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
 */class _a{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(e=>{n.enqueueAndForget(async()=>{Na(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=_(e);t.F_.add(4),await Ea(t),t.O_.set("Unknown"),t.F_.delete(4),await ba(t)}(this))})}),this.O_=new Ia(n,r)}}async function ba(e){if(Na(e))for(const t of e.M_)await t(!0)}async function Ea(e){for(const t of e.M_)await t(!1)}function Ta(e,t){const n=_(e);n.v_.has(t.targetId)||(n.v_.set(t.targetId,t),Aa(n)?Da(n):Ha(n).Yo()&&xa(n,t))}function Sa(e,t){const n=_(e),r=Ha(n);n.v_.delete(t),r.Yo()&&Ca(n,t),0===n.v_.size&&(r.Yo()?r.e_():Na(n)&&n.O_.set("Unknown"))}function xa(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ha(e).l_(t)}function Ca(e,t){e.N_.Le(t),Ha(e).h_(t)}function Da(e){e.N_=new Jr({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.v_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),Ha(e).start(),e.O_.y_()}function Aa(e){return Na(e)&&!Ha(e).Jo()&&e.v_.size>0}function Na(e){return 0===_(e).F_.size}function ka(e){e.N_=void 0}async function Ra(e){e.v_.forEach((t,n)=>{xa(e,t)})}async function Oa(e,t){ka(e),Aa(e)?(e.O_.b_(t),Da(e)):e.O_.set("Unknown")}async function Fa(e,t,n){if(e.O_.set("Online"),t instanceof Yr&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.v_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.v_.delete(r),e.N_.removeTarget(r))}(e,t)}catch(n){m("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ma(e,n)}else if(t instanceof Hr?e.N_.Ge(t):t instanceof Wr?e.N_.Xe(t):e.N_.He(t),!n.isEqual(U.min()))try{const t=await Vo(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.N_._t(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.v_.get(r);s&&e.v_.set(r,s.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.v_.get(t);if(!r)return;e.v_.set(t,r.withResumeToken(ot.EMPTY_BYTE_STRING,r.snapshotVersion)),Ca(e,t);const s=new Ls(r.target,t,n,r.sequenceNumber);xa(e,s)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){m("RemoteStore","Failed to raise snapshot:",t),await Ma(e,t)}}async function Ma(e,t,n){if(!ue(t))throw t;e.F_.add(1),await Ea(e),e.O_.set("Offline"),n||(n=()=>Vo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),e.F_.delete(1),await ba(e)})}function Va(e,t){return t().catch(n=>Ma(e,n,t))}async function Pa(e){const t=_(e),n=Wa(t);let r=t.C_.length>0?t.C_[t.C_.length-1].batchId:-1;for(;La(t);)try{const e=await Uo(t.localStore,r);if(null===e){0===t.C_.length&&n.e_();break}r=e.batchId,Ua(t,e)}catch(e){await Ma(t,e)}qa(t)&&Ba(t)}function La(e){return Na(e)&&e.C_.length<10}function Ua(e,t){e.C_.push(t);const n=Wa(e);n.Yo()&&n.I_&&n.d_(t.mutations)}function qa(e){return Na(e)&&!Wa(e).Jo()&&e.C_.length>0}function Ba(e){Wa(e).start()}async function Ga(e){Wa(e).A_()}async function Ka(e){const t=Wa(e);for(const n of e.C_)t.d_(n.mutations)}async function za(e,t,n){const r=e.C_.shift(),s=Rr.from(r,t,n);await Va(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Pa(e)}async function ja(e,t){t&&Wa(e).I_&&await async function(e,t){if(function(e){return Pr(e)&&e!==b.ABORTED}(t.code)){const n=e.C_.shift();Wa(e).Xo(),await Va(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Pa(e)}}(e,t),qa(e)&&Ba(e)}async function $a(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const r=Na(n);n.F_.add(3),await Ea(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.F_.delete(3),await ba(n)}async function Qa(e,t){const n=_(e);t?(n.F_.delete(2),await ba(n)):t||(n.F_.add(2),await Ea(n),n.O_.set("Unknown"))}function Ha(e){return e.B_||(e.B_=function(e,t,n){const r=_(e);return r.V_(),new ya(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
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
 */}(e.datastore,e.asyncQueue,{Io:Ra.bind(null,e),Eo:Oa.bind(null,e),c_:Fa.bind(null,e)}),e.M_.push(async t=>{t?(e.B_.Xo(),Aa(e)?Da(e):e.O_.set("Unknown")):(await e.B_.stop(),ka(e))})),e.B_}function Wa(e){return e.L_||(e.L_=function(e,t,n){const r=_(e);return r.V_(),new wa(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Io:Ga.bind(null,e),Eo:ja.bind(null,e),E_:Ka.bind(null,e),T_:za.bind(null,e)}),e.M_.push(async t=>{t?(e.L_.Xo(),await Pa(e)):(await e.L_.stop(),e.C_.length>0&&(m("RemoteStore",`Stopping write stream with ${e.C_.length} pending writes`),e.C_=[]))})),e.L_
/**
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
 */}class Ya{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new Ya(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xa(e,t){if(g("AsyncQueue",`${t}: ${e}`),ue(e))return new E(b.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class Ja{constructor(e){this.comparator=e?(t,n)=>e(t,n)||z.comparator(t.key,n.key):(e,t)=>z.comparator(e.key,t.key),this.keyedMap=Gn(),this.sortedSet=new Xe(this.comparator)}static emptySet(e){return new Ja(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ja))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Ja;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class Za{constructor(){this.k_=new Xe(z.comparator)}track(e){const t=e.doc.key,n=this.k_.get(t);n?0!==e.type&&3===n.type?this.k_=this.k_.insert(t,e):3===e.type&&1!==n.type?this.k_=this.k_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.k_=this.k_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.k_=this.k_.remove(t):1===e.type&&2===n.type?this.k_=this.k_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):w():this.k_=this.k_.insert(t,e)}q_(){const e=[];return this.k_.inorderTraversal((t,n)=>{e.push(n)}),e}}class eu{constructor(e,t,n,r,s,i,o,a,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,s){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new eu(e,t,Ja.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class tu{constructor(){this.Q_=void 0,this.listeners=[]}}class nu{constructor(){this.queries=new Ln(e=>Rn(e),kn),this.onlineState="Unknown",this.K_=new Set}}async function ru(e,t){const n=_(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new tu),s)try{i.Q_=await n.onListen(r)}catch(e){const n=Xa(e,`Initialization of query '${On(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.U_(n.onlineState),i.Q_&&t.W_(i.Q_)&&au(n)}async function su(e,t){const n=_(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function iu(e,t){const n=_(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.W_(s)&&(r=!0);t.Q_=s}}r&&au(n)}function ou(e,t,n){const r=_(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function au(e){e.K_.forEach(e=>{e.next()})}class uu{constructor(e,t,n){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new eu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Z_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;const t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=eu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}
/**
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
 */class cu{constructor(e,t){this.X_=e,this.byteLength=t}ea(){return"metadata"in this.X_}}
/**
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
 */class lu{constructor(e){this.serializer=e}Is(e){return fs(this.serializer,e)}ds(e){return e.metadata.exists?vs(this.serializer,e.document,!1):Ut.newNoDocument(this.Is(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return cs(e)}}class hu{constructor(e,t,n){this.ta=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=du(e)}na(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.X_.namedQuery)this.queries.push(e.X_.namedQuery);else if(e.X_.documentMetadata){this.documents.push({metadata:e.X_.documentMetadata}),e.X_.documentMetadata.exists||++t;const n=B.fromString(e.X_.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.X_.document&&(this.documents[this.documents.length-1].document=e.X_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ra(e){const t=new Map,n=new lu(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.Is(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Wn()).add(e);t.set(n,r)}}return t}async complete(){const e=await $o(this.localStore,new lu(this.serializer),this.documents,this.ta.id),t=this.ra(this.documents);for(const n of this.queries)await Qo(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,ia:this.collectionGroups,sa:e}}}function du(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
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
 */class fu{constructor(e){this.key=e}}class mu{constructor(e){this.key=e}}class gu{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Wn(),this.mutatedKeys=Wn(),this.ua=Vn(e),this.ca=new Ja(this.ua)}get la(){return this.oa}ha(e,t){const n=t?t.Pa:new Za,r=t?t.ca:this.ca;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const c=r.get(e),l=Fn(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;c&&l?c.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ia(c,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.ua(l,a)>0||u&&this.ua(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),f=!0):c&&!l&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{ca:i,Pa:n,es:o,mutatedKeys:s}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return n(e)-n(t)}
/**
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
 */(e.type,t.type)||this.ua(e.doc,t.doc)),this.da(n);const i=t?this.Ta():[],o=0===this.aa.size&&this.current?1:0,a=o!==this._a;return this._a=o,0!==s.length||a?{snapshot:new eu(this.query,e.ca,r,s,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ea:i}:{Ea:i}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Za,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=Wn(),this.ca.forEach(e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))});const t=[];return e.forEach(e=>{this.aa.has(e)||t.push(new mu(e))}),this.aa.forEach(n=>{e.has(n)||t.push(new fu(n))}),t}Ra(e){this.oa=e.Ps,this.aa=Wn();const t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return eu.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class pu{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class yu{constructor(e){this.key=e,this.ma=!1}}class wu{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.fa={},this.ga=new Ln(e=>Rn(e),kn),this.pa=new Map,this.ya=new Set,this.wa=new Xe(z.comparator),this.Sa=new Map,this.ba=new fo,this.Da={},this.Ca=new Map,this.va=Bi.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function vu(e,t){const n=Hu(e);let r,s;const i=n.ga.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const e=await qo(n.localStore,Cn(t)),i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await Iu(n,t,r,"current"===i,e.resumeToken),n.isPrimaryClient&&Ta(n.remoteStore,e)}return s}async function Iu(e,t,n,r,s){e.Ma=(t,n,r)=>async function(e,t,n,r){let s=t.view.ha(n);s.es&&(s=await Go(e.localStore,t.query,!1).then(({documents:e})=>t.view.ha(e,s)));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return Ou(e,t.targetId,o.Ea),o.snapshot}(e,t,n,r);const i=await Go(e.localStore,t,!0),o=new gu(t,i.Ps),a=o.ha(i.documents),u=Qr.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),c=o.applyChanges(a,e.isPrimaryClient,u);Ou(e,n,c.Ea);const l=new pu(t,n,o);return e.ga.set(t,l),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),c.snapshot}async function _u(e,t){const n=_(e),r=n.ga.get(t),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(e=>!kn(e,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Bo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Sa(n.remoteStore,r.targetId),ku(n,r.targetId)}).catch(ne)):(ku(n,r.targetId),await Bo(n.localStore,r.targetId,!0))}async function bu(e,t,n){const r=Wu(e);try{const e=await function(e,t){const n=_(e),r=L.now(),s=t.reduce((e,t)=>e.add(t.key),Wn());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=qn(),u=Wn();return n._s.getEntries(e,s).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(u=u.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(s=>{i=s;const o=[];for(const e of t){const t=br(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new Sr(e.key,t,Lt(t.value.mapValue),pr.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(i,u);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:Kn(i)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Da[e.currentUser.toKey()];r||(r=new Xe(M)),r=r.insert(t,n),e.Da[e.currentUser.toKey()]=r}(r,e.batchId,n),await Vu(r,e.changes),await Pa(r.remoteStore)}catch(e){const t=Xa(e,"Failed to persist write");n.reject(t)}}async function Eu(e,t){const n=_(e);try{const e=await Po(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Sa.get(t);r&&(v(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ma=!0:e.modifiedDocuments.size>0?v(r.ma):e.removedDocuments.size>0&&(v(r.ma),r.ma=!1))}),await Vu(n,e,t)}catch(e){await ne(e)}}function Tu(e,t,n){const r=_(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ga.forEach((n,r)=>{const s=r.view.U_(t);s.snapshot&&e.push(s.snapshot)}),function(e,t){const n=_(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const s of n.listeners)s.U_(t)&&(r=!0)}),r&&au(n)}(r.eventManager,t),e.length&&r.fa.c_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Su(e,t,n){const r=_(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Sa.get(t),i=s&&s.key;if(i){let e=new Xe(z.comparator);e=e.insert(i,Ut.newNoDocument(i,U.min()));const n=Wn().add(i),s=new $r(U.min(),new Map,new Xe(M),e,n);await Eu(r,s),r.wa=r.wa.remove(i),r.Sa.delete(t),Mu(r)}else await Bo(r.localStore,t,!1).then(()=>ku(r,t,n)).catch(ne)}async function xu(e,t){const n=_(e),r=t.batch.batchId;try{const e=await Mo(n.localStore,t);Nu(n,r,null),Au(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vu(n,e)}catch(e){await ne(e)}}async function Cu(e,t,n){const r=_(e);try{const e=await function(e,t){const n=_(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(v(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);Nu(r,t,n),Au(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Vu(r,e)}catch(n){await ne(n)}}async function Du(e,t){const n=_(e);Na(n.remoteStore)||m("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=_(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e))}(n.localStore);if(-1===e)return void t.resolve();const r=n.Ca.get(e)||[];r.push(t),n.Ca.set(e,r)}catch(e){const n=Xa(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Au(e,t){(e.Ca.get(t)||[]).forEach(e=>{e.resolve()}),e.Ca.delete(t)}function Nu(e,t,n){const r=_(e);let s=r.Da[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.Da[r.currentUser.toKey()]=s}}function ku(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach(t=>{e.ba.containsKey(t)||Ru(e,t)})}function Ru(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);null!==n&&(Sa(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),Mu(e))}function Ou(e,t,n){for(const r of n)r instanceof fu?(e.ba.addReference(r.key,t),Fu(e,r)):r instanceof mu?(m("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||Ru(e,r.key)):w()}function Fu(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(m("SyncEngine","New document in limbo: "+n),e.ya.add(r),Mu(e))}function Mu(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new z(B.fromString(t)),r=e.va.next();e.Sa.set(r,new yu(n)),e.wa=e.wa.insert(n,r),Ta(e.remoteStore,new Ls(Cn(_n(n.path)),r,"TargetPurposeLimboResolution",ge.ae))}}async function Vu(e,t,n){const r=_(e),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((e,a)=>{o.push(r.Ma(a,t,n).then(e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=Ao.$i(a.targetId,e);i.push(t)}}))}),await Promise.all(o),r.fa.c_(s),await async function(e,t){const n=_(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>re.forEach(t,t=>re.forEach(t.Qi,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>re.forEach(t.Ki,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!ue(e))throw e;m("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.rs.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.rs=n.rs.insert(e,s)}}}(r.localStore,i))}async function Pu(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());const e=await Fo(n.localStore,t);n.currentUser=t,function(e,t){e.Ca.forEach(e=>{e.forEach(e=>{e.reject(new E(b.CANCELLED,t))})}),e.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Vu(n,e.cs)}}function Lu(e,t){const n=_(e),r=n.Sa.get(t);if(r&&r.ma)return Wn().add(r.key);{let e=Wn();const r=n.pa.get(t);if(!r)return e;for(const t of r){const r=n.ga.get(t);e=e.unionWith(r.view.la)}return e}}async function Uu(e,t){const n=_(e),r=await Go(n.localStore,t.query,!0),s=t.view.Ra(r);return n.isPrimaryClient&&Ou(n,t.targetId,s.Ea),s}async function qu(e,t){const n=_(e);return zo(n.localStore,t).then(e=>Vu(n,e))}async function Bu(e,t,n,r){const s=_(e),i=await function(e,t){const n=_(e),r=_(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Fn(e,t).next(t=>t?n.localDocuments.getDocuments(e,t):re.resolve(null)))}(s.localStore,t);null!==i?("pending"===n?await Pa(s.remoteStore):"acknowledged"===n||"rejected"===n?(Nu(s,t,r||null),Au(s,t),function(e,t){_(_(e).mutationQueue).xn(t)}(s.localStore,t)):w(),await Vu(s,i)):m("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Gu(e,t){const n=_(e);if(Hu(n),Wu(n),!0===t&&!0!==n.Fa){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Ku(n,e.toArray());n.Fa=!0,await Qa(n.remoteStore,!0);for(const r of t)Ta(n.remoteStore,r)}else if(!1===t&&!1!==n.Fa){const e=[];let t=Promise.resolve();n.pa.forEach((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then(()=>(ku(n,s),Bo(n.localStore,s,!0))),Sa(n.remoteStore,s)}),await t,await Ku(n,e),function(e){const t=_(e);t.Sa.forEach((e,n)=>{Sa(t.remoteStore,n)}),t.ba.gr(),t.Sa=new Map,t.wa=new Xe(z.comparator)}(n),n.Fa=!1,await Qa(n.remoteStore,!1)}}async function Ku(e,t,n){const r=_(e),s=[],i=[];for(const o of t){let e;const t=r.pa.get(o);if(t&&0!==t.length){e=await qo(r.localStore,Cn(t[0]));for(const e of t){const t=r.ga.get(e),n=await Uu(r,t);n.snapshot&&i.push(n.snapshot)}}else{const t=await Ko(r.localStore,o);e=await qo(r.localStore,t),await Iu(r,zu(t),o,!1,e.resumeToken)}s.push(e)}return r.fa.c_(i),s}function zu(e){return In(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function ju(e){return function(e){return _(_(e).persistence).ki()}(_(e).localStore)}async function $u(e,t,n,r){const s=_(e);if(s.Fa)return void m("SyncEngine","Ignoring unexpected query state notification.");const i=s.pa.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{const e=await zo(s.localStore,Mn(i[0])),r=$r.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,ot.EMPTY_BYTE_STRING);await Vu(s,e,r);break}case"rejected":await Bo(s.localStore,t,!0),ku(s,t,r);break;default:w()}}async function Qu(e,t,n){const r=Hu(e);if(r.Fa){for(const e of t){if(r.pa.has(e)){m("SyncEngine","Adding an already active target "+e);continue}const t=await Ko(r.localStore,e),n=await qo(r.localStore,t);await Iu(r,zu(t),n.targetId,!1,n.resumeToken),Ta(r.remoteStore,n)}for(const e of n)r.pa.has(e)&&await Bo(r.localStore,e,!1).then(()=>{Sa(r.remoteStore,e),ku(r,e)}).catch(ne)}}function Hu(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Eu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lu.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Su.bind(null,t),t.fa.c_=iu.bind(null,t.eventManager),t.fa.xa=ou.bind(null,t.eventManager),t}function Wu(e){const t=_(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Cu.bind(null,t),t}function Yu(e,t,n){const r=_(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=_(e),r=cs(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Ur.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(du(r));const s=new hu(r,e.localStore,t.serializer);let i=await t.Oa();for(;i;){const e=await s.na(i);e&&n._updateProgress(e),i=await t.Oa()}const o=await s.complete();return await Vu(e,o.sa,void 0),await function(e,t){const n=_(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Ur.saveBundleMetadata(e,t))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.ia)}catch(e){return p("SyncEngine","Loading bundle failed with "+e),n._failWith(e),Promise.resolve(new Set)}}
/**
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
 */)(r,t,n).then(e=>{r.sharedClientState.notifyBundleLoaded(e)})}class Xu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ma(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Oo(this.persistence,new ko,e.initialUser,this.serializer)}createPersistence(e){return new vo(_o.Jr,this.serializer)}createSharedClientState(e){return new ra}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ju extends Xu{constructor(e,t,n){super(),this.Na=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Na.initialize(this,e),await Wu(this.Na.syncEngine),await Pa(this.Na.remoteStore),await this.persistence.gi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Oo(this.persistence,new ko,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Hi(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new me(t,this.persistence);return new fe(e.asyncQueue,n)}createPersistence(e){const t=Do(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Oi.withCacheSize(this.cacheSizeBytes):Oi.DEFAULT;return new So(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,da(),fa(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new ra}}class Zu extends Ju{constructor(e,t){super(e,t,!1),this.Na=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Na.syncEngine;this.sharedClientState instanceof na&&(this.sharedClientState.syncEngine={Xs:Bu.bind(null,t),eo:$u.bind(null,t),no:Qu.bind(null,t),ki:ju.bind(null,t),Zs:qu.bind(null,t)},await this.sharedClientState.start()),await this.persistence.gi(async e=>{await Gu(this.Na.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=da();if(!na.C(t))throw new E(b.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Do(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new na(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ec{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Tu(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pu.bind(null,this.syncEngine),await Qa(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nu}()}createDatastore(e){const t=ma(e.databaseInfo.databaseId),n=function(e){return new ha(e)}(e.databaseInfo);return function(e,t,n,r){return new va(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,s){return new _a(e,t,n,r,s)}(this.localStore,this.datastore,e.asyncQueue,e=>Tu(this.syncEngine,e,0),function(){return ia.C()?new ia:new sa}())}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new wu(e,t,n,r,s,i);return o&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);m("RemoteStore","RemoteStore shutting down."),t.F_.add(5),await Ea(t),t.x_.shutdown(),t.O_.set("Unknown")}(this.remoteStore)}}
/**
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
 */function tc(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
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
 */
/**
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
 */class nc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):g("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
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
 */class rc{constructor(e,t){this.ka=e,this.serializer=t,this.metadata=new T,this.buffer=new Uint8Array,this.qa=function(){return new TextDecoder("utf-8")}(),this.Qa().then(e=>{e&&e.ea()?this.metadata.resolve(e.X_.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==e?void 0:e.X_)))},e=>this.metadata.reject(e))}close(){return this.ka.cancel()}async getMetadata(){return this.metadata.promise}async Oa(){return await this.getMetadata(),this.Qa()}async Qa(){const e=await this.Ka();if(null===e)return null;const t=this.qa.decode(e),n=Number(t);isNaN(n)&&this.$a(`length string (${t}) is not valid number`);const r=await this.Ua(n);return new cu(JSON.parse(r),e.length+n)}Wa(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ka(){for(;this.Wa()<0;)if(await this.Ga())break;if(0===this.buffer.length)return null;const e=this.Wa();e<0&&this.$a("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ua(e){for(;this.buffer.length<e;)await this.Ga()&&this.$a("Reached the end of bundle when more is expected.");const t=this.qa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}$a(e){throw this.ka.cancel(),new Error("Invalid bundle format: "+e)}async Ga(){const e=await this.ka.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
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
 */class sc{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(b.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=_(e),r=ps(n.serializer)+"/documents",s={documents:t.map(e=>ds(n.serializer,e))},i=await n.Fo("BatchGetDocuments",r,s,t.length),o=new Map;i.forEach(e=>{const t=Is(n.serializer,e);o.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=o.get(e.toString());v(!!t),a.push(t)}),a}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ar(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=z.fromPath(t);this.mutations.push(new Nr(n,this.precondition(n)))}),await async function(e,t){const n=_(e),r=ps(n.serializer)+"/documents",s={writes:t.map(e=>bs(n.serializer,e))};await n.bo("Commit",r,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw w();t=U.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new E(b.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(U.min())?pr.exists(!1):pr.updateTime(t):pr.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(U.min()))throw new E(b.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return pr.updateTime(t)}return pr.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
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
 */class ic{constructor(e,t,n,r,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=s,this.za=n.maxAttempts,this.Ho=new ga(this.asyncQueue,"transaction_retry")}run(){this.za-=1,this.ja()}ja(){this.Ho.Qo(async()=>{const e=new sc(this.datastore),t=this.Ha(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Ja(e)}))}).catch(e=>{this.Ja(e)})})}Ha(e){try{const t=this.updateFunction(e);return!pe(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ja(e){this.za>0&&this.Ya(e)?(this.za-=1,this.asyncQueue.enqueueAndForget(()=>(this.ja(),Promise.resolve()))):this.deferred.reject(e)}Ya(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Pr(t)}return!1}}
/**
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
 */class oc{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=c.UNAUTHENTICATED,this.clientId=F.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{m("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(m("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Xa(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function ac(e,t){e.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Fo(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function uc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await lc(e);m("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>$a(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>$a(t.remoteStore,n)),e._onlineComponents=t}function cc(e){return"FirebaseError"===e.name?e.code===b.FAILED_PRECONDITION||e.code===b.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function lc(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){m("FirestoreClient","Using user provided OfflineComponentProvider");try{await ac(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!cc(n))throw n;p("Error using user provided cache. Falling back to memory cache: "+n),await ac(e,new Xu)}}else m("FirestoreClient","Using default OfflineComponentProvider"),await ac(e,new Xu);return e._offlineComponents}async function hc(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(m("FirestoreClient","Using user provided OnlineComponentProvider"),await uc(e,e._uninitializedComponentsProvider._online)):(m("FirestoreClient","Using default OnlineComponentProvider"),await uc(e,new ec))),e._onlineComponents}function dc(e){return lc(e).then(e=>e.persistence)}function fc(e){return lc(e).then(e=>e.localStore)}function mc(e){return hc(e).then(e=>e.remoteStore)}function gc(e){return hc(e).then(e=>e.syncEngine)}function pc(e){return hc(e).then(e=>e.datastore)}async function yc(e){const t=await hc(e),n=t.eventManager;return n.onListen=vu.bind(null,t.syncEngine),n.onUnlisten=_u.bind(null,t.syncEngine),n}function wc(e){return e.asyncQueue.enqueue(async()=>{const t=await dc(e),n=await mc(e);return t.setNetworkEnabled(!0),function(e){const t=_(e);return t.F_.delete(0),ba(t)}(n)})}function vc(e){return e.asyncQueue.enqueue(async()=>{const t=await dc(e),n=await mc(e);return t.setNetworkEnabled(!1),async function(e){const t=_(e);t.F_.add(0),await Ea(t),t.O_.set("Offline")}(n)})}function Ic(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=_(e);return n.persistence.runTransaction("read document","readonly",e=>n.localDocuments.getDocument(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new E(b.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Xa(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await fc(e),t,n)),n.promise}function _c(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,s){const i=new nc({next:i=>{t.enqueueAndForget(()=>su(e,o));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new E(b.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new E(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new uu(_n(n.path),i,{includeMetadataChanges:!0,Z_:!0});return ru(e,o)}(await yc(e),e.asyncQueue,t,n,r)),r.promise}function bc(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await Go(e,t,!0),s=new gu(t,r.Ps),i=s.ha(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(e){const r=Xa(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await fc(e),t,n)),n.promise}function Ec(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,s){const i=new nc({next:n=>{t.enqueueAndForget(()=>su(e,o)),n.fromCache&&"server"===r.source?s.reject(new E(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new uu(n,i,{includeMetadataChanges:!0,Z_:!0});return ru(e,o)}(await yc(e),e.asyncQueue,t,n,r)),r.promise}function Tc(e,t){const n=new nc(t);return e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).K_.add(t),t.next()}(await yc(e),n)),()=>{n.La(),e.asyncQueue.enqueueAndForget(async()=>function(e,t){_(e).K_.delete(t)}(await yc(e),n))}}function Sc(e,t,n,r){const s=function(e,t){let n;return n="string"==typeof e?qr().encode(e):e,function(e,t){return new rc(e,t)}(function(e,t){if(e instanceof Uint8Array)return tc(e,t);if(e instanceof ArrayBuffer)return tc(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}(n,ma(t));e.asyncQueue.enqueueAndForget(async()=>{Yu(await gc(e),s,r)})}function xc(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=_(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.Ur.getNamedQuery(e,t))}(await fc(e),t))}
/**
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
 */
function Cc(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
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
 */}const Dc=new Map;
/**
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
 */function Ac(e,t,n){if(!n)throw new E(b.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Nc(e,t,n,r){if(!0===t&&!0===r)throw new E(b.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function kc(e){if(!z.isDocumentKey(e))throw new E(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Rc(e){if(z.isDocumentKey(e))throw new E(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Oc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":w()}function Fc(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oc(e);throw new E(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Mc(e,t){if(t<=0)throw new E(b.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
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
 */class Vc{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new E(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Nc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cc(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new E(b.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new E(b.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new E(b.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pc{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new x;switch(e.type){case"firstParty":return new N(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new E(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Dc.get(e);t&&(m("ComponentProvider","Removing Datastore"),Dc.delete(e),t.terminate())}(this),Promise.resolve()}}function Lc(e,t,n,r={}){var s;const i=(e=Fc(e,Pc))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==a&&p("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=c.MOCK_USER;else{t=Object(o["g"])(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new E(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new c(i)}e._authCredentials=new C(new S(t,n))}}
/**
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
 */class Uc{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Uc(this.firestore,e,this._query)}}class qc{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qc(this.firestore,e,this._key)}}class Bc extends Uc{constructor(e,t,n){super(e,t,_n(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qc(this.firestore,null,new z(e))}withConverter(e){return new Bc(this.firestore,e,this._path)}}function Gc(e,t,...n){if(e=Object(o["p"])(e),Ac("collection","path",t),e instanceof Pc){const r=B.fromString(t,...n);return Rc(r),new Bc(e,null,r)}{if(!(e instanceof qc||e instanceof Bc))throw new E(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(B.fromString(t,...n));return Rc(r),new Bc(e.firestore,null,r)}}function Kc(e,t){if(e=Fc(e,Pc),Ac("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new E(b.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Uc(e,null,function(e){return new vn(B.emptyPath(),e)}(t))}function zc(e,t,...n){if(e=Object(o["p"])(e),1===arguments.length&&(t=F.V()),Ac("doc","path",t),e instanceof Pc){const r=B.fromString(t,...n);return kc(r),new qc(e,null,new z(r))}{if(!(e instanceof qc||e instanceof Bc))throw new E(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(B.fromString(t,...n));return kc(r),new qc(e.firestore,e instanceof Bc?e.converter:null,new z(r))}}function jc(e,t){return e=Object(o["p"])(e),t=Object(o["p"])(t),(e instanceof qc||e instanceof Bc)&&(t instanceof qc||t instanceof Bc)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function $c(e,t){return e=Object(o["p"])(e),t=Object(o["p"])(t),e instanceof Uc&&t instanceof Uc&&e.firestore===t.firestore&&kn(e._query,t._query)&&e.converter===t.converter
/**
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
 */}class Qc{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new ga(this,"async_queue_retry"),this.ou=()=>{const e=fa();e&&m("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};const e=fa();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const t=fa();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const t=new T;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!ue(e))throw e;m("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const t=this.Za.then(()=>(this.ru=!0,e().catch(e=>{this.nu=e,this.ru=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
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
 */(e);throw g("INTERNAL UNHANDLED ERROR: ",t),e}).then(e=>(this.ru=!1,e))));return this.Za=t,t}enqueueAfterDelay(e,t,n){this._u(),this.su.indexOf(e)>-1&&(t=0);const r=Ya.createAndSchedule(this,e,t,n,e=>this.cu(e));return this.tu.push(r),r}_u(){this.nu&&w()}verifyOperationInProgress(){}async lu(){let e;do{e=this.Za,await e}while(e!==this.Za)}hu(e){for(const t of this.tu)if(t.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const t=this.tu.indexOf(e);this.tu.splice(t,1)}}function Hc(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
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
 */(e,["next","error","complete"])}class Wc{constructor(){this._progressObserver={},this._taskCompletionResolver=new T,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
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
 */const Yc=-1;class Xc extends Pc{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=function(){return new Qc}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zc(this),this._firestoreClient.terminate()}}function Jc(e){return e._firestoreClient||Zc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Zc(e){var t,n,r;const s=e._freezeSettings(),i=function(e,t,n,r){return new mt(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Cc(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new oc(e._authCredentials,e._appCheckCredentials,e._queue,i),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}function el(e,t){cl(e=Fc(e,Xc));const n=Jc(e);if(n._uninitializedComponentsProvider)throw new E(b.FAILED_PRECONDITION,"SDK cache is already specified.");p("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=e._freezeSettings(),s=new ec;return nl(n,s,new Ju(s,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function tl(e){cl(e=Fc(e,Xc));const t=Jc(e);if(t._uninitializedComponentsProvider)throw new E(b.FAILED_PRECONDITION,"SDK cache is already specified.");p("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),r=new ec;return nl(t,r,new Zu(r,n.cacheSizeBytes))}function nl(e,t,n){const r=new T;return e.asyncQueue.enqueue(async()=>{try{await ac(e,n),await uc(e,t),r.resolve()}catch(e){const n=e;if(!cc(n))throw n;p("Error enabling indexeddb cache. Falling back to memory cache: "+n),r.reject(n)}}).then(()=>r.promise)}function rl(e){if(e._initialized&&!e._terminated)throw new E(b.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new T;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!ie.C())return Promise.resolve();const t=e+"main";await ie.delete(t)}(Do(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function sl(e){return function(e){const t=new T;return e.asyncQueue.enqueueAndForget(async()=>Du(await gc(e),t)),t.promise}(Jc(e=Fc(e,Xc)))}function il(e){return wc(Jc(e=Fc(e,Xc)))}function ol(e){return vc(Jc(e=Fc(e,Xc)))}function al(e,t){const n=Jc(e=Fc(e,Xc)),r=new Wc;return Sc(n,e._databaseId,t,r),r}function ul(e,t){return xc(Jc(e=Fc(e,Xc)),t).then(t=>t?new Uc(e,null,t.query):null)}function cl(e){if(e._initialized||e._terminated)throw new E(b.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
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
 */
/**
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
 */
/**
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
 */
class ll{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ll(ot.fromBase64String(e))}catch(e){throw new E(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ll(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class hl{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */
class dl{constructor(e){this._methodName=e}}
/**
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
 */class fl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return M(this._lat,e._lat)||M(this._long,e._long)}}
/**
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
 */const ml=/^__.*__$/;class gl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Sr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Tr(e,this.data,t,this.fieldTransforms)}}class pl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Sr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function yl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class wl{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.du(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new wl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.Vu(e),r}mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.du(),r}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Ll(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(0===e.length)throw this.gu("Document fields must not be empty");if(yl(this.Tu)&&ml.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class vl{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ma(e)}wu(e,t,n,r=!1){return new wl({Tu:e,methodName:t,yu:n,path:K.emptyPath(),Ru:!1,pu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Il(e){const t=e._freezeSettings(),n=ma(e._databaseId);return new vl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function _l(e,t,n,r,s,i={}){const o=e.wu(i.merge||i.mergeFields?2:0,t,n,s);Fl("Data must be an object, but it was:",o,r);const a=Rl(r,o);let u,c;if(i.merge)u=new rt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=Ml(t,r,n);if(!o.contains(s))throw new E(b.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Ul(e,s)||e.push(s)}u=new rt(e),c=o.fieldTransforms.filter(e=>u.covers(e.field))}else u=null,c=o.fieldTransforms;return new gl(new Pt(a),u,c)}class bl extends dl{_toFieldTransform(e){if(2!==e.Tu)throw 1===e.Tu?e.gu(this._methodName+"() can only appear at the top level of your update data"):e.gu(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bl}}function El(e,t,n){return new wl({Tu:3,yu:t.settings.yu,methodName:e._methodName,Ru:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Tl extends dl{_toFieldTransform(e){return new fr(e.path,new ir)}isEqual(e){return e instanceof Tl}}class Sl extends dl{constructor(e,t){super(e),this.Su=t}_toFieldTransform(e){const t=El(this,e,!0),n=this.Su.map(e=>kl(e,t)),r=new or(n);return new fr(e.path,r)}isEqual(e){return this===e}}class xl extends dl{constructor(e,t){super(e),this.Su=t}_toFieldTransform(e){const t=El(this,e,!0),n=this.Su.map(e=>kl(e,t)),r=new ur(n);return new fr(e.path,r)}isEqual(e){return this===e}}class Cl extends dl{constructor(e,t){super(e),this.bu=t}_toFieldTransform(e){const t=new lr(e.serializer,er(e.serializer,this.bu));return new fr(e.path,t)}isEqual(e){return this===e}}function Dl(e,t,n,r){const s=e.wu(1,t,n);Fl("Data must be an object, but it was:",s,r);const i=[],a=Pt.empty();We(r,(e,r)=>{const u=Pl(t,e,n);r=Object(o["p"])(r);const c=s.mu(u);if(r instanceof bl)i.push(u);else{const e=kl(r,c);null!=e&&(i.push(u),a.set(u,e))}});const u=new rt(i);return new pl(a,u,s.fieldTransforms)}function Al(e,t,n,r,s,i){const a=e.wu(1,t,n),u=[Ml(t,r,n)],c=[s];if(i.length%2!=0)throw new E(b.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<i.length;o+=2)u.push(Ml(t,i[o])),c.push(i[o+1]);const l=[],h=Pt.empty();for(let f=u.length-1;f>=0;--f)if(!Ul(l,u[f])){const e=u[f];let t=c[f];t=Object(o["p"])(t);const n=a.mu(e);if(t instanceof bl)l.push(e);else{const r=kl(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new rt(l);return new pl(h,d,a.fieldTransforms)}function Nl(e,t,n,r=!1){return kl(n,e.wu(r?4:3,t))}function kl(e,t){if(Ol(e=Object(o["p"])(e)))return Fl("Unsupported field value:",t,e),Rl(e,t);if(e instanceof dl)return function(e,t){if(!yl(t.Tu))throw t.gu(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.gu(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Ru&&4!==t.Tu)throw t.gu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=kl(s,t.fu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o["p"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return er(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=L.fromDate(e);return{timestampValue:os(t.serializer,n)}}if(e instanceof L){const n=new L(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:os(t.serializer,n)}}if(e instanceof fl)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ll)return{bytesValue:as(t.serializer,e._byteString)};if(e instanceof qc){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.gu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ls(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.gu("Unsupported field value: "+Oc(e))}(e,t)}function Rl(e,t){const n={};return Ye(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):We(e,(e,r)=>{const s=kl(r,t.Au(e));null!=s&&(n[e]=s)}),{mapValue:{fields:n}}}function Ol(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof L||e instanceof fl||e instanceof ll||e instanceof qc||e instanceof dl)}function Fl(e,t,n){if(!Ol(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Oc(n);throw"an object"===r?t.gu(e+" a custom object"):t.gu(e+" "+r)}}function Ml(e,t,n){if((t=Object(o["p"])(t))instanceof hl)return t._internalPath;if("string"==typeof t)return Pl(e,t);throw Ll("Field path arguments must be of type string or ",e,!1,void 0,n)}const Vl=new RegExp("[~\\*/\\[\\]]");function Pl(e,t,n){if(t.search(Vl)>=0)throw Ll(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new hl(...t.split("."))._internalPath}catch(r){throw Ll(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ll(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=" in field "+r),o&&(u+=" in document "+s),u+=")"),new E(b.INVALID_ARGUMENT,a+e+u)}function Ul(e,t){return e.some(e=>e.isEqual(t))}
/**
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
 */class ql{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Bl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gl("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Bl extends ql{data(){return super.data()}}function Gl(e,t){return"string"==typeof t?Pl(e,t):t instanceof hl?t._internalPath:t._delegate._internalPath}
/**
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
 */function Kl(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new E(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zl{}class jl extends zl{}function $l(e,t,...n){let r=[];t instanceof zl&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof Wl).length,n=e.filter(e=>e instanceof Ql).length;if(t>1||t>0&&n>0)throw new E(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
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
 */(r);for(const s of r)e=s._apply(e);return e}class Ql extends jl{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ql(e,t,n)}_apply(e){const t=this._parse(e);return lh(e._query,t),new Uc(e.firestore,e.converter,An(e._query,t))}_parse(e){const t=Il(e.firestore),n=function(e,t,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new E(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){ch(o,i);const t=[];for(const n of o)t.push(uh(r,e,n));a={arrayValue:{values:t}}}else a=uh(r,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||ch(o,i),a=Nl(n,t,o,"in"===i||"not-in"===i);return $t.create(s,i,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Hl(e,t,n){const r=t,s=Gl("where",e);return Ql._create(s,r,n)}class Wl extends zl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Wl(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:Qt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const s of r)lh(n,s),n=An(n,s)}(e._query,t),new Uc(e.firestore,e.converter,An(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Yl extends jl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Yl(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new E(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new E(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Kt(t,n);return function(e,t){if(null===En(e)){const n=Tn(e);null!==n&&hh(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new Uc(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new vn(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Xl(e,t="asc"){const n=t,r=Gl("orderBy",e);return Yl._create(r,n)}class Jl extends jl{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Jl(e,t,n)}_apply(e){return new Uc(e.firestore,e.converter,Nn(e._query,this._limit,this._limitType))}}function Zl(e){return Mc("limit",e),Jl._create("limit",e,"F")}function eh(e){return Mc("limitToLast",e),Jl._create("limitToLast",e,"L")}class th extends jl{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new th(e,t,n)}_apply(e){const t=ah(e,this.type,this._docOrFields,this._inclusive);return new Uc(e.firestore,e.converter,function(e,t){return new vn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function nh(...e){return th._create("startAt",e,!0)}function rh(...e){return th._create("startAfter",e,!1)}class sh extends jl{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new sh(e,t,n)}_apply(e){const t=ah(e,this.type,this._docOrFields,this._inclusive);return new Uc(e.firestore,e.converter,function(e,t){return new vn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function ih(...e){return sh._create("endBefore",e,!1)}function oh(...e){return sh._create("endAt",e,!0)}function ah(e,t,n,r){if(n[0]=Object(o["p"])(n[0]),n[0]instanceof ql)return function(e,t,n,r,s){if(!r)throw new E(b.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of xn(e))if(o.field.isKeyField())i.push(St(t,r.key));else{const e=r.data.field(o.field);if(ht(e))throw new E(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new E(b.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}i.push(e)}return new qt(i,s)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const s=Il(e.firestore);return function(e,t,n,r,s,i){const o=e.explicitOrderBy;if(s.length>o.length)throw new E(b.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let u=0;u<s.length;u++){const i=s[u];if(o[u].field.isKeyField()){if("string"!=typeof i)throw new E(b.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!Sn(e)&&-1!==i.indexOf("/"))throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=e.path.child(B.fromString(i));if(!z.isDocumentKey(n))throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new z(n);a.push(St(t,s))}else{const e=Nl(n,r,i);a.push(e)}}return new qt(a,i)}(e._query,e.firestore._databaseId,s,t,n,r)}}function uh(e,t,n){if("string"==typeof(n=Object(o["p"])(n))){if(""===n)throw new E(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sn(t)&&-1!==n.indexOf("/"))throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(B.fromString(n));if(!z.isDocumentKey(r))throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return St(e,new z(r))}if(n instanceof qc)return St(e,n._key);throw new E(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oc(n)}.`)}function ch(e,t){if(!Array.isArray(e)||0===e.length)throw new E(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function lh(e,t){if(t.isInequality()){const n=Tn(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new E(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const s=En(e);null!==s&&hh(e,r,s)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new E(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function hh(e,t,n){if(!n.isEqual(t))throw new E(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class dh{convertValue(e,t="none"){switch(wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(lt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw w()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return We(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new fl(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=dt(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ft(e));default:return null}}convertTimestamp(e){const t=ut(e);return new L(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=B.fromString(e);v(Ps(n));const r=new gt(n.get(1),n.get(3)),s=new z(n.popFirst(5));return r.isEqual(t)||g(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
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
 */function fh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class mh extends dh{constructor(e){super(),this.firestore=e}convertBytes(e){return new ll(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qc(this.firestore,null,t)}}
/**
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
 */
/**
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
 */
class gh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ph extends ql{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Gl("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class yh extends ph{data(e={}){return super.data(e)}}class wh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new gh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new yh(this._firestore,this._userDataWriter,n.key,n,new gh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new yh(e._firestore,e._userDataWriter,n.doc.key,n.doc,new gh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new yh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new gh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:vh(t.type),doc:r,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function vh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}function Ih(e,t){return e instanceof ph&&t instanceof ph?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof wh&&t instanceof wh&&e._firestore===t._firestore&&$c(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
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
 */function _h(e){e=Fc(e,qc);const t=Fc(e.firestore,Xc);return _c(Jc(t),e._key).then(n=>Mh(t,e,n))}class bh extends dh{constructor(e){super(),this.firestore=e}convertBytes(e){return new ll(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qc(this.firestore,null,t)}}function Eh(e){e=Fc(e,qc);const t=Fc(e.firestore,Xc),n=Jc(t),r=new bh(t);return Ic(n,e._key).then(n=>new ph(t,r,e._key,n,new gh(null!==n&&n.hasLocalMutations,!0),e.converter))}function Th(e){e=Fc(e,qc);const t=Fc(e.firestore,Xc);return _c(Jc(t),e._key,{source:"server"}).then(n=>Mh(t,e,n))}function Sh(e){e=Fc(e,Uc);const t=Fc(e.firestore,Xc),n=Jc(t),r=new bh(t);return Kl(e._query),Ec(n,e._query).then(n=>new wh(t,r,e,n))}function xh(e){e=Fc(e,Uc);const t=Fc(e.firestore,Xc),n=Jc(t),r=new bh(t);return bc(n,e._query).then(n=>new wh(t,r,e,n))}function Ch(e){e=Fc(e,Uc);const t=Fc(e.firestore,Xc),n=Jc(t),r=new bh(t);return Ec(n,e._query,{source:"server"}).then(n=>new wh(t,r,e,n))}function Dh(e,t,n){e=Fc(e,qc);const r=Fc(e.firestore,Xc),s=fh(e.converter,t,n);return Fh(r,[_l(Il(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,pr.none())])}function Ah(e,t,n,...r){e=Fc(e,qc);const s=Fc(e.firestore,Xc),i=Il(s);let a;return a="string"==typeof(t=Object(o["p"])(t))||t instanceof hl?Al(i,"updateDoc",e._key,t,n,r):Dl(i,"updateDoc",e._key,t),Fh(s,[a.toMutation(e._key,pr.exists(!0))])}function Nh(e){return Fh(Fc(e.firestore,Xc),[new Ar(e._key,pr.none())])}function kh(e,t){const n=Fc(e.firestore,Xc),r=zc(e),s=fh(e.converter,t);return Fh(n,[_l(Il(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,pr.exists(!1))]).then(()=>r)}function Rh(e,...t){var n,r,s;e=Object(o["p"])(e);let i={includeMetadataChanges:!1},a=0;"object"!=typeof t[a]||Hc(t[a])||(i=t[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges};if(Hc(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let c,l,h;if(e instanceof qc)l=Fc(e.firestore,Xc),h=_n(e._key.path),c={next:n=>{t[a]&&t[a](Mh(l,e,n))},error:t[a+1],complete:t[a+2]};else{const n=Fc(e,Uc);l=Fc(n.firestore,Xc),h=n._query;const r=new bh(l);c={next:e=>{t[a]&&t[a](new wh(l,r,n,e))},error:t[a+1],complete:t[a+2]},Kl(e._query)}return function(e,t,n,r){const s=new nc(r),i=new uu(t,s,n);return e.asyncQueue.enqueueAndForget(async()=>ru(await yc(e),i)),()=>{s.La(),e.asyncQueue.enqueueAndForget(async()=>su(await yc(e),i))}}(Jc(l),h,u,c)}function Oh(e,t){return Tc(Jc(e=Fc(e,Xc)),Hc(t)?t:{next:t})}function Fh(e,t){return function(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>bu(await gc(e),t,n)),n.promise}(Jc(e),t)}function Mh(e,t,n){const r=n.docs.get(t._key),s=new bh(e);return new ph(e,s,t._key,r,new gh(n.hasPendingWrites,n.fromCache),t.converter)}
/**
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
 */
/**
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
 */
const Vh={maxAttempts:5};
/**
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
 */class Ph{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Il(e)}set(e,t,n){this._verifyNotCommitted();const r=Lh(e,this._firestore),s=fh(r.converter,t,n),i=_l(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,pr.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const s=Lh(e,this._firestore);let i;return i="string"==typeof(t=Object(o["p"])(t))||t instanceof hl?Al(this._dataReader,"WriteBatch.update",s._key,t,n,r):Dl(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,pr.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Lh(e,this._firestore);return this._mutations=this._mutations.concat(new Ar(t._key,pr.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Lh(e,t){if((e=Object(o["p"])(e)).firestore!==t)throw new E(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
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
 */
/**
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
 */class Uh extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Il(e)}get(e){const t=Lh(e,this._firestore),n=new mh(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return w();const r=e[0];if(r.isFoundDocument())return new ql(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new ql(this._firestore,n,t._key,null,t.converter);throw w()})}set(e,t,n){const r=Lh(e,this._firestore),s=fh(r.converter,t,n),i=_l(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(e,t,n,...r){const s=Lh(e,this._firestore);let i;return i="string"==typeof(t=Object(o["p"])(t))||t instanceof hl?Al(this._dataReader,"Transaction.update",s._key,t,n,r):Dl(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){const t=Lh(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Lh(e,this._firestore),n=new bh(this._firestore);return super.get(e).then(e=>new ph(this._firestore,n,t._key,e._document,new gh(!1,!1),t.converter))}}function qh(e,t,n){e=Fc(e,Xc);const r=Object.assign(Object.assign({},Vh),n);return function(e){if(e.maxAttempts<1)throw new E(b.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>{const s=await pc(e);new ic(e.asyncQueue,s,n,t,r).run()}),r.promise}(Jc(e),n=>t(new Uh(e,n)),r)}
/**
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
 */function Bh(){return new bl("deleteField")}function Gh(){return new Tl("serverTimestamp")}function Kh(...e){return new Sl("arrayUnion",e)}function zh(...e){return new xl("arrayRemove",e)}function jh(e){return new Cl("increment",e)}
/**
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
 */new WeakMap;
/**
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
 */!function(e,t=!0){!function(e){l=e}(r["SDK_VERSION"]),Object(r["_registerComponent"])(new s["a"]("firestore",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new Xc(new D(e.getProvider("auth-internal")),new R(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gt(e.options.projectId,t)}(s,n),s);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),Object(r["registerVersion"])(u,"4.2.0",e),Object(r["registerVersion"])(u,"4.2.0","esm2017")}()}).call(this,n("4362"))}}]);
//# sourceMappingURL=chunk-2d0c4c34.2ced4853.js.map