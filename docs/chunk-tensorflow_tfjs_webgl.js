"use strict";(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[61],{22991:function(e,n,t){var a=t(38986);
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
const r={},o={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function s(e,n){if(!(e in r)||null!=n){const t=function(e,n){if(1!==e&&2!==e)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const t=null==n?function(e){if("undefined"!=typeof OffscreenCanvas&&2===e)return new OffscreenCanvas(300,150);if("undefined"!=typeof document)return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e):n;t.addEventListener("webglcontextlost",(n=>{n.preventDefault(),delete r[e]}),!1),(0,a.env)().getBool("SOFTWARE_WEBGL_ENABLED")&&(o.failIfMajorPerformanceCaveat=!1);if(1===e)return t.getContext("webgl",o)||t.getContext("experimental-webgl",o);return t.getContext("webgl2",o)}(e,n);if(null===t)return console.log("Could not get context for WebGL version",e),null;r[e]=t}const t=r[e];return null==t||t.isContextLost()?(delete r[e],s(e)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),r[e])}
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
var i,u,l;function c(e,n){return[n,e]}function d(e){const n=a.util.sizeFromShape(e),t=Math.ceil(n/4);return a.util.sizeToSquarishShape(t)}function p(e,n){return[Math.max(1,Math.ceil(n/2)),Math.max(1,Math.ceil(e/2))]}function h(e,n){const t=e;let r,o,s,i,u,l,c,d,p,h;return 2===(0,a.env)().getNumber("WEBGL_VERSION")?(r=t.R32F,o=t.R16F,s=t.RGBA16F,i=t.RGBA32F,u=t.RED,c=4,d=1,p=t.HALF_FLOAT,h=t.FLOAT,l=t.RGBA8):(r=e.RGBA,o=e.RGBA,s=e.RGBA,i=t.RGBA,u=e.RGBA,c=4,d=4,p=null!=n?n.HALF_FLOAT_OES:null,h=e.FLOAT,l=e.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:o,internalFormatPackedHalfFloat:s,internalFormatPackedFloat:i,textureFormatFloat:u,downloadTextureFormat:l,downloadUnpackNumChannels:c,defaultNumChannels:d,textureTypeHalfFloat:p,textureTypeFloat:h}}
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
function f(e,n){const t=n();return(0,a.env)().getBool("DEBUG")&&function(e){const n=e.getError();if(n!==e.NO_ERROR)throw new Error("WebGL Error: "+function(e,n){switch(n){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${n}`}}(e,n))}(e),t}!function(e){e[e.DENSE=0]="DENSE",e[e.SHARED_BATCH=1]="SHARED_BATCH"}(i||(i={})),function(e){e[e.RENDER=0]="RENDER",e[e.UPLOAD=1]="UPLOAD",e[e.PIXELS=2]="PIXELS",e[e.DOWNLOAD=3]="DOWNLOAD"}(u||(u={})),function(e){e[e.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",e[e.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",e[e.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",e[e.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",e[e.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(l||(l={}));function x(e){return!!((0,a.env)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||0===e||5.96e-8<Math.abs(e)&&Math.abs(e)<65504)}function m(e,n){return R(e,(()=>e.getExtension(n)),'Extension "'+n+'" not supported on this browser.')}const g=/ERROR: [0-9]+:([0-9]+):/g;function b(e,n){const t=g.exec(n);if(null==t)return console.log(`Couldn't parse line number in error: ${n}`),void console.log(e);const r=+t[1],o=e.split("\n"),s=o.length.toString().length+2,i=o.map(((e,n)=>a.util.rightPad((n+1).toString(),s)+e));let u=0;for(let e=0;e<i.length;e++)u=Math.max(i[e].length,u);const l=i.slice(0,r-1),c=i.slice(r-1,r),d=i.slice(r);console.log(l.join("\n")),console.log(n.split("\n")[0]),console.log(`%c ${a.util.rightPad(c[0],u)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(d.join("\n"))}function v(e,n){if(f(e,(()=>e.validateProgram(n))),!1===e.getProgramParameter(n,e.VALIDATE_STATUS))throw console.log(e.getProgramInfoLog(n)),new Error("Shader program validation failed.")}function C(e,n,t,a,r,o,s){const i=e.getAttribLocation(n,t);return-1!==i&&(f(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,a))),f(e,(()=>e.vertexAttribPointer(i,r,e.FLOAT,!1,o,s))),f(e,(()=>e.enableVertexAttribArray(i))),!0)}function $(e,n,t,a){f(e,(()=>function(e,n,t){S(e,t),f(e,(()=>e.activeTexture(e.TEXTURE0+t))),f(e,(()=>e.bindTexture(e.TEXTURE_2D,n)))}(e,n,a))),f(e,(()=>e.uniform1i(t,a)))}function I(e,n,t){f(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,t))),f(e,(()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)))}function y(e,n){f(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,n))),f(e,(()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0)))}function k(e){const n=e.checkFramebufferStatus(e.FRAMEBUFFER);if(n!==e.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+function(e,n){switch(n){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${n}`}}(e,n))}function R(e,n,t){const a=f(e,(()=>n()));if(null==a)throw new Error(t);return a}function S(e,n){const t=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,a=n+e.TEXTURE0;if(a<e.TEXTURE0||a>t){throw new Error(`textureUnit must be in ${`[gl.TEXTURE0, gl.TEXTURE${t}]`}.`)}}function w(e,n=2){return a.util.sizeFromShape(e.slice(0,e.length-n))}function T(e){if(0===e.length)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function N(e){let n=[1,1,1];return 0===e.length||1===e.length&&1===e[0]||(n=[w(e),...T(e)]),n}function E(e){return e%2==0}function A(e,n){if(e=e.slice(-2),n=n.slice(-2),a.util.arraysEqual(e,n))return!0;if(!e.length||!n.length)return!0;if(0===e[0]||0===e[1]||0===n[0]||0===n[1])return!0;if(e.length!==n.length){const t=e.slice(-1)[0],a=n.slice(-1)[0];if(t===a)return!0;if(E(t)&&E(a)&&(1===e[0]||1===n[0]))return!0}return e[1]===n[1]&&E(e[0])&&E(n[0])}let _,O;function F(e,n){return null!=e.getExtension(n)}function D(e){try{if(null!=s(e))return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function L(e){if(0===e)return!1;const n=s(e);if(1!==e){if(F(n,"EXT_color_buffer_float"))return P(n);const e="EXT_color_buffer_half_float";if(F(n,e)){const t=n.getExtension(e);return function(e,n){const t=h(e,n),a=e.createTexture();e.bindTexture(e.TEXTURE_2D,a);const r=1,o=1;e.texImage2D(e.TEXTURE_2D,0,t.internalFormatHalfFloat,r,o,0,t.textureFormatFloat,t.textureTypeHalfFloat,null);const s=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0);const i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(a),e.deleteFramebuffer(s),i}(n,t)}return!1}if(!F(n,"OES_texture_float"))return!1;if(!F(n,"WEBGL_color_buffer_float"))return!1;return P(n)}function P(e){const n=h(e),t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t);e.texImage2D(e.TEXTURE_2D,0,n.internalFormatFloat,1,1,0,n.textureFormatFloat,n.textureTypeFloat,null);const a=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0);const r=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(t),e.deleteFramebuffer(a),r}function B(e,n){Array.isArray(e)||(e=[e]),e.forEach((e=>{null!=e&&a.util.assert("complex64"!==e.dtype,(()=>`${n} does not support complex64 tensors in the WebGL backend.`))}))}
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
const V=(0,a.env)();
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
function W(){let e,n,t,r,o,s,i,u,l,c;return 2===(0,a.env)().getNumber("WEBGL_VERSION")?(e="#version 300 es",n="in",t="out",r="in",o="texture",s="outputColor",i="out vec4 outputColor;",u=(0,a.env)().getBool("WEBGL2_ISNAN_CUSTOM")?"\n      bool isnan_custom(float val) {\n        uint floatToUint = floatBitsToUint(val);\n        return (floatToUint & 0x7fffffffu) > 0x7f800000u;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    ":"",l="",c="\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "):(e="",n="attribute",t="varying",r="varying",o="texture2D",s="gl_FragColor",i="",u="\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ",l="\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ",c="\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "),{version:e,attribute:n,varyingVs:t,varyingFs:r,texture2D:o,output:s,defineOutput:i,defineSpecialNaN:u,defineSpecialInf:l,defineRound:c}}
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
function U(e,n,t="index"){const r=a.util.computeStrides(n);return r.map(((n,a)=>`${`int ${e[a]} = ${t} / ${n}`}; ${a===r.length-1?`int ${e[a+1]} = ${t} - ${e[a]} * ${n}`:`index -= ${e[a]} * ${n}`};`)).join("")}function G(e,n,t="index"){const r=a.util.computeStrides(n);return r.map(((n,a)=>`${`int ${e[a]} = ${t} / outShapeStrides[${a}]`}; ${a===r.length-1?`int ${e[a+1]} = ${t} - ${e[a]} * outShapeStrides[${a}]`:`index -= ${e[a]} * outShapeStrides[${a}]`};`)).join("")}function M(e,n,t="index"){const a=function(e,n){const t=e.length,a=e.map((e=>`${n}[${e}]`)),r=new Array(t-1);r[t-2]=a[t-1];for(let e=t-3;e>=0;--e)r[e]=`(${r[e+1]} * ${a[e+1]})`;return r}(e.map(((e,n)=>n)),n);return a.map(((n,r)=>`${`int ${e[r]} = ${t} / ${a[r]}`}; ${r===a.length-1?`int ${e[r+1]} = ${t} - ${e[r]} * ${a[r]}`:`index -= ${e[r]} * ${a[r]}`};`)).join("")}function z(e){const n=a.util.computeStrides(e).map((e=>e.toString()));return`\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * ${n[0]} + coords.y * ${n[1]} + coords.z;\n  }\n`}V.registerFlag("HAS_WEBGL",(()=>V.getNumber("WEBGL_VERSION")>0)),V.registerFlag("WEBGL_VERSION",(()=>D(2)?2:D(1)?1:0)),V.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",(()=>!1)),V.registerFlag("WEBGL_BUFFER_SUPPORTED",(()=>2===V.get("WEBGL_VERSION"))),V.registerFlag("WEBGL_CPU_FORWARD",(()=>!0)),V.registerFlag("WEBGL_FORCE_F16_TEXTURES",(()=>!1)),V.registerFlag("WEBGL_PACK",(()=>V.getBool("HAS_WEBGL"))),V.registerFlag("WEBGL_PACK_NORMALIZATION",(()=>V.getBool("WEBGL_PACK"))),V.registerFlag("WEBGL_PACK_CLIP",(()=>V.getBool("WEBGL_PACK"))),V.registerFlag("WEBGL_PACK_DEPTHWISECONV",(()=>V.getBool("WEBGL_PACK"))),V.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",(()=>V.getBool("WEBGL_PACK"))),V.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",(()=>V.getBool("WEBGL_PACK"))),V.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",(()=>V.getBool("WEBGL_PACK"))),V.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",(()=>V.getBool("WEBGL_PACK"))),V.registerFlag("WEBGL_PACK_REDUCE",(()=>V.getBool("WEBGL_PACK"))),V.registerFlag("WEBGL_LAZILY_UNPACK",(()=>V.getBool("WEBGL_PACK"))),V.registerFlag("WEBGL_CONV_IM2COL",(()=>V.getBool("WEBGL_PACK"))),V.registerFlag("WEBGL_MAX_TEXTURE_SIZE",(()=>function(e){if(null==_){const n=s(e);_=n.getParameter(n.MAX_TEXTURE_SIZE)}return _}(V.getNumber("WEBGL_VERSION")))),V.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",(()=>function(e){if(null==O){const n=s(e);O=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,O)}(V.getNumber("WEBGL_VERSION")))),V.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",(()=>{const e=V.getNumber("WEBGL_VERSION");return 0===e?0:function(e){if(0===e)return 0;let n;const t=s(e);return n=F(t,"EXT_disjoint_timer_query_webgl2")&&2===e?2:F(t,"EXT_disjoint_timer_query")?1:0,n}(e)})),V.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",(()=>V.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!a.device_util.isMobile())),V.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",(()=>function(e){if(0===e)return!1;const n=s(e);if(1===e){if(!F(n,"OES_texture_float"))return!1}else if(!F(n,"EXT_color_buffer_float"))return!1;return P(n)}(V.getNumber("WEBGL_VERSION")))),V.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",(()=>!V.getBool("WEBGL_FORCE_F16_TEXTURES")&&V.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))),V.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",(()=>L(V.getNumber("WEBGL_VERSION")))),V.registerFlag("WEBGL_FENCE_API_ENABLED",(()=>{return 2===(e=V.getNumber("WEBGL_VERSION"))&&null!=s(e).fenceSync;var e})),V.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",(()=>V.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0)),V.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",(()=>-1),(e=>{if(e<0&&-1!==e)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)})),V.registerFlag("WEBGL_FLUSH_THRESHOLD",(()=>a.device_util.isMobile()?1:-1),(e=>{if(e<0&&-1!==e)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)})),V.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",(()=>128)),V.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",(()=>!1)),V.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",(()=>1e5)),V.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",(()=>128)),V.registerFlag("WEBGL_EXP_CONV",(()=>!1)),V.registerFlag("SOFTWARE_WEBGL_ENABLED",(()=>V.getBool("IS_TEST"))),V.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",(()=>1/0)),V.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",(()=>!1)),V.registerFlag("WEBGL2_ISNAN_CUSTOM",(()=>!1)),V.registerFlag("ENGINE_COMPILE_ONLY",(()=>!1));const X="\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n",{getBroadcastDims:H}=a.backend_util;function K(e,n,t){const r=[];if(e.forEach((e=>{const n=a.util.sizeFromShape(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform?r.push(`uniform float ${e.name}${n>1?`[${n}]`:""};`):(r.push(`uniform sampler2D ${e.name};`),r.push(`uniform int offset${e.name};`)),t.enableShapeUniforms){const{uniformShape:n}=re(t.packedInputs,e.shapeInfo.logicalShape,e.shapeInfo.texShape);switch(n.length){case 1:r.push(`uniform int ${e.name}Shape;`);break;case 2:r.push(`uniform ivec2 ${e.name}Shape;`);break;case 3:r.push(`uniform ivec3 ${e.name}Shape;`);break;case 4:r.push(`uniform ivec4 ${e.name}Shape;`)}r.push(`uniform ivec2 ${e.name}TexShape;`)}})),t.enableShapeUniforms){switch(n.logicalShape.length){case 1:r.push("uniform int outShape;");break;case 2:r.push("uniform ivec2 outShape;"),r.push("uniform int outShapeStrides;");break;case 3:r.push("uniform ivec3 outShape;"),r.push("uniform ivec2 outShapeStrides;");break;case 4:r.push("uniform ivec4 outShape;"),r.push("uniform ivec3 outShapeStrides;")}r.push("uniform ivec2 outTexShape;")}t.customUniforms&&t.customUniforms.forEach((e=>{r.push(`uniform ${e.type} ${e.name}${e.arrayIndex?`[${e.arrayIndex}]`:""};`)}));const o=r.join("\n"),s=e.map((e=>function(e,n,t=!1,r){let o="";o+=t?q(e,r):j(e,r);const s=e.shapeInfo.logicalShape,i=n.logicalShape;s.length<=i.length&&(o+=t?function(e,n){const t=e.name,r=t.charAt(0).toUpperCase()+t.slice(1),o="get"+r+"AtOutCoords",s=e.shapeInfo.logicalShape.length,i=n.logicalShape.length,u=H(e.shapeInfo.logicalShape,n.logicalShape),l=ae(i),c=i-s;let d;const p=["x","y","z","w","u","v"];d=0===s?"":i<2&&u.length>=1?"coords = 0;":u.map((e=>`coords.${p[e+c]} = 0;`)).join("\n");let h="";h=i<2&&s>0?"coords":e.shapeInfo.logicalShape.map(((e,n)=>`coords.${p[n+c]}`)).join(", ");let f="return outputValue;";const x=1===a.util.sizeFromShape(e.shapeInfo.logicalShape),m=1===a.util.sizeFromShape(n.logicalShape);if(1!==s||x||m){if(x&&!m)f=1===i?"\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      ":"\n        return vec4(outputValue.x);\n      ";else if(u.length){const e=s-2,n=s-1;u.indexOf(e)>-1&&u.indexOf(n)>-1?f="return vec4(outputValue.x);":u.indexOf(e)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":u.indexOf(n)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}}else f="\n      return vec4(outputValue.xy, outputValue.xy);\n    ";return`\n    vec4 ${o}() {\n      ${l} coords = getOutputCoords();\n      ${d}\n      vec4 outputValue = get${r}(${h});\n      ${f}\n    }\n  `}(e,n):function(e,n){const t=e.name,r=t.charAt(0).toUpperCase()+t.slice(1),o="get"+r+"AtOutCoords",s=n.texShape,i=e.shapeInfo.texShape,u=e.shapeInfo.logicalShape.length,l=n.logicalShape.length;if(!e.shapeInfo.isUniform&&u===l&&null==e.shapeInfo.flatOffset&&a.util.arraysEqual(i,s))return`\n      float ${o}() {\n        return sampleTexture(${t}, resultUV);\n      }\n    `;const c=ae(l),d=H(e.shapeInfo.logicalShape,n.logicalShape),p=l-u;let h;const f=["x","y","z","w","u","v"];h=0===u?"":l<2&&d.length>=1?"coords = 0;":d.map((e=>`coords.${f[e+p]} = 0;`)).join("\n");let x="";x=l<2&&u>0?"coords":e.shapeInfo.logicalShape.map(((e,n)=>`coords.${f[n+p]}`)).join(", ");return`\n    float ${o}() {\n      ${c} coords = getOutputCoords();\n      ${h}\n      return get${r}(${x});\n    }\n  `}(e,n));return o}(e,n,t.packedInputs,t.enableShapeUniforms))).join("\n"),i=n.texShape,u=W(),l=function(e){return`\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return ${e.texture2D}(textureSampler, uv).r;\n    }\n  `}(u);let c,d,p=function(e){return`${e.version}\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    ${e.varyingFs} vec2 resultUV;\n    ${e.defineOutput}\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    ${e.defineSpecialNaN}\n    ${e.defineSpecialInf}\n    ${e.defineRound}\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    ${Y}\n    ${Q}\n    ${Z}\n  `}(u);n.isPacked?(c=function(e,n,t){switch(e.length){case 0:return ee();case 1:return function(e,n,t){const a=[Math.ceil(n[0]/2),Math.ceil(n[1]/2)];if(1===a[0])return t?"\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));\n      }\n    ":`\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ${a[1]}.0);\n      }\n    `;if(1===a[1])return t?"\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));\n      }\n    ":`\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ${a[0]}.0);\n      }\n    `;if(t)return"\n    int getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);\n    }\n  ";return`\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${a[0]}, ${a[1]}));\n      return 2 * (resTexRC.x * ${a[1]} + resTexRC.y);\n    }\n  `}(0,n,t);case 2:return function(e,n,t){const r=[Math.ceil(n[0]/2),Math.ceil(n[1]/2)];if(a.util.arraysEqual(e,n))return t?"\n      ivec2 getOutputCoords() {\n        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(${r[0]}, ${r[1]}));\n      }\n    `;const o=Math.ceil(e[1]/2);if(t)return"\n    ivec2 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec2(r, c);\n    }\n  ";return`\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${r[0]}, ${r[1]}));\n\n      int index = resTexRC.x * ${r[1]} + resTexRC.y;\n      int r = 2 * (index / ${o});\n      int c = imod(index, ${o}) * 2;\n\n      return ivec2(r, c);\n    }\n  `}(e,n,t);case 3:return function(e,n,t){if(t)return"\n    ivec3 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";const a=[Math.ceil(n[0]/2),Math.ceil(n[1]/2)],r=Math.ceil(e[2]/2),o=r*Math.ceil(e[1]/2);return`\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${a[0]}, ${a[1]}));\n      int index = resTexRC.x * ${a[1]} + resTexRC.y;\n\n      int b = index / ${o};\n      index -= b * ${o};\n\n      int r = 2 * (index / ${r});\n      int c = imod(index, ${r}) * 2;\n\n      return ivec3(b, r, c);\n    }\n  `}(e,n,t);default:return function(e,n,t){if(t)return"\n    ivec4 getOutputCoords() {\n      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(packedTexShape[0], packedTexShape[1]));\n      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;\n\n      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));\n      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));\n      int texelsInBatchN = texelsInBatch * outShape[1];\n\n      int b2 = index / texelsInBatchN;\n      index -= b2 * texelsInBatchN;\n\n      int b = index / texelsInBatch;\n      index -= b * texelsInBatch;\n\n      int r = 2 * (index / texelsInLogicalRow);\n      int c = imod(index, texelsInLogicalRow) * 2;\n\n      return ivec4(b2, b, r, c);\n    }\n  ";const a=[Math.ceil(n[0]/2),Math.ceil(n[1]/2)],r=Math.ceil(e[e.length-1]/2),o=r*Math.ceil(e[e.length-2]/2);let s=o,i="",u="b, r, c";for(let n=2;n<e.length-1;n++)s*=e[e.length-n-1],i=`\n      int b${n} = index / ${s};\n      index -= b${n} * ${s};\n    `+i,u=`b${n}, `+u;return`\n    ivec${e.length} getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${a[0]}, ${a[1]}));\n      int index = resTexRC.x * ${a[1]} + resTexRC.y;\n\n      ${i}\n\n      int b = index / ${o};\n      index -= b * ${o};\n\n      int r = 2 * (index / ${r});\n      int c = imod(index, ${r}) * 2;\n\n      return ivec${e.length}(${u});\n    }\n  `}(e,n,t)}}(n.logicalShape,i,t.enableShapeUniforms),d=function(e){return`\n    void setOutput(vec4 val) {\n      ${e.output} = val;\n    }\n  `}(u)):(c=function(e,n,t){switch(e.length){case 0:return ee();case 1:return function(e,n,t){if(1===n[0])return t?"\n      int getOutputCoords() {\n        return int(resultUV.x * float(outTexShape[1]));\n      }\n    ":`\n      int getOutputCoords() {\n        return int(resultUV.x * ${n[1]}.0);\n      }\n    `;if(1===n[1])return t?"\n      int getOutputCoords() {\n        return int(resultUV.y * float(outTexShape[0]));\n      }\n    ":`\n      int getOutputCoords() {\n        return int(resultUV.y * ${n[0]}.0);\n      }\n    `;if(t)return"\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      return resTexRC.x * outTexShape[1] + resTexRC.y;\n    }\n  ";return`\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${n[0]}, ${n[1]}));\n      return resTexRC.x * ${n[1]} + resTexRC.y;\n    }\n  `}(0,n,t);case 2:return function(e,n,t){if(a.util.arraysEqual(e,n))return t?"\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(${n[0]}, ${n[1]}));\n      }\n    `;if(1===e[1])return t?"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(${n[0]}, ${n[1]}));\n        int index = resTexRC.x * ${n[1]} + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    `;if(1===e[0])return t?"\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(outTexShape[0], outTexShape[1]));\n        int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ":`\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(${n[0]}, ${n[1]}));\n        int index = resTexRC.x * ${n[1]} + resTexRC.y;\n        return ivec2(0, index);\n      }\n    `;if(t)return"\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      int r = index / outShape[1];\n      int c = index - r * outShape[1];\n      return ivec2(r, c);\n    }\n  ";return`\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${n[0]}, ${n[1]}));\n      int index = resTexRC.x * ${n[1]} + resTexRC.y;\n      int r = index / ${e[1]};\n      int c = index - r * ${e[1]};\n      return ivec2(r, c);\n    }\n  `}(e,n,t);case 3:return function(e,n,t){if(t){return`\n  ivec3 getOutputCoords() {\n    ivec2 resTexRC = ivec2(resultUV.yx *\n                           vec2(outTexShape[0], outTexShape[1]));\n    int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n    ${G(["r","c","d"],e)}\n    return ivec3(r, c, d);\n  }\n`}const a=U(["r","c","d"],e);return`\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(${n[0]}, ${n[1]}));\n      int index = resTexRC.x * ${n[1]} + resTexRC.y;\n      ${a}\n      return ivec3(r, c, d);\n    }\n  `}(e,n,t);case 4:return function(e,n,t){if(t){return`\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(outTexShape[0], outTexShape[1]));\n      int index = resTexRC.x * outTexShape[1] + resTexRC.y;\n      ${G(["r","c","d","d2"],e)}\n      return ivec4(r, c, d, d2);\n    }\n  `}const a=U(["r","c","d","d2"],e);return`\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(${n[0]}, ${n[1]}));\n      int index = resTexRC.x * ${n[1]} + resTexRC.y;\n      ${a}\n      return ivec4(r, c, d, d2);\n    }\n  `}(e,n,t);case 5:return function(e,n){const t=U(["r","c","d","d2","d3"],e);return`\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${n[0]},\n                             ${n[1]}));\n\n      int index = resTexRC.x * ${n[1]} + resTexRC.y;\n\n      ${t}\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  `}(e,n);case 6:return function(e,n){const t=U(["r","c","d","d2","d3","d4"],e);return`\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(${n[0]}, ${n[1]}));\n      int index = resTexRC.x * ${n[1]} + resTexRC.y;\n\n      ${t}\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  `}(e,n);default:throw new Error(`${e.length}-D output sampling is not yet supported`)}}(n.logicalShape,i,t.enableShapeUniforms),d=function(e){return`\n    void setOutput(float val) {\n      ${e.output} = vec4(val, 0, 0, 0);\n    }\n  `}(u)),t.packedInputs&&(p+=J);return[p,l,d,o,c,s,t.userCode].join("\n")}function j(e,n=!1){const t=e.shapeInfo.logicalShape;switch(t.length){case 0:return function(e,n){const t=e.name,a="get"+t.charAt(0).toUpperCase()+t.slice(1);if(e.shapeInfo.isUniform)return`float ${a}() {return ${t};}`;const[r,o]=e.shapeInfo.texShape;if(1===r&&1===o)return`\n      float ${a}() {\n        return sampleTexture(${t}, halfCR);\n      }\n    `;const s=ne(t);if(n)return`\n    float ${a}() {\n      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], ${s});\n      return sampleTexture(${t}, uv);\n    }\n  `;const[i,u]=e.shapeInfo.texShape;return`\n    float ${a}() {\n      vec2 uv = uvFromFlat(${i}, ${u}, ${s});\n      return sampleTexture(${t}, uv);\n    }\n  `}(e,n);case 1:return function(e,n){const t=e.name,a="get"+t.charAt(0).toUpperCase()+t.slice(1);if(e.shapeInfo.isUniform)return`\n      float ${a}(int index) {\n        ${te(e)}\n      }\n    `;const r=e.shapeInfo.texShape,o=r[0],s=r[1];if(1===s&&1===o)return`\n      float ${a}(int index) {\n        return sampleTexture(${t}, halfCR);\n      }\n    `;const i=ne(t);if(1===s)return n?`\n      float ${a}(int index) {\n        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / float(${t}TexShape[0]));\n        return sampleTexture(${t}, uv);\n      }\n    `:`\n      float ${a}(int index) {\n        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / ${o}.0);\n        return sampleTexture(${t}, uv);\n      }\n    `;if(1===o)return n?`\n      float ${a}(int index) {\n        vec2 uv = vec2((float(index + ${i}) + 0.5) / float(${t}TexShape[1]), 0.5);\n        return sampleTexture(${t}, uv);\n      }\n    `:`\n      float ${a}(int index) {\n        vec2 uv = vec2((float(index + ${i}) + 0.5) / ${s}.0, 0.5);\n        return sampleTexture(${t}, uv);\n      }\n    `;if(n)return`\n    float ${a}(int index) {\n      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], index + ${i});\n      return sampleTexture(${t}, uv);\n    }\n  `;return`\n    float ${a}(int index) {\n      vec2 uv = uvFromFlat(${o}, ${s}, index + ${i});\n      return sampleTexture(${t}, uv);\n    }\n  `}(e,n);case 2:return function(e,n){const t=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),s=e.shapeInfo.texShape;if(null!=s&&a.util.arraysEqual(t,s)){if(n)return`\n      float ${o}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `;const e=s[0];return`\n    float ${o}(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(${s[1]}.0, ${e}.0);\n      return sampleTexture(${r}, uv);\n    }\n  `}const{newShape:i,keptDims:u}=a.util.squeezeShape(t),l=i;if(l.length<t.length){const t=["row","col"];return`\n      ${j(oe(e,l),n)}\n      float ${o}(int row, int col) {\n        return ${o}(${se(t,u)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${o}(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2(${t[1]}, 1)));\n        ${te(e)}\n      }\n    `;const c=s[0],d=s[1],p=ne(r);if(1===d)return n?`\n      float ${o}(int row, int col) {\n        float index = dot(vec3(row, col, ${p}), vec3(${r}Shape[1], 1, 1));\n        vec2 uv = vec2(0.5, (index + 0.5) / float(${r}TexShape[0]));\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n    float ${o}(int row, int col) {\n      float index = dot(vec3(row, col, ${p}), vec3(${t[1]}, 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);\n      return sampleTexture(${r}, uv);\n    }\n  `;if(1===c)return n?`\n      float ${o}(int row, int col) {\n        float index = dot(vec3(row, col, ${p}), vec3(${r}Shape[1], 1, 1));\n        vec2 uv = vec2((index + 0.5) / float(${r}TexShape[1]), 0.5);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n    float ${o}(int row, int col) {\n      float index = dot(vec3(row, col, ${p}), vec3(${t[1]}, 1, 1));\n      vec2 uv = vec2((index + 0.5) / ${d}.0, 0.5);\n      return sampleTexture(${r}, uv);\n    }\n  `;if(n)return`\n      float ${o}(int row, int col) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ${r}Shape[1] + col + ${p};\n        vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);\n        return sampleTexture(${r}, uv);\n      }\n    `;return`\n  float ${o}(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * ${t[1]} + col + ${p};\n    vec2 uv = uvFromFlat(${c}, ${d}, index);\n    return sampleTexture(${r}, uv);\n  }\n`}(e,n);case 3:return function(e,n){const t=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),s=t[1]*t[2],i=t[2],{newShape:u,keptDims:l}=a.util.squeezeShape(t),c=u;if(c.length<t.length){const t=["row","col","depth"];return`\n        ${j(oe(e,c),n)}\n        float ${o}(int row, int col, int depth) {\n          return ${o}(${se(t,l)});\n        }\n      `}if(e.shapeInfo.isUniform)return`\n      float ${o}(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3(${s}, ${i}, 1)));\n        ${te(e)}\n      }\n    `;const d=e.shapeInfo.texShape,p=d[0],h=d[1],f=e.shapeInfo.flatOffset;if(h===s&&null==f)return n?`\n      float ${o}(int row, int col, int depth) {\n        int stride1 = ${r}Shape[2];\n        float texR = float(row);\n        float texC = dot(vec2(col, depth), vec2(stride1, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n        float ${o}(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(${i}, 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(${h}.0, ${p}.0);\n          return sampleTexture(${r}, uv);\n        }\n      `;if(h===i&&null==f)return n?`\n      float ${o}(int row, int col, int depth) {\n        float texR = dot(vec2(row, col), vec2(${r}Shape[1], 1));\n        float texC = float(depth);\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n    float ${o}(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(${t[1]}, 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${h}.0, ${p}.0);\n      return sampleTexture(${r}, uv);\n    }\n  `;const x=ne(r);if(n)return`\n    float ${o}(int row, int col, int depth) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int stride0 = ${r}Shape[1] * ${r}Shape[2];\n      int stride1 = ${r}Shape[2];\n      int index = row * stride0 + col * stride1 + depth + ${x};\n      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);\n      return sampleTexture(${r}, uv);\n    }\n    `;return`\n      float ${o}(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ${s} + col * ${i} + depth + ${x};\n        vec2 uv = uvFromFlat(${p}, ${h}, index);\n        return sampleTexture(${r}, uv);\n      }\n  `}(e,n);case 4:return function(e,n){const t=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),s=t[3],i=t[2]*s,u=t[1]*i,{newShape:l,keptDims:c}=a.util.squeezeShape(t);if(l.length<t.length){const t=["row","col","depth","depth2"];return`\n      ${j(oe(e,l),n)}\n      float ${o}(int row, int col, int depth, int depth2) {\n        return ${o}(${se(t,c)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${o}(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4(${u}, ${i}, ${s}, 1)));\n        ${te(e)}\n      }\n    `;const d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,h=p[0],f=p[1],x=`int stride2 = ${r}Shape[3];`,m=`int stride1 = ${r}Shape[2] * stride2;`,g=`int stride0 = ${r}Shape[1] * stride1;`;if(f===u&&null==d)return n?`\n      float ${o}(int row, int col, int depth, int depth2) {\n        ${x}\n        ${m}\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(stride1, stride2, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n      float ${o}(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(${i}, ${s}, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${f}.0, ${h}.0);\n        return sampleTexture(${r}, uv);\n      }\n    `;if(f===s&&null==d)return n?`\n      float ${o}(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(${r}Shape[1] * ${r}Shape[2], ${r}Shape[2], 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${r}TexShape[1], ${r}TexShape[0]);\n        return sampleTexture(${r}, uv);\n      }\n    `:`\n      float ${o}(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(${t[1]*t[2]}, ${t[2]}, 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${f}.0, ${h}.0);\n        return sampleTexture(${r}, uv);\n      }\n    `;const b=ne(r);if(n)return`\n    float ${o}(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      ${x}\n      ${m}\n      ${g}\n      int index = row * stride0 + col * stride1 +\n          depth * stride2 + depth2;\n      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${b});\n      return sampleTexture(${r}, uv);\n    }\n  `;return`\n    float ${o}(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${u} + col * ${i} +\n          depth * ${s} + depth2;\n      vec2 uv = uvFromFlat(${h}, ${f}, index + ${b});\n      return sampleTexture(${r}, uv);\n    }\n  `}(e,n);case 5:return function(e){const n=e.shapeInfo.logicalShape,t=e.name,r="get"+t.charAt(0).toUpperCase()+t.slice(1),o=n[4],s=n[3]*o,i=n[2]*s,u=n[1]*i,{newShape:l,keptDims:c}=a.util.squeezeShape(n);if(l.length<n.length){const n=["row","col","depth","depth2","depth3"];return`\n      ${j(oe(e,l))}\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        return ${r}(${se(n,c)});\n      }\n    `}if(e.shapeInfo.isUniform)return`\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(${u}, ${i}, ${s}, ${o})) +\n          depth3;\n        ${te(e)}\n      }\n    `;const d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,h=p[0],f=p[1];if(f===u&&null==d)return`\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4(${i}, ${s}, ${o}, 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${f}.0, ${h}.0);\n        return sampleTexture(${t}, uv);\n      }\n    `;if(f===o&&null==d)return`\n      float ${r}(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(${n[1]*n[2]*n[3]},\n               ${n[2]*n[3]}, ${n[3]}, 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${f}.0, ${h}.0);\n        return sampleTexture(${t}, uv);\n      }\n    `;const x=ne(t);return`\n    float ${r}(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${u} + col * ${i} + depth * ${s} +\n          depth2 * ${o} + depth3 + ${x};\n      vec2 uv = uvFromFlat(${h}, ${f}, index);\n      return sampleTexture(${t}, uv);\n    }\n  `}(e);case 6:return function(e){const n=e.shapeInfo.logicalShape,t=e.name,r="get"+t.charAt(0).toUpperCase()+t.slice(1),{newShape:o,keptDims:s}=a.util.squeezeShape(n);if(o.length<n.length){const n=["row","col","depth","depth2","depth3","depth4"];return`\n      ${j(oe(e,o))}\n      float ${r}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return ${r}(${se(n,s)});\n      }\n    `}const i=n[5],u=n[4]*i,l=n[3]*u,c=n[2]*l,d=n[1]*c;if(e.shapeInfo.isUniform)return`\n      float ${r}(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4(${d}, ${c}, ${l}, ${u})) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(${i}, 1)));\n        ${te(e)}\n      }\n    `;const p=e.shapeInfo.flatOffset,h=e.shapeInfo.texShape,f=h[0],x=h[1];if(x===d&&null==p)return`\n      float ${r}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4(${c}, ${l}, ${u}, ${i})) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(${x}.0, ${f}.0);\n        return sampleTexture(${t}, uv);\n      }\n    `;if(x===i&&null==p)return`\n      float ${r}(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4(${n[1]*n[2]*n[3]*n[4]},\n               ${n[2]*n[3]*n[4]},\n               ${n[3]*n[4]},\n               ${n[4]})) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(${x}.0, ${f}.0);\n        return sampleTexture(${t}, uv);\n      }\n    `;const m=ne(t);return`\n    float ${r}(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ${d} + col * ${c} + depth * ${l} +\n          depth2 * ${u} + depth3 * ${i} + depth4 + ${m};\n      vec2 uv = uvFromFlat(${f}, ${x}, index);\n      return sampleTexture(${t}, uv);\n    }\n  `}(e);default:throw new Error(`${t.length}-D input sampling is not yet supported`)}}function q(e,n){switch(e.shapeInfo.logicalShape.length){case 0:return function(e){const n=e.name,t="get"+n.charAt(0).toUpperCase()+n.slice(1),a=W();return`\n    vec4 ${t}() {\n      return ${a.texture2D}(${n}, halfCR);\n    }\n  `}(e);case 1:return function(e,n){const t=e.name,a="get"+t.charAt(0).toUpperCase()+t.slice(1),r=e.shapeInfo.texShape,o=W();if(n)return`\n    vec4 ${a}(int index) {\n      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));\n      vec2 uv = packedUVfrom1D(\n        packedTexShape[0], packedTexShape[1], index);\n      return ${o.texture2D}(${t}, uv);\n    }\n  `;const s=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];return`\n    vec4 ${a}(int index) {\n      vec2 uv = packedUVfrom1D(\n        ${s[0]}, ${s[1]}, index);\n      return ${o.texture2D}(${t}, uv);\n    }\n  `}(e,n);case 2:return function(e,n){const t=e.shapeInfo.logicalShape,r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1),s=e.shapeInfo.texShape,i=s[0],u=s[1],l=W();if(null!=s&&a.util.arraysEqual(t,s))return n?`\n      vec4 ${o}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);\n\n        return ${l.texture2D}(${r}, uv);\n      }\n    `:`\n      vec4 ${o}(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(${u}.0, ${i}.0);\n\n        return ${l.texture2D}(${r}, uv);\n      }\n    `;if(n)return`\n    vec4 ${o}(int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(${r}Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);\n      return ${l.texture2D}(${r}, uv);\n    }\n  `;const c=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],d=Math.ceil(t[1]/2);return`\n    vec4 ${o}(int row, int col) {\n      vec2 uv = packedUVfrom2D(${d}, ${c[0]}, ${c[1]}, row, col);\n      return ${l.texture2D}(${r}, uv);\n    }\n  `}(e,n);case 3:return function(e,n){const t=e.shapeInfo.logicalShape,a=e.name,r="get"+a.charAt(0).toUpperCase()+a.slice(1),o=e.shapeInfo.texShape,s=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];if(1===t[0]){const a=[1,2],o=["b","row","col"];return`\n        ${q(oe(e,t.slice(1)),n)}\n        vec4 ${r}(int b, int row, int col) {\n          return ${r}(${se(o,a)});\n        }\n      `}const i=W();if(n)return`\n    vec4 ${r}(int b, int row, int col) {\n      ivec2 packedTexShape = ivec2(ceil(float(${a}TexShape[0]) / 2.0), ceil(float(${a}TexShape[1]) / 2.0));\n      int valuesPerRow = int(ceil(float(${a}Shape[2]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(${a}Shape[1]) / 2.0));\n      vec2 uv = packedUVfrom3D(\n        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);\n      return ${i.texture2D}(${a}, uv);\n    }\n  `;const u=s[0],l=s[1],c=Math.ceil(t[2]/2),d=c*Math.ceil(t[1]/2);return`\n    vec4 ${r}(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        ${u}, ${l}, ${d}, ${c}, b, row, col);\n      return ${i.texture2D}(${a}, uv);\n    }\n  `}(e,n);default:return function(e,n){const t=e.name,a="get"+t.charAt(0).toUpperCase()+t.slice(1),r=W();if(n)return`\n    vec4 ${a}(int b2, int b, int row, int col) {\n      int valuesPerRow = int(ceil(float(${t}Shape[3]) / 2.0));\n      int texelsInBatch = valuesPerRow * int(ceil(float(${t}Shape[2]) / 2.0));\n      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);\n      texelsInBatch *= ${t}Shape[1];\n      index = b2 * texelsInBatch + index;\n      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));\n      int texR = index / packedTexShape[1];\n      int texC = index - texR * packedTexShape[1];\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${r.texture2D}(${t}, uv);\n    }\n  `;const o=e.shapeInfo.logicalShape,s=o.length,i=e.shapeInfo.texShape,u=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)],l=u[0],c=u[1],d=Math.ceil(o[s-1]/2);let p=d*Math.ceil(o[s-2]/2),h="int b, int row, int col",f=`b * ${p} + (row / 2) * ${d} + (col / 2)`;for(let e=2;e<s-1;e++)h=`int b${e}, `+h,p*=o[s-e-1],f=`b${e} * ${p} + `+f;return`\n    vec4 ${a}(${h}) {\n      int index = ${f};\n      int texR = index / ${c};\n      int texC = index - texR * ${c};\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${c}, ${l});\n      return ${r.texture2D}(${t}, uv);\n    }\n  `}(e,n)}}const Y="\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",Q="\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",Z="\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",J="\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";function ee(){return"\n    int getOutputCoords() {\n      return 0;\n    }\n  "}function ne(e){return`offset${e}`}function te(e){const n=e.name,t=a.util.sizeFromShape(e.shapeInfo.logicalShape);return t<2?`return ${n};`:`\n    for (int i = 0; i < ${t}; i++) {\n      if (i == index) {\n        return ${n}[i];\n      }\n    }\n  `}function ae(e){if(e<=1)return"int";if(2===e)return"ivec2";if(3===e)return"ivec3";if(4===e)return"ivec4";if(5===e)return"ivec5";if(6===e)return"ivec6";throw Error(`GPU for rank ${e} is not yet supported`)}function re(e,n,t){const{newShape:r,keptDims:o}=a.util.squeezeShape(n),s=n.length,i=e&&3===s&&1===n[0],u=i?n.slice(1):r,l=!e&&s>1&&!a.util.arraysEqual(n,t)&&r.length<s||i;return{useSqueezeShape:l,uniformShape:l?u:n,keptDims:o}}function oe(e,n){const t=JSON.parse(JSON.stringify(e));return t.shapeInfo.logicalShape=n,t}function se(e,n){return n.map((n=>e[n])).join(", ")}
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
function ie(e,n,t,r){const o=t.map(((e,t)=>{const a={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return null!=e.texData&&null!=e.texData.slice&&e.texData.slice.flatOffset>0&&(a.flatOffset=e.texData.slice.flatOffset),{name:n.variableNames[t],shapeInfo:a}})),s=o.map((e=>e.shapeInfo)),i={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},u=K(o,i,n),l=function(e,n){const t=R(e,(()=>e.createShader(e.FRAGMENT_SHADER)),"Unable to create fragment WebGLShader.");if(f(e,(()=>e.shaderSource(t,n))),f(e,(()=>e.compileShader(t))),(0,a.env)().get("ENGINE_COMPILE_ONLY"))return t;if(!1===e.getShaderParameter(t,e.COMPILE_STATUS))throw b(n,e.getShaderInfoLog(t)),new Error("Failed to compile fragment shader.");return t}(e.gl,u),c=e.createProgram(l);return(0,a.env)().get("ENGINE_COMPILE_ONLY")?{program:n,fragmentShader:l,source:u,webGLProgram:c,inShapeInfos:s,outShapeInfo:i,uniformLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,inShapesLocations:null,inTexShapesLocations:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:n,fragmentShader:l,source:u,webGLProgram:c,inShapeInfos:s,outShapeInfo:i},ue(e,n,c))}function ue(e,n,t){const r={},o={},s={},i=[];let u,l,c,d=null,p=null;p=e.getUniformLocation(t,"NAN",!1),1===(0,a.env)().getNumber("WEBGL_VERSION")&&(d=e.getUniformLocation(t,"INFINITY",!1));const h=!1;for(let a=0;a<n.variableNames.length;a++){const i=n.variableNames[a];r[i]=e.getUniformLocation(t,i,h),r[`offset${i}`]=e.getUniformLocation(t,`offset${i}`,h),n.enableShapeUniforms&&(o[`${i}Shape`]=e.getUniformLocation(t,`${i}Shape`,h),s[`${i}TexShape`]=e.getUniformLocation(t,`${i}TexShape`,h))}return n.enableShapeUniforms&&(u=e.getUniformLocation(t,"outShape",h),c=e.getUniformLocation(t,"outShapeStrides",h),l=e.getUniformLocation(t,"outTexShape",h)),n.customUniforms&&n.customUniforms.forEach(((n,a)=>{i[a]=e.getUniformLocation(t,n.name,h)})),{uniformLocations:r,customUniformLocations:i,infLoc:d,nanLoc:p,inShapesLocations:o,inTexShapesLocations:s,outShapeLocation:u,outShapeStridesLocation:c,outTexShapeLocation:l}}function le(e,n){if(e.length!==n.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${n.length} inputs`);e.forEach(((e,t)=>{const r=e.logicalShape,o=n[t],s=o.shape;if(!a.util.arraysEqual(r,s))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${s} must match`);if(e.isUniform&&o.isUniform)return;const i=e.texShape,u=o.isUniform?null:o.texData.texShape;if(!a.util.arraysEqual(i,u))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${i} and ${u} must match`)}))}function ce(e){return(0,a.env)().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&e<=4}
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
class de{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=i.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=W();this.outputShape=e,this.enableShapeUniforms=ce(this.outputShape.length),this.userCode=`\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ${this.enableShapeUniforms?G(["r","c","d"],e):U(["r","c","d"],e)}\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        ${n.output} = result;\n      }\n    `}}
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
class pe{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=i.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=W();this.outputShape=e,this.enableShapeUniforms=ce(this.outputShape.length),this.userCode=`\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ${this.enableShapeUniforms?G(["r","c","d"],e):U(["r","c","d"],e)}\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));\n        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        ${n.output} = result;\n      }\n    `}}
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
class he{constructor(e){this.variableNames=["A"],this.outTexUsage=u.DOWNLOAD;const n=W();this.outputShape=e,this.userCode=`\n      ${X}\n\n      void main() {\n        float x = getAAtOutCoords();\n        ${n.output} = encode_float(x);\n      }\n    `}}
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
class fe{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=u.DOWNLOAD;const n=W();this.outputShape=e,this.userCode=`\n      ${X}\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        ${n.output} = encode_float(x);\n      }\n    `}}
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
const xe={R:0,G:1,B:2,A:3};class me{constructor(e,n=!1,t="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const a=W();this.outputShape=e,this.enableShapeUniforms=ce(this.outputShape.length);let r="result";n&&(r="floor(result * 255. + 0.5)");let o="";for(let e=0;e<t.length;e++){const n=t[e];o+=`\n          if(offset == ${e}) {\n            result = values[${xe[n]}];\n          }`}this.userCode=`\n      ${this.enableShapeUniforms?"\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n":z(e)}\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int flatIndex = getFlatIndex(coords);\n        float result = 0.;\n        int offset = imod(flatIndex, ${t.length});\n\n        flatIndex = idiv(flatIndex, ${t.length}, 1.);\n\n        int r = flatIndex / texShape[1];\n        if (r < texShape[0]) {\n          int c = imod(flatIndex, texShape[1]);\n          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n          vec4 values = ${a.texture2D}(A, uv);\n          ${o}\n        }\n        ${a.output} = vec4(${r}, 0., 0., 0.);\n      }\n    `}}
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
class ge{constructor(e,n=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const t=W();this.outputShape=e,this.enableShapeUniforms=ce(this.outputShape.length);let a="",r="result";n&&(r="floor(result * 255. + 0.5)");for(let n=0;n<=1;n++)for(let r=0;r<=1;r++){const o=2*n+r;a+=`\n          localCoords = coords;\n          if(localCoords[2] + ${r} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {\n          localCoords[2] += ${r};\n          if (localCoords[1] + ${n} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {\n            localCoords[1] += ${n};\n\n            flatIndex = getFlatIndex(localCoords);\n            offset = imod(flatIndex, 4);\n\n            flatIndex = idiv(flatIndex, 4, 1.);\n\n            int r = flatIndex / texShape[1];\n            int c = imod(flatIndex, texShape[1]);\n            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);\n            values = ${t.texture2D}(A, uv);\n\n            if (offset == 0) {\n              result[${o}] = values[0];\n            } else if (offset == 1) {\n              result[${o}] = values[1];\n            } else if (offset == 2) {\n              result[${o}] = values[2];\n            } else {\n              result[${o}] = values[3];\n            }\n          }\n        }\n        `}this.userCode=`\n        ${this.enableShapeUniforms?"\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n":z(e)}\n\n        void main() {\n          ivec3 coords = getOutputCoords();\n\n          vec4 result = vec4(0.);\n          int flatIndex, r, c, offset;\n          ivec3 localCoords;\n          vec2 uv;\n          vec4 values;\n\n          ${a}\n\n          ${t.output} = ${r};\n        }\n    `}}
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
function be(e){const n=W();return function(e,n){const t=R(e,(()=>e.createShader(e.VERTEX_SHADER)),"Unable to create vertex WebGLShader.");if(f(e,(()=>e.shaderSource(t,n))),f(e,(()=>e.compileShader(t))),!1===e.getShaderParameter(t,e.COMPILE_STATUS))throw console.log(e.getShaderInfoLog(t)),new Error("Failed to compile vertex shader.");return t}(e,`${n.version}\n    precision highp float;\n    ${n.attribute} vec3 clipSpacePos;\n    ${n.attribute} vec2 uv;\n    ${n.varyingVs} vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }`)}function ve(e){return function(e,n){const t=R(e,(()=>e.createBuffer()),"Unable to create WebGLBuffer");return f(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,t))),f(e,(()=>e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW))),t}(e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Ce(e){return function(e,n){const t=R(e,(()=>e.createBuffer()),"Unable to create WebGLBuffer");return f(e,(()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t))),f(e,(()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,n,e.STATIC_DRAW))),t}(e,new Uint16Array([0,1,2,2,1,3]))}function $e(e,n,t,r,o,s){!function(e,n){const t=(0,a.env)().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||n<=0)throw new Error(`Requested texture size [${e}x${n}] is invalid.`);if(e>t||n>t)throw new Error(`Requested texture size [${e}x${n}] greater than WebGL maximum on this browser / GPU [${t}x${t}].`)}(n,t);const i=function(e){return R(e,(()=>e.createTexture()),"Unable to create WebGLTexture.")}(e),u=e.TEXTURE_2D;return f(e,(()=>e.bindTexture(u,i))),f(e,(()=>e.texParameteri(u,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE))),f(e,(()=>e.texParameteri(u,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE))),f(e,(()=>e.texParameteri(u,e.TEXTURE_MIN_FILTER,e.NEAREST))),f(e,(()=>e.texParameteri(u,e.TEXTURE_MAG_FILTER,e.NEAREST))),1===(0,a.env)().getNumber("WEBGL_VERSION")?f(e,(()=>e.texImage2D(u,0,r,n,t,0,o,s,null))):f(e,(()=>e.texStorage2D(u,1,r,n,t))),f(e,(()=>e.bindTexture(e.TEXTURE_2D,null))),{texture:i,texShape:[t,n]}}function Ie(e){return e.internalFormatFloat}function ye(e){return e.internalFormatHalfFloat}function ke(e){return e.downloadTextureFormat}function Re(e){return e.internalFormatPackedFloat}function Se(e){return e.internalFormatPackedHalfFloat}function we(e,n,t,a,r,o,s,i){const u=e,l=new Float32Array(function(e,n){const[t,a]=p(e,n);return t*a*4}(o,s));return u.bindBuffer(u.PIXEL_PACK_BUFFER,n),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,l),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),l}
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
class Te{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];const n=(0,a.env)().getNumber("WEBGL_VERSION");if(null!=e?(this.gl=e,function(e,n){r[e]=n}(n,e)):this.gl=s(n),e=this.gl,2===(0,a.env)().getNumber("WEBGL_VERSION")){const n=e;this.createVertexArray=()=>f(n,(()=>n.createVertexArray())),this.bindVertexArray=e=>f(n,(()=>n.bindVertexArray(e))),this.deleteVertexArray=e=>f(n,(()=>n.deleteVertexArray(e))),this.getVertexArray=()=>f(n,(()=>n.getParameter(n.VERTEX_ARRAY_BINDING)))}else if(null!=e){const n=e.getExtension("OES_vertex_array_object");if(null==n)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>f(e,(()=>n.createVertexArrayOES())),this.bindVertexArray=t=>f(e,(()=>n.bindVertexArrayOES(t))),this.deleteVertexArray=t=>f(e,(()=>n.deleteVertexArrayOES(t))),this.getVertexArray=()=>f(e,(()=>e.getParameter(n.VERTEX_ARRAY_BINDING_OES)))}let t="WEBGL_color_buffer_float";const o="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),1===(0,a.env)().getNumber("WEBGL_VERSION")){const e="OES_texture_float",n="OES_texture_half_float";if(this.textureFloatExtension=m(this.gl,e),F(this.gl,n))this.textureHalfFloatExtension=m(this.gl,n);else if((0,a.env)().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(t),F(this.gl,o))this.colorBufferHalfFloatExtension=m(this.gl,o);else if((0,a.env)().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(t="EXT_color_buffer_float",F(this.gl,t))this.colorBufferFloatExtension=this.gl.getExtension(t);else{if(!F(this.gl,o))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension(o)}this.vertexBuffer=ve(this.gl),this.indexBuffer=Ce(this.gl),this.framebuffer=function(e){return R(e,(()=>e.createFramebuffer()),"Unable to create WebGLFramebuffer.")}(this.gl),this.textureConfig=h(this.gl,this.textureHalfFloatExtension)}get debug(){return(0,a.env)().getBool("DEBUG")}dispose(){if(this.disposed)return;null!=this.program&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),null!=this.outputTexture&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;f(e,(()=>e.finish())),f(e,(()=>e.bindFramebuffer(e.FRAMEBUFFER,null))),f(e,(()=>e.deleteFramebuffer(this.framebuffer))),f(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,null))),f(e,(()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null))),f(e,(()=>e.deleteBuffer(this.indexBuffer))),this.disposed=!0}createFloat32MatrixTexture(e,n){return this.throwIfDisposed(),function(e,n,t,a){const[r,o]=c(n,t);return $e(e,r,o,Ie(a),a.textureFormatFloat,e.FLOAT)}(this.gl,e,n,this.textureConfig)}createFloat16MatrixTexture(e,n){return this.throwIfDisposed(),function(e,n,t,a){const[r,o]=c(n,t);return $e(e,r,o,ye(a),a.textureFormatFloat,a.textureTypeHalfFloat)}(this.gl,e,n,this.textureConfig)}createUnsignedBytesMatrixTexture(e,n){return this.throwIfDisposed(),function(e,n,t,a){const[r,o]=c(n,t);return $e(e,r,o,ke(a),e.RGBA,e.UNSIGNED_BYTE)}(this.gl,e,n,this.textureConfig)}uploadPixelDataToTexture(e,n){this.throwIfDisposed(),function(e,n,t){f(e,(()=>e.bindTexture(e.TEXTURE_2D,n))),t.data instanceof Uint8Array?2===(0,a.env)().getNumber("WEBGL_VERSION")?f(e,(()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,t.data))):f(e,(()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t.width,t.height,0,e.RGBA,e.UNSIGNED_BYTE,t.data))):2===(0,a.env)().getNumber("WEBGL_VERSION")?f(e,(()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,t))):f(e,(()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t))),f(e,(()=>e.bindTexture(e.TEXTURE_2D,null)))}(this.gl,e,n)}uploadDenseMatrixToTexture(e,n,t,r){this.throwIfDisposed(),function(e,n,t,r,o,s){let i,u,l;f(e,(()=>e.bindTexture(e.TEXTURE_2D,n))),o instanceof Uint8Array?(i=new Uint8Array(t*r*4),u=e.UNSIGNED_BYTE,l=e.RGBA):(i=new Float32Array(t*r*4),u=e.FLOAT,l=s.internalFormatPackedFloat),i.set(o),2===(0,a.env)().getNumber("WEBGL_VERSION")?f(e,(()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,t,r,e.RGBA,u,i))):f(e,(()=>e.texImage2D(e.TEXTURE_2D,0,l,t,r,0,e.RGBA,u,i))),f(e,(()=>e.bindTexture(e.TEXTURE_2D,null)))}(this.gl,e,n,t,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,n){return this.throwIfDisposed(),function(e,n,t,a){const[r,o]=p(n,t);return $e(e,r,o,Se(a),e.RGBA,a.textureTypeHalfFloat)}(this.gl,e,n,this.textureConfig)}createPackedMatrixTexture(e,n){return this.throwIfDisposed(),function(e,n,t,a){const[r,o]=p(n,t);return $e(e,r,o,Re(a),e.RGBA,e.FLOAT)}(this.gl,e,n,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(y(this.gl,this.framebuffer),this.outputTexture=null),f(this.gl,(()=>this.gl.deleteTexture(e)))}downloadByteEncodedFloatMatrixFromOutputTexture(e,n,t){return this.downloadMatrixDriver(e,(()=>function(e,n,t,a){const[r,o]=c(n,t),s=new Uint8Array(n*t*4);return f(e,(()=>e.readPixels(0,0,r,o,a.downloadTextureFormat,e.UNSIGNED_BYTE,s))),new Float32Array(s.buffer)}(this.gl,n,t,this.textureConfig)))}downloadPackedMatrixFromBuffer(e,n,t,a,r,o){return we(this.gl,e,0,0,0,r,o,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,n){return function(e,n,t){const a=e,r=new Float32Array(t);return a.bindBuffer(a.PIXEL_PACK_BUFFER,n),a.getBufferSubData(a.PIXEL_PACK_BUFFER,0,r),a.bindBuffer(a.PIXEL_PACK_BUFFER,null),r}(this.gl,e,n)}createBufferFromTexture(e,n,t){this.bindTextureToFrameBuffer(e);const a=function(e,n,t,a){const r=e.createBuffer();f(e,(()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,r)));const o=16*n*t;return f(e,(()=>e.bufferData(e.PIXEL_PACK_BUFFER,o,e.STREAM_READ))),f(e,(()=>e.readPixels(0,0,t,n,e.RGBA,e.FLOAT,0))),f(e,(()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null))),r}(this.gl,n,t,this.textureConfig);return this.unbindTextureToFrameBuffer(),a}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let n,t;if((0,a.env)().getBool("WEBGL_FENCE_API_ENABLED")){const a=e,r=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),t=()=>{const e=a.clientWaitSync(r,0,0);return e===a.ALREADY_SIGNALED||e===a.CONDITION_SATISFIED},n=r}else(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(n=this.beginQuery(),this.endQuery(),t=()=>this.isQueryAvailable(n,(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):t=()=>!0;return{query:n,isFencePassed:t}}downloadMatrixFromPackedTexture(e,n,t){return this.downloadMatrixDriver(e,(()=>function(e,n,t){const a=new Float32Array(n*t*4);return f(e,(()=>e.readPixels(0,0,t,n,e.RGBA,e.FLOAT,a))),a}(this.gl,n,t)))}createProgram(e){this.throwIfDisposed();const n=this.gl;null==this.vertexShader&&(this.vertexShader=be(n));const t=function(e){return R(e,(()=>e.createProgram()),"Unable to create WebGLProgram.")}(n);let r;return f(n,(()=>n.attachShader(t,this.vertexShader))),f(n,(()=>n.attachShader(t,e))),function(e,n){if(f(e,(()=>e.linkProgram(n))),!(0,a.env)().get("ENGINE_COMPILE_ONLY")&&!1===e.getProgramParameter(n,e.LINK_STATUS))throw console.log(e.getProgramInfoLog(n)),new Error("Failed to link vertex and fragment shaders.")}(n,t),r=Object.assign(t,{vao:this.createVertexArray()}),this.bindVertexArray(r.vao),f(n,(()=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,this.indexBuffer))),console.assert(function(e,n,t){return f(e,(()=>e.bindBuffer(e.ARRAY_BUFFER,t))),C(e,n,"clipSpacePos",t,3,20,0)&&C(e,n,"uv",t,2,20,12)}(n,r,this.vertexBuffer),"gpgpu_util.bindVertexProgramAttributeStreams not fully successful."),this.debug&&v(n,r),this.setProgram(r),r}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),null!=e&&(f(this.gl,(()=>this.gl.deleteProgram(e))),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,null!=this.program&&(this.bindVertexArray(this.program.vao),this.debug&&v(this.gl,this.program)),f(this.gl,(()=>this.gl.useProgram(e)))}getUniformLocation(e,n,t=!0){return this.throwIfDisposed(),t?function(e,n,t){return R(e,(()=>e.getUniformLocation(n,t)),'uniform "'+t+'" not present in program.')}(this.gl,e,n):function(e,n,t){return e.getUniformLocation(n,t)}(this.gl,e,n)}getAttributeLocation(e,n){return this.throwIfDisposed(),f(this.gl,(()=>this.gl.getAttribLocation(e,n)))}getUniformLocationNoThrow(e,n){return this.throwIfDisposed(),this.gl.getUniformLocation(e,n)}setInputMatrixTexture(e,n,t){this.throwIfDisposed(),this.throwIfNoProgram(),$(this.gl,e,n,t)}setOutputMatrixTexture(e,n,t){this.setOutputMatrixTextureDriver(e,t,n)}setOutputPackedMatrixTexture(e,n,t){this.throwIfDisposed();const[a,r]=p(n,t);this.setOutputMatrixTextureDriver(e,a,r)}setOutputMatrixWriteRegion(e,n,t,a){this.setOutputMatrixWriteRegionDriver(t,e,a,n)}setOutputPackedMatrixWriteRegion(e,n,t,a){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){null!=this.program&&v(this.gl,this.program),k(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;if(this.debug){const e=this.getVertexArray();console.assert(e===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}f(e,(()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),f(this.gl,(()=>this.gl.finish()))}getQueryTimerExtension(){return null==this.disjointQueryTimerExtension&&(this.disjointQueryTimerExtension=m(this.gl,2===(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(2===(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){const e=this.gl,n=this.getQueryTimerExtensionWebGL2(),t=e.createQuery();return e.beginQuery(n.TIME_ELAPSED_EXT,t),t}const e=this.getQueryTimerExtensionWebGL1(),n=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,n),n}endQuery(){if(2===(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")){const e=this.gl,n=this.getQueryTimerExtensionWebGL2();return void e.endQuery(n.TIME_ELAPSED_EXT)}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await a.util.repeatedTry((()=>this.disposed||this.isQueryAvailable(e,(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")))),this.getQueryTime(e,(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,n){if(0===n)return null;if(2===n){const n=this.gl;return n.getQueryParameter(e,n.QUERY_RESULT)/1e6}{const n=this.getQueryTimerExtensionWebGL1();return n.getQueryObjectEXT(e,n.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,n){if(0===n)return!0;if(2===n){const n=this.gl,t=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(e,n.QUERY_RESULT_AVAILABLE);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(t.GPU_DISJOINT_EXT)),a&&!this.disjoint}{const n=this.getQueryTimerExtensionWebGL1(),t=n.getQueryObjectEXT(e,n.QUERY_RESULT_AVAILABLE_EXT);return null==this.disjoint&&(this.disjoint=this.gl.getParameter(n.GPU_DISJOINT_EXT)),t&&!this.disjoint}}pollFence(e){return new Promise((n=>{this.addItemToPoll((()=>e.isFencePassed()),(()=>n()))}))}pollItems(){const e=function(e){let n=0;for(;n<e.length;++n){if(!e[n]())break}return n-1}(this.itemsToPoll.map((e=>e.isDoneFn)));for(let n=0;n<=e;++n){const{resolveFn:e}=this.itemsToPoll[n];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,n){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:n}),this.itemsToPoll.length>1)return;let t;"setTimeoutCustom"in(0,a.env)().platform&&(t=(0,a.env)().platform.setTimeoutCustom.bind((0,a.env)().platform)),a.util.repeatedTry((()=>(this.pollItems(),0===this.itemsToPoll.length)),(()=>0),null,t)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),I(this.gl,e,this.framebuffer),this.debug&&k(this.gl)}unbindTextureToFrameBuffer(){null!=this.outputTexture?(I(this.gl,this.outputTexture,this.framebuffer),this.debug&&k(this.gl)):y(this.gl,this.framebuffer)}downloadMatrixDriver(e,n){this.bindTextureToFrameBuffer(e);const t=n();return this.unbindTextureToFrameBuffer(),t}setOutputMatrixTextureDriver(e,n,t){this.throwIfDisposed();const a=this.gl;I(a,e,this.framebuffer),this.debug&&k(a),this.outputTexture=e,f(a,(()=>a.viewport(0,0,n,t))),f(a,(()=>a.scissor(0,0,n,t)))}setOutputMatrixWriteRegionDriver(e,n,t,a){this.throwIfDisposed(),f(this.gl,(()=>this.gl.scissor(e,n,t,a)))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(null==this.program)throw new Error("No GPU program is currently set.")}}var Ne=t(1221);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const{addImpl:Ee,bincountImpl:Ae,bincountReduceImpl:_e,castImpl:Oe,ceilImpl:Fe,concatImpl:De,equalImpl:Le,expImpl:Pe,expm1Impl:Be,floorImpl:Ve,gatherNdImpl:We,gatherV2Impl:Ue,greaterImpl:Ge,greaterEqualImpl:Me,lessImpl:ze,lessEqualImpl:Xe,linSpaceImpl:He,logImpl:Ke,maxImpl:je,maximumImpl:qe,minimumImpl:Ye,multiplyImpl:Qe,negImpl:Ze,notEqualImpl:Je,prodImpl:en,raggedGatherImpl:nn,raggedRangeImpl:tn,raggedTensorToTensorImpl:an,rangeImpl:rn,rsqrtImpl:on,scatterImpl:sn,sigmoidImpl:un,simpleAbsImpl:ln,sliceImpl:cn,sparseFillEmptyRowsImpl:dn,sparseReshapeImpl:pn,sparseSegmentReductionImpl:hn,sqrtImpl:fn,stridedSliceImpl:xn,stringNGramsImpl:mn,stringSplitImpl:gn,stringToHashBucketFastImpl:bn,subImpl:vn,tileImpl:Cn,topKImpl:$n,transposeImpl:In,uniqueImpl:yn}=Ne;
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
function kn(e,n){return["x","y","z","w","u","v"].slice(0,n).map((n=>`${e}.${n}`))}function Rn(e,n){return 1===n?[e]:kn(e,n)}
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
class Sn{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=ce(this.outputShape.length),0===this.rank)this.userCode="\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";else{const e=Rn("rc",this.rank),n=ae(this.rank),t=this.getOutOfBoundsCondition(e),a=this.getSetup(e),r=this.getOutput(e);this.userCode=`\n        void main() {\n          ${n} rc = getOutputCoords();\n\n          if(${t}) {\n            setOutput(vec4(0));\n          } else {\n            ${a}\n\n            setOutput(vec4(${r}));\n          }\n        }\n      `}}getSourceCoordsArr(e){const n=[];for(let t=0;t<=1;t++)for(let a=0;a<=1;a++){let r=`${0===t?"r":"rp1"}, ${0===a?"c":"cp1"}`;for(let n=2;n<this.rank;n++)r=`${e[e.length-1-n]},`+r;n.push(r)}return n}getOutOfBoundsCondition(e){if(1===this.rank)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let n="";for(let t=this.rank-2;t<this.rank;t++)n+=`${e[t]} >= ${this.enableShapeUniforms?`outShape[${t}]`:this.outputShape[t]}`,t<this.rank-1&&(n+="||");return n}getSetup(e){if(1===this.rank)return"";const n=e.slice(-2),t=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],a=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`\n      int r = ${n[0]};\n      int c = ${n[1]};\n      int rp1 = r + 1;\n      int cp1 = c + 1;\n\n      bool cEdge = cp1 >= ${t};\n      bool rEdge = rp1 >= ${a};\n    `}getOutput(e){const n=this.getSourceCoordsArr(e);if(1===this.rank){return`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`}return`getA(${n[0]}),\n            cEdge ? 0. : getA(${n[1]}),\n            rEdge ? 0. : getA(${n[2]}),\n            rEdge || cEdge ? 0. : getA(${n[3]})`}}
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
class wn{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=ce(this.outputShape.length);let t="";for(let e=0;e<4;e++){let n="thisRC = rc;";e%2==1&&(n+="thisRC.z += 1;"),e>1&&(n+="thisRC.y += 1;"),t+=`\n        ${n}\n        ${e>0?"if(thisRC.y < rows && thisRC.z < cols){":""}\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[${e}] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        ${e>0?"}":""}\n      `}var a,r;this.userCode=`\n      ${a=n,r=this.enableShapeUniforms,`\n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      ${r?M(["r","c","d"],"inputShape"):U(["r","c","d"],a)}\n      return ivec3(r, c, d);\n    }\n  `}\n      ${this.enableShapeUniforms?"\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;\n  }\n":z(e)}\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};\n        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};\n\n        ${t}\n\n        setOutput(result);\n      }\n    `}}
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
class Tn{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(e,n,t){const a=En(n,t),r=An(e,a,t);r in this.freeTextures||(this.freeTextures[r]=[]),r in this.usedTextures||(this.usedTextures[r]=[]);const o=Nn(e,a,this.gpgpu.gl,this.gpgpu.textureConfig,t);if(this.freeTextures[r].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=o,this.log();const e=this.freeTextures[r].shift();return this.usedTextures[r].push(e),e}let s;return a===l.PACKED_2X2_FLOAT32?s=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):a===l.PACKED_2X2_FLOAT16?s=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):a===l.UNPACKED_FLOAT32?s=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):a===l.UNPACKED_FLOAT16?s=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):a===l.PACKED_4X1_UNSIGNED_BYTE&&(s=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[r].push(s),this.numUsedTextures++,this._numBytesAllocated+=o,this.log(),s}releaseTexture(e,n,t,r){if(null==this.freeTextures)return;const o=En(t,r),s=An(n,o,r);s in this.freeTextures||(this.freeTextures[s]=[]);const i=Nn(n,o,this.gpgpu.gl,this.gpgpu.textureConfig,r),u=(0,a.env)().get("WEBGL_DELETE_TEXTURE_THRESHOLD");-1!==u&&this._numBytesAllocated>u?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=i):(this.freeTextures[s].push(e),this.numFreeTextures++,this._numBytesFree+=i),this.numUsedTextures--;const l=this.usedTextures[s],c=l.indexOf(e);if(c<0)throw new Error("Cannot release a texture that was never provided by this texture manager");l.splice(c,1),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);const n=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*n)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(null!=this.freeTextures){for(const e in this.freeTextures)this.freeTextures[e].forEach((e=>{this.gpgpu.deleteMatrixTexture(e.texture)}));for(const e in this.usedTextures)this.usedTextures[e].forEach((e=>{this.gpgpu.deleteMatrixTexture(e.texture)}));this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function Nn(e,n,t,a,r){const o=function(e,n){switch(e){case l.PACKED_2X2_FLOAT32:return Re(n);case l.PACKED_2X2_FLOAT16:return Se(n);case l.UNPACKED_FLOAT32:return Ie(n);case l.UNPACKED_FLOAT16:return ye(n);case l.PACKED_4X1_UNSIGNED_BYTE:return ke(n);default:throw new Error(`Unknown physical texture type ${e}`)}}(n,a);let s;if(r){const[n,t]=p(e[0],e[1]);s=n*t}else{const[n,t]=c(e[0],e[1]);s=n*t}const i=function(e,n){const t=e;if(n===t.R32F)return 4;if(n===t.R16F)return 2;if(n===t.RGBA32F)return 16;if(n===e.RGBA)return 16;if(n===t.RGBA16F)return 8;if(n===t.RGBA8)return 4;throw new Error(`Unknown internal format ${n}`)}(t,o);return s*i}function En(e,n){if(e===u.UPLOAD)return l.PACKED_2X2_FLOAT32;if(e===u.RENDER||null==e)return function(e){return(0,a.env)().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?l.PACKED_2X2_FLOAT32:l.UNPACKED_FLOAT32:e?l.PACKED_2X2_FLOAT16:l.UNPACKED_FLOAT16}(n);if(e===u.DOWNLOAD||e===u.PIXELS)return l.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${e}`)}function An(e,n,t){return`${e[0]}_${e[1]}_${n}_${t}`}
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
class _n{constructor(e,n){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=ce(this.outputShape.length),this.userCode=`\n      float unaryOperation(float x) {\n        ${n}\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    `}}const On="return abs(x);";const Fn="return x;";class Dn{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=ce(this.outputShape.length),this.userCode=`\n      vec4 unaryOperation(vec4 x) {\n        ${n}\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    `}}
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
class Ln{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=ce(this.outputShape.length);const n=e.length,t=Rn("rc",n),a=ae(n),r=function(e,n){if(1===e)return"rc";let t="";for(let a=0;a<e;a++)t+=n[a],a<e-1&&(t+=",");return t}(n,t),o=t.slice(-2),s=n<=1?"rc":`vec2(${o.join(",")})`;this.userCode=`\n      void main() {\n        ${a} rc = getOutputCoords();\n        vec4 packedInput = getA(${r});\n\n        setOutput(getChannel(packedInput, ${s}));\n      }\n    `}}
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
const Pn=a.kernel_impls.whereImpl,Bn={};const Vn=(0,a.env)().getNumber("CPU_HANDOFF_SIZE_THRESHOLD");class Wn extends a.KernelBackend{constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!(0,a.env)().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let n;if(null!=e){if(e instanceof Te)n=e;else{const t=s((0,a.env)().getNumber("WEBGL_VERSION"),e);n=new Te(t)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const e=s((0,a.env)().getNumber("WEBGL_VERSION"));n=new Te(e),this.binaryCache=((t=(0,a.env)().getNumber("WEBGL_VERSION"))in Bn||(Bn[t]={}),Bn[t]),this.gpgpuCreatedLocally=!0}var t;this.gpgpu=n,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new Tn(this.gpgpu),this.numMBBeforeWarning=null==(0,a.env)().global.screen?1024:(0,a.env)().global.screen.height*(0,a.env)().global.screen.width*window.devicePixelRatio*600/1024/1024,this.texData=new a.DataStorage(this,(0,a.engine)())}nextDataId(){return Wn.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,n,t,a,r,o){const s=this.makeTensorInfo(n,t),i=this.texData.get(s.dataId);i.isPacked=!1,i.texture={texture:e,texShape:[a,r]},i.texShape=[a,r];const u=N(n),l=new me(u,!1,o),c=this.runWebGLProgram(l,[s],t,[[a,r]]);return c.shape=n,i.texture=null,this.disposeIntermediateTensorInfo(s),c.dataId}write(e,n,t){if(((0,a.env)().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||(0,a.env)().getBool("DEBUG"))&&this.checkNumericalProblems(e),"complex64"===t&&null!=e)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const r={id:this.nextDataId()};return this.texData.set(r,{shape:n,dtype:t,values:e,usage:u.UPLOAD,refCount:1}),r}refCount(e){if(this.texData.has(e)){return this.texData.get(e).refCount}return 0}incRef(e){this.texData.get(e).refCount++}decRef(e){if(this.texData.has(e)){this.texData.get(e).refCount--}}move(e,n,t,r,o){if((0,a.env)().getBool("DEBUG")&&this.checkNumericalProblems(n),"complex64"===r)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:t,dtype:r,values:n,usage:u.UPLOAD,refCount:o})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const n=this.texData.get(e),{values:t,dtype:r,complexTensorInfos:o,slice:s,shape:i,isPacked:u}=n;if(null!=s){let n;n=u?new Dn(i,Fn):new _n(i,Fn);const t=this.runWebGLProgram(n,[{dataId:e,shape:i,dtype:r}],r),a=this.readSync(t.dataId);return this.disposeIntermediateTensorInfo(t),a}if(null!=t)return this.convertAndCacheOnCPU(e);if("string"===r)return t;const l=null!=this.activeTimers;let c,d;if(l&&(c=a.util.now()),"complex64"===r){const e=this.readSync(o.real.dataId),n=this.readSync(o.imag.dataId);d=a.backend_util.mergeRealAndImagArrays(e,n)}else d=this.getValuesFromTexture(e);return l&&(this.downloadWaitMs+=a.util.now()-c),this.convertAndCacheOnCPU(e,d)}async read(e){if(this.pendingRead.has(e)){const n=this.pendingRead.get(e);return new Promise((e=>n.push(e)))}const n=this.texData.get(e),{values:t,shape:r,slice:o,dtype:s,complexTensorInfos:i,isPacked:u}=n;if(null!=o){let n;n=u?new Dn(r,Fn):new _n(r,Fn);const t=this.runWebGLProgram(n,[{dataId:e,shape:r,dtype:s}],s),a=this.read(t.dataId);return this.disposeIntermediateTensorInfo(t),a}if(null!=t)return this.convertAndCacheOnCPU(e);if((0,a.env)().getBool("DEBUG")&&!(0,a.env)().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&2===(0,a.env)().getNumber("WEBGL_VERSION"))throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let l,c,p=null;if("complex64"!==s&&(0,a.env)().get("WEBGL_BUFFER_SUPPORTED")){l=this.decode(e);const n=this.texData.get(l.dataId);p=this.gpgpu.createBufferFromTexture(n.texture.texture,...d(r))}if(this.pendingRead.set(e,[]),"complex64"!==s&&await this.gpgpu.createAndWaitForFence(),"complex64"===s){const e=await Promise.all([this.read(i.real.dataId),this.read(i.imag.dataId)]),n=e[0],t=e[1];c=a.backend_util.mergeRealAndImagArrays(n,t)}else if(null==p)c=this.getValuesFromTexture(e);else{const e=a.util.sizeFromShape(r);c=this.gpgpu.downloadFloat32MatrixFromBuffer(p,e)}if(null!=l&&this.disposeIntermediateTensorInfo(l),null!=p){const e=this.gpgpu.gl;f(e,(()=>e.deleteBuffer(p)))}const h=this.convertAndCacheOnCPU(e,c),x=this.pendingRead.get(e);return this.pendingRead.delete(e),x.forEach((e=>e(h))),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&(0,a.engine)().removeDataId(e,this),this.pendingDeletes--),h}readToGPU(e,n={}){const t=this.texData.get(e),{values:r,shape:o,slice:s,dtype:i,isPacked:u,texture:l}=t;if("complex64"===i)throw new Error("Does not support reading texture for complex64 dtype.");if(null!=s){let t;t=u?new Dn(o,Fn):new _n(o,Fn);const a=this.runWebGLProgram(t,[{dataId:e,shape:o,dtype:i}],i),r=this.readToGPU(a,n);return this.disposeIntermediateTensorInfo(a),r}if(null==l)throw null!=r?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const c=this.decode(e,n.customTexShape),d=(0,a.engine)().makeTensorFromTensorInfo(c),p=this.texData.get(c.dataId);return Object.assign({tensorRef:d},p.texture)}bufferSync(e){const n=this.readSync(e.dataId);if("string"===e.dtype)try{const t=n.map((e=>a.util.decodeString(e)));return(0,a.buffer)(e.shape,e.dtype,t)}catch(e){throw new Error("Failed to decode encoded string bytes into utf-8")}return(0,a.buffer)(e.shape,e.dtype,n)}checkNumericalProblems(e){if(null!=e)for(let n=0;n<e.length;n++){const t=e[n];if(!x(t)){if((0,a.env)().getBool("WEBGL_RENDER_FLOAT32_CAPABLE"))throw Error(`The value ${t} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`);throw Error(`The value ${t} cannot be represented on this device.`)}}}getValuesFromTexture(e){const{shape:n,dtype:t,isPacked:r}=this.texData.get(e),o=a.util.sizeFromShape(n);if((0,a.env)().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const t=this.decode(e),a=this.texData.get(t.dataId),r=this.gpgpu.downloadMatrixFromPackedTexture(a.texture.texture,...d(n)).subarray(0,o);return this.disposeIntermediateTensorInfo(t),r}const s=(0,a.env)().getBool("WEBGL_PACK")&&!0===r,i=s?N(n):n,u=s?new fe(i):new he(i),l=this.runWebGLProgram(u,[{shape:i,dtype:t,dataId:e}],"float32"),c=this.texData.get(l.dataId),p=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(c.texture.texture,c.texShape[0],c.texShape[1]).subarray(0,o);return this.disposeIntermediateTensorInfo(l),p}timerAvailable(){return(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){const n=this.activeTimers,t=[];let r=!1;null==this.programTimersStack?(this.programTimersStack=t,r=!0):this.activeTimers.push(t),this.activeTimers=t,e();const o=a.util.flatten(this.activeTimers.map((e=>e.query))).filter((e=>null!=e)),s=a.util.flatten(this.activeTimers.map((e=>e.name))).filter((e=>null!=e));this.activeTimers=n,r&&(this.programTimersStack=null);const i={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if((0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const e=await Promise.all(o);i.kernelMs=a.util.sum(e),i.getExtraProfileInfo=()=>e.map(((e,n)=>({name:s[n],ms:e}))).map((e=>`${e.name}: ${e.ms}`)).join(", ")}else i.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,i})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:a.util.now(),endMs:null}}endTimer(e){return(0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=a.util.now(),e)}async getQueryTime(e){if((0,a.env)().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const n=e;return n.endMs-n.startMs}disposeData(e,n=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(n?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!n&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:t}=this.texData.get(e);return null!=t&&(this.disposeData(t.real.dataId,n),this.disposeData(t.imag.dataId,n)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:n,dtype:t,texShape:a,usage:r,isPacked:o,slice:s}=this.texData.get(e),i=s&&s.origDataId||e,u=this.dataRefCount.get(i);u>1?this.dataRefCount.set(i,u-1):(this.dataRefCount.delete(i),null!=n&&(this.numBytesInGPU-=this.computeBytes(a,t),this.textureManager.releaseTexture(n,a,r,o)));const l=this.texData.get(e);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,n=Vn){return(0,a.env)().getBool("WEBGL_CPU_FORWARD")&&e.every((e=>null==this.texData.get(e.dataId).texture&&a.util.sizeFromShape(e.shape)<n))}getGPGPUContext(){return this.gpgpu}where(e){a.backend_util.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const n=e.dataSync();return Pn(e.shape,n)}packedUnaryOp(e,n,t){const r=new Dn(e.shape,n),o=this.compileAndRun(r,[e],t);return(0,a.engine)().makeTensorFromTensorInfo(o)}abs(e){if(this.shouldExecuteOnCPU([e])&&"complex64"!==e.dtype){const n=ln(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,n)}if((0,a.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,On,e.dtype);const n=new _n(e.shape,On),t=this.compileAndRun(n,[e]);return(0,a.engine)().makeTensorFromTensorInfo(t)}makeTensorInfo(e,n,t){let r;if("string"===n&&null!=t&&t.length>0&&a.util.isString(t[0])){const o=t.map((e=>a.util.encodeString(e)));r=this.write(o,e,n)}else r=this.write(t,e,n);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:n}}makeOutput(e,n,t){return(0,a.engine)().makeTensorFromTensorInfo(this.makeTensorInfo(e,n,t),this)}unpackTensor(e){const n=new Ln(e.shape);return this.runWebGLProgram(n,[e],e.dtype)}packTensor(e){const n=new Sn(e.shape);return this.runWebGLProgram(n,[e],e.dtype,null,!0)}packedReshape(e,n){const t=[w(e.shape),...T(e.shape)],a={dtype:e.dtype,shape:t,dataId:e.dataId},r=[w(n),...T(n)],o=new wn(r,t),s=[t],i=this.runWebGLProgram(o,[a],e.dtype,s,!0);return{dataId:i.dataId,shape:n,dtype:i.dtype}}decode(e,n){const t=this.texData.get(e),{isPacked:r,shape:o,dtype:s}=t;if(null!=n){const e=a.util.sizeFromShape(o),t=n[0]*n[1]*4;a.util.assert(e<=t,(()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data."))}const i=N(o);let u;u=r?new pe(i):new de(i);const l=[null!=n?n:d(i)];return{dtype:s,shape:o,dataId:this.runWebGLProgram(u,[{shape:i,dtype:s,dataId:e}],s,l,!0,n).dataId}}runWebGLProgram(e,n,t,r,o=!1,s){const u=this.makeTensorInfo(e.outputShape,t),l=this.texData.get(u.dataId);if(e.packedOutput&&(l.isPacked=!0),e.outPackingScheme===i.DENSE){const n=null!=s?s:d(e.outputShape);l.texShape=n.map((e=>2*e))}if(null!=e.outTexUsage&&(l.usage=e.outTexUsage),0===a.util.sizeFromShape(u.shape))return l.values=a.util.getTypedArrayFromDType(u.dtype,0),u;const c=[],p=n.map((n=>{if("complex64"===n.dtype)throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let t=this.texData.get(n.dataId);if(null==t.texture){if(!e.packedInputs&&a.util.sizeFromShape(n.shape)<=(0,a.env)().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:n.shape,texData:null,isUniform:!0,uniformValues:t.values};e.packedInputs&&(t.isPacked=!0,t.shape=n.shape)}if(this.uploadToGPU(n.dataId),!!t.isPacked!=!!e.packedInputs)n=t.isPacked?this.unpackTensor(n):this.packTensor(n),c.push(n),t=this.texData.get(n.dataId);else if(t.isPacked&&!A(t.shape,n.shape)){const e=n,a=n.shape;n.shape=t.shape,n=this.packedReshape(n,a),c.push(n),t=this.texData.get(n.dataId),e.shape=a}return{shape:n.shape,texData:t,isUniform:!1}}));this.uploadToGPU(u.dataId);const h={shape:u.shape,texData:l,isUniform:!1},f=function(e,n,t){let r="";n.concat(t).forEach((n=>{const o=null!=n.texData&&null!=n.texData.slice&&n.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!n.isUniform){const s=n.texData.texShape,{useSqueezeShape:i,uniformShape:u,keptDims:l}=re(e.packedInputs,n.shape,s);let c="",d="",p="";if(1===u.length&&e.packedInputs){const e=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];c=`${e[0]>1}_${e[1]>1}`}else if(2!==u.length||e.packedInputs){if(u.length>2&&!e.packedInputs){const e=a.util.computeStrides(u);p=`${e[0]===s[1]}_${e[e.length-1]===s[1]}`}}else d=`${u[0]>1}_${u[1]>1}`;const h=n.shape.length,f=2===u.length&&a.util.arraysEqual(n.shape,s),x=1===a.util.sizeFromShape(n.shape),m=a.backend_util.getBroadcastDims(n.shape,t.shape),g=!e.packedInputs&&h===t.shape.length&&a.util.arraysEqual(s,t.texData.texShape),b=e.packedInputs||u.length>2?"":`${s[0]>1}_${s[1]>1}`;r+=`${h}_${g}_${i?l:""}_${u.length}_${x}_${m}_${f}_${c}_${d}_${p}_${b}_${o}`}else{const e=n.isUniform?"uniform":n.texData.texShape;r+=`${n.shape}_${e}_${o}`}}));const o=e.userCode;let s=e.constructor.name;return s+="_"+r+"_"+o+`${(0,a.env)().getNumber("WEBGL_VERSION")}`,s}(e,p,h),x=this.getAndSaveBinary(f,(()=>ie(this.gpgpu,e,p,h))),m=null!=this.activeTimers;let g;m&&(g=this.startTimer()),(0,a.env)().get("ENGINE_COMPILE_ONLY")||function(e,n,t,r,o){n.program.enableShapeUniforms||(le(n.inShapeInfos,t),le([n.outShapeInfo],[r]));const s=r.texData.texture,i=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(s.texture,i[0],i[1]):e.setOutputMatrixTexture(s.texture,i[0],i[1]),e.setProgram(n.webGLProgram),1===(0,a.env)().getNumber("WEBGL_VERSION")&&null!==n.infLoc&&e.gl.uniform1f(n.infLoc,1/0),null!==n.nanLoc&&e.gl.uniform1f(n.nanLoc,NaN),t.forEach(((t,r)=>{const o=n.program.variableNames[r],s=n.uniformLocations[o],i=n.uniformLocations[`offset${o}`],u=n.inShapesLocations[`${o}Shape`],l=n.inTexShapesLocations[`${o}TexShape`];if(u){const{uniformShape:a}=re(n.program.packedInputs,t.shape,t.texData.texShape);switch(a.length){case 1:e.gl.uniform1iv(u,new Int32Array(a));break;case 2:e.gl.uniform2iv(u,new Int32Array(a));break;case 3:e.gl.uniform3iv(u,new Int32Array(a));break;case 4:e.gl.uniform4iv(u,new Int32Array(a))}}if(l&&e.gl.uniform2i(l,t.texData.texShape[0],t.texData.texShape[1]),null!=s)if(t.isUniform)if(a.util.sizeFromShape(t.shape)<2)e.gl.uniform1f(s,t.uniformValues[0]);else{let n=t.uniformValues;n instanceof Float32Array||(n=new Float32Array(n)),e.gl.uniform1fv(s,n)}else null!=t.texData.slice&&null!=i&&e.gl.uniform1i(i,t.texData.slice.flatOffset),e.setInputMatrixTexture(t.texData.texture.texture,s,r)}));const u=n.outShapeLocation;if(u)switch(r.shape.length){case 1:e.gl.uniform1iv(u,new Int32Array(r.shape));break;case 2:e.gl.uniform2iv(u,new Int32Array(r.shape));break;case 3:e.gl.uniform3iv(u,new Int32Array(r.shape));break;case 4:e.gl.uniform4iv(u,new Int32Array(r.shape))}if(n.outShapeStridesLocation){const t=a.util.computeStrides(r.shape);switch(r.shape.length){case 2:e.gl.uniform1iv(n.outShapeStridesLocation,new Int32Array(t));break;case 3:e.gl.uniform2iv(n.outShapeStridesLocation,new Int32Array(t));break;case 4:e.gl.uniform3iv(n.outShapeStridesLocation,new Int32Array(t))}}n.outTexShapeLocation&&e.gl.uniform2i(n.outTexShapeLocation,r.texData.texShape[0],r.texData.texShape[1]),n.program.customUniforms&&o&&n.program.customUniforms.forEach(((t,a)=>{const r=n.customUniformLocations[a],s=o[a];if("float"===t.type)e.gl.uniform1fv(r,s);else if("vec2"===t.type)e.gl.uniform2fv(r,s);else if("vec3"===t.type)e.gl.uniform3fv(r,s);else if("vec4"===t.type)e.gl.uniform4fv(r,s);else if("int"===t.type)e.gl.uniform1iv(r,s);else if("ivec2"===t.type)e.gl.uniform2iv(r,s);else if("ivec3"===t.type)e.gl.uniform3iv(r,s);else{if("ivec4"!==t.type)throw Error(`uniform type ${t.type} is not supported yet.`);e.gl.uniform4iv(r,s)}})),e.executeProgram()}(this.gpgpu,x,p,h,r),c.forEach((e=>this.disposeIntermediateTensorInfo(e))),m&&(g=this.endTimer(g),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(g)}));const b=(0,a.env)().get("WEBGL_FLUSH_THRESHOLD");if(b>0){const e=a.util.now();e-this.lastGlFlushTime>b&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=e)}if(!(0,a.env)().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&!1===o){const e=this.unpackTensor(u);return this.disposeIntermediateTensorInfo(u),e}return u}compileAndRun(e,n,t,a,r=!1){t=t||n[0].dtype;return this.runWebGLProgram(e,n,t,a,r)}getAndSaveBinary(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){if(!this.disposed){if(!(0,a.env)().getBool("IS_TEST")){Object.keys(this.binaryCache).forEach((e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}))}this.textureManager.dispose(),null!=this.canvas&&"undefined"!=typeof HTMLCanvasElement&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0}}floatPrecision(){return null==this.floatPrecisionValue&&(this.floatPrecisionValue=(0,a.tidy)((()=>{if(!(0,a.env)().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=(0,a.env)().getBool("DEBUG");(0,a.env)().set("DEBUG",!1);const n=this.abs((0,a.scalar)(1e-8)).dataSync()[0];if((0,a.env)().set("DEBUG",e),n>0)return 32}return 16}))),this.floatPrecisionValue}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}uploadToGPU(e){const n=this.texData.get(e),{shape:t,dtype:r,values:o,texture:s,usage:i,isPacked:l}=n;if(null!=s)return;const c=null!=this.activeTimers;let d;c&&(d=a.util.now());let h=n.texShape;if(null==h&&(h=function(e,n=!1){let t=(0,a.env)().getNumber("WEBGL_MAX_TEXTURE_SIZE"),r=(0,a.env)().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");if(r===1/0&&(0,a.env)().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(r=t/2),n&&(t*=2,r*=2,1===(e=e.map(((n,t)=>t>=e.length-2?a.util.nearestLargerEven(e[t]):e[t]))).length&&(e=[2,e[0]])),2!==e.length){const n=a.util.squeezeShape(e);e=n.newShape}let o=a.util.sizeFromShape(e),s=null;e.length<=1&&o<=t?s=[1,o]:2===e.length&&e[0]<=t&&e[1]<=t?s=e:3===e.length&&e[0]*e[1]<=t&&e[2]<=t?s=[e[0]*e[1],e[2]]:3===e.length&&e[0]<=t&&e[1]*e[2]<=t?s=[e[0],e[1]*e[2]]:4===e.length&&e[0]*e[1]*e[2]<=t&&e[3]<=t?s=[e[0]*e[1]*e[2],e[3]]:4===e.length&&e[0]<=t&&e[1]*e[2]*e[3]<=t&&(s=[e[0],e[1]*e[2]*e[3]]);const i=null!=s&&Math.max(...s)>r&&Math.min(...s)<=(n?2:1)&&Math.min(...s)>0;if(null==s||i)if(n){const n=w(e);let t=2,r=2;e.length&&([t,r]=T(e)),o=n*(t/2)*(r/2),s=a.util.sizeToSquarishShape(o).map((e=>2*e))}else s=a.util.sizeToSquarishShape(o);return s}(t,l),n.texShape=h),null!=o){const e=N(t);let s,i=h[1],f=h[0];const x=o instanceof Uint8Array||o instanceof Uint8ClampedArray;!l&&x||([i,f]=p(h[0],h[1])),s=l?new ge(e,x):new me(e,x);const m=x?[f,i]:h,g=this.makeTensorInfo(m,r),b=this.texData.get(g.dataId);b.usage=x?u.PIXELS:u.UPLOAD,b.texShape=m,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(g.dataId),i,f,o);const v=[[f,i]],C=!0,$=this.runWebGLProgram(s,[g],r,v,C),I=this.texData.get($.dataId);n.texShape=I.texShape,n.isPacked=I.isPacked,n.usage=I.usage,(0,a.env)().get("ENGINE_COMPILE_ONLY")?this.disposeData($.dataId):(n.texture=I.texture,n.values=null,this.texData.delete($.dataId)),this.disposeIntermediateTensorInfo(g),c&&(this.uploadWaitMs+=a.util.now()-d)}else{const e=this.acquireTexture(h,i,r,l);n.texture=e}}convertAndCacheOnCPU(e,n){const t=this.texData.get(e),{dtype:a}=t;return null!=n&&(t.values=function(e,n){if("float32"===n||"complex64"===n)return e;if("int32"===n||"bool"===n){const t="int32"===n?new Int32Array(e.length):new Uint8Array(e.length);for(let n=0;n<t.length;++n)t[n]=Math.round(e[n]);return t}throw new Error(`Unknown dtype ${n}`)}(n,a)),t.values}acquireTexture(e,n,t,a){if(this.numBytesInGPU+=this.computeBytes(e,t),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){const e=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${e} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,n,a)}computeBytes(e,n){return e[0]*e[1]*a.util.bytesPerElement(n)}checkCompileCompletion(){for(const[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){const e=[];if(this.gpgpu.parallelCompilationExtension){for(const[,n]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(n));return Promise.all(e)}for(const[,n]of Object.entries(this.binaryCache)){const t=new Promise((e=>{try{this.checkCompletion_(n),e(!0)}catch(e){throw e}}));e.push(t)}return Promise.all(e)}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await(0,a.nextFrame)(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(!1===this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)){if(console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),!1===this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS))throw b(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),new Error("Failed to compile fragment shader.");throw new Error("Failed to link vertex and fragment shaders.")}return!0}getUniformLocations(){for(const[,e]of Object.entries(this.binaryCache)){const{uniformLocations:n,customUniformLocations:t,infLoc:a,nanLoc:r,inShapesLocations:o,inTexShapesLocations:s,outShapeLocation:i,outShapeStridesLocation:u,outTexShapeLocation:l}=ue(this.gpgpu,e.program,e.webGLProgram);e.uniformLocations=n,e.customUniformLocations=t,e.infLoc=a,e.nanLoc=r,e.inShapesLocations=o,e.inTexShapesLocations=s,e.outShapeLocation=i,e.outShapeStridesLocation=u,e.outTexShapeLocation=l}}createTensorFromGPUData(e,n,t){e.channels=e.channels||"RGBA";const{texture:r,height:o,width:s,channels:i}=e,u=(0,a.engine)().backend;if(!u.gpgpu.gl.isTexture(r))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");const l=u.writeTexture(r,n,t,o,s,i);return(0,a.engine)().makeTensorFromDataId(l,n,t,u)}}Wn.nextDataId=0,
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
a.device_util.isBrowser()&&(0,a.registerBackend)("webgl",(()=>new Wn),2);class Un{constructor(e,n,t){this.variableNames=["A","B"],this.outputShape=a.backend_util.assertAndGetBroadcastShape(n,t),this.enableShapeUniforms=ce(this.outputShape.length),this.userCode=`\n      float binaryOperation(float a, float b) {\n        ${e}\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    `}}class Gn{constructor(e,n,t,r=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=a.backend_util.assertAndGetBroadcastShape(n,t);const o=this.outputShape.length;this.enableShapeUniforms=ce(o);let s="";if(r)if(0===o||1===a.util.sizeFromShape(this.outputShape))s="\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ";else{if(s=`\n          ${ae(o)} coords = getOutputCoords();\n        `,1===o)this.enableShapeUniforms?s+="\n            result.y = (coords + 1) >= outShape ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ":s+=`\n            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          `;else{const e=Rn("coords",o);this.enableShapeUniforms?s+=`\n            bool nextRowOutOfBounds =\n              (${e[o-2]} + 1) >= outShape[${o} - 2];\n            bool nextColOutOfBounds =\n              (${e[o-1]} + 1) >= outShape[${o} - 1];\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          `:s+=`\n            bool nextRowOutOfBounds =\n              (${e[o-2]} + 1) >= ${this.outputShape[o-2]};\n            bool nextColOutOfBounds =\n              (${e[o-1]} + 1) >= ${this.outputShape[o-1]};\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          `}}this.userCode=`\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        ${e}\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        ${s}\n\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Mn(e){const{inputs:n,backend:t}=e,{x:a}=n;return t.incRef(a.dataId),{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}const zn={kernelName:a.Identity,backendName:"webgl",kernelFunc:Mn};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Xn(e){const{inputs:n,backend:t}=e,{real:a,imag:r}=n,o=t.makeTensorInfo(a.shape,"complex64"),s=t.texData.get(o.dataId),i=Mn({inputs:{x:a},backend:t}),u=Mn({inputs:{x:r},backend:t});return s.complexTensorInfos={real:i,imag:u},o}const Hn={kernelName:a.Complex,backendName:"webgl",kernelFunc:Xn},Kn="return (a < 0.) ? b * a : a;",jn="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";const qn={kernelName:a.LeakyRelu,backendName:"webgl",kernelFunc:function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{alpha:s}=r,i=t.makeTensorInfo([],"float32",a.util.createScalarValue(s,"float32")),u=(0,a.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(jn,o.shape,i.shape):new Un(Kn,o.shape,i.shape),l=t.runWebGLProgram(u,[o,i],"float32");return t.disposeIntermediateTensorInfo(i),l}},Yn="return (a < 0.) ? b * a : a;",Qn="\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n";const Zn={kernelName:a.Prelu,backendName:"webgl",kernelFunc:function(e){const{inputs:n,backend:t}=e,{x:r,alpha:o}=n,s=(0,a.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(Qn,r.shape,o.shape):new Un(Yn,r.shape,o.shape);return t.runWebGLProgram(s,[r,o],"float32")}};function Jn({opSnippet:e,packedOpSnippet:n,cpuKernelImpl:t,dtype:r}){return({inputs:o,backend:s})=>{const{x:i}=o,u=s,l=r||i.dtype;if(u.shouldExecuteOnCPU([i])&&null!=t){const e=u.texData.get(i.dataId),n=t(e.values,l);return u.makeTensorInfo(i.shape,l,n)}let c;return c=(0,a.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&null!=n?new Dn(i.shape,n):new _n(i.shape,e),u.runWebGLProgram(c,[i],l)}}function et({opSnippet:e,packedOpSnippet:n,checkOutOfBounds:t=!1,supportsComplex:r=!1,cpuKernelImpl:o,dtype:s}){return({inputs:i,backend:u})=>{const{a:l,b:c}=i,d=u;if(r&&"complex64"===l.dtype){const n=d.texData.get(l.dataId),t=d.texData.get(c.dataId),[r,o]=[[n.complexTensorInfos.real,t.complexTensorInfos.real],[n.complexTensorInfos.imag,t.complexTensorInfos.imag]].map((n=>{const[t,r]=n,o={dataId:t.dataId,dtype:t.dtype,shape:l.shape},s={dataId:r.dataId,dtype:r.dtype,shape:c.shape},i=new Un(e,l.shape,c.shape);return d.runWebGLProgram(i,[o,s],(0,a.upcastType)(t.dtype,r.dtype))})),s=Xn({inputs:{real:r,imag:o},backend:d});return d.disposeIntermediateTensorInfo(r),d.disposeIntermediateTensorInfo(o),s}const p=s||(0,a.upcastType)(l.dtype,c.dtype);if(("string"===l.dtype||"string"===c.dtype||d.shouldExecuteOnCPU([l,c]))&&null!=o){const e=d.texData.get(l.dataId).values,n=d.texData.get(c.dataId).values,t="string"===l.dtype?a.backend_util.fromUint8ToStringArray(e):e,r="string"===l.dtype?a.backend_util.fromUint8ToStringArray(n):n,[s,i]=o(l.shape,c.shape,t,r,p),u=d.makeTensorInfo(i,p);return d.texData.get(u.dataId).values=s,u}let h;return h=(0,a.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&null!=n?new Gn(n,l.shape,c.shape,t):new Un(e,l.shape,c.shape),d.runWebGLProgram(h,[l,c],p)}}function nt(e,n=!1){if("linear"===e)return"return x;";if("relu"===e)return n?"\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n":"if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : x;\n";if("elu"===e)return n?"\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n":"return (x >= 0.0) ? x : (exp(x) - 1.0);";if("relu6"===e)return n?"\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n":"if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n";if("prelu"===e)return n?Qn:Yn;if("leakyrelu"===e)return n?jn:Kn;if("sigmoid"===e)return"return 1.0 / (1.0 + exp(-1.0 * x));";throw new Error(`Activation ${e} has not been implemented for the WebGL backend.`)}
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
class tt{constructor(e,n,t,a=!1,r=!1,o=!1,s=null,i=!1,u=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=ce(this.outputShape.length);const l=a?e[1]:e[2],c=Math.ceil(l/2),d=a?"i * 2, rc.y":"rc.y, i * 2",p=r?"rc.z, i * 2":"i * 2, rc.z",h=a?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],f=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let x="",m="";s&&(x=i?`vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ${s}\n        }`:u?`vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          ${s}\n        }`:`vec4 activation(vec4 x) {\n          ${s}\n        }`,m="result = activation(result);");const g=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),u&&this.variableNames.push("leakyreluAlpha");let b="rc.x",v="rc.x";e[0]<n[0]?b=`imod(rc.x, ${e[0]})`:n[0]<e[0]&&(v=`imod(rc.x, ${n[0]})`),this.userCode=`\n      ${x}\n      // Don't use uniform for sharedDimensionPacked for performance.\n      const float sharedDimension = ${c}.0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        int batchA = ${b};\n        int batchB = ${v};\n        for (int i = 0; i < ${c}; i++) {\n          vec4 a = getMatrixA(batchA, ${d});\n          vec4 b = getMatrixB(batchB, ${p});\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += (${h[0]} * ${f[0]});\n          result += (${h[1]} * ${f[1]});\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        ${g}\n\n        ${m}\n\n        setOutput(result);\n      }\n    `}}
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
const at="return areal * breal - aimag * bimag;",rt="return areal * bimag + aimag * breal;";class ot{constructor(e,n,t){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=a.backend_util.assertAndGetBroadcastShape(n,t),this.userCode=`\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        ${e}\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const st="return a * b;";function it(e){const{inputs:n,backend:t}=e,{a:r,b:o}=n,s=a.backend_util.upcastType(r.dtype,o.dtype);if("complex64"===r.dtype){const e=t.texData.get(r.dataId),n=t.texData.get(o.dataId),a=new ot(at,r.shape,o.shape),s=new ot(rt,r.shape,o.shape),i=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:r.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:r.shape},{dataId:n.complexTensorInfos.real.dataId,dtype:n.complexTensorInfos.real.dtype,shape:o.shape},{dataId:n.complexTensorInfos.imag.dataId,dtype:n.complexTensorInfos.imag.dtype,shape:o.shape}],u=t.runWebGLProgram(a,i,"float32"),l=t.runWebGLProgram(s,i,"float32"),c=Xn({inputs:{real:u,imag:l},backend:t});return t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(l),c}if(t.shouldExecuteOnCPU([r,o])){const e=t.texData.get(r.dataId),n=t.texData.get(o.dataId),[a,i]=Qe(r.shape,o.shape,e.values,n.values,s),u=t.makeTensorInfo(i,s);return t.texData.get(u.dataId).values=a,u}let i;return i=(0,a.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn(st,r.shape,o.shape):new Un(st,r.shape,o.shape),t.runWebGLProgram(i,[r,o],s)}const ut={kernelName:a.Multiply,backendName:"webgl",kernelFunc:it};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function lt(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{shape:s}=r,i=t,u=a.util.sizeFromShape(o.shape),l=a.util.inferFromImplicitShape(s,u),c=a.util.sizeFromShape(l);a.util.assert(u===c,(()=>`The new shape (${l}) has ${c} elements and the old shape (${o.shape}) has ${u} elements. The new shape and old shape must have the same number of elements.`));const d=i.texData.get(o.dataId);return!d.isPacked||A(o.shape,l)||null!==d.texture&&A(d.shape,l)?(i.incRef(o.dataId),{dataId:o.dataId,shape:l,dtype:o.dtype}):
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,n,t){const a=[w(e.shape),...T(e.shape)],r={dtype:e.dtype,shape:a,dataId:e.dataId},o=[w(n),...T(n)],s=new wn(o,a),i=[a],u=t.runWebGLProgram(s,[r],e.dtype,i,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}}(o,l,i)}const ct={kernelName:a.Reshape,backendName:"webgl",kernelFunc:lt};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class dt{constructor(e,n){this.variableNames=["x"];const{windowSize:t,batchSize:r,inSize:o,outSize:s}=e;this.outputShape=[r,s];const i=4*Math.floor(t/4),u=t%4;let l="sumValue += dot(values, ones);";if(null!=n){const e=1/n;l=`sumValue += dot(values * ${a.util.isInt(e)?e.toPrecision(2):e}, ones);`}let c="";o%t>0&&(c=`\n        if (inIdx < 0 || inIdx >= ${o}) {\n          return 0.0;\n        }\n      `),this.userCode=`\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ${c}\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ${t};\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ${i}; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ${l}\n        }\n\n        int inIdx = inOffset + ${i};\n        if (${1===u}) {\n          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);\n\n          ${l}\n        } else if (${2===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1), 0.0, 0.0);\n\n          ${l}\n        } else if (${3===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2), 0.0);\n\n          ${l}\n        }\n        setOutput(sumValue);\n      }\n    `}}
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
class pt{constructor(e,n){this.variableNames=["x"];const{windowSize:t,batchSize:a,inSize:r,outSize:o}=e;this.outputShape=[a,o];let s="0.0",i="";"prod"===n?s="1.0":"min"===n?(s="1.0 / 1e-20",i="min"):"max"===n&&(s="-1.0 / 1e-20",i="max");let u=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"sum"===n?u="sumValue":"prod"===n?u="prodValue":"all"===n?u="allValue":"any"===n&&(u="anyValue");const l=4*Math.floor(t/4),c=t%4;let d=`\n      if (${"sum"===n}) {\n        sumValue += dot(values, ones);\n      } else if (${"prod"===n}) {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = ${i}(values, minMaxValue);\n        if (${"min"===n} || ${"max"===n}) {\n          minMaxValue = ${i}(values, minMaxValue);\n          bvec4 isNaN = isnan(values);\n          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {\n            minMaxValue = vec4(NAN);\n          }\n        }\n      }\n    `,p="vec4";"all"===n?(s="1.0",d="\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ",p="bvec4"):"any"===n&&(s="0.0",d="\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ",p="bvec4");let h="";r%t>0&&(h=`\n        if (inIdx < 0 || inIdx >= ${r}) {\n          return initializationValue;\n        }\n      `),this.userCode=`\n      const float initializationValue = ${s};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ${h}\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ${t};\n\n        vec4 minMaxValue = vec4(${s});\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < ${l}; i += 4) {\n          int inIdx = inOffset + i;\n          ${p} values = ${p}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ${d}\n        }\n\n        int inIdx = inOffset + ${l};\n        if (${1===c}) {\n          ${p} values = ${p}(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          ${d}\n        } else if (${2===c}) {\n          ${p} values = ${p}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          ${d}\n        } else if (${3===c}) {\n          ${p} values = ${p}(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          ${d}\n        }\n        setOutput(${u});\n      }\n    `}}function ht(e,n,t,r){const o=
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const n=[];for(;0===n.length||1!==n[n.length-1].outSize;){const t=n.length?n[n.length-1].outSize:e[1],r=a.backend_util.computeOptimalWindowSize(t);n.push({inSize:t,windowSize:r,outSize:Math.ceil(t/r)})}return n}(e.shape);let s=e;for(let a=0;a<o.length;a++){const{inSize:i,windowSize:u,outSize:l}=o[a];let c,d;c="mean"===t?0===a?new dt({windowSize:u,inSize:i,batchSize:e.shape[0],outSize:l},i):new dt({windowSize:u,inSize:i,batchSize:e.shape[0],outSize:l}):new pt({windowSize:u,inSize:i,batchSize:e.shape[0],outSize:l},t),d=s,s=r.runWebGLProgram(c,[s],n),d.dataId!==e.dataId&&r.disposeIntermediateTensorInfo(d)}return s}
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
class ft{constructor(e,n){this.variableNames=["A"];const t=new Array(e.length);for(let a=0;a<t.length;a++)t[a]=e[n[a]];this.outputShape=t,this.rank=t.length;const a=ae(this.rank),r=function(e){const n=e.length;if(n>6)throw Error(`Transpose for rank ${n} is not yet supported`);const t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],a=new Array(n);for(let n=0;n<e.length;n++)a[e[n]]=t[n];return a.join()}(n);this.userCode=`\n    void main() {\n      ${a} resRC = getOutputCoords();\n      setOutput(getA(${r}));\n    }\n    `}}
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
class xt{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const t=new Array(e.length);for(let a=0;a<t.length;a++)t[a]=e[n[a]];if(this.outputShape=t,this.rank=t.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const a=ae(this.rank),r=kn("rc",this.rank),o=new Array(this.rank);for(let e=0;e<n.length;e++)o[n[e]]=r[e];const s=`vec2(${o.slice(-2).join()})`,i=`++${r[this.rank-1]} < ${t[this.rank-1]}`,u=`getChannel(getA(${o.join()}), ${s})`;this.userCode=`\n    void main() {\n      ${a} rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = ${u};\n      if(${i}) {\n        result[1] = ${u};\n      }\n      --${r[this.rank-1]};\n      if(++${r[this.rank-2]} < ${t[this.rank-2]}) {\n        result[2] = ${u};\n        if(${i}) {\n          result[3] = ${u};\n        }\n      }\n      setOutput(result);\n    }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function mt(e,n,t){const r=(0,a.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new xt(e.shape,n):new ft(e.shape,n);return t.runWebGLProgram(r,[e],e.dtype)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function gt(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{axis:s,keepDims:i}=r;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
return function(e,n,t,r){const o=n,s=e.shape.length,i=a.util.parseAxisParam(o,e.shape);let u=i;const l=a.backend_util.getAxesPermutation(u,s),c=null!=l;let d=e;c&&(d=mt(e,l,r),u=a.backend_util.getInnerMostAxes(u.length,s)),a.backend_util.assertAxesAreInnerMostDims("sum",u,s);const[p,h]=a.backend_util.computeOutAndReduceShapes(d.shape,u);let f=p;t&&(f=a.backend_util.expandShapeToKeepDim(p,i));const x=a.util.sizeFromShape(h),m=lt({inputs:{x:d},attrs:{shape:[a.util.sizeFromShape(e.shape)/x,x]},backend:r}),g=ht(m,(0,a.sumOutType)(e.dtype),"sum",r),b=lt({inputs:{x:g},attrs:{shape:f},backend:r});return r.disposeIntermediateTensorInfo(m),r.disposeIntermediateTensorInfo(g),c&&r.disposeIntermediateTensorInfo(d),b}(o,s,i,t)}const bt={kernelName:a.Sum,backendName:"webgl",kernelFunc:gt};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function vt(e){const{inputs:n,backend:t,attrs:a}=e,{x:r}=n,{perm:o}=a,s=t,i=r.shape.length,u=new Array(i);for(let e=0;e<u.length;e++)u[e]=r.shape[o[e]];let l;if(s.shouldExecuteOnCPU([r])){const e=s.texData.get(r.dataId).values,n=In(e,r.shape,r.dtype,o,u);l=s.makeTensorInfo(u,r.dtype);s.texData.get(l.dataId).values=n}else l=mt(r,o,s);return l}const Ct={kernelName:a.Transpose,backendName:"webgl",kernelFunc:vt};function $t({a:e,b:n,transposeA:t,transposeB:r,backend:o,bias:s=null,preluActivationWeights:i=null,leakyreluAlpha:u=0,activation:l=null}){const c=e.shape.length,d=n.shape.length,p=t?e.shape[c-2]:e.shape[c-1],h=r?n.shape[d-1]:n.shape[d-2],f=t?e.shape[c-1]:e.shape[c-2],x=r?n.shape[d-2]:n.shape[d-1],m=e.shape.slice(0,-2),g=n.shape.slice(0,-2),b=a.util.sizeFromShape(m),v=a.util.sizeFromShape(g),C=a.broadcast_util.assertAndGetBroadcastShape(e.shape.slice(0,-2),n.shape.slice(0,-2)).concat([f,x]);a.util.assert(p===h,(()=>`Error in matMul: inner shapes (${p}) and (${h}) of Tensors with shapes ${e.shape} and ${n.shape} and transposeA=${t} and transposeB=${r} must match.`));const $=t?[b,p,f]:[b,f,p],I=r?[v,x,h]:[v,h,x],y=lt({inputs:{x:e},backend:o,attrs:{shape:$}}),k=lt({inputs:{x:n},backend:o,attrs:{shape:I}}),R=[y,k],S=Math.max(b,v),w=t?y.shape[1]:y.shape[2],T=null!=s,N=null!=i,E="leakyrelu"===l,A=null!=l?nt(l,!0):null;let _;if((1===f||1===x)&&w>1e3&&!1===(T||N||E||null!=A)){let e=y,n=k;t&&(e=vt({inputs:{x:y},backend:o,attrs:{perm:[0,2,1]}}),R.push(e)),r&&(n=vt({inputs:{x:k},backend:o,attrs:{perm:[0,2,1]}}),R.push(n));const a=1===x;let s=e;1!==x&&(s=lt({inputs:{x:e},backend:o,attrs:{shape:[S,w,1]}}),R.push(s));const i=1===x?2:1;let u=n;a&&(u=lt({inputs:{x:n},backend:o,attrs:{shape:[S,1,w]}}),R.push(u));const l=it({inputs:{a:s,b:u},backend:o});_=gt({inputs:{x:l},backend:o,attrs:{axis:i,keepDims:!0}}),R.push(l)}else{const l=(0,a.upcastType)(e.dtype,n.dtype),c=new tt($,I,[S,f,x],t,r,T,A,N,E),d=[y,k];if(null!=s&&d.push(s),N&&d.push(i),E){const e=o.makeTensorInfo([],"float32",a.util.createScalarValue(u,"float32"));d.push(e),R.push(e)}_=o.runWebGLProgram(c,d,l)}const O=lt({inputs:{x:_},backend:o,attrs:{shape:C}});R.push(_);for(const e of R)o.disposeIntermediateTensorInfo(e);return O}const It={kernelName:a._FusedMatMul,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{a:r,b:o,bias:s,preluActivationWeights:i}=n,{transposeA:u,transposeB:l,activation:c,leakyreluAlpha:d}=a;return $t({a:r,b:o,transposeA:u,transposeB:l,backend:t,bias:s,preluActivationWeights:i,leakyreluAlpha:d,activation:c})}},yt="return abs(x);";const kt={kernelName:a.Abs,backendName:"webgl",kernelFunc:function(e){const{inputs:n,backend:t}=e,{x:r}=n;if(t.shouldExecuteOnCPU([r])&&"complex64"!==r.dtype){const e=t.texData.get(r.dataId),n=ln(e.values);return t.makeTensorInfo(r.shape,r.dtype,n)}let o;return o=(0,a.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new Dn(r.shape,yt):new _n(r.shape,yt),t.runWebGLProgram(o,[r],r.dtype)}},Rt=Jn({opSnippet:"if (isnan(x)) return x;\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n"}),St={kernelName:a.Acos,backendName:"webgl",kernelFunc:Rt},wt=Jn({opSnippet:"if (isnan(x)) return x;\n  if (x < 1.0) return NAN;\nreturn log(x + sqrt(x * x - 1.0));"}),Tt={kernelName:a.Acosh,backendName:"webgl",kernelFunc:wt},Nt="return a + b;",Et=et({opSnippet:Nt,packedOpSnippet:Nt,supportsComplex:!0,cpuKernelImpl:Ee}),At={kernelName:a.Add,backendName:"webgl",kernelFunc:Et};
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
class _t{constructor(e,n){this.outputShape=[],this.outputShape=e,this.variableNames=n.map(((e,n)=>`T${n}`));const t=[];this.variableNames.forEach((e=>{t.push(`float v${e} = get${e}AtOutCoords();`)}));const a=this.variableNames.map((e=>`v${e}`)).join(" + ");this.userCode=`\n      void main() {\n        ${t.join("\n        ")}\n\n        float result = ${a};\n        setOutput(result);\n      }\n    `}}
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
class Ot{constructor(e,n){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=n.map(((e,n)=>`T${n}`));const t=[];this.variableNames.forEach((e=>{t.push(`vec4 v${e} = get${e}AtOutCoords();`)}));const a=this.variableNames.map((e=>`v${e}`)).join(" + ");this.userCode=`\n      void main() {\n        ${t.join("\n        ")}\n\n        vec4 result = ${a};\n        setOutput(result);\n      }\n    `}}const Ft={kernelName:a.AddN,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function e(n){const{inputs:t,backend:r}=n,o=t;if(1===o.length)return Mn({inputs:{x:o[0]},backend:r});if(o.length>(0,a.env)().get("WEBGL_MAX_TEXTURES_IN_SHADER")){const n=Math.floor(o.length/2),t=e({inputs:o.slice(0,n),backend:r}),a=e({inputs:o.slice(n),backend:r});return e({inputs:[t,a],backend:r})}const s=o.map((e=>e.dtype)).reduce(((e,n)=>(0,a.upcastType)(e,n))),i=o.map((e=>e.shape)),u=(0,a.env)().getBool("WEBGL_PACK")?new Ot(o[0].shape,i):new _t(o[0].shape,i);return r.runWebGLProgram(u,o,s)}};const Dt={kernelName:a.All,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{axis:s,keepDims:i}=r,u=o.shape.length,l=a.util.parseAxisParam(s,o.shape);let c=l;const d=a.backend_util.getAxesPermutation(c,u);let p=o;null!=d&&(p=vt({inputs:{x:o},backend:t,attrs:{perm:d}}),c=a.backend_util.getInnerMostAxes(c.length,u)),a.backend_util.assertAxesAreInnerMostDims("all",c,u);const[h,f]=a.backend_util.computeOutAndReduceShapes(p.shape,c),x=lt({inputs:{x:p},backend:t,attrs:{shape:[-1,a.util.sizeFromShape(f)]}}),m=ht(x,x.dtype,"all",t);let g;if(i){g=lt({inputs:{x:m},backend:t,attrs:{shape:a.backend_util.expandShapeToKeepDim(h,l)}})}else g=lt({inputs:{x:m},backend:t,attrs:{shape:h}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(m),null!=d&&t.disposeIntermediateTensorInfo(p),g}};const Lt={kernelName:a.Any,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{axis:s,keepDims:i}=r,u=o.shape.length,l=a.util.parseAxisParam(s,o.shape);let c=l;const d=a.backend_util.getAxesPermutation(c,u);let p=o;null!=d&&(p=vt({inputs:{x:o},backend:t,attrs:{perm:d}}),c=a.backend_util.getInnerMostAxes(c.length,u)),a.backend_util.assertAxesAreInnerMostDims("any",c,u);const[h,f]=a.backend_util.computeOutAndReduceShapes(p.shape,c),x=lt({inputs:{x:p},backend:t,attrs:{shape:[-1,a.util.sizeFromShape(f)]}}),m=ht(x,x.dtype,"any",t);let g;if(i){g=lt({inputs:{x:m},backend:t,attrs:{shape:a.backend_util.expandShapeToKeepDim(h,l)}})}else g=lt({inputs:{x:m},backend:t,attrs:{shape:h}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(m),null!=d&&t.disposeIntermediateTensorInfo(p),g}};
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
class Pt{constructor(e,n,t){this.variableNames=["A"];const{windowSize:a,batchSize:r,outSize:o}=e;t||this.variableNames.push("bestIndicesA"),this.outputShape=[r,o];const s="max"===n?">":"<",i=t?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ${a};\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < ${a}; i++) {\n          int inIdx = ${i};\n          float candidate = getA(batch, inIdx);\n          if (candidate ${s} bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    `}}
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
class Bt{constructor(e,n,t,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,a.util.assert(e.length>2,(()=>`Packed arg${t.charAt(0).toUpperCase()+t.slice(1)} supports only inputs with rank above 2.`));const o=e[e.length-1],s=Math.ceil(o/n);this.outputShape=e.slice(0,-1),s>1&&this.outputShape.push(s),r||this.variableNames.push("bestIndicesA");const i=this.outputShape,u=i.length,l=ae(u),c=Rn("coords",u);let d,p;if(1===s){p=u+1;const e=ae(p);d=`\n        ${e} sourceLocR = ${e}(${c.join()}, 0);\n        ++${c[u-1]};\n        ${e} sourceLocG = ${e}(${c.join()}, 0);\n        ++${c[u-2]};\n        ${e} sourceLocA = ${e}(${c.join()}, 0);\n        --${c[u-1]};\n        ${e} sourceLocB = ${e}(${c.join()}, 0);\n        --${c[u-2]};`}else p=u,d=`\n        ${l} sourceLocR = coords;\n        ++${c[u-1]};\n        ${l} sourceLocG = coords;\n        ++${c[u-2]};\n        ${l} sourceLocA = coords;\n        --${c[u-1]};\n        ${l} sourceLocB = coords;\n        --${c[u-2]};`;const h=["x","y","z","w","u","v"].slice(0,p),f="."+h[p-1],x=h.map((e=>"int "+e)),m=Rn("sourceLocR",p-1).concat("inIdx.r"),g=Rn("sourceLocG",p-1).concat("inIdx.g"),b=Rn("sourceLocB",p-1).concat("inIdx.b"),v=Rn("sourceLocA",p-1).concat("inIdx.a"),C="max"===t?"greaterThan":"lessThan",$=r?"":`\n          inIdx = round(vec4(getBestIndicesAChannel(${m.join()}),\n                             getBestIndicesAChannel(${g.join()}),\n                             getBestIndicesAChannel(${b.join()}),\n                             getBestIndicesAChannel(${v.join()})));`,I=`vec4(\n            getAChannel(${m.join()}),\n            hasNextCol ? getAChannel(${g.join()}) : 0.,\n            hasNextRow ? getAChannel(${b.join()}) : 0.,\n            hasNextRow && hasNextCol ? getAChannel(${v.join()}) : 0.)`,y=r?"":`\n      float getBestIndicesAChannel(${x.join()}) {\n        return getChannel(getBestIndicesA(${h.join()}),\n                                          vec2(${h.slice(-2).join()}));\n      }`;this.userCode=`\n      float getAChannel(${x.join()}) {\n        return getChannel(getA(${h.join()}),\n                               vec2(${h.slice(-2).join()}));\n      }\n      ${y}\n      void main() {\n        ${l} coords = getOutputCoords();\n        bool hasNextCol = ${c[u-1]} < ${i[u-1]-1};\n        bool hasNextRow = ${c[u-2]} < ${i[u-2]-1};\n        ${d}\n        ivec4 srcIdx = ivec4(sourceLocR${f}, sourceLocG${f},\n          sourceLocB${f}, sourceLocA${f}) * ${n};\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = ${I};\n\n        for (int i = 0; i < ${n}; i++) {\n          inIdx = srcIdx;\n          ${$}\n          vec4 candidate = ${I};\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4(${C}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vt(e,n,t,r=null){let o=n.shape[0],s=n.shape[1];null!=r&&(o=r.shape[0],s=r.shape[1]);const i=a.backend_util.computeOptimalWindowSize(s),u={windowSize:i,inSize:s,batchSize:o,outSize:Math.ceil(s/i)},l=new Pt(u,t,null==r),c=[n];null!=r&&c.push(r);const d=e.runWebGLProgram(l,c,"int32");if(1===d.shape[1])return d;const p=Vt(e,n,t,d);return e.disposeIntermediateTensorInfo(d),p}function Wt(e,n,t,r=null){const o=null!=r?r.shape:n.shape,s=o[o.length-1],i=a.backend_util.computeOptimalWindowSize(s),u=new Bt(o,i,t,null==r),l=null==r?[n]:[n,r],c=e.runWebGLProgram(u,l,"int32");if(c.shape.length===n.shape.length){const a=Wt(e,n,t,c);return e.disposeIntermediateTensorInfo(c),a}return c}function Ut(e,n,t,r){const o=[t];if(a.backend_util.assertAxesAreInnerMostDims("arg"+r.charAt(0).toUpperCase()+r.slice(1),o,n.shape.length),!(0,a.env)().getBool("WEBGL_PACK_REDUCE")||n.shape.length<=2){const t=[],s=e.texData.get(n.dataId);let i=n;null!==s&&s.isPacked&&(i=e.unpackTensor(n),t.push(i));const[u,l]=a.backend_util.computeOutAndReduceShapes(i.shape,o),c=a.util.sizeFromShape(l),d=lt({inputs:{x:i},backend:e,attrs:{shape:[-1,c]}});t.push(d);const p=Vt(e,d,r);t.push(p);const h=lt({inputs:{x:p},backend:e,attrs:{shape:u}});return t.forEach((n=>e.disposeIntermediateTensorInfo(n))),h}return Wt(e,n,r)}const Gt={kernelName:a.ArgMax,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{axis:s}=r;let i=a.util.parseAxisParam(s,o.shape);const u=a.backend_util.getAxesPermutation(i,o.shape.length);let l=o;const c=[];null!=u&&(l=vt({inputs:{x:o},backend:t,attrs:{perm:u}}),c.push(l),i=a.backend_util.getInnerMostAxes(i.length,l.shape.length)),a.backend_util.assertAxesAreInnerMostDims("argMax",[i[0]],l.shape.length);const d=Ut(t,l,i[0],"max");return c.forEach((e=>t.disposeIntermediateTensorInfo(e))),d}};const Mt={kernelName:a.ArgMin,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{axis:s}=r;let i=a.util.parseAxisParam(s,o.shape);const u=a.backend_util.getAxesPermutation(i,o.shape.length);let l=o;const c=[];null!=u&&(l=vt({inputs:{x:o},backend:t,attrs:{perm:u}}),c.push(l),i=a.backend_util.getInnerMostAxes(i.length,l.shape.length)),a.backend_util.assertAxesAreInnerMostDims("argMin",[i[0]],l.shape.length);const d=Ut(t,l,i[0],"min");return c.forEach((e=>t.disposeIntermediateTensorInfo(e))),d}},zt=Jn({opSnippet:"if (isnan(x)) return x;\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n"}),Xt={kernelName:a.Asin,backendName:"webgl",kernelFunc:zt},Ht=Jn({opSnippet:"if (isnan(x)) return x;return log(x + sqrt(x * x + 1.0));"}),Kt={kernelName:a.Asinh,backendName:"webgl",kernelFunc:Ht},jt=Jn({opSnippet:"if (isnan(x)) return x;\n  return atan(x);\n"}),qt={kernelName:a.Atan,backendName:"webgl",kernelFunc:jt},Yt=et({opSnippet:"\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n",packedOpSnippet:"\n  vec4 result = atan(a, b);\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  \n  result.r = isNaN.r ? NAN : result.r;\n  result.g = isNaN.g ? NAN : result.g;\n  result.b = isNaN.b ? NAN : result.b;\n  result.a = isNaN.a ? NAN : result.a;\n\n  return result;\n"}),Qt={kernelName:a.Atan2,backendName:"webgl",kernelFunc:Yt},Zt=Jn({opSnippet:"if (isnan(x)) return x;\n  if ((x < -1.0) || (x > 1.0)) return NAN;\nreturn (log(1.0 + x) - log(1.0 - x)) / 2.0;"}),Jt={kernelName:a.Atanh,backendName:"webgl",kernelFunc:Zt};
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
class ea{constructor(e,n,t,a=!1,r=!1){if(this.variableNames=["x"],"avg"===n&&t)throw new Error("Cannot compute positions for average pool.");const o=e.filterWidth,s=e.strideHeight,i=e.strideWidth,u=e.dilationHeight,l=e.dilationWidth,c=e.effectiveFilterHeight,d=e.effectiveFilterWidth,p=e.padInfo.top,h=e.padInfo.left;this.outputShape=e.outShape;const f="avg"===n,x=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,m=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let g="0.0";if(f||(g="-1.0 / 1e-20"),t){const n=">=";return void(this.userCode=`\n        const ivec2 strides = ivec2(${s}, ${i});\n        const ivec2 pads = ivec2(${p}, ${h});\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < ${c};\n              wR += ${u}) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int wC = 0; wC < ${d};\n                wC += ${l}) {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value ${n} currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = ${a?r?x:m:`wR * ${d} + wC`};\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      `)}let b=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===n&&(b="avgValue / max(count, 1.0)");const v=4*Math.floor(o/4),C=o%4,$=`\n      if (${f}) {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    `;this.userCode=`\n      const ivec2 strides = ivec2(${s}, ${i});\n      const ivec2 pads = ivec2(${p}, ${h});\n      const float initializationValue = ${g};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= ${e.inWidth}) {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(${g});\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < ${c};\n            wR += ${u}) {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= ${e.inHeight}) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ${v}; wC += 4) {\n            int xC = xCCorner + wC * ${l};\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${l}, d),\n              getValue(batch, xR, xC + 2 * ${l}, d),\n              getValue(batch, xR, xC + 3 * ${l}, d)\n            );\n\n            ${$}\n          }\n\n          int xC = xCCorner + ${v};\n          if (${1===C}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            ${$}\n          } else if (${2===C}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${l}, d),\n              initializationValue,\n              initializationValue\n            );\n\n            ${$}\n          } else if (${3===C}) {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ${l}, d),\n              getValue(batch, xR, xC + 2 * ${l}, d),\n              initializationValue\n            );\n\n            ${$}\n          }\n        }\n        setOutput(${b});\n      }\n    `}}class na{constructor(e,n,t,a=!1,r=!1){if(this.variableNames=["x"],"avg"===n&&t)throw new Error("Cannot compute positions for average pool.");const o=e.filterWidth,s=e.strideDepth,i=e.strideHeight,u=e.strideWidth,l=e.dilationDepth,c=e.dilationHeight,d=e.dilationWidth,p=e.effectiveFilterDepth,h=e.effectiveFilterHeight,f=e.effectiveFilterWidth,x=e.padInfo.front,m=e.padInfo.top,g=e.padInfo.left;this.outputShape=e.outShape;const b="avg"===n;let v="0.0";if(b||(v="-1.0 / 1e-20"),t){const n=">=";return void(this.userCode=`\n        const ivec3 strides =\n            ivec3(${s}, ${i}, ${u});\n        const ivec3 pads = ivec3(${x}, ${m}, ${g});\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < ${p};\n              wD += ${l}) {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= ${e.inDepth}) {\n              continue;\n            }\n\n            for (int wR = 0; wR < ${h};\n                wR += ${c}) {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= ${e.inHeight}) {\n                continue;\n              }\n\n              for (int wC = 0; wC < ${f};\n                  wC += ${d}) {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= ${e.inWidth}) {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value ${n} currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition = ${a?r?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${h} * ${f} +\n                      wR * ${f} + wC`};\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      `)}let C=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;"avg"===n&&(C="avgValue / max(count, 1.0)");const $=4*Math.floor(o/4),I=o%4,y=`\n      if (${b}) {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    `;this.userCode=`\n      const ivec3 strides =\n        ivec3(${s}, ${i}, ${u});\n      const ivec3 pads = ivec3(${x}, ${m}, ${g});\n      const float initializationValue = ${v};\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= ${e.inWidth}) {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(${v});\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < ${p};\n            wD += ${l}) {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= ${e.inDepth}) {\n            continue;\n          }\n\n          for (int wR = 0; wR < ${h};\n            wR += ${c}) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int wC = 0; wC < ${$}; wC += 4) {\n              int xC = xCCorner + wC * ${d};\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${d}, ch),\n                getValue(batch, xD, xR, xC + 2 * ${d}, ch),\n                getValue(batch, xD, xR, xC + 3 * ${d}, ch)\n              );\n\n              ${y}\n            }\n\n            int xC = xCCorner + ${$};\n            if (${1===I}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              ${y}\n            } else if (${2===I}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${d}, ch),\n                initializationValue,\n                initializationValue\n              );\n\n              ${y}\n            } else if (${3===I}) {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ${d}, ch),\n                getValue(batch, xD, xR, xC + 2 * ${d}, ch),\n                initializationValue\n              );\n\n              ${y}\n            }\n          }\n        }\n        setOutput(${C});\n      }\n    `}}const ta={kernelName:a.AvgPool,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n;B(o,"avgPool");const{filterSize:s,strides:i,pad:u,dimRoundingMode:l}=r;a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(i,1),(()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '1'`));const c=a.backend_util.computePool2DInfo(o.shape,s,i,1,u,l);if(1===c.filterWidth&&1===c.filterHeight&&a.util.arraysEqual(c.inShape,c.outShape))return Mn({inputs:{x:o},backend:t});const d=new ea(c,"avg",!1);return t.runWebGLProgram(d,[o],"float32")}};const aa={kernelName:a.AvgPool3D,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{filterSize:s,strides:i,pad:u,dimRoundingMode:l,dataFormat:c}=r,d=a.backend_util.computePool3DInfo(o.shape,s,i,[1,1,1],u,l,c),p=new na(d,"avg",!1);return t.runWebGLProgram(p,[o],"float32")}};
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
class ra{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const n=e.filterHeight,t=e.filterWidth,a=e.strideHeight,r=e.strideWidth,o=e.dilationHeight,s=e.dilationWidth,i=e.effectiveFilterHeight,u=e.effectiveFilterWidth,l=i-1-e.padInfo.top,c=u-1-e.padInfo.left,d=1/(n*t);this.userCode=`\n      const ivec2 pads = ivec2(${l}, ${c});\n      const float avgMultiplier = float(${d});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${i};\n            wR += ${o}) {\n          float dyR = float(dyRCorner + wR) / ${a}.0;\n\n          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < ${u};\n            wC+= ${s}) {\n            float dyC = float(dyCCorner + wC) / ${r}.0;\n\n            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class oa{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const n=e.filterDepth,t=e.filterHeight,a=e.filterWidth,r=e.strideDepth,o=e.strideHeight,s=e.strideWidth,i=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,c=e.effectiveFilterDepth,d=e.effectiveFilterHeight,p=e.effectiveFilterWidth,h=c-1-e.padInfo.front,f=d-1-e.padInfo.top,x=p-1-e.padInfo.left,m=1/(n*t*a);this.userCode=`\n      const ivec3 pads = ivec3(${h}, ${f}, ${x});\n      const float avgMultiplier = float(${m});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < ${c};\n            wD += ${i}) {\n          float dyD = float(dyDCorner + wD) / ${r}.0;\n\n          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < ${d};\n              wR += ${u}) {\n            float dyR = float(dyRCorner + wR) / ${o}.0;\n\n            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < ${p};\n                wC += ${l}) {\n              float dyC = float(dyCCorner + wC) / ${s}.0;\n\n              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}const sa={kernelName:a.AvgPool3DGrad,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{dy:o,input:s}=n,i=s,{filterSize:u,strides:l,pad:c,dimRoundingMode:d}=r,p=a.backend_util.computePool3DInfo(i.shape,u,l,[1,1,1],c,d),h=new oa(p);return t.runWebGLProgram(h,[o],i.dtype)}};const ia={kernelName:a.AvgPoolGrad,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{dy:o,input:s}=n,i=s;B([o,s],"avgPoolGrad");const{filterSize:u,strides:l,pad:c}=r,d=a.backend_util.computePool2DInfo(i.shape,u,l,1,c),p=new ra(d);return t.runWebGLProgram(p,[o],i.dtype)}};const ua={kernelName:a.BatchMatMul,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:a}=e,{a:r,b:o}=n,{transposeA:s,transposeB:i}=a;return $t({a:r,b:o,transposeA:s,transposeB:i,backend:t})}};
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
class la{constructor(e,n,t,r,o,s){this.outputShape=[],this.variableNames=["x","mean","variance"],a.backend_util.assertAndGetBroadcastShape(e,n),a.backend_util.assertAndGetBroadcastShape(e,t);let i="0.0";null!=r&&(a.backend_util.assertAndGetBroadcastShape(e,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let u="1.0";null!=o&&(a.backend_util.assertAndGetBroadcastShape(e,o),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = ${i};\n        float scale = ${u};\n        float inv = scale * inversesqrt(variance + float(${s}));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    `}}
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
class ca{constructor(e,n,t,r,o,s){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],a.backend_util.assertAndGetBroadcastShape(e,n),a.backend_util.assertAndGetBroadcastShape(e,t);let i="vec4(0.0)";null!=r&&(a.backend_util.assertAndGetBroadcastShape(e,r),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let u="vec4(1.0)";null!=o&&(a.backend_util.assertAndGetBroadcastShape(e,o),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`\n      void main() {\n        vec4 offset = ${i};\n        vec4 scale = ${u};\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(${s}));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const da={kernelName:a.FusedBatchNorm,backendName:"webgl",kernelFunc:({inputs:e,backend:n,attrs:t})=>{const{x:r,mean:o,variance:s,offset:i,scale:u}=e;a.util.assert(o.shape.length===s.shape.length,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),a.util.assert(null==i||o.shape.length===i.shape.length,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),a.util.assert(null==u||o.shape.length===u.shape.length,(()=>"Batch normalization gradient requires mean and scale to have equal ranks."));let{varianceEpsilon:l}=t;null==l&&(l=.001);const c=[r,o,s];let d=null;null!=i&&(d=i.shape,c.push(i));let p=null;null!=u&&(p=u.shape,c.push(u));const h=(0,a.env)().getBool("WEBGL_PACK_NORMALIZATION")?new ca(r.shape,o.shape,s.shape,d,p,l):new la(r.shape,o.shape,s.shape,d,p,l);return n.runWebGLProgram(h,c,c[0].dtype)}};
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
class pa{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const n=ae(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const t=function(e){if(1===e)return"sourceLoc";if(e<=6)return ha.slice(0,e).map((e=>"sourceLoc."+e)).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}(this.rank);let a;a=`\n        ${n} sourceLoc;\n        ${n} coords = getOutputCoords();\n        ${e.map(((e,n)=>`sourceLoc.${ha[n]} = start[${n}] + coords.${ha[n]};`)).join("\n")}\n      `,this.userCode=`\n      void main() {\n        ${a}\n        setOutput(getSource(${t}));\n      }\n    `}}const ha=["x","y","z","w","u","v"];
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
class fa{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const n=ae(this.rank),t=Rn("coords",this.rank),a=Rn("sourceLoc",this.rank),r=1===this.rank?"sourceLoc":`vec2(${a.slice(-2).join()})`,o=`getChannel(getSource(${a.join()}), ${r})`,s=`\n      result.x = ${o};\n      if (++${t[this.rank-1]} < ${e[this.rank-1]}) {\n        ++${a[this.rank-1]};\n        result.y = ${o};\n        --${a[this.rank-1]};\n      }\n    `,i=1===this.rank?"":`\n      --${t[this.rank-1]};\n      if (++${t[this.rank-2]} < ${e[this.rank-2]}) {\n        ++${a[this.rank-2]};\n        result.z = ${o};\n        if (++${t[this.rank-1]} < ${e[this.rank-1]}) {\n          ++${a[this.rank-1]};\n          result.w = ${o};\n        }\n      }\n    `,u=this.rank<=4?`sourceLoc = coords +\n            ${n}(${e.map(((e,n)=>`start[${n}]`)).join()});`:e.map(((e,n)=>`${a[n]} = ${t[n]} + start[${n}];`)).join("\n");this.userCode=`\n      void main() {\n        ${n} coords = getOutputCoords();\n        ${n} sourceLoc;\n        ${u}\n        vec4 result = vec4(0.);\n        ${s}\n        ${i}\n        setOutput(result);\n      }\n    `}}function xa(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{begin:s,size:i}=r,[u,l]=a.slice_util.parseSliceParams(o,s,i);if(a.slice_util.assertParamsValid(o,u,l),0===a.util.sizeFromShape(l))return t.makeTensorInfo(l,o.dtype,[]);if(t.shouldExecuteOnCPU([o])||"string"===o.dtype){const e=t.texData.get(o.dataId),n=cn(e.values,u,l,o.shape,o.dtype);return t.makeTensorInfo(l,o.dtype,n)}const{isPacked:c}=t.texData.get(o.dataId),d=a.slice_util.isSliceContinous(o.shape,u,l);if(c||!d){const e=(0,a.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new fa(l):new pa(l),n=[u];return t.runWebGLProgram(e,[o],o.dtype,n)}return t.uploadToGPU(o.dataId),
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,n,t,r){const o=r.texData.get(e.dataId),s=r.makeTensorInfo(t,e.dtype),i=r.texData.get(s.dataId);Object.assign(i,o),i.refCount=1,i.shape=t,i.dtype=e.dtype;let u=a.slice_util.computeFlatOffset(n,a.util.computeStrides(e.shape));o.slice&&(u+=o.slice.flatOffset),i.slice={flatOffset:u,origDataId:o.slice&&o.slice.origDataId||e.dataId};const l=r.dataRefCount.get(i.slice.origDataId)||1;return r.dataRefCount.set(i.slice.origDataId,l+1),s}(o,u,l,t)}const ma={kernelName:a.Slice,backendName:"webgl",kernelFunc:xa},ga={kernelName:a.BatchToSpaceND,backendName:"webgl",kernelFunc:e=>{const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{blockShape:s,crops:i}=r;a.util.assert(o.shape.length<=4,(()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"));const u=s.reduce(((e,n)=>e*n)),l=a.backend_util.getReshaped(o.shape,s,u),c=a.backend_util.getPermuted(l.length,s.length),d=a.backend_util.getReshapedPermuted(o.shape,s,u),p=a.backend_util.getSliceBeginCoords(i,s.length),h=a.backend_util.getSliceSize(d,i,s.length),f=[],x=lt({inputs:{x:o},backend:t,attrs:{shape:l}}),m=vt({inputs:{x:x},backend:t,attrs:{perm:c}}),g=lt({inputs:{x:m},backend:t,attrs:{shape:d}}),b=xa({inputs:{x:g},backend:t,attrs:{begin:p,size:h}});return f.push(x),f.push(m),f.push(g),f.forEach((e=>t.disposeIntermediateTensorInfo(e))),b}};const ba={kernelName:a.Bincount,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:a}=e,{x:r,weights:o}=n,{size:s}=a,i=t.readSync(r.dataId),u=t.readSync(o.dataId),l=Ae(i,u,o.dtype,o.shape,s);return t.makeTensorInfo([s],o.dtype,l)}};const va={kernelName:a.BroadcastArgs,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{s0:r,s1:o}=n,s=t.readSync(r.dataId),i=t.readSync(o.dataId),u=a.backend_util.assertAndGetBroadcastShape(Array.from(s),Array.from(i));return t.makeTensorInfo([u.length],"int32",Int32Array.from(u))}},Ca=et({opSnippet:"return float(a != b);",cpuKernelImpl:Je,dtype:"bool"}),$a={kernelName:a.NotEqual,backendName:"webgl",kernelFunc:Ca};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ia(e){const{inputs:n,backend:t}=e,{input:a}=n;return Mn({inputs:{x:t.texData.get(a.dataId).complexTensorInfos.real},backend:t})}const ya={kernelName:a.Real,backendName:"webgl",kernelFunc:Ia};const ka={kernelName:a.Cast,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function e(n){const{inputs:t,backend:r,attrs:o}=n,{x:s}=t,{dtype:i}=o;if("complex64"===i){if("complex64"===s.dtype)return Mn({inputs:{x:s},backend:r});const n=a.zeros(s.shape),t=e({inputs:{x:s},backend:r,attrs:{dtype:"float32"}}),o=Xn({inputs:{real:t,imag:n},backend:r});return n.dispose(),r.disposeIntermediateTensorInfo(t),o}if("complex64"===s.dtype){const n=Ia({inputs:{input:s},backend:r}),t=e({inputs:{x:n},backend:r,attrs:{dtype:i}});return r.disposeIntermediateTensorInfo(n),t}if(!a.util.hasEncodingLoss(s.dtype,i)){const e=Mn({inputs:{x:s},backend:r});return{dataId:e.dataId,shape:e.shape,dtype:i}}if(r.shouldExecuteOnCPU([s])){const e=r.texData.get(s.dataId).values,[n,t,a]=Oe(e,s.shape,s.dtype,i);return r.makeTensorInfo(n,t,a)}if("int32"===i)return function(e,n){const t=new _n(e.shape,"return float(int(x));"),a=n.runWebGLProgram(t,[e],"int32");return{dataId:a.dataId,shape:a.shape,dtype:a.dtype}}(s,r);if("bool"===i){const e=r.makeTensorInfo([],"bool",a.util.getTypedArrayFromDType("bool",1)),n=Ca({inputs:{a:s,b:e},backend:r});return r.disposeIntermediateTensorInfo(e),n}throw new Error(`Error in Cast: failed to cast ${s.dtype} to ${i}`)}},Ra="return ceil(x);",Sa=Jn({opSnippet:Ra,packedOpSnippet:Ra,cpuKernelImpl:Fe}),wa={kernelName:a.Ceil,backendName:"webgl",kernelFunc:Sa};
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
class Ta{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode="\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    "}}
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
class Na{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode="\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    "}}const Ea={kernelName:a.ClipByValue,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{clipValueMin:s,clipValueMax:i}=r;let u;u=(0,a.env)().getBool("WEBGL_PACK_CLIP")?new Na(o.shape):new Ta(o.shape);const l=[[s],[i]];return t.runWebGLProgram(u,[o],o.dtype,l)}};
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
class Aa{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode="\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    "}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function _a(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}}const Oa={kernelName:a.ComplexAbs,backendName:"webgl",kernelFunc:function(e){const{inputs:n,backend:t}=e,{x:a}=n,r=t.texData.get(a.dataId),o=new Aa(a.shape),s=[_a(a,r.complexTensorInfos.real),_a(a,r.complexTensorInfos.imag)];return t.runWebGLProgram(o,s,s[0].dtype)}};
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
class Fa{constructor(e){this.outputShape=[],this.outputShape=a.backend_util.computeOutShape(e,1),this.variableNames=e.map(((e,n)=>`T${n}`));const n=new Array(e.length-1);n[0]=e[0][1];for(let t=1;t<n.length;t++)n[t]=n[t-1]+e[t][1];const t=[`if (yC < ${n[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<n.length;e++){const a=n[e-1];t.push(`else if (yC < ${n[e]}) setOutput(getT${e}(yR, yC-${a}));`)}const r=n.length,o=n[n.length-1];t.push(`else setOutput(getT${r}(yR, yC-${o}));`),this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        ${t.join("\n        ")}\n      }\n    `}}
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
class Da{constructor(e,n){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=a.backend_util.computeOutShape(e,n);const t=this.outputShape,r=t.length,o=ae(r),s=Rn("coords",r),i=["x","y","z","w","u","v"].slice(0,r);this.variableNames=e.map(((e,n)=>`T${n}`));const u=new Array(e.length-1);u[0]=e[0][n];for(let t=1;t<u.length;t++)u[t]=u[t-1]+e[t][n];const l=i[n],c=i.slice(-2),d=i.join();let p=`if (${l} < ${u[0]}) {\n        return getChannel(\n            getT0(${d}), vec2(${c.join()}));\n        }`;for(let e=1;e<u.length;e++){const n=u[e-1];p+=`\n        if (${l} < ${u[e]}  && ${l} >= ${u[e-1]}) {\n          return getChannel(\n            getT${e}(${La(i,l,n)}),\n            vec2(${La(c,l,n)}));\n        }`}const h=u.length,f=u[u.length-1];p+=`\n        return getChannel(\n          getT${h}(${La(i,l,f)}),\n          vec2(${La(c,l,f)}));`,this.userCode=`\n      float getValue(${i.map((e=>"int "+e))}) {\n        ${p}\n      }\n\n      void main() {\n        ${o} coords = getOutputCoords();\n        vec4 result = vec4(getValue(${s}), 0., 0., 0.);\n\n        ${s[r-1]} = ${s[r-1]} + 1;\n        if (${s[r-1]} < ${t[r-1]}) {\n          result.g = getValue(${s});\n        }\n\n        ${s[r-2]} = ${s[r-2]} + 1;\n        if (${s[r-2]} < ${t[r-2]}) {\n          result.a = getValue(${s});\n        }\n\n        ${s[r-1]} = ${s[r-1]} - 1;\n        if (${s[r-2]} < ${t[r-2]} &&\n            ${s[r-1]} < ${t[r-1]}) {\n          result.b = getValue(${s});\n        }\n        setOutput(result);\n      }\n    `}}function La(e,n,t){const a=e.indexOf(n);return e.map(((e,n)=>n===a?`${e} - ${t}`:e)).join()}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Pa(e){const{inputs:n,backend:t}=e,{input:a}=n;return Mn({inputs:{x:t.texData.get(a.dataId).complexTensorInfos.imag},backend:t})}const Ba={kernelName:a.Imag,backendName:"webgl",kernelFunc:Pa};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Va(e,n,t){const r=e[0].dtype;if("complex64"===r){const a=e.map((e=>Ia({inputs:{input:e},backend:t}))),r=e.map((e=>Pa({inputs:{input:e},backend:t}))),o=Va(a,n,t),s=Va(r,n,t),i=Xn({inputs:{real:o,imag:s},backend:t});return a.forEach((e=>t.disposeIntermediateTensorInfo(e))),r.forEach((e=>t.disposeIntermediateTensorInfo(e))),t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(s),i}let o=t.shouldExecuteOnCPU(e);if("string"===r&&(o=!0),o){const o=e.map((e=>{const r=a.util.sizeFromShape(e.shape.slice(n));return lt({inputs:{x:e},backend:t,attrs:{shape:[-1,r]}})})),s=o.map((e=>({vals:t.readSync(e.dataId),shape:e.shape}))),i=a.backend_util.computeOutShape(o.map((e=>e.shape)),1),u=1===o[0].shape[0],l=De(s,i,r,u),c=a.backend_util.computeOutShape(e.map((e=>e.shape)),n),d=t.makeTensorInfo(c,r,l);return o.forEach((e=>t.disposeIntermediateTensorInfo(e))),d}const s=e.filter((e=>a.util.sizeFromShape(e.shape)>0)),i=(0,a.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&s[0].shape.length>1;if(1===s.length){const n=i?new _n(e[0].shape,Fn):new Dn(e[0].shape,Fn);return t.runWebGLProgram(n,e,r)}const u=(0,a.env)().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(s.length>u){const e=[];for(let a=0;a<s.length;a+=u){const r=s.slice(a,a+u);e.push(Va(r,n,t))}const a=Va(e,n,t);for(const n of e)t.disposeIntermediateTensorInfo(n);return a}if(i){const e=new Da(s.map((e=>e.shape)),n);return t.runWebGLProgram(e,s,r)}const{tensors2D:l,outShape:c}=function(e,n,t){const r=a.backend_util.computeOutShape(e.map((e=>e.shape)),n);return{tensors2D:e.map((e=>lt({inputs:{x:e},attrs:{shape:[-1,a.util.sizeFromShape(e.shape.slice(n))]},backend:t}))),outShape:r}}(s,n,t),d=new Fa(l.map((e=>e.shape))),p=t.runWebGLProgram(d,l,r);l.forEach((e=>t.disposeIntermediateTensorInfo(e)));const h=lt({inputs:{x:p},attrs:{shape:c},backend:t});return t.disposeIntermediateTensorInfo(p),h}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Wa(e){const{inputs:n,backend:t,attrs:r}=e,{axis:o}=r,s=a.util.parseAxisParam(o,n[0].shape)[0],i=n.map((e=>e.shape));a.backend_util.assertParamsConsistent(i,s);const u=a.backend_util.computeOutShape(n.map((e=>e.shape)),s);if(0===a.util.sizeFromShape(u))return t.makeTensorInfo(u,n[0].dtype,[]);const l=n.filter((e=>a.util.sizeFromShape(e.shape)>0));return 1===l.length?Mn({inputs:{x:l[0]},backend:t}):Va(l,s,t)}const Ua={kernelName:a.Concat,backendName:"webgl",kernelFunc:Wa};
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
class Ga{constructor(e,n=!1,t=null,a=!1,r=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const o=e.padInfo.top,s=e.padInfo.left,i=e.strideHeight,u=e.strideWidth,l=e.dilationHeight,c=e.dilationWidth,d=e.filterHeight,p=e.filterWidth,h=4*Math.floor(e.inChannels/4),f=e.inChannels%4,x="channelsLast"===e.dataFormat,m=x?1:2,g=x?2:3,b=x?3:1;let v="",C="";t&&(v=a?`float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          ${t}\n        }`:r?`float activation(float a) {\n          float b = getLeakyreluAlphaAtOutCoords();\n          ${t}\n        }`:`\n          float activation(float x) {\n            ${t}\n          }\n        `,C="result = activation(result);");const $=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`\n      ${v}\n\n      const ivec2 strides = ivec2(${i}, ${u});\n      const ivec2 pads = ivec2(${o}, ${s});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[${b}];\n\n        ivec2 xRCCorner =\n            ivec2(coords[${m}], coords[${g}]) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${d}; wR++) {\n          int xR = xRCorner + wR * ${l};\n\n          if (xR < 0 || xR >= ${e.inHeight}) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ${p}; wC++) {\n            int xC = xCCorner + wC * ${c};\n\n            if (xC < 0 || xC >= ${e.inWidth}) {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < ${h}; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if (${x}) {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if (${1===f}) {\n\n              if (${x}) {\n                dotProd +=\n                    getX(batch, xR, xC, ${h}) *\n                    getW(wR, wC, ${h}, d2);\n              } else {\n                dotProd +=\n                    getX(batch, ${h}, xR, xC) *\n                    getW(wR, wC, ${h}, d2);\n              }\n\n            } else if (${2===f}) {\n              vec2 wValues = vec2(\n                getW(wR, wC, ${h}, d2),\n                getW(wR, wC, ${h} + 1, d2)\n              );\n\n              if (${x}) {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, ${h}),\n                  getX(batch, xR, xC, ${h} + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, ${h}, xR, xC),\n                  getX(batch, ${h} + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if (${3===f}) {\n              vec3 wValues = vec3(\n                getW(wR, wC, ${h}, d2),\n                getW(wR, wC, ${h} + 1, d2),\n                getW(wR, wC, ${h} + 2, d2)\n              );\n\n              if (${x}) {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, ${h}),\n                  getX(batch, xR, xC, ${h} + 1),\n                  getX(batch, xR, xC, ${h} + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, ${h}, xR, xC),\n                  getX(batch, ${h} + 1, xR, xC),\n                  getX(batch, ${h} + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        ${$}\n        ${C}\n        setOutput(result);\n      }\n    `}}class Ma{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const n=e.padInfo.front,t=e.padInfo.top,a=e.padInfo.left,r=e.strideDepth,o=e.strideHeight,s=e.strideWidth,i=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,c=e.filterDepth,d=e.filterHeight,p=e.filterWidth,h=4*Math.floor(e.inChannels/4),f=e.inChannels%4;this.userCode=`\n      const ivec3 strides = ivec3(${r}, ${o}, ${s});\n      const ivec3 pads = ivec3(${n}, ${t}, ${a});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < ${c}; wF++) {\n          int xF = xFCorner + wF * ${i};\n\n          if (xF < 0 || xF >= ${e.inDepth}) {\n            continue;\n          }\n\n          for (int wR = 0; wR < ${d}; wR++) {\n            int xR = xRCorner + wR * ${u};\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int wC = 0; wC < ${p}; wC++) {\n              int xC = xCCorner + wC * ${l};\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < ${h}; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (${1===f}) {\n                dotProd +=\n                  getX(batch, xF, xR, xC, ${h}) *\n                  getW(wF, wR, wC, ${h}, d2);\n              } else if (${2===f}) {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, ${h}),\n                  getX(batch, xF, xR, xC, ${h} + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, ${h}, d2),\n                  getW(wF, wR, wC, ${h} + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (${3===f}) {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, ${h}),\n                  getX(batch, xF, xR, xC, ${h} + 1),\n                  getX(batch, xF, xR, xC, ${h} + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, ${h}, d2),\n                  getW(wF, wR, wC, ${h} + 1, d2),\n                  getW(wF, wR, wC, ${h} + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}
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
class za{constructor(e,n=!1,t=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=ce(this.outputShape.length);const s=e.padInfo.left,i=e.strideWidth,u=e.dilationWidth,l=e.filterHeight,c=e.filterWidth,d=c;let p="\n       int xR; int xC; int xCOffset;\n       vec4 wTexel; vec4 previous; vec4 final;";for(let e=0;e<c;e++)p+=`\n           vec4 xTexelC${2*e};\n           int xTexelC${2*e}Ready;\n           vec4 xTexelC${2*e+1};\n           int xTexelC${2*e+1}Ready;\n           vec4 xC${e};`;p+=`\n     for (int r = 0; r < ${l}; r++) {\n      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {\n       `;for(let e=0;e<c;e++)p+=`\n           xTexelC${2*e} = vec4(0.0);\n           xTexelC${2*e}Ready = 0;\n           xTexelC${2*e+1} = vec4(0.0);\n           xTexelC${2*e+1}Ready = 0;\n           xC${e} = vec4(0.0);`;p+="\n         xR = xRCorner + r * dilations[0];\n         if (xR >=0 && xR < inDims[0]) {\n       ";for(let n=0;n<(d+1)/2;n++){const t=2*n;if(p+=`\n           xC = xCCorner + ${t*u};\n           `,1===i){if(t<c&&(s%2==1?(p+=`\n                 xCOffset = xC + 1;\n                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {\n                   xTexelC${t} = getX(batch, xR, xCOffset, d1);\n\n                   // Need to manually clear unused channels in case\n                   // we're reading from recycled texture.\n                   if (xCOffset + 1 >= inDims[1]) {\n                     xTexelC${t}.zw = vec2(0.0);\n                   }\n                   xTexelC${t}Ready = 1;\n                 }\n               `,p+=1===u&&t>0?`\n                 xC${t} = vec4(xTexelC${t-2}.zw, xTexelC${t}.xy);\n                 `:`\n                   xCOffset = xC + 1 - 2;\n\n                   if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                     previous = getX(batch, xR, xCOffset, d1);\n\n                     // Need to manually clear unused channels in case\n                     // we're reading from recycled texture.\n                     if (xCOffset + 1 >= inDims[1]) {\n                       previous.zw = vec2(0.0);\n                     }\n\n                     xC${t} = vec4(previous.zw, xTexelC${t}.xy);\n                   } else {\n                     xC${t} = vec4(0.0, 0.0, xTexelC${t}.xy);\n                   }\n                   `):p+=`\n                 if (xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {\n                   xTexelC${t} = getX(batch, xR, xC, d1);\n                   if (xC + 1 >= inDims[1]) {\n                     xTexelC${t}.zw = vec2(0.0);\n                   }\n                   xTexelC${t}Ready = 1;\n                 }\n\n                 xC${t} = xTexelC${t};\n                 `,t+1<c)){const e=s%2==0?a.util.nearestLargerEven(u):u;u%2==0&&s%2==1||u%2!=0&&s%2!=1?(p+=`\n                   xCOffset = xC + imod(pads[1], 2) + ${e};\n\n                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {\n                     xTexelC${t+1} = getX(batch, xR, xCOffset, d1);\n\n                     // Need to manually clear unused channels in case\n                     // we're reading from recycled texture.\n                     if (xCOffset + 1 >= inDims[1]) {\n                       xTexelC${t+1}.zw = vec2(0.0);\n                     }\n                     xTexelC${t+1}Ready = 1;\n                   }\n                   `,p+=u>1?`\n                     xCOffset -= 2;\n                     if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                      previous = getX(batch, xR, xCOffset, d1);\n                      xC${t+1} = vec4(previous.zw, xTexelC${t+1}.xy);\n                     } else {\n                      xC${t+1} = vec4(0.0, 0.0, xTexelC${t+1}.xy);\n                     }\n                     `:`\n                     xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.xy);\n                     `):p+=1===e?`\n                     xC${t+1} = xTexelC${t};\n                     `:`\n                     xCOffset = xC + ${e};\n\n                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {\n                       xTexelC${t+1} = getX(batch, xR, xCOffset, d1);\n                       if (xCOffset + 1 >= inDims[1]) {\n                         xTexelC${t+1}.zw = vec2(0.0);\n                       }\n                       xTexelC${t+1}Ready = 1;\n                     }\n\n                     xC${t+1} = xTexelC${t+1};\n                     `}}else t<c&&(s%2==1?(p+=`\n                 xCOffset = xC + 1 - strides[1];\n                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {\n                   xTexelC${t} = getX(batch, xR, xCOffset, d1);\n                   // Need to manually clear unused channels in case\n                   // we're reading from recycled texture.\n                   if (xCOffset + 1 >= inDims[1]) {\n                     xTexelC${t}.zw = vec2(0.0);\n                   }\n                   xTexelC${t}Ready = 1;\n                 }\n\n                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${t+1}Ready == 0) {\n                   xTexelC${t+1} = getX(batch, xR, xC + 1, d1);\n                   // Need to manually clear unused channels in case\n                   // we're reading from recycled texture.\n                   if (xC + 2 >= inDims[1]) {\n                     xTexelC${t+1}.zw = vec2(0.0);\n                   }\n                   xTexelC${t+1}Ready = 1;\n                 }\n\n                 xC${t} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);\n               `,t+1<c&&(p+=`\n                   final = vec4(0.0);\n                   xCOffset = xC + 1 + strides[1];\n                   if(xCOffset >= 0 && xCOffset < inDims[1]) {\n                     final = getX(batch, xR, xCOffset, d1);\n                   }\n                   xC${t+1} = vec4(xTexelC${t+1}.xy, final.xy);\n                 `)):(p+=`\n                 if(xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {\n                   xTexelC${t} = getX(batch, xR, xC, d1);\n                   if (xC + 1 >= inDims[1]) {\n                     xTexelC${t}.zw = vec2(0.0);\n                   }\n                   xTexelC${t}Ready = 1;\n                 }\n\n                 xCOffset = xC + strides[1];\n                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {\n                   xTexelC${t+1} = getX(batch, xR, xCOffset, d1);\n                   if (xCOffset + 1 >= inDims[1]) {\n                     xTexelC${t+1}.zw = vec2(0.);\n                   }\n                   xTexelC${t+1}Ready = 1;\n                 }\n\n                 xC${t} = vec4(\n                   xTexelC${t}.xy, xTexelC${t+1}.xy);\n               `,t+1<c&&(p+=`\n                   xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);\n                 `)));t<c&&(p+=`\n             wTexel = getW(r, ${t}, d1, d2);\n             dotProd += xC${t}.xxzz * vec4(wTexel.xy, wTexel.xy);\n             if(d1 + 1 < ${e.inChannels}) {\n               dotProd += xC${t}.yyww * vec4(wTexel.zw, wTexel.zw);\n             }\n           `,t+1<c&&(p+=`\n               wTexel = getW(r, ${t+1}, d1, d2);\n               dotProd += xC${t+1}.xxzz * vec4(wTexel.xy, wTexel.xy);\n               if(d1 + 1 < ${e.inChannels}) {\n                 dotProd += xC${t+1}.yyww * vec4(wTexel.zw, wTexel.zw);\n               }\n             `))}p+="\n     }\n   ",p+="\n     }\n   ",p+="\n     }\n   ";let h="",f="";t&&(h=r?`vec4 activation(vec4 a) {\n           vec4 b = getPreluActivationWeightsAtOutCoords();\n           ${t}\n         }`:o?`vec4 activation(vec4 a) {\n           vec4 b = getLeakyreluAlphaAtOutCoords();\n           ${t}\n         }`:`vec4 activation(vec4 x) {\n           ${t}\n         }`,f="result = activation(result);");const x=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`\n       ${h}\n\n       void main() {\n         ivec4 coords = getOutputCoords();\n         int batch = coords.x;\n         ivec2 xRCCorner = coords.yz * strides - pads;\n         int d2 = coords.w;\n         int xRCorner = xRCCorner.x;\n         int xCCorner = xRCCorner.y;\n\n         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.\n         vec4 dotProd = vec4(0.000000000000001);\n\n         ${p}\n\n         vec4 result = dotProd - vec4(0.000000000000001);\n         ${x}\n         ${f}\n         setOutput(result);\n       }\n     `}}
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
class Xa{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=ce(this.outputShape.length);const{dataFormat:t}=n,a=W(),r="channelsLast"===t,o=r?1:2,s=r?2:3,i=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`;let u="";for(let e=0;e<=1;e++)for(let n=0;n<=1;n++)u+=`\n          blockIndex = rc.z + ${n};\n          pos = rc.y + ${e};\n\n          ${i}\n            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];\n            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);\n\n            if(d0 < inputShape[${o}] && d0 >= 0) {\n              // Use custom imod instead mod. On Intel GPU, mod may generate\n              // unexpected value.\n              // https://github.com/tensorflow/tfjs/issues/5447\n              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];\n              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /\n                  inChannels);\n\n              if(d1 < inputShape[${s}] && d1 >= 0) {\n\n                ch = imod(pos, inChannels);\n\n                if (${r}) {\n                  innerDims = vec2(d1, ch);\n                  result[${2*e+n}] = getChannel(\n                    getA(rc.x, d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result[${2*e+n}] = getChannel(\n                    getA(rc.x, ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        `;this.userCode=`\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        ${u}\n\n        ${a.output} = result;\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ha(e,n){const t=e.length;return t>=3?n?[...e.slice(0,-3),e[t-3]*e[t-2],e[t-1]]:[...e.slice(0,-3),e[t-3],e[t-2]*e[t-1]]:!n&&1===t&&e[0]>1?[e[0],1]:null}function Ka({x:e,filter:n,convInfo:t,backend:r,bias:o=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:u=null}){const l=e.shape,c=r.texData.get(e.dataId),d=t.inChannels,p=l[0]*l[1]*l[2],h=t.outChannels,f="channelsLast"===t.dataFormat;let x;const m=[];if(null!=s){const e=Ha(s.shape,f);null!=e&&(s=lt({inputs:{x:s},backend:r,attrs:{shape:e}}),m.push(s))}if(null!=o){const e=Ha(o.shape,f);null!=e&&(o=lt({inputs:{x:o},backend:r,attrs:{shape:e}}),m.push(o))}if(!((1===p||1===h)&&d>1e3)&&c.isPacked&&f&&null!=c.texture&&l[2]%2!=0&&a.util.arraysEqual(c.shape.slice(-3),l.slice(-3))){const d=l[0]*l[1]*(l[2]+1),p={dataId:e.dataId,shape:[1,d,t.inChannels],dtype:e.dtype},h=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,a.util.assert(A(c.shape,p.shape),(()=>`packed reshape ${c.shape} to ${p.shape} isn't free`));const f=lt({inputs:{x:n},backend:r,attrs:{shape:[1,t.inChannels,t.outChannels]}});m.push(f);const g=$t({a:p,b:f,backend:r,transposeA:false,transposeB:false,bias:o,activation:u,preluActivationWeights:s,leakyreluAlpha:i}),b=r.texData.get(g.dataId);a.util.assert(b.isPacked,(()=>"batchMatMul result is expected to be packed")),c.shape=h,b.shape=t.outShape,x=Mn({inputs:{x:g},backend:r}),x.shape=t.outShape,m.push(g)}else{const a=t.outHeight*t.outWidth,l=lt({inputs:{x:e},backend:r,attrs:{shape:f?[t.batchSize,a,t.inChannels]:[t.batchSize,t.inChannels,a]}}),c=lt({inputs:{x:n},backend:r,attrs:{shape:[1,t.inChannels,t.outChannels]}}),d=$t({a:f?l:c,b:f?c:l,transposeA:!f,transposeB:false,backend:r,bias:o,activation:u,preluActivationWeights:s,leakyreluAlpha:i});x=lt({inputs:{x:d},backend:r,attrs:{shape:t.outShape}}),m.push(l),m.push(c),m.push(d)}for(const e of m)r.disposeIntermediateTensorInfo(e);return x}function ja({x:e,filter:n,convInfo:t,backend:r,bias:o=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:u=null}){const{filterWidth:l,filterHeight:c,inChannels:d,outWidth:p,outHeight:h,dataFormat:f}=t,x="channelsLast"===f,m=l*c*d,g=h*p,b=[t.batchSize,m,g],v=[];if(null!=s){const e=Ha(s.shape,x);null!=e&&(s=lt({inputs:{x:s},backend:r,attrs:{shape:e}}),v.push(s))}if(null!=o){const e=Ha(o.shape,x);null!=e&&(o=lt({inputs:{x:o},backend:r,attrs:{shape:e}}),v.push(o))}const C=lt({inputs:{x:n},backend:r,attrs:{shape:[1,m,a.util.sizeFromShape(n.shape)/m]}});v.push(C);const $=new Xa(b,t),I=[e.shape,[t.padInfo.top,t.padInfo.left],[t.strideHeight,t.strideWidth],[t.dilationHeight,t.dilationWidth],[t.inChannels],[t.filterWidth*t.inChannels],[t.outWidth]],y=r.runWebGLProgram($,[e],"float32",I),k=lt({inputs:{x:y},backend:r,attrs:{shape:b}});v.push(y),v.push(k);const R=null!=o,S=null!=s,w="leakyrelu"===u,T=u?nt(u,!0):null,N=new tt(x?k.shape:C.shape,x?C.shape:k.shape,x?[t.batchSize,g,t.outChannels]:[t.batchSize,t.outChannels,g],!0,!1,R,T,S,w),E=x?[k,C]:[C,k];if(o&&E.push(o),S&&E.push(s),w){const e=r.makeTensorInfo([],"float32",a.util.createScalarValue(i,"float32"));E.push(e),v.push(e)}const A=r.runWebGLProgram(N,E,"float32"),_=lt({inputs:{x:A},backend:r,attrs:{shape:t.outShape}});v.push(A);for(const e of v)r.disposeIntermediateTensorInfo(e);return _}const qa={kernelName:a.Conv2D,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,filter:s}=n,{strides:i,pad:u,dataFormat:l,dilations:c,dimRoundingMode:d}=r,p=a.backend_util.convertConv2DDataFormat(l),h=a.backend_util.computeConv2DInfo(o.shape,s.shape,i,c,u,d,!1,p);let f;if(1!==h.filterHeight||1!==h.filterWidth||1!==h.dilationHeight||1!==h.dilationWidth||1!==h.strideHeight||1!==h.strideWidth||"SAME"!==h.padInfo.type&&"VALID"!==h.padInfo.type)if(h.strideWidth<=2&&"channelsLast"===p&&(0,a.env)().getBool("WEBGL_EXP_CONV")){const e=new za(h),n=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]];f=t.runWebGLProgram(e,[o,s],"float32",n)}else if((0,a.env)().getBool("WEBGL_CONV_IM2COL"))f=ja({x:o,filter:s,convInfo:h,backend:t});else{const e=new Ga(h);f=t.runWebGLProgram(e,[o,s],"float32")}else f=Ka({x:o,filter:s,convInfo:h,backend:t});const x=lt({inputs:{x:f},backend:t,attrs:{shape:h.outShape}});return t.disposeIntermediateTensorInfo(f),x}};
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
class Ya{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideHeight,t=e.strideWidth,a=e.padInfo.top,r=e.padInfo.left,o="channelsLast"===e.dataFormat;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < ${e.batchSize}; b++) {\n          for (int yR = 0; yR < ${e.outHeight}; yR++) {\n            int xR = wR + yR * ${n} - ${a};\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int yC = 0; yC < ${e.outWidth}; yC++) {\n              int xC = wC + yC * ${t} - ${r};\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              if (${o}) {\n                float dyValue = getDy(b, yR, yC, d2);\n                float xValue = getX(b, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              } else {\n                float dyValue = getDy(b, d2, yR, yC);\n                float xValue = getX(b, d1, xR, xC);\n                dotProd += (xValue * dyValue);\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Qa{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterHeight,t=e.filterWidth,a=e.strideHeight,r=e.strideWidth,o="channelsLast"===e.dataFormat,s=n-1-e.padInfo.top,i=t-1-e.padInfo.left,u=o?1:2,l=o?2:3,c=o?3:1;this.userCode=`\n      const ivec2 pads = ivec2(${s}, ${i});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[${c}];\n\n        ivec2 dyCorner = ivec2(coords[${u}], coords[${l}]) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${n}; wR++) {\n          float dyR = float(dyRCorner + wR) / ${a}.0;\n\n          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = ${n} - 1 - wR;\n\n          for (int wC = 0; wC < ${t}; wC++) {\n            float dyC = float(dyCCorner + wC) / ${r}.0;\n\n            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = ${t} - 1 - wC;\n\n            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {\n\n              if (${o}) {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Za{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideDepth,t=e.strideHeight,a=e.strideWidth,r=e.padInfo.front,o=e.padInfo.top,s=e.padInfo.left;this.userCode=`\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < ${e.batchSize}; b++) {\n          for (int yF = 0; yF < ${e.outDepth}; yF++) {\n            int xF = wF + yF * ${n} - ${r};\n\n            if (xF < 0 || xF >= ${e.inDepth}) {\n              continue;\n            }\n\n            for (int yR = 0; yR < ${e.outHeight}; yR++) {\n              int xR = wR + yR * ${t} - ${o};\n\n              if (xR < 0 || xR >= ${e.inHeight}) {\n                continue;\n              }\n\n              for (int yC = 0; yC < ${e.outWidth}; yC++) {\n                int xC = wC + yC * ${a} - ${s};\n\n                if (xC < 0 || xC >= ${e.inWidth}) {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Ja{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterDepth,t=e.filterHeight,a=e.filterWidth,r=e.strideDepth,o=e.strideHeight,s=e.strideWidth,i=n-1-e.padInfo.front,u=t-1-e.padInfo.top,l=a-1-e.padInfo.left;this.userCode=`\n      const ivec3 pads = ivec3(${i}, ${u}, ${l});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < ${n}; wF++) {\n          float dyF = float(dyFCorner + wF) / ${r}.0;\n\n          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = ${n} - 1 - wF;\n\n          for (int wR = 0; wR < ${t}; wR++) {\n            float dyR = float(dyRCorner + wR) / ${o}.0;\n\n            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = ${t} - 1 - wR;\n\n            for (int wC = 0; wC < ${a}; wC++) {\n              float dyC = float(dyCCorner + wC) / ${s}.0;\n\n              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = ${a} - 1 - wC;\n\n              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}const er={kernelName:a.Conv2DBackpropFilter,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,dy:s}=n,{strides:i,pad:u,dataFormat:l,dimRoundingMode:c,filterShape:d}=r,p=a.backend_util.convertConv2DDataFormat(l),h=a.backend_util.computeConv2DInfo(o.shape,d,i,1,u,c,!1,p),f=new Ya(h);return t.runWebGLProgram(f,[o,s],"float32")}};const nr={kernelName:a.Conv2DBackpropInput,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{dy:o,filter:s}=n,{inputShape:i,strides:u,pad:l,dataFormat:c,dimRoundingMode:d}=r,p=a.backend_util.convertConv2DDataFormat(c),h=a.backend_util.computeConv2DInfo(i,s.shape,u,1,l,d,!1,p),f=new Qa(h);return t.runWebGLProgram(f,[o,s],"float32")}};const tr={kernelName:a.Conv3D,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,filter:s}=n,{strides:i,pad:u,dilations:l}=r,c=a.backend_util.computeConv3DInfo(o.shape,s.shape,i,l,u),d=new Ma(c);return t.runWebGLProgram(d,[o,s],"float32")}};const ar={kernelName:a.Conv3DBackpropFilterV2,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,dy:s}=n,{strides:i,pad:u,filterShape:l}=r,c=a.backend_util.computeConv3DInfo(o.shape,l,i,1,u),d=new Za(c);return t.runWebGLProgram(d,[o,s],"float32")}};const rr={kernelName:a.Conv3DBackpropInputV2,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{dy:o,filter:s}=n,{pad:i,strides:u,inputShape:l}=r,c=a.backend_util.computeConv3DInfo(l,s.shape,u,1,i),d=new Ja(c);return t.runWebGLProgram(d,[o,s],"float32")}},or=Jn({opSnippet:"if (isnan(x)) return x;\n  return cos(x);\n"}),sr={kernelName:a.Cos,backendName:"webgl",kernelFunc:or},ir=Jn({opSnippet:"\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n"}),ur={kernelName:a.Cosh,backendName:"webgl",kernelFunc:ir};
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
class lr{constructor(e,n,t,a,r){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[o,s,i,u]=e,[l]=n,[c,d]=t;this.outputShape=[l,c,d,u];const p="bilinear"===a?1:0,[h,f]=[s-1+".0",i-1+".0"],[x,m,g]=c>1?[""+(s-1)/(c-1),"(y2-y1) * height_ratio",`y1*${h} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${h}`],[b,v,C]=d>1?[""+(i-1)/(d-1),"(x2-x1) * width_ratio",`x1*${f} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${f}`];this.userCode=`\n      const float height_ratio = float(${x});\n      const float width_ratio = float(${b});\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= ${o}) {\n          return;\n        }\n\n        float height_scale = ${m};\n        float width_scale = ${v};\n\n        float in_y = ${g};\n        if( in_y < 0.0 || in_y > ${h} ) {\n          setOutput(float(${r}));\n          return;\n        }\n        float in_x = ${C};\n        if( in_x < 0.0 || in_x > ${f} ) {\n          setOutput(float(${r}));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if(${p} == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const cr={kernelName:a.CropAndResize,backendName:"webgl",kernelFunc:e=>{const{inputs:n,backend:t,attrs:a}=e,{image:r,boxes:o,boxInd:s}=n,{cropSize:i,method:u,extrapolationValue:l}=a,c=new lr(r.shape,o.shape,i,u,l);return t.runWebGLProgram(c,[r,o,s],"float32")}};var dr;!function(e){e.Prod="*",e.Sum="+"}(dr||(dr={}));class pr{constructor(e,n,t,a){this.op=e,this.outputShape=n,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const r=this.outputShape.length,o=this.op===dr.Prod?"1.0":"0.0",s=t?o:`getX(${hr(r,"coords",this.op)})`,i=this.outputShape[this.outputShape.length-1];let u="",l="";t?(u=a?"end != "+(i-1):"end != 0",l=a?"end + 1":"end - 1"):(u=a?`end + pow2 < ${i}`:"end >= pow2",l=a?"end + pow2":"end - pow2"),this.userCode=`\n      void main() {\n        ${ae(r)} coords = getOutputCoords();\n        int end = ${fr(r,"coords",this.op)};\n        float val = ${s};\n        int pow2 = int(pow(2.0, index));\n        if (${u}) {\n          int idx = ${l};\n          ${fr(r,"coords",this.op)} = idx;\n          val ${this.op}= getX(${hr(r,"coords",this.op)});\n        }\n        setOutput(val);\n      }\n    `}}function hr(e,n,t){if(1===e)return`${n}`;if(2===e)return`${n}.x, ${n}.y`;if(3===e)return`${n}.x, ${n}.y, ${n}.z`;if(4===e)return`${n}.x, ${n}.y, ${n}.z, ${n}.w`;throw new Error(`Cumulative ${t} for rank ${e} is not yet supported`)}function fr(e,n,t){if(1===e)return`${n}`;if(2===e)return`${n}.y`;if(3===e)return`${n}.z`;if(4===e)return`${n}.w`;throw new Error(`Cumulative ${t} for rank ${e} is not yet supported`)}
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
function xr(e,n,t,r,o,s){const i=n.shape.length,u=a.backend_util.getAxesPermutation([r],i);let l=n;null!=u&&(l=vt({inputs:{x:n},backend:t,attrs:{perm:u}}));const c=a.backend_util.getInnerMostAxes(1,i)[0];if(c!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${n.shape.length-1} but got axis=${r}`);const d=l.shape[c];let p=Mn({inputs:{x:l},backend:t});for(let n=0;n<=Math.ceil(Math.log2(d))-1;n++){const a=new pr(e,l.shape,!1,s),r=[[n]],o=p;p=t.runWebGLProgram(a,[p],p.dtype,r),t.disposeIntermediateTensorInfo(o)}if(o){const n=new pr(e,l.shape,o,s),a=p;p=t.runWebGLProgram(n,[p],p.dtype),t.disposeIntermediateTensorInfo(a)}if(null!=u){const e=vt({inputs:{x:p},backend:t,attrs:{perm:a.backend_util.getUndoAxesPermutation(u)}});return t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(l),e}return p}const mr={kernelName:a.Cumprod,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{x:r}=n,{axis:o,exclusive:s,reverse:i}=a;return xr(dr.Prod,r,t,o,s,i)}};const gr={kernelName:a.Cumsum,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{x:r}=n,{axis:o,exclusive:s,reverse:i}=a;return xr(dr.Sum,r,t,o,s,i)}};const br={kernelName:a.DenseBincount,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:a}=e,{x:r,weights:o}=n,{size:s,binaryOutput:i}=a;if(1===r.shape.length){const e=t.readSync(r.dataId),n=t.readSync(o.dataId),a=Ae(e,n,o.dtype,o.shape,s);return t.makeTensorInfo([s],o.dtype,a)}if(2===r.shape.length){const e=t.bufferSync(r),n=t.bufferSync(o),a=_e(e,n,s,i);return t.makeTensorInfo(a.shape,o.dtype,a.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${r.shape.length}.`)}};
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
class vr{constructor(e,n,t){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=n,this.dataFormat=t,this.userCode=`\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = ${this.getHeightCoordString()};\n      int w = ${this.getWidthCoordString()};\n      int d = ${this.getDepthCoordString()};\n\n      int in_h = h / ${n};\n      int offset_h = imod(h, ${n});\n      int in_w = w / ${n};\n      int offset_w = imod(w, ${n});\n      int offset_d = (offset_h * ${n} + offset_w) *\n        ${this.getOutputDepthSize()};\n      int in_d = d + offset_d;\n\n      float result = ${this.getInputSamplingString()};\n      setOutput(result);\n    }\n  `}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}const Cr={kernelName:a.DepthToSpace,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:a}=e,{x:r}=n,{blockSize:o,dataFormat:s}=a,i=r.shape[0],u=("NHWC"===s?r.shape[1]:r.shape[2])*o,l=("NHWC"===s?r.shape[2]:r.shape[3])*o,c=("NHWC"===s?r.shape[3]:r.shape[1])/(o*o),d=new vr("NHWC"===s?[i,u,l,c]:[i,c,u,l],o,s);return t.runWebGLProgram(d,[r],r.dtype)}};
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
class $r{constructor(e,n=!1,t=null,a=!1,r=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=ce(this.outputShape.length);const o=e.filterHeight,s=e.filterWidth,i=e.outChannels/e.inChannels;let u="",l="";t&&(u=a?`float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          ${t}\n        }`:r?`float activation(float a) {\n          float b = getLeakyreluAlphaAtOutCoords();\n          ${t}\n        }`:`\n          float activation(float x) {\n            ${t}\n          }\n        `,l="result = activation(result);");const c=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`\n      ${u}\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / ${i};\n        int q = d2 - d1 * ${i};\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < ${o}; wR++) {\n          int xR = xRCorner + wR * dilations[0];\n\n          if (xR < 0 || xR >= inDims[0]) {\n            continue;\n          }\n\n          for (int wC = 0; wC < ${s}; wC++) {\n            int xC = xCCorner + wC * dilations[1];\n\n            if (xC < 0 || xC >= inDims[1]) {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        ${c}\n        ${l}\n        setOutput(result);\n      }\n    `}}
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
class Ir{constructor(e,n=!1,t=null,r=!1,o=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=ce(this.outputShape.length);const s=e.outChannels/e.inChannels,i=e.padInfo.left,u=e.strideWidth,l=e.dilationWidth,c=e.filterHeight,d=e.filterWidth,p=d;let h="\n      int xR; int xC; int xCOffset;\n      vec4 wTexel; vec4 previous; vec4 final;";for(let e=0;e<d;e++)h+=`\n          vec4 xTexelC${2*e};\n          int xTexelC${2*e}Ready;\n          vec4 xTexelC${2*e+1};\n          int xTexelC${2*e+1}Ready;\n          vec4 xC${e};`;h+=`\n    for (int r = 0; r < ${c}; r++) {\n      `;for(let e=0;e<d;e++)h+=`\n          xTexelC${2*e} = vec4(0.0);\n          xTexelC${2*e}Ready = 0;\n          xTexelC${2*e+1} = vec4(0.0);\n          xTexelC${2*e+1}Ready = 0;\n          xC${e} = vec4(0.0);`;h+="\n        xR = xRCorner + r * dilations[0];\n        if (xR >=0 && xR < inDims[0]) {\n      ";for(let e=0;e<(p+1)/2;e++){const n=2*e;if(h+=`\n          xC = xCCorner + ${n*l};\n          `,1===u){if(n<d&&(i%2==1?(h+=`\n                xCOffset = xC + 1;\n                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {\n                  xTexelC${n} = getX(batch, xR, xCOffset, d1);\n\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC${n}.zw = vec2(0.0);\n                  }\n                  xTexelC${n}Ready = 1;\n                }\n              `,h+=1===l&&n>0?`\n                xC${n} = vec4(xTexelC${n-2}.zw, xTexelC${n}.xy);\n                `:`\n                  xCOffset = xC + 1 - 2;\n\n                  if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                    previous = getX(batch, xR, xCOffset, d1);\n\n                    // Need to manually clear unused channels in case\n                    // we're reading from recycled texture.\n                    if (xCOffset + 1 >= inDims[1]) {\n                      previous.zw = vec2(0.0);\n                    }\n\n                    xC${n} = vec4(previous.zw, xTexelC${n}.xy);\n                  } else {\n                    xC${n} = vec4(0.0, 0.0, xTexelC${n}.xy);\n                  }\n                  `):h+=`\n                if (xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {\n                  xTexelC${n} = getX(batch, xR, xC, d1);\n                  if (xC + 1 >= inDims[1]) {\n                    xTexelC${n}.zw = vec2(0.0);\n                  }\n                  xTexelC${n}Ready = 1;\n                }\n\n                xC${n} = xTexelC${n};\n                `,n+1<d)){const e=i%2==0?a.util.nearestLargerEven(l):l;l%2==0&&i%2==1||l%2!=0&&i%2!=1?(h+=`\n                  xCOffset = xC + imod(pads[1], 2) + ${e};\n\n                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {\n                    xTexelC${n+1} = getX(batch, xR, xCOffset, d1);\n\n                    // Need to manually clear unused channels in case\n                    // we're reading from recycled texture.\n                    if (xCOffset + 1 >= inDims[1]) {\n                      xTexelC${n+1}.zw = vec2(0.0);\n                    }\n                    xTexelC${n+1}Ready = 1;\n                  }\n                  `,h+=l>1?`\n                    xCOffset -= 2;\n                    if (xCOffset >= 0 && xCOffset < inDims[1]) {\n                     previous = getX(batch, xR, xCOffset, d1);\n                     xC${n+1} = vec4(previous.zw, xTexelC${n+1}.xy);\n                    } else {\n                     xC${n+1} = vec4(0.0, 0.0, xTexelC${n+1}.xy);\n                    }\n                    `:`\n                    xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.xy);\n                    `):h+=1===e?`\n                    xC${n+1} = xTexelC${n};\n                    `:`\n                    xCOffset = xC + ${e};\n\n                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {\n                      xTexelC${n+1} = getX(batch, xR, xCOffset, d1);\n                      if (xCOffset + 1 >= inDims[1]) {\n                        xTexelC${n+1}.zw = vec2(0.0);\n                      }\n                      xTexelC${n+1}Ready = 1;\n                    }\n\n                    xC${n+1} = xTexelC${n+1};\n                    `}}else n<d&&(i%2==1?(h+=`\n                xCOffset = xC + 1 - strides[1];\n                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {\n                  xTexelC${n} = getX(batch, xR, xCOffset, d1);\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC${n}.zw = vec2(0.0);\n                  }\n                  xTexelC${n}Ready = 1;\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${n+1}Ready == 0) {\n                  xTexelC${n+1} = getX(batch, xR, xC + 1, d1);\n                  // Need to manually clear unused channels in case\n                  // we're reading from recycled texture.\n                  if (xC + 2 >= inDims[1]) {\n                    xTexelC${n+1}.zw = vec2(0.0);\n                  }\n                  xTexelC${n+1}Ready = 1;\n                }\n\n                xC${n} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);\n              `,n+1<d&&(h+=`\n                  final = vec4(0.0);\n                  xCOffset = xC + 1 + strides[1];\n                  if(xCOffset >= 0 && xCOffset < inDims[1]) {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xC${n+1} = vec4(xTexelC${n+1}.xy, final.xy);\n                `)):(h+=`\n                if(xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {\n                  xTexelC${n} = getX(batch, xR, xC, d1);\n                  if (xC + 1 >= inDims[1]) {\n                    xTexelC${n}.zw = vec2(0.0);\n                  }\n                  xTexelC${n}Ready = 1;\n                }\n\n                xCOffset = xC + strides[1];\n                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {\n                  xTexelC${n+1} = getX(batch, xR, xCOffset, d1);\n                  if (xCOffset + 1 >= inDims[1]) {\n                    xTexelC${n+1}.zw = vec2(0.);\n                  }\n                  xTexelC${n+1}Ready = 1;\n                }\n\n                xC${n} = vec4(\n                  xTexelC${n}.xy, xTexelC${n+1}.xy);\n              `,n+1<d&&(h+=`\n                  xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);\n                `)));n<d&&(h+=`\n            wTexel = getW(r, ${n}, d1, q);\n            dotProd += xC${n} * vec4(wTexel.xz, wTexel.xz);\n          `,n+1<d&&(h+=`\n              wTexel = getW(r, ${n+1}, d1, q);\n              dotProd += xC${n+1} * vec4(wTexel.xz, wTexel.xz);\n            `))}h+="\n    }\n  ",h+="\n      }\n    ";let f="",x="";t&&(f=r?`vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ${t}\n        }`:o?`vec4 activation(vec4 a) {\n          vec4 b = getLeakyreluAlphaAtOutCoords();\n          ${t}\n        }`:`vec4 activation(vec4 x) {\n          ${t}\n        }`,x="result = activation(result);");const m=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),o&&this.variableNames.push("leakyreluAlpha"),this.userCode=`\n      ${f}\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / ${s};\n        int q = d2 - d1 * ${s};\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.\n        vec4 dotProd = vec4(0.000000000000001);\n\n        ${h}\n\n        vec4 result = dotProd - vec4(0.000000000000001);\n        ${m}\n        ${x}\n        setOutput(result);\n      }\n    `}}const yr={kernelName:a.DepthwiseConv2dNative,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,filter:s}=n,{strides:i,pad:u,dilations:l,dimRoundingMode:c}=r;let d=l;null==d&&(d=[1,1]),a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(i,d),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${d}'`));const p=a.backend_util.computeConv2DInfo(o.shape,s.shape,i,d,u,c,!0);let h;h=(0,a.env)().getBool("WEBGL_PACK_DEPTHWISECONV")&&p.strideWidth<=2&&p.outChannels/p.inChannels==1?new Ir(p):new $r(p);const f=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];return t.runWebGLProgram(h,[o,s],"float32",f)}};
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
class kr{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideHeight,t=e.strideWidth,a=e.padInfo.top,r=e.padInfo.left,o=e.outChannels/e.inChannels;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * ${o} + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < ${e.batchSize}; b++) {\n          for (int yR = 0; yR < ${e.outHeight}; yR++) {\n            int xR = wR + yR * ${n} - ${a};\n\n            if (xR < 0 || xR >= ${e.inHeight}) {\n              continue;\n            }\n\n            for (int yC = 0; yC < ${e.outWidth}; yC++) {\n              int xC = wC + yC * ${t} - ${r};\n\n              if (xC < 0 || xC >= ${e.inWidth}) {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class Rr{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterHeight,t=e.filterWidth,a=e.strideHeight,r=e.strideWidth,o=n-1-e.padInfo.top,s=t-1-e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`\n      const ivec2 pads = ivec2(${o}, ${s});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < ${n}; wR++) {\n          float dyR = float(dyRCorner + wR) / ${a}.0;\n\n          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = ${n} - 1 - wR;\n\n          for (int wC = 0; wC < ${t}; wC++) {\n            float dyC = float(dyCCorner + wC) / ${r}.0;\n\n            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = ${t} - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < ${i}; dm++) {\n              int d2 = d1 * ${i} + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}const Sr={kernelName:a.DepthwiseConv2dNativeBackpropFilter,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,dy:s}=n,{strides:i,dilations:u,pad:l,dimRoundingMode:c,filterShape:d}=r,p=a.backend_util.computeConv2DInfo(o.shape,d,i,u,l,c,!0),h=new kr(p);return t.runWebGLProgram(h,[o,s],"float32")}};const wr={kernelName:a.DepthwiseConv2dNativeBackpropInput,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{dy:o,filter:s}=n,{strides:i,dilations:u,pad:l,dimRoundingMode:c,inputShape:d}=r,p=a.backend_util.computeConv2DInfo(d,s.shape,i,u,l,c,!0),h=new Rr(p);return t.runWebGLProgram(h,[o,s],"float32")}};
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
class Tr{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode="\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    "}}const Nr={kernelName:a.Diag,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t}=e,{x:r}=n,o=[...r.shape,...r.shape],s=a.util.sizeFromShape(r.shape),i=lt({inputs:{x:r},backend:t,attrs:{shape:[s]}}),u=new Tr(s),l=t.runWebGLProgram(u,[i],i.dtype),c=lt({inputs:{x:l},backend:t,attrs:{shape:o}});return t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(l),c}};
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
class Er{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:n,inWidth:t,padInfo:a,strideHeight:r,strideWidth:o,filterHeight:s,filterWidth:i,dilationHeight:u,dilationWidth:l}=e,{top:c,left:d}=a;this.userCode=`\n      const ivec2 strides = ivec2(${r}, ${o});\n      const ivec2 pads = ivec2(${c}, ${d});\n      const float neg_infinity = -3.4e38;\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.w;\n        ivec2 outTopLeftCorner =\n            coords.yz * strides - pads;\n        int hBeg = outTopLeftCorner.x;\n        int wBeg = outTopLeftCorner.y;\n\n        float curVal = neg_infinity;\n        for (int h = 0; h < ${s}; h++) {\n          int hIn = hBeg + h * ${u};\n\n          if (hIn >= 0 && hIn < ${n}) {\n            for (int w = 0; w < ${i}; w++) {\n              int wIn = wBeg + w * ${l};\n\n              if (wIn >= 0 && wIn < ${t}) {\n                float xVal = getX(batch, hIn, wIn, d1);\n                float wVal = getW(h, w, d1);\n\n                float val = xVal + wVal;\n                if (val > curVal) {\n                  curVal = val;\n                }\n              }\n            }\n          }\n        }\n\n        float result = curVal;\n        setOutput(result);\n      }\n    `}}const Ar={kernelName:a.Dilation2D,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,filter:s}=n,{strides:i,pad:u,dilations:l}=r,c=a.backend_util.computeDilation2DInfo(o.shape,s.shape,i,u,"NHWC",l);let d;const p=new Er(c);d=t.runWebGLProgram(p,[o,s],"float32");const h=lt({inputs:{x:d},backend:t,attrs:{shape:c.outShape}});return t.disposeIntermediateTensorInfo(d),h}};const _r={kernelName:a.Einsum,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:r}=e,{equation:o}=r,s=n,{allDims:i,summedDims:u,idDims:l}=a.backend_util.decodeEinsumEquation(o,s.length);a.backend_util.checkEinsumDimSizes(i.length,l,s);const{path:c,steps:d}=a.backend_util.getEinsumComputePath(u,l),p=d.length;let h=null,f=i.length;const x=[];for(let e=0;e<p;++e){for(const n of d[e]){const{permutationIndices:e,expandDims:r}=a.backend_util.getEinsumPermutation(f,l[n]);let o;a.backend_util.isIdentityPermutation(e)?o=s[n]:(o=vt({inputs:{x:s[n]},backend:t,attrs:{perm:e}}),x.push(o));const i=o.shape.slice();for(let e=0;e<r.length;++e)i.splice(r[e],0,1);a.util.arraysEqual(o.shape,i)||(o=lt({inputs:{x:o},backend:t,attrs:{shape:i}}),x.push(o)),null===h?h=o:(h=it({inputs:{a:o,b:h},backend:t}),x.push(h))}e<p-1&&(c[e]>=0&&(h=gt({inputs:{x:h},backend:t,attrs:{axis:c[e]-(i.length-f),keepDims:!1}}),x.push(h)),f--)}for(const e of x)e!==h&&t.disposeIntermediateTensorInfo(e);return h}},Or=Jn({opSnippet:"return (x >= 0.0) ? x : (exp(x) - 1.0);",packedOpSnippet:"\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n"}),Fr={kernelName:a.Elu,backendName:"webgl",kernelFunc:Or},Dr={kernelName:a.EluGrad,backendName:"webgl",kernelFunc:e=>{const{inputs:n,backend:t}=e,{dy:r,y:o}=n,s=(0,a.env)().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Gn("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n",r.shape,o.shape):new Un("return (b >= 1.0) ? a : a * (b + 1.0);",r.shape,o.shape);return t.runWebGLProgram(s,[r,o],r.dtype)}},Lr=et({opSnippet:"return float(a == b);",packedOpSnippet:"\n  return vec4(equal(a, b));\n",dtype:"bool",cpuKernelImpl:Le}),Pr={kernelName:a.Equal,backendName:"webgl",kernelFunc:Lr},Br=Jn({opSnippet:`\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = ${a.backend_util.ERF_P};\n  float a1 = ${a.backend_util.ERF_A1};\n  float a2 = ${a.backend_util.ERF_A2};\n  float a3 = ${a.backend_util.ERF_A3};\n  float a4 = ${a.backend_util.ERF_A4};\n  float a5 = ${a.backend_util.ERF_A5};\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n`}),Vr={kernelName:a.Erf,backendName:"webgl",kernelFunc:Br},Wr=Jn({opSnippet:"if (isnan(x)) return x;\n  return exp(x);\n",packedOpSnippet:"\n  vec4 result = exp(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",cpuKernelImpl:Pe,dtype:"float32"}),Ur={kernelName:a.Exp,backendName:"webgl",kernelFunc:Wr};
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
function Gr(e){const{inputs:n,attrs:t,backend:r}=e,{dim:o}=t,{input:s}=n,i=s.shape.length,u=s.shape.slice();let l=o;return o<0&&(a.util.assert(-(i+1)<=o,(()=>`Axis must be in the interval [${-(i+1)}, ${i}]`)),l=i+o+1),u.splice(l,0,1),lt({inputs:{x:s},backend:r,attrs:{shape:u}})}const Mr={kernelName:a.ExpandDims,backendName:"webgl",kernelFunc:Gr},zr="return exp(x) - 1.0;",Xr=Jn({opSnippet:zr,packedOpSnippet:zr,cpuKernelImpl:Be}),Hr={kernelName:a.Expm1,backendName:"webgl",kernelFunc:Xr};
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
class Kr{constructor(e,n,t){this.variableNames=["real","imag"];const a=n[1];this.outputShape=n;const r=t?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,o=t?`${a}.0`:"1.0";let s;if("real"===e)s="return real * expR - imag * expI;";else{if("imag"!==e)throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);s="return real * expI + imag * expR;"}this.userCode=`\n      const float exponentMultiplier = ${r};\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        ${s}\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(${a});\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < ${a}; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / ${o};\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function jr(e,n,t){const r=t.texData.get(e.dataId),o=a.util.sizeFromShape(e.shape),s=e.shape[e.shape.length-1],i=lt({inputs:{x:e},backend:t,attrs:{shape:[o/s,s]}}),u=i.shape,l=new Kr("real",u,n),c=new Kr("imag",u,n),d=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:u},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:u}],p=t.runWebGLProgram(l,d,"float32"),h=t.runWebGLProgram(c,d,"float32"),f=Xn({inputs:{real:p,imag:h},backend:t});t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(h);const x=lt({inputs:{x:f},backend:t,attrs:{shape:e.shape}});return t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(f),x}const qr={kernelName:a.FFT,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t}=e,{input:a}=n;return jr(a,!1,t)}};
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
class Yr{constructor(e,n){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode="\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    "}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Qr(e){const{backend:n,attrs:t}=e,{shape:r,value:o}=t;let{dtype:s}=t;if(s=s||a.util.inferDtype(o),"string"===s){const e=a.util.getArrayFromDType(s,a.util.sizeFromShape(r));return e.fill(o),n.makeTensorInfo(r,s,e)}{const e=new Yr(r,o),t=[[o]];return n.runWebGLProgram(e,[],s,t)}}const Zr={kernelName:a.Fill,backendName:"webgl",kernelFunc:Qr};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Jr{constructor(e){this.variableNames=["Image"],this.outputShape=[];const n=e[2];this.outputShape=e,this.userCode=`\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n\n          int coordX = ${n} - x - 1;\n          float outputValue;\n          if(coordX >= 0 && coordX < ${n}) {\n            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);\n          } else {\n            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const eo={kernelName:a.FlipLeftRight,backendName:"webgl",kernelFunc:({inputs:e,backend:n})=>{const{image:t}=e,a=n,r=new Jr(t.shape);return a.runWebGLProgram(r,[t],t.dtype)}},no="return floor(x);",to=Jn({opSnippet:no,packedOpSnippet:no,cpuKernelImpl:Ve}),ao={kernelName:a.Floor,backendName:"webgl",kernelFunc:to},ro=et({opSnippet:"\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n",packedOpSnippet:"\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n",dtype:"int32"}),oo={kernelName:a.FloorDiv,backendName:"webgl",kernelFunc:ro};
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
class so{constructor(e){this.variableNames=["A"];const n=W(),[t,a]=e;this.outputShape=e,this.userCode=`\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${a}.0, ${t}.0);\n\n        vec4 values = ${n.texture2D}(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    `}}
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
class io{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const n=W(),[t,a]=e;this.outputShape=e,this.userCode=`\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2(${a}.0, ${t}.0);\n            vec4 values = ${n.texture2D}(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        ${n.output} = result;\n      }\n    `}}
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
const uo={kernelName:a.FromPixels,backendName:"webgl",kernelFunc:function(e){const{inputs:n,backend:t,attrs:r}=e;let{pixels:o}=n;const{numChannels:s}=r,i="undefined"!=typeof HTMLVideoElement&&o instanceof HTMLVideoElement,l="undefined"!=typeof HTMLImageElement&&o instanceof HTMLImageElement,[c,d]=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],p=[d,c],h=[d,c,s];if(l||i){const e=(0,a.env)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");null!=lo&&e===co||(co=e,lo=document.createElement("canvas").getContext("2d",{willReadFrequently:co})),lo.canvas.width=c,lo.canvas.height=d,lo.drawImage(o,0,0,c,d),o=lo.canvas}const f=t.makeTensorInfo(p,"int32");t.texData.get(f.dataId).usage=u.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(f.dataId),o);const x=(0,a.env)().getBool("WEBGL_PACK")?new io(h):new so(h),m=t.runWebGLProgram(x,[f],"int32");return t.disposeData(f.dataId),m}};let lo,co=(0,a.env)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");const po={kernelName:a.FusedConv2D,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,filter:s,bias:i,preluActivationWeights:u}=n,{strides:l,pad:c,dataFormat:d,dilations:p,dimRoundingMode:h,activation:f,leakyreluAlpha:x}=r,m=a.backend_util.convertConv2DDataFormat(d),g=a.backend_util.computeConv2DInfo(o.shape,s.shape,l,p,c,h,!1,m);let b;const v=[],C=null!=i,$=null!=u,I="leakyrelu"===f,y=()=>{const e=[o,s],n=(e,n)=>{if("NCHW"===n&&1===e.shape.length&&1!==e.shape[0]){const n=lt({inputs:{x:e},backend:t,attrs:{shape:[e.shape[0],1,1]}});return v.push(n),n}return e};if(C&&e.push(n(i,d)),$&&e.push(n(u,d)),I){const n=t.makeTensorInfo([],"float32",a.util.createScalarValue(x,"float32"));e.push(n),v.push(n)}return e};if(1!==g.filterHeight||1!==g.filterWidth||1!==g.dilationHeight||1!==g.dilationWidth||1!==g.strideHeight||1!==g.strideWidth||"SAME"!==g.padInfo.type&&"VALID"!==g.padInfo.type)if(g.strideWidth<=2&&"channelsLast"===m&&(0,a.env)().getBool("WEBGL_EXP_CONV")){const e=f?nt(f,!0):null,n=new za(g,C,e,$,I),a=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],r=y();b=t.runWebGLProgram(n,r,"float32",a)}else if((0,a.env)().getBool("WEBGL_CONV_IM2COL"))b=ja({x:o,filter:s,convInfo:g,backend:t,bias:i,activation:f,preluActivationWeights:u,leakyreluAlpha:x});else{const e=f?nt(f,!1):null,n=new Ga(g,C,e,$,I),a=y();b=t.runWebGLProgram(n,a,"float32")}else b=Ka({x:o,filter:s,convInfo:g,backend:t,bias:i,activation:f,preluActivationWeights:u,leakyreluAlpha:x});const k=lt({inputs:{x:b},backend:t,attrs:{shape:g.outShape}});return v.push(b),v.forEach((e=>t.disposeIntermediateTensorInfo(e))),k}};const ho={kernelName:a.FusedDepthwiseConv2D,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,filter:s,bias:i,preluActivationWeights:u}=n,{strides:l,pad:c,dilations:d,dimRoundingMode:p,activation:h,leakyreluAlpha:f}=r,x=[];let m=d;null==m&&(m=[1,1]),a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(l,m),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${m}'`));const g=a.backend_util.computeConv2DInfo(o.shape,s.shape,l,m,c,p,!0),b=(0,a.env)().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels==1,v=h?nt(h,b):null,C=[o,s],$=null!=i,I=null!=u,y="leakyrelu"===h;if($&&C.push(i),I&&C.push(u),y){const e=t.makeTensorInfo([],"float32",a.util.createScalarValue(f,"float32"));C.push(e),x.push(e)}let k;k=b?new Ir(g,$,v,I,y):new $r(g,$,v,I,y);const R=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],S=t.runWebGLProgram(k,C,"float32",R);return x.forEach((e=>t.disposeIntermediateTensorInfo(e))),S}};class fo{constructor(e,n,t,a){this.sliceDim=e,this.strides=n,this.paramsShape=a,this.variableNames=["x","indices"],this.outputShape=t;const r=ae(t.length);let o="\n    int index;";for(let e=0;e<this.sliceDim;e++)o+=`\n          index = round(getIndices(coords[0], ${e}));\n          out_of_bounds = out_of_bounds || index < 0;\n          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[e]};\n          flattenIndex += index * ${this.strides[e]};`;this.userCode=`\n         void main() {\n          ${r} coords = getOutputCoords();\n          int flattenIndex = 0;\n          bool out_of_bounds = false;\n\n          ${o}\n\n          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));\n        }\n      `}}const xo={kernelName:a.GatherNd,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t}=e,{params:r,indices:o}=n,s=o.shape,i=s[s.length-1],u=a.util.sizeFromShape(r.shape),[l,c,d,p]=a.backend_util.prepareAndValidate(r,o),h=lt({inputs:{x:o},backend:t,attrs:{shape:[c,i]}}),f=lt({inputs:{x:r},backend:t,attrs:{shape:[a.util.sizeFromShape(r.shape)/d,d]}});if(t.shouldExecuteOnCPU([r,o])||"string"===r.dtype){const e=t.readSync(o.dataId),n=t.bufferSync(r),a=We(e,n,r.dtype,c,i,d,p,r.shape,u);return t.makeTensorInfo(l,r.dtype,a.values)}const x=new fo(i,p,[c,d],r.shape),m=t.runWebGLProgram(x,[f,h],f.dtype),g=lt({inputs:{x:m},backend:t,attrs:{shape:l}});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(m),g}};
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
class mo{constructor(e,n){this.variableNames=["A","indices"],this.outputShape=n,this.rank=n.length;const t=ae(this.rank),a=function(e,n){const t=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[];for(let n=0;n<e.length;n++)2===n?a.push("index"):a.push(`${t[n]}`);return a.join()}(e);this.userCode=`\n      void main() {\n        ${t} resRC = getOutputCoords();\n        int index = int(getIndices(resRC.x, resRC.z));\n        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;\n        setOutput(inBounds * getA(${a}));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function go(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,indices:s}=n,{axis:i,batchDims:u}=r,l=a.util.parseAxisParam(i,o.shape)[0];if((0,a.env)().get("DEBUG")){const e=t.readSync(s.dataId),n=o.shape[l];for(let t=0;t<e.length;++t){const r=e[t];a.util.assert(r<=n-1&&r>=0,(()=>`GatherV2: the index value ${r} is not in [0, ${n-1}]`))}}const c=a.backend_util.segment_util.collectGatherOpShapeInfo(o,s,l,u),d=a.util.sizeFromShape(s.shape),p=[],h=lt({inputs:{x:o},backend:t,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),f=lt({inputs:{x:s},backend:t,attrs:{shape:[c.batchSize,d/c.batchSize]}});p.push(h),p.push(f);const x=[c.batchSize,c.outerSize,d/c.batchSize,c.sliceSize];if(t.shouldExecuteOnCPU([o,s])||"string"===o.dtype){const e=t.bufferSync(f),n=t.bufferSync(h),a=Ue(n,e,x);return p.forEach((e=>t.disposeIntermediateTensorInfo(e))),t.makeTensorInfo(c.outputShape,a.dtype,a.values)}const m=new mo(h.shape,x),g=t.runWebGLProgram(m,[h,f],h.dtype);p.push(g);const b=lt({inputs:{x:g},backend:t,attrs:{shape:c.outputShape}});return p.forEach((e=>t.disposeIntermediateTensorInfo(e))),b}const bo={kernelName:a.GatherV2,backendName:"webgl",kernelFunc:go},vo=et({opSnippet:"return float(a > b);",packedOpSnippet:"\n  return vec4(greaterThan(a, b));\n",cpuKernelImpl:Ge,dtype:"bool"}),Co={kernelName:a.Greater,backendName:"webgl",kernelFunc:vo},$o=et({opSnippet:"return float(a >= b);",packedOpSnippet:"\n  return vec4(greaterThanEqual(a, b));\n",dtype:"bool",cpuKernelImpl:Me}),Io={kernelName:a.GreaterEqual,backendName:"webgl",kernelFunc:$o};const yo={kernelName:a.IFFT,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t}=e,{input:a}=n;return jr(a,!0,t)}},ko=Jn({opSnippet:"return float(!isnan(x) && !isinf(x));",dtype:"bool"}),Ro={kernelName:a.IsFinite,backendName:"webgl",kernelFunc:ko},So=Jn({opSnippet:"return float(isinf(x));",dtype:"bool"}),wo={kernelName:a.IsInf,backendName:"webgl",kernelFunc:So},To=Jn({opSnippet:"return float(isnan(x));",dtype:"bool"}),No={kernelName:a.IsNan,backendName:"webgl",kernelFunc:To},Eo=et({opSnippet:"return float(a < b);",packedOpSnippet:"\n  return vec4(lessThan(a, b));\n",cpuKernelImpl:ze,dtype:"bool"}),Ao={kernelName:a.Less,backendName:"webgl",kernelFunc:Eo},_o=et({opSnippet:"return float(a <= b);",packedOpSnippet:"\n  return vec4(lessThanEqual(a, b));\n",cpuKernelImpl:Xe,dtype:"bool"}),Oo={kernelName:a.LessEqual,backendName:"webgl",kernelFunc:_o};const Fo={kernelName:a.LinSpace,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{backend:n,attrs:t}=e,{start:a,stop:r,num:o}=t,s=He(a,r,o);return n.makeTensorInfo([s.length],"float32",s)}},Do=Jn({opSnippet:"if (isnan(x)) return x;\n  return x < 0.0 ? 0./0. : log(x);\n",packedOpSnippet:"\n  vec4 result = log(x);\n  bvec4 isNaN = isnan(x);\n  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);\n  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);\n  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);\n  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);\n  return result;\n",cpuKernelImpl:Ke}),Lo={kernelName:a.Log,backendName:"webgl",kernelFunc:Do},Po=Jn({opSnippet:"if (isnan(x)) return x;\n  return log(1.0 + x);\n"}),Bo={kernelName:a.Log1p,backendName:"webgl",kernelFunc:Po},Vo=et({opSnippet:"return float(a >= 1.0 && b >= 1.0);",packedOpSnippet:"\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n",dtype:"bool"}),Wo={kernelName:a.LogicalAnd,backendName:"webgl",kernelFunc:Vo},Uo=Jn({opSnippet:"return float(!(x >= 1.0));"}),Go={kernelName:a.LogicalNot,backendName:"webgl",kernelFunc:Uo},Mo=et({opSnippet:"return float(a >= 1.0 || b >= 1.0);",packedOpSnippet:"\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n",dtype:"bool"}),zo={kernelName:a.LogicalOr,backendName:"webgl",kernelFunc:Mo};
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
class Xo{constructor(e,n,t,a,r){this.variableNames=["x"],this.outputShape=[];const o=n,s=e[3]-1;let i;this.outputShape=e;const u=`float(${t}) + float(${a}) * sum`;i=.5===r?`inversesqrt(${u})`:1===r?`1.0/(${u})`:`exp(log(${u}) * float(-${r}));`,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -${o}; j <= ${o}; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  ${s}) {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * ${i};\n        setOutput(val);\n      }\n    `}}
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
class Ho{constructor(e,n,t,a,r){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const o=n,s=e[3]-1;let i;this.outputShape=e;const u=`float(${t}) + float(${a}) * sum`;i=.5===r?`inversesqrt(${u})`:1===r?`1.0/(${u})`:`exp(log(${u}) * float(-${r}));`,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < ${this.outputShape[3]};\n        bool hasNextRow = c < ${this.outputShape[2]};\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - ${o};\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - ${o}; j <= ${o}; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${s}));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * ${i};\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ko={kernelName:a.LRN,backendName:"webgl",kernelFunc:e=>{const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{depthRadius:s,bias:i,alpha:u,beta:l}=r,c=(0,a.env)().getBool("WEBGL_PACK_NORMALIZATION")?new Ho(o.shape,s,i,u,l):new Xo(o.shape,s,i,u,l);return t.runWebGLProgram(c,[o],o.dtype)}};
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
class jo{constructor(e,n,t,a,r){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=n,this.bias=t,this.alpha=a,this.beta=r,this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < ${this.depth}; ++d) {\n          int depthBegin = int(max(0.0, float(d - ${n})));\n          int depthEnd = int(min(float(${this.depth}),\n              float(d + ${n} + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = ${this.depth};\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(${a}) * norm + float(${t});\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(${a})\n                * float(${r})\n                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * ${r});\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const qo={kernelName:a.LRNGrad,backendName:"webgl",kernelFunc:e=>{const{inputs:n,backend:t,attrs:a}=e,{x:r,y:o,dy:s}=n,{depthRadius:i,bias:u,alpha:l,beta:c}=a,d=new jo(r.shape,i,u,l,c);return t.runWebGLProgram(d,[r,o,s],r.dtype)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Yo(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{reductionIndices:s,keepDims:i}=r,u=o.shape.length,l=a.util.parseAxisParam(s,o.shape);let c=l;const d=a.backend_util.getAxesPermutation(c,u),p=null!=d,h=t.shouldExecuteOnCPU([o]);let f=o;if(p){if(h){const e=t.texData.get(f.dataId).values,n=new Array(u);for(let e=0;e<n.length;e++)n[e]=o.shape[d[e]];const a=In(e,o.shape,o.dtype,d,n);f=t.makeTensorInfo(n,o.dtype);t.texData.get(f.dataId).values=a}else f=mt(o,d,t);c=a.backend_util.getInnerMostAxes(c.length,u)}a.backend_util.assertAxesAreInnerMostDims("max",c,u);const[x,m]=a.backend_util.computeOutAndReduceShapes(f.shape,c);let g,b=x;if(i&&(b=a.backend_util.expandShapeToKeepDim(x,l)),h){const e=t.texData.get(f.dataId).values,n=je(e,a.util.sizeFromShape(m),b,o.dtype);g=t.makeTensorInfo(b,o.dtype);t.texData.get(g.dataId).values=n}else g=
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,n,t,r){const o=a.util.sizeFromShape(n),s=lt({inputs:{x:e},attrs:{shape:[a.util.sizeFromShape(e.shape)/o,o]},backend:r}),i=ht(s,e.dtype,"max",r),u=lt({inputs:{x:i},attrs:{shape:t},backend:r});return r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(i),u}(f,m,b,t);return p&&t.disposeIntermediateTensorInfo(f),g}const Qo={kernelName:a.Max,backendName:"webgl",kernelFunc:Yo},Zo=et({opSnippet:"\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n",packedOpSnippet:"\n  vec4 result = vec4(max(a, b));\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  \n  result.r = isNaN.r ? NAN : result.r;\n  result.g = isNaN.g ? NAN : result.g;\n  result.b = isNaN.b ? NAN : result.b;\n  result.a = isNaN.a ? NAN : result.a;\n\n  return result;\n",cpuKernelImpl:qe}),Jo={kernelName:a.Maximum,backendName:"webgl",kernelFunc:Zo};const es={kernelName:a.MaxPool,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n;B(o,"maxPool");const{filterSize:s,strides:i,pad:u,dimRoundingMode:l}=r;a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(i,1),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '1'`));const c=a.backend_util.computePool2DInfo(o.shape,s,i,1,u,l);if(1===c.filterWidth&&1===c.filterHeight&&a.util.arraysEqual(c.inShape,c.outShape))return Mn({inputs:{x:o},backend:t});const d=new ea(c,"max",!1);return t.runWebGLProgram(d,[o],o.dtype)}};const ns={kernelName:a.MaxPool3D,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{filterSize:s,strides:i,pad:u,dataFormat:l,dimRoundingMode:c}=r,d=a.backend_util.computePool3DInfo(o.shape,s,i,[1,1,1],u,c,l),p=new na(d,"max",!1);return t.runWebGLProgram(p,[o],o.dtype)}};
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
class ts{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const n=e.strideHeight,t=e.strideWidth,a=e.dilationHeight,r=e.effectiveFilterHeight,o=e.effectiveFilterWidth,s=r-1-e.padInfo.top,i=o-1-e.padInfo.left,u=r*o-1;this.userCode=`\n      const ivec2 pads = ivec2(${s}, ${i});\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ${r};\n          wR += ${a}) {\n          float dyR = float(dyRCorner + wR) / ${n}.0;\n\n          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < ${o}; wC++) {\n            float dyC = float(dyCCorner + wC) / ${t}.0;\n\n            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = ${u} - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * ${o} + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}class as{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const n=e.strideDepth,t=e.strideHeight,a=e.strideWidth,r=e.dilationDepth,o=e.dilationHeight,s=e.dilationWidth,i=e.effectiveFilterDepth,u=e.effectiveFilterHeight,l=e.effectiveFilterWidth,c=i-1-e.padInfo.front,d=u-1-e.padInfo.top,p=l-1-e.padInfo.left,h=i*u*l-1;this.userCode=`\n      const ivec3 pads = ivec3(${c}, ${d}, ${p});\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < ${i};\n           wD += ${r}) {\n          float dyD = float(dyDCorner + wD) / ${n}.0;\n\n          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < ${u};\n              wR += ${o}) {\n            float dyR = float(dyRCorner + wR) / ${t}.0;\n\n            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < ${l};\n                wC += ${s}) {\n              float dyC = float(dyCCorner + wC) / ${a}.0;\n\n              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = ${h} -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * ${u} * ${l} +\n                  wR * ${l} + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    `}}const rs={kernelName:a.MaxPool3DGrad,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{dy:o,input:s}=n,i=s,{filterSize:u,strides:l,pad:c,dimRoundingMode:d}=r,p=a.backend_util.computePool3DInfo(i.shape,u,l,[1,1,1],c,d),h=new na(p,"max",!0),f=t.runWebGLProgram(h,[i],i.dtype),x=new as(p),m=t.runWebGLProgram(x,[o,f],i.dtype);return t.disposeIntermediateTensorInfo(f),m}};const os={kernelName:a.MaxPoolGrad,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{dy:o,input:s,output:i}=n,u=s;B([s,i],"maxPoolGrad");const{filterSize:l,strides:c,pad:d,dimRoundingMode:p}=r,h=a.backend_util.computePool2DInfo(u.shape,l,c,1,d,p),f=new ea(h,"max",!0),x=t.runWebGLProgram(f,[u],u.dtype),m=new ts(h),g=t.runWebGLProgram(m,[o,x],u.dtype);return t.disposeIntermediateTensorInfo(x),g}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ss={kernelName:a.MaxPoolWithArgmax,backendName:"webgl",kernelFunc:({inputs:e,attrs:n,backend:t})=>{const{x:r}=e,{filterSize:o,strides:s,pad:i,includeBatchInIndex:u}=n,l=t;a.util.assert(4===r.shape.length,(()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`));const c=[1,1];a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(s,c),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${c}'`));const d=a.backend_util.computePool2DInfo(r.shape,o,s,c,i),[p,h]=
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,n,t,a){let r=new ea(t,"max",!1);const o=a.runWebGLProgram(r,[e],"float32");return r=new ea(t,"max",!0,!0,n),[o,a.runWebGLProgram(r,[e],"float32")]}(r,u,d,l);return[p,h]}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const is={kernelName:a.Mean,backendName:"webgl",kernelFunc:({inputs:e,attrs:n,backend:t})=>{const{x:r}=e,{keepDims:o,axis:s}=n,i=t,u=r.shape.length,l=a.util.parseAxisParam(s,r.shape);let c=l;const d=a.backend_util.getAxesPermutation(c,u),p=null!=d,h=i.shouldExecuteOnCPU([r]),f=[];let x=r;if(p){if(h){const e=i.texData.get(x.dataId).values,n=new Array(u);for(let e=0;e<n.length;e++)n[e]=r.shape[d[e]];const t=In(e,r.shape,r.dtype,d,n);x=i.makeTensorInfo(n,r.dtype);i.texData.get(x.dataId).values=t}else x=mt(r,d,i);f.push(x),c=a.backend_util.getInnerMostAxes(c.length,u)}a.backend_util.assertAxesAreInnerMostDims("sum",c,u);const[m,g]=a.backend_util.computeOutAndReduceShapes(x.shape,c);let b=m;o&&(b=a.backend_util.expandShapeToKeepDim(m,l));const v=
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,n,t,r){const o=a.util.sizeFromShape(n),s=lt({inputs:{x:e},attrs:{shape:[a.util.sizeFromShape(e.shape)/o,o]},backend:r}),i=ht(s,"float32","mean",r),u=lt({inputs:{x:i},attrs:{shape:t},backend:r});return r.disposeIntermediateTensorInfo(s),r.disposeIntermediateTensorInfo(i),u}(x,g,b,i);for(const e of f)i.disposeIntermediateTensorInfo(e);return v}};const us={kernelName:a.Min,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{axis:s,keepDims:i}=r,u=o.shape.length,l=a.util.parseAxisParam(s,o.shape);let c=l;const d=a.backend_util.getAxesPermutation(c,u);let p=o;null!=d&&(p=vt({inputs:{x:o},backend:t,attrs:{perm:d}}),c=a.backend_util.getInnerMostAxes(c.length,o.shape.length)),a.backend_util.assertAxesAreInnerMostDims("min",c,u);const[h,f]=a.backend_util.computeOutAndReduceShapes(p.shape,c),x=lt({inputs:{x:p},backend:t,attrs:{shape:[-1,a.util.sizeFromShape(f)]}}),m=ht(x,x.dtype,"min",t);let g;if(i){g=lt({inputs:{x:m},backend:t,attrs:{shape:a.backend_util.expandShapeToKeepDim(h,l)}})}else g=lt({inputs:{x:m},backend:t,attrs:{shape:h}});return t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(m),null!=d&&t.disposeIntermediateTensorInfo(p),g}},ls=et({opSnippet:"\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n",packedOpSnippet:"\n  vec4 result = vec4(min(a, b));\n  bvec4 isNaNA = isnan(a);\n  bvec4 isNaNB = isnan(b);\n  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);\n  \n  result.r = isNaN.r ? NAN : result.r;\n  result.g = isNaN.g ? NAN : result.g;\n  result.b = isNaN.b ? NAN : result.b;\n  result.a = isNaN.a ? NAN : result.a;\n\n  return result;\n",cpuKernelImpl:Ye}),cs={kernelName:a.Minimum,backendName:"webgl",kernelFunc:ls};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ds{constructor(e,n,t){this.variableNames=["x"],this.outputShape=n.map(((n,t)=>n[0]+e[t]+n[1]));const a=e.length,r=ae(a),o=n.map((e=>e[0])).join(","),s=n.map(((n,t)=>n[0]+e[t])).join(","),i=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,a),u="reflect"===t?0:1;this.userCode=1!==a?`\n      ${r} start = ${r}(${o});\n      ${r} end = ${r}(${s});\n\n      void main() {\n        ${r} outC = getOutputCoords();\n        for (int i = 0; i < ${a}; i++) {\n          if (outC[i] < start[i]) {\n            outC[i] = start[i] * 2 - outC[i] - ${u};\n          } else if(outC[i] >= end[i]) {\n            outC[i] = (end[i] - 1) * 2 - outC[i] + ${u};\n          }\n        }\n        ${r} coords = outC - start;\n        setOutput(getX(${i}));\n      }\n    `:`\n        int start = ${o};\n        int end = ${s};\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start) {\n            outC = start * 2 - outC - ${u};\n          } else if(outC >= end) {\n            outC = (end - 1) * 2 - outC + ${u};\n          }\n          setOutput(getX(outC - start));\n        }\n      `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ps{constructor(e,n,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.map(((n,t)=>n[0]+e[t]+n[1]));const a=e.length,r=ae(a),o=n.map((e=>e[0])).join(","),s=n.map(((n,t)=>n[0]+e[t])).join(","),i=Rn("rc",a),u=Rn("source",a),l=`${i[a-1]} < ${this.outputShape[a-1]}`,c=1===a?"source":`vec2(${u.slice(-2).join()})`,d="reflect"===t?0:1;let p="";if(1===a){const e=`\n        ${r} source = rc;\n        if (source < start) {\n          source = start * 2 - source - ${d};\n        } else if (source >= end) {\n          source = (end - 1) * 2 - source + ${d};\n        }\n        source -= start;\n      `;p=`\n        ${r} rc = outputLoc;\n        ${e}\n        result[0] = getChannel(getX(${u.join()}), ${c});\n        ${i[a-1]} += 1;\n        if(${l}) {\n          ${e}\n          result[1] = getChannel(getX(${u.join()}), ${c});\n        }\n      `}else{const e=`\n        ${r} source = rc;\n        ${r} lt = ${r}(lessThan(source, start));\n        ${r} gte = ${r}(greaterThanEqual(source, end));\n        ${r} orig = 1 - (lt + gte);\n        source = orig * source +\n                lt * (start * 2 - source - ${d}) +\n                gte * ((end - 1) * 2 - source + ${d});\n        source -= start;\n      `;p=`\n        ${r} rc = outputLoc;\n        ${e}\n        result[0] = getChannel(getX(${u.join()}), ${c});\n        ${i[a-1]} += 1;\n        if(${l}) {\n          ${e}\n          result[1] = getChannel(getX(${u.join()}), ${c});\n        }\n        rc = outputLoc;\n        ${i[a-2]} += 1;\n        if(${i[a-2]} < ${this.outputShape[a-2]}) {\n          ${e}\n          result[2] = getChannel(getX(${u.join()}), ${c});\n          ${i[a-1]} += 1;\n          if(${l}) {\n            ${e}\n            result[3] = getChannel(getX(${u.join()}), ${c});\n          }\n        }\n      `}this.userCode=`\n      const ${r} start = ${r}(${o});\n      const ${r} end = ${r}(${s});\n\n      void main() {\n        ${r} outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ${p}\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const hs={kernelName:a.MirrorPad,backendName:"webgl",kernelFunc:({inputs:e,backend:n,attrs:t})=>{const{x:r}=e,{paddings:o,mode:s}=t,i=(0,a.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ps(r.shape,o,s):new ds(r.shape,o,s);return n.runWebGLProgram(i,[r],r.dtype)}},fs=et({opSnippet:"if (b == 0.0) return NAN;\n  return mod(a, b);",packedOpSnippet:"\n  vec4 result = mod(a, b);\n  bvec4 isNaN = equal(b, vec4(0.0));\n  \n  result.r = isNaN.r ? NAN : result.r;\n  result.g = isNaN.g ? NAN : result.g;\n  result.b = isNaN.b ? NAN : result.b;\n  result.a = isNaN.a ? NAN : result.a;\n\n  return result;\n"}),xs={kernelName:a.Mod,backendName:"webgl",kernelFunc:fs};
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
class ms{constructor(e,n,t){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,t],this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < ${n-1}; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(${n-1}));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const gs=et({opSnippet:"\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;",packedOpSnippet:"\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n",checkOutOfBounds:!0}),bs={kernelName:a.RealDiv,backendName:"webgl",kernelFunc:gs},vs="return a - b;",Cs=et({opSnippet:vs,packedOpSnippet:vs,supportsComplex:!0,cpuKernelImpl:vn}),$s={kernelName:a.Sub,backendName:"webgl",kernelFunc:Cs};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Is(e){const{inputs:n,backend:t,attrs:r}=e,{logits:o}=n,{dim:s}=r,i=a.util.parseAxisParam([s],o.shape),u=Yo({inputs:{x:o},backend:t,attrs:{reductionIndices:i,keepDims:!1}}),l=a.backend_util.expandShapeToKeepDim(u.shape,i),c=lt({inputs:{x:u},backend:t,attrs:{shape:l}}),d=Cs({inputs:{a:o,b:c},backend:t}),p=Wr({inputs:{x:d},backend:t}),h=gt({inputs:{x:p},backend:t,attrs:{axis:i,keepDims:!1}}),f=lt({inputs:{x:h},backend:t,attrs:{shape:l}}),x=gs({inputs:{a:p,b:f},backend:t});return t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(f),x}const ys={kernelName:a.Softmax,backendName:"webgl",kernelFunc:Is};const ks={kernelName:a.Multinomial,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:a}=e,{logits:r}=n,{numSamples:o,seed:s,normalized:i}=a,u=i?r:Is({inputs:{logits:r},backend:t,attrs:{dim:r.shape.length-1}}),l=u.shape[0],c=u.shape[1],d=new ms(l,c,o),p=[[s]],h=t.runWebGLProgram(d,[u],"int32",p);return i||t.disposeIntermediateTensorInfo(u),h}};const Rs={kernelName:a.Neg,backendName:"webgl",kernelFunc:function(e){const{inputs:n,backend:t}=e,{x:r}=n;if(t.shouldExecuteOnCPU([r])){const e=t.texData.get(r.dataId),[n,a]=Ze(e.values,r.shape,r.dtype);return t.makeTensorInfo(a,r.dtype,n)}let o;return o=(0,a.env)().getBool("WEBGL_PACK_UNARY_OPERATIONS")?new Dn(r.shape,"\n  vec4 result = -x;\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"):new _n(r.shape,"if (isnan(x)) return x;\n  return -x;\n"),t.runWebGLProgram(o,[r],r.dtype)}},Ss=a.kernel_impls.nonMaxSuppressionV3Impl;const ws={kernelName:a.NonMaxSuppressionV3,backendName:"webgl",kernelFunc:function(e){a.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:n,backend:t,attrs:r}=e,{boxes:o,scores:s}=n,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l}=r,c=t.readSync(o.dataId),d=t.readSync(s.dataId),{selectedIndices:p}=Ss(c,d,i,u,l);return t.makeTensorInfo([p.length],"int32",new Int32Array(p))}},Ts=a.kernel_impls.nonMaxSuppressionV4Impl;const Ns={kernelName:a.NonMaxSuppressionV4,backendName:"webgl",kernelFunc:function(e){a.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:n,backend:t,attrs:r}=e,{boxes:o,scores:s}=n,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l,padToMaxOutputSize:c}=r,d=t.readSync(o.dataId),p=t.readSync(s.dataId),{selectedIndices:h,validOutputs:f}=Ts(d,p,i,u,l,c);return[t.makeTensorInfo([h.length],"int32",new Int32Array(h)),t.makeTensorInfo([],"int32",new Int32Array([f]))]}},Es=a.kernel_impls.nonMaxSuppressionV5Impl;const As={kernelName:a.NonMaxSuppressionV5,backendName:"webgl",kernelFunc:function(e){a.backend_util.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:n,backend:t,attrs:r}=e,{boxes:o,scores:s}=n,{maxOutputSize:i,iouThreshold:u,scoreThreshold:l,softNmsSigma:c}=r,d=t.readSync(o.dataId),p=t.readSync(s.dataId),h=i,f=u,x=l,m=c,{selectedIndices:g,selectedScores:b}=Es(d,p,h,f,x,m);return[t.makeTensorInfo([g.length],"int32",new Int32Array(g)),t.makeTensorInfo([b.length],"float32",new Float32Array(b))]}};
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
class _s{constructor(e,n,t,a){this.variableNames=["indices"],this.outputShape=[e,n],this.userCode=`\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(${a}), float(${t}),\n                      float(index == coords.y)));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Os={kernelName:a.OneHot,backendName:"webgl",kernelFunc:e=>{const{inputs:n,backend:t,attrs:r}=e,{indices:o}=n,{dtype:s,depth:i,onValue:u,offValue:l}=r,c=a.util.sizeFromShape(o.shape),d=new _s(c,i,u,l),p=lt({inputs:{x:o},backend:t,attrs:{shape:[c]}}),h=t.runWebGLProgram(d,[p],s);t.disposeIntermediateTensorInfo(p);const f=lt({inputs:{x:h},backend:t,attrs:{shape:[...o.shape,i]}});return t.disposeIntermediateTensorInfo(h),f}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Fs(e){const{inputs:n,backend:t}=e,{x:a}=n;if("complex64"===a.dtype){const e=Ia({inputs:{input:a},backend:t}),n=Fs({inputs:{x:e},backend:t}),r=Pa({inputs:{input:a},backend:t}),o=Fs({inputs:{x:r},backend:t}),s=Xn({inputs:{real:n,imag:o},backend:t});return t.disposeIntermediateTensorInfo(e),t.disposeIntermediateTensorInfo(n),t.disposeIntermediateTensorInfo(r),t.disposeIntermediateTensorInfo(o),s}return Qr({attrs:{shape:a.shape,dtype:a.dtype,value:"string"===a.dtype?"":0},backend:t})}const Ds={kernelName:a.ZerosLike,backendName:"webgl",kernelFunc:Fs};const Ls={kernelName:a.OnesLike,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function e(n){const{inputs:t,backend:a}=n,{x:r}=t;if("string"===r.dtype)throw new Error("onesLike is not supported under string dtype");if("complex64"===r.dtype){const n=Ia({inputs:{input:r},backend:a}),t=e({inputs:{x:n},backend:a}),o=Pa({inputs:{input:r},backend:a}),s=Fs({inputs:{x:o},backend:a}),i=Xn({inputs:{real:t,imag:s},backend:a});return a.disposeIntermediateTensorInfo(n),a.disposeIntermediateTensorInfo(t),a.disposeIntermediateTensorInfo(o),a.disposeIntermediateTensorInfo(s),i}return Qr({attrs:{shape:r.shape,dtype:r.dtype,value:1},backend:a})}};const Ps={kernelName:a.Pack,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{axis:o}=r;if(1===n.length)return Gr({inputs:{input:n[0]},backend:t,attrs:{dim:o}});const s=n[0].shape,i=n[0].dtype;n.forEach((e=>{a.util.assertShapesMatch(s,e.shape,"All tensors passed to stack must have matching shapes"),a.util.assert(i===e.dtype,(()=>"All tensors passed to stack must have matching dtypes"))}));const u=[],l=Wa({inputs:n.map((e=>{const n=Gr({inputs:{input:e},backend:t,attrs:{dim:o}});return u.push(n),n})),backend:t,attrs:{axis:o}});return u.forEach((e=>t.disposeIntermediateTensorInfo(e))),l}};
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
class Bs{constructor(e,n,t){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=n.map(((n,t)=>n[0]+e[t]+n[1]));const a=e.length,r=ae(a),o=n.map((e=>e[0])).join(","),s=n.map(((n,t)=>n[0]+e[t])).join(","),i=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,a);this.userCode=1!==a?`\n      ${r} start = ${r}(${o});\n      ${r} end = ${r}(${s});\n\n      void main() {\n        ${r} outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(value);\n        } else {\n          ${r} coords = outC - start;\n          setOutput(getX(${i}));\n        }\n      }\n    `:`\n        int start = ${o};\n        int end = ${s};\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(value);\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      `}}
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
class Vs{constructor(e,n,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=n.map(((n,t)=>n[0]+e[t]+n[1]));const a=e.length,r=ae(a),o=n.map((e=>e[0])).join(","),s=n.map(((n,t)=>n[0]+e[t])).join(","),i=Rn("rc",a),u=Rn("source",a),l=`${i[a-1]} < ${this.outputShape[a-1]}`,c=1===a?"source":`vec2(${u.slice(-2).join()})`,d=[`${r} rc = outputLoc;`,`${i[a-1]} += 1;\n       if(${l}) {\n      `,1===a?"":`}\n       rc = outputLoc;\n       ${i[a-2]} += 1;\n       if(${i[a-2]} < ${this.outputShape[a-2]}) {`,1===a?"":`  ${i[a-1]} += 1;\n         if(${l}) {`],p=1===a?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let h="";for(let e=0,n=1===a?2:4;e<n;e++)h+=`\n        ${d[e]}\n        if (${p}) {\n          result[${e}] = float(value);\n        } else {\n          ${r} source = rc - start;\n          result[${e}] = getChannel(getX(${u.join()}), ${c});\n        }\n      `;h+=1===a?"} ":"}}",this.userCode=`\n      const ${r} start = ${r}(${o});\n      const ${r} end = ${r}(${s});\n\n      void main() {\n        ${r} outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ${h}\n        setOutput(result);\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ws=e=>{const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{paddings:s,constantValue:i}=r;if(0===a.util.sizeFromShape(o.shape)){return Qr({backend:t,attrs:{shape:s.map(((e,n)=>e[0]+o.shape[n]+e[1])),value:i,dtype:o.dtype}})}const u=(0,a.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Vs(o.shape,s,i):new Bs(o.shape,s,i),l=[[i]];return t.runWebGLProgram(u,[o],o.dtype,l)},Us={kernelName:a.PadV2,backendName:"webgl",kernelFunc:Ws},Gs=et({opSnippet:"\n  if(a < 0.0 && floor(b) < b){\n    return NAN;\n  }\n  if (b == 0.0) {\n    return 1.0;\n  }\n  return (round(mod(b, 2.0)) != 1) ?\n      pow(abs(a), b) : sign(a) * pow(abs(a), b);\n",packedOpSnippet:"\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  bvec4 isNaN1 = lessThan(a, vec4(0.0));\n  bvec4 isNaN2 = lessThan(floor(b), b);\n  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);\n  \n  result.r = isNaN.r ? NAN : result.r;\n  result.g = isNaN.g ? NAN : result.g;\n  result.b = isNaN.b ? NAN : result.b;\n  result.a = isNaN.a ? NAN : result.a;\n\n  return result;\n"}),Ms={kernelName:a.Pow,backendName:"webgl",kernelFunc:Gs};const zs={kernelName:a.Prod,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{axis:s,keepDims:i}=r,u=o.shape.length,l=[],c=a.util.parseAxisParam(s,o.shape);let d=c;const p=a.backend_util.getAxesPermutation(d,u);let h,f=o;if(null!=p&&(f=vt({inputs:{x:o},backend:t,attrs:{perm:p}}),d=a.backend_util.getInnerMostAxes(d.length,u),l.push(f)),a.backend_util.assertAxesAreInnerMostDims("prod",d,u),t.shouldExecuteOnCPU([f])){const e=t.texData.get(f.dataId).values,{outVals:n,outShape:a,outDtype:r}=en(f.shape,f.dtype,e,d);h=t.makeTensorInfo(a,r,n)}else{const[e,n]=a.backend_util.computeOutAndReduceShapes(f.shape,d),r=a.util.sizeFromShape(n),s=lt({inputs:{x:f},backend:t,attrs:{shape:[-1,r]}}),i=ht(s,(0,a.sumOutType)(o.dtype),"prod",t);h=lt({inputs:{x:i},backend:t,attrs:{shape:e}}),l.push(s),l.push(i)}if(i){l.push(h);const e=a.backend_util.expandShapeToKeepDim(h.shape,c);h=lt({inputs:{x:h},backend:t,attrs:{shape:e}})}return l.forEach((e=>t.disposeIntermediateTensorInfo(e))),h}};const Xs={kernelName:a.RaggedGather,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{paramsNestedSplits:r,paramsDenseValues:o,indices:s}=n,{outputRaggedRank:i}=a,u=r.map((e=>t.readSync(e.dataId))),l=r.map((e=>e.shape)),c=t.readSync(o.dataId),d=t.readSync(s.dataId),[p,h,f]=nn(u,l,c,o.shape,o.dtype,d,s.shape,i),x=p.map((e=>t.makeTensorInfo([e.length],"int32",e))),m=t.makeTensorInfo(f,o.dtype,h);return x.concat([m])}};const Hs={kernelName:a.RaggedRange,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{starts:a,limits:r,deltas:o}=n,s=t.readSync(a.dataId),i=t.readSync(r.dataId),u=t.readSync(o.dataId),[l,c]=tn(s,a.shape,a.dtype,i,r.shape,u,o.shape);return[t.makeTensorInfo([l.length],"int32",l),t.makeTensorInfo([c.length],a.dtype,c)]}};const Ks={kernelName:a.RaggedTensorToTensor,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{shape:r,values:o,defaultValue:s,rowPartitionTensors:i}=n,{rowPartitionTypes:u}=a,l=t.readSync(r.dataId),c=t.readSync(o.dataId),d=t.readSync(s.dataId),p=i.map((e=>t.readSync(e.dataId))),h=i.map((e=>e.shape)),[f,x]=an(l,r.shape,c,o.shape,o.dtype,d,s.shape,p,h,u);return t.makeTensorInfo(f,o.dtype,x)}},js=e=>{const{backend:n,attrs:t}=e,{start:a,stop:r,step:o,dtype:s}=t,i=rn(a,r,o,s);return n.makeTensorInfo([i.length],s,i)},qs={kernelName:a.Range,backendName:"webgl",kernelFunc:js},Ys=Jn({opSnippet:"return 1.0 / x;"}),Qs={kernelName:a.Reciprocal,backendName:"webgl",kernelFunc:Ys},Zs=Jn({opSnippet:"if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : x;\n",packedOpSnippet:"\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"}),Js={kernelName:a.Relu,backendName:"webgl",kernelFunc:Zs},ei=Jn({opSnippet:"if (isnan(x)) return x;\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n",packedOpSnippet:"\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n"}),ni={kernelName:a.Relu6,backendName:"webgl",kernelFunc:ei};
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
class ti{constructor(e,n,t,a,r){this.variableNames=["A"],this.outputShape=[];const[o,s,i,u]=e;this.outputShape=[o,n,t,u];const l=[a&&n>1?s-1:s,a&&t>1?i-1:i],c=[a&&n>1?n-1:n,a&&t>1?t-1:t];let d;d=r?"(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":"vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]});\n      const vec2 inputShapeRC = vec2(${s}.0, ${i}.0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = ${d};\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    `}}
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
class ai{constructor(e,n,t,a,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[o,s,i,u]=e;this.outputShape=[o,n,t,u];const l=[a&&n>1?s-1:s,a&&t>1?i-1:i],c=[a&&n>1?n-1:n,a&&t>1?t-1:t];let d;d=r?"(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":"vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]},\n          ${l[1]/c[1]});\n      const vec3 inputShapeRC = vec3(${s}.0, ${i}.0,\n                                     ${i}.0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = ${d};\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ${u-1};\n        bool hasNextRow = coords.z < ${t-1};\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    `}}const ri={kernelName:a.ResizeBilinear,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{images:o}=n,{alignCorners:s,halfPixelCenters:i,size:u}=r,[l,c]=u,d=(0,a.env)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new ai(o.shape,l,c,s,i):new ti(o.shape,l,c,s,i);return t.runWebGLProgram(d,[o],"float32")}};
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
class oi{constructor(e,n,t){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n;const[,a,r]=n,[,o,s]=e,i=[t&&o>1?a-1:a,t&&s>1?r-1:r],u=[t&&o>1?o-1:o,t&&s>1?s-1:s],l=i[0]/u[0],c=i[1]/u[1],d=1/l,p=1/c,h=2*Math.ceil(d)+2,f=2*Math.ceil(p)+2;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(${l});\n        const float widthScale = float(${c});\n\n        const float invHeightScale = float(${d});\n        const float invWidthScale = float(${p});\n\n        const int winHeight = int(${h});\n        const int winWidth = int(${f});\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ${o}) {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ${s}) {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), ${a-1}.0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), ${r-1}.0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    `}}const si={kernelName:a.ResizeBilinearGrad,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:a}=e,{images:r,dy:o}=n,{alignCorners:s}=a,i=new oi(o.shape,r.shape,s);return t.runWebGLProgram(i,[o],o.dtype)}};
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
class ii{constructor(e,n,t,a,r){this.variableNames=["A"],this.outputShape=[];const[o,s,i,u]=e;this.outputShape=[o,n,t,u];const l=[a&&n>1?s-1:s,a&&t>1?i-1:i],c=[a&&n>1?n-1:n,a&&t>1?t-1:t],d=a?"0.5":"0.0";let p;p=r?"max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":"vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]});\n      const vec2 inputShapeRC = vec2(${s}.0, ${i}.0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = ${p};\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    `}}
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
class ui{constructor(e,n,t,a,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[o,s,i,u]=e;this.outputShape=[o,n,t,u];const l=[a&&n>1?s-1:s,a&&t>1?i-1:i],c=[a&&n>1?n-1:n,a&&t>1?t-1:t],d=a?"0.5":"0.0";let p;p=r?"max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":"vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ${l[0]/c[0]},\n          ${l[1]/c[1]},\n          ${l[1]/c[1]});\n      const vec3 inputShapeRC = vec3(${s}.0, ${i}.0,\n                                     ${i}.0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = ${p};\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec3 sourceNearestRC = ivec3(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ${u-1};\n        bool hasNextRow = coords.z < ${t-1};\n\n        vec4 newValue = vec4(\n          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),\n          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);\n\n        setOutput(newValue);\n      }\n    `}}const li={kernelName:a.ResizeNearestNeighbor,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{images:o}=n,{alignCorners:s,halfPixelCenters:i,size:u}=r,[l,c]=u,d=(0,a.env)().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new ui(o.shape,l,c,s,i):new ii(o.shape,l,c,s,i);return t.runWebGLProgram(d,[o],o.dtype)}};
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
class ci{constructor(e,n,t){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n;const[,a,r]=n,[,o,s]=e,i=[t&&o>1?a-1:a,t&&s>1?r-1:r],u=[t&&o>1?o-1:o,t&&s>1?s-1:s],l=i[0]/u[0],c=i[1]/u[1],d=1/l,p=1/c,h=2*Math.ceil(d)+2,f=2*Math.ceil(p)+2;this.userCode=`\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(${l});\n        const float widthScale = float(${c});\n\n        const float invHeightScale = float(${d});\n        const float invWidthScale = float(${p});\n\n        const int winHeight = int(${h});\n        const int winWidth = int(${f});\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ${o}) {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ${s}) {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(${i[0]}) *\n                (float(dyR) / float(${u[0]}));\n\n            float sourceFracCol =\n                float(${i[1]}) *\n                  (float(dyC) / float(${u[1]}));\n\n            int sourceNearestRow = int(min(\n                float(int(${a}) - 1),\n                ${t} ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(${r}) - 1),\n                ${t} ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    `}}const di={kernelName:a.ResizeNearestNeighborGrad,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:a}=e,{images:r,dy:o}=n,{alignCorners:s}=a,i=new ci(o.shape,r.shape,s);return t.runWebGLProgram(i,[o],o.dtype)}};
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
class pi{constructor(e,n){this.variableNames=["x"];const t=e.length;if(t>4)throw new Error(`WebGL backend: Reverse of rank-${t} tensor is not yet supported`);if(this.outputShape=e,1===t)return void(this.userCode=`\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(${e[0]} - coord - 1));\n        }\n      `);const a=e.map(((t,a)=>(t=>-1!==n.indexOf(t)&&1!==e[t]?`${e[t]} - coords[${t}] - 1`:`coords[${t}]`)(a))).join(","),r=ae(t);this.userCode=`\n      void main() {\n        ${r} coords = getOutputCoords();\n        setOutput(getX(${a}));\n      }\n    `}}
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
class hi{constructor(e,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const t=e.length;if(t>4)throw new Error(`WebGL backend: Reverse of rank-${t} tensor is not yet supported`);this.outputShape=e;const a=Rn("rc",t),r=`${a[t-1]} + 1 < ${this.outputShape[t-1]}`,o=`${a[t-2]} + 1 < ${this.outputShape[t-2]}`,s=ae(t);function i(t){const a=e.map(((a,r)=>function(t,a){return-1!==n.indexOf(t)&&1!==e[t]?`${e[t]} - ${a[t]} - 1`:`${a[t]}`}(r,t)));return`getChannel(getX(${a.join(",")}), vec2(${a.slice(-2).join(",")}))`}this.userCode=1===t?`\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX(${e[0]} - rc - 1),\n            ${e[0]} - rc - 1);\n          if(${r}){\n              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),\n                ${e[0]} - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      `:`\n        void main() {\n          ${s} rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = ${function(e){return i(e)}(a.slice())};\n          if(${r}){\n            result.g = ${function(e){return e[t-1]="("+e[t-1]+" + 1)",i(e)}(a.slice())};\n          }\n          if(${o}) {\n            result.b = ${function(e){return e[t-2]="("+e[t-2]+" + 1)",i(e)}(a.slice())};\n            if(${r}) {\n              result.a = ${function(e){return e[t-1]="("+e[t-1]+" + 1)",e[t-2]="("+e[t-2]+" + 1)",i(e)}(a.slice())};\n            }\n          }\n          setOutput(result);\n        }\n    `}}const fi={kernelName:a.Reverse,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{dims:s}=r,i=o.shape.length,u=a.util.parseAxisParam(s,o.shape);if(0===i)return Mn({inputs:{x:o},backend:t});const l=(0,a.env)().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new hi(o.shape,u):new pi(o.shape,u);return t.runWebGLProgram(l,[o],o.dtype)}};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class xi{constructor(e,n){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const t=e[1],a=e[2];this.outputShape=e;let r="";r="number"==typeof n?`float outputValue = ${n.toFixed(2)};`:`\n        vec3 fill = vec3(${n.join(",")});\n        float outputValue = fill[coords[3]];`,this.userCode=`\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int x = coords[2];\n          int y = coords[1];\n          float coordXFloat = (float(x) - params[0]) * params[3] -\n            (float(y) - params[1]) * params[2];\n          float coordYFloat = (float(x) - params[0]) * params[2] +\n            (float(y) - params[1]) * params[3];\n          int coordX = int(round(coordXFloat + params[0]));\n          int coordY = int(round(coordYFloat + params[1]));\n          ${r}\n          if(coordX >= 0 && coordX < ${a} && coordY >= 0 && coordY < ${t}) {\n            outputValue = getImage(coords[0], coordY, coordX, coords[3]);\n          }\n          setOutput(outputValue);\n        }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const mi={kernelName:a.RotateWithOffset,backendName:"webgl",kernelFunc:({inputs:e,attrs:n,backend:t})=>{const{image:r}=e,{radians:o,fillValue:s,center:i}=n,u=t,l=new xi(r.shape,s),[c,d]=a.backend_util.getImageCenter(i,r.shape[1],r.shape[2]),p=[[c,d,Math.sin(o),Math.cos(o)]];return u.runWebGLProgram(l,[r],r.dtype,p)}},gi=Jn({opSnippet:"\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n"}),bi={kernelName:a.Round,backendName:"webgl",kernelFunc:gi},vi=Jn({opSnippet:"return inversesqrt(x);",cpuKernelImpl:on}),Ci={kernelName:a.Rsqrt,backendName:"webgl",kernelFunc:vi};
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
class $i{constructor(e,n,t,a,r,o,s=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=o;const i=ae(r.length),u=ae(o.length);let l="";1===t?l="i":2===t&&(l="i, j");const c=`getIndices(${l})`;let d="";1===a?d="i":2===a&&(d="i, coords[1]");const p=`getUpdates(${d})`,h=n>1?"strides[j]":"strides";this.userCode=`\n        ${i} strides = ${i}(${r});\n\n        void main() {\n          ${u} coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < ${e}; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < ${n}; j++) {\n              int index = round(${c});\n              flattenedIndex += index * ${h};\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += ${p};\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      `}}const Ii={kernelName:a.ScatterNd,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{indices:o,updates:s}=n,{shape:i}=r,{sliceRank:u,numUpdates:l,sliceSize:c,strides:d,outputSize:p}=a.backend_util.calculateShapes(s,o,i),h=[p/c,c];if(0===p)return t.makeTensorInfo(i,o.dtype);const f=lt({inputs:{x:o},backend:t,attrs:{shape:[l,u]}}),x=lt({inputs:{x:s},backend:t,attrs:{shape:[l,c]}}),m=t.makeTensorInfo([],"float32",new Float32Array([0])),g=new $i(l,u,f.shape.length,x.shape.length,d,h),b=t.runWebGLProgram(g,[x,f,m],x.dtype),v=lt({inputs:{x:b},backend:t,attrs:{shape:i}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(b),t.disposeIntermediateTensorInfo(m),v}};
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
class yi{constructor(e,n,t,r){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,t];const o=`for (int i = 0; i < ${Math.ceil(Math.log2(n+1))}; ++i) { if (left >= right) break;`,s=2===(0,a.env)().getNumber("WEBGL_VERSION")?"while (left < right) {":o,i="left"===r?"<":"<=";this.userCode=`\n       int findBound(int batch, float value) {\n         int left = 0;\n         int right = numInputs;\n         int mid;\n         ${s}\n           mid = (left + right) / 2;\n           if (getSortedSequence(batch, mid) ${i} value) {\n             left = mid + 1;\n           } else {\n             right = mid;\n           }\n         }\n         return right;\n       }\n\n       void main() {\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int valueIndex = coords[1];\n\n         float value = getValues(batch, valueIndex);\n\n         setOutput(float(findBound(batch, value)));\n       }\n     `}}const ki={kernelName:a.SearchSorted,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{sortedSequence:r,values:o}=n,{side:s}=a,i=new yi(r.shape[0],r.shape[1],o.shape[1],s),u=[[r.shape[1]]];return t.runWebGLProgram(i,[r,o],"int32",u)}};
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
class Ri{constructor(e,n,t){let a,r;if(this.variableNames=["c","a","b"],this.outputShape=n,t>4)throw Error(`Where for rank ${t} is not yet supported`);if(1===t)r="resRC",a="resRC";else{const t=["resRC.x","resRC.y","resRC.z","resRC.w"],o=[],s=[];for(let a=0;a<n.length;a++)s.push(`${t[a]}`),a<e&&o.push(`${t[a]}`);a=o.join(),r=s.join()}const o=ae(t);this.userCode=`\n      void main() {\n        ${o} resRC = getOutputCoords();\n        float cVal = getC(${a});\n        if (cVal >= 1.0) {\n          setOutput(getA(${r}));\n        } else {\n          setOutput(getB(${r}));\n        }\n      }\n    `}}const Si={kernelName:a.Select,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t}=e,{condition:r,t:o,e:s}=n,i=new Ri(r.shape.length,o.shape,o.shape.length);return t.runWebGLProgram(i,[r,o,s],(0,a.upcastType)(o.dtype,s.dtype))}},wi=Jn({opSnippet:`\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = ${a.backend_util.SELU_SCALEALPHA};\n  float scale = ${a.backend_util.SELU_SCALE};\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n`}),Ti={kernelName:a.Selu,backendName:"webgl",kernelFunc:wi},Ni=Jn({opSnippet:"if (isnan(x)) return x;\n  return 1.0 / (1.0 + exp(-1.0 * x));\n",packedOpSnippet:"\n  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",cpuKernelImpl:un}),Ei={kernelName:a.Sigmoid,backendName:"webgl",kernelFunc:Ni},Ai=Jn({opSnippet:"\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n"}),_i={kernelName:a.Sign,backendName:"webgl",kernelFunc:Ai},Oi=Jn({opSnippet:"if (isnan(x)) return x;\n  return sin(x);\n"}),Fi={kernelName:a.Sin,backendName:"webgl",kernelFunc:Oi},Di=Jn({opSnippet:"\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n"}),Li={kernelName:a.Sinh,backendName:"webgl",kernelFunc:Di},Pi=Jn({opSnippet:"\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n"}),Bi={kernelName:a.Softplus,backendName:"webgl",kernelFunc:Pi},Vi={kernelName:a.SpaceToBatchND,backendName:"webgl",kernelFunc:e=>{const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{blockShape:s,paddings:i}=r;a.util.assert(o.shape.length<=4,(()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"));const u=s.reduce(((e,n)=>e*n)),l=[[0,0]];l.push(...i);for(let e=1+s.length;e<o.shape.length;++e)l.push([0,0]);const c=[],d=Ws({inputs:{x:o},backend:t,attrs:{paddings:l,constantValue:0}}),p=a.backend_util.getReshaped(d.shape,s,u,!1),h=a.backend_util.getPermuted(p.length,s.length,!1),f=a.backend_util.getReshapedPermuted(d.shape,s,u,!1),x=lt({inputs:{x:d},backend:t,attrs:{shape:p}}),m=vt({inputs:{x:x},backend:t,attrs:{perm:h}}),g=lt({inputs:{x:m},backend:t,attrs:{shape:f}});return c.push(d),c.push(x),c.push(m),c.forEach((e=>t.disposeIntermediateTensorInfo(e))),g}};const Wi={kernelName:a.SparseFillEmptyRows,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{indices:a,values:r,denseShape:o,defaultValue:s}=n;if(1!==o.shape.length)throw new Error(`Dense shape must be a vector, saw:\n         ${o.shape}`);if(2!==a.shape.length)throw new Error(`Indices must be a matrix, saw:\n         ${a.shape}`);if(1!==r.shape.length)throw new Error(`Values must be a vector, saw:\n         ${r.shape}`);if(0!==s.shape.length)throw new Error(`Default value must be a scalar, saw:\n        ${s.shape}`);const i=t.readSync(a.dataId),u=t.readSync(r.dataId),l=t.readSync(o.dataId),c=t.readSync(s.dataId)[0],[d,p,h,f,x]=dn(i,a.shape,a.dtype,u,r.dtype,l,c);return[t.makeTensorInfo(p,a.dtype,d),t.makeTensorInfo([p[0]],r.dtype,h),t.makeTensorInfo([f.length],"bool",new Uint8Array(f.map((e=>Number(e))))),t.makeTensorInfo([x.length],a.dtype,new Int32Array(x))]}};const Ui={kernelName:a.SparseReshape,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{inputIndices:a,inputShape:r,newShape:o}=n;if(2!==a.shape.length)throw new Error(`Input indices should be a matrix but received shape ${a.shape}`);if(1!==r.shape.length)throw new Error(`Input shape should be a vector but received shape ${r.shape}`);if(1!==o.shape.length)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const s=Array.from(t.readSync(r.dataId)),i=t.readSync(a.dataId),u=Array.from(t.readSync(o.dataId)),[l,c,d]=pn(i,a.shape,a.dtype,s,u);return[t.makeTensorInfo(c,a.dtype,l),t.makeTensorInfo([d.length],o.dtype,new Int32Array(d))]}};const Gi={kernelName:a.SparseSegmentMean,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{data:a,indices:r,segmentIds:o}=n;if(a.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==r.shape.length)throw new Error(`Indices should be a vector but received shape\n              ${r.shape}`);if(1!==o.shape.length)throw new Error(`Segment ids should be a vector but received shape\n              ${o.shape}`);const s=t.readSync(a.dataId),i=t.readSync(r.dataId),u=t.readSync(o.dataId),[l,c]=hn(s,a.shape,a.dtype,i,u,!0);return t.makeTensorInfo(c,a.dtype,l)}};const Mi={kernelName:a.SparseSegmentSum,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t}=e,{data:a,indices:r,segmentIds:o}=n;if(a.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==r.shape.length)throw new Error(`Indices should be a vector but received shape\n             ${r.shape}`);if(1!==o.shape.length)throw new Error(`Segment ids should be a vector but received shape\n             ${o.shape}`);const s=t.readSync(a.dataId),i=t.readSync(r.dataId),u=t.readSync(o.dataId),[l,c]=hn(s,a.shape,a.dtype,i,u);return t.makeTensorInfo(c,a.dtype,l)}};const zi={kernelName:a.SparseToDense,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{sparseIndices:o,sparseValues:s,defaultValue:i}=n,{outputShape:u}=r,{sliceRank:l,numUpdates:c,sliceSize:d,strides:p,outputSize:h}=a.backend_util.calculateShapes(s,o,u);if("string"===s.dtype){const e=t.bufferSync(o),n=t.bufferSync(s),r=a.util.decodeString(t.readSync(i.dataId)[0]),f=sn(e,n,u,h,d,c,l,p,r,false);return t.makeTensorInfo(u,f.dtype,f.values)}const f=new $i(c,l,o.shape.length,s.shape.length,p,[h,1],false),x=t.runWebGLProgram(f,[s,o,i],s.dtype),m=lt({inputs:{x:x},backend:t,attrs:{shape:u}});return t.disposeIntermediateTensorInfo(x),m}};const Xi={kernelName:a.SplitV,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{numOrSizeSplits:s,axis:i}=r,u=a.util.parseAxisParam(i,o.shape)[0],l=a.backend_util.prepareSplitSize(o,s,u),c=o.shape.length,d=new Array(c).fill(0),p=o.shape.slice();return l.map((e=>{const n=[...p];n[u]=e;const a=xa({inputs:{x:o},backend:t,attrs:{begin:d,size:n}});return d[u]+=e,a}))}},Hi="return sqrt(x);",Ki=Jn({opSnippet:Hi,packedOpSnippet:Hi,cpuKernelImpl:fn}),ji={kernelName:a.Sqrt,backendName:"webgl",kernelFunc:Ki},qi=Jn({opSnippet:"return x * x;"}),Yi={kernelName:a.Square,backendName:"webgl",kernelFunc:qi},Qi="return (a - b) * (a - b);",Zi=et({opSnippet:Qi,packedOpSnippet:Qi}),Ji={kernelName:a.SquaredDifference,backendName:"webgl",kernelFunc:Zi};const eu={kernelName:a.Step,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function({inputs:e,attrs:n,backend:t}){const{x:a}=e,r=`if (isnan(x)) return x;\n    return x > 0.0 ? 1.0 : float(${n.alpha});\n  `,o=new _n(a.shape,r);return t.runWebGLProgram(o,[a],a.dtype)}};
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
class nu{constructor(e,n,t){this.variableNames=["x"],this.outputShape=t;const a=t.length,r=ae(t.length),o=ae(t.length);let s="";if(1===a)s="coords * strides + begin";else{let e=0;s=t.map(((n,a)=>(e++,1===t.length?`coords * strides[${a}] + begin[${a}]`:`coords[${e-1}] * strides[${a}] + begin[${a}]`))).join(",")}this.userCode=`\n      ${r} begin = ${r}(${e});\n      ${r} strides = ${r}(${n});\n\n      void main() {\n        ${o} coords = getOutputCoords();\n        setOutput(getX(${s}));\n      }\n    `}}const tu={kernelName:a.StridedSlice,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{begin:s,end:i,strides:u,beginMask:l,endMask:c,ellipsisMask:d,newAxisMask:p,shrinkAxisMask:h}=r,{finalShapeSparse:f,finalShape:x,isIdentity:m,sliceDim0:g,isSimpleSlice:b,begin:v,end:C,strides:$}=a.slice_util.sliceInfo(o.shape,s,i,u,l,c,d,p,h);let I;if(m)I=lt({inputs:{x:o},backend:t,attrs:{shape:x}});else if(g||b){a.util.assert(o.shape.length>=1,(()=>`Input must have rank at least 1, got: ${o.shape.length}`));const e=a.slice_util.computeOutShape(v,C,$),n=xa({inputs:{x:o},backend:t,attrs:{begin:v,size:e}});I=lt({inputs:{x:n},backend:t,attrs:{shape:x}}),t.disposeIntermediateTensorInfo(n)}else{if(t.shouldExecuteOnCPU([o])){const e=t.readSync(o.dataId),n=(0,a.buffer)(o.shape,o.dtype,e),r=xn(f,n,$,v);I=t.makeTensorInfo(x,o.dtype,r.values)}else{const e=new nu(v,$,f);I=t.runWebGLProgram(e,[o],o.dtype)}}const y=lt({inputs:{x:I},backend:t,attrs:{shape:x}});return t.disposeIntermediateTensorInfo(I),y}};const au={kernelName:a.StringNGrams,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{separator:r,nGramWidths:o,leftPad:s,rightPad:i,padWidth:u,preserveShortSequences:l}=a,{data:c,dataSplits:d}=n,p=t.readSync(c.dataId),h=t.readSync(d.dataId),[f,x]=mn(p,h,r,o,s,i,u,l);return[t.makeTensorInfo([f.length],"string",f),t.makeTensorInfo(d.shape,"int32",x)]}};const ru={kernelName:a.StringSplit,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{skipEmpty:r}=a,{input:o,delimiter:s}=n;if("string"!==o.dtype)throw new Error("Input must be of datatype string");if(1!==o.shape.length)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(0!==s.shape.length)throw new Error(`Delimiter must be a scalar, got shape: ${s.shape}`);const i=t.readSync(o.dataId),u=t.readSync(s.dataId)[0],[l,c,d]=gn(i,u,r),p=c.length;return[t.makeTensorInfo([p,2],"int32",l),t.makeTensorInfo([p],"string",c),t.makeTensorInfo([2],"int32",new Int32Array(d))]}};const ou={kernelName:a.StringToHashBucketFast,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{numBuckets:r}=a,{input:o}=n;if("string"!==o.dtype)throw new Error("Input must be of datatype string");if(r<=0)throw new Error("Number of buckets must be at least 1");const s=t.readSync(o.dataId),i=bn(s,r);return t.makeTensorInfo(o.shape,"int32",i)}},su=Jn({opSnippet:"return tan(x);"}),iu={kernelName:a.Tan,backendName:"webgl",kernelFunc:su},uu=Jn({opSnippet:"\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n"}),lu={kernelName:a.Tanh,backendName:"webgl",kernelFunc:uu};
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
class cu{constructor(e,n){this.variableNames=["A"];const t=new Array(e.length);for(let a=0;a<t.length;a++)t[a]=e[a]*n[a];this.outputShape=t,this.rank=t.length;const a=ae(this.rank),r=function(e){const n=e.length;if(n>5)throw Error(`Tile for rank ${n} is not yet supported`);if(1===n)return`imod(resRC, ${e[0]})`;const t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],a=[];for(let n=0;n<e.length;n++)a.push(`imod(${t[n]}, ${e[n]})`);return a.join()}(e);this.userCode=`\n      void main() {\n        ${a} resRC = getOutputCoords();\n        setOutput(getA(${r}));\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function du(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{reps:s}=r;if("string"===o.dtype||o.shape.length>5){const e=t.readSync(o.dataId),n="string"===o.dtype?e.map((e=>a.util.decodeString(e))):e,r=(0,a.buffer)(o.shape,o.dtype,n),i=Cn(r,s);return t.makeTensorInfo(i.shape,i.dtype,i.values)}const i=new cu(o.shape,s);return t.runWebGLProgram(i,[o],o.dtype)}const pu={kernelName:a.Tile,backendName:"webgl",kernelFunc:du};class hu{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode="\n       void main() {\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int elemIdx = coords[1];\n\n         // We compare elements pair-wise within a group of size 2 * inc.\n         // The comparing rule for each group alternates between ascending\n         // and descending. Within each group, we compare each pair at\n         // positions i and i+inc. To decide whether an element at position i\n         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than\n         // inc, it is in the first half of the group, we denote it as x0,\n         // otherwise we denote it as x1.\n         // For example, as shown in the Bitonic top K paper referenced above,\n         // Figure5(a) shows that element[1] is in the\n         // second half of the group when group size is 2, but it is in the\n         // first half of the group when group size is 4.\n\n         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;\n         int i = isFirstInPair ? elemIdx : elemIdx - inc;\n\n         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));\n         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));\n         float x0 = i0 < n ? getX(batch, i0) : negativeInf;\n         float x1 = i1 < n ? getX(batch, i1) : negativeInf;\n\n         // Denotes which direction indices are in (ascending or descending).\n         bool reverse = imod(elemIdx, 2 * dir) >= dir;\n         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);\n         if (reverse == isGreater) { // Elements in opposite order of direction\n           int iTemp = i0;\n           i0 = i1;\n           i1 = iTemp;\n         }\n         if (isFirstInPair) {\n            setOutput(float(i0));\n         } else {\n            setOutput(float(i1));\n         }\n       }\n     "}}class fu{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode="\n    void main() {\n         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...\n         ivec2 coords = getOutputCoords();\n         int batch = coords[0];\n         int elemIdx = coords[1];\n\n         // The output size is half of the previous size.\n         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),\n         // we only need to output the indices at positions |, the indices at\n         // positions _ can be thrown away, see Figure5(b) After Phase 2\n         // (Merge phase) in the Bitonic Top K paper referenced above.\n         // For example, the paper shows we only need to output the orange bars.\n         // The output sequence should look like this | | | | | | | |.\n         // Because the sequence is halved, to map the output index back\n         // to the previous sequence to find the corresponding value,\n         // we need to double the index. When we double the index,\n         // we basically interpolate a position, so 2i looks like\n         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position\n         // of each 2k positions by - elemIdx % k. E.g. for output at\n         // index 4,5,6,7, we want to get the corresponding element at\n         // original index 8,9,10,11, for output at index 8,9,10,11,\n         // we want to get the corresponding element at original index\n         // 16,17,18,19, so on and so forth.\n\n         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));\n         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));\n         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));\n\n         float x0 = getX(batch, i0);\n         float x1 = i1 < n ? getX(batch, i1) : x0;\n\n         setOutput(x0 >= x1 ? float(i0) : float(i1));\n       }\n     "}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function xu(e,n){null!==n&&e.disposeIntermediateTensorInfo(n)}function mu(e){let n=1;for(;n<e;)n*=2;return n}const gu={kernelName:a.TopK,backendName:"webgl",kernelFunc:function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o}=n,{k:s,sorted:i}=r,u=(0,a.env)().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=(0,a.env)().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=o.shape,d=c[c.length-1];if(t.shouldExecuteOnCPU([o])||d<u||s>l){const e=t.readSync(o.dataId),[n,a]=$n(e,c,o.dtype,s,i);return[t.makeTensorInfo(n.shape,n.dtype,n.values),t.makeTensorInfo(a.shape,a.dtype,a.values)]}if(0===s)return c[c.length-1]=0,[t.makeTensorInfo(c,o.dtype,[]),t.makeTensorInfo(c,"int32",[])];if(1===d)return[o,Qr({attrs:{shape:c,dtype:"int32",value:0},backend:t})];const p=t.texData.get(o.dataId),h=null!==p&&p.isPacked,f=h?t.unpackTensor(o):o,x=a.util.sizeFromShape(c)/d,m=lt({inputs:{x:f},attrs:{shape:[x,d]},backend:t});h&&xu(t,f);const g=mu(s),b=mu(d);let v=null;const C=()=>null===v?[m,m]:[m,v],$=(e,n,a)=>{const r=C(),o=new hu(a),s=[[d],[null===v?1:0],[Number.NEGATIVE_INFINITY],[e],[n]],i=v;v=t.runWebGLProgram(o,r,"int32",s),xu(t,i)};for(let e=1;e<g;e*=2){const n=2*e;for(let t=e;t>=1;t/=2)$(n,t,[x,b])}for(let e=b;e>g;e/=2){const n=C(),a=new fu([x,e/2]),r=[[d],[null===v?1:0],[g]],o=v;v=t.runWebGLProgram(a,n,"int32",r),xu(t,o);const s=g/2,i=2*s;for(let e=s;e>=1;e/=2)$(i,e,v.shape)}let I=v;v=xa({inputs:{x:v},backend:t,attrs:{begin:0,size:[x,s]}}),xu(t,I);let y=go({inputs:{x:m,indices:v},backend:t,attrs:{axis:1,batchDims:1}});xu(t,m);const k=c.slice(0,-1);k.push(s),I=v,v=lt({inputs:{x:v},attrs:{shape:k},backend:t}),xu(t,I);const R=y;return y=lt({inputs:{x:y},attrs:{shape:k},backend:t}),xu(t,R),[y,v]}};
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
class bu{constructor(e,n,t,a,r,o){this.variableNames=["Image","Transforms"],this.outputShape=o;const s="nearest"===t?1:2;let i;switch(a){case"constant":default:i=1;break;case"reflect":i=2;break;case"wrap":i=3;break;case"nearest":i=4}this.userCode=`\n            float mapCoord(float outCoord, float len) {\n              float inCoord = outCoord;\n              if(${i} == 2) {\n                if (inCoord < 0.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz2 = 2.0 * len;\n                    if (inCoord < sz2) {\n                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +\n                      inCoord;\n                    }\n                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;\n                  }\n                } else if (inCoord > len - 1.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz2 = 2.0 * len;\n                    inCoord -= sz2 * float(int(float(inCoord / sz2)));\n                    if (inCoord >= len) {\n                      inCoord = sz2 - inCoord - 1.0;\n                    }\n                  }\n                }\n                return clamp(inCoord, 0.0, len - 1.0);\n              } else if (${i} == 3) {\n                if (inCoord < 0.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz = len - 1.0;\n                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);\n                  }\n                } else if (inCoord > len - 1.0) {\n                  if (len <= 1.0) {\n                    inCoord = 0.0;\n                  } else {\n                    float sz = len - 1.0;\n                    inCoord -= len * float(int(float(inCoord / sz)));\n                  }\n                }\n                return clamp(inCoord, 0.0, len - 1.0);\n              } else if (${i} == 4) {\n                return clamp(outCoord, 0.0, len - 1.0);\n              } else {\n                return outCoord;\n              }\n            }\n\n            float readWithFillValue(int batch, int coordY, int coordX,\n              int channel) {\n              float outputValue;\n              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${n}) {\n                  outputValue = getImage(batch, coordY, coordX, channel);\n              } else {\n                outputValue = float(${r});\n              }\n              return outputValue;\n            }\n\n            void main() {\n              ivec4 coords = getOutputCoords();\n              float outputValue;\n              int batch = coords[0];\n              int x = coords[2];\n              int y = coords[1];\n              int channel = coords[3];\n              float xf = float(x);\n              float yf = float(y);\n              float a1 = getTransforms(batch, 0);\n              float a2 = getTransforms(batch, 1);\n              float a3 = getTransforms(batch, 2);\n              float b1 = getTransforms(batch, 3);\n              float b2 = getTransforms(batch, 4);\n              float b3 = getTransforms(batch, 5);\n              float c1 = getTransforms(batch, 6);\n              float c2 = getTransforms(batch, 7);\n              float projection = c1 * xf + c2 * yf + 1.0;\n              if (projection == 0.0) {\n                outputValue = float(${r});\n              } else {\n                float inX = (a1 * xf + a2 * yf + a3) / projection;\n                float inY = (b1 * xf + b2 * yf + b3) / projection;\n                float mapX = mapCoord(inX, float(${n}));\n                float mapY = mapCoord(inY, float(${e}));\n\n                if (${s} == 1) {\n                  int coordY = int(round(mapY));\n                  int coordX = int(round(mapX));\n                  outputValue = readWithFillValue(batch, coordY, coordX,\n                    channel);\n                } else {\n                  float yFloor = floor(mapY);\n                  float xFloor = floor(mapX);\n                  float yCeil = yFloor + 1.0;\n                  float xCeil = xFloor + 1.0;\n                  float valueYFloor = (xCeil - mapX) *\n                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);\n                  float valueYCeil = (xCeil - mapX) *\n                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);\n                  outputValue = (yCeil - mapY) * valueYFloor +\n                  (mapY - yFloor) * valueYCeil;\n                }\n              }\n              setOutput(outputValue);\n            }\n        `}}const vu={kernelName:a.Transform,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,backend:t,attrs:a}=e,{image:r,transforms:o}=n,{interpolation:s,fillMode:i,fillValue:u,outputShape:l}=a,[c,d,p,h]=r.shape,[f,x]=null!=l?l:[d,p],m=new bu(d,p,s,i,u,[c,f,x,h]);return t.runWebGLProgram(m,[r,o],"float32")}};const Cu={kernelName:a.Unique,backendName:"webgl",kernelFunc:
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
function(e){const{inputs:n,attrs:t,backend:a}=e,{axis:r}=t,{x:o}=n;B(o,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const s=a.readSync(o.dataId),{outputValues:i,outputShape:u,indices:l}=yn(s,r,o.shape,o.dtype);return[a.makeTensorInfo(u,o.dtype,i),a.makeTensorInfo([l.length],"int32",l)]}};const $u={kernelName:a.Unpack,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:a}=e,{value:r}=n;let{axis:o}=a;o<0&&(o+=r.shape.length);const s=r,i=s.shape.length,u=r.shape[o],l=new Array(i-1);let c=0;for(let e=0;e<i;e++)e!==o&&(l[c++]=s.shape[e]);const d=[],p=new Array(i).fill(0),h=s.shape.slice();h[o]=1;const f=new Array(u);for(let e=0;e<f.length;e++){p[o]=e;const n=xa({inputs:{x:s},backend:t,attrs:{begin:p,size:h}}),a=lt({inputs:{x:n},backend:t,attrs:{shape:l}});f[e]=a,d.push(n)}return d.forEach((e=>t.disposeIntermediateTensorInfo(e))),f}};
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
class Iu{constructor(e,n){this.variableNames=["x","segmentIds"];const t=e.windowSize,a=e.batchSize,r=e.inSize,o=e.numSegments,s=o*Math.ceil(r/t);this.outputShape=[a,s];const i=4*Math.floor(t/4),u=t%4,l="\n        sumValue += dot(values, segFilter);\n    ";let c="";r%t>0&&(c=`\n        if (inIdx < 0 || inIdx >= ${r}) {\n          return initializationValue;\n        }\n      `);let d="";r%t>0&&(d=`\n        if (inIdx < 0 || inIdx >= ${r}) {\n          return -1.0;\n        }\n      `),this.userCode=`\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        ${c}\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        ${d}\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          ${o})) * float(${t}));\n        int currentSeg = int(mod(float(outIdx), float(${o})));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ${i}; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          ${l}\n        }\n\n        int inIdx = inOffset + ${i};\n        if (${1===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          ${l}\n        } else if (${2===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          ${l}\n        } else if (${3===u}) {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          ${l}\n        }\n        setOutput(sumValue);\n      }\n    `}}const yu=[It,kt,St,Tt,At,Ft,Dt,Lt,Gt,Mt,Xt,Kt,qt,Qt,Jt,ta,aa,sa,ia,ua,da,ga,ba,va,ka,wa,Ea,Hn,Oa,Ua,qa,er,nr,tr,ar,rr,sr,ur,cr,mr,gr,br,Cr,yr,Sr,wr,Nr,Ar,_r,Fr,Dr,Pr,Vr,Ur,Mr,Hr,qr,Zr,eo,ao,oo,uo,po,ho,xo,bo,Co,Io,zn,yo,Ba,Ro,wo,No,qn,Ao,Oo,Fo,Lo,Bo,Wo,Go,zo,Ko,qo,Qo,Jo,es,ns,rs,os,ss,is,us,cs,hs,xs,ks,ut,Rs,ws,Ns,As,$a,Os,Ls,Ps,Us,Ms,Zn,zs,Xs,Hs,Ks,qs,ya,bs,Qs,Js,ni,ct,ri,si,li,di,fi,mi,bi,Ci,Ii,ki,Si,Ti,Ei,_i,Fi,Li,ma,ys,Bi,Vi,Wi,Ui,Gi,Mi,zi,Xi,ji,Yi,Ji,eu,tu,au,ru,ou,$s,bt,iu,lu,pu,gu,vu,Ct,Cu,$u,{kernelName:a.UnsortedSegmentSum,backendName:"webgl",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:n,backend:t,attrs:r}=e,{x:o,segmentIds:s}=n,{numSegments:i}=r,u=o.shape.length,l=[];let c=0;const d=a.backend_util.getAxesPermutation([c],u);let p=o;null!=d&&(p=vt({inputs:{x:o},backend:t,attrs:{perm:d}}),l.push(p),c=a.backend_util.getInnerMostAxes(1,u)[0]);const h=a.backend_util.segment_util.computeOutShape(p.shape,c,i),f=a.util.sizeFromShape([p.shape[c]]),x=lt({inputs:{x:p},backend:t,attrs:{shape:[-1,f]}});l.push(x);const m=(0,a.sumOutType)(o.dtype),g=(e,n,r,o,s)=>{const i=e.shape[0],u=e.shape[1],c=a.backend_util.segment_util.segOpComputeOptimalWindowSize(u,s),d=new Iu({windowSize:c,inSize:u,batchSize:i,numSegments:s},n),p=t.compileAndRun(d,[e,r],o);if(l.push(p),p.shape[1]===s)return p;const h=js({backend:t,attrs:{start:0,stop:s,step:1,dtype:"float32"}}),f=du({inputs:{x:h},backend:t,attrs:{reps:[u/c]}});l.push(h),l.push(f);return g(p,n,f,o,s)},b=lt({inputs:{x:g(x,"unsortedSegmentSum",s,m,i)},backend:t,attrs:{shape:h}});let v=b;if(null!=d){l.push(b);const e=a.backend_util.getUndoAxesPermutation(d);v=vt({inputs:{x:v},backend:t,attrs:{perm:e}})}return l.forEach((e=>t.disposeIntermediateTensorInfo(e))),v}},Ds];for(const e of yu)(0,a.registerKernel)(e)}}]);