(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d321085","chunk-3d321085"],{"999f":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return h}));var n=r("c2d8");class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const s="[DEFAULT]";
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
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new n["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(r){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),n=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(n)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,r]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});r.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);r===e&&s.resolve(n)}return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);const s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch(n){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:o(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(n){}return r||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function o(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
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
 */class h{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},ae05:function(e,t,r){"use strict";var n=r("386c"),i=r("3be4"),s=r("c2d8"),a=r("999f");const o="@firebase/firestore-compat",c="0.3.18";
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
 */
function h(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new i["g"]("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
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
 */function l(){if("undefined"===typeof Uint8Array)throw new i["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function d(){if(!Object(i["r"])())throw new i["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class u{constructor(e){this._delegate=e}static fromBase64String(e){return d(),new u(i["b"].fromBase64String(e))}static fromUint8Array(e){return l(),new u(i["b"].fromUint8Array(e))}toBase64(){return d(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
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
 */function g(e){return _(e,["next","error","complete"])}function _(e,t){if("object"!==typeof e||null===e)return!1;const r=e;for(const n of t)if(n in r&&"function"===typeof r[n])return!0;return!1}
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
 */class f{enableIndexedDbPersistence(e,t){return Object(i["F"])(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Object(i["G"])(e._delegate)}clearIndexedDbPersistence(e){return Object(i["x"])(e._delegate)}}class m{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof i["m"]||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Object(i["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){Object(i["A"])(this._delegate,e,t,r)}enableNetwork(){return Object(i["H"])(this._delegate)}disableNetwork(){return Object(i["D"])(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Object(i["t"])("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(i["lb"])(this._delegate)}onSnapshotsInSync(e){return Object(i["Y"])(this._delegate,e)}get app(){if(!this._appCompat)throw new i["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new z(this,Object(i["y"])(this._delegate,e))}catch(t){throw y(t,"collection()","Firestore.collection()")}}doc(e){try{return new O(this,Object(i["E"])(this._delegate,e))}catch(t){throw y(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new E(this,Object(i["z"])(this._delegate,e))}catch(t){throw y(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Object(i["db"])(this._delegate,t=>e(new w(this,t)))}batch(){return Object(i["K"])(this._delegate),new v(new i["l"](this._delegate,e=>Object(i["L"])(this._delegate,e)))}loadBundle(e){return Object(i["V"])(this._delegate,e)}namedQuery(e){return Object(i["W"])(this._delegate,e).then(e=>e?new E(this,e):null)}}class p extends i["a"]{constructor(e){super(),this.firestore=e}convertBytes(e){return new u(new i["b"](e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return O.forKey(t,this.firestore,null)}}function b(e){Object(i["gb"])(e)}class w{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new p(e)}get(e){const t=F(e);return this._delegate.get(t).then(e=>new D(this._firestore,new i["e"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter)))}set(e,t,r){const n=F(e);return r?(h("Transaction.set",r),this._delegate.set(n,t,r)):this._delegate.set(n,t),this}update(e,t,r,...n){const i=F(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,r,...n),this}delete(e){const t=F(e);return this._delegate.delete(t),this}}class v{constructor(e){this._delegate=e}set(e,t,r){const n=F(e);return r?(h("WriteBatch.set",r),this._delegate.set(n,t,r)):this._delegate.set(n,t),this}update(e,t,r,...n){const i=F(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,r,...n),this}delete(e){const t=F(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class I{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new i["i"](this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new S(this._firestore,r),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=I.INSTANCES;let n=r.get(e);n||(n=new WeakMap,r.set(e,n));let i=n.get(t);return i||(i=new I(e,new p(e),t),n.set(t,i)),i}}I.INSTANCES=new WeakMap;class O{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new p(e)}static forPath(e,t,r){if(e.length%2!==0)throw new i["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new O(t,new i["d"](t._delegate,r,new i["n"](e)))}static forKey(e,t,r){return new O(t,new i["d"](t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new z(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new z(this.firestore,Object(i["y"])(this._delegate,e))}catch(t){throw y(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Object(s["p"])(e),e instanceof i["d"]&&Object(i["cb"])(this._delegate,e)}set(e,t){t=h("DocumentReference.set",t);try{return t?Object(i["fb"])(this._delegate,e,t):Object(i["fb"])(this._delegate,e)}catch(r){throw y(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return 1===arguments.length?Object(i["kb"])(this._delegate,e):Object(i["kb"])(this._delegate,e,t,...r)}catch(n){throw y(n,"updateDoc()","DocumentReference.update()")}}delete(){return Object(i["B"])(this._delegate)}onSnapshot(...e){const t=j(e),r=C(e,e=>new D(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)));return Object(i["X"])(this._delegate,t,r)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i["N"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i["O"])(this._delegate):Object(i["M"])(this._delegate),t.then(e=>new D(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter)))}withConverter(e){return new O(this.firestore,e?this._delegate.withConverter(I.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function y(e,t,r){return e.message=e.message.replace(t,r),e}function j(e){for(const t of e)if("object"===typeof t&&!g(t))return t;return{}}function C(e,t){var r,n;let i;return i=g(e[0])?e[0]:g(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(r=i.error)||void 0===r?void 0:r.bind(i),complete:null===(n=i.complete)||void 0===n?void 0:n.bind(i)}}class D{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new O(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Object(i["hb"])(this._delegate,e._delegate)}}class S extends D{data(e){const t=this._delegate.data(e);return Object(i["q"])(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class E{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new p(e)}where(e,t,r){try{return new E(this.firestore,Object(i["ab"])(this._delegate,Object(i["mb"])(e,t,r)))}catch(n){throw y(n,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new E(this.firestore,Object(i["ab"])(this._delegate,Object(i["Z"])(e,t)))}catch(r){throw y(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new E(this.firestore,Object(i["ab"])(this._delegate,Object(i["T"])(e)))}catch(t){throw y(t,"limit()","Query.limit()")}}limitToLast(e){try{return new E(this.firestore,Object(i["ab"])(this._delegate,Object(i["U"])(e)))}catch(t){throw y(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new E(this.firestore,Object(i["ab"])(this._delegate,Object(i["jb"])(...e)))}catch(t){throw y(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new E(this.firestore,Object(i["ab"])(this._delegate,Object(i["ib"])(...e)))}catch(t){throw y(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new E(this.firestore,Object(i["ab"])(this._delegate,Object(i["J"])(...e)))}catch(t){throw y(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new E(this.firestore,Object(i["ab"])(this._delegate,Object(i["I"])(...e)))}catch(t){throw y(t,"endAt()","Query.endAt()")}}isEqual(e){return Object(i["bb"])(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Object(i["Q"])(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Object(i["R"])(this._delegate):Object(i["P"])(this._delegate),t.then(e=>new A(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)))}onSnapshot(...e){const t=j(e),r=C(e,e=>new A(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot)));return Object(i["X"])(this._delegate,t,r)}withConverter(e){return new E(this.firestore,e?this._delegate.withConverter(I.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class P{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new S(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class A{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new E(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new S(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(e=>new P(this._firestore,e))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new S(this._firestore,r))})}isEqual(e){return Object(i["hb"])(this._delegate,e._delegate)}}class z extends E{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new O(this.firestore,e):null}doc(e){try{return new O(this.firestore,void 0===e?Object(i["E"])(this._delegate):Object(i["E"])(this._delegate,e))}catch(t){throw y(t,"doc()","CollectionReference.doc()")}}add(e){return Object(i["u"])(this._delegate,e).then(e=>new O(this.firestore,e))}isEqual(e){return Object(i["cb"])(this._delegate,e._delegate)}withConverter(e){return new z(this.firestore,e?this._delegate.withConverter(I.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function F(e){return Object(i["p"])(e,i["d"])}
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
 */class k{constructor(...e){this._delegate=new i["f"](...e)}static documentId(){return new k(i["o"].keyField().canonicalString())}isEqual(e){return e=Object(s["p"])(e),e instanceof i["f"]&&this._delegate._internalPath.isEqual(e._internalPath)}}
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
 */class x{constructor(e){this._delegate=e}static serverTimestamp(){const e=Object(i["eb"])();return e._methodName="FieldValue.serverTimestamp",new x(e)}static delete(){const e=Object(i["C"])();return e._methodName="FieldValue.delete",new x(e)}static arrayUnion(...e){const t=Object(i["w"])(...e);return t._methodName="FieldValue.arrayUnion",new x(t)}static arrayRemove(...e){const t=Object(i["v"])(...e);return t._methodName="FieldValue.arrayRemove",new x(t)}static increment(e){const t=Object(i["S"])(e);return t._methodName="FieldValue.increment",new x(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
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
 */const T={Firestore:m,GeoPoint:i["h"],Timestamp:i["k"],Blob:u,Transaction:w,WriteBatch:v,DocumentReference:O,DocumentSnapshot:D,Query:E,QueryDocumentSnapshot:S,QuerySnapshot:A,CollectionReference:z,FieldPath:k,FieldValue:x,setLogLevel:b,CACHE_SIZE_UNLIMITED:i["c"]};function N(e,t){e.INTERNAL.registerComponent(new a["a"]("firestore-compat",e=>{const r=e.getProvider("app-compat").getImmediate(),n=e.getProvider("firestore").getImmediate();return t(r,n)},"PUBLIC").setServiceProps(Object.assign({},T)))}
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
 */function B(e){N(e,(e,t)=>new m(e,t,new f)),e.registerVersion(o,c)}B(n["a"])}}]);
//# sourceMappingURL=chunk-3d321085.51bb58aa.js.map