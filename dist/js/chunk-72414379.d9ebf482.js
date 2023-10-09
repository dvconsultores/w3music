(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72414379","chunk-72414379"],{"386c":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("c2d8"),a=n("999f"),i=n("9bff"),s=n("8aba");
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
class o{constructor(e,t){this._delegate=e,this.firebase=t,Object(i["_addComponent"])(e,new a["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(i["deleteApp"])(this._delegate)))}_getService(e,t=i["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=i["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(i["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(i["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},d=new r["b"]("app-compat","Firebase",c);
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
 */
function l(e){const t={},n={__esModule:!0,initializeApp:o,app:s,registerVersion:i["registerVersion"],setLogLevel:i["setLogLevel"],onLog:i["onLog"],apps:null,SDK_VERSION:i["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:a,useAsService:u,modularAPIs:i}};function a(e){delete t[e]}function s(e){if(e=e||i["_DEFAULT_ENTRY_NAME"],!Object(r["f"])(t,e))throw d.create("no-app",{appName:e});return t[e]}function o(a,s={}){const o=i["initializeApp"](a,s);if(Object(r["f"])(t,o.name))return t[o.name];const c=new e(o,n);return t[o.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const a=t.name,o=a.replace("-compat","");if(i["_registerComponent"](t)&&"PUBLIC"===t.type){const i=(e=s())=>{if("function"!==typeof e[o])throw d.create("invalid-app-argument",{appName:a});return e[o]()};void 0!==t.serviceProps&&Object(r["j"])(i,t.serviceProps),n[o]=i,e.prototype[o]=function(...e){const n=this._getService.bind(this,a);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[o]:null}function u(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),s["App"]=e,n}
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
 */function u(){const e=l(o);function t(t){Object(r["j"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:u,extendNamespace:t,createSubscribe:r["h"],ErrorFactory:r["b"],deepExtend:r["j"]}),e}const h=u(),p=new s["b"]("@firebase/app-compat"),g="@firebase/app-compat",f="0.2.19";
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
 */
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
 */
function m(e){Object(i["registerVersion"])(g,f,e)}
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
 */if(Object(r["r"])()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const b=h;m()},"70ef":function(e,t,n){"use strict";(function(e){var t=n("386c"),r=n("4b82"),a=n("999f"),i=n("c2d8"),s="@firebase/auth-compat",o="0.4.6";
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
const c=1e3;function d(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(){return"http:"===d()||"https:"===d()}function u(e=Object(i["q"])()){return!("file:"!==d()&&"ionic:"!==d()&&"capacitor:"!==d()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function h(){return Object(i["y"])()||Object(i["x"])()}function p(){return Object(i["u"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function g(e=Object(i["q"])()){return/Edge\/\d+/.test(e)}function f(e=Object(i["q"])()){return p()||g(e)}function m(){try{const e=self.localStorage,t=r["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!f()||Object(i["v"])()}catch(e){return b()&&Object(i["v"])()}return!1}function b(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function _(){return(l()||Object(i["s"])()||u())&&!h()&&m()&&!b()}function v(){return u()&&"undefined"!==typeof document}async function w(){return!!v()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}function I(){return"undefined"!==typeof window?window:null}
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
 */const y={LOCAL:"local",NONE:"none",SESSION:"session"},E=r["p"],O="persistence";function C(e,t){E(Object.values(y).includes(t),e,"invalid-persistence-type"),Object(i["y"])()?E(t!==y.SESSION,e,"unsupported-persistence-type"):Object(i["x"])()?E(t===y.NONE,e,"unsupported-persistence-type"):b()?E(t===y.NONE||t===y.LOCAL&&Object(i["v"])(),e,"unsupported-persistence-type"):E(t===y.NONE||m(),e,"unsupported-persistence-type")}async function N(e){await e._initializationPromise;const t=R(),n=r["w"](O,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function A(e,t){const n=R();if(!n)return[];const a=r["w"](O,e,t),i=n.getItem(a);switch(i){case y.NONE:return[r["M"]];case y.LOCAL:return[r["N"],r["B"]];case y.SESSION:return[r["B"]];default:return[]}}function R(){var e;try{return(null===(e=I())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
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
 */const P=r["p"];class S{constructor(){this.browserResolver=r["t"](r["A"]),this.cordovaResolver=r["t"](r["F"]),this.underlyingResolver=null,this._redirectPersistence=r["B"],this._completeRedirectFn=r["u"],this._overrideRedirectResult=r["v"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return v()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return P(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await w();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
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
 */function D(e){return e.unwrap()}function k(e){return e.wrapped()}
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
 */function T(e){return j(e)}function L(e,t){var n;const a=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new M(e,r["K"](e,t))}else if(a){const e=j(t),n=t;e&&(n.credential=e,n.tenantId=a.tenantId||void 0,n.email=a.email||void 0,n.phoneNumber=a.phoneNumber||void 0)}}function j(e){const{_tokenResponse:t}=e instanceof i["c"]?e.customData:e;if(!t)return null;if(!(e instanceof i["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return r["i"].credentialFromResult(e);const n=t.providerId;if(!n||n===r["k"].PASSWORD)return null;let a;switch(n){case r["k"].GOOGLE:a=r["f"];break;case r["k"].FACEBOOK:a=r["d"];break;case r["k"].GITHUB:a=r["e"];break;case r["k"].TWITTER:a=r["o"];break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:c}=t;return i||s||e||o?o?n.startsWith("saml.")?r["m"]._create(n,o):r["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new r["h"](n).credential({idToken:e,accessToken:i,rawNonce:c}):null}return e instanceof i["c"]?a.credentialFromError(e):a.credentialFromResult(e)}function F(e,t){return t.catch(t=>{throw t instanceof i["c"]&&L(e,t),t}).then(e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:T(e),additionalUserInfo:r["J"](e),user:W.getOrCreate(n)}})}async function U(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>F(e,n.confirm(t))}}class M{constructor(e,t){this.resolver=t,this.auth=k(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return F(D(this.auth),this.resolver.resolveSignIn(e))}}
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
 */class W{constructor(e){this._delegate=e,this.multiFactor=r["T"](e)}static getOrCreate(e){return W.USER_MAP.has(e)||W.USER_MAP.set(e,new W(e)),W.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return F(this.auth,r["P"](this._delegate,e))}async linkWithPhoneNumber(e,t){return U(this.auth,r["Q"](this._delegate,e,t))}async linkWithPopup(e){return F(this.auth,r["R"](this._delegate,e,S))}async linkWithRedirect(e){return await N(r["q"](this.auth)),r["S"](this._delegate,e,S)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return F(this.auth,r["U"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return U(this.auth,r["V"](this._delegate,e,t))}reauthenticateWithPopup(e){return F(this.auth,r["W"](this._delegate,e,S))}async reauthenticateWithRedirect(e){return await N(r["q"](this.auth)),r["X"](this._delegate,e,S)}sendEmailVerification(e){return r["Y"](this._delegate,e)}async unlink(e){return await r["jb"](this._delegate,e),this}updateEmail(e){return r["kb"](this._delegate,e)}updatePassword(e){return r["lb"](this._delegate,e)}updatePhoneNumber(e){return r["mb"](this._delegate,e)}updateProfile(e){return r["nb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return r["ob"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}W.USER_MAP=new WeakMap;
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
const V=r["p"];class B{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;V(n,"invalid-api-key",{appName:e.name}),V(n,"invalid-api-key",{appName:e.name});const a="undefined"!==typeof window?S:void 0;this._delegate=t.initialize({options:{persistence:x(n,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(r["H"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?W.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){r["E"](this._delegate,e,t)}applyActionCode(e){return r["y"](this._delegate,e)}checkActionCode(e){return r["C"](this._delegate,e)}confirmPasswordReset(e,t){return r["D"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return F(this._delegate,r["G"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return r["I"](this._delegate,e)}isSignInWithEmailLink(e){return r["O"](this._delegate,e)}async getRedirectResult(){V(_(),this._delegate,"operation-not-supported-in-this-environment");const e=await r["L"](this._delegate,S);return e?F(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){r["x"](this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:a,complete:i}=$(e,t,n);return this._delegate.onAuthStateChanged(r,a,i)}onIdTokenChanged(e,t,n){const{next:r,error:a,complete:i}=$(e,t,n);return this._delegate.onIdTokenChanged(r,a,i)}sendSignInLinkToEmail(e,t){return r["ab"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return r["Z"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(C(this._delegate,e),e){case y.SESSION:t=r["B"];break;case y.LOCAL:const e=await r["t"](r["N"])._isAvailable();t=e?r["N"]:r["z"];break;case y.NONE:t=r["M"];break;default:return r["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return F(this._delegate,r["bb"](this._delegate))}signInWithCredential(e){return F(this._delegate,r["cb"](this._delegate,e))}signInWithCustomToken(e){return F(this._delegate,r["db"](this._delegate,e))}signInWithEmailAndPassword(e,t){return F(this._delegate,r["eb"](this._delegate,e,t))}signInWithEmailLink(e,t){return F(this._delegate,r["fb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return U(this._delegate,r["gb"](this._delegate,e,t))}async signInWithPopup(e){return V(_(),this._delegate,"operation-not-supported-in-this-environment"),F(this._delegate,r["hb"](this._delegate,e,S))}async signInWithRedirect(e){return V(_(),this._delegate,"operation-not-supported-in-this-environment"),await N(this._delegate),r["ib"](this._delegate,e,S)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return r["pb"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function $(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const a=r,i=e=>a(e&&W.getOrCreate(e));return{next:i,error:t,complete:n}}function x(e,t){const n=A(e,t);if("undefined"===typeof self||n.includes(r["N"])||n.push(r["N"]),"undefined"!==typeof window)for(const a of[r["z"],r["B"]])n.includes(a)||n.push(a);return n.includes(r["M"])||n.push(r["M"]),n}
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
 */B.Persistence=y;class H{constructor(){this.providerId="phone",this._delegate=new r["i"](D(t["a"].auth()))}static credential(e,t){return r["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}H.PHONE_SIGN_IN_METHOD=r["i"].PHONE_SIGN_IN_METHOD,H.PROVIDER_ID=r["i"].PROVIDER_ID;
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
const z=r["p"];class G{constructor(e,n,a=t["a"].app()){var i;z(null===(i=a.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:a.name}),this._delegate=new r["l"](a.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
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
 */const Y="auth-compat";function K(e){e.INTERNAL.registerComponent(new a["a"](Y,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new B(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:r["a"].EMAIL_SIGNIN,PASSWORD_RESET:r["a"].PASSWORD_RESET,RECOVER_EMAIL:r["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:r["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:r["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:r["a"].VERIFY_EMAIL}},EmailAuthProvider:r["c"],FacebookAuthProvider:r["d"],GithubAuthProvider:r["e"],GoogleAuthProvider:r["f"],OAuthProvider:r["h"],SAMLAuthProvider:r["n"],PhoneAuthProvider:H,PhoneMultiFactorGenerator:r["j"],RecaptchaVerifier:G,TwitterAuthProvider:r["o"],Auth:B,AuthCredential:r["b"],Error:i["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(s,o)}K(t["a"])}).call(this,n("c8ba"))},"9bff":function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return q})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return U})),n.d(t,"_addComponent",(function(){return B})),n.d(t,"_addOrOverwriteComponent",(function(){return $})),n.d(t,"_apps",(function(){return W})),n.d(t,"_clearComponents",(function(){return G})),n.d(t,"_components",(function(){return V})),n.d(t,"_getProvider",(function(){return H})),n.d(t,"_registerComponent",(function(){return x})),n.d(t,"_removeServiceInstance",(function(){return z})),n.d(t,"deleteApp",(function(){return ee})),n.d(t,"getApp",(function(){return Z})),n.d(t,"getApps",(function(){return Q})),n.d(t,"initializeApp",(function(){return X})),n.d(t,"onLog",(function(){return ne})),n.d(t,"registerVersion",(function(){return te})),n.d(t,"setLogLevel",(function(){return re}));var r=n("999f"),a=n("8aba"),i=n("c2d8");n.d(t,"FirebaseError",(function(){return i["c"]}));var s=n("f051");
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
 */class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(c(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function c(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const d="@firebase/app",l="0.9.19",u=new a["b"]("@firebase/app"),h="@firebase/app-compat",p="@firebase/analytics-compat",g="@firebase/analytics",f="@firebase/app-check-compat",m="@firebase/app-check",b="@firebase/auth",_="@firebase/auth-compat",v="@firebase/database",w="@firebase/database-compat",I="@firebase/functions",y="@firebase/functions-compat",E="@firebase/installations",O="@firebase/installations-compat",C="@firebase/messaging",N="@firebase/messaging-compat",A="@firebase/performance",R="@firebase/performance-compat",P="@firebase/remote-config",S="@firebase/remote-config-compat",D="@firebase/storage",k="@firebase/storage-compat",T="@firebase/firestore",L="@firebase/firestore-compat",j="firebase",F="10.4.0",U="[DEFAULT]",M={[d]:"fire-core",[h]:"fire-core-compat",[g]:"fire-analytics",[p]:"fire-analytics-compat",[m]:"fire-app-check",[f]:"fire-app-check-compat",[b]:"fire-auth",[_]:"fire-auth-compat",[v]:"fire-rtdb",[w]:"fire-rtdb-compat",[I]:"fire-fn",[y]:"fire-fn-compat",[E]:"fire-iid",[O]:"fire-iid-compat",[C]:"fire-fcm",[N]:"fire-fcm-compat",[A]:"fire-perf",[R]:"fire-perf-compat",[P]:"fire-rc",[S]:"fire-rc-compat",[D]:"fire-gcs",[k]:"fire-gcs-compat",[T]:"fire-fst",[L]:"fire-fst-compat","fire-js":"fire-js",[j]:"fire-js-all"},W=new Map,V=new Map;function B(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e,t){e.container.addOrOverwriteComponent(t)}function x(e){const t=e.name;if(V.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;V.set(t,e);for(const n of W.values())B(n,e);return!0}function H(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function z(e,t,n=U){H(e,t).clearInstance(n)}function G(){V.clear()}
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
 */const Y={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},K=new i["b"]("app","Firebase",Y);
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
 */
class J{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
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
 */const q=F;function X(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const a=Object.assign({name:U,automaticDataCollectionEnabled:!1},t),s=a.name;if("string"!==typeof s||!s)throw K.create("bad-app-name",{appName:String(s)});if(n||(n=Object(i["l"])()),!n)throw K.create("no-options");const o=W.get(s);if(o){if(Object(i["i"])(n,o.options)&&Object(i["i"])(a,o.config))return o;throw K.create("duplicate-app",{appName:s})}const c=new r["b"](s);for(const r of V.values())c.addComponent(r);const d=new J(n,a,c);return W.set(s,d),d}function Z(e=U){const t=W.get(e);if(!t&&e===U&&Object(i["l"])())return X();if(!t)throw K.create("no-app",{appName:e});return t}function Q(){return Array.from(W.values())}async function ee(e){const t=e.name;W.has(t)&&(W.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function te(e,t,n){var a;let i=null!==(a=M[e])&&void 0!==a?a:e;n&&(i+="-"+n);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}x(new r["a"](i+"-version",()=>({library:i,version:t}),"VERSION"))}function ne(e,t){if(null!==e&&"function"!==typeof e)throw K.create("invalid-log-argument");Object(a["d"])(e,t)}function re(e){Object(a["c"])(e)}
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
 */const ae="firebase-heartbeat-database",ie=1,se="firebase-heartbeat-store";let oe=null;function ce(){return oe||(oe=Object(s["a"])(ae,ie,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(se)}}}).catch(e=>{throw K.create("idb-open",{originalErrorMessage:e.message})})),oe}async function de(e){try{const t=await ce(),n=await t.transaction(se).objectStore(se).get(ue(e));return n}catch(t){if(t instanceof i["c"])u.warn(t.message);else{const e=K.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});u.warn(e.message)}}}async function le(e,t){try{const n=await ce(),r=n.transaction(se,"readwrite"),a=r.objectStore(se);await a.put(t,ue(e)),await r.done}catch(n){if(n instanceof i["c"])u.warn(n.message);else{const e=K.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});u.warn(e.message)}}}function ue(e){return`${e.name}!${e.options.appId}`}
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
 */const he=1024,pe=2592e6;class ge{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new be(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=fe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=pe}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=fe(),{heartbeatsToSend:t,unsentEntries:n}=me(this._heartbeatsCache.heartbeats),r=Object(i["e"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function fe(){const e=new Date;return e.toISOString().substring(0,10)}function me(e,t=he){const n=[];let r=e.slice();for(const a of e){const e=n.find(e=>e.agent===a.agent);if(e){if(e.dates.push(a.date),_e(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),_e(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class be{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(i["v"])()&&Object(i["C"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await de(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return le(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return le(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function _e(e){return Object(i["e"])(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function ve(e){x(new r["a"]("platform-logger",e=>new o(e),"PRIVATE")),x(new r["a"]("heartbeat",e=>new ge(e),"PRIVATE")),te(d,l,e),te(d,l,"esm2017"),te("fire-js","")}ve("")}}]);
//# sourceMappingURL=chunk-72414379.d9ebf482.js.map