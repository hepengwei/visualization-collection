"use strict";(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[845],{68713:function(n,t,e){e.d(t,{JL:function(){return r},Zu:function(){return o}});class r{constructor(n,t){this.backend=n,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(n){return this.data.has(n)||this.dataMover.moveData(this.backend,n),this.data.get(n)}set(n,t){this.dataIdsCount++,this.data.set(n,t)}has(n){return this.data.has(n)}delete(n){return this.dataIdsCount--,this.data.delete(n)}numDataIds(){return this.dataIdsCount}}class o{refCount(n){return i("refCount")}incRef(n){return i("incRef")}timerAvailable(){return!0}time(n){return i("time")}read(n){return i("read")}readSync(n){return i("readSync")}readToGPU(n,t){return i("readToGPU")}numDataIds(){return i("numDataIds")}disposeData(n,t){return i("disposeData")}write(n,t,e){return i("write")}move(n,t,e,r,o){return i("move")}createTensorFromGPUData(n,t,e){return i("createTensorFromGPUData")}memory(){return i("memory")}floatPrecision(){return i("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}dispose(){return i("dispose")}}function i(n){throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}},83337:function(n,t,e){
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
function r(n,t,e){const r=function(n,t,e){return function(n,t,e){let r=0,o=n.length,i=0,s=!1;for(;r<o;){i=r+(o-r>>>1);const a=e(t,n[i]);a>0?r=i+1:(o=i,s=!a)}return s?r:-r-1}(n,t,e||o)}(n,t,e),i=r<0?-(r+1):r;n.splice(i,0,t)}function o(n,t){return n>t?1:n<t?-1:0}
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
function i(n,t,e,r,o){return u(n,t,e,r,o,0)}function s(n,t,e,r,o,i){return u(n,t,e,r,o,0,!1,i,!0)}function a(n,t,e,r,o,i){return u(n,t,e,r,o,i,!0)}function u(n,t,e,o,i,s,a=!1,u=!1,h=!1){const d=[];for(let n=0;n<t.length;n++)t[n]>i&&d.push({score:t[n],boxIndex:n,suppressBeginIndex:0});d.sort(f);const p=s>0?-.5/s:0,m=[],g=[];for(;m.length<e&&d.length>0;){const t=d.pop(),{score:e,boxIndex:s,suppressBeginIndex:a}=t;if(e<i)break;let u=!1;for(let e=m.length-1;e>=a;--e){const r=c(n,s,m[e]);if(r>=o){u=!0;break}if(t.score=t.score*l(o,p,r),t.score<=i)break}t.suppressBeginIndex=m.length,u||(t.score===e?(m.push(s),g.push(t.score)):t.score>i&&r(d,t,f))}const b=m.length,y=e-b;u&&y>0&&(m.push(...new Array(y).fill(0)),g.push(...new Array(y).fill(0)));const w={selectedIndices:m};return a&&(w.selectedScores=g),h&&(w.validOutputs=b),w}function c(n,t,e){const r=n.subarray(4*t,4*t+4),o=n.subarray(4*e,4*e+4),i=Math.min(r[0],r[2]),s=Math.min(r[1],r[3]),a=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),d=(a-i)*(u-s),p=(f-c)*(h-l);if(d<=0||p<=0)return 0;const m=Math.max(i,c),g=Math.max(s,l),b=Math.min(a,f),y=Math.min(u,h),w=Math.max(b-m,0)*Math.max(y-g,0);return w/(d+p-w)}function l(n,t,e){const r=Math.exp(t*e*e);return e<=n?r:0}function f(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}e.d(t,{GP:function(){return i},qP:function(){return s},pA:function(){return a}})},48333:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(72657);
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
 */function o(n,t){const e=[];for(let n=0;n<t.length;n++)t[n]&&e.push(n);const o=(0,r.f)(n,"int32"),i=(0,r.f)([e.length,n.length],"int32");for(let t=0;t<e.length;t++){const r=o.indexToLoc(e[t]),s=t*n.length;i.values.set(r,s)}return i.toTensor()}},97097:function(n,t,e){e.d(t,{BV:function(){return k},wv:function(){return w}});var r=e(68713),o=e(22885),i=e(55938),s=e(29121),a=e(26151),u=e(64706),c=e(79122),l=e(20569);
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
class f{constructor(n,t){this.backendTimer=n,this.logger=t,null==t&&(this.logger=new d)}profileKernel(n,t,e){let r;const i=()=>{r=e()};let s;const a=c.now();if(this.backendTimer.timerAvailable())s=this.backendTimer.time(i);else{i();for(const n of r)n.dataSync();s=Promise.resolve({kernelMs:c.now()-a})}if((0,o.OB)().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let t=0;t<r.length;t++){const e=r[t];e.data().then((t=>{h(t,e.dtype,n)}))}return{kernelName:n,outputs:r,inputs:t,timeMs:s.then((n=>n.kernelMs)),extraInfo:s.then((n=>null!=n.getExtraProfileInfo?n.getExtraProfileInfo():""))}}logKernelProfile(n){const{kernelName:t,outputs:e,timeMs:r,inputs:o,extraInfo:i}=n;e.forEach((n=>{Promise.all([n.data(),r,i]).then((e=>{this.logger.logKernelProfile(t,n,e[0],e[1],o,e[2])}))}))}}function h(n,t,e){if("float32"!==t)return!1;for(let t=0;t<n.length;t++){const r=n[t];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${e}'`),!0}return!1}class d{logKernelProfile(n,t,e,r,o,i){const s="number"==typeof r?l.oj(`${r}ms`,9):r.error,a=l.oj(n,25),u=t.rank,c=t.size,f=l.oj(t.shape.toString(),14);let h="";for(const n in o){const e=o[n];if(null!=e){const r=e.shape||t.shape,o=r.length;h+=`${n}: ${o}D ${o>0?r:""} `}}console.log(`%c${a}\t%c${s}\t%c${u}D ${f}\t%c${c}\t%c${h}\t%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}var p=e(4077),m=e(80747);
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
function g(n){return null!=n.kernelName}class b{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map((n=>n.name))))}}}dispose(){for(const n in this.registeredVariables)this.registeredVariables[n].dispose()}}class y{constructor(n){this.ENV=n,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new b}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then((()=>{}));if(null!=this.backendInstance)return;const n=this.getSortedBackends();for(let t=0;t<n.length;t++){const e=n[t];if(await this.initializeBackend(e).success)return void await this.setBackend(e)}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){const{name:n,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${n}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(n)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(n){if(!(n in this.registry)){if(!(n in this.registryFactory))return null;{const{asyncInit:t}=this.initializeBackend(n);if(t)return null}}return this.registry[n]}findBackendFactory(n){return n in this.registryFactory?this.registryFactory[n].factory:null}registerBackend(n,t,e=1){return n in this.registryFactory?(u.Z(`${n} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[n]={factory:t,priority:e},!0)}async setBackend(n){if(null==this.registryFactory[n])throw new Error(`Backend name '${n}' not found in registry`);if(this.backendName=n,null==this.registry[n]){this.backendInstance=null;const{success:t,asyncInit:e}=this.initializeBackend(n);if(!(e?await t:t))return!1}return this.backendInstance=this.registry[n],this.setupRegisteredKernels(),this.profiler=new f(this.backendInstance),!0}setupRegisteredKernels(){(0,a.tr)(this.backendName).forEach((n=>{null!=n.setupFunc&&n.setupFunc(this.backendInstance)}))}disposeRegisteredKernels(n){(0,a.tr)(n).forEach((t=>{null!=t.disposeFunc&&t.disposeFunc(this.registry[n])}))}initializeBackend(n){const t=this.registryFactory[n];if(null==t)throw new Error(`Cannot initialize backend ${n}, no registration found.`);try{const e=t.factory();if(!e||e instanceof r.Zu||"function"!=typeof e.then)return this.registry[n]=e,{success:!0,asyncInit:!1};{const t=++this.pendingBackendInitId,r=e.then((e=>!(t<this.pendingBackendInitId)&&(this.registry[n]=e,this.pendingBackendInit=null,!0))).catch((e=>(t<this.pendingBackendInitId||(this.pendingBackendInit=null,u.Z(`Initialization of backend ${n} failed`),u.Z(e.stack||e.message)),!1)));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}}catch(t){return u.Z(`Initialization of backend ${n} failed`),u.Z(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(n){if(!(n in this.registryFactory))throw new Error(`${n} backend not found in registry`);this.backendName===n&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,n in this.registry&&(this.disposeRegisteredKernels(n),this.registry[n].dispose(),delete this.registry[n]),delete this.registryFactory[n],this.backendName===n&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(((n,t)=>this.registryFactory[t].priority-this.registryFactory[n].priority))}initializeBackendsAndReturnBest(){const n=this.getSortedBackends();for(let t=0;t<n.length;t++){const e=n[t],{success:r,asyncInit:o}=this.initializeBackend(e);if(o||r)return{name:e,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(n,t){const e=this.state.tensorInfo.get(t),r=e.backend,o=this.readSync(t),i=r.refCount(t);r.disposeData(t,!0),e.backend=n,n.move(t,o,e.shape,e.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(n,t){let e,r=null;if(null==t){if("function"!=typeof n)throw new Error("Please provide a function to tidy()");t=n}else{if("string"!=typeof n&&!(n instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=n}return this.scopedRun((()=>this.startScope(r)),(()=>this.endScope(e)),(()=>(e=t(),e instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),e)))}scopedRun(n,t,e){n();try{const n=e();return t(),n}catch(n){throw t(),n}}nextTensorId(){return y.nextTensorId++}nextVariableId(){return y.nextVariableId++}clone(n){const t=k.runKernel(s.iJz,{x:n}),e={x:n};return this.addTapeNode(this.state.activeScope.name,e,[t],(n=>({x:()=>{const t={x:n},e={dtype:"float32"};return k.runKernel(s.RFZ,t,e)}})),[],{}),t}runKernel(n,t,e){null==this.backendName&&this.backend;if(!(null!=(0,a.pI)(n,this.backendName)))throw new Error(`Kernel '${n}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:n,inputs:t,attrs:e})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(n,t,e){const r=this.backend.numDataIds();let o=0;e.forEach((n=>{o+="complex64"===n.dtype?3:1}));const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=r-t-o-i;if(s>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${s} data ids) after running '${n}'`)}runKernelFunc(n){let t,e=[];const r=this.isTapeOn(),o=this.state.numBytes,i=this.state.numTensors;let s,u;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;const c=g(n)?n.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(g(n)){const{kernelName:t,inputs:o,attrs:i}=n;null==this.backendName&&this.backend;const c=(0,a.pI)(t,this.backendName);l.hu(null!=c,(()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`)),s=()=>{const n=this.backend.numDataIds();u=c.kernelFunc({inputs:o,attrs:i,backend:this.backend});const s=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,n,s);const a=s.map((n=>null!=n.rank?n:this.makeTensorFromTensorInfo(n)));if(r){const n=this.getTensorsForGradient(t,o,a);e=this.saveTensorsForBackwardMode(n)}return a}}else{const{forwardFunc:t}=n,o=n=>{r&&(e=n.map((n=>this.keep(this.clone(n)))))};s=()=>{const n=this.backend.numDataIds();u=this.tidy((()=>t(this.backend,o)));const e=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,n,e),e}}const{inputs:f,attrs:h}=n,d=g(n)?null:n.backwardsFunc;let p;return this.scopedRun((()=>this.state.kernelDepth++),(()=>this.state.kernelDepth--),(()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(p=this.profiler.profileKernel(c,f,(()=>s())),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(p),t=p.outputs):t=s()})),r&&this.addTapeNode(c,f,t,d,e,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(f).map((n=>null!=f[n]?f[n].shape:null)),outputShapes:t.map((n=>n.shape)),kernelTimeMs:p.timeMs,extraInfo:p.extraInfo}),Array.isArray(u)?t:t[0]}saveTensorsForBackwardMode(n){const t=n.map((n=>this.keep(this.clone(n))));return t}getTensorsForGradient(n,t,e){const r=(0,a.uk)(n);if(null!=r){const n=r.inputsToSave||[],o=r.outputsToSave||[];let i;r.saveAllInputs?(l.hu(Array.isArray(t),(()=>"saveAllInputs is true, expected inputs to be an array.")),i=Object.keys(t).map((n=>t[n]))):i=n.map((n=>t[n]));const s=e.filter(((n,t)=>o[t]));return i.concat(s)}return[]}makeTensor(n,t,e,r){if(null==n)throw new Error("Values passed to engine.makeTensor() are null");e=e||"float32",r=r||this.backend;let o=n;"string"===e&&l.HD(n[0])&&(o=n.map((n=>c.encodeString(n))));const i=r.write(o,t,e),s=new p.es(t,e,i,this.nextTensorId());if(this.trackTensor(s,r),"string"===e){const n=this.state.tensorInfo.get(i),t=(0,l.Ub)(o);this.state.numBytes+=t-n.bytes,n.bytes=t}return s}makeTensorFromDataId(n,t,e,r){const o={dataId:n,shape:t,dtype:e=e||"float32"};return this.makeTensorFromTensorInfo(o,r)}makeTensorFromTensorInfo(n,t){const{dataId:e,shape:r,dtype:o}=n,i=new p.es(r,o,e,this.nextTensorId());return this.trackTensor(i,t),i}makeVariable(n,t=!0,e,r){e=e||this.nextVariableId().toString(),null!=r&&r!==n.dtype&&(n=n.cast(r));const o=new p._w(n,t,e,this.nextTensorId());if(null!=this.state.registeredVariables[o.name])throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(n,t){this.state.numTensors++,"string"===n.dtype&&this.state.numStringTensors++;let e=0;"complex64"!==n.dtype&&"string"!==n.dtype&&(e=n.size*l.bT(n.dtype)),this.state.numBytes+=e,this.state.tensorInfo.has(n.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(n.dataId,{backend:t||this.backend,dtype:n.dtype,shape:n.shape,bytes:e})),n instanceof p._w||this.track(n)}incRef(n,t){this.trackTensor(n,t),this.backend.incRef(n.dataId)}removeDataId(n,t){this.state.tensorInfo.has(n)&&this.state.tensorInfo.get(n).backend===t&&(this.state.tensorInfo.delete(n),this.state.numDataBuffers--)}disposeTensor(n){if(!this.state.tensorInfo.has(n.dataId))return;const t=this.state.tensorInfo.get(n.dataId);if(this.state.numTensors--,"string"===n.dtype&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),"complex64"!==n.dtype&&"string"!==n.dtype){const t=n.size*l.bT(n.dtype);this.state.numBytes-=t}t.backend.disposeData(n.dataId)&&this.removeDataId(n.dataId,t.backend)}disposeVariables(){for(const n in this.state.registeredVariables){const t=this.state.registeredVariables[n];this.disposeVariable(t)}}disposeVariable(n){this.disposeTensor(n),null!=this.state.registeredVariables[n.name]&&delete this.state.registeredVariables[n.name]}memory(){const n=this.backend.memory();return n.numTensors=this.state.numTensors,n.numDataBuffers=this.state.numDataBuffers,n.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(n.unreliable=!0,null==n.reasons&&(n.reasons=[]),n.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),n}async profile(n){this.state.profiling=!0;const t=this.state.numBytes,e=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await n(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map((n=>n.totalBytesSnapshot))),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-e;for(const n of this.state.activeProfile.kernels)n.kernelTimeMs=await n.kernelTimeMs,n.extraInfo=await n.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(n,t,e,r,o,i){const s={id:this.state.nextTapeNodeId++,kernelName:n,inputs:t,outputs:e,saved:o},u=(0,a.uk)(n);null!=u&&(r=u.gradFunc),null!=r&&(s.gradient=n=>(n=n.map(((n,t)=>{if(null==n){const n=e[t],r=l.wT(n.size,n.dtype);return this.makeTensor(r,n.shape,n.dtype)}return n})),r(n.length>1?n:n[0],o,i))),this.state.activeTape.push(s)}keep(n){return n.kept=!0,n}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(n){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};n&&(t.name=n),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(n){const t=(0,m.getTensorsInContainer)(n),e=new Set(t.map((n=>n.id)));for(let n=0;n<this.state.activeScope.track.length;n++){const t=this.state.activeScope.track[n];t.kept||e.has(t.id)||t.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach((n=>{n.kept||n.scopeId!==r.id||this.track(n)}))}gradients(n,t,e,r=!1){if(l.hu(t.length>0,(()=>"gradients() received an empty list of xs.")),null!=e&&"float32"!==e.dtype)throw new Error(`dy must have 'float32' dtype, but has '${e.dtype}'`);const o=this.scopedRun((()=>this.startTape()),(()=>this.endTape()),(()=>this.tidy("forward",n)));l.hu(o instanceof p.es,(()=>"The result y returned by f() must be a tensor."));const i=
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
function(n,t,e){const r={},o={};for(let n=0;n<t.length;n++)r[t[n].id]=!0;for(let e=0;e<n.length;e++){const i=n[e],s=i.inputs;for(const n in s){const e=s[n];let a=!1;for(let n=0;n<t.length;n++)if(r[e.id]){i.outputs.forEach((n=>r[n.id]=!0)),a=!0,o[i.id]=!0;break}if(a)break}}const i={};i[e.id]=!0;const s={};for(let t=n.length-1;t>=0;t--){const e=n[t],r=e.inputs;for(let n=0;n<e.outputs.length;n++)if(i[e.outputs[n].id]){for(const n in r)i[r[n].id]=!0,s[e.id]=!0;break}}const a=[];for(let t=0;t<n.length;t++){const e=n[t];if(o[e.id]&&s[e.id]){const n={};for(const t in e.inputs){const o=e.inputs[t];r[o.id]&&(n[t]=o)}const t=Object.assign({},e);t.inputs=n,t.outputs=e.outputs,a.push(t)}}return a}(this.state.activeTape,t,o);if(!r&&0===i.length&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(()=>{const n={};n[o.id]=null==e?function(n){const t=(0,l.p8)((0,l.NA)(n),"float32");return k.makeTensor(t,n,"float32")}(o.shape):e,function(n,t,e,r){for(let o=t.length-1;o>=0;o--){const i=t[o],s=[];if(i.outputs.forEach((t=>{const e=n[t.id];null!=e?s.push(e):s.push(null)})),null==i.gradient)throw new Error(`Cannot compute gradient: gradient function not found for ${i.kernelName}.`);const a=i.gradient(s);for(const t in i.inputs){if(!(t in a))throw new Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(a)}.`);const o=e((()=>a[t]()));if("float32"!==o.dtype)throw new Error(`Error in gradient for op ${i.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${o.dtype}'`);const s=i.inputs[t];if(!l.cO(o.shape,s.shape))throw new Error(`Error in gradient for op ${i.kernelName}. The gradient of input '${t}' has shape '${o.shape}', which does not match the shape of the input '${s.shape}'`);if(null==n[s.id])n[s.id]=o;else{const t=n[s.id];n[s.id]=r(t,o),t.dispose()}}}}(n,i,(n=>this.tidy(n)),v);const r=t.map((t=>n[t.id]));return 0===this.state.gradientDepth&&(this.state.activeTape.forEach((n=>{for(const t of n.saved)t.dispose()})),this.state.activeTape=null),{value:o,grads:r}}))}customGrad(n){return l.hu(l.mf(n),(()=>"The f passed in customGrad(f) must be a function.")),(...t)=>{let e;l.hu(t.every((n=>n instanceof p.es)),(()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors"));const r={};t.forEach(((n,t)=>{r[t]=n}));return this.runKernelFunc({forwardFunc:(r,o)=>(e=n(...t,o),l.hu(e.value instanceof p.es,(()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor")),l.hu(l.mf(e.gradFunc),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.")),e.value),backwardsFunc:(n,r)=>{const o=e.gradFunc(n,r),i=Array.isArray(o)?o:[o];l.hu(i.length===t.length,(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).")),l.hu(i.every((n=>n instanceof p.es)),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."));const s={};return i.forEach(((n,t)=>{s[t]=()=>n})),s},inputs:r})}}readSync(n){return this.state.tensorInfo.get(n).backend.readSync(n)}read(n){return this.state.tensorInfo.get(n).backend.read(n)}readToGPU(n,t){return this.state.tensorInfo.get(n).backend.readToGPU(n,t)}async time(n){const t=(0,c.now)(),e=await this.backend.time(n);return e.wallMs=(0,c.now)()-t,e}track(n){return null!=this.state.activeScope&&(n.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(n)),n}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new b;for(const n in this.registry)this.disposeRegisteredKernels(n),this.registry[n].dispose(),delete this.registry[n];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function w(){const n=(0,i.D)();if(null==n._tfengine){const t=new o.qA(n);n._tfengine=new y(t)}return(0,o.iG)(n._tfengine.ENV),(0,p.Vi)((()=>n._tfengine)),n._tfengine}y.nextTensorId=0,y.nextVariableId=0;const k=w();function v(n,t){const e={a:n,b:t};return k.runKernel(s.mm_,e)}},22885:function(n,t,e){e.d(t,{OB:function(){return a},Vi:function(){return u},iG:function(){return c},qA:function(){return i}});var r=e(20569);
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
 */const o="tfjsflags";class i{constructor(n){this.global=n,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=s,this.populateURLFlags()}setPlatform(n,t){null!=this.platform&&(a().getBool("IS_TEST")||a().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${n}.`)),this.platformName=n,this.platform=t}registerFlag(n,t,e){if(this.flagRegistry[n]={evaluationFn:t,setHook:e},null!=this.urlFlags[n]){const t=this.urlFlags[n];a().getBool("IS_TEST")||a().getBool("PROD")||console.warn(`Setting feature override from URL ${n}: ${t}.`),this.set(n,t)}}async getAsync(n){return n in this.flags||(this.flags[n]=await this.evaluateFlag(n)),this.flags[n]}get(n){if(n in this.flags)return this.flags[n];const t=this.evaluateFlag(n);if((0,r.tI)(t))throw new Error(`Flag ${n} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[n]=t,this.flags[n]}getNumber(n){return this.get(n)}getBool(n){return this.get(n)}getFlags(){return this.flags}get features(){return this.flags}set(n,t){if(null==this.flagRegistry[n])throw new Error(`Cannot set flag ${n} as it has not been registered.`);this.flags[n]=t,null!=this.flagRegistry[n].setHook&&this.flagRegistry[n].setHook(t)}evaluateFlag(n){if(null==this.flagRegistry[n])throw new Error(`Cannot evaluate flag '${n}': no evaluation function found.`);return this.flagRegistry[n].evaluationFn()}setFlags(n){this.flags=Object.assign({},n)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;const n=this.getQueryParams(this.global.location.search);if(o in n){n.tfjsflags.split(",").forEach((n=>{const[t,e]=n.split(":");this.urlFlags[t]=function(n,t){if("true"===(t=t.toLowerCase())||"false"===t)return"true"===t;if(""+ +t===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${n}.`)}(t,e)}))}}}function s(n){const t={};return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,((n,...e)=>(function(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}(t,e[0],e[1]),e.join("=")))),t}function a(){return u}let u=null;function c(n){u=n}},55938:function(n,t,e){
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
let r;function o(){if(null==r){let n;if("undefined"!=typeof window)n=window;else if(void 0!==e.g)n=e.g;else if("undefined"!=typeof process)n=process;else{if("undefined"==typeof self)throw new Error("Could not find a global object");n=self}r=n}return r}function i(n,t){const e=function(){const n=o();return null==n._tfGlobals&&(n._tfGlobals=new Map),n._tfGlobals}();if(e.has(n))return e.get(n);{const r=t();return e.set(n,r),e.get(n)}}e.d(t,{D:function(){return o},R:function(){return i}})},4368:function(n,t,e){e.d(t,{B9:function(){return g},CQ:function(){return w},Cd:function(){return k},Cn:function(){return b},G4:function(){return a},MX:function(){return l},N5:function(){return p},N8:function(){return f},N_:function(){return v},R:function(){return u},SR:function(){return h},VY:function(){return B},XV:function(){return y},cF:function(){return c},cj:function(){return S},jq:function(){return x},lu:function(){return m},sq:function(){return d},x3:function(){return _},y3:function(){return $},ze:function(){return E}});var r=e(97097),o=e(22885),i=e(4077),s=e(80747);
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
function a(){(0,o.OB)().set("PROD",!0)}function u(){(0,o.OB)().set("DEBUG",!0)}function c(){(0,o.OB)().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function l(n){(0,o.OB)().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(n+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function f(){r.BV.disposeVariables()}function h(){return r.BV}function d(){return r.BV.memory()}function p(n){return r.BV.profile(n)}function m(n,t){return r.BV.tidy(n,t)}function g(n){(0,s.getTensorsInContainer)(n).forEach((n=>n.dispose()))}function b(n){return r.BV.keep(n)}function y(n){return r.BV.time(n)}function w(n){return r.BV.setBackend(n)}function k(){return r.BV.ready()}function v(){return r.BV.backendName}function S(n){r.BV.removeBackend(n)}function _(n){return r.BV.findBackend(n)}function E(n){return r.BV.findBackendFactory(n)}function x(n,t,e=1){return r.BV.registerBackend(n,t,e)}function $(){return r.BV.backend}function B(n,t){(0,o.OB)().setPlatform(n,t)}(0,i.FZ)(l)},30633:function(n,t,e){e.d(t,{UQ:function(){return a},cb:function(){return h},fN:function(){return l},h7:function(){return c},pn:function(){return f},ti:function(){return u}});var r=e(97097),o=e(4077),i=e(43740),s=e(20569);
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
function a(n){return s.hu(s.mf(n),(()=>"The f passed in grad(f) must be a function")),(t,e)=>{const o=(0,i._1)(t,"x","tf.grad","string_or_numeric"),a=null!=e?(0,i._1)(e,"dy","tf.grad"):null;return r.BV.tidy((()=>{const{value:t,grads:e}=r.BV.gradients((()=>n(o)),[o],a);return null!=a&&s.k5(t.shape,a.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),d(e),e[0]}))}}function u(n){return s.hu(s.mf(n),(()=>"The f passed in grads(f) must be a function")),(t,e)=>{s.hu(Array.isArray(t),(()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"));const o=(0,i.sI)(t,"args","tf.grads","string_or_numeric"),a=null!=e?(0,i._1)(e,"dy","tf.grads"):null;return r.BV.tidy((()=>{const{value:t,grads:e}=r.BV.gradients((()=>n(...o)),o,a);return null!=a&&s.k5(t.shape,a.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),d(e),e}))}}function c(n){return s.hu(s.mf(n),(()=>"The f passed in valueAndGrad(f) must be a function")),(t,e)=>{s.hu(t instanceof o.es,(()=>"The x passed in valueAndGrad(f)(x) must be a tensor")),s.hu(null==e||e instanceof o.es,(()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor"));const{grads:i,value:a}=r.BV.gradients((()=>n(t)),[t],e);return d(i),{grad:i[0],value:a}}}function l(n){return s.hu(s.mf(n),(()=>"The f passed in valueAndGrads(f) must be a function")),(t,e)=>{s.hu(Array.isArray(t)&&t.every((n=>n instanceof o.es)),(()=>"The args passed in valueAndGrads(f)(args) must be array of tensors")),s.hu(null==e||e instanceof o.es,(()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor"));const i=r.BV.gradients((()=>n(...t)),t,e);return null!=e&&s.k5(i.value.shape,e.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),d(i.grads),i}}function f(n,t){s.hu(s.mf(n),(()=>"The f passed in variableGrads(f) must be a function")),s.hu(null==t||Array.isArray(t)&&t.every((n=>n instanceof o._w)),(()=>"The varList passed in variableGrads(f, varList) must be an array of variables"));const e=null!=t;if(!e){t=[];for(const n in r.BV.registeredVariables)t.push(r.BV.registeredVariables[n])}const i=e?t.filter((n=>!n.trainable)):null,a=t.length;t=t.filter((n=>n.trainable)),s.hu(t.length>0,(()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${a} variables is trainable.`));const{value:u,grads:c}=r.BV.gradients(n,t,null,!0);s.hu(c.some((n=>null!=n)),(()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().")),s.hu(0===u.rank,(()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${u.rank} tensor`));const l={};return t.forEach(((n,t)=>{null!=c[t]&&(l[n.name]=c[t])})),null!=i&&i.forEach((n=>l[n.name]=null)),{value:u,grads:l}}function h(n){return r.BV.customGrad(n)}function d(n){if(n.filter((n=>null==n)).length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")}},38986:function(n,t,e){e.r(t),e.d(t,{Abs:function(){return At.SYM},Acos:function(){return At.VGw},Acosh:function(){return At.SpW},AdadeltaOptimizer:function(){return Wn},AdagradOptimizer:function(){return Un},AdamOptimizer:function(){return Hn},AdamaxOptimizer:function(){return Zn},Add:function(){return At.mm_},AddN:function(){return At.Xze},All:function(){return At.oT6},Any:function(){return At.IKK},ArgMax:function(){return At.sJF},ArgMin:function(){return At.aJk},Asin:function(){return At.M2y},Asinh:function(){return At.qw7},Atan:function(){return At.jMg},Atan2:function(){return At.QCc},Atanh:function(){return At.Oyi},AvgPool:function(){return At.JhU},AvgPool3D:function(){return At._k9},AvgPool3DGrad:function(){return At.IMb},AvgPoolGrad:function(){return At.ROF},BatchMatMul:function(){return At.XLW},BatchToSpaceND:function(){return At.zws},Bincount:function(){return At.zvY},BroadcastArgs:function(){return At.eEB},BroadcastTo:function(){return At.Ly9},Cast:function(){return At.RFZ},Ceil:function(){return At.gJX},ClipByValue:function(){return At.xnO},Complex:function(){return At.Zz9},ComplexAbs:function(){return At.yj2},Concat:function(){return At.Eh3},Conv2D:function(){return At.mhS},Conv2DBackpropFilter:function(){return At.wUP},Conv2DBackpropInput:function(){return At.wm},Conv3D:function(){return At.x12},Conv3DBackpropFilterV2:function(){return At.o2y},Conv3DBackpropInputV2:function(){return At.ik2},Cos:function(){return At.mc4},Cosh:function(){return At.TR1},CropAndResize:function(){return At.VcC},Cumprod:function(){return At.Byc},Cumsum:function(){return At.iHb},DataStorage:function(){return Rr.JL},DenseBincount:function(){return At.QRR},DepthToSpace:function(){return At.T0n},DepthwiseConv2dNative:function(){return At.cie},DepthwiseConv2dNativeBackpropFilter:function(){return At.sL$},DepthwiseConv2dNativeBackpropInput:function(){return At.y7R},Diag:function(){return At.$w},Dilation2D:function(){return At.p4S},Dilation2DBackpropFilter:function(){return At.Vn9},Dilation2DBackpropInput:function(){return At.ekb},ENV:function(){return w.Vi},Einsum:function(){return At.$g6},Elu:function(){return At.SX0},EluGrad:function(){return At.HEU},Environment:function(){return w.qA},Equal:function(){return At.hdR},Erf:function(){return At.Omj},Exp:function(){return At.NEP},ExpandDims:function(){return At.YFo},Expm1:function(){return At.Y0y},FFT:function(){return At.vwp},Fill:function(){return At.deh},FlipLeftRight:function(){return At.Uyb},Floor:function(){return At.OR},FloorDiv:function(){return At.jeX},FromPixels:function(){return At.eBW},FusedBatchNorm:function(){return At.sHE},FusedConv2D:function(){return At._V0},FusedDepthwiseConv2D:function(){return At.luS},GatherNd:function(){return At.q1x},GatherV2:function(){return At.qi_},Greater:function(){return At.iZT},GreaterEqual:function(){return At.Acj},IFFT:function(){return At.Qg5},Identity:function(){return At.iJz},Imag:function(){return At.J_u},IsFinite:function(){return At.avt},IsInf:function(){return At.iWB},IsNan:function(){return At.r7n},KernelBackend:function(){return Rr.Zu},LRN:function(){return At.eZ0},LRNGrad:function(){return At.Hhh},LeakyRelu:function(){return At.J$2},Less:function(){return At.vtC},LessEqual:function(){return At.CAk},LinSpace:function(){return At.e7N},Log:function(){return At.ZbH},Log1p:function(){return At.kU},LogSoftmax:function(){return At.qCd},LogicalAnd:function(){return At.PYm},LogicalNot:function(){return At.VfG},LogicalOr:function(){return At.MZg},LogicalXor:function(){return At.w6g},LowerBound:function(){return At.qIC},Max:function(){return At.YoZ},MaxPool:function(){return At.mTV},MaxPool3D:function(){return At.OAf},MaxPool3DGrad:function(){return At.OU7},MaxPoolGrad:function(){return At.OV7},MaxPoolWithArgmax:function(){return At.vFR},Maximum:function(){return At.BMI},Mean:function(){return At.q2K},Min:function(){return At.c17},Minimum:function(){return At.q8u},MirrorPad:function(){return At.jQs},Mod:function(){return At.Vbg},MomentumOptimizer:function(){return Yn},Multinomial:function(){return At.NZg},Multiply:function(){return At.wYn},Neg:function(){return At.kuV},NonMaxSuppressionV3:function(){return At.uv1},NonMaxSuppressionV4:function(){return At.cye},NonMaxSuppressionV5:function(){return At.W0H},NotEqual:function(){return At.yQU},OP_SCOPE_SUFFIX:function(){return ke.zvA},OneHot:function(){return At.we_},OnesLike:function(){return At.qWM},Optimizer:function(){return zn},OptimizerConstructors:function(){return ye},Pack:function(){return At.QiL},PadV2:function(){return At.lyA},Pool:function(){return At.Kgp},Pow:function(){return At.pe_},Prelu:function(){return At.o0g},Prod:function(){return At.DlI},RMSPropOptimizer:function(){return Jn},RaggedGather:function(){return At.dDz},RaggedRange:function(){return At.CQl},RaggedTensorToTensor:function(){return At.BiW},Range:function(){return At.e6w},Rank:function(){return we.yw},Real:function(){return At.xJR},RealDiv:function(){return At.oHH},Reciprocal:function(){return At.$HU},Reduction:function(){return ve.I},Relu:function(){return At.qkr},Relu6:function(){return At.SbG},Reshape:function(){return At.HZH},ResizeBilinear:function(){return At._Yw},ResizeBilinearGrad:function(){return At.zbQ},ResizeNearestNeighbor:function(){return At.dpD},ResizeNearestNeighborGrad:function(){return At.Hmb},Reverse:function(){return At.mKl},RotateWithOffset:function(){return At.b9H},Round:function(){return At.e07},Rsqrt:function(){return At.bV0},SGDOptimizer:function(){return Qn},ScatterNd:function(){return At.xQA},SearchSorted:function(){return At.nr8},Select:function(){return At.PhF},Selu:function(){return At.oFR},Sigmoid:function(){return At.a5O},Sign:function(){return At.i5y},Sin:function(){return At.RQH},Sinh:function(){return At.wYB},Slice:function(){return At.p2w},Softmax:function(){return At.Gcp},Softplus:function(){return At.MRv},SpaceToBatchND:function(){return At.TQc},SparseFillEmptyRows:function(){return At.O3z},SparseReshape:function(){return At.nhH},SparseSegmentMean:function(){return At.w3H},SparseSegmentSum:function(){return At.ZjV},SparseToDense:function(){return At.D2d},SplitV:function(){return At.L8s},Sqrt:function(){return At.FKq},Square:function(){return At.bK0},SquaredDifference:function(){return At._tC},Step:function(){return At.h8e},StridedSlice:function(){return At.jQk},StringNGrams:function(){return At._JP},StringSplit:function(){return At.s1s},StringToHashBucketFast:function(){return At.XkS},Sub:function(){return At.Tr8},Sum:function(){return At.GBy},Tan:function(){return At.sEM},Tanh:function(){return At.MIZ},Tensor:function(){return Bn.es},TensorBuffer:function(){return Bn.YD},Tile:function(){return At.n9L},TopK:function(){return At.cWu},Transform:function(){return At.wx7},Transpose:function(){return At.G3Y},Unique:function(){return At.kpP},Unpack:function(){return At.ToN},UnsortedSegmentSum:function(){return At.Qvg},UpperBound:function(){return At.XDQ},Variable:function(){return Bn._w},ZerosLike:function(){return At.RuY},_FusedMatMul:function(){return At.usg},abs:function(){return ke.WnP},acos:function(){return ke.Khb},acosh:function(){return ke.__u},add:function(){return ke.IHx},addN:function(){return ke.QBD},all:function(){return ke.$6P},any:function(){return ke.YjB},argMax:function(){return ke.NqF},argMin:function(){return ke.vHJ},asin:function(){return ke.ZRM},asinh:function(){return ke.VfV},atan:function(){return ke.z4N},atan2:function(){return ke.fvJ},atanh:function(){return ke.C80},avgPool:function(){return ke.wS1},avgPool3d:function(){return ke.uR5},backend:function(){return In.y3},backend_util:function(){return h},basicLSTMCell:function(){return ke.zEQ},batchNorm:function(){return ke.tgs},batchNorm2d:function(){return ke.Dxk},batchNorm3d:function(){return ke.JY5},batchNorm4d:function(){return ke.p3b},batchToSpaceND:function(){return ke.E4h},bincount:function(){return ke.yE8},booleanMaskAsync:function(){return ke.anm},broadcastArgs:function(){return ke.XsQ},broadcastTo:function(){return ke.UFq},broadcast_util:function(){return Bt},browser:function(){return a},buffer:function(){return ke.f3b},cast:function(){return ke.pju},ceil:function(){return ke.mDi},clipByValue:function(){return ke.iUl},clone:function(){return ke.d9v},complex:function(){return ke.PYB},concat:function(){return ke.zoF},concat1d:function(){return ke.gME},concat2d:function(){return ke.Izb},concat3d:function(){return ke.MNy},concat4d:function(){return ke.ZaL},conv1d:function(){return ke.PAt},conv2d:function(){return ke.Tek},conv2dTranspose:function(){return ke.bc},conv3d:function(){return ke.pdZ},conv3dTranspose:function(){return ke.$QV},copyRegisteredKernels:function(){return It.T3},cos:function(){return ke.mCk},cosh:function(){return ke.f9Y},cosineWindow:function(){return ke.mew},cumprod:function(){return ke.$Gn},cumsum:function(){return ke.zbp},customGrad:function(){return Cn.cb},denseBincount:function(){return ke.ppE},deprecationWarn:function(){return In.MX},depthToSpace:function(){return ke.nTT},depthwiseConv2d:function(){return ke.B10},device_util:function(){return r},diag:function(){return ke.Ka3},dilation2d:function(){return ke.WmZ},disableDeprecationWarnings:function(){return In.cF},dispose:function(){return In.B9},disposeVariables:function(){return In.N8},div:function(){return ke.hiC},divNoNan:function(){return ke.NTj},dot:function(){return ke.AKD},dropout:function(){return ke.rvX},einsum:function(){return ke.WYO},elu:function(){return ke.pyx},enableDebugMode:function(){return In.R},enableProdMode:function(){return In.G4},enclosingPowerOfTwo:function(){return ke.GRh},engine:function(){return In.SR},env:function(){return w.OB},equal:function(){return ke.DgJ},erf:function(){return ke.qNN},euclideanNorm:function(){return ke.d2q},exp:function(){return ke.Qqt},expandDims:function(){return ke.dt4},expm1:function(){return ke.t$B},eye:function(){return ke.iyy},fft:function(){return ke.kp_},fill:function(){return ke.hlL},findBackend:function(){return In.x3},findBackendFactory:function(){return In.ze},floor:function(){return ke.GWj},floorDiv:function(){return ke.qPi},fused:function(){return ke.imm},gather:function(){return ke.Iqj},gatherND:function(){return ke.dbB},gather_util:function(){return u},getBackend:function(){return In.N_},getGradient:function(){return It.uk},getKernel:function(){return It.pI},getKernelsForBackend:function(){return It.tr},grad:function(){return Cn.UQ},grads:function(){return Cn.ti},greater:function(){return ke.pjt},greaterEqual:function(){return ke.brS},ifft:function(){return ke.Sxn},imag:function(){return ke.asL},image:function(){return ke.BHj},inTopKAsync:function(){return ke.V3u},io:function(){return i},irfft:function(){return ke.wx0},isFinite:function(){return ke.xVT},isInf:function(){return ke.UWc},isNaN:function(){return ke.i2d},keep:function(){return In.Cn},kernel_impls:function(){return d},leakyRelu:function(){return ke.hi7},less:function(){return ke.d9m},lessEqual:function(){return ke.zN1},linalg:function(){return ke.$r2},linspace:function(){return ke.SX3},localResponseNormalization:function(){return ke.G9k},log:function(){return ke.cM7},log1p:function(){return ke.Krr},logSigmoid:function(){return ke.e_t},logSoftmax:function(){return ke.CmS},logSumExp:function(){return ke.l_t},logicalAnd:function(){return ke.HvI},logicalNot:function(){return ke.hJK},logicalOr:function(){return ke.K5V},logicalXor:function(){return ke.egP},losses:function(){return ke.MB5},lowerBound:function(){return ke.eab},matMul:function(){return ke.OI3},math:function(){return s},max:function(){return ke.Fp7},maxPool:function(){return ke._sB},maxPool3d:function(){return ke.YQQ},maxPoolWithArgmax:function(){return ke.Ip$},maximum:function(){return ke.gWQ},mean:function(){return ke.J69},memory:function(){return In.sq},meshgrid:function(){return ke.ry_},min:function(){return ke.VV$},minimum:function(){return ke.LTh},mirrorPad:function(){return ke.VdP},mod:function(){return ke.wQq},moments:function(){return ke.Gi7},movingAverage:function(){return ke.p_},mul:function(){return ke.dC7},multiRNNCell:function(){return ke.rq4},multinomial:function(){return ke.SJ_},neg:function(){return ke.W76},nextFrame:function(){return Ee},norm:function(){return ke.KOy},notEqual:function(){return ke.Quu},oneHot:function(){return ke.lfX},ones:function(){return ke.iUs},onesLike:function(){return ke.JpU},op:function(){return ke.op},outerProduct:function(){return ke.N2O},pad:function(){return ke.vku},pad1d:function(){return ke.pNR},pad2d:function(){return ke.koy},pad3d:function(){return ke.t1L},pad4d:function(){return ke.lGY},pool:function(){return ke.d_R},pow:function(){return ke.sQ3},prelu:function(){return ke.AL3},print:function(){return ke.S0v},prod:function(){return ke.WVs},profile:function(){return In.N5},raggedGather:function(){return ke.$gW},raggedRange:function(){return ke.VT$},raggedTensorToTensor:function(){return ke.N89},rand:function(){return ke.TN_},randomGamma:function(){return ke.wzB},randomNormal:function(){return ke.nGf},randomStandardNormal:function(){return ke.ruB},randomUniform:function(){return ke.LGj},range:function(){return ke.w6H},ready:function(){return In.Cd},real:function(){return ke.kwC},reciprocal:function(){return ke.M25},registerBackend:function(){return In.jq},registerGradient:function(){return It.Li},registerKernel:function(){return It.wC},relu:function(){return ke.UYe},relu6:function(){return ke.btT},removeBackend:function(){return In.cj},reshape:function(){return ke.XLQ},reverse:function(){return ke.GYS},reverse1d:function(){return ke.SDf},reverse2d:function(){return ke.diP},reverse3d:function(){return ke.sx7},reverse4d:function(){return ke.mG2},rfft:function(){return ke.QEs},round:function(){return ke.NMM},rsqrt:function(){return ke.bp0},scalar:function(){return ke.iD$},scatterND:function(){return ke.snQ},scatter_util:function(){return Ot},searchSorted:function(){return ke.zcT},selu:function(){return ke.U8D},separableConv2d:function(){return ke.U_I},serialization:function(){return o},setBackend:function(){return In.CQ},setPlatform:function(){return In.VY},setdiff1dAsync:function(){return ke.ODp},sigmoid:function(){return ke.XD2},sign:function(){return ke.Xxe},signal:function(){return ke.tdS},sin:function(){return ke.O$l},sinh:function(){return ke.R_K},slice:function(){return ke.tPi},slice1d:function(){return ke.jZU},slice2d:function(){return ke.SmN},slice3d:function(){return ke.CnO},slice4d:function(){return ke.p0P},slice_util:function(){return c},softmax:function(){return ke.XAC},softplus:function(){return ke.Wvh},spaceToBatchND:function(){return ke.fBT},sparse:function(){return ke.rVs},sparseToDense:function(){return ke.ers},spectral:function(){return ke.uN7},split:function(){return ke.Vl2},sqrt:function(){return ke._b3},square:function(){return ke.h62},squaredDifference:function(){return ke.$i},squeeze:function(){return ke.L9e},stack:function(){return ke.knu},step:function(){return ke.Nbs},stridedSlice:function(){return ke.NXj},string:function(){return ke.Z_8},sub:function(){return ke.luU},sum:function(){return ke.Smz},sumOutType:function(){return we.z4},tan:function(){return ke.ORZ},tanh:function(){return ke.AEp},tensor:function(){return ke.XeE},tensor1d:function(){return ke.RRF},tensor2d:function(){return ke.odF},tensor3d:function(){return ke.wOQ},tensor4d:function(){return ke.yXz},tensor5d:function(){return ke.Bfx},tensor6d:function(){return ke.xZs},tensor_util:function(){return ee},test_util:function(){return l},tidy:function(){return In.lu},tile:function(){return ke.Gg6},time:function(){return In.XV},topk:function(){return ke.hg7},train:function(){return Se},transpose:function(){return ke.p4s},truncatedNormal:function(){return ke.Xu6},unique:function(){return ke.Two},unregisterGradient:function(){return It.bt},unregisterKernel:function(){return It.nE},unsortedSegmentSum:function(){return ke.pUJ},unstack:function(){return ke.HHK},upcastType:function(){return we.x8},upperBound:function(){return ke.GaM},util:function(){return re},valueAndGrad:function(){return Cn.h7},valueAndGrads:function(){return Cn.fN},variable:function(){return ke.VD$},variableGrads:function(){return Cn.pn},version_core:function(){return be},where:function(){return ke.arb},whereAsync:function(){return ke.itS},zeros:function(){return ke.lls},zerosLike:function(){return ke.P84}});var r={};e.r(r),e.d(r,{isBrowser:function(){return y},isMobile:function(){return b},mockIsMobile:function(){return g}});var o={};e.r(o),e.d(o,{Serializable:function(){return On},SerializationMap:function(){return Pn},registerClass:function(){return Ln}});var i={};e.r(i),e.d(i,{browserFiles:function(){return ot},browserHTTPRequest:function(){return dt},concatenateArrayBuffers:function(){return T},copyModel:function(){return bn},decodeWeights:function(){return $},encodeWeights:function(){return x},fromMemory:function(){return bt},fromMemorySync:function(){return yt},getLoadHandlers:function(){return W},getModelArtifactsForJSON:function(){return R},getModelArtifactsForJSONSync:function(){return D},getModelArtifactsInfoForJSON:function(){return V},getSaveHandlers:function(){return z},getWeightSpecs:function(){return C},http:function(){return ht},isHTTPScheme:function(){return lt},listModels:function(){return mn},loadWeights:function(){return at},moveModel:function(){return yn},registerLoadRouter:function(){return L},registerSaveRouter:function(){return P},removeModel:function(){return gn},weightsLoaderFactory:function(){return ut},withSaveHandler:function(){return wt},withSaveHandlerSync:function(){return kt}});var s={};e.r(s),e.d(s,{confusionMatrix:function(){return $t}});var a={};e.r(a),e.d(a,{fromPixels:function(){return Ct},fromPixelsAsync:function(){return Rt},toPixels:function(){return Vt}});var u={};e.r(u),e.d(u,{prepareAndValidate:function(){return Ft}});var c={};e.r(c),e.d(c,{assertParamsValid:function(){return Pt},computeFlatOffset:function(){return Yt},computeOutShape:function(){return zt},getNormalizedAxes:function(){return qt},isSliceContinous:function(){return Qt},maskToAxes:function(){return Lt},parseSliceParams:function(){return Jt},sliceInfo:function(){return ne},startForAxis:function(){return jt},startIndicesWithElidedDims:function(){return Kt},stopForAxis:function(){return Zt},stopIndicesWithElidedDims:function(){return Ht},stridesForAxis:function(){return Xt},stridesWithElidedDims:function(){return Wt}});var l={};e.r(l),e.d(l,{TEST_EPSILON_FLOAT16:function(){return oe},createVideoElement:function(){return me},encodeStrings:function(){return pe},expectArrayBuffersEqual:function(){return de},expectArraysClose:function(){return ie},expectArraysEqual:function(){return ce},expectNumbersClose:function(){return le},expectPromiseToFail:function(){return ue},expectValuesInRange:function(){return he},play:function(){return ge},testEpsilon:function(){return se}});var f={};e.r(f),e.d(f,{collectGatherOpShapeInfo:function(){return Ir},computeOutShape:function(){return Ar},segOpComputeOptimalWindowSize:function(){return Br}});var h={};e.r(h),e.d(h,{ERF_A1:function(){return Ke},ERF_A2:function(){return He},ERF_A3:function(){return Xe},ERF_A4:function(){return je},ERF_A5:function(){return Ze},ERF_P:function(){return qe},PARALLELIZE_THRESHOLD:function(){return Ve},RowPartitionType:function(){return Ae},SELU_SCALE:function(){return Ue},SELU_SCALEALPHA:function(){return Ge},applyActivation:function(){return Te.QH},assertAndGetBroadcastShape:function(){return Bt.assertAndGetBroadcastShape},assertAxesAreInnerMostDims:function(){return xe.lB},assertParamsConsistent:function(){return $e},assignToTypedArray:function(){return rr},axesAreInnerMostDims:function(){return xe.YB},calculateShapes:function(){return Ot.calculateShapes},checkEinsumDimSizes:function(){return lr},checkPadOnDimRoundingMode:function(){return Ie.m},combineLocations:function(){return xe.Vh},combineRaggedTensorToTensorShapes:function(){return Ne},complexWithEvenIndex:function(){return nr},complexWithOddIndex:function(){return tr},computeConv2DInfo:function(){return Ie.Ix},computeConv3DInfo:function(){return Ie.jw},computeDefaultPad:function(){return Ie.aO},computeDilation2DInfo:function(){return Ie.Rf},computeOptimalWindowSize:function(){return Ce},computeOutAndReduceShapes:function(){return xe.kz},computeOutShape:function(){return Be},computePool2DInfo:function(){return Ie.Xw},computePool3DInfo:function(){return Ie.pl},convertConv2DDataFormat:function(){return Ie.sl},decodeEinsumEquation:function(){return ur},eitherStridesOrDilationsAreOne:function(){return Ie.jT},expandShapeToKeepDim:function(){return xe.rv},exponent:function(){return ir},exponents:function(){return or},fromStringArrayToUint8:function(){return Nr},fromUint8ToStringArray:function(){return Tr},getAxesPermutation:function(){return xe.Q3},getBroadcastDims:function(){return Bt.getBroadcastDims},getComplexWithIndex:function(){return er},getEinsumComputePath:function(){return fr},getEinsumPermutation:function(){return cr},getFusedBiasGradient:function(){return Te.pf},getFusedDyActivation:function(){return Te.Fr},getImageCenter:function(){return Fe},getInnerMostAxes:function(){return xe.sY},getPermuted:function(){return Pe},getRaggedRank:function(){return De},getReductionAxes:function(){return Bt.getReductionAxes},getReshaped:function(){return Oe},getReshapedPermuted:function(){return Le},getRowPartitionTypesHelper:function(){return Me},getSliceBeginCoords:function(){return ze},getSliceSize:function(){return We},getSparseFillEmptyRowsIndicesDenseShapeMismatch:function(){return mr},getSparseFillEmptyRowsNegativeIndexErrorMessage:function(){return gr},getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:function(){return br},getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:function(){return kr},getSparseReshapeInputOutputMismatchErrorMessage:function(){return Sr},getSparseReshapeInputOutputMultipleErrorMessage:function(){return vr},getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:function(){return yr},getSparseReshapeNegativeOutputDimErrorMessage:function(){return wr},getSparseSegmentReductionIndicesOutOfRangeErrorMessage:function(){return $r},getSparseSegmentReductionNegativeSegmentIdsErrorMessage:function(){return _r},getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:function(){return Er},getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:function(){return xr},getUndoAxesPermutation:function(){return xe.LJ},isIdentityPermutation:function(){return hr},log:function(){return Qe.c},mergeRealAndImagArrays:function(){return Ye},prepareAndValidate:function(){return Ft},prepareSplitSize:function(){return pr},segment_util:function(){return f},shouldFuse:function(){return Te.uy},slice_util:function(){return c},splitRealAndImagArrays:function(){return Je},stridesOrDilationsArePositive:function(){return Ie.U3},tupleValuesAreOne:function(){return Ie.I0},upcastType:function(){return we.x8},validateDefaultValueShape:function(){return Re},validateInput:function(){return Ot.validateInput},validateUpdateShape:function(){return Ot.validateUpdateShape},warn:function(){return Qe.Z}});var d={};e.r(d),e.d(d,{nonMaxSuppressionV3Impl:function(){return Mr.GP},nonMaxSuppressionV4Impl:function(){return Mr.qP},nonMaxSuppressionV5Impl:function(){return Mr.pA},whereImpl:function(){return Dr.Z}});var p=e(97097);let m;function g(n){m=n}function b(n){if(void 0!==m)return m;if(n||"undefined"!=typeof navigator&&null!=navigator){if(n||(n=navigator),"ReactNative"===n.product)return!0;const t=n.userAgent||n.vendor||("undefined"!=typeof window?window.opera:"");if(!t){const t=n;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function y(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}var w=e(22885);
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
const k=(0,w.OB)();k.registerFlag("DEBUG",(()=>!1),(n=>{n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),k.registerFlag("IS_BROWSER",(()=>y())),k.registerFlag("IS_NODE",(()=>"undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.node)),k.registerFlag("IS_CHROME",(()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor))),k.registerFlag("PROD",(()=>!1)),k.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(()=>k.getBool("DEBUG"))),k.registerFlag("DEPRECATION_WARNINGS_ENABLED",(()=>!0)),k.registerFlag("IS_TEST",(()=>!1)),k.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",(()=>!0)),k.registerFlag("WRAP_TO_IMAGEBITMAP",(()=>!1)),k.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",(()=>!1)),k.registerFlag("USE_SETTIMEOUTCUSTOM",(()=>!1));var v=e(61661),S=e(10701),_=e(20569);
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
const E={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};async function x(n,t){const e=[],r=[],o=Array.isArray(n)?n.map((n=>n.name)):Object.keys(n);for(let i=0;i<o.length;++i){const s=o[i],a=Array.isArray(n)?n[i].tensor:n[s];if("float32"!==a.dtype&&"int32"!==a.dtype&&"bool"!==a.dtype&&"string"!==a.dtype&&"complex64"!==a.dtype)throw new Error(`Unsupported dtype in weight '${s}': ${a.dtype}`);const u={name:s,shape:a.shape,dtype:a.dtype};if("string"===a.dtype){const n=new Promise((async n=>{const t=await a.bytes(),e=t.reduce(((n,t)=>n+t.length),0)+4*t.length,r=new Uint8Array(e);let o=0;for(let n=0;n<t.length;n++){const e=t[n],i=new Uint8Array(new Uint32Array([e.length]).buffer);r.set(i,o),o+=4,r.set(e,o),o+=e.length}n(r)}));r.push(n)}else r.push(a.data());null!=t&&(u.group=t),e.push(u)}return{data:B(await Promise.all(r)),specs:e}}function $(n,t){const e={};let r,o=0;for(const i of t){const t=i.name,s=i.dtype,a=i.shape,u=(0,_.NA)(a);let c;if("quantization"in i){const e=i.quantization;if("uint8"===e.dtype||"uint16"===e.dtype){if(!("min"in e)||!("scale"in e))throw new Error(`Weight ${i.name} with quantization ${e.dtype} doesn't have corresponding metadata min and scale.`)}else{if("float16"!==e.dtype)throw new Error(`Weight ${i.name} has unknown quantization dtype ${e.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);if("float32"!==s)throw new Error(`Weight ${i.name} is quantized with ${e.dtype} which only supports weights of type float32 not ${s}.`)}const a=E[e.dtype],l=n.slice(o,o+u*a),f="uint8"===e.dtype?new Uint8Array(l):new Uint16Array(l);if("float32"===s)if("uint8"===e.dtype||"uint16"===e.dtype){c=new Float32Array(f.length);for(let n=0;n<f.length;n++){const t=f[n];c[n]=t*e.scale+e.min}}else{if("float16"!==e.dtype)throw new Error(`Unsupported quantization type ${e.dtype} for weight type float32.`);void 0===r&&(r=F()),c=r(f)}else{if("int32"!==s)throw new Error(`Unsupported dtype in weight '${t}': ${s}`);if("uint8"!==e.dtype&&"uint16"!==e.dtype)throw new Error(`Unsupported quantization type ${e.dtype} for weight type int32.`);c=new Int32Array(f.length);for(let n=0;n<f.length;n++){const t=f[n];c[n]=Math.round(t*e.scale+e.min)}}o+=u*a}else if("string"===s){const t=(0,_.NA)(i.shape);c=[];for(let e=0;e<t;e++){const t=new Uint32Array(n.slice(o,o+4))[0];o+=4;const e=new Uint8Array(n.slice(o,o+t));c.push(e),o+=t}}else{const r=E[s],i=n.slice(o,o+u*r);if("float32"===s)c=new Float32Array(i);else if("int32"===s)c=new Int32Array(i);else if("bool"===s)c=new Uint8Array(i);else{if("complex64"!==s)throw new Error(`Unsupported dtype in weight '${t}': ${s}`);{c=new Float32Array(i);const n=new Float32Array(c.length/2),r=new Float32Array(c.length/2);for(let t=0;t<n.length;t++)n[t]=c[2*t],r[t]=c[2*t+1];const o=(0,S.X)(n,a,"float32"),s=(0,S.X)(r,a,"float32");e[t]=(0,v.P)(o,s),o.dispose(),s.dispose()}}o+=u*r}"complex64"!==s&&(e[t]=(0,S.X)(c,a,s))}return e}function B(n){if(null===n)throw new Error(`Invalid input value: ${JSON.stringify(n)}`);let t=0;const e=[];n.forEach((n=>{if(t+=n.byteLength,e.push(n.byteLength===n.buffer.byteLength?n:new n.constructor(n)),!(n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${n.constructor.name}`)}));const r=new Uint8Array(t);let o=0;return e.forEach((n=>{r.set(new Uint8Array(n.buffer),o),o+=n.byteLength})),r.buffer}const A="undefined"!=typeof Buffer&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function I(n){return A?Buffer.byteLength(n):new Blob([n]).size}function T(n){if(1===n.length)return n[0];let t=0;n.forEach((n=>{t+=n.byteLength}));const e=new Uint8Array(t);let r=0;return n.forEach((n=>{e.set(new Uint8Array(n),r),r+=n.byteLength})),e.buffer}function N(n){for(n=n.trim();n.endsWith("/");)n=n.slice(0,n.length-1);const t=n.split("/");return t[t.length-1]}function M(n,t){const e={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,weightsManifest:t};return null!=n.signature&&(e.signature=n.signature),null!=n.userDefinedMetadata&&(e.userDefinedMetadata=n.userDefinedMetadata),null!=n.modelInitializer&&(e.modelInitializer=n.modelInitializer),null!=n.initializerSignature&&(e.initializerSignature=n.initializerSignature),null!=n.trainingConfig&&(e.trainingConfig=n.trainingConfig),e}function D(n,t,e){const r={modelTopology:n.modelTopology,format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy};if(null!=n.trainingConfig&&(r.trainingConfig=n.trainingConfig),null!=n.weightsManifest){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!e)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=e}return null!=n.signature&&(r.signature=n.signature),null!=n.userDefinedMetadata&&(r.userDefinedMetadata=n.userDefinedMetadata),null!=n.modelInitializer&&(r.modelInitializer=n.modelInitializer),null!=n.initializerSignature&&(r.initializerSignature=n.initializerSignature),r}async function R(n,t){let e,r;return null!=n.weightsManifest&&([e,r]=await t(n.weightsManifest)),D(n,e,r)}function V(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==n.modelTopology?0:I(JSON.stringify(n.modelTopology)),weightSpecsBytes:null==n.weightSpecs?0:I(JSON.stringify(n.weightSpecs)),weightDataBytes:null==n.weightData?0:n.weightData.byteLength}}function C(n){const t=[];for(const e of n)t.push(...e.weights);return t}function F(){const n=function(){const n=n=>{let t=n<<13,e=0;for(;0==(8388608&t);)e-=8388608,t<<=1;return t&=-8388609,e+=947912704,t|e},t=new Uint32Array(2048);t[0]=0;for(let e=1;e<1024;e++)t[e]=n(e);for(let n=1024;n<2048;n++)t[n]=939524096+(n-1024<<13);return t}(),t=function(){const n=new Uint32Array(64);n[0]=0,n[31]=1199570944,n[32]=2147483648,n[63]=3347054592;for(let t=1;t<31;t++)n[t]=t<<23;for(let t=33;t<63;t++)n[t]=2147483648+(t-32<<23);return n}(),e=function(){const n=new Uint32Array(64);for(let t=0;t<64;t++)n[t]=1024;return n[0]=n[32]=0,n}();return r=>{const o=new ArrayBuffer(4*r.length),i=new Uint32Array(o);for(let o=0;o<r.length;o++){const s=r[o],a=n[e[s>>10]+(1023&s)]+t[s>>10];i[o]=a}return new Float32Array(o)}}
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
class O{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==O.instance&&(O.instance=new O),O.instance}static registerSaveRouter(n){O.getInstance().saveRouters.push(n)}static registerLoadRouter(n){O.getInstance().loadRouters.push(n)}static getSaveHandlers(n){return O.getHandlers(n,"save")}static getLoadHandlers(n,t){return O.getHandlers(n,"load",t)}static getHandlers(n,t,e){const r=[];return("load"===t?O.getInstance().loadRouters:O.getInstance().saveRouters).forEach((t=>{const o=t(n,e);null!==o&&r.push(o)})),r}}const P=n=>O.registerSaveRouter(n),L=n=>O.registerLoadRouter(n),z=n=>O.getSaveHandlers(n),W=(n,t)=>O.getLoadHandlers(n,t),G="tensorflowjs",U="models_store",q="model_info_store";function K(){if(!(0,w.OB)().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const n="undefined"==typeof window?self:window,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(null==t)throw new Error("The current browser does not appear to support IndexedDB.");return t}function H(n){const t=n.result;t.createObjectStore(U,{keyPath:"modelPath"}),t.createObjectStore(q,{keyPath:"modelPath"})}class X{constructor(n){if(this.indexedDB=K(),null==n||!n)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=n}async save(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,n)}async load(){return this.databaseAction(this.modelPath)}databaseAction(n,t){return new Promise(((n,e)=>{const r=this.indexedDB.open(G,1);r.onupgradeneeded=()=>H(r),r.onsuccess=()=>{const o=r.result;if(null==t){const t=o.transaction(U,"readonly"),r=t.objectStore(U).get(this.modelPath);r.onsuccess=()=>{if(null==r.result)return o.close(),e(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));n(r.result.modelArtifacts)},r.onerror=n=>(o.close(),e(r.error)),t.oncomplete=()=>o.close()}else{const r=V(t),i=o.transaction(q,"readwrite");let s=i.objectStore(q);const a=s.put({modelPath:this.modelPath,modelArtifactsInfo:r});let u;a.onsuccess=()=>{u=o.transaction(U,"readwrite");const a=u.objectStore(U).put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:r});a.onsuccess=()=>n({modelArtifactsInfo:r}),a.onerror=n=>{s=i.objectStore(q);const t=s.delete(this.modelPath);t.onsuccess=()=>(o.close(),e(a.error)),t.onerror=n=>(o.close(),e(a.error))}},a.onerror=n=>(o.close(),e(a.error)),i.oncomplete=()=>{null==u?o.close():u.oncomplete=()=>o.close()}}},r.onerror=n=>e(r.error)}))}}X.URL_SCHEME="indexeddb://";const j=n=>{return(0,w.OB)().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(X.URL_SCHEME)?(t=n.slice(X.URL_SCHEME.length),new X(t)):null;var t};O.registerSaveRouter(j),O.registerLoadRouter(j);class Z{constructor(){this.indexedDB=K()}async listModels(){return new Promise(((n,t)=>{const e=this.indexedDB.open(G,1);e.onupgradeneeded=()=>H(e),e.onsuccess=()=>{const r=e.result,o=r.transaction(q,"readonly"),i=o.objectStore(q).getAll();i.onsuccess=()=>{const t={};for(const n of i.result)t[n.modelPath]=n.modelArtifactsInfo;n(t)},i.onerror=n=>(r.close(),t(i.error)),o.oncomplete=()=>r.close()},e.onerror=n=>t(e.error)}))}async removeModel(n){var t;return n=(t=n).startsWith(X.URL_SCHEME)?t.slice(X.URL_SCHEME.length):t,new Promise(((t,e)=>{const r=this.indexedDB.open(G,1);r.onupgradeneeded=()=>H(r),r.onsuccess=()=>{const o=r.result,i=o.transaction(q,"readwrite"),s=i.objectStore(q),a=s.get(n);let u;a.onsuccess=()=>{if(null==a.result)return o.close(),e(new Error(`Cannot find model with path '${n}' in IndexedDB.`));{const r=s.delete(n),i=()=>{u=o.transaction(U,"readwrite");const r=u.objectStore(U).delete(n);r.onsuccess=()=>t(a.result.modelArtifactsInfo),r.onerror=n=>e(a.error)};r.onsuccess=i,r.onerror=n=>(i(),o.close(),e(a.error))}},a.onerror=n=>(o.close(),e(a.error)),i.oncomplete=()=>{null==u?o.close():u.oncomplete=()=>o.close()}},r.onerror=n=>e(r.error)}))}}
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
const Q="/",Y="tensorflowjs_models",J="info",nn="model_topology",tn="weight_specs",en="weight_data",rn="model_metadata";function on(n){return{info:[Y,n,J].join(Q),topology:[Y,n,nn].join(Q),weightSpecs:[Y,n,tn].join(Q),weightData:[Y,n,en].join(Q),modelMetadata:[Y,n,rn].join(Q)}}function sn(n){for(const t of Object.values(n))window.localStorage.removeItem(t)}function an(n){const t=n.split(Q);if(t.length<3)throw new Error(`Invalid key format: ${n}`);return t.slice(1,t.length-1).join(Q)}class un{constructor(n){if(!(0,w.OB)().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==n||!n)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=n,this.keys=on(this.modelPath)}async save(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const t=JSON.stringify(n.modelTopology),e=JSON.stringify(n.weightSpecs),r=V(n);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,e),this.LS.setItem(this.keys.weightData,function(n){if(A)return Buffer.from(n).toString("base64");const t=new Uint8Array(n);let e="";for(let n=0,r=t.length;n<r;n++)e+=String.fromCharCode(t[n]);return btoa(e)}(n.weightData));const o={format:n.format,generatedBy:n.generatedBy,convertedBy:n.convertedBy,signature:null!=n.signature?n.signature:void 0,userDefinedMetadata:null!=n.userDefinedMetadata?n.userDefinedMetadata:void 0,modelInitializer:null!=n.modelInitializer?n.modelInitializer:void 0,initializerSignature:null!=n.initializerSignature?n.initializerSignature:void 0,trainingConfig:null!=n.trainingConfig?n.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(o)),{modelArtifactsInfo:r}}catch(n){throw sn(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const n=JSON.parse(this.LS.getItem(this.keys.info));if(null==n)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==n.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},e=JSON.parse(this.LS.getItem(this.keys.topology));if(null==e)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=e;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==r)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;const o=this.LS.getItem(this.keys.modelMetadata);if(null!=o){const n=JSON.parse(o);t.format=n.format,t.generatedBy=n.generatedBy,t.convertedBy=n.convertedBy,null!=n.signature&&(t.signature=n.signature),null!=n.userDefinedMetadata&&(t.userDefinedMetadata=n.userDefinedMetadata),null!=n.modelInitializer&&(t.modelInitializer=n.modelInitializer),null!=n.initializerSignature&&(t.initializerSignature=n.initializerSignature),null!=n.trainingConfig&&(t.trainingConfig=n.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(null==i)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=function(n){if(A){const t=Buffer.from(n,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}const t=atob(n),e=new Uint8Array(t.length);for(let n=0;n<t.length;++n)e.set([t.charCodeAt(n)],n);return e.buffer}(i),t}}un.URL_SCHEME="localstorage://";const cn=n=>{return(0,w.OB)().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(un.URL_SCHEME)?(t=n.slice(un.URL_SCHEME.length),new un(t)):null;var t};O.registerSaveRouter(cn),O.registerLoadRouter(cn);class ln{constructor(){(0,_.hu)((0,w.OB)().getBool("IS_BROWSER"),(()=>"Current environment is not a web browser")),(0,_.hu)("undefined"==typeof window||void 0!==window.localStorage,(()=>"Current browser does not appear to support localStorage")),this.LS=window.localStorage}async listModels(){const n={},t=Y+Q,e=Q+J;for(let r=0;r<this.LS.length;++r){const o=this.LS.key(r);if(o.startsWith(t)&&o.endsWith(e)){n[an(o)]=JSON.parse(this.LS.getItem(o))}}return n}async removeModel(n){var t;const e=on(n=(t=n).startsWith(un.URL_SCHEME)?t.slice(un.URL_SCHEME.length):t);if(null==this.LS.getItem(e.info))throw new Error(`Cannot find model at path '${n}'`);const r=JSON.parse(this.LS.getItem(e.info));return sn(e),r}}
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
const fn="://";class hn{constructor(){this.managers={}}static getInstance(){return null==hn.instance&&(hn.instance=new hn),hn.instance}static registerManager(n,t){(0,_.hu)(null!=n,(()=>"scheme must not be undefined or null.")),n.endsWith(fn)&&(n=n.slice(0,n.indexOf(fn))),(0,_.hu)(n.length>0,(()=>"scheme must not be an empty string."));const e=hn.getInstance();(0,_.hu)(null==e.managers[n],(()=>`A model store manager is already registered for scheme '${n}'.`)),e.managers[n]=t}static getManager(n){const t=hn.getInstance().managers[n];if(null==t)throw new Error(`Cannot find model manager for scheme '${n}'`);return t}static getSchemes(){return Object.keys(hn.getInstance().managers)}}function dn(n){if(-1===n.indexOf(fn))throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${hn.getSchemes().join(",")}`);return{scheme:n.split(fn)[0],path:n.split(fn)[1]}}async function pn(n,t,e=!1){(0,_.hu)(n!==t,(()=>`Old path and new path are the same: '${n}'`));const r=O.getLoadHandlers(n);(0,_.hu)(r.length>0,(()=>`Copying failed because no load handler is found for source URL ${n}.`)),(0,_.hu)(r.length<2,(()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${n}.`));const o=r[0],i=O.getSaveHandlers(t);(0,_.hu)(i.length>0,(()=>`Copying failed because no save handler is found for destination URL ${t}.`)),(0,_.hu)(i.length<2,(()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`));const s=i[0],a=dn(n).scheme,u=dn(n).path,c=a===dn(n).scheme,l=await o.load();e&&c&&await hn.getManager(a).removeModel(u);const f=await s.save(l);return e&&!c&&await hn.getManager(a).removeModel(u),f.modelArtifactsInfo}async function mn(){const n=hn.getSchemes(),t={};for(const e of n){const n=await hn.getManager(e).listModels();for(const r in n){t[e+fn+r]=n[r]}}return t}async function gn(n){const t=dn(n);return hn.getManager(t.scheme).removeModel(t.path)}async function bn(n,t){return pn(n,t,!1)}async function yn(n,t){return pn(n,t,!0)}
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
class wn{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(n,t){return fetch(n,t)}now(){return performance.now()}encode(n,t){if("utf-8"!==t&&"utf8"!==t)throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(n)}decode(n,t){return new TextDecoder(t).decode(n)}setTimeoutCustom(n,t){"undefined"!=typeof window&&(0,w.OB)().getBool("USE_SETTIMEOUTCUSTOM")?(this.functionRefs.push(n),setTimeout((()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")}),t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",(n=>{if(n.source===window&&n.data.name===this.messageName){n.stopPropagation();(0,this.functionRefs[n.data.index])(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}}),!0))):setTimeout(n,t)}isTypedArray(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray}}if((0,w.OB)().get("IS_BROWSER")){(0,w.OB)().setPlatform("browser",new wn);try{hn.registerManager(un.URL_SCHEME,new ln)}catch(n){}try{hn.registerManager(X.URL_SCHEME,new Z)}catch(n){}}
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
const kn=()=>e(75410);let vn;class Sn{constructor(){this.util=e(48628),this.textEncoder=new this.util.TextEncoder}fetch(n,t){return null!=(0,w.OB)().global.fetch?(0,w.OB)().global.fetch(n,t):(null==vn&&(vn=kn()),vn(n,t))}now(){const n=process.hrtime();return 1e3*n[0]+n[1]/1e6}encode(n,t){if("utf-8"!==t&&"utf8"!==t)throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(n)}decode(n,t){return 0===n.length?"":new this.util.TextDecoder(t).decode(n)}isTypedArray(n){return this.util.types.isFloat32Array(n)||this.util.types.isInt32Array(n)||this.util.types.isUint8Array(n)||this.util.types.isUint8ClampedArray(n)}}(0,w.OB)().get("IS_NODE")&&!(0,w.OB)().get("IS_BROWSER")&&(0,w.OB)().setPlatform("node",new Sn);var _n=e(72657),En=e(62271),xn=e(8723),$n=e(29798),Bn=e(4077);
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
(0,p.wv)();const An={buffer:_n.f,cast:En.p,clone:xn.d,print:$n.S};(0,Bn.Vp)(An);var In=e(4368),Tn=e(56407),Nn=e(41274),Mn=e(24841),Dn=e(13261),Rn=e(50248),Vn=e(6577),Cn=e(30633),Fn=e(99494);
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
class On{getClassName(){return this.constructor.className}static fromConfig(n,t){return new n(t)}}class Pn{constructor(){this.classNameMap={}}static getMap(){return null==Pn.instance&&(Pn.instance=new Pn),Pn.instance}static register(n){Pn.getMap().classNameMap[n.className]=[n,n.fromConfig]}}function Ln(n){(0,_.hu)(null!=n.className,(()=>"Class being registered does not have the static className property defined.")),(0,_.hu)("string"==typeof n.className,(()=>"className is required to be a string, but got type "+typeof n.className)),(0,_.hu)(n.className.length>0,(()=>"Class being registered has an empty-string as its className, which is disallowed.")),Pn.register(n)}
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
class zn extends On{minimize(n,t=!1,e){const{value:r,grads:o}=this.computeGradients(n,e);if(null!=e){const n=e.map((n=>({name:n.name,tensor:o[n.name]})));this.applyGradients(n)}else this.applyGradients(o);return(0,In.B9)(o),t?r:(r.dispose(),null)}get iterations(){return null==this.iterations_&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(n,t){return(0,Cn.pn)(n,t)}dispose(){null!=this.iterations_&&(0,In.B9)(this.iterations_)}async saveIterations(){return null==this.iterations_&&(this.iterations_=0),{name:"iter",tensor:(0,Fn.i)(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(n){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(n){return this.iterations_=(await n[0].tensor.data())[0],n.slice(1)}}Object.defineProperty(zn,Symbol.hasInstance,{value:n=>null!=n.minimize&&null!=n.computeGradients&&null!=n.applyGradients});
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
class Wn extends zn{constructor(n,t,e=null){super(),this.learningRate=n,this.rho=t,this.epsilon=e,this.accumulatedGrads=[],this.accumulatedUpdates=[],null==e&&(this.epsilon=p.BV.backend.epsilon())}static get className(){return"Adadelta"}applyGradients(n){(Array.isArray(n)?n.map((n=>n.name)):Object.keys(n)).forEach(((t,e)=>{const r=p.BV.registeredVariables[t];null==this.accumulatedGrads[e]&&(this.accumulatedGrads[e]={originalName:`${t}/accum_grad`,variable:(0,In.lu)((()=>(0,Vn.P)(r).variable(false)))}),null==this.accumulatedUpdates[e]&&(this.accumulatedUpdates[e]={originalName:`${t}/accum_var`,variable:(0,In.lu)((()=>(0,Vn.P)(r).variable(false)))});const o=Array.isArray(n)?n[e].tensor:n[t];if(null==o)return;const i=this.accumulatedGrads[e].variable,s=this.accumulatedUpdates[e].variable;(0,In.lu)((()=>{const n=(0,Tn.I)((0,Mn.d)(i,this.rho),(0,Mn.d)((0,Rn.h)(o),1-this.rho)),t=(0,Mn.d)((0,Nn.h)((0,Dn._)((0,Tn.I)(s,this.epsilon)),(0,Dn._)((0,Tn.I)(i,this.epsilon))),o),e=(0,Tn.I)((0,Mn.d)(s,this.rho),(0,Mn.d)((0,Rn.h)(t),1-this.rho));i.assign(n),s.assign(e);const a=(0,Tn.I)((0,Mn.d)(t,-this.learningRate),r);r.assign(a)}))})),this.incrementIterations()}dispose(){null!=this.accumulatedUpdates&&((0,In.B9)(this.accumulatedGrads.map((n=>n.variable))),(0,In.B9)(this.accumulatedUpdates.map((n=>n.variable))))}async getWeights(){const n=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(n.map((n=>({name:n.originalName,tensor:n.variable}))))}async setWeights(n){const t=(n=await this.extractIterations(n)).length/2;this.accumulatedGrads=n.slice(0,t).map((n=>({originalName:n.name,variable:n.tensor.variable(false)}))),this.accumulatedUpdates=n.slice(t,2*t).map((n=>({originalName:n.name,variable:n.tensor.variable(false)})))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(n,t){return new n(t.learningRate,t.rho,t.epsilon)}}var Gn=e(14006);
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
class Un extends zn{constructor(n,t=.1){super(),this.learningRate=n,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}static get className(){return"Adagrad"}applyGradients(n){(Array.isArray(n)?n.map((n=>n.name)):Object.keys(n)).forEach(((t,e)=>{const r=p.BV.registeredVariables[t];if(null==this.accumulatedGrads[e]){const n=!1;this.accumulatedGrads[e]={originalName:`${t}/accumulator`,variable:(0,In.lu)((()=>(0,Gn.h)(r.shape,this.initialAccumulatorValue).variable(n)))}}const o=Array.isArray(n)?n[e].tensor:n[t];if(null==o)return;const i=this.accumulatedGrads[e].variable;(0,In.lu)((()=>{const n=(0,Tn.I)(i,(0,Rn.h)(o));i.assign(n);const t=(0,Tn.I)((0,Mn.d)((0,Nn.h)(o,(0,Dn._)((0,Tn.I)(n,p.BV.backend.epsilon()))),-this.learningRate),r);r.assign(t)}))})),this.incrementIterations()}dispose(){null!=this.accumulatedGrads&&(0,In.B9)(this.accumulatedGrads.map((n=>n.variable)))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map((n=>({name:n.originalName,tensor:n.variable}))))}async setWeights(n){n=await this.extractIterations(n);this.accumulatedGrads=n.map((n=>({originalName:n.name,variable:n.tensor.variable(false)})))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(n,t){return new n(t.learningRate,t.initialAccumulatorValue)}}var qn=e(33453),Kn=e(70827);
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
class Hn extends zn{constructor(n,t,e,r=null){super(),this.learningRate=n,this.beta1=t,this.beta2=e,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],(0,In.lu)((()=>{this.accBeta1=(0,Fn.i)(t).variable(),this.accBeta2=(0,Fn.i)(e).variable()})),null==r&&(this.epsilon=p.BV.backend.epsilon())}static get className(){return"Adam"}applyGradients(n){const t=Array.isArray(n)?n.map((n=>n.name)):Object.keys(n);(0,In.lu)((()=>{const e=(0,Kn.l)(1,this.accBeta1),r=(0,Kn.l)(1,this.accBeta2);t.forEach(((t,o)=>{const i=p.BV.registeredVariables[t];null==this.accumulatedFirstMoment[o]&&(this.accumulatedFirstMoment[o]={originalName:`${t}/m`,variable:(0,In.lu)((()=>(0,Vn.P)(i).variable(false)))}),null==this.accumulatedSecondMoment[o]&&(this.accumulatedSecondMoment[o]={originalName:`${t}/v`,variable:(0,In.lu)((()=>(0,Vn.P)(i).variable(false)))});const s=Array.isArray(n)?n[o].tensor:n[t];if(null==s)return;const a=this.accumulatedFirstMoment[o].variable,u=this.accumulatedSecondMoment[o].variable,c=(0,Tn.I)((0,Mn.d)(a,this.beta1),(0,Mn.d)(s,1-this.beta1)),l=(0,Tn.I)((0,Mn.d)(u,this.beta2),(0,Mn.d)((0,Rn.h)(s),1-this.beta2)),f=(0,Nn.h)(c,e),h=(0,Nn.h)(l,r);a.assign(c),u.assign(l);const d=(0,Tn.I)((0,Mn.d)((0,Nn.h)(f,(0,Tn.I)((0,Dn._)(h),this.epsilon)),-this.learningRate),i);i.assign(d)})),this.accBeta1.assign((0,Mn.d)(this.accBeta1,this.beta1)),this.accBeta2.assign((0,Mn.d)(this.accBeta2,this.beta2))})),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&(0,In.B9)(this.accumulatedFirstMoment.map((n=>n.variable))),null!=this.accumulatedSecondMoment&&(0,In.B9)(this.accumulatedSecondMoment.map((n=>n.variable)))}async getWeights(){const n=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(n.map((n=>({name:n.originalName,tensor:n.variable}))))}async setWeights(n){n=await this.extractIterations(n),(0,In.lu)((()=>{this.accBeta1.assign((0,qn.s)(this.beta1,this.iterations_+1)),this.accBeta2.assign((0,qn.s)(this.beta2,this.iterations_+1))}));const t=n.length/2;this.accumulatedFirstMoment=n.slice(0,t).map((n=>({originalName:n.name,variable:n.tensor.variable(false)}))),this.accumulatedSecondMoment=n.slice(t,2*t).map((n=>({originalName:n.name,variable:n.tensor.variable(false)})))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(n,t){return new n(t.learningRate,t.beta1,t.beta2,t.epsilon)}}var Xn=e(96235),jn=e(80632);
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
class Zn extends zn{constructor(n,t,e,r=null,o=0){super(),this.learningRate=n,this.beta1=t,this.beta2=e,this.epsilon=r,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],(0,In.lu)((()=>{this.iteration=(0,Fn.i)(0).variable(),this.accBeta1=(0,Fn.i)(t).variable()})),null==r&&(this.epsilon=p.BV.backend.epsilon())}static get className(){return"Adamax"}applyGradients(n){const t=Array.isArray(n)?n.map((n=>n.name)):Object.keys(n);(0,In.lu)((()=>{const e=(0,Kn.l)(1,this.accBeta1),r=(0,Nn.h)(-this.learningRate,(0,Tn.I)((0,Mn.d)(this.iteration,this.decay),1));t.forEach(((t,o)=>{const i=p.BV.registeredVariables[t];null==this.accumulatedFirstMoment[o]&&(this.accumulatedFirstMoment[o]={originalName:`${t}/m`,variable:(0,Vn.P)(i).variable(false)}),null==this.accumulatedWeightedInfNorm[o]&&(this.accumulatedWeightedInfNorm[o]={originalName:`${t}/v`,variable:(0,Vn.P)(i).variable(false)});const s=Array.isArray(n)?n[o].tensor:n[t];if(null==s)return;const a=this.accumulatedFirstMoment[o].variable,u=this.accumulatedWeightedInfNorm[o].variable,c=(0,Tn.I)((0,Mn.d)(a,this.beta1),(0,Mn.d)(s,1-this.beta1)),l=(0,Mn.d)(u,this.beta2),f=(0,Xn.W)(s),h=(0,jn.g)(l,f);a.assign(c),u.assign(h);const d=(0,Tn.I)((0,Mn.d)((0,Nn.h)(r,e),(0,Nn.h)(c,(0,Tn.I)(h,this.epsilon))),i);i.assign(d)})),this.iteration.assign((0,Tn.I)(this.iteration,1)),this.accBeta1.assign((0,Mn.d)(this.accBeta1,this.beta1))})),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&(0,In.B9)(this.accumulatedFirstMoment.map((n=>n.variable))),null!=this.accumulatedWeightedInfNorm&&(0,In.B9)(this.accumulatedWeightedInfNorm.map((n=>n.variable)))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(n){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(n,t){return new n(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}}
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
class Qn extends zn{constructor(n){super(),this.learningRate=n,this.setLearningRate(n)}static get className(){return"SGD"}applyGradients(n){(Array.isArray(n)?n.map((n=>n.name)):Object.keys(n)).forEach(((t,e)=>{const r=Array.isArray(n)?n[e].tensor:n[t];if(null==r)return;const o=p.BV.registeredVariables[t];(0,In.lu)((()=>{const n=(0,Tn.I)((0,Mn.d)(this.c,r),o);o.assign(n)}))})),this.incrementIterations()}setLearningRate(n){this.learningRate=n,null!=this.c&&this.c.dispose(),this.c=(0,In.Cn)((0,Fn.i)(-n))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(n){if(0!==(n=await this.extractIterations(n)).length)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(n,t){return new n(t.learningRate)}}
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
class Yn extends Qn{constructor(n,t,e=!1){super(n),this.learningRate=n,this.momentum=t,this.useNesterov=e,this.accumulations=[],this.m=(0,Fn.i)(this.momentum)}static get className(){return"Momentum"}applyGradients(n){(Array.isArray(n)?n.map((n=>n.name)):Object.keys(n)).forEach(((t,e)=>{const r=p.BV.registeredVariables[t];if(null==this.accumulations[e]){const n=!1;this.accumulations[e]={originalName:`${t}/momentum`,variable:(0,In.lu)((()=>(0,Vn.P)(r).variable(n)))}}const o=this.accumulations[e].variable,i=Array.isArray(n)?n[e].tensor:n[t];null!=i&&(0,In.lu)((()=>{let n;const t=(0,Tn.I)((0,Mn.d)(this.m,o),i);n=this.useNesterov?(0,Tn.I)((0,Mn.d)(this.c,(0,Tn.I)(i,(0,Mn.d)(t,this.m))),r):(0,Tn.I)((0,Mn.d)(this.c,t),r),o.assign(t),r.assign(n)}))})),this.incrementIterations()}dispose(){this.m.dispose(),null!=this.accumulations&&(0,In.B9)(this.accumulations.map((n=>n.variable)))}setMomentum(n){this.momentum=n}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map((n=>({name:n.originalName,tensor:n.variable}))))}async setWeights(n){n=await this.extractIterations(n);this.accumulations=n.map((n=>({originalName:n.name,variable:n.tensor.variable(false)})))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(n,t){return new n(t.learningRate,t.momentum,t.useNesterov)}}
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
class Jn extends zn{constructor(n,t=.9,e=0,r=null,o=!1){if(super(),this.learningRate=n,this.decay=t,this.momentum=e,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,null==r&&(this.epsilon=p.BV.backend.epsilon()),null==n)throw new Error("learningRate for RMSPropOptimizer must be defined.")}static get className(){return"RMSProp"}applyGradients(n){(Array.isArray(n)?n.map((n=>n.name)):Object.keys(n)).forEach(((t,e)=>{const r=p.BV.registeredVariables[t],o=!1;null==this.accumulatedMeanSquares[e]&&(this.accumulatedMeanSquares[e]={originalName:`${t}/rms`,variable:(0,In.lu)((()=>(0,Vn.P)(r).variable(o)))}),null==this.accumulatedMoments[e]&&(this.accumulatedMoments[e]={originalName:`${t}/momentum`,variable:(0,In.lu)((()=>(0,Vn.P)(r).variable(o)))}),null==this.accumulatedMeanGrads[e]&&this.centered&&(this.accumulatedMeanGrads[e]={originalName:`${t}/mg`,variable:(0,In.lu)((()=>(0,Vn.P)(r).variable(o)))});const i=Array.isArray(n)?n[e].tensor:n[t];if(null==i)return;const s=this.accumulatedMeanSquares[e].variable,a=this.accumulatedMoments[e].variable;(0,In.lu)((()=>{const n=(0,Tn.I)((0,Mn.d)(s,this.decay),(0,Mn.d)((0,Rn.h)(i),1-this.decay));if(this.centered){const t=this.accumulatedMeanGrads[e].variable,o=(0,Tn.I)((0,Mn.d)(t,this.decay),(0,Mn.d)(i,1-this.decay)),u=(0,Nn.h)((0,Mn.d)(i,this.learningRate),(0,Dn._)((0,Kn.l)(n,(0,Tn.I)((0,Rn.h)(o),this.epsilon)))),c=(0,Tn.I)((0,Mn.d)(a,this.momentum),u);s.assign(n),t.assign(o),a.assign(c);const l=(0,Kn.l)(r,c);r.assign(l)}else{const n=(0,Tn.I)((0,Mn.d)(s,this.decay),(0,Mn.d)((0,Rn.h)(i),1-this.decay)),t=(0,Tn.I)((0,Mn.d)(a,this.momentum),(0,Nn.h)((0,Mn.d)(i,this.learningRate),(0,Dn._)((0,Tn.I)(n,this.epsilon))));s.assign(n),a.assign(t);const e=(0,Kn.l)(r,t);r.assign(e)}}))})),this.incrementIterations()}dispose(){null!=this.accumulatedMeanSquares&&(0,In.B9)(this.accumulatedMeanSquares.map((n=>n.variable))),null!=this.accumulatedMeanGrads&&this.centered&&(0,In.B9)(this.accumulatedMeanGrads.map((n=>n.variable))),null!=this.accumulatedMoments&&(0,In.B9)(this.accumulatedMoments.map((n=>n.variable)))}async getWeights(){const n=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&n.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(n.map((n=>({name:n.originalName,tensor:n.variable}))))}async setWeights(n){n=await this.extractIterations(n);const t=this.centered?n.length/3:n.length/2,e=!1;this.accumulatedMeanSquares=n.slice(0,t).map((n=>({originalName:n.name,variable:n.tensor.variable(e)}))),this.accumulatedMoments=n.slice(t,2*t).map((n=>({originalName:n.name,variable:n.tensor.variable(e)}))),this.centered&&(this.accumulatedMeanGrads=n.slice(2*t,3*t).map((n=>({originalName:n.name,variable:n.tensor.variable(e)}))))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(n,t){return new n(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}}
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
const nt=[Wn,Un,Hn,Zn,Yn,Jn,Qn];function tt(n){return new Promise((n=>setTimeout(n))).then(n)}class et{constructor(n){if(!(0,w.OB)().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");n.startsWith(et.URL_SCHEME)&&(n=n.slice(et.URL_SCHEME.length)),null!=n&&0!==n.length||(n="model"),this.modelJsonFileName=n+".json",this.weightDataFileName=n+".weights.bin"}async save(n){if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");const t=window.URL.createObjectURL(new Blob([n.weightData],{type:"application/octet-stream"}));if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const e=M(n,[{paths:["./"+this.weightDataFileName],weights:n.weightSpecs}]),r=window.URL.createObjectURL(new Blob([JSON.stringify(e)],{type:"application/json"})),o=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor;if(o.download=this.modelJsonFileName,o.href=r,await tt((()=>o.dispatchEvent(new MouseEvent("click")))),null!=n.weightData){const n=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;n.download=this.weightDataFileName,n.href=t,await tt((()=>n.dispatchEvent(new MouseEvent("click"))))}return{modelArtifactsInfo:V(n)}}}}et.URL_SCHEME="downloads://";class rt{constructor(n){if(null==n||n.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${n}`);this.jsonFile=n[0],this.weightsFiles=n.slice(1)}async load(){return new Promise(((n,t)=>{const e=new FileReader;e.onload=e=>{const r=JSON.parse(e.target.result),o=r.modelTopology;if(null==o)return void t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));if(null==r.weightsManifest)return void t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));if(0===this.weightsFiles.length)return void n({modelTopology:o});const i=R(r,(n=>this.loadWeights(n)));n(i)},e.onerror=n=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),e.readAsText(this.jsonFile)}))}loadWeights(n){const t=[],e=[];for(const r of n)t.push(...r.weights),e.push(...r.paths);const r=this.checkManifestAndWeightFiles(n),o=e.map((n=>this.loadWeightsFile(n,r[n])));return Promise.all(o).then((n=>[t,T(n)]))}loadWeightsFile(n,t){return new Promise(((e,r)=>{const o=new FileReader;o.onload=n=>{const t=n.target.result;e(t)},o.onerror=t=>r(`Failed to weights data from file of path '${n}'.`),o.readAsArrayBuffer(t)}))}checkManifestAndWeightFiles(n){const t=[],e=this.weightsFiles.map((n=>N(n.name))),r={};for(const o of n)o.paths.forEach((n=>{const o=N(n);if(-1!==t.indexOf(o))throw new Error(`Duplicate file basename found in weights manifest: '${o}'`);if(t.push(o),-1===e.indexOf(o))throw new Error(`Weight file with basename '${o}' is not provided.`);r[n]=this.weightsFiles[e.indexOf(o)]}));if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}function ot(n){return new rt(n)}
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
function it(n,t,e,r){!function(n){(0,_.hu)(null!=n&&Array.isArray(n)&&n.length>0,(()=>"promises must be a none empty array"))}(n),function(n,t){(0,_.hu)(n>=0&&n<=1,(()=>`Progress fraction must be in range [0, 1], but got startFraction ${n}`)),(0,_.hu)(t>=0&&t<=1,(()=>`Progress fraction must be in range [0, 1], but got endFraction ${t}`)),(0,_.hu)(t>=n,(()=>`startFraction must be no more than endFraction, but got startFraction ${n} and endFraction ${t}`))}(e=null==e?0:e,r=null==r?1:r);let o=0;return Promise.all(n.map((i=>(i.then((i=>{const s=e+ ++o/n.length*(r-e);return t(s),i})),i))))}
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
async function st(n,t){null==t&&(t={});const e=null==t.fetchFunc?(0,w.OB)().platform.fetch:t.fetchFunc,r=n.map((n=>e(n,t.requestInit,{isBinary:!0}))),o=(null==t.onProgress?await Promise.all(r):await it(r,t.onProgress,0,.5)).map((n=>n.arrayBuffer()));return null==t.onProgress?await Promise.all(o):await it(o,t.onProgress,.5,1)}async function at(n,t="",e,r){return ut((n=>st(n,{requestInit:r})))(n,t,e)}function ut(n){return async(t,e="",r)=>{const o=t.map((()=>!1)),i={},s=null!=r?r.map((()=>!1)):[],a=[];if(t.forEach(((n,t)=>{let e=0;n.weights.forEach((n=>{const u="quantization"in n?n.quantization.dtype:n.dtype,c=E[u]*_.NA(n.shape),l=()=>{o[t]=!0,null==i[t]&&(i[t]=[]),i[t].push({manifestEntry:n,groupOffset:e,sizeBytes:c})};null!=r?r.forEach(((t,e)=>{t===n.name&&(l(),s[e]=!0)})):l(),a.push(n.name),e+=c}))})),!s.every((n=>n))){const n=r.filter(((n,t)=>!s[t]));throw new Error(`Could not find weights in manifest with names: ${n.join(", ")}. \nManifest JSON has weights with names: ${a.join(", ")}.`)}const u=o.reduce(((n,t,e)=>(t&&n.push(e),n)),[]),c=[];u.forEach((n=>{t[n].paths.forEach((n=>{const t=e+(e.endsWith("/")?"":"/")+n;c.push(t)}))}));const l=await n(c),f={};let h=0;return u.forEach((n=>{const e=t[n].paths.length;let r=0;for(let n=0;n<e;n++)r+=l[h+n].byteLength;const o=new ArrayBuffer(r),s=new Uint8Array(o);let a=0;for(let n=0;n<e;n++){const t=new Uint8Array(l[h+n]);s.set(t,a),a+=t.byteLength}i[n].forEach((n=>{const t=$(o.slice(n.groupOffset,n.groupOffset+n.sizeBytes),[n.manifestEntry]);for(const n in t)f[n]=t[n]})),h+=e})),f}}O.registerSaveRouter((n=>(0,w.OB)().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(et.URL_SCHEME)?function(n="model"){return new et(n)}(n.slice(et.URL_SCHEME.length)):null));class ct{constructor(n,t){if(this.DEFAULT_METHOD="POST",null==t&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,this.weightUrlConverter=t.weightUrlConverter,null!=t.fetchFunc?((0,_.hu)("function"==typeof t.fetchFunc,(()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)")),this.fetch=t.fetchFunc):this.fetch=(0,w.OB)().platform.fetch,(0,_.hu)(null!=n&&n.length>0,(()=>"URL path for http must not be null, undefined or empty.")),Array.isArray(n)&&(0,_.hu)(2===n.length,(()=>`URL paths for http must have a length of 2, (actual length is ${n.length}).`)),this.path=n,null!=t.requestInit&&null!=t.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}async save(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;const e=M(n,[{paths:["./model.weights.bin"],weights:n.weightSpecs}]);t.body.append("model.json",new Blob([JSON.stringify(e)],{type:"application/json"}),"model.json"),null!=n.weightData&&t.body.append("model.weights.bin",new Blob([n.weightData],{type:"application/octet-stream"}),"model.weights.bin");const r=await this.fetch(this.path,t);if(r.ok)return{modelArtifactsInfo:V(n),responses:[r]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)}async load(){const n=await this.fetch(this.path,this.requestInit);if(!n.ok)throw new Error(`Request to ${this.path} failed with status code ${n.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await n.json()}catch(n){let t=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?t+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":t+=" Please make sure the server is serving valid JSON for this request.",new Error(t)}const e=t.modelTopology,r=t.weightsManifest;if(null==e&&null==r)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return R(t,(n=>this.loadWeights(n)))}async loadWeights(n){const t=Array.isArray(this.path)?this.path[1]:this.path,[e,r]=function(n){const t=n.lastIndexOf("/"),e=n.lastIndexOf("?"),r=n.substring(0,t),o=e>t?n.substring(e):"";return[r+"/",o]}(t),o=this.weightPathPrefix||e,i=C(n),s=[],a=[];for(const t of n)for(const n of t.paths)null!=this.weightUrlConverter?a.push(this.weightUrlConverter(n)):s.push(o+n+r);this.weightUrlConverter&&s.push(...await Promise.all(a));return[i,T(await st(s,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress}))]}}function lt(n){return null!=n.match(ct.URL_SCHEME_REGEX)}ct.URL_SCHEME_REGEX=/^https?:\/\//;const ft=(n,t)=>{if("undefined"==typeof fetch&&(null==t||null==t.fetchFunc))return null;{let e=!0;if(e=Array.isArray(n)?n.every((n=>lt(n))):lt(n),e)return ht(n,t)}return null};function ht(n,t){return new ct(n,t)}function dt(n,t){return ht(n,t)}O.registerSaveRouter(ft),O.registerLoadRouter(ft);
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
class pt{constructor(n){this.modelArtifacts=n}load(){return this.modelArtifacts}}class mt{constructor(n){this.saveHandler=n}save(n){return this.saveHandler(n)}}class gt{constructor(n){n.load&&(this.load=()=>Promise.resolve(n.load())),n.save&&(this.save=t=>Promise.resolve(n.save(t)))}}function bt(n,t,e,r){const o=arguments;return new gt(yt(...o))}function yt(n,t,e,r){if(1===arguments.length){return null!=n.modelTopology||null!=n.weightSpecs?new pt(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new pt({modelTopology:n}))}return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new pt({modelTopology:n,weightSpecs:t,weightData:e,trainingConfig:r})}function wt(n){return new mt(n)}function kt(n){return new mt(n)}
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
var vt=e(43740),St=e(28687),_t=e(76708),Et=e(2668),xt=e(89065);const $t=(0,Et.op)({confusionMatrix_:
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
function(n,t,e){const r=(0,vt._1)(n,"labels","confusionMatrix"),o=(0,vt._1)(t,"predictions","confusionMatrix");_.hu(null==e||e>0&&Number.isInteger(e),(()=>`If provided, numClasses must be a positive integer, but got ${e}`)),_.hu(1===r.rank,(()=>`Expected the rank of labels to be 1, but got ${r.rank}`)),_.hu(1===o.rank,(()=>`Expected the rank of predictions to be 1, but got ${o.rank}`)),_.hu(r.shape[0]===o.shape[0],(()=>`Mismatch in the number of examples: ${r.shape[0]} vs. ${o.shape[0]}. Labels and predictions should have the same number of elements.`)),_.hu(e>0&&Number.isInteger(e),(()=>`numClasses is required to be a positive integer, but got ${e}`));const i=(0,_t.l)((0,En.p)(r,"int32"),e),s=(0,_t.l)((0,En.p)(o,"int32"),e),a=(0,xt.p)(i),u=(0,St.O)(a,s);return(0,En.p)(u,"int32")}});
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
var Bt=e(72200),At=e(29121),It=e(26151),Tt=e(99906);
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
let Nt;function Mt(n,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==n)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let e=!1,r=!1,o=!1,i=!1,s=!1,a=!1;if(n.data instanceof Uint8Array)e=!0;else if("undefined"!=typeof ImageData&&n instanceof ImageData)r=!0;else if("undefined"!=typeof HTMLVideoElement&&n instanceof HTMLVideoElement)o=!0;else if("undefined"!=typeof HTMLImageElement&&n instanceof HTMLImageElement)i=!0;else if(null!=n.getContext)s=!0;else{if(!("undefined"!=typeof ImageBitmap&&n instanceof ImageBitmap))throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${n.constructor.name}`);a=!0}if(null!=(0,It.pI)(At.eBW,p.BV.backendName)){const e={pixels:n},r={numChannels:t};return p.BV.runKernel(At.eBW,e,r)}const[u,c]=o?[n.videoWidth,n.videoHeight]:[n.width,n.height];let l,f;if(s)l=n.getContext("2d").getImageData(0,0,u,c).data;else if(r||e)l=n.data;else if(i||o||a){if(null==Nt)if("undefined"==typeof document){if("undefined"==typeof OffscreenCanvas||"undefined"==typeof OffscreenCanvasRenderingContext2D)throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");Nt=new OffscreenCanvas(1,1).getContext("2d")}else Nt=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Nt.canvas.width=u,Nt.canvas.height=c,Nt.drawImage(n,0,0,u,c),l=Nt.getImageData(0,0,u,c).data}if(4===t)f=new Int32Array(l);else{const n=u*c;f=new Int32Array(n*t);for(let e=0;e<n;e++)for(let n=0;n<t;++n)f[e*t+n]=l[4*e+n]}const h=[c,u,t];return(0,Tt.w)(f,h,"int32")}function Dt(n){return"undefined"!=typeof window&&"undefined"!=typeof ImageBitmap&&window.hasOwnProperty("createImageBitmap")&&!(n instanceof ImageBitmap)&&function(n){return null!=n&&0!==n.width&&0!==n.height}(n)&&!function(n){return null!=n&&n.data instanceof Uint8Array}(n)}async function Rt(n,t=3){let e=null;if((0,w.OB)().getBool("WRAP_TO_IMAGEBITMAP")&&Dt(n)){let t;try{t=await createImageBitmap(n,{premultiplyAlpha:"none"})}catch(n){t=null}e=null!=t&&t.width===n.width&&t.height===n.height?t:n}else e=n;return Mt(e,t)}async function Vt(n,t){let e=(0,vt._1)(n,"img","toPixels");if(!(n instanceof Bn.es)){const n=e;e=(0,En.p)(n,"int32"),n.dispose()}if(2!==e.rank&&3!==e.rank)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const[r,o]=e.shape.slice(0,2),i=2===e.rank?1:e.shape[2];if(i>4||2===i)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${i}`);if("float32"!==e.dtype&&"int32"!==e.dtype)throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`);const s=await e.data(),a="float32"===e.dtype?255:1,u=new Uint8ClampedArray(o*r*4);for(let n=0;n<r*o;++n){const t=[0,0,0,255];for(let r=0;r<i;r++){const o=s[n*i+r];if("float32"===e.dtype){if(o<0||o>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${o}.`)}else if("int32"===e.dtype&&(o<0||o>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${o}.`);1===i?(t[0]=o*a,t[1]=o*a,t[2]=o*a):t[r]=o*a}const r=4*n;u[r+0]=Math.round(t[0]),u[r+1]=Math.round(t[1]),u[r+2]=Math.round(t[2]),u[r+3]=Math.round(t[3])}if(null!=t){t.width=o,t.height=r;const n=t.getContext("2d"),e=new ImageData(u,o,r);n.putImageData(e,0,0)}return e!==n&&e.dispose(),u}const Ct=(0,Et.op)({fromPixels_:Mt});function Ft(n,t){const e=n.shape.length,r=t.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(r<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if("int32"!==t.dtype)throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${e}`);if(0===(0,_.NA)(n.shape))throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${n.shape}.`);const o=t.shape,i=o[o.length-1];let s=1;for(let n=0;n<o.length-1;++n)s*=o[n];const a=n.shape,u=o.slice();u.pop();let c=1;for(let n=i;n<e;++n)c*=a[n],u.push(a[n]);const l=[...(0,_.e3)(n.shape).map((n=>n/c)),1].slice(0,i);return[u,s,c,l]}var Ot=e(33028);function Pt(n,t,e){const r=n.shape.length;_.hu(r===t.length,(()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`)),_.hu(r===e.length,(()=>`Error in slice${r}D: Length of size ${e} must match the rank of the array (${r}).`));for(let o=0;o<r;++o)_.hu(t[o]+e[o]<=n.shape[o],(()=>`Error in slice${r}D: begin[${o}] + size[${o}] (${t[o]+e[o]}) would overflow input.shape[${o}] (${n.shape[o]})`))}function Lt(n){const t=[];let e=0;for(;n>0;)1&n&&t.push(e),n/=2,e++;return t}function zt(n,t,e){const r=[];for(let o=0;o<n.length;o++)r[o]=Math.ceil((t[o]-n[o])/e[o]);return r}function Wt(n,t,e,r){const o=[...n];for(let n=o.length;n<r.length;n++)o.push(1);for(let n=0;n<e;n++)0===n?o[t]=1:(o.splice(t,0,1),o.pop());return o}function Gt(n,t,e){return e<=n?e:e-(t-1)}function Ut(n,t){const e=[];for(let r=0;r<n;r++)e.push(t+r);return e}function qt(n,t,e,r,o,i,s,a,u){const c=n.length;let l=new Array(c),f=new Array(c),h=new Array(c);if(t.length&&e>0){const u=t[0],c=e+1;l=Kt(s,u,c,r,n),f=Ht(a,u,c,o,n),h=Wt(i,u,c,n)}else for(let t=0;t<c;t++)l[t]=jt(s,r,i,n,t,u),f[t]=Zt(a,o,i,n,t,u),h[t]=Xt(i,t,u);return{begin:l,end:f,strides:h}}function Kt(n,t,e,r,o){const i=[...o],s=Ut(e,t);for(let o=0;o<i.length;o++)if(s.indexOf(o)>-1)i[o]=0;else{const s=Gt(t,e,o);let a=r[s];n&1<<s&&(a=0),i[o]=a}return i}function Ht(n,t,e,r,o){const i=[...o],s=Ut(e,t);for(let o=0;o<i.length;o++)if(s.indexOf(o)>-1)i[o]=Number.MAX_SAFE_INTEGER;else{const s=Gt(t,e,o);let a=r[s];n&1<<s&&(a=Number.MAX_SAFE_INTEGER),i[o]=a}for(let n=0;n<i.length;n++){const t=o[n];i[n]<0&&(i[n]+=t),i[n]=_.uZ(0,i[n],o[n])}return i}function Xt(n,t,e){let r=n[t];return(e&1<<t||null==r)&&(r=1),r}function jt(n,t,e,r,o,i){let s=t[o];const a=e[o]||1;(n&1<<o||i&1<<o||null==s)&&(s=a>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);const u=r[o];return s<0&&(s+=u),s=_.uZ(0,s,u-1),s}function Zt(n,t,e,r,o,i){let s=t[o];const a=e[o]||1;(n&1<<o||i&1<<o||null==s)&&(s=a>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);const u=r[o];return s<0&&(s+=u),s=a>0?_.uZ(0,s,u):_.uZ(-1,s,u-1),s}function Qt(n,t,e){let r=e.length;for(let n=0;n<e.length;n++)if(e[n]>1){r=n;break}for(let o=r+1;o<e.length;o++)if(t[o]>0||e[o]!==n[o])return!1;return!0}function Yt(n,t){let e=n.length>0?n[n.length-1]:1;for(let r=0;r<n.length-1;r++)e+=n[r]*t[r];return e}function Jt(n,t,e){let r;const o=n.shape.length;let i;return r="number"==typeof t?[t,...new Array(o-1).fill(0)]:t.length<o?t.concat(new Array(o-t.length).fill(0)):t.slice(),r.forEach((n=>{_.hu(-1!==n,(()=>"slice() does not support negative begin indexing."))})),i=null==e?new Array(o).fill(-1):"number"==typeof e?[e,...new Array(o-1).fill(-1)]:e.length<o?e.concat(new Array(o-e.length).fill(-1)):e,i=i.map(((t,e)=>t>=0?t:(_.hu(-1===t,(()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${e}.`)),n.shape[e]-r[e]))),[r,i]}function ne(n,t,e,r,o,i,s,a,u){let c;if(null==r?(c=new Array(t.length),c.fill(1)):c=r,null!=s&&0!=(s&s-1))throw new Error("Multiple ellipses in slice is not allowed.");let l=!1;const f={dims:c.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:c.slice(),beginMask:o,endMask:i,ellipsisMask:s,newAxisMask:a,shrinkAxisMask:u};for(let n=0;n<f.dims;n++)l&&0!=(1<<n&a)&&f.numAddAxisAfterEllipsis++,1<<n&s&&(l=!0);l||(f.ellipsisMask|=1<<f.dims,f.dims++);const h={dims:n.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};!function(n,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=null!=n.begin,t.endValid=null!=n.end,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let r=0;r<n.dims;r++)if(1<<r&n.ellipsisMask){const o=Math.min(t.dims-(n.dims-r)+1+n.numAddAxisAfterEllipsis,t.dims);for(;e<o;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=r}else if(1<<r&n.newAxisMask)t.finalShapeGatherIndices.push(-2),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);null!=n.begin&&(t.begin[e]=n.begin[r]),null!=n.end&&(t.end[e]=n.end[r]),t.strides[e]=n.strides[r],n.beginMask&1<<r&&(t.beginMask|=1<<e),n.endMask&1<<r&&(t.endMask|=1<<e),n.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(-1),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[e]=r,e++}}(f,h);let d=!0,p=!0,m=!0;const g=[],b=[];for(let t=0;t<n.length;++t){if(0===h.strides[t])throw Error(`strides[${t}] must be non-zero`);const e=!!(h.shrinkAxisMask&1<<t),r=n[t];if(-1===r){g.push(e?1:-1);continue}const o=[h.beginMask&1<<t,h.endMask&1<<t],i=[h.strides[t]>0?0:-1,h.strides[t]>0?r:r-1];if(e&&h.strides[t]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&1===h.strides[t];const s=!!(h.beginMask&1<<t&&h.endMask&1<<t);if(h.beginValid&&h.endValid){if(e){const n=h.begin[t]<0?r+h.begin[t]:h.begin[t];if(h.begin[t]=n,h.end[t]=h.begin[t]+1,n<0||n>=r)throw Error(`slice index ${h.begin[t]} of dimension ${t} out of bounds.`)}else h.begin[t]=te(h.begin[t],0,h.strides[t],r,o,i),h.end[t]=te(h.end[t],1,h.strides[t],r,o,i);const n=1===h.strides[t]&&0===h.begin[t]&&h.end[t]===r;d=d&&n,p=p&&(0===t&&1===h.strides[t]||n)}else d=d&&1===h.strides[t]&&s,p=p&&(0===t&&1===h.strides[t]||s);let a,u=!1;if(h.beginValid&&h.endValid?(a=h.end[t]-h.begin[t],u=!0):e?(a=1,u=!0):s&&r>=0&&(a=h.strides[t]<0?-r:r,u=!0),u){let n;n=0===a||a<0!=h.strides[t]<0?0:Math.trunc(a/h.strides[t])+(a%h.strides[t]!=0?1:0),g.push(n)}else g.push(-1)}for(let n=0;n<h.finalShapeGatherIndices.length;++n){const t=h.finalShapeGatherIndices[n];t>=0?b.push(g[t]):-2===t&&b.push(1)}return{finalShapeSparse:b.filter(((n,t)=>-2!==h.finalShapeGatherIndices[t])),finalShape:b,isIdentity:d,sliceDim0:p,isSimpleSlice:m,begin:h.begin,end:h.end,strides:h.strides}}function te(n,t,e,r,o,i){if(o[t])return e>0?i[t]:i[t+1&1];{const t=n<0?r+n:n;return t<i[0]?i[0]:t>i[1]?i[1]:t}}var ee=e(80747),re=e(79122);
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
const oe=.1;function ie(n,t,e){return null==e&&(e=se()),ae(n,t,((n,t)=>fe(n,t,e)))}function se(){return 32===p.BV.backend.floatPrecision()?.001:oe}function ae(n,t,e){let r=!0;if(((0,re.isTypedArray)(n)||(0,re.isTypedArray)(t))&&(r=!1),(0,re.isTypedArray)(n)&&(0,re.isTypedArray)(t)&&(r=!0),r){const e=n.constructor.name,r=t.constructor.name;if(e!==r)throw new Error(`Arrays are of different type. Actual: ${e}. Expected: ${r}`)}if(Array.isArray(n)&&Array.isArray(t)){const e=(0,vt.C)(n),r=(0,vt.C)(t);if(!(0,_.cO)(e,r))throw new Error(`Arrays have different shapes. Actual: [${e}]. Expected: [${r}]`)}const o=(0,re.isTypedArray)(n)?n:(0,re.flatten)(n),i=(0,re.isTypedArray)(t)?t:(0,re.flatten)(t);if(o.length!==i.length)throw new Error(`Arrays have different lengths actual: ${o.length} vs expected: ${i.length}.\nActual:   ${o}.\nExpected: ${i}.`);for(let n=0;n<i.length;++n){const t=o[n],r=i[n];if(!e(t,r))throw new Error(`Arrays differ: actual[${n}] = ${t}, expected[${n}] = ${r}.\nActual:   ${o}.\nExpected: ${i}.`)}"undefined"!=typeof expect&&expect().nothing()}function ue(n,t){n().then((()=>t.fail()),(()=>t())),"undefined"!=typeof expect&&expect().nothing()}function ce(n,t){const e="string"==typeof t||"number"==typeof t||"boolean"==typeof t?[t]:t;return(0,_.HD)(n)||(0,_.HD)(n[0])||(0,_.HD)(t)||(0,_.HD)(t[0])?ae(n,e,((n,t)=>n==t)):ae(n,t,((n,t)=>fe(n,t,0)))}function le(n,t,e){if(null==e&&(e=se()),!fe(n,t,e))throw new Error(`Numbers differ: actual === ${n}, expected === ${t}`);"undefined"!=typeof expect&&expect().nothing()}function fe(n,t,e){return!isFinite(n)&&!isFinite(t)||!(isNaN(n)||isNaN(t)||Math.abs(n-t)>e)}function he(n,t,e){for(let r=0;r<n.length;r++)if(n[r]<t||n[r]>e)throw new Error(`Value out of range:${n[r]} low: ${t}, high: ${e}`)}function de(n,t){const e=new Float32Array(n),r=new Float32Array(t);if(e.length!==r.length)throw new Error(`Expected ArrayBuffer to be of length ${r.length}, but it was ${e.length}`);for(let n=0;n<r.length;n++)if(e[n]!==r[n])throw new Error(`Expected ArrayBuffer value at ${n} to be ${r[n]} but got ${e[n]} instead`)}function pe(n){for(let t=0;t<n.length;t++){const e=n[t];Array.isArray(e)?pe(e):n[t]=(0,re.encodeString)(e)}return n}function me(n){const t=document.createElement("video");return"playsInline"in t&&(t.playsInline=!0),t.muted=!0,t.loop=!0,t.style.position="fixed",t.style.left="0px",t.style.top="0px",t.preload="auto",t.appendChild(n),new Promise((n=>{t.addEventListener("loadeddata",(e=>n(t))),t.load()}))}async function ge(n){await n.play(),"requestVideoFrameCallback"in n&&await new Promise((t=>{n.requestVideoFrameCallback(t)}))}
/** @license See the LICENSE file. */
const be="4.2.0";
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
class ye{static sgd(n){return new Qn(n)}static momentum(n,t,e=!1){return new Yn(n,t,e)}static rmsprop(n,t=.9,e=0,r=null,o=!1){return new Jn(n,t,e,r,o)}static adam(n=.001,t=.9,e=.999,r=null){return new Hn(n,t,e,r)}static adadelta(n=.001,t=.95,e=null){return new Wn(n,t,e)}static adamax(n=.002,t=.9,e=.999,r=null,o=0){return new Zn(n,t,e,r,o)}static adagrad(n,t=.1){return new Un(n,t)}}var we=e(71221),ke=e(4041),ve=e(49876);
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
const Se=ye,_e="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:"undefined"!=typeof setImmediate?setImmediate:n=>n();function Ee(){return new Promise((n=>_e((()=>n()))))}var xe=e(83591);
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
function $e(n,t){const e=n[0].length;n.forEach(((n,t)=>{_.hu(n.length===e,(()=>`Error in concat${e}D: rank of tensors[${t}] must be the same as the rank of the rest (${e})`))})),_.hu(t>=0&&t<e,(()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`));const r=n[0];n.forEach(((n,o)=>{for(let i=0;i<e;i++)_.hu(i===t||n[i]===r[i],(()=>`Error in concat${e}D: Shape of tensors[${o}] (${n}) does not match the shape of the rest (${r}) along the non-concatenated axis ${o}.`))}))}function Be(n,t){const e=n[0].slice();for(let r=1;r<n.length;r++)e[t]+=n[r][t];return e}var Ae,Ie=e(2582),Te=e(19323);function Ne(n,t,e){let r=new Array;if(null==e&&null==t)return r;if(null==t)for(;r.length<n+e.length;)r.push(-1);else r=t.slice();if(null==e)return r;if(n+e.length!==r.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${n+e.length}, but shape.rank = ${r.length}`);for(let o=1;o<e.length;++o){const i=e[o],s=r[r.length-e.length+o],a=r[s];if(i>=0)if(a>=0){if(a!==i)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${o+n}] = ${i} but shape[${o+n}] = ${a}`)}else r[s]=i}return r}function Me(n){const t={FIRST_DIM_SIZE:Ae.FIRST_DIM_SIZE,VALUE_ROWIDS:Ae.VALUE_ROWIDS,ROW_LENGTHS:Ae.ROW_LENGTHS,ROW_SPLITS:Ae.ROW_SPLITS,ROW_LIMITS:Ae.ROW_LIMITS,ROW_STARTS:Ae.ROW_STARTS},e=[];for(const r of n){if(!(r in t))break;e.push(t[r])}return e}function De(n){return 0===n.length?0:n[0]===Ae.FIRST_DIM_SIZE?n.length-1:n.length}function Re(n,t){if(null==n||null==t)return;const e=n.length,r=t.length;if(e>=r)throw new Error(`defaultValue.shape=${n} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${r})`);for(let o=0;o<Math.min(e,r-1);++o){const e=n[o],r=t[o+1];if(e>=0&&r>=0&&1!==e&&e!==r)throw new Error(`defaultValue.shape=${n}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${o-n.length}] = ${e} but ragged tensor input.flatValues.shape[${o-n.length}] = ${r}`)}}!function(n){n[n.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",n[n.VALUE_ROWIDS=1]="VALUE_ROWIDS",n[n.ROW_LENGTHS=2]="ROW_LENGTHS",n[n.ROW_SPLITS=3]="ROW_SPLITS",n[n.ROW_LIMITS=4]="ROW_LIMITS",n[n.ROW_STARTS=5]="ROW_STARTS"}(Ae||(Ae={}));
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
const Ve=30;function Ce(n){return n<=Ve?n:(0,_.jP)(n,Math.floor(Math.sqrt(n)))}
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
function Fe(n,t,e){return[e*("number"==typeof n?n:n[0]),t*("number"==typeof n?n:n[1])]}
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
function Oe(n,t,e,r=!0){let o=[];if(r)o=o.concat(t.slice(0)),o.push(n[0]/e),o=o.concat(n.slice(1));else{o=o.concat(n[0]);const e=t.length;for(let r=0;r<e;++r)o=o.concat([n[r+1]/t[r],t[r]]);o=o.concat(n.slice(e+1))}return o}function Pe(n,t,e=!0){const r=[];if(e){r.push(t);for(let e=t+1;e<n;++e)e<=2*t?(r.push(e),r.push(e-(t+1))):r.push(e)}else{const e=[],o=[];for(let r=1;r<n;++r)r>=2*t+1||r%2==1?o.push(r):e.push(r);r.push(...e),r.push(0),r.push(...o)}return r}function Le(n,t,e,r=!0){const o=[];r?o.push(n[0]/e):o.push(n[0]*e);for(let e=1;e<n.length;++e)e<=t.length?r?o.push(t[e-1]*n[e]):o.push(n[e]/t[e-1]):o.push(n[e]);return o}function ze(n,t){const e=[0];for(let r=0;r<t;++r)e.push(n[r][0]);return e}function We(n,t,e){const r=n.slice(0,1);for(let o=0;o<e;++o)r.push(n[o+1]-t[o][0]-t[o][1]);return r}
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
const Ge=1.7580993408473768,Ue=1.0507009873554805,qe=.3275911,Ke=.254829592,He=-.284496736,Xe=1.421413741,je=-1.453152027,Ze=1.061405429;var Qe=e(64706);
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
function Ye(n,t){if(n.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${n.length}, imag: ${t.length}.`);const e=new Float32Array(2*n.length);for(let r=0;r<e.length;r+=2)e[r]=n[r/2],e[r+1]=t[r/2];return e}function Je(n){const t=new Float32Array(n.length/2),e=new Float32Array(n.length/2);for(let r=0;r<n.length;r+=2)t[r/2]=n[r],e[r/2]=n[r+1];return{real:t,imag:e}}function nr(n){const t=Math.ceil(n.length/4),e=new Float32Array(t),r=new Float32Array(t);for(let t=0;t<n.length;t+=4)e[Math.floor(t/4)]=n[t],r[Math.floor(t/4)]=n[t+1];return{real:e,imag:r}}function tr(n){const t=Math.floor(n.length/4),e=new Float32Array(t),r=new Float32Array(t);for(let t=2;t<n.length;t+=4)e[Math.floor(t/4)]=n[t],r[Math.floor(t/4)]=n[t+1];return{real:e,imag:r}}function er(n,t){return{real:n[2*t],imag:n[2*t+1]}}function rr(n,t,e,r){n[2*r]=t,n[2*r+1]=e}function or(n,t){const e=new Float32Array(n/2),r=new Float32Array(n/2);for(let o=0;o<Math.ceil(n/2);o++){const i=(t?2:-2)*Math.PI*(o/n);e[o]=Math.cos(i),r[o]=Math.sin(i)}return{real:e,imag:r}}function ir(n,t,e){const r=(e?2:-2)*Math.PI*(n/t);return{real:Math.cos(r),imag:Math.sin(r)}}
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
const sr="->",ar=/->/g;function ur(n,t){const e=((n=n.replace(/\s/g,"")).length-n.replace(ar,"").length)/sr.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error('Equation must contain exactly one arrow ("->").');const[r,o]=n.split(sr);(0,_.hu)(-1===r.indexOf("..."),(()=>'The ellipsis notation ("...") is not supported yet.'));const i=r.split(","),s=i.length;if(t!==s)throw new Error(`Expected ${s} input tensors, received ${t}`);if(s>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let n=0;n<o.length;++n){const t=o[n];if(!i.some((n=>-1!==n.indexOf(t))))throw new Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);-1===a.indexOf(t)&&a.push(t)}for(let n=0;n<r.length;++n){const t=r[n];-1===a.indexOf(t)&&","!==t&&a.push(t)}const u=new Array(i.length);for(let n=0;n<s;++n){if(new Set(i[n].split("")).size!==i[n].length)throw new Error(`Found duplicate axes in input component ${i[n]}. Support for duplicate axes in input is not implemented yet.`);u[n]=[];for(let t=0;t<i[n].length;++t)u[n].push(a.indexOf(i[n][t]))}const c=a.length,l=[];for(let n=o.length;n<c;++n)l.push(n);return{allDims:a,summedDims:l,idDims:u}}function cr(n,t){let e=new Array(n);e.fill(-1);for(let n=0;n<t.length;++n)e[t[n]]=n;const r=[];for(let t=0;t<n;++t)-1===e[t]&&r.push(t);return e=e.filter((n=>-1!==n)),{permutationIndices:e,expandDims:r}}function lr(n,t,e){const r=new Array(n);for(let n=0;n<e.length;++n){const o=e[n].shape;for(let e=0;e<t[n].length;++e)void 0===r[t[n][e]]?r[t[n][e]]=o[e]:(0,_.hu)(r[t[n][e]]===o[e],(()=>`Expected dimension ${r[t[n][e]]} at axis ${e} of input shaped ${JSON.stringify(o)}, but got dimension ${o[e]}`))}}function fr(n,t){const e=n,r=[];let o=0;0===n.length&&e.push(-1),o=n.length+1;for(let n=0;n<o;++n)r.push([]);const i=[];for(let n=0;n<e.length;++n){const o=dr(t,e[n]);for(const t of o)-1===i.indexOf(t)&&(r[n].push(t),i.push(t))}return{path:e,steps:r}}function hr(n){return n.every(((n,t)=>n===t))}function dr(n,t){const e=[];for(let r=0;r<n.length;++r)0!==n[r].length&&-1===n[r].indexOf(t)&&-1!==t||e.push(r);return e}function pr(n,t,e=0){let r=[];if("number"==typeof t)(0,_.hu)(n.shape[e]%t==0,(()=>"Number of splits must evenly divide the axis.")),r=new Array(t).fill(n.shape[e]/t);else{const o=t.reduce(((n,t)=>(-1===t&&(n+=1),n)),0);(0,_.hu)(o<=1,(()=>"There should be only one negative value in split array."));const i=t.indexOf(-1);if(-1!==i){const r=t.reduce(((n,t)=>t>0?n+t:n));t[i]=n.shape[e]-r}(0,_.hu)(n.shape[e]===t.reduce(((n,t)=>n+t)),(()=>"The sum of sizes must match the size of the axis dimension.")),r=t}return r}
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
function mr(n){return`Received SparseTensor with denseShape[0] = 0 but\n  indices.shape[0] = ${n}`}function gr(n,t){return`indices(${n}, 0) is invalid: ${t} < 0`}function br(n,t,e){return`indices(${n}, 0) is invalid: ${t} >= ${e}`}
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
function yr(n,t){return`only one output dimension may be -1, not both ${n} and ${t}`}function wr(n,t){return`size ${n} must be non-negative, not ${t}`}function kr(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function vr(n,t){return`Input to reshape is a SparseTensor with ${(0,_.NA)(n)}\n  dense values, but the requested shape requires a multiple of ${(0,_.NA)(t)}. inputShape=${n} outputShape= ${t}`}function Sr(n,t){return`Input to reshape is a tensor with ${(0,_.NA)(n)} dense values, but the requested shape has ${(0,_.NA)(t)}. inputShape=${n} outputShape=${t}`}
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
function _r(){return"segment ids must be >= 0"}function Er(){return"segment ids are not increasing"}function xr(n,t){return`Segment id ${n} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function $r(n,t,e){return`Bad: indices[${n}] == ${t} out of range [0, ${e})`}
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
function Br(n,t){let e,r=!1;for(n<=Ve?(e=n,r=!0):e=(0,_.jP)(n,Math.floor(Math.sqrt(n)));!r;)e>t||e===n?r=!0:e=(0,_.jP)(n,e+1);return e}function Ar(n,t,e){const r=[],o=n.length;for(let i=0;i<o;i++)i!==t?r.push(n[i]):r.push(e);return r}function Ir(n,t,e,r){const o=t.shape.length,i=n.shape.length;if(0!==r&&(r<-o||r>o))throw new Error(`Expect batchDims in the range of [-${o}, ${o}], but got ${r}`);if(r<0&&(r+=o),r>i)throw new Error(`batchDims (${r}) must be less than rank(x) (\n    ${i}).`);if(e<r)throw new Error(`batchDims (${r}) must be less than or equal to axis (${e}).`);for(let e=0;e<r;++e)if(n.shape[e]!==t.shape[e])throw new Error(`x.shape[${e}]: ${n.shape[e]} should be equal to indices.shape[${e}]: ${t.shape[e]}.`);const s=n.shape[e],a=[];let u=1,c=1,l=1;for(let t=0;t<r;++t)a.push(n.shape[t]),u*=n.shape[t];for(let t=r;t<e;t++)a.push(n.shape[t]),c*=n.shape[t];for(let n=r;n<o;n++)a.push(t.shape[n]);for(let t=e+1;t<i;t++)a.push(n.shape[t]),l*=n.shape[t];return{batchSize:u,sliceSize:l,outerSize:c,dimSize:s,outputShape:a}}
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
function Tr(n){try{return n.map((n=>(0,re.decodeString)(n)))}catch(n){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${n}`)}}function Nr(n){return n.map((n=>(0,re.encodeString)(n)))}var Mr=e(83337),Dr=e(48333),Rr=e(68713);
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
!function(){for(const n of nt)Ln(n)}()},29121:function(n,t,e){e.d(t,{$HU:function(){return gt},$g6:function(){return J},$w:function(){return X},Acj:function(){return bn},BMI:function(){return Pn},BiW:function(){return dt},Byc:function(){return L},CAk:function(){return $n},CQl:function(){return ht},D2d:function(){return Kt},DlI:function(){return lt},Eh3:function(){return N},FKq:function(){return Ft},G3Y:function(){return ie},GBy:function(){return Ot},Gcp:function(){return zt},HEU:function(){return tn},HZH:function(){return yt},Hhh:function(){return Fn},Hmb:function(){return kt},IKK:function(){return c},IMb:function(){return k},J$2:function(){return En},J_u:function(){return kn},JhU:function(){return b},Kgp:function(){return at},L8s:function(){return Lt},Ly9:function(){return E},M2y:function(){return h},MIZ:function(){return te},MRv:function(){return Ct},MZg:function(){return Mn},NEP:function(){return on},NZg:function(){return Zn},O3z:function(){return Wt},OAf:function(){return Wn},OR:function(){return fn},OU7:function(){return Gn},OV7:function(){return zn},Omj:function(){return en},Oyi:function(){return m},PYm:function(){return Tn},PhF:function(){return It},QCc:function(){return g},QRR:function(){return G},Qg5:function(){return wn},QiL:function(){return it},Qvg:function(){return ue},RFZ:function(){return $},ROF:function(){return y},RQH:function(){return Mt},RuY:function(){return le},SX0:function(){return nn},SYM:function(){return r},SbG:function(){return _t},SpW:function(){return i},T0n:function(){return U},TQc:function(){return Pt},TR1:function(){return P},ToN:function(){return ae},Tr8:function(){return Jt},Uyb:function(){return ln},VGw:function(){return o},Vbg:function(){return jn},VcC:function(){return W},VfG:function(){return Nn},Vn9:function(){return Q},W0H:function(){return et},XDQ:function(){return ce},XLW:function(){return v},XkS:function(){return Yt},Xze:function(){return a},Y0y:function(){return an},YFo:function(){return sn},YoZ:function(){return On},ZbH:function(){return An},ZjV:function(){return qt},Zz9:function(){return I},_JP:function(){return Zt},_V0:function(){return me},_Yw:function(){return vt},_k9:function(){return w},_tC:function(){return Ht},a5O:function(){return Vt},aJk:function(){return f},avt:function(){return vn},b9H:function(){return de},bK0:function(){return Xt},bV0:function(){return $t},c17:function(){return Kn},cWu:function(){return re},cie:function(){return q},cye:function(){return tt},dDz:function(){return ft},deh:function(){return cn},dpD:function(){return wt},e07:function(){return xt},e6w:function(){return pt},e7N:function(){return Bn},eBW:function(){return he},eEB:function(){return x},eZ0:function(){return Cn},ekb:function(){return Z},gJX:function(){return B},h8e:function(){return fe},hdR:function(){return rn},i5y:function(){return Rt},iHb:function(){return z},iJz:function(){return yn},iWB:function(){return Sn},iZT:function(){return gn},ik2:function(){return F},jMg:function(){return p},jQk:function(){return jt},jQs:function(){return Xn},jeX:function(){return hn},kU:function(){return In},kpP:function(){return se},kuV:function(){return Yn},luS:function(){return ge},lyA:function(){return st},mKl:function(){return Et},mTV:function(){return Ln},mc4:function(){return O},mhS:function(){return M},mm_:function(){return s},n9L:function(){return ee},nhH:function(){return Gt},nr8:function(){return At},o0g:function(){return ct},o2y:function(){return C},oFR:function(){return Tt},oHH:function(){return Y},oT6:function(){return u},p2w:function(){return Nt},p4S:function(){return j},pe_:function(){return ut},q1x:function(){return mn},q2K:function(){return qn},q8u:function(){return Hn},qCd:function(){return Rn},qIC:function(){return Vn},qWM:function(){return rt},qi_:function(){return pn},qkr:function(){return bt},qw7:function(){return d},r7n:function(){return _n},s1s:function(){return Qt},sEM:function(){return ne},sHE:function(){return dn},sJF:function(){return l},sL$:function(){return K},usg:function(){return pe},uv1:function(){return nt},vFR:function(){return Un},vtC:function(){return xn},vwp:function(){return un},w3H:function(){return Ut},w6g:function(){return Dn},wUP:function(){return D},wYB:function(){return Dt},wYn:function(){return Qn},we_:function(){return ot},wm:function(){return R},wx7:function(){return oe},x12:function(){return V},xJR:function(){return mt},xQA:function(){return Bt},xnO:function(){return A},y7R:function(){return H},yQU:function(){return Jn},yj2:function(){return T},zbQ:function(){return St},zvY:function(){return _},zws:function(){return S}});const r="Abs",o="Acos",i="Acosh",s="Add",a="AddN",u="All",c="Any",l="ArgMax",f="ArgMin",h="Asin",d="Asinh",p="Atan",m="Atanh",g="Atan2",b="AvgPool",y="AvgPoolGrad",w="AvgPool3D",k="AvgPool3DGrad",v="BatchMatMul",S="BatchToSpaceND",_="Bincount",E="BroadcastTo",x="BroadcastArgs",$="Cast",B="Ceil",A="ClipByValue",I="Complex",T="ComplexAbs",N="Concat",M="Conv2D",D="Conv2DBackpropFilter",R="Conv2DBackpropInput",V="Conv3D",C="Conv3DBackpropFilterV2",F="Conv3DBackpropInputV2",O="Cos",P="Cosh",L="Cumprod",z="Cumsum",W="CropAndResize",G="DenseBincount",U="DepthToSpace",q="DepthwiseConv2dNative",K="DepthwiseConv2dNativeBackpropFilter",H="DepthwiseConv2dNativeBackpropInput",X="Diag",j="Dilation2D",Z="Dilation2DBackpropInput",Q="Dilation2DBackpropFilter",Y="RealDiv",J="Einsum",nn="Elu",tn="EluGrad",en="Erf",rn="Equal",on="Exp",sn="ExpandDims",an="Expm1",un="FFT",cn="Fill",ln="FlipLeftRight",fn="Floor",hn="FloorDiv",dn="FusedBatchNorm",pn="GatherV2",mn="GatherNd",gn="Greater",bn="GreaterEqual",yn="Identity",wn="IFFT",kn="Imag",vn="IsFinite",Sn="IsInf",_n="IsNan",En="LeakyRelu",xn="Less",$n="LessEqual",Bn="LinSpace",An="Log",In="Log1p",Tn="LogicalAnd",Nn="LogicalNot",Mn="LogicalOr",Dn="LogicalXor",Rn="LogSoftmax",Vn="LowerBound",Cn="LRN",Fn="LRNGrad",On="Max",Pn="Maximum",Ln="MaxPool",zn="MaxPoolGrad",Wn="MaxPool3D",Gn="MaxPool3DGrad",Un="MaxPoolWithArgmax",qn="Mean",Kn="Min",Hn="Minimum",Xn="MirrorPad",jn="Mod",Zn="Multinomial",Qn="Multiply",Yn="Neg",Jn="NotEqual",nt="NonMaxSuppressionV3",tt="NonMaxSuppressionV4",et="NonMaxSuppressionV5",rt="OnesLike",ot="OneHot",it="Pack",st="PadV2",at="Pool",ut="Pow",ct="Prelu",lt="Prod",ft="RaggedGather",ht="RaggedRange",dt="RaggedTensorToTensor",pt="Range",mt="Real",gt="Reciprocal",bt="Relu",yt="Reshape",wt="ResizeNearestNeighbor",kt="ResizeNearestNeighborGrad",vt="ResizeBilinear",St="ResizeBilinearGrad",_t="Relu6",Et="Reverse",xt="Round",$t="Rsqrt",Bt="ScatterNd",At="SearchSorted",It="Select",Tt="Selu",Nt="Slice",Mt="Sin",Dt="Sinh",Rt="Sign",Vt="Sigmoid",Ct="Softplus",Ft="Sqrt",Ot="Sum",Pt="SpaceToBatchND",Lt="SplitV",zt="Softmax",Wt="SparseFillEmptyRows",Gt="SparseReshape",Ut="SparseSegmentMean",qt="SparseSegmentSum",Kt="SparseToDense",Ht="SquaredDifference",Xt="Square",jt="StridedSlice",Zt="StringNGrams",Qt="StringSplit",Yt="StringToHashBucketFast",Jt="Sub",ne="Tan",te="Tanh",ee="Tile",re="TopK",oe="Transform",ie="Transpose",se="Unique",ae="Unpack",ue="UnsortedSegmentSum",ce="UpperBound",le="ZerosLike",fe="Step",he="FromPixels",de="RotateWithOffset",pe="_FusedMatMul",me="FusedConv2D",ge="FusedDepthwiseConv2D"},26151:function(n,t,e){e.d(t,{Li:function(){return h},T3:function(){return m},bt:function(){return p},nE:function(){return d},pI:function(){return u},tr:function(){return l},uk:function(){return c},wC:function(){return f}});var r=e(22885),o=e(55938),i=e(64706);
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
const s=(0,o.R)("kernelRegistry",(()=>new Map)),a=(0,o.R)("gradRegistry",(()=>new Map));function u(n,t){const e=g(n,t);return s.get(e)}function c(n){return a.get(n)}function l(n){const t=s.entries(),e=[];for(;;){const{done:r,value:o}=t.next();if(r)break;const[i,s]=o,[a]=i.split("_");a===n&&e.push(s)}return e}function f(n){const{kernelName:t,backendName:e}=n,r=g(t,e);s.has(r)&&i.Z(`The kernel '${t}' for backend '${e}' is already registered`),s.set(r,n)}function h(n){const{kernelName:t}=n;a.has(t)&&(0,r.OB)().getBool("DEBUG")&&i.Z(`Overriding the gradient for '${t}'`),a.set(t,n)}function d(n,t){const e=g(n,t);if(!s.has(e))throw new Error(`The kernel '${n}' for backend '${t}' is not registered`);s.delete(e)}function p(n){if(!a.has(n))throw new Error(`The gradient '${n}' for backend is not registered`);a.delete(n)}function m(n,t){l(n).forEach((n=>{f(Object.assign({},n,{backendName:t}))}))}function g(n,t){return`${t}_${n}`}},64706:function(n,t,e){e.d(t,{Z:function(){return o},c:function(){return i}});var r=e(22885);
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
 */function o(...n){(0,r.OB)().getBool("IS_TEST")||(0,r.OB)().getBool("PROD")||console.warn(...n)}function i(...n){(0,r.OB)().getBool("IS_TEST")||(0,r.OB)().getBool("PROD")||console.log(...n)}},96235:function(n,t,e){e.d(t,{W:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({abs_:
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
function(n){const t=(0,i._1)(n,"x","abs");if("complex64"===t.dtype){const n={x:t};return r.BV.runKernel(o.yj2,n)}{const n={x:t};return r.BV.runKernel(o.SYM,n)}}})},56407:function(n,t,e){e.d(t,{I:function(){return a}});var r=e(97097),o=e(29121),i=e(80747),s=e(43740);const a=(0,e(2668).op)({add_:
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
function(n,t){let e=(0,s._1)(n,"a","add"),a=(0,s._1)(t,"b","add");[e,a]=(0,i.makeTypesMatch)(e,a);const u={a:e,b:a};return r.BV.runKernel(o.mm_,u)}})},83591:function(n,t,e){e.d(t,{LJ:function(){return l},Q3:function(){return c},Vh:function(){return i},YB:function(){return o},kz:function(){return s},lB:function(){return u},rv:function(){return a},sY:function(){return f}});var r=e(20569);
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
 */function o(n,t){for(let e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function i(n,t,e){const r=n.length+t.length,o=[];let i=0,s=0;for(let a=0;a<r;a++)-1===e.indexOf(a)?o.push(n[i++]):o.push(t[s++]);return o}function s(n,t){const e=[],r=n.length;for(let o=0;o<r;o++)-1===t.indexOf(o)&&e.push(n[o]);return[e,t.map((t=>n[t]))]}function a(n,t){return i(n,t.map((n=>1)),t)}function u(n,t,e){r.hu(o(t,e),(()=>`${n} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`))}function c(n,t){if(o(n,t))return null;const e=[];for(let r=0;r<t;++r)-1===n.indexOf(r)&&e.push(r);return n.forEach((n=>e.push(n))),e}function l(n){return n.map(((n,t)=>[t,n])).sort(((n,t)=>n[1]-t[1])).map((n=>n[0]))}function f(n,t){const e=[];for(let r=t-n;r<t;++r)e.push(r);return e}},72200:function(n,t,e){
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
function r(n,t){const e=n.length,r=[];for(let o=0;o<e;o++){const i=e-1-o,s=n[i]||1;(t[t.length-1-o]||1)>1&&1===s&&r.unshift(i)}return r}function o(n,t){const e=[];for(let r=0;r<t.length;r++){const o=n[n.length-r-1],i=t.length-r-1,s=t[i];(null==o||1===o&&s>1)&&e.unshift(i)}return e}function i(n,t){const e=[],r=Math.max(n.length,t.length);for(let o=0;o<r;o++){let r=n[n.length-o-1];null==r&&(r=1);let i=t[t.length-o-1];if(null==i&&(i=1),1===r)e.unshift(i);else if(1===i)e.unshift(r);else{if(r!==i){throw Error(`Operands could not be broadcast together with shapes ${n} and ${t}.`)}e.unshift(r)}}return e}e.r(t),e.d(t,{assertAndGetBroadcastShape:function(){return i},getBroadcastDims:function(){return r},getReductionAxes:function(){return o}})},72657:function(n,t,e){e.d(t,{f:function(){return i}});var r=e(4077),o=e(20569);
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
function i(n,t="float32",e){return t=t||"float32",o.Mu(n),new r.YD(n,t,e)}},62271:function(n,t,e){e.d(t,{p:function(){return a}});var r=e(97097),o=e(29121),i=e(43740),s=e(20569);const a=(0,e(2668).op)({cast_:
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
function(n,t){const e=(0,i._1)(n,"x","cast");if(!s.LP(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if("string"===t&&"string"!==e.dtype||"string"!==t&&"string"===e.dtype)throw new Error("Only strings can be casted to strings");const a={x:e},u={dtype:t};return r.BV.runKernel(o.RFZ,a,u)}})},8723:function(n,t,e){e.d(t,{d:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({clone_:
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
function(n){const t={x:(0,i._1)(n,"x","clone","string_or_numeric")};return r.BV.runKernel(o.iJz,t)}})},61661:function(n,t,e){e.d(t,{P:function(){return a}});var r=e(97097),o=e(29121),i=e(43740),s=e(20569);const a=(0,e(2668).op)({complex_:
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
function(n,t){const e=(0,i._1)(n,"real","complex"),a=(0,i._1)(t,"imag","complex");s.k5(e.shape,a.shape,`real and imag shapes, ${e.shape} and ${a.shape}, must match in call to tf.complex().`);const u={real:e,imag:a};return r.BV.runKernel(o.Zz9,u)}})},2582:function(n,t,e){e.d(t,{I0:function(){return p},Ix:function(){return a},Rf:function(){return o},U3:function(){return g},Xw:function(){return i},aO:function(){return c},jT:function(){return m},jw:function(){return u},m:function(){return y},pl:function(){return s},sl:function(){return b}});var r=e(20569);
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
 */function o(n,t,e,r,o="NHWC",i){return a(n,[...t,n[3]],e,i,r,null,null,b(o))}function i(n,t,e,r,o,i,s="channelsLast"){const[u,c]=l(t);let f;if("channelsLast"===s)f=[u,c,n[3],n[3]];else{if("channelsFirst"!==s)throw new Error(`Unknown dataFormat ${s}`);f=[u,c,n[1],n[1]]}return a(n,f,e,r,o,i,!1,s)}function s(n,t,e,r,o,i,s="NDHWC"){const[a,c,l]=f(t);let h,d;if("NDHWC"===s)d="channelsLast",h=[a,c,l,n[4],n[4]];else{if("NCDHW"!==s)throw new Error(`Unknown dataFormat ${s}`);d="channelsFirst",h=[a,c,l,n[1],n[1]]}return u(n,h,e,r,o,!1,d,i)}function a(n,t,e,r,o,i,s=!1,a="channelsLast"){let[u,f,p,m]=[-1,-1,-1,-1];if("channelsLast"===a)[u,f,p,m]=n;else{if("channelsFirst"!==a)throw new Error(`Unknown dataFormat ${a}`);[u,m,f,p]=n}const[g,b,,y]=t,[w,k]=l(e),[v,S]=l(r),_=h(g,v),E=h(b,S),{padInfo:x,outHeight:$,outWidth:B}=function(n,t,e,r,o,i,s,a,u){let l,f,h;if("number"==typeof n){l={top:n,bottom:n,left:n,right:n,type:0===n?"VALID":"NUMBER"};const o=function(n,t,e,r,o){null==r&&(r=c(n,t,e));const i=n[0],s=n[1],a=d((i-t+2*r)/e+1,o),u=d((s-t+2*r)/e+1,o);return[a,u]}([t,e],i,r,n,a);f=o[0],h=o[1]}else if("same"===n){f=Math.ceil(t/r),h=Math.ceil(e/o);const n=Math.max(0,(f-1)*r+i-t),a=Math.max(0,(h-1)*o+s-e),u=Math.floor(n/2),c=n-u,d=Math.floor(a/2);l={top:u,bottom:c,left:d,right:a-d,type:"SAME"}}else if("valid"===n)l={top:0,bottom:0,left:0,right:0,type:"VALID"},f=Math.ceil((t-i+1)/r),h=Math.ceil((e-s+1)/o);else{if("object"!=typeof n)throw Error(`Unknown padding parameter: ${n}`);{const c="channelsLast"===u?n[1][0]:n[2][0],p="channelsLast"===u?n[1][1]:n[2][1],m="channelsLast"===u?n[2][0]:n[3][0],g="channelsLast"===u?n[2][1]:n[3][1];l={top:c,bottom:p,left:m,right:g,type:0===c&&0===p&&0===m&&0===g?"VALID":"EXPLICIT"},f=d((t-i+c+p)/r+1,a),h=d((e-s+m+g)/o+1,a)}}return{padInfo:l,outHeight:f,outWidth:h}}(o,f,p,w,k,_,E,i,a),A=s?y*m:y;let I;return"channelsFirst"===a?I=[u,A,$,B]:"channelsLast"===a&&(I=[u,$,B,A]),{batchSize:u,dataFormat:a,inHeight:f,inWidth:p,inChannels:m,outHeight:$,outWidth:B,outChannels:A,padInfo:x,strideHeight:w,strideWidth:k,filterHeight:g,filterWidth:b,effectiveFilterHeight:_,effectiveFilterWidth:E,dilationHeight:v,dilationWidth:S,inShape:n,outShape:I,filterShape:t}}function u(n,t,e,r,o,i=!1,s="channelsLast",a){let[u,l,p,m,g]=[-1,-1,-1,-1,-1];if("channelsLast"===s)[u,l,p,m,g]=n;else{if("channelsFirst"!==s)throw new Error(`Unknown dataFormat ${s}`);[u,g,l,p,m]=n}const[b,y,w,,k]=t,[v,S,_]=f(e),[E,x,$]=f(r),B=h(b,E),A=h(y,x),I=h(w,$),{padInfo:T,outDepth:N,outHeight:M,outWidth:D}=function(n,t,e,r,o,i,s,a,u,l,f){let h,p,m,g;"valid"===n&&(n=0);if("number"==typeof n){h={top:n,bottom:n,left:n,right:n,front:n,back:n,type:0===n?"VALID":"NUMBER"};const b=function(n,t,e,r,o,i){null==o&&(o=c(n,t[0],r[0]));const s=[0,0,0,e];for(let e=0;e<3;e++)n[e]+2*o>=t[e]&&(s[e]=d((n[e]-t[e]+2*o)/r[e]+1,i));return s}([t,e,r,1],[a,u,l],1,[o,i,s],n,f);p=b[0],m=b[1],g=b[2]}else{if("same"!==n)throw Error(`Unknown padding parameter: ${n}`);{p=Math.ceil(t/o),m=Math.ceil(e/i),g=Math.ceil(r/s);const n=(p-1)*o+a-t,c=(m-1)*i+u-e,f=(g-1)*s+l-r,d=Math.floor(n/2),b=n-d,y=Math.floor(c/2),w=c-y,k=Math.floor(f/2);h={top:y,bottom:w,left:k,right:f-k,front:d,back:b,type:"SAME"}}}return{padInfo:h,outDepth:p,outHeight:m,outWidth:g}}(o,l,p,m,v,S,_,B,A,I,a),R=i?k*g:k;let V;return"channelsFirst"===s?V=[u,R,N,M,D]:"channelsLast"===s&&(V=[u,N,M,D,R]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:p,inWidth:m,inChannels:g,outDepth:N,outHeight:M,outWidth:D,outChannels:R,padInfo:T,strideDepth:v,strideHeight:S,strideWidth:_,filterDepth:b,filterHeight:y,filterWidth:w,effectiveFilterDepth:B,effectiveFilterHeight:A,effectiveFilterWidth:I,dilationDepth:E,dilationHeight:x,dilationWidth:$,inShape:n,outShape:V,filterShape:t}}function c(n,t,e,r=1){const o=h(t,r);return Math.floor((n[0]*(e-1)-e+o)/2)}function l(n){return"number"==typeof n?[n,n,n]:2===n.length?[n[0],n[1],1]:n}function f(n){return"number"==typeof n?[n,n,n]:n}function h(n,t){return t<=1?n:n+(n-1)*(t-1)}function d(n,t){if(!t)return Math.trunc(n);switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error(`Unknown roundingMode ${t}`)}}function p(n){const[t,e,r]=l(n);return 1===t&&1===e&&1===r}function m(n,t){return p(n)||p(t)}function g(n){return l(n).every((n=>n>0))}function b(n){if("NHWC"===n)return"channelsLast";if("NCHW"===n)return"channelsFirst";throw new Error(`Unknown dataFormat ${n}`)}function y(n,t,e){if(null!=e){if("string"==typeof t)throw Error(`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if("number"==typeof t)r.hu(r.GN(t),(()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`));else{if("object"!=typeof t)throw Error(`Error in ${n}: Unknown padding parameter: ${t}`);t.forEach((t=>{t.forEach((t=>{r.hu(r.GN(t),(()=>`Error in ${n}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`))}))}))}}}},41274:function(n,t,e){e.d(t,{h:function(){return u}});var r=e(97097),o=e(29121),i=e(80747),s=e(43740),a=e(9165);const u=(0,e(2668).op)({div_:
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
function(n,t){let e=(0,s._1)(n,"a","div"),u=(0,s._1)(t,"b","div");if([e,u]=(0,i.makeTypesMatch)(e,u),"int32"===e.dtype&&"int32"===u.dtype)return(0,a.q)(e,u);const c={a:e,b:u};return r.BV.runKernel(o.oHH,c,{})}})},83233:function(n,t,e){e.d(t,{p:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({elu_:
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
function(n){const t={x:(0,i._1)(n,"x","elu","float32")};return r.BV.runKernel(o.SX0,t)}})},14006:function(n,t,e){e.d(t,{h:function(){return s}});var r=e(97097),o=e(29121),i=e(20569);
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
function s(n,t,e){(0,i.Mu)(n);const s={shape:n,value:t,dtype:e};return r.BV.runKernel(o.deh,{},s)}},9165:function(n,t,e){e.d(t,{q:function(){return a}});var r=e(97097),o=e(29121),i=e(80747),s=e(43740);const a=(0,e(2668).op)({floorDiv_:
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
function(n,t){let e=(0,s._1)(n,"a","floorDiv"),a=(0,s._1)(t,"b","floorDiv");[e,a]=(0,i.makeTypesMatch)(e,a);const u={a:e,b:a};return r.BV.runKernel(o.jeX,u)}})},19323:function(n,t,e){e.d(t,{Fr:function(){return p},QH:function(){return g},pf:function(){return m},uy:function(){return b}});var r=e(72200),o=e(83233),i=e(99133),s=e(24841),a=e(98151),u=e(7409),c=e(83582),l=e(4968),f=e(30625),h=e(71901),d=e(15475);
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
function p(n,t,e){if(null==e||"linear"===e)return n;if("relu"===e)return(0,s.d)(n,(0,h.N)(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function m(n,t){let e=t;const o=r.getReductionAxes(n.shape,t.shape);return o.length>0&&(e=(0,d.S)(e,o)),(0,l.X)(e,n.shape)}function g(n,t,e,r){if("linear"===t)return n;if("relu"===t)return(0,u.U)(n);if("elu"===t)return(0,o.p)(n);if("relu6"===t)return(0,c.b)(n);if("prelu"===t)return(0,a.A)(n,e);if("leakyrelu"===t)return(0,i.h)(n,r);if("sigmoid"===t)return(0,f.X)(n);throw new Error(`Unknown fused activation ${t}.`)}const b=(n,t)=>!(n>0)||"linear"===t},64386:function(n,t,e){e.d(t,{a:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({imag_:
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
function(n){const t={input:(0,i._1)(n,"input","imag")};return r.BV.runKernel(o.J_u,t)}})},99133:function(n,t,e){e.d(t,{h:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({leakyRelu_:
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
function(n,t=.2){const e={x:(0,i._1)(n,"x","leakyRelu")},s={alpha:t};return r.BV.runKernel(o.J$2,e,s)}})},49876:function(n,t,e){
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
var r;e.d(t,{I:function(){return r}}),function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"}(r||(r={}))},28687:function(n,t,e){e.d(t,{O:function(){return a}});var r=e(97097),o=e(29121),i=e(80747),s=e(43740);const a=(0,e(2668).op)({matMul_:
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
function(n,t,e=!1,a=!1){let u=(0,s._1)(n,"a","matMul"),c=(0,s._1)(t,"b","matMul");[u,c]=(0,i.makeTypesMatch)(u,c);const l={a:u,b:c},f={transposeA:e,transposeB:a};return r.BV.runKernel(o.XLW,l,f)}})},80632:function(n,t,e){e.d(t,{g:function(){return c}});var r=e(97097),o=e(29121),i=e(80747),s=e(43740),a=e(72200),u=e(62271);const c=(0,e(2668).op)({maximum_:
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
function(n,t){let e=(0,s._1)(n,"a","maximum"),c=(0,s._1)(t,"b","maximum");[e,c]=(0,i.makeTypesMatch)(e,c),"bool"===e.dtype&&(e=(0,u.p)(e,"int32"),c=(0,u.p)(c,"int32")),(0,a.assertAndGetBroadcastShape)(e.shape,c.shape);const l={a:e,b:c};return r.BV.runKernel(o.BMI,l)}})},24841:function(n,t,e){e.d(t,{d:function(){return a}});var r=e(97097),o=e(29121),i=e(80747),s=e(43740);const a=(0,e(2668).op)({mul_:
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
function(n,t){let e=(0,s._1)(n,"a","mul"),a=(0,s._1)(t,"b","mul");[e,a]=(0,i.makeTypesMatch)(e,a);const u={a:e,b:a};return r.BV.runKernel(o.wYn,u)}})},17370:function(n,t,e){e.d(t,{W:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({neg_:
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
function(n){const t={x:(0,i._1)(n,"x","neg")};return r.BV.runKernel(o.kuV,t)}})},76708:function(n,t,e){e.d(t,{l:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({oneHot_:
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
function(n,t,e=1,s=0,a="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const u={indices:(0,i._1)(n,"indices","oneHot","int32")},c={dtype:a,depth:t,onValue:e,offValue:s};return r.BV.runKernel(o.we_,u,c)}})},2668:function(n,t,e){e.d(t,{op:function(){return s},z:function(){return i}});var r=e(97097),o=e(20569);
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
const i="__op";function s(n){const t=Object.keys(n);if(1!==t.length)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0];const s=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e+=i;const a=(...n)=>{r.BV.startScope(e);try{const t=s(...n);return(0,o.tI)(t)&&console.error("Cannot return a Promise inside of tidy."),r.BV.endScope(t),t}catch(n){throw r.BV.endScope(null),n}};return Object.defineProperty(a,"name",{value:e,configurable:!0}),a}},4041:function(n,t,e){e.d(t,{zvA:function(){return u.z},WnP:function(){return o.W},Khb:function(){return c},__u:function(){return l},IHx:function(){return f.I},QBD:function(){return d},$6P:function(){return p},YjB:function(){return m},NqF:function(){return g},vHJ:function(){return b},ZRM:function(){return y},VfV:function(){return w},z4N:function(){return k},fvJ:function(){return S},C80:function(){return _},wS1:function(){return B},uR5:function(){return A},zEQ:function(){return C},tgs:function(){return O},Dxk:function(){return P},JY5:function(){return L},p3b:function(){return z},E4h:function(){return F},yE8:function(){return W},anm:function(){return rr},XsQ:function(){return G},UFq:function(){return U},f3b:function(){return q.f},pju:function(){return E.p},mDi:function(){return K},iUl:function(){return X},d9v:function(){return I.d},PYB:function(){return j.P},zoF:function(){return T},gME:function(){return Z},Izb:function(){return Q},MNy:function(){return Y},ZaL:function(){return J},PAt:function(){return tn},Tek:function(){return nn},bc:function(){return rn},pdZ:function(){return on},$QV:function(){return an},mCk:function(){return un},f9Y:function(){return cn},mew:function(){return hr},$Gn:function(){return ln},zbp:function(){return fn},ppE:function(){return hn},nTT:function(){return dn},B10:function(){return pn},Ka3:function(){return mn},WmZ:function(){return gn},hiC:function(){return bn.h},NTj:function(){return Sn},AKD:function(){return _n},rvX:function(){return lr},WYO:function(){return En},pyx:function(){return xn.p},GRh:function(){return fr},DgJ:function(){return wn},qNN:function(){return $n},d2q:function(){return Fn},Qqt:function(){return On},dt4:function(){return Pn},t$B:function(){return Ln},iyy:function(){return Wn},kp_:function(){return Ie},hlL:function(){return H.h},GWj:function(){return Gn},qPi:function(){return Un.q},imm:function(){return r},Iqj:function(){return qn},dbB:function(){return cr},pjt:function(){return Kn},brS:function(){return Hn},Sxn:function(){return Te},asL:function(){return Xn.a},BHj:function(){return oo},V3u:function(){return dr},wx0:function(){return Ne},xVT:function(){return jn},UWc:function(){return Zn},i2d:function(){return Qn},hi7:function(){return Yn.h},d9m:function(){return Jn},zN1:function(){return nt},$r2:function(){return io},SX3:function(){return tt},G9k:function(){return et},cM7:function(){return rt},Krr:function(){return ot},e_t:function(){return ut},CmS:function(){return lt},l_t:function(){return ft},HvI:function(){return ht},hJK:function(){return dt},K5V:function(){return pt},egP:function(){return mt},MB5:function(){return so},eab:function(){return yt},OI3:function(){return N.O},Fp7:function(){return An},_sB:function(){return wt},YQQ:function(){return kt},Ip$:function(){return vt},gWQ:function(){return St.g},J69:function(){return _t},ry_:function(){return Bt},VV$:function(){return In},LTh:function(){return At},VdP:function(){return It},wQq:function(){return Tt},Gi7:function(){return Nt},p_:function(){return ir},dC7:function(){return M.d},rq4:function(){return Mt},SJ_:function(){return Dt},W76:function(){return st.W},KOy:function(){return Cn},Quu:function(){return Rt},lfX:function(){return Vt.l},iUs:function(){return xt},JpU:function(){return Ct},op:function(){return u.op},N2O:function(){return Ft},vku:function(){return Ot},pNR:function(){return Pt},koy:function(){return Lt},t1L:function(){return zt},lGY:function(){return Wt},d_R:function(){return Ut},sQ3:function(){return Tn.s},AL3:function(){return qt.A},S0v:function(){return Kt.S},WVs:function(){return Ht},$gW:function(){return Xt},VT$:function(){return jt},N89:function(){return Zt},TN_:function(){return Qt},wzB:function(){return ee},nGf:function(){return re},ruB:function(){return oe},LGj:function(){return ie},w6H:function(){return se},kwC:function(){return ae.k},M25:function(){return ue},UYe:function(){return ce.U},btT:function(){return le.b},XLQ:function(){return $.X},GYS:function(){return fe},SDf:function(){return he},diP:function(){return de},sx7:function(){return pe},mG2:function(){return me},QEs:function(){return De},NMM:function(){return ge},bp0:function(){return be},iD$:function(){return Nn.i},snQ:function(){return ar},zcT:function(){return bt},U8D:function(){return ye},U_I:function(){return we},ODp:function(){return ke},XD2:function(){return D.X},Xxe:function(){return ve},tdS:function(){return ro},O$l:function(){return Se},R_K:function(){return _e},tPi:function(){return R},jZU:function(){return Ee},SmN:function(){return xe},CnO:function(){return $e},p0P:function(){return Be},XAC:function(){return Ae},Wvh:function(){return at},fBT:function(){return Gt},rVs:function(){return ao},ers:function(){return ur},uN7:function(){return eo},Vl2:function(){return Me},_b3:function(){return Mn._},h62:function(){return Dn.h},$i:function(){return Re},L9e:function(){return Ve},knu:function(){return Ce},Nbs:function(){return Fe.N},NXj:function(){return Oe},Z_8:function(){return uo},luU:function(){return ct.l},Smz:function(){return Rn.S},ORZ:function(){return Pe},AEp:function(){return V},XeE:function(){return Le.X},RRF:function(){return We},odF:function(){return Ge},wOQ:function(){return Ue.w},yXz:function(){return qe},Bfx:function(){return Ke},xZs:function(){return He},Gg6:function(){return zn},hg7:function(){return Xe},p4s:function(){return or.p},Xu6:function(){return je},Two:function(){return Ze},pUJ:function(){return Qe},HHK:function(){return Ye},GaM:function(){return Je},VD$:function(){return nr},arb:function(){return kn},itS:function(){return er},lls:function(){return Et},P84:function(){return vn.P}});var r={};e.r(r),e.d(r,{conv2d:function(){return gr},depthwiseConv2d:function(){return wr},matMul:function(){return kr}});var o=e(96235),i=e(97097),s=e(29121),a=e(43740),u=e(2668);const c=(0,u.op)({acos_:
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
function(n){const t={x:(0,a._1)(n,"x","acos")};return i.BV.runKernel(s.VGw,t)}});const l=(0,u.op)({acosh_:
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
function(n){const t={x:(0,a._1)(n,"x","acosh")};return i.BV.runKernel(s.SpW,t)}});var f=e(56407),h=e(20569);const d=(0,u.op)({addN_:
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
function(n){h.hu(Array.isArray(n),(()=>"The argument passed to tf.addN() must be a list of tensors")),h.hu(n.length>=1,(()=>`Must pass at least one tensor to tf.addN(), but got ${n.length}`));const t=n.map(((n,t)=>(0,a._1)(n,`tensors${t}`,"addN"))),e=t[0];t.forEach((n=>{if(n.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")})),t.forEach((n=>{if(!h.cO(n.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")}));const r=t;return i.BV.runKernel(s.Xze,r)}});const p=(0,u.op)({all_:
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
function(n,t=null,e=!1){const r={x:(0,a._1)(n,"x","all","bool")},o={axis:t,keepDims:e};return i.BV.runKernel(s.oT6,r,o)}});const m=(0,u.op)({any_:
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
function(n,t=null,e=!1){const r={x:(0,a._1)(n,"x","any","bool")},o={axis:t,keepDims:e};return i.BV.runKernel(s.IKK,r,o)}});const g=(0,u.op)({argMax_:
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
function(n,t=0){const e={x:(0,a._1)(n,"x","argMax")},r={axis:t};return i.BV.runKernel(s.sJF,e,r)}});const b=(0,u.op)({argMin_:
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
function(n,t=0){const e={x:(0,a._1)(n,"x","argMin")},r={axis:t};return i.BV.runKernel(s.aJk,e,r)}});const y=(0,u.op)({asin_:
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
function(n){const t={x:(0,a._1)(n,"x","asin")};return i.BV.runKernel(s.M2y,t)}});const w=(0,u.op)({asinh_:
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
function(n){const t={x:(0,a._1)(n,"x","asinh")};return i.BV.runKernel(s.qw7,t)}});const k=(0,u.op)({atan_:
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
function(n){const t={x:(0,a._1)(n,"x","atan")};return i.BV.runKernel(s.jMg,t)}});var v=e(80747);const S=(0,u.op)({atan2_:
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
function(n,t){let e=(0,a._1)(n,"a","atan2"),r=(0,a._1)(t,"b","atan2");[e,r]=(0,v.makeTypesMatch)(e,r);const o={a:e,b:r};return i.BV.runKernel(s.QCc,o)}});const _=(0,u.op)({atanh_:
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
function(n){const t={x:(0,a._1)(n,"x","atanh")};return i.BV.runKernel(s.Oyi,t)}});var E=e(62271),x=e(2582),$=e(4968);const B=(0,u.op)({avgPool_:
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
function(n,t,e,r,o){const u=(0,a._1)(n,"x","avgPool","float32");h.hu(x.jT(e,1),(()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '1'`));let c=u,l=!1;3===u.rank&&(l=!0,c=(0,$.X)(u,[1,u.shape[0],u.shape[1],u.shape[2]])),h.hu(4===c.rank,(()=>`Error in avgPool: x must be rank 4 but got rank ${c.rank}.`)),x.m("avgPool",r,o);const f={x:c},d={filterSize:t,strides:e,pad:r,dimRoundingMode:o};let p=i.BV.runKernel(s.JhU,f,d);return p=(0,E.p)(p,u.dtype),l?(0,$.X)(p,[p.shape[1],p.shape[2],p.shape[3]]):p}});const A=(0,u.op)({avgPool3d_:
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
function(n,t,e,r,o,u="NDHWC"){const c=(0,a._1)(n,"x","avgPool3d","float32");let l=c,f=!1;4===c.rank&&(f=!0,l=(0,$.X)(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),h.hu(5===l.rank,(()=>`Error in avgPool3d: x must be rank 5 but got rank ${l.rank}.`)),h.hu("NDHWC"===u,(()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${u}`)),h.hu("number"==typeof e&&e>0||Array.isArray(e)&&e[0]>0&&e[1]>0&&e[2]>0,(()=>`Error in avgPool3d: Stride must be > 0, but got '${e}'`)),(0,x.m)("avgPool3d",r,o);const d={x:l},p={filterSize:t,strides:e,pad:r,dimRoundingMode:o,dataFormat:u};let m=i.BV.runKernel(s._k9,d,p);return m=(0,E.p)(m,l.dtype),f?(0,$.X)(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}});var I=e(8723);const T=(0,u.op)({concat_:
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
function(n,t=0){(0,h.hu)(n.length>=1,(()=>"Pass at least one tensor to concat"));const e=(0,a.sI)(n,"tensors","concat","string_or_numeric");if("complex64"===e[0].dtype&&e.forEach((n=>{if("complex64"!==n.dtype)throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${n.dtype}. `)})),1===e.length)return(0,I.d)(e[0]);const r=e,o={axis:t};return i.BV.runKernel(s.Eh3,r,o)}});var N=e(28687),M=e(24841),D=e(30625);const R=(0,u.op)({slice_:
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
function(n,t,e){const r=(0,a._1)(n,"x","slice","string_or_numeric");if(0===r.rank)throw new Error("Slicing scalar is not possible");const o={x:r},u={begin:t,size:e};return i.BV.runKernel(s.p2w,o,u)}});const V=(0,u.op)({tanh_:
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
function(n){const t={x:(0,a._1)(n,"x","tanh","float32")};return i.BV.runKernel(s.MIZ,t)}});const C=(0,u.op)({basicLSTMCell_:
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
function(n,t,e,r,o,i){const s=(0,a._1)(n,"forgetBias","basicLSTMCell"),u=(0,a._1)(t,"lstmKernel","basicLSTMCell"),c=(0,a._1)(e,"lstmBias","basicLSTMCell"),l=(0,a._1)(r,"data","basicLSTMCell"),h=(0,a._1)(o,"c","basicLSTMCell"),d=(0,a._1)(i,"h","basicLSTMCell"),p=T([l,d],1),m=(0,N.O)(p,u),g=(0,f.I)(m,c),b=g.shape[0],y=g.shape[1]/4,w=[b,y],k=R(g,[0,0],w),v=R(g,[0,y],w),S=R(g,[0,2*y],w),_=R(g,[0,3*y],w),E=(0,f.I)((0,M.d)((0,D.X)(k),V(v)),(0,M.d)(h,(0,D.X)((0,f.I)(s,S))));return[E,(0,M.d)(V(E),(0,D.X)(_))]}});const F=(0,u.op)({batchToSpaceND_:
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
function(n,t,e){const r=(0,a._1)(n,"x","batchToSpaceND"),o=t.reduce(((n,t)=>n*t));h.hu(r.rank>=1+t.length,(()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`)),h.hu(e.length===t.length,(()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`)),h.hu(r.shape[0]%o==0,(()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${o}`));const u={x:r},c={blockShape:t,crops:e};return i.BV.runKernel(s.zws,u,c)}});const O=(0,u.op)({batchNorm_:
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
function(n,t,e,r,o,u){null==u&&(u=.001);const c=(0,a._1)(n,"x","batchNorm"),l=(0,a._1)(t,"mean","batchNorm"),f=(0,a._1)(e,"variance","batchNorm");let d,p;null!=o&&(d=(0,a._1)(o,"scale","batchNorm")),null!=r&&(p=(0,a._1)(r,"offset","batchNorm")),h.hu(l.rank===f.rank,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),h.hu(null==p||l.rank===p.rank,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),h.hu(null==d||l.rank===d.rank,(()=>"Batch normalization gradient requires mean and scale to have equal ranks."));const m=function(n){let t;return t=0===n.rank||1===n.rank?(0,$.X)(n,[1,1,1,n.size]):2===n.rank?(0,$.X)(n,[1,1,n.shape[0],n.shape[1]]):3===n.rank?(0,$.X)(n,[1,n.shape[0],n.shape[1],n.shape[2]]):n,t}(c),g={x:m,scale:d,offset:p,mean:l,variance:f},b={varianceEpsilon:u},y=i.BV.runKernel(s.sHE,g,b);return(0,$.X)(y,c.shape)}});const P=(0,u.op)({batchNorm2d_:function(n,t,e,r,o,i){const s=(0,a._1)(n,"x","batchNorm"),u=(0,a._1)(t,"mean","batchNorm"),c=(0,a._1)(e,"variance","batchNorm");let l,f;return null!=o&&(l=(0,a._1)(o,"scale","batchNorm")),null!=r&&(f=(0,a._1)(r,"offset","batchNorm")),h.hu(2===s.rank,(()=>`Error in batchNorm2D: x must be rank 2 but got rank ${s.rank}.`)),h.hu(2===u.rank||1===u.rank,(()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${u.rank}.`)),h.hu(2===c.rank||1===c.rank,(()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`)),null!=l&&h.hu(2===l.rank||1===l.rank,(()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`)),null!=f&&h.hu(2===f.rank||1===f.rank,(()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${f.rank}.`)),O(s,u,c,f,l,i)}});const L=(0,u.op)({batchNorm3d_:function(n,t,e,r,o,i){const s=(0,a._1)(n,"x","batchNorm"),u=(0,a._1)(t,"mean","batchNorm"),c=(0,a._1)(e,"variance","batchNorm");let l,f;return null!=o&&(l=(0,a._1)(o,"scale","batchNorm")),null!=r&&(f=(0,a._1)(r,"offset","batchNorm")),h.hu(3===s.rank,(()=>`Error in batchNorm3D: x must be rank 3 but got rank ${s.rank}.`)),h.hu(3===u.rank||1===u.rank,(()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${u.rank}.`)),h.hu(3===c.rank||1===c.rank,(()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`)),null!=l&&h.hu(3===l.rank||1===l.rank,(()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`)),null!=f&&h.hu(3===f.rank||1===f.rank,(()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${f.rank}.`)),O(s,u,c,f,l,i)}});const z=(0,u.op)({batchNorm4d_:function(n,t,e,r,o,i){const s=(0,a._1)(n,"x","batchNorm"),u=(0,a._1)(t,"mean","batchNorm"),c=(0,a._1)(e,"variance","batchNorm");let l,f;return null!=o&&(l=(0,a._1)(o,"scale","batchNorm")),null!=r&&(f=(0,a._1)(r,"offset","batchNorm")),h.hu(4===s.rank,(()=>`Error in batchNorm4D: x must be rank 4 but got rank ${s.rank}.`)),h.hu(4===u.rank||1===u.rank,(()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${u.rank}.`)),h.hu(4===c.rank||1===c.rank,(()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`)),null!=l&&h.hu(4===l.rank||1===l.rank,(()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`)),null!=f&&h.hu(4===f.rank||1===f.rank,(()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${f.rank}.`)),O(s,u,c,f,l,i)}});const W=(0,u.op)({bincount_:
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
function(n,t,e){const r=(0,a._1)(n,"x","bincount"),o=(0,a._1)(t,"weights","bincount");h.hu("int32"===r.dtype,(()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`)),h.hu(e>=0,(()=>`size must be non-negative, but got ${e}.`)),h.hu(o.size===r.size||0===o.size,(()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${o.shape}.`));const u={x:r,weights:o},c={size:e};return i.BV.runKernel(s.zvY,u,c)}});const G=(0,u.op)({broadcastArgs_:
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
function(n,t){const e=(0,a._1)(n,"s0","broadcastArgs","int32"),r=(0,a._1)(t,"s1","broadcastArgs","int32");if(1!==e.rank)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${e.rank}`);if(1!==r.rank)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const o={s0:e,s1:r};return i.BV.runKernel(s.eEB,o)}});const U=(0,u.op)({broadcastTo_:
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
function(n,t){let e=(0,a._1)(n,"broadcastTo","x");const r=e.shape;if((0,h.Mu)(t),t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){const n=e.shape.slice();for(;n.length<t.length;)n.unshift(1);e=(0,$.X)(e,n)}const o=e.shape,u=Array.from(t);for(let n=t.length-1;n>=0;n--)if(o[n]===t[n])u[n]=1;else if(1!==e.shape[n])throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(0===u.map(((n,t)=>n>1?t:-1)).filter((n=>n>=0)).length)return(0,I.d)(e);const c={x:e},l={reps:u};return i.BV.runKernel(s.n9L,c,l)}});var q=e(72657);const K=(0,u.op)({ceil_:
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
function(n){const t={x:(0,a._1)(n,"x","ceil","float32")};return i.BV.runKernel(s.gJX,t)}});var H=e(14006);const X=(0,u.op)({clipByValue_:
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
function(n,t,e){const r=(0,a._1)(n,"x","clipByValue");if(h.hu(t<=e,(()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`)),t===e)return(0,H.h)(r.shape,t,r.dtype);const o={x:r},u={clipValueMin:t,clipValueMax:e};return i.BV.runKernel(s.xnO,o,u)}});var j=e(61661);const Z=(0,u.op)({concat1d_:function(n){return T(n,0)}});const Q=(0,u.op)({concat2d_:function(n,t){return T(n,t)}});const Y=(0,u.op)({concat3d_:function(n,t){return T(n,t)}});const J=(0,u.op)({concat4d_:function(n,t){return T(n,t)}});const nn=(0,u.op)({conv2d_:
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
function(n,t,e,r,o="NHWC",u=[1,1],c){const l=(0,a._1)(n,"x","conv2d","float32"),f=(0,a._1)(t,"filter","conv2d","float32");let d=l,p=!1;3===l.rank&&(p=!0,d=(0,$.X)(l,[1,l.shape[0],l.shape[1],l.shape[2]])),h.hu(4===d.rank,(()=>`Error in conv2d: input must be rank 4, but got rank ${d.rank}.`)),h.hu(4===f.rank,(()=>`Error in conv2d: filter must be rank 4, but got rank ${f.rank}.`)),x.m("conv2d",r,c);const m="NHWC"===o?d.shape[3]:d.shape[1];h.hu(m===f.shape[2],(()=>`Error in conv2d: depth of input (${m}) must match input depth for filter ${f.shape[2]}.`)),h.hu(x.jT(e,u),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${u}'`)),h.hu(x.U3(u),(()=>"Error in conv2D: Dilated rates should be larger than 0.")),h.hu(x.U3(e),(()=>"Error in conv2D: Strides should be larger than 0."));const g={x:d,filter:f},b={strides:e,pad:r,dataFormat:o,dilations:u,dimRoundingMode:c},y=i.BV.runKernel(s.mhS,g,b);return p?(0,$.X)(y,[y.shape[1],y.shape[2],y.shape[3]]):y}});const tn=(0,u.op)({conv1d_:function(n,t,e,r,o="NWC",i=1,s){const u=(0,a._1)(n,"x","conv1d"),c=(0,a._1)(t,"filter","conv1d");let l=u,f=!1;2===u.rank&&(f=!0,l=(0,$.X)(u,[1,u.shape[0],u.shape[1]])),h.hu(3===l.rank,(()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`)),h.hu(3===c.rank,(()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`)),x.m("conv1d",r,s),h.hu(l.shape[2]===c.shape[1],(()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`)),h.hu(x.jT(e,i),(()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${i}'`)),h.hu(x.U3(i),(()=>"Error in conv1D: Dilated rates should be larger than 0.")),h.hu(x.U3(e),(()=>"Error in conv1D: Stride should be larger than 0.")),h.hu("NWC"===o,(()=>`Error in conv1d: got dataFormat of ${o} but only NWC is currently supported.`));const d=(0,$.X)(c,[1,c.shape[0],c.shape[1],c.shape[2]]),p=(0,$.X)(l,[l.shape[0],1,l.shape[1],l.shape[2]]),m=nn(p,d,[1,e],r,"NHWC",[1,i],s);return f?(0,$.X)(m,[m.shape[2],m.shape[3]]):(0,$.X)(m,[m.shape[0],m.shape[2],m.shape[3]])}});const en=(0,u.op)({conv2DBackpropInput_:
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
function(n,t,e,r,o,a="NHWC",u){h.hu(n.length===t.rank,(()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`));let c=n,l=t,f=!1;3===t.rank&&(f=!0,l=(0,$.X)(t,[1,t.shape[0],t.shape[1],t.shape[2]]),c=[1,n[0],n[1],n[2]]),h.hu(4===c.length,(()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${c.length}.`)),h.hu(4===l.rank,(()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`)),h.hu(4===e.rank,(()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`));const d="NHWC"===a?c[3]:c[1],p="NHWC"===a?l.shape[3]:l.shape[1];h.hu(d===e.shape[2],(()=>`Error in conv2dDerInput: depth of input (${d}) must match input depth for filter ${e.shape[2]}.`)),h.hu(p===e.shape[3],(()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${e.shape[3]}.`)),x.m("conv2dDerInput",o,u);const m={dy:l,filter:e},g={strides:r,pad:o,dataFormat:a,dimRoundingMode:u,inputShape:c},b=i.BV.runKernel(s.wm,m,g);return f?(0,$.X)(b,[b.shape[1],b.shape[2],b.shape[3]]):b}});const rn=(0,u.op)({conv2dTranspose_:function(n,t,e,r,o,i){const s=(0,a._1)(n,"x","conv2dTranspose"),u=(0,a._1)(t,"filter","conv2dTranspose");return en(e,s,u,r,o,"NHWC",i)}});const on=(0,u.op)({conv3d_:
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
function(n,t,e,r,o="NDHWC",u=[1,1,1]){const c=(0,a._1)(n,"x","conv3d"),l=(0,a._1)(t,"filter","conv3d");let f=c,d=!1;4===c.rank&&(d=!0,f=(0,$.X)(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),h.hu(5===f.rank,(()=>`Error in conv3d: input must be rank 5, but got rank ${f.rank}.`)),h.hu(5===l.rank,(()=>`Error in conv3d: filter must be rank 5, but got rank ${l.rank}.`)),h.hu(f.shape[4]===l.shape[3],(()=>`Error in conv3d: depth of input (${f.shape[4]}) must match input depth for filter ${l.shape[3]}.`)),h.hu((0,x.jT)(e,u),(()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${u}'`)),h.hu("NDHWC"===o,(()=>`Error in conv3d: got dataFormat of ${o} but only NDHWC is currently supported.`)),h.hu((0,x.U3)(u),(()=>"Error in conv3D: Dilated rates should be larger than 0.")),h.hu((0,x.U3)(e),(()=>"Error in conv3D: Strides should be larger than 0."));const p={x:f,filter:l},m={strides:e,pad:r,dataFormat:o,dilations:u},g=i.BV.runKernel(s.x12,p,m);return d?(0,$.X)(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}});const sn=(0,u.op)({conv3DBackpropInput_:
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
function(n,t,e,r,o){h.hu(n.length===t.rank,(()=>`Length of inShape (${n.length}) and rank of dy (${t.rank}) must match`));let a=n,u=t,c=!1;4===t.rank&&(c=!0,u=(0,$.X)(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),a=[1,n[0],n[1],n[2],n[3]]);const l=a[4],f=u.shape[4];h.hu(5===a.length,(()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`)),h.hu(5===u.rank,(()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${u.rank}`)),h.hu(5===e.rank,(()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`)),h.hu(l===e.shape[3],(()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${e.shape[3]}.`)),h.hu(f===e.shape[4],(()=>`Error in conv3dDerInput: depth of output (${f}) must match output depth for filter ${e.shape[4]}.`));const d={dy:u,filter:e},p={pad:o,strides:r,inputShape:a},m=i.BV.runKernel(s.ik2,d,p);return c?(0,$.X)(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}});const an=(0,u.op)({conv3dTranspose_:function(n,t,e,r,o){const i=(0,a._1)(n,"x","conv3dTranspose"),s=(0,a._1)(t,"filter","conv3dTranspose");return sn(e,i,s,r,o)}});const un=(0,u.op)({cos_:
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
function(n){const t={x:(0,a._1)(n,"x","cos","float32")};return i.BV.runKernel(s.mc4,t)}});const cn=(0,u.op)({cosh_:
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
function(n){const t={x:(0,a._1)(n,"x","cosh","float32")};return i.BV.runKernel(s.TR1,t)}});const ln=(0,u.op)({cumprod_:
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
function(n,t=0,e=!1,r=!1){const o={x:(0,a._1)(n,"x","cumprod")},u={axis:t,exclusive:e,reverse:r};return i.BV.runKernel(s.Byc,o,u)}});const fn=(0,u.op)({cumsum_:
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
function(n,t=0,e=!1,r=!1){const o={x:(0,a._1)(n,"x","cumsum")},u={axis:t,exclusive:e,reverse:r};return i.BV.runKernel(s.iHb,o,u)}});const hn=(0,u.op)({denseBincount_:
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
function(n,t,e,r=!1){const o=(0,a._1)(n,"x","denseBincount"),u=(0,a._1)(t,"weights","denseBincount");h.hu("int32"===o.dtype,(()=>`Error in denseBincount: input dtype must be int32, but got ${o.dtype}`)),h.hu(o.rank<=2,(()=>`Error in denseBincount: input must be at most rank 2, but got rank ${o.rank}.`)),h.hu(e>=0,(()=>`size must be non-negative, but got ${e}.`)),h.hu(u.size===o.size||0===u.size,(()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${o.shape}, weights shape: ${u.shape}.`));const c={x:o,weights:u},l={size:e,binaryOutput:r};return i.BV.runKernel(s.QRR,c,l)}});const dn=(0,u.op)({depthToSpace_:
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
function(n,t,e="NHWC"){const r=(0,a._1)(n,"x","depthToSpace","float32"),o="NHWC"===e?r.shape[1]:r.shape[2],u="NHWC"===e?r.shape[2]:r.shape[3],c="NHWC"===e?r.shape[3]:r.shape[1];h.hu(t>1,(()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`)),h.hu(o*t>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${o} and ${t}  for depthToSpace with input shape\n    ${r.shape}`)),h.hu(u*t>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${u} and ${t} for depthToSpace with input shape\n        ${r.shape}`)),h.hu(c%(t*t)==0,(()=>`Dimension size must be evenly divisible by ${t*t} but is ${c} for depthToSpace with input shape ${r.shape}`));const l={x:r},f={blockSize:t,dataFormat:e};return i.BV.runKernel(s.T0n,l,f)}});const pn=(0,u.op)({depthwiseConv2d_:
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
function(n,t,e,r,o="NHWC",u=[1,1],c){const l=(0,a._1)(n,"x","depthwiseConv2d","float32"),f=(0,a._1)(t,"filter","depthwiseConv2d","float32");let d=l,p=!1;3===l.rank&&(p=!0,d=(0,$.X)(l,[1,l.shape[0],l.shape[1],l.shape[2]])),h.hu(4===d.rank,(()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${d.rank}.`)),h.hu(4===f.rank,(()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${f.rank}.`));const m="NHWC"===o?d.shape[3]:d.shape[1];h.hu(m===f.shape[2],(()=>`Error in depthwiseConv2d: number of input channels (${m}) must match the inChannels dimension in filter ${f.shape[2]}.`)),x.m("depthwiseConv2d",r,c);const g={x:d,filter:f},b={strides:e,pad:r,dataFormat:o,dilations:u,dimRoundingMode:c},y=i.BV.runKernel(s.cie,g,b);return p?(0,$.X)(y,[y.shape[1],y.shape[2],y.shape[3]]):y}});const mn=(0,u.op)({diag_:
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
function(n){const t={x:(0,a._1)(n,"x","diag")};return i.BV.runKernel(s.$w,t)}});const gn=(0,u.op)({dilation2d_:
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
function(n,t,e,r,o=[1,1],u="NHWC"){const c=(0,a._1)(n,"x","dilation2d"),l=(0,a._1)(t,"filter","dilation2d");h.hu(3===c.rank||4===c.rank,(()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${c.rank}.`)),h.hu(3===l.rank,(()=>`Error in dilation2d: filter must be rank 3, but got rank ${l.rank}.`)),h.hu("NHWC"===u,(()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${u}`));let f=c,d=!1;3===c.rank&&(f=(0,$.X)(c,[1,c.shape[0],c.shape[1],c.shape[2]]),d=!0),h.hu(f.shape[3]===l.shape[2],(()=>`Error in dilation2d:  input and filter must have the same depth: ${f.shape[3]} vs ${l.shape[2]}`));const p={x:f,filter:l},m={strides:e,pad:r,dilations:o},g=i.BV.runKernel(s.p4S,p,m);return d?(0,$.X)(g,[g.shape[1],g.shape[2],g.shape[3]]):g}});var bn=e(41274),yn=e(72200);const wn=(0,u.op)({equal_:
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
function(n,t){let e=(0,a._1)(n,"a","equal","string_or_numeric"),r=(0,a._1)(t,"b","equal","string_or_numeric");[e,r]=(0,v.makeTypesMatch)(e,r),(0,yn.assertAndGetBroadcastShape)(e.shape,r.shape);const o={a:e,b:r};return i.BV.runKernel(s.hdR,o)}});const kn=(0,u.op)({where_:
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
function(n,t,e){const r=(0,a._1)(t,"a","where"),o=(0,a._1)(e,"b","where"),u=(0,a._1)(n,"condition","where","bool"),c=(0,yn.assertAndGetBroadcastShape)((0,yn.assertAndGetBroadcastShape)(u.shape,r.shape),o.shape),l={condition:U(u,c),t:U(r,c),e:U(o,c)};return i.BV.runKernel(s.PhF,l)}});var vn=e(6577);const Sn=(0,u.op)({divNoNan_:
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
function(n,t){let e=(0,a._1)(n,"a","div"),r=(0,a._1)(t,"b","div");[e,r]=(0,v.makeTypesMatch)(e,r);const o=(0,bn.h)(e,r),i=(0,vn.P)(o),s=wn(r,i);return kn(s,i,o)}});const _n=(0,u.op)({dot_:
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
function(n,t){const e=(0,a._1)(n,"t1","dot"),r=(0,a._1)(t,"t2","dot");h.hu(!(1!==e.rank&&2!==e.rank||1!==r.rank&&2!==r.rank),(()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${r.rank}.`));const o=1===e.rank?e.size:e.shape[1],i=1===r.rank?r.size:r.shape[0];if(h.hu(o===i,(()=>`Error in dot: inner dimensions of inputs must match, but got ${o} and ${i}.`)),1===e.rank&&1===r.rank){const n=(0,$.X)(e,[1,-1]),t=(0,$.X)(r,[-1,1]),o=(0,N.O)(n,t);return(0,$.X)(o,[])}if(1===e.rank&&2===r.rank){const n=(0,$.X)(e,[1,-1]),t=(0,$.X)(r,[r.shape[0],r.shape[1]]),o=(0,N.O)(n,t);return(0,$.X)(o,[o.size])}if(2===e.rank&&1===r.rank){const n=(0,$.X)(r,[-1,1]),t=(0,N.O)(e,n);return(0,$.X)(t,[t.size])}{const n=(0,$.X)(r,[r.shape[0],r.shape[1]]);return(0,N.O)(e,n)}}});const En=(0,u.op)({einsum_:
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
function(n,...t){const e=t.map(((n,t)=>(0,a._1)(n,`tensors${t}`,"einsum"))),r={equation:n};return i.BV.runKernel(s.$g6,e,r)}});var xn=e(83233);const $n=(0,u.op)({erf_:
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
function(n){let t=(0,a._1)(n,"x","erf");h.hu("int32"===t.dtype||"float32"===t.dtype,(()=>"Input dtype must be `int32` or `float32`.")),"int32"===t.dtype&&(t=(0,E.p)(t,"float32"));const e={x:t};return i.BV.runKernel(s.Omj,e)}});var Bn=e(83591);const An=(0,u.op)({max_:
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
function(n,t=null,e=!1){const r={x:(0,a._1)(n,"x","max")},o={reductionIndices:t,keepDims:e};return i.BV.runKernel(s.YoZ,r,o)}});const In=(0,u.op)({min_:
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
function(n,t=null,e=!1){const r={x:(0,a._1)(n,"x","min")},o={axis:t,keepDims:e};return i.BV.runKernel(s.c17,r,o)}});var Tn=e(33453),Nn=e(99494),Mn=e(13261),Dn=e(50248),Rn=e(15475);function Vn(n,t,e=null){if(0===n.rank)return(0,o.W)(n);if(1!==n.rank&&null===e)return Vn((0,$.X)(n,[-1]),t,e);if(1===n.rank||"number"==typeof e||Array.isArray(e)&&1===e.length){if(1===t)return(0,Rn.S)((0,o.W)(n),e);if(t===1/0)return An((0,o.W)(n),e);if(t===-1/0)return In((0,o.W)(n),e);if("euclidean"===t||2===t)return(0,Mn._)((0,Rn.S)((0,Tn.s)((0,o.W)(n),(0,Nn.i)(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&2===e.length){if(1===t)return An((0,Rn.S)((0,o.W)(n),e[0]),e[1]-1);if(t===1/0)return An((0,Rn.S)((0,o.W)(n),e[1]),e[0]);if(t===-1/0)return In((0,Rn.S)((0,o.W)(n),e[1]),e[0]);if("fro"===t||"euclidean"===t)return(0,Mn._)((0,Rn.S)((0,Dn.h)(n),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}const Cn=(0,u.op)({norm_:
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
function(n,t="euclidean",e=null,r=!1){const o=Vn(n=(0,a._1)(n,"x","norm"),t,e);let i=o.shape;if(r){const t=(0,h.EC)(e,n.shape);i=Bn.rv(o.shape,t)}return(0,$.X)(o,i)}});const Fn=(0,u.op)({euclideanNorm_:
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
function(n,t=null,e=!1){return Cn(n,"euclidean",t,e)}});const On=(0,u.op)({exp_:
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
function(n){const t={x:(0,a._1)(n,"x","exp")};return i.BV.runKernel(s.NEP,t)}});const Pn=(0,u.op)({expandDims_:
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
function(n,t=0){const e=(0,a._1)(n,"x","expandDims","string_or_numeric");h.hu(t<=e.rank,(()=>"Axis must be <= rank of the tensor"));const r={input:e},o={dim:t};return i.BV.runKernel(s.YFo,r,o)}});const Ln=(0,u.op)({expm1_:
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
function(n){const t={x:(0,a._1)(n,"x","expm1")};return i.BV.runKernel(s.Y0y,t)}});const zn=(0,u.op)({tile_:
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
function(n,t){const e=(0,a._1)(n,"x","tile","string_or_numeric");h.hu(e.rank===t.length,(()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`));const r={x:e},o={reps:t};return i.BV.runKernel(s.n9L,r,o)}});const Wn=(0,u.op)({eye_:
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
function(n,t,e,r="float32"){null==t&&(t=n);const o=(0,q.f)([n,t],r),i=n<=t?n:t;for(let n=0;n<i;++n)o.set(1,n,n);const s=(0,$.X)(o.toTensor(),[n,t]);if(null==e)return s;if(1===e.length)return zn(Pn(s,0),[e[0],1,1]);if(2===e.length)return zn(Pn(Pn(s,0),0),[e[0],e[1],1,1]);if(3===e.length)return zn(Pn(Pn(Pn(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}});const Gn=(0,u.op)({floor_:
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
function(n){const t={x:(0,a._1)(n,"x","floor","float32")};return i.BV.runKernel(s.OR,t)}});var Un=e(9165);const qn=(0,u.op)({gather_:
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
function(n,t,e=0,r=0){const o={x:(0,a._1)(n,"x","gather"),indices:(0,a._1)(t,"indices","gather","int32")},u={axis:e,batchDims:r};return i.BV.runKernel(s.qi_,o,u)}});const Kn=(0,u.op)({greater_:
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
function(n,t){let e=(0,a._1)(n,"a","greater","string_or_numeric"),r=(0,a._1)(t,"b","greater","string_or_numeric");[e,r]=(0,v.makeTypesMatch)(e,r),(0,yn.assertAndGetBroadcastShape)(e.shape,r.shape);const o={a:e,b:r};return i.BV.runKernel(s.iZT,o)}});const Hn=(0,u.op)({greaterEqual_:
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
function(n,t){let e=(0,a._1)(n,"a","greaterEqual","string_or_numeric"),r=(0,a._1)(t,"b","greaterEqual","string_or_numeric");[e,r]=(0,v.makeTypesMatch)(e,r),(0,yn.assertAndGetBroadcastShape)(e.shape,r.shape);const o={a:e,b:r};return i.BV.runKernel(s.Acj,o)}});var Xn=e(64386);const jn=(0,u.op)({isFinite_:
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
function(n){const t={x:(0,a._1)(n,"x","isFinite")};return i.BV.runKernel(s.avt,t)}});const Zn=(0,u.op)({isInf_:
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
function(n){const t={x:(0,a._1)(n,"x","isInf")};return i.BV.runKernel(s.iWB,t)}});const Qn=(0,u.op)({isNaN_:
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
function(n){const t={x:(0,a._1)(n,"x","isNaN")};return i.BV.runKernel(s.r7n,t)}});var Yn=e(99133);const Jn=(0,u.op)({less_:
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
function(n,t){let e=(0,a._1)(n,"a","less","string_or_numeric"),r=(0,a._1)(t,"b","less","string_or_numeric");[e,r]=(0,v.makeTypesMatch)(e,r),(0,yn.assertAndGetBroadcastShape)(e.shape,r.shape);const o={a:e,b:r};return i.BV.runKernel(s.vtC,o)}});const nt=(0,u.op)({lessEqual_:
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
function(n,t){let e=(0,a._1)(n,"a","lessEqual","string_or_numeric"),r=(0,a._1)(t,"b","lessEqual","string_or_numeric");[e,r]=(0,v.makeTypesMatch)(e,r),(0,yn.assertAndGetBroadcastShape)(e.shape,r.shape);const o={a:e,b:r};return i.BV.runKernel(s.CAk,o)}});
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
function tt(n,t,e){if(e<=0)throw new Error("The number of values should be positive.");const r={start:n,stop:t,num:e};return i.BV.runKernel(s.e7N,{},r)}const et=(0,u.op)({localResponseNormalization_:
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
function(n,t=5,e=1,r=1,o=.5){const u=(0,a._1)(n,"x","localResponseNormalization");h.hu(4===u.rank||3===u.rank,(()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ${u.rank}.`)),h.hu(h.GN(t),(()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`));let c=u,l=!1;3===u.rank&&(l=!0,c=(0,$.X)(u,[1,u.shape[0],u.shape[1],u.shape[2]]));const f={x:c},d={depthRadius:t,bias:e,alpha:r,beta:o},p=i.BV.runKernel(s.eZ0,f,d);return l?(0,$.X)(p,[p.shape[1],p.shape[2],p.shape[3]]):p}});const rt=(0,u.op)({log_:
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
function(n){const t={x:(0,a._1)(n,"x","log","float32")};return i.BV.runKernel(s.ZbH,t)}});const ot=(0,u.op)({log1p_:
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
function(n){const t={x:(0,a._1)(n,"x","log1p")};return i.BV.runKernel(s.kU,t)}});var it=e(30633),st=e(17370);const at=(0,u.op)({softplus_:
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
function(n){const t={x:(0,a._1)(n,"x","softplus")};return i.BV.runKernel(s.MRv,t)}});const ut=(0,u.op)({logSigmoid_:
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
function(n){const t=(0,a._1)(n,"x","logSigmoid"),e=(0,it.cb)((n=>({value:(0,st.W)(at((0,st.W)(n))),gradFunc:t=>(0,M.d)(t,(0,D.X)((0,st.W)(n)))})));return e(t)}});var ct=e(70827);const lt=(0,u.op)({logSoftmax_:
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
function(n,t=-1){const e=(0,a._1)(n,"logits","logSoftmax");if(-1===t&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);const r=(0,it.cb)(((n,e)=>{const r=An(n,t,!0),o=(0,ct.l)(n,r),i=(0,ct.l)((0,E.p)(o,"float32"),rt((0,Rn.S)(On(o),t,!0)));e([i]);return{value:i,gradFunc:(n,e)=>{const[r]=e,o=On(r);return(0,ct.l)(n,(0,M.d)((0,Rn.S)(n,t,!0),o))}}}));return r(e)}});const ft=(0,u.op)({logSumExp_:
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
function(n,t=null,e=!1){const r=(0,a._1)(n,"x","logSumExp"),o=(0,h.EC)(t,r.shape),i=An(r,o,!0),s=(0,ct.l)(r,i),u=On(s),c=(0,Rn.S)(u,o),l=rt(c),d=(0,f.I)((0,$.X)(i,l.shape),l);if(e){const n=(0,Bn.rv)(d.shape,o);return(0,$.X)(d,n)}return d}});const ht=(0,u.op)({logicalAnd_:
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
function(n,t){const e=(0,a._1)(n,"a","logicalAnd","bool"),r=(0,a._1)(t,"b","logicalAnd","bool");(0,yn.assertAndGetBroadcastShape)(e.shape,r.shape);const o={a:e,b:r};return i.BV.runKernel(s.PYm,o)}});const dt=(0,u.op)({logicalNot_:
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
function(n){const t={x:(0,a._1)(n,"x","logicalNot","bool")};return i.BV.runKernel(s.VfG,t)}});const pt=(0,u.op)({logicalOr_:
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
function(n,t){const e=(0,a._1)(n,"a","logicalOr","bool"),r=(0,a._1)(t,"b","logicalOr","bool");(0,yn.assertAndGetBroadcastShape)(e.shape,r.shape);const o={a:e,b:r};return i.BV.runKernel(s.MZg,o)}});const mt=(0,u.op)({logicalXor_:
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
function(n,t){const e=(0,a._1)(n,"a","logicalXor","bool"),r=(0,a._1)(t,"b","logicalXor","bool");return(0,yn.assertAndGetBroadcastShape)(e.shape,r.shape),ht(pt(n,t),dt(ht(n,t)))}}),gt=2147483648;const bt=(0,u.op)({searchSorted_:function(n,t,e="left"){const r=(0,a._1)(n,"sortedSequence","searchSorted"),o=(0,a._1)(t,"values","searchSorted"),u=r.shape[r.shape.length-1],c=o.shape[o.shape.length-1],l=(0,$.X)(r,[-1,u]),f=(0,$.X)(o,[-1,c]);if(l.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(l.shape[0]!==f.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if((0,h.NA)(f.shape)>=gt)throw new Error("values tensor size must less than 2147483648");if(l.shape[1]>=gt)throw new Error(`trailing dim_size must less than 2147483648 for int32 output type, was ${l.shape[1]}`);const d={sortedSequence:l,values:f},p={side:e};return i.BV.runKernel(s.nr8,d,p)}});
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
function yt(n,t){return bt(n,t,"left")}const wt=(0,u.op)({maxPool_:
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
function(n,t,e,r,o){const u=(0,a._1)(n,"x","maxPool");let c=u,l=!1;3===u.rank&&(l=!0,c=(0,$.X)(u,[1,u.shape[0],u.shape[1],u.shape[2]])),h.hu(4===c.rank,(()=>`Error in maxPool: input must be rank 4 but got rank ${c.rank}.`)),h.hu(x.jT(e,1),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '1'`)),x.m("maxPool",r,o);const f={x:c},d={filterSize:t,strides:e,pad:r,dimRoundingMode:o},p=i.BV.runKernel(s.mTV,f,d);return l?(0,$.X)(p,[p.shape[1],p.shape[2],p.shape[3]]):p}});const kt=(0,u.op)({maxPool3d_:
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
function(n,t=[1,1,1],e,r,o,u="NDHWC"){const c=(0,a._1)(n,"x","maxPool3d");let l=c,f=!1;4===c.rank&&(f=!0,l=(0,$.X)(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]])),h.hu(5===l.rank,(()=>`Error in maxPool3d: x must be rank 5 but got rank ${l.rank}.`)),h.hu("NDHWC"===u,(()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${u}`)),(0,x.m)("maxPool3d",r,o);const d={x:l},p={filterSize:t,strides:e,pad:r,dimRoundingMode:o,dataFormat:u},m=i.BV.runKernel(s.OAf,d,p);return f?(0,$.X)(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}});const vt=(0,u.op)({maxPoolWithArgmax_:
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
function(n,t,e,r,o=!1){const u={x:(0,a._1)(n,"x","maxPoolWithArgmax")},c={filterSize:t,strides:e,pad:r,includeBatchInIndex:o},l=i.BV.runKernel(s.vFR,u,c);return{result:l[0],indexes:l[1]}}});var St=e(80632);const _t=(0,u.op)({mean_:
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
function(n,t=null,e=!1){const r={x:(0,a._1)(n,"x","mean")},o={axis:t,keepDims:e};return i.BV.runKernel(s.q2K,r,o)}});
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
function Et(n,t="float32"){if((0,h.Mu)(n),"complex64"===t){const t=Et(n,"float32"),e=Et(n,"float32");return(0,j.P)(t,e)}const e=(0,h.wT)((0,h.NA)(n),t);return i.BV.makeTensor(e,n,t)}
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
function xt(n,t="float32"){if((0,h.Mu)(n),"complex64"===t){const t=xt(n,"float32"),e=Et(n,"float32");return(0,j.P)(t,e)}const e=(0,h.p8)((0,h.NA)(n),t);return i.BV.makeTensor(e,n,t)}var $t=e(4077);
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
function Bt(n,t,{indexing:e="xy"}={}){if("xy"!==e&&"ij"!==e)throw new TypeError(`${e} is not a valid third argument to meshgrid`);if(void 0===n)return[];let r=(0,a._1)(n,"x","meshgrid",n instanceof $t.es?n.dtype:"float32");if(void 0===t)return[r];let o=(0,a._1)(t,"y","meshgrid",t instanceof $t.es?t.dtype:"float32");const i=(0,h.NA)(r.shape),s=(0,h.NA)(o.shape);return"xy"===e?(r=(0,$.X)(r,[1,-1]),o=(0,$.X)(o,[-1,1]),[(0,N.O)(xt([s,1],r.dtype),r),(0,N.O)(o,xt([1,i],o.dtype))]):(r=(0,$.X)(r,[-1,1]),o=(0,$.X)(o,[1,-1]),[(0,N.O)(r,xt([1,s],r.dtype)),(0,N.O)(xt([i,1],o.dtype),o)])}const At=(0,u.op)({minimum_:
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
function(n,t){let e=(0,a._1)(n,"a","minimum"),r=(0,a._1)(t,"b","minimum");[e,r]=(0,v.makeTypesMatch)(e,r),"bool"===e.dtype&&(e=(0,E.p)(e,"int32"),r=(0,E.p)(r,"int32")),(0,yn.assertAndGetBroadcastShape)(e.shape,r.shape);const o={a:e,b:r};return i.BV.runKernel(s.q8u,o)}});const It=(0,u.op)({mirrorPad_:
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
function(n,t,e){h.hu("reflect"===e||"symmetric"===e,(()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`));const r=(0,a._1)(n,"x","mirrorPad");if(0===r.rank)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");h.hu(t.length===r.rank,(()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`));const o="reflect"===e?1:0;for(let n=0;n<r.rank;n++)h.hu(2===t[n].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),h.hu(t[n][0]>=0&&t[n][0]<=r.shape[n]-o&&t[n][1]>=0&&t[n][1]<=r.shape[n]-o,(()=>`Padding in dimension ${n} cannot be greater than or equal to ${r.shape[n]-o} or less than 0 for input of shape ${r.shape}`));const u={paddings:t,mode:e},c={x:r};return i.BV.runKernel(s.jQs,c,u)}});const Tt=(0,u.op)({mod_:
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
function(n,t){let e=(0,a._1)(n,"a","mod"),r=(0,a._1)(t,"b","mod");[e,r]=(0,v.makeTypesMatch)(e,r);const o={a:e,b:r};return i.BV.runKernel(s.Vbg,o)}});const Nt=(0,u.op)({moments_:
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
function(n,t=null,e=!1){n=(0,a._1)(n,"x","moments");const r=(0,h.EC)(t,n.shape),o=_t(n,r,e);let i=o.shape;e||(i=(0,Bn.rv)(o.shape,r));const s=(0,Dn.h)((0,ct.l)((0,E.p)(n,"float32"),(0,$.X)(o,i)));return{mean:o,variance:_t(s,r,e)}}});const Mt=(0,u.op)({multiRNNCell_:function(n,t,e,r){const o=(0,a._1)(t,"data","multiRNNCell"),i=(0,a.sI)(e,"c","multiRNNCell"),s=(0,a.sI)(r,"h","multiRNNCell");let u=o;const c=[];for(let t=0;t<n.length;t++){const e=n[t](u,i[t],s[t]);c.push(e[0]),c.push(e[1]),u=e[1]}const l=[],f=[];for(let n=0;n<c.length;n+=2)l.push(c[n]),f.push(c[n+1]);return[l,f]}});const Dt=(0,u.op)({multinomial_:
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
function(n,t,e,r=!1){const o=(0,a._1)(n,"logits","multinomial"),u=o.size,c=o.rank;if(u<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${u}.`);if(c>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${c}`);e=e||Math.random();const l={logits:1===c?(0,$.X)(o,[1,-1]):o},f={numSamples:t,seed:e,normalized:r},h=i.BV.runKernel(s.NZg,l,f);return 1===c?(0,$.X)(h,[h.size]):h}});const Rt=(0,u.op)({notEqual_:
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
function(n,t){let e=(0,a._1)(n,"a","notEqual","string_or_numeric"),r=(0,a._1)(t,"b","notEqual","string_or_numeric");[e,r]=(0,v.makeTypesMatch)(e,r),(0,yn.assertAndGetBroadcastShape)(e.shape,r.shape);const o={a:e,b:r};return i.BV.runKernel(s.yQU,o)}});var Vt=e(76708);const Ct=(0,u.op)({onesLike_:
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
function(n){const t={x:(0,a._1)(n,"x","onesLike")};return i.BV.runKernel(s.qWM,t)}});const Ft=(0,u.op)({outerProduct_:function(n,t){const e=(0,a._1)(n,"v1","outerProduct"),r=(0,a._1)(t,"v2","outerProduct");h.hu(1===e.rank&&1===r.rank,(()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${e.rank} and ${r.rank}.`));const o=(0,$.X)(e,[-1,1]),i=(0,$.X)(r,[1,-1]);return(0,N.O)(o,i)}});const Ot=(0,u.op)({pad_:
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
function(n,t,e=0){const r=(0,a._1)(n,"x","pad");if(0===r.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const o={paddings:t,constantValue:e},u={x:r};return i.BV.runKernel(s.lyA,u,o)}});const Pt=(0,u.op)({pad1d_:function(n,t,e=0){return(0,h.hu)(2===t.length,(()=>"Invalid number of paddings. Must be length of 2.")),Ot(n,[t],e)}});const Lt=(0,u.op)({pad2d_:function(n,t,e=0){return(0,h.hu)(2===t.length&&2===t[0].length&&2===t[1].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),Ot(n,t,e)}});const zt=(0,u.op)({pad3d_:function(n,t,e=0){return(0,h.hu)(3===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),Ot(n,t,e)}});const Wt=(0,u.op)({pad4d_:function(n,t,e=0){return(0,h.hu)(4===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length&&2===t[3].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),Ot(n,t,e)}});const Gt=(0,u.op)({spaceToBatchND_:
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
function(n,t,e){const r=(0,a._1)(n,"x","spaceToBatchND");h.hu(r.rank>=1+t.length,(()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`)),h.hu(e.length===t.length,(()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`)),h.hu(r.shape.reduce(((n,r,o)=>o>0&&o<=t.length?n&&(r+e[o-1][0]+e[o-1][1])%t[o-1]==0:n),!0),(()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`));const o={x:r},u={blockShape:t,paddings:e};return i.BV.runKernel(s.TQc,o,u)}});const Ut=(0,u.op)({pool_:
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
function(n,t,e,r,o,i,s){null==o&&(o=[1,1]),null==i&&(i=1),0===r&&(r="valid");const u=(0,a._1)(n,"x","maxPool");let c=u,l=!1;3===u.rank&&(l=!0,c=(0,$.X)(u,[1,u.shape[0],u.shape[1],u.shape[2]])),h.hu(x.jT(i,o),(()=>`Error in pool: Either strides or dilations must be 1. Got strides ${i} and dilations '${o}'`));const f=x.Xw(c.shape,t,i,o,r),d=[f.dilationHeight,f.dilationWidth];let p;p="same"===r?function(n,t){const e=n.map(((n,e)=>n+(n-1)*(t[e]-1))).map((n=>n-1)),r=e.map((n=>Math.floor(n/2))),o=e.map(((n,t)=>n-r[t]));return e.map(((n,t)=>[r[t],o[t]]))}([f.filterHeight,f.filterWidth],d):[[0,0],[0,0]];const m=1===d[0]&&1===d[1],[g,b]=function(n,t,e){const r=e.map((n=>n[0])),o=e.map((n=>n[1])),i=n.concat(r,o),s=t.map(((n,t)=>(n-i[t]%n)%n)),a=o.map(((n,t)=>n+s[t])),u=t.map(((n,t)=>[r[t],a[t]])),c=t.map(((n,t)=>[0,s[t]]));return[u,c]}([f.inHeight,f.inWidth],d,p),y=m?r:"valid",w=m?c:Gt(c,d,g),k=("avg"===e?()=>B(w,t,i,y,s):()=>wt(w,t,i,y,s))(),v=m?k:F(k,d,b);return l?(0,$.X)(v,[v.shape[1],v.shape[2],v.shape[3]]):v}});var qt=e(98151),Kt=e(29798);const Ht=(0,u.op)({prod_:
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
function(n,t=null,e=!1){let r=(0,a._1)(n,"x","prod");"bool"===r.dtype&&(r=(0,E.p)(r,"int32"));const o={x:r},u={axis:t,keepDims:e};return i.BV.runKernel(s.DlI,o,u)}});const Xt=(0,u.op)({raggedGather_:
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
function(n,t,e,r){const o={paramsNestedSplits:n.map(((n,t)=>(0,a._1)(n,`tensors${t}`,"raggedGather","int32"))),paramsDenseValues:(0,a._1)(t,"paramsDenseValues","raggedGather"),indices:(0,a._1)(e,"indices","raggedGather","int32")},u={outputRaggedRank:r},c=i.BV.runKernel(s.dDz,o,u);return{outputNestedSplits:c.slice(0,c.length-1),outputDenseValues:c[c.length-1]}}});const jt=(0,u.op)({raggedRange_:
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
function(n,t,e){const r=(0,a._1)(n,"starts","raggedRange"),o={starts:r,limits:(0,a._1)(t,"limits","raggedRange",r.dtype),deltas:(0,a._1)(e,"deltas","raggedRange",r.dtype)},u=i.BV.runKernel(s.CQl,o);return{rtNestedSplits:u[0],rtDenseValues:u[1]}}});const Zt=(0,u.op)({raggedTensorToTensor_:
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
function(n,t,e,r,o){const u=(0,a._1)(n,"shape","raggedTensorToTensor","int32"),c=(0,a._1)(t,"values","raggedTensorToTensor"),l={shape:u,values:c,defaultValue:(0,a._1)(e,"defaultValue","raggedTensorToTensor",c.dtype),rowPartitionTensors:r.map(((n,t)=>(0,a._1)(n,`tensors${t}`,"raggedTensorToTensor","int32")))},f={rowPartitionTypes:o};return i.BV.runKernel(s.BiW,l,f)}});const Qt=(0,u.op)({rand_:
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
function(n,t,e){(0,h.Mu)(n);const r=(0,h.NA)(n);let o=null;if(null==e||"float32"===e)o=new Float32Array(r);else if("int32"===e)o=new Int32Array(r);else{if("bool"!==e)throw new Error(`Unknown data type ${e}`);o=new Uint8Array(r)}for(let n=0;n<r;n++)o[n]=t();return i.BV.makeTensor(o,n,e)}});var Yt=e(36377);
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
class Jt{constructor(n,t,e,r,o){this.mean=n,this.stdDev=t,this.dtype=e,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);const i=o||Math.random();this.random=Yt.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){const n=this.nextVal;return this.nextVal=NaN,n}let n,t,e=!1;for(;!e;){let r,o,i;do{r=2*this.random()-1,o=2*this.random()-1,i=r*r+o*o}while(i>=1||0===i);const s=Math.sqrt(-2*Math.log(i)/i);n=this.mean+this.stdDev*r*s,t=this.mean+this.stdDev*o*s,this.truncated&&!this.isValidTruncated(n)||(e=!0)}return this.truncated&&!this.isValidTruncated(t)||(this.nextVal=this.convertValue(t)),this.convertValue(n)}convertValue(n){return null==this.dtype||"float32"===this.dtype?n:Math.round(n)}isValidTruncated(n){return n<=this.upper&&n>=this.lower}}class ne{constructor(n,t,e,r){this.alpha=n,this.beta=1/t,this.dtype=e;const o=r||Math.random();this.randu=Yt.alea(o.toString()),this.randn=new Jt(0,1,e,!1,this.randu()),this.d=n<1?n+2/3:n-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let n,t,e,r,o,i;for(;;){do{r=this.randn.nextValue(),i=1+this.c*r}while(i<=0);if(i*=i*i,n=r*r,t=1-.331*n*n,e=.5*n+this.d*(1-i+Math.log(i)),o=this.randu(),o<t||Math.log(o)<e)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)}convertValue(n){return"float32"===this.dtype?n:Math.round(n)}}class te{constructor(n=0,t=1,e,r){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=n,this.range=t-n,this.dtype=e,null==r&&(r=Math.random()),"number"==typeof r&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${n} - ${t} <= 1 and dtype is not float`);this.random=Yt.alea(r)}convertValue(n){return this.canReturnFloat()?n:Math.round(n)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}const ee=(0,u.op)({randomGamma_:
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
function(n,t,e=1,r="float32",o){if((0,h.Mu)(n),null==e&&(e=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw new Error(`Unsupported data type ${r}`);const i=new ne(t,e,r,o),s=(0,q.f)(n,r);for(let n=0;n<s.values.length;n++)s.values[n]=i.nextValue();return s.toTensor()}});const re=(0,u.op)({randomNormal_:
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
function(n,t=0,e=1,r,o){if((0,h.Mu)(n),null!=r&&"bool"===r)throw new Error(`Unsupported data type ${r}`);const i=new Jt(t,e,r,!1,o),s=(0,q.f)(n,r);for(let n=0;n<s.values.length;n++)s.values[n]=i.nextValue();return s.toTensor()}});const oe=(0,u.op)({randomStandardNormal_:
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
function(n,t,e){if(null!=t&&"bool"===t)throw new Error(`Unsupported data type ${t}`);return re(n,0,1,t,e)}});const ie=(0,u.op)({randomUniform_:
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
function(n,t=0,e=1,r="float32",o){(0,h.Mu)(n);const i=(0,q.f)(n,r),s=new te(t,e,null,o);for(let n=0;n<i.values.length;n++)i.values[n]=s.nextValue();return i.toTensor()}});
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
function se(n,t,e=1,r="float32"){if(0===e)throw new Error("Cannot have a step of zero");const o={start:n,stop:t,step:e,dtype:r};return i.BV.runKernel(s.e6w,{},o)}var ae=e(60766);const ue=(0,u.op)({reciprocal_:
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
function(n){const t={x:(0,a._1)(n,"x","reciprocal")};return i.BV.runKernel(s.$HU,t)}});var ce=e(7409),le=e(83582);const fe=(0,u.op)({reverse_:
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
function(n,t){const e={x:(0,a._1)(n,"x","reverse")},r={dims:t};return i.BV.runKernel(s.mKl,e,r)}});const he=(0,u.op)({reverse1d_:
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
function(n){const t=(0,a._1)(n,"x","reverse");return h.hu(1===t.rank,(()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`)),fe(t,0)}});const de=(0,u.op)({reverse2d_:
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
function(n,t){const e=(0,a._1)(n,"x","reverse");return h.hu(2===e.rank,(()=>`Error in reverse2D: x must be rank 2 but got rank ${e.rank}.`)),fe(e,t)}});const pe=(0,u.op)({reverse3d_:
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
function(n,t){const e=(0,a._1)(n,"x","reverse");return h.hu(3===e.rank,(()=>`Error in reverse3D: x must be rank 3 but got rank ${e.rank}.`)),fe(e,t)}});const me=(0,u.op)({reverse4d_:
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
function(n,t){const e=(0,a._1)(n,"x","reverse");return h.hu(4===e.rank,(()=>`Error in reverse4D: x must be rank 4 but got rank ${e.rank}.`)),fe(e,t)}});const ge=(0,u.op)({round_:
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
function(n){const t={x:(0,a._1)(n,"x","round")};return i.BV.runKernel(s.e07,t)}});const be=(0,u.op)({rsqrt_:
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
function(n){const t={x:(0,a._1)(n,"x","rsqrt","float32")};return i.BV.runKernel(s.bV0,t)}});const ye=(0,u.op)({selu_:
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
function(n){const t={x:(0,a._1)(n,"x","selu")};return i.BV.runKernel(s.oFR,t)}});const we=(0,u.op)({separableConv2d_:function(n,t,e,r,o,i=[1,1],s="NHWC"){const u=(0,a._1)(n,"x","separableConv2d"),c=(0,a._1)(t,"depthwiseFilter","separableConv2d"),l=(0,a._1)(e,"pointwiseFilter","separableConv2d");let f=u,d=!1;if(3===u.rank&&(d=!0,f=(0,$.X)(u,[1,u.shape[0],u.shape[1],u.shape[2]])),"NCHW"===s)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");h.hu(4===f.rank,(()=>`Error in separableConv2d: input must be rank 4, but got rank ${f.rank}.`)),h.hu(4===c.rank,(()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`)),h.hu(4===l.rank,(()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`)),h.hu(1===l.shape[0],(()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`)),h.hu(1===l.shape[1],(()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`));const p=c.shape[2],m=c.shape[3];h.hu(l.shape[2]===p*m,(()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${p*m}, but got ${l.shape[2]}.`));const g=pn(f,c,r,o,s,i),b=nn(g,l,1,"valid",s);return d?(0,$.X)(b,[b.shape[1],b.shape[2],b.shape[3]]):b}});const ke=
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
async function(n,t){const e=(0,a._1)(n,"x","setdiff1d"),r=(0,a._1)(t,"y","setdiff1d");h.hu(e.dtype===r.dtype,(()=>`x and y should have the same dtype, but got x (${e.dtype}) and y (${r.dtype}).`)),h.hu(1===e.rank,(()=>`x should be 1D tensor, but got x (${e.shape}).`)),h.hu(1===r.rank,(()=>`y should be 1D tensor, but got y (${r.shape}).`));const o=await e.data(),i=await r.data(),s=new Set(i);let u=0;for(let n=0;n<o.length;n++)s.has(o[n])||u++;const c=new $t.YD([u],e.dtype),l=new $t.YD([u],"int32");for(let n=0,t=0;n<o.length;n++)s.has(o[n])||(c.values[t]=o[n],l.values[t]=n,t++);return[c.toTensor(),l.toTensor()]};const ve=(0,u.op)({sign_:
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
function(n){const t={x:(0,a._1)(n,"x","sign")};return i.BV.runKernel(s.i5y,t)}});const Se=(0,u.op)({sin_:
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
function(n){const t={x:(0,a._1)(n,"x","sin","float32")};return i.BV.runKernel(s.RQH,t)}});const _e=(0,u.op)({sinh_:
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
function(n){const t={x:(0,a._1)(n,"x","sinh")};return i.BV.runKernel(s.wYB,t)}});const Ee=(0,u.op)({slice1d_:
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
function(n,t,e){const r=(0,a._1)(n,"x","slice1d");return h.hu(1===r.rank,(()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`)),R(r,[t],[e])}});const xe=(0,u.op)({slice2d_:
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
function(n,t,e){const r=(0,a._1)(n,"x","slice2d");return h.hu(2===r.rank,(()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`)),R(r,t,e)}});const $e=(0,u.op)({slice3d_:
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
function(n,t,e){const r=(0,a._1)(n,"x","slice3d");return h.hu(3===r.rank,(()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`)),R(r,t,e)}});const Be=(0,u.op)({slice4d_:
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
function(n,t,e){const r=(0,a._1)(n,"x","slice4d");return h.hu(4===r.rank,(()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`)),R(r,t,e)}});const Ae=(0,u.op)({softmax_:
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
function(n,t=-1){const e=(0,a._1)(n,"logits","softmax","float32");if(-1===t&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);const r={logits:e},o={dim:t};return i.BV.runKernel(s.Gcp,r,o)}});const Ie=(0,u.op)({fft_:
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
function(n){(0,h.hu)("complex64"===n.dtype,(()=>`The dtype for tf.spectral.fft() must be complex64 but got ${n.dtype}.`));const t={input:n};return i.BV.runKernel(s.vwp,t)}});const Te=(0,u.op)({ifft_:
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
function(n){(0,h.hu)("complex64"===n.dtype,(()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${n.dtype}.`));const t={input:n};return i.BV.runKernel(s.Qg5,t)}});const Ne=(0,u.op)({irfft_:
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
function(n){const t=n.shape[n.shape.length-1],e=n.size/t;let r;if(t<=2){const o=(0,$.X)(n,[e,t]);r=Te(o)}else{const o=[e,2*(t-1)],i=(0,$.X)((0,ae.k)(n),[e,t]),s=(0,$.X)((0,Xn.a)(n),[e,t]),a=fe(R(i,[0,1],[e,t-2]),1),u=(0,M.d)(fe(R(s,[0,1],[e,t-2]),1),(0,Nn.i)(-1)),c=T([i,a],1),l=T([s,u],1),f=(0,$.X)((0,j.P)(c,l),[o[0],o[1]]);r=Te(f)}if(r=(0,ae.k)(r),3===n.rank&&0!==n.shape[0]){const t=r,e=n.shape[0];r=(0,$.X)(r,[e,r.shape[0]/e,r.shape[1]]),t.dispose()}return r}});const Me=(0,u.op)({split_:
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
function(n,t,e=0){const r={x:(0,a._1)(n,"x","split")},o={numOrSizeSplits:t,axis:e};return i.BV.runKernel(s.L8s,r,o)}});const De=(0,u.op)({rfft_:
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
function(n,t){(0,h.hu)("float32"===n.dtype,(()=>`The dtype for rfft() must be real value but got ${n.dtype}`));let e=n.shape[n.shape.length-1];const r=n.size/e;let o;if(null!=t&&t<e){const r=n.shape.map((n=>0)),i=n.shape.map((n=>n));i[n.shape.length-1]=t,o=R(n,r,i),e=t}else if(null!=t&&t>e){const r=n.shape.map((n=>n));r[n.shape.length-1]=t-e,o=T([n,Et(r)],n.shape.length-1),e=t}else o=n;const i=(0,vn.P)(o),s=(0,$.X)((0,j.P)(o,i),[r,e]),a=Ie(s),u=Math.floor(e/2)+1,c=(0,ae.k)(a),l=(0,Xn.a)(a),f=Me(c,[u,e-u],c.shape.length-1),d=Me(l,[u,e-u],l.shape.length-1),p=o.shape.slice();return p[o.shape.length-1]=u,(0,$.X)((0,j.P)(f[0],d[0]),p)}});const Re=(0,u.op)({squaredDifference_:
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
function(n,t){let e=(0,a._1)(n,"a","squaredDifference"),r=(0,a._1)(t,"b","squaredDifference");[e,r]=(0,v.makeTypesMatch)(e,r),(0,yn.assertAndGetBroadcastShape)(e.shape,r.shape);const o={a:e,b:r};return i.BV.runKernel(s._tC,o,{})}});const Ve=(0,u.op)({squeeze_:
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
function(n,t){const e=(0,a._1)(n,"x","squeeze","string_or_numeric");return(0,$.X)(e,(0,h.bp)(e.shape,t).newShape)}});const Ce=(0,u.op)({stack_:
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
function(n,t=0){const e=(0,a.sI)(n,"tensors","stack","string_or_numeric");h.hu(e.length>=1,(()=>"Pass at least one tensor to tf.stack")),e.length>0&&h.hu(t<=e[0].rank,(()=>"Axis must be <= rank of the tensor"));const r=e,o={axis:t};return i.BV.runKernel(s.QiL,r,o)}});var Fe=e(71901);const Oe=(0,u.op)({stridedSlice_:
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
function(n,t,e,r,o=0,u=0,c=0,l=0,f=0){const h={x:(0,a._1)(n,"x","stridedSlice","string_or_numeric")},d={begin:t,end:e,strides:r,beginMask:o,endMask:u,ellipsisMask:c,newAxisMask:l,shrinkAxisMask:f};return i.BV.runKernel(s.jQk,h,d)}});const Pe=(0,u.op)({tan_:
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
function(n){const t={x:(0,a._1)(n,"x","tan","float32")};return i.BV.runKernel(s.sEM,t)}});var Le=e(10701),ze=e(57852);
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
function We(n,t){(0,h.Cq)(n);const e=(0,a.C)(n,t);if(1!==e.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return(0,ze.H)(n,null,e,t)}
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
function Ge(n,t,e){if((0,h.Cq)(n),null!=t&&2!==t.length)throw new Error("tensor2d() requires shape to have two numbers");const r=(0,a.C)(n,e);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return(0,ze.H)(n,t,r,e)}var Ue=e(99906);
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
function qe(n,t,e){if((0,h.Cq)(n),null!=t&&4!==t.length)throw new Error("tensor4d() requires shape to have four numbers");const r=(0,a.C)(n,e);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return(0,ze.H)(n,t,r,e)}
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
function Ke(n,t,e){if((0,h.Cq)(n),null!=t&&5!==t.length)throw new Error("tensor5d() requires shape to have five numbers");const r=(0,a.C)(n,e);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return(0,ze.H)(n,t,r,e)}
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
function He(n,t,e){if((0,h.Cq)(n),null!=t&&6!==t.length)throw new Error("tensor6d() requires shape to have six numbers");const r=(0,a.C)(n,e);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||r,(0,ze.H)(n,t,r,e)}const Xe=(0,u.op)({topk_:
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
function(n,t=1,e=!0){const r=(0,a._1)(n,"x","topk");if(0===r.rank)throw new Error("topk() expects the input to be of rank 1 or higher");const o=r.shape[r.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>o)throw new Error(`'k' passed to topk() must be <= the last dimension (${o}) but got ${t}`);const u={x:r},c={k:t,sorted:e},[l,f]=i.BV.runKernel(s.cWu,u,c);return{values:l,indices:f}}});const je=(0,u.op)({truncatedNormal_:
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
function(n,t=0,e=1,r,o){if((0,h.Mu)(n),null!=r&&"bool"===r)throw new Error("Unsupported data type $ { dtype }");const i=new Jt(t,e,r,!0,o),s=(0,q.f)(n,r);for(let n=0;n<s.values.length;n++)s.values[n]=i.nextValue();return s.toTensor()}});const Ze=(0,u.op)({unique_:
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
function(n,t=0){const e=(0,a._1)(n,"x","unique","string_or_numeric");(0,h.hu)(e.rank>0,(()=>"The input tensor must be at least 1D"));const r={x:e},o={axis:t},[u,c]=i.BV.runKernel(s.kpP,r,o);return{values:u,indices:c}}});const Qe=(0,u.op)({unsortedSegmentSum_:
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
function(n,t,e){const r=(0,a._1)(n,"x","unsortedSegmentSum"),o=(0,a._1)(t,"segmentIds","unsortedSegmentSum","int32");(0,h.hu)((0,h.GN)(e),(()=>"numSegments must be of dtype int"));const u={x:r,segmentIds:o},c={numSegments:e};return i.BV.runKernel(s.Qvg,u,c)}});const Ye=(0,u.op)({unstack_:
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
function(n,t=0){const e=(0,a._1)(n,"x","unstack","string_or_numeric");h.hu(t>=-e.shape.length&&t<e.shape.length,(()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`));const r={value:e},o={axis:t};return i.BV.runKernel(s.ToN,r,o)}});
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
function Je(n,t){return bt(n,t,"right")}
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
function nr(n,t=!0,e,r){return i.BV.makeVariable(n,t,e,r)}var tr=e(48333);const er=
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
async function(n){const t=(0,a._1)(n,"condition","whereAsync","bool"),e=await t.data(),r=(0,tr.Z)(t.shape,e);return n!==t&&t.dispose(),r};const rr=
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
async function(n,t,e){const r=(0,a._1)(n,"tensor","boolMask"),o=(0,a._1)(t,"mask","boolMask","bool"),i=null==e?0:e,s=o.rank,u=r.shape;h.hu(s>0,(()=>"mask cannot be scalar")),h.k5(u.slice(i,i+s),o.shape,"mask's shape must match the first K dimensions of tensor's shape,");let c=1;for(let n=i;n<i+s;n++)c*=u[n];const l=u.slice(0,i).concat([c],u.slice(i+s)),f=(0,$.X)(r,l),d=(0,$.X)(o,[-1]),p=await er(d),m=Ve(p,[1]),g=qn(f,m,i);return n!==r&&r.dispose(),t!==o&&o.dispose(),m.dispose(),f.dispose(),d.dispose(),p.dispose(),g};var or=e(89065);const ir=(0,u.op)({movingAverage_:
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
function(n,t,e,r,o=!0){const i=(0,a._1)(n,"v","movingAverage"),s=(0,a._1)(t,"x","movingAverage"),u=(0,a._1)(e,"decay","movingAverage");(0,v.assertTypesMatch)(i,s),h.hu(h.cO(i.shape,s.shape),(()=>"Shape mismatch in v and x"));const c=(0,Nn.i)(1),l=(0,ct.l)(c,u);let d=(0,M.d)((0,ct.l)(s,i),l);if(o){h.hu(null!=r,(()=>"When using zeroDebias: true, step is required."));const n=(0,a._1)(r,"step","movingAverage");d=(0,bn.h)(d,(0,ct.l)(c,(0,Tn.s)(u,n)))}return(0,f.I)(i,d)}});var sr=e(33028);const ar=(0,u.op)({scatterND_:
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
function(n,t,e){(0,h.Mu)(e);const r=(0,a._1)(n,"indices","scatterND","int32"),o=(0,a._1)(t,"updates","scatterND");sr.validateInput(o,r,e);const u={indices:r,updates:o},c={shape:e};return i.BV.runKernel(s.xQA,u,c)}});const ur=(0,u.op)({sparseToDense_:
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
function(n,t,e,r=0){(0,h.Mu)(e);const o=(0,a._1)(n,"sparseIndices","sparseToDense","int32"),u=(0,a._1)(t,"sparseValues","sparseToDense","string_or_numeric"),c=(0,a._1)(r,"defaultValue","sparseToDense",u.dtype);!function(n,t,e,r){if("int32"!==n.dtype)throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${n.dtype}.`);if(n.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${n.shape}.`);const o=n.rank>0?n.shape[0]:1,i=n.rank>1?n.shape[1]:1;if(e.length!==i)throw new Error(`outputShape has incorrect number of elements:, ${e.length}, should be: ${i}.`);const s=t.size;if(0!==t.rank&&(1!==t.rank||s!==o))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${o}]`);if(t.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,u,e,c);const l={sparseIndices:o,sparseValues:u,defaultValue:c},f={outputShape:e};return i.BV.runKernel(s.D2d,l,f)}});const cr=(0,u.op)({gatherND_:
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
function(n,t){const e=(0,a._1)(t,"indices","gatherND","int32"),r={params:(0,a._1)(n,"x","gatherND","string_or_numeric"),indices:e};return i.BV.runKernel(s.q1x,r)}});const lr=(0,u.op)({dropout_:
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
function(n,t,e,r){const o=(0,a._1)(n,"x","dropout");if(h.hu("float32"===o.dtype,(()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${o.dtype} tensor instead.`)),h.hu(t>=0&&t<1,(()=>`rate must be a float in the range [0, 1), but got ${t}.`)),0===t)return n instanceof $t.es?o.clone():o;const i=
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
function(n,t){if(null==t)return n.shape.slice();if(h.cO(n.shape,t))return t;if(n.shape.length===t.length){const e=[];for(let r=0;r<n.shape.length;r++)null==t[r]&&null!=n.shape[r]?e.push(n.shape[r]):e.push(t[r]);return e}return t}(o,e),s=1-t,u=(0,bn.h)(Gn((0,f.I)(ie(i,0,1,"float32",r),s)),s);return(0,M.d)(o,u)}});
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
function fr(n){return Math.floor(Math.pow(2,Math.ceil(Math.log(n)/Math.log(2))))}function hr(n,t,e){const r=1-n%2,o=new Float32Array(n);for(let i=0;i<n;++i){const s=2*Math.PI*i/(n+r-1);o[i]=t-e*Math.cos(s)}return We(o,"float32")}const dr=
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
async function(n,t,e=1){const r=(0,a._1)(n,"predictions","inTopK"),o=(0,a._1)(t,"targets","inTopK");(0,h.hu)(r.rank>1,(()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`)),(0,h.hu)(r.rank-1===o.rank,(()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${o.rank}`)),(0,h.k5)(r.shape.slice(0,r.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const i=r.shape[r.shape.length-1];(0,h.hu)(e>0&&e<=i,(()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${i}), but got ${e}`));const s=await r.data(),u=await o.data(),[c,l]=[s.length/i,i],f=(0,h.WP)("bool",c);for(let n=0;n<c;n++){const t=n*l,r=s.subarray(t,t+l),o=[];for(let n=0;n<r.length;n++)o.push({value:r[n],index:n});o.sort(((n,t)=>t.value-n.value)),f[n]=0;for(let t=0;t<e;t++)if(o[t].index===u[n]){f[n]=1;break}}return n!==r&&r.dispose(),t!==o&&o.dispose(),(0,Le.X)(f,o.shape,"bool")};const pr=(0,u.op)({conv2DBackpropFilter_:
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
function(n,t,e,r,o,a="NHWC",u){let c=n;3===n.rank&&(c=(0,$.X)(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;3===l.rank&&(l=(0,$.X)(t,[1,t.shape[0],t.shape[1],t.shape[2]])),h.hu(4===c.rank,(()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${c.shape}.`)),h.hu(4===l.rank,(()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`)),h.hu(4===e.length,(()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`));const f="NHWC"===a?c.shape[3]:c.shape[1],d="NHWC"===a?l.shape[3]:l.shape[1];h.hu(f===e[2],(()=>`Error in conv2dDerFilter: depth of input ${f}) must match input depth in filter (${e[2]}.`)),h.hu(d===e[3],(()=>`Error in conv2dDerFilter: depth of dy (${d}) must match output depth for filter (${e[3]}).`)),x.m("conv2dDerFilter",o,u);const p={x:c,dy:l},m={strides:r,pad:o,dataFormat:a,dimRoundingMode:u,filterShape:e};return i.BV.runKernel(s.wUP,p,m)}});var mr=e(19323);const gr=(0,u.op)({fusedConv2d_:
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
function({x:n,filter:t,strides:e,pad:r,dataFormat:o="NHWC",dilations:u=[1,1],dimRoundingMode:c,bias:l,activation:d="linear",preluActivationWeights:p,leakyreluAlpha:m}){if(d=d||"linear",!1===(0,mr.uy)(i.BV.state.gradientDepth,d)){h.hu("NHWC"===o,(()=>`Error in fused conv2d: got dataFormat of ${o} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`));let i=nn(n,t,e,r,o,u,c);return null!=l&&(i=(0,f.I)(i,l)),(0,mr.QH)(i,d,p,m)}const g=(0,a._1)(n,"x","conv2d","float32"),b=(0,a._1)(t,"filter","conv2d","float32");let y=g,w=!1;3===g.rank&&(w=!0,y=(0,$.X)(g,[1,g.shape[0],g.shape[1],g.shape[2]])),h.hu(4===y.rank,(()=>`Error in fused conv2d: input must be rank 4, but got rank ${y.rank}.`)),h.hu(4===b.rank,(()=>`Error in fused conv2d: filter must be rank 4, but got rank ${b.rank}.`)),x.m("fused conv2d",r,c);const k="NHWC"===o?y.shape[3]:y.shape[1];h.hu(b.shape[2]===k,(()=>`Error in conv2d: depth of input (${k}) must match input depth for filter ${b.shape[2]}.`)),h.hu(x.jT(e,u),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${u}'`));const S=x.Ix(y.shape,b.shape,e,u,r,c);let _,E;if(null!=l&&(_=(0,a._1)(l,"bias","fused conv2d"),[_]=(0,v.makeTypesMatch)(_,g),"NHWC"===o?yn.assertAndGetBroadcastShape(S.outShape,_.shape):(h.hu(_.shape.length<=1,(()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${_.shape.length}.`)),h.hu(0===_.shape.length||_.shape[0]===S.outChannels||1===_.shape[0],(()=>`Error in fused conv2d: bias shape (${_.shape}) is not compatible with the number of output channels (${S.outChannels})`)))),null!=p){const n=p.shape;if(h.hu(n.length<=1||3===n.length,(()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${n.length}.`)),1===n.length)h.hu(1===n[0]||n[0]===S.outChannels,(()=>`Error in fused conv2d: PReLU activation weights (${n}) is not compatible with the number of output channels (${S.outChannels}).`));else if(3===n.length)try{yn.assertAndGetBroadcastShape(n,S.outShape)}catch(t){const e=`Error in fused conv2d: PReLU activation weights (${n}) is not compatible with the output shape of the conv2d (${S.outShape}).`;throw Error(e)}E=(0,a._1)(p,"prelu weights","fused conv2d")}const B=(n,t)=>{h.hu("NHWC"===o,(()=>`Error in gradient of fused conv2D: got dataFormat of ${o} but only NHWC is currently supported.`));const[i,s,a,c]=t,l=(0,mr.Fr)(n,a,d);h.hu(x.I0(u),(()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${u}'`));const f=[en(s.shape,l,i,e,r),pr(s,l,i.shape,e,r)];if(null!=c){const n=(0,mr.pf)(c,l);f.push(n)}return f},A={x:y,filter:b,bias:_,preluActivationWeights:E},I={strides:e,pad:r,dataFormat:o,dilations:u,dimRoundingMode:c,activation:d,leakyreluAlpha:m};if(null==l){const n=(0,it.cb)(((n,t,e)=>{let r=i.BV.runKernel(s._V0,A,I);return e([t,n,r]),w&&(r=(0,$.X)(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:B}}));return n(y,b)}{const n=(0,it.cb)(((n,t,e,r)=>{let o=i.BV.runKernel(s._V0,A,I);return r([t,n,o,e]),w&&(o=(0,$.X)(o,[o.shape[1],o.shape[2],o.shape[3]])),{value:o,gradFunc:B}}));return n(y,b,_)}}});const br=(0,u.op)({depthwiseConv2dNativeBackpropFilter_:
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
function(n,t,e,r,o,a=[1,1],u){let c=n;3===n.rank&&(c=(0,$.X)(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let l=t;3===l.rank&&(l=(0,$.X)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const f={x:c,dy:l},h={strides:r,pad:o,dimRoundingMode:u,dilations:a,filterShape:e};return i.BV.runKernel(s.sL$,f,h)}});const yr=(0,u.op)({depthwiseConv2dNativeBackpropInput_:
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
function(n,t,e,r,o,a=[1,1],u){let c=t,l=!1;3===t.rank&&(l=!0,c=(0,$.X)(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const f={dy:c,filter:e},h={strides:r,pad:o,dimRoundingMode:u,dilations:a,inputShape:n},d=i.BV.runKernel(s.y7R,f,h);return l?(0,$.X)(d,[d.shape[1],d.shape[2],d.shape[3]]):d}});const wr=(0,u.op)({fusedDepthwiseConv2d_:
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
function({x:n,filter:t,strides:e,pad:r,dataFormat:o="NHWC",dilations:u=[1,1],dimRoundingMode:c,bias:l,activation:d="linear",preluActivationWeights:p,leakyreluAlpha:m}){if(!1===(0,mr.uy)(i.BV.state.gradientDepth,d)){let i=pn(n,t,e,r,o,u,c);return null!=l&&(i=(0,f.I)(i,l)),(0,mr.QH)(i,d,p,m)}const g=(0,a._1)(n,"x","depthwiseConv2d","float32"),b=(0,a._1)(t,"filter","depthwiseConv2d","float32");let y=g,w=!1;3===g.rank&&(w=!0,y=(0,$.X)(g,[1,g.shape[0],g.shape[1],g.shape[2]])),h.hu(4===y.rank,(()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${y.rank}.`)),h.hu(4===b.rank,(()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${b.rank}.`)),h.hu(y.shape[3]===b.shape[2],(()=>`Error in fused depthwiseConv2d: number of input channels (${y.shape[3]}) must match the inChannels dimension in filter ${b.shape[2]}.`)),null==u&&(u=[1,1]),h.hu(x.jT(e,u),(()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${e} and dilations '${u}'`)),x.m("fused depthwiseConv2d",r,c);const k=x.Ix(y.shape,b.shape,e,u,r,c,!0);let S,_;null!=l&&(S=(0,a._1)(l,"bias","fused conv2d"),[S]=(0,v.makeTypesMatch)(S,g),yn.assertAndGetBroadcastShape(k.outShape,S.shape)),null!=p&&(_=(0,a._1)(p,"prelu weights","fused depthwiseConv2d"));const E=(n,t)=>{h.hu(x.I0(u),(()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${u}'`));const[o,i,s,a]=t,l=(0,mr.Fr)(n,s,d),f=yr(i.shape,l,o,e,r,u,c),p=br(i,l,o.shape,e,r,u,c);if(null!=a){return[f,p,(0,mr.pf)(S,l)]}return[f,p]},B={x:y,filter:b,bias:S,preluActivationWeights:_},A={strides:e,pad:r,dataFormat:o,dilations:u,dimRoundingMode:c,activation:d,leakyreluAlpha:m};if(null==l){const n=(0,it.cb)(((n,t,e)=>{let r=i.BV.runKernel(s.luS,B,A);return e([t,n,r]),w&&(r=(0,$.X)(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:E}}));return n(y,b)}{const n=(0,it.cb)(((n,t,e,r)=>{let o=i.BV.runKernel(s.luS,B,A);return r([t,n,o,e]),w&&(o=(0,$.X)(o,[o.shape[1],o.shape[2],o.shape[3]])),{value:o,gradFunc:E}}));return n(y,b,S)}}});const kr=(0,u.op)({fusedMatMul_:
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
function({a:n,b:t,transposeA:e=!1,transposeB:r=!1,bias:o,activation:u="linear",preluActivationWeights:c,leakyreluAlpha:l=.2}){if(!1===(0,mr.uy)(i.BV.state.gradientDepth,u)){let i=(0,N.O)(n,t,e,r);return null!=o&&(i=(0,f.I)(i,o)),(0,mr.QH)(i,u,c,l)}let d=(0,a._1)(n,"a","fused matMul"),p=(0,a._1)(t,"b","fused matMul");[d,p]=(0,v.makeTypesMatch)(d,p);const m=e?d.shape[d.rank-2]:d.shape[d.rank-1],g=r?p.shape[p.rank-1]:p.shape[p.rank-2],b=e?d.shape[d.rank-1]:d.shape[d.rank-2],y=r?p.shape[p.rank-2]:p.shape[p.rank-1],w=d.shape.slice(0,-2),k=p.shape.slice(0,-2),S=h.NA(w),_=h.NA(k);h.hu(m===g,(()=>`Error in fused matMul: inner shapes (${m}) and (${g}) of Tensors with shapes ${d.shape} and ${p.shape} and transposeA=${e} and transposeB=${r} must match.`));const E=yn.assertAndGetBroadcastShape(d.shape.slice(0,-2),p.shape.slice(0,-2)).concat([b,y]),x=e?(0,$.X)(d,[S,m,b]):(0,$.X)(d,[S,b,m]),B=r?(0,$.X)(p,[_,y,g]):(0,$.X)(p,[_,g,y]);let A,I;null!=o&&(A=(0,a._1)(o,"bias","fused matMul"),[A]=(0,v.makeTypesMatch)(A,d),yn.assertAndGetBroadcastShape(E,A.shape)),null!=c&&(I=(0,a._1)(c,"prelu weights","fused matMul"));const T=(n,t)=>{const[i,s,a,c]=t,l=(0,mr.Fr)((0,$.X)(n,a.shape),a,u);let f,h;if(e||r?!e&&r?(f=(0,N.O)(l,s,!1,!1),h=(0,N.O)(l,i,!0,!1)):e&&!r?(f=(0,N.O)(s,l,!1,!0),h=(0,N.O)(i,l,!1,!1)):(f=(0,N.O)(s,l,!0,!0),h=(0,N.O)(l,i,!0,!0)):(f=(0,N.O)(l,s,!1,!0),h=(0,N.O)(i,l,!0,!1)),null!=o){return[f,h,(0,mr.pf)(c,l)]}return[f,h]},M={a:x,b:B,bias:A,preluActivationWeights:I},D={transposeA:e,transposeB:r,activation:u,leakyreluAlpha:l};if(null==o){const n=(0,it.cb)(((n,t,e)=>{const r=i.BV.runKernel(s.usg,M,D);return e([n,t,r]),{value:(0,$.X)(r,E),gradFunc:T}}));return n(x,B)}{const n=(0,it.cb)(((n,t,e,r)=>{const o=i.BV.runKernel(s.usg,M,D);return r([n,t,o,e]),{value:(0,$.X)(o,E),gradFunc:T}}));return n(x,B,A)}}});const vr=(0,u.op)({hammingWindow_:
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
function(n){return hr(n,.54,.46)}});const Sr=(0,u.op)({hannWindow_:
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
function(n){return hr(n,.5,.5)}});const _r=(0,u.op)({frame_:
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
function(n,t,e,r=!1,o=0){let i=0;const s=[];for(;i+t<=n.size;)s.push(R(n,i,t)),i+=e;if(r)for(;i<n.size;){const r=i+t-n.size,a=T([R(n,i,t-r),(0,H.h)([r],o)]);s.push(a),i+=e}return 0===s.length?Ge([],[0,t]):(0,$.X)(T(s),[s.length,t])}});const Er=(0,u.op)({stft_:
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
function(n,t,e,r,o=Sr){null==r&&(r=fr(t));const i=_r(n,t,e),s=(0,M.d)(i,o(t));return De(s,r)}});const xr=(0,u.op)({cropAndResize_:
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
function(n,t,e,r,o="bilinear",u=0){const c=(0,a._1)(n,"image","cropAndResize"),l=(0,a._1)(t,"boxes","cropAndResize","float32"),f=(0,a._1)(e,"boxInd","cropAndResize","int32"),d=l.shape[0];h.hu(4===c.rank,(()=>`Error in cropAndResize: image must be rank 4,but got rank ${c.rank}.`)),h.hu(2===l.rank&&4===l.shape[1],(()=>`Error in cropAndResize: boxes must be have size [${d},4] but had shape ${l.shape}.`)),h.hu(1===f.rank&&f.shape[0]===d,(()=>`Error in cropAndResize: boxInd must be have size [${d}] but had shape ${l.shape}.`)),h.hu(2===r.length,(()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`)),h.hu(r[0]>=1&&r[1]>=1,(()=>`cropSize must be atleast [1,1], but was ${r}`)),h.hu("bilinear"===o||"nearest"===o,(()=>`method must be bilinear or nearest, but was ${o}`));const p={image:c,boxes:l,boxInd:f},m={method:o,extrapolationValue:u,cropSize:r};return i.BV.runKernel(s.VcC,p,m)}});const $r=(0,u.op)({flipLeftRight_:
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
function(n){const t=(0,a._1)(n,"image","flipLeftRight","float32");h.hu(4===t.rank,(()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`));const e={image:t};return i.BV.runKernel(s.Uyb,e,{})}});const Br=(0,u.op)({grayscaleToRGB_:
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
function(n){const t=(0,a._1)(n,"image","grayscaleToRGB"),e=t.rank-1,r=t.shape[e];h.hu(t.rank>=2,(()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`)),h.hu(1===r,(()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`));const o=new Array(t.rank);return o.fill(1,0,e),o[e]=3,zn(t,o)}});const Ar=(0,u.op)({rotateWithOffset_:
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
function(n,t,e=0,r=.5){const o=(0,a._1)(n,"image","rotateWithOffset","float32");h.hu(4===o.rank,(()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`));const u={image:o},c={radians:t,fillValue:e,center:r};return i.BV.runKernel(s.b9H,u,c)}});
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
function Ir(n,t,e,r,o,i){null==r&&(r=.5),null==o&&(o=Number.NEGATIVE_INFINITY),null==i&&(i=0);const s=n.shape[0];return e=Math.min(e,s),h.hu(0<=r&&r<=1,(()=>`iouThreshold must be in [0, 1], but was '${r}'`)),h.hu(2===n.rank,(()=>`boxes must be a 2D tensor, but was of rank '${n.rank}'`)),h.hu(4===n.shape[1],(()=>`boxes must have 4 columns, but 2nd dimension was ${n.shape[1]}`)),h.hu(1===t.rank,(()=>"scores must be a 1D tensor")),h.hu(t.shape[0]===s,(()=>`scores has incompatible shape with boxes. Expected ${s}, but was ${t.shape[0]}`)),h.hu(0<=i&&i<=1,(()=>`softNmsSigma must be in [0, 1], but was '${i}'`)),{maxOutputSize:e,iouThreshold:r,scoreThreshold:o,softNmsSigma:i}}const Tr=(0,u.op)({nonMaxSuppression_:
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
function(n,t,e,r=.5,o=Number.NEGATIVE_INFINITY){const u=(0,a._1)(n,"boxes","nonMaxSuppression","float32"),c=(0,a._1)(t,"scores","nonMaxSuppression","float32"),l=Ir(u,c,e,r,o),f={maxOutputSize:e=l.maxOutputSize,iouThreshold:r=l.iouThreshold,scoreThreshold:o=l.scoreThreshold};return i.BV.runKernel(s.uv1,{boxes:u,scores:c},f)}});var Nr=e(83337);const Mr=
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
async function(n,t,e,r=.5,o=Number.NEGATIVE_INFINITY){const i=(0,a._1)(n,"boxes","nonMaxSuppressionAsync"),s=(0,a._1)(t,"scores","nonMaxSuppressionAsync"),u=Ir(i,s,e,r,o);e=u.maxOutputSize,r=u.iouThreshold,o=u.scoreThreshold;const c=await Promise.all([i.data(),s.data()]),l=c[0],f=c[1],{selectedIndices:h}=(0,Nr.GP)(l,f,e,r,o);return i!==n&&i.dispose(),s!==t&&s.dispose(),We(h,"int32")};const Dr=(0,u.op)({nonMaxSuppressionWithScore_:
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
function(n,t,e,r=.5,o=Number.NEGATIVE_INFINITY,u=0){const c=(0,a._1)(n,"boxes","nonMaxSuppression"),l=(0,a._1)(t,"scores","nonMaxSuppression"),f=Ir(c,l,e,r,o,u),h={boxes:c,scores:l},d={maxOutputSize:e=f.maxOutputSize,iouThreshold:r=f.iouThreshold,scoreThreshold:o=f.scoreThreshold,softNmsSigma:u=f.softNmsSigma},p=i.BV.runKernel(s.W0H,h,d);return{selectedIndices:p[0],selectedScores:p[1]}}});const Rr=
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
async function(n,t,e,r=.5,o=Number.NEGATIVE_INFINITY,i=0){const s=(0,a._1)(n,"boxes","nonMaxSuppressionAsync"),u=(0,a._1)(t,"scores","nonMaxSuppressionAsync"),c=Ir(s,u,e,r,o,i);e=c.maxOutputSize,r=c.iouThreshold,o=c.scoreThreshold,i=c.softNmsSigma;const l=await Promise.all([s.data(),u.data()]),f=l[0],h=l[1],{selectedIndices:d,selectedScores:p}=(0,Nr.pA)(f,h,e,r,o,i);return s!==n&&s.dispose(),u!==t&&u.dispose(),{selectedIndices:We(d,"int32"),selectedScores:We(p)}};const Vr=(0,u.op)({nonMaxSuppressionPadded_:
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
function(n,t,e,r=.5,o=Number.NEGATIVE_INFINITY,u=!1){const c=(0,a._1)(n,"boxes","nonMaxSuppression"),l=(0,a._1)(t,"scores","nonMaxSuppression"),f=Ir(c,l,e,r,o,null),h={boxes:c,scores:l},d={maxOutputSize:f.maxOutputSize,iouThreshold:f.iouThreshold,scoreThreshold:f.scoreThreshold,padToMaxOutputSize:u},p=i.BV.runKernel(s.cye,h,d);return{selectedIndices:p[0],validOutputs:p[1]}}});const Cr=
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
async function(n,t,e,r=.5,o=Number.NEGATIVE_INFINITY,i=!1){const s=(0,a._1)(n,"boxes","nonMaxSuppressionAsync"),u=(0,a._1)(t,"scores","nonMaxSuppressionAsync"),c=Ir(s,u,e,r,o,null),l=c.maxOutputSize,f=c.iouThreshold,h=c.scoreThreshold,[d,p]=await Promise.all([s.data(),u.data()]),{selectedIndices:m,validOutputs:g}=(0,Nr.qP)(d,p,l,f,h,i);return s!==n&&s.dispose(),u!==t&&u.dispose(),{selectedIndices:We(m,"int32"),validOutputs:(0,Nn.i)(g,"int32")}};const Fr=(0,u.op)({resizeBilinear_:
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
function(n,t,e=!1,r=!1){const o=(0,a._1)(n,"images","resizeBilinear");h.hu(3===o.rank||4===o.rank,(()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${o.rank}.`)),h.hu(2===t.length,(()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`)),h.hu(!1===r||!1===e,(()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false."));let u=o,c=!1;3===o.rank&&(c=!0,u=(0,$.X)(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const[]=t,l={images:u},f={alignCorners:e,halfPixelCenters:r,size:t},d=i.BV.runKernel(s._Yw,l,f);return c?(0,$.X)(d,[d.shape[1],d.shape[2],d.shape[3]]):d}});const Or=(0,u.op)({resizeNearestNeighbor_:
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
function(n,t,e=!1,r=!1){const o=(0,a._1)(n,"images","resizeNearestNeighbor");h.hu(3===o.rank||4===o.rank,(()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${o.rank}.`)),h.hu(2===t.length,(()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`)),h.hu("float32"===o.dtype||"int32"===o.dtype,(()=>"`images` must have `int32` or `float32` as dtype")),h.hu(!1===r||!1===e,(()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false."));let u=o,c=!1;3===o.rank&&(c=!0,u=(0,$.X)(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const[]=t,l={images:u},f={alignCorners:e,halfPixelCenters:r,size:t},d=i.BV.runKernel(s.dpD,l,f);return c?(0,$.X)(d,[d.shape[1],d.shape[2],d.shape[3]]):d}});const Pr=(0,u.op)({threshold_:
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
function(n,t="binary",e=!1,r=.5){const o=(0,a._1)(n,"image","threshold"),i=o.shape[0]*o.shape[1];let s,u,c,l,d=(0,M.d)(We([r]),255);if(h.hu(3===o.rank,(()=>`Error in threshold: image must be rank 3,but got rank ${o.rank}.`)),h.hu(3===o.shape[2]||1===o.shape[2],(()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${o.shape[2]}.`)),h.hu("int32"===o.dtype||"float32"===o.dtype,(()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${o.dtype}.`)),h.hu("otsu"===t||"binary"===t,(()=>`Method must be binary or otsu, but was ${t}`)),3===o.shape[2]){[s,u,c]=Me(o,[1,1,1],-1);const n=(0,M.d)(s,.2989),t=(0,M.d)(u,.587),e=(0,M.d)(c,.114);l=(0,f.I)((0,f.I)(n,t),e)}else l=n;if("otsu"===t){d=function(n,t){let e,r,o,i,s,a,u=We([-1]),c=We([0]),l=We([0]);for(let h=0;h<n.size-1;h++){e=R(n,0,h+1),r=R(n,h+1),s=(0,bn.h)((0,Rn.S)(e),t),a=(0,bn.h)((0,Rn.S)(r),t);const d=(0,Rn.S)((0,M.d)(e,se(0,e.size)));o=(0,bn.h)(d,(0,Rn.S)(e));const p=(0,H.h)(r.shape,e.size),m=(0,f.I)(se(0,r.size),p),g=(0,M.d)(r,m);i=(0,bn.h)((0,Rn.S)(g),(0,Rn.S)(r));const b=(0,ct.l)(o,i),y=(0,ct.l)(o,i),w=(0,M.d)(s,a);l=(0,M.d)((0,M.d)(w,b),y);const k=Kn(l,c);c=kn(k,l,c),u=kn(k,We([h]),u)}return u}(W((0,E.p)(ge(l),"int32"),(0,Le.X)([]),256),i)}const p=e?nt(l,d):Kn(l,d);return(0,E.p)((0,M.d)(p,255),"int32")}});const Lr=(0,u.op)({transform_:
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
function(n,t,e="nearest",r="constant",o=0,u){const c=(0,a._1)(n,"image","transform","float32"),l=(0,a._1)(t,"transforms","transform","float32");h.hu(4===c.rank,(()=>`Error in transform: image must be rank 4,but got rank ${c.rank}.`)),h.hu(2===l.rank&&(l.shape[0]===c.shape[0]||1===l.shape[0])&&8===l.shape[1],(()=>"Error in transform: Input transform should be batch x 8 or 1 x 8")),h.hu(null==u||2===u.length,(()=>`Error in transform: outputShape must be [height, width] or null, but got ${u}.`));const f={image:c,transforms:l},d={interpolation:e,fillMode:r,fillValue:o,outputShape:u};return i.BV.runKernel(s.wx7,f,d)}});const zr=(0,u.op)({bandPart_:
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
function(n,t,e){(0,h.hu)(t%1==0,(()=>`bandPart(): numLower must be an integer, got ${t}.`)),(0,h.hu)(e%1==0,(()=>`bandPart(): numUpper must be an integer, got ${e}.`));const r=(0,a._1)(n,"a","bandPart");(0,h.hu)(r.rank>=2,(()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`));const o=r.shape,[i,s]=r.shape.slice(-2);if(!(t<=i))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${i}).`);if(!(e<=s))throw new Error(`bandPart(): numUpper (${e}) must not be greater than the number of columns (${s}).`);t<0&&(t=i),e<0&&(e=s);const u=(0,$.X)(se(0,i,1,"int32"),[-1,1]),c=se(0,s,1,"int32"),l=(0,ct.l)(u,c),f=ht(nt(l,(0,Nn.i)(+t,"int32")),Hn(l,(0,Nn.i)(-e,"int32"))),d=Et([i,s],r.dtype);return(0,$.X)(Ce(Ye((0,$.X)(r,[-1,i,s])).map((n=>kn(f,n,d)))),o)}});const Wr=(0,u.op)({gramSchmidt_:
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
function(n){let t;if(Array.isArray(n)){t=!1,(0,h.hu)(null!=n&&n.length>0,(()=>"Gram-Schmidt process: input must not be null, undefined, or empty"));const e=n[0].shape[0];for(let t=1;t<n.length;++t)(0,h.hu)(n[t].shape[0]===e,(()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${n[t].shape[0]} vs. ${e})`))}else t=!0,n=Me(n,n.shape[0],0).map((n=>Ve(n,[0])));(0,h.hu)(n.length<=n[0].shape[0],(()=>`Gram-Schmidt: Number of vectors (${n.length}) exceeds number of dimensions (${n[0].shape[0]}).`));const e=[],r=n;for(let t=0;t<n.length;++t)e.push(i.BV.tidy((()=>{let n=r[t];if(t>0)for(let r=0;r<t;++r){const t=(0,M.d)((0,Rn.S)((0,M.d)(e[r],n)),e[r]);n=(0,ct.l)(n,t)}return(0,bn.h)(n,Cn(n,"euclidean"))})));return t?Ce(e,0):e}});var Gr=e(4368);function Ur(n,t=!1){return i.BV.tidy((()=>{(0,h.hu)(2===n.shape.length,(()=>`qr2d() requires a 2D Tensor, but got a ${n.shape.length}D Tensor.`));const e=n.shape[0],r=n.shape[1];let o=Wn(e),s=(0,I.d)(n);const a=Ge([[1]],[1,1]);let u=(0,I.d)(a);const c=e>=r?r:e;for(let n=0;n<c;++n){const t=s,c=u,l=o;[u,s,o]=i.BV.tidy((()=>{const t=R(s,[n,n],[e-n,1]),i=Cn(t),c=R(s,[n,n],[1,1]),l=kn(Kn(c,0),Ge([[-1]]),Ge([[1]])),f=(0,ct.l)(c,(0,M.d)(l,i)),h=(0,bn.h)(t,f);u=1===h.shape[0]?(0,I.d)(a):T([a,R(h,[1,0],[h.shape[0]-1,h.shape[1]])],0);const d=(0,st.W)((0,bn.h)((0,N.O)(l,f),i)),p=R(s,[n,0],[e-n,r]),m=(0,M.d)(d,u),g=(0,or.p)(u);if(0===n)s=(0,ct.l)(p,(0,N.O)(m,(0,N.O)(g,p)));else{const t=(0,ct.l)(p,(0,N.O)(m,(0,N.O)(g,p)));s=T([R(s,[0,0],[n,r]),t],0)}const b=(0,or.p)(m),y=R(o,[0,n],[e,o.shape[1]-n]);if(0===n)o=(0,ct.l)(y,(0,N.O)((0,N.O)(y,u),b));else{const t=(0,ct.l)(y,(0,N.O)((0,N.O)(y,u),b));o=T([R(o,[0,0],[e,n]),t],1)}return[u,s,o]})),(0,Gr.B9)([t,c,l])}return!t&&e>r&&(o=R(o,[0,0],[e,r]),s=R(s,[0,0],[r,r])),[o,s]}))}const qr=(0,u.op)({qr_:
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
function(n,t=!1){if((0,h.hu)(n.rank>=2,(()=>`qr() requires input tensor to have a rank >= 2, but got rank ${n.rank}`)),2===n.rank)return Ur(n,t);{const e=n.shape.slice(0,n.shape.length-2).reduce(((n,t)=>n*t)),r=Ye((0,$.X)(n,[e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),o=[],i=[];r.forEach((n=>{const[e,r]=Ur(n,t);o.push(e),i.push(r)}));return[(0,$.X)(Ce(o,0),n.shape),(0,$.X)(Ce(i,0),n.shape)]}}});var Kr=e(49876);const Hr=(0,u.op)({computeWeightedLoss_:function(n,t,e=Kr.I.SUM_BY_NONZERO_WEIGHTS){const r=(0,a._1)(n,"losses","computeWeightedLoss");let o=null;null!=t&&(o=(0,a._1)(t,"weights","computeWeightedLoss"));const i=null==o?r:(0,M.d)(r,o);if(e===Kr.I.NONE)return i;if(e===Kr.I.SUM)return(0,Rn.S)(i);if(e===Kr.I.MEAN){if(null==o)return _t(i);{const n=r.size/o.size,t=(0,bn.h)((0,Rn.S)(i),(0,Rn.S)(o));return n>1?(0,bn.h)(t,(0,Nn.i)(n)):t}}if(e===Kr.I.SUM_BY_NONZERO_WEIGHTS){if(null==o)return(0,bn.h)((0,Rn.S)(i),(0,Nn.i)(r.size));{const n=(0,M.d)(o,xt(r.shape)),t=(0,E.p)((0,Rn.S)(Rt(n,(0,Nn.i)(0))),"float32");return(0,bn.h)((0,Rn.S)(i),t)}}throw Error(`Unknown reduction: ${e}`)}});const Xr=(0,u.op)({absoluteDifference_:
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
function(n,t,e,r=Kr.I.SUM_BY_NONZERO_WEIGHTS){const i=(0,a._1)(n,"labels","absoluteDifference"),s=(0,a._1)(t,"predictions","absoluteDifference");let u=null;null!=e&&(u=(0,a._1)(e,"weights","absoluteDifference")),(0,h.k5)(i.shape,s.shape,"Error in absoluteDifference: ");const c=(0,o.W)((0,ct.l)(i,s));return Hr(c,u,r)}});const jr=(0,u.op)({cosineDistance_:function(n,t,e,r,o=Kr.I.SUM_BY_NONZERO_WEIGHTS){const i=(0,a._1)(n,"labels","cosineDistance"),s=(0,a._1)(t,"predictions","cosineDistance");let u=null;null!=r&&(u=(0,a._1)(r,"weights","cosineDistance")),(0,h.k5)(i.shape,s.shape,"Error in cosineDistance: ");const c=(0,Nn.i)(1),l=(0,ct.l)(c,(0,Rn.S)((0,M.d)(i,s),e,!0));return Hr(l,u,o)}});const Zr=(0,u.op)({hingeLoss_:function(n,t,e,r=Kr.I.SUM_BY_NONZERO_WEIGHTS){let o=(0,a._1)(n,"labels","hingeLoss");const i=(0,a._1)(t,"predictions","hingeLoss");let s=null;null!=e&&(s=(0,a._1)(e,"weights","hingeLoss")),(0,h.k5)(o.shape,i.shape,"Error in hingeLoss: ");const u=(0,Nn.i)(1);o=(0,ct.l)((0,M.d)((0,Nn.i)(2),o),u);const c=(0,ce.U)((0,ct.l)(u,(0,M.d)(o,i)));return Hr(c,s,r)}});const Qr=(0,u.op)({huberLoss_:
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
function(n,t,e,r=1,i=Kr.I.SUM_BY_NONZERO_WEIGHTS){const s=(0,a._1)(n,"labels","huberLoss"),u=(0,a._1)(t,"predictions","huberLoss");let c=null;null!=e&&(c=(0,a._1)(e,"weights","huberLoss")),(0,h.k5)(s.shape,u.shape,"Error in huberLoss: ");const l=(0,Nn.i)(r),d=(0,o.W)((0,ct.l)(u,s)),p=At(d,l),m=(0,ct.l)(d,p),g=(0,f.I)((0,M.d)((0,Nn.i)(.5),(0,Dn.h)(p)),(0,M.d)(l,m));return Hr(g,c,i)}});const Yr=(0,u.op)({logLoss_:
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
function(n,t,e,r=1e-7,o=Kr.I.SUM_BY_NONZERO_WEIGHTS){const i=(0,a._1)(n,"labels","logLoss"),s=(0,a._1)(t,"predictions","logLoss");let u=null;null!=e&&(u=(0,a._1)(e,"weights","logLoss")),(0,h.k5)(i.shape,s.shape,"Error in logLoss: ");const c=(0,Nn.i)(1),l=(0,Nn.i)(r),d=(0,st.W)((0,M.d)(i,rt((0,f.I)(s,l)))),p=(0,M.d)((0,ct.l)(c,i),rt((0,f.I)((0,ct.l)(c,s),l))),m=(0,ct.l)(d,p);return Hr(m,u,o)}});const Jr=(0,u.op)({meanSquaredError_:
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
function(n,t,e,r=Kr.I.SUM_BY_NONZERO_WEIGHTS){const o=(0,a._1)(n,"labels","meanSquaredError"),i=(0,a._1)(t,"predictions","meanSquaredError");let s=null;null!=e&&(s=(0,a._1)(e,"weights","meanSquaredError")),(0,h.k5)(o.shape,i.shape,"Error in meanSquaredError: ");const u=Re(o,i);return Hr(u,s,r)}});const no=(0,u.op)({sigmoidCrossEntropy_:function(n,t,e,r=0,i=Kr.I.SUM_BY_NONZERO_WEIGHTS){let s=(0,a._1)(n,"multiClassLabels","sigmoidCrossEntropy");const u=(0,a._1)(t,"logits","sigmoidCrossEntropy");let c=null;if(null!=e&&(c=(0,a._1)(e,"weights","sigmoidCrossEntropy")),(0,h.k5)(s.shape,u.shape,"Error in sigmoidCrossEntropy: "),r>0){const n=(0,Nn.i)(r),t=(0,Nn.i)(1),e=(0,Nn.i)(.5);s=(0,f.I)((0,M.d)(s,(0,ct.l)(t,n)),(0,M.d)(e,n))}const l=
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
function(n,t){const e=(0,a._1)(n,"labels","sigmoidCrossEntropyWithLogits"),r=(0,a._1)(t,"logits","sigmoidCrossEntropyWithLogits");(0,h.k5)(e.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const i=(0,ce.U)(r),s=(0,M.d)(r,e),u=ot(On((0,st.W)((0,o.W)(r))));return(0,f.I)((0,ct.l)(i,s),u)}(s,u);return Hr(l,c,i)}});const to=(0,u.op)({softmaxCrossEntropy_:function(n,t,e,r=0,o=Kr.I.SUM_BY_NONZERO_WEIGHTS){let i=(0,a._1)(n,"onehotLabels","softmaxCrossEntropy");const s=(0,a._1)(t,"logits","softmaxCrossEntropy");let u=null;if(null!=e&&(u=(0,a._1)(e,"weights","softmaxCrossEntropy")),(0,h.k5)(i.shape,s.shape,"Error in softmaxCrossEntropy: "),r>0){const n=(0,Nn.i)(r),t=(0,Nn.i)(1),e=(0,Nn.i)(i.shape[1]);i=(0,f.I)((0,M.d)(i,(0,ct.l)(t,n)),(0,bn.h)(n,e))}const c=
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
function(n,t,e=-1){if(-1===e&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${e}`);const r=(0,it.cb)(((n,t,r)=>{const o=ft(t,[e],!0),i=(0,ct.l)((0,E.p)(t,"float32"),o);r([n,i]);const s=(0,st.W)((0,M.d)(i,n));return{value:(0,Rn.S)(s,[e]),gradFunc:(n,t)=>{const[r,o]=t,i=(0,Bn.rv)(n.shape,[e]);return[(0,M.d)((0,$.X)(n,i),(0,ct.l)((0,E.p)(r,"float32"),On(o))),(0,M.d)((0,$.X)(n,i),(0,ct.l)(On(o),(0,E.p)(r,"float32")))]}}}));return r(n,t)}(i,s);return Hr(c,u,o)}});const eo={fft:Ie,ifft:Te,rfft:De,irfft:Ne},ro={hammingWindow:vr,hannWindow:Sr,frame:_r,stft:Er},oo={flipLeftRight:$r,grayscaleToRGB:Br,resizeNearestNeighbor:Or,resizeBilinear:Fr,rotateWithOffset:Ar,cropAndResize:xr,nonMaxSuppression:Tr,nonMaxSuppressionAsync:Mr,nonMaxSuppressionWithScore:Dr,nonMaxSuppressionWithScoreAsync:Rr,nonMaxSuppressionPadded:Vr,nonMaxSuppressionPaddedAsync:Cr,threshold:Pr,transform:Lr},io={bandPart:zr,gramSchmidt:Wr,qr:qr},so={absoluteDifference:Xr,computeWeightedLoss:Hr,cosineDistance:jr,hingeLoss:Zr,huberLoss:Qr,logLoss:Yr,meanSquaredError:Jr,sigmoidCrossEntropy:no,softmaxCrossEntropy:to},ao={sparseFillEmptyRows:(0,u.op)({sparseFillEmptyRows_:
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
function(n,t,e,r){const o=(0,a._1)(n,"indices","sparseFillEmptyRows","int32"),u=(0,a._1)(t,"values","sparseFillEmptyRows"),c=(0,a._1)(e,"denseShape","sparseFillEmptyRows","int32"),l=(0,a._1)(r,"defaultValue","sparseFillEmptyRows",u.dtype);if(2!==o.rank)throw new Error(`Indices should be Tensor2D but received shape\n        ${o.shape}`);if(1!==u.rank)throw new Error(`Values should be Tensor1D but received shape ${u.shape}`);if(1!==c.rank)throw new Error(`Dense shape should be Tensor1D but received shape ${c.shape}`);if(0!==l.rank)throw new Error(`Default value should be a scalar but received shape ${l.shape}`);const f={indices:o,values:u,denseShape:c,defaultValue:l},h=i.BV.runKernel(s.O3z,f);return{outputIndices:h[0],outputValues:h[1],emptyRowIndicator:h[2],reverseIndexMap:h[3]}}}),sparseReshape:(0,u.op)({sparseReshape_:
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
function(n,t,e){const r=(0,a._1)(n,"inputIndices","sparseReshape","int32"),o=(0,a._1)(t,"inputShape","sparseReshape","int32"),u=(0,a._1)(e,"newShape","sparseReshape","int32");if(2!==r.rank)throw new Error(`Input indices should be Tensor2D but received shape\n        ${r.shape}`);if(1!==o.rank)throw new Error(`Input shape should be Tensor1D but received shape ${o.shape}`);if(1!==u.rank)throw new Error(`New shape should be Tensor1D but received shape ${u.shape}`);const c={inputIndices:r,inputShape:o,newShape:u},l=i.BV.runKernel(s.nhH,c);return{outputIndices:l[0],outputShape:l[1]}}}),sparseSegmentMean:(0,u.op)({sparseSegmentMean_:
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
function(n,t,e){const r=(0,a._1)(n,"data","sparseSegmentMean"),o=(0,a._1)(t,"indices","sparseSegmentMean","int32"),u=(0,a._1)(e,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==o.rank)throw new Error(`Indices should be Tensor1D but received shape\n          ${o.shape}`);if(1!==u.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n          ${u.shape}`);const c={data:r,indices:o,segmentIds:u};return i.BV.runKernel(s.w3H,c)}}),sparseSegmentSum:(0,u.op)({sparseSegmentSum_:
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
function(n,t,e){const r=(0,a._1)(n,"data","sparseSegmentSum"),o=(0,a._1)(t,"indices","sparseSegmentSum","int32"),u=(0,a._1)(e,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==o.rank)throw new Error(`Indices should be Tensor1D but received shape\n         ${o.shape}`);if(1!==u.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n         ${u.shape}`);const c={data:r,indices:o,segmentIds:u};return i.BV.runKernel(s.ZjV,c)}})},uo={stringNGrams:(0,u.op)({stringNGrams_:
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
function(n,t,e,r,o,u,c,l){const f=(0,a._1)(n,"data","stringNGrams","string");if("string"!==f.dtype)throw new Error("Data must be of datatype string");if(1!==f.shape.length)throw new Error(`Data must be a vector, saw: ${f.shape}`);const h=(0,a._1)(t,"dataSplits","stringNGrams");if("int32"!==h.dtype)throw new Error("Data splits must be of datatype int32");const d={separator:e,nGramWidths:r,leftPad:o,rightPad:u,padWidth:c,preserveShortSequences:l},p={data:f,dataSplits:h},m=i.BV.runKernel(s._JP,p,d);return{nGrams:m[0],nGramsSplits:m[1]}}}),stringSplit:(0,u.op)({stringSplit_:
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
function(n,t,e=!0){const r=(0,a._1)(n,"input","stringSplit","string"),o=(0,a._1)(t,"delimiter","stringSplit","string");if(1!==r.rank)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(0!==o.rank)throw new Error(`Delimiter should be a scalar but received shape ${o.shape}`);const u={skipEmpty:e},c={input:r,delimiter:o},l=i.BV.runKernel(s.s1s,c,u);return{indices:l[0],values:l[1],shape:l[2]}}}),stringToHashBucketFast:(0,u.op)({stringToHashBucketFast_:
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
function(n,t){const e=(0,a._1)(n,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const o={input:e};return i.BV.runKernel(s.XkS,o,r)}})}},97611:function(n,t,e){e.r(t),e.d(t,{OP_SCOPE_SUFFIX:function(){return r.zvA},abs:function(){return r.WnP},acos:function(){return r.Khb},acosh:function(){return r.__u},add:function(){return r.IHx},addN:function(){return r.QBD},all:function(){return r.$6P},any:function(){return r.YjB},argMax:function(){return r.NqF},argMin:function(){return r.vHJ},asin:function(){return r.ZRM},asinh:function(){return r.VfV},atan:function(){return r.z4N},atan2:function(){return r.fvJ},atanh:function(){return r.C80},avgPool:function(){return r.wS1},avgPool3d:function(){return r.uR5},basicLSTMCell:function(){return r.zEQ},batchNorm:function(){return r.tgs},batchNorm2d:function(){return r.Dxk},batchNorm3d:function(){return r.JY5},batchNorm4d:function(){return r.p3b},batchToSpaceND:function(){return r.E4h},bincount:function(){return r.yE8},booleanMaskAsync:function(){return r.anm},broadcastArgs:function(){return r.XsQ},broadcastTo:function(){return r.UFq},buffer:function(){return r.f3b},cast:function(){return r.pju},ceil:function(){return r.mDi},clipByValue:function(){return r.iUl},clone:function(){return r.d9v},complex:function(){return r.PYB},concat:function(){return r.zoF},concat1d:function(){return r.gME},concat2d:function(){return r.Izb},concat3d:function(){return r.MNy},concat4d:function(){return r.ZaL},conv1d:function(){return r.PAt},conv2d:function(){return r.Tek},conv2dTranspose:function(){return r.bc},conv3d:function(){return r.pdZ},conv3dTranspose:function(){return r.$QV},cos:function(){return r.mCk},cosh:function(){return r.f9Y},cosineWindow:function(){return r.mew},cumprod:function(){return r.$Gn},cumsum:function(){return r.zbp},denseBincount:function(){return r.ppE},depthToSpace:function(){return r.nTT},depthwiseConv2d:function(){return r.B10},diag:function(){return r.Ka3},dilation2d:function(){return r.WmZ},div:function(){return r.hiC},divNoNan:function(){return r.NTj},dot:function(){return r.AKD},dropout:function(){return r.rvX},einsum:function(){return r.WYO},elu:function(){return r.pyx},enclosingPowerOfTwo:function(){return r.GRh},equal:function(){return r.DgJ},erf:function(){return r.qNN},euclideanNorm:function(){return r.d2q},exp:function(){return r.Qqt},expandDims:function(){return r.dt4},expm1:function(){return r.t$B},eye:function(){return r.iyy},fft:function(){return r.kp_},fill:function(){return r.hlL},floor:function(){return r.GWj},floorDiv:function(){return r.qPi},fused:function(){return r.imm},gather:function(){return r.Iqj},gatherND:function(){return r.dbB},greater:function(){return r.pjt},greaterEqual:function(){return r.brS},ifft:function(){return r.Sxn},imag:function(){return r.asL},image:function(){return r.BHj},inTopKAsync:function(){return r.V3u},irfft:function(){return r.wx0},isFinite:function(){return r.xVT},isInf:function(){return r.UWc},isNaN:function(){return r.i2d},leakyRelu:function(){return r.hi7},less:function(){return r.d9m},lessEqual:function(){return r.zN1},linalg:function(){return r.$r2},linspace:function(){return r.SX3},localResponseNormalization:function(){return r.G9k},log:function(){return r.cM7},log1p:function(){return r.Krr},logSigmoid:function(){return r.e_t},logSoftmax:function(){return r.CmS},logSumExp:function(){return r.l_t},logicalAnd:function(){return r.HvI},logicalNot:function(){return r.hJK},logicalOr:function(){return r.K5V},logicalXor:function(){return r.egP},losses:function(){return r.MB5},lowerBound:function(){return r.eab},matMul:function(){return r.OI3},max:function(){return r.Fp7},maxPool:function(){return r._sB},maxPool3d:function(){return r.YQQ},maxPoolWithArgmax:function(){return r.Ip$},maximum:function(){return r.gWQ},mean:function(){return r.J69},meshgrid:function(){return r.ry_},min:function(){return r.VV$},minimum:function(){return r.LTh},mirrorPad:function(){return r.VdP},mod:function(){return r.wQq},moments:function(){return r.Gi7},movingAverage:function(){return r.p_},mul:function(){return r.dC7},multiRNNCell:function(){return r.rq4},multinomial:function(){return r.SJ_},neg:function(){return r.W76},norm:function(){return r.KOy},notEqual:function(){return r.Quu},oneHot:function(){return r.lfX},ones:function(){return r.iUs},onesLike:function(){return r.JpU},op:function(){return r.op},outerProduct:function(){return r.N2O},pad:function(){return r.vku},pad1d:function(){return r.pNR},pad2d:function(){return r.koy},pad3d:function(){return r.t1L},pad4d:function(){return r.lGY},pool:function(){return r.d_R},pow:function(){return r.sQ3},prelu:function(){return r.AL3},print:function(){return r.S0v},prod:function(){return r.WVs},raggedGather:function(){return r.$gW},raggedRange:function(){return r.VT$},raggedTensorToTensor:function(){return r.N89},rand:function(){return r.TN_},randomGamma:function(){return r.wzB},randomNormal:function(){return r.nGf},randomStandardNormal:function(){return r.ruB},randomUniform:function(){return r.LGj},range:function(){return r.w6H},real:function(){return r.kwC},reciprocal:function(){return r.M25},relu:function(){return r.UYe},relu6:function(){return r.btT},reshape:function(){return r.XLQ},reverse:function(){return r.GYS},reverse1d:function(){return r.SDf},reverse2d:function(){return r.diP},reverse3d:function(){return r.sx7},reverse4d:function(){return r.mG2},rfft:function(){return r.QEs},round:function(){return r.NMM},rsqrt:function(){return r.bp0},scalar:function(){return r.iD$},scatterND:function(){return r.snQ},searchSorted:function(){return r.zcT},selu:function(){return r.U8D},separableConv2d:function(){return r.U_I},setdiff1dAsync:function(){return r.ODp},sigmoid:function(){return r.XD2},sign:function(){return r.Xxe},signal:function(){return r.tdS},sin:function(){return r.O$l},sinh:function(){return r.R_K},slice:function(){return r.tPi},slice1d:function(){return r.jZU},slice2d:function(){return r.SmN},slice3d:function(){return r.CnO},slice4d:function(){return r.p0P},softmax:function(){return r.XAC},softplus:function(){return r.Wvh},spaceToBatchND:function(){return r.fBT},sparse:function(){return r.rVs},sparseToDense:function(){return r.ers},spectral:function(){return r.uN7},split:function(){return r.Vl2},sqrt:function(){return r._b3},square:function(){return r.h62},squaredDifference:function(){return r.$i},squeeze:function(){return r.L9e},stack:function(){return r.knu},step:function(){return r.Nbs},stridedSlice:function(){return r.NXj},string:function(){return r.Z_8},sub:function(){return r.luU},sum:function(){return r.Smz},tan:function(){return r.ORZ},tanh:function(){return r.AEp},tensor:function(){return r.XeE},tensor1d:function(){return r.RRF},tensor2d:function(){return r.odF},tensor3d:function(){return r.wOQ},tensor4d:function(){return r.yXz},tensor5d:function(){return r.Bfx},tensor6d:function(){return r.xZs},tile:function(){return r.Gg6},topk:function(){return r.hg7},transpose:function(){return r.p4s},truncatedNormal:function(){return r.Xu6},unique:function(){return r.Two},unsortedSegmentSum:function(){return r.pUJ},unstack:function(){return r.HHK},upperBound:function(){return r.GaM},variable:function(){return r.VD$},where:function(){return r.arb},whereAsync:function(){return r.itS},zeros:function(){return r.lls},zerosLike:function(){return r.P84}});var r=e(4041);
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
 */},33453:function(n,t,e){e.d(t,{s:function(){return a}});var r=e(97097),o=e(29121),i=e(80747),s=e(43740);const a=(0,e(2668).op)({pow_:
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
function(n,t){let e=(0,s._1)(n,"base","pow"),a=(0,s._1)(t,"exp","pow");[e,a]=(0,i.makeTypesMatch)(e,a);const u={a:e,b:a};return r.BV.runKernel(o.pe_,u)}})},98151:function(n,t,e){e.d(t,{A:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({prelu_:
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
function(n,t){const e={x:(0,i._1)(n,"x","prelu"),alpha:(0,i._1)(t,"alpha","prelu")};return r.BV.runKernel(o.o0g,e)}})},29798:function(n,t,e){
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
function r(n,t=!1){console.log(n.toString(t))}e.d(t,{S:function(){return r}})},60766:function(n,t,e){e.d(t,{k:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({real_:
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
function(n){const t={input:(0,i._1)(n,"input","real")};return r.BV.runKernel(o.xJR,t)}})},7409:function(n,t,e){e.d(t,{U:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({relu_:
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
function(n){const t={x:(0,i._1)(n,"x","relu")};return r.BV.runKernel(o.qkr,t)}})},83582:function(n,t,e){e.d(t,{b:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({relu6_:
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
function(n){const t={x:(0,i._1)(n,"x","relu6")};return r.BV.runKernel(o.SbG,t)}})},4968:function(n,t,e){e.d(t,{X:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({reshape_:
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
function(n,t){const e={x:(0,i._1)(n,"x","reshape","string_or_numeric")},s={shape:t};return r.BV.runKernel(o.HZH,e,s)}})},99494:function(n,t,e){e.d(t,{i:function(){return i}});var r=e(79122),o=e(57852);
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
function i(n,t){if(((0,r.isTypedArray)(n)&&"string"!==t||Array.isArray(n))&&"complex64"!==t)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===t&&(0,r.isTypedArray)(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return(0,o.H)(n,[],[],t)}},33028:function(n,t,e){e.r(t),e.d(t,{calculateShapes:function(){return s},validateInput:function(){return i},validateUpdateShape:function(){return o}});var r=e(20569);function o(n,t,e){const r=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,i=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${t.shape}, shape: ${n}, sliceDim: ${r}, and batchDim: ${o}.`;if(e.rank<o)throw new Error(i+` update.rank < ${o}. `);if(n.length<r+(e.rank-o))throw new Error(i+` Output shape length < ${r+(e.rank-o)}`);if(e.rank!==o+n.length-r)throw new Error(i+" update.rank != "+(o+n.length-r));for(let n=0;n<o;++n)if(e.shape[n]!==t.shape[n])throw new Error(i+` updates.shape[${n}] (${e.shape[n]}) != indices.shape[${n}] (${t.shape[n]}).`);for(let t=0;t<e.rank-o;++t)if(e.shape[t+o]!==n[t+r])throw new Error(i+` updates.shape[${t+o}] (${e.shape[t+o]}) != shape[${t+o}] (${n[t+o]})`)}function i(n,t,e){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(n.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${n.rank}.`);if("int32"!==t.dtype)throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(0===e.length){if(0===t.size)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(0===n.size)throw new Error(`Updates specified for empty output. updates shape: ${n.shape}`)}o(e,t,n)}function s(n,t,e){const o=t.shape.length,i=o>1?t.shape[o-1]:1,s=e.length;let a=1;for(let n=i;n<s;++n)a*=e[n];const u=i<1?1:i;return{sliceRank:i,numUpdates:(0,r.NA)(t.shape)/u,sliceSize:a,strides:[...(0,r.e3)(e.slice(0,i)),1],outputSize:(0,r.NA)(e)}}},30625:function(n,t,e){e.d(t,{X:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({sigmoid_:
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
function(n){const t={x:(0,i._1)(n,"x","sigmoid","float32")};return r.BV.runKernel(o.a5O,t)}})},13261:function(n,t,e){e.d(t,{_:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({sqrt_:
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
function(n){const t={x:(0,i._1)(n,"x","sqrt","float32")};return r.BV.runKernel(o.FKq,t)}})},50248:function(n,t,e){e.d(t,{h:function(){return i}});var r=e(97097),o=e(43740);const i=(0,e(2668).op)({square_:
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
function(n){const t=(0,o._1)(n,"x","square");return r.BV.runKernel("Square",{x:t},{})}})},71901:function(n,t,e){e.d(t,{N:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({step_:
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
function(n,t=0){const e={x:(0,i._1)(n,"x","step")},s={alpha:t};return r.BV.runKernel(o.h8e,e,s)}})},70827:function(n,t,e){e.d(t,{l:function(){return a}});var r=e(97097),o=e(29121),i=e(80747),s=e(43740);const a=(0,e(2668).op)({sub_:
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
function(n,t){let e=(0,s._1)(n,"a","sub"),a=(0,s._1)(t,"b","sub");[e,a]=(0,i.makeTypesMatch)(e,a);const u={a:e,b:a};return r.BV.runKernel(o.Tr8,u)}})},15475:function(n,t,e){e.d(t,{S:function(){return a}});var r=e(97097),o=e(29121),i=e(43740),s=e(62271);const a=(0,e(2668).op)({sum_:
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
function(n,t=null,e=!1){let a=(0,i._1)(n,"x","sum");"bool"===a.dtype&&(a=(0,s.p)(a,"int32"));const u={x:a},c={axis:t,keepDims:e};return r.BV.runKernel(o.GBy,u,c)}})},10701:function(n,t,e){e.d(t,{X:function(){return i}});var r=e(43740),o=e(57852);
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
function i(n,t,e){const i=(0,r.C)(n,e);return(0,o.H)(n,t,i,e)}},99906:function(n,t,e){e.d(t,{w:function(){return s}});var r=e(43740),o=e(20569),i=e(57852);
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
function s(n,t,e){if((0,o.Cq)(n),null!=t&&3!==t.length)throw new Error("tensor3d() requires shape to have three numbers");const s=(0,r.C)(n,e);if(3!==s.length&&1!==s.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===s.length&&null==t)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return(0,i.H)(n,t,s,e)}},57852:function(n,t,e){e.d(t,{H:function(){return s}});var r=e(97097),o=e(20569),i=e(79122);
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
function s(n,t,e,s){if(null==s)s=(0,o.D2)(n);else if("complex64"===s)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if("object"==typeof n&&("texture"in n||"buffer"in n&&!(n.buffer instanceof ArrayBuffer))){if("float32"!==s&&"int32"!==s)throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return r.BV.backend.createTensorFromGPUData(n,t||e,s)}if(!(0,i.isTypedArray)(n)&&!Array.isArray(n)&&"number"!=typeof n&&"boolean"!=typeof n&&"string"!=typeof n)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=t){(0,o.Mu)(t);const n=(0,o.NA)(t),r=(0,o.NA)(e);(0,o.hu)(n===r,(()=>`Based on the provided shape, [${t}], the tensor should have ${n} values but has ${r}`));for(let n=0;n<e.length;++n){const r=e[n],i=n!==e.length-1||r!==(0,o.NA)(t.slice(n));(0,o.hu)(e[n]===t[n]||!i,(()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `))}}return(0,i.isTypedArray)(n)||Array.isArray(n)||(n=[n]),t=t||e,n="string"!==s?(0,i.toTypedArray)(n,s):(0,i.flatten)(n,[],!0),r.BV.makeTensor(n,t,s)}},89065:function(n,t,e){e.d(t,{p:function(){return d}});var r=e(97097),o=e(4368),i=e(29121),s=e(43740),a=e(20569),u=e(61661),c=e(64386),l=e(17370),f=e(2668),h=e(60766);const d=(0,f.op)({transpose_:
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
function(n,t,e){const f=(0,s._1)(n,"x","transpose");if(null==t&&(t=f.shape.map(((n,t)=>t)).reverse()),a.hu(f.rank===t.length,(()=>`Error in transpose: rank of input ${f.rank} must match length of perm ${t}.`)),t.forEach((n=>{a.hu(n>=0&&n<f.rank,(()=>"All entries in 'perm' must be between 0 and "+(f.rank-1)+` but got ${t}`))})),f.rank<=1)return f.clone();const d={x:f},p={perm:t};return"complex64"===f.dtype?(0,o.lu)((()=>{let n=(0,h.k)(f),t=(0,c.a)(f);return n=r.BV.runKernel(i.G3Y,{x:n},p),t=r.BV.runKernel(i.G3Y,{x:t},p),e&&(t=(0,l.W)(t)),(0,u.P)(n,t)})):r.BV.runKernel(i.G3Y,d,p)}})},6577:function(n,t,e){e.d(t,{P:function(){return s}});var r=e(97097),o=e(29121),i=e(43740);const s=(0,e(2668).op)({zerosLike_:
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
function(n){const t={x:(0,i._1)(n,"x","zerosLike")};return r.BV.runKernel(o.RuY,t)}})},4077:function(n,t,e){e.d(t,{es:function(){return y},YD:function(){return f},_w:function(){return w},FZ:function(){return b},Vp:function(){return g},Vi:function(){return m}});var r=e(55938),o=e(20569);function i(n,t,e,r){const i=(0,o.e3)(t),a=function(n,t,e,r){const i=(0,o.NA)(t),a=r[r.length-1],u=new Array(a).fill(0),l=t.length,f="complex64"===e?c(n):n;if(l>1)for(let n=0;n<i/a;n++){const t=n*a;for(let n=0;n<a;n++)u[n]=Math.max(u[n],s(f[t+n],0,e).length)}return u}(n,t,e,i),l=t.length,f=u(n,t,e,i,a),h=["Tensor"];return r&&(h.push(`  dtype: ${e}`),h.push(`  rank: ${l}`),h.push(`  shape: [${t}]`),h.push("  values:")),h.push(f.map((n=>"    "+n)).join("\n")),h.join("\n")}function s(n,t,e){let r;return r=Array.isArray(n)?`${parseFloat(n[0].toFixed(7))} + ${parseFloat(n[1].toFixed(7))}j`:(0,o.HD)(n)?`'${n}'`:"bool"===e?a(n):parseFloat(n.toFixed(7)).toString(),(0,o.oj)(r,t)}function a(n){return 0===n?"false":"true"}function u(n,t,e,r,o,i=!0){const l="complex64"===e?2:1,f=t[0],h=t.length;if(0===h){if("complex64"===e){return[s(c(n)[0],0,e)]}return"bool"===e?[a(n[0])]:[n[0].toString()]}if(1===h){if(f>20){const t=3*l;let r=Array.from(n.slice(0,t)),i=Array.from(n.slice((f-3)*l,f*l));return"complex64"===e&&(r=c(r),i=c(i)),["["+r.map(((n,t)=>s(n,o[t],e))).join(", ")+", ..., "+i.map(((n,t)=>s(n,o[f-3+t],e))).join(", ")+"]"]}return["["+("complex64"===e?c(n):Array.from(n)).map(((n,t)=>s(n,o[t],e))).join(", ")+"]"]}const d=t.slice(1),p=r.slice(1),m=r[0]*l,g=[];if(f>20){for(let t=0;t<3;t++){const r=t*m,i=r+m;g.push(...u(n.slice(r,i),d,e,p,o,!1))}g.push("...");for(let t=f-3;t<f;t++){const r=t*m,i=r+m;g.push(...u(n.slice(r,i),d,e,p,o,t===f-1))}}else for(let t=0;t<f;t++){const r=t*m,i=r+m;g.push(...u(n.slice(r,i),d,e,p,o,t===f-1))}const b=2===h?",":"";g[0]="["+(f>0?g[0]+b:"");for(let n=1;n<g.length-1;n++)g[n]=" "+g[n]+b;let y=",\n";for(let n=2;n<h;n++)y+="\n";return g[g.length-1]=" "+g[g.length-1]+"]"+(i?"":y),g}function c(n){const t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}var l=e(79122);
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
class f{constructor(n,t,e){if(this.dtype=t,this.shape=n.slice(),this.size=o.NA(n),null!=e){const n=e.length;o.hu(n===this.size,(()=>`Length of values '${n}' does not match the size inferred by the shape '${this.size}'.`))}if("complex64"===t)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=e||o.rQ(t,this.size),this.strides=(0,o.e3)(n)}set(n,...t){0===t.length&&(t=[0]),o.hu(t.length===this.rank,(()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`));const e=this.locToIndex(t);this.values[e]=n}get(...n){0===n.length&&(n=[0]);let t=0;for(const e of n){if(e<0||e>=this.shape[t]){const t=`Requested out of range element at ${n}.   Buffer shape=${this.shape}`;throw new Error(t)}t++}let e=n[n.length-1];for(let t=0;t<n.length-1;++t)e+=this.strides[t]*n[t];return this.values[e]}locToIndex(n){if(0===this.rank)return 0;if(1===this.rank)return n[0];let t=n[n.length-1];for(let e=0;e<n.length-1;++e)t+=this.strides[e]*n[e];return t}indexToLoc(n){if(0===this.rank)return[];if(1===this.rank)return[n];const t=new Array(this.shape.length);for(let e=0;e<t.length-1;++e)t[e]=Math.floor(n/this.strides[e]),n-=t[e]*this.strides[e];return t[t.length-1]=n,t}get rank(){return this.shape.length}toTensor(){return h().makeTensor(this.values,this.shape,this.dtype)}}let h=null,d=null,p=null;function m(n){h=n}function g(n){d=n}function b(n){p=n}class y{constructor(n,t,e,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=n.slice(),this.dtype=t||"float32",this.size=o.NA(n),this.strides=(0,o.e3)(n),this.dataId=e,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const n=await this.data();return d.buffer(this.shape,this.dtype,n)}bufferSync(){return d.buffer(this.shape,this.dtype,this.dataSync())}async array(){const n=await this.data();return(0,o.GX)(this.shape,n,"complex64"===this.dtype)}arraySync(){return(0,o.GX)(this.shape,this.dataSync(),"complex64"===this.dtype)}async data(){this.throwIfDisposed();const n=h().read(this.dataId);if("string"===this.dtype){const t=await n;try{return t.map((n=>l.decodeString(n)))}catch(n){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return n}dataToGPU(n){return this.throwIfDisposed(),h().readToGPU(this.dataId,n)}dataSync(){this.throwIfDisposed();const n=h().readSync(this.dataId);if("string"===this.dtype)try{return n.map((n=>l.decodeString(n)))}catch(n){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return n}async bytes(){this.throwIfDisposed();const n=await h().read(this.dataId);return"string"===this.dtype?n:new Uint8Array(n.buffer)}dispose(){this.isDisposed||(h().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(n=!1){return d.print(this,n)}clone(){return this.throwIfDisposed(),d.clone(this)}toString(n=!1){return i(this.dataSync(),this.shape,this.dtype,n)}cast(n){return this.throwIfDisposed(),d.cast(this,n)}variable(n=!0,t,e){return this.throwIfDisposed(),h().makeVariable(this,n,t,e)}}Object.defineProperty(y,Symbol.hasInstance,{value:n=>!!n&&null!=n.data&&null!=n.dataSync&&null!=n.throwIfDisposed}),(0,r.R)("Tensor",(()=>y));class w extends y{constructor(n,t,e,r){super(n.shape,n.dtype,n.dataId,r),this.trainable=t,this.name=e}assign(n){if(n.dtype!==this.dtype)throw new Error(`dtype of the new value (${n.dtype}) and previous value (${this.dtype}) must match`);if(!o.cO(n.shape,this.shape))throw new Error(`shape of the new value (${n.shape}) and previous value (${this.shape}) must match`);h().disposeTensor(this),this.dataId=n.dataId,h().incRef(this,null)}dispose(){h().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(w,Symbol.hasInstance,{value:n=>n instanceof y&&null!=n.assign&&n.assign instanceof Function})},80747:function(n,t,e){e.r(t),e.d(t,{assertTypesMatch:function(){return a},getTensorsInContainer:function(){return c},isTensorInList:function(){return u},makeTypesMatch:function(){return s}});var r=e(4077),o=e(71221),i=e(20569);
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
function s(n,t){if(n.dtype===t.dtype)return[n,t];const e=(0,o.x8)(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function a(n,t){(0,i.hu)(n.dtype===t.dtype,(()=>`The dtypes of the first(${n.dtype}) and second(${t.dtype}) input must match`))}function u(n,t){return t.some((t=>t.id===n.id))}function c(n){const t=[];return l(n,t,new Set),t}function l(n,t,e){if(null==n)return;if(n instanceof r.es)return void t.push(n);if(o=n,!Array.isArray(o)&&"object"!=typeof o)return;var o;const i=n;for(const n in i){const r=i[n];e.has(r)||(e.add(r),l(r,t,e))}}},43740:function(n,t,e){e.d(t,{C:function(){return u},_1:function(){return f},sI:function(){return h}});var r=e(97097),o=e(22885),i=e(4077),s=e(79122),a=e(20569);
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
function u(n,t){let e=n;if((0,s.isTypedArray)(n))return"string"===t?[]:[n.length];if("object"==typeof n){if("texture"in n){const t=n.channels||"RGBA";return[n.height,n.width*t.length]}if("buffer"in n&&!(n.buffer instanceof ArrayBuffer))return[n.buffer.size/(null==t?4:(0,a.bT)(t))]}if(!Array.isArray(n))return[];const r=[];for(;Array.isArray(e)||(0,s.isTypedArray)(e)&&"string"!==t;)r.push(e.length),e=e[0];return Array.isArray(n)&&(0,o.OB)().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&c(n,r,[]),r}function c(n,t,e){if(e=e||[],!Array.isArray(n)&&!(0,s.isTypedArray)(n))return void(0,a.hu)(0===t.length,(()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`));(0,a.hu)(t.length>0,(()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${n.length} elements`)),(0,a.hu)(n.length===t[0],(()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${n.length} elements`));const r=t.slice(1);for(let t=0;t<n.length;++t)c(n[t],r,e.concat(t))}function l(n,t,e,r){if("string_or_numeric"!==n){if(null==n)throw new Error("Expected dtype cannot be null.");if("numeric"!==n&&n!==t||"numeric"===n&&"string"===t)throw new Error(`Argument '${e}' passed to '${r}' must be ${n} tensor, but got ${t} tensor`)}}function f(n,t,e,o="numeric"){if(n instanceof i.es)return l(o,n.dtype,t,e),n;let c=(0,a.D2)(n);if("string"!==c&&["bool","int32","float32"].indexOf(o)>=0&&(c=o),l(o,c,t,e),null==n||!(0,s.isTypedArray)(n)&&!Array.isArray(n)&&"number"!=typeof n&&"boolean"!=typeof n&&"string"!=typeof n){const r=null==n?"null":n.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${r}'`)}const f=u(n,c);(0,s.isTypedArray)(n)||Array.isArray(n)||(n=[n]);const h="string"!==c?(0,s.toTypedArray)(n,c):(0,s.flatten)(n,[],!0);return r.BV.makeTensor(h,f,c)}function h(n,t,e,r="numeric"){if(!Array.isArray(n))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return n.map(((n,o)=>f(n,`${t}[${o}]`,e,r)))}},71221:function(n,t,e){
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
var r,o,i,s,a;e.d(t,{x8:function(){return c},yw:function(){return r},z4:function(){return l}}),function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"}(r||(r={})),function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"}(o||(o={})),function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"}(i||(i={})),function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"}(s||(s={})),function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"}(a||(a={}));const u={float32:s,int32:o,bool:i,complex64:a};function c(n,t){if("string"===n||"string"===t){if("string"===n&&"string"===t)return"string";throw new Error(`Can not upcast ${n} with ${t}`)}return u[n][t]}function l(n){return c(n,"int32")}},79122:function(n,t,e){e.r(t),e.d(t,{arraysEqual:function(){return o.cO},assert:function(){return o.hu},assertNonNegativeIntegerDimensions:function(){return o.Mu},assertNonNull:function(){return o.Cq},assertShapesMatch:function(){return o.k5},bytesFromStringArray:function(){return o.Ub},bytesPerElement:function(){return o.bT},checkConversionForErrors:function(){return o.D5},clamp:function(){return o.uZ},computeStrides:function(){return o.e3},convertBackendValuesAndArrayBuffer:function(){return o.KS},createScalarValue:function(){return w},createShuffledIndices:function(){return o.U$},decodeString:function(){return E},distSquared:function(){return o.E7},encodeString:function(){return _},fetch:function(){return S},fingerPrint64:function(){return y},flatten:function(){return $},getArrayFromDType:function(){return o.rQ},getTypedArrayFromDType:function(){return o.WP},hasEncodingLoss:function(){return o.QB},hexToLong:function(){return a},indexToLoc:function(){return o.NE},inferDtype:function(){return o.D2},inferFromImplicitShape:function(){return o.JZ},isBoolean:function(){return o.jn},isFunction:function(){return o.mf},isInt:function(){return o.GN},isNumber:function(){return o.hj},isPromise:function(){return o.tI},isScalarShape:function(){return o.xH},isString:function(){return o.HD},isTypedArray:function(){return x},isValidDtype:function(){return o.LP},locToIndex:function(){return o.qy},makeOnesTypedArray:function(){return o.p8},makeZerosNestedTypedArray:function(){return o.l6},makeZerosTypedArray:function(){return o.wT},nearestDivisor:function(){return o.jP},nearestLargerEven:function(){return o.nY},now:function(){return v},parseAxisParam:function(){return o.EC},randUniform:function(){return o.bj},repeatedTry:function(){return o.WD},rightPad:function(){return o.oj},shuffle:function(){return o.TV},shuffleCombo:function(){return o.d7},sizeFromShape:function(){return o.NA},sizeToSquarishShape:function(){return o.YP},squeezeShape:function(){return o.bp},sum:function(){return o.Sm},swap:function(){return o.LF},tanh:function(){return o.AE},toNestedArray:function(){return o.GX},toTypedArray:function(){return k}});var r=e(22885),o=e(20569),i=e(43720);
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
const s=e.n(i)()||i;function a(n){return s.fromString(n,!0,16)}const u=a("c3a5c85c97cb3127"),c=a("b492b66fbe98f273"),l=a("9ae16a3b2f90404f");function f(n){return n.xor(n.shru(47))}function h(n,t,e){const r=n.slice(t,t+e);return s.fromBytes(Array.from(r),!0,!0)}function d(n,t){return h(n,t,8)}function p(n,t){return h(n,t,4)}function m(n,t){return 0===t?n:n.shru(t).or(n.shl(64-t))}function g(n,t,e=a("9ddfea08eb382d69")){let r=n.xor(t).mul(e);r=r.xor(r.shru(47));let o=t.xor(r).mul(e);return o=o.xor(o.shru(47)),o=o.mul(e),o}function b(n,t,e,r){return function(n,t,e,r,o,i){o=o.add(n),i=m(i.add(o).add(r),21);const s=o;return o=(o=o.add(t)).add(e),i=i.add(m(o,44)),[o.add(r),i.add(s)]}(d(n,t),d(n,t+8),d(n,t+16),d(n,t+24),e,r)}function y(n,t=n.length){const e=s.fromNumber(81,!0);if(t<=32)return t<=16?function(n,t=n.length){if(t>=8){const e=l.add(2*t),r=d(n,0).add(l),o=d(n,t-8);return g(m(o,37).mul(e).add(r),m(r,25).add(o).mul(e),e)}if(t>=4){const e=l.add(2*t);return g(p(n,0).shl(3).add(t),p(n,t-4),e)}if(t>0){const e=n[0]+(n[t>>1]<<8),r=t+(n[t-1]<<2);return f(l.mul(e).xor(u.mul(r))).mul(l)}return l}(n,t):function(n,t=n.length){const e=l.add(2*t),r=d(n,0).mul(c),o=d(n,8),i=d(n,t-8).mul(e),s=d(n,t-16).mul(l);return g(m(r.add(o),43).add(m(i,30)).add(s),r.add(m(o.add(l),18)).add(i),e)}(n,t);if(t<=64)return function(n,t=n.length){const e=l.add(2*t),r=d(n,0).mul(l),o=d(n,8),i=d(n,t-8).mul(e),s=d(n,t-16).mul(l),a=m(r.add(o),43).add(m(i,30)).add(s),u=g(a,r.add(m(o.add(l),18)).add(i),e),c=d(n,16).mul(e),f=d(n,24),h=a.add(d(n,t-32)).mul(e),p=u.add(d(n,t-24)).mul(e);return g(m(c.add(f),43).add(m(h,30)).add(p),c.add(m(f.add(r),18)).add(h),e)}(n,t);let r=e,o=e.mul(c).add(113),i=f(o.mul(l).add(113)).mul(l),a=[s.UZERO,s.UZERO],h=[s.UZERO,s.UZERO];r=r.mul(l).add(d(n,0));let y=0;const w=64*(t-1>>6),k=w+(t-1&63)-63;do{r=m(r.add(o).add(a[0]).add(d(n,y+8)),37).mul(c),o=m(o.add(a[1]).add(d(n,y+48)),42).mul(c),r=r.xor(h[1]),o=o.add(a[0]).add(d(n,y+40)),i=m(i.add(h[0]),33).mul(c),a=b(n,y,a[1].mul(c),r.add(h[0])),h=b(n,y+32,i.add(h[1]),o.add(d(n,y+16))),[i,r]=[r,i],y+=64}while(y!==w);const v=c.add(i.and(255).shl(1));return y=k,h[0]=h[0].add(t-1&63),a[0]=a[0].add(h[0]),h[0]=h[0].add(a[0]),r=m(r.add(o).add(a[0]).add(d(n,y+8)),37).mul(v),o=m(o.add(a[1]).add(d(n,y+48)),42).mul(v),r=r.xor(h[1].mul(9)),o=o.add(a[0].mul(9).add(d(n,y+40))),i=m(i.add(h[0]),33).mul(v),a=b(n,y,a[1].mul(v),r.add(h[0])),h=b(n,y+32,i.add(h[1]),o.add(d(n,y+16))),[i,r]=[r,i],g(g(a[0],h[0],v).add(f(o).mul(u)).add(i),g(a[1],h[1],v).add(r),v)}
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
function w(n,t){return"string"===t?_(n):k([n],t)}function k(n,t){if("string"===t)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=$(n)),(0,r.OB)().getBool("DEBUG")&&o.D5(n,t),function(n,t){return n instanceof Float32Array&&"float32"===t||n instanceof Int32Array&&"int32"===t||n instanceof Uint8Array&&"bool"===t}(n,t))return n;if(null==t||"float32"===t||"complex64"===t)return new Float32Array(n);if("int32"===t)return new Int32Array(n);if("bool"===t){const t=new Uint8Array(n.length);for(let e=0;e<t.length;++e)0!==Math.round(n[e])&&(t[e]=1);return t}throw new Error(`Unknown data type ${t}`)}function v(){return(0,r.OB)().platform.now()}function S(n,t){return(0,r.OB)().platform.fetch(n,t)}function _(n,t="utf-8"){return t=t||"utf-8",(0,r.OB)().platform.encode(n,t)}function E(n,t="utf-8"){return t=t||"utf-8",(0,r.OB)().platform.decode(n,t)}function x(n){return(0,r.OB)().platform.isTypedArray(n)}function $(n,t=[],e=!1){if(null==t&&(t=[]),"boolean"==typeof n||"number"==typeof n||"string"==typeof n||o.tI(n)||null==n||x(n)&&e)t.push(n);else if(Array.isArray(n)||x(n))for(let r=0;r<n.length;++r)$(n[r],t,e);else{let r=-1;for(const t of Object.keys(n))/^([1-9]+[0-9]*|0)$/.test(t)&&(r=Math.max(r,Number(t)));for(let o=0;o<=r;o++)$(n[o],t,e)}return t}},20569:function(n,t,e){
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
function r(n){let t=n.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,a(n,t,e)}function o(n,t){if(n.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${n.length}Second array length was ${t.length}`);let e=n.length,r=0;for(;e>0;)r=Math.random()*e|0,e--,a(n,e,r),a(t,e,r)}function i(n,t,e){return Math.max(n,Math.min(t,e))}function s(n){return n%2==0?n:n+1}function a(n,t,e){const r=n[t];n[t]=n[e],n[e]=r}function u(n){let t=0;for(let e=0;e<n.length;e++)t+=n[e];return t}function c(n,t){const e=Math.random();return t*e+(1-e)*n}function l(n,t){let e=0;for(let r=0;r<n.length;r++){const o=Number(n[r])-Number(t[r]);e+=o*o}return e}function f(n,t){if(!n)throw new Error("string"==typeof t?t:t())}function h(n,t,e=""){f(g(n,t),(()=>e+` Shapes ${n} and ${t} must match`))}function d(n){f(null!=n,(()=>"The input to the tensor constructor must be a non-null value."))}function p(n){if(0===n.length)return 1;let t=n[0];for(let e=1;e<n.length;e++)t*=n[e];return t}function m(n){return 0===n.length}function g(n,t){if(n===t)return!0;if(null==n||null==t)return!1;if(n.length!==t.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function b(n){return n%1==0}function y(n){if(null!=Math.tanh)return Math.tanh(n);if(n===1/0)return 1;if(n===-1/0)return-1;{const t=Math.exp(2*n);return(t-1)/(t+1)}}function w(n){const t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function k(n){const t=new Uint32Array(n);for(let e=0;e<n;++e)t[e]=e;return r(t),t}function v(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function S(n,t=(n=>0),e,r){return new Promise(((o,i)=>{let s=0;const a=()=>{if(n())return void o();s++;const u=t(s);null!=e&&s>=e?i():null!=r?r(a,u):setTimeout(a,u)};a()}))}function _(n,t){let e=1,r=-1;for(let t=0;t<n.length;++t)if(n[t]>=0)e*=n[t];else if(-1===n[t]){if(-1!==r)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${t}`);r=t}else if(n[t]<0)throw Error(`Shapes can not be < 0. Found ${n[t]} at dim ${t}`);if(-1===r){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${n}`);return n}if(0===e)throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);if(t%e!=0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);const o=n.slice();return o[r]=t/e,o}function E(n,t){const e=t.length;return f((n=null==n?t.map(((n,t)=>t)):[].concat(n)).every((n=>n>=-e&&n<e)),(()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`)),f(n.every((n=>b(n))),(()=>`All values in axis param must be integers but got axis ${n}`)),n.map((n=>n<0?e+n:n))}function x(n,t){const e=[],r=[],o=null!=t&&Array.isArray(t)&&0===t.length,i=null==t||o?null:E(t,n).sort();let s=0;for(let t=0;t<n.length;++t){if(null!=i){if(i[s]===t&&1!==n[t])throw new Error(`Can't squeeze axis ${t} since its dim '${n[t]}' is not 1`);(null==i[s]||i[s]>t)&&1===n[t]&&(e.push(n[t]),r.push(t)),i[s]<=t&&s++}1!==n[t]&&(e.push(n[t]),r.push(t))}return{newShape:e,keptDims:r}}function $(n,t){let e=null;if(null==n||"float32"===n)e=new Float32Array(t);else if("int32"===n)e=new Int32Array(t);else{if("bool"!==n)throw new Error(`Unknown data type ${n}`);e=new Uint8Array(t)}return e}function B(n,t){let e=null;if(null==n||"float32"===n)e=new Float32Array(t);else if("int32"===n)e=new Int32Array(t);else if("bool"===n)e=new Uint8Array(t);else{if("string"!==n)throw new Error(`Unknown data type ${n}`);e=new Array(t)}return e}function A(n,t){for(let e=0;e<n.length;e++){const r=n[e];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function I(n){return"bool"===n||"complex64"===n||"float32"===n||"int32"===n||"string"===n}function T(n,t){return"complex64"!==t&&(("float32"!==t||"complex64"===n)&&(("int32"!==t||"float32"===n||"complex64"===n)&&("bool"!==t||"bool"!==n)))}function N(n){if("float32"===n||"int32"===n)return 4;if("complex64"===n)return 8;if("bool"===n)return 1;throw new Error(`Unknown dtype ${n}`)}function M(n){if(null==n)return 0;let t=0;return n.forEach((n=>t+=n.length)),t}function D(n){return"string"==typeof n||n instanceof String}function R(n){return"boolean"==typeof n}function V(n){return"number"==typeof n}function C(n){return Array.isArray(n)?C(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray?"int32":V(n)?"float32":D(n)?"string":R(n)?"bool":"float32"}function F(n){return!!(n&&n.constructor&&n.call&&n.apply)}function O(n,t){for(let e=t;e<n;++e)if(n%e==0)return e;return n}function P(n){const t=n.length;if(t<2)return[];const e=new Array(t-1);e[t-2]=n[t-1];for(let r=t-3;r>=0;--r)e[r]=e[r+1]*n[r+1];return e}function L(n,t,e,r=!1){const o=new Array;if(1===t.length){const i=t[0]*(r?2:1);for(let t=0;t<i;t++)o[t]=e[n+t]}else{const i=t[0],s=t.slice(1),a=s.reduce(((n,t)=>n*t))*(r?2:1);for(let t=0;t<i;t++)o[t]=L(n+t*a,s,e,r)}return o}function z(n,t,e=!1){if(0===n.length)return t[0];const r=n.reduce(((n,t)=>n*t))*(e?2:1);if(0===r)return[];if(r!==t.length)throw new Error(`[${n}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return L(0,n,t,e)}function W(n,t){if(Array.isArray(n))return n;if("float32"===t)return n instanceof Float32Array?n:new Float32Array(n);if("int32"===t)return n instanceof Int32Array?n:new Int32Array(n);if("bool"===t||"string"===t)return Uint8Array.from(new Int32Array(n));throw new Error(`Unknown dtype ${t}`)}function G(n,t){const e=U(n,t);for(let n=0;n<e.length;n++)e[n]=1;return e}function U(n,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(n);if("int32"===t)return new Int32Array(n);if("bool"===t)return new Uint8Array(n);throw new Error(`Unknown data type ${t}`)}function q(n,t){const e=n.reduce(((n,t)=>n*t),1);if(null==t||"float32"===t)return z(n,new Float32Array(e));if("int32"===t)return z(n,new Int32Array(e));if("bool"===t)return z(n,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function K(n){n.forEach((t=>{f(Number.isInteger(t)&&t>=0,(()=>`Tensor must have a shape comprised of positive integers but got shape [${n}].`))}))}function H(n,t,e){if(0===t)return 0;if(1===t)return n[0];let r=n[n.length-1];for(let t=0;t<n.length-1;++t)r+=e[t]*n[t];return r}function X(n,t,e){if(0===t)return[];if(1===t)return[n];const r=new Array(t);for(let t=0;t<r.length-1;++t)r[t]=Math.floor(n/e[t]),n-=r[t]*e[t];return r[r.length-1]=n,r}function j(n){return n&&n.then&&"function"==typeof n.then}e.d(t,{AE:function(){return y},Cq:function(){return d},D2:function(){return C},D5:function(){return A},E7:function(){return l},EC:function(){return E},GN:function(){return b},GX:function(){return z},HD:function(){return D},JZ:function(){return _},KS:function(){return W},LF:function(){return a},LP:function(){return I},Mu:function(){return K},NA:function(){return p},NE:function(){return X},QB:function(){return T},Sm:function(){return u},TV:function(){return r},U$:function(){return k},Ub:function(){return M},WD:function(){return S},WP:function(){return $},YP:function(){return w},bT:function(){return N},bj:function(){return c},bp:function(){return x},cO:function(){return g},d7:function(){return o},e3:function(){return P},hj:function(){return V},hu:function(){return f},jP:function(){return O},jn:function(){return R},k5:function(){return h},l6:function(){return q},mf:function(){return F},nY:function(){return s},oj:function(){return v},p8:function(){return G},qy:function(){return H},rQ:function(){return B},tI:function(){return j},uZ:function(){return i},wT:function(){return U},xH:function(){return m}})}}]);