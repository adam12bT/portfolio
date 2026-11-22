const wl=()=>{};var Is={};/**
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
 */const Ao=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Rl=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],c=n[e++],f=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(f>>10)),t[i++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],u=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},wo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,c=u?n[s+1]:0,f=s+2<n.length,p=f?n[s+2]:0,I=o>>2,w=(o&3)<<4|c>>4;let R=(c&15)<<2|p>>6,b=p&63;f||(b=64,u||(R=64)),i.push(e[I],e[w],e[R],e[b])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ao(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Rl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const p=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||p==null||w==null)throw new Cl;const R=o<<2|c>>4;if(i.push(R),p!==64){const b=c<<4&240|p>>2;if(i.push(b),w!==64){const V=p<<6&192|w;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pl=function(n){const t=Ao(n);return wo.encodeByteArray(t,!0)},kn=function(n){return Pl(n).replace(/\./g,"")},Sl=function(n){try{return wo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function bl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vl=()=>bl().__FIREBASE_DEFAULTS__,Dl=()=>{if(typeof process>"u"||typeof Is>"u")return;const n=Is.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Sl(n[1]);return t&&JSON.parse(t)},Jr=()=>{try{return wl()||Vl()||Dl()||Nl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kl=n=>{var t,e;return(e=(t=Jr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ol=n=>{const t=kl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Ro=()=>{var n;return(n=Jr())===null||n===void 0?void 0:n.config};/**
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
 */class xl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function Zr(n){return n.endsWith(".cloudworkstations.dev")}async function Ml(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ll(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[kn(JSON.stringify(e)),kn(JSON.stringify(u)),""].join(".")}const Be={};function Fl(){const n={prod:[],emulator:[]};for(const t of Object.keys(Be))Be[t]?n.emulator.push(t):n.prod.push(t);return n}function Ul(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let As=!1;function Bl(n,t){if(typeof window>"u"||typeof document>"u"||!Zr(window.location.host)||Be[n]===t||Be[n]||As)return;Be[n]=t;function e(R){return`__firebase__banner__${R}`}const i="__firebase__banner",o=Fl().prod.length>0;function u(){const R=document.getElementById(i);R&&R.remove()}function c(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function f(R,b){R.setAttribute("width","24"),R.setAttribute("id",b),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function p(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{As=!0,u()},R}function I(R,b){R.setAttribute("id",b),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function w(){const R=Ul(i),b=e("text"),V=document.getElementById(b)||document.createElement("span"),O=e("learnmore"),N=document.getElementById(O)||document.createElement("a"),G=e("preprendIcon"),j=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const z=R.element;c(z),I(N,O);const Z=p();f(j,G),z.append(j,V,N,Z),document.body.appendChild(z)}o?(V.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
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
 */function jl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $l(){var n;const t=(n=Jr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zl(){return!$l()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ql(){try{return typeof indexedDB=="object"}catch{return!1}}function Hl(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Gl="FirebaseError";class ye extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Gl,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Co.prototype.create)}}class Co{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?Kl(o,i):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new ye(s,c,i)}}function Kl(n,t){return n.replace(Ql,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Ql=/\{\$([^}]+)}/g;function On(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],u=t[s];if(ws(o)&&ws(u)){if(!On(o,u))return!1}else if(o!==u)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function ws(n){return n!==null&&typeof n=="object"}/**
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
 */function He(n){return n&&n._delegate?n._delegate:n}class Ge{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Wt="[DEFAULT]";/**
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
 */class Wl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new xl;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yl(t))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=Wt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Wt){return this.instances.has(t)}getOptions(t=Wt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&u.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Xl(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Wt){return this.component?this.component.multipleInstances?t:Wt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xl(n){return n===Wt?void 0:n}function Yl(n){return n.instantiationMode==="EAGER"}/**
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
 */class Jl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Wl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const Zl={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},tu=F.INFO,eu={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},nu=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=eu[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Po{constructor(t){this.name=t,this._logLevel=tu,this._logHandler=nu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Zl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const ru=(n,t)=>t.some(e=>n instanceof e);let Rs,Cs;function iu(){return Rs||(Rs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function su(){return Cs||(Cs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const So=new WeakMap,xr=new WeakMap,bo=new WeakMap,Sr=new WeakMap,ti=new WeakMap;function ou(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Lt(n.result)),s()},u=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&So.set(e,n)}).catch(()=>{}),ti.set(t,n),t}function au(n){if(xr.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});xr.set(n,t)}let Mr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return xr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||bo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Lt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function lu(n){Mr=n(Mr)}function uu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(br(this),t,...e);return bo.set(i,t.sort?t.sort():[t]),Lt(i)}:su().includes(n)?function(...t){return n.apply(br(this),t),Lt(So.get(this))}:function(...t){return Lt(n.apply(br(this),t))}}function cu(n){return typeof n=="function"?uu(n):(n instanceof IDBTransaction&&au(n),ru(n,iu())?new Proxy(n,Mr):n)}function Lt(n){if(n instanceof IDBRequest)return ou(n);if(Sr.has(n))return Sr.get(n);const t=cu(n);return t!==n&&(Sr.set(n,t),ti.set(t,n)),t}const br=n=>ti.get(n);function hu(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),c=Lt(u);return i&&u.addEventListener("upgradeneeded",f=>{i(Lt(u.result),f.oldVersion,f.newVersion,Lt(u.transaction),f)}),e&&u.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),c.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),c}const fu=["get","getKey","getAll","getAllKeys","count"],du=["put","add","delete","clear"],Vr=new Map;function Ps(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Vr.get(t))return Vr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=du.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||fu.includes(e)))return;const o=async function(u,...c){const f=this.transaction(u,s?"readwrite":"readonly");let p=f.store;return i&&(p=p.index(c.shift())),(await Promise.all([p[e](...c),s&&f.done]))[0]};return Vr.set(t,o),o}lu(n=>({...n,get:(t,e,i)=>Ps(t,e)||n.get(t,e,i),has:(t,e)=>!!Ps(t,e)||n.has(t,e)}));/**
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
 */class pu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(mu(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function mu(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Lr="@firebase/app",Ss="0.13.0";/**
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
 */const Nt=new Po("@firebase/app"),gu="@firebase/app-compat",_u="@firebase/analytics-compat",yu="@firebase/analytics",Eu="@firebase/app-check-compat",vu="@firebase/app-check",Tu="@firebase/auth",Iu="@firebase/auth-compat",Au="@firebase/database",wu="@firebase/data-connect",Ru="@firebase/database-compat",Cu="@firebase/functions",Pu="@firebase/functions-compat",Su="@firebase/installations",bu="@firebase/installations-compat",Vu="@firebase/messaging",Du="@firebase/messaging-compat",Nu="@firebase/performance",ku="@firebase/performance-compat",Ou="@firebase/remote-config",xu="@firebase/remote-config-compat",Mu="@firebase/storage",Lu="@firebase/storage-compat",Fu="@firebase/firestore",Uu="@firebase/ai",Bu="@firebase/firestore-compat",ju="firebase",$u="11.8.0";/**
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
 */const Fr="[DEFAULT]",zu={[Lr]:"fire-core",[gu]:"fire-core-compat",[yu]:"fire-analytics",[_u]:"fire-analytics-compat",[vu]:"fire-app-check",[Eu]:"fire-app-check-compat",[Tu]:"fire-auth",[Iu]:"fire-auth-compat",[Au]:"fire-rtdb",[wu]:"fire-data-connect",[Ru]:"fire-rtdb-compat",[Cu]:"fire-fn",[Pu]:"fire-fn-compat",[Su]:"fire-iid",[bu]:"fire-iid-compat",[Vu]:"fire-fcm",[Du]:"fire-fcm-compat",[Nu]:"fire-perf",[ku]:"fire-perf-compat",[Ou]:"fire-rc",[xu]:"fire-rc-compat",[Mu]:"fire-gcs",[Lu]:"fire-gcs-compat",[Fu]:"fire-fst",[Bu]:"fire-fst-compat",[Uu]:"fire-vertex","fire-js":"fire-js",[ju]:"fire-js-all"};/**
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
 */const xn=new Map,qu=new Map,Ur=new Map;function bs(n,t){try{n.container.addComponent(t)}catch(e){Nt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Mn(n){const t=n.name;if(Ur.has(t))return Nt.debug(`There were multiple attempts to register component ${t}.`),!1;Ur.set(t,n);for(const e of xn.values())bs(e,n);for(const e of qu.values())bs(e,n);return!0}function Hu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Gu(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ku={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new Co("app","Firebase",Ku);/**
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
 */class Qu{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Wu=$u;function Vo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Fr,automaticDataCollectionEnabled:!0},t),s=i.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});if(e||(e=Ro()),!e)throw Ft.create("no-options");const o=xn.get(s);if(o){if(On(e,o.options)&&On(i,o.config))return o;throw Ft.create("duplicate-app",{appName:s})}const u=new Jl(s);for(const f of Ur.values())u.addComponent(f);const c=new Qu(e,i,u);return xn.set(s,c),c}function Xu(n=Fr){const t=xn.get(n);if(!t&&n===Fr&&Ro())return Vo();if(!t)throw Ft.create("no-app",{appName:n});return t}function he(n,t,e){var i;let s=(i=zu[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Nt.warn(c.join(" "));return}Mn(new Ge(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Yu="firebase-heartbeat-database",Ju=1,Ke="firebase-heartbeat-store";let Dr=null;function Do(){return Dr||(Dr=hu(Yu,Ju,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ke)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ft.create("idb-open",{originalErrorMessage:n.message})})),Dr}async function Zu(n){try{const e=(await Do()).transaction(Ke),i=await e.objectStore(Ke).get(No(n));return await e.done,i}catch(t){if(t instanceof ye)Nt.warn(t.message);else{const e=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Nt.warn(e.message)}}}async function Vs(n,t){try{const i=(await Do()).transaction(Ke,"readwrite");await i.objectStore(Ke).put(t,No(n)),await i.done}catch(e){if(e instanceof ye)Nt.warn(e.message);else{const i=Ft.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(i.message)}}}function No(n){return`${n.name}!${n.options.appId}`}/**
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
 */const tc=1024,ec=30;class nc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ic(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ds();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>ec){const u=sc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Nt.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ds(),{heartbeatsToSend:i,unsentEntries:s}=rc(this._heartbeatsCache.heartbeats),o=kn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Nt.warn(e),""}}}function Ds(){return new Date().toISOString().substring(0,10)}function rc(n,t=tc){const e=[];let i=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),Ns(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ns(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class ic{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ql()?Hl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Zu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vs(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ns(n){return kn(JSON.stringify({version:2,heartbeats:n})).length}function sc(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let i=1;i<n.length;i++)n[i].date<e&&(e=n[i].date,t=i);return t}/**
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
 */function oc(n){Mn(new Ge("platform-logger",t=>new pu(t),"PRIVATE")),Mn(new Ge("heartbeat",t=>new nc(t),"PRIVATE")),he(Lr,Ss,n),he(Lr,Ss,"esm2017"),he("fire-js","")}oc("");var ac="firebase",lc="11.8.1";/**
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
 */he(ac,lc,"app");var ks=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ei;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,d){function g(){}g.prototype=d.prototype,E.D=d.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(_,y,T){for(var m=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)m[Pt-2]=arguments[Pt];return d.prototype[y].apply(_,m)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,d,g){g||(g=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(y=0;16>y;++y)_[y]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=E.g[0],g=E.g[1],y=E.g[2];var T=E.g[3],m=d+(T^g&(y^T))+_[0]+3614090360&4294967295;d=g+(m<<7&4294967295|m>>>25),m=T+(y^d&(g^y))+_[1]+3905402710&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(g^T&(d^g))+_[2]+606105819&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(d^y&(T^d))+_[3]+3250441966&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(T^g&(y^T))+_[4]+4118548399&4294967295,d=g+(m<<7&4294967295|m>>>25),m=T+(y^d&(g^y))+_[5]+1200080426&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(g^T&(d^g))+_[6]+2821735955&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(d^y&(T^d))+_[7]+4249261313&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(T^g&(y^T))+_[8]+1770035416&4294967295,d=g+(m<<7&4294967295|m>>>25),m=T+(y^d&(g^y))+_[9]+2336552879&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(g^T&(d^g))+_[10]+4294925233&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(d^y&(T^d))+_[11]+2304563134&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(T^g&(y^T))+_[12]+1804603682&4294967295,d=g+(m<<7&4294967295|m>>>25),m=T+(y^d&(g^y))+_[13]+4254626195&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(g^T&(d^g))+_[14]+2792965006&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(d^y&(T^d))+_[15]+1236535329&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(y^T&(g^y))+_[1]+4129170786&4294967295,d=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(d^g))+_[6]+3225465664&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(T^d))+_[11]+643717713&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^d&(y^T))+_[0]+3921069994&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(y^T&(g^y))+_[5]+3593408605&4294967295,d=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(d^g))+_[10]+38016083&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(T^d))+_[15]+3634488961&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^d&(y^T))+_[4]+3889429448&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(y^T&(g^y))+_[9]+568446438&4294967295,d=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(d^g))+_[14]+3275163606&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(T^d))+_[3]+4107603335&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^d&(y^T))+_[8]+1163531501&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(y^T&(g^y))+_[13]+2850285829&4294967295,d=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(d^g))+_[2]+4243563512&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(T^d))+_[7]+1735328473&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^d&(y^T))+_[12]+2368359562&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(g^y^T)+_[5]+4294588738&4294967295,d=g+(m<<4&4294967295|m>>>28),m=T+(d^g^y)+_[8]+2272392833&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^g)+_[11]+1839030562&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^d)+_[14]+4259657740&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(g^y^T)+_[1]+2763975236&4294967295,d=g+(m<<4&4294967295|m>>>28),m=T+(d^g^y)+_[4]+1272893353&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^g)+_[7]+4139469664&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^d)+_[10]+3200236656&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(g^y^T)+_[13]+681279174&4294967295,d=g+(m<<4&4294967295|m>>>28),m=T+(d^g^y)+_[0]+3936430074&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^g)+_[3]+3572445317&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^d)+_[6]+76029189&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(g^y^T)+_[9]+3654602809&4294967295,d=g+(m<<4&4294967295|m>>>28),m=T+(d^g^y)+_[12]+3873151461&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^g)+_[15]+530742520&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^d)+_[2]+3299628645&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(y^(g|~T))+_[0]+4096336452&4294967295,d=g+(m<<6&4294967295|m>>>26),m=T+(g^(d|~y))+_[7]+1126891415&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~g))+_[14]+2878612391&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~d))+_[5]+4237533241&4294967295,g=y+(m<<21&4294967295|m>>>11),m=d+(y^(g|~T))+_[12]+1700485571&4294967295,d=g+(m<<6&4294967295|m>>>26),m=T+(g^(d|~y))+_[3]+2399980690&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~g))+_[10]+4293915773&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~d))+_[1]+2240044497&4294967295,g=y+(m<<21&4294967295|m>>>11),m=d+(y^(g|~T))+_[8]+1873313359&4294967295,d=g+(m<<6&4294967295|m>>>26),m=T+(g^(d|~y))+_[15]+4264355552&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~g))+_[6]+2734768916&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~d))+_[13]+1309151649&4294967295,g=y+(m<<21&4294967295|m>>>11),m=d+(y^(g|~T))+_[4]+4149444226&4294967295,d=g+(m<<6&4294967295|m>>>26),m=T+(g^(d|~y))+_[11]+3174756917&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~g))+_[2]+718787259&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~d))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+d&4294967295,E.g[1]=E.g[1]+(y+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+T&4294967295}i.prototype.u=function(E,d){d===void 0&&(d=E.length);for(var g=d-this.blockSize,_=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=g;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<d;)if(_[y++]=E.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<d;)if(_[y++]=E[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var d=1;d<E.length-8;++d)E[d]=0;var g=8*this.o;for(d=E.length-8;d<E.length;++d)E[d]=g&255,g/=256;for(this.u(E),E=Array(16),d=g=0;4>d;++d)for(var _=0;32>_;_+=8)E[g++]=this.g[d]>>>_&255;return E};function o(E,d){var g=c;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=d(E)}function u(E,d){this.h=d;for(var g=[],_=!0,y=E.length-1;0<=y;y--){var T=E[y]|0;_&&T==d||(g[y]=T,_=!1)}this.g=g}var c={};function f(E){return-128<=E&&128>E?o(E,function(d){return new u([d|0],0>d?-1:0)}):new u([E|0],0>E?-1:0)}function p(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return N(p(-E));for(var d=[],g=1,_=0;E>=g;_++)d[_]=E/g|0,g*=4294967296;return new u(d,0)}function I(E,d){if(E.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(E.charAt(0)=="-")return N(I(E.substring(1),d));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=p(Math.pow(d,8)),_=w,y=0;y<E.length;y+=8){var T=Math.min(8,E.length-y),m=parseInt(E.substring(y,y+T),d);8>T?(T=p(Math.pow(d,T)),_=_.j(T).add(p(m))):(_=_.j(g),_=_.add(p(m)))}return _}var w=f(0),R=f(1),b=f(16777216);n=u.prototype,n.m=function(){if(O(this))return-N(this).m();for(var E=0,d=1,g=0;g<this.g.length;g++){var _=this.i(g);E+=(0<=_?_:4294967296+_)*d,d*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(O(this))return"-"+N(this).toString(E);for(var d=p(Math.pow(E,6)),g=this,_="";;){var y=Z(g,d).g;g=G(g,y.j(d));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=y,V(g))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var d=0;d<E.g.length;d++)if(E.g[d]!=0)return!1;return!0}function O(E){return E.h==-1}n.l=function(E){return E=G(this,E),O(E)?-1:V(E)?0:1};function N(E){for(var d=E.g.length,g=[],_=0;_<d;_++)g[_]=~E.g[_];return new u(g,~E.h).add(R)}n.abs=function(){return O(this)?N(this):this},n.add=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0,y=0;y<=d;y++){var T=_+(this.i(y)&65535)+(E.i(y)&65535),m=(T>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=m>>>16,T&=65535,m&=65535,g[y]=m<<16|T}return new u(g,g[g.length-1]&-2147483648?-1:0)};function G(E,d){return E.add(N(d))}n.j=function(E){if(V(this)||V(E))return w;if(O(this))return O(E)?N(this).j(N(E)):N(N(this).j(E));if(O(E))return N(this.j(N(E)));if(0>this.l(b)&&0>E.l(b))return p(this.m()*E.m());for(var d=this.g.length+E.g.length,g=[],_=0;_<2*d;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var T=this.i(_)>>>16,m=this.i(_)&65535,Pt=E.i(y)>>>16,Te=E.i(y)&65535;g[2*_+2*y]+=m*Te,j(g,2*_+2*y),g[2*_+2*y+1]+=T*Te,j(g,2*_+2*y+1),g[2*_+2*y+1]+=m*Pt,j(g,2*_+2*y+1),g[2*_+2*y+2]+=T*Pt,j(g,2*_+2*y+2)}for(_=0;_<d;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=d;_<2*d;_++)g[_]=0;return new u(g,0)};function j(E,d){for(;(E[d]&65535)!=E[d];)E[d+1]+=E[d]>>>16,E[d]&=65535,d++}function z(E,d){this.g=E,this.h=d}function Z(E,d){if(V(d))throw Error("division by zero");if(V(E))return new z(w,w);if(O(E))return d=Z(N(E),d),new z(N(d.g),N(d.h));if(O(d))return d=Z(E,N(d)),new z(N(d.g),d.h);if(30<E.g.length){if(O(E)||O(d))throw Error("slowDivide_ only works with positive integers.");for(var g=R,_=d;0>=_.l(E);)g=qt(g),_=qt(_);var y=gt(g,1),T=gt(_,1);for(_=gt(_,2),g=gt(g,2);!V(_);){var m=T.add(_);0>=m.l(E)&&(y=y.add(g),T=m),_=gt(_,1),g=gt(g,1)}return d=G(E,y.j(d)),new z(y,d)}for(y=w;0<=E.l(d);){for(g=Math.max(1,Math.floor(E.m()/d.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=p(g),m=T.j(d);O(m)||0<m.l(E);)g-=_,T=p(g),m=T.j(d);V(T)&&(T=R),y=y.add(T),E=G(E,m)}return new z(y,E)}n.A=function(E){return Z(this,E).h},n.and=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)&E.i(_);return new u(g,this.h&E.h)},n.or=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)|E.i(_);return new u(g,this.h|E.h)},n.xor=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)^E.i(_);return new u(g,this.h^E.h)};function qt(E){for(var d=E.g.length+1,g=[],_=0;_<d;_++)g[_]=E.i(_)<<1|E.i(_-1)>>>31;return new u(g,E.h)}function gt(E,d){var g=d>>5;d%=32;for(var _=E.g.length-g,y=[],T=0;T<_;T++)y[T]=0<d?E.i(T+g)>>>d|E.i(T+g+1)<<32-d:E.i(T+g);return new u(y,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=p,u.fromString=I,ei=u}).apply(typeof ks<"u"?ks:typeof self<"u"?self:typeof window<"u"?window:{});var wn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ko,Ue,Oo,bn,Br,xo,Mo,Lo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,l){return r==Array.prototype||r==Object.prototype||(r[a]=l.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof wn=="object"&&wn];for(var a=0;a<r.length;++a){var l=r[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var l=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var v=r[h];if(!(v in l))break t;l=l[v]}r=r[r.length-1],h=l[r],a=a(h),a!=h&&a!=null&&t(l,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var l=0,h=!1,v={next:function(){if(!h&&l<r.length){var A=l++;return{value:a(A,r[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function f(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function p(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,l){return r.call.apply(r.bind,arguments)}function w(r,a,l){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),r.apply(a,v)}}return function(){return r.apply(a,arguments)}}function R(r,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:w,R.apply(null,arguments)}function b(r,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function V(r,a){function l(){}l.prototype=a.prototype,r.aa=a.prototype,r.prototype=new l,r.prototype.constructor=r,r.Qb=function(h,v,A){for(var S=Array(arguments.length-2),$=2;$<arguments.length;$++)S[$-2]=arguments[$];return a.prototype[v].apply(h,S)}}function O(r){const a=r.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=r[h];return l}return[]}function N(r,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(f(h)){const v=r.length||0,A=h.length||0;r.length=v+A;for(let S=0;S<A;S++)r[v+S]=h[S]}else r.push(h)}}class G{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function j(r){return/^[\s\xa0]*$/.test(r)}function z(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function Z(r){return Z[" "](r),r}Z[" "]=function(){};var qt=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function gt(r,a,l){for(const h in r)a.call(l,r[h],h,r)}function E(r,a){for(const l in r)a.call(void 0,r[l],l,r)}function d(r){const a={};for(const l in r)a[l]=r[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let l,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(l in h)r[l]=h[l];for(let A=0;A<g.length;A++)l=g[A],Object.prototype.hasOwnProperty.call(h,l)&&(r[l]=h[l])}}function y(r){var a=1;r=r.split(":");const l=[];for(;0<a&&r.length;)l.push(r.shift()),a--;return r.length&&l.push(r.join(":")),l}function T(r){c.setTimeout(()=>{throw r},0)}function m(){var r=ir;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class Pt{constructor(){this.h=this.g=null}add(a,l){const h=Te.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var Te=new G(()=>new za,r=>r.reset());class za{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,Ae=!1,ir=new Pt,Ii=()=>{const r=c.Promise.resolve(void 0);Ie=()=>{r.then(qa)}};var qa=()=>{for(var r;r=m();){try{r.h.call(r.g)}catch(l){T(l)}var a=Te;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}Ae=!1};function kt(){this.s=this.s,this.C=this.C}kt.prototype.s=!1,kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function at(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var Ha=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return r}();function we(r,a){if(at.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var l=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(qt){t:{try{Z(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=r.fromElement:l=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Ga[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&we.aa.h.call(this)}}V(we,at);var Ga={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),Ka=0;function Qa(r,a,l,h,v){this.listener=r,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=v,this.key=++Ka,this.da=this.fa=!1}function on(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function an(r){this.src=r,this.g={},this.h=0}an.prototype.add=function(r,a,l,h,v){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var S=or(r,a,h,v);return-1<S?(a=r[S],l||(a.fa=!1)):(a=new Qa(a,this.src,A,!!h,v),a.fa=l,r.push(a)),a};function sr(r,a){var l=a.type;if(l in r.g){var h=r.g[l],v=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=v)&&Array.prototype.splice.call(h,v,1),A&&(on(a),r.g[l].length==0&&(delete r.g[l],r.h--))}}function or(r,a,l,h){for(var v=0;v<r.length;++v){var A=r[v];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==h)return v}return-1}var ar="closure_lm_"+(1e6*Math.random()|0),lr={};function Ai(r,a,l,h,v){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Ai(r,a[A],l,h,v);return null}return l=Ci(l),r&&r[sn]?r.K(a,l,p(h)?!!h.capture:!!h,v):Wa(r,a,l,!1,h,v)}function Wa(r,a,l,h,v,A){if(!a)throw Error("Invalid event type");var S=p(v)?!!v.capture:!!v,$=cr(r);if($||(r[ar]=$=new an(r)),l=$.add(a,l,h,S,A),l.proxy)return l;if(h=Xa(),l.proxy=h,h.src=r,h.listener=l,r.addEventListener)Ha||(v=S),v===void 0&&(v=!1),r.addEventListener(a.toString(),h,v);else if(r.attachEvent)r.attachEvent(Ri(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Xa(){function r(l){return a.call(r.src,r.listener,l)}const a=Ya;return r}function wi(r,a,l,h,v){if(Array.isArray(a))for(var A=0;A<a.length;A++)wi(r,a[A],l,h,v);else h=p(h)?!!h.capture:!!h,l=Ci(l),r&&r[sn]?(r=r.i,a=String(a).toString(),a in r.g&&(A=r.g[a],l=or(A,l,h,v),-1<l&&(on(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete r.g[a],r.h--)))):r&&(r=cr(r))&&(a=r.g[a.toString()],r=-1,a&&(r=or(a,l,h,v)),(l=-1<r?a[r]:null)&&ur(l))}function ur(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[sn])sr(a.i,r);else{var l=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(l,h,r.capture):a.detachEvent?a.detachEvent(Ri(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=cr(a))?(sr(l,r),l.h==0&&(l.src=null,a[ar]=null)):on(r)}}}function Ri(r){return r in lr?lr[r]:lr[r]="on"+r}function Ya(r,a){if(r.da)r=!0;else{a=new we(a,this);var l=r.listener,h=r.ha||r.src;r.fa&&ur(r),r=l.call(h,a)}return r}function cr(r){return r=r[ar],r instanceof an?r:null}var hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ci(r){return typeof r=="function"?r:(r[hr]||(r[hr]=function(a){return r.handleEvent(a)}),r[hr])}function lt(){kt.call(this),this.i=new an(this),this.M=this,this.F=null}V(lt,kt),lt.prototype[sn]=!0,lt.prototype.removeEventListener=function(r,a,l,h){wi(this,r,a,l,h)};function pt(r,a){var l,h=r.F;if(h)for(l=[];h;h=h.F)l.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new at(a,r);else if(a instanceof at)a.target=a.target||r;else{var v=a;a=new at(h,r),_(a,v)}if(v=!0,l)for(var A=l.length-1;0<=A;A--){var S=a.g=l[A];v=ln(S,h,!0,a)&&v}if(S=a.g=r,v=ln(S,h,!0,a)&&v,v=ln(S,h,!1,a)&&v,l)for(A=0;A<l.length;A++)S=a.g=l[A],v=ln(S,h,!1,a)&&v}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var l=r.g[a],h=0;h<l.length;h++)on(l[h]);delete r.g[a],r.h--}}this.F=null},lt.prototype.K=function(r,a,l,h){return this.i.add(String(r),a,!1,l,h)},lt.prototype.L=function(r,a,l,h){return this.i.add(String(r),a,!0,l,h)};function ln(r,a,l,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,A=0;A<a.length;++A){var S=a[A];if(S&&!S.da&&S.capture==l){var $=S.listener,nt=S.ha||S.src;S.fa&&sr(r.i,S),v=$.call(nt,h)!==!1&&v}}return v&&!h.defaultPrevented}function Pi(r,a,l){if(typeof r=="function")l&&(r=R(r,l));else if(r&&typeof r.handleEvent=="function")r=R(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function Si(r){r.g=Pi(()=>{r.g=null,r.i&&(r.i=!1,Si(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class Ja extends kt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Si(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Re(r){kt.call(this),this.h=r,this.g={}}V(Re,kt);var bi=[];function Vi(r){gt(r.g,function(a,l){this.g.hasOwnProperty(l)&&ur(a)},r),r.g={}}Re.prototype.N=function(){Re.aa.N.call(this),Vi(this)},Re.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fr=c.JSON.stringify,Za=c.JSON.parse,tl=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function dr(){}dr.prototype.h=null;function Di(r){return r.h||(r.h=r.i())}function Ni(){}var Ce={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pr(){at.call(this,"d")}V(pr,at);function mr(){at.call(this,"c")}V(mr,at);var Ht={},ki=null;function un(){return ki=ki||new lt}Ht.La="serverreachability";function Oi(r){at.call(this,Ht.La,r)}V(Oi,at);function Pe(r){const a=un();pt(a,new Oi(a))}Ht.STAT_EVENT="statevent";function xi(r,a){at.call(this,Ht.STAT_EVENT,r),this.stat=a}V(xi,at);function mt(r){const a=un();pt(a,new xi(a,r))}Ht.Ma="timingevent";function Mi(r,a){at.call(this,Ht.Ma,r),this.size=a}V(Mi,at);function Se(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function be(){this.g=!0}be.prototype.xa=function(){this.g=!1};function el(r,a,l,h,v,A){r.info(function(){if(r.g)if(A)for(var S="",$=A.split("&"),nt=0;nt<$.length;nt++){var B=$[nt].split("=");if(1<B.length){var ut=B[0];B=B[1];var ct=ut.split("_");S=2<=ct.length&&ct[1]=="type"?S+(ut+"="+B+"&"):S+(ut+"=redacted&")}}else S=null;else S=A;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+l+`
`+S})}function nl(r,a,l,h,v,A,S){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+l+`
`+A+" "+S})}function se(r,a,l,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+il(r,l)+(h?" "+h:"")})}function rl(r,a){r.info(function(){return"TIMEOUT: "+a})}be.prototype.info=function(){};function il(r,a){if(!r.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(r=0;r<l.length;r++)if(Array.isArray(l[r])){var h=l[r];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var S=1;S<v.length;S++)v[S]=""}}}}return fr(l)}catch{return a}}var cn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Li={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gr;function hn(){}V(hn,dr),hn.prototype.g=function(){return new XMLHttpRequest},hn.prototype.i=function(){return{}},gr=new hn;function Ot(r,a,l,h){this.j=r,this.i=a,this.l=l,this.R=h||1,this.U=new Re(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fi}function Fi(){this.i=null,this.g="",this.h=!1}var Ui={},_r={};function yr(r,a,l){r.L=1,r.v=mn(St(a)),r.m=l,r.P=!0,Bi(r,null)}function Bi(r,a){r.F=Date.now(),fn(r),r.A=St(r.v);var l=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),ts(l.i,"t",h),r.C=0,l=r.j.J,r.h=new Fi,r.g=ys(r.j,l?a:null,!r.m),0<r.O&&(r.M=new Ja(R(r.Y,r,r.g),r.O)),a=r.U,l=r.g,h=r.ca;var v="readystatechange";Array.isArray(v)||(v&&(bi[0]=v.toString()),v=bi);for(var A=0;A<v.length;A++){var S=Ai(l,v[A],h||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Pe(),el(r.i,r.u,r.A,r.l,r.R,r.m)}Ot.prototype.ca=function(r){r=r.target;const a=this.M;a&&bt(r)==3?a.j():this.Y(r)},Ot.prototype.Y=function(r){try{if(r==this.g)t:{const ct=bt(this.g);var a=this.g.Ba();const le=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||as(this.g)))){this.J||ct!=4||a==7||(a==8||0>=le?Pe(3):Pe(2)),Er(this);var l=this.g.Z();this.X=l;e:if(ji(this)){var h=as(this.g);r="";var v=h.length,A=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),Ve(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(A&&a==v-1)});h.length=0,this.h.g+=r,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,nl(this.i,this.u,this.A,this.l,this.R,ct,l),this.o){if(this.T&&!this.K){e:{if(this.g){var $,nt=this.g;if(($=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j($)){var B=$;break e}}B=null}if(l=B)se(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vr(this,l);else{this.o=!1,this.s=3,mt(12),Gt(this),Ve(this);break t}}if(this.P){l=!0;let vt;for(;!this.J&&this.C<S.length;)if(vt=sl(this,S),vt==_r){ct==4&&(this.s=4,mt(14),l=!1),se(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==Ui){this.s=4,mt(15),se(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else se(this.i,this.l,vt,null),vr(this,vt);if(ji(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||S.length!=0||this.h.h||(this.s=1,mt(16),l=!1),this.o=this.o&&l,!l)se(this.i,this.l,S,"[Invalid Chunked Response]"),Gt(this),Ve(this);else if(0<S.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Cr(ut),ut.M=!0,mt(11))}}else se(this.i,this.l,S,null),vr(this,S);ct==4&&Gt(this),this.o&&!this.J&&(ct==4?ps(this.j,this):(this.o=!1,fn(this)))}else Il(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Gt(this),Ve(this)}}}catch{}finally{}};function ji(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function sl(r,a){var l=r.C,h=a.indexOf(`
`,l);return h==-1?_r:(l=Number(a.substring(l,h)),isNaN(l)?Ui:(h+=1,h+l>a.length?_r:(a=a.slice(h,h+l),r.C=h+l,a)))}Ot.prototype.cancel=function(){this.J=!0,Gt(this)};function fn(r){r.S=Date.now()+r.I,$i(r,r.I)}function $i(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Se(R(r.ba,r),a)}function Er(r){r.B&&(c.clearTimeout(r.B),r.B=null)}Ot.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(rl(this.i,this.A),this.L!=2&&(Pe(),mt(17)),Gt(this),this.s=2,Ve(this)):$i(this,this.S-r)};function Ve(r){r.j.G==0||r.J||ps(r.j,r)}function Gt(r){Er(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,Vi(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function vr(r,a){try{var l=r.j;if(l.G!=0&&(l.g==r||Tr(l.h,r))){if(!r.K&&Tr(l.h,r)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<r.F)Tn(l),En(l);else break t;Rr(l),mt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Se(R(l.Za,l),6e3));if(1>=Hi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Qt(l,11)}else if((r.K||l.g==r)&&Tn(l),!j(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let B=v[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const ut=B[3];ut!=null&&(l.la=ut,l.j.info("VER="+l.la));const ct=B[4];ct!=null&&(l.Aa=ct,l.j.info("SVER="+l.Aa));const le=B[5];le!=null&&typeof le=="number"&&0<le&&(h=1.5*le,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const vt=r.g;if(vt){const An=vt.g?vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(An){var A=h.h;A.g||An.indexOf("spdy")==-1&&An.indexOf("quic")==-1&&An.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Ir(A,A.h),A.h=null))}if(h.D){const Pr=vt.g?vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Pr&&(h.ya=Pr,H(h.I,h.D,Pr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-r.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var S=r;if(h.qa=_s(h,h.J?h.ia:null,h.W),S.K){Gi(h.h,S);var $=S,nt=h.L;nt&&($.I=nt),$.B&&(Er($),fn($)),h.g=S}else fs(h);0<l.i.length&&vn(l)}else B[0]!="stop"&&B[0]!="close"||Qt(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Qt(l,7):wr(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}Pe(4)}catch{}}var ol=class{constructor(r,a){this.g=r,this.map=a}};function zi(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qi(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Hi(r){return r.h?1:r.g?r.g.size:0}function Tr(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function Ir(r,a){r.g?r.g.add(a):r.h=a}function Gi(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}zi.prototype.cancel=function(){if(this.i=Ki(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Ki(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const l of r.g.values())a=a.concat(l.D);return a}return O(r.i)}function al(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(f(r)){for(var a=[],l=r.length,h=0;h<l;h++)a.push(r[h]);return a}a=[],l=0;for(h in r)a[l++]=r[h];return a}function ll(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(f(r)||typeof r=="string"){var a=[];r=r.length;for(var l=0;l<r;l++)a.push(l);return a}a=[],l=0;for(const h in r)a[l++]=h;return a}}}function Qi(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(f(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var l=ll(r),h=al(r),v=h.length,A=0;A<v;A++)a.call(void 0,h[A],l&&l[A],r)}var Wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ul(r,a){if(r){r=r.split("&");for(var l=0;l<r.length;l++){var h=r[l].indexOf("="),v=null;if(0<=h){var A=r[l].substring(0,h);v=r[l].substring(h+1)}else A=r[l];a(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Kt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Kt){this.h=r.h,dn(this,r.j),this.o=r.o,this.g=r.g,pn(this,r.s),this.l=r.l;var a=r.i,l=new ke;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Xi(this,l),this.m=r.m}else r&&(a=String(r).match(Wi))?(this.h=!1,dn(this,a[1]||"",!0),this.o=De(a[2]||""),this.g=De(a[3]||"",!0),pn(this,a[4]),this.l=De(a[5]||"",!0),Xi(this,a[6]||"",!0),this.m=De(a[7]||"")):(this.h=!1,this.i=new ke(null,this.h))}Kt.prototype.toString=function(){var r=[],a=this.j;a&&r.push(Ne(a,Yi,!0),":");var l=this.g;return(l||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Ne(a,Yi,!0),"@"),r.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&r.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&r.push("/"),r.push(Ne(l,l.charAt(0)=="/"?fl:hl,!0))),(l=this.i.toString())&&r.push("?",l),(l=this.m)&&r.push("#",Ne(l,pl)),r.join("")};function St(r){return new Kt(r)}function dn(r,a,l){r.j=l?De(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function pn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function Xi(r,a,l){a instanceof ke?(r.i=a,ml(r.i,r.h)):(l||(a=Ne(a,dl)),r.i=new ke(a,r.h))}function H(r,a,l){r.i.set(a,l)}function mn(r){return H(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function De(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ne(r,a,l){return typeof r=="string"?(r=encodeURI(r).replace(a,cl),l&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function cl(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Yi=/[#\/\?@]/g,hl=/[#\?:]/g,fl=/[#\?]/g,dl=/[#\?@]/g,pl=/#/g;function ke(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function xt(r){r.g||(r.g=new Map,r.h=0,r.i&&ul(r.i,function(a,l){r.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=ke.prototype,n.add=function(r,a){xt(this),this.i=null,r=oe(this,r);var l=this.g.get(r);return l||this.g.set(r,l=[]),l.push(a),this.h+=1,this};function Ji(r,a){xt(r),a=oe(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function Zi(r,a){return xt(r),a=oe(r,a),r.g.has(a)}n.forEach=function(r,a){xt(this),this.g.forEach(function(l,h){l.forEach(function(v){r.call(a,v,h,this)},this)},this)},n.na=function(){xt(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const v=r[h];for(let A=0;A<v.length;A++)l.push(a[h])}return l},n.V=function(r){xt(this);let a=[];if(typeof r=="string")Zi(this,r)&&(a=a.concat(this.g.get(oe(this,r))));else{r=Array.from(this.g.values());for(let l=0;l<r.length;l++)a=a.concat(r[l])}return a},n.set=function(r,a){return xt(this),this.i=null,r=oe(this,r),Zi(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function ts(r,a,l){Ji(r,a),0<l.length&&(r.i=null,r.g.set(oe(r,a),O(l)),r.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const A=encodeURIComponent(String(h)),S=this.V(h);for(h=0;h<S.length;h++){var v=A;S[h]!==""&&(v+="="+encodeURIComponent(String(S[h]))),r.push(v)}}return this.i=r.join("&")};function oe(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function ml(r,a){a&&!r.j&&(xt(r),r.i=null,r.g.forEach(function(l,h){var v=h.toLowerCase();h!=v&&(Ji(this,h),ts(this,v,l))},r)),r.j=a}function gl(r,a){const l=new be;if(c.Image){const h=new Image;h.onload=b(Mt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=b(Mt,l,"TestLoadImage: error",!1,a,h),h.onabort=b(Mt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=b(Mt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function _l(r,a){const l=new be,h=new AbortController,v=setTimeout(()=>{h.abort(),Mt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(A=>{clearTimeout(v),A.ok?Mt(l,"TestPingServer: ok",!0,a):Mt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Mt(l,"TestPingServer: error",!1,a)})}function Mt(r,a,l,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(l)}catch{}}function yl(){this.g=new tl}function El(r,a,l){const h=l||"";try{Qi(r,function(v,A){let S=v;p(v)&&(S=fr(v)),a.push(h+A+"="+encodeURIComponent(S))})}catch(v){throw a.push(h+"type="+encodeURIComponent("_badmap")),v}}function gn(r){this.l=r.Ub||null,this.j=r.eb||!1}V(gn,dr),gn.prototype.g=function(){return new _n(this.l,this.j)},gn.prototype.i=function(r){return function(){return r}}({});function _n(r,a){lt.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(_n,lt),n=_n.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,xe(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oe(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,xe(this)),this.g&&(this.readyState=3,xe(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;es(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function es(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?Oe(this):xe(this),this.readyState==3&&es(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Oe(this))},n.Qa=function(r){this.g&&(this.response=r,Oe(this))},n.ga=function(){this.g&&Oe(this)};function Oe(r){r.readyState=4,r.l=null,r.j=null,r.v=null,xe(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,r.push(l[0]+": "+l[1]),l=a.next();return r.join(`\r
`)};function xe(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(_n.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function ns(r){let a="";return gt(r,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function Ar(r,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=ns(l),typeof r=="string"?l!=null&&encodeURIComponent(String(l)):H(r,a,l))}function Q(r){lt.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Q,lt);var vl=/^https?$/i,Tl=["POST","PUT"];n=Q.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gr.g(),this.v=this.o?Di(this.o):Di(gr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(A){rs(this,A);return}if(r=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)l.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())l.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),v=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Tl,a,void 0))||h||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,S]of l)this.g.setRequestHeader(A,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{os(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){rs(this,A)}};function rs(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,is(r),yn(r)}function is(r){r.A||(r.A=!0,pt(r,"complete"),pt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,pt(this,"complete"),pt(this,"abort"),yn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),Q.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ss(this):this.bb())},n.bb=function(){ss(this)};function ss(r){if(r.h&&typeof u<"u"&&(!r.v[1]||bt(r)!=4||r.Z()!=2)){if(r.u&&bt(r)==4)Pi(r.Ea,0,r);else if(pt(r,"readystatechange"),bt(r)==4){r.h=!1;try{const S=r.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=S===0){var v=String(r.D).match(Wi)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),h=!vl.test(v?v.toLowerCase():"")}l=h}if(l)pt(r,"complete"),pt(r,"success");else{r.m=6;try{var A=2<bt(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",is(r)}}finally{yn(r)}}}}function yn(r,a){if(r.g){os(r);const l=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||pt(r,"ready");try{l.onreadystatechange=h}catch{}}}function os(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function bt(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),Za(a)}};function as(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Il(r){const a={};r=(r.g&&2<=bt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(j(r[h]))continue;var l=y(r[h]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[v]||[];a[v]=A,A.push(l)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Me(r,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[r]||a}function ls(r){this.Aa=0,this.i=[],this.j=new be,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Me("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Me("baseRetryDelayMs",5e3,r),this.cb=Me("retryDelaySeedMs",1e4,r),this.Wa=Me("forwardChannelMaxRetries",2,r),this.wa=Me("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new zi(r&&r.concurrentRequestLimit),this.Da=new yl,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ls.prototype,n.la=8,n.G=1,n.connect=function(r,a,l,h){mt(0),this.W=r,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=_s(this,null,this.W),vn(this)};function wr(r){if(us(r),r.G==3){var a=r.U++,l=St(r.I);if(H(l,"SID",r.K),H(l,"RID",a),H(l,"TYPE","terminate"),Le(r,l),a=new Ot(r,r.j,a),a.L=2,a.v=mn(St(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=ys(a.j,null),a.g.ea(a.v)),a.F=Date.now(),fn(a)}gs(r)}function En(r){r.g&&(Cr(r),r.g.cancel(),r.g=null)}function us(r){En(r),r.u&&(c.clearTimeout(r.u),r.u=null),Tn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function vn(r){if(!qi(r.h)&&!r.s){r.s=!0;var a=r.Ga;Ie||Ii(),Ae||(Ie(),Ae=!0),ir.add(a,r),r.B=0}}function Al(r,a){return Hi(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Se(R(r.Ga,r,a),ms(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const v=new Ot(this,this.j,r);let A=this.o;if(this.S&&(A?(A=d(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=hs(this,v,a),l=St(this.I),H(l,"RID",r),H(l,"CVER",22),this.D&&H(l,"X-HTTP-Session-Id",this.D),Le(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(ns(A)))+"&"+a:this.m&&Ar(l,this.m,A)),Ir(this.h,v),this.Ua&&H(l,"TYPE","init"),this.P?(H(l,"$req",a),H(l,"SID","null"),v.T=!0,yr(v,l,null)):yr(v,l,a),this.G=2}}else this.G==3&&(r?cs(this,r):this.i.length==0||qi(this.h)||cs(this))};function cs(r,a){var l;a?l=a.l:l=r.U++;const h=St(r.I);H(h,"SID",r.K),H(h,"RID",l),H(h,"AID",r.T),Le(r,h),r.m&&r.o&&Ar(h,r.m,r.o),l=new Ot(r,r.j,l,r.B+1),r.m===null&&(l.H=r.o),a&&(r.i=a.D.concat(r.i)),a=hs(r,l,1e3),l.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Ir(r.h,l),yr(l,h,a)}function Le(r,a){r.H&&gt(r.H,function(l,h){H(a,h,l)}),r.l&&Qi({},function(l,h){H(a,h,l)})}function hs(r,a,l){l=Math.min(r.i.length,l);var h=r.l?R(r.l.Na,r.l,r):null;t:{var v=r.i;let A=-1;for(;;){const S=["count="+l];A==-1?0<l?(A=v[0].g,S.push("ofs="+A)):A=0:S.push("ofs="+A);let $=!0;for(let nt=0;nt<l;nt++){let B=v[nt].g;const ut=v[nt].map;if(B-=A,0>B)A=Math.max(0,v[nt].g-100),$=!1;else try{El(ut,S,"req"+B+"_")}catch{h&&h(ut)}}if($){h=S.join("&");break t}}}return r=r.i.splice(0,l),a.D=r,h}function fs(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;Ie||Ii(),Ae||(Ie(),Ae=!0),ir.add(a,r),r.v=0}}function Rr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Se(R(r.Fa,r),ms(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,ds(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Se(R(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),En(this),ds(this))};function Cr(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function ds(r){r.g=new Ot(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=St(r.qa);H(a,"RID","rpc"),H(a,"SID",r.K),H(a,"AID",r.T),H(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&H(a,"TO",r.ja),H(a,"TYPE","xmlhttp"),Le(r,a),r.m&&r.o&&Ar(a,r.m,r.o),r.L&&(r.g.I=r.L);var l=r.g;r=r.ia,l.L=1,l.v=mn(St(a)),l.m=null,l.P=!0,Bi(l,r)}n.Za=function(){this.C!=null&&(this.C=null,En(this),Rr(this),mt(19))};function Tn(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function ps(r,a){var l=null;if(r.g==a){Tn(r),Cr(r),r.g=null;var h=2}else if(Tr(r.h,a))l=a.D,Gi(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=r.B;h=un(),pt(h,new Mi(h,l)),vn(r)}else fs(r);else if(v=a.s,v==3||v==0&&0<a.X||!(h==1&&Al(r,a)||h==2&&Rr(r)))switch(l&&0<l.length&&(a=r.h,a.i=a.i.concat(l)),v){case 1:Qt(r,5);break;case 4:Qt(r,10);break;case 3:Qt(r,6);break;default:Qt(r,2)}}}function ms(r,a){let l=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(l*=2),l*a}function Qt(r,a){if(r.j.info("Error code "+a),a==2){var l=R(r.fb,r),h=r.Xa;const v=!h;h=new Kt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||dn(h,"https"),mn(h),v?gl(h.toString(),l):_l(h.toString(),l)}else mt(2);r.G=0,r.l&&r.l.sa(a),gs(r),us(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function gs(r){if(r.G=0,r.ka=[],r.l){const a=Ki(r.h);(a.length!=0||r.i.length!=0)&&(N(r.ka,a),N(r.ka,r.i),r.h.i.length=0,O(r.i),r.i.length=0),r.l.ra()}}function _s(r,a,l){var h=l instanceof Kt?St(l):new Kt(l);if(h.g!="")a&&(h.g=a+"."+h.g),pn(h,h.s);else{var v=c.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var A=new Kt(null);h&&dn(A,h),a&&(A.g=a),v&&pn(A,v),l&&(A.l=l),h=A}return l=r.D,a=r.ya,l&&a&&H(h,l,a),H(h,"VER",r.la),Le(r,h),h}function ys(r,a,l){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new Q(new gn({eb:l})):new Q(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Es(){}n=Es.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function In(){}In.prototype.g=function(r,a){return new Et(r,a)};function Et(r,a){lt.call(this),this.g=new ls(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!j(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!j(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new ae(this)}V(Et,lt),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){wr(this.g)},Et.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var l={};l.__data__=r,r=l}else this.u&&(l={},l.__data__=fr(r),r=l);a.i.push(new ol(a.Ya++,r)),a.G==3&&vn(a)},Et.prototype.N=function(){this.g.l=null,delete this.j,wr(this.g),delete this.g,Et.aa.N.call(this)};function vs(r){pr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const l in a){r=l;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}V(vs,pr);function Ts(){mr.call(this),this.status=1}V(Ts,mr);function ae(r){this.g=r}V(ae,Es),ae.prototype.ua=function(){pt(this.g,"a")},ae.prototype.ta=function(r){pt(this.g,new vs(r))},ae.prototype.sa=function(r){pt(this.g,new Ts)},ae.prototype.ra=function(){pt(this.g,"b")},In.prototype.createWebChannel=In.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Lo=function(){return new In},Mo=function(){return un()},xo=Ht,Br={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},cn.NO_ERROR=0,cn.TIMEOUT=8,cn.HTTP_ERROR=6,bn=cn,Li.COMPLETE="complete",Oo=Li,Ni.EventType=Ce,Ce.OPEN="a",Ce.CLOSE="b",Ce.ERROR="c",Ce.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Ue=Ni,Q.prototype.listenOnce=Q.prototype.L,Q.prototype.getLastError=Q.prototype.Ka,Q.prototype.getLastErrorCode=Q.prototype.Ba,Q.prototype.getStatus=Q.prototype.Z,Q.prototype.getResponseJson=Q.prototype.Oa,Q.prototype.getResponseText=Q.prototype.oa,Q.prototype.send=Q.prototype.ea,Q.prototype.setWithCredentials=Q.prototype.Ha,ko=Q}).apply(typeof wn<"u"?wn:typeof self<"u"?self:typeof window<"u"?window:{});const Os="@firebase/firestore",xs="4.7.16";/**
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
 */class ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let Ee="11.8.1";/**
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
 */const Zt=new Po("@firebase/firestore");function ue(){return Zt.logLevel}function D(n,...t){if(Zt.logLevel<=F.DEBUG){const e=t.map(ni);Zt.debug(`Firestore (${Ee}): ${n}`,...e)}}function te(n,...t){if(Zt.logLevel<=F.ERROR){const e=t.map(ni);Zt.error(`Firestore (${Ee}): ${n}`,...e)}}function Wn(n,...t){if(Zt.logLevel<=F.WARN){const e=t.map(ni);Zt.warn(`Firestore (${Ee}): ${n}`,...e)}}function ni(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function M(n,t,e){let i="Unexpected state";typeof t=="string"?i=t:e=t,Fo(n,i,e)}function Fo(n,t,e){let i=`FIRESTORE (${Ee}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{i+=" CONTEXT: "+JSON.stringify(e)}catch{i+=" CONTEXT: "+e}throw te(i),new Error(i)}function X(n,t,e,i){let s="Unexpected state";typeof e=="string"?s=e:i=e,n||Fo(t,s,i)}function q(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends ye{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Uo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class uc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ft.UNAUTHENTICATED))}shutdown(){}}class cc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class hc{constructor(t){this.t=t,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0,42304);let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let o=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Yt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Yt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(X(typeof i.accessToken=="string",31837,{l:i}),new Uo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string",2055,{h:t}),new ft(t)}}class fc{constructor(t,e,i){this.P=t,this.T=e,this.I=i,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class dc{constructor(t,e,i){this.P=t,this.T=e,this.I=i}getToken(){return Promise.resolve(new fc(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ms{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pc{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gu(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){X(this.o===void 0,3512);const i=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ms(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ms(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function mc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */function gc(){return new TextEncoder}/**
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
 */class Bo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=mc(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%62))}return i}}function U(n,t){return n<t?-1:n>t?1:0}function jr(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=n.codePointAt(e),s=t.codePointAt(e);if(i!==s){if(i<128&&s<128)return U(i,s);{const o=gc(),u=_c(o.encode(Ls(n,e)),o.encode(Ls(t,e)));return u!==0?u:U(i,s)}}e+=i>65535?2:1}return U(n.length,t.length)}function Ls(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function _c(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return U(n[e],t[e]);return U(n.length,t.length)}function de(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
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
 */const Fs=-62135596800,Us=1e6;class J{static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor((t-1e3*e)*Us);return new J(e,i)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Fs)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Us}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Fs;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class K{static fromTimestamp(t){return new K(t)}static min(){return new K(new J(0,0))}static max(){return new K(new J(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Bs="__name__";class wt{constructor(t,e,i){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),i===void 0?i=t.length-e:i>t.length-e&&M(1746,{length:i,range:t.length-e}),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return wt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof wt?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=wt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const i=wt.isNumericId(t),s=wt.isNumericId(e);return i&&!s?-1:!i&&s?1:i&&s?wt.extractNumericId(t).compare(wt.extractNumericId(e)):jr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ei.fromString(t.substring(4,t.length-2))}}class W extends wt{construct(t,e,i){return new W(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new W(e)}static emptyPath(){return new W([])}}const yc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends wt{construct(t,e,i){return new st(t,e,i)}static isValidIdentifier(t){return yc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bs}static keyField(){return new st([Bs])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new k(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new k(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(i+=c,s++):(o(),s++)}if(o(),u)throw new k(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new st(e)}static emptyPath(){return new st([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(W.fromString(t))}static fromName(t){return new x(W.fromString(t).popFirst(5))}static empty(){return new x(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new W(t.slice()))}}/**
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
 */const Qe=-1;function Ec(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(i===1e9?new J(e+1,0):new J(e,i));return new Bt(s,x.empty(),t)}function vc(n){return new Bt(n.readTime,n.key,Qe)}class Bt{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Bt(K.min(),x.empty(),Qe)}static max(){return new Bt(K.max(),x.empty(),Qe)}}function Tc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
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
 */const Ic="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ac{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ri(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Ic)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,i)=>{e(t)})}static reject(t){return new C((e,i)=>{i(t)})}static waitFor(t){return new C((e,i)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},f=>i(f))}),u=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const i of t)e=e.next(s=>s?C.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new C((i,s)=>{const o=t.length,u=new Array(o);let c=0;for(let f=0;f<o;f++){const p=f;e(t[p]).next(I=>{u[p]=I,++c,c===o&&i(u)},I=>s(I))}})}static doWhile(t,e){return new C((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function wc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ze(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ii{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ue(i),this.ce=i=>e.writeSequenceNumber(i))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}ii.le=-1;/**
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
 */const si=-1;function oi(n){return n==null}function Ln(n){return n===0&&1/n==-1/0}function Rc(n){return typeof n=="number"&&Number.isInteger(n)&&!Ln(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const jo="";function Cc(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=js(t)),t=Pc(n.get(e),t);return js(t)}function Pc(n,t){let e=t;const i=n.length;for(let s=0;s<i;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case jo:e+="";break;default:e+=o}}return e}function js(n){return n+jo+""}/**
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
 */function $s(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ve(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function $o(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class yt{constructor(t,e){this.comparator=t,this.root=e||rt.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Rn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Rn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Rn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Rn(this.root,t,this.comparator,!0)}}class Rn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rt{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??rt.RED,this.left=s??rt.EMPTY,this.right=o??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new rt(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,i,s,o){return this}insert(t,e,i){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ot{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new zs(this.data.getIterator())}getIteratorFrom(t){return new zs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class zs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(t){this.fields=t,t.sort(st.comparator)}static empty(){return new At([])}unionWith(t){let e=new ot(st.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return de(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
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
 */class Sc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Sc("Invalid base64 string: "+o):o}}(t);return new Rt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new Rt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const bc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(n){if(X(!!n,39018),typeof n=="string"){let t=0;const e=bc.exec(n);if(X(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:it(n.seconds),nanos:it(n.nanos)}}function it(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pe(n){return typeof n=="string"?Rt.fromBase64String(n):Rt.fromUint8Array(n)}/**
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
 */const zo="server_timestamp",qo="__type__",Ho="__previous_value__",Go="__local_write_time__";function ai(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[qo])===null||e===void 0?void 0:e.stringValue)===zo}function li(n){const t=n.mapValue.fields[Ho];return ai(t)?li(t):t}function Fn(n){const t=ee(n.mapValue.fields[Go].timestampValue);return new J(t.seconds,t.nanos)}/**
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
 */class Vc{constructor(t,e,i,s,o,u,c,f,p,I){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=p,this.isUsingEmulator=I}}const Un="(default)";class Bn{constructor(t,e){this.projectId=t,this.database=e||Un}static empty(){return new Bn("","")}get isDefaultDatabase(){return this.database===Un}isEqual(t){return t instanceof Bn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Ko="__type__",Qo="__max__",Cn={mapValue:{fields:{__type__:{stringValue:Qo}}}},Wo="__vector__",$r="value";function ne(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ai(n)?4:Nc(n)?9007199254740991:Dc(n)?10:11:M(28295,{value:n})}function Ct(n,t){if(n===t)return!0;const e=ne(n);if(e!==ne(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Fn(n).isEqual(Fn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=ee(s.timestampValue),c=ee(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return pe(s.bytesValue).isEqual(pe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return it(s.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return it(s.integerValue)===it(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=it(s.doubleValue),c=it(o.doubleValue);return u===c?Ln(u)===Ln(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return de(n.arrayValue.values||[],t.arrayValue.values||[],Ct);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if($s(u)!==$s(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!Ct(u[f],c[f])))return!1;return!0}(n,t);default:return M(52216,{left:n})}}function We(n,t){return(n.values||[]).find(e=>Ct(e,t))!==void 0}function me(n,t){if(n===t)return 0;const e=ne(n),i=ne(t);if(e!==i)return U(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=it(o.integerValue||o.doubleValue),f=it(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(n,t);case 3:return qs(n.timestampValue,t.timestampValue);case 4:return qs(Fn(n),Fn(t));case 5:return jr(n.stringValue,t.stringValue);case 6:return function(o,u){const c=pe(o),f=pe(u);return c.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),f=u.split("/");for(let p=0;p<c.length&&p<f.length;p++){const I=U(c[p],f[p]);if(I!==0)return I}return U(c.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=U(it(o.latitude),it(u.latitude));return c!==0?c:U(it(o.longitude),it(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Hs(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,f,p,I;const w=o.fields||{},R=u.fields||{},b=(c=w[$r])===null||c===void 0?void 0:c.arrayValue,V=(f=R[$r])===null||f===void 0?void 0:f.arrayValue,O=U(((p=b==null?void 0:b.values)===null||p===void 0?void 0:p.length)||0,((I=V==null?void 0:V.values)===null||I===void 0?void 0:I.length)||0);return O!==0?O:Hs(b,V)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===Cn.mapValue&&u===Cn.mapValue)return 0;if(o===Cn.mapValue)return 1;if(u===Cn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),p=u.fields||{},I=Object.keys(p);f.sort(),I.sort();for(let w=0;w<f.length&&w<I.length;++w){const R=jr(f[w],I[w]);if(R!==0)return R;const b=me(c[f[w]],p[I[w]]);if(b!==0)return b}return U(f.length,I.length)}(n.mapValue,t.mapValue);default:throw M(23264,{Pe:e})}}function qs(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=ee(n),i=ee(t),s=U(e.seconds,i.seconds);return s!==0?s:U(e.nanos,i.nanos)}function Hs(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const o=me(e[s],i[s]);if(o)return o}return U(e.length,i.length)}function ge(n){return zr(n)}function zr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=ee(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return pe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=zr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of i)o?o=!1:s+=",",s+=`${u}:${zr(e.fields[u])}`;return s+"}"}(n.mapValue):M(61005,{value:n})}function Vn(n){switch(ne(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=li(n);return t?16+Vn(t):16;case 5:return 2*n.stringValue.length;case 6:return pe(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,o)=>s+Vn(o),0)}(n.arrayValue);case 10:case 11:return function(i){let s=0;return ve(i.fields,(o,u)=>{s+=o.length+Vn(u)}),s}(n.mapValue);default:throw M(13486,{value:n})}}function qr(n){return!!n&&"integerValue"in n}function ui(n){return!!n&&"arrayValue"in n}function Dn(n){return!!n&&"mapValue"in n}function Dc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ko])===null||e===void 0?void 0:e.stringValue)===Wo}function je(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ve(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=je(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=je(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Nc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Qo}/**
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
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Dn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=je(e)}setAll(t){let e=st.emptyPath(),i={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=c.popLast()}u?i[c.lastSegment()]=je(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());Dn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ct(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Dn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){ve(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new It(je(this.value))}}function Xo(n){const t=[];return ve(n.fields,(e,i)=>{const s=new st([e]);if(Dn(i)){const o=Xo(i.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new At(t)}/**
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
 */class Tt{constructor(t,e,i,s,o,u,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new Tt(t,0,K.min(),K.min(),K.min(),It.empty(),0)}static newFoundDocument(t,e,i,s){return new Tt(t,1,e,K.min(),i,s,0)}static newNoDocument(t,e){return new Tt(t,2,e,K.min(),K.min(),It.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,K.min(),K.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jn{constructor(t,e){this.position=t,this.inclusive=e}}function Gs(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?i=x.comparator(x.fromName(u.referenceValue),e.key):i=me(u,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ks(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ct(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class $n{constructor(t,e="asc"){this.field=t,this.dir=e}}function kc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Yo{}class et extends Yo{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new xc(t,e,i):e==="array-contains"?new Fc(t,i):e==="in"?new Uc(t,i):e==="not-in"?new Bc(t,i):e==="array-contains-any"?new jc(t,i):new et(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Mc(t,i):new Lc(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(me(e,this.value)):e!==null&&ne(this.value)===ne(e)&&this.matchesComparison(me(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends Yo{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new jt(t,e)}matches(t){return Jo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Jo(n){return n.op==="and"}function Zo(n){return Oc(n)&&Jo(n)}function Oc(n){for(const t of n.filters)if(t instanceof jt)return!1;return!0}function Hr(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+ge(n.value);if(Zo(n))return n.filters.map(t=>Hr(t)).join(",");{const t=n.filters.map(e=>Hr(e)).join(",");return`${n.op}(${t})`}}function ta(n,t){return n instanceof et?function(i,s){return s instanceof et&&i.op===s.op&&i.field.isEqual(s.field)&&Ct(i.value,s.value)}(n,t):n instanceof jt?function(i,s){return s instanceof jt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,u,c)=>o&&ta(u,s.filters[c]),!0):!1}(n,t):void M(19439)}function ea(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${ge(e.value)}`}(n):n instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(ea).join(" ,")+"}"}(n):"Filter"}class xc extends et{constructor(t,e,i){super(t,e,i),this.key=x.fromName(i.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Mc extends et{constructor(t,e){super(t,"in",e),this.keys=na("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Lc extends et{constructor(t,e){super(t,"not-in",e),this.keys=na("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function na(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>x.fromName(i.referenceValue))}class Fc extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ui(e)&&We(e.arrayValue,this.value)}}class Uc extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&We(this.value.arrayValue,e)}}class Bc extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(We(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!We(this.value.arrayValue,e)}}class jc extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ui(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>We(this.value.arrayValue,i))}}/**
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
 */class $c{constructor(t,e=null,i=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.Ie=null}}function Qs(n,t=null,e=[],i=[],s=null,o=null,u=null){return new $c(n,t,e,i,s,o,u)}function ci(n){const t=q(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>Hr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),oi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>ge(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>ge(i)).join(",")),t.Ie=e}return t.Ie}function hi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!kc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ta(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ks(n.startAt,t.startAt)&&Ks(n.endAt,t.endAt)}/**
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
 */class Xn{constructor(t,e=null,i=[],s=[],o=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=f,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function zc(n,t,e,i,s,o,u,c){return new Xn(n,t,e,i,s,o,u,c)}function qc(n){return new Xn(n)}function Ws(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hc(n){return n.collectionGroup!==null}function $e(n){const t=q(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new ot(st.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(p=>{p.isInequality()&&(c=c.add(p.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new $n(o,i))}),e.has(st.keyField().canonicalString())||t.Ee.push(new $n(st.keyField(),i))}return t.Ee}function Jt(n){const t=q(n);return t.de||(t.de=Gc(t,$e(n))),t.de}function Gc(n,t){if(n.limitType==="F")return Qs(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new $n(s.field,o)});const e=n.endAt?new jn(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new jn(n.startAt.position,n.startAt.inclusive):null;return Qs(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function Gr(n,t,e){return new Xn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ra(n,t){return hi(Jt(n),Jt(t))&&n.limitType===t.limitType}function ia(n){return`${ci(Jt(n))}|lt:${n.limitType}`}function Fe(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>ea(s)).join(", ")}]`),oi(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>ge(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>ge(s)).join(",")),`Target(${i})`}(Jt(n))}; limitType=${n.limitType})`}function fi(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):x.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of $e(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(u,c,f){const p=Gs(u,c,f);return u.inclusive?p<=0:p<0}(i.startAt,$e(i),s)||i.endAt&&!function(u,c,f){const p=Gs(u,c,f);return u.inclusive?p>=0:p>0}(i.endAt,$e(i),s))}(n,t)}function Kc(n){return(t,e)=>{let i=!1;for(const s of $e(n)){const o=Qc(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function Qc(n,t,e){const i=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,u,c){const f=u.data.field(o),p=c.data.field(o);return f!==null&&p!==null?me(f,p):M(42886)}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return M(19790,{direction:n.dir})}}/**
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
 */class re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ve(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return $o(this.inner)}size(){return this.innerSize}}/**
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
 */const Wc=new yt(x.comparator);function zn(){return Wc}const sa=new yt(x.comparator);function Pn(...n){let t=sa;for(const e of n)t=t.insert(e.key,e);return t}function oa(n){let t=sa;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Xt(){return ze()}function aa(){return ze()}function ze(){return new re(n=>n.toString(),(n,t)=>n.isEqual(t))}const Xc=new yt(x.comparator),Yc=new ot(x.comparator);function dt(...n){let t=Yc;for(const e of n)t=t.add(e);return t}const Jc=new ot(U);function Zc(){return Jc}/**
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
 */function di(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ln(t)?"-0":t}}function la(n){return{integerValue:""+n}}function th(n,t){return Rc(t)?la(t):di(n,t)}/**
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
 */class Yn{constructor(){this._=void 0}}function eh(n,t,e){return n instanceof qn?function(s,o){const u={fields:{[qo]:{stringValue:zo},[Go]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ai(o)&&(o=li(o)),o&&(u.fields[Ho]=o),{mapValue:u}}(e,t):n instanceof Xe?ca(n,t):n instanceof Ye?ha(n,t):function(s,o){const u=ua(s,o),c=Xs(u)+Xs(s.Re);return qr(u)&&qr(s.Re)?la(c):di(s.serializer,c)}(n,t)}function nh(n,t,e){return n instanceof Xe?ca(n,t):n instanceof Ye?ha(n,t):e}function ua(n,t){return n instanceof Hn?function(i){return qr(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class qn extends Yn{}class Xe extends Yn{constructor(t){super(),this.elements=t}}function ca(n,t){const e=fa(t);for(const i of n.elements)e.some(s=>Ct(s,i))||e.push(i);return{arrayValue:{values:e}}}class Ye extends Yn{constructor(t){super(),this.elements=t}}function ha(n,t){let e=fa(t);for(const i of n.elements)e=e.filter(s=>!Ct(s,i));return{arrayValue:{values:e}}}class Hn extends Yn{constructor(t,e){super(),this.serializer=t,this.Re=e}}function Xs(n){return it(n.integerValue||n.doubleValue)}function fa(n){return ui(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function rh(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof Xe&&s instanceof Xe||i instanceof Ye&&s instanceof Ye?de(i.elements,s.elements,Ct):i instanceof Hn&&s instanceof Hn?Ct(i.Re,s.Re):i instanceof qn&&s instanceof qn}(n.transform,t.transform)}class ih{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Jn{}function da(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ma(n.key,Vt.none()):new tn(n.key,n.data,Vt.none());{const e=n.data,i=It.empty();let s=new ot(st.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?i.delete(o):i.set(o,u),s=s.add(o)}return new ie(n.key,i,new At(s.toArray()),Vt.none())}}function sh(n,t,e){n instanceof tn?function(s,o,u){const c=s.value.clone(),f=Js(s.fieldTransforms,o,u.transformResults);c.setAll(f),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ie?function(s,o,u){if(!Nn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Js(s.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(pa(s)),f.setAll(c),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function qe(n,t,e,i){return n instanceof tn?function(o,u,c,f){if(!Nn(o.precondition,u))return c;const p=o.value.clone(),I=Zs(o.fieldTransforms,f,u);return p.setAll(I),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),null}(n,t,e,i):n instanceof ie?function(o,u,c,f){if(!Nn(o.precondition,u))return c;const p=Zs(o.fieldTransforms,f,u),I=u.data;return I.setAll(pa(o)),I.setAll(p),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,i):function(o,u,c){return Nn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function oh(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=ua(i.transform,s||null);o!=null&&(e===null&&(e=It.empty()),e.set(i.field,o))}return e||null}function Ys(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&de(i,s,(o,u)=>rh(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class tn extends Jn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ie extends Jn{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function pa(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Js(n,t,e){const i=new Map;X(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);i.set(o.field,nh(u,c,e[s]))}return i}function Zs(n,t,e){const i=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);i.set(s.field,eh(o,u,t))}return i}class ma extends Jn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ah extends Jn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lh{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&sh(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=qe(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=qe(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=aa();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const f=da(u,c);f!==null&&i.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(K.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),dt())}isEqual(t){return this.batchId===t.batchId&&de(this.mutations,t.mutations,(e,i)=>Ys(e,i))&&de(this.baseMutations,t.baseMutations,(e,i)=>Ys(e,i))}}class pi{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){X(t.mutations.length===i.length,58842,{fe:t.mutations.length,ge:i.length});let s=function(){return Xc}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,i[u].version);return new pi(t,e,i,s)}}/**
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
 */class uh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var Y,L;function ch(n){switch(n){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function hh(n){if(n===void 0)return te("GRPC error has no .code"),P.UNKNOWN;switch(n){case Y.OK:return P.OK;case Y.CANCELLED:return P.CANCELLED;case Y.UNKNOWN:return P.UNKNOWN;case Y.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Y.INTERNAL:return P.INTERNAL;case Y.UNAVAILABLE:return P.UNAVAILABLE;case Y.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Y.NOT_FOUND:return P.NOT_FOUND;case Y.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Y.ABORTED:return P.ABORTED;case Y.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Y.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:n})}}(L=Y||(Y={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ei([4294967295,4294967295],0);class fh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Kr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function dh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ph(n,t){return Kr(n,t.toTimestamp())}function fe(n){return X(!!n,49232),K.fromTimestamp(function(e){const i=ee(e);return new J(i.seconds,i.nanos)}(n))}function ga(n,t){return Qr(n,t).canonicalString()}function Qr(n,t){const e=function(s){return new W(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function mh(n){const t=W.fromString(n);return X(Ah(t),10190,{key:t.toString()}),t}function Wr(n,t){return ga(n.databaseId,t.path)}function gh(n){const t=mh(n);return t.length===4?W.emptyPath():yh(t)}function _h(n){return new W(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function yh(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function to(n,t,e){return{name:Wr(n,t),fields:e.value.mapValue.fields}}function Eh(n,t){let e;if(t instanceof tn)e={update:to(n,t.key,t.value)};else if(t instanceof ma)e={delete:Wr(n,t.key)};else if(t instanceof ie)e={update:to(n,t.key,t.data),updateMask:Ih(t.fieldMask)};else{if(!(t instanceof ah))return M(16599,{ft:t.type});e={verify:Wr(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,u){const c=u.transform;if(c instanceof qn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Xe)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ye)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Hn)return{fieldPath:u.field.canonicalString(),increment:c.Re};throw M(20930,{transform:u.transform})}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:ph(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,t.precondition)),e}function vh(n,t){return n&&n.length>0?(X(t!==void 0,14353),n.map(e=>function(s,o){let u=s.updateTime?fe(s.updateTime):fe(o);return u.isEqual(K.min())&&(u=fe(o)),new ih(u,s.transformResults||[])}(e,t))):[]}function Th(n){let t=gh(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){X(i===1,65062);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(w){const R=_a(w);return R instanceof jt&&Zo(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(R=>function(V){return new $n(ce(V.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(w){let R;return R=typeof w=="object"?w.value:w,oi(R)?null:R}(e.limit));let f=null;e.startAt&&(f=function(w){const R=!!w.before,b=w.values||[];return new jn(b,R)}(e.startAt));let p=null;return e.endAt&&(p=function(w){const R=!w.before,b=w.values||[];return new jn(b,R)}(e.endAt)),zc(t,s,u,o,c,"F",f,p)}function _a(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=ce(e.unaryFilter.field);return et.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ce(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ce(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ce(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(e){return et.create(ce(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(i=>_a(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(n):M(30097,{filter:n})}function ce(n){return st.fromServerFormat(n.fieldPath)}function Ih(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ah(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class wh{constructor(t){this.wt=t}}function Rh(n){const t=Th({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Gr(t,t.limit,"L"):t}/**
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
 */class Ch{constructor(){this.Cn=new Ph}addToCollectionParentIndex(t,e){return this.Cn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Bt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Bt.min())}updateCollectionGroup(t,e,i){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Ph{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new ot(W.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new ot(W.comparator)).toArray()}}/**
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
 */const eo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ya=41943040;class _t{static withCacheSize(t){return new _t(t,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}/**
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
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(ya,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
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
 */class _e{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new _e(0)}static lr(){return new _e(-1)}}/**
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
 */const no="LruGarbageCollector",Sh=1048576;function ro([n,t],[e,i]){const s=U(n,e);return s===0?U(t,i):s}class bh{constructor(t){this.Er=t,this.buffer=new ot(ro),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const i=this.buffer.last();ro(e,i)<0&&(this.buffer=this.buffer.delete(i).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Vh{constructor(t,e,i){this.garbageCollector=t,this.asyncQueue=e,this.localStore=i,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){D(no,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ze(e)?D(no,"Ignoring IndexedDB error during garbage collection: ",e):await ri(e)}await this.mr(3e5)})}}class Dh{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(i=>Math.floor(e/100*i))}nthSequenceNumber(t,e){if(e===0)return C.resolve(ii.le);const i=new bh(e);return this.gr.forEachTarget(t,s=>i.Rr(s.sequenceNumber)).next(()=>this.gr.yr(t,s=>i.Rr(s))).next(()=>i.maxValue)}removeTargets(t,e,i){return this.gr.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(eo)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eo):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let i,s,o,u,c,f,p;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(t,s))).next(w=>(i=w,c=Date.now(),this.removeTargets(t,i,e))).next(w=>(o=w,f=Date.now(),this.removeOrphanedDocuments(t,i))).next(w=>(p=Date.now(),ue()<=F.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-I}ms
	Determined least recently used ${s} in `+(c-u)+`ms
	Removed ${o} targets in `+(f-c)+`ms
	Removed ${w} documents in `+(p-f)+`ms
Total Duration: ${p-I}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:w})))}}function Nh(n,t){return new Dh(n,t)}/**
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
 */class kh{constructor(){this.changes=new re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?C.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Oh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class xh{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&qe(i.mutation,s,At.empty(),J.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,dt()).next(()=>i))}getLocalViewOfDocuments(t,e,i=dt()){const s=Xt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let u=Pn();return o.forEach((c,f)=>{u=u.insert(c,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=Xt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,dt()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,i,s){let o=zn();const u=ze(),c=function(){return ze()}();return e.forEach((f,p)=>{const I=i.get(p.key);s.has(p.key)&&(I===void 0||I.mutation instanceof ie)?o=o.insert(p.key,p):I!==void 0?(u.set(p.key,I.mutation.getFieldMask()),qe(I.mutation,p,I.mutation.getFieldMask(),J.now())):u.set(p.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((p,I)=>u.set(p,I)),e.forEach((p,I)=>{var w;return c.set(p,new Oh(I,(w=u.get(p))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const i=ze();let s=new yt((u,c)=>u-c),o=dt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(f=>{const p=e.get(f);if(p===null)return;let I=i.get(f)||At.empty();I=c.applyToLocalView(p,I),i.set(f,I);const w=(s.get(c.batchId)||dt()).add(f);s=s.insert(c.batchId,w)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),p=f.key,I=f.value,w=aa();I.forEach(R=>{if(!o.has(R)){const b=da(e.get(R),i.get(R));b!==null&&w.set(R,b),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,p,w))}return C.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return x.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Hc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):C.resolve(Xt());let c=Qe,f=o;return u.next(p=>C.forEach(p,(I,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(I)?C.resolve():this.remoteDocumentCache.getEntry(t,I).next(R=>{f=f.insert(I,R)}))).next(()=>this.populateOverlays(t,p,o)).next(()=>this.computeViews(t,f,p,dt())).next(I=>({batchId:c,changes:oa(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(i=>{let s=Pn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let u=Pn();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,f=>{const p=function(w,R){return new Xn(R,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,p,i,s).next(I=>{I.forEach((w,R)=>{u=u.insert(w,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(u=>{o.forEach((f,p)=>{const I=p.getKey();u.get(I)===null&&(u=u.insert(I,Tt.newInvalidDocument(I)))});let c=Pn();return u.forEach((f,p)=>{const I=o.get(f);I!==void 0&&qe(I.mutation,p,At.empty(),J.now()),fi(e,p)&&(c=c.insert(f,p))}),c})}}/**
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
 */class Mh{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return C.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:fe(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(s){return{name:s.name,query:Rh(s.bundledQuery),readTime:fe(s.readTime)}}(e)),C.resolve()}}/**
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
 */class Lh{constructor(){this.overlays=new yt(x.comparator),this.Qr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Xt();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.bt(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Qr.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(i)),C.resolve()}getOverlaysForCollection(t,e,i){const s=Xt(),o=e.length+1,u=new x(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,p=f.getKey();if(!e.isPrefixOf(p.path))break;p.path.length===o&&f.largestBatchId>i&&s.set(f.getKey(),f)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new yt((p,I)=>p-I);const u=this.overlays.getIterator();for(;u.hasNext();){const p=u.getNext().value;if(p.getKey().getCollectionGroup()===e&&p.largestBatchId>i){let I=o.get(p.largestBatchId);I===null&&(I=Xt(),o=o.insert(p.largestBatchId,I)),I.set(p.getKey(),p)}}const c=Xt(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,I)=>c.set(p,I)),!(c.size()>=s)););return C.resolve(c)}bt(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.Qr.get(s.largestBatchId).delete(i.key);this.Qr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new uh(e,i));let o=this.Qr.get(e);o===void 0&&(o=dt(),this.Qr.set(e,o)),this.Qr.set(e,o.add(i.key))}}/**
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
 */class Fh{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class mi{constructor(){this.$r=new ot(tt.Ur),this.Kr=new ot(tt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const i=new tt(t,e);this.$r=this.$r.add(i),this.Kr=this.Kr.add(i)}Gr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.zr(new tt(t,e))}jr(t,e){t.forEach(i=>this.removeReference(i,e))}Hr(t){const e=new x(new W([])),i=new tt(e,t),s=new tt(e,t+1),o=[];return this.Kr.forEachInRange([i,s],u=>{this.zr(u),o.push(u.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new x(new W([])),i=new tt(e,t),s=new tt(e,t+1);let o=dt();return this.Kr.forEachInRange([i,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new tt(t,0),i=this.$r.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class tt{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return x.comparator(t.key,e.key)||U(t.Zr,e.Zr)}static Wr(t,e){return U(t.Zr,e.Zr)||x.comparator(t.key,e.key)}}/**
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
 */class Uh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new ot(tt.Ur)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new lh(o,e,i,s);this.mutationQueue.push(u);for(const c of s)this.Xr=this.Xr.add(new tt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.ti(i),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?si:this.nr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new tt(e,0),s=new tt(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([i,s],u=>{const c=this.ei(u.Zr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new ot(U);return e.forEach(s=>{const o=new tt(s,0),u=new tt(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,u],c=>{i=i.add(c.Zr)})}),C.resolve(this.ni(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;x.isDocumentKey(o)||(o=o.child(""));const u=new tt(new x(o),0);let c=new ot(U);return this.Xr.forEachWhile(f=>{const p=f.key.path;return!!i.isPrefixOf(p)&&(p.length===s&&(c=c.add(f.Zr)),!0)},u),C.resolve(this.ni(c))}ni(t){const e=[];return t.forEach(i=>{const s=this.ei(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){X(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Xr;return C.forEach(e.mutations,s=>{const o=new tt(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Xr=i})}sr(t){}containsKey(t,e){const i=new tt(e,0),s=this.Xr.firstAfterOrEqual(i);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Bh{constructor(t){this.ii=t,this.docs=function(){return new yt(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,u=this.ii(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return C.resolve(i?i.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let i=zn();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():Tt.newInvalidDocument(s))}),C.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=zn();const u=e.path,c=new x(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:p,value:{document:I}}=f.getNext();if(!u.isPrefixOf(p.path))break;p.path.length>u.length+1||Tc(vc(I),i)<=0||(s.has(I.key)||fi(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,i,s){M(9500)}si(t,e){return C.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new jh(this)}getSize(t){return C.resolve(this.size)}}class jh extends kh{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.Br.addEntry(t,s)):this.Br.removeEntry(i)}),C.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
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
 */class $h{constructor(t){this.persistence=t,this.oi=new re(e=>ci(e),hi),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this._i=0,this.ai=new mi,this.targetCount=0,this.ui=_e.cr()}forEachTarget(t,e){return this.oi.forEach((i,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this._i&&(this._i=e),C.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new _e(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Tr(e),C.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.oi.forEach((u,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.oi.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const i=this.oi.get(e)||null;return C.resolve(i)}addMatchingKeys(t,e,i){return this.ai.Gr(e,i),C.resolve()}removeMatchingKeys(t,e,i){this.ai.jr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const i=this.ai.Yr(e);return C.resolve(i)}containsKey(t,e){return C.resolve(this.ai.containsKey(e))}}/**
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
 */class Ea{constructor(t,e){this.ci={},this.overlays={},this.li=new ii(0),this.hi=!1,this.hi=!0,this.Pi=new Fh,this.referenceDelegate=t(this),this.Ti=new $h(this),this.indexManager=new Ch,this.remoteDocumentCache=function(s){return new Bh(s)}(i=>this.referenceDelegate.Ii(i)),this.serializer=new wh(e),this.Ei=new Mh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Lh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.ci[t.toKey()];return i||(i=new Uh(e,this.referenceDelegate),this.ci[t.toKey()]=i),i}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,i){D("MemoryPersistence","Starting transaction:",t);const s=new zh(this.li.next());return this.referenceDelegate.di(),i(s).next(o=>this.referenceDelegate.Ai(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ri(t,e){return C.or(Object.values(this.ci).map(i=>()=>i.containsKey(t,e)))}}class zh extends Ac{constructor(t){super(),this.currentSequenceNumber=t}}class gi{constructor(t){this.persistence=t,this.Vi=new mi,this.mi=null}static fi(t){return new gi(t)}get gi(){if(this.mi)return this.mi;throw M(60996)}addReference(t,e,i){return this.Vi.addReference(i,e),this.gi.delete(i.toString()),C.resolve()}removeReference(t,e,i){return this.Vi.removeReference(i,e),this.gi.add(i.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),C.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(s=>this.gi.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.gi.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.gi,i=>{const s=x.fromPath(i);return this.pi(t,s).next(o=>{o||e.removeEntry(s,K.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(i=>{i?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return C.or([()=>C.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class Gn{constructor(t,e){this.persistence=t,this.yi=new re(i=>Cc(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=Nh(this,e)}static fi(t,e){return new Gn(t,e)}di(){}Ai(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.Sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>e.next(s=>i+s))}Sr(t){let e=0;return this.yr(t,i=>{e++}).next(()=>e)}yr(t,e){return C.forEach(this.yi,(i,s)=>this.Dr(t,i,s).next(o=>o?C.resolve():e(s)))}removeTargets(t,e,i){return this.persistence.getTargetCache().removeTargets(t,e,i)}removeOrphanedDocuments(t,e){let i=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.si(t,u=>this.Dr(t,u,e).next(c=>{c||(i++,o.removeEntry(u,K.min()))})).next(()=>o.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,e,i){return this.yi.set(i,t.currentSequenceNumber),C.resolve()}removeReference(t,e,i){return this.yi.set(i,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),C.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Vn(t.data.value)),e}Dr(t,e,i){return C.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.yi.get(e);return C.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class _i{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.ds=i,this.As=s}static Rs(t,e){let i=dt(),s=dt();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new _i(t,e.fromCache,i,s)}}/**
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
 */class qh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Hh{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return zl()?8:wc(jl())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.ws(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Ss(t,e,s,i).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new qh;return this.bs(t,e,u).next(c=>{if(o.result=c,this.fs)return this.Ds(t,e,u,c.size)})}).next(()=>o.result)}Ds(t,e,i,s){return i.documentReadCount<this.gs?(ue()<=F.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Fe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),C.resolve()):(ue()<=F.DEBUG&&D("QueryEngine","Query:",Fe(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ps*s?(ue()<=F.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Fe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Jt(e))):C.resolve())}ws(t,e){if(Ws(e))return C.resolve(null);let i=Jt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Gr(e,null,"F"),i=Jt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const u=dt(...o);return this.ys.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,i).next(f=>{const p=this.vs(e,c);return this.Cs(e,p,u,f.readTime)?this.ws(t,Gr(e,null,"F")):this.Fs(t,p,e,f)}))})))}Ss(t,e,i,s){return Ws(e)||s.isEqual(K.min())?C.resolve(null):this.ys.getDocuments(t,i).next(o=>{const u=this.vs(e,o);return this.Cs(e,u,i,s)?C.resolve(null):(ue()<=F.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fe(e)),this.Fs(t,u,e,Ec(s,Qe)).next(c=>c))})}vs(t,e){let i=new ot(Kc(t));return e.forEach((s,o)=>{fi(t,o)&&(i=i.add(o))}),i}Cs(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}bs(t,e,i){return ue()<=F.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Fe(e)),this.ys.getDocumentsMatchingQuery(t,e,Bt.min(),i)}Fs(t,e,i,s){return this.ys.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */const Gh="LocalStore";class Kh{constructor(t,e,i,s){this.persistence=t,this.Ms=e,this.serializer=s,this.xs=new yt(U),this.Os=new re(o=>ci(o),hi),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(i)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new xh(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function Qh(n,t,e,i){return new Kh(n,t,e,i)}async function va(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const u=[],c=[];let f=dt();for(const p of s){u.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}for(const p of o){c.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(i,f).next(p=>({ks:p,removedBatchIds:u,addedBatchIds:c}))})})}function Wh(n,t){const e=q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.Bs.newChangeBuffer({trackRemovals:!0});return function(c,f,p,I){const w=p.batch,R=w.keys();let b=C.resolve();return R.forEach(V=>{b=b.next(()=>I.getEntry(f,V)).next(O=>{const N=p.docVersions.get(V);X(N!==null,48541),O.version.compareTo(N)<0&&(w.applyToRemoteDocument(O,p),O.isValidDocument()&&(O.setReadTime(p.commitVersion),I.addEntry(O)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(f,w))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let f=dt();for(let p=0;p<c.mutationResults.length;++p)c.mutationResults[p].transformResults.length>0&&(f=f.add(c.batch.mutations[p].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Xh(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function Yh(n,t){const e=q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=si),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class io{constructor(){this.activeTargetIds=Zc()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Jh{constructor(){this.xo=new io,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,i){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new io,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Zh{No(t){}shutdown(){}}/**
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
 */const so="ConnectivityMonitor";class oo{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){D(so,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){D(so,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sn=null;function Xr(){return Sn===null?Sn=function(){return 268435456+Math.round(2147483648*Math.random())}():Sn++,"0x"+Sn.toString(16)}/**
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
 */const Nr="RestConnection",tf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ef{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${i}/databases/${s}`,this.Go=this.databaseId.database===Un?`project_id=${i}`:`project_id=${i}&database_id=${s}`}zo(t,e,i,s,o){const u=Xr(),c=this.jo(t,e.toUriEncodedString());D(Nr,`Sending RPC '${t}' ${u}:`,c,i);const f={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(f,s,o);const{host:p}=new URL(c),I=Zr(p);return this.Jo(t,c,f,i,I).then(w=>(D(Nr,`Received RPC '${t}' ${u}: `,w),w),w=>{throw Wn(Nr,`RPC '${t}' ${u} failed with error: `,w,"url: ",c,"request:",i),w})}Yo(t,e,i,s,o,u){return this.zo(t,e,i,s,o)}Ho(t,e,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ee}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}jo(t,e){const i=tf[t];return`${this.Ko}/v1/${e}:${i}`}terminate(){}}/**
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
 */class nf{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
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
 */const ht="WebChannelConnection";class rf extends ef{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,i,s,o){const u=Xr();return new Promise((c,f)=>{const p=new ko;p.setWithCredentials(!0),p.listenOnce(Oo.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case bn.NO_ERROR:const w=p.getResponseJson();D(ht,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(w)),c(w);break;case bn.TIMEOUT:D(ht,`RPC '${t}' ${u} timed out`),f(new k(P.DEADLINE_EXCEEDED,"Request time out"));break;case bn.HTTP_ERROR:const R=p.getStatus();if(D(ht,`RPC '${t}' ${u} failed with status:`,R,"response text:",p.getResponseText()),R>0){let b=p.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const O=function(G){const j=G.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN}(V.status);f(new k(O,V.message))}else f(new k(P.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new k(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:t,streamId:u,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{D(ht,`RPC '${t}' ${u} completed.`)}});const I=JSON.stringify(s);D(ht,`RPC '${t}' ${u} sending request:`,s),p.send(e,"POST",I,i,15)})}T_(t,e,i){const s=Xr(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Lo(),c=Mo(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Ho(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const I=o.join("");D(ht,`Creating RPC '${t}' stream ${s}: ${I}`,f);const w=u.createWebChannel(I,f);let R=!1,b=!1;const V=new nf({Zo:N=>{b?D(ht,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(R||(D(ht,`Opening RPC '${t}' stream ${s} transport.`),w.open(),R=!0),D(ht,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},Xo:()=>w.close()}),O=(N,G,j)=>{N.listen(G,z=>{try{j(z)}catch(Z){setTimeout(()=>{throw Z},0)}})};return O(w,Ue.EventType.OPEN,()=>{b||(D(ht,`RPC '${t}' stream ${s} transport opened.`),V.__())}),O(w,Ue.EventType.CLOSE,()=>{b||(b=!0,D(ht,`RPC '${t}' stream ${s} transport closed`),V.u_())}),O(w,Ue.EventType.ERROR,N=>{b||(b=!0,Wn(ht,`RPC '${t}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),V.u_(new k(P.UNAVAILABLE,"The operation could not be completed")))}),O(w,Ue.EventType.MESSAGE,N=>{var G;if(!b){const j=N.data[0];X(!!j,16349);const z=j,Z=(z==null?void 0:z.error)||((G=z[0])===null||G===void 0?void 0:G.error);if(Z){D(ht,`RPC '${t}' stream ${s} received error:`,Z);const qt=Z.status;let gt=function(g){const _=Y[g];if(_!==void 0)return hh(_)}(qt),E=Z.message;gt===void 0&&(gt=P.INTERNAL,E="Unknown error status: "+qt+" with message "+Z.message),b=!0,V.u_(new k(gt,E)),w.close()}else D(ht,`RPC '${t}' stream ${s} received:`,j),V.c_(j)}}),O(c,xo.STAT_EVENT,N=>{N.stat===Br.PROXY?D(ht,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===Br.NOPROXY&&D(ht,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.a_()},0),V}}function kr(){return typeof document<"u"?document:null}/**
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
 */function Zn(n){return new fh(n,!0)}/**
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
 */class Ta{constructor(t,e,i=1e3,s=1.5,o=6e4){this.xi=t,this.timerId=e,this.I_=i,this.E_=s,this.d_=o,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(t){this.cancel();const e=Math.floor(this.A_+this.g_()),i=Math.max(0,Date.now()-this.V_),s=Math.max(0,e-i);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),t())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const ao="PersistentStream";class sf{constructor(t,e,i,s,o,u,c,f){this.xi=t,this.y_=i,this.w_=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Ta(t,e)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(t){this.k_(),this.stream.send(t)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(t,e){this.k_(),this.q_(),this.C_.cancel(),this.S_++,t!==4?this.C_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(te(e.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}Q_(){}auth(){this.state=1;const t=this.U_(this.S_),e=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.S_===e&&this.K_(i,s)},i=>{t(()=>{const s=new k(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.W_(s)})})}K_(t,e){const i=this.U_(this.S_);this.stream=this.G_(t,e),this.stream.e_(()=>{i(()=>this.listener.e_())}),this.stream.n_(()=>{i(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{i(()=>this.W_(s))}),this.stream.onMessage(s=>{i(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(t){return D(ao,`close with error: ${t}`),this.stream=null,this.close(4,t)}U_(t){return e=>{this.xi.enqueueAndForget(()=>this.S_===t?e():(D(ao,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class of extends sf{constructor(t,e,i,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=o}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(t,e){return this.connection.T_("Write",t,e)}z_(t){return X(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0,55816),this.listener.X_()}onNext(t){X(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.C_.reset();const e=vh(t.writeResults,t.commitTime),i=fe(t.commitTime);return this.listener.ea(i,e)}ta(){const t={};t.database=_h(this.serializer),this.L_(t)}Z_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>Eh(this.serializer,i))};this.L_(e)}}/**
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
 */class af{}class lf extends af{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.na=!1}ra(){if(this.na)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,i,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.zo(t,Qr(e,i),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(P.UNKNOWN,o.toString())})}Yo(t,e,i,s,o){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Yo(t,Qr(e,i),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(P.UNKNOWN,u.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class uf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(t){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.aa("Offline")))}set(t){this.la(),this.ia=0,t==="Online"&&(this.oa=!1),this.aa(t)}aa(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ua(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(te(e),this.oa=!1):D("OnlineStateTracker",e)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const en="RemoteStore";class cf{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=o,this.Ea.No(u=>{i.enqueueAndForget(async()=>{rn(this)&&(D(en,"Restarting streams for network reachability change."),await async function(f){const p=q(f);p.Ta.add(4),await nn(p),p.da.set("Unknown"),p.Ta.delete(4),await tr(p)}(this))})}),this.da=new uf(i,s)}}async function tr(n){if(rn(n))for(const t of n.Ia)await t(!0)}async function nn(n){for(const t of n.Ia)await t(!1)}function rn(n){return q(n).Ta.size===0}async function Ia(n,t,e){if(!Ze(t))throw t;n.Ta.add(1),await nn(n),n.da.set("Offline"),e||(e=()=>Xh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(en,"Retrying IndexedDB access"),await e(),n.Ta.delete(1),await tr(n)})}function Aa(n,t){return t().catch(e=>Ia(n,e,t))}async function er(n){const t=q(n),e=$t(t);let i=t.ha.length>0?t.ha[t.ha.length-1].batchId:si;for(;hf(t);)try{const s=await Yh(t.localStore,i);if(s===null){t.ha.length===0&&e.N_();break}i=s.batchId,ff(t,s)}catch(s){await Ia(t,s)}wa(t)&&Ra(t)}function hf(n){return rn(n)&&n.ha.length<10}function ff(n,t){n.ha.push(t);const e=$t(n);e.M_()&&e.Y_&&e.Z_(t.mutations)}function wa(n){return rn(n)&&!$t(n).F_()&&n.ha.length>0}function Ra(n){$t(n).start()}async function df(n){$t(n).ta()}async function pf(n){const t=$t(n);for(const e of n.ha)t.Z_(e.mutations)}async function mf(n,t,e){const i=n.ha.shift(),s=pi.from(i,t,e);await Aa(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await er(n)}async function gf(n,t){t&&$t(n).Y_&&await async function(i,s){if(function(u){return ch(u)&&u!==P.ABORTED}(s.code)){const o=i.ha.shift();$t(i).O_(),await Aa(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await er(i)}}(n,t),wa(n)&&Ra(n)}async function lo(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),D(en,"RemoteStore received new credentials");const i=rn(e);e.Ta.add(3),await nn(e),i&&e.da.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ta.delete(3),await tr(e)}async function _f(n,t){const e=q(n);t?(e.Ta.delete(2),await tr(e)):t||(e.Ta.add(2),await nn(e),e.da.set("Unknown"))}function $t(n){return n.Va||(n.Va=function(e,i,s){const o=q(e);return o.ra(),new of(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:df.bind(null,n),i_:gf.bind(null,n),X_:pf.bind(null,n),ea:mf.bind(null,n)}),n.Ia.push(async t=>{t?(n.Va.O_(),await er(n)):(await n.Va.stop(),n.ha.length>0&&(D(en,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
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
 */class yi{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const u=Date.now()+i,c=new yi(t,e,u,s,o);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ca(n,t){if(te("AsyncQueue",`${t}: ${n}`),Ze(n))return new k(P.UNAVAILABLE,`${t}: ${n}`);throw n}class yf{constructor(){this.queries=uo(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(e,i){const s=q(e),o=s.queries;s.queries=uo(),o.forEach((u,c)=>{for(const f of c.ya)f.onError(i)})})(this,new k(P.ABORTED,"Firestore shutting down"))}}function uo(){return new re(n=>ia(n),ra)}function Ef(n){n.ba.forEach(t=>{t.next()})}var co,ho;(ho=co||(co={})).Ca="default",ho.Cache="cache";const vf="SyncEngine";class Tf{constructor(t,e,i,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.au={},this.uu=new re(c=>ia(c),ra),this.cu=new Map,this.lu=new Set,this.hu=new yt(x.comparator),this.Pu=new Map,this.Tu=new mi,this.Iu={},this.Eu=new Map,this.du=_e.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function If(n,t,e){const i=Cf(n);try{const s=await function(u,c){const f=q(u),p=J.now(),I=c.reduce((b,V)=>b.add(V.key),dt());let w,R;return f.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=zn(),O=dt();return f.Bs.getEntries(b,I).next(N=>{V=N,V.forEach((G,j)=>{j.isValidDocument()||(O=O.add(G))})}).next(()=>f.localDocuments.getOverlayedDocuments(b,V)).next(N=>{w=N;const G=[];for(const j of c){const z=oh(j,w.get(j.key).overlayedDocument);z!=null&&G.push(new ie(j.key,z,Xo(z.value.mapValue),Vt.exists(!0)))}return f.mutationQueue.addMutationBatch(b,p,G,c)}).next(N=>{R=N;const G=N.applyToLocalDocumentSet(w,O);return f.documentOverlayCache.saveOverlays(b,N.batchId,G)})}).then(()=>({batchId:R.batchId,changes:oa(w)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,c,f){let p=u.Iu[u.currentUser.toKey()];p||(p=new yt(U)),p=p.insert(c,f),u.Iu[u.currentUser.toKey()]=p}(i,s.batchId,e),await nr(i,s.changes),await er(i.remoteStore)}catch(s){const o=Ca(s,"Failed to persist write");e.reject(o)}}function fo(n,t,e){const i=q(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.uu.forEach((o,u)=>{const c=u.view.Da(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const f=q(u);f.onlineState=c;let p=!1;f.queries.forEach((I,w)=>{for(const R of w.ya)R.Da(c)&&(p=!0)}),p&&Ef(f)}(i.eventManager,t),s.length&&i.au.j_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Af(n,t){const e=q(n),i=t.batch.batchId;try{const s=await Wh(e.localStore,t);Sa(e,i,null),Pa(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await nr(e,s)}catch(s){await ri(s)}}async function wf(n,t,e){const i=q(n);try{const s=await function(u,c){const f=q(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let I;return f.mutationQueue.lookupMutationBatch(p,c).next(w=>(X(w!==null,37113),I=w.keys(),f.mutationQueue.removeMutationBatch(p,w))).next(()=>f.mutationQueue.performConsistencyCheck(p)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(p,I,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,I)).next(()=>f.localDocuments.getDocuments(p,I))})}(i.localStore,t);Sa(i,t,e),Pa(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await nr(i,s)}catch(s){await ri(s)}}function Pa(n,t){(n.Eu.get(t)||[]).forEach(e=>{e.resolve()}),n.Eu.delete(t)}function Sa(n,t,e){const i=q(n);let s=i.Iu[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.Iu[i.currentUser.toKey()]=s}}async function nr(n,t,e){const i=q(n),s=[],o=[],u=[];i.uu.isEmpty()||(i.uu.forEach((c,f)=>{u.push(i.Ru(f,t,e).then(p=>{var I;if((p||e)&&i.isPrimaryClient){const w=p?!p.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;i.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(p){s.push(p);const w=_i.Rs(f.targetId,p);o.push(w)}}))}),await Promise.all(u),i.au.j_(s),await async function(f,p){const I=q(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>C.forEach(p,R=>C.forEach(R.ds,b=>I.persistence.referenceDelegate.addReference(w,R.targetId,b)).next(()=>C.forEach(R.As,b=>I.persistence.referenceDelegate.removeReference(w,R.targetId,b)))))}catch(w){if(!Ze(w))throw w;D(Gh,"Failed to update sequence numbers: "+w)}for(const w of p){const R=w.targetId;if(!w.fromCache){const b=I.xs.get(R),V=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(V);I.xs=I.xs.insert(R,O)}}}(i.localStore,o))}async function Rf(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){D(vf,"User change. New user:",t.toKey());const i=await va(e.localStore,t);e.currentUser=t,function(o,u){o.Eu.forEach(c=>{c.forEach(f=>{f.reject(new k(P.CANCELLED,u))})}),o.Eu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await nr(e,i.ks)}}function Cf(n){const t=q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Af.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=wf.bind(null,t),t}class Kn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Zn(t.databaseInfo.databaseId),this.sharedClientState=this.pu(t),this.persistence=this.yu(t),await this.persistence.start(),this.localStore=this.wu(t),this.gcScheduler=this.Su(t,this.localStore),this.indexBackfillerScheduler=this.bu(t,this.localStore)}Su(t,e){return null}bu(t,e){return null}wu(t){return Qh(this.persistence,new Hh,t.initialUser,this.serializer)}yu(t){return new Ea(gi.fi,this.serializer)}pu(t){return new Jh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Kn.provider={build:()=>new Kn};class Pf extends Kn{constructor(t){super(),this.cacheSizeBytes=t}Su(t,e){X(this.persistence.referenceDelegate instanceof Gn,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new Vh(i,t.asyncQueue,e)}yu(t){const e=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new Ea(i=>Gn.fi(i,e),this.serializer)}}class Yr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>fo(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rf.bind(null,this.syncEngine),await _f(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new yf}()}createDatastore(t){const e=Zn(t.databaseInfo.databaseId),i=function(o){return new rf(o)}(t.databaseInfo);return function(o,u,c,f){return new lf(o,u,c,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,u,c){return new cf(i,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>fo(this.syncEngine,e,0),function(){return oo.C()?new oo:new Zh}())}createSyncEngine(t,e){return function(s,o,u,c,f,p,I){const w=new Tf(s,o,u,c,f,p);return I&&(w.Au=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=q(s);D(en,"RemoteStore shutting down."),o.Ta.add(5),await nn(o),o.Ea.shutdown(),o.da.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Yr.provider={build:()=>new Yr};/**
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
 */const zt="FirestoreClient";class Sf{constructor(t,e,i,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=Bo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async u=>{D(zt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(D(zt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Ca(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Or(n,t){n.asyncQueue.verifyOperationInProgress(),D(zt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await va(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function po(n,t){n.asyncQueue.verifyOperationInProgress();const e=await bf(n);D(zt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>lo(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>lo(t.remoteStore,s)),n._onlineComponents=t}async function bf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(zt,"Using user provided OfflineComponentProvider");try{await Or(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Wn("Error using user provided cache. Falling back to memory cache: "+e),await Or(n,new Kn)}}else D(zt,"Using default OfflineComponentProvider"),await Or(n,new Pf(void 0));return n._offlineComponents}async function Vf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(zt,"Using user provided OnlineComponentProvider"),await po(n,n._uninitializedComponentsProvider._online)):(D(zt,"Using default OnlineComponentProvider"),await po(n,new Yr))),n._onlineComponents}function Df(n){return Vf(n).then(t=>t.syncEngine)}/**
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
 */function ba(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const mo=new Map;/**
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
 */function Va(n,t,e){if(!e)throw new k(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Nf(n,t,e,i){if(t===!0&&i===!0)throw new k(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function go(n){if(!x.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _o(n){if(x.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ei(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function Da(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ei(n);throw new k(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const Na="firestore.googleapis.com",yo=!0;class Eo{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new k(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Na,this.ssl=yo}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:yo;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ya;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Sh)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Nf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ba((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class rr{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new uc;switch(i.type){case"firstParty":return new dc(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new k(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=mo.get(e);i&&(D("ComponentProvider","Removing Datastore"),mo.delete(e),i.terminate())}(this),Promise.resolve()}}function kf(n,t,e,i={}){var s;n=Da(n,rr);const o=Zr(t),u=n._getSettings(),c=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${t}:${e}`;o&&(Ml(`https://${f}`),Bl("Firestore",!0)),u.host!==Na&&u.host!==f&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},u),{host:f,ssl:o,emulatorOptions:i});if(!On(p,c)&&(n._setSettings(p),i.mockUserToken)){let I,w;if(typeof i.mockUserToken=="string")I=i.mockUserToken,w=ft.MOCK_USER;else{I=Ll(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const R=i.mockUserToken.sub||i.mockUserToken.user_id;if(!R)throw new k(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new ft(R)}n._authCredentials=new cc(new Uo(I,w))}}/**
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
 */class vi{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new vi(this.firestore,t,this._query)}}class Dt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dt(this.firestore,t,this._key)}}class Ut extends vi{constructor(t,e,i){super(t,e,qc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dt(this.firestore,null,new x(t))}withConverter(t){return new Ut(this.firestore,t,this._path)}}function Of(n,t,...e){if(n=He(n),Va("collection","path",t),n instanceof rr){const i=W.fromString(t,...e);return _o(i),new Ut(n,null,i)}{if(!(n instanceof Dt||n instanceof Ut))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(W.fromString(t,...e));return _o(i),new Ut(n.firestore,null,i)}}function xf(n,t,...e){if(n=He(n),arguments.length===1&&(t=Bo.newId()),Va("doc","path",t),n instanceof rr){const i=W.fromString(t,...e);return go(i),new Dt(n,null,new x(i))}{if(!(n instanceof Dt||n instanceof Ut))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(W.fromString(t,...e));return go(i),new Dt(n.firestore,n instanceof Ut?n.converter:null,new x(i))}}/**
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
 */const vo="AsyncQueue";class To{constructor(t=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Ta(this,"async_queue_retry"),this.ec=()=>{const i=kr();i&&D(vo,"Visibility state changed to "+i.visibilityState),this.C_.p_()},this.tc=t;const e=kr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nc(),this.rc(t)}enterRestrictedMode(t){if(!this.ju){this.ju=!0,this.Zu=t||!1;const e=kr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ec)}}enqueue(t){if(this.nc(),this.ju)return new Promise(()=>{});const e=new Yt;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.zu.push(t),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(t){if(!Ze(t))throw t;D(vo,"Operation failed with retryable error: "+t)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(t){const e=this.tc.then(()=>(this.Yu=!0,t().catch(i=>{throw this.Ju=i,this.Yu=!1,te("INTERNAL UNHANDLED ERROR: ",Io(i)),i}).then(i=>(this.Yu=!1,i))));return this.tc=e,e}enqueueAfterDelay(t,e,i){this.nc(),this.Xu.indexOf(t)>-1&&(e=0);const s=yi.createAndSchedule(this,t,e,i,o=>this.oc(o));return this.Hu.push(s),s}nc(){this.Ju&&M(47125,{_c:Io(this.Ju)})}verifyOperationInProgress(){}async ac(){let t;do t=this.tc,await t;while(t!==this.tc)}uc(t){for(const e of this.Hu)if(e.timerId===t)return!0;return!1}cc(t){return this.ac().then(()=>{this.Hu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Hu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.ac()})}lc(t){this.Xu.push(t)}oc(t){const e=this.Hu.indexOf(t);this.Hu.splice(e,1)}}function Io(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class ka extends rr{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new To,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new To(t),this._firestoreClient=void 0,await t}}}function Mf(n,t){const e=typeof n=="object"?n:Xu(),i=typeof n=="string"?n:Un,s=Hu(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=Ol("firestore");o&&kf(s,...o)}return s}function Lf(n){if(n._terminated)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ff(n),n._firestoreClient}function Ff(n){var t,e,i;const s=n._freezeSettings(),o=function(c,f,p,I){return new Vc(c,f,p,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,ba(I.experimentalLongPollingOptions),I.useFetchStreams,I.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Sf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const f=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(f),_online:f}}(n._componentsProvider))}/**
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
 */class Je{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Je(Rt.fromBase64String(t))}catch(e){throw new k(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Je(Rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Oa{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class xa{constructor(t){this._methodName=t}}/**
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
 */class Ma{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
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
 */class La{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const Uf=/^__.*__$/;class Bf{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new ie(t,this.data,this.fieldMask,e,this.fieldTransforms):new tn(t,this.data,e,this.fieldTransforms)}}function Fa(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{hc:n})}}class Ti{constructor(t,e,i,s,o,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.Pc(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(t){return new Ti(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Tc({path:i,Ec:!1});return s.dc(t),s}Ac(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Tc({path:i,Ec:!1});return s.Pc(),s}Rc(t){return this.Tc({path:void 0,Ec:!0})}Vc(t){return Qn(t,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pc(){if(this.path)for(let t=0;t<this.path.length;t++)this.dc(this.path.get(t))}dc(t){if(t.length===0)throw this.Vc("Document fields must not be empty");if(Fa(this.hc)&&Uf.test(t))throw this.Vc('Document fields cannot begin and end with "__"')}}class jf{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Zn(t)}gc(t,e,i,s=!1){return new Ti({hc:t,methodName:e,fc:i,path:st.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $f(n){const t=n._freezeSettings(),e=Zn(n._databaseId);return new jf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function zf(n,t,e,i,s,o={}){const u=n.gc(o.merge||o.mergeFields?2:0,t,e,s);$a("Data must be an object, but it was:",u,i);const c=Ba(i,u);let f,p;if(o.merge)f=new At(u.fieldMask),p=u.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const R=qf(t,w,e);if(!u.contains(R))throw new k(P.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Kf(I,R)||I.push(R)}f=new At(I),p=u.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,p=u.fieldTransforms;return new Bf(new It(c),f,p)}function Ua(n,t){if(ja(n=He(n)))return $a("Unsupported field value:",t,n),Ba(n,t);if(n instanceof xa)return function(i,s){if(!Fa(s.hc))throw s.Vc(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Ec&&t.hc!==4)throw t.Vc("Nested arrays are not supported");return function(i,s){const o=[];let u=0;for(const c of i){let f=Ua(c,s.Rc(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=He(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return th(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=J.fromDate(i);return{timestampValue:Kr(s.serializer,o)}}if(i instanceof J){const o=new J(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Kr(s.serializer,o)}}if(i instanceof Ma)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Je)return{bytesValue:dh(s.serializer,i._byteString)};if(i instanceof Dt){const o=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(o))throw s.Vc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ga(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof La)return function(u,c){return{mapValue:{fields:{[Ko]:{stringValue:Wo},[$r]:{arrayValue:{values:u.toArray().map(p=>{if(typeof p!="number")throw c.Vc("VectorValues must only contain numeric values.");return di(c.serializer,p)})}}}}}}(i,s);throw s.Vc(`Unsupported field value: ${Ei(i)}`)}(n,t)}function Ba(n,t){const e={};return $o(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ve(n,(i,s)=>{const o=Ua(s,t.Ic(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function ja(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof Ma||n instanceof Je||n instanceof Dt||n instanceof xa||n instanceof La)}function $a(n,t,e){if(!ja(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=Ei(e);throw i==="an object"?t.Vc(n+" a custom object"):t.Vc(n+" "+i)}}function qf(n,t,e){if((t=He(t))instanceof Oa)return t._internalPath;if(typeof t=="string")return Gf(n,t);throw Qn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Hf=new RegExp("[~\\*/\\[\\]]");function Gf(n,t,e){if(t.search(Hf)>=0)throw Qn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Oa(...t.split("."))._internalPath}catch{throw Qn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Qn(n,t,e,i,s){const o=i&&!i.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${i}`),u&&(f+=` in document ${s}`),f+=")"),new k(P.INVALID_ARGUMENT,c+n+f)}function Kf(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function Qf(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function Wf(n,t){const e=Da(n.firestore,ka),i=xf(n),s=Qf(n.converter,t);return Xf(e,[zf($f(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,Vt.exists(!1))]).then(()=>i)}function Xf(n,t){return function(i,s){const o=new Yt;return i.asyncQueue.enqueueAndForget(async()=>If(await Df(i),s,o)),o.promise}(Lf(n),t)}(function(t,e=!0){(function(s){Ee=s})(Wu),Mn(new Ge("firestore",(i,{instanceIdentifier:s,options:o})=>{const u=i.getProvider("app").getImmediate(),c=new ka(new hc(i.getProvider("auth-internal")),new pc(u,i.getProvider("app-check-internal")),function(p,I){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new k(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bn(p.options.projectId,I)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),he(Os,xs,t),he(Os,xs,"esm2017")})();const Yf={apiKey:"AIzaSyDAC0tKQah4aP08lIsSrQ7fo3iANac5fG4",authDomain:"adam-dfe4e.firebaseapp.com",databaseURL:"https://adam-dfe4e-default-rtdb.firebaseio.com",projectId:"adam-dfe4e",storageBucket:"adam-dfe4e.firebasestorage.app",messagingSenderId:"41649038563",appId:"1:41649038563:web:48a5e2eb5b10ff966291d6",measurementId:"G-907RVW6D07"},Jf=Vo(Yf),Zf=Mf(Jf);function ed(n){return Wf(Of(Zf,"contacts"),{...n,timestamp:J.now()})}export{ed as saveContact};
