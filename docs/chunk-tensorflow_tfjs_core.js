"use strict";(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[5234],{15149:(e,t,n)=>{n.d(t,{GJ:()=>r,uI:()=>s});class r{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class s{refCount(e){return a("refCount")}incRef(e){return a("incRef")}timerAvailable(){return!0}time(e){return a("time")}read(e){return a("read")}readSync(e){return a("readSync")}readToGPU(e,t){return a("readToGPU")}numDataIds(){return a("numDataIds")}disposeData(e,t){return a("disposeData")}write(e,t,n){return a("write")}move(e,t,n,r,s){return a("move")}createTensorFromGPUData(e,t,n){return a("createTensorFromGPUData")}memory(){return a("memory")}floatPrecision(){return a("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}dispose(){return a("dispose")}}function a(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}},8360:(e,t,n)=>{
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
function r(e,t,n){const r=function(e,t,n){return function(e,t,n){let r=0,s=e.length,a=0,o=!1;for(;r<s;){a=r+(s-r>>>1);const i=n(t,e[a]);i>0?r=a+1:(s=a,o=!i)}return o?r:-r-1}(e,t,n||s)}(e,t,n),a=r<0?-(r+1):r;e.splice(a,0,t)}function s(e,t){return e>t?1:e<t?-1:0}
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
function a(e,t,n,r,s){return l(e,t,n,r,s,0)}function o(e,t,n,r,s,a){return l(e,t,n,r,s,0,!1,a,!0)}function i(e,t,n,r,s,a){return l(e,t,n,r,s,a,!0)}function l(e,t,n,s,a,o,i=!1,l=!1,d=!1){const p=[];for(let e=0;e<t.length;e++)t[e]>a&&p.push({score:t[e],boxIndex:e,suppressBeginIndex:0});p.sort(h);const f=o>0?-.5/o:0,g=[],m=[];for(;g.length<n&&p.length>0;){const t=p.pop(),{score:n,boxIndex:o,suppressBeginIndex:i}=t;if(n<a)break;let l=!1;for(let n=g.length-1;n>=i;--n){const r=u(e,o,g[n]);if(r>=s){l=!0;break}if(t.score=t.score*c(s,f,r),t.score<=a)break}t.suppressBeginIndex=g.length,l||(t.score===n?(g.push(o),m.push(t.score)):t.score>a&&r(p,t,h))}const y=g.length,b=n-y;l&&b>0&&(g.push(...new Array(b).fill(0)),m.push(...new Array(b).fill(0)));const w={selectedIndices:g};return i&&(w.selectedScores=m),d&&(w.validOutputs=y),w}function u(e,t,n){const r=e.subarray(4*t,4*t+4),s=e.subarray(4*n,4*n+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),l=Math.max(r[1],r[3]),u=Math.min(s[0],s[2]),c=Math.min(s[1],s[3]),h=Math.max(s[0],s[2]),d=Math.max(s[1],s[3]),p=(i-a)*(l-o),f=(h-u)*(d-c);if(p<=0||f<=0)return 0;const g=Math.max(a,u),m=Math.max(o,c),y=Math.min(i,h),b=Math.min(l,d),w=Math.max(y-g,0)*Math.max(b-m,0);return w/(p+f-w)}function c(e,t,n){const r=Math.exp(t*n*n);return n<=e?r:0}function h(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}n.d(t,{c7:()=>a,ZS:()=>o,ut:()=>i})},54411:(e,t,n)=>{n.d(t,{Y:()=>s});var r=n(448);
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
 */function s(e,t){const n=[];for(let e=0;e<t.length;e++)t[e]&&n.push(e);const s=(0,r.r)(e,"int32"),a=(0,r.r)([n.length,e.length],"int32");for(let t=0;t<n.length;t++){const r=s.indexToLoc(n[t]),o=t*e.length;a.values.set(r,o)}return a.toTensor()}},41585:(e,t,n)=>{n.d(t,{T2:()=>v,Ye:()=>w});var r=n(15149),s=n(46574),a=n(41743),o=n(15441),i=n(37074),l=n(73673),u=n(83879),c=n(45119);
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
class h{constructor(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new p)}profileKernel(e,t,n){let r;const a=()=>{r=n()};let o;const i=u.now();if(this.backendTimer.timerAvailable())o=this.backendTimer.time(a);else{a();for(const e of r)e.dataSync();o=Promise.resolve({kernelMs:u.now()-i})}if((0,s._K)().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let t=0;t<r.length;t++){const n=r[t];n.data().then((t=>{d(t,n.dtype,e)}))}return{kernelName:e,outputs:r,inputs:t,timeMs:o.then((e=>e.kernelMs)),extraInfo:o.then((e=>null!=e.getExtraProfileInfo?e.getExtraProfileInfo():""))}}logKernelProfile(e){const{kernelName:t,outputs:n,timeMs:r,inputs:s,extraInfo:a}=e;n.forEach((e=>{Promise.all([e.data(),r,a]).then((n=>{this.logger.logKernelProfile(t,e,n[0],n[1],s,n[2])}))}))}}function d(e,t,n){if("float32"!==t)return!1;for(let t=0;t<e.length;t++){const r=e[t];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}class p{logKernelProfile(e,t,n,r,s,a){const o="number"==typeof r?c.av(`${r}ms`,9):r.error,i=c.av(e,25),l=t.rank,u=t.size,h=c.av(t.shape.toString(),14);let d="";for(const e in s){const n=s[e];if(null!=n){const r=n.shape||t.shape,s=r.length;d+=`${e}: ${s}D ${s>0?r:""} `}}console.log(`%c${i}\t%c${o}\t%c${l}D ${h}\t%c${u}\t%c${d}\t%c${a}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}var f=n(50259),g=n(30565);
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
function m(e){return null!=e.kernelName}class y{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map((e=>e.name))))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class b{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new y}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then((()=>{}));if(null!=this.backendInstance)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const n=e[t];if(await this.initializeBackend(n).success)return void await this.setBackend(n)}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry)){if(!(e in this.registryFactory))return null;{const{asyncInit:t}=this.initializeBackend(e);if(t)return null}}return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(l.i(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(null==this.registryFactory[e])throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,null==this.registry[e]){this.backendInstance=null;const{success:t,asyncInit:n}=this.initializeBackend(e);if(!(n?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new h(this.backendInstance),!0}setupRegisteredKernels(){(0,i.Op)(this.backendName).forEach((e=>{null!=e.setupFunc&&e.setupFunc(this.backendInstance)}))}disposeRegisteredKernels(e){(0,i.Op)(e).forEach((t=>{null!=t.disposeFunc&&t.disposeFunc(this.registry[e])}))}initializeBackend(e){const t=this.registryFactory[e];if(null==t)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const n=t.factory();if(!n||n instanceof r.uI||"function"!=typeof n.then)return this.registry[e]=n,{success:!0,asyncInit:!1};{const t=++this.pendingBackendInitId,r=n.then((n=>!(t<this.pendingBackendInitId)&&(this.registry[e]=n,this.pendingBackendInit=null,!0))).catch((n=>(t<this.pendingBackendInitId||(this.pendingBackendInit=null,l.i(`Initialization of backend ${e} failed`),l.i(n.stack||n.message)),!1)));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}}catch(t){return l.i(`Initialization of backend ${e} failed`),l.i(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority))}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const n=e[t],{success:r,asyncInit:s}=this.initializeBackend(n);if(s||r)return{name:n,asyncInit:s}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const n=this.state.tensorInfo.get(t),r=n.backend,s=this.readSync(t),a=r.refCount(t);r.disposeData(t,!0),n.backend=e,e.move(t,s,n.shape,n.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n,r=null;if(null==t){if("function"!=typeof e)throw new Error("Please provide a function to tidy()");t=e}else{if("string"!=typeof e&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}return this.scopedRun((()=>this.startScope(r)),(()=>this.endScope(n)),(()=>(n=t(),n instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n)))}scopedRun(e,t,n){e();try{const e=n();return t(),e}catch(e){throw t(),e}}nextTensorId(){return b.nextTensorId++}nextVariableId(){return b.nextVariableId++}clone(e){const t=v.runKernel(o.lzr,{x:e}),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],(e=>({x:()=>{const t={x:e},n={dtype:"float32"};return v.runKernel(o.KXH,t,n)}})),[],{}),t}runKernel(e,t,n){null==this.backendName&&this.backend;if(!(null!=(0,i._5)(e,this.backendName)))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,n){const r=this.backend.numDataIds();let s=0;n.forEach((e=>{s+="complex64"===e.dtype?3:1}));const a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-s-a;if(o>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,n=[];const r=this.isTapeOn(),s=this.state.numBytes,a=this.state.numTensors;let o,l;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;const u=m(e)?e.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(m(e)){const{kernelName:t,inputs:s,attrs:a}=e;null==this.backendName&&this.backend;const u=(0,i._5)(t,this.backendName);c.vA(null!=u,(()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`)),o=()=>{const e=this.backend.numDataIds();l=u.kernelFunc({inputs:s,attrs:a,backend:this.backend});const o=Array.isArray(l)?l:[l];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,o);const i=o.map((e=>null!=e.rank?e:this.makeTensorFromTensorInfo(e)));if(r){const e=this.getTensorsForGradient(t,s,i);n=this.saveTensorsForBackwardMode(e)}return i}}else{const{forwardFunc:t}=e,s=e=>{r&&(n=e.map((e=>this.keep(this.clone(e)))))};o=()=>{const e=this.backend.numDataIds();l=this.tidy((()=>t(this.backend,s)));const n=Array.isArray(l)?l:[l];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,e,n),n}}const{inputs:h,attrs:d}=e,p=m(e)?null:e.backwardsFunc;let f;return this.scopedRun((()=>this.state.kernelDepth++),(()=>this.state.kernelDepth--),(()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(f=this.profiler.profileKernel(u,h,(()=>o())),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),t=f.outputs):t=o()})),r&&this.addTapeNode(u,h,t,p,n,d),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-s,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(h).map((e=>null!=h[e]?h[e].shape:null)),outputShapes:t.map((e=>e.shape)),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(l)?t:t[0]}saveTensorsForBackwardMode(e){const t=e.map((e=>this.keep(this.clone(e))));return t}getTensorsForGradient(e,t,n){const r=(0,i.vQ)(e);if(null!=r){const e=r.inputsToSave||[],s=r.outputsToSave||[];let a;r.saveAllInputs?(c.vA(Array.isArray(t),(()=>"saveAllInputs is true, expected inputs to be an array.")),a=Object.keys(t).map((e=>t[e]))):a=e.map((e=>t[e]));const o=n.filter(((e,t)=>s[t]));return a.concat(o)}return[]}makeTensor(e,t,n,r){if(null==e)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;let s=e;"string"===n&&c.Kg(e[0])&&(s=e.map((e=>u.encodeString(e))));const a=r.write(s,t,n),o=new f.qY(t,n,a,this.nextTensorId());if(this.trackTensor(o,r),"string"===n){const e=this.state.tensorInfo.get(a),t=(0,c.SL)(s);this.state.numBytes+=t-e.bytes,e.bytes=t}return o}makeTensorFromDataId(e,t,n,r){const s={dataId:e,shape:t,dtype:n=n||"float32"};return this.makeTensorFromTensorInfo(s,r)}makeTensorFromTensorInfo(e,t){const{dataId:n,shape:r,dtype:s}=e,a=new f.qY(r,s,n,this.nextTensorId());return this.trackTensor(a,t),a}makeVariable(e,t=!0,n,r){n=n||this.nextVariableId().toString(),null!=r&&r!==e.dtype&&(e=e.cast(r));const s=new f.rT(e,t,n,this.nextTensorId());if(null!=this.state.registeredVariables[s.name])throw new Error(`Variable with name ${s.name} was already registered`);return this.state.registeredVariables[s.name]=s,this.incRef(s,this.backend),s}trackTensor(e,t){this.state.numTensors++,"string"===e.dtype&&this.state.numStringTensors++;let n=0;"complex64"!==e.dtype&&"string"!==e.dtype&&(n=e.size*c.jv(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof f.rT||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,"string"===e.dtype&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),"complex64"!==e.dtype&&"string"!==e.dtype){const t=e.size*c.jv(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),null!=this.state.registeredVariables[e.name]&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,null==e.reasons&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const t=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map((e=>e.totalBytesSnapshot))),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n;for(const e of this.state.activeProfile.kernels)e.kernelTimeMs=await e.kernelTimeMs,e.extraInfo=await e.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(e,t,n,r,s,a){const o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:s},l=(0,i.vQ)(e);null!=l&&(r=l.gradFunc),null!=r&&(o.gradient=e=>(e=e.map(((e,t)=>{if(null==e){const e=n[t],r=c.Ty(e.size,e.dtype);return this.makeTensor(r,e.shape,e.dtype)}return e})),r(e.length>1?e:e[0],s,a))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=(0,g.getTensorsInContainer)(e),n=new Set(t.map((e=>e.id)));for(let e=0;e<this.state.activeScope.track.length;e++){const t=this.state.activeScope.track[e];t.kept||n.has(t.id)||t.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach((e=>{e.kept||e.scopeId!==r.id||this.track(e)}))}gradients(e,t,n,r=!1){if(c.vA(t.length>0,(()=>"gradients() received an empty list of xs.")),null!=n&&"float32"!==n.dtype)throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);const s=this.scopedRun((()=>this.startTape()),(()=>this.endTape()),(()=>this.tidy("forward",e)));c.vA(s instanceof f.qY,(()=>"The result y returned by f() must be a tensor."));const a=
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
function(e,t,n){const r={},s={};for(let e=0;e<t.length;e++)r[t[e].id]=!0;for(let n=0;n<e.length;n++){const a=e[n],o=a.inputs;for(const e in o){const n=o[e];let i=!1;for(let e=0;e<t.length;e++)if(r[n.id]){a.outputs.forEach((e=>r[e.id]=!0)),i=!0,s[a.id]=!0;break}if(i)break}}const a={};a[n.id]=!0;const o={};for(let t=e.length-1;t>=0;t--){const n=e[t],r=n.inputs;for(let e=0;e<n.outputs.length;e++)if(a[n.outputs[e].id]){for(const e in r)a[r[e].id]=!0,o[n.id]=!0;break}}const i=[];for(let t=0;t<e.length;t++){const n=e[t];if(s[n.id]&&o[n.id]){const e={};for(const t in n.inputs){const s=n.inputs[t];r[s.id]&&(e[t]=s)}const t=Object.assign({},n);t.inputs=e,t.outputs=n.outputs,i.push(t)}}return i}(this.state.activeTape,t,s);if(!r&&0===a.length&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(()=>{const e={};e[s.id]=null==n?function(e){const t=(0,c.FZ)((0,c.Ze)(e),"float32");return v.makeTensor(t,e,"float32")}(s.shape):n,function(e,t,n,r){for(let s=t.length-1;s>=0;s--){const a=t[s],o=[];if(a.outputs.forEach((t=>{const n=e[t.id];null!=n?o.push(n):o.push(null)})),null==a.gradient)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const i=a.gradient(o);for(const t in a.inputs){if(!(t in i))throw new Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(i)}.`);const s=n((()=>i[t]()));if("float32"!==s.dtype)throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${s.dtype}'`);const o=a.inputs[t];if(!c.r1(s.shape,o.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${t}' has shape '${s.shape}', which does not match the shape of the input '${o.shape}'`);if(null==e[o.id])e[o.id]=s;else{const t=e[o.id];e[o.id]=r(t,s),t.dispose()}}}}(e,a,(e=>this.tidy(e)),T);const r=t.map((t=>e[t.id]));return 0===this.state.gradientDepth&&(this.state.activeTape.forEach((e=>{for(const t of e.saved)t.dispose()})),this.state.activeTape=null),{value:s,grads:r}}))}customGrad(e){return c.vA(c.Tn(e),(()=>"The f passed in customGrad(f) must be a function.")),(...t)=>{let n;c.vA(t.every((e=>e instanceof f.qY)),(()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors"));const r={};t.forEach(((e,t)=>{r[t]=e}));return this.runKernelFunc({forwardFunc:(r,s)=>(n=e(...t,s),c.vA(n.value instanceof f.qY,(()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor")),c.vA(c.Tn(n.gradFunc),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.")),n.value),backwardsFunc:(e,r)=>{const s=n.gradFunc(e,r),a=Array.isArray(s)?s:[s];c.vA(a.length===t.length,(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).")),c.vA(a.every((e=>e instanceof f.qY)),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."));const o={};return a.forEach(((e,t)=>{o[t]=()=>e})),o},inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){const t=(0,u.now)(),n=await this.backend.time(e);return n.wallMs=(0,u.now)()-t,n}track(e){return null!=this.state.activeScope&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new y;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function w(){const e=(0,a.L)();if(null==e._tfengine){const t=new s.OH(e);e._tfengine=new b(t)}return(0,s.tj)(e._tfengine.ENV),(0,f.qP)((()=>e._tfengine)),e._tfengine}b.nextTensorId=0,b.nextVariableId=0;const v=w();function T(e,t){const n={a:e,b:t};return v.runKernel(o.OMN,n)}},46574:(e,t,n)=>{n.d(t,{Km:()=>l,OH:()=>a,_K:()=>i,tj:()=>u});var r=n(45119);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */const s="tfjsflags";class a{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=o,this.populateURLFlags()}setPlatform(e,t){null!=this.platform&&(i().getBool("IS_TEST")||i().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},null!=this.urlFlags[e]){const t=this.urlFlags[e];i().getBool("IS_TEST")||i().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if((0,r.yL)(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(null==this.flagRegistry[e])throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,null!=this.flagRegistry[e].setHook&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(null==this.flagRegistry[e])throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;const e=this.getQueryParams(this.global.location.search);if(s in e){e[s].split(",").forEach((e=>{const[t,n]=e.split(":");this.urlFlags[t]=function(e,t){const n=t.toLowerCase();return"true"===n||"false"===n?"true"===n:""+ +n===n?+n:t}(0,n)}))}}}function o(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,((e,...n)=>(function(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}(t,n[0],n[1]),n.join("=")))),t}function i(){return l}let l=null;function u(e){l=e}},41743:(e,t,n)=>{
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
let r;function s(){if(null==r){let e;if("undefined"!=typeof window)e=window;else if(void 0!==n.g)e=n.g;else if("undefined"!=typeof process)e=process;else{if("undefined"==typeof self)throw new Error("Could not find a global object");e=self}r=e}return r}function a(e,t){const n=function(){const e=s();return null==e._tfGlobals&&(e._tfGlobals=new Map),e._tfGlobals}();if(n.has(e))return n.get(e);{const r=t();return n.set(e,r),n.get(e)}}n.d(t,{L:()=>s,m:()=>a})},35287:(e,t,n)=>{n.d(t,{AS:()=>m,DZ:()=>g,Gc:()=>v,Hi:()=>d,Hs:()=>x,IS:()=>u,ME:()=>f,Ok:()=>$,Sm:()=>i,W4:()=>S,aC:()=>y,fL:()=>c,gJ:()=>E,gY:()=>l,go:()=>A,jh:()=>w,jz:()=>T,kB:()=>b,m1:()=>p,rE:()=>k,rm:()=>h});var r=n(41585),s=n(46574),a=n(50259),o=n(30565);
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
function i(){(0,s._K)().set("PROD",!0)}function l(){(0,s._K)().set("DEBUG",!0)}function u(){(0,s._K)().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function c(e){(0,s._K)().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function h(){r.T2.disposeVariables()}function d(){return r.T2}function p(){return r.T2.memory()}function f(e){return r.T2.profile(e)}function g(e,t){return r.T2.tidy(e,t)}function m(e){(0,o.getTensorsInContainer)(e).forEach((e=>e.dispose()))}function y(e){return r.T2.keep(e)}function b(e){return r.T2.time(e)}function w(e){return r.T2.setBackend(e)}function v(){return r.T2.ready()}function T(){return r.T2.backendName}function k(e){r.T2.removeBackend(e)}function A(e){return r.T2.findBackend(e)}function S(e){return r.T2.findBackendFactory(e)}function E(e,t,n=1){return r.T2.registerBackend(e,t,n)}function x(){return r.T2.backend}function $(e,t){(0,s._K)().setPlatform(e,t)}(0,a.B4)(c)},31830:(e,t,n)=>{n.d(t,{Dv:()=>i,_X:()=>d,jY:()=>u,mu:()=>c,ok:()=>l,y7:()=>h});var r=n(41585),s=n(50259),a=n(28189),o=n(45119);
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
function i(e){return o.vA(o.Tn(e),(()=>"The f passed in grad(f) must be a function")),(t,n)=>{const s=(0,a.YT)(t,"x","tf.grad","string_or_numeric"),i=null!=n?(0,a.YT)(n,"dy","tf.grad"):null;return r.T2.tidy((()=>{const{value:t,grads:n}=r.T2.gradients((()=>e(s)),[s],i);return null!=i&&o.O3(t.shape,i.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),p(n),n[0]}))}}function l(e){return o.vA(o.Tn(e),(()=>"The f passed in grads(f) must be a function")),(t,n)=>{o.vA(Array.isArray(t),(()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"));const s=(0,a.j1)(t,"args","tf.grads","string_or_numeric"),i=null!=n?(0,a.YT)(n,"dy","tf.grads"):null;return r.T2.tidy((()=>{const{value:t,grads:n}=r.T2.gradients((()=>e(...s)),s,i);return null!=i&&o.O3(t.shape,i.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),p(n),n}))}}function u(e){return o.vA(o.Tn(e),(()=>"The f passed in valueAndGrad(f) must be a function")),(t,n)=>{o.vA(t instanceof s.qY,(()=>"The x passed in valueAndGrad(f)(x) must be a tensor")),o.vA(null==n||n instanceof s.qY,(()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor"));const{grads:a,value:i}=r.T2.gradients((()=>e(t)),[t],n);return p(a),{grad:a[0],value:i}}}function c(e){return o.vA(o.Tn(e),(()=>"The f passed in valueAndGrads(f) must be a function")),(t,n)=>{o.vA(Array.isArray(t)&&t.every((e=>e instanceof s.qY)),(()=>"The args passed in valueAndGrads(f)(args) must be array of tensors")),o.vA(null==n||n instanceof s.qY,(()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor"));const a=r.T2.gradients((()=>e(...t)),t,n);return null!=n&&o.O3(a.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),p(a.grads),a}}function h(e,t){o.vA(o.Tn(e),(()=>"The f passed in variableGrads(f) must be a function")),o.vA(null==t||Array.isArray(t)&&t.every((e=>e instanceof s.rT)),(()=>"The varList passed in variableGrads(f, varList) must be an array of variables"));const n=null!=t;if(!n){t=[];for(const e in r.T2.registeredVariables)t.push(r.T2.registeredVariables[e])}const a=n?t.filter((e=>!e.trainable)):null,i=t.length;t=t.filter((e=>e.trainable)),o.vA(t.length>0,(()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${i} variables is trainable.`));const{value:l,grads:u}=r.T2.gradients(e,t,null,!0);o.vA(u.some((e=>null!=e)),(()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().")),o.vA(0===l.rank,(()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${l.rank} tensor`));const c={};return t.forEach(((e,t)=>{null!=u[t]&&(c[e.name]=u[t])})),null!=a&&a.forEach((e=>c[e.name]=null)),{value:l,grads:c}}function d(e){return r.T2.customGrad(e)}function p(e){if(e.filter((e=>null==e)).length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")}},86748:(e,t,n)=>{n.r(t),n.d(t,{Abs:()=>bt.ljI,Acos:()=>bt.Vvy,Acosh:()=>bt.PH8,AdadeltaOptimizer:()=>_e,AdagradOptimizer:()=>Re,AdamOptimizer:()=>Fe,AdamaxOptimizer:()=>Oe,Add:()=>bt.OMN,AddN:()=>bt.EkD,All:()=>bt.u8Z,Any:()=>bt.FSt,ArgMax:()=>bt.Jp_,ArgMin:()=>bt.p_m,Asin:()=>bt.QKF,Asinh:()=>bt.epO,Atan:()=>bt.TyE,Atan2:()=>bt.lxb,Atanh:()=>bt.zP9,AvgPool:()=>bt.ho8,AvgPool3D:()=>bt.cS,AvgPool3DGrad:()=>bt.wwC,AvgPoolGrad:()=>bt.VCH,BatchMatMul:()=>bt.jAQ,BatchToSpaceND:()=>bt.Ik2,Bincount:()=>bt.N4F,BitwiseAnd:()=>bt.HNs,BroadcastArgs:()=>bt.vj7,BroadcastTo:()=>bt.LB5,Cast:()=>bt.KXH,Ceil:()=>bt.QDP,ClipByValue:()=>bt.vaV,Complex:()=>bt.pr3,ComplexAbs:()=>bt.$zE,Concat:()=>bt.$dB,Conv2D:()=>bt.p2J,Conv2DBackpropFilter:()=>bt.rFm,Conv2DBackpropInput:()=>bt.jfg,Conv3D:()=>bt.A1h,Conv3DBackpropFilterV2:()=>bt.iGz,Conv3DBackpropInputV2:()=>bt.gC7,Cos:()=>bt.Mn0,Cosh:()=>bt.MnK,CropAndResize:()=>bt.MRQ,Cumprod:()=>bt.jj_,Cumsum:()=>bt.nY8,DataStorage:()=>Rr.GJ,DenseBincount:()=>bt.wNW,DepthToSpace:()=>bt.TMz,DepthwiseConv2dNative:()=>bt.tGH,DepthwiseConv2dNativeBackpropFilter:()=>bt.X$8,DepthwiseConv2dNativeBackpropInput:()=>bt.nVu,Diag:()=>bt.ORI,Dilation2D:()=>bt.jxD,Dilation2DBackpropFilter:()=>bt.pk0,Dilation2DBackpropInput:()=>bt.bP9,Draw:()=>bt.XmO,ENV:()=>w.Km,Einsum:()=>bt.Qgm,Elu:()=>bt.Pah,EluGrad:()=>bt.rsH,Environment:()=>w.OH,Equal:()=>bt.BRl,Erf:()=>bt._s9,Exp:()=>bt.ox3,ExpandDims:()=>bt.ybN,Expm1:()=>bt.ybj,FFT:()=>bt.rGP,Fill:()=>bt.SQl,FlipLeftRight:()=>bt.BxF,Floor:()=>bt.ZgB,FloorDiv:()=>bt.ElG,FromPixels:()=>bt.awo,FusedBatchNorm:()=>bt.i5R,FusedConv2D:()=>bt.aAr,FusedDepthwiseConv2D:()=>bt.T7M,GatherNd:()=>bt.O4G,GatherV2:()=>bt.mxL,Greater:()=>bt.XhZ,GreaterEqual:()=>bt.lLS,IFFT:()=>bt.OAQ,Identity:()=>bt.lzr,Imag:()=>bt.dv8,IsFinite:()=>bt.gIW,IsInf:()=>bt.E3$,IsNan:()=>bt.iPs,KernelBackend:()=>Rr.uI,LRN:()=>bt.jM4,LRNGrad:()=>bt.ToN,LeakyRelu:()=>bt.X0$,Less:()=>bt.mIA,LessEqual:()=>bt.CwD,LinSpace:()=>bt.mnI,Log:()=>bt.tG8,Log1p:()=>bt.Cg$,LogSoftmax:()=>bt.zfU,LogicalAnd:()=>bt.RUm,LogicalNot:()=>bt.nZd,LogicalOr:()=>bt.LXA,LogicalXor:()=>bt.RW8,LowerBound:()=>bt.yPW,MatrixBandPart:()=>bt.WRv,Max:()=>bt.VAI,MaxPool:()=>bt.t3d,MaxPool3D:()=>bt.ySp,MaxPool3DGrad:()=>bt.cHb,MaxPoolGrad:()=>bt.RXX,MaxPoolWithArgmax:()=>bt.TL8,Maximum:()=>bt.LDN,Mean:()=>bt.g5A,Min:()=>bt.lNG,Minimum:()=>bt.LG0,MirrorPad:()=>bt.x7F,Mod:()=>bt.BLA,MomentumOptimizer:()=>We,Multinomial:()=>bt.WT3,Multiply:()=>bt.xu7,Neg:()=>bt.l0G,NonMaxSuppressionV3:()=>bt.SDM,NonMaxSuppressionV4:()=>bt.Zl4,NonMaxSuppressionV5:()=>bt.e0f,NotEqual:()=>bt.ylV,OP_SCOPE_SUFFIX:()=>yn.BTT,OneHot:()=>bt.urI,OnesLike:()=>bt.LWX,Optimizer:()=>Ie,OptimizerConstructors:()=>gn,Pack:()=>bt.mM$,PadV2:()=>bt.ODT,Pool:()=>bt.bCz,Pow:()=>bt.pyJ,Prelu:()=>bt.Ncv,Prod:()=>bt.kdj,RMSPropOptimizer:()=>ze,RaggedGather:()=>bt.oJ2,RaggedRange:()=>bt.CQC,RaggedTensorToTensor:()=>bt.mH5,Range:()=>bt.Q6t,Rank:()=>mn.rg,Real:()=>bt.LRy,RealDiv:()=>bt.sDr,Reciprocal:()=>bt.huO,Reduction:()=>bn.i,Relu:()=>bt.fUj,Relu6:()=>bt.P_L,Reshape:()=>bt.R23,ResizeBilinear:()=>bt.hgw,ResizeBilinearGrad:()=>bt.FCQ,ResizeNearestNeighbor:()=>bt.jOE,ResizeNearestNeighborGrad:()=>bt.XQy,Reverse:()=>bt.D7i,RotateWithOffset:()=>bt.BK4,Round:()=>bt.hVg,Rsqrt:()=>bt.TOR,SGDOptimizer:()=>Le,ScatterNd:()=>bt.pJc,SearchSorted:()=>bt.uWl,Select:()=>bt.l6P,Selu:()=>bt.u$b,Sigmoid:()=>bt.vI1,Sign:()=>bt.YVe,Sin:()=>bt.hql,Sinh:()=>bt.J3C,Slice:()=>bt.JiE,Softmax:()=>bt.rFG,Softplus:()=>bt.Fin,SpaceToBatchND:()=>bt.A8B,SparseFillEmptyRows:()=>bt.C8s,SparseReshape:()=>bt.BoJ,SparseSegmentMean:()=>bt.L6G,SparseSegmentSum:()=>bt.DvZ,SparseToDense:()=>bt.jgd,SplitV:()=>bt.Blb,Sqrt:()=>bt.dFH,Square:()=>bt.M6A,SquaredDifference:()=>bt.Ddj,StaticRegexReplace:()=>bt.GZp,Step:()=>bt.pnw,StridedSlice:()=>bt.UcO,StringNGrams:()=>bt.YAb,StringSplit:()=>bt.iW0,StringToHashBucketFast:()=>bt.$jE,Sub:()=>bt.PbM,Sum:()=>bt.WuN,Tan:()=>bt.oFs,Tanh:()=>bt.iuW,Tensor:()=>pe.qY,TensorBuffer:()=>pe.yl,TensorScatterUpdate:()=>bt.X4r,Tile:()=>bt.FAs,TopK:()=>bt.TBb,Transform:()=>bt.dLy,Transpose:()=>bt.wx0,Unique:()=>bt.EwU,Unpack:()=>bt.dXR,UnsortedSegmentSum:()=>bt.pPe,UpperBound:()=>bt.RMm,Variable:()=>pe.rT,ZerosLike:()=>bt.xJ3,_FusedMatMul:()=>bt.Dr,abs:()=>yn.tnl,acos:()=>yn.HQu,acosh:()=>yn.FqL,add:()=>yn.WQq,addN:()=>yn.QiD,all:()=>yn.Q7R,any:()=>yn.bzn,argMax:()=>yn.FLi,argMin:()=>yn.XRg,asin:()=>yn.qRo,asinh:()=>yn.yHs,atan:()=>yn.rYl,atan2:()=>yn.FPz,atanh:()=>yn.rfv,avgPool:()=>yn.$jT,avgPool3d:()=>yn.sub,backend:()=>ge.Hs,backend_util:()=>d,basicLSTMCell:()=>yn.lZX,batchNorm:()=>yn.$v7,batchNorm2d:()=>yn.BFc,batchNorm3d:()=>yn.kSi,batchNorm4d:()=>yn.T5N,batchToSpaceND:()=>yn.GTe,bincount:()=>yn.HbZ,bitwiseAnd:()=>yn.vjT,booleanMaskAsync:()=>yn.ftb,broadcastArgs:()=>yn.ROE,broadcastTo:()=>yn.hOW,broadcast_util:()=>yt,browser:()=>i,buffer:()=>yn.ra8,cast:()=>yn.wgE,ceil:()=>yn.mkO,clipByValue:()=>yn.zQh,clone:()=>yn.o8B,complex:()=>yn.faB,concat:()=>yn.xWs,concat1d:()=>yn.I1m,concat2d:()=>yn.RPU,concat3d:()=>yn.O5O,concat4d:()=>yn.P1l,conv1d:()=>yn.kA9,conv2d:()=>yn.Xtf,conv2dTranspose:()=>yn.wX9,conv3d:()=>yn.IPL,conv3dTranspose:()=>yn.jIJ,copyRegisteredKernels:()=>wt.Cf,cos:()=>yn.gnS,cosh:()=>yn.yIG,cosineWindow:()=>yn._jP,cumprod:()=>yn.Lp0,cumsum:()=>yn.rCv,customGrad:()=>ke._X,denseBincount:()=>yn.aOp,deprecationWarn:()=>ge.fL,depthToSpace:()=>yn.Rj8,depthwiseConv2d:()=>yn.Gl3,device_util:()=>r,diag:()=>yn.smy,dilation2d:()=>yn.X7t,disableDeprecationWarnings:()=>ge.IS,dispose:()=>ge.AS,disposeVariables:()=>ge.rm,div:()=>yn.y4m,divNoNan:()=>yn.ek5,dot:()=>yn.Omf,dropout:()=>yn.EZY,einsum:()=>yn._3C,elu:()=>yn.Pqc,enableDebugMode:()=>ge.gY,enableProdMode:()=>ge.Sm,enclosingPowerOfTwo:()=>yn.FJY,engine:()=>ge.Hi,ensureShape:()=>yn.QP2,env:()=>w._K,equal:()=>yn.LCg,erf:()=>yn.Y12,euclideanNorm:()=>yn.p4S,exp:()=>yn.oNF,expandDims:()=>yn.UG6,expm1:()=>yn.IYd,eye:()=>yn.y5U,fft:()=>yn.hVP,fill:()=>yn.GSj,findBackend:()=>ge.go,findBackendFactory:()=>ge.W4,floor:()=>yn.RIf,floorDiv:()=>yn.wh_,fused:()=>yn.cZk,gather:()=>yn.kgh,gatherND:()=>yn.SY9,gather_util:()=>l,getBackend:()=>ge.jz,getGradient:()=>wt.vQ,getKernel:()=>wt._5,getKernelsForBackend:()=>wt.Op,grad:()=>ke.Dv,grads:()=>ke.ok,greater:()=>yn.rhj,greaterEqual:()=>yn.DQN,ifft:()=>yn.KGM,imag:()=>yn.ngS,image:()=>yn.Slp,inTopKAsync:()=>yn.U4u,io:()=>a,irfft:()=>yn.ggX,isFinite:()=>yn.MIs,isInf:()=>yn.EN4,isNaN:()=>yn.yrW,keep:()=>ge.aC,kernel_impls:()=>p,leakyRelu:()=>yn.H8d,less:()=>yn.M7h,lessEqual:()=>yn.InN,linalg:()=>yn.mPL,linspace:()=>yn.mT8,localResponseNormalization:()=>yn.Kgs,log:()=>yn.Rm2,log1p:()=>yn.Kko,logSigmoid:()=>yn.nqI,logSoftmax:()=>yn.HPB,logSumExp:()=>yn.VZ,logicalAnd:()=>yn.n76,logicalNot:()=>yn.NSZ,logicalOr:()=>yn.ztW,logicalXor:()=>yn.rxB,losses:()=>yn.YYh,lowerBound:()=>yn.yzS,matMul:()=>yn.NoW,math:()=>o,max:()=>yn.T9B,maxPool:()=>yn.jgi,maxPool3d:()=>yn.NYV,maxPoolWithArgmax:()=>yn.RO,maximum:()=>yn.PhQ,mean:()=>yn.i2o,memory:()=>ge.m1,meshgrid:()=>yn.OYQ,min:()=>yn.jkA,minimum:()=>yn.BpO,mirrorPad:()=>yn.FFZ,mod:()=>yn.ziu,moments:()=>yn.Clk,movingAverage:()=>yn.CRk,mul:()=>yn.lKK,multiRNNCell:()=>yn.YDF,multinomial:()=>yn.OjQ,neg:()=>yn.HZy,nextFrame:()=>Tn,norm:()=>yn.xbf,notEqual:()=>yn.Ec,oneHot:()=>yn.Mw0,ones:()=>yn.SaS,onesLike:()=>yn.P61,op:()=>yn.op,outerProduct:()=>yn.X4o,pad:()=>yn.eVF,pad1d:()=>yn.BZs,pad2d:()=>yn.grY,pad3d:()=>yn.XHu,pad4d:()=>yn.WLX,pool:()=>yn.dzn,pow:()=>yn.n7C,prelu:()=>yn.NsG,print:()=>yn.yyV,prod:()=>yn._eU,profile:()=>ge.ME,raggedGather:()=>yn.whe,raggedRange:()=>yn.iyU,raggedTensorToTensor:()=>yn.Q0_,rand:()=>yn._9M,randomGamma:()=>yn.pR9,randomNormal:()=>yn.FE$,randomStandardNormal:()=>yn.m0H,randomUniform:()=>yn.YeY,randomUniformInt:()=>yn.HYA,range:()=>yn.y17,ready:()=>ge.Gc,real:()=>yn.xav,reciprocal:()=>yn.VOZ,registerBackend:()=>ge.gJ,registerGradient:()=>wt.kr,registerKernel:()=>wt.tA,relu:()=>yn.VVh,relu6:()=>yn.j__,removeBackend:()=>ge.rE,reshape:()=>yn.tQQ,reverse:()=>yn.BEg,reverse1d:()=>yn.QD2,reverse2d:()=>yn.LMr,reverse3d:()=>yn.I2l,reverse4d:()=>yn.JYU,rfft:()=>yn.z8$,round:()=>yn.LIG,rsqrt:()=>yn.Z$r,scalar:()=>yn.d_2,scatterND:()=>yn.NFr,scatter_util:()=>_t,searchSorted:()=>yn.sZg,selu:()=>yn.WfX,separableConv2d:()=>yn.wdz,serialization:()=>s,setBackend:()=>ge.jh,setPlatform:()=>ge.Ok,setdiff1dAsync:()=>yn.F12,sigmoid:()=>yn.ry7,sign:()=>yn._SZ,signal:()=>yn.vPA,sin:()=>yn.F8e,sinh:()=>yn.L0l,slice:()=>yn.dik,slice1d:()=>yn.Q$M,slice2d:()=>yn.zAd,slice3d:()=>yn.wck,slice4d:()=>yn.R0O,slice_util:()=>u,softmax:()=>yn.Vs9,softplus:()=>yn.lw0,spaceToBatchND:()=>yn.eDJ,sparse:()=>yn.lMo,sparseToDense:()=>yn.Zhr,spectral:()=>yn.lOn,split:()=>yn.lDo,sqrt:()=>yn.RZD,square:()=>yn.EwI,squaredDifference:()=>yn.Pbu,squeeze:()=>yn.r2V,stack:()=>yn.t$z,step:()=>yn.PMw,stridedSlice:()=>yn.Ym9,string:()=>yn.YjP,sub:()=>yn.jbE,sum:()=>yn.czq,sumOutType:()=>mn.ch,tan:()=>yn.Mlm,tanh:()=>yn.ymU,tensor:()=>yn.OEK,tensor1d:()=>yn.tGX,tensor2d:()=>yn.KtR,tensor3d:()=>yn.$_$,tensor4d:()=>yn.g9W,tensor5d:()=>yn.Lpo,tensor6d:()=>yn.yxw,tensorScatterUpdate:()=>yn.NNh,tensor_util:()=>Xt,test_util:()=>c,tidy:()=>ge.DZ,tile:()=>yn.Vsq,time:()=>ge.kB,topk:()=>yn.rfw,train:()=>wn,transpose:()=>yn.mgz,truncatedNormal:()=>yn.efE,unique:()=>yn.AmM,unregisterGradient:()=>wt.rY,unregisterKernel:()=>wt.iP,unsortedSegmentSum:()=>yn.zAU,unstack:()=>yn.K$i,upcastType:()=>mn.Tu,upperBound:()=>yn.rni,util:()=>Qt,valueAndGrad:()=>ke.jY,valueAndGrads:()=>ke.mu,variable:()=>yn.bvq,variableGrads:()=>ke.y7,version_core:()=>fn,where:()=>yn._M9,whereAsync:()=>yn.YJN,zeros:()=>yn.Ul9,zerosLike:()=>yn.POl});var r={};n.r(r),n.d(r,{isBrowser:()=>b,isMobile:()=>y,mockIsMobile:()=>m});var s={};n.r(s),n.d(s,{Serializable:()=>xe,SerializationMap:()=>$e,getRegisteredName:()=>Ne,registerClass:()=>Me});var a={};n.r(a),n.d(a,{CompositeArrayBuffer:()=>$.D,browserFiles:()=>qe,browserHTTPRequest:()=>rt,concatenateArrayBuffers:()=>T.AQ,copyModel:()=>ne,decodeWeights:()=>T.CY,decodeWeightsStream:()=>T.s5,encodeWeights:()=>T.aG,fromMemory:()=>it,fromMemorySync:()=>lt,getLoadHandlers:()=>x,getModelArtifactsForJSON:()=>T.Ej,getModelArtifactsForJSONSync:()=>T.Rl,getModelArtifactsInfoForJSON:()=>T.oR,getSaveHandlers:()=>E,getWeightSpecs:()=>T.Xf,http:()=>nt,isHTTPScheme:()=>et,listModels:()=>ee,loadWeights:()=>Xe,moveModel:()=>re,registerLoadRouter:()=>S,registerSaveRouter:()=>A,removeModel:()=>te,weightsLoaderFactory:()=>Qe,withSaveHandler:()=>ut,withSaveHandlerSync:()=>ct});var o={};n.r(o),n.d(o,{confusionMatrix:()=>mt});var i={};n.r(i),n.d(i,{draw:()=>Mt,fromPixels:()=>Nt,fromPixelsAsync:()=>Et,toPixels:()=>$t});var l={};n.r(l),n.d(l,{prepareAndValidate:()=>It});var u={};n.r(u),n.d(u,{assertParamsValid:()=>Yt,computeFlatOffset:()=>qt,computeOutShape:()=>Ft,getNormalizedAxes:()=>Lt,isSliceContinous:()=>jt,maskToAxes:()=>Bt,parseSliceParams:()=>Ht,sliceInfo:()=>Vt,startForAxis:()=>Kt,startIndicesWithElidedDims:()=>Wt,stopForAxis:()=>Ut,stopIndicesWithElidedDims:()=>zt,stridesForAxis:()=>Gt,stridesWithElidedDims:()=>Pt});var c={};n.r(c),n.d(c,{TEST_EPSILON_FLOAT16:()=>en,createVideoElement:()=>dn,encodeStrings:()=>hn,expectArrayBuffersEqual:()=>cn,expectArraysClose:()=>tn,expectArraysEqual:()=>an,expectNumbersClose:()=>on,expectPromiseToFail:()=>sn,expectValuesInRange:()=>un,play:()=>pn,testEpsilon:()=>nn});var h={};n.r(h),n.d(h,{collectGatherOpShapeInfo:()=>Mr,computeOutShape:()=>$r,segOpComputeOptimalWindowSize:()=>xr});var d={};n.r(d),n.d(d,{ERF_A1:()=>Gn,ERF_A2:()=>Kn,ERF_A3:()=>Un,ERF_A4:()=>jn,ERF_A5:()=>qn,ERF_P:()=>zn,PARALLELIZE_THRESHOLD:()=>Dn,RowPartitionType:()=>En,SELU_SCALE:()=>Wn,SELU_SCALEALPHA:()=>Ln,applyActivation:()=>$n.f2,assertAndGetBroadcastShape:()=>yt.assertAndGetBroadcastShape,assertAxesAreInnerMostDims:()=>kn.WC,assertParamsConsistent:()=>An,assignToTypedArray:()=>er,axesAreInnerMostDims:()=>kn.WH,calculateShapes:()=>_t.calculateShapes,checkEinsumDimSizes:()=>ur,checkPadOnDimRoundingMode:()=>xn.s_,combineLocations:()=>kn.aF,combineRaggedTensorToTensorShapes:()=>Mn,complexWithEvenIndex:()=>Xn,complexWithOddIndex:()=>Qn,computeConv2DInfo:()=>xn.uf,computeConv3DInfo:()=>xn.p$,computeDefaultPad:()=>xn.G8,computeDilation2DInfo:()=>xn.YQ,computeOptimalWindowSize:()=>Rn,computeOutAndReduceShapes:()=>kn.lb,computeOutShape:()=>Sn,computePool2DInfo:()=>xn.E6,computePool3DInfo:()=>xn.l5,convertConv2DDataFormat:()=>xn.$Q,decodeEinsumEquation:()=>ir,eitherStridesOrDilationsAreOne:()=>xn.G0,expandShapeToKeepDim:()=>kn.SM,exponent:()=>nr,exponents:()=>tr,fromStringArrayToUint8:()=>Ir,fromUint8ToStringArray:()=>Nr,getAxesPermutation:()=>kn.Em,getBroadcastDims:()=>yt.getBroadcastDims,getComplexWithIndex:()=>Jn,getEinsumComputePath:()=>cr,getEinsumPermutation:()=>lr,getFusedBiasGradient:()=>$n.Do,getFusedDyActivation:()=>$n.XB,getImageCenter:()=>Yn,getInnerMostAxes:()=>kn.fK,getPermuted:()=>Fn,getRaggedRank:()=>In,getReductionAxes:()=>yt.getReductionAxes,getReshaped:()=>Bn,getReshapedPermuted:()=>Pn,getRowPartitionTypesHelper:()=>Nn,getSliceBeginCoords:()=>Cn,getSliceSize:()=>On,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>fr,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>gr,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>mr,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>wr,getSparseReshapeInputOutputMismatchErrorMessage:()=>Tr,getSparseReshapeInputOutputMultipleErrorMessage:()=>vr,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>yr,getSparseReshapeNegativeOutputDimErrorMessage:()=>br,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>Er,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>kr,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>Ar,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>Sr,getUndoAxesPermutation:()=>kn.gx,isIdentityPermutation:()=>hr,log:()=>Hn.R,mergeRealAndImagArrays:()=>Vn,prepareAndValidate:()=>It,prepareSplitSize:()=>pr,segment_util:()=>h,shouldFuse:()=>$n.zE,slice_util:()=>u,splitRealAndImagArrays:()=>Zn,stridesOrDilationsArePositive:()=>xn.qk,tupleValuesAreOne:()=>xn.Dh,upcastType:()=>mn.Tu,validateDefaultValueShape:()=>_n,validateInput:()=>_t.validateInput,validateUpdateShape:()=>_t.validateUpdateShape,warn:()=>Hn.i});var p={};n.r(p),n.d(p,{nonMaxSuppressionV3Impl:()=>_r.c7,nonMaxSuppressionV4Impl:()=>_r.ZS,nonMaxSuppressionV5Impl:()=>_r.ut,whereImpl:()=>Dr.Y});var f=n(41585);let g;function m(e){g=e}function y(e){if(void 0!==g)return g;if(e||"undefined"!=typeof navigator&&null!=navigator){if(e||(e=navigator),"ReactNative"===e.product)return!0;const t=e.userAgent||e.vendor||("undefined"!=typeof window?window.opera:"");if(!t){const t=e;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function b(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}var w=n(46574);
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
const v=(0,w._K)();v.registerFlag("DEBUG",(()=>!1),(e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),v.registerFlag("IS_BROWSER",(()=>b())),v.registerFlag("IS_NODE",(()=>"undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.node)),v.registerFlag("IS_CHROME",(()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor))),v.registerFlag("IS_SAFARI",(()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor))),v.registerFlag("PROD",(()=>!1)),v.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(()=>v.getBool("DEBUG"))),v.registerFlag("DEPRECATION_WARNINGS_ENABLED",(()=>!0)),v.registerFlag("IS_TEST",(()=>!1)),v.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",(()=>v.getBool("DEBUG"))),v.registerFlag("WRAP_TO_IMAGEBITMAP",(()=>!1)),v.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",(()=>!1)),v.registerFlag("USE_SETTIMEOUTCUSTOM",(()=>!1));var T=n(77084);
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
class k{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==k.instance&&(k.instance=new k),k.instance}static registerSaveRouter(e){k.getInstance().saveRouters.push(e)}static registerLoadRouter(e){k.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return k.getHandlers(e,"save")}static getLoadHandlers(e,t){return k.getHandlers(e,"load",t)}static getHandlers(e,t,n){const r=[];return("load"===t?k.getInstance().loadRouters:k.getInstance().saveRouters).forEach((t=>{const s=t(e,n);null!==s&&r.push(s)})),r}}const A=e=>k.registerSaveRouter(e),S=e=>k.registerLoadRouter(e),E=e=>k.getSaveHandlers(e),x=(e,t)=>k.getLoadHandlers(e,t);var $=n(56734);
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
const M="tensorflowjs",N="models_store",I="model_info_store";function _(){if(!(0,w._K)().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e="undefined"==typeof window?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw new Error("The current browser does not appear to support IndexedDB.");return t}function D(e){const t=e.result;t.createObjectStore(N,{keyPath:"modelPath"}),t.createObjectStore(I,{keyPath:"modelPath"})}class R{constructor(e){if(this.indexedDB=_(),null==e||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise(((e,n)=>{const r=this.indexedDB.open(M,1);r.onupgradeneeded=()=>D(r),r.onsuccess=()=>{const s=r.result;if(null==t){const t=s.transaction(N,"readonly"),r=t.objectStore(N).get(this.modelPath);r.onsuccess=()=>{if(null==r.result)return s.close(),n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(r.result.modelArtifacts)},r.onerror=e=>(s.close(),n(r.error)),t.oncomplete=()=>s.close()}else{t.weightData=$.D.join(t.weightData);const r=(0,T.oR)(t),a=s.transaction(I,"readwrite");let o,i,l=a.objectStore(I);try{o=l.put({modelPath:this.modelPath,modelArtifactsInfo:r})}catch(e){return n(e)}o.onsuccess=()=>{i=s.transaction(N,"readwrite");const o=i.objectStore(N);let u;try{u=o.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:r})}catch(e){return n(e)}u.onsuccess=()=>e({modelArtifactsInfo:r}),u.onerror=e=>{l=a.objectStore(I);const t=l.delete(this.modelPath);t.onsuccess=()=>(s.close(),n(u.error)),t.onerror=e=>(s.close(),n(u.error))}},o.onerror=e=>(s.close(),n(o.error)),a.oncomplete=()=>{null==i?s.close():i.oncomplete=()=>s.close()}}},r.onerror=e=>n(r.error)}))}}R.URL_SCHEME="indexeddb://";const Y=e=>{return(0,w._K)().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(R.URL_SCHEME)?(t=e.slice(R.URL_SCHEME.length),new R(t)):null;var t};k.registerSaveRouter(Y),k.registerLoadRouter(Y);class B{constructor(){this.indexedDB=_()}async listModels(){return new Promise(((e,t)=>{const n=this.indexedDB.open(M,1);n.onupgradeneeded=()=>D(n),n.onsuccess=()=>{const r=n.result,s=r.transaction(I,"readonly"),a=s.objectStore(I).getAll();a.onsuccess=()=>{const t={};for(const e of a.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},a.onerror=e=>(r.close(),t(a.error)),s.oncomplete=()=>r.close()},n.onerror=e=>t(n.error)}))}async removeModel(e){var t;return e=(t=e).startsWith(R.URL_SCHEME)?t.slice(R.URL_SCHEME.length):t,new Promise(((t,n)=>{const r=this.indexedDB.open(M,1);r.onupgradeneeded=()=>D(r),r.onsuccess=()=>{const s=r.result,a=s.transaction(I,"readwrite"),o=a.objectStore(I),i=o.get(e);let l;i.onsuccess=()=>{if(null==i.result)return s.close(),n(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const r=o.delete(e),a=()=>{l=s.transaction(N,"readwrite");const r=l.objectStore(N).delete(e);r.onsuccess=()=>t(i.result.modelArtifactsInfo),r.onerror=e=>n(i.error)};r.onsuccess=a,r.onerror=e=>(a(),s.close(),n(i.error))}},i.onerror=e=>(s.close(),n(i.error)),a.oncomplete=()=>{null==l?s.close():l.oncomplete=()=>s.close()}},r.onerror=e=>n(r.error)}))}}var F=n(45119);
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
const P="/",C="tensorflowjs_models",O="info",L="model_topology",W="weight_specs",z="weight_data",G="model_metadata";function K(e){return{info:[C,e,O].join(P),topology:[C,e,L].join(P),weightSpecs:[C,e,W].join(P),weightData:[C,e,z].join(P),modelMetadata:[C,e,G].join(P)}}function U(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function j(e){const t=e.split(P);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(P)}class q{constructor(e){if(!(0,w._K)().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=K(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=(0,T.oR)(e),s=$.D.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,(0,T.l3)(s));const a={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:null!=e.signature?e.signature:void 0,userDefinedMetadata:null!=e.userDefinedMetadata?e.userDefinedMetadata:void 0,modelInitializer:null!=e.modelInitializer?e.modelInitializer:void 0,initializerSignature:null!=e.initializerSignature?e.initializerSignature:void 0,trainingConfig:null!=e.trainingConfig?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch(e){throw U(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(null==e)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==e.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(null==n)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==r)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;const s=this.LS.getItem(this.keys.modelMetadata);if(null!=s){const e=JSON.parse(s);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,null!=e.signature&&(t.signature=e.signature),null!=e.userDefinedMetadata&&(t.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(t.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(t.initializerSignature=e.initializerSignature),null!=e.trainingConfig&&(t.trainingConfig=e.trainingConfig)}const a=this.LS.getItem(this.keys.weightData);if(null==a)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=(0,T.jf)(a),t}}q.URL_SCHEME="localstorage://";const H=e=>{return(0,w._K)().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(q.URL_SCHEME)?(t=e.slice(q.URL_SCHEME.length),new q(t)):null;var t};k.registerSaveRouter(H),k.registerLoadRouter(H);class V{constructor(){(0,F.vA)((0,w._K)().getBool("IS_BROWSER"),(()=>"Current environment is not a web browser")),(0,F.vA)("undefined"==typeof window||void 0!==window.localStorage,(()=>"Current browser does not appear to support localStorage")),this.LS=window.localStorage}async listModels(){const e={},t=C+P,n=P+O;for(let r=0;r<this.LS.length;++r){const s=this.LS.key(r);if(s.startsWith(t)&&s.endsWith(n)){e[j(s)]=JSON.parse(this.LS.getItem(s))}}return e}async removeModel(e){var t;const n=K(e=(t=e).startsWith(q.URL_SCHEME)?t.slice(q.URL_SCHEME.length):t);if(null==this.LS.getItem(n.info))throw new Error(`Cannot find model at path '${e}'`);const r=JSON.parse(this.LS.getItem(n.info));return U(n),r}}
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
const Z="://";class X{constructor(){this.managers={}}static getInstance(){return null==X.instance&&(X.instance=new X),X.instance}static registerManager(e,t){(0,F.vA)(null!=e,(()=>"scheme must not be undefined or null.")),e.endsWith(Z)&&(e=e.slice(0,e.indexOf(Z))),(0,F.vA)(e.length>0,(()=>"scheme must not be an empty string."));const n=X.getInstance();(0,F.vA)(null==n.managers[e],(()=>`A model store manager is already registered for scheme '${e}'.`)),n.managers[e]=t}static getManager(e){const t=X.getInstance().managers[e];if(null==t)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(X.getInstance().managers)}}function Q(e){if(-1===e.indexOf(Z))throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${X.getSchemes().join(",")}`);return{scheme:e.split(Z)[0],path:e.split(Z)[1]}}async function J(e,t,n=!1){(0,F.vA)(e!==t,(()=>`Old path and new path are the same: '${e}'`));const r=k.getLoadHandlers(e);(0,F.vA)(r.length>0,(()=>`Copying failed because no load handler is found for source URL ${e}.`)),(0,F.vA)(r.length<2,(()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${e}.`));const s=r[0],a=k.getSaveHandlers(t);(0,F.vA)(a.length>0,(()=>`Copying failed because no save handler is found for destination URL ${t}.`)),(0,F.vA)(a.length<2,(()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`));const o=a[0],i=Q(e).scheme,l=Q(e).path,u=i===Q(e).scheme,c=await s.load();n&&u&&await X.getManager(i).removeModel(l);const h=await o.save(c);return n&&!u&&await X.getManager(i).removeModel(l),h.modelArtifactsInfo}async function ee(){const e=X.getSchemes(),t={};for(const n of e){const e=await X.getManager(n).listModels();for(const r in e){t[n+Z+r]=e[r]}}return t}async function te(e){const t=Q(e);return X.getManager(t.scheme).removeModel(t.path)}async function ne(e,t){return J(e,t,!1)}async function re(e,t){return J(e,t,!0)}var se=n(86448);
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
class ae{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){"undefined"!=typeof window&&(0,w._K)().getBool("USE_SETTIMEOUTCUSTOM")?(this.functionRefs.push(e),setTimeout((()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")}),t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",(e=>{if(e.source===window&&e.data.name===this.messageName){e.stopPropagation();(0,this.functionRefs[e.data.index])(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}}),!0))):setTimeout(e,t)}isTypedArray(e){return(0,se.Y)(e)}}if((0,w._K)().get("IS_BROWSER")){(0,w._K)().setPlatform("browser",new ae);try{X.registerManager(q.URL_SCHEME,new V)}catch(e){}try{X.registerManager(R.URL_SCHEME,new B)}catch(e){}}
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
const oe=()=>n(85817);let ie;class le{constructor(){this.util=n(18590),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return null!=(0,w._K)().global.fetch?(0,w._K)().global.fetch(e,t):(null==ie&&(ie=oe()),ie(e,t))}now(){const e=process.hrtime();return 1e3*e[0]+e[1]/1e6}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return 0===e.length?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}(0,w._K)().get("IS_NODE")&&!(0,w._K)().get("IS_BROWSER")&&(0,w._K)().setPlatform("node",new le);var ue=n(448),ce=n(29809),he=n(70125),de=n(75295),pe=n(50259);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
(0,f.Ye)();const fe={buffer:ue.r,cast:ce.w,clone:he.o,print:de.y};(0,pe.Q5)(fe);var ge=n(35287),me=n(37523),ye=n(89359),be=n(9258),we=n(79348),ve=n(45793),Te=n(55537),ke=n(31830),Ae=n(45702);
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
const Se=new Map,Ee=new Map;class xe{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}}class $e{constructor(){this.classNameMap={}}static getMap(){return null==$e.instance&&($e.instance=new $e),$e.instance}static register(e){$e.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function Me(e,t,n){(0,F.vA)(null!=e.className,(()=>"Class being registered does not have the static className property defined.")),(0,F.vA)("string"==typeof e.className,(()=>"className is required to be a string, but got type "+typeof e.className)),(0,F.vA)(e.className.length>0,(()=>"Class being registered has an empty-string as its className, which is disallowed.")),void 0===t&&(t="Custom"),void 0===n&&(n=e.className);const r=t+">"+n;return $e.register(e),Se.set(r,e),Ee.set(e,r),e}function Ne(e){return Ee.has(e)?Ee.get(e):e.className}
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
class Ie extends xe{minimize(e,t=!1,n){const{value:r,grads:s}=this.computeGradients(e,n);if(null!=n){const e=n.map((e=>({name:e.name,tensor:s[e.name]})));this.applyGradients(e)}else this.applyGradients(s);return(0,ge.AS)(s),t?r:(r.dispose(),null)}get iterations(){return null==this.iterations_&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return(0,ke.y7)(e,t)}dispose(){null!=this.iterations_&&(0,ge.AS)(this.iterations_)}async saveIterations(){return null==this.iterations_&&(this.iterations_=0),{name:"iter",tensor:(0,Ae.d)(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}Object.defineProperty(Ie,Symbol.hasInstance,{value:e=>null!=e.minimize&&null!=e.computeGradients&&null!=e.applyGradients});
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
class _e extends Ie{static get className(){return"Adadelta"}constructor(e,t,n=null){super(),this.learningRate=e,this.rho=t,this.epsilon=n,this.accumulatedGrads=[],this.accumulatedUpdates=[],null==n&&(this.epsilon=f.T2.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,n)=>{const r=f.T2.registeredVariables[t],s=!1;null==this.accumulatedGrads[n]&&(this.accumulatedGrads[n]={originalName:`${t}/accum_grad`,variable:(0,ge.DZ)((()=>(0,Te.P)(r).variable(s)))}),null==this.accumulatedUpdates[n]&&(this.accumulatedUpdates[n]={originalName:`${t}/accum_var`,variable:(0,ge.DZ)((()=>(0,Te.P)(r).variable(s)))});const a=Array.isArray(e)?e[n].tensor:e[t];if(null==a)return;const o=this.accumulatedGrads[n].variable,i=this.accumulatedUpdates[n].variable;(0,ge.DZ)((()=>{const e=(0,me.W)((0,be.l)(o,this.rho),(0,be.l)((0,ve.E)(a),1-this.rho)),t=(0,be.l)((0,ye.y)((0,we.R)((0,me.W)(i,this.epsilon)),(0,we.R)((0,me.W)(o,this.epsilon))),a),n=(0,me.W)((0,be.l)(i,this.rho),(0,be.l)((0,ve.E)(t),1-this.rho));o.assign(e),i.assign(n);const s=(0,me.W)((0,be.l)(t,-this.learningRate),r);r.assign(s)}))})),this.incrementIterations()}dispose(){null!=this.accumulatedUpdates&&((0,ge.AS)(this.accumulatedGrads.map((e=>e.variable))),(0,ge.AS)(this.accumulatedUpdates.map((e=>e.variable))))}async getWeights(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map((e=>({name:e.originalName,tensor:e.variable}))))}async setWeights(e){const t=(e=await this.extractIterations(e)).length/2,n=!1;this.accumulatedGrads=e.slice(0,t).map((e=>({originalName:e.name,variable:e.tensor.variable(n)}))),this.accumulatedUpdates=e.slice(t,2*t).map((e=>({originalName:e.name,variable:e.tensor.variable(n)})))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}}var De=n(96111);
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
class Re extends Ie{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,n)=>{const r=f.T2.registeredVariables[t];if(null==this.accumulatedGrads[n]){const e=!1;this.accumulatedGrads[n]={originalName:`${t}/accumulator`,variable:(0,ge.DZ)((()=>(0,De.G)(r.shape,this.initialAccumulatorValue).variable(e)))}}const s=Array.isArray(e)?e[n].tensor:e[t];if(null==s)return;const a=this.accumulatedGrads[n].variable;(0,ge.DZ)((()=>{const e=(0,me.W)(a,(0,ve.E)(s));a.assign(e);const t=(0,me.W)((0,be.l)((0,ye.y)(s,(0,we.R)((0,me.W)(e,f.T2.backend.epsilon()))),-this.learningRate),r);r.assign(t)}))})),this.incrementIterations()}dispose(){null!=this.accumulatedGrads&&(0,ge.AS)(this.accumulatedGrads.map((e=>e.variable)))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map((e=>({name:e.originalName,tensor:e.variable}))))}async setWeights(e){e=await this.extractIterations(e);this.accumulatedGrads=e.map((e=>({originalName:e.name,variable:e.tensor.variable(false)})))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}}var Ye=n(98990),Be=n(77126);
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
class Fe extends Ie{static get className(){return"Adam"}constructor(e,t,n,r=null){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],(0,ge.DZ)((()=>{this.accBeta1=(0,Ae.d)(t).variable(),this.accBeta2=(0,Ae.d)(n).variable()})),null==r&&(this.epsilon=f.T2.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map((e=>e.name)):Object.keys(e);(0,ge.DZ)((()=>{const n=(0,Be.j)(1,this.accBeta1),r=(0,Be.j)(1,this.accBeta2);t.forEach(((t,s)=>{const a=f.T2.registeredVariables[t],o=!1;null==this.accumulatedFirstMoment[s]&&(this.accumulatedFirstMoment[s]={originalName:`${t}/m`,variable:(0,ge.DZ)((()=>(0,Te.P)(a).variable(o)))}),null==this.accumulatedSecondMoment[s]&&(this.accumulatedSecondMoment[s]={originalName:`${t}/v`,variable:(0,ge.DZ)((()=>(0,Te.P)(a).variable(o)))});const i=Array.isArray(e)?e[s].tensor:e[t];if(null==i)return;const l=this.accumulatedFirstMoment[s].variable,u=this.accumulatedSecondMoment[s].variable,c=(0,me.W)((0,be.l)(l,this.beta1),(0,be.l)(i,1-this.beta1)),h=(0,me.W)((0,be.l)(u,this.beta2),(0,be.l)((0,ve.E)(i),1-this.beta2)),d=(0,ye.y)(c,n),p=(0,ye.y)(h,r);l.assign(c),u.assign(h);const g=(0,me.W)((0,be.l)((0,ye.y)(d,(0,me.W)((0,we.R)(p),this.epsilon)),-this.learningRate),a);a.assign(g)})),this.accBeta1.assign((0,be.l)(this.accBeta1,this.beta1)),this.accBeta2.assign((0,be.l)(this.accBeta2,this.beta2))})),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&(0,ge.AS)(this.accumulatedFirstMoment.map((e=>e.variable))),null!=this.accumulatedSecondMoment&&(0,ge.AS)(this.accumulatedSecondMoment.map((e=>e.variable)))}async getWeights(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map((e=>({name:e.originalName,tensor:e.variable}))))}async setWeights(e){e=await this.extractIterations(e),(0,ge.DZ)((()=>{this.accBeta1.assign((0,Ye.n)(this.beta1,this.iterations_+1)),this.accBeta2.assign((0,Ye.n)(this.beta2,this.iterations_+1))}));const t=e.length/2,n=!1;this.accumulatedFirstMoment=e.slice(0,t).map((e=>({originalName:e.name,variable:e.tensor.variable(n)}))),this.accumulatedSecondMoment=e.slice(t,2*t).map((e=>({originalName:e.name,variable:e.tensor.variable(n)})))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}}var Pe=n(4888),Ce=n(30178);
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
class Oe extends Ie{static get className(){return"Adamax"}constructor(e,t,n,r=null,s=0){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.decay=s,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],(0,ge.DZ)((()=>{this.iteration=(0,Ae.d)(0).variable(),this.accBeta1=(0,Ae.d)(t).variable()})),null==r&&(this.epsilon=f.T2.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map((e=>e.name)):Object.keys(e);(0,ge.DZ)((()=>{const n=(0,Be.j)(1,this.accBeta1),r=(0,ye.y)(-this.learningRate,(0,me.W)((0,be.l)(this.iteration,this.decay),1));t.forEach(((t,s)=>{const a=f.T2.registeredVariables[t],o=!1;null==this.accumulatedFirstMoment[s]&&(this.accumulatedFirstMoment[s]={originalName:`${t}/m`,variable:(0,Te.P)(a).variable(o)}),null==this.accumulatedWeightedInfNorm[s]&&(this.accumulatedWeightedInfNorm[s]={originalName:`${t}/v`,variable:(0,Te.P)(a).variable(o)});const i=Array.isArray(e)?e[s].tensor:e[t];if(null==i)return;const l=this.accumulatedFirstMoment[s].variable,u=this.accumulatedWeightedInfNorm[s].variable,c=(0,me.W)((0,be.l)(l,this.beta1),(0,be.l)(i,1-this.beta1)),h=(0,be.l)(u,this.beta2),d=(0,Pe.t)(i),p=(0,Ce.P)(h,d);l.assign(c),u.assign(p);const g=(0,me.W)((0,be.l)((0,ye.y)(r,n),(0,ye.y)(c,(0,me.W)(p,this.epsilon))),a);a.assign(g)})),this.iteration.assign((0,me.W)(this.iteration,1)),this.accBeta1.assign((0,be.l)(this.accBeta1,this.beta1))})),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&(0,ge.AS)(this.accumulatedFirstMoment.map((e=>e.variable))),null!=this.accumulatedWeightedInfNorm&&(0,ge.AS)(this.accumulatedWeightedInfNorm.map((e=>e.variable)))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}}
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
class Le extends Ie{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,n)=>{const r=Array.isArray(e)?e[n].tensor:e[t];if(null==r)return;const s=f.T2.registeredVariables[t];(0,ge.DZ)((()=>{const e=(0,me.W)((0,be.l)(this.c,r),s);s.assign(e)}))})),this.incrementIterations()}setLearningRate(e){this.learningRate=e,null!=this.c&&this.c.dispose(),this.c=(0,ge.aC)((0,Ae.d)(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(0!==(e=await this.extractIterations(e)).length)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}}
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
class We extends Le{static get className(){return"Momentum"}constructor(e,t,n=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=n,this.accumulations=[],this.m=(0,Ae.d)(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,n)=>{const r=f.T2.registeredVariables[t];if(null==this.accumulations[n]){const e=!1;this.accumulations[n]={originalName:`${t}/momentum`,variable:(0,ge.DZ)((()=>(0,Te.P)(r).variable(e)))}}const s=this.accumulations[n].variable,a=Array.isArray(e)?e[n].tensor:e[t];null!=a&&(0,ge.DZ)((()=>{let e;const t=(0,me.W)((0,be.l)(this.m,s),a);e=this.useNesterov?(0,me.W)((0,be.l)(this.c,(0,me.W)(a,(0,be.l)(t,this.m))),r):(0,me.W)((0,be.l)(this.c,t),r),s.assign(t),r.assign(e)}))})),this.incrementIterations()}dispose(){this.m.dispose(),null!=this.accumulations&&(0,ge.AS)(this.accumulations.map((e=>e.variable)))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map((e=>({name:e.originalName,tensor:e.variable}))))}async setWeights(e){e=await this.extractIterations(e);this.accumulations=e.map((e=>({originalName:e.name,variable:e.tensor.variable(false)})))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}}
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
class ze extends Ie{static get className(){return"RMSProp"}constructor(e,t=.9,n=0,r=null,s=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=n,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=s,null==r&&(this.epsilon=f.T2.backend.epsilon()),null==e)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,n)=>{const r=f.T2.registeredVariables[t],s=!1;null==this.accumulatedMeanSquares[n]&&(this.accumulatedMeanSquares[n]={originalName:`${t}/rms`,variable:(0,ge.DZ)((()=>(0,Te.P)(r).variable(s)))}),null==this.accumulatedMoments[n]&&(this.accumulatedMoments[n]={originalName:`${t}/momentum`,variable:(0,ge.DZ)((()=>(0,Te.P)(r).variable(s)))}),null==this.accumulatedMeanGrads[n]&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:`${t}/mg`,variable:(0,ge.DZ)((()=>(0,Te.P)(r).variable(s)))});const a=Array.isArray(e)?e[n].tensor:e[t];if(null==a)return;const o=this.accumulatedMeanSquares[n].variable,i=this.accumulatedMoments[n].variable;(0,ge.DZ)((()=>{const e=(0,me.W)((0,be.l)(o,this.decay),(0,be.l)((0,ve.E)(a),1-this.decay));if(this.centered){const t=this.accumulatedMeanGrads[n].variable,s=(0,me.W)((0,be.l)(t,this.decay),(0,be.l)(a,1-this.decay)),l=(0,ye.y)((0,be.l)(a,this.learningRate),(0,we.R)((0,Be.j)(e,(0,me.W)((0,ve.E)(s),this.epsilon)))),u=(0,me.W)((0,be.l)(i,this.momentum),l);o.assign(e),t.assign(s),i.assign(u);const c=(0,Be.j)(r,u);r.assign(c)}else{const e=(0,me.W)((0,be.l)(o,this.decay),(0,be.l)((0,ve.E)(a),1-this.decay)),t=(0,me.W)((0,be.l)(i,this.momentum),(0,ye.y)((0,be.l)(a,this.learningRate),(0,we.R)((0,me.W)(e,this.epsilon))));o.assign(e),i.assign(t);const n=(0,Be.j)(r,t);r.assign(n)}}))})),this.incrementIterations()}dispose(){null!=this.accumulatedMeanSquares&&(0,ge.AS)(this.accumulatedMeanSquares.map((e=>e.variable))),null!=this.accumulatedMeanGrads&&this.centered&&(0,ge.AS)(this.accumulatedMeanGrads.map((e=>e.variable))),null!=this.accumulatedMoments&&(0,ge.AS)(this.accumulatedMoments.map((e=>e.variable)))}async getWeights(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map((e=>({name:e.originalName,tensor:e.variable}))))}async setWeights(e){e=await this.extractIterations(e);const t=this.centered?e.length/3:e.length/2,n=!1;this.accumulatedMeanSquares=e.slice(0,t).map((e=>({originalName:e.name,variable:e.tensor.variable(n)}))),this.accumulatedMoments=e.slice(t,2*t).map((e=>({originalName:e.name,variable:e.tensor.variable(n)}))),this.centered&&(this.accumulatedMeanGrads=e.slice(2*t,3*t).map((e=>({originalName:e.name,variable:e.tensor.variable(n)}))))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}}
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
const Ge=[_e,Re,Fe,Oe,We,ze,Le];function Ke(e){return new Promise((e=>setTimeout(e))).then(e)}class Ue{constructor(e){if(!(0,w._K)().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(Ue.URL_SCHEME)&&(e=e.slice(Ue.URL_SCHEME.length)),null!=e&&0!==e.length||(e="model"),this.modelJsonFileName=e+".json",this.weightDataFileName=e+".weights.bin"}async save(e){if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=$.D.join(e.weightData),n=window.URL.createObjectURL(new Blob([t],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const t=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],r=(0,T.zV)(e,t),s=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),a=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=s,await Ke((()=>a.dispatchEvent(new MouseEvent("click")))),null!=e.weightData){const e=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;e.download=this.weightDataFileName,e.href=n,await Ke((()=>e.dispatchEvent(new MouseEvent("click"))))}return{modelArtifactsInfo:(0,T.oR)(e)}}}}Ue.URL_SCHEME="downloads://";class je{constructor(e){if(null==e||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise(((e,t)=>{const n=new FileReader;n.onload=n=>{const r=JSON.parse(n.target.result),s=r.modelTopology;if(null==s)return void t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));if(null==r.weightsManifest)return void t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));if(0===this.weightsFiles.length)return void e({modelTopology:s});const a=(0,T.Ej)(r,(e=>this.loadWeights(e)));e(a)},n.onerror=e=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),n.readAsText(this.jsonFile)}))}loadWeights(e){const t=[],n=[];for(const r of e)t.push(...r.weights),n.push(...r.paths);const r=this.checkManifestAndWeightFiles(e),s=n.map((e=>this.loadWeightsFile(e,r[e])));return Promise.all(s).then((e=>[t,e]))}loadWeightsFile(e,t){return new Promise(((n,r)=>{const s=new FileReader;s.onload=e=>{const t=e.target.result;n(t)},s.onerror=t=>r(`Failed to weights data from file of path '${e}'.`),s.readAsArrayBuffer(t)}))}checkManifestAndWeightFiles(e){const t=[],n=this.weightsFiles.map((e=>(0,T.P8)(e.name))),r={};for(const s of e)s.paths.forEach((e=>{const s=(0,T.P8)(e);if(-1!==t.indexOf(s))throw new Error(`Duplicate file basename found in weights manifest: '${s}'`);if(t.push(s),-1===n.indexOf(s))throw new Error(`Weight file with basename '${s}' is not provided.`);r[e]=this.weightsFiles[n.indexOf(s)]}));if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}function qe(e){return new je(e)}
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
function He(e,t,n,r){!function(e){(0,F.vA)(null!=e&&Array.isArray(e)&&e.length>0,(()=>"promises must be a none empty array"))}(e),function(e,t){(0,F.vA)(e>=0&&e<=1,(()=>`Progress fraction must be in range [0, 1], but got startFraction ${e}`)),(0,F.vA)(t>=0&&t<=1,(()=>`Progress fraction must be in range [0, 1], but got endFraction ${t}`)),(0,F.vA)(t>=e,(()=>`startFraction must be no more than endFraction, but got startFraction ${e} and endFraction ${t}`))}(n=null==n?0:n,r=null==r?1:r);let s=0;return Promise.all(e.map((a=>(a.then((a=>{const o=n+ ++s/e.length*(r-n);return t(o),a})),a))))}k.registerSaveRouter((e=>(0,w._K)().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Ue.URL_SCHEME)?function(e="model"){return new Ue(e)}(e.slice(Ue.URL_SCHEME.length)):null));var Ve=n(15685);
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
async function Ze(e,t){null==t&&(t={});const n=null==t.fetchFunc?(0,w._K)().platform.fetch:t.fetchFunc,r=e.map((e=>n(e,t.requestInit,{isBinary:!0}))),s=(null==t.onProgress?await Promise.all(r):await He(r,t.onProgress,0,.5)).map((e=>e.arrayBuffer()));return null==t.onProgress?await Promise.all(s):await He(s,t.onProgress,.5,1)}async function Xe(e,t="",n,r){return Qe((e=>Ze(e,{requestInit:r})))(e,t,n)}function Qe(e){return async(t,n="",r)=>{const s=t.map((()=>!1)),a={},o=null!=r?r.map((()=>!1)):[],i=[];if(t.forEach(((e,t)=>{let n=0;e.weights.forEach((e=>{const l="quantization"in e?e.quantization.dtype:e.dtype,u=Ve.i[l]*F.Ze(e.shape),c=()=>{s[t]=!0,null==a[t]&&(a[t]=[]),a[t].push({manifestEntry:e,groupOffset:n,sizeBytes:u})};null!=r?r.forEach(((t,n)=>{t===e.name&&(c(),o[n]=!0)})):c(),i.push(e.name),n+=u}))})),!o.every((e=>e))){const e=r.filter(((e,t)=>!o[t]));throw new Error(`Could not find weights in manifest with names: ${e.join(", ")}. \nManifest JSON has weights with names: ${i.join(", ")}.`)}const l=s.reduce(((e,t,n)=>(t&&e.push(n),e)),[]),u=[];l.forEach((e=>{t[e].paths.forEach((e=>{const t=n+(n.endsWith("/")?"":"/")+e;u.push(t)}))}));const c=await e(u),h={};let d=0;return l.forEach((e=>{const n=t[e].paths.length,r=new $.D(c.slice(d,d+n));a[e].forEach((e=>{const t=r.slice(e.groupOffset,e.groupOffset+e.sizeBytes),n=(0,T.CY)(t,[e.manifestEntry]);for(const e in n)h[e]=n[e]})),d+=n})),h}}class Je{constructor(e,t){if(this.DEFAULT_METHOD="POST",null==t&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,null!=t.fetchFunc?((0,F.vA)("function"==typeof t.fetchFunc,(()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)")),this.fetch=t.fetchFunc):this.fetch=(0,w._K)().platform.fetch,(0,F.vA)(null!=e&&e.length>0,(()=>"URL path for http must not be null, undefined or empty.")),Array.isArray(e)&&(0,F.vA)(2===e.length,(()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`)),this.path=e,null!=t.requestInit&&null!=t.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{},this.loadOptions=t}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const n=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],r=(0,T.zV)(e,n);if(t.body.append("model.json",new Blob([JSON.stringify(r)],{type:"application/json"}),"model.json"),null!=e.weightData){const n=$.D.join(e.weightData);t.body.append("model.weights.bin",new Blob([n],{type:"application/octet-stream"}),"model.weights.bin")}const s=await this.fetch(this.path,t);if(s.ok)return{modelArtifactsInfo:(0,T.oR)(e),responses:[s]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${s.status}.`)}async loadModelJSON(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch(e){let t=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?t+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":t+=" Please make sure the server is serving valid JSON for this request.",new Error(t)}const n=t.modelTopology,r=t.weightsManifest;if(null==n&&null==r)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return t}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const e=await this.loadModelJSON();return(0,T.Ej)(e,(e=>this.loadWeights(e)))}async loadStream(){const e=await this.loadModelJSON(),t=await this.getWeightUrls(e.weightsManifest),n=(0,T.Xf)(e.weightsManifest);return Object.assign(Object.assign({},e),{weightSpecs:n,getWeightStream:()=>function(e,t){var n;const r=null==t.fetchFunc?(0,w._K)().platform.fetch:t.fetchFunc;let s,a=0;return null===(n=t.onProgress)||void 0===n||n.call(t,0),new ReadableStream({pull:async n=>{for(var o;a<e.length;){if(!s){const n=(await r(e[a],t.requestInit,{isBinary:!0})).body;s=n.getReader()}const{done:i,value:l}=await s.read();if(!i)return void n.enqueue(l);a++,s=void 0,null===(o=t.onProgress)||void 0===o||o.call(t,a/e.length)}n.close()}})}(t,this.loadOptions)})}async getWeightUrls(e){const t=Array.isArray(this.path)?this.path[1]:this.path,[n,r]=function(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),r=e.substring(0,t),s=n>t?e.substring(n):"";return[r+"/",s]}(t),s=this.weightPathPrefix||n,a=[],o=[];for(const t of e)for(const e of t.paths)null!=this.weightUrlConverter?o.push(this.weightUrlConverter(e)):a.push(s+e+r);return this.weightUrlConverter&&a.push(...await Promise.all(o)),a}async loadWeights(e){const t=await this.getWeightUrls(e);return[(0,T.Xf)(e),await Ze(t,this.loadOptions)]}}function et(e){return null!=e.match(Je.URL_SCHEME_REGEX)}Je.URL_SCHEME_REGEX=/^https?:\/\//;const tt=(e,t)=>{if("undefined"==typeof fetch&&(null==t||null==t.fetchFunc))return null;{let n=!0;if(n=Array.isArray(e)?e.every((e=>et(e))):et(e),n)return nt(e,t)}return null};function nt(e,t){return new Je(e,t)}function rt(e,t){return nt(e,t)}k.registerSaveRouter(tt),k.registerLoadRouter(tt);
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
class st{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class at{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class ot{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}function it(e,t,n,r){return new ot(lt(...arguments))}function lt(e,t,n,r){if(1===arguments.length){return null!=e.modelTopology||null!=e.weightSpecs?new st(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new st({modelTopology:e}))}return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new st({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r})}function ut(e){return new at(e)}function ct(e){return new at(e)}
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
var ht=n(28189),dt=n(65703),pt=n(11760),ft=n(70929),gt=n(7703);const mt=(0,ft.op)({confusionMatrix_:
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
function(e,t,n){const r=(0,ht.YT)(e,"labels","confusionMatrix"),s=(0,ht.YT)(t,"predictions","confusionMatrix");F.vA(null==n||n>0&&Number.isInteger(n),(()=>`If provided, numClasses must be a positive integer, but got ${n}`)),F.vA(1===r.rank,(()=>`Expected the rank of labels to be 1, but got ${r.rank}`)),F.vA(1===s.rank,(()=>`Expected the rank of predictions to be 1, but got ${s.rank}`)),F.vA(r.shape[0]===s.shape[0],(()=>`Mismatch in the number of examples: ${r.shape[0]} vs. ${s.shape[0]}. Labels and predictions should have the same number of elements.`)),F.vA(n>0&&Number.isInteger(n),(()=>`numClasses is required to be a positive integer, but got ${n}`));const a=(0,pt.M)((0,ce.w)(r,"int32"),n),o=(0,pt.M)((0,ce.w)(s,"int32"),n),i=(0,gt.m)(a),l=(0,dt.N)(i,o);return(0,ce.w)(l,"int32")}});
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
var yt=n(62198),bt=n(15441),wt=n(37074),vt=n(42768);
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
let Tt,kt=!1;function At(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==e)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,s=!1,a=!1,o=!1,i=!1;if(e.data instanceof Uint8Array)n=!0;else if("undefined"!=typeof ImageData&&e instanceof ImageData)r=!0;else if("undefined"!=typeof HTMLVideoElement&&e instanceof HTMLVideoElement)s=!0;else if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement)a=!0;else if(null!=e.getContext)o=!0;else{if(!("undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap))throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);i=!0}if(null!=(0,wt._5)(bt.awo,f.T2.backendName)){const n={pixels:e},r={numChannels:t};return f.T2.runKernel(bt.awo,n,r)}const[l,u]=s?[e.videoWidth,e.videoHeight]:[e.width,e.height];let c,h;if(o)c=e.getContext("2d").getImageData(0,0,l,u).data;else if(r||n)c=e.data;else if(a||s||i){if(null==Tt)if("undefined"==typeof document){if("undefined"==typeof OffscreenCanvas||"undefined"==typeof OffscreenCanvasRenderingContext2D)throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");Tt=new OffscreenCanvas(1,1).getContext("2d")}else Tt=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Tt.canvas.width=l,Tt.canvas.height=u,Tt.drawImage(e,0,0,l,u),c=Tt.getImageData(0,0,l,u).data}if(4===t)h=new Int32Array(c);else{const e=l*u;h=new Int32Array(e*t);for(let n=0;n<e;n++)for(let e=0;e<t;++e)h[n*t+e]=c[4*n+e]}const d=[u,l,t];return(0,vt.$)(h,d,"int32")}function St(e){return"undefined"!=typeof window&&"undefined"!=typeof ImageBitmap&&window.hasOwnProperty("createImageBitmap")&&!(e instanceof ImageBitmap)&&function(e){return null!=e&&0!==e.width&&0!==e.height}(e)&&!function(e){return null!=e&&e.data instanceof Uint8Array}(e)}async function Et(e,t=3){let n=null;if((0,w._K)().getBool("WRAP_TO_IMAGEBITMAP")&&St(e)){let t;try{t=await createImageBitmap(e,{premultiplyAlpha:"none"})}catch(e){t=null}n=null!=t&&t.width===e.width&&t.height===e.height?t:e}else n=e;return At(n,t)}function xt(e){if(2!==e.rank&&3!==e.rank)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const t=2===e.rank?1:e.shape[2];if(t>4||2===t)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${t}`);if("float32"!==e.dtype&&"int32"!==e.dtype)throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`)}async function $t(e,t){let n=(0,ht.YT)(e,"img","toPixels");if(!(e instanceof pe.qY)){const e=n;n=(0,ce.w)(e,"int32"),e.dispose()}xt(n);const[r,s]=n.shape.slice(0,2),a=2===n.rank?1:n.shape[2],o=await n.data(),i="float32"===n.dtype?255:1,l=new Uint8ClampedArray(s*r*4);for(let e=0;e<r*s;++e){const t=[0,0,0,255];for(let r=0;r<a;r++){const s=o[e*a+r];if("float32"===n.dtype){if(s<0||s>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${s}.`)}else if("int32"===n.dtype&&(s<0||s>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${s}.`);1===a?(t[0]=s*i,t[1]=s*i,t[2]=s*i):t[r]=s*i}const r=4*e;l[r+0]=Math.round(t[0]),l[r+1]=Math.round(t[1]),l[r+2]=Math.round(t[2]),l[r+3]=Math.round(t[3])}if(null!=t){if(!kt){null!=(0,wt._5)(bt.XmO,f.T2.backendName)&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),kt=!0)}t.width=s,t.height=r;const e=t.getContext("2d"),n=new ImageData(l,s,r);e.putImageData(n,0,0)}return n!==e&&n.dispose(),l}function Mt(e,t,n){let r=(0,ht.YT)(e,"img","draw");if(!(e instanceof pe.qY)){const e=r;r=(0,ce.w)(e,"int32"),e.dispose()}xt(r),function(e){const t=(null==e?void 0:e.alpha)||1;if(t>1||t<0)throw new Error(`Alpha value ${t} is suppoed to be in range [0 - 1].`)}(null==n?void 0:n.imageOptions);const s={image:r},a={canvas:t,options:n};f.T2.runKernel(bt.XmO,s,a)}const Nt=(0,ft.op)({fromPixels_:At});function It(e,t){const n=e.shape.length,r=t.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if("int32"!==t.dtype)throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(0===(0,F.Ze)(e.shape))throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);const s=t.shape,a=s[s.length-1];let o=1;for(let e=0;e<s.length-1;++e)o*=s[e];const i=e.shape,l=s.slice();l.pop();let u=1;for(let e=a;e<n;++e)u*=i[e],l.push(i[e]);const c=[...(0,F.Ur)(e.shape).map((e=>e/u)),1].slice(0,a);return[l,o,u,c]}var _t=n(26170);
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
const Dt=-2,Rt=-1;function Yt(e,t,n){const r=e.shape.length;F.vA(r===t.length,(()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`)),F.vA(r===n.length,(()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`));for(let s=0;s<r;++s)F.vA(t[s]+n[s]<=e.shape[s],(()=>`Error in slice${r}D: begin[${s}] + size[${s}] (${t[s]+n[s]}) would overflow input.shape[${s}] (${e.shape[s]})`))}function Bt(e){const t=[];let n=0;for(;e>0;)1&e&&t.push(n),e/=2,n++;return t}function Ft(e,t,n){const r=[];for(let s=0;s<e.length;s++)r[s]=Math.ceil((t[s]-e[s])/n[s]);return r}function Pt(e,t,n,r){const s=[...e];for(let e=s.length;e<r.length;e++)s.push(1);for(let e=0;e<n;e++)0===e?s[t]=1:(s.splice(t,0,1),s.pop());return s}function Ct(e,t,n){return n<=e?n:n-(t-1)}function Ot(e,t){const n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function Lt(e,t,n,r,s,a,o,i,l){const u=e.length;let c=new Array(u),h=new Array(u),d=new Array(u);if(t.length&&n>0){const l=t[0],u=n+1;c=Wt(o,l,u,r,e),h=zt(i,l,u,s,e),d=Pt(a,l,u,e)}else for(let t=0;t<u;t++)c[t]=Kt(o,r,a,e,t,l),h[t]=Ut(i,s,a,e,t,l),d[t]=Gt(a,t,l);return{begin:c,end:h,strides:d}}function Wt(e,t,n,r,s){const a=[...s],o=Ot(n,t);for(let s=0;s<a.length;s++)if(o.indexOf(s)>-1)a[s]=0;else{const o=Ct(t,n,s);let i=r[o];e&1<<o&&(i=0),a[s]=i}return a}function zt(e,t,n,r,s){const a=[...s],o=Ot(n,t);for(let s=0;s<a.length;s++)if(o.indexOf(s)>-1)a[s]=Number.MAX_SAFE_INTEGER;else{const o=Ct(t,n,s);let i=r[o];e&1<<o&&(i=Number.MAX_SAFE_INTEGER),a[s]=i}for(let e=0;e<a.length;e++){const t=s[e];a[e]<0&&(a[e]+=t),a[e]=F.qE(0,a[e],s[e])}return a}function Gt(e,t,n){let r=e[t];return(n&1<<t||null==r)&&(r=1),r}function Kt(e,t,n,r,s,a){let o=t[s];const i=n[s]||1;(e&1<<s||a&1<<s||null==o)&&(o=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);const l=r[s];return o<0&&(o+=l),o=F.qE(0,o,l-1),o}function Ut(e,t,n,r,s,a){let o=t[s];const i=n[s]||1;(e&1<<s||a&1<<s||null==o)&&(o=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);const l=r[s];return o<0&&(o+=l),o=i>0?F.qE(0,o,l):F.qE(-1,o,l-1),o}function jt(e,t,n){let r=n.length;for(let e=0;e<n.length;e++)if(n[e]>1){r=e;break}for(let s=r+1;s<n.length;s++)if(t[s]>0||n[s]!==e[s])return!1;return!0}function qt(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function Ht(e,t,n){let r;const s=e.shape.length;let a;return r="number"==typeof t?[t,...new Array(s-1).fill(0)]:t.length<s?t.concat(new Array(s-t.length).fill(0)):t.slice(),r.forEach((e=>{F.vA(-1!==e,(()=>"slice() does not support negative begin indexing."))})),a=null==n?new Array(s).fill(-1):"number"==typeof n?[n,...new Array(s-1).fill(-1)]:n.length<s?n.concat(new Array(s-n.length).fill(-1)):n,a=a.map(((t,n)=>t>=0?t:(F.vA(-1===t,(()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${n}.`)),e.shape[n]-r[n]))),[r,a]}function Vt(e,t,n,r,s,a,o,i,l){let u;if(null==r?(u=new Array(t.length),u.fill(1)):u=r,null!=o&&o&o-1)throw new Error("Multiple ellipses in slice is not allowed.");let c=!1;const h={dims:u.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:u.slice(),beginMask:s,endMask:a,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:l};for(let e=0;e<h.dims;e++)c&&1<<e&i&&h.numAddAxisAfterEllipsis++,1<<e&o&&(c=!0);c||(h.ellipsisMask|=1<<h.dims,h.dims++);const d={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};!function(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=null!=e.begin,t.endValid=null!=e.end,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let r=0;r<e.dims;r++)if(1<<r&e.ellipsisMask){const s=Math.min(t.dims-(e.dims-r)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<s;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=r}else if(1<<r&e.newAxisMask)t.finalShapeGatherIndices.push(Dt),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);null!=e.begin&&(t.begin[n]=e.begin[r]),null!=e.end&&(t.end[n]=e.end[r]),t.strides[n]=e.strides[r],e.beginMask&1<<r&&(t.beginMask|=1<<n),e.endMask&1<<r&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(Rt),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[n]=r,n++}}(h,d);let p=!0,f=!0,g=!0;const m=[],y=[];for(let t=0;t<e.length;++t){if(0===d.strides[t])throw Error(`strides[${t}] must be non-zero`);const n=!!(d.shrinkAxisMask&1<<t),r=e[t];if(-1===r){m.push(n?1:-1);continue}const s=[d.beginMask&1<<t,d.endMask&1<<t],a=[d.strides[t]>0?0:-1,d.strides[t]>0?r:r-1];if(n&&d.strides[t]<=0)throw Error("only stride 1 allowed on non-range indexing.");g=g&&1===d.strides[t];const o=!!(d.beginMask&1<<t&&d.endMask&1<<t);if(d.beginValid&&d.endValid){if(n){const e=d.begin[t]<0?r+d.begin[t]:d.begin[t];if(d.begin[t]=e,d.end[t]=d.begin[t]+1,e<0||e>=r)throw Error(`slice index ${d.begin[t]} of dimension ${t} out of bounds.`)}else d.begin[t]=Zt(d.begin[t],0,d.strides[t],r,s,a),d.end[t]=Zt(d.end[t],1,d.strides[t],r,s,a);const e=1===d.strides[t]&&0===d.begin[t]&&d.end[t]===r;p=p&&e,f=f&&(0===t&&1===d.strides[t]||e)}else p=p&&1===d.strides[t]&&o,f=f&&(0===t&&1===d.strides[t]||o);let i,l=!1;if(d.beginValid&&d.endValid?(i=d.end[t]-d.begin[t],l=!0):n?(i=1,l=!0):o&&r>=0&&(i=d.strides[t]<0?-r:r,l=!0),l){let e;e=0===i||i<0!=d.strides[t]<0?0:Math.trunc(i/d.strides[t])+(i%d.strides[t]!=0?1:0),m.push(e)}else m.push(-1)}for(let e=0;e<d.finalShapeGatherIndices.length;++e){const t=d.finalShapeGatherIndices[e];t>=0?y.push(m[t]):t===Dt&&y.push(1)}return{finalShapeSparse:y.filter(((e,t)=>d.finalShapeGatherIndices[t]!==Dt)),finalShape:y,isIdentity:p,sliceDim0:f,isSimpleSlice:g,begin:d.begin,end:d.end,strides:d.strides}}function Zt(e,t,n,r,s,a){if(s[t])return n>0?a[t]:a[t+1&1];{const t=e<0?r+e:e;return t<a[0]?a[0]:t>a[1]?a[1]:t}}var Xt=n(30565),Qt=n(83879);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
const Jt=.001,en=.1;function tn(e,t,n){return null==n&&(n=nn()),rn(e,t,((e,t)=>ln(e,t,n)))}function nn(){return 32===f.T2.backend.floatPrecision()?Jt:en}function rn(e,t,n){let r=!0;if(((0,Qt.isTypedArray)(e)||(0,Qt.isTypedArray)(t))&&(r=!1),(0,Qt.isTypedArray)(e)&&(0,Qt.isTypedArray)(t)&&(r=!0),r){const n=e.constructor.name,r=t.constructor.name;if(n!==r)throw new Error(`Arrays are of different type. Actual: ${n}. Expected: ${r}`)}if(Array.isArray(e)&&Array.isArray(t)){const n=(0,ht.MZ)(e),r=(0,ht.MZ)(t);if(!(0,F.r1)(n,r))throw new Error(`Arrays have different shapes. Actual: [${n}]. Expected: [${r}]`)}const s=(0,Qt.isTypedArray)(e)?e:(0,Qt.flatten)(e),a=(0,Qt.isTypedArray)(t)?t:(0,Qt.flatten)(t);if(s.length!==a.length)throw new Error(`Arrays have different lengths actual: ${s.length} vs expected: ${a.length}.\nActual:   ${s}.\nExpected: ${a}.`);for(let e=0;e<a.length;++e){const t=s[e],r=a[e];if(!n(t,r))throw new Error(`Arrays differ: actual[${e}] = ${t}, expected[${e}] = ${r}.\nActual:   ${s}.\nExpected: ${a}.`)}"undefined"!=typeof expect&&expect().nothing()}function sn(e,t){e().then((()=>t.fail()),(()=>t())),"undefined"!=typeof expect&&expect().nothing()}function an(e,t){const n="string"==typeof t||"number"==typeof t||"boolean"==typeof t?[t]:t;return(0,F.Kg)(e)||(0,F.Kg)(e[0])||(0,F.Kg)(t)||(0,F.Kg)(t[0])?rn(e,n,((e,t)=>e==t)):rn(e,t,((e,t)=>ln(e,t,0)))}function on(e,t,n){if(null==n&&(n=nn()),!ln(e,t,n))throw new Error(`Numbers differ: actual === ${e}, expected === ${t}`);"undefined"!=typeof expect&&expect().nothing()}function ln(e,t,n){return!isFinite(e)&&!isFinite(t)||!(isNaN(e)||isNaN(t)||Math.abs(e-t)>n)}function un(e,t,n){for(let r=0;r<e.length;r++)if(e[r]<t||e[r]>n)throw new Error(`Value out of range:${e[r]} low: ${t}, high: ${n}`)}function cn(e,t){const n=new Float32Array(e),r=new Float32Array(t);if(n.length!==r.length)throw new Error(`Expected ArrayBuffer to be of length ${r.length}, but it was ${n.length}`);for(let e=0;e<r.length;e++)if(n[e]!==r[e])throw new Error(`Expected ArrayBuffer value at ${e} to be ${r[e]} but got ${n[e]} instead`)}function hn(e){for(let t=0;t<e.length;t++){const n=e[t];Array.isArray(n)?hn(n):e[t]=(0,Qt.encodeString)(n)}return e}function dn(e){const t=document.createElement("video");return"playsInline"in t&&(t.playsInline=!0),t.muted=!0,t.loop=!0,t.style.position="fixed",t.style.left="0px",t.style.top="0px",t.preload="auto",t.appendChild(e),new Promise((e=>{t.addEventListener("loadeddata",(n=>e(t))),t.load()}))}async function pn(e){await e.play(),"requestVideoFrameCallback"in e&&await new Promise((t=>{e.requestVideoFrameCallback(t)}))}
/** @license See the LICENSE file. */
const fn="4.18.0";
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
class gn{static sgd(e){return new Le(e)}static momentum(e,t,n=!1){return new We(e,t,n)}static rmsprop(e,t=.9,n=0,r=null,s=!1){return new ze(e,t,n,r,s)}static adam(e=.001,t=.9,n=.999,r=null){return new Fe(e,t,n,r)}static adadelta(e=.001,t=.95,n=null){return new _e(e,t,n)}static adamax(e=.002,t=.9,n=.999,r=null,s=0){return new Oe(e,t,n,r,s)}static adagrad(e,t=.1){return new Re(e,t)}}var mn=n(52046),yn=n(33887),bn=n(27084);
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
const wn=gn,vn="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setImmediate?setImmediate:e=>e();function Tn(){return new Promise((e=>vn((()=>e()))))}var kn=n(21078);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
function An(e,t){const n=e[0].length;e.forEach(((e,t)=>{F.vA(e.length===n,(()=>`Error in concat${n}D: rank of tensors[${t}] must be the same as the rank of the rest (${n})`))})),F.vA(t>=0&&t<n,(()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`));const r=e[0];e.forEach(((e,s)=>{for(let a=0;a<n;a++)F.vA(a===t||e[a]===r[a],(()=>`Error in concat${n}D: Shape of tensors[${s}] (${e}) does not match the shape of the rest (${r}) along the non-concatenated axis ${s}.`))}))}function Sn(e,t){const n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}var En,xn=n(47195),$n=n(68646);function Mn(e,t,n){let r=new Array;if(null==n&&null==t)return r;if(null==t)for(;r.length<e+n.length;)r.push(-1);else r=t.slice();if(null==n)return r;if(e+n.length!==r.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${r.length}`);for(let s=1;s<n.length;++s){const a=n[s],o=r[r.length-n.length+s],i=r[o];if(a>=0)if(i>=0){if(i!==a)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${s+e}] = ${a} but shape[${s+e}] = ${i}`)}else r[o]=a}return r}function Nn(e){const t={FIRST_DIM_SIZE:En.FIRST_DIM_SIZE,VALUE_ROWIDS:En.VALUE_ROWIDS,ROW_LENGTHS:En.ROW_LENGTHS,ROW_SPLITS:En.ROW_SPLITS,ROW_LIMITS:En.ROW_LIMITS,ROW_STARTS:En.ROW_STARTS},n=[];for(const r of e){if(!(r in t))break;n.push(t[r])}return n}function In(e){return 0===e.length?0:e[0]===En.FIRST_DIM_SIZE?e.length-1:e.length}function _n(e,t){if(null==e||null==t)return;const n=e.length,r=t.length;if(n>=r)throw new Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${r})`);for(let s=0;s<Math.min(n,r-1);++s){const n=e[s],r=t[s+1];if(n>=0&&r>=0&&1!==n&&n!==r)throw new Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${s-e.length}] = ${n} but ragged tensor input.flatValues.shape[${s-e.length}] = ${r}`)}}!function(e){e[e.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",e[e.VALUE_ROWIDS=1]="VALUE_ROWIDS",e[e.ROW_LENGTHS=2]="ROW_LENGTHS",e[e.ROW_SPLITS=3]="ROW_SPLITS",e[e.ROW_LIMITS=4]="ROW_LIMITS",e[e.ROW_STARTS=5]="ROW_STARTS"}(En||(En={}));
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
const Dn=30;function Rn(e){return e<=Dn?e:(0,F.lK)(e,Math.floor(Math.sqrt(e)))}
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
function Yn(e,t,n){return[n*("number"==typeof e?e:e[0]),t*("number"==typeof e?e:e[1])]}
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
function Bn(e,t,n,r=!0){let s=[];if(r)s=s.concat(t.slice(0)),s.push(e[0]/n),s=s.concat(e.slice(1));else{s=s.concat(e[0]);const n=t.length;for(let r=0;r<n;++r)s=s.concat([e[r+1]/t[r],t[r]]);s=s.concat(e.slice(n+1))}return s}function Fn(e,t,n=!0){const r=[];if(n){r.push(t);for(let n=t+1;n<e;++n)n<=2*t?(r.push(n),r.push(n-(t+1))):r.push(n)}else{const n=[],s=[];for(let r=1;r<e;++r)r>=2*t+1||r%2==1?s.push(r):n.push(r);r.push(...n),r.push(0),r.push(...s)}return r}function Pn(e,t,n,r=!0){const s=[];r?s.push(e[0]/n):s.push(e[0]*n);for(let n=1;n<e.length;++n)n<=t.length?r?s.push(t[n-1]*e[n]):s.push(e[n]/t[n-1]):s.push(e[n]);return s}function Cn(e,t){const n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function On(e,t,n){const r=e.slice(0,1);for(let s=0;s<n;++s)r.push(e[s+1]-t[s][0]-t[s][1]);return r}
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
const Ln=1.7580993408473768,Wn=1.0507009873554805,zn=.3275911,Gn=.254829592,Kn=-.284496736,Un=1.421413741,jn=-1.453152027,qn=1.061405429;var Hn=n(73673);
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
function Vn(e,t){if(e.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);const n=new Float32Array(2*e.length);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function Zn(e){const t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function Xn(e){const t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=0;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function Qn(e){const t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=2;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function Jn(e,t){return{real:e[2*t],imag:e[2*t+1]}}function er(e,t,n,r){e[2*r]=t,e[2*r+1]=n}function tr(e,t){const n=new Float32Array(e/2),r=new Float32Array(e/2);for(let s=0;s<Math.ceil(e/2);s++){const a=(t?2:-2)*Math.PI*(s/e);n[s]=Math.cos(a),r[s]=Math.sin(a)}return{real:n,imag:r}}function nr(e,t,n){const r=(n?2:-2)*Math.PI*(e/t);return{real:Math.cos(r),imag:Math.sin(r)}}
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
const rr="->",sr=/->/g,ar=",",or="...";function ir(e,t){const n=((e=e.replace(/\s/g,"")).length-e.replace(sr,"").length)/rr.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error(`Equation must contain exactly one arrow ("${rr}").`);const[r,s]=e.split(rr);(0,F.vA)(-1===r.indexOf(or),(()=>`The ellipsis notation ("${or}") is not supported yet.`));const a=r.split(ar),o=a.length;if(t!==o)throw new Error(`Expected ${o} input tensors, received ${t}`);if(o>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const i=[];for(let e=0;e<s.length;++e){const t=s[e];if(!a.some((e=>-1!==e.indexOf(t))))throw new Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);-1===i.indexOf(t)&&i.push(t)}for(let e=0;e<r.length;++e){const t=r[e];-1===i.indexOf(t)&&t!==ar&&i.push(t)}const l=new Array(a.length);for(let e=0;e<o;++e){if(new Set(a[e].split("")).size!==a[e].length)throw new Error(`Found duplicate axes in input component ${a[e]}. Support for duplicate axes in input is not implemented yet.`);l[e]=[];for(let t=0;t<a[e].length;++t)l[e].push(i.indexOf(a[e][t]))}const u=i.length,c=[];for(let e=s.length;e<u;++e)c.push(e);return{allDims:i,summedDims:c,idDims:l}}function lr(e,t){let n=new Array(e);n.fill(-1);for(let e=0;e<t.length;++e)n[t[e]]=e;const r=[];for(let t=0;t<e;++t)-1===n[t]&&r.push(t);return n=n.filter((e=>-1!==e)),{permutationIndices:n,expandDims:r}}function ur(e,t,n){const r=new Array(e);for(let e=0;e<n.length;++e){const s=n[e].shape;for(let n=0;n<t[e].length;++n)void 0===r[t[e][n]]?r[t[e][n]]=s[n]:(0,F.vA)(r[t[e][n]]===s[n],(()=>`Expected dimension ${r[t[e][n]]} at axis ${n} of input shaped ${JSON.stringify(s)}, but got dimension ${s[n]}`))}}function cr(e,t){const n=e,r=[];let s=0;0===e.length&&n.push(-1),s=e.length+1;for(let e=0;e<s;++e)r.push([]);const a=[];for(let e=0;e<n.length;++e){const s=dr(t,n[e]);for(const t of s)-1===a.indexOf(t)&&(r[e].push(t),a.push(t))}return{path:n,steps:r}}function hr(e){return e.every(((e,t)=>e===t))}function dr(e,t){const n=[];for(let r=0;r<e.length;++r)0!==e[r].length&&-1===e[r].indexOf(t)&&-1!==t||n.push(r);return n}function pr(e,t,n=0){let r=[];if("number"==typeof t)(0,F.vA)(e.shape[n]%t==0,(()=>"Number of splits must evenly divide the axis.")),r=new Array(t).fill(e.shape[n]/t);else{const s=t.reduce(((e,t)=>(-1===t&&(e+=1),e)),0);(0,F.vA)(s<=1,(()=>"There should be only one negative value in split array."));const a=t.indexOf(-1);if(-1!==a){const r=t.reduce(((e,t)=>t>0?e+t:e));t[a]=e.shape[n]-r}(0,F.vA)(e.shape[n]===t.reduce(((e,t)=>e+t)),(()=>"The sum of sizes must match the size of the axis dimension.")),r=t}return r}
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
function fr(e){return`Received SparseTensor with denseShape[0] = 0 but\n  indices.shape[0] = ${e}`}function gr(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function mr(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}
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
function yr(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function br(e,t){return`size ${e} must be non-negative, not ${t}`}function wr(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function vr(e,t){return`Input to reshape is a SparseTensor with ${(0,F.Ze)(e)}\n  dense values, but the requested shape requires a multiple of ${(0,F.Ze)(t)}. inputShape=${e} outputShape= ${t}`}function Tr(e,t){return`Input to reshape is a tensor with ${(0,F.Ze)(e)} dense values, but the requested shape has ${(0,F.Ze)(t)}. inputShape=${e} outputShape=${t}`}
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
function kr(){return"segment ids must be >= 0"}function Ar(){return"segment ids are not increasing"}function Sr(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function Er(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}
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
function xr(e,t){let n,r=!1;for(e<=Dn?(n=e,r=!0):n=(0,F.lK)(e,Math.floor(Math.sqrt(e)));!r;)n>t||n===e?r=!0:n=(0,F.lK)(e,n+1);return n}function $r(e,t,n){const r=[],s=e.length;for(let a=0;a<s;a++)a!==t?r.push(e[a]):r.push(n);return r}function Mr(e,t,n,r){const s=t.shape.length,a=e.shape.length;if(0!==r&&(r<-s||r>s))throw new Error(`Expect batchDims in the range of [-${s}, ${s}], but got ${r}`);if(r<0&&(r+=s),r>a)throw new Error(`batchDims (${r}) must be less than rank(x) (\n    ${a}).`);if(n<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let n=0;n<r;++n)if(e.shape[n]!==t.shape[n])throw new Error(`x.shape[${n}]: ${e.shape[n]} should be equal to indices.shape[${n}]: ${t.shape[n]}.`);const o=e.shape[n],i=[];let l=1,u=1,c=1;for(let t=0;t<r;++t)i.push(e.shape[t]),l*=e.shape[t];for(let t=r;t<n;t++)i.push(e.shape[t]),u*=e.shape[t];for(let e=r;e<s;e++)i.push(t.shape[e]);for(let t=n+1;t<a;t++)i.push(e.shape[t]),c*=e.shape[t];return{batchSize:l,sliceSize:c,outerSize:u,dimSize:o,outputShape:i}}
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
function Nr(e){try{return e.map((e=>(0,Qt.decodeString)(e)))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function Ir(e){return e.map((e=>(0,Qt.encodeString)(e)))}var _r=n(8360),Dr=n(54411),Rr=n(15149);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
!function(){for(const e of Ge)Me(e)}()},56734:(e,t,n)=>{n.d(t,{D:()=>s});var r=n(83879);class s{static join(e){return new s(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,null==e)return;if(e instanceof Array||(e=[e]),0===(e=e.map((e=>r.isTypedArray(e)?e.buffer:e))).length)return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let n=0;n<e.length;n++){const r=e[n];n!==e.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const s=t+r.byteLength;this.shards.push({buffer:r,start:t,end:s}),t=s}0===this.shards.length&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(0===this.shards.length)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),(t=Math.min(this.byteLength,t))<=e)return new ArrayBuffer(0);const n=this.findShardForByte(e);if(-1===n)throw new Error(`Could not find start shard for byte ${e}`);const r=new ArrayBuffer(t-e),s=new Uint8Array(r);let a=0;for(let r=n;r<this.shards.length;r++){const n=this.shards[r],o=e+a-n.start,i=a,l=Math.min(t,n.end)-n.start,u=new Uint8Array(n.buffer,o,l-o);if(s.set(u,i),a+=u.length,t<n.end)break}return r}findShardForByte(e){if(0===this.shards.length||e<0||e>=this.byteLength)return-1;if(null!=this.bufferUniformSize)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(t){return e<t.start?-1:e>=t.end?1:0}if(0===t(this.shards[this.previousShardIndex]))return this.previousShardIndex;const n=function(e,t){let n=0,r=e.length;for(;n<=r;){const s=Math.floor((r-n)/2)+n,a=t(e[s]);if(0===a)return s;a<0?r=s:n=s+1}return-1}(this.shards,t);return-1===n?-1:(this.previousShardIndex=n,this.previousShardIndex)}}},77084:(e,t,n)=>{n.d(t,{AQ:()=>A,CY:()=>d,Ej:()=>$,P8:()=>S,Rl:()=>x,Xf:()=>N,aG:()=>h,jf:()=>k,l3:()=>T,oR:()=>M,s5:()=>y,zV:()=>E});var r=n(37148),s=n(74027),a=n(45119),o=n(15685),i=n(56734),l=n(35287),u=n(46574);
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
const c=4;async function h(e,t){const n=[],r=[],s=Array.isArray(e)?e.map((e=>e.name)):Object.keys(e);for(let a=0;a<s.length;++a){const o=s[a],i=Array.isArray(e)?e[a].tensor:e[o];if("float32"!==i.dtype&&"int32"!==i.dtype&&"bool"!==i.dtype&&"string"!==i.dtype&&"complex64"!==i.dtype)throw new Error(`Unsupported dtype in weight '${o}': ${i.dtype}`);const l={name:o,shape:i.shape,dtype:i.dtype};if("string"===i.dtype){const e=new Promise((async e=>{const t=await i.bytes(),n=t.reduce(((e,t)=>e+t.length),0)+c*t.length,r=new Uint8Array(n);let s=0;for(let e=0;e<t.length;e++){const n=t[e],a=new Uint8Array(new Uint32Array([n.length]).buffer);r.set(a,s),s+=c,r.set(n,s),s+=n.length}e(r)}));r.push(e)}else r.push(i.data());null!=t&&(l.group=t),n.push(l)}return{data:b(await Promise.all(r)),specs:n}}function d(e,t){const n=new i.D(e),r={};let s=0;for(const e of t){const t=p(e,((e,t)=>n.slice(s+e,s+t)));r[e.name]=g(e,n.slice(s,s+t)),s+=t}return r}function p(e,t){const n=(0,a.Ze)(e.shape);let r;if("quantization"in e){const t=e.quantization;r=o.i[t.dtype]}else{if("string"===e.dtype){let e=0;for(let r=0;r<n;r++)e+=c+new Uint32Array(t(e,e+c))[0];return e}r=o.i[e.dtype]}return n*r}async function f(e,t){const n=(0,a.Ze)(e.shape);let r;if("quantization"in e){const t=e.quantization;r=o.i[t.dtype]}else{if("string"===e.dtype){let e=0;for(let r=0;r<n;r++)e+=c+new Uint32Array(await t(e,e+c))[0];return e}r=o.i[e.dtype]}return n*r}function g(e,t){const n=e.name,i=e.dtype,l=e.shape,u=(0,a.Ze)(l);let h,d=0;if("quantization"in e){const r=e.quantization;if("uint8"===r.dtype||"uint16"===r.dtype){if(!("min"in r)||!("scale"in r))throw new Error(`Weight ${e.name} with quantization ${r.dtype} doesn't have corresponding metadata min and scale.`)}else{if("float16"!==r.dtype)throw new Error(`Weight ${e.name} has unknown quantization dtype ${r.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);if("float32"!==i)throw new Error(`Weight ${e.name} is quantized with ${r.dtype} which only supports weights of type float32 not ${i}.`)}const s=o.i[r.dtype],a="uint8"===r.dtype?new Uint8Array(t):new Uint16Array(t);if("float32"===i)if("uint8"===r.dtype||"uint16"===r.dtype){h=new Float32Array(a.length);for(let e=0;e<a.length;e++){const t=a[e];h[e]=t*r.scale+r.min}}else{if("float16"!==r.dtype)throw new Error(`Unsupported quantization type ${r.dtype} for weight type float32.`);{const e=function(){const e=function(){const e=e=>{let t=e<<13,n=0;for(;!(8388608&t);)n-=8388608,t<<=1;return t&=-8388609,n+=947912704,t|n},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}(),t=function(){const e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}(),n=function(){const e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}();return r=>{const s=new ArrayBuffer(4*r.length),a=new Uint32Array(s);for(let s=0;s<r.length;s++){const o=r[s],i=e[n[o>>10]+(1023&o)]+t[o>>10];a[s]=i}return new Float32Array(s)}}();h=e(a)}}else{if("int32"!==i)throw new Error(`Unsupported dtype in weight '${n}': ${i}`);if("uint8"!==r.dtype&&"uint16"!==r.dtype)throw new Error(`Unsupported quantization type ${r.dtype} for weight type int32.`);h=new Int32Array(a.length);for(let e=0;e<a.length;e++){const t=a[e];h[e]=Math.round(t*r.scale+r.min)}}d+=u*s}else if("string"===i){const n=(0,a.Ze)(e.shape);h=[];for(let e=0;e<n;e++){const e=new Uint32Array(t.slice(d,d+c))[0];d+=c;const n=new Uint8Array(t.slice(d,d+e));h.push(n),d+=e}}else{const e=o.i[i];if("float32"===i)h=new Float32Array(t);else if("int32"===i)h=new Int32Array(t);else{if("bool"!==i){if("complex64"===i){h=new Float32Array(t);const e=new Float32Array(h.length/2),n=new Float32Array(h.length/2);for(let t=0;t<e.length;t++)e[t]=h[2*t],n[t]=h[2*t+1];const a=(0,s.O)(e,l,"float32"),o=(0,s.O)(n,l,"float32"),i=(0,r.f)(a,o);return a.dispose(),o.dispose(),i}throw new Error(`Unsupported dtype in weight '${n}': ${i}`)}h=new Uint8Array(t)}d+=u*e}return(0,s.O)(h,l,i)}async function m(e,t,n){let r=new Uint8Array(t);for(;r.byteLength<n;){const{done:t,value:s}=await e.read();if(t&&null==s){const e=n-r.byteLength;throw new Error(`Reader is done but ${e} bytes are still expected`)}const a=new Uint8Array(r.length+s.byteLength);a.set(r,0),a.set(new Uint8Array(s),r.length),r=a}return r.buffer}async function y(e,t){const n={},r=e.getReader();let s=new ArrayBuffer(0);for(const e of t){const t=await f(e,(async(e,t)=>(s=await m(r,s,t),s.slice(e,t))));s=await m(r,s,t);const o=s.slice(0,t);s=s.slice(t);const i=g(e,o);if(n[e.name]=i,"webgpu"===(0,l.jz)()){const e=(0,l.Hs)();"uploadToGPU"in e&&(0,a.Ze)(i.shape)>=(0,u._K)().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&e.uploadToGPU(i.dataId)}}return n}function b(e){if(null===e)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const n=[];e.forEach((e=>{if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${e.constructor.name}`)}));const r=new Uint8Array(t);let s=0;return n.forEach((e=>{r.set(new Uint8Array(e.buffer),s),s+=e.byteLength})),r.buffer}const w="undefined"!=typeof Buffer&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function v(e){return w?Buffer.byteLength(e,"utf8"):new Blob([e]).size}function T(e){if(w)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let e=0,r=t.length;e<r;e++)n+=String.fromCharCode(t[e]);return btoa(n)}function k(e){if(w){const t=Buffer.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n.set([t.charCodeAt(e)],e);return n.buffer}function A(e){return i.D.join(e)}function S(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);const t=e.split("/");return t[t.length-1]}function E(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return null!=e.signature&&(n.signature=e.signature),null!=e.userDefinedMetadata&&(n.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(n.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(n.initializerSignature=e.initializerSignature),null!=e.trainingConfig&&(n.trainingConfig=e.trainingConfig),n}function x(e,t,n){const r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(null!=e.trainingConfig&&(r.trainingConfig=e.trainingConfig),null!=e.weightsManifest){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=n}return null!=e.signature&&(r.signature=e.signature),null!=e.userDefinedMetadata&&(r.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(r.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(r.initializerSignature=e.initializerSignature),r}async function $(e,t){let n,r;return null!=e.weightsManifest&&([n,r]=await t(e.weightsManifest)),x(e,n,r)}function M(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:v(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:v(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:new i.D(e.weightData).byteLength}}function N(e){const t=[];for(const n of e)t.push(...n.weights);return t}},15685:(e,t,n)=>{n.d(t,{i:()=>r});
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
const r={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8}},15441:(e,t,n)=>{n.d(t,{$dB:()=>D,$jE:()=>nn,$zE:()=>_,A1h:()=>F,A8B:()=>zt,BK4:()=>bn,BLA:()=>Xe,BRl:()=>ae,Blb:()=>Gt,BoJ:()=>jt,BxF:()=>he,C8s:()=>Ut,CQC:()=>ft,Cg$:()=>Ie,CwD:()=>$e,D7i:()=>xt,Ddj:()=>Zt,Dr:()=>wn,DvZ:()=>Ht,E3$:()=>Ae,EkD:()=>i,ElG:()=>pe,EwU:()=>hn,FAs:()=>on,FCQ:()=>St,FSt:()=>u,Fin:()=>Ot,GZp:()=>Qt,HNs:()=>S,Ik2:()=>k,J3C:()=>Ft,JiE:()=>Yt,Jp_:()=>c,KXH:()=>$,L6G:()=>qt,LB5:()=>E,LDN:()=>We,LG0:()=>Ve,LRy:()=>yt,LWX:()=>at,LXA:()=>Re,M6A:()=>Xt,MRQ:()=>G,Mn0:()=>O,MnK:()=>L,N4F:()=>A,Ncv:()=>ht,O4G:()=>me,OAQ:()=>ve,ODT:()=>lt,OMN:()=>o,ORI:()=>V,PH8:()=>a,P_L:()=>Et,Pah:()=>ne,PbM:()=>rn,Q6t:()=>mt,QDP:()=>M,QKF:()=>d,Qgm:()=>te,R23:()=>vt,RMm:()=>fn,RUm:()=>_e,RW8:()=>Ye,RXX:()=>Ge,SDM:()=>nt,SQl:()=>ce,T7M:()=>Tn,TBb:()=>ln,TL8:()=>je,TMz:()=>U,TOR:()=>Mt,ToN:()=>Ce,TyE:()=>f,UcO:()=>Jt,VAI:()=>Le,VCH:()=>b,Vvy:()=>s,WRv:()=>Oe,WT3:()=>Qe,WuN:()=>Wt,X$8:()=>q,X0$:()=>Ee,X4r:()=>It,XQy:()=>kt,XhZ:()=>ye,XmO:()=>J,YAb:()=>en,YVe:()=>Pt,ZgB:()=>de,Zl4:()=>rt,_s9:()=>se,aAr:()=>vn,awo:()=>yn,bCz:()=>ut,bP9:()=>X,cHb:()=>Ue,cS:()=>w,dFH:()=>Lt,dLy:()=>un,dXR:()=>dn,dv8:()=>Te,e0f:()=>st,epO:()=>p,fUj:()=>wt,g5A:()=>qe,gC7:()=>C,gIW:()=>ke,hVg:()=>$t,hgw:()=>At,ho8:()=>y,hql:()=>Bt,huO:()=>bt,i5R:()=>fe,iGz:()=>P,iPs:()=>Se,iW0:()=>tn,iuW:()=>an,jAQ:()=>T,jM4:()=>Pe,jOE:()=>Tt,jfg:()=>B,jgd:()=>Vt,jj_:()=>W,jxD:()=>Z,kdj:()=>dt,l0G:()=>et,l6P:()=>Dt,lLS:()=>be,lNG:()=>He,ljI:()=>r,lxb:()=>m,lzr:()=>we,mH5:()=>gt,mIA:()=>xe,mM$:()=>it,mnI:()=>Me,mxL:()=>ge,nVu:()=>H,nY8:()=>z,nZd:()=>De,oFs:()=>sn,oJ2:()=>pt,ox3:()=>oe,p2J:()=>R,pJc:()=>Nt,pPe:()=>pn,p_m:()=>h,pk0:()=>Q,pnw:()=>mn,pr3:()=>I,pyJ:()=>ct,rFG:()=>Kt,rFm:()=>Y,rGP:()=>ue,rsH:()=>re,sDr:()=>ee,t3d:()=>ze,tG8:()=>Ne,tGH:()=>j,u$b:()=>Rt,u8Z:()=>l,uWl:()=>_t,urI:()=>ot,vI1:()=>Ct,vaV:()=>N,vj7:()=>x,wNW:()=>K,wwC:()=>v,wx0:()=>cn,x7F:()=>Ze,xJ3:()=>gn,xu7:()=>Je,yPW:()=>Fe,ySp:()=>Ke,ybN:()=>ie,ybj:()=>le,ylV:()=>tt,zP9:()=>g,zfU:()=>Be});const r="Abs",s="Acos",a="Acosh",o="Add",i="AddN",l="All",u="Any",c="ArgMax",h="ArgMin",d="Asin",p="Asinh",f="Atan",g="Atanh",m="Atan2",y="AvgPool",b="AvgPoolGrad",w="AvgPool3D",v="AvgPool3DGrad",T="BatchMatMul",k="BatchToSpaceND",A="Bincount",S="BitwiseAnd",E="BroadcastTo",x="BroadcastArgs",$="Cast",M="Ceil",N="ClipByValue",I="Complex",_="ComplexAbs",D="Concat",R="Conv2D",Y="Conv2DBackpropFilter",B="Conv2DBackpropInput",F="Conv3D",P="Conv3DBackpropFilterV2",C="Conv3DBackpropInputV2",O="Cos",L="Cosh",W="Cumprod",z="Cumsum",G="CropAndResize",K="DenseBincount",U="DepthToSpace",j="DepthwiseConv2dNative",q="DepthwiseConv2dNativeBackpropFilter",H="DepthwiseConv2dNativeBackpropInput",V="Diag",Z="Dilation2D",X="Dilation2DBackpropInput",Q="Dilation2DBackpropFilter",J="Draw",ee="RealDiv",te="Einsum",ne="Elu",re="EluGrad",se="Erf",ae="Equal",oe="Exp",ie="ExpandDims",le="Expm1",ue="FFT",ce="Fill",he="FlipLeftRight",de="Floor",pe="FloorDiv",fe="FusedBatchNorm",ge="GatherV2",me="GatherNd",ye="Greater",be="GreaterEqual",we="Identity",ve="IFFT",Te="Imag",ke="IsFinite",Ae="IsInf",Se="IsNan",Ee="LeakyRelu",xe="Less",$e="LessEqual",Me="LinSpace",Ne="Log",Ie="Log1p",_e="LogicalAnd",De="LogicalNot",Re="LogicalOr",Ye="LogicalXor",Be="LogSoftmax",Fe="LowerBound",Pe="LRN",Ce="LRNGrad",Oe="MatrixBandPart",Le="Max",We="Maximum",ze="MaxPool",Ge="MaxPoolGrad",Ke="MaxPool3D",Ue="MaxPool3DGrad",je="MaxPoolWithArgmax",qe="Mean",He="Min",Ve="Minimum",Ze="MirrorPad",Xe="Mod",Qe="Multinomial",Je="Multiply",et="Neg",tt="NotEqual",nt="NonMaxSuppressionV3",rt="NonMaxSuppressionV4",st="NonMaxSuppressionV5",at="OnesLike",ot="OneHot",it="Pack",lt="PadV2",ut="Pool",ct="Pow",ht="Prelu",dt="Prod",pt="RaggedGather",ft="RaggedRange",gt="RaggedTensorToTensor",mt="Range",yt="Real",bt="Reciprocal",wt="Relu",vt="Reshape",Tt="ResizeNearestNeighbor",kt="ResizeNearestNeighborGrad",At="ResizeBilinear",St="ResizeBilinearGrad",Et="Relu6",xt="Reverse",$t="Round",Mt="Rsqrt",Nt="ScatterNd",It="TensorScatterUpdate",_t="SearchSorted",Dt="Select",Rt="Selu",Yt="Slice",Bt="Sin",Ft="Sinh",Pt="Sign",Ct="Sigmoid",Ot="Softplus",Lt="Sqrt",Wt="Sum",zt="SpaceToBatchND",Gt="SplitV",Kt="Softmax",Ut="SparseFillEmptyRows",jt="SparseReshape",qt="SparseSegmentMean",Ht="SparseSegmentSum",Vt="SparseToDense",Zt="SquaredDifference",Xt="Square",Qt="StaticRegexReplace",Jt="StridedSlice",en="StringNGrams",tn="StringSplit",nn="StringToHashBucketFast",rn="Sub",sn="Tan",an="Tanh",on="Tile",ln="TopK",un="Transform",cn="Transpose",hn="Unique",dn="Unpack",pn="UnsortedSegmentSum",fn="UpperBound",gn="ZerosLike",mn="Step",yn="FromPixels",bn="RotateWithOffset",wn="_FusedMatMul",vn="FusedConv2D",Tn="FusedDepthwiseConv2D"},37074:(e,t,n)=>{n.d(t,{Cf:()=>g,Op:()=>c,_5:()=>l,iP:()=>p,kr:()=>d,rY:()=>f,tA:()=>h,vQ:()=>u});var r=n(46574),s=n(41743),a=n(73673);
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
const o=(0,s.m)("kernelRegistry",(()=>new Map)),i=(0,s.m)("gradRegistry",(()=>new Map));function l(e,t){const n=m(e,t);return o.get(n)}function u(e){return i.get(e)}function c(e){const t=o.entries(),n=[];for(;;){const{done:r,value:s}=t.next();if(r)break;const[a,o]=s,[i]=a.split("_");i===e&&n.push(o)}return n}function h(e){const{kernelName:t,backendName:n}=e,r=m(t,n);o.has(r)&&a.i(`The kernel '${t}' for backend '${n}' is already registered`),o.set(r,e)}function d(e){const{kernelName:t}=e;i.has(t)&&(0,r._K)().getBool("DEBUG")&&a.i(`Overriding the gradient for '${t}'`),i.set(t,e)}function p(e,t){const n=m(e,t);if(!o.has(n))throw new Error(`The kernel '${e}' for backend '${t}' is not registered`);o.delete(n)}function f(e){if(!i.has(e))throw new Error(`The gradient '${e}' for backend is not registered`);i.delete(e)}function g(e,t){c(e).forEach((e=>{h(Object.assign({},e,{backendName:t}))}))}function m(e,t){return`${t}_${e}`}},73673:(e,t,n)=>{n.d(t,{R:()=>a,i:()=>s});var r=n(46574);
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
 */function s(...e){(0,r._K)().getBool("IS_TEST")||(0,r._K)().getBool("PROD")||console.warn(...e)}function a(...e){(0,r._K)().getBool("IS_TEST")||(0,r._K)().getBool("PROD")||console.log(...e)}},4888:(e,t,n)=>{n.d(t,{t:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({abs_:
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
function(e){const t=(0,a.YT)(e,"x","abs");if("complex64"===t.dtype){const e={x:t};return r.T2.runKernel(s.$zE,e)}{const e={x:t};return r.T2.runKernel(s.ljI,e)}}})},37523:(e,t,n)=>{n.d(t,{W:()=>i});var r=n(41585),s=n(15441),a=n(30565),o=n(28189);const i=(0,n(70929).op)({add_:
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
function(e,t){let n=(0,o.YT)(e,"a","add"),i=(0,o.YT)(t,"b","add");[n,i]=(0,a.makeTypesMatch)(n,i);const l={a:n,b:i};return r.T2.runKernel(s.OMN,l)}})},21078:(e,t,n)=>{n.d(t,{Em:()=>u,SM:()=>i,WC:()=>l,WH:()=>s,aF:()=>a,fK:()=>h,gx:()=>c,lb:()=>o});var r=n(45119);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function s(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function a(e,t,n){const r=e.length+t.length,s=[];let a=0,o=0;for(let i=0;i<r;i++)-1===n.indexOf(i)?s.push(e[a++]):s.push(t[o++]);return s}function o(e,t){const n=[],r=e.length;for(let s=0;s<r;s++)-1===t.indexOf(s)&&n.push(e[s]);return[n,t.map((t=>e[t]))]}function i(e,t){return a(e,t.map((e=>1)),t)}function l(e,t,n){r.vA(s(t,n),(()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`))}function u(e,t){if(s(e,t))return null;const n=[];for(let r=0;r<t;++r)-1===e.indexOf(r)&&n.push(r);return e.forEach((e=>n.push(e))),n}function c(e){return e.map(((e,t)=>[t,e])).sort(((e,t)=>e[1]-t[1])).map((e=>e[0]))}function h(e,t){const n=[];for(let r=t-e;r<t;++r)n.push(r);return n}},62198:(e,t,n)=>{
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
function r(e,t){const n=e.length,r=[];for(let s=0;s<n;s++){const a=n-1-s,o=e[a]||1;(t[t.length-1-s]||1)>1&&1===o&&r.unshift(a)}return r}function s(e,t){const n=[];for(let r=0;r<t.length;r++){const s=e[e.length-r-1],a=t.length-r-1,o=t[a];(null==s||1===s&&o>1)&&n.unshift(a)}return n}function a(e,t){const n=Math.max(e.length,t.length),r=new Array(n);for(let s=0;s<n;s++){let a=e[e.length-s-1];null==a&&(a=1);let o=t[t.length-s-1];if(null==o&&(o=1),1===a)r[n-s-1]=o;else if(1===o)r[n-s-1]=a;else{if(a!==o){throw Error(`Operands could not be broadcast together with shapes ${e} and ${t}.`)}r[n-s-1]=a}}return r}n.r(t),n.d(t,{assertAndGetBroadcastShape:()=>a,getBroadcastDims:()=>r,getReductionAxes:()=>s})},448:(e,t,n)=>{n.d(t,{r:()=>a});var r=n(50259),s=n(45119);
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function a(e,t="float32",n){return t=t||"float32",s.SA(e),new r.yl(e,t,n)}},29809:(e,t,n)=>{n.d(t,{w:()=>i});var r=n(41585),s=n(15441),a=n(28189),o=n(45119);const i=(0,n(70929).op)({cast_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function(e,t){const n=(0,a.YT)(e,"x","cast");if(!o.xn(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if("string"===t&&"string"!==n.dtype||"string"!==t&&"string"===n.dtype)throw new Error("Only strings can be casted to strings");const i={x:n},l={dtype:t};return r.T2.runKernel(s.KXH,i,l)}})},70125:(e,t,n)=>{n.d(t,{o:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({clone_:
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
function(e){const t={x:(0,a.YT)(e,"x","clone","string_or_numeric")};return r.T2.runKernel(s.lzr,t)}})},37148:(e,t,n)=>{n.d(t,{f:()=>i});var r=n(41585),s=n(15441),a=n(28189),o=n(45119);const i=(0,n(70929).op)({complex_:
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
function(e,t){const n=(0,a.YT)(e,"real","complex"),i=(0,a.YT)(t,"imag","complex");o.O3(n.shape,i.shape,`real and imag shapes, ${n.shape} and ${i.shape}, must match in call to tf.complex().`);const l={real:n,imag:i};return r.T2.runKernel(s.pr3,l)}})},47195:(e,t,n)=>{n.d(t,{$Q:()=>y,Dh:()=>f,E6:()=>a,G0:()=>g,G8:()=>u,YQ:()=>s,l5:()=>o,p$:()=>l,qk:()=>m,s_:()=>b,uf:()=>i});var r=n(45119);
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
 */function s(e,t,n,r,s="NHWC",a){return i(e,[...t,e[3]],n,a,r,null,null,y(s))}function a(e,t,n,r,s,a,o="channelsLast"){const[l,u]=c(t);let h;if("channelsLast"===o)h=[l,u,e[3],e[3]];else{if("channelsFirst"!==o)throw new Error(`Unknown dataFormat ${o}`);h=[l,u,e[1],e[1]]}return i(e,h,n,r,s,a,!1,o)}function o(e,t,n,r,s,a,o="NDHWC"){const[i,u,c]=h(t);let d,p;if("NDHWC"===o)p="channelsLast",d=[i,u,c,e[4],e[4]];else{if("NCDHW"!==o)throw new Error(`Unknown dataFormat ${o}`);p="channelsFirst",d=[i,u,c,e[1],e[1]]}return l(e,d,n,r,s,!1,p,a)}function i(e,t,n,r,s,a,o=!1,i="channelsLast"){let[l,h,f,g]=[-1,-1,-1,-1];if("channelsLast"===i)[l,h,f,g]=e;else{if("channelsFirst"!==i)throw new Error(`Unknown dataFormat ${i}`);[l,g,h,f]=e}const[m,y,,b]=t,[w,v]=c(n),[T,k]=c(r),A=d(m,T),S=d(y,k),{padInfo:E,outHeight:x,outWidth:$}=function(e,t,n,r,s,a,o,i,l){let c,h,d;if("number"==typeof e){c={top:e,bottom:e,left:e,right:e,type:0===e?"VALID":"NUMBER"};const s=function(e,t,n,r,s){null==r&&(r=u(e,t,n));const a=e[0],o=e[1],i=p((a-t+2*r)/n+1,s),l=p((o-t+2*r)/n+1,s);return[i,l]}([t,n],a,r,e,i);h=s[0],d=s[1]}else if("same"===e){h=Math.ceil(t/r),d=Math.ceil(n/s);const e=Math.max(0,(h-1)*r+a-t),i=Math.max(0,(d-1)*s+o-n),l=Math.floor(e/2),u=e-l,p=Math.floor(i/2);c={top:l,bottom:u,left:p,right:i-p,type:"SAME"}}else if("valid"===e)c={top:0,bottom:0,left:0,right:0,type:"VALID"},h=Math.ceil((t-a+1)/r),d=Math.ceil((n-o+1)/s);else{if("object"!=typeof e)throw Error(`Unknown padding parameter: ${e}`);{const u="channelsLast"===l?e[1][0]:e[2][0],f="channelsLast"===l?e[1][1]:e[2][1],g="channelsLast"===l?e[2][0]:e[3][0],m="channelsLast"===l?e[2][1]:e[3][1];c={top:u,bottom:f,left:g,right:m,type:0===u&&0===f&&0===g&&0===m?"VALID":"EXPLICIT"},h=p((t-a+u+f)/r+1,i),d=p((n-o+g+m)/s+1,i)}}return{padInfo:c,outHeight:h,outWidth:d}}(s,h,f,w,v,A,S,a,i),M=o?b*g:b;let N;return"channelsFirst"===i?N=[l,M,x,$]:"channelsLast"===i&&(N=[l,x,$,M]),{batchSize:l,dataFormat:i,inHeight:h,inWidth:f,inChannels:g,outHeight:x,outWidth:$,outChannels:M,padInfo:E,strideHeight:w,strideWidth:v,filterHeight:m,filterWidth:y,effectiveFilterHeight:A,effectiveFilterWidth:S,dilationHeight:T,dilationWidth:k,inShape:e,outShape:N,filterShape:t}}function l(e,t,n,r,s,a=!1,o="channelsLast",i){let[l,c,f,g,m]=[-1,-1,-1,-1,-1];if("channelsLast"===o)[l,c,f,g,m]=e;else{if("channelsFirst"!==o)throw new Error(`Unknown dataFormat ${o}`);[l,m,c,f,g]=e}const[y,b,w,,v]=t,[T,k,A]=h(n),[S,E,x]=h(r),$=d(y,S),M=d(b,E),N=d(w,x),{padInfo:I,outDepth:_,outHeight:D,outWidth:R}=function(e,t,n,r,s,a,o,i,l,c,h){let d,f,g,m;"valid"===e&&(e=0);if("number"==typeof e){d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:0===e?"VALID":"NUMBER"};const y=function(e,t,n,r,s,a){null==s&&(s=u(e,t[0],r[0]));const o=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*s>=t[n]&&(o[n]=p((e[n]-t[n]+2*s)/r[n]+1,a));return o}([t,n,r,1],[i,l,c],1,[s,a,o],e,h);f=y[0],g=y[1],m=y[2]}else{if("same"!==e)throw Error(`Unknown padding parameter: ${e}`);{f=Math.ceil(t/s),g=Math.ceil(n/a),m=Math.ceil(r/o);const e=(f-1)*s+i-t,u=(g-1)*a+l-n,h=(m-1)*o+c-r,p=Math.floor(e/2),y=e-p,b=Math.floor(u/2),w=u-b,v=Math.floor(h/2);d={top:b,bottom:w,left:v,right:h-v,front:p,back:y,type:"SAME"}}}return{padInfo:d,outDepth:f,outHeight:g,outWidth:m}}(s,c,f,g,T,k,A,$,M,N,i),Y=a?v*m:v;let B;return"channelsFirst"===o?B=[l,Y,_,D,R]:"channelsLast"===o&&(B=[l,_,D,R,Y]),{batchSize:l,dataFormat:o,inDepth:c,inHeight:f,inWidth:g,inChannels:m,outDepth:_,outHeight:D,outWidth:R,outChannels:Y,padInfo:I,strideDepth:T,strideHeight:k,strideWidth:A,filterDepth:y,filterHeight:b,filterWidth:w,effectiveFilterDepth:$,effectiveFilterHeight:M,effectiveFilterWidth:N,dilationDepth:S,dilationHeight:E,dilationWidth:x,inShape:e,outShape:B,filterShape:t}}function u(e,t,n,r=1){const s=d(t,r);return Math.floor((e[0]*(n-1)-n+s)/2)}function c(e){return"number"==typeof e?[e,e,e]:2===e.length?[e[0],e[1],1]:e}function h(e){return"number"==typeof e?[e,e,e]:e}function d(e,t){return t<=1?e:e+(e-1)*(t-1)}function p(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function f(e){const[t,n,r]=c(e);return 1===t&&1===n&&1===r}function g(e,t){return f(e)||f(t)}function m(e){return c(e).every((e=>e>0))}function y(e){if("NHWC"===e)return"channelsLast";if("NCHW"===e)return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function b(e,t,n){if(null!=n){if("string"==typeof t)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if("number"==typeof t)r.vA(r.E6(t),(()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`));else{if("object"!=typeof t)throw Error(`Error in ${e}: Unknown padding parameter: ${t}`);t.forEach((t=>{t.forEach((t=>{r.vA(r.E6(t),(()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`))}))}))}}}},89359:(e,t,n)=>{n.d(t,{y:()=>l});var r=n(41585),s=n(15441),a=n(30565),o=n(28189),i=n(88991);const l=(0,n(70929).op)({div_:
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
function(e,t){let n=(0,o.YT)(e,"a","div"),l=(0,o.YT)(t,"b","div");if([n,l]=(0,a.makeTypesMatch)(n,l),"int32"===n.dtype&&"int32"===l.dtype)return(0,i.w)(n,l);const u={a:n,b:l};return r.T2.runKernel(s.sDr,u,{})}})},83416:(e,t,n)=>{n.d(t,{P:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({elu_:
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
function(e){const t={x:(0,a.YT)(e,"x","elu","float32")};return r.T2.runKernel(s.Pah,t)}})},96111:(e,t,n)=>{n.d(t,{G:()=>o});var r=n(41585),s=n(15441),a=n(45119);
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
function o(e,t,n){(0,a.SA)(e);const o={shape:e,value:t,dtype:n=n||(0,a.X$)(t)};return r.T2.runKernel(s.SQl,{},o)}},88991:(e,t,n)=>{n.d(t,{w:()=>i});var r=n(41585),s=n(15441),a=n(30565),o=n(28189);const i=(0,n(70929).op)({floorDiv_:
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
function(e,t){let n=(0,o.YT)(e,"a","floorDiv"),i=(0,o.YT)(t,"b","floorDiv");[n,i]=(0,a.makeTypesMatch)(n,i);const l={a:n,b:i};return r.T2.runKernel(s.ElG,l)}})},68646:(e,t,n)=>{n.d(t,{Do:()=>g,XB:()=>f,f2:()=>m,zE:()=>y});var r=n(62198),s=n(83416),a=n(66919),o=n(9258),i=n(64394),l=n(90112),u=n(83732),c=n(62302),h=n(28968),d=n(10700),p=n(83791);
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
function f(e,t,n){if(null==n||"linear"===n)return e;if("relu"===n)return(0,o.l)(e,(0,d.P)(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function g(e,t){let n=t;const s=r.getReductionAxes(e.shape,t.shape);return s.length>0&&(n=(0,p.c)(n,s)),(0,c.t)(n,e.shape)}function m(e,t,n,r){if("linear"===t)return e;if("relu"===t)return(0,l.V)(e);if("elu"===t)return(0,s.P)(e);if("relu6"===t)return(0,u.j)(e);if("prelu"===t)return(0,i.N)(e,n);if("leakyrelu"===t)return(0,a.H)(e,r);if("sigmoid"===t)return(0,h.r)(e);throw new Error(`Unknown fused activation ${t}.`)}const y=(e,t)=>!(e>0)||"linear"===t},35040:(e,t,n)=>{n.d(t,{n:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({imag_:
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
function(e){const t={input:(0,a.YT)(e,"input","imag")};return r.T2.runKernel(s.dv8,t)}})},66919:(e,t,n)=>{n.d(t,{H:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({leakyRelu_:
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
function(e,t=.2){const n={x:(0,a.YT)(e,"x","leakyRelu")},o={alpha:t};return r.T2.runKernel(s.X0$,n,o)}})},27084:(e,t,n)=>{
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
var r;n.d(t,{i:()=>r}),function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"}(r||(r={}))},65703:(e,t,n)=>{n.d(t,{N:()=>i});var r=n(41585),s=n(15441),a=n(30565),o=n(28189);const i=(0,n(70929).op)({matMul_:
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
function(e,t,n=!1,i=!1){let l=(0,o.YT)(e,"a","matMul"),u=(0,o.YT)(t,"b","matMul");[l,u]=(0,a.makeTypesMatch)(l,u);const c={a:l,b:u},h={transposeA:n,transposeB:i};return r.T2.runKernel(s.jAQ,c,h)}})},30178:(e,t,n)=>{n.d(t,{P:()=>u});var r=n(41585),s=n(15441),a=n(30565),o=n(28189),i=n(62198),l=n(29809);const u=(0,n(70929).op)({maximum_:
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
function(e,t){let n=(0,o.YT)(e,"a","maximum"),u=(0,o.YT)(t,"b","maximum");[n,u]=(0,a.makeTypesMatch)(n,u),"bool"===n.dtype&&(n=(0,l.w)(n,"int32"),u=(0,l.w)(u,"int32")),(0,i.assertAndGetBroadcastShape)(n.shape,u.shape);const c={a:n,b:u};return r.T2.runKernel(s.LDN,c)}})},9258:(e,t,n)=>{n.d(t,{l:()=>i});var r=n(41585),s=n(15441),a=n(30565),o=n(28189);const i=(0,n(70929).op)({mul_:
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
function(e,t){let n=(0,o.YT)(e,"a","mul"),i=(0,o.YT)(t,"b","mul");[n,i]=(0,a.makeTypesMatch)(n,i);const l={a:n,b:i};return r.T2.runKernel(s.xu7,l)}})},96522:(e,t,n)=>{n.d(t,{H:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({neg_:
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
function(e){const t={x:(0,a.YT)(e,"x","neg")};return r.T2.runKernel(s.l0G,t)}})},11760:(e,t,n)=>{n.d(t,{M:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({oneHot_:
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
function(e,t,n=1,o=0,i="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const l={indices:(0,a.YT)(e,"indices","oneHot","int32")},u={dtype:i,depth:t,onValue:n,offValue:o};return r.T2.runKernel(s.urI,l,u)}})},70929:(e,t,n)=>{n.d(t,{B:()=>a,op:()=>o});var r=n(41585),s=n(45119);
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
const a="__op";function o(e){const t=Object.keys(e);if(1!==t.length)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const o=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n+=a;const i=(...e)=>{r.T2.startScope(n);try{const t=o(...e);return(0,s.yL)(t)&&console.error("Cannot return a Promise inside of tidy."),r.T2.endScope(t),t}catch(e){throw r.T2.endScope(null),e}};return Object.defineProperty(i,"name",{value:n,configurable:!0}),i}},33887:(e,t,n)=>{n.d(t,{BTT:()=>l.B,tnl:()=>s.t,HQu:()=>u,FqL:()=>c,WQq:()=>h.W,QiD:()=>p,Q7R:()=>f,bzn:()=>g,FLi:()=>m,XRg:()=>y,qRo:()=>b,yHs:()=>w,rYl:()=>v,FPz:()=>k,rfv:()=>A,$jT:()=>$,sub:()=>M,lZX:()=>F,$v7:()=>C,BFc:()=>O,kSi:()=>L,T5N:()=>W,GTe:()=>P,HbZ:()=>z,vjT:()=>G,ftb:()=>lr,ROE:()=>K,hOW:()=>U,ra8:()=>j.r,wgE:()=>S.w,mkO:()=>q,zQh:()=>V,o8B:()=>N.o,faB:()=>Z.f,xWs:()=>I,I1m:()=>X,RPU:()=>Q,O5O:()=>J,P1l:()=>ee,kA9:()=>ne,Xtf:()=>te,wX9:()=>se,IPL:()=>ae,jIJ:()=>ie,gnS:()=>le,yIG:()=>ue,_jP:()=>mr,Lp0:()=>ce,rCv:()=>he,aOp:()=>de,Rj8:()=>pe,Gl3:()=>fe,smy:()=>ge,X7t:()=>me,y4m:()=>ye.y,ek5:()=>ke,Omf:()=>Ae,EZY:()=>fr,_3C:()=>Se,Pqc:()=>Ee.P,FJY:()=>gr,QP2:()=>xe,LCg:()=>we,Y12:()=>$e,p4S:()=>Ce,oNF:()=>Oe,UG6:()=>Le,IYd:()=>We,y5U:()=>Ge,hVP:()=>Dn,GSj:()=>H.G,RIf:()=>Ke,wh_:()=>Ue.w,cZk:()=>r,kgh:()=>je,SY9:()=>pr,rhj:()=>qe,DQN:()=>He,KGM:()=>Rn,ngS:()=>Ve.n,Slp:()=>us,U4u:()=>yr,ggX:()=>Yn,MIs:()=>Ze,EN4:()=>Xe,yrW:()=>Qe,H8d:()=>Je.H,M7h:()=>et,InN:()=>tt,mPL:()=>cs,mT8:()=>nt,Kgs:()=>rt,Rm2:()=>st,Kko:()=>at,nqI:()=>ut,HPB:()=>ht,VZ:()=>dt,n76:()=>pt,NSZ:()=>ft,ztW:()=>gt,rxB:()=>mt,YYh:()=>hs,yzS:()=>wt,NoW:()=>_.N,T9B:()=>Ne,jgi:()=>vt,NYV:()=>Tt,RO:()=>kt,PhQ:()=>At.P,i2o:()=>St,OYQ:()=>Mt,jkA:()=>Ie,BpO:()=>Nt,FFZ:()=>It,ziu:()=>_t,Clk:()=>Dt,CRk:()=>cr,lKK:()=>D.l,YDF:()=>Rt,OjQ:()=>Yt,HZy:()=>it.H,xbf:()=>Pe,Ec:()=>Bt,Mw0:()=>Ft.M,SaS:()=>xt,P61:()=>Pt,op:()=>l.op,X4o:()=>Ct,eVF:()=>Ot,BZs:()=>Lt,grY:()=>Wt,XHu:()=>zt,WLX:()=>Gt,dzn:()=>Ut,n7C:()=>_e.n,NsG:()=>jt.N,yyV:()=>qt.y,_eU:()=>Ht,whe:()=>Vt,iyU:()=>Zt,Q0_:()=>Xt,_9M:()=>Qt,pR9:()=>rn,FE$:()=>sn,m0H:()=>an,YeY:()=>on,HYA:()=>ln,y17:()=>un,xav:()=>cn.x,VOZ:()=>hn,VVh:()=>dn.V,j__:()=>pn.j,tQQ:()=>x.t,BEg:()=>fn,QD2:()=>gn,LMr:()=>mn,I2l:()=>yn,JYU:()=>bn,z8$:()=>Fn,LIG:()=>wn,Z$r:()=>vn,d_2:()=>De.d,NFr:()=>hr,sZg:()=>bt,WfX:()=>Tn,wdz:()=>kn,F12:()=>An,ry7:()=>R.r,_SZ:()=>Sn,vPA:()=>ls,F8e:()=>En,L0l:()=>xn,dik:()=>Y,Q$M:()=>$n,zAd:()=>Mn,wck:()=>Nn,R0O:()=>In,Vs9:()=>_n,lw0:()=>lt,eDJ:()=>Kt,lMo:()=>ds,Zhr:()=>dr,lOn:()=>is,lDo:()=>Bn,RZD:()=>Re.R,EwI:()=>Ye.E,Pbu:()=>Pn,r2V:()=>Cn,t$z:()=>On,PMw:()=>Ln.P,Ym9:()=>Wn,YjP:()=>ps,jbE:()=>ct.j,czq:()=>Be.c,Mlm:()=>zn,ymU:()=>B,OEK:()=>Gn.O,tGX:()=>Un,KtR:()=>jn,$_$:()=>qn.$,g9W:()=>Hn,Lpo:()=>Vn,yxw:()=>Zn,NNh:()=>Qn,Vsq:()=>ze,rfw:()=>Jn,mgz:()=>ur.m,efE:()=>er,AmM:()=>tr,zAU:()=>nr,K$i:()=>rr,rni:()=>sr,bvq:()=>ar,_M9:()=>ve,YJN:()=>ir,Ul9:()=>Et,POl:()=>Te.P});var r={};n.r(r),n.d(r,{conv2d:()=>vr,depthwiseConv2d:()=>Ar,matMul:()=>Sr});var s=n(4888),a=n(41585),o=n(15441),i=n(28189),l=n(70929);const u=(0,l.op)({acos_:
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
function(e){const t={x:(0,i.YT)(e,"x","acos")};return a.T2.runKernel(o.Vvy,t)}});const c=(0,l.op)({acosh_:
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
function(e){const t={x:(0,i.YT)(e,"x","acosh")};return a.T2.runKernel(o.PH8,t)}});var h=n(37523),d=n(45119);const p=(0,l.op)({addN_:
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
function(e){d.vA(Array.isArray(e),(()=>"The argument passed to tf.addN() must be a list of tensors")),d.vA(e.length>=1,(()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`));const t=e.map(((e,t)=>(0,i.YT)(e,`tensors${t}`,"addN"))),n=t[0];t.forEach((e=>{if(e.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")})),t.forEach((e=>{if(!d.r1(e.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")}));const r=t;return a.T2.runKernel(o.EkD,r)}});const f=(0,l.op)({all_:
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
function(e,t=null,n=!1){const r={x:(0,i.YT)(e,"x","all","bool")},s={axis:t,keepDims:n};return a.T2.runKernel(o.u8Z,r,s)}});const g=(0,l.op)({any_:
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
function(e,t=null,n=!1){const r={x:(0,i.YT)(e,"x","any","bool")},s={axis:t,keepDims:n};return a.T2.runKernel(o.FSt,r,s)}});const m=(0,l.op)({argMax_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function(e,t=0){const n={x:(0,i.YT)(e,"x","argMax")},r={axis:t};return a.T2.runKernel(o.Jp_,n,r)}});const y=(0,l.op)({argMin_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function(e,t=0){const n={x:(0,i.YT)(e,"x","argMin")},r={axis:t};return a.T2.runKernel(o.p_m,n,r)}});const b=(0,l.op)({asin_:
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
function(e){const t={x:(0,i.YT)(e,"x","asin")};return a.T2.runKernel(o.QKF,t)}});const w=(0,l.op)({asinh_:
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
function(e){const t={x:(0,i.YT)(e,"x","asinh")};return a.T2.runKernel(o.epO,t)}});const v=(0,l.op)({atan_:
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
function(e){const t={x:(0,i.YT)(e,"x","atan")};return a.T2.runKernel(o.TyE,t)}});var T=n(30565);const k=(0,l.op)({atan2_:
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
function(e,t){let n=(0,i.YT)(e,"a","atan2"),r=(0,i.YT)(t,"b","atan2");[n,r]=(0,T.makeTypesMatch)(n,r);const s={a:n,b:r};return a.T2.runKernel(o.lxb,s)}});const A=(0,l.op)({atanh_:
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
function(e){const t={x:(0,i.YT)(e,"x","atanh")};return a.T2.runKernel(o.zP9,t)}});var S=n(29809),E=n(47195),x=n(62302);const $=(0,l.op)({avgPool_:
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
function(e,t,n,r,s){const l=(0,i.YT)(e,"x","avgPool","float32");d.vA(E.G0(n,1),(()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`));let u=l,c=!1;3===l.rank&&(c=!0,u=(0,x.t)(l,[1,l.shape[0],l.shape[1],l.shape[2]])),d.vA(4===u.rank,(()=>`Error in avgPool: x must be rank 4 but got rank ${u.rank}.`)),E.s_("avgPool",r,s);const h={x:u},p={filterSize:t,strides:n,pad:r,dimRoundingMode:s};let f=a.T2.runKernel(o.ho8,h,p);return f=(0,S.w)(f,l.dtype),c?(0,x.t)(f,[f.shape[1],f.shape[2],f.shape[3]]):f}});const M=(0,l.op)({avgPool3d_:
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
function(e,t,n,r,s,l="NDHWC"){const u=(0,i.YT)(e,"x","avgPool3d","float32");let c=u,h=!1;4===u.rank&&(h=!0,c=(0,x.t)(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),d.vA(5===c.rank,(()=>`Error in avgPool3d: x must be rank 5 but got rank ${c.rank}.`)),d.vA("NDHWC"===l,(()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${l}`)),d.vA("number"==typeof n&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,(()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`)),(0,E.s_)("avgPool3d",r,s);const p={x:c},f={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:l};let g=a.T2.runKernel(o.cS,p,f);return g=(0,S.w)(g,c.dtype),h?(0,x.t)(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}});var N=n(70125);const I=(0,l.op)({concat_:
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
function(e,t=0){(0,d.vA)(e.length>=1,(()=>"Pass at least one tensor to concat"));const n=(0,i.j1)(e,"tensors","concat","string_or_numeric");if("complex64"===n[0].dtype&&n.forEach((e=>{if("complex64"!==e.dtype)throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${e.dtype}. `)})),1===n.length)return(0,N.o)(n[0]);const r=n,s={axis:t};return a.T2.runKernel(o.$dB,r,s)}});var _=n(65703),D=n(9258),R=n(28968);const Y=(0,l.op)({slice_:
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
function(e,t,n){const r=(0,i.YT)(e,"x","slice","string_or_numeric");if(0===r.rank)throw new Error("Slicing scalar is not possible");const s={x:r},l={begin:t,size:n};return a.T2.runKernel(o.JiE,s,l)}});const B=(0,l.op)({tanh_:
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
function(e){const t={x:(0,i.YT)(e,"x","tanh","float32")};return a.T2.runKernel(o.iuW,t)}});const F=(0,l.op)({basicLSTMCell_:
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
function(e,t,n,r,s,a){const o=(0,i.YT)(e,"forgetBias","basicLSTMCell"),l=(0,i.YT)(t,"lstmKernel","basicLSTMCell"),u=(0,i.YT)(n,"lstmBias","basicLSTMCell"),c=(0,i.YT)(r,"data","basicLSTMCell"),d=(0,i.YT)(s,"c","basicLSTMCell"),p=(0,i.YT)(a,"h","basicLSTMCell"),f=I([c,p],1),g=(0,_.N)(f,l),m=(0,h.W)(g,u),y=m.shape[0],b=m.shape[1]/4,w=[y,b],v=Y(m,[0,0],w),T=Y(m,[0,b],w),k=Y(m,[0,2*b],w),A=Y(m,[0,3*b],w),S=(0,h.W)((0,D.l)((0,R.r)(v),B(T)),(0,D.l)(d,(0,R.r)((0,h.W)(o,k))));return[S,(0,D.l)(B(S),(0,R.r)(A))]}});const P=(0,l.op)({batchToSpaceND_:
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
function(e,t,n){const r=(0,i.YT)(e,"x","batchToSpaceND"),s=t.reduce(((e,t)=>e*t));d.vA(r.rank>=1+t.length,(()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`)),d.vA(n.length===t.length,(()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`)),d.vA(r.shape[0]%s==0,(()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${s}`));const l={x:r},u={blockShape:t,crops:n};return a.T2.runKernel(o.Ik2,l,u)}});const C=(0,l.op)({batchNorm_:
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
function(e,t,n,r,s,l){null==l&&(l=.001);const u=(0,i.YT)(e,"x","batchNorm"),c=(0,i.YT)(t,"mean","batchNorm"),h=(0,i.YT)(n,"variance","batchNorm");let p,f;null!=s&&(p=(0,i.YT)(s,"scale","batchNorm")),null!=r&&(f=(0,i.YT)(r,"offset","batchNorm")),d.vA(c.rank===h.rank,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),d.vA(null==f||c.rank===f.rank,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),d.vA(null==p||c.rank===p.rank,(()=>"Batch normalization gradient requires mean and scale to have equal ranks."));const g={x:function(e){let t;return t=0===e.rank||1===e.rank?(0,x.t)(e,[1,1,1,e.size]):2===e.rank?(0,x.t)(e,[1,1,e.shape[0],e.shape[1]]):3===e.rank?(0,x.t)(e,[1,e.shape[0],e.shape[1],e.shape[2]]):e,t}(u),scale:p,offset:f,mean:c,variance:h},m={varianceEpsilon:l},y=a.T2.runKernel(o.i5R,g,m);return(0,x.t)(y,u.shape)}});const O=(0,l.op)({batchNorm2d_:function(e,t,n,r,s,a){const o=(0,i.YT)(e,"x","batchNorm"),l=(0,i.YT)(t,"mean","batchNorm"),u=(0,i.YT)(n,"variance","batchNorm");let c,h;return null!=s&&(c=(0,i.YT)(s,"scale","batchNorm")),null!=r&&(h=(0,i.YT)(r,"offset","batchNorm")),d.vA(2===o.rank,(()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`)),d.vA(2===l.rank||1===l.rank,(()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${l.rank}.`)),d.vA(2===u.rank||1===u.rank,(()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`)),null!=c&&d.vA(2===c.rank||1===c.rank,(()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`)),null!=h&&d.vA(2===h.rank||1===h.rank,(()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${h.rank}.`)),C(o,l,u,h,c,a)}});const L=(0,l.op)({batchNorm3d_:function(e,t,n,r,s,a){const o=(0,i.YT)(e,"x","batchNorm"),l=(0,i.YT)(t,"mean","batchNorm"),u=(0,i.YT)(n,"variance","batchNorm");let c,h;return null!=s&&(c=(0,i.YT)(s,"scale","batchNorm")),null!=r&&(h=(0,i.YT)(r,"offset","batchNorm")),d.vA(3===o.rank,(()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`)),d.vA(3===l.rank||1===l.rank,(()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${l.rank}.`)),d.vA(3===u.rank||1===u.rank,(()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`)),null!=c&&d.vA(3===c.rank||1===c.rank,(()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`)),null!=h&&d.vA(3===h.rank||1===h.rank,(()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${h.rank}.`)),C(o,l,u,h,c,a)}});const W=(0,l.op)({batchNorm4d_:function(e,t,n,r,s,a){const o=(0,i.YT)(e,"x","batchNorm"),l=(0,i.YT)(t,"mean","batchNorm"),u=(0,i.YT)(n,"variance","batchNorm");let c,h;return null!=s&&(c=(0,i.YT)(s,"scale","batchNorm")),null!=r&&(h=(0,i.YT)(r,"offset","batchNorm")),d.vA(4===o.rank,(()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`)),d.vA(4===l.rank||1===l.rank,(()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${l.rank}.`)),d.vA(4===u.rank||1===u.rank,(()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`)),null!=c&&d.vA(4===c.rank||1===c.rank,(()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`)),null!=h&&d.vA(4===h.rank||1===h.rank,(()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${h.rank}.`)),C(o,l,u,h,c,a)}});const z=(0,l.op)({bincount_:
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
function(e,t,n){const r=(0,i.YT)(e,"x","bincount"),s=(0,i.YT)(t,"weights","bincount");d.vA("int32"===r.dtype,(()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`)),d.vA(n>=0,(()=>`size must be non-negative, but got ${n}.`)),d.vA(s.size===r.size||0===s.size,(()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`));const l={x:r,weights:s},u={size:n};return a.T2.runKernel(o.N4F,l,u)}});const G=(0,l.op)({bitwiseAnd_:
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
function(e,t){const n=(0,i.YT)(e,"x","bitwiseAnd"),r=(0,i.YT)(t,"y","bitwiseAnd");if(!(0,d.r1)(n.shape,r.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${r.shape}`);if("int32"!==n.dtype||"int32"!==r.dtype)throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${r.dtype}`);const s={a:n,b:r};return a.T2.runKernel(o.HNs,s)}});const K=(0,l.op)({broadcastArgs_:
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
function(e,t){const n=(0,i.YT)(e,"s0","broadcastArgs","int32"),r=(0,i.YT)(t,"s1","broadcastArgs","int32");if(1!==n.rank)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(1!==r.rank)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:n,s1:r};return a.T2.runKernel(o.vj7,s)}});const U=(0,l.op)({broadcastTo_:
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
function(e,t){let n=(0,i.YT)(e,"broadcastTo","x");const r=n.shape;if((0,d.SA)(t),t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const e=n.shape.slice();for(;e.length<t.length;)e.unshift(1);n=(0,x.t)(n,e)}const s=n.shape,l=Array.from(t);for(let e=t.length-1;e>=0;e--)if(s[e]===t[e])l[e]=1;else if(1!==n.shape[e])throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(0===l.map(((e,t)=>e>1?t:-1)).filter((e=>e>=0)).length)return(0,N.o)(n);const u={x:n},c={reps:l};return a.T2.runKernel(o.FAs,u,c)}});var j=n(448);const q=(0,l.op)({ceil_:
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
function(e){const t={x:(0,i.YT)(e,"x","ceil","float32")};return a.T2.runKernel(o.QDP,t)}});var H=n(96111);const V=(0,l.op)({clipByValue_:
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
function(e,t,n){const r=(0,i.YT)(e,"x","clipByValue");if(d.vA(t<=n,(()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`)),t===n)return(0,H.G)(r.shape,t,r.dtype);const s={x:r},l={clipValueMin:t,clipValueMax:n};return a.T2.runKernel(o.vaV,s,l)}});var Z=n(37148);const X=(0,l.op)({concat1d_:function(e){return I(e,0)}});const Q=(0,l.op)({concat2d_:function(e,t){return I(e,t)}});const J=(0,l.op)({concat3d_:function(e,t){return I(e,t)}});const ee=(0,l.op)({concat4d_:function(e,t){return I(e,t)}});const te=(0,l.op)({conv2d_:
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
function(e,t,n,r,s="NHWC",l=[1,1],u){const c=(0,i.YT)(e,"x","conv2d","float32"),h=(0,i.YT)(t,"filter","conv2d","float32");let p=c,f=!1;3===c.rank&&(f=!0,p=(0,x.t)(c,[1,c.shape[0],c.shape[1],c.shape[2]])),d.vA(4===p.rank,(()=>`Error in conv2d: input must be rank 4, but got rank ${p.rank}.`)),d.vA(4===h.rank,(()=>`Error in conv2d: filter must be rank 4, but got rank ${h.rank}.`)),E.s_("conv2d",r,u);const g="NHWC"===s?p.shape[3]:p.shape[1];d.vA(g===h.shape[2],(()=>`Error in conv2d: depth of input (${g}) must match input depth for filter ${h.shape[2]}.`)),d.vA(E.G0(n,l),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${l}'`)),d.vA(E.qk(l),(()=>"Error in conv2D: Dilated rates should be larger than 0.")),d.vA(E.qk(n),(()=>"Error in conv2D: Strides should be larger than 0."));const m={x:p,filter:h},y={strides:n,pad:r,dataFormat:s,dilations:l,dimRoundingMode:u},b=a.T2.runKernel(o.p2J,m,y);return f?(0,x.t)(b,[b.shape[1],b.shape[2],b.shape[3]]):b}});const ne=(0,l.op)({conv1d_:function(e,t,n,r,s="NWC",a=1,o){const l=(0,i.YT)(e,"x","conv1d"),u=(0,i.YT)(t,"filter","conv1d");let c=l,h=!1;2===l.rank&&(h=!0,c=(0,x.t)(l,[1,l.shape[0],l.shape[1]])),d.vA(3===c.rank,(()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`)),d.vA(3===u.rank,(()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`)),E.s_("conv1d",r,o),d.vA(c.shape[2]===u.shape[1],(()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${u.shape[1]}.`)),d.vA(E.G0(n,a),(()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`)),d.vA(E.qk(a),(()=>"Error in conv1D: Dilated rates should be larger than 0.")),d.vA(E.qk(n),(()=>"Error in conv1D: Stride should be larger than 0.")),d.vA("NWC"===s,(()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`));const p=(0,x.t)(u,[1,u.shape[0],u.shape[1],u.shape[2]]),f=(0,x.t)(c,[c.shape[0],1,c.shape[1],c.shape[2]]),g=te(f,p,[1,n],r,"NHWC",[1,a],o);return h?(0,x.t)(g,[g.shape[2],g.shape[3]]):(0,x.t)(g,[g.shape[0],g.shape[2],g.shape[3]])}});const re=(0,l.op)({conv2DBackpropInput_:
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
function(e,t,n,r,s,i="NHWC",l){d.vA(e.length===t.rank,(()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`));let u=e,c=t,h=!1;3===t.rank&&(h=!0,c=(0,x.t)(t,[1,t.shape[0],t.shape[1],t.shape[2]]),u=[1,e[0],e[1],e[2]]),d.vA(4===u.length,(()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${u.length}.`)),d.vA(4===c.rank,(()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`)),d.vA(4===n.rank,(()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`));const p="NHWC"===i?u[3]:u[1],f="NHWC"===i?c.shape[3]:c.shape[1];d.vA(p===n.shape[2],(()=>`Error in conv2dDerInput: depth of input (${p}) must match input depth for filter ${n.shape[2]}.`)),d.vA(f===n.shape[3],(()=>`Error in conv2dDerInput: depth of output (${f}) must match output depth for filter ${n.shape[3]}.`)),E.s_("conv2dDerInput",s,l);const g={dy:c,filter:n},m={strides:r,pad:s,dataFormat:i,dimRoundingMode:l,inputShape:u},y=a.T2.runKernel(o.jfg,g,m);return h?(0,x.t)(y,[y.shape[1],y.shape[2],y.shape[3]]):y}});const se=(0,l.op)({conv2dTranspose_:function(e,t,n,r,s,a){const o=(0,i.YT)(e,"x","conv2dTranspose"),l=(0,i.YT)(t,"filter","conv2dTranspose");return re(n,o,l,r,s,"NHWC",a)}});const ae=(0,l.op)({conv3d_:
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
function(e,t,n,r,s="NDHWC",l=[1,1,1]){const u=(0,i.YT)(e,"x","conv3d"),c=(0,i.YT)(t,"filter","conv3d");let h=u,p=!1;4===u.rank&&(p=!0,h=(0,x.t)(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),d.vA(5===h.rank,(()=>`Error in conv3d: input must be rank 5, but got rank ${h.rank}.`)),d.vA(5===c.rank,(()=>`Error in conv3d: filter must be rank 5, but got rank ${c.rank}.`)),d.vA(h.shape[4]===c.shape[3],(()=>`Error in conv3d: depth of input (${h.shape[4]}) must match input depth for filter ${c.shape[3]}.`)),d.vA((0,E.G0)(n,l),(()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${l}'`)),d.vA("NDHWC"===s,(()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`)),d.vA((0,E.qk)(l),(()=>"Error in conv3D: Dilated rates should be larger than 0.")),d.vA((0,E.qk)(n),(()=>"Error in conv3D: Strides should be larger than 0."));const f={x:h,filter:c},g={strides:n,pad:r,dataFormat:s,dilations:l},m=a.T2.runKernel(o.A1h,f,g);return p?(0,x.t)(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}});const oe=(0,l.op)({conv3DBackpropInput_:
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
function(e,t,n,r,s){d.vA(e.length===t.rank,(()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`));let i=e,l=t,u=!1;4===t.rank&&(u=!0,l=(0,x.t)(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),i=[1,e[0],e[1],e[2],e[3]]);const c=i[4],h=l.shape[4];d.vA(5===i.length,(()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${i.length}.`)),d.vA(5===l.rank,(()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${l.rank}`)),d.vA(5===n.rank,(()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`)),d.vA(c===n.shape[3],(()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[3]}.`)),d.vA(h===n.shape[4],(()=>`Error in conv3dDerInput: depth of output (${h}) must match output depth for filter ${n.shape[4]}.`));const p={dy:l,filter:n},f={pad:s,strides:r,inputShape:i},g=a.T2.runKernel(o.gC7,p,f);return u?(0,x.t)(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}});const ie=(0,l.op)({conv3dTranspose_:function(e,t,n,r,s){const a=(0,i.YT)(e,"x","conv3dTranspose"),o=(0,i.YT)(t,"filter","conv3dTranspose");return oe(n,a,o,r,s)}});const le=(0,l.op)({cos_:
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
function(e){const t={x:(0,i.YT)(e,"x","cos","float32")};return a.T2.runKernel(o.Mn0,t)}});const ue=(0,l.op)({cosh_:
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
function(e){const t={x:(0,i.YT)(e,"x","cosh","float32")};return a.T2.runKernel(o.MnK,t)}});const ce=(0,l.op)({cumprod_:
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t=0,n=!1,r=!1){const s={x:(0,i.YT)(e,"x","cumprod")},l={axis:t,exclusive:n,reverse:r};return a.T2.runKernel(o.jj_,s,l)}});const he=(0,l.op)({cumsum_:
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
function(e,t=0,n=!1,r=!1){const s={x:(0,i.YT)(e,"x","cumsum")},l={axis:t,exclusive:n,reverse:r};return a.T2.runKernel(o.nY8,s,l)}});const de=(0,l.op)({denseBincount_:
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
function(e,t,n,r=!1){const s=(0,i.YT)(e,"x","denseBincount"),l=(0,i.YT)(t,"weights","denseBincount");d.vA("int32"===s.dtype,(()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`)),d.vA(s.rank<=2,(()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`)),d.vA(n>=0,(()=>`size must be non-negative, but got ${n}.`)),d.vA(l.size===s.size||0===l.size,(()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${l.shape}.`));const u={x:s,weights:l},c={size:n,binaryOutput:r};return a.T2.runKernel(o.wNW,u,c)}});const pe=(0,l.op)({depthToSpace_:
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
function(e,t,n="NHWC"){const r=(0,i.YT)(e,"x","depthToSpace","float32"),s="NHWC"===n?r.shape[1]:r.shape[2],l="NHWC"===n?r.shape[2]:r.shape[3],u="NHWC"===n?r.shape[3]:r.shape[1];d.vA(t>1,(()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`)),d.vA(s*t>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${s} and ${t}  for depthToSpace with input shape\n    ${r.shape}`)),d.vA(l*t>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${l} and ${t} for depthToSpace with input shape\n        ${r.shape}`)),d.vA(u%(t*t)==0,(()=>`Dimension size must be evenly divisible by ${t*t} but is ${u} for depthToSpace with input shape ${r.shape}`));const c={x:r},h={blockSize:t,dataFormat:n};return a.T2.runKernel(o.TMz,c,h)}});const fe=(0,l.op)({depthwiseConv2d_:
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
function(e,t,n,r,s="NHWC",l=[1,1],u){const c=(0,i.YT)(e,"x","depthwiseConv2d","float32"),h=(0,i.YT)(t,"filter","depthwiseConv2d","float32");let p=c,f=!1;3===c.rank&&(f=!0,p=(0,x.t)(c,[1,c.shape[0],c.shape[1],c.shape[2]])),d.vA(4===p.rank,(()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${p.rank}.`)),d.vA(4===h.rank,(()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${h.rank}.`));const g="NHWC"===s?p.shape[3]:p.shape[1];d.vA(g===h.shape[2],(()=>`Error in depthwiseConv2d: number of input channels (${g}) must match the inChannels dimension in filter ${h.shape[2]}.`)),E.s_("depthwiseConv2d",r,u);const m={x:p,filter:h},y={strides:n,pad:r,dataFormat:s,dilations:l,dimRoundingMode:u},b=a.T2.runKernel(o.tGH,m,y);return f?(0,x.t)(b,[b.shape[1],b.shape[2],b.shape[3]]):b}});const ge=(0,l.op)({diag_:
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
function(e){const t={x:(0,i.YT)(e,"x","diag")};return a.T2.runKernel(o.ORI,t)}});const me=(0,l.op)({dilation2d_:
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
function(e,t,n,r,s=[1,1],l="NHWC"){const u=(0,i.YT)(e,"x","dilation2d"),c=(0,i.YT)(t,"filter","dilation2d");d.vA(3===u.rank||4===u.rank,(()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${u.rank}.`)),d.vA(3===c.rank,(()=>`Error in dilation2d: filter must be rank 3, but got rank ${c.rank}.`)),d.vA("NHWC"===l,(()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${l}`));let h=u,p=!1;3===u.rank&&(h=(0,x.t)(u,[1,u.shape[0],u.shape[1],u.shape[2]]),p=!0),d.vA(h.shape[3]===c.shape[2],(()=>`Error in dilation2d:  input and filter must have the same depth: ${h.shape[3]} vs ${c.shape[2]}`));const f={x:h,filter:c},g={strides:n,pad:r,dilations:s},m=a.T2.runKernel(o.jxD,f,g);return p?(0,x.t)(m,[m.shape[1],m.shape[2],m.shape[3]]):m}});var ye=n(89359),be=n(62198);const we=(0,l.op)({equal_:
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
function(e,t){let n=(0,i.YT)(e,"a","equal","string_or_numeric"),r=(0,i.YT)(t,"b","equal","string_or_numeric");[n,r]=(0,T.makeTypesMatch)(n,r),(0,be.assertAndGetBroadcastShape)(n.shape,r.shape);const s={a:n,b:r};return a.T2.runKernel(o.BRl,s)}});const ve=(0,l.op)({where_:
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
function(e,t,n){const r=(0,i.YT)(t,"a","where"),s=(0,i.YT)(n,"b","where"),l=(0,i.YT)(e,"condition","where","bool"),u=(0,be.assertAndGetBroadcastShape)((0,be.assertAndGetBroadcastShape)(l.shape,r.shape),s.shape),c={condition:U(l,u),t:U(r,u),e:U(s,u)};return a.T2.runKernel(o.l6P,c)}});var Te=n(55537);const ke=(0,l.op)({divNoNan_:
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
function(e,t){let n=(0,i.YT)(e,"a","div"),r=(0,i.YT)(t,"b","div");[n,r]=(0,T.makeTypesMatch)(n,r);const s=(0,ye.y)(n,r),a=(0,Te.P)(s),o=we(r,a);return ve(o,a,s)}});const Ae=(0,l.op)({dot_:
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
function(e,t){const n=(0,i.YT)(e,"t1","dot"),r=(0,i.YT)(t,"t2","dot");d.vA(!(1!==n.rank&&2!==n.rank||1!==r.rank&&2!==r.rank),(()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`));const s=1===n.rank?n.size:n.shape[1],a=1===r.rank?r.size:r.shape[0];if(d.vA(s===a,(()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${a}.`)),1===n.rank&&1===r.rank){const e=(0,x.t)(n,[1,-1]),t=(0,x.t)(r,[-1,1]),s=(0,_.N)(e,t);return(0,x.t)(s,[])}if(1===n.rank&&2===r.rank){const e=(0,x.t)(n,[1,-1]),t=(0,x.t)(r,[r.shape[0],r.shape[1]]),s=(0,_.N)(e,t);return(0,x.t)(s,[s.size])}if(2===n.rank&&1===r.rank){const e=(0,x.t)(r,[-1,1]),t=(0,_.N)(n,e);return(0,x.t)(t,[t.size])}{const e=(0,x.t)(r,[r.shape[0],r.shape[1]]);return(0,_.N)(n,e)}}});const Se=(0,l.op)({einsum_:
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
function(e,...t){const n=t.map(((e,t)=>(0,i.YT)(e,`tensors${t}`,"einsum"))),r={equation:e};return a.T2.runKernel(o.Qgm,n,r)}});var Ee=n(83416);const xe=(0,l.op)({ensureShape_:
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
function(e,t){const n=(0,i.YT)(e,"x","ensureShape","string_or_numeric");if(!(0,d.e_)(n.shape,t))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${t}`);return e}});const $e=(0,l.op)({erf_:
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
function(e){let t=(0,i.YT)(e,"x","erf");d.vA("int32"===t.dtype||"float32"===t.dtype,(()=>"Input dtype must be `int32` or `float32`.")),"int32"===t.dtype&&(t=(0,S.w)(t,"float32"));const n={x:t};return a.T2.runKernel(o._s9,n)}});var Me=n(21078);const Ne=(0,l.op)({max_:
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
function(e,t=null,n=!1){const r={x:(0,i.YT)(e,"x","max")},s={reductionIndices:t,keepDims:n};return a.T2.runKernel(o.VAI,r,s)}});const Ie=(0,l.op)({min_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function(e,t=null,n=!1){const r={x:(0,i.YT)(e,"x","min")},s={axis:t,keepDims:n};return a.T2.runKernel(o.lNG,r,s)}});var _e=n(98990),De=n(45702),Re=n(79348),Ye=n(45793),Be=n(83791);function Fe(e,t,n=null){if(0===e.rank)return(0,s.t)(e);if(1!==e.rank&&null===n)return Fe((0,x.t)(e,[-1]),t,n);if(1===e.rank||"number"==typeof n||Array.isArray(n)&&1===n.length){if(1===t)return(0,Be.c)((0,s.t)(e),n);if(t===1/0)return Ne((0,s.t)(e),n);if(t===-1/0)return Ie((0,s.t)(e),n);if("euclidean"===t||2===t)return(0,Re.R)((0,Be.c)((0,_e.n)((0,s.t)(e),(0,De.d)(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&2===n.length){if(1===t)return Ne((0,Be.c)((0,s.t)(e),n[0]),n[1]-1);if(t===1/0)return Ne((0,Be.c)((0,s.t)(e),n[1]),n[0]);if(t===-1/0)return Ie((0,Be.c)((0,s.t)(e),n[1]),n[0]);if("fro"===t||"euclidean"===t)return(0,Re.R)((0,Be.c)((0,Ye.E)(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const Pe=(0,l.op)({norm_:
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
function(e,t="euclidean",n=null,r=!1){const s=Fe(e=(0,i.YT)(e,"x","norm"),t,n);let a=s.shape;if(r){const t=(0,d.Y6)(n,e.shape);a=Me.SM(s.shape,t)}return(0,x.t)(s,a)}});const Ce=(0,l.op)({euclideanNorm_:
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
function(e,t=null,n=!1){return Pe(e,"euclidean",t,n)}});const Oe=(0,l.op)({exp_:
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
function(e){const t={x:(0,i.YT)(e,"x","exp")};return a.T2.runKernel(o.ox3,t)}});const Le=(0,l.op)({expandDims_:
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
function(e,t=0){const n=(0,i.YT)(e,"x","expandDims","string_or_numeric");d.vA(t<=n.rank,(()=>"Axis must be <= rank of the tensor"));const r={input:n},s={dim:t};return a.T2.runKernel(o.ybN,r,s)}});const We=(0,l.op)({expm1_:
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
function(e){const t={x:(0,i.YT)(e,"x","expm1")};return a.T2.runKernel(o.ybj,t)}});const ze=(0,l.op)({tile_:
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
function(e,t){const n=(0,i.YT)(e,"x","tile","string_or_numeric");d.vA(n.rank===t.length,(()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`));const r={x:n},s={reps:t};return a.T2.runKernel(o.FAs,r,s)}});const Ge=(0,l.op)({eye_:
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
function(e,t,n,r="float32"){null==t&&(t=e);const s=(0,j.r)([e,t],r),a=e<=t?e:t;for(let e=0;e<a;++e)s.set(1,e,e);const o=(0,x.t)(s.toTensor(),[e,t]);if(null==n)return o;if(1===n.length)return ze(Le(o,0),[n[0],1,1]);if(2===n.length)return ze(Le(Le(o,0),0),[n[0],n[1],1,1]);if(3===n.length)return ze(Le(Le(Le(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}});const Ke=(0,l.op)({floor_:
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
function(e){const t={x:(0,i.YT)(e,"x","floor","float32")};return a.T2.runKernel(o.ZgB,t)}});var Ue=n(88991);const je=(0,l.op)({gather_:
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
function(e,t,n=0,r=0){const s={x:(0,i.YT)(e,"x","gather"),indices:(0,i.YT)(t,"indices","gather","int32")},l={axis:n,batchDims:r};return a.T2.runKernel(o.mxL,s,l)}});const qe=(0,l.op)({greater_:
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
function(e,t){let n=(0,i.YT)(e,"a","greater","string_or_numeric"),r=(0,i.YT)(t,"b","greater","string_or_numeric");[n,r]=(0,T.makeTypesMatch)(n,r),(0,be.assertAndGetBroadcastShape)(n.shape,r.shape);const s={a:n,b:r};return a.T2.runKernel(o.XhZ,s)}});const He=(0,l.op)({greaterEqual_:
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
function(e,t){let n=(0,i.YT)(e,"a","greaterEqual","string_or_numeric"),r=(0,i.YT)(t,"b","greaterEqual","string_or_numeric");[n,r]=(0,T.makeTypesMatch)(n,r),(0,be.assertAndGetBroadcastShape)(n.shape,r.shape);const s={a:n,b:r};return a.T2.runKernel(o.lLS,s)}});var Ve=n(35040);const Ze=(0,l.op)({isFinite_:
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
function(e){const t={x:(0,i.YT)(e,"x","isFinite")};return a.T2.runKernel(o.gIW,t)}});const Xe=(0,l.op)({isInf_:
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
function(e){const t={x:(0,i.YT)(e,"x","isInf")};return a.T2.runKernel(o.E3$,t)}});const Qe=(0,l.op)({isNaN_:
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
function(e){const t={x:(0,i.YT)(e,"x","isNaN")};return a.T2.runKernel(o.iPs,t)}});var Je=n(66919);const et=(0,l.op)({less_:
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
function(e,t){let n=(0,i.YT)(e,"a","less","string_or_numeric"),r=(0,i.YT)(t,"b","less","string_or_numeric");[n,r]=(0,T.makeTypesMatch)(n,r),(0,be.assertAndGetBroadcastShape)(n.shape,r.shape);const s={a:n,b:r};return a.T2.runKernel(o.mIA,s)}});const tt=(0,l.op)({lessEqual_:
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
function(e,t){let n=(0,i.YT)(e,"a","lessEqual","string_or_numeric"),r=(0,i.YT)(t,"b","lessEqual","string_or_numeric");[n,r]=(0,T.makeTypesMatch)(n,r),(0,be.assertAndGetBroadcastShape)(n.shape,r.shape);const s={a:n,b:r};return a.T2.runKernel(o.CwD,s)}});
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
function nt(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:e,stop:t,num:n};return a.T2.runKernel(o.mnI,{},r)}const rt=(0,l.op)({localResponseNormalization_:
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
function(e,t=5,n=1,r=1,s=.5){const l=(0,i.YT)(e,"x","localResponseNormalization");d.vA(4===l.rank||3===l.rank,(()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ${l.rank}.`)),d.vA(d.E6(t),(()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`));let u=l,c=!1;3===l.rank&&(c=!0,u=(0,x.t)(l,[1,l.shape[0],l.shape[1],l.shape[2]]));const h={x:u},p={depthRadius:t,bias:n,alpha:r,beta:s},f=a.T2.runKernel(o.jM4,h,p);return c?(0,x.t)(f,[f.shape[1],f.shape[2],f.shape[3]]):f}});const st=(0,l.op)({log_:
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
function(e){const t={x:(0,i.YT)(e,"x","log","float32")};return a.T2.runKernel(o.tG8,t)}});const at=(0,l.op)({log1p_:
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
function(e){const t={x:(0,i.YT)(e,"x","log1p")};return a.T2.runKernel(o.Cg$,t)}});var ot=n(31830),it=n(96522);const lt=(0,l.op)({softplus_:
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
function(e){const t={x:(0,i.YT)(e,"x","softplus")};return a.T2.runKernel(o.Fin,t)}});const ut=(0,l.op)({logSigmoid_:
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
function(e){const t=(0,i.YT)(e,"x","logSigmoid");return(0,ot._X)((e=>({value:(0,it.H)(lt((0,it.H)(e))),gradFunc:t=>(0,D.l)(t,(0,R.r)((0,it.H)(e)))})))(t)}});var ct=n(77126);const ht=(0,l.op)({logSoftmax_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function(e,t=-1){const n=(0,i.YT)(e,"logits","logSoftmax");if(-1===t&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);const r=(0,ot._X)(((e,n)=>{const r=Ne(e,t,!0),s=(0,ct.j)(e,r),a=(0,ct.j)((0,S.w)(s,"float32"),st((0,Be.c)(Oe(s),t,!0)));n([a]);return{value:a,gradFunc:(e,n)=>{const[r]=n,s=Oe(r);return(0,ct.j)(e,(0,D.l)((0,Be.c)(e,t,!0),s))}}}));return r(n)}});const dt=(0,l.op)({logSumExp_:
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
function(e,t=null,n=!1){const r=(0,i.YT)(e,"x","logSumExp"),s=(0,d.Y6)(t,r.shape),a=Ne(r,s,!0),o=(0,ct.j)(r,a),l=Oe(o),u=(0,Be.c)(l,s),c=st(u),p=(0,h.W)((0,x.t)(a,c.shape),c);if(n){const e=(0,Me.SM)(p.shape,s);return(0,x.t)(p,e)}return p}});const pt=(0,l.op)({logicalAnd_:
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
function(e,t){const n=(0,i.YT)(e,"a","logicalAnd","bool"),r=(0,i.YT)(t,"b","logicalAnd","bool");(0,be.assertAndGetBroadcastShape)(n.shape,r.shape);const s={a:n,b:r};return a.T2.runKernel(o.RUm,s)}});const ft=(0,l.op)({logicalNot_:
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
function(e){const t={x:(0,i.YT)(e,"x","logicalNot","bool")};return a.T2.runKernel(o.nZd,t)}});const gt=(0,l.op)({logicalOr_:
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
function(e,t){const n=(0,i.YT)(e,"a","logicalOr","bool"),r=(0,i.YT)(t,"b","logicalOr","bool");(0,be.assertAndGetBroadcastShape)(n.shape,r.shape);const s={a:n,b:r};return a.T2.runKernel(o.LXA,s)}});const mt=(0,l.op)({logicalXor_:
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
function(e,t){const n=(0,i.YT)(e,"a","logicalXor","bool"),r=(0,i.YT)(t,"b","logicalXor","bool");return(0,be.assertAndGetBroadcastShape)(n.shape,r.shape),pt(gt(e,t),ft(pt(e,t)))}}),yt=2147483648;const bt=(0,l.op)({searchSorted_:function(e,t,n="left"){const r=(0,i.YT)(e,"sortedSequence","searchSorted"),s=(0,i.YT)(t,"values","searchSorted"),l=r.shape[r.shape.length-1],u=s.shape[s.shape.length-1],c=(0,x.t)(r,[-1,l]),h=(0,x.t)(s,[-1,u]);if(c.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(c.shape[0]!==h.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if((0,d.Ze)(h.shape)>=yt)throw new Error("values tensor size must less than 2147483648");if(c.shape[1]>=yt)throw new Error(`trailing dim_size must less than 2147483648 for int32 output type, was ${c.shape[1]}`);const p={sortedSequence:c,values:h},f={side:n};return a.T2.runKernel(o.uWl,p,f)}});
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
function wt(e,t){return bt(e,t,"left")}const vt=(0,l.op)({maxPool_:
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
function(e,t,n,r,s){const l=(0,i.YT)(e,"x","maxPool");let u=l,c=!1;3===l.rank&&(c=!0,u=(0,x.t)(l,[1,l.shape[0],l.shape[1],l.shape[2]])),d.vA(4===u.rank,(()=>`Error in maxPool: input must be rank 4 but got rank ${u.rank}.`)),d.vA(E.G0(n,1),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`)),E.s_("maxPool",r,s);const h={x:u},p={filterSize:t,strides:n,pad:r,dimRoundingMode:s},f=a.T2.runKernel(o.t3d,h,p);return c?(0,x.t)(f,[f.shape[1],f.shape[2],f.shape[3]]):f}});const Tt=(0,l.op)({maxPool3d_:
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
function(e,t=[1,1,1],n,r,s,l="NDHWC"){const u=(0,i.YT)(e,"x","maxPool3d");let c=u,h=!1;4===u.rank&&(h=!0,c=(0,x.t)(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),d.vA(5===c.rank,(()=>`Error in maxPool3d: x must be rank 5 but got rank ${c.rank}.`)),d.vA("NDHWC"===l,(()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${l}`)),(0,E.s_)("maxPool3d",r,s);const p={x:c},f={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:l},g=a.T2.runKernel(o.ySp,p,f);return h?(0,x.t)(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}});const kt=(0,l.op)({maxPoolWithArgmax_:
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
function(e,t,n,r,s=!1){const l={x:(0,i.YT)(e,"x","maxPoolWithArgmax")},u={filterSize:t,strides:n,pad:r,includeBatchInIndex:s},c=a.T2.runKernel(o.TL8,l,u);return{result:c[0],indexes:c[1]}}});var At=n(30178);const St=(0,l.op)({mean_:
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function(e,t=null,n=!1){const r={x:(0,i.YT)(e,"x","mean")},s={axis:t,keepDims:n};return a.T2.runKernel(o.g5A,r,s)}});
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
function Et(e,t="float32"){if((0,d.SA)(e),"complex64"===t){const t=Et(e,"float32"),n=Et(e,"float32");return(0,Z.f)(t,n)}const n=(0,d.Ty)((0,d.Ze)(e),t);return a.T2.makeTensor(n,e,t)}
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
function xt(e,t="float32"){if((0,d.SA)(e),"complex64"===t){const t=xt(e,"float32"),n=Et(e,"float32");return(0,Z.f)(t,n)}const n=(0,d.FZ)((0,d.Ze)(e),t);return a.T2.makeTensor(n,e,t)}var $t=n(50259);
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
function Mt(e,t,{indexing:n="xy"}={}){if("xy"!==n&&"ij"!==n)throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(void 0===e)return[];let r=(0,i.YT)(e,"x","meshgrid",e instanceof $t.qY?e.dtype:"float32");if(void 0===t)return[r];let s=(0,i.YT)(t,"y","meshgrid",t instanceof $t.qY?t.dtype:"float32");const a=(0,d.Ze)(r.shape),o=(0,d.Ze)(s.shape);return"xy"===n?(r=(0,x.t)(r,[1,-1]),s=(0,x.t)(s,[-1,1]),[(0,_.N)(xt([o,1],r.dtype),r),(0,_.N)(s,xt([1,a],s.dtype))]):(r=(0,x.t)(r,[-1,1]),s=(0,x.t)(s,[1,-1]),[(0,_.N)(r,xt([1,o],r.dtype)),(0,_.N)(xt([a,1],s.dtype),s)])}const Nt=(0,l.op)({minimum_:
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
function(e,t){let n=(0,i.YT)(e,"a","minimum"),r=(0,i.YT)(t,"b","minimum");[n,r]=(0,T.makeTypesMatch)(n,r),"bool"===n.dtype&&(n=(0,S.w)(n,"int32"),r=(0,S.w)(r,"int32")),(0,be.assertAndGetBroadcastShape)(n.shape,r.shape);const s={a:n,b:r};return a.T2.runKernel(o.LG0,s)}});const It=(0,l.op)({mirrorPad_:
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
function(e,t,n){d.vA("reflect"===n||"symmetric"===n,(()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`));const r=(0,i.YT)(e,"x","mirrorPad");if(0===r.rank)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");d.vA(t.length===r.rank,(()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`));const s="reflect"===n?1:0;for(let e=0;e<r.rank;e++)d.vA(2===t[e].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),d.vA(t[e][0]>=0&&t[e][0]<=r.shape[e]-s&&t[e][1]>=0&&t[e][1]<=r.shape[e]-s,(()=>`Padding in dimension ${e} cannot be greater than or equal to ${r.shape[e]-s} or less than 0 for input of shape ${r.shape}`));const l={paddings:t,mode:n},u={x:r};return a.T2.runKernel(o.x7F,u,l)}});const _t=(0,l.op)({mod_:
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
function(e,t){let n=(0,i.YT)(e,"a","mod"),r=(0,i.YT)(t,"b","mod");[n,r]=(0,T.makeTypesMatch)(n,r);const s={a:n,b:r};return a.T2.runKernel(o.BLA,s)}});const Dt=(0,l.op)({moments_:
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
function(e,t=null,n=!1){e=(0,i.YT)(e,"x","moments");const r=(0,d.Y6)(t,e.shape),s=St(e,r,n);let a=s.shape;n||(a=(0,Me.SM)(s.shape,r));const o=(0,Ye.E)((0,ct.j)((0,S.w)(e,"float32"),(0,x.t)(s,a)));return{mean:s,variance:St(o,r,n)}}});const Rt=(0,l.op)({multiRNNCell_:function(e,t,n,r){const s=(0,i.YT)(t,"data","multiRNNCell"),a=(0,i.j1)(n,"c","multiRNNCell"),o=(0,i.j1)(r,"h","multiRNNCell");let l=s;const u=[];for(let t=0;t<e.length;t++){const n=e[t](l,a[t],o[t]);u.push(n[0]),u.push(n[1]),l=n[1]}const c=[],h=[];for(let e=0;e<u.length;e+=2)c.push(u[e]),h.push(u[e+1]);return[c,h]}});const Yt=(0,l.op)({multinomial_:
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
function(e,t,n,r=!1){const s=(0,i.YT)(e,"logits","multinomial"),l=s.size,u=s.rank;if(l<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${l}.`);if(u>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${u}`);n=n||Math.random();const c={logits:1===u?(0,x.t)(s,[1,-1]):s},h={numSamples:t,seed:n,normalized:r},d=a.T2.runKernel(o.WT3,c,h);return 1===u?(0,x.t)(d,[d.size]):d}});const Bt=(0,l.op)({notEqual_:
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
function(e,t){let n=(0,i.YT)(e,"a","notEqual","string_or_numeric"),r=(0,i.YT)(t,"b","notEqual","string_or_numeric");[n,r]=(0,T.makeTypesMatch)(n,r),(0,be.assertAndGetBroadcastShape)(n.shape,r.shape);const s={a:n,b:r};return a.T2.runKernel(o.ylV,s)}});var Ft=n(11760);const Pt=(0,l.op)({onesLike_:
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
function(e){const t={x:(0,i.YT)(e,"x","onesLike")};return a.T2.runKernel(o.LWX,t)}});const Ct=(0,l.op)({outerProduct_:function(e,t){const n=(0,i.YT)(e,"v1","outerProduct"),r=(0,i.YT)(t,"v2","outerProduct");d.vA(1===n.rank&&1===r.rank,(()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`));const s=(0,x.t)(n,[-1,1]),a=(0,x.t)(r,[1,-1]);return(0,_.N)(s,a)}});const Ot=(0,l.op)({pad_:
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
function(e,t,n=0){const r=(0,i.YT)(e,"x","pad");if(0===r.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:t,constantValue:n},l={x:r};return a.T2.runKernel(o.ODT,l,s)}});const Lt=(0,l.op)({pad1d_:function(e,t,n=0){return(0,d.vA)(2===t.length,(()=>"Invalid number of paddings. Must be length of 2.")),Ot(e,[t],n)}});const Wt=(0,l.op)({pad2d_:function(e,t,n=0){return(0,d.vA)(2===t.length&&2===t[0].length&&2===t[1].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),Ot(e,t,n)}});const zt=(0,l.op)({pad3d_:function(e,t,n=0){return(0,d.vA)(3===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),Ot(e,t,n)}});const Gt=(0,l.op)({pad4d_:function(e,t,n=0){return(0,d.vA)(4===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length&&2===t[3].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),Ot(e,t,n)}});const Kt=(0,l.op)({spaceToBatchND_:
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
function(e,t,n){const r=(0,i.YT)(e,"x","spaceToBatchND");d.vA(r.rank>=1+t.length,(()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`)),d.vA(n.length===t.length,(()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`)),d.vA(r.shape.reduce(((e,r,s)=>s>0&&s<=t.length?e&&(r+n[s-1][0]+n[s-1][1])%t[s-1]==0:e),!0),(()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`));const s={x:r},l={blockShape:t,paddings:n};return a.T2.runKernel(o.A8B,s,l)}});const Ut=(0,l.op)({pool_:
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
function(e,t,n,r,s,a,o){null==s&&(s=[1,1]),null==a&&(a=1),0===r&&(r="valid");const l=(0,i.YT)(e,"x","maxPool");let u=l,c=!1;3===l.rank&&(c=!0,u=(0,x.t)(l,[1,l.shape[0],l.shape[1],l.shape[2]])),d.vA(E.G0(a,s),(()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${s}'`));const h=E.E6(u.shape,t,a,s,r),p=[h.dilationHeight,h.dilationWidth];let f;f="same"===r?function(e,t){const n=e.map(((e,n)=>e+(e-1)*(t[n]-1))),r=n.map((e=>e-1)),s=r.map((e=>Math.floor(e/2))),a=r.map(((e,t)=>e-s[t]));return r.map(((e,t)=>[s[t],a[t]]))}([h.filterHeight,h.filterWidth],p):[[0,0],[0,0]];const g=1===p[0]&&1===p[1],[m,y]=function(e,t,n){const r=n.map((e=>e[0])),s=n.map((e=>e[1])),a=e.concat(r,s),o=t.map(((e,t)=>(e-a[t]%e)%e)),i=s.map(((e,t)=>e+o[t])),l=t.map(((e,t)=>[r[t],i[t]])),u=t.map(((e,t)=>[0,o[t]]));return[l,u]}([h.inHeight,h.inWidth],p,f),b=g?r:"valid",w=g?u:Kt(u,p,m),v=("avg"===n?()=>$(w,t,a,b,o):()=>vt(w,t,a,b,o))(),T=g?v:P(v,p,y);return c?(0,x.t)(T,[T.shape[1],T.shape[2],T.shape[3]]):T}});var jt=n(64394),qt=n(75295);const Ht=(0,l.op)({prod_:
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
function(e,t=null,n=!1){let r=(0,i.YT)(e,"x","prod");"bool"===r.dtype&&(r=(0,S.w)(r,"int32"));const s={x:r},l={axis:t,keepDims:n};return a.T2.runKernel(o.kdj,s,l)}});const Vt=(0,l.op)({raggedGather_:
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
function(e,t,n,r){const s={paramsNestedSplits:e.map(((e,t)=>(0,i.YT)(e,`tensors${t}`,"raggedGather","int32"))),paramsDenseValues:(0,i.YT)(t,"paramsDenseValues","raggedGather"),indices:(0,i.YT)(n,"indices","raggedGather","int32")},l={outputRaggedRank:r},u=a.T2.runKernel(o.oJ2,s,l);return{outputNestedSplits:u.slice(0,u.length-1),outputDenseValues:u[u.length-1]}}});const Zt=(0,l.op)({raggedRange_:
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
function(e,t,n){const r=(0,i.YT)(e,"starts","raggedRange"),s={starts:r,limits:(0,i.YT)(t,"limits","raggedRange",r.dtype),deltas:(0,i.YT)(n,"deltas","raggedRange",r.dtype)},l=a.T2.runKernel(o.CQC,s);return{rtNestedSplits:l[0],rtDenseValues:l[1]}}});const Xt=(0,l.op)({raggedTensorToTensor_:
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
function(e,t,n,r,s){const l=(0,i.YT)(e,"shape","raggedTensorToTensor","int32"),u=(0,i.YT)(t,"values","raggedTensorToTensor"),c={shape:l,values:u,defaultValue:(0,i.YT)(n,"defaultValue","raggedTensorToTensor",u.dtype),rowPartitionTensors:r.map(((e,t)=>(0,i.YT)(e,`tensors${t}`,"raggedTensorToTensor","int32")))},h={rowPartitionTypes:s};return a.T2.runKernel(o.mH5,c,h)}});const Qt=(0,l.op)({rand_:
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
function(e,t,n){(0,d.SA)(e);const r=(0,d.Ze)(e);let s=null;if(null==n||"float32"===n)s=new Float32Array(r);else if("int32"===n)s=new Int32Array(r);else{if("bool"!==n)throw new Error(`Unknown data type ${n}`);s=new Uint8Array(r)}for(let e=0;e<r;e++)s[e]=t();return a.T2.makeTensor(s,e,n)}});var Jt=n(7391);
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
class en{constructor(e,t,n,r,s){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);const a=s||Math.random();this.random=Jt.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){const e=this.nextVal;return this.nextVal=NaN,e}let e,t,n=!1;for(;!n;){let r,s,a;do{r=2*this.random()-1,s=2*this.random()-1,a=r*r+s*s}while(a>=1||0===a);const o=Math.sqrt(-2*Math.log(a)/a);e=this.mean+this.stdDev*r*o,t=this.mean+this.stdDev*s*o,this.truncated&&!this.isValidTruncated(e)||(n=!0)}return this.truncated&&!this.isValidTruncated(t)||(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return null==this.dtype||"float32"===this.dtype?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class tn{constructor(e,t,n,r){this.alpha=e,this.beta=1/t,this.dtype=n;const s=r||Math.random();this.randu=Jt.alea(s.toString()),this.randn=new en(0,1,n,!1,this.randu()),this.d=e<1?e+2/3:e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,n,r,s,a;for(;;){do{r=this.randn.nextValue(),a=1+this.c*r}while(a<=0);if(a*=a*a,e=r*r,t=1-.331*e*e,n=.5*e+this.d*(1-a+Math.log(a)),s=this.randu(),s<t||Math.log(s)<n)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)}convertValue(e){return"float32"===this.dtype?e:Math.round(e)}}class nn{constructor(e=0,t=1,n,r){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=e,this.range=t-e,this.dtype=n,null==r&&(r=Math.random()),"number"==typeof r&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=Jt.alea(r)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}const rn=(0,l.op)({randomGamma_:
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
function(e,t,n=1,r="float32",s){if((0,d.SA)(e),null==n&&(n=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw new Error(`Unsupported data type ${r}`);const a=new tn(t,n,r,s),o=(0,j.r)(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}});const sn=(0,l.op)({randomNormal_:
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
function(e,t=0,n=1,r,s){if((0,d.SA)(e),null!=r&&"bool"===r)throw new Error(`Unsupported data type ${r}`);const a=new en(t,n,r,!1,s),o=(0,j.r)(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}});const an=(0,l.op)({randomStandardNormal_:
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
function(e,t,n){if(null!=t&&"bool"===t)throw new Error(`Unsupported data type ${t}`);return sn(e,0,1,t,n)}});const on=(0,l.op)({randomUniform_:
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
function(e,t=0,n=1,r="float32",s){(0,d.SA)(e);const a=(0,j.r)(e,r),o=new nn(t,n,null,s);for(let e=0;e<a.values.length;e++)a.values[e]=o.nextValue();return a.toTensor()}});const ln=(0,l.op)({randomUniformInt_:
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
function(e,t,n,r){return on(e,t,n,"int32",r)}});
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
function un(e,t,n=1,r="float32"){if(0===n)throw new Error("Cannot have a step of zero");const s={start:e,stop:t,step:n,dtype:r};return a.T2.runKernel(o.Q6t,{},s)}var cn=n(1902);const hn=(0,l.op)({reciprocal_:
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
function(e){const t={x:(0,i.YT)(e,"x","reciprocal")};return a.T2.runKernel(o.huO,t)}});var dn=n(90112),pn=n(83732);const fn=(0,l.op)({reverse_:
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
function(e,t){const n={x:(0,i.YT)(e,"x","reverse")},r={dims:t};return a.T2.runKernel(o.D7i,n,r)}});const gn=(0,l.op)({reverse1d_:
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
function(e){const t=(0,i.YT)(e,"x","reverse");return d.vA(1===t.rank,(()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`)),fn(t,0)}});const mn=(0,l.op)({reverse2d_:
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
function(e,t){const n=(0,i.YT)(e,"x","reverse");return d.vA(2===n.rank,(()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`)),fn(n,t)}});const yn=(0,l.op)({reverse3d_:
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
function(e,t){const n=(0,i.YT)(e,"x","reverse");return d.vA(3===n.rank,(()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`)),fn(n,t)}});const bn=(0,l.op)({reverse4d_:
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
function(e,t){const n=(0,i.YT)(e,"x","reverse");return d.vA(4===n.rank,(()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`)),fn(n,t)}});const wn=(0,l.op)({round_:
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
function(e){const t={x:(0,i.YT)(e,"x","round")};return a.T2.runKernel(o.hVg,t)}});const vn=(0,l.op)({rsqrt_:
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
function(e){const t={x:(0,i.YT)(e,"x","rsqrt","float32")};return a.T2.runKernel(o.TOR,t)}});const Tn=(0,l.op)({selu_:
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
function(e){const t={x:(0,i.YT)(e,"x","selu")};return a.T2.runKernel(o.u$b,t)}});const kn=(0,l.op)({separableConv2d_:function(e,t,n,r,s,a=[1,1],o="NHWC"){const l=(0,i.YT)(e,"x","separableConv2d"),u=(0,i.YT)(t,"depthwiseFilter","separableConv2d"),c=(0,i.YT)(n,"pointwiseFilter","separableConv2d");let h=l,p=!1;if(3===l.rank&&(p=!0,h=(0,x.t)(l,[1,l.shape[0],l.shape[1],l.shape[2]])),"NCHW"===o)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");d.vA(4===h.rank,(()=>`Error in separableConv2d: input must be rank 4, but got rank ${h.rank}.`)),d.vA(4===u.rank,(()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`)),d.vA(4===c.rank,(()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`)),d.vA(1===c.shape[0],(()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`)),d.vA(1===c.shape[1],(()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`));const f=u.shape[2],g=u.shape[3];d.vA(c.shape[2]===f*g,(()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${f*g}, but got ${c.shape[2]}.`));const m=fe(h,u,r,s,o,a),y=te(m,c,1,"valid",o);return p?(0,x.t)(y,[y.shape[1],y.shape[2],y.shape[3]]):y}});const An=
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
async function(e,t){const n=(0,i.YT)(e,"x","setdiff1d"),r=(0,i.YT)(t,"y","setdiff1d");d.vA(n.dtype===r.dtype,(()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`)),d.vA(1===n.rank,(()=>`x should be 1D tensor, but got x (${n.shape}).`)),d.vA(1===r.rank,(()=>`y should be 1D tensor, but got y (${r.shape}).`));const s=await n.data(),a=await r.data(),o=new Set(a);let l=0;for(let e=0;e<s.length;e++)o.has(s[e])||l++;const u=new $t.yl([l],n.dtype),c=new $t.yl([l],"int32");for(let e=0,t=0;e<s.length;e++)o.has(s[e])||(u.values[t]=s[e],c.values[t]=e,t++);return[u.toTensor(),c.toTensor()]};const Sn=(0,l.op)({sign_:
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
function(e){const t={x:(0,i.YT)(e,"x","sign")};return a.T2.runKernel(o.YVe,t)}});const En=(0,l.op)({sin_:
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
function(e){const t={x:(0,i.YT)(e,"x","sin","float32")};return a.T2.runKernel(o.hql,t)}});const xn=(0,l.op)({sinh_:
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
function(e){const t={x:(0,i.YT)(e,"x","sinh")};return a.T2.runKernel(o.J3C,t)}});const $n=(0,l.op)({slice1d_:
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
function(e,t,n){const r=(0,i.YT)(e,"x","slice1d");return d.vA(1===r.rank,(()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`)),Y(r,[t],[n])}});const Mn=(0,l.op)({slice2d_:
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
function(e,t,n){const r=(0,i.YT)(e,"x","slice2d");return d.vA(2===r.rank,(()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`)),Y(r,t,n)}});const Nn=(0,l.op)({slice3d_:
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
function(e,t,n){const r=(0,i.YT)(e,"x","slice3d");return d.vA(3===r.rank,(()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`)),Y(r,t,n)}});const In=(0,l.op)({slice4d_:
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
function(e,t,n){const r=(0,i.YT)(e,"x","slice4d");return d.vA(4===r.rank,(()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`)),Y(r,t,n)}});const _n=(0,l.op)({softmax_:
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
function(e,t=-1){const n=(0,i.YT)(e,"logits","softmax","float32");if(-1===t&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const r={logits:n},s={dim:t};return a.T2.runKernel(o.rFG,r,s)}});const Dn=(0,l.op)({fft_:
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
function(e){(0,d.vA)("complex64"===e.dtype,(()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`));const t={input:e};return a.T2.runKernel(o.rGP,t)}});const Rn=(0,l.op)({ifft_:
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
function(e){(0,d.vA)("complex64"===e.dtype,(()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`));const t={input:e};return a.T2.runKernel(o.OAQ,t)}});const Yn=(0,l.op)({irfft_:
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
function(e){const t=e.shape[e.shape.length-1],n=e.size/t;let r;if(t<=2){const s=(0,x.t)(e,[n,t]);r=Rn(s)}else{const s=[n,2*(t-1)],a=(0,x.t)((0,cn.x)(e),[n,t]),o=(0,x.t)((0,Ve.n)(e),[n,t]),i=fn(Y(a,[0,1],[n,t-2]),1),l=(0,D.l)(fn(Y(o,[0,1],[n,t-2]),1),(0,De.d)(-1)),u=I([a,i],1),c=I([o,l],1),h=(0,x.t)((0,Z.f)(u,c),[s[0],s[1]]);r=Rn(h)}if(r=(0,cn.x)(r),3===e.rank&&0!==e.shape[0]){const t=r,n=e.shape[0];r=(0,x.t)(r,[n,r.shape[0]/n,r.shape[1]]),t.dispose()}return r}});const Bn=(0,l.op)({split_:
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
function(e,t,n=0){const r={x:(0,i.YT)(e,"x","split")},s={numOrSizeSplits:t,axis:n};return a.T2.runKernel(o.Blb,r,s)}});const Fn=(0,l.op)({rfft_:
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
function(e,t){(0,d.vA)("float32"===e.dtype,(()=>`The dtype for rfft() must be real value but got ${e.dtype}`));let n=e.shape[e.shape.length-1];const r=e.size/n;let s;if(null!=t&&t<n){const r=e.shape.map((e=>0)),a=e.shape.map((e=>e));a[e.shape.length-1]=t,s=Y(e,r,a),n=t}else if(null!=t&&t>n){const r=e.shape.map((e=>e));r[e.shape.length-1]=t-n,s=I([e,Et(r)],e.shape.length-1),n=t}else s=e;const a=(0,Te.P)(s),o=(0,x.t)((0,Z.f)(s,a),[r,n]),i=Dn(o),l=Math.floor(n/2)+1,u=(0,cn.x)(i),c=(0,Ve.n)(i),h=Bn(u,[l,n-l],u.shape.length-1),p=Bn(c,[l,n-l],c.shape.length-1),f=s.shape.slice();return f[s.shape.length-1]=l,(0,x.t)((0,Z.f)(h[0],p[0]),f)}});const Pn=(0,l.op)({squaredDifference_:
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
function(e,t){let n=(0,i.YT)(e,"a","squaredDifference"),r=(0,i.YT)(t,"b","squaredDifference");[n,r]=(0,T.makeTypesMatch)(n,r),(0,be.assertAndGetBroadcastShape)(n.shape,r.shape);const s={a:n,b:r};return a.T2.runKernel(o.Ddj,s,{})}});const Cn=(0,l.op)({squeeze_:
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
function(e,t){const n=(0,i.YT)(e,"x","squeeze","string_or_numeric");return(0,x.t)(n,(0,d.gx)(n.shape,t).newShape)}});const On=(0,l.op)({stack_:
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
function(e,t=0){const n=(0,i.j1)(e,"tensors","stack","string_or_numeric");d.vA(n.length>=1,(()=>"Pass at least one tensor to tf.stack")),n.length>0&&d.vA(t<=n[0].rank,(()=>"Axis must be <= rank of the tensor"));const r=n,s={axis:t};return a.T2.runKernel(o.mM$,r,s)}});var Ln=n(10700);const Wn=(0,l.op)({stridedSlice_:
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
function(e,t,n,r,s=0,l=0,u=0,c=0,h=0){const d={x:(0,i.YT)(e,"x","stridedSlice","string_or_numeric")},p={begin:t,end:n,strides:r,beginMask:s,endMask:l,ellipsisMask:u,newAxisMask:c,shrinkAxisMask:h};return a.T2.runKernel(o.UcO,d,p)}});const zn=(0,l.op)({tan_:
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
function(e){const t={x:(0,i.YT)(e,"x","tan","float32")};return a.T2.runKernel(o.oFs,t)}});var Gn=n(74027),Kn=n(19171);
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
function Un(e,t){(0,d.HO)(e);const n=(0,i.MZ)(e,t);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return(0,Kn.Q)(e,null,n,t)}
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
function jn(e,t,n){if((0,d.HO)(e),null!=t&&2!==t.length)throw new Error("tensor2d() requires shape to have two numbers");const r=(0,i.MZ)(e,n);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return(0,Kn.Q)(e,t,r,n)}var qn=n(42768);
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
function Hn(e,t,n){if((0,d.HO)(e),null!=t&&4!==t.length)throw new Error("tensor4d() requires shape to have four numbers");const r=(0,i.MZ)(e,n);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return(0,Kn.Q)(e,t,r,n)}
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
function Vn(e,t,n){if((0,d.HO)(e),null!=t&&5!==t.length)throw new Error("tensor5d() requires shape to have five numbers");const r=(0,i.MZ)(e,n);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return(0,Kn.Q)(e,t,r,n)}
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
function Zn(e,t,n){if((0,d.HO)(e),null!=t&&6!==t.length)throw new Error("tensor6d() requires shape to have six numbers");const r=(0,i.MZ)(e,n);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||r,(0,Kn.Q)(e,t,r,n)}var Xn=n(26170);const Qn=(0,l.op)({tensorScatterUpdate_:
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
function(e,t,n){const r=(0,i.YT)(e,"tensor","tensorScatterupdate"),s=(0,i.YT)(t,"indices","tensorScatterupdate","int32"),l=(0,i.YT)(n,"updates","tensorScatterupdate");if(Xn.validateInput(l,s,r.shape),r.dtype!==l.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${r.dtype} and ${l.dtype}.`);const u={tensor:r,indices:s,updates:l};return a.T2.runKernel(o.X4r,u,{})}});const Jn=(0,l.op)({topk_:
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
function(e,t=1,n=!0){const r=(0,i.YT)(e,"x","topk");if(0===r.rank)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${t}`);const l={x:r},u={k:t,sorted:n},[c,h]=a.T2.runKernel(o.TBb,l,u);return{values:c,indices:h}}});const er=(0,l.op)({truncatedNormal_:
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
function(e,t=0,n=1,r,s){if((0,d.SA)(e),null!=r&&"bool"===r)throw new Error("Unsupported data type $ { dtype }");const a=new en(t,n,r,!0,s),o=(0,j.r)(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}});const tr=(0,l.op)({unique_:
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
function(e,t=0){const n=(0,i.YT)(e,"x","unique","string_or_numeric");(0,d.vA)(n.rank>0,(()=>"The input tensor must be at least 1D"));const r={x:n},s={axis:t},[l,u]=a.T2.runKernel(o.EwU,r,s);return{values:l,indices:u}}});const nr=(0,l.op)({unsortedSegmentSum_:
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
function(e,t,n){const r=(0,i.YT)(e,"x","unsortedSegmentSum"),s=(0,i.YT)(t,"segmentIds","unsortedSegmentSum","int32");(0,d.vA)((0,d.E6)(n),(()=>"numSegments must be of dtype int"));const l={x:r,segmentIds:s},u={numSegments:n};return a.T2.runKernel(o.pPe,l,u)}});const rr=(0,l.op)({unstack_:
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
function(e,t=0){const n=(0,i.YT)(e,"x","unstack","string_or_numeric");d.vA(t>=-n.shape.length&&t<n.shape.length,(()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`));const r={value:n},s={axis:t};return a.T2.runKernel(o.dXR,r,s)}});
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
function sr(e,t){return bt(e,t,"right")}
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
function ar(e,t=!0,n,r){return a.T2.makeVariable(e,t,n,r)}var or=n(54411);const ir=
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
async function(e){const t=(0,i.YT)(e,"condition","whereAsync","bool"),n=await t.data(),r=(0,or.Y)(t.shape,n);return e!==t&&t.dispose(),r};const lr=
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
async function(e,t,n){const r=(0,i.YT)(e,"tensor","boolMask"),s=(0,i.YT)(t,"mask","boolMask","bool"),a=null==n?0:n,o=s.rank,l=r.shape;d.vA(o>0,(()=>"mask cannot be scalar")),d.O3(l.slice(a,a+o),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let e=a;e<a+o;e++)u*=l[e];const c=l.slice(0,a).concat([u],l.slice(a+o)),h=(0,x.t)(r,c),p=(0,x.t)(s,[-1]),f=await ir(p),g=Cn(f,[1]),m=je(h,g,a);return e!==r&&r.dispose(),t!==s&&s.dispose(),g.dispose(),h.dispose(),p.dispose(),f.dispose(),m};var ur=n(7703);const cr=(0,l.op)({movingAverage_:
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
function(e,t,n,r,s=!0){const a=(0,i.YT)(e,"v","movingAverage"),o=(0,i.YT)(t,"x","movingAverage"),l=(0,i.YT)(n,"decay","movingAverage");(0,T.assertTypesMatch)(a,o),d.vA(d.r1(a.shape,o.shape),(()=>"Shape mismatch in v and x"));const u=(0,De.d)(1),c=(0,ct.j)(u,l);let p=(0,D.l)((0,ct.j)(o,a),c);if(s){d.vA(null!=r,(()=>"When using zeroDebias: true, step is required."));const e=(0,i.YT)(r,"step","movingAverage");p=(0,ye.y)(p,(0,ct.j)(u,(0,_e.n)(l,e)))}return(0,h.W)(a,p)}});const hr=(0,l.op)({scatterND_:
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
function(e,t,n){(0,d.SA)(n);const r=(0,i.YT)(e,"indices","scatterND","int32"),s=(0,i.YT)(t,"updates","scatterND");Xn.validateInput(s,r,n);const l={indices:r,updates:s},u={shape:n};return a.T2.runKernel(o.pJc,l,u)}});const dr=(0,l.op)({sparseToDense_:
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
function(e,t,n,r=0){(0,d.SA)(n);const s=(0,i.YT)(e,"sparseIndices","sparseToDense","int32"),l=(0,i.YT)(t,"sparseValues","sparseToDense","string_or_numeric"),u=(0,i.YT)(r,"defaultValue","sparseToDense",l.dtype);!function(e,t,n,r){if("int32"!==e.dtype)throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const s=e.rank>0?e.shape[0]:1,a=e.rank>1?e.shape[1]:1;if(n.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${a}.`);const o=t.size;if(0!==t.rank&&(1!==t.rank||o!==s))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${s}]`);if(t.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(s,l,n,u);const c={sparseIndices:s,sparseValues:l,defaultValue:u},h={outputShape:n};return a.T2.runKernel(o.jgd,c,h)}});const pr=(0,l.op)({gatherND_:
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
function(e,t){const n=(0,i.YT)(t,"indices","gatherND","int32"),r={params:(0,i.YT)(e,"x","gatherND","string_or_numeric"),indices:n};return a.T2.runKernel(o.O4G,r)}});const fr=(0,l.op)({dropout_:
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
function(e,t,n,r){const s=(0,i.YT)(e,"x","dropout");if(d.vA("float32"===s.dtype,(()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`)),d.vA(t>=0&&t<1,(()=>`rate must be a float in the range [0, 1), but got ${t}.`)),0===t)return e instanceof $t.qY?s.clone():s;const a=
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
function(e,t){if(null==t)return e.shape.slice();if(d.r1(e.shape,t))return t;if(e.shape.length===t.length){const n=[];for(let r=0;r<e.shape.length;r++)null==t[r]&&null!=e.shape[r]?n.push(e.shape[r]):n.push(t[r]);return n}return t}(s,n),o=1-t,l=(0,ye.y)(Ke((0,h.W)(on(a,0,1,"float32",r),o)),o);return(0,D.l)(s,l)}});
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
function gr(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function mr(e,t,n){const r=1-e%2,s=new Float32Array(e);for(let a=0;a<e;++a){const o=2*Math.PI*a/(e+r-1);s[a]=t-n*Math.cos(o)}return Un(s,"float32")}const yr=
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
async function(e,t,n=1){const r=(0,i.YT)(e,"predictions","inTopK"),s=(0,i.YT)(t,"targets","inTopK");(0,d.vA)(r.rank>1,(()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`)),(0,d.vA)(r.rank-1===s.rank,(()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${s.rank}`)),(0,d.O3)(r.shape.slice(0,r.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=r.shape[r.shape.length-1];(0,d.vA)(n>0&&n<=a,(()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${n}`));const o=await r.data(),l=await s.data(),[u,c]=[o.length/a,a],h=(0,d.ce)("bool",u);for(let e=0;e<u;e++){const t=e*c,r=o.subarray(t,t+c),s=[];for(let e=0;e<r.length;e++)s.push({value:r[e],index:e});s.sort(((e,t)=>t.value-e.value)),h[e]=0;for(let t=0;t<n;t++)if(s[t].index===l[e]){h[e]=1;break}}return e!==r&&r.dispose(),t!==s&&s.dispose(),(0,Gn.O)(h,s.shape,"bool")};const br=(0,l.op)({conv2DBackpropFilter_:
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
function(e,t,n,r,s,i="NHWC",l){let u=e;3===e.rank&&(u=(0,x.t)(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;3===c.rank&&(c=(0,x.t)(t,[1,t.shape[0],t.shape[1],t.shape[2]])),d.vA(4===u.rank,(()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${u.shape}.`)),d.vA(4===c.rank,(()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`)),d.vA(4===n.length,(()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`));const h="NHWC"===i?u.shape[3]:u.shape[1],p="NHWC"===i?c.shape[3]:c.shape[1];d.vA(h===n[2],(()=>`Error in conv2dDerFilter: depth of input ${h}) must match input depth in filter (${n[2]}.`)),d.vA(p===n[3],(()=>`Error in conv2dDerFilter: depth of dy (${p}) must match output depth for filter (${n[3]}).`)),E.s_("conv2dDerFilter",s,l);const f={x:u,dy:c},g={strides:r,pad:s,dataFormat:i,dimRoundingMode:l,filterShape:n};return a.T2.runKernel(o.rFm,f,g)}});var wr=n(68646);const vr=(0,l.op)({fusedConv2d_:
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
function({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:l=[1,1],dimRoundingMode:u,bias:c,activation:p="linear",preluActivationWeights:f,leakyreluAlpha:g}){if(p=p||"linear",!1===(0,wr.zE)(a.T2.state.gradientDepth,p)){d.vA("NHWC"===s,(()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`));let a=te(e,t,n,r,s,l,u);return null!=c&&(a=(0,h.W)(a,c)),(0,wr.f2)(a,p,f,g)}const m=(0,i.YT)(e,"x","conv2d","float32"),y=(0,i.YT)(t,"filter","conv2d","float32");let b=m,w=!1;3===m.rank&&(w=!0,b=(0,x.t)(m,[1,m.shape[0],m.shape[1],m.shape[2]])),d.vA(4===b.rank,(()=>`Error in fused conv2d: input must be rank 4, but got rank ${b.rank}.`)),d.vA(4===y.rank,(()=>`Error in fused conv2d: filter must be rank 4, but got rank ${y.rank}.`)),E.s_("fused conv2d",r,u);const v="NHWC"===s?b.shape[3]:b.shape[1];d.vA(y.shape[2]===v,(()=>`Error in conv2d: depth of input (${v}) must match input depth for filter ${y.shape[2]}.`)),d.vA(E.G0(n,l),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${l}'`));const k=E.uf(b.shape,y.shape,n,l,r,u);let A,S;if(null!=c&&(A=(0,i.YT)(c,"bias","fused conv2d"),[A]=(0,T.makeTypesMatch)(A,m),"NHWC"===s?be.assertAndGetBroadcastShape(k.outShape,A.shape):(d.vA(A.shape.length<=1,(()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${A.shape.length}.`)),d.vA(0===A.shape.length||A.shape[0]===k.outChannels||1===A.shape[0],(()=>`Error in fused conv2d: bias shape (${A.shape}) is not compatible with the number of output channels (${k.outChannels})`)))),null!=f){const e=f.shape;if(d.vA(e.length<=1||3===e.length,(()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${e.length}.`)),1===e.length)d.vA(1===e[0]||e[0]===k.outChannels,(()=>`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the number of output channels (${k.outChannels}).`));else if(3===e.length)try{be.assertAndGetBroadcastShape(e,k.outShape)}catch(t){const n=`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the output shape of the conv2d (${k.outShape}).`;throw Error(n)}S=(0,i.YT)(f,"prelu weights","fused conv2d")}const $=(e,t)=>{d.vA("NHWC"===s,(()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`));const[a,o,i,u]=t,c=(0,wr.XB)(e,i,p);d.vA(E.Dh(l),(()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${l}'`));const h=[re(o.shape,c,a,n,r),br(o,c,a.shape,n,r)];if(null!=u){const e=(0,wr.Do)(u,c);h.push(e)}return h},M={x:b,filter:y,bias:A,preluActivationWeights:S},N={strides:n,pad:r,dataFormat:s,dilations:l,dimRoundingMode:u,activation:p,leakyreluAlpha:g};if(null==c){const e=(0,ot._X)(((e,t,n)=>{let r=a.T2.runKernel(o.aAr,M,N);return n([t,e,r]),w&&(r=(0,x.t)(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:$}}));return e(b,y)}{const e=(0,ot._X)(((e,t,n,r)=>{let s=a.T2.runKernel(o.aAr,M,N);return r([t,e,s,n]),w&&(s=(0,x.t)(s,[s.shape[1],s.shape[2],s.shape[3]])),{value:s,gradFunc:$}}));return e(b,y,A)}}});const Tr=(0,l.op)({depthwiseConv2dNativeBackpropFilter_:
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
function(e,t,n,r,s,i=[1,1],l){let u=e;3===e.rank&&(u=(0,x.t)(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;3===c.rank&&(c=(0,x.t)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const h={x:u,dy:c},d={strides:r,pad:s,dimRoundingMode:l,dilations:i,filterShape:n};return a.T2.runKernel(o.X$8,h,d)}});const kr=(0,l.op)({depthwiseConv2dNativeBackpropInput_:
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
function(e,t,n,r,s,i=[1,1],l){let u=t,c=!1;3===t.rank&&(c=!0,u=(0,x.t)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const h={dy:u,filter:n},d={strides:r,pad:s,dimRoundingMode:l,dilations:i,inputShape:e},p=a.T2.runKernel(o.nVu,h,d);return c?(0,x.t)(p,[p.shape[1],p.shape[2],p.shape[3]]):p}});const Ar=(0,l.op)({fusedDepthwiseConv2d_:
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
function({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:l=[1,1],dimRoundingMode:u,bias:c,activation:p="linear",preluActivationWeights:f,leakyreluAlpha:g}){if(!1===(0,wr.zE)(a.T2.state.gradientDepth,p)){let a=fe(e,t,n,r,s,l,u);return null!=c&&(a=(0,h.W)(a,c)),(0,wr.f2)(a,p,f,g)}const m=(0,i.YT)(e,"x","depthwiseConv2d","float32"),y=(0,i.YT)(t,"filter","depthwiseConv2d","float32");let b=m,w=!1;3===m.rank&&(w=!0,b=(0,x.t)(m,[1,m.shape[0],m.shape[1],m.shape[2]])),d.vA(4===b.rank,(()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${b.rank}.`)),d.vA(4===y.rank,(()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${y.rank}.`)),d.vA(b.shape[3]===y.shape[2],(()=>`Error in fused depthwiseConv2d: number of input channels (${b.shape[3]}) must match the inChannels dimension in filter ${y.shape[2]}.`)),null==l&&(l=[1,1]),d.vA(E.G0(n,l),(()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${l}'`)),E.s_("fused depthwiseConv2d",r,u);const v=E.uf(b.shape,y.shape,n,l,r,u,!0);let k,A;null!=c&&(k=(0,i.YT)(c,"bias","fused conv2d"),[k]=(0,T.makeTypesMatch)(k,m),be.assertAndGetBroadcastShape(v.outShape,k.shape)),null!=f&&(A=(0,i.YT)(f,"prelu weights","fused depthwiseConv2d"));const S=(e,t)=>{d.vA(E.Dh(l),(()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${l}'`));const[s,a,o,i]=t,c=(0,wr.XB)(e,o,p),h=kr(a.shape,c,s,n,r,l,u),f=Tr(a,c,s.shape,n,r,l,u);if(null!=i){return[h,f,(0,wr.Do)(k,c)]}return[h,f]},$={x:b,filter:y,bias:k,preluActivationWeights:A},M={strides:n,pad:r,dataFormat:s,dilations:l,dimRoundingMode:u,activation:p,leakyreluAlpha:g};if(null==c){const e=(0,ot._X)(((e,t,n)=>{let r=a.T2.runKernel(o.T7M,$,M);return n([t,e,r]),w&&(r=(0,x.t)(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:S}}));return e(b,y)}{const e=(0,ot._X)(((e,t,n,r)=>{let s=a.T2.runKernel(o.T7M,$,M);return r([t,e,s,n]),w&&(s=(0,x.t)(s,[s.shape[1],s.shape[2],s.shape[3]])),{value:s,gradFunc:S}}));return e(b,y,k)}}});const Sr=(0,l.op)({fusedMatMul_:
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
function({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:s,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c=.2}){if(!1===(0,wr.zE)(a.T2.state.gradientDepth,l)){let a=(0,_.N)(e,t,n,r);return null!=s&&(a=(0,h.W)(a,s)),(0,wr.f2)(a,l,u,c)}let p=(0,i.YT)(e,"a","fused matMul"),f=(0,i.YT)(t,"b","fused matMul");[p,f]=(0,T.makeTypesMatch)(p,f);const g=n?p.shape[p.rank-2]:p.shape[p.rank-1],m=r?f.shape[f.rank-1]:f.shape[f.rank-2],y=n?p.shape[p.rank-1]:p.shape[p.rank-2],b=r?f.shape[f.rank-2]:f.shape[f.rank-1],w=p.shape.slice(0,-2),v=f.shape.slice(0,-2),k=d.Ze(w),A=d.Ze(v);d.vA(g===m,(()=>`Error in fused matMul: inner shapes (${g}) and (${m}) of Tensors with shapes ${p.shape} and ${f.shape} and transposeA=${n} and transposeB=${r} must match.`));const S=be.assertAndGetBroadcastShape(p.shape.slice(0,-2),f.shape.slice(0,-2)).concat([y,b]),E=n?(0,x.t)(p,[k,g,y]):(0,x.t)(p,[k,y,g]),$=r?(0,x.t)(f,[A,b,m]):(0,x.t)(f,[A,m,b]);let M,N;null!=s&&(M=(0,i.YT)(s,"bias","fused matMul"),[M]=(0,T.makeTypesMatch)(M,p),be.assertAndGetBroadcastShape(S,M.shape)),null!=u&&(N=(0,i.YT)(u,"prelu weights","fused matMul"));const I=(e,t)=>{const[a,o,i,u]=t,c=(0,wr.XB)((0,x.t)(e,i.shape),i,l);let h,d;if(n||r?!n&&r?(h=(0,_.N)(c,o,!1,!1),d=(0,_.N)(c,a,!0,!1)):n&&!r?(h=(0,_.N)(o,c,!1,!0),d=(0,_.N)(a,c,!1,!1)):(h=(0,_.N)(o,c,!0,!0),d=(0,_.N)(c,a,!0,!0)):(h=(0,_.N)(c,o,!1,!0),d=(0,_.N)(a,c,!0,!1)),null!=s){return[h,d,(0,wr.Do)(u,c)]}return[h,d]},D={a:E,b:$,bias:M,preluActivationWeights:N},R={transposeA:n,transposeB:r,activation:l,leakyreluAlpha:c};if(null==s){const e=(0,ot._X)(((e,t,n)=>{const r=a.T2.runKernel(o.Dr,D,R);return n([e,t,r]),{value:(0,x.t)(r,S),gradFunc:I}}));return e(E,$)}{const e=(0,ot._X)(((e,t,n,r)=>{const s=a.T2.runKernel(o.Dr,D,R);return r([e,t,s,n]),{value:(0,x.t)(s,S),gradFunc:I}}));return e(E,$,M)}}});const Er=(0,l.op)({hammingWindow_:
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
function(e){return mr(e,.54,.46)}});const xr=(0,l.op)({hannWindow_:
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
function(e){return mr(e,.5,.5)}});const $r=(0,l.op)({frame_:
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
function(e,t,n,r=!1,s=0){let a=0;const o=[];for(;a+t<=e.size;)o.push(Y(e,a,t)),a+=n;if(r)for(;a<e.size;){const r=a+t-e.size,i=I([Y(e,a,t-r),(0,H.G)([r],s)]);o.push(i),a+=n}return 0===o.length?jn([],[0,t]):(0,x.t)(I(o),[o.length,t])}});const Mr=(0,l.op)({stft_:
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
function(e,t,n,r,s=xr){null==r&&(r=gr(t));const a=$r(e,t,n),o=(0,D.l)(a,s(t));return Fn(o,r)}});const Nr=(0,l.op)({cropAndResize_:
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
function(e,t,n,r,s="bilinear",l=0){const u=(0,i.YT)(e,"image","cropAndResize"),c=(0,i.YT)(t,"boxes","cropAndResize","float32"),h=(0,i.YT)(n,"boxInd","cropAndResize","int32"),p=c.shape[0];d.vA(4===u.rank,(()=>`Error in cropAndResize: image must be rank 4,but got rank ${u.rank}.`)),d.vA(2===c.rank&&4===c.shape[1],(()=>`Error in cropAndResize: boxes must be have size [${p},4] but had shape ${c.shape}.`)),d.vA(1===h.rank&&h.shape[0]===p,(()=>`Error in cropAndResize: boxInd must be have size [${p}] but had shape ${c.shape}.`)),d.vA(2===r.length,(()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`)),d.vA(r[0]>=1&&r[1]>=1,(()=>`cropSize must be atleast [1,1], but was ${r}`)),d.vA("bilinear"===s||"nearest"===s,(()=>`method must be bilinear or nearest, but was ${s}`));const f={image:u,boxes:c,boxInd:h},g={method:s,extrapolationValue:l,cropSize:r};return a.T2.runKernel(o.MRQ,f,g)}});const Ir=(0,l.op)({flipLeftRight_:
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
function(e){const t=(0,i.YT)(e,"image","flipLeftRight","float32");d.vA(4===t.rank,(()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`));const n={image:t};return a.T2.runKernel(o.BxF,n,{})}});const _r=(0,l.op)({grayscaleToRGB_:
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
function(e){const t=(0,i.YT)(e,"image","grayscaleToRGB"),n=t.rank-1,r=t.shape[n];d.vA(t.rank>=2,(()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`)),d.vA(1===r,(()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`));const s=new Array(t.rank);return s.fill(1,0,n),s[n]=3,ze(t,s)}});const Dr=(0,l.op)({rgbToGrayscale_:
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
function(e){const t=(0,i.YT)(e,"image","RGBToGrayscale"),n=t.rank-1,r=t.shape[n];d.vA(t.rank>=2,(()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`)),d.vA(3===r,(()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`));const s=t.dtype,a=(0,S.w)(t,"float32"),o=Un([.2989,.587,.114]);let l;switch(t.rank){case 2:l=Se("ij,j->i",a,o);break;case 3:l=Se("ijk,k->ij",a,o);break;case 4:l=Se("ijkl,l->ijk",a,o);break;case 5:l=Se("ijklm,m->ijkl",a,o);break;case 6:l=Se("ijklmn,n->ijklm",a,o);break;default:throw new Error("Not a valid tensor rank.")}return l=Le(l,-1),(0,S.w)(l,s)}});const Rr=(0,l.op)({rotateWithOffset_:
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
function(e,t,n=0,r=.5){const s=(0,i.YT)(e,"image","rotateWithOffset","float32");d.vA(4===s.rank,(()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`));const l={image:s},u={radians:t,fillValue:n,center:r};return a.T2.runKernel(o.BK4,l,u)}});
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
function Yr(e,t,n,r,s,a){null==r&&(r=.5),null==s&&(s=Number.NEGATIVE_INFINITY),null==a&&(a=0);const o=e.shape[0];return n=Math.min(n,o),d.vA(0<=r&&r<=1,(()=>`iouThreshold must be in [0, 1], but was '${r}'`)),d.vA(2===e.rank,(()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`)),d.vA(4===e.shape[1],(()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`)),d.vA(1===t.rank,(()=>"scores must be a 1D tensor")),d.vA(t.shape[0]===o,(()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`)),d.vA(0<=a&&a<=1,(()=>`softNmsSigma must be in [0, 1], but was '${a}'`)),{maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:a}}const Br=(0,l.op)({nonMaxSuppression_:
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
function(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const l=(0,i.YT)(e,"boxes","nonMaxSuppression","float32"),u=(0,i.YT)(t,"scores","nonMaxSuppression","float32"),c=Yr(l,u,n,r,s),h={maxOutputSize:n=c.maxOutputSize,iouThreshold:r=c.iouThreshold,scoreThreshold:s=c.scoreThreshold};return a.T2.runKernel(o.SDM,{boxes:l,scores:u},h)}});var Fr=n(8360);const Pr=
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
async function(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const a=(0,i.YT)(e,"boxes","nonMaxSuppressionAsync"),o=(0,i.YT)(t,"scores","nonMaxSuppressionAsync"),l=Yr(a,o,n,r,s);n=l.maxOutputSize,r=l.iouThreshold,s=l.scoreThreshold;const u=await Promise.all([a.data(),o.data()]),c=u[0],h=u[1],{selectedIndices:d}=(0,Fr.c7)(c,h,n,r,s);return a!==e&&a.dispose(),o!==t&&o.dispose(),Un(d,"int32")};const Cr=(0,l.op)({nonMaxSuppressionWithScore_:
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
function(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,l=0){const u=(0,i.YT)(e,"boxes","nonMaxSuppression"),c=(0,i.YT)(t,"scores","nonMaxSuppression"),h=Yr(u,c,n,r,s,l),d={boxes:u,scores:c},p={maxOutputSize:n=h.maxOutputSize,iouThreshold:r=h.iouThreshold,scoreThreshold:s=h.scoreThreshold,softNmsSigma:l=h.softNmsSigma},f=a.T2.runKernel(o.e0f,d,p);return{selectedIndices:f[0],selectedScores:f[1]}}});const Or=
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
async function(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=(0,i.YT)(e,"boxes","nonMaxSuppressionAsync"),l=(0,i.YT)(t,"scores","nonMaxSuppressionAsync"),u=Yr(o,l,n,r,s,a);n=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold,a=u.softNmsSigma;const c=await Promise.all([o.data(),l.data()]),h=c[0],d=c[1],{selectedIndices:p,selectedScores:f}=(0,Fr.ut)(h,d,n,r,s,a);return o!==e&&o.dispose(),l!==t&&l.dispose(),{selectedIndices:Un(p,"int32"),selectedScores:Un(f)}};const Lr=(0,l.op)({nonMaxSuppressionPadded_:
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
function(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,l=!1){const u=(0,i.YT)(e,"boxes","nonMaxSuppression"),c=(0,i.YT)(t,"scores","nonMaxSuppression"),h=Yr(u,c,n,r,s,null),d={boxes:u,scores:c},p={maxOutputSize:h.maxOutputSize,iouThreshold:h.iouThreshold,scoreThreshold:h.scoreThreshold,padToMaxOutputSize:l},f=a.T2.runKernel(o.Zl4,d,p);return{selectedIndices:f[0],validOutputs:f[1]}}});const Wr=
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
async function(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=(0,i.YT)(e,"boxes","nonMaxSuppressionAsync"),l=(0,i.YT)(t,"scores","nonMaxSuppressionAsync"),u=Yr(o,l,n,r,s,null),c=u.maxOutputSize,h=u.iouThreshold,d=u.scoreThreshold,[p,f]=await Promise.all([o.data(),l.data()]),{selectedIndices:g,validOutputs:m}=(0,Fr.ZS)(p,f,c,h,d,a);return o!==e&&o.dispose(),l!==t&&l.dispose(),{selectedIndices:Un(g,"int32"),validOutputs:(0,De.d)(m,"int32")}};const zr=(0,l.op)({resizeBilinear_:
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
function(e,t,n=!1,r=!1){const s=(0,i.YT)(e,"images","resizeBilinear");d.vA(3===s.rank||4===s.rank,(()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`)),d.vA(2===t.length,(()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`)),d.vA(!1===r||!1===n,(()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false."));let l=s,u=!1;3===s.rank&&(u=!0,l=(0,x.t)(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const[]=t,c={images:l},h={alignCorners:n,halfPixelCenters:r,size:t},p=a.T2.runKernel(o.hgw,c,h);return u?(0,x.t)(p,[p.shape[1],p.shape[2],p.shape[3]]):p}});const Gr=(0,l.op)({resizeNearestNeighbor_:
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
function(e,t,n=!1,r=!1){const s=(0,i.YT)(e,"images","resizeNearestNeighbor");d.vA(3===s.rank||4===s.rank,(()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`)),d.vA(2===t.length,(()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`)),d.vA("float32"===s.dtype||"int32"===s.dtype,(()=>"`images` must have `int32` or `float32` as dtype")),d.vA(!1===r||!1===n,(()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false."));let l=s,u=!1;3===s.rank&&(u=!0,l=(0,x.t)(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const[]=t,c={images:l},h={alignCorners:n,halfPixelCenters:r,size:t},p=a.T2.runKernel(o.jOE,c,h);return u?(0,x.t)(p,[p.shape[1],p.shape[2],p.shape[3]]):p}});const Kr=(0,l.op)({threshold_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t="binary",n=!1,r=.5){const s=(0,i.YT)(e,"image","threshold"),a=s.shape[0]*s.shape[1];let o,l,u,c,p=(0,D.l)(Un([r]),255);if(d.vA(3===s.rank,(()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`)),d.vA(3===s.shape[2]||1===s.shape[2],(()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`)),d.vA("int32"===s.dtype||"float32"===s.dtype,(()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`)),d.vA("otsu"===t||"binary"===t,(()=>`Method must be binary or otsu, but was ${t}`)),3===s.shape[2]){[o,l,u]=Bn(s,[1,1,1],-1);const e=(0,D.l)(o,.2989),t=(0,D.l)(l,.587),n=(0,D.l)(u,.114);c=(0,h.W)((0,h.W)(e,t),n)}else c=e;if("otsu"===t){p=function(e,t){let n,r,s,a,o,i,l=Un([-1]),u=Un([0]),c=Un([0]);for(let d=0;d<e.size-1;d++){n=Y(e,0,d+1),r=Y(e,d+1),o=(0,ye.y)((0,Be.c)(n),t),i=(0,ye.y)((0,Be.c)(r),t);const p=(0,Be.c)((0,D.l)(n,un(0,n.size)));s=(0,ye.y)(p,(0,Be.c)(n));const f=(0,H.G)(r.shape,n.size),g=(0,h.W)(un(0,r.size),f),m=(0,D.l)(r,g);a=(0,ye.y)((0,Be.c)(m),(0,Be.c)(r));const y=(0,ct.j)(s,a),b=(0,ct.j)(s,a),w=(0,D.l)(o,i);c=(0,D.l)((0,D.l)(w,y),b);const v=qe(c,u);u=ve(v,c,u),l=ve(v,Un([d]),l)}return l}(z((0,S.w)(wn(c),"int32"),(0,Gn.O)([]),256),a)}const f=n?tt(c,p):qe(c,p);return(0,S.w)((0,D.l)(f,255),"int32")}});const Ur=(0,l.op)({transform_:
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
function(e,t,n="nearest",r="constant",s=0,l){const u=(0,i.YT)(e,"image","transform","float32"),c=(0,i.YT)(t,"transforms","transform","float32");d.vA(4===u.rank,(()=>`Error in transform: image must be rank 4,but got rank ${u.rank}.`)),d.vA(2===c.rank&&(c.shape[0]===u.shape[0]||1===c.shape[0])&&8===c.shape[1],(()=>"Error in transform: Input transform should be batch x 8 or 1 x 8")),d.vA(null==l||2===l.length,(()=>`Error in transform: outputShape must be [height, width] or null, but got ${l}.`));const h={image:u,transforms:c},p={interpolation:n,fillMode:r,fillValue:s,outputShape:l};return a.T2.runKernel(o.dLy,h,p)}});const jr=(0,l.op)({bandPart_:
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
function(e,t,n){const r=(0,i.YT)(e,"a","bandPart");(0,d.vA)(r.rank>=2,(()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`));const s=r.shape,[a,o]=r.shape.slice(-2);let l,u;"number"==typeof t?((0,d.vA)(t%1==0,(()=>`bandPart(): numLower must be an integer, got ${t}.`)),(0,d.vA)(t<=a,(()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${a}).`)),l=(0,i.YT)(t<0?a:t,"numLower","bandPart")):((0,d.vA)("int32"===t.dtype,(()=>"bandPart(): numLower's dtype must be an int32.")),l=ve(et(t,0),a,Nt(t,a))),"number"==typeof n?((0,d.vA)(n%1==0,(()=>`bandPart(): numUpper must be an integer, got ${n}.`)),(0,d.vA)(n<=o,(()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`)),u=(0,i.YT)(n<0?o:n,"numUpper","bandPart")):((0,d.vA)("int32"===n.dtype,(()=>"bandPart(): numUpper's dtype must be an int32.")),u=ve(et(n,0),o,Nt(n,o)));const c=(0,x.t)(un(0,a,1,"int32"),[-1,1]),h=un(0,o,1,"int32"),p=(0,ct.j)(c,h),f=pt(tt(p,l),He(p,(0,it.H)(u))),g=Et([a,o],r.dtype);return(0,x.t)(On(rr((0,x.t)(r,[-1,a,o])).map((e=>ve(f,e,g)))),s)}});const qr=(0,l.op)({gramSchmidt_:
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
function(e){let t;if(Array.isArray(e)){t=!1,(0,d.vA)(null!=e&&e.length>0,(()=>"Gram-Schmidt process: input must not be null, undefined, or empty"));const n=e[0].shape[0];for(let t=1;t<e.length;++t)(0,d.vA)(e[t].shape[0]===n,(()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[t].shape[0]} vs. ${n})`))}else t=!0,e=Bn(e,e.shape[0],0).map((e=>Cn(e,[0])));(0,d.vA)(e.length<=e[0].shape[0],(()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`));const n=[],r=e;for(let t=0;t<e.length;++t)n.push(a.T2.tidy((()=>{let e=r[t];if(t>0)for(let r=0;r<t;++r){const t=(0,D.l)((0,Be.c)((0,D.l)(n[r],e)),n[r]);e=(0,ct.j)(e,t)}return(0,ye.y)(e,Pe(e,"euclidean"))})));return t?On(n,0):n}});var Hr=n(35287);function Vr(e,t=!1){return a.T2.tidy((()=>{(0,d.vA)(2===e.shape.length,(()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`));const n=e.shape[0],r=e.shape[1];let s=Ge(n),o=(0,N.o)(e);const i=jn([[1]],[1,1]);let l=(0,N.o)(i);const u=n>=r?r:n;for(let e=0;e<u;++e){const t=o,u=l,c=s;[l,o,s]=a.T2.tidy((()=>{const t=Y(o,[e,e],[n-e,1]),a=Pe(t),u=Y(o,[e,e],[1,1]),c=ve(qe(u,0),jn([[-1]]),jn([[1]])),h=(0,ct.j)(u,(0,D.l)(c,a)),d=(0,ye.y)(t,h);l=1===d.shape[0]?(0,N.o)(i):I([i,Y(d,[1,0],[d.shape[0]-1,d.shape[1]])],0);const p=(0,it.H)((0,ye.y)((0,_.N)(c,h),a)),f=Y(o,[e,0],[n-e,r]),g=(0,D.l)(p,l),m=(0,ur.m)(l);if(0===e)o=(0,ct.j)(f,(0,_.N)(g,(0,_.N)(m,f)));else{const t=(0,ct.j)(f,(0,_.N)(g,(0,_.N)(m,f)));o=I([Y(o,[0,0],[e,r]),t],0)}const y=(0,ur.m)(g),b=Y(s,[0,e],[n,s.shape[1]-e]);if(0===e)s=(0,ct.j)(b,(0,_.N)((0,_.N)(b,l),y));else{const t=(0,ct.j)(b,(0,_.N)((0,_.N)(b,l),y));s=I([Y(s,[0,0],[n,e]),t],1)}return[l,o,s]})),(0,Hr.AS)([t,u,c])}return!t&&n>r&&(s=Y(s,[0,0],[n,r]),o=Y(o,[0,0],[r,r])),[s,o]}))}const Zr=(0,l.op)({qr_:
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
function(e,t=!1){if((0,d.vA)(e.rank>=2,(()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`)),2===e.rank)return Vr(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce(((e,t)=>e*t)),r=rr((0,x.t)(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),s=[],a=[];r.forEach((e=>{const[n,r]=Vr(e,t);s.push(n),a.push(r)}));return[(0,x.t)(On(s,0),e.shape),(0,x.t)(On(a,0),e.shape)]}}});var Xr=n(27084);const Qr=(0,l.op)({computeWeightedLoss_:function(e,t,n=Xr.i.SUM_BY_NONZERO_WEIGHTS){const r=(0,i.YT)(e,"losses","computeWeightedLoss");let s=null;null!=t&&(s=(0,i.YT)(t,"weights","computeWeightedLoss"));const a=null==s?r:(0,D.l)(r,s);if(n===Xr.i.NONE)return a;if(n===Xr.i.SUM)return(0,Be.c)(a);if(n===Xr.i.MEAN){if(null==s)return St(a);{const e=r.size/s.size,t=(0,ye.y)((0,Be.c)(a),(0,Be.c)(s));return e>1?(0,ye.y)(t,(0,De.d)(e)):t}}if(n===Xr.i.SUM_BY_NONZERO_WEIGHTS){if(null==s)return(0,ye.y)((0,Be.c)(a),(0,De.d)(r.size));{const e=(0,D.l)(s,xt(r.shape)),t=(0,S.w)((0,Be.c)(Bt(e,(0,De.d)(0))),"float32");return(0,ye.y)((0,Be.c)(a),t)}}throw Error(`Unknown reduction: ${n}`)}});const Jr=(0,l.op)({absoluteDifference_:
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
function(e,t,n,r=Xr.i.SUM_BY_NONZERO_WEIGHTS){const a=(0,i.YT)(e,"labels","absoluteDifference"),o=(0,i.YT)(t,"predictions","absoluteDifference");let l=null;null!=n&&(l=(0,i.YT)(n,"weights","absoluteDifference")),(0,d.O3)(a.shape,o.shape,"Error in absoluteDifference: ");const u=(0,s.t)((0,ct.j)(a,o));return Qr(u,l,r)}});const es=(0,l.op)({cosineDistance_:function(e,t,n,r,s=Xr.i.SUM_BY_NONZERO_WEIGHTS){const a=(0,i.YT)(e,"labels","cosineDistance"),o=(0,i.YT)(t,"predictions","cosineDistance");let l=null;null!=r&&(l=(0,i.YT)(r,"weights","cosineDistance")),(0,d.O3)(a.shape,o.shape,"Error in cosineDistance: ");const u=(0,De.d)(1),c=(0,ct.j)(u,(0,Be.c)((0,D.l)(a,o),n,!0));return Qr(c,l,s)}});const ts=(0,l.op)({hingeLoss_:function(e,t,n,r=Xr.i.SUM_BY_NONZERO_WEIGHTS){let s=(0,i.YT)(e,"labels","hingeLoss");const a=(0,i.YT)(t,"predictions","hingeLoss");let o=null;null!=n&&(o=(0,i.YT)(n,"weights","hingeLoss")),(0,d.O3)(s.shape,a.shape,"Error in hingeLoss: ");const l=(0,De.d)(1);s=(0,ct.j)((0,D.l)((0,De.d)(2),s),l);const u=(0,dn.V)((0,ct.j)(l,(0,D.l)(s,a)));return Qr(u,o,r)}});const ns=(0,l.op)({huberLoss_:
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
function(e,t,n,r=1,a=Xr.i.SUM_BY_NONZERO_WEIGHTS){const o=(0,i.YT)(e,"labels","huberLoss"),l=(0,i.YT)(t,"predictions","huberLoss");let u=null;null!=n&&(u=(0,i.YT)(n,"weights","huberLoss")),(0,d.O3)(o.shape,l.shape,"Error in huberLoss: ");const c=(0,De.d)(r),p=(0,s.t)((0,ct.j)(l,o)),f=Nt(p,c),g=(0,ct.j)(p,f),m=(0,h.W)((0,D.l)((0,De.d)(.5),(0,Ye.E)(f)),(0,D.l)(c,g));return Qr(m,u,a)}});const rs=(0,l.op)({logLoss_:
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
function(e,t,n,r=1e-7,s=Xr.i.SUM_BY_NONZERO_WEIGHTS){const a=(0,i.YT)(e,"labels","logLoss"),o=(0,i.YT)(t,"predictions","logLoss");let l=null;null!=n&&(l=(0,i.YT)(n,"weights","logLoss")),(0,d.O3)(a.shape,o.shape,"Error in logLoss: ");const u=(0,De.d)(1),c=(0,De.d)(r),p=(0,it.H)((0,D.l)(a,st((0,h.W)(o,c)))),f=(0,D.l)((0,ct.j)(u,a),st((0,h.W)((0,ct.j)(u,o),c))),g=(0,ct.j)(p,f);return Qr(g,l,s)}});const ss=(0,l.op)({meanSquaredError_:
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
function(e,t,n,r=Xr.i.SUM_BY_NONZERO_WEIGHTS){const s=(0,i.YT)(e,"labels","meanSquaredError"),a=(0,i.YT)(t,"predictions","meanSquaredError");let o=null;null!=n&&(o=(0,i.YT)(n,"weights","meanSquaredError")),(0,d.O3)(s.shape,a.shape,"Error in meanSquaredError: ");const l=Pn(s,a);return Qr(l,o,r)}});const as=(0,l.op)({sigmoidCrossEntropy_:function(e,t,n,r=0,a=Xr.i.SUM_BY_NONZERO_WEIGHTS){let o=(0,i.YT)(e,"multiClassLabels","sigmoidCrossEntropy");const l=(0,i.YT)(t,"logits","sigmoidCrossEntropy");let u=null;if(null!=n&&(u=(0,i.YT)(n,"weights","sigmoidCrossEntropy")),(0,d.O3)(o.shape,l.shape,"Error in sigmoidCrossEntropy: "),r>0){const e=(0,De.d)(r),t=(0,De.d)(1),n=(0,De.d)(.5);o=(0,h.W)((0,D.l)(o,(0,ct.j)(t,e)),(0,D.l)(n,e))}const c=
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
function(e,t){const n=(0,i.YT)(e,"labels","sigmoidCrossEntropyWithLogits"),r=(0,i.YT)(t,"logits","sigmoidCrossEntropyWithLogits");(0,d.O3)(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const a=(0,dn.V)(r),o=(0,D.l)(r,n),l=at(Oe((0,it.H)((0,s.t)(r))));return(0,h.W)((0,ct.j)(a,o),l)}(o,l);return Qr(c,u,a)}});const os=(0,l.op)({softmaxCrossEntropy_:function(e,t,n,r=0,s=Xr.i.SUM_BY_NONZERO_WEIGHTS){let a=(0,i.YT)(e,"onehotLabels","softmaxCrossEntropy");const o=(0,i.YT)(t,"logits","softmaxCrossEntropy");let l=null;if(null!=n&&(l=(0,i.YT)(n,"weights","softmaxCrossEntropy")),(0,d.O3)(a.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const e=(0,De.d)(r),t=(0,De.d)(1),n=(0,De.d)(a.shape[1]);a=(0,h.W)((0,D.l)(a,(0,ct.j)(t,e)),(0,ye.y)(e,n))}const u=
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
function(e,t,n=-1){if(-1===n&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);const r=(0,ot._X)(((e,t,r)=>{const s=dt(t,[n],!0),a=(0,ct.j)((0,S.w)(t,"float32"),s);r([e,a]);const o=(0,it.H)((0,D.l)(a,e));return{value:(0,Be.c)(o,[n]),gradFunc:(e,t)=>{const[r,s]=t,a=(0,Me.SM)(e.shape,[n]);return[(0,D.l)((0,x.t)(e,a),(0,ct.j)((0,S.w)(r,"float32"),Oe(s))),(0,D.l)((0,x.t)(e,a),(0,ct.j)(Oe(s),(0,S.w)(r,"float32")))]}}}));return r(e,t)}(a,o);return Qr(u,l,s)}});const is={fft:Dn,ifft:Rn,rfft:Fn,irfft:Yn},ls={hammingWindow:Er,hannWindow:xr,frame:$r,stft:Mr},us={flipLeftRight:Ir,grayscaleToRGB:_r,resizeNearestNeighbor:Gr,resizeBilinear:zr,rgbToGrayscale:Dr,rotateWithOffset:Rr,cropAndResize:Nr,nonMaxSuppression:Br,nonMaxSuppressionAsync:Pr,nonMaxSuppressionWithScore:Cr,nonMaxSuppressionWithScoreAsync:Or,nonMaxSuppressionPadded:Lr,nonMaxSuppressionPaddedAsync:Wr,threshold:Kr,transform:Ur},cs={bandPart:jr,gramSchmidt:qr,qr:Zr},hs={absoluteDifference:Jr,computeWeightedLoss:Qr,cosineDistance:es,hingeLoss:ts,huberLoss:ns,logLoss:rs,meanSquaredError:ss,sigmoidCrossEntropy:as,softmaxCrossEntropy:os},ds={sparseFillEmptyRows:(0,l.op)({sparseFillEmptyRows_:
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
function(e,t,n,r){const s=(0,i.YT)(e,"indices","sparseFillEmptyRows","int32"),l=(0,i.YT)(t,"values","sparseFillEmptyRows"),u=(0,i.YT)(n,"denseShape","sparseFillEmptyRows","int32"),c=(0,i.YT)(r,"defaultValue","sparseFillEmptyRows",l.dtype);if(2!==s.rank)throw new Error(`Indices should be Tensor2D but received shape\n        ${s.shape}`);if(1!==l.rank)throw new Error(`Values should be Tensor1D but received shape ${l.shape}`);if(1!==u.rank)throw new Error(`Dense shape should be Tensor1D but received shape ${u.shape}`);if(0!==c.rank)throw new Error(`Default value should be a scalar but received shape ${c.shape}`);const h={indices:s,values:l,denseShape:u,defaultValue:c},d=a.T2.runKernel(o.C8s,h);return{outputIndices:d[0],outputValues:d[1],emptyRowIndicator:d[2],reverseIndexMap:d[3]}}}),sparseReshape:(0,l.op)({sparseReshape_:
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
function(e,t,n){const r=(0,i.YT)(e,"inputIndices","sparseReshape","int32"),s=(0,i.YT)(t,"inputShape","sparseReshape","int32"),l=(0,i.YT)(n,"newShape","sparseReshape","int32");if(2!==r.rank)throw new Error(`Input indices should be Tensor2D but received shape\n        ${r.shape}`);if(1!==s.rank)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(1!==l.rank)throw new Error(`New shape should be Tensor1D but received shape ${l.shape}`);const u={inputIndices:r,inputShape:s,newShape:l},c=a.T2.runKernel(o.BoJ,u);return{outputIndices:c[0],outputShape:c[1]}}}),sparseSegmentMean:(0,l.op)({sparseSegmentMean_:
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
function(e,t,n){const r=(0,i.YT)(e,"data","sparseSegmentMean"),s=(0,i.YT)(t,"indices","sparseSegmentMean","int32"),l=(0,i.YT)(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==s.rank)throw new Error(`Indices should be Tensor1D but received shape\n          ${s.shape}`);if(1!==l.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n          ${l.shape}`);const u={data:r,indices:s,segmentIds:l};return a.T2.runKernel(o.L6G,u)}}),sparseSegmentSum:(0,l.op)({sparseSegmentSum_:
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
function(e,t,n){const r=(0,i.YT)(e,"data","sparseSegmentSum"),s=(0,i.YT)(t,"indices","sparseSegmentSum","int32"),l=(0,i.YT)(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==s.rank)throw new Error(`Indices should be Tensor1D but received shape\n         ${s.shape}`);if(1!==l.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n         ${l.shape}`);const u={data:r,indices:s,segmentIds:l};return a.T2.runKernel(o.DvZ,u)}})},ps={stringNGrams:(0,l.op)({stringNGrams_:
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
function(e,t,n,r,s,l,u,c){const h=(0,i.YT)(e,"data","stringNGrams","string");if("string"!==h.dtype)throw new Error("Data must be of datatype string");if(1!==h.shape.length)throw new Error(`Data must be a vector, saw: ${h.shape}`);const d=(0,i.YT)(t,"dataSplits","stringNGrams");if("int32"!==d.dtype)throw new Error("Data splits must be of datatype int32");const p={separator:n,nGramWidths:r,leftPad:s,rightPad:l,padWidth:u,preserveShortSequences:c},f={data:h,dataSplits:d},g=a.T2.runKernel(o.YAb,f,p);return{nGrams:g[0],nGramsSplits:g[1]}}}),stringSplit:(0,l.op)({stringSplit_:
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
function(e,t,n=!0){const r=(0,i.YT)(e,"input","stringSplit","string"),s=(0,i.YT)(t,"delimiter","stringSplit","string");if(1!==r.rank)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(0!==s.rank)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const l={skipEmpty:n},u={input:r,delimiter:s},c=a.T2.runKernel(o.iW0,u,l);return{indices:c[0],values:c[1],shape:c[2]}}}),stringToHashBucketFast:(0,l.op)({stringToHashBucketFast_:
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
function(e,t){const n=(0,i.YT)(e,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const s={input:n};return a.T2.runKernel(o.$jE,s,r)}}),staticRegexReplace:(0,l.op)({staticRegexReplace_:
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
function(e,t,n,r=!0){const s=(0,i.YT)(e,"input","staticRegexReplace","string"),l={pattern:t,rewrite:n,replaceGlobal:r};return a.T2.runKernel(o.GZp,{x:s},l)}})}},9951:(e,t,n)=>{n.r(t),n.d(t,{OP_SCOPE_SUFFIX:()=>r.BTT,abs:()=>r.tnl,acos:()=>r.HQu,acosh:()=>r.FqL,add:()=>r.WQq,addN:()=>r.QiD,all:()=>r.Q7R,any:()=>r.bzn,argMax:()=>r.FLi,argMin:()=>r.XRg,asin:()=>r.qRo,asinh:()=>r.yHs,atan:()=>r.rYl,atan2:()=>r.FPz,atanh:()=>r.rfv,avgPool:()=>r.$jT,avgPool3d:()=>r.sub,basicLSTMCell:()=>r.lZX,batchNorm:()=>r.$v7,batchNorm2d:()=>r.BFc,batchNorm3d:()=>r.kSi,batchNorm4d:()=>r.T5N,batchToSpaceND:()=>r.GTe,bincount:()=>r.HbZ,bitwiseAnd:()=>r.vjT,booleanMaskAsync:()=>r.ftb,broadcastArgs:()=>r.ROE,broadcastTo:()=>r.hOW,buffer:()=>r.ra8,cast:()=>r.wgE,ceil:()=>r.mkO,clipByValue:()=>r.zQh,clone:()=>r.o8B,complex:()=>r.faB,concat:()=>r.xWs,concat1d:()=>r.I1m,concat2d:()=>r.RPU,concat3d:()=>r.O5O,concat4d:()=>r.P1l,conv1d:()=>r.kA9,conv2d:()=>r.Xtf,conv2dTranspose:()=>r.wX9,conv3d:()=>r.IPL,conv3dTranspose:()=>r.jIJ,cos:()=>r.gnS,cosh:()=>r.yIG,cosineWindow:()=>r._jP,cumprod:()=>r.Lp0,cumsum:()=>r.rCv,denseBincount:()=>r.aOp,depthToSpace:()=>r.Rj8,depthwiseConv2d:()=>r.Gl3,diag:()=>r.smy,dilation2d:()=>r.X7t,div:()=>r.y4m,divNoNan:()=>r.ek5,dot:()=>r.Omf,dropout:()=>r.EZY,einsum:()=>r._3C,elu:()=>r.Pqc,enclosingPowerOfTwo:()=>r.FJY,ensureShape:()=>r.QP2,equal:()=>r.LCg,erf:()=>r.Y12,euclideanNorm:()=>r.p4S,exp:()=>r.oNF,expandDims:()=>r.UG6,expm1:()=>r.IYd,eye:()=>r.y5U,fft:()=>r.hVP,fill:()=>r.GSj,floor:()=>r.RIf,floorDiv:()=>r.wh_,fused:()=>r.cZk,gather:()=>r.kgh,gatherND:()=>r.SY9,greater:()=>r.rhj,greaterEqual:()=>r.DQN,ifft:()=>r.KGM,imag:()=>r.ngS,image:()=>r.Slp,inTopKAsync:()=>r.U4u,irfft:()=>r.ggX,isFinite:()=>r.MIs,isInf:()=>r.EN4,isNaN:()=>r.yrW,leakyRelu:()=>r.H8d,less:()=>r.M7h,lessEqual:()=>r.InN,linalg:()=>r.mPL,linspace:()=>r.mT8,localResponseNormalization:()=>r.Kgs,log:()=>r.Rm2,log1p:()=>r.Kko,logSigmoid:()=>r.nqI,logSoftmax:()=>r.HPB,logSumExp:()=>r.VZ,logicalAnd:()=>r.n76,logicalNot:()=>r.NSZ,logicalOr:()=>r.ztW,logicalXor:()=>r.rxB,losses:()=>r.YYh,lowerBound:()=>r.yzS,matMul:()=>r.NoW,max:()=>r.T9B,maxPool:()=>r.jgi,maxPool3d:()=>r.NYV,maxPoolWithArgmax:()=>r.RO,maximum:()=>r.PhQ,mean:()=>r.i2o,meshgrid:()=>r.OYQ,min:()=>r.jkA,minimum:()=>r.BpO,mirrorPad:()=>r.FFZ,mod:()=>r.ziu,moments:()=>r.Clk,movingAverage:()=>r.CRk,mul:()=>r.lKK,multiRNNCell:()=>r.YDF,multinomial:()=>r.OjQ,neg:()=>r.HZy,norm:()=>r.xbf,notEqual:()=>r.Ec,oneHot:()=>r.Mw0,ones:()=>r.SaS,onesLike:()=>r.P61,op:()=>r.op,outerProduct:()=>r.X4o,pad:()=>r.eVF,pad1d:()=>r.BZs,pad2d:()=>r.grY,pad3d:()=>r.XHu,pad4d:()=>r.WLX,pool:()=>r.dzn,pow:()=>r.n7C,prelu:()=>r.NsG,print:()=>r.yyV,prod:()=>r._eU,raggedGather:()=>r.whe,raggedRange:()=>r.iyU,raggedTensorToTensor:()=>r.Q0_,rand:()=>r._9M,randomGamma:()=>r.pR9,randomNormal:()=>r.FE$,randomStandardNormal:()=>r.m0H,randomUniform:()=>r.YeY,randomUniformInt:()=>r.HYA,range:()=>r.y17,real:()=>r.xav,reciprocal:()=>r.VOZ,relu:()=>r.VVh,relu6:()=>r.j__,reshape:()=>r.tQQ,reverse:()=>r.BEg,reverse1d:()=>r.QD2,reverse2d:()=>r.LMr,reverse3d:()=>r.I2l,reverse4d:()=>r.JYU,rfft:()=>r.z8$,round:()=>r.LIG,rsqrt:()=>r.Z$r,scalar:()=>r.d_2,scatterND:()=>r.NFr,searchSorted:()=>r.sZg,selu:()=>r.WfX,separableConv2d:()=>r.wdz,setdiff1dAsync:()=>r.F12,sigmoid:()=>r.ry7,sign:()=>r._SZ,signal:()=>r.vPA,sin:()=>r.F8e,sinh:()=>r.L0l,slice:()=>r.dik,slice1d:()=>r.Q$M,slice2d:()=>r.zAd,slice3d:()=>r.wck,slice4d:()=>r.R0O,softmax:()=>r.Vs9,softplus:()=>r.lw0,spaceToBatchND:()=>r.eDJ,sparse:()=>r.lMo,sparseToDense:()=>r.Zhr,spectral:()=>r.lOn,split:()=>r.lDo,sqrt:()=>r.RZD,square:()=>r.EwI,squaredDifference:()=>r.Pbu,squeeze:()=>r.r2V,stack:()=>r.t$z,step:()=>r.PMw,stridedSlice:()=>r.Ym9,string:()=>r.YjP,sub:()=>r.jbE,sum:()=>r.czq,tan:()=>r.Mlm,tanh:()=>r.ymU,tensor:()=>r.OEK,tensor1d:()=>r.tGX,tensor2d:()=>r.KtR,tensor3d:()=>r.$_$,tensor4d:()=>r.g9W,tensor5d:()=>r.Lpo,tensor6d:()=>r.yxw,tensorScatterUpdate:()=>r.NNh,tile:()=>r.Vsq,topk:()=>r.rfw,transpose:()=>r.mgz,truncatedNormal:()=>r.efE,unique:()=>r.AmM,unsortedSegmentSum:()=>r.zAU,unstack:()=>r.K$i,upperBound:()=>r.rni,variable:()=>r.bvq,where:()=>r._M9,whereAsync:()=>r.YJN,zeros:()=>r.Ul9,zerosLike:()=>r.POl});var r=n(33887);
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
 */},98990:(e,t,n)=>{n.d(t,{n:()=>i});var r=n(41585),s=n(15441),a=n(30565),o=n(28189);const i=(0,n(70929).op)({pow_:
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
function(e,t){let n=(0,o.YT)(e,"base","pow"),i=(0,o.YT)(t,"exp","pow");[n,i]=(0,a.makeTypesMatch)(n,i);const l={a:n,b:i};return r.T2.runKernel(s.pyJ,l)}})},64394:(e,t,n)=>{n.d(t,{N:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({prelu_:
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
function(e,t){const n={x:(0,a.YT)(e,"x","prelu"),alpha:(0,a.YT)(t,"alpha","prelu")};return r.T2.runKernel(s.Ncv,n)}})},75295:(e,t,n)=>{
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
function r(e,t=!1){console.log(e.toString(t))}n.d(t,{y:()=>r})},1902:(e,t,n)=>{n.d(t,{x:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({real_:
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
function(e){const t={input:(0,a.YT)(e,"input","real")};return r.T2.runKernel(s.LRy,t)}})},90112:(e,t,n)=>{n.d(t,{V:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({relu_:
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
function(e){const t={x:(0,a.YT)(e,"x","relu")};return r.T2.runKernel(s.fUj,t)}})},83732:(e,t,n)=>{n.d(t,{j:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({relu6_:
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
function(e){const t={x:(0,a.YT)(e,"x","relu6")};return r.T2.runKernel(s.P_L,t)}})},62302:(e,t,n)=>{n.d(t,{t:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({reshape_:
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
function(e,t){const n={x:(0,a.YT)(e,"x","reshape","string_or_numeric")},o={shape:t};return r.T2.runKernel(s.R23,n,o)}})},45702:(e,t,n)=>{n.d(t,{d:()=>a});var r=n(83879),s=n(19171);
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
function a(e,t){if(((0,r.isTypedArray)(e)&&"string"!==t||Array.isArray(e))&&"complex64"!==t)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===t&&(0,r.isTypedArray)(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return(0,s.Q)(e,[],[],t)}},26170:(e,t,n)=>{n.r(t),n.d(t,{calculateShapes:()=>o,validateInput:()=>a,validateUpdateShape:()=>s});var r=n(45119);function s(e,t,n){const r=t.rank>1?t.shape[t.rank-1]:1,s=t.rank>1?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${s}.`;if(n.rank<s)throw new Error(a+` update.rank < ${s}. `);if(e.length<r+(n.rank-s))throw new Error(a+` Output shape length < ${r+(n.rank-s)}`);if(n.rank!==s+e.length-r)throw new Error(a+" update.rank != "+(s+e.length-r));for(let e=0;e<s;++e)if(n.shape[e]!==t.shape[e])throw new Error(a+` updates.shape[${e}] (${n.shape[e]}) != indices.shape[${e}] (${t.shape[e]}).`);for(let t=0;t<n.rank-s;++t)if(n.shape[t+s]!==e[t+r])throw new Error(a+` updates.shape[${t+s}] (${n.shape[t+s]}) != shape[${t+s}] (${e[t+s]})`)}function a(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if("int32"!==t.dtype)throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(0===n.length){if(0===t.size)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(0===e.size)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}s(n,t,e)}function o(e,t,n){const s=t.shape.length,a=s>1?t.shape[s-1]:1,o=n.length;let i=1;for(let e=a;e<o;++e)i*=n[e];const l=a<1?1:a;return{sliceRank:a,numUpdates:(0,r.Ze)(t.shape)/l,sliceSize:i,strides:[...(0,r.Ur)(n.slice(0,a)),1],outputSize:(0,r.Ze)(n)}}},28968:(e,t,n)=>{n.d(t,{r:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({sigmoid_:
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
function(e){const t={x:(0,a.YT)(e,"x","sigmoid","float32")};return r.T2.runKernel(s.vI1,t)}})},79348:(e,t,n)=>{n.d(t,{R:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({sqrt_:
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
function(e){const t={x:(0,a.YT)(e,"x","sqrt","float32")};return r.T2.runKernel(s.dFH,t)}})},45793:(e,t,n)=>{n.d(t,{E:()=>a});var r=n(41585),s=n(28189);const a=(0,n(70929).op)({square_:
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
function(e){const t=(0,s.YT)(e,"x","square");return r.T2.runKernel("Square",{x:t},{})}})},10700:(e,t,n)=>{n.d(t,{P:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({step_:
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
function(e,t=0){const n={x:(0,a.YT)(e,"x","step")},o={alpha:t};return r.T2.runKernel(s.pnw,n,o)}})},77126:(e,t,n)=>{n.d(t,{j:()=>i});var r=n(41585),s=n(15441),a=n(30565),o=n(28189);const i=(0,n(70929).op)({sub_:
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
function(e,t){let n=(0,o.YT)(e,"a","sub"),i=(0,o.YT)(t,"b","sub");[n,i]=(0,a.makeTypesMatch)(n,i);const l={a:n,b:i};return r.T2.runKernel(s.PbM,l)}})},83791:(e,t,n)=>{n.d(t,{c:()=>i});var r=n(41585),s=n(15441),a=n(28189),o=n(29809);const i=(0,n(70929).op)({sum_:
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
function(e,t=null,n=!1){let i=(0,a.YT)(e,"x","sum");"bool"===i.dtype&&(i=(0,o.w)(i,"int32"));const l={x:i},u={axis:t,keepDims:n};return r.T2.runKernel(s.WuN,l,u)}})},74027:(e,t,n)=>{n.d(t,{O:()=>a});var r=n(28189),s=n(19171);
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
function a(e,t,n){const a=(0,r.MZ)(e,n);return(0,s.Q)(e,t,a,n)}},42768:(e,t,n)=>{n.d(t,{$:()=>o});var r=n(28189),s=n(45119),a=n(19171);
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
function o(e,t,n){if((0,s.HO)(e),null!=t&&3!==t.length)throw new Error("tensor3d() requires shape to have three numbers");const o=(0,r.MZ)(e,n);if(3!==o.length&&1!==o.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===o.length&&null==t)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return(0,a.Q)(e,t,o,n)}},19171:(e,t,n)=>{n.d(t,{Q:()=>i});var r=n(41585),s=n(52046),a=n(45119),o=n(83879);
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
function i(e,t,n,i){if(null==i)i=(0,a.X$)(e);else if("complex64"===i)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if((0,s.Nw)(e)||(0,s.Oj)(e)){if("float32"!==i&&"int32"!==i)throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${i}.`);return r.T2.backend.createTensorFromGPUData(e,t||n,i)}if(!(0,o.isTypedArray)(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=t){(0,a.SA)(t);const e=(0,a.Ze)(t),r=(0,a.Ze)(n);(0,a.vA)(e===r,(()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${r}`));for(let e=0;e<n.length;++e){const r=n[e],s=e!==n.length-1||r!==(0,a.Ze)(t.slice(e));(0,a.vA)(n[e]===t[e]||!s,(()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `))}}return(0,o.isTypedArray)(e)||Array.isArray(e)||(e=[e]),t=t||n,e="string"!==i?(0,o.toTypedArray)(e,i):(0,o.flatten)(e,[],!0),r.T2.makeTensor(e,t,i)}},7703:(e,t,n)=>{n.d(t,{m:()=>p});var r=n(41585),s=n(35287),a=n(15441),o=n(28189),i=n(45119),l=n(37148),u=n(35040),c=n(96522),h=n(70929),d=n(1902);const p=(0,h.op)({transpose_:
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
function(e,t,n){const h=(0,o.YT)(e,"x","transpose");if(null==t&&(t=h.shape.map(((e,t)=>t)).reverse()),i.vA(h.rank===t.length,(()=>`Error in transpose: rank of input ${h.rank} must match length of perm ${t}.`)),t.forEach((e=>{i.vA(e>=0&&e<h.rank,(()=>"All entries in 'perm' must be between 0 and "+(h.rank-1)+` but got ${t}`))})),h.rank<=1)return h.clone();const p={x:h},f={perm:t};return"complex64"===h.dtype?(0,s.DZ)((()=>{let e=(0,d.x)(h),t=(0,u.n)(h);return e=r.T2.runKernel(a.wx0,{x:e},f),t=r.T2.runKernel(a.wx0,{x:t},f),n&&(t=(0,c.H)(t)),(0,l.f)(e,t)})):r.T2.runKernel(a.wx0,p,f)}})},55537:(e,t,n)=>{n.d(t,{P:()=>o});var r=n(41585),s=n(15441),a=n(28189);const o=(0,n(70929).op)({zerosLike_:
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
function(e){const t={x:(0,a.YT)(e,"x","zerosLike")};return r.T2.runKernel(s.xJ3,t)}})},86448:(e,t,n)=>{
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
function r(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}n.d(t,{Y:()=>r})},50259:(e,t,n)=>{n.d(t,{qY:()=>T,yl:()=>f,rT:()=>A,tp:()=>k,B4:()=>v,Q5:()=>w,qP:()=>b});var r=n(41743),s=n(45119);
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
const a=20,o=3,i=7;function l(e,t,n,r){const a=(0,s.Ur)(t),o=function(e,t,n,r){const a=(0,s.Ze)(t),o=r[r.length-1],i=new Array(o).fill(0),l=t.length,c="complex64"===n?d(e):e;if(l>1)for(let e=0;e<a/o;e++){const t=e*o;for(let e=0;e<o;e++)i[e]=Math.max(i[e],u(c[t+e],0,n).length)}return i}(e,t,n,a),i=t.length,l=h(e,t,n,a,o),c=["Tensor"];return r&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${i}`),c.push(`  shape: [${t}]`),c.push("  values:")),c.push(l.map((e=>"    "+e)).join("\n")),c.join("\n")}function u(e,t,n){let r;return r=Array.isArray(e)?`${parseFloat(e[0].toFixed(i))} + ${parseFloat(e[1].toFixed(i))}j`:(0,s.Kg)(e)?`'${e}'`:"bool"===n?c(e):parseFloat(e.toFixed(i)).toString(),(0,s.av)(r,t)}function c(e){return 0===e?"false":"true"}function h(e,t,n,r,s,i=!0){const l="complex64"===n?2:1,p=t[0],f=t.length;if(0===f){if("complex64"===n){return[u(d(e)[0],0,n)]}return"bool"===n?[c(e[0])]:[e[0].toString()]}if(1===f){if(p>a){const t=o*l;let r=Array.from(e.slice(0,t)),a=Array.from(e.slice((p-o)*l,p*l));return"complex64"===n&&(r=d(r),a=d(a)),["["+r.map(((e,t)=>u(e,s[t],n))).join(", ")+", ..., "+a.map(((e,t)=>u(e,s[p-o+t],n))).join(", ")+"]"]}return["["+("complex64"===n?d(e):Array.from(e)).map(((e,t)=>u(e,s[t],n))).join(", ")+"]"]}const g=t.slice(1),m=r.slice(1),y=r[0]*l,b=[];if(p>a){for(let t=0;t<o;t++){const r=t*y,a=r+y;b.push(...h(e.slice(r,a),g,n,m,s,!1))}b.push("...");for(let t=p-o;t<p;t++){const r=t*y,a=r+y;b.push(...h(e.slice(r,a),g,n,m,s,t===p-1))}}else for(let t=0;t<p;t++){const r=t*y,a=r+y;b.push(...h(e.slice(r,a),g,n,m,s,t===p-1))}const w=2===f?",":"";b[0]="["+(p>0?b[0]+w:"");for(let e=1;e<b.length-1;e++)b[e]=" "+b[e]+w;let v=",\n";for(let e=2;e<f;e++)v+="\n";return b[b.length-1]=" "+b[b.length-1]+"]"+(i?"":v),b}function d(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var p=n(83879);
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
class f{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=s.Ze(e),null!=n){const e=n.length;s.vA(e===this.size,(()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`))}if("complex64"===t)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||s.Ab(t,this.size),this.strides=(0,s.Ur)(e)}set(e,...t){0===t.length&&(t=[0]),s.vA(t.length===this.rank,(()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`));const n=this.locToIndex(t);this.values[n]=e}get(...e){0===e.length&&(e=[0]);let t=0;for(const n of e){if(n<0||n>=this.shape[t]){const t=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(t)}t++}let n=e[e.length-1];for(let t=0;t<e.length-1;++t)n+=this.strides[t]*e[t];return this.values[n]}locToIndex(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(0===this.rank)return[];if(1===this.rank)return[e];const t=new Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return g().makeTensor(this.values,this.shape,this.dtype)}}let g=null,m=null,y=null;function b(e){g=e}function w(e){m=e}function v(e){y=e}class T{constructor(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=s.Ze(e),this.strides=(0,s.Ur)(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return m.buffer(this.shape,this.dtype,e)}bufferSync(){return m.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return(0,s.yw)(this.shape,e,"complex64"===this.dtype)}arraySync(){return(0,s.yw)(this.shape,this.dataSync(),"complex64"===this.dtype)}async data(){this.throwIfDisposed();const e=g().read(this.dataId);if("string"===this.dtype){const t=await e;try{return t.map((e=>p.decodeString(e)))}catch(e){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),g().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=g().readSync(this.dataId);if("string"===this.dtype)try{return e.map((e=>p.decodeString(e)))}catch(e){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await g().read(this.dataId);return"string"===this.dtype?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),g().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return m.print(this,e)}clone(){return this.throwIfDisposed(),m.clone(this)}toString(e=!1){return l(this.dataSync(),this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),m.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),g().makeVariable(this,e,t,n)}}function k(){return(0,r.m)("Tensor",(()=>T))}Object.defineProperty(T,Symbol.hasInstance,{value:e=>!!e&&null!=e.data&&null!=e.dataSync&&null!=e.throwIfDisposed}),k();class A extends T{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!s.r1(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);g().disposeTensor(this),this.dataId=e.dataId,g().incRef(this,null)}dispose(){g().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(A,Symbol.hasInstance,{value:e=>e instanceof T&&null!=e.assign&&e.assign instanceof Function})},30565:(e,t,n)=>{n.r(t),n.d(t,{assertTypesMatch:()=>i,getTensorsInContainer:()=>u,isTensorInList:()=>l,makeTypesMatch:()=>o});var r=n(50259),s=n(52046),a=n(45119);
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
function o(e,t){if(e.dtype===t.dtype)return[e,t];const n=(0,s.Tu)(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function i(e,t){(0,a.vA)(e.dtype===t.dtype,(()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`))}function l(e,t){return t.some((t=>t.id===e.id))}function u(e){const t=[];return c(e,t,new Set),t}function c(e,t,n){if(null==e)return;if(e instanceof r.qY)return void t.push(e);if(s=e,!Array.isArray(s)&&"object"!=typeof s)return;var s;const a=e;for(const e in a){const r=a[e];n.has(r)||(n.add(r),c(r,t,n))}}},28189:(e,t,n)=>{n.d(t,{MZ:()=>u,YT:()=>d,j1:()=>p});var r=n(41585),s=n(46574),a=n(50259),o=n(52046),i=n(83879),l=n(45119);
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
function u(e,t){let n=e;if((0,i.isTypedArray)(e))return"string"===t?[]:[e.length];if((0,o.Oj)(e)){const t=e.channels||"RGBA";return[e.height,e.width*t.length]}if((0,o.Nw)(e))return[e.buffer.size/(null==t?4:(0,l.jv)(t))];if(!Array.isArray(e))return[];const r=[];for(;Array.isArray(n)||(0,i.isTypedArray)(n)&&"string"!==t;)r.push(n.length),n=n[0];return Array.isArray(e)&&(0,s._K)().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&c(e,r,[]),r}function c(e,t,n){if(n=n||[],!Array.isArray(e)&&!(0,i.isTypedArray)(e))return void(0,l.vA)(0===t.length,(()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`));(0,l.vA)(t.length>0,(()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`)),(0,l.vA)(e.length===t[0],(()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`));const r=t.slice(1);for(let t=0;t<e.length;++t)c(e[t],r,n.concat(t))}function h(e,t,n,r){if("string_or_numeric"!==e){if(null==e)throw new Error("Expected dtype cannot be null.");if("numeric"!==e&&e!==t||"numeric"===e&&"string"===t)throw new Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function d(e,t,n,s="numeric"){if(e instanceof(0,a.tp)())return h(s,e.dtype,t,n),e;let o=(0,l.X$)(e);if("string"!==o&&["bool","int32","float32"].indexOf(s)>=0&&(o=s),h(s,o,t,n),null==e||!(0,i.isTypedArray)(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e){const r=null==e?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}const c=u(e,o);(0,i.isTypedArray)(e)||Array.isArray(e)||(e=[e]);const d="string"!==o?(0,i.toTypedArray)(e,o):(0,i.flatten)(e,[],!0);return r.T2.makeTensor(d,c,o)}function p(e,t,n,r="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map(((e,s)=>d(e,`${t}[${s}]`,n,r)))}},52046:(e,t,n)=>{
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
var r,s,a,o,i;n.d(t,{Nw:()=>d,Oj:()=>h,Tu:()=>u,ch:()=>c,rg:()=>r}),function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"}(r||(r={})),function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"}(s||(s={})),function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"}(a||(a={})),function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"}(o||(o={})),function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"}(i||(i={}));const l={float32:o,int32:s,bool:a,complex64:i};function u(e,t){if("string"===e||"string"===t){if("string"===e&&"string"===t)return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return l[e][t]}function c(e){return u(e,"int32")}function h(e){return null!=e&&"object"==typeof e&&"texture"in e&&e.texture instanceof WebGLTexture}function d(e){return"undefined"!=typeof GPUBuffer&&null!=e&&"object"==typeof e&&"buffer"in e&&e.buffer instanceof GPUBuffer}},83879:(e,t,n)=>{n.r(t),n.d(t,{arraysEqual:()=>a.r1,arraysEqualWithNull:()=>a.e_,assert:()=>a.vA,assertNonNegativeIntegerDimensions:()=>a.SA,assertNonNull:()=>a.HO,assertShapesMatch:()=>a.O3,bytesFromStringArray:()=>a.SL,bytesPerElement:()=>a.jv,checkConversionForErrors:()=>a.nd,clamp:()=>a.qE,computeStrides:()=>a.Ur,convertBackendValuesAndArrayBuffer:()=>a.o2,createScalarValue:()=>v,createShuffledIndices:()=>a.P8,decodeString:()=>E,distSquared:()=>a.oO,encodeString:()=>S,fetch:()=>A,fingerPrint64:()=>w,flatten:()=>$,getArrayFromDType:()=>a.Ab,getTypedArrayFromDType:()=>a.ce,hasEncodingLoss:()=>a.BE,hexToLong:()=>l,indexToLoc:()=>a._k,inferDtype:()=>a.X$,inferFromImplicitShape:()=>a.XT,isBoolean:()=>a.Lm,isFunction:()=>a.Tn,isInt:()=>a.E6,isNumber:()=>a.Et,isPromise:()=>a.yL,isScalarShape:()=>a.Sf,isString:()=>a.Kg,isTypedArray:()=>x,isValidDtype:()=>a.xn,locToIndex:()=>a.sX,makeOnesTypedArray:()=>a.FZ,makeZerosNestedTypedArray:()=>a.c7,makeZerosTypedArray:()=>a.Ty,nearestDivisor:()=>a.lK,nearestLargerEven:()=>a.eV,now:()=>k,parseAxisParam:()=>a.Y6,randUniform:()=>a.so,repeatedTry:()=>a._q,rightPad:()=>a.av,shuffle:()=>a.k4,shuffleCombo:()=>a.a0,sizeFromShape:()=>a.Ze,sizeToSquarishShape:()=>a.gS,squeezeShape:()=>a.gx,sum:()=>a.cz,swap:()=>a.wg,tanh:()=>a.ym,toNestedArray:()=>a.yw,toTypedArray:()=>T});var r=n(46574),s=n(86448),a=n(45119),o=n(28570);
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
const i=n.n(o)()||o;function l(e){return i.fromString(e,!0,16)}const u=l("c3a5c85c97cb3127"),c=l("b492b66fbe98f273"),h=l("9ae16a3b2f90404f");function d(e){return e.xor(e.shru(47))}function p(e,t,n){const r=e.slice(t,t+n);return i.fromBytes(Array.from(r),!0,!0)}function f(e,t){return p(e,t,8)}function g(e,t){return p(e,t,4)}function m(e,t){return 0===t?e:e.shru(t).or(e.shl(64-t))}function y(e,t,n=l("9ddfea08eb382d69")){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let s=t.xor(r).mul(n);return s=s.xor(s.shru(47)),s=s.mul(n),s}function b(e,t,n,r){return function(e,t,n,r,s,a){s=s.add(e),a=m(a.add(s).add(r),21);const o=s;return s=(s=s.add(t)).add(n),a=a.add(m(s,44)),[s.add(r),a.add(o)]}(f(e,t),f(e,t+8),f(e,t+16),f(e,t+24),n,r)}function w(e,t=e.length){const n=i.fromNumber(81,!0);if(t<=32)return t<=16?function(e,t=e.length){if(t>=8){const n=h.add(2*t),r=f(e,0).add(h),s=f(e,t-8);return y(m(s,37).mul(n).add(r),m(r,25).add(s).mul(n),n)}if(t>=4){const n=h.add(2*t);return y(g(e,0).shl(3).add(t),g(e,t-4),n)}if(t>0){const n=e[0]+(e[t>>1]<<8),r=t+(e[t-1]<<2);return d(h.mul(n).xor(u.mul(r))).mul(h)}return h}(e,t):function(e,t=e.length){const n=h.add(2*t),r=f(e,0).mul(c),s=f(e,8),a=f(e,t-8).mul(n),o=f(e,t-16).mul(h);return y(m(r.add(s),43).add(m(a,30)).add(o),r.add(m(s.add(h),18)).add(a),n)}(e,t);if(t<=64)return function(e,t=e.length){const n=h.add(2*t),r=f(e,0).mul(h),s=f(e,8),a=f(e,t-8).mul(n),o=f(e,t-16).mul(h),i=m(r.add(s),43).add(m(a,30)).add(o),l=y(i,r.add(m(s.add(h),18)).add(a),n),u=f(e,16).mul(n),c=f(e,24),d=i.add(f(e,t-32)).mul(n),p=l.add(f(e,t-24)).mul(n);return y(m(u.add(c),43).add(m(d,30)).add(p),u.add(m(c.add(r),18)).add(d),n)}(e,t);let r=n,s=n.mul(c).add(113),a=d(s.mul(h).add(113)).mul(h),o=[i.UZERO,i.UZERO],l=[i.UZERO,i.UZERO];r=r.mul(h).add(f(e,0));let p=0;const w=64*(t-1>>6),v=w+(t-1&63)-63;do{r=m(r.add(s).add(o[0]).add(f(e,p+8)),37).mul(c),s=m(s.add(o[1]).add(f(e,p+48)),42).mul(c),r=r.xor(l[1]),s=s.add(o[0]).add(f(e,p+40)),a=m(a.add(l[0]),33).mul(c),o=b(e,p,o[1].mul(c),r.add(l[0])),l=b(e,p+32,a.add(l[1]),s.add(f(e,p+16))),[a,r]=[r,a],p+=64}while(p!==w);const T=c.add(a.and(255).shl(1));return p=v,l[0]=l[0].add(t-1&63),o[0]=o[0].add(l[0]),l[0]=l[0].add(o[0]),r=m(r.add(s).add(o[0]).add(f(e,p+8)),37).mul(T),s=m(s.add(o[1]).add(f(e,p+48)),42).mul(T),r=r.xor(l[1].mul(9)),s=s.add(o[0].mul(9).add(f(e,p+40))),a=m(a.add(l[0]),33).mul(T),o=b(e,p,o[1].mul(T),r.add(l[0])),l=b(e,p+32,a.add(l[1]),s.add(f(e,p+16))),[a,r]=[r,a],y(y(o[0],l[0],T).add(d(s).mul(u)).add(a),y(o[1],l[1],T).add(r),T)}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
function v(e,t){return"string"===t?S(e):T([e],t)}function T(e,t){if("string"===t)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=$(e)),(0,r._K)().getBool("DEBUG")&&a.nd(e,t),function(e,t){return e instanceof Float32Array&&"float32"===t||e instanceof Int32Array&&"int32"===t||e instanceof Uint8Array&&"bool"===t}(e,t))return e;if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t){const t=new Uint8Array(e.length);for(let n=0;n<t.length;++n)0!==Math.round(e[n])&&(t[n]=1);return t}throw new Error(`Unknown data type ${t}`)}function k(){return(0,r._K)().platform.now()}function A(e,t){return(0,r._K)().platform.fetch(e,t)}function S(e,t="utf-8"){return t=t||"utf-8",(0,r._K)().platform.encode(e,t)}function E(e,t="utf-8"){return t=t||"utf-8",(0,r._K)().platform.decode(e,t)}function x(e){return null!=(0,r._K)().platform.isTypedArray?(0,r._K)().platform.isTypedArray(e):(0,s.Y)(e)}function $(e,t=[],n=!1){if(null==t&&(t=[]),"boolean"==typeof e||"number"==typeof e||"string"==typeof e||a.yL(e)||null==e||x(e)&&n)t.push(e);else if(Array.isArray(e)||x(e))for(let r=0;r<e.length;++r)$(e[r],t,n);else{let r=-1;for(const t of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(t)&&(r=Math.max(r,Number(t)));for(let s=0;s<=r;s++)$(e[s],t,n)}return t}},45119:(e,t,n)=>{
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
function r(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,i(e,t,n)}function s(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let n=e.length,r=0;for(;n>0;)r=Math.random()*n|0,n--,i(e,n,r),i(t,n,r)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function o(e){return e%2==0?e:e+1}function i(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function l(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function u(e,t){const n=Math.random();return t*n+(1-n)*e}function c(e,t){let n=0;for(let r=0;r<e.length;r++){const s=Number(e[r])-Number(t[r]);n+=s*s}return n}function h(e,t){if(!e)throw new Error("string"==typeof t?t:t())}function d(e,t,n=""){h(y(e,t),(()=>n+` Shapes ${e} and ${t} must match`))}function p(e){h(null!=e,(()=>"The input to the tensor constructor must be a non-null value."))}function f(e){if(0===e.length)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function g(e){return 0===e.length}function m(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(null!==e[n]&&null!==t[n]&&e[n]!==t[n])return!1;return!0}function y(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function b(e){return e%1==0}function w(e){if(null!=Math.tanh)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{const t=Math.exp(2*e);return(t-1)/(t+1)}}function v(e){const t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function T(e){const t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return r(t),t}function k(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function A(e,t=(e=>0),n,r){return new Promise(((s,a)=>{let o=0;const i=()=>{if(e())return void s();o++;const l=t(o);null!=n&&o>=n?a():null!=r?r(i,l):setTimeout(i,l)};i()}))}function S(e,t){let n=1,r=-1;for(let t=0;t<e.length;++t)if(e[t]>=0)n*=e[t];else if(-1===e[t]){if(-1!==r)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${t}`);r=t}else if(e[t]<0)throw Error(`Shapes can not be < 0. Found ${e[t]} at dim ${t}`);if(-1===r){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(0===n)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!=0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);const s=e.slice();return s[r]=t/n,s}function E(e,t){const n=t.length;return h((e=null==e?t.map(((e,t)=>t)):[].concat(e)).every((e=>e>=-n&&e<n)),(()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`)),h(e.every((e=>b(e))),(()=>`All values in axis param must be integers but got axis ${e}`)),e.map((e=>e<0?n+e:e))}function x(e,t){const n=[],r=[],s=null!=t&&Array.isArray(t)&&0===t.length,a=null==t||s?null:E(t,e).sort();let o=0;for(let t=0;t<e.length;++t){if(null!=a){if(a[o]===t&&1!==e[t])throw new Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(null==a[o]||a[o]>t)&&1===e[t]&&(n.push(e[t]),r.push(t)),a[o]<=t&&o++}1!==e[t]&&(n.push(e[t]),r.push(t))}return{newShape:n,keptDims:r}}function $(e,t){return M(e,t)}function M(e,t){let n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else if("bool"===e)n=new Uint8Array(t);else{if("string"!==e)throw new Error(`Unknown data type ${e}`);n=new Array(t)}return n}function N(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function I(e){return"bool"===e||"complex64"===e||"float32"===e||"int32"===e||"string"===e}function _(e,t){return"complex64"!==t&&(("float32"!==t||"complex64"===e)&&(("int32"!==t||"float32"===e||"complex64"===e)&&("bool"!==t||"bool"!==e)))}function D(e){if("float32"===e||"int32"===e)return 4;if("complex64"===e)return 8;if("bool"===e)return 1;throw new Error(`Unknown dtype ${e}`)}function R(e){if(null==e)return 0;let t=0;return e.forEach((e=>t+=e.length)),t}function Y(e){return"string"==typeof e||e instanceof String}function B(e){return"boolean"==typeof e}function F(e){return"number"==typeof e}function P(e){return Array.isArray(e)?P(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":F(e)?"float32":Y(e)?"string":B(e)?"bool":"float32"}function C(e){return!!(e&&e.constructor&&e.call&&e.apply)}function O(e,t){for(let n=t;n<e;++n)if(e%n==0)return n;return e}function L(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function W(e,t,n,r=!1){const s=new Array;if(1===t.length){const a=t[0]*(r?2:1);for(let t=0;t<a;t++)s[t]=n[e+t]}else{const a=t[0],o=t.slice(1),i=o.reduce(((e,t)=>e*t))*(r?2:1);for(let t=0;t<a;t++)s[t]=W(e+t*i,o,n,r)}return s}function z(e,t,n=!1){if(0===e.length)return t[0];const r=e.reduce(((e,t)=>e*t))*(n?2:1);if(0===r)return[];if(r!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return W(0,e,t,n)}function G(e,t){if(Array.isArray(e))return e;if("float32"===t)return e instanceof Float32Array?e:new Float32Array(e);if("int32"===t)return e instanceof Int32Array?e:new Int32Array(e);if("bool"===t||"string"===t)return Uint8Array.from(new Int32Array(e));throw new Error(`Unknown dtype ${t}`)}function K(e,t){const n=U(e,t);for(let e=0;e<n.length;e++)n[e]=1;return n}function U(e,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function j(e,t){const n=e.reduce(((e,t)=>e*t),1);if(null==t||"float32"===t)return z(e,new Float32Array(n));if("int32"===t)return z(e,new Int32Array(n));if("bool"===t)return z(e,new Uint8Array(n));throw new Error(`Unknown data type ${t}`)}function q(e){e.forEach((t=>{h(Number.isInteger(t)&&t>=0,(()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`))}))}function H(e,t,n){if(0===t)return 0;if(1===t)return e[0];let r=e[e.length-1];for(let t=0;t<e.length-1;++t)r+=n[t]*e[t];return r}function V(e,t,n){if(0===t)return[];if(1===t)return[e];const r=new Array(t);for(let t=0;t<r.length-1;++t)r[t]=Math.floor(e/n[t]),e-=r[t]*n[t];return r[r.length-1]=e,r}function Z(e){return e&&e.then&&"function"==typeof e.then}n.d(t,{Ab:()=>M,BE:()=>_,E6:()=>b,Et:()=>F,FZ:()=>K,HO:()=>p,Kg:()=>Y,Lm:()=>B,O3:()=>d,P8:()=>T,SA:()=>q,SL:()=>R,Sf:()=>g,Tn:()=>C,Ty:()=>U,Ur:()=>L,X$:()=>P,XT:()=>S,Y6:()=>E,Ze:()=>f,_k:()=>V,_q:()=>A,a0:()=>s,av:()=>k,c7:()=>j,ce:()=>$,cz:()=>l,eV:()=>o,e_:()=>m,gS:()=>v,gx:()=>x,jv:()=>D,k4:()=>r,lK:()=>O,nd:()=>N,o2:()=>G,oO:()=>c,qE:()=>a,r1:()=>y,sX:()=>H,so:()=>u,vA:()=>h,wg:()=>i,xn:()=>I,yL:()=>Z,ym:()=>w,yw:()=>z})}}]);