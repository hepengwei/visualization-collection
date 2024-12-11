(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[153],{67466:(t,e,n)=>{"use strict";n.d(e,{addImpl:()=>y,bincountImpl:()=>g,bincountReduceImpl:()=>N,bitwiseAndImpl:()=>T,castImpl:()=>l,ceilImpl:()=>S,concatImpl:()=>I,equalImpl:()=>v,expImpl:()=>_,expm1Impl:()=>O,floorDivImpl:()=>A,floorImpl:()=>E,gatherNdImpl:()=>D,gatherV2Impl:()=>k,greaterEqualImpl:()=>V,greaterImpl:()=>M,lessEqualImpl:()=>F,lessImpl:()=>R,linSpaceImpl:()=>L,logImpl:()=>z,maxImpl:()=>C,maximumImpl:()=>$,minimumImpl:()=>P,multiplyImpl:()=>B,negImpl:()=>j,notEqualImpl:()=>U,prodImpl:()=>G,raggedGatherImpl:()=>Q,raggedRangeImpl:()=>Y,raggedTensorToTensorImpl:()=>at,rangeImpl:()=>rt,rsqrtImpl:()=>st,scatterImpl:()=>ot,sigmoidImpl:()=>it,simpleAbsImpl:()=>s,sliceImpl:()=>pt,sparseFillEmptyRowsImpl:()=>ut,sparseReshapeImpl:()=>mt,sparseSegmentReductionImpl:()=>lt,sqrtImpl:()=>ct,staticRegexReplaceImpl:()=>dt,stridedSliceImpl:()=>ht,stringNGramsImpl:()=>ft,stringSplitImpl:()=>Nt,stringToHashBucketFastImpl:()=>Tt,subImpl:()=>xt,tileImpl:()=>wt,topKImpl:()=>vt,transposeImpl:()=>W,uniqueImpl:()=>_t});var a=n(86748);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function r(t,e){Array.isArray(t)||(t=[t]),t.forEach((t=>{null!=t&&a.util.assert("complex64"!==t.dtype,(()=>`${e} does not support complex64 tensors in the CPU backend.`))}))}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(t){const e=new Float32Array(t.length);for(let n=0;n<t.length;++n)e[n]=Math.abs(t[n]);return e}a.Abs;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(t){return(e,n,r,s,o)=>{const i=a.backend_util.assertAndGetBroadcastShape(e,n),p=i.length,u=a.util.computeStrides(i),m=a.util.sizeFromShape(i),l=a.util.getTypedArrayFromDType(o,m),c=e.length,d=n.length,h=a.util.computeStrides(e),y=a.util.computeStrides(n),f=a.backend_util.getBroadcastDims(e,i),g=a.backend_util.getBroadcastDims(n,i);if(f.length+g.length===0)for(let e=0;e<l.length;++e)l[e]=t(r[e%r.length],s[e%s.length]);else for(let e=0;e<l.length;++e){const n=a.util.indexToLoc(e,p,u),o=n.slice(-c);f.forEach((t=>o[t]=0));const i=a.util.locToIndex(o,c,h),m=n.slice(-d);g.forEach((t=>m[t]=0));const N=a.util.locToIndex(m,d,y);l[e]=t(r[i],s[N])}return[l,i]}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function i(t){const{inputs:e,backend:n}=t,{real:a,imag:r}=e,s=n.data.get(a.dataId).values,o=n.data.get(r.dataId).values,i=n.makeTensorInfo(a.shape,"complex64");return n.data.get(i.dataId).complexTensorInfos={real:n.makeTensorInfo(a.shape,"float32",s),imag:n.makeTensorInfo(r.shape,"float32",o)},i}a.Complex;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function p(t,e,n="float32"){if("complex64"===n){return i({inputs:{real:p(t,e,"float32"),imag:p(t,e,"float32")},backend:t})}const r=a.util.makeZerosTypedArray(a.util.sizeFromShape(e),n);return t.makeTensorInfo(e,n,r)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function u(t){const{inputs:e,backend:n}=t,{x:a}=e;return n.incRef(a.dataId),{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}a.Identity;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function m(t){const{inputs:e,backend:n}=t,{input:a}=e,r=n.data.get(a.dataId).complexTensorInfos.real,s=n.data.get(r.dataId).values;return n.makeTensorInfo(r.shape,r.dtype,s)}a.Real;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function l(t,e,n,r){if("int32"===r){return[e,"int32",Int32Array.from(t)]}if("bool"===r){const r=a.util.toTypedArray([0],n),[s,i]=o(((t,e)=>t!==e?1:0))(e,[],t,r,"bool");return[i,"bool",s]}throw new Error(`Error in Cast: failed to cast ${n} to ${r}`)}function c(t){const{inputs:e,backend:n,attrs:r}=t,{x:s}=e,{dtype:o}=r;if("complex64"===o){if("complex64"===s.dtype)return u({inputs:{x:s},backend:n});const t=p(n,s.shape,s.dtype),e=c({inputs:{x:s},backend:n,attrs:{dtype:"float32"}}),a=i({inputs:{real:e,imag:t},backend:n});return n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(e),a}if("complex64"===s.dtype){const t=m({inputs:{input:s},backend:n}),e=c({inputs:{x:t},backend:n,attrs:{dtype:o}});return n.disposeIntermediateTensorInfo(t),e}if(!a.util.hasEncodingLoss(s.dtype,o)){const t=u({inputs:{x:s},backend:n});return{dataId:t.dataId,shape:t.shape,dtype:o}}const d=n.data.get(s.dataId).values,[h,y,f]=l(d,s.shape,s.dtype,o);return n.makeTensorInfo(h,y,f)}a.Cast;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function d(t,e,n,s){return null==n?({inputs:n,backend:o})=>{const{a:i,b:p}=n,u=o;r([i,p],t);const m=u.data.get(i.dataId).values,l=u.data.get(p.dataId).values,c="string"===i.dtype?a.backend_util.fromUint8ToStringArray(m):m,d="string"===i.dtype?a.backend_util.fromUint8ToStringArray(l):l,h=s||i.dtype,[y,f]=e(i.shape,p.shape,c,d,h);return u.makeTensorInfo(f,h,y)}:({inputs:t,backend:a})=>{const{a:r,b:o}=t,p=a;if("complex64"===r.dtype||"complex64"===o.dtype){const t=c({inputs:{x:r},backend:p,attrs:{dtype:"complex64"}}),e=p.data.get(t.dataId),a=e.complexTensorInfos.real,s=e.complexTensorInfos.imag,u=p.data.get(a.dataId).values,m=p.data.get(s.dataId).values,l=c({inputs:{x:o},backend:p,attrs:{dtype:"complex64"}}),d=p.data.get(l.dataId),h=d.complexTensorInfos.real,y=d.complexTensorInfos.imag,f=p.data.get(h.dataId).values,g=p.data.get(y.dataId).values,[N,T,x]=n(r.shape,o.shape,u,m,f,g),b=p.makeTensorInfo(x,"float32",N),w=p.makeTensorInfo(x,"float32",T),S=i({inputs:{real:b,imag:w},backend:p});return p.disposeIntermediateTensorInfo(t),p.disposeIntermediateTensorInfo(l),p.disposeIntermediateTensorInfo(b),p.disposeIntermediateTensorInfo(w),S}{const t=p.data.get(r.dataId).values,n=p.data.get(o.dataId).values,a=s||r.dtype,[i,u]=e(r.shape,o.shape,t,n,a);return p.makeTensorInfo(u,a,i)}}}function h(t){return(e,n,r,s,o,i)=>{const p=a.backend_util.assertAndGetBroadcastShape(e,n),u=a.util.sizeFromShape(p),m=p.length,l=a.util.computeStrides(p),c=a.util.getTypedArrayFromDType("float32",u),d=a.util.getTypedArrayFromDType("float32",u),h=a.backend_util.getBroadcastDims(e,p),y=a.backend_util.getBroadcastDims(n,p),f=a.backend_util.mergeRealAndImagArrays(r,s),g=a.backend_util.mergeRealAndImagArrays(o,i),N=e.length,T=a.util.computeStrides(e),x=n.length,b=a.util.computeStrides(n);if(h.length+y.length===0)for(let e=0;e<c.length;e++){const n=e%f.length,a=e%g.length,r=t(f[2*n],f[2*n+1],g[2*a],g[2*a+1]);c[e]=r.real,d[e]=r.imag}else for(let e=0;e<c.length;e++){const n=a.util.indexToLoc(e,m,l),r=n.slice(-N);h.forEach((t=>r[t]=0));const s=a.util.locToIndex(r,N,T),o=n.slice(-x);y.forEach((t=>o[t]=0));const i=a.util.locToIndex(o,x,b),p=t(f[2*s],f[2*s+1],g[2*i],g[2*i+1]);c[e]=p.real,d[e]=p.imag}return[c,d,p]}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const y=o(((t,e)=>t+e)),f=h(((t,e,n,a)=>({real:t+n,imag:e+a})));d(a.Add,y,f),a.Add;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function g(t,e,n,r,s){const o=a.util.sizeFromShape(r),i=a.util.makeZerosTypedArray(s,n);for(let n=0;n<t.length;n++){const a=t[n];if(a<0)throw new Error("Input x must be non-negative!");a>=s||(i[a]+=o>0?e[n]:1)}return i}function N(t,e,n,r=!1){const s=t.shape[0],o=t.shape[1],i=(0,a.buffer)([s,n],e.dtype);for(let a=0;a<s;a++)for(let s=0;s<o;s++){const o=t.get(a,s);if(o<0)throw new Error("Input x must be non-negative!");o>=n||(r?i.set(1,a,o):e.size>0?i.set(i.get(a,o)+e.get(a,s),a,o):i.set(i.get(a,o)+1,a,o))}return i}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const T=o(((t,e)=>t&e));d(a.BitwiseAnd,T),a.BitwiseAnd;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function x(t){return(e,n,r)=>{const s=a.util.getArrayFromDType(n,e.length);for(let n=0;n<e.length;++n)s[n]=t(e[n],r);return s}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function b(t,e,n){return w(t,x(e),n)}function w(t,e,n){return({inputs:s,attrs:o,backend:i})=>{const{x:p}=s;r(p,t);const u=i,m=u.data.get(p.dataId).values;let l;if("string"===p.dtype){if(!Array.isArray(m))throw new Error("String tensor's value was not an instance of Array");l=a.backend_util.fromUint8ToStringArray(m)}else l=m;const c=n||p.dtype,d=e(l,c,o);return u.makeTensorInfo(p.shape,c,d)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const S=x((t=>Math.ceil(t)));w(a.Ceil,S),a.Ceil;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function I(t,e,n,r){const s=a.util.getArrayFromDType(n,a.util.sizeFromShape(e));if(r&&"string"!==n){let e=0;t.forEach((t=>{const n=a.util.sizeFromShape(t.shape);s.set(t.vals,e),e+=n}))}else{let r=0;t.forEach((t=>{const o="string"===n?a.backend_util.fromUint8ToStringArray(t.vals):t.vals;let i=0;for(let n=0;n<t.shape[0];++n){const a=n*e[1]+r;for(let e=0;e<t.shape[1];++e)s[a+e]=o[i++]}r+=t.shape[1]}))}return s}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const v=o(((t,e)=>t===e?1:0)),_=(d(a.Equal,v,null,"bool"),a.Equal,x((t=>Math.exp(t)))),O=(w(a.Exp,_,"float32"),a.Exp,x((t=>Math.expm1(t)))),E=(w(a.Expm1,O),a.Expm1,x((t=>Math.floor(t)))),A=(w(a.Floor,E),a.Floor,o(((t,e)=>Math.floor(t/e))));d(a.FloorDiv,A,null,"int32"),a.FloorDiv;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function D(t,e,n,r,s,o,i,p,u){const m=(0,a.buffer)([r,o],n);for(let n=0;n<r;n++){const a=[];let r=0;for(let e=0;e<s;e++){const o=t[n*s+e];r+=o*i[e],a.push(o)}if(r<0||r>=u/o)throw new Error(`Invalid indices: ${a} does not index into ${p}`);for(let t=0;t<o;t++)m.values[n*o+t]=e.get(...e.indexToLoc(r*o+t))}return m}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function k(t,e,n){const r=(0,a.buffer)(n,t.dtype);for(let n=0;n<r.size;++n){const a=r.indexToLoc(n).slice(),s=a[0],o=a[2],i=e.locToIndex([s,o]);a[2]=e.values[i];const p=t.locToIndex(a);0<=p&&p<t.values.length&&(r.values[n]=t.values[p])}return r}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const M=o(((t,e)=>t>e?1:0)),V=(d(a.Greater,M,null,"bool"),a.Greater,o(((t,e)=>t>=e?1:0))),R=(d(a.GreaterEqual,V,null,"bool"),a.GreaterEqual,o(((t,e)=>t<e?1:0))),F=(d(a.Less,R,null,"bool"),a.Less,o(((t,e)=>t<=e?1:0)));d(a.LessEqual,F,null,"bool"),a.LessEqual;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function L(t,e,n){const r=(e-t)/(n-1),s=a.util.makeZerosTypedArray(n,"float32");s[0]=t;for(let t=1;t<s.length;t++)s[t]=s[t-1]+r;return s}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const z=x((t=>Math.log(t)));w(a.Log,z),a.Log;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function C(t,e,n,r){const s=a.util.getTypedArrayFromDType(r,a.util.sizeFromShape(n));for(let n=0;n<s.length;++n){const a=n*e;let r=t[a];for(let n=0;n<e;++n){const e=t[a+n];(Number.isNaN(e)||e>r)&&(r=e)}s[n]=r}return s}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const $=o(((t,e)=>Math.max(t,e))),P=(d(a.Maximum,$),a.Maximum,o(((t,e)=>Math.min(t,e)))),B=(d(a.Minimum,P),a.Minimum,o(((t,e)=>t*e))),q=h(((t,e,n,a)=>({real:t*n-e*a,imag:t*a+e*n})));d(a.Multiply,B,q),a.Multiply;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function j(t,e,n){const r=a.util.createScalarValue(-1,n);return B([],e,r,t,n)}a.Neg;const U=o(((t,e)=>t!==e?1:0));d(a.NotEqual,U,null,"bool"),a.NotEqual;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function W(t,e,n,r,s){const o=e.length,i=a.util.sizeFromShape(e),p=a.util.computeStrides(e),u=a.util.computeStrides(s),m=a.util.getTypedArrayFromDType(n,a.util.sizeFromShape(s));for(let e=0;e<i;++e){const n=a.util.indexToLoc(e,o,p),s=new Array(n.length);for(let t=0;t<s.length;t++)s[t]=n[r[t]];m[a.util.locToIndex(s,o,u)]=t[e]}return m}a.Transpose;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function G(t,e,n,r){const[s,o]=a.backend_util.computeOutAndReduceShapes(t,r),i=(0,a.upcastType)(e,"int32"),p=a.util.makeZerosTypedArray(a.util.sizeFromShape(s),i),u=a.util.sizeFromShape(o);for(let t=0;t<p.length;++t){const e=t*u;let a=1;for(let t=0;t<u;++t)a*=n[e+t];p[t]=a}return{outVals:p,outShape:s,outDtype:i}}a.Prod;function H(t,e,n,a){const r=[];let s=0;const o=e.length-1+n.length,i=new Array(o).fill(null).map((()=>[0]));!function(t,e){for(let n=0;n<t.length;++n){const a=t[n],r=n===t.length-1?e:t[n+1].length;if(0===a.length)throw new Error("Ragged splits may not be empty");if(a[0]<0)throw new Error("Ragged splits must be non-negative");if(a[a.length-1]>r)throw new Error("Ragged splits must not point past values");for(let t=1;t<a.length;++t)if(a[t-1]>a[t])throw new Error("Ragged splits must be sorted in ascending order")}}(n,a);let p=1;for(let t=0;t<e.length-1;++t){p*=e[t];const n=e[t+1];for(let e=1;e<p+1;++e)i[t].push(e*n)}for(let a=0;a<t.length;++a){let o=t[a],p=t[a]+1;for(let t=0;t<n.length;++t){const a=n[t],r=t+e.length-1;if(r>=0){const t=i[r],e=t[t.length-1]-a[o];for(let t=o;t<p;++t)i[r].push(a[t+1]+e)}o=a[o],p=a[p]}p!==o&&(r.push([o,p]),s+=p-o)}return{outSplits:i,valueSlices:r,numValues:s}}function K(t,e){const n=t.slice(0,e);for(;n.length<e;)n.push(1);for(let a=e;a<t.length;a++)n[e-1]*=t[a];return n}function Z(t,e,n,r,s){const o=e.slice();o[0]=s;const i=a.util.getArrayFromDType(n,a.util.sizeFromShape(o)),p=t.length;return function(t,e,n,a,r,s){const o=K(e,2)[1],i=K(s,2)[1];let p=0;for(const e of n)for(let n=e[0];n<e[1];++n){for(let e=0;e<a;++e)r[p*i+e]=t[n*o+e];++p}}(t,e,r,0===p?0:p/e[0],i,o),[i,o]}function Q(t,e,n,r,s,o,i,p){if(0===t.length)throw new Error("paramsNestedSplits must be non empty");if(0===e[0].length)throw new Error("Split tensors must not be scalars");if(
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){t.forEach(((t,r)=>{if(t<0||t>=n){const s=a.util.indexToLoc(r,e.length,a.util.computeStrides(e)).join(",");throw new Error(`indices[${s}] = ${t} is not in [0, ${n})`)}}))}(o,i,e[0][0]-1),0===r.length)throw new Error("params.rank must be nonzero");const u=r[0],{outSplits:m,valueSlices:l,numValues:c}=H(o,i,t,u),d=function(t){const e=[];for(let n=0;n<t.length;++n){const r=t[n].length,s=a.util.getArrayFromDType("int32",r);e.push(s),t[n].forEach(((t,e)=>s[e]=t))}return e}(m),h=Z(n,r,s,l,c);return[d,h[0],h[1]]}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const X=2147483647;function Y(t,e,n,r,s,o,i){if(e.length>1)throw new Error("starts must be a scalar or vector");if(s.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const p=0===e.length,u=0===s.length,m=0===i.length,l=[];p||l.push(e[0]),u||l.push(s[0]),m||l.push(i[0]);for(let t=1;t<l.length;++t)if(l[t]!==l[t-1])throw new Error("starts, limits, and deltas must have the same shape");const c=0===l.length?1:l[0],d=a.util.getArrayFromDType("int32",c+1);d[0]=0;for(let e=0;e<c;++e){const n=p?t[0]:t[e],a=u?r[0]:r[e],s=m?o[0]:o[e];if(0===s)throw new Error("Requires delta != 0");let i;if(s>0&&a<n||s<0&&a>n)i=0;else if(i=Math.ceil(Math.abs((a-n)/s)),i>X)throw new Error(`Requires ((limit - start) / delta) <= ${X}`);d[e+1]=d[e]+i}const h=d[c],y=a.util.getArrayFromDType(n,h);let f=0;for(let e=0;e<c;++e){const n=d[e+1]-d[e];let a=p?t[0]:t[e];const r=m?o[0]:o[e];for(let t=0;t<n;++t)y[f++]=a,a+=r}return[d,y]}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var J=a.backend_util.RowPartitionType;class tt{constructor(t,e,n,r,s,o,i,p,u,m){this.shape=t,this.shapeShape=e,this.values=n,this.valuesShape=r,this.valuesDType=s,this.defaultValue=o,this.defaultValueShape=i,this.rowPartitionValues=p,this.rowPartitionValuesShapes=u,this.rowPartitionTypes=a.backend_util.getRowPartitionTypesHelper(m),this.raggedRank=a.backend_util.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===J.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===J.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){const e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case J.VALUE_ROWIDS:return tt.getMaxWidthValueRowID(e);case J.ROW_SPLITS:return tt.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${J[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){const e=t.length;if(0===e||1===e)return 0;let n=0;for(let a=0;a<e-1;++a){const e=t[a+1]-t[a];e>n&&(n=e)}return n}static getMaxWidthValueRowID(t){const e=t.length;if(0===e)return 0;let n=0,a=t[0],r=0;for(let s=1;s<e;++s){const e=t[s];e!==a&&(a=e,r=Math.max(s-n,r),n=s)}return Math.max(e-n,r)}tensorShapeFromTensor(t,e,n=!0){if(0===e.length){if(-1===t[0])return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return nt(t,n)}calculateOutputSize(t){const e=this.valuesShape,n=this.defaultValueShape;a.backend_util.validateDefaultValueShape(n,e);const r=this.tensorShapeFromTensor(this.shape,this.shapeShape),s=a.backend_util.combineRaggedTensorToTensorShapes(this.raggedRank,r,e);s[0]<0&&(s[0]=t);for(let t=1;t<=this.raggedRank;++t)s[t]<0&&(s[t]=this.getMaxWidth(t));return s}calculateFirstParentOutputIndex(t,e,n){const r=Math.min(t,n),s=[];let o=0;for(let t=0;t<r;++t,o+=e)s.push(o);for(let e=r;e<t;++e)s.push(-1);return a.util.assert(s.length===t,(()=>"Final length of result must be equal to firstDimension.")),s}calculateOutputIndexRowSplit(t,e,n,a){const r=t.length,s=[];for(let o=0;o<r-1;++o){const r=t[o+1]-t[o];let i=Math.min(a,r),p=e[o];-1===p&&(i=0);for(let t=0;t<i;++t)s.push(p),p+=n;for(let t=0;t<r-i;++t)s.push(-1)}if(r>0&&s.length!==t[r-1])throw new Error("Invalid row split size.");return s}calculateOutputIndexValueRowID(t,e,n,a){const r=t.length,s=[];if(0===r)return[];let o=0,i=t[0];if(i>=e.length)throw new Error(`Got currentValueRowId=${i}, which is not less than ${e.length}`);let p=e[i];s.push(p);for(let u=1;u<r;++u){const r=t[u];if(r===i)p>=0&&(++o,o<a?p+=n:p=-1);else{if(o=0,i=r,r>=e.length)throw new Error(`Got nextValueRowId=${r} which is not less than ${e.length}`);p=e[r]}s.push(p)}if(s.length!==t.length)throw new Error("Invalid row ids.");return s}calculateOutputIndex(t,e,n,a){const r=this.getRowPartitionTensor(t),s=this.getRowPartitionTypeByDimension(t);switch(s){case J.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(r,e,n,a);case J.ROW_SPLITS:if(r.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${r.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(r,e,n,a);default:throw new Error(`Unsupported partition type: ${J[s]}`)}}getFirstDimensionSize(){const t=this.rowPartitionValues[0];if(0===this.rowPartitionTypes.length)throw new Error("No row_partition_types given.");const e=this.rowPartitionTypes[0];switch(e){case J.FIRST_DIM_SIZE:return t[0];case J.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case J.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${J[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const t=this.getFirstDimensionSize(),e=this.calculateOutputSize(t),n=new Array(this.raggedRank+1);n[n.length-1]=1;for(let t=n.length-2;t>=0;--t)n[t]=n[t+1]*e[t+1];const r=nt(e,!1),s=a.util.getArrayFromDType(this.valuesDType,a.util.sizeFromShape(r));if(n[0]*e[0]>0){let a=this.calculateFirstParentOutputIndex(t,n[0],e[0]);for(let t=1;t<=this.raggedRank;++t){a=this.calculateOutputIndex(t-1,a,n[t],e[t])}this.setOutput(this.raggedRank,a,s,r)}return[r,s]}setOutput(t,e,n,r){if(0===n.length)return;const s=this.values,o=n;let i=r.slice();i=i.slice(t+1);const p=a.util.sizeFromShape(i),u=e.length;let m=this.defaultValue;if(m.length!==p&&1!==m.length){const t=this.defaultValueShape;(0,a.tidy)((()=>{const e=(0,a.reshape)(m,t),n=(0,a.broadcastTo)(e,i);m=n.dataSync()}))}let l=0,c=0,d=0;for(let t=0;t<=u;++t){let a=t<u?e[t]:-1;if(a!==d){if(c<d){const t=s.subarray(l*p);et(o.subarray(c*p),t,(d-c)*p)}if(t>=u){const t=n.length;a=Math.floor(t/p)}if(a>d)if(1===this.defaultValue.length)o.subarray(d*p,a*p).fill(this.defaultValue[0]),d=a;else for(;a>d;){et(o.slice(d*p),m,p),++d}a<0?(l=t+1,c=d):(l=t,c=d,d=c+1)}else++d}}}function et(t,e,n){for(let a=0;a<n;a++)t[a]=e[a]}function nt(t,e){const n=[];for(let a of t){if(a<0){if(!e)throw new Error(`Dimension ${a} must be >= 0`);if(a<-1)throw new Error(`Dimension ${a} must be >= -1`);a=-1}n.push(a)}return n}function at(t,e,n,a,r,s,o,i,p,u){return new tt(t,e,n,a,r,s,o,i,p,u).compute()}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function rt(t,e,n,r){if(t===e||t<e&&n<0||e<t&&n>1)return a.util.makeZerosTypedArray(0,r);const s=Math.abs(Math.ceil((e-t)/n)),o=a.util.makeZerosTypedArray(s,r);e<t&&1===n&&(n=-1),o[0]=t;for(let t=1;t<o.length;t++)o[t]=o[t-1]+n;return o}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const st=x((t=>1/Math.sqrt(t)));w(a.Rsqrt,st),a.Rsqrt;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ot(t,e,n,r,s,o,i,p,u,m){const l=[r/s,s],c=t.values,d=e.values;if(0===r)return(0,a.buffer)(n,e.dtype);const h=u instanceof a.TensorBuffer?u:(0,a.buffer)(l,e.dtype);"string"==typeof u||"number"==typeof u?h.values.fill(u):"boolean"==typeof u&&h.values.fill(+u);for(let t=0;t<o;t++){const a=[];let o=0;for(let e=0;e<i;e++){const n=c[t*i+e];a.push(n),o+=n*p[e]}if(o<0||o>=r/s)throw new Error(`Invalid indices: ${a} does not index into ${n}`);for(let n=0;n<s;n++)m?h.values[o*s+n]+=d[t*s+n]:h.values[o*s+n]=0===e.rank?d[0]:d[t*s+n]}return h}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const it=x((t=>1/(1+Math.exp(-t))));b(a.Sigmoid,(t=>1/(1+Math.exp(-t)))),a.Sigmoid;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function pt(t,e,n,r,s){const o=a.slice_util.isSliceContinous(r,e,n),i=a.util.sizeFromShape(n),p=a.util.computeStrides(r);if(o){const n=a.slice_util.computeFlatOffset(e,p);return"string"===s?t.slice(n,n+i):t.subarray(n,n+i)}const u="string"===s?a.backend_util.fromUint8ToStringArray(t):t,m=(0,a.buffer)(r,s,u),l=(0,a.buffer)(n,s);for(let t=0;t<l.size;++t){const n=l.indexToLoc(t),a=n.map(((t,n)=>t+e[n]));l.set(m.get(...a),...n)}return"string"===s?a.backend_util.fromStringArrayToUint8(l.values):l.values}a.Slice;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ut(t,e,n,r,s,o,i){const p=e[0],u=o[0],m=new Array(u),l=new Array(p),c=e[1];if(0===u){if(0!==p)throw new Error(a.backend_util.getSparseFillEmptyRowsIndicesDenseShapeMismatch(p));return[a.util.getArrayFromDType(n,0),[0,c],a.util.getArrayFromDType(s,0),m,l]}let d=!0,h=0;const y=new Array(u).fill(0);for(let e=0;e<p;++e){const n=t[e*c];if(n<0)throw new Error(a.backend_util.getSparseFillEmptyRowsNegativeIndexErrorMessage(e,n));if(n>=u)throw new Error(a.backend_util.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(e,n,u));++y[n],d=d&&n>=h,h=n}let f=!0;for(let t=0;t<u;++t){const e=0===y[t];m[t]=e,f=f&&!e,y[t]=Math.max(y[t],1),t>0&&(y[t]+=y[t-1])}if(f&&d){const e=t,n=r;for(let t=0;t<p;++t)l[t]=t;return[e,[p,c],n,m,l]}{const e=y[u-1],o=a.util.getArrayFromDType(n,e*c),d=a.util.getArrayFromDType(s,e),h=new Array(u).fill(0);for(let e=0;e<p;++e){const n=t[e*c],a=h[n],s=(0===n?0:y[n-1])+a;h[n]++;for(let n=0;n<c;++n)o[s*c+n]=t[e*c+n];d[s]=r[e],l[e]=s}for(let t=0;t<u;++t){if(0===h[t]){const e=0===t?0:y[t-1];o[e*c+0]=t;for(let t=1;t<c;++t)o[e*c+t]=0;d[e]=i}}return[o,[e,c],d,m,l]}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function mt(t,e,n,r,s){const o=a.util.sizeFromShape(r),i=e[0],p=s.length,u=[];let m=1,l=-1;for(let t=0;t<p;++t){const e=s[t];if(-1===e){if(-1!==l)throw new Error(a.backend_util.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(l,t));l=t,u.push(1)}else{if(e<0)throw new Error(a.backend_util.getSparseReshapeNegativeOutputDimErrorMessage(t,e));m*=e,u.push(e)}}if(-1!==l){if(m<=0)throw new Error(a.backend_util.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());const t=Math.trunc(o/m);if(m*t!==o)throw new Error(a.backend_util.getSparseReshapeInputOutputMultipleErrorMessage(r,u));u[l]=t}if(a.util.sizeFromShape(u)!==o)throw new Error(a.backend_util.getSparseReshapeInputOutputMismatchErrorMessage(r,u));const c=r.length,d=[];if(c>0){d[c-1]=1;for(let t=c-2;t>=0;--t)d[t]=d[t+1]*r[t+1]}const h=[];if(p>0){h[p-1]=1;for(let t=p-2;t>=0;--t)h[t]=h[t+1]*u[t+1]}const y=a.util.getArrayFromDType(n,i*p);for(let e=0;e<i;++e){let n=0;for(let a=0;a<c;++a)n+=t[e*c+a]*d[a];for(let t=0;t<p;++t)y[e*p+t]=Math.trunc(n/h[t]),n%=h[t]}return[y,[i,p],u]}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function lt(t,e,n,r,s,o=!1,i=0){const p=r.length,u=[e[0],t.length/e[0]],m=u[1],l=p>0?s[p-1]+1:0;if(l<0)throw new Error(a.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());const c=e.slice();c[0]=l;const d=c.reduce(((t,e)=>t*e),1),h=a.util.getArrayFromDType(n,d);if(0===p)return l>0&&h.fill(i),[h,c];if(l<=0)throw new Error(a.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let y=0,f=1,g=0,N=s[y];for(;;){let e=0;if(f<p){if(e=s[f],N===e){++f;continue}if(N>=e)throw new Error(a.backend_util.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(N<0||N>=l)throw new Error(a.backend_util.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(N,l));N>g&&h.fill(i,g*m,N*m);for(let e=y;e<f;++e){const n=r[e];if(n<0||n>=u[0])throw new Error(a.backend_util.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(e,r[e],u[0]));for(let e=0;e<m;e++)h[N*m+e]+=t[n*m+e]}if(o)for(let t=0;t<m;t++)h[N*m+t]/=f-y;if(y=f,++f,g=N+1,N=e,f>p)break}return g<l&&h.fill(i,g*m,l*m),[h,c]}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ct=x((t=>Math.sqrt(t))),dt=(b(a.Sqrt,(t=>Math.sqrt(t))),a.Sqrt,x(((t,e)=>{const{pattern:n,replaceGlobal:a,rewrite:r}=e;return t.replace(new RegExp(n,a?"g":""),r)})));w(a.StaticRegexReplace,dt),a.StaticRegexReplace;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ht(t,e,n,r){const s=(0,a.buffer)(t,e.dtype);for(let t=0;t<s.size;t++){const a=s.indexToLoc(t),o=new Array(a.length);for(let t=0;t<o.length;t++)o[t]=a[t]*n[t]+r[t];s.set(e.get(...o),...a)}return s}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class yt{constructor(t,e,n,r,s,o){this.separator=a.util.encodeString(t),this.nGramWidths=e,this.leftPad=a.util.encodeString(n),this.rightPad=a.util.encodeString(r),this.padWidth=s,this.preserveShort=o}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){const n=this.getPadWidth(e);return Math.max(0,t+2*n-e+1)}createNGrams(t,e,n,a,r,s){for(let o=0;o<r;++o){const i=this.getPadWidth(s),p=Math.max(0,i-o),u=Math.max(0,i-(r-(o+1))),m=s-(p+u),l=e+(p>0?0:o-i);let c=0;c+=p*this.leftPad.length;for(let e=0;e<m;++e)c+=t[l+e].length;c+=u*this.rightPad.length;c+=(p+u+m-1)*this.separator.length,n[a+o]=new Uint8Array(c);const d=n[a+o];let h=0;const y=t=>t.forEach((t=>d[h++]=t));for(let t=0;t<p;++t)y(this.leftPad),y(this.separator);for(let e=0;e<m-1;++e)y(t[l+e]),y(this.separator);if(m>0){y(t[l+m-1]);for(let t=0;t<u;++t)y(this.separator),y(this.rightPad)}else{for(let t=0;t<u-1;++t)y(this.rightPad),y(this.separator);y(this.rightPad)}}}compute(t,e){const n=t.length,r=e.length;if(r>0){let t=e[0];if(0!==t)throw new Error(`First split value must be 0, got ${t}`);for(let a=1;a<r;++a){let r=e[a]>=t;if(r=r&&e[a]<=n,!r)throw new Error(`Invalid split value ${e[a]}, must be in [${t}, ${n}]`);t=e[a]}if(t!==n)throw new Error(`Last split value must be data size. Expected ${n}, got ${t}`)}const s=r-1,o=a.util.getArrayFromDType("int32",r);if(0===n||0===r){const t=new Array(n);for(let t=0;t<=s;++t)o[t]=0;return[t,o]}o[0]=0;for(let t=1;t<=s;++t){const n=e[t]-e[t-1];let a=0;this.nGramWidths.forEach((t=>{a+=this.getNumNGrams(n,t)})),this.preserveShort&&n>0&&0===a&&(a=1),o[t]=o[t-1]+a}const i=new Array(o[s]);for(let n=0;n<s;++n){const a=e[n];let r=o[n];if(this.nGramWidths.forEach((s=>{const o=e[n+1]-e[n],p=this.getNumNGrams(o,s);this.createNGrams(t,a,i,r,p,s),r+=p})),this.preserveShort&&r===o[n]){const s=e[n+1]-e[n];if(0===s)continue;const o=s+2*this.padWidth,p=1;this.createNGrams(t,a,i,r,p,o)}}return[i,o]}}function ft(t,e,n,a,r,s,o,i){return new yt(n,a,r,s,o,i).compute(t,e)}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function gt(t,e,n,a){if(!t.length)return;if(0===e.length){for(let e=0;e<t.length;++e)a.push(t.subarray(e,e+1));return}if(1===e.length){const r=e[0];let s=t.indexOf(r);for(;-1!==s;){const e=t.subarray(0,s);n&&0===e.length||a.push(e),s=(t=t.subarray(s+1)).indexOf(r)}return void(n&&0===t.length||a.push(t))}let r=0;for(let s=0;s<t.length+1;s++)if(s===t.length||-1!==e.indexOf(t[s])){const e=t.subarray(r,s);n&&0===e.length||a.push(e),r=s+1}}function Nt(t,e,n){const r=t.length,s=[];let o=0,i=0;const p=new Array(r);for(let a=0;a<r;++a){const r=s.length;gt(t[a],e,n,s);const u=s.length-r;p[a]=u,o+=u,i=Math.max(i,u)}const u=a.util.getArrayFromDType("int32",2*o),m=new Array(o),l=[r,i];let c=0;for(let t=0;t<r;++t)for(let e=0;e<p[t];++e)u[2*c]=t,u[2*c+1]=e,m[c]=s[c],++c;return[u,m,l]}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Tt(t,e){const n=a.util.getArrayFromDType("int32",t.length);for(let r=0;r<t.length;++r)n[r]=a.util.fingerPrint64(t[r]).modulo(e).getLowBitsUnsigned();return n}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const xt=o(((t,e)=>t-e)),bt=h(((t,e,n,a)=>({real:t-n,imag:e-a})));d(a.Sub,xt,bt),a.Sub;
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function wt(t,e){const n=new Array(t.rank);for(let a=0;a<n.length;a++)n[a]=t.shape[a]*e[a];const r=(0,a.buffer)(n,t.dtype);for(let e=0;e<r.values.length;++e){const n=r.indexToLoc(e),a=new Array(t.rank);for(let e=0;e<a.length;e++)a[e]=n[e]%t.shape[e];const s=t.locToIndex(a);r.values[e]=t.values[s]}return r}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const St=(t,e)=>{const n=e.value-t.value;return 0===n?t.index-e.index:n};function It(t,e,n=0,r=t.length-1){for(;r>n;){if(r-n>600){const a=r-n+1,s=e-n+1,o=Math.log(a),i=.5*Math.exp(2*o/3),p=.5*Math.sqrt(o*i*(a-i)/a)*Math.sign(s-a/2);It(t,e,Math.max(n,Math.floor(e-s*i/a+p)),Math.min(r,Math.floor(e+(a-s)*i/a+p)))}const s=t[e];let o=n,i=r;for(a.util.swap(t,n,e),St(t[r],s)>0&&a.util.swap(t,n,r);o<i;){for(a.util.swap(t,o,i),o++,i--;St(t[o],s)<0;)o+=1;for(;St(t[i],s)>0;)i-=1}0===St(t[n],s)?a.util.swap(t,n,i):(i+=1,a.util.swap(t,i,r)),i<=e&&(n=i+1),e<=i&&(r=i-1)}}function vt(t,e,n,r,s){const o=e[e.length-1],[i,p]=[t.length/o,o],u=a.util.getTypedArrayFromDType(n,i*r),m=a.util.getTypedArrayFromDType("int32",i*r);for(let e=0;e<i;e++){const n=e*p,a=t.subarray(n,n+p);let o=new Array(a.length);a.forEach(((t,e)=>o[e]={value:t,index:e})),r<o.length&&(It(o,r),o=o.slice(0,r)),s&&o.sort(St);const i=e*r,l=u.subarray(i,i+r),c=m.subarray(i,i+r);for(let t=0;t<r;t++)l[t]=o[t].value,c[t]=o[t].index}const l=e.slice();return l[l.length-1]=r,[(0,a.buffer)(l,n,u),(0,a.buffer)(l,"int32",m)]}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function _t(t,e,n,r){const s=a.util.parseAxisParam(e,n)[0],o=[1,n[0],1];for(let t=0;t<s;t++)o[0]*=n[t];o[1]=n[s];for(let t=s+1;t<n.length;t++)o[2]*=n[t];const i=new Map,p=new Int32Array(n[s]),u=new a.TensorBuffer(o,r,t),m=[],l=1===o[0]&&1===o[2];for(let e=0;e<n[s];e++){let n;if(l)n=t[e].toString();else{const t=[];for(let n=0;n<o[0];n++)for(let a=0;a<o[2];a++)t.push(u.get(n,e,a));n=t.join(",")}const a=i.get(n);if(null!=a)p[e]=a;else{const t=i.size;i.set(n,t),p[e]=t,m.push(e)}}const c=o.slice();c[1]=i.size;const d=new a.TensorBuffer(c,r);m.forEach(((t,e)=>{for(let n=0;n<o[0];n++)for(let a=0;a<o[2];a++)d.set(u.get(n,t,a),n,e,a)}));const h=n.slice();return h[s]=c[1],{outputValues:d.values,outputShape:h,indices:p}}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */,5805:(t,e,n)=>{"use strict";n.d(e,{ox:()=>Wt});var a={};n.r(a),n.d(a,{json:()=>F});var r={};n.r(r),n.d(r,{json:()=>L});var s={};n.r(s),n.d(s,{json:()=>z});var o={};n.r(o),n.d(o,{json:()=>C});var i={};n.r(i),n.d(i,{json:()=>$});var p={};n.r(p),n.d(p,{json:()=>P});var u={};n.r(u),n.d(u,{json:()=>B});var m={};n.r(m),n.d(m,{json:()=>q});var l={};n.r(l),n.d(l,{json:()=>j});var c={};n.r(c),n.d(c,{json:()=>U});var d={};n.r(d),n.d(d,{json:()=>W});var h={};n.r(h),n.d(h,{json:()=>G});var y={};n.r(y),n.d(y,{json:()=>H});var f={};n.r(f),n.d(f,{json:()=>K});var g={};n.r(g),n.d(g,{json:()=>Z});var N={};n.r(N),n.d(N,{json:()=>Q});var T={};n.r(T),n.d(T,{json:()=>X});var x={};n.r(x),n.d(x,{json:()=>Y});var b={};n.r(b),n.d(b,{json:()=>J});var w=n(86748);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
var S,I;(0,w.env)().registerFlag("KEEP_INTERMEDIATE_TENSORS",(()=>!1),(t=>{t&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")})),function(t){t[t.DT_INVALID=0]="DT_INVALID",t[t.DT_FLOAT=1]="DT_FLOAT",t[t.DT_DOUBLE=2]="DT_DOUBLE",t[t.DT_INT32=3]="DT_INT32",t[t.DT_UINT8=4]="DT_UINT8",t[t.DT_INT16=5]="DT_INT16",t[t.DT_INT8=6]="DT_INT8",t[t.DT_STRING=7]="DT_STRING",t[t.DT_COMPLEX64=8]="DT_COMPLEX64",t[t.DT_INT64=9]="DT_INT64",t[t.DT_BOOL=10]="DT_BOOL",t[t.DT_QINT8=11]="DT_QINT8",t[t.DT_QUINT8=12]="DT_QUINT8",t[t.DT_QINT32=13]="DT_QINT32",t[t.DT_BFLOAT16=14]="DT_BFLOAT16",t[t.DT_QINT16=15]="DT_QINT16",t[t.DT_QUINT16=16]="DT_QUINT16",t[t.DT_UINT16=17]="DT_UINT16",t[t.DT_COMPLEX128=18]="DT_COMPLEX128",t[t.DT_HALF=19]="DT_HALF",t[t.DT_RESOURCE=20]="DT_RESOURCE",t[t.DT_VARIANT=21]="DT_VARIANT",t[t.DT_UINT32=22]="DT_UINT32",t[t.DT_UINT64=23]="DT_UINT64",t[t.DT_FLOAT_REF=101]="DT_FLOAT_REF",t[t.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",t[t.DT_INT32_REF=103]="DT_INT32_REF",t[t.DT_UINT8_REF=104]="DT_UINT8_REF",t[t.DT_INT16_REF=105]="DT_INT16_REF",t[t.DT_INT8_REF=106]="DT_INT8_REF",t[t.DT_STRING_REF=107]="DT_STRING_REF",t[t.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",t[t.DT_INT64_REF=109]="DT_INT64_REF",t[t.DT_BOOL_REF=110]="DT_BOOL_REF",t[t.DT_QINT8_REF=111]="DT_QINT8_REF",t[t.DT_QUINT8_REF=112]="DT_QUINT8_REF",t[t.DT_QINT32_REF=113]="DT_QINT32_REF",t[t.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",t[t.DT_QINT16_REF=115]="DT_QINT16_REF",t[t.DT_QUINT16_REF=116]="DT_QUINT16_REF",t[t.DT_UINT16_REF=117]="DT_UINT16_REF",t[t.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",t[t.DT_HALF_REF=119]="DT_HALF_REF",t[t.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",t[t.DT_VARIANT_REF=121]="DT_VARIANT_REF",t[t.DT_UINT32_REF=122]="DT_UINT32_REF",t[t.DT_UINT64_REF=123]="DT_UINT64_REF"}(S||(S={})),function(t){let e;!function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"}(e=t.CheckpointFormatVersion||(t.CheckpointFormatVersion={}))}(I||(I={}));
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const v={};function _(t){return v[t]}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function O(t,e,n,a,r){const s=e.inputParams[t];if(s&&void 0!==s.inputIndexStart){const t=s.inputIndexStart,o=0===s.inputIndexEnd?void 0:void 0===s.inputIndexEnd?t+1:s.inputIndexEnd,i=t<0?e.inputNames.length+t:t;if("tensor"===s.type)return E(e.inputNames[i],n,a,r);if("tensors"===s.type){const s=e.inputs.slice(t,o);return e.inputNames.slice(t,o).filter(((t,e)=>{var n;return"NoOp"!==(null===(n=s[e])||void 0===n?void 0:n.op)})).map((t=>E(t,n,a,r)))}const p=E(e.inputNames[i],n,a,r),u=p.dataSync();return"number"===s.type?u[0]:w.util.toNestedArray(p.shape,u)}const o=e.attrParams[t];return o&&o.value}function E(t,e,n,a){const[r,s]=M(t,n);if(null!=a){const t=a.getHashTableHandleByName(r);if(null!=t)return t}const o=n.currentContextIds.find((t=>!!e[k(r,t)]));return void 0!==o?e[k(r,o)][s]:void 0}function A(t,e,n){return e[k(t,n.currentContextId)]}function D(t,e){const[n,a,r]=M(t,e);return[k(n,e&&e.currentContextId),a,r]}function k(t,e){return e?`${t}-${e}`:t}function M(t,e){if(""===t)return["",0,void 0];const n=null!=e&&null!=e.parseNodeNameCache;if(n){const n=e.parseNodeNameCache.get(t);if(null!=n)return n}const a=t.split(":");let r;if(1===a.length)r=[t,0,void 0];else{const t=a[0],e=3===a.length?a[1]:void 0;r=[t,Number(a[a.length-1]),e]}return n&&e.parseNodeNameCache.set(t,r),r}function V(t,e,n){let a=O("pad",t,e,n);if("explicit"===a){a=O("explicitPaddings",t,e,n);const r=[[0,0],[0,0],[0,0],[0,0]];for(let t=0;t<4;t++)r[t][0]=a[2*t],r[t][1]=a[2*t+1];return r}return a}function R(t){return t.kept?t:(0,w.clone)(t)}
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const F=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],L=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],z=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],C=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],$=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],P=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],B=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],q=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],j=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],U=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],W=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],G=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],H=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],K=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],Z=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],Q=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],X=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],Y=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],J=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class tt{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[].concat(...[a,r,s,o,i,p,u,m,l,c,d,h,y,f,g,N,T,x,b].map((t=>t.json)));this.opMappers=t.reduce(((t,e)=>(t[e.tfOpName]=e,t)),{})}transformGraph(t,e={}){const n=t.node,a=[],r=[],s=[],o=n.reduce(((t,e)=>(t[e.name]=this.mapNode(e),e.op.startsWith("Placeholder")?a.push(t[e.name]):"Const"===e.op?r.push(t[e.name]):null!=e.input&&0!==e.input.length||s.push(t[e.name]),t)),{});let i=[];const p=[];let u={},m={};null!=e&&(u=this.mapSignatureEntries(e.inputs),m=this.mapSignatureEntries(e.outputs));const l=Object.keys(o);l.forEach((t=>{const e=o[t];e.inputNames.forEach(((t,n)=>{const[a,,r]=D(t),s=o[a];if(null!=s.outputs){const t=s.outputs.indexOf(r);if(-1!==t){const r=`${a}:${t}`;e.inputNames[n]=r}}e.inputs.push(s),s.children.push(e)}))})),0===Object.keys(m).length?l.forEach((t=>{const e=o[t];0===e.children.length&&p.push(e)})):Object.keys(m).forEach((t=>{const[e]=D(t),n=o[e];null!=n&&(n.signatureKey=m[t],p.push(n))})),Object.keys(u).length>0?Object.keys(u).forEach((t=>{const[e]=D(t),n=o[e];n&&(n.signatureKey=u[t],i.push(n))})):i=a;let c={};null!=t.library&&null!=t.library.function&&(c=t.library.function.reduce(((t,e)=>(t[e.signature.name]=this.mapFunction(e),t)),{}));const d={nodes:o,inputs:i,outputs:p,weights:r,placeholders:a,signature:e,functions:c};return s.length>0&&(d.initNodes=s),d}mapSignatureEntries(t){return Object.keys(t||{}).reduce(((e,n)=>(e[t[n].name]=n,e)),{})}mapNode(t){const e=_(t.op)||this.opMappers[t.op]||{};null==t.attr&&(t.attr={});const n={name:t.name,op:t.op,category:e.category,inputNames:(t.input||[]).map((t=>t.startsWith("^")?t.slice(1):t)),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:e.outputs};return null!=e.inputs&&(n.inputParams=e.inputs.reduce(((t,e)=>(t[e.name]={type:e.type,inputIndexStart:e.start,inputIndexEnd:e.end},t)),{})),null!=e.attrs&&(n.attrParams=e.attrs.reduce(((e,n)=>{const a=n.type;let r;switch(n.type){case"string":r=nt(t.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=nt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"string[]":r=ct(t.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=ct(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"number":r=rt(t.attr,n.tfName,n.defaultValue||0),void 0===r&&n.tfDeprecatedName&&(r=rt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"number[]":r=lt(t.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=lt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool":r=at(t.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=at(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool[]":r=ht(t.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=ht(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape":r=mt(t.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=mt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape[]":r=dt(t.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=dt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype":r=it(t.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=it(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype[]":r=pt(t.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=pt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"func":r=ot(t.attr,n.tfName,n.defaultValue),void 0===r&&n.tfDeprecatedName&&(r=ot(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${n.type} for op: ${t.op}`)}return e[n.name]={value:r,type:a},e}),{})),n}mapFunction(t){const e=t.nodeDef,n=[];let a={};null!=e&&(a=e.reduce(((t,e)=>(t[e.name]=this.mapNode(e),"Const"===e.op&&n.push(t[e.name]),t)),{}));const r=[],s=[];t.signature.inputArg.forEach((t=>{const[e]=D(t.name),n={name:e,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:st(t.type),type:"dtype"}},children:[]};n.signatureKey=t.name,r.push(n),a[e]=n}));Object.keys(a).forEach((t=>{const e=a[t];e.inputNames.forEach(((t,n)=>{const[r,,s]=D(t),o=a[r];if(null!=o.outputs){const t=o.outputs.indexOf(s);if(-1!==t){const a=`${r}:${t}`;e.inputNames[n]=a}}e.inputs.push(o),o.children.push(e)}))}));const o=t.ret;t.signature.outputArg.forEach((t=>{const[e,n]=D(o[t.name]),r=a[e];null!=r&&(r.defaultOutput=n,s.push(r))}));const i=this.mapArgsToSignature(t);return{nodes:a,inputs:r,outputs:s,weights:n,placeholders:[],signature:i}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce(((t,e)=>(t[e.name]=this.mapArgToTensorInfo(e),t)),{}),outputs:t.signature.outputArg.reduce(((e,n)=>(e[n.name]=this.mapArgToTensorInfo(n,t.ret),e)),{})}}mapArgToTensorInfo(t,e){let n=t.name;return null!=e&&(n=e[n]),{name:n,dtype:t.type}}}function et(t,e){const n=Array.isArray(t)?String.fromCharCode.apply(null,t):function(t){const e=(0,w.env)().global;if(void 0!==e.atob)return e.atob(t);if("undefined"!=typeof Buffer)return new Buffer(t,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}(t);return e?n:n.toLowerCase()}function nt(t,e,n,a=!1){const r=t[e];return null!=r?et(r.s,a):n}function at(t,e,n){const a=t[e];return a?a.b:n}function rt(t,e,n){const a=t[e]||{},r=null!=a.i?a.i:null!=a.f?a.f:n;return"number"==typeof r?r:parseInt(r,10)}function st(t){switch("string"==typeof t&&(t=S[t]),t){case S.DT_FLOAT:case S.DT_HALF:return"float32";case S.DT_INT32:case S.DT_INT64:case S.DT_INT8:case S.DT_UINT8:return"int32";case S.DT_BOOL:return"bool";case S.DT_DOUBLE:return"float32";case S.DT_STRING:return"string";case S.DT_COMPLEX64:case S.DT_COMPLEX128:return"complex64";default:return null}}function ot(t,e,n){const a=t[e];return a&&a.func?a.func.name:n}function it(t,e,n){const a=t[e];return a&&a.type?st(a.type):n}function pt(t,e,n){const a=t[e];return a&&a.list&&a.list.type?a.list.type.map((t=>st(t))):n}function ut(t){if(!t.unknownRank)return null!=t.dim?t.dim.map((t=>"number"==typeof t.size?t.size:parseInt(t.size,10))):[]}function mt(t,e,n){const a=t[e];return a&&a.shape?ut(a.shape):n}function lt(t,e,n){const a=t[e];return a?((a.list.f&&a.list.f.length?a.list.f:a.list.i)||[]).map((t=>"number"==typeof t?t:parseInt(t,10))):n}function ct(t,e,n,a=!1){const r=t[e];return r&&r.list&&r.list.s?r.list.s.map((t=>et(t,a))):n}function dt(t,e,n){const a=t[e];return a&&a.list&&a.list.shape?a.list.shape.map((t=>ut(t))):n}function ht(t,e,n){const a=t[e];return a&&a.list&&a.list.b?a.list.b:n}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class yt{constructor(t,e,n){this.node=t,this.tensorMap=e,this.context=n,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map((t=>this.getInput(t))),null!=t.rawAttrs&&(this.attrs=Object.keys(t.rawAttrs).reduce(((t,e)=>(t[e]=this.getAttr(e),t)),{}))}getInput(t){return E(t,this.tensorMap,this.context)}getAttr(t,e){const n=this.node.rawAttrs[t];if(null!=n.tensor)return E(t,this.tensorMap,this.context);if(null!=n.i||null!=n.f)return rt(this.node.rawAttrs,t,e);if(null!=n.s)return nt(this.node.rawAttrs,t,e);if(null!=n.b)return at(this.node.rawAttrs,t,e);if(null!=n.shape)return mt(this.node.rawAttrs,t,e);if(null!=n.type)return it(this.node.rawAttrs,t,e);if(null!=n.list){if(null!=n.list.i||null!=n.list.f)return lt(this.node.rawAttrs,t,e);if(null!=n.list.s)return ct(this.node.rawAttrs,t,e);if(null!=n.list.shape)return dt(this.node.rawAttrs,t,e);if(null!=n.list.b)return ht(this.node.rawAttrs,t,e);if(null!=n.list.type)return pt(this.node.rawAttrs,t,e)}return e}}var ft=n(9951);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function gt(t,e,n=""){if("number"!=typeof t&&"number"!=typeof e){w.util.assert(t.length===e.length,(()=>n+` Shapes ${t} and ${e} must match`));for(let a=0;a<t.length;a++){const r=t[a],s=e[a];w.util.assert(r<0||s<0||r===s,(()=>n+` Shapes ${t} and ${e} must match`))}}}function Nt(t){return"number"!=typeof t&&!t.some((t=>t<0))}function Tt(t,e,n){let a=xt(t,n);const r=!Nt(a);if(r&&0===e.length)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${a}`);if(r&&e.forEach((t=>{a=xt(t.shape,a)})),!Nt(a))throw new Error(`Non-fully-defined elementShape: ${a}`);return a}function xt(t,e){if("number"==typeof t)return e;if("number"==typeof e)return t;if(t.length!==e.length)throw new Error(`Incompatible ranks during merge: ${t} vs. ${e}`);const n=[];for(let a=0;a<t.length;++a){const r=t[a],s=e[a];if(r>=0&&s>=0&&r!==s)throw new Error(`Incompatible shape during merge: ${t} vs. ${e}`);n[a]=r>=0?r:s}return n}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class bt{constructor(t,e,n,a,r,s,o){this.name=t,this.dtype=e,this.maxSize=n,this.elementShape=a,this.identicalElementShapes=r,this.dynamicSize=s,this.clearAfterRead=o,this.tensors=[],this.closed_=!1,this.idTensor=(0,w.scalar)(0),(0,w.keep)(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach((e=>{null!=t&&t.has(e.tensor.id)||e.tensor.dispose()})),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const e=this.tensors[t];if(e.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(e.cleared=!0),e.read=!0,e.tensor}readMany(t){return t.map((t=>this.read(t)))}write(t,e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const n=this.tensors[t]||{};if(e.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},\n          because the value dtype is ${e.dtype}, but TensorArray dtype is ${this.dtype}.`);if(0!==this.size()||null!=this.elementShape&&0!==this.elementShape.length||(this.elementShape=e.shape),gt(this.elementShape,e.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),n.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(n.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);n.tensor=e,(0,w.keep)(e),n.written=!0,this.tensors[t]=n}writeMany(t,e){if(t.length!==e.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${e.length}.`);t.forEach(((t,n)=>this.write(t,e[n])))}gather(t,e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${e}`);if(t)t=t.slice(0,this.size());else{t=[];for(let e=0;e<this.size();e++)t.push(e)}if(0===t.length)return(0,w.tensor)([],[0].concat(this.elementShape));const n=this.readMany(t);return gt(this.elementShape,n[0].shape,"TensorArray shape mismatch: "),(0,w.stack)(n,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(0===this.size())return(0,w.tensor)([],[0].concat(this.elementShape));const e=[];for(let t=0;t<this.size();t++)e.push(t);const n=this.readMany(e);return gt(this.elementShape,n[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${n[0].shape})`),(0,w.concat)(n,0)}scatter(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const n=Math.max(...t);if(!this.dynamicSize&&n>=this.maxSize)throw new Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);this.writeMany(t,(0,w.unstack)(e,0))}split(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);let n=0;const a=t.map((t=>(n+=t,n)));if(n!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${n}, and tensor's shape is: ${e.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const r=0===n?0:e.size/n,s=[];(0,w.tidy)((()=>{e=(0,w.reshape)(e,[1,n,r]);for(let n=0;n<t.length;++n){const o=[0,0===n?0:a[n-1],0],i=[1,t[n],r];s[n]=(0,w.reshape)((0,w.slice)(e,o,i),this.elementShape)}return s}));const o=[];for(let e=0;e<t.length;e++)o[e]=e;this.writeMany(o,s)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class wt{get id(){return this.idTensor.id}constructor(t,e,n,a=-1){this.tensors=t,this.elementShape=e,this.elementDtype=n,null!=t&&t.forEach((t=>{if(n!==t.dtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${t.dtype}`);gt(e,t.shape,"TensorList shape mismatch: "),(0,w.keep)(t)})),this.idTensor=(0,w.scalar)(0),this.maxNumElements=a,(0,w.keep)(this.idTensor)}copy(){return new wt([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach((e=>{null!=t&&t.has(e.id)||e.dispose()})),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,e,n=-1){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(-1!==n&&this.tensors.length!==n)throw new Error(`Operation expected a list with ${n} elements but got a list with ${this.tensors.length} elements.`);gt(t,this.elementShape,"TensorList shape mismatch: ");const a=Tt(this.elementShape,this.tensors,t);return(0,w.tidy)((()=>{const t=this.tensors.map((t=>(0,w.reshape)(t,a)));return(0,w.stack)(t,0)}))}popBack(t,e){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(0===this.size())throw new Error("Trying to pop from an empty list.");const n=Tt(this.elementShape,this.tensors,t),a=this.tensors.pop();return a.kept=!1,gt(a.shape,t,"TensorList shape mismatch: "),(0,w.reshape)(a,n)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(gt(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");(0,w.keep)(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(-1!==this.maxNumElements&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);const e=new wt([],this.elementShape,this.elementDtype,this.maxNumElements);e.tensors.length=t;for(let n=0;n<Math.min(this.tensors.length,t);++n)e.tensors[n]=this.tensors[n];return e}getItem(t,e,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(null==this.tensors[t])throw new Error(`element at index ${t} is null.`);gt(this.tensors[t].shape,e,"TensorList shape mismatch: ");const a=Tt(this.elementShape,this.tensors,e);return(0,w.reshape)(this.tensors[t],a)}setItem(t,e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(t<0||-1!==this.maxNumElements&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);gt(this.elementShape,e.shape,"TensorList shape mismatch: "),(0,w.keep)(e),null!=this.tensors[t]&&(this.tensors[t].kept=!1),this.tensors[t]=e}gather(t,e,n){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);gt(this.elementShape,n,"TensorList shape mismatch: "),t=t.slice(0,this.size());const a=Tt(this.elementShape,this.tensors,n);return 0===t.length?(0,w.tensor)([],[0].concat(a)):(0,w.tidy)((()=>{const e=t.map((t=>(0,w.reshape)(this.tensors[t],a)));return(0,w.stack)(e,0)}))}concat(t,e){if(t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);gt(this.elementShape,e,"TensorList shape mismatch: ");const n=Tt(this.elementShape,this.tensors,e);return 0===this.size()?(0,w.tensor)([],[0].concat(n)):(0,w.tidy)((()=>{const t=this.tensors.map((t=>(0,w.reshape)(t,n)));return(0,w.concat)(t,0)}))}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const St=async(t,e,n)=>{switch(t.op){case"If":case"StatelessIf":{const a=O("thenBranch",t,e,n),r=O("elseBranch",t,e,n),s=O("cond",t,e,n),o=O("args",t,e,n);return(await s.data())[0]?n.functionMap[a].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap):n.functionMap[r].executeFunctionAsync(o,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{const a=O("body",t,e,n),r=O("cond",t,e,n),s=O("args",t,e,n),o=await n.functionMap[r].executeFunctionAsync(s,n.tensorArrayMap,n.tensorListMap),i=s.map((t=>t.id));let p=await o[0].data();o.forEach((t=>{t.kept||-1!==i.indexOf(t.id)||t.dispose()}));let u=s;for(;p[0];){const t=u;u=await n.functionMap[a].executeFunctionAsync(u,n.tensorArrayMap,n.tensorListMap);const e=u.map((t=>t.id));t.forEach((t=>{t.kept||-1!==i.indexOf(t.id)||-1!==e.indexOf(t.id)||t.dispose()}));const s=await n.functionMap[r].executeFunctionAsync(u,n.tensorArrayMap,n.tensorListMap);p=await s[0].data(),s.forEach((t=>{t.kept||-1!==i.indexOf(t.id)||-1!==e.indexOf(t.id)||t.dispose()}))}return u}case"LoopCond":return[R(O("pred",t,e,n))];case"Switch":{const a=O("pred",t,e,n);let r=O("data",t,e,n);return r.kept||(r=R(r)),(await a.data())[0]?[void 0,r]:[r,void 0]}case"Merge":{const a=t.inputNames.find((t=>void 0!==E(t,e,n)));if(a){return[R(E(a,e,n))]}return}case"Enter":{const a=O("frameName",t,e,n),r=O("tensor",t,e,n);return n.enterFrame(a),[R(r)]}case"Exit":{const a=O("tensor",t,e,n);return n.exitFrame(),[R(a)]}case"NextIteration":{const a=O("tensor",t,e,n);return n.nextIteration(),[R(a)]}case"TensorArrayV3":{const a=O("size",t,e,n),r=O("dtype",t,e,n),s=O("elementShape",t,e,n),o=O("dynamicSize",t,e,n),i=O("clearAfterRead",t,e,n),p=O("identicalElementShapes",t,e,n),u=O("name",t,e,n),m=new bt(u,r,a,s,p,o,i);return n.addTensorArray(m),[m.idTensor,(0,w.scalar)(1)]}case"TensorArrayWriteV3":{const a=O("tensorArrayId",t,e,n),r=O("index",t,e,n),s=O("tensor",t,e,n),o=n.getTensorArray(a.id);return o.write(r,s),[o.idTensor]}case"TensorArrayReadV3":{const a=O("tensorArrayId",t,e,n),r=O("index",t,e,n);return[n.getTensorArray(a.id).read(r)]}case"TensorArrayGatherV3":{const a=O("tensorArrayId",t,e,n),r=O("indices",t,e,n),s=O("dtype",t,e,n);return[n.getTensorArray(a.id).gather(r,s)]}case"TensorArrayScatterV3":{const a=O("tensorArrayId",t,e,n),r=O("indices",t,e,n),s=O("tensor",t,e,n),o=n.getTensorArray(a.id);return o.scatter(r,s),[o.idTensor]}case"TensorArrayConcatV3":{const a=O("tensorArrayId",t,e,n),r=n.getTensorArray(a.id),s=O("dtype",t,e,n);return[r.concat(s)]}case"TensorArraySplitV3":{const a=O("tensorArrayId",t,e,n),r=O("tensor",t,e,n),s=O("lengths",t,e,n),o=n.getTensorArray(a.id);return o.split(s,r),[o.idTensor]}case"TensorArraySizeV3":{const a=O("tensorArrayId",t,e,n),r=n.getTensorArray(a.id);return[(0,w.scalar)(r.size(),"int32")]}case"TensorArrayCloseV3":{const a=O("tensorArrayId",t,e,n),r=n.getTensorArray(a.id);return r.clearAndClose(),[r.idTensor]}case"TensorListSetItem":{const a=O("tensorListId",t,e,n),r=O("index",t,e,n),s=O("tensor",t,e,n),o=n.getTensorList(a.id);return o.setItem(r,s),[o.idTensor]}case"TensorListGetItem":{const a=O("tensorListId",t,e,n),r=O("index",t,e,n),s=O("elementShape",t,e,n),o=O("elementDType",t,e,n);return[n.getTensorList(a.id).getItem(r,s,o)]}case"TensorListScatterV2":case"TensorListScatter":{const a=O("indices",t,e,n),r=function(t,e,n,a){if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const r=Math.max(...e);if(null!=a&&-1!==a&&r>=a)throw new Error(`Max index must be < array size (${r}  vs. ${a})`);const s=new wt([],n,t.dtype,a),o=(0,w.unstack)(t,0);return e.forEach(((t,e)=>{s.setItem(t,o[e])})),s}(O("tensor",t,e,n),a,O("elementShape",t,e,n),O("numElements",t,e,n));return n.addTensorList(r),[r.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const a=O("elementShape",t,e,n),r=O("elementDType",t,e,n);let s;s="TensorListReserve"===t.op?"numElements":"maxNumElements";const o=O(s,t,e,n),i=function(t,e,n,a){return new wt([],t,e,a)}(a,r,0,"TensorListReserve"===t.op?-1:o);return n.addTensorList(i),[i.idTensor]}case"TensorListGather":{const a=O("tensorListId",t,e,n),r=O("indices",t,e,n),s=O("elementShape",t,e,n),o=O("elementDType",t,e,n);return[n.getTensorList(a.id).gather(r,o,s)]}case"TensorListStack":{const a=O("tensorListId",t,e,n),r=O("elementShape",t,e,n),s=O("elementDType",t,e,n),o=O("numElements",t,e,n);return[n.getTensorList(a.id).stack(r,s,o)]}case"TensorListFromTensor":{const a=function(t,e,n){const a=t.dtype;if(t.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${t.shape}`);if(t.dtype!==n)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${n}`);gt(t.shape.slice(1),e,"TensorList shape mismatch: ");const r=(0,w.unstack)(t);return new wt(r,e,a)}(O("tensor",t,e,n),O("elementShape",t,e,n),O("elementDType",t,e,n));return n.addTensorList(a),[a.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const a=O("tensorListId",t,e,n),r=n.getTensorList(a.id),s=O("dtype",t,e,n),o=O("elementShape",t,e,n);return[r.concat(s,o)]}case"TensorListPushBack":{const a=O("tensorListId",t,e,n),r=O("tensor",t,e,n),s=n.getTensorList(a.id);return s.pushBack(r),[s.idTensor]}case"TensorListPopBack":{const a=O("tensorListId",t,e,n),r=O("elementShape",t,e,n),s=O("elementDType",t,e,n);return[n.getTensorList(a.id).popBack(r,s)]}case"TensorListSplit":{const a=O("tensor",t,e,n),r=O("elementShape",t,e,n),s=function(t,e,n){let a=0;const r=e.map((t=>(a+=t,a)));if(a!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${a}, and tensor's shape is: ${t.shape}`);const s=xt(t.shape.slice(1),n),o=0===a?0:t.size/a,i=(0,w.tidy)((()=>{const n=[];t=(0,w.reshape)(t,[1,a,o]);for(let a=0;a<e.length;++a){const i=[0,0===a?0:r[a-1],0],p=[1,e[a],o];n[a]=(0,w.reshape)((0,w.slice)(t,i,p),s)}return t.dispose(),n})),p=new wt([],n,t.dtype,e.length);for(let t=0;t<i.length;t++)p.setItem(t,i[t]);return p}(a,O("lengths",t,e,n),r);return n.addTensorList(s),[s.idTensor]}case"TensorListLength":{const a=O("tensorListId",t,e,n),r=n.getTensorList(a.id);return[(0,w.scalar)(r.size(),"int32")]}case"TensorListResize":{const a=O("tensorListId",t,e,n),r=O("size",t,e,n),s=n.getTensorList(a.id).resize(r);return n.addTensorList(s),[s.idTensor]}default:throw TypeError(`Node type ${t.op} is not implemented`)}};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function It(t,e,n){const[a,r]=O("fusedOps",t,e,n),s="biasadd"===a,o=!s,i="prelu"===r,p="fusedbatchnorm"===a,u=O("numArgs",t,e,n);if(s){if(i&&2!==u)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&s&&1!==u)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(p)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const m=O("strides",t,e,n),l=V(t,e,n),c=O("dataFormat",t,e,n).toUpperCase(),d=O("dilations",t,e,n);let[h,y]=O("args",t,e,n);o&&(y=h,h=void 0);return{stride:m,pad:l,dataFormat:c,dilations:d,biasArg:h,preluArg:y,activationFunc:r,leakyreluAlpha:O("leakyreluAlpha",t,e,n)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function vt(t,e,n){return{boxes:O("boxes",t,e,n),scores:O("scores",t,e,n),maxOutputSize:O("maxOutputSize",t,e,n),iouThreshold:O("iouThreshold",t,e,n),scoreThreshold:O("scoreThreshold",t,e,n),softNmsSigma:O("softNmsSigma",t,e,n)}}var _t=n(45702);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ot{get id(){return this.handle.id}constructor(t,e){this.keyDType=t,this.valueDType=e,this.handle=(0,w.scalar)(0),this.tensorMap=new Map,(0,w.keep)(this.handle)}clearAndClose(){this.tensorMap.forEach((t=>t.dispose())),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return _t.d(this.size(),"int32")}async import(t,e){this.checkKeyAndValueTensor(t,e);const n=await t.data();return this.tensorMap.forEach((t=>t.dispose())),this.tensorMap.clear(),(0,w.tidy)((()=>{const t=(0,w.unstack)(e),a=n.length,r=t.length;w.util.assert(a===r,(()=>`The number of elements doesn't match, keys has ${a} elements, the values has ${r} elements.`));for(let e=0;e<a;e++){const a=n[e],r=t[e];(0,w.keep)(r),this.tensorMap.set(a,r)}return this.handle}))}async find(t,e){this.checkKeyAndValueTensor(t,e);const n=await t.data();return(0,w.tidy)((()=>{const t=[];for(let a=0;a<n.length;a++){const r=n[a],s=this.findWithDefault(r,e);t.push(s)}return(0,w.stack)(t)}))}findWithDefault(t,e){const n=this.tensorMap.get(t);return null!=n?n:e}checkKeyAndValueTensor(t,e){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(e.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${e.dtype}`)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Et(t,e,n,a,r=w.tidy){const s=((t,e,n)=>{switch(t.category){case"arithmetic":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"BiasAdd":case"AddV2":case"Add":return[a.add(O("a",t,e,n),O("b",t,e,n))];case"AddN":return[a.addN(O("tensors",t,e,n))];case"FloorMod":case"Mod":return[a.mod(O("a",t,e,n),O("b",t,e,n))];case"Mul":return[a.mul(O("a",t,e,n),O("b",t,e,n))];case"RealDiv":case"Div":return[a.div(O("a",t,e,n),O("b",t,e,n))];case"DivNoNan":return[a.divNoNan(O("a",t,e,n),O("b",t,e,n))];case"FloorDiv":return[a.floorDiv(O("a",t,e,n),O("b",t,e,n))];case"Sub":return[a.sub(O("a",t,e,n),O("b",t,e,n))];case"Minimum":return[a.minimum(O("a",t,e,n),O("b",t,e,n))];case"Maximum":return[a.maximum(O("a",t,e,n),O("b",t,e,n))];case"Pow":return[a.pow(O("a",t,e,n),O("b",t,e,n))];case"SquaredDifference":return[a.squaredDifference(O("a",t,e,n),O("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"basic_math":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"Abs":case"ComplexAbs":return[a.abs(O("x",t,e,n))];case"Acos":return[a.acos(O("x",t,e,n))];case"Acosh":return[a.acosh(O("x",t,e,n))];case"Asin":return[a.asin(O("x",t,e,n))];case"Asinh":return[a.asinh(O("x",t,e,n))];case"Atan":return[a.atan(O("x",t,e,n))];case"Atan2":return[a.atan2(O("x",t,e,n),O("y",t,e,n))];case"Atanh":return[a.atanh(O("x",t,e,n))];case"Ceil":return[a.ceil(O("x",t,e,n))];case"Complex":return[a.complex(O("real",t,e,n),O("imag",t,e,n))];case"Cos":return[a.cos(O("x",t,e,n))];case"Cosh":return[a.cosh(O("x",t,e,n))];case"Elu":return[a.elu(O("x",t,e,n))];case"Erf":return[a.erf(O("x",t,e,n))];case"Exp":return[a.exp(O("x",t,e,n))];case"Expm1":return[a.expm1(O("x",t,e,n))];case"Floor":return[a.floor(O("x",t,e,n))];case"Log":return[a.log(O("x",t,e,n))];case"Log1p":return[a.log1p(O("x",t,e,n))];case"Imag":return[a.imag(O("x",t,e,n))];case"Neg":return[a.neg(O("x",t,e,n))];case"Reciprocal":return[a.reciprocal(O("x",t,e,n))];case"Real":return[a.real(O("x",t,e,n))];case"Relu":return[a.relu(O("x",t,e,n))];case"Round":return[a.round(O("x",t,e,n))];case"Selu":return[a.selu(O("x",t,e,n))];case"Sigmoid":return[a.sigmoid(O("x",t,e,n))];case"Sin":return[a.sin(O("x",t,e,n))];case"Sign":return[a.sign(O("x",t,e,n))];case"Sinh":return[a.sinh(O("x",t,e,n))];case"Softplus":return[a.softplus(O("x",t,e,n))];case"Sqrt":return[a.sqrt(O("x",t,e,n))];case"Square":return[a.square(O("x",t,e,n))];case"Tanh":return[a.tanh(O("x",t,e,n))];case"Tan":return[a.tan(O("x",t,e,n))];case"ClipByValue":return[a.clipByValue(O("x",t,e,n),O("clipValueMin",t,e,n),O("clipValueMax",t,e,n))];case"Relu6":return[a.relu6(O("x",t,e,n))];case"Rsqrt":return[a.rsqrt(E(t.inputNames[0],e,n))];case"LeakyRelu":return[a.leakyRelu(O("x",t,e,n),O("alpha",t,e,n))];case"Prelu":return[a.prelu(O("x",t,e,n),O("alpha",t,e,n))];case"IsNan":return[a.isNaN(E(t.inputNames[0],e,n))];case"IsInf":return[a.isInf(E(t.inputNames[0],e,n))];case"IsFinite":return[a.isFinite(E(t.inputNames[0],e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"control":return St(t,e,n);case"convolution":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"Conv1D":{const r=O("stride",t,e,n),s=O("pad",t,e,n),o=O("dataFormat",t,e,n).toUpperCase(),i=O("dilation",t,e,n);return[a.conv1d(O("x",t,e,n),O("filter",t,e,n),r,s,o,i)]}case"Conv2D":{const r=O("strides",t,e,n),s=V(t,e,n),o=O("dataFormat",t,e,n).toUpperCase(),i=O("dilations",t,e,n);return[a.conv2d(O("x",t,e,n),O("filter",t,e,n),[r[1],r[2]],s,o,[i[1],i[2]])]}case"_FusedConv2D":{const{stride:r,pad:s,dataFormat:o,dilations:i,biasArg:p,preluArg:u,activationFunc:m,leakyreluAlpha:l}=It(t,e,n);return[a.fused.conv2d({x:O("x",t,e,n),filter:O("filter",t,e,n),strides:[r[1],r[2]],pad:s,dataFormat:o,dilations:[i[1],i[2]],bias:p,activation:m,preluActivationWeights:u,leakyreluAlpha:l})]}case"FusedDepthwiseConv2dNative":{const{stride:r,pad:s,dataFormat:o,dilations:i,biasArg:p,preluArg:u,activationFunc:m,leakyreluAlpha:l}=It(t,e,n);return[a.fused.depthwiseConv2d({x:O("x",t,e,n),filter:O("filter",t,e,n),strides:[r[1],r[2]],pad:s,dataFormat:o,dilations:[i[1],i[2]],bias:p,activation:m,preluActivationWeights:u,leakyreluAlpha:l})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const r=O("outputShape",t,e,n),s=O("strides",t,e,n),o=V(t,e,n);return[a.conv2dTranspose(O("x",t,e,n),O("filter",t,e,n),r,[s[1],s[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const r=O("strides",t,e,n),s=V(t,e,n),o=O("dilations",t,e,n),i=O("dataFormat",t,e,n).toUpperCase();return[a.depthwiseConv2d(O("input",t,e,n),O("filter",t,e,n),[r[1],r[2]],s,i,[o[1],o[2]])]}case"Conv3D":{const r=O("strides",t,e,n),s=O("pad",t,e,n),o=O("dataFormat",t,e,n).toUpperCase(),i=O("dilations",t,e,n);return[a.conv3d(O("x",t,e,n),O("filter",t,e,n),[r[1],r[2],r[3]],s,o,[i[1],i[2],i[3]])]}case"AvgPool":{const r=O("strides",t,e,n),s=O("pad",t,e,n),o=O("kernelSize",t,e,n);return[a.avgPool(O("x",t,e,n),[o[1],o[2]],[r[1],r[2]],s)]}case"MaxPool":{const r=O("strides",t,e,n),s=O("pad",t,e,n),o=O("kernelSize",t,e,n);return[a.maxPool(O("x",t,e,n),[o[1],o[2]],[r[1],r[2]],s)]}case"MaxPoolWithArgmax":{const r=O("strides",t,e,n),s=O("pad",t,e,n),o=O("kernelSize",t,e,n),i=O("includeBatchInIndex",t,e,n),{result:p,indexes:u}=a.maxPoolWithArgmax(O("x",t,e,n),[o[1],o[2]],[r[1],r[2]],s,i);return[p,u]}case"AvgPool3D":{const r=O("strides",t,e,n),s=O("pad",t,e,n),o=O("kernelSize",t,e,n);return[a.avgPool3d(O("x",t,e,n),[o[1],o[2],o[3]],[r[1],r[2],r[3]],s)]}case"MaxPool3D":{const r=O("strides",t,e,n),s=O("pad",t,e,n),o=O("kernelSize",t,e,n);return[a.maxPool3d(O("x",t,e,n),[o[1],o[2],o[3]],[r[1],r[2],r[3]],s)]}case"Dilation2D":{const r=O("strides",t,e,n),s=O("pad",t,e,n),o=O("dilations",t,e,n),i=r[1],p=r[2],u=o[1],m=o[2];return[a.dilation2d(O("x",t,e,n),O("filter",t,e,n),[i,p],s,[u,m],"NHWC")]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"creation":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"Fill":{const r=O("shape",t,e,n),s=O("dtype",t,e,n),o=O("value",t,e,n);return[a.fill(r,o,s)]}case"LinSpace":{const r=O("start",t,e,n),s=O("stop",t,e,n),o=O("num",t,e,n);return[a.linspace(r,s,o)]}case"Multinomial":{const r=O("logits",t,e,n),s=O("numSamples",t,e,n),o=O("seed",t,e,n);return[a.multinomial(r,s,o)]}case"OneHot":{const r=O("indices",t,e,n),s=O("depth",t,e,n),o=O("onValue",t,e,n),i=O("offValue",t,e,n),p=O("dtype",t,e,n);return[a.oneHot(r,s,o,i,p)]}case"Ones":return[a.ones(O("shape",t,e,n),O("dtype",t,e,n))];case"OnesLike":return[a.onesLike(O("x",t,e,n))];case"RandomStandardNormal":return[a.randomStandardNormal(O("shape",t,e,n),O("dtype",t,e,n),O("seed",t,e,n))];case"RandomUniform":return[a.randomUniform(O("shape",t,e,n),O("minval",t,e,n),O("maxval",t,e,n),O("dtype",t,e,n))];case"RandomUniformInt":return[a.randomUniformInt(O("shape",t,e,n),O("minval",t,e,n),O("maxval",t,e,n),O("seed",t,e,n))];case"Range":{const r=O("start",t,e,n),s=O("stop",t,e,n),o=O("step",t,e,n);return[a.range(r,s,o,O("dtype",t,e,n))]}case"TruncatedNormal":{const r=O("shape",t,e,n),s=O("mean",t,e,n),o=O("stdDev",t,e,n),i=O("seed",t,e,n);return[a.truncatedNormal(r,s,o,O("dtype",t,e,n),i)]}case"Zeros":return[a.zeros(O("shape",t,e,n),O("dtype",t,e,n))];case"ZerosLike":return[a.zerosLike(O("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"dynamic":return(async(t,e,n,a,r=ft)=>{switch(t.op){case"NonMaxSuppressionV5":{const{boxes:a,scores:s,maxOutputSize:o,iouThreshold:i,scoreThreshold:p,softNmsSigma:u}=vt(t,e,n),m=await r.image.nonMaxSuppressionWithScoreAsync(a,s,o,i,p,u);return[m.selectedIndices,m.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:a,scores:s,maxOutputSize:o,iouThreshold:i,scoreThreshold:p}=vt(t,e,n),u=O("padToMaxOutputSize",t,e,n),m=await r.image.nonMaxSuppressionPaddedAsync(a,s,o,i,p,u);return[m.selectedIndices,m.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:a,scores:s,maxOutputSize:o,iouThreshold:i,scoreThreshold:p}=vt(t,e,n);return[await r.image.nonMaxSuppressionAsync(a,s,o,i,p)]}case"Where":{const a=r.cast(O("condition",t,e,n),"bool"),s=[await r.whereAsync(a)];return a.dispose(),s}case"ListDiff":return r.setdiff1dAsync(O("x",t,e,n),O("y",t,e,n));default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n);case"evaluation":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"LowerBound":{const r=O("sortedSequence",t,e,n),s=O("values",t,e,n);return[a.lowerBound(r,s)]}case"TopKV2":{const r=O("x",t,e,n),s=O("k",t,e,n),o=O("sorted",t,e,n),i=a.topk(r,s,o);return[i.values,i.indices]}case"UpperBound":{const r=O("sortedSequence",t,e,n),s=O("values",t,e,n);return[a.upperBound(r,s)]}case"Unique":{const r=O("x",t,e,n),s=a.unique(r);return[s.values,s.indices]}case"UniqueV2":{const r=O("x",t,e,n),s=O("axis",t,e,n),o=a.unique(r,s);return[o.values,o.indices]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"image":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"ResizeBilinear":{const r=O("images",t,e,n),s=O("size",t,e,n),o=O("alignCorners",t,e,n),i=O("halfPixelCenters",t,e,n);return[a.image.resizeBilinear(r,[s[0],s[1]],o,i)]}case"ResizeNearestNeighbor":{const r=O("images",t,e,n),s=O("size",t,e,n),o=O("alignCorners",t,e,n),i=O("halfPixelCenters",t,e,n);return[a.image.resizeNearestNeighbor(r,[s[0],s[1]],o,i)]}case"CropAndResize":{const r=O("image",t,e,n),s=O("boxes",t,e,n),o=O("boxInd",t,e,n),i=O("cropSize",t,e,n),p=O("method",t,e,n),u=O("extrapolationValue",t,e,n);return[a.image.cropAndResize(r,s,o,i,p,u)]}case"ImageProjectiveTransformV3":{const r=O("images",t,e,n),s=O("transforms",t,e,n),o=O("outputShape",t,e,n),i=O("fillValue",t,e,n),p=O("interpolation",t,e,n),u=O("fillMode",t,e,n);return[a.image.transform(r,s,p.toLowerCase(),u.toLowerCase(),i,o)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"graph":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"Const":return e[t.name];case"PlaceholderWithDefault":const r=O("default",t,e,n);return[E(t.name,e,n)||r];case"Placeholder":return[E(t.name,e,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":case"Snapshot":return[R(O("x",t,e,n))];case"IdentityN":return O("x",t,e,n).map((t=>R(t)));case"Shape":return[a.tensor1d(O("x",t,e,n).shape,"int32")];case"ShapeN":return O("x",t,e,n).map((t=>a.tensor1d(t.shape)));case"Size":return[a.scalar(O("x",t,e,n).size,"int32")];case"Rank":return[a.scalar(O("x",t,e,n).rank,"int32")];case"NoOp":return[a.scalar(1)];case"Print":const s=O("x",t,e,n),o=O("data",t,e,n),i=O("message",t,e,n),p=O("summarize",t,e,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(i);for(let t=0;t<o.length;t++)console.log(Array.prototype.slice.call(o[t].dataSync()).slice(0,p));return[s];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"logical":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"Equal":return[a.equal(O("a",t,e,n),O("b",t,e,n))];case"NotEqual":return[a.notEqual(O("a",t,e,n),O("b",t,e,n))];case"Greater":return[a.greater(O("a",t,e,n),O("b",t,e,n))];case"GreaterEqual":return[a.greaterEqual(O("a",t,e,n),O("b",t,e,n))];case"Less":return[a.less(O("a",t,e,n),O("b",t,e,n))];case"LessEqual":return[a.lessEqual(O("a",t,e,n),O("b",t,e,n))];case"LogicalAnd":return[a.logicalAnd(O("a",t,e,n),O("b",t,e,n))];case"LogicalNot":return[a.logicalNot(O("a",t,e,n))];case"LogicalOr":return[a.logicalOr(O("a",t,e,n),O("b",t,e,n))];case"Select":case"SelectV2":return[a.where(O("condition",t,e,n),O("a",t,e,n),O("b",t,e,n))];case"BitwiseAnd":return[a.bitwiseAnd(O("a",t,e,n),O("b",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"matrices":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[a.matMul(O("a",t,e,n),O("b",t,e,n),O("transposeA",t,e,n),O("transposeB",t,e,n))];case"Einsum":return[a.einsum(O("equation",t,e,n),...O("tensors",t,e,n))];case"Transpose":return[a.transpose(O("x",t,e,n),O("perm",t,e,n))];case"_FusedMatMul":const[r,s]=O("fusedOps",t,e,n),o="biasadd"===r,i="prelu"===s,p=O("numArgs",t,e,n),u=O("leakyreluAlpha",t,e,n);if(o){if(i&&2!==p)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&1!==p)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[m,l]=O("args",t,e,n);return[a.fused.matMul({a:O("a",t,e,n),b:O("b",t,e,n),transposeA:O("transposeA",t,e,n),transposeB:O("transposeB",t,e,n),bias:m,activation:s,preluActivationWeights:l,leakyreluAlpha:u})];case"MatrixBandPart":return[a.linalg.bandPart(O("a",t,e,n),O("numLower",t,e,n),O("numUpper",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"normalization":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"EuclideanNorm":return[a.euclideanNorm(O("x",t,e,n),O("axis",t,e,n),O("keepDims",t,e,n))];case"FusedBatchNorm":case"FusedBatchNormV2":case"FusedBatchNormV3":return[a.batchNorm(O("x",t,e,n),O("mean",t,e,n),O("variance",t,e,n),O("offset",t,e,n),O("scale",t,e,n),O("epsilon",t,e,n))];case"LRN":return[a.localResponseNormalization(O("x",t,e,n),O("radius",t,e,n),O("bias",t,e,n),O("alpha",t,e,n),O("beta",t,e,n))];case"Softmax":return[a.softmax(O("x",t,e,n))];case"LogSoftmax":return[a.logSoftmax(O("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"ragged":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"RaggedGather":{const{outputNestedSplits:r,outputDenseValues:s}=a.raggedGather(O("paramsNestedSplits",t,e,n),O("paramsDenseValues",t,e,n),O("indices",t,e,n),O("outputRaggedRank",t,e,n));return r.concat(s)}case"RaggedRange":{const{rtNestedSplits:r,rtDenseValues:s}=a.raggedRange(O("starts",t,e,n),O("limits",t,e,n),O("splits",t,e,n));return[r,s]}case"RaggedTensorToTensor":return[a.raggedTensorToTensor(O("shape",t,e,n),O("values",t,e,n),O("defaultValue",t,e,n),O("rowPartitionTensors",t,e,n),O("rowPartitionTypes",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"reduction":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"Max":{const r=O("axis",t,e,n),s=O("keepDims",t,e,n);return[a.max(O("x",t,e,n),r,s)]}case"Mean":{const r=O("axis",t,e,n),s=O("keepDims",t,e,n);return[a.mean(O("x",t,e,n),r,s)]}case"Min":{const r=O("axis",t,e,n),s=O("keepDims",t,e,n);return[a.min(O("x",t,e,n),r,s)]}case"Sum":{const r=O("axis",t,e,n),s=O("keepDims",t,e,n);return[a.sum(O("x",t,e,n),r,s)]}case"All":{const r=O("axis",t,e,n),s=O("keepDims",t,e,n);return[a.all(O("x",t,e,n),r,s)]}case"Any":{const r=O("axis",t,e,n),s=O("keepDims",t,e,n);return[a.any(O("x",t,e,n),r,s)]}case"ArgMax":{const r=O("axis",t,e,n);return[a.argMax(O("x",t,e,n),r)]}case"ArgMin":{const r=O("axis",t,e,n);return[a.argMin(O("x",t,e,n),r)]}case"Prod":{const r=O("axis",t,e,n),s=O("keepDims",t,e,n);return[a.prod(O("x",t,e,n),r,s)]}case"Cumprod":{const r=O("axis",t,e,n),s=O("exclusive",t,e,n),o=O("reverse",t,e,n);return[a.cumprod(O("x",t,e,n),r,s,o)]}case"Cumsum":{const r=O("axis",t,e,n),s=O("exclusive",t,e,n),o=O("reverse",t,e,n);return[a.cumsum(O("x",t,e,n),r,s,o)]}case"Bincount":const r=O("x",t,e,n),s=O("weights",t,e,n),o=O("size",t,e,n);return[a.bincount(r,s,o)];case"DenseBincount":{const r=O("x",t,e,n),s=O("weights",t,e,n),o=O("size",t,e,n),i=O("binaryOutput",t,e,n);return[a.denseBincount(r,s,o,i)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"slice_join":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"ConcatV2":case"Concat":{const r=O("n",t,e,n),s=O("axis",t,e,n);let o=O("tensors",t,e,n);return o=o.slice(0,r),[a.concat(o,s)]}case"Gather":{const r=O("x",t,e,n),s=O("indices",t,e,n);return[a.gather(r,a.cast(s,"int32"),0)]}case"GatherV2":{const r=O("axis",t,e,n),s=O("batchDims",t,e,n),o=O("x",t,e,n),i=O("indices",t,e,n);return[a.gather(o,a.cast(i,"int32"),r,s)]}case"Reverse":{const r=O("dims",t,e,n),s=[];for(let t=0;t<r.length;t++)r[t]&&s.push(t);const o=O("x",t,e,n);return[a.reverse(o,s)]}case"ReverseV2":{const r=O("axis",t,e,n),s=O("x",t,e,n);return[a.reverse(s,r)]}case"Slice":{const r=O("begin",t,e,n),s=O("size",t,e,n);return[a.slice(O("x",t,e,n),r,s)]}case"StridedSlice":{const r=O("begin",t,e,n),s=O("end",t,e,n),o=O("strides",t,e,n),i=O("beginMask",t,e,n),p=O("endMask",t,e,n),u=O("ellipsisMask",t,e,n),m=O("newAxisMask",t,e,n),l=O("shrinkAxisMask",t,e,n),c=O("x",t,e,n);return[a.stridedSlice(c,r,s,o,i,p,u,m,l)]}case"Pack":return(0,w.tidy)((()=>{const r=O("axis",t,e,n),s=O("tensors",t,e,n),o=s[0].shape,i=a.squeeze(s[0]).shape,p=s.map((t=>{const e=w.util.arraysEqual(t.shape,o);if(!e&&!w.util.arraysEqual(a.squeeze(t).shape,i))throw new Error("the input tensors shape does not match");return e?t:a.reshape(t,o)}));return[a.stack(p,r)]}));case"Unpack":{const r=O("axis",t,e,n),s=O("tensor",t,e,n);return a.unstack(s,r)}case"Tile":{const r=O("reps",t,e,n);return[a.tile(O("x",t,e,n),r)]}case"Split":case"SplitV":{const r=O("axis",t,e,n),s=O("numOrSizeSplits",t,e,n),o=O("x",t,e,n);return a.split(o,s,r)}case"ScatterNd":{const r=O("indices",t,e,n),s=O("values",t,e,n),o=O("shape",t,e,n);return[a.scatterND(r,s,o)]}case"GatherNd":{const r=O("x",t,e,n),s=O("indices",t,e,n);return[a.gatherND(r,s)]}case"SparseToDense":{const r=O("sparseIndices",t,e,n),s=O("outputShape",t,e,n),o=O("sparseValues",t,e,n),i=O("defaultValue",t,e,n);return[a.sparseToDense(r,o,s,o.dtype===i.dtype?i:a.cast(i,o.dtype))]}case"TensorScatterUpdate":{const r=O("indices",t,e,n),s=O("values",t,e,n),o=O("tensor",t,e,n);return[a.tensorScatterUpdate(o,r,s)]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"sparse":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"SparseFillEmptyRows":{const{outputIndices:r,outputValues:s,emptyRowIndicator:o,reverseIndexMap:i}=a.sparse.sparseFillEmptyRows(O("indices",t,e,n),O("values",t,e,n),O("denseShape",t,e,n),O("defaultValue",t,e,n));return[r,s,o,i]}case"SparseReshape":{const{outputIndices:r,outputShape:s}=a.sparse.sparseReshape(O("inputIndices",t,e,n),O("inputShape",t,e,n),O("newShape",t,e,n));return[r,s]}case"SparseSegmentMean":return[a.sparse.sparseSegmentMean(O("data",t,e,n),O("indices",t,e,n),O("segmentIds",t,e,n))];case"SparseSegmentSum":return[a.sparse.sparseSegmentSum(O("data",t,e,n),O("indices",t,e,n),O("segmentIds",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"spectral":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"FFT":return[a.fft(O("x",t,e,n))];case"IFFT":return[a.ifft(O("x",t,e,n))];case"RFFT":return[a.rfft(O("x",t,e,n))];case"IRFFT":return[a.irfft(O("x",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"string":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"StaticRegexReplace":return[a.string.staticRegexReplace(O("input",t,e,n),O("pattern",t,e,n),O("rewrite",t,e,n),O("replaceGlobal",t,e,n))];case"StringNGrams":{const{nGrams:r,nGramsSplits:s}=a.string.stringNGrams(O("data",t,e,n),O("dataSplits",t,e,n),O("separator",t,e,n),O("nGramWidths",t,e,n),O("leftPad",t,e,n),O("rightPad",t,e,n),O("padWidth",t,e,n),O("preserveShortSequences",t,e,n));return[r,s]}case"StringSplit":{const{indices:r,values:s,shape:o}=a.string.stringSplit(O("input",t,e,n),O("delimiter",t,e,n),O("skipEmpty",t,e,n));return[r,s,o]}case"StringToHashBucketFast":return[a.string.stringToHashBucketFast(O("input",t,e,n),O("numBuckets",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"transformation":return r((()=>((t,e,n,a=ft)=>{switch(t.op){case"Cast":return[a.cast(O("x",t,e,n),O("dtype",t,e,n))];case"ExpandDims":{const r=O("axis",t,e,n);return[a.expandDims(O("x",t,e,n),r)]}case"Squeeze":{const r=O("axis",t,e,n);return[a.squeeze(O("x",t,e,n),r)]}case"Reshape":return[a.reshape(O("x",t,e,n),O("shape",t,e,n))];case"EnsureShape":return[a.ensureShape(O("x",t,e,n),O("shape",t,e,n))];case"MirrorPad":return[a.mirrorPad(O("x",t,e,n),O("padding",t,e,n),O("mode",t,e,n))];case"PadV2":case"Pad":return[a.pad(O("x",t,e,n),O("padding",t,e,n),O("constantValue",t,e,n))];case"SpaceToBatchND":{const r=O("blockShape",t,e,n),s=O("paddings",t,e,n);return[a.spaceToBatchND(O("x",t,e,n),r,s)]}case"BatchToSpaceND":{const r=O("blockShape",t,e,n),s=O("crops",t,e,n);return[a.batchToSpaceND(O("x",t,e,n),r,s)]}case"DepthToSpace":{const r=O("blockSize",t,e,n),s=O("dataFormat",t,e,n).toUpperCase();return[a.depthToSpace(O("x",t,e,n),r,s)]}case"BroadcastTo":return[a.broadcastTo(O("x",t,e,n),O("shape",t,e,n))];case"BroadcastArgs":return[a.broadcastArgs(O("s0",t,e,n),O("s1",t,e,n))];default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n)));case"hash_table":return(async(t,e,n,a)=>{switch(t.op){case"HashTable":case"HashTableV2":{const r=a.getHashTableHandleByName(t.name);if(null!=r)return[r];{const r=O("keyDType",t,e,n),s=O("valueDType",t,e,n),o=new Ot(r,s);return a.addHashTable(t.name,o),[o.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const r=O("tableHandle",t,e,n,a),s=O("keys",t,e,n),o=O("values",t,e,n),i=a.getHashTableById(r.id);return[await i.import(s,o)]}case"LookupTableFind":case"LookupTableFindV2":{const r=O("tableHandle",t,e,n,a),s=O("keys",t,e,n),o=O("defaultValue",t,e,n),i=a.getHashTableById(r.id);return[await i.find(s,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const r=O("tableHandle",t,e,n,a);return[a.getHashTableById(r.id).tensorSize()]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})(t,e,n,a);case"custom":const s=_(t.op);if(s&&s.customExecutor)return s.customExecutor(new yt(t,e,n));throw TypeError(`Custom op ${t.op} is not registered.`);default:throw TypeError(`Unknown op '${t.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(t,e,n);return w.util.isPromise(s)?s.then((t=>[].concat(t))):[].concat(s)}class At{constructor(t={},e={},n={},a={},r){this.weightMap=t,this.tensorArrayMap=e,this.tensorListMap=n,this.functionMap=a,this.parseNodeNameCache=r,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,e){return{id:t,frameName:e,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const t=[];for(let e=0;e<this.contexts.length-1;e++){const n=this.contexts.slice(0,this.contexts.length-e);t.push(this.contextIdforContexts(n))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map((t=>0===t.id&&0===t.iterationId?"":`${t.frameName}-${t.iterationId}`)).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(!(this.contexts&&this.contexts.length>1))throw new Error("Cannot exit frame, the context is empty");this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift()}nextIteration(){if(!(this.contexts&&this.contexts.length>0))throw new Error("Cannot increase frame iteration, the context is empty");{this.contexts=this.contexts.slice(),this.lastId++;const t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(const e in this.tensorArrayMap)this.tensorArrayMap[e].clearAndClose(t);for(const e in this.tensorListMap)this.tensorListMap[e].clearAndClose(t)}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Dt(t,e,n,a){const r=new Set,s=[];let o=null,i=null;const p=new Set,u=new Set(Object.keys(t).map((t=>M(t)[0])));a=a||[];const m=new Set(a.map((t=>M(t.name)[0]))),l=[...e];for(;l.length>0;){const t=l.pop();(Lt(t)||zt(t)||Ct(t))&&null==o&&(o=t,i=o.children.map((t=>t.name)).filter((t=>r.has(t)))),r.add(t.name),null==n[t.name]&&(u.has(t.name)||m.has(t.name)||(0!==t.inputs.length?t.inputs.forEach((t=>{p.has(t.name)||(p.add(t.name),l.push(t))})):s.push(t.name)))}return{inputs:t,outputs:e,usedNodes:r,missingInputs:s,dynamicNode:o,syncInputs:i}}function kt(t,e){const{usedNodes:n,inputs:a}=e,r=Object.keys(a).map((t=>M(t)[0])).map((e=>t.nodes[e])),s=t.initNodes||[],o=t=>n.has("string"==typeof t?t:t.name);function i(t){return[...new Map(t.map((t=>[t.name,t]))).values()]}const p=i([...r,...t.weights,...s]).filter(o),u=i([...p,...Object.values(t.nodes)]).filter(o),m=new Map(u.map((t=>[t.name,t]))),l={};for(const t of u){l[t.name]=l[t.name]||0;for(const e of t.children)o(e)||(l[e.name]=Number.POSITIVE_INFINITY),l[e.name]=(l[e.name]||0)+1}const c=Object.entries(l).filter((([,t])=>0===t)).map((([t])=>t)),d=[...c];for(;c.length>0;){const t=c.pop(),e=m.get(t);for(const t of e.children.filter(o))0==--l[t.name]&&(d.push(t.name),c.push(t.name))}const h=function(t,e){const n=new Map(t.map((t=>[t.name,t]))),a=e.map((t=>t.name)),r=new Set(a);for(;a.length>0;){const t=a.pop(),e=n.get(t);for(const t of e.children)n.has(t.name)&&!r.has(t.name)&&(r.add(t.name),a.push(t.name))}const s=t.filter((t=>r.has(t.name)));return s}(d.map((t=>m.get(t))),p);return function(t,e){const n=new Map(t.map(((t,e)=>[t.name,e]))),a=new Set(e.map((t=>t.name))),r=t=>a.has("string"==typeof t?t:t.name),s=new Set(t.map((t=>t.name))),o=t=>s.has("string"==typeof t?t:t.name);for(const e of t){for(const t of e.children.filter(o)){if(!n.has(t.name))throw new Mt(`Child ${t.name} of node ${e.name} is unreachable.`);if(n.get(e.name)>n.get(t.name))throw new Mt(`Node ${e.name} is scheduled to run after its child ${t.name}.`)}if(!r(e))for(const t of e.inputs){if(!n.has(t.name))throw new Mt(`Input ${t.name} of node ${e.name} is unreachable.`);if(n.get(t.name)>n.get(e.name))throw new Mt(`Node ${e.name} is scheduled to run before its input ${t.name}.`)}}}(h,p),h}class Mt extends Error{constructor(t){super(`NodesExecutionOrderError: ${t}`)}}const Vt=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),Rt=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),Ft=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function Lt(t){return Vt.has(t.op)}function zt(t){return Rt.has(t.op)}function Ct(t){return Ft.has(t.op)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class $t{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){const e=Object.keys(t).map((e=>t[e].map((t=>t.id))));this._weightIds=[].concat(...e),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map((t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0})))}get outputs(){return this._outputs.map((t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0})))}get inputNodes(){return this._inputs.map((t=>t.signatureKey||t.name))}get outputNodes(){return this._outputs.map((t=>{const e=t.signatureKey||t.name;return t.defaultOutput?`${e}:${t.defaultOutput}`:e}))}get functions(){return Object.keys(this._functions).reduce(((t,e)=>(t[e]=this._functions[e].signature,t)),{})}constructor(t,e){this.graph=t,this.parent=e,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,null!=t.functions&&Object.keys(t.functions).forEach((e=>{this._functionExecutorMap[e]=new $t(t.functions[e],this)}))}getCompilationKey(t,e){const n=t.map((t=>t.name)).sort(),a=e.map((t=>t.name)).sort();return n.join(this.SEPARATOR)+"--"+a.join(this.SEPARATOR)}compile(t,e){const n=Dt(t,e,this.weightMap,this._initNodes),{missingInputs:a,dynamicNode:r,syncInputs:s}=n;if(null!=r)throw new Error(`This execution contains the node '${r.name}', which has the dynamic op '${r.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${s}]`);if(a.length>0){const n=e.map((t=>t.name)),r=Object.keys(t);throw new Error(`Cannot compute the outputs [${n}] from the provided inputs [${r}]. Missing the following inputs: [${a}]`)}const o=kt(this.graph,n),i=function(t){const e=new Map(t.map(((t,e)=>[t.name,e]))),n=Number.MAX_SAFE_INTEGER,a=t.map(((t,e)=>Lt(t)?n:e)),r=t=>{const n=a[e.get(t.name)];return null==n?-1:n},s=t.map(((t,e)=>t.children.map(r).reduce(((t,e)=>Math.max(t,e)),a[e]))),o=new Map;for(let e=0;e<t.length;++e){const a=s[e];if(a===n)continue;const r=t[e],i=t[a];o.has(i.name)||o.set(i.name,[]),o.get(i.name).push(r)}return o}(o);return{orderedNodes:o,nodeLiveUntilMap:i}}cloneAndKeepTensor(t){if(null==t)return null;const e=t.clone();return(0,w.keep)(e),e}cloneTensorList(t){if(!t)return null;return t.map((t=>this.cloneAndKeepTensor(t)))}cloneTensorMap(t){return Object.fromEntries(Object.entries(t).map((([t,e])=>[t,this.cloneTensorList(e)])))}execute(t,e){this.disposeIntermediateTensors(),t=this.mapInputs(t);const n=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e);const a=n.map((t=>this.graph.nodes[M(t)[0]])),r=e.map((t=>M(t)[0])),s=new Set(r);let o=r.map((t=>this.graph.nodes[t]));0===o.length&&(o=this._outputs);const i=this.getCompilationKey(a,o);let p=this.compiledMap.get(i);null==p&&(p=this.compile(t,o),this.compiledMap.set(i,p));try{this.keepIntermediateTensors=(0,w.env)().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(t){this.keepIntermediateTensors=!1,console.warn(t.message)}const u={},m={};return(0,w.tidy)((()=>{const n=new At(this.weightMap,u,m,this.functionExecutorMap,this.parseNodeNameCache),a=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(t).forEach((e=>{const[r,s]=M(e,n),o=[];o[s]=t[e],a[r]=o,this.keepIntermediateTensors&&(this.clonedTensorsMap[r]=this.cloneTensorList(o))}));const r=this.getFrozenTensorIds(a),{orderedNodes:o,nodeLiveUntilMap:i}=p;for(const t of o){if(a[t.name])continue;const e=Et(t,a,n,this._resourceManager);if(w.util.isPromise(e))throw new Error(`The execution of the op '${t.op}' returned a promise. Please use model.executeAsync() instead.`);a[t.name]=e,this.keepIntermediateTensors&&(this.clonedTensorsMap[t.name]=this.cloneTensorList(e)),this.checkTensorForDisposalWithNodeLiveUntilInfo(t,a,n,r,s,i.get(t.name))}return null==this.parent&&n.dispose(r),e.map((t=>E(t,a,n)))}))}getFrozenTensorIds(t){const e=[].concat.apply([],Object.keys(t).map((e=>t[e])).map((t=>t.map((t=>t.id)))));return new Set(e)}checkTensorForDisposal(t,e,n,a,r,s,o){if(!Lt(e)&&!s.has(t)){for(const a of n[t])null!=a&&(o[a.id]=(o[a.id]||0)+e.children.length);for(const t of e.inputs){if(Lt(t))continue;const e=A(t.name,n,a);if(null!=e)for(const t of e){if(!t||t.kept||r.has(t.id))continue;const e=o[t.id];1===e?(t.dispose(),delete o[t.id]):null!=e&&o[t.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(t,e,n,a,r,s){function o(t){return Lt(t)||r.has(t.name)}if(!Lt(t)&&null!=s)for(const t of s){if(o(t))continue;const r=A(t.name,e,n);for(const t of r)!t||t.kept||a.has(t.id)||t.dispose()}}async executeAsync(t,e){return this._executeAsync(t,e)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach((t=>{for(const e of t)e&&!e.isDisposed&&e.dispose()})),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(t,e,n=!1,a={},r={}){this.disposeIntermediateTensors(),n||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e));try{this.keepIntermediateTensors=(0,w.env)().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(t){this.keepIntermediateTensors=!1,console.warn(t.message)}const s=new At(this.weightMap,a,r,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const o=await this.executeWithControlFlow(t,s,e,n),i=e.map((t=>E(t,o,s))),p=i.map((t=>t.id)),u=Object.keys(t).map((e=>t[e].id)),m=new Set([...p,...u,...this.weightIds]);return Object.values(o).forEach((t=>{t.forEach((t=>{!t||t.isDisposed||m.has(t.id)||t.dispose()}))})),null==this.parent&&s.dispose(m),i}async executeFunctionAsync(t,e,n){const a=t.reduce(((t,e,n)=>(t[this.inputs[n].name]=e,t)),{});return this._executeAsync(a,this.outputNodes,!0,e,n)}async executeWithControlFlow(t,e,n,a){const r=Object.keys(t),s=r.map((t=>this.graph.nodes[M(t)[0]])),o=n.map((t=>M(t)[0])),i=new Set(o);let p=o.map((t=>this.graph.nodes[t]));0===p.length&&(p=this._outputs);const{usedNodes:u,missingInputs:m,dynamicNode:l,syncInputs:c}=Dt(t,p,this.weightMap,this._initNodes),d=[...s,...this.graph.weights,...this._initNodes||[]].map((t=>({node:t,contexts:e.currentContext}))),h=Object.assign({},this.weightMap);Object.keys(t).forEach((e=>{const[n,a]=M(e),r=[];r[a]=t[e],h[n]=r}));const y={},f=this.getFrozenTensorIds(h),g={};for(;d.length>0;){const t=this.processStack(s,d,e,h,g,f,i,y,u);await Promise.all(t)}null!=l||a||console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const N=p.filter((t=>!Lt(t)&&!E(t.name,h,e))).map((t=>t.name));if(N.length>0){let t="";throw null!=l&&(t=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${c}]`),new Error(`Cannot compute the outputs [${N}] from the provided inputs [${r}]. Consider providing the following inputs: [${m}]. ${t}`)}return h}processStack(t,e,n,a,r,s,o,i,p){const u=[];for(;e.length>0;){const t=e.pop();n.currentContext=t.contexts;let m="";if("Enter"===t.node.op&&O("isConstant",t.node,a,n)&&([m]=D(t.node.name,n)),null==a[t.node.name]){const l=Et(t.node,a,n,this._resourceManager);m||([m]=D(t.node.name,n));const c=n.currentContext;w.util.isPromise(l)?u.push(l.then((u=>(a[m]=u,this.keepIntermediateTensors&&(this.clonedTensorsMap[m]=this.cloneTensorList(u)),n.currentContext=c,this.checkTensorForDisposal(m,t.node,a,n,s,o,i),this.processChildNodes(t.node,e,n,a,r,p),u)))):(a[m]=l,this.keepIntermediateTensors&&(this.clonedTensorsMap[m]=this.cloneTensorList(l)),this.checkTensorForDisposal(m,t.node,a,n,s,o,i),this.processChildNodes(t.node,e,n,a,r,p))}else this.processChildNodes(t.node,e,n,a,r,p)}return u}processChildNodes(t,e,n,a,r,s){t.children.forEach((t=>{const[o]=D(t.name,n);!r[o]&&s.has(t.name)&&("Merge"===t.op?t.inputNames.some((t=>!!E(t,a,n)))&&(r[o]=!0,e.push({contexts:n.currentContext,node:t})):t.inputNames.every((t=>!!E(t,a,n)))&&(r[o]=!0,e.push({contexts:n.currentContext,node:t})))}))}dispose(){Object.keys(this.weightMap).forEach((t=>this.weightMap[t].forEach((t=>t.dispose()))))}checkInputShapeAndType(t){Object.keys(t).forEach((e=>{const n=t[e],[a]=M(e),r=this.graph.nodes[a];if(r.attrParams.shape&&r.attrParams.shape.value){const t=r.attrParams.shape.value,e=t.length===n.shape.length&&n.shape.every(((e,n)=>-1===t[n]||t[n]===e));w.util.assert(e,(()=>`The shape of dict['${r.name}'] provided in model.execute(dict) must be [${t}], but was [${n.shape}]`))}r.attrParams.dtype&&r.attrParams.dtype.value&&w.util.assert(n.dtype===r.attrParams.dtype.value,(()=>`The dtype of dict['${r.name}'] provided in model.execute(dict) must be ${r.attrParams.dtype.value}, but was ${n.dtype}`))}))}mapInputs(t){var e,n;const a={};for(const r in t){const s=null===(n=null===(e=this._signature)||void 0===e?void 0:e.inputs)||void 0===n?void 0:n[r];null!=s?a[s.name]=t[r]:a[r]=t[r]}return a}checkInputs(t){const e=Object.keys(t).filter((t=>{const[e]=M(t);return null==this.graph.nodes[e]}));if(e.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${e}] that are not part of graph`)}mapOutputs(t){return t.map((t=>{var e,n;const a=null===(n=null===(e=this._signature)||void 0===e?void 0:e.outputs)||void 0===n?void 0:n[t];return null!=a?a.name:t}),{})}checkOutputs(t){t.forEach((t=>{const[e]=M(t);if(!this.graph.nodes[e])throw new Error(`The output '${t}' is not found in the graph`)}))}}class Pt{constructor(t={},e={}){this.hashTableNameToHandle=t,this.hashTableMap=e}addHashTable(t,e){this.hashTableNameToHandle[t]=e.handle,this.hashTableMap[e.id]=e}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(const t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(const t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}}var Bt=n(77084);
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const qt="?tfjs-format=file",jt="model.json";class Ut{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(t,e={},n=w.io){this.modelUrl=t,this.loadOptions=e,this.version="n/a",this.io=n,null==e&&(this.loadOptions={}),this.resourceManager=new Pt}findIOHandler(){const t=this.modelUrl;if(null!=t.load)this.handler=t;else if(null!=this.loadOptions.requestInit)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{const e=this.io.getLoadHandlers(t,this.loadOptions);if(0===e.length)e.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(e.length>1)throw new Error(`Found more than one (${e.length}) load handlers for URL '${[t]}'`);this.handler=e[0]}}load(){if(this.findIOHandler(),null==this.handler.load)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const t=this.handler.load();return w.util.isPromise(t)?t.then((t=>null==t.getWeightStream?this.loadSync(t):this.loadStreaming(t))):this.loadSync(t)}loadSync(t){const e=this.io.decodeWeights(t.weightData,t.weightSpecs);return this.loadWithWeightMap(t,e)}async loadStreaming(t){if(null==t.getWeightStream)throw new Error("Model artifacts missing streamWeights function");const e=await(0,Bt.s5)(t.getWeightStream(),t.weightSpecs);return this.loadWithWeightMap(t,e)}loadWithWeightMap(t,e){this.artifacts=t;const n=this.artifacts.modelTopology;let a=this.artifacts.signature;if(null!=this.artifacts.userDefinedMetadata){const t=this.artifacts.userDefinedMetadata;null!=t.signature&&(a=t.signature),null!=t.structuredOutputKeys&&(this.structuredOutputKeys=t.structuredOutputKeys)}if(this.signature=a,this.version=`${n.versions.producer}.${n.versions.minConsumer}`,this.executor=new $t(tt.Instance.transformGraph(n,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(e),this.executor.resourceManager=this.resourceManager,null!=t.modelInitializer&&null!=t.modelInitializer.node){const e=tt.Instance.transformGraph(t.modelInitializer);this.initializer=new $t(e),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=t.initializerSignature}return!0}async save(t,e){if("string"==typeof t){const e=this.io.getSaveHandlers(t);if(0===e.length)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(e.length>1)throw new Error(`Found more than one (${e.length}) save handlers for URL '${t}'`);t=e[0]}if(null==t.save)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}addStructuredOutputNames(t){if(this.structuredOutputKeys){const e=t instanceof w.Tensor?[t]:t,n={};return e.forEach(((t,e)=>n[this.structuredOutputKeys[e]]=t)),n}return t}predict(t,e){const n=this.execute(t,this.outputNodes);return this.addStructuredOutputNames(n)}async predictAsync(t,e){const n=await this.executeAsync(t,this.outputNodes);return this.addStructuredOutputNames(n)}normalizeInputs(t){var e;if(!(t instanceof w.Tensor||Array.isArray(t))){const n=null===(e=this.signature)||void 0===e?void 0:e.inputs;if(null!=n)for(const e in n){const a=n[e];null!=a.resourceId&&(t[e]=this.resourceIdToCapturedInput[a.resourceId])}return t}t=Array.isArray(t)?t:[t];const n=Object.keys(this.resourceIdToCapturedInput).length;if(t.length+n!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-n} non-resource placeholders, while there are ${t.length} input tensors provided.`);let a=0;return this.inputNodes.reduce(((e,n)=>{var r,s,o;const i=null===(o=null===(s=null===(r=this.signature)||void 0===r?void 0:r.inputs)||void 0===s?void 0:s[n])||void 0===o?void 0:o.resourceId;return e[n]=null!=i?this.resourceIdToCapturedInput[i]:t[a++],e}),{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}executeInitializerGraph(){return null==this.initializer?[]:null==this.initializerSignature?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return null==this.initializer?[]:null==this.initializerSignature?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(t){if(this.resourceIdToCapturedInput={},this.initializerSignature){const e=this.initializerSignature.outputs,n=Object.keys(e);for(let a=0;a<n.length;a++){const r=e[n[a]];this.resourceIdToCapturedInput[r.resourceId]=t[a]}}}execute(t,e){null==this.resourceIdToCapturedInput&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const n=this.executor.execute(t,e);return n.length>1?n:n[0]}async executeAsync(t,e){null==this.resourceIdToCapturedInput&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),t=this.normalizeInputs(t),e=this.normalizeOutputs(e);const n=await this.executor.executeAsync(t,e);return n.length>1?n:n[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce(((e,n)=>(e[n]=[t[n]],e)),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&(0,w.dispose)(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function Wt(t,e={},n=w.io){if(null==t)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");null==e&&(e={}),e.fromTFHub&&"string"==typeof t&&(t=function(t){t.endsWith("/")||(t+="/");return`${t}${jt}${qt}`}(t));const a=new Ut(t,e,n);return await a.load(),a}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */,28570:t=>{t.exports=n;var e=null;try{e=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(t){}function n(t,e,n){this.low=0|t,this.high=0|e,this.unsigned=!!n}function a(t){return!0===(t&&t.__isLong__)}n.prototype.__isLong__,Object.defineProperty(n.prototype,"__isLong__",{value:!0}),n.isLong=a;var r={},s={};function o(t,e){var n,a,o;return e?(o=0<=(t>>>=0)&&t<256)&&(a=s[t])?a:(n=p(t,(0|t)<0?-1:0,!0),o&&(s[t]=n),n):(o=-128<=(t|=0)&&t<128)&&(a=r[t])?a:(n=p(t,t<0?-1:0,!1),o&&(r[t]=n),n)}function i(t,e){if(isNaN(t))return e?g:f;if(e){if(t<0)return g;if(t>=d)return w}else{if(t<=-h)return S;if(t+1>=h)return b}return t<0?i(-t,e).neg():p(t%c|0,t/c|0,e)}function p(t,e,a){return new n(t,e,a)}n.fromInt=o,n.fromNumber=i,n.fromBits=p;var u=Math.pow;function m(t,e,n){if(0===t.length)throw Error("empty string");if("NaN"===t||"Infinity"===t||"+Infinity"===t||"-Infinity"===t)return f;if("number"==typeof e?(n=e,e=!1):e=!!e,(n=n||10)<2||36<n)throw RangeError("radix");var a;if((a=t.indexOf("-"))>0)throw Error("interior hyphen");if(0===a)return m(t.substring(1),e,n).neg();for(var r=i(u(n,8)),s=f,o=0;o<t.length;o+=8){var p=Math.min(8,t.length-o),l=parseInt(t.substring(o,o+p),n);if(p<8){var c=i(u(n,p));s=s.mul(c).add(i(l))}else s=(s=s.mul(r)).add(i(l))}return s.unsigned=e,s}function l(t,e){return"number"==typeof t?i(t,e):"string"==typeof t?m(t,e):p(t.low,t.high,"boolean"==typeof e?e:t.unsigned)}n.fromString=m,n.fromValue=l;var c=4294967296,d=c*c,h=d/2,y=o(1<<24),f=o(0);n.ZERO=f;var g=o(0,!0);n.UZERO=g;var N=o(1);n.ONE=N;var T=o(1,!0);n.UONE=T;var x=o(-1);n.NEG_ONE=x;var b=p(-1,2147483647,!1);n.MAX_VALUE=b;var w=p(-1,-1,!0);n.MAX_UNSIGNED_VALUE=w;var S=p(0,-2147483648,!1);n.MIN_VALUE=S;var I=n.prototype;I.toInt=function(){return this.unsigned?this.low>>>0:this.low},I.toNumber=function(){return this.unsigned?(this.high>>>0)*c+(this.low>>>0):this.high*c+(this.low>>>0)},I.toString=function(t){if((t=t||10)<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(S)){var e=i(t),n=this.div(e),a=n.mul(e).sub(this);return n.toString(t)+a.toInt().toString(t)}return"-"+this.neg().toString(t)}for(var r=i(u(t,6),this.unsigned),s=this,o="";;){var p=s.div(r),m=(s.sub(p.mul(r)).toInt()>>>0).toString(t);if((s=p).isZero())return m+o;for(;m.length<6;)m="0"+m;o=""+m+o}},I.getHighBits=function(){return this.high},I.getHighBitsUnsigned=function(){return this.high>>>0},I.getLowBits=function(){return this.low},I.getLowBitsUnsigned=function(){return this.low>>>0},I.getNumBitsAbs=function(){if(this.isNegative())return this.eq(S)?64:this.neg().getNumBitsAbs();for(var t=0!=this.high?this.high:this.low,e=31;e>0&&!(t&1<<e);e--);return 0!=this.high?e+33:e+1},I.isZero=function(){return 0===this.high&&0===this.low},I.eqz=I.isZero,I.isNegative=function(){return!this.unsigned&&this.high<0},I.isPositive=function(){return this.unsigned||this.high>=0},I.isOdd=function(){return!(1&~this.low)},I.isEven=function(){return!(1&this.low)},I.equals=function(t){return a(t)||(t=l(t)),(this.unsigned===t.unsigned||this.high>>>31!=1||t.high>>>31!=1)&&(this.high===t.high&&this.low===t.low)},I.eq=I.equals,I.notEquals=function(t){return!this.eq(t)},I.neq=I.notEquals,I.ne=I.notEquals,I.lessThan=function(t){return this.comp(t)<0},I.lt=I.lessThan,I.lessThanOrEqual=function(t){return this.comp(t)<=0},I.lte=I.lessThanOrEqual,I.le=I.lessThanOrEqual,I.greaterThan=function(t){return this.comp(t)>0},I.gt=I.greaterThan,I.greaterThanOrEqual=function(t){return this.comp(t)>=0},I.gte=I.greaterThanOrEqual,I.ge=I.greaterThanOrEqual,I.compare=function(t){if(a(t)||(t=l(t)),this.eq(t))return 0;var e=this.isNegative(),n=t.isNegative();return e&&!n?-1:!e&&n?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1},I.comp=I.compare,I.negate=function(){return!this.unsigned&&this.eq(S)?S:this.not().add(N)},I.neg=I.negate,I.add=function(t){a(t)||(t=l(t));var e=this.high>>>16,n=65535&this.high,r=this.low>>>16,s=65535&this.low,o=t.high>>>16,i=65535&t.high,u=t.low>>>16,m=0,c=0,d=0,h=0;return d+=(h+=s+(65535&t.low))>>>16,c+=(d+=r+u)>>>16,m+=(c+=n+i)>>>16,m+=e+o,p((d&=65535)<<16|(h&=65535),(m&=65535)<<16|(c&=65535),this.unsigned)},I.subtract=function(t){return a(t)||(t=l(t)),this.add(t.neg())},I.sub=I.subtract,I.multiply=function(t){if(this.isZero())return f;if(a(t)||(t=l(t)),e)return p(e.mul(this.low,this.high,t.low,t.high),e.get_high(),this.unsigned);if(t.isZero())return f;if(this.eq(S))return t.isOdd()?S:f;if(t.eq(S))return this.isOdd()?S:f;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(y)&&t.lt(y))return i(this.toNumber()*t.toNumber(),this.unsigned);var n=this.high>>>16,r=65535&this.high,s=this.low>>>16,o=65535&this.low,u=t.high>>>16,m=65535&t.high,c=t.low>>>16,d=65535&t.low,h=0,g=0,N=0,T=0;return N+=(T+=o*d)>>>16,g+=(N+=s*d)>>>16,N&=65535,g+=(N+=o*c)>>>16,h+=(g+=r*d)>>>16,g&=65535,h+=(g+=s*c)>>>16,g&=65535,h+=(g+=o*m)>>>16,h+=n*d+r*c+s*m+o*u,p((N&=65535)<<16|(T&=65535),(h&=65535)<<16|(g&=65535),this.unsigned)},I.mul=I.multiply,I.divide=function(t){if(a(t)||(t=l(t)),t.isZero())throw Error("division by zero");var n,r,s;if(e)return this.unsigned||-2147483648!==this.high||-1!==t.low||-1!==t.high?p((this.unsigned?e.div_u:e.div_s)(this.low,this.high,t.low,t.high),e.get_high(),this.unsigned):this;if(this.isZero())return this.unsigned?g:f;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return g;if(t.gt(this.shru(1)))return T;s=g}else{if(this.eq(S))return t.eq(N)||t.eq(x)?S:t.eq(S)?N:(n=this.shr(1).div(t).shl(1)).eq(f)?t.isNegative()?N:x:(r=this.sub(t.mul(n)),s=n.add(r.div(t)));if(t.eq(S))return this.unsigned?g:f;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();s=f}for(r=this;r.gte(t);){n=Math.max(1,Math.floor(r.toNumber()/t.toNumber()));for(var o=Math.ceil(Math.log(n)/Math.LN2),m=o<=48?1:u(2,o-48),c=i(n),d=c.mul(t);d.isNegative()||d.gt(r);)d=(c=i(n-=m,this.unsigned)).mul(t);c.isZero()&&(c=N),s=s.add(c),r=r.sub(d)}return s},I.div=I.divide,I.modulo=function(t){return a(t)||(t=l(t)),e?p((this.unsigned?e.rem_u:e.rem_s)(this.low,this.high,t.low,t.high),e.get_high(),this.unsigned):this.sub(this.div(t).mul(t))},I.mod=I.modulo,I.rem=I.modulo,I.not=function(){return p(~this.low,~this.high,this.unsigned)},I.and=function(t){return a(t)||(t=l(t)),p(this.low&t.low,this.high&t.high,this.unsigned)},I.or=function(t){return a(t)||(t=l(t)),p(this.low|t.low,this.high|t.high,this.unsigned)},I.xor=function(t){return a(t)||(t=l(t)),p(this.low^t.low,this.high^t.high,this.unsigned)},I.shiftLeft=function(t){return a(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?p(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):p(0,this.low<<t-32,this.unsigned)},I.shl=I.shiftLeft,I.shiftRight=function(t){return a(t)&&(t=t.toInt()),0==(t&=63)?this:t<32?p(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):p(this.high>>t-32,this.high>=0?0:-1,this.unsigned)},I.shr=I.shiftRight,I.shiftRightUnsigned=function(t){if(a(t)&&(t=t.toInt()),0===(t&=63))return this;var e=this.high;return t<32?p(this.low>>>t|e<<32-t,e>>>t,this.unsigned):p(32===t?e:e>>>t-32,0,this.unsigned)},I.shru=I.shiftRightUnsigned,I.shr_u=I.shiftRightUnsigned,I.toSigned=function(){return this.unsigned?p(this.low,this.high,!1):this},I.toUnsigned=function(){return this.unsigned?this:p(this.low,this.high,!0)},I.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()},I.toBytesLE=function(){var t=this.high,e=this.low;return[255&e,e>>>8&255,e>>>16&255,e>>>24,255&t,t>>>8&255,t>>>16&255,t>>>24]},I.toBytesBE=function(){var t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,255&t,e>>>24,e>>>16&255,e>>>8&255,255&e]},n.fromBytes=function(t,e,a){return a?n.fromBytesLE(t,e):n.fromBytesBE(t,e)},n.fromBytesLE=function(t,e){return new n(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)},n.fromBytesBE=function(t,e){return new n(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)}},7391:(t,e,n)=>{var a=n(7180),r=n(43181),s=n(43031),o=n(9067),i=n(96833),p=n(43717),u=n(74801);u.alea=a,u.xor128=r,u.xorwow=s,u.xorshift7=o,u.xor4096=i,u.tychei=p,t.exports=u},7180:function(t,e,n){var a;!function(t,r,s){function o(t){var e=this,n=function(){var t=4022871197,e=function(e){e=String(e);for(var n=0;n<e.length;n++){var a=.02519603282416938*(t+=e.charCodeAt(n));a-=t=a>>>0,t=(a*=t)>>>0,t+=4294967296*(a-=t)}return 2.3283064365386963e-10*(t>>>0)};return e}();e.next=function(){var t=2091639*e.s0+2.3283064365386963e-10*e.c;return e.s0=e.s1,e.s1=e.s2,e.s2=t-(e.c=0|t)},e.c=1,e.s0=n(" "),e.s1=n(" "),e.s2=n(" "),e.s0-=n(t),e.s0<0&&(e.s0+=1),e.s1-=n(t),e.s1<0&&(e.s1+=1),e.s2-=n(t),e.s2<0&&(e.s2+=1),n=null}function i(t,e){return e.c=t.c,e.s0=t.s0,e.s1=t.s1,e.s2=t.s2,e}function p(t,e){var n=new o(t),a=e&&e.state,r=n.next;return r.int32=function(){return 4294967296*n.next()|0},r.double=function(){return r()+11102230246251565e-32*(2097152*r()|0)},r.quick=r,a&&("object"==typeof a&&i(a,n),r.state=function(){return i(n,{})}),r}r&&r.exports?r.exports=p:n.amdD&&n.amdO?void 0===(a=function(){return p}.call(e,n,e,r))||(r.exports=a):this.alea=p}(0,t=n.nmd(t),n.amdD)},43717:function(t,e,n){var a;!function(t,r,s){function o(t){var e=this,n="";e.next=function(){var t=e.b,n=e.c,a=e.d,r=e.a;return t=t<<25^t>>>7^n,n=n-a|0,a=a<<24^a>>>8^r,r=r-t|0,e.b=t=t<<20^t>>>12^n,e.c=n=n-a|0,e.d=a<<16^n>>>16^r,e.a=r-t|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,t===Math.floor(t)?(e.a=t/4294967296|0,e.b=0|t):n+=t;for(var a=0;a<n.length+20;a++)e.b^=0|n.charCodeAt(a),e.next()}function i(t,e){return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e}function p(t,e){var n=new o(t),a=e&&e.state,r=function(){return(n.next()>>>0)/4294967296};return r.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},r.int32=n.next,r.quick=r,a&&("object"==typeof a&&i(a,n),r.state=function(){return i(n,{})}),r}r&&r.exports?r.exports=p:n.amdD&&n.amdO?void 0===(a=function(){return p}.call(e,n,e,r))||(r.exports=a):this.tychei=p}(0,t=n.nmd(t),n.amdD)},43181:function(t,e,n){var a;!function(t,r,s){function o(t){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var t=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^t^t>>>8},t===(0|t)?e.x=t:n+=t;for(var a=0;a<n.length+64;a++)e.x^=0|n.charCodeAt(a),e.next()}function i(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e}function p(t,e){var n=new o(t),a=e&&e.state,r=function(){return(n.next()>>>0)/4294967296};return r.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},r.int32=n.next,r.quick=r,a&&("object"==typeof a&&i(a,n),r.state=function(){return i(n,{})}),r}r&&r.exports?r.exports=p:n.amdD&&n.amdO?void 0===(a=function(){return p}.call(e,n,e,r))||(r.exports=a):this.xor128=p}(0,t=n.nmd(t),n.amdD)},96833:function(t,e,n){var a;!function(t,r,s){function o(t){var e=this;e.next=function(){var t,n,a=e.w,r=e.X,s=e.i;return e.w=a=a+1640531527|0,n=r[s+34&127],t=r[s=s+1&127],n^=n<<13,t^=t<<17,n^=n>>>15,t^=t>>>12,n=r[s]=n^t,e.i=s,n+(a^a>>>16)|0},function(t,e){var n,a,r,s,o,i=[],p=128;for(e===(0|e)?(a=e,e=null):(e+="\0",a=0,p=Math.max(p,e.length)),r=0,s=-32;s<p;++s)e&&(a^=e.charCodeAt((s+32)%e.length)),0===s&&(o=a),a^=a<<10,a^=a>>>15,a^=a<<4,a^=a>>>13,s>=0&&(o=o+1640531527|0,r=0==(n=i[127&s]^=a+o)?r+1:0);for(r>=128&&(i[127&(e&&e.length||0)]=-1),r=127,s=512;s>0;--s)a=i[r+34&127],n=i[r=r+1&127],a^=a<<13,n^=n<<17,a^=a>>>15,n^=n>>>12,i[r]=a^n;t.w=o,t.X=i,t.i=r}(e,t)}function i(t,e){return e.i=t.i,e.w=t.w,e.X=t.X.slice(),e}function p(t,e){null==t&&(t=+new Date);var n=new o(t),a=e&&e.state,r=function(){return(n.next()>>>0)/4294967296};return r.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},r.int32=n.next,r.quick=r,a&&(a.X&&i(a,n),r.state=function(){return i(n,{})}),r}r&&r.exports?r.exports=p:n.amdD&&n.amdO?void 0===(a=function(){return p}.call(e,n,e,r))||(r.exports=a):this.xor4096=p}(0,t=n.nmd(t),n.amdD)},9067:function(t,e,n){var a;!function(t,r,s){function o(t){var e=this;e.next=function(){var t,n,a=e.x,r=e.i;return t=a[r],n=(t^=t>>>7)^t<<24,n^=(t=a[r+1&7])^t>>>10,n^=(t=a[r+3&7])^t>>>3,n^=(t=a[r+4&7])^t<<7,t=a[r+7&7],n^=(t^=t<<13)^t<<9,a[r]=n,e.i=r+1&7,n},function(t,e){var n,a=[];if(e===(0|e))a[0]=e;else for(e=""+e,n=0;n<e.length;++n)a[7&n]=a[7&n]<<15^e.charCodeAt(n)+a[n+1&7]<<13;for(;a.length<8;)a.push(0);for(n=0;n<8&&0===a[n];++n);for(8==n?a[7]=-1:a[n],t.x=a,t.i=0,n=256;n>0;--n)t.next()}(e,t)}function i(t,e){return e.x=t.x.slice(),e.i=t.i,e}function p(t,e){null==t&&(t=+new Date);var n=new o(t),a=e&&e.state,r=function(){return(n.next()>>>0)/4294967296};return r.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},r.int32=n.next,r.quick=r,a&&(a.x&&i(a,n),r.state=function(){return i(n,{})}),r}r&&r.exports?r.exports=p:n.amdD&&n.amdO?void 0===(a=function(){return p}.call(e,n,e,r))||(r.exports=a):this.xorshift7=p}(0,t=n.nmd(t),n.amdD)},43031:function(t,e,n){var a;!function(t,r,s){function o(t){var e=this,n="";e.next=function(){var t=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^t^t<<1)|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,t===(0|t)?e.x=t:n+=t;for(var a=0;a<n.length+64;a++)e.x^=0|n.charCodeAt(a),a==n.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function i(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e.v=t.v,e.d=t.d,e}function p(t,e){var n=new o(t),a=e&&e.state,r=function(){return(n.next()>>>0)/4294967296};return r.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},r.int32=n.next,r.quick=r,a&&("object"==typeof a&&i(a,n),r.state=function(){return i(n,{})}),r}r&&r.exports?r.exports=p:n.amdD&&n.amdO?void 0===(a=function(){return p}.call(e,n,e,r))||(r.exports=a):this.xorwow=p}(0,t=n.nmd(t),n.amdD)},74801:function(t,e,n){var a;!function(r,s,o){var i,p=256,u=o.pow(p,6),m=o.pow(2,52),l=2*m,c=p-1;function d(t,e,n){var a=[],c=g(f((e=1==e?{entropy:!0}:e||{}).entropy?[t,N(s)]:null==t?function(){try{var t;return i&&(t=i.randomBytes)?t=t(p):(t=new Uint8Array(p),(r.crypto||r.msCrypto).getRandomValues(t)),N(t)}catch(t){var e=r.navigator,n=e&&e.plugins;return[+new Date,r,n,r.screen,N(s)]}}():t,3),a),d=new h(a),T=function(){for(var t=d.g(6),e=u,n=0;t<m;)t=(t+n)*p,e*=p,n=d.g(1);for(;t>=l;)t/=2,e/=2,n>>>=1;return(t+n)/e};return T.int32=function(){return 0|d.g(4)},T.quick=function(){return d.g(4)/4294967296},T.double=T,g(N(d.S),s),(e.pass||n||function(t,e,n,a){return a&&(a.S&&y(a,d),t.state=function(){return y(d,{})}),n?(o.random=t,e):t})(T,c,"global"in e?e.global:this==o,e.state)}function h(t){var e,n=t.length,a=this,r=0,s=a.i=a.j=0,o=a.S=[];for(n||(t=[n++]);r<p;)o[r]=r++;for(r=0;r<p;r++)o[r]=o[s=c&s+t[r%n]+(e=o[r])],o[s]=e;(a.g=function(t){for(var e,n=0,r=a.i,s=a.j,o=a.S;t--;)e=o[r=c&r+1],n=n*p+o[c&(o[r]=o[s=c&s+e])+(o[s]=e)];return a.i=r,a.j=s,n})(p)}function y(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function f(t,e){var n,a=[],r=typeof t;if(e&&"object"==r)for(n in t)try{a.push(f(t[n],e-1))}catch(t){}return a.length?a:"string"==r?t:t+"\0"}function g(t,e){for(var n,a=t+"",r=0;r<a.length;)e[c&r]=c&(n^=19*e[c&r])+a.charCodeAt(r++);return N(e)}function N(t){return String.fromCharCode.apply(0,t)}if(g(o.random(),s),t.exports){t.exports=d;try{i=n(41234)}catch(t){}}else void 0===(a=function(){return d}.call(e,n,e,t))||(t.exports=a)}("undefined"!=typeof self?self:this,[],Math)}}]);