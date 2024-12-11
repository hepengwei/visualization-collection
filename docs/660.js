(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[660],{53242:function(e,t,n){(function(){"use strict";var e;function t(e){var t=0;return function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}var i="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var r=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof n.g&&n.g];for(var t=0;t<e.length;++t){var i=e[t];if(i&&i.Math==Math)return i}throw Error("Cannot find global object")}(this);function a(e,t){if(t)e:{var n=r;e=e.split(".");for(var a=0;a<e.length-1;a++){var s=e[a];if(!(s in n))break e;n=n[s]}(t=t(a=n[e=e[e.length-1]]))!=a&&null!=t&&i(n,e,{configurable:!0,writable:!0,value:t})}}function s(e){return(e={next:e})[Symbol.iterator]=function(){return this},e}function o(e){var n="undefined"!=typeof Symbol&&Symbol.iterator&&e[Symbol.iterator];return n?n.call(e):{next:t(e)}}function u(e){if(!(e instanceof Array)){e=o(e);for(var t,n=[];!(t=e.next()).done;)n.push(t.value);e=n}return e}a("Symbol",(function(e){function t(e,t){this.h=e,i(this,"description",{configurable:!0,writable:!0,value:t})}if(e)return e;t.prototype.toString=function(){return this.h};var n="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",r=0;return function e(i){if(this instanceof e)throw new TypeError("Symbol is not a constructor");return new t(n+(i||"")+"_"+r++,i)}})),a("Symbol.iterator",(function(e){if(e)return e;e=Symbol("Symbol.iterator");for(var n="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),a=0;a<n.length;a++){var o=r[n[a]];"function"==typeof o&&"function"!=typeof o.prototype[e]&&i(o.prototype,e,{configurable:!0,writable:!0,value:function(){return s(t(this))}})}return e}));var d="function"==typeof Object.assign?Object.assign:function(e,t){for(var n=1;n<arguments.length;n++){var i=arguments[n];if(i)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e};a("Object.assign",(function(e){return e||d}));var l,h="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var p;e:{var c={};try{c.__proto__={a:!0},p=c.a;break e}catch(e){}p=!1}l=p?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var f=l;function m(e,t){if(e.prototype=h(t.prototype),e.prototype.constructor=e,f)f(e,t);else for(var n in t)if("prototype"!=n)if(Object.defineProperties){var i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(e,n,i)}else e[n]=t[n];e.za=t.prototype}function g(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function y(e){if(e.m)throw new TypeError("Generator is already running");e.m=!0}function b(e,t){e.l={ma:t,na:!0},e.h=e.s||e.v}function x(e,t,n){return e.h=n,{value:t}}function w(e){this.h=new g,this.i=e}function v(e,t,n,i){try{var r=t.call(e.h.j,n);if(!(r instanceof Object))throw new TypeError("Iterator result "+r+" is not an object");if(!r.done)return e.h.m=!1,r;var a=r.value}catch(t){return e.h.j=null,b(e.h,t),C(e)}return e.h.j=null,i.call(e.h,a),C(e)}function C(e){for(;e.h.h;)try{var t=e.i(e.h);if(t)return e.h.m=!1,{value:t.value,done:!1}}catch(t){e.h.i=void 0,b(e.h,t)}if(e.h.m=!1,e.h.l){if(t=e.h.l,e.h.l=null,t.na)throw t.ma;return{value:t.return,done:!0}}return{value:void 0,done:!0}}function k(e){this.next=function(t){return y(e.h),e.h.j?t=v(e,e.h.j.next,t,e.h.u):(e.h.u(t),t=C(e)),t},this.throw=function(t){return y(e.h),e.h.j?t=v(e,e.h.j.throw,t,e.h.u):(b(e.h,t),t=C(e)),t},this.return=function(t){return function(e,t){y(e.h);var n=e.h.j;return n?v(e,"return"in n?n.return:function(e){return{value:e,done:!0}},t,e.h.return):(e.h.return(t),C(e))}(e,t)},this[Symbol.iterator]=function(){return this}}function S(e){return function(e){function t(t){return e.next(t)}function n(t){return e.throw(t)}return new Promise((function(i,r){!function e(a){a.done?i(a.value):Promise.resolve(a.value).then(t,n).then(e,r)}(e.next())}))}(new k(new w(e)))}function I(e){return e||Array.prototype.fill}g.prototype.u=function(e){this.i=e},g.prototype.return=function(e){this.l={return:e},this.h=this.v},a("Promise",(function(e){function t(e){this.i=0,this.j=void 0,this.h=[],this.u=!1;var t=this.l();try{e(t.resolve,t.reject)}catch(e){t.reject(e)}}function n(){this.h=null}function i(e){return e instanceof t?e:new t((function(t){t(e)}))}if(e)return e;n.prototype.i=function(e){if(null==this.h){this.h=[];var t=this;this.j((function(){t.m()}))}this.h.push(e)};var a=r.setTimeout;n.prototype.j=function(e){a(e,0)},n.prototype.m=function(){for(;this.h&&this.h.length;){var e=this.h;this.h=[];for(var t=0;t<e.length;++t){var n=e[t];e[t]=null;try{n()}catch(e){this.l(e)}}}this.h=null},n.prototype.l=function(e){this.j((function(){throw e}))},t.prototype.l=function(){function e(e){return function(i){n||(n=!0,e.call(t,i))}}var t=this,n=!1;return{resolve:e(this.I),reject:e(this.m)}},t.prototype.I=function(e){if(e===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof t)this.L(e);else{e:switch(typeof e){case"object":var n=null!=e;break e;case"function":n=!0;break e;default:n=!1}n?this.F(e):this.s(e)}},t.prototype.F=function(e){var t=void 0;try{t=e.then}catch(e){return void this.m(e)}"function"==typeof t?this.M(t,e):this.s(e)},t.prototype.m=function(e){this.v(2,e)},t.prototype.s=function(e){this.v(1,e)},t.prototype.v=function(e,t){if(0!=this.i)throw Error("Cannot settle("+e+", "+t+"): Promise already settled in state"+this.i);this.i=e,this.j=t,2===this.i&&this.K(),this.H()},t.prototype.K=function(){var e=this;a((function(){if(e.D()){var t=r.console;void 0!==t&&t.error(e.j)}}),1)},t.prototype.D=function(){if(this.u)return!1;var e=r.CustomEvent,t=r.Event,n=r.dispatchEvent;return void 0===n||("function"==typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"==typeof t?e=new t("unhandledrejection",{cancelable:!0}):(e=r.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection",!1,!0,e),e.promise=this,e.reason=this.j,n(e))},t.prototype.H=function(){if(null!=this.h){for(var e=0;e<this.h.length;++e)s.i(this.h[e]);this.h=null}};var s=new n;return t.prototype.L=function(e){var t=this.l();e.T(t.resolve,t.reject)},t.prototype.M=function(e,t){var n=this.l();try{e.call(t,n.resolve,n.reject)}catch(e){n.reject(e)}},t.prototype.then=function(e,n){function i(e,t){return"function"==typeof e?function(t){try{r(e(t))}catch(e){a(e)}}:t}var r,a,s=new t((function(e,t){r=e,a=t}));return this.T(i(e,r),i(n,a)),s},t.prototype.catch=function(e){return this.then(void 0,e)},t.prototype.T=function(e,t){function n(){switch(i.i){case 1:e(i.j);break;case 2:t(i.j);break;default:throw Error("Unexpected state: "+i.i)}}var i=this;null==this.h?s.i(n):this.h.push(n),this.u=!0},t.resolve=i,t.reject=function(e){return new t((function(t,n){n(e)}))},t.race=function(e){return new t((function(t,n){for(var r=o(e),a=r.next();!a.done;a=r.next())i(a.value).T(t,n)}))},t.all=function(e){var n=o(e),r=n.next();return r.done?i([]):new t((function(e,t){function a(t){return function(n){s[t]=n,0==--o&&e(s)}}var s=[],o=0;do{s.push(void 0),o++,i(r.value).T(a(s.length-1),t),r=n.next()}while(!r.done)}))},t})),a("Array.prototype.keys",(function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,i=!1,r={next:function(){if(!i&&n<e.length){var r=n++;return{value:t(r,e[r]),done:!1}}return i=!0,{done:!0,value:void 0}}};return r[Symbol.iterator]=function(){return r},r}(this,(function(e){return e}))}})),a("Array.prototype.fill",(function(e){return e||function(e,t,n){var i=this.length||0;for(0>t&&(t=Math.max(0,i+t)),(null==n||n>i)&&(n=i),0>(n=Number(n))&&(n=Math.max(0,i+n)),t=Number(t||0);t<n;t++)this[t]=e;return this}})),a("Int8Array.prototype.fill",I),a("Uint8Array.prototype.fill",I),a("Uint8ClampedArray.prototype.fill",I),a("Int16Array.prototype.fill",I),a("Uint16Array.prototype.fill",I),a("Int32Array.prototype.fill",I),a("Uint32Array.prototype.fill",I),a("Float32Array.prototype.fill",I),a("Float64Array.prototype.fill",I),a("Object.is",(function(e){return e||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}})),a("Array.prototype.includes",(function(e){return e||function(e,t){var n=this;n instanceof String&&(n=String(n));var i=n.length;for(0>(t=t||0)&&(t=Math.max(t+i,0));t<i;t++){var r=n[t];if(r===e||Object.is(r,e))return!0}return!1}})),a("String.prototype.includes",(function(e){return e||function(e,t){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(e instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(e,t||0)}}));var R=this||self;function $(e,t){e=e.split(".");var n,i=R;e[0]in i||void 0===i.execScript||i.execScript("var "+e[0]);for(;e.length&&(n=e.shift());)e.length||void 0===t?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=t}function A(e){var t;return(t=R.navigator)&&(t=t.userAgent)||(t=""),-1!=t.indexOf(e)}var P=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var n=e.length,i=Array(n),r="string"==typeof e?e.split(""):e,a=0;a<n;a++)a in r&&(i[a]=t.call(void 0,r[a],a,e));return i},N={},z=null;function _(e){var t=e.length,n=3*t/4;n%3?n=Math.floor(n):-1!="=.".indexOf(e[t-1])&&(n=-1!="=.".indexOf(e[t-2])?n-2:n-1);var i=new Uint8Array(n),r=0;return function(e,t){function n(t){for(;i<e.length;){var n=e.charAt(i++),r=z[n];if(null!=r)return r;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n)}return t}T();for(var i=0;;){var r=n(-1),a=n(0),s=n(64),o=n(64);if(64===o&&-1===r)break;t(r<<2|a>>4),64!=s&&(t(a<<4&240|s>>2),64!=o&&t(s<<6&192|o))}}(e,(function(e){i[r++]=e})),r!==n?i.subarray(0,r):i}function T(){if(!z){z={};for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"],n=0;5>n;n++){var i=e.concat(t[n].split(""));N[n]=i;for(var r=0;r<i.length;r++){var a=i[r];void 0===z[a]&&(z[a]=r)}}}}var F="undefined"!=typeof Uint8Array,E=!(A("Trident")||A("MSIE"))&&"function"==typeof R.btoa;function D(e){if(!E){var t;void 0===t&&(t=0),T(),t=N[t];for(var n=Array(Math.floor(e.length/3)),i=t[64]||"",r=0,a=0;r<e.length-2;r+=3){var s=e[r],o=e[r+1],u=e[r+2],d=t[s>>2];s=t[(3&s)<<4|o>>4],o=t[(15&o)<<2|u>>6],u=t[63&u],n[a++]=d+s+o+u}switch(d=0,u=i,e.length-r){case 2:u=t[(15&(d=e[r+1]))<<2]||i;case 1:e=e[r],n[a]=t[e>>2]+t[(3&e)<<4|d>>4]+u+i}return n.join("")}for(t="";10240<e.length;)t+=String.fromCharCode.apply(null,e.subarray(0,10240)),e=e.subarray(10240);return t+=String.fromCharCode.apply(null,e),btoa(t)}var L,O=RegExp("[-_.]","g");function B(e){switch(e){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function W(e){if(!E)return _(e);O.test(e)&&(e=e.replace(O,B)),e=atob(e);for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function U(){return L||(L=new Uint8Array(0))}var M={},V="function"==typeof Uint8Array.prototype.slice,G=0,H=0;function j(e){var t=0>e,n=(e=Math.abs(e))>>>0;e=Math.floor((e-n)/4294967296),t&&(t=(n=o(Y(n,e))).next().value,e=n.next().value,n=t),G=n>>>0,H=e>>>0}var X,K="function"==typeof BigInt;function Y(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function q(e,t){this.i=e>>>0,this.h=t>>>0}function Q(e){if(!e)return X||(X=new q(0,0));if(!/^-?\d+$/.test(e))return null;if(16>e.length)j(Number(e));else if(K)e=BigInt(e),G=Number(e&BigInt(4294967295))>>>0,H=Number(e>>BigInt(32)&BigInt(4294967295));else{var t=+("-"===e[0]);H=G=0;for(var n=e.length,i=t,r=(n-t)%6+t;r<=n;i=r,r+=6)i=Number(e.slice(i,r)),H*=1e6,4294967296<=(G=1e6*G+i)&&(H+=G/4294967296|0,G%=4294967296);t&&(e=(t=o(Y(G,H))).next().value,t=t.next().value,G=e,H=t)}return new q(G,H)}function Z(e,t){return Error("Invalid wire type: "+e+" (at position "+t+")")}function J(){return Error("Failed to read varint, encoding is invalid.")}function ee(e,t){return Error("Tried to read past the end of the data "+t+" > "+e)}function te(){throw Error("Invalid UTF8")}function ne(e,t){return t=String.fromCharCode.apply(null,t),null==e?t:e+t}var ie,re,ae,se=void 0,oe="undefined"!=typeof TextDecoder,ue="undefined"!=typeof TextEncoder;function de(e){if(e!==M)throw Error("illegal external caller")}function le(e,t){if(de(t),this.V=e,null!=e&&0===e.length)throw Error("ByteString should be constructed with non-empty values")}function he(){return ae||(ae=new le(null,M))}function pe(e){de(M);var t=e.V;return null==(t=null==t||F&&null!=t&&t instanceof Uint8Array?t:"string"==typeof t?W(t):null)?t:e.V=t}function ce(e,t){this.i=null,this.m=!1,this.h=this.j=this.l=0,fe(this,e,t)}function fe(e,t,n){n=void 0===n?{}:n,e.S=void 0!==n.S&&n.S,t&&(t=function(e){if("string"==typeof e)return{buffer:W(e),C:!1};if(Array.isArray(e))return{buffer:new Uint8Array(e),C:!1};if(e.constructor===Uint8Array)return{buffer:e,C:!1};if(e.constructor===ArrayBuffer)return{buffer:new Uint8Array(e),C:!1};if(e.constructor===le)return{buffer:pe(e)||U(),C:!0};if(e instanceof Uint8Array)return{buffer:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}(t),e.i=t.buffer,e.m=t.C,e.l=0,e.j=e.i.length,e.h=e.l)}function me(e,t){if(e.h=t,t>e.j)throw ee(e.j,t)}function ge(e){var t=e.i,n=e.h,i=t[n++],r=127&i;if(128&i&&(r|=(127&(i=t[n++]))<<7,128&i&&(r|=(127&(i=t[n++]))<<14,128&i&&(r|=(127&(i=t[n++]))<<21,128&i&&(r|=(i=t[n++])<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw J();return me(e,n),r}function ye(e,t){if(0>t)throw Error("Tried to read a negative byte length: "+t);var n=e.h,i=n+t;if(i>e.j)throw ee(t,e.j-n);return e.h=i,n}ce.prototype.reset=function(){this.h=this.l};var be=[];function xe(){this.h=[]}function we(e,t,n){for(;0<n||127<t;)e.h.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.h.push(t)}function ve(e,t){for(;127<t;)e.h.push(127&t|128),t>>>=7;e.h.push(t)}function Ce(e,t){if(be.length){var n=be.pop();fe(n,e,t),e=n}else e=new ce(e,t);this.h=e,this.j=this.h.h,this.i=this.l=-1,this.setOptions(t)}function ke(e){var t=e.h;if(t.h==t.j)return!1;e.j=e.h.h;var n=ge(e.h)>>>0;if(t=n>>>3,!(0<=(n&=7)&&5>=n))throw Z(n,e.j);if(1>t)throw Error("Invalid field number: "+t+" (at position "+e.j+")");return e.l=t,e.i=n,!0}function Se(e){switch(e.i){case 0:if(0!=e.i)Se(e);else e:{for(var t=(e=e.h).h,n=t+10,i=e.i;t<n;)if(!(128&i[t++])){me(e,t);break e}throw J()}break;case 1:me(e=e.h,e.h+8);break;case 2:2!=e.i?Se(e):(t=ge(e.h)>>>0,me(e=e.h,e.h+t));break;case 5:me(e=e.h,e.h+4);break;case 3:for(t=e.l;;){if(!ke(e))throw Error("Unmatched start-group tag: stream EOF");if(4==e.i){if(e.l!=t)throw Error("Unmatched end-group tag");break}Se(e)}break;default:throw Z(e.i,e.j)}}xe.prototype.length=function(){return this.h.length},xe.prototype.end=function(){var e=this.h;return this.h=[],e},Ce.prototype.setOptions=function(e){e=void 0===e?{}:e,this.ca=void 0!==e.ca&&e.ca},Ce.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};var Ie=[];function Re(){this.j=[],this.i=0,this.h=new xe}function $e(e,t){0!==t.length&&(e.j.push(t),e.i+=t.length)}var Ae="function"==typeof Symbol&&"symbol"==typeof Symbol()?Symbol():void 0;function Pe(e,t){return Ae?e[Ae]|=t:void 0!==e.A?e.A|=t:(Object.defineProperties(e,{A:{value:t,configurable:!0,writable:!0,enumerable:!1}}),t)}function Ne(e,t){Ae?e[Ae]&&(e[Ae]&=~t):void 0!==e.A&&(e.A&=~t)}function ze(e){var t;return null==(t=Ae?e[Ae]:e.A)?0:t}function _e(e,t){Ae?e[Ae]=t:void 0!==e.A?e.A=t:Object.defineProperties(e,{A:{value:t,configurable:!0,writable:!0,enumerable:!1}})}function Te(e){return Pe(e,1),e}function Fe(e,t){_e(t,-51&e)}function Ee(e,t){_e(t,-41&e|18)}var De={};function Le(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)&&e.constructor===Object}var Oe,Be,We=[];function Ue(e){if(2&ze(e.o))throw Error("Cannot mutate an immutable Message")}function Me(e){var t=e.length;(t=t?e[t-1]:void 0)&&Le(t)?t.g=1:(t={},e.push((t.g=1,t)))}function Ve(e){var t=e.i+e.G;return e.B||(e.B=e.o[t]={})}function Ge(e,t){return-1===t?null:t>=e.i?e.B?e.B[t]:void 0:e.o[t+e.G]}function He(e,t,n,i){Ue(e),je(e,t,n,i)}function je(e,t,n,i){e.j&&(e.j=void 0),t>=e.i||i?Ve(e)[t]=n:(e.o[t+e.G]=n,(e=e.B)&&t in e&&delete e[t])}function Xe(e,t,n,i){var r=Ge(e,t);Array.isArray(r)||(r=Oe);var a=ze(r);if(1&a||Te(r),i)2&a||Pe(r,2),1&n||Object.freeze(r);else{i=!(2&n);var s=2&a;1&n||!s?i&&16&a&&!s&&Ne(r,16):je(e,t,r=Te(Array.prototype.slice.call(r)))}return r}function Ke(e,t){var n=Ge(e,t),i=null==n?n:"number"==typeof n||"NaN"===n||"Infinity"===n||"-Infinity"===n?Number(n):void 0;return null!=i&&i!==n&&je(e,t,i),i}function Ye(e,t,n,i,r){e.h||(e.h={});var a=e.h[n],s=Xe(e,n,3,r);if(!a){var o=s;a=[];var u=!!(16&ze(e.o));s=!!(2&ze(o));var d=o;!r&&s&&(o=Array.prototype.slice.call(o));for(var l=s,h=0;h<o.length;h++){var p=o[h],c=t,f=!1;if(f=void 0!==f&&f,void 0!==(p=Array.isArray(p)?new c(p):f?new c:void 0)){var m=f=ze(c=p.o);s&&(m|=2),u&&(m|=16),m!=f&&_e(c,m),c=m,l=l||!!(2&c),a.push(p)}}return e.h[n]=a,t=33|(u=ze(o)),u!=(t=l?-9&t:8|t)&&(l=o,Object.isFrozen(l)&&(l=Array.prototype.slice.call(l)),_e(l,t),o=l),d!==o&&je(e,n,o),(r||i&&s)&&Pe(a,2),i&&Object.freeze(a),a}return r||(r=Object.isFrozen(a),i&&!r?Object.freeze(a):!i&&r&&(a=Array.prototype.slice.call(a),e.h[n]=a)),a}function qe(e,t,n){var i=!!(2&ze(e.o));if(t=Ye(e,t,n,i,i),e=Xe(e,n,3,i),!(i||8&ze(e))){for(i=0;i<t.length;i++){if(2&ze((n=t[i]).o)){var r=ut(n,!1);r.j=n}else r=n;n!==r&&(t[i]=r,e[i]=r.o)}Pe(e,8)}return t}function Qe(e,t,n){if(null!=n&&"number"!=typeof n)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof n+": "+n);He(e,t,n)}function Ze(e,t,n,i,r){Ue(e);var a=Ye(e,n,t,!1,!1);return n=null!=i?i:new n,e=Xe(e,t,2,!1),null!=r?(a.splice(r,0,n),e.splice(r,0,n.o)):(a.push(n),e.push(n.o)),n.C()&&Ne(e,8),n}function Je(e,t){return null==e?t:e}function et(e,t,n){return n=void 0===n?0:n,Je(Ke(e,t),n)}function tt(e,t,n,i){if(null!=e){if(Array.isArray(e))e=nt(e,t,n,void 0!==i);else if(Le(e)){var r,a={};for(r in e)a[r]=tt(e[r],t,n,i);e=a}else e=t(e,i);return e}}function nt(e,t,n,i){var r=ze(e);i=i?!!(16&r):void 0,e=Array.prototype.slice.call(e);for(var a=0;a<e.length;a++)e[a]=tt(e[a],t,n,i);return n(r,e),e}function it(e){return e.ja===De?e.toJSON():function(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"object":if(e)if(Array.isArray(e)){if(128&ze(e))return Me(e=Array.prototype.slice.call(e)),e}else{if(F&&null!=e&&e instanceof Uint8Array)return D(e);if(e instanceof le){var t=e.V;return null==t?"":"string"==typeof t?t:e.V=D(t)}}}return e}(e)}function rt(e,t){128&e&&Me(t)}function at(e,t,n){if(n=void 0===n?Ee:n,null!=e){if(F&&e instanceof Uint8Array)return e.length?new le(new Uint8Array(e),M):he();if(Array.isArray(e)){var i=ze(e);return 2&i?e:!t||32&i||!(16&i||0===i)?(4&(t=ze(e=nt(e,at,4&i?Ee:n,!0)))&&2&t&&Object.freeze(e),e):(_e(e,2|i),e)}return e.ja===De?ot(e):e}}function st(e,t,n,i,r,a,s){if(e=e.h&&e.h[n]){if(2&(i=ze(e))?i=e:(Ee(i,a=P(e,ot)),Object.freeze(a),i=a),Ue(t),s=null==i?Oe:Te([]),null!=i){for(a=!!i.length,e=0;e<i.length;e++){var o=i[e];a=a&&!(2&ze(o.o)),s[e]=o.o}a=1|(a?8:0),((e=ze(s))&a)!==a&&(Object.isFrozen(s)&&(s=Array.prototype.slice.call(s)),_e(s,e|a)),t.h||(t.h={}),t.h[n]=i}else t.h&&(t.h[n]=void 0);je(t,n,s,r)}else He(t,n,at(i,a,s),r)}function ot(e){return 2&ze(e.o)||Pe((e=ut(e,!0)).o,2),e}function ut(e,t){var n=e.o,i=[];Pe(i,16);var r=e.constructor.h;if(r&&i.push(r),r=e.B){i.length=n.length,i.fill(void 0,i.length,n.length);var a={};i[i.length-1]=a}128&ze(n)&&Me(i),t=t||e.C()?Ee:Fe,a=e.constructor,Be=i,i=new a(i),Be=void 0,e.R&&(i.R=e.R.slice()),a=!!(16&ze(n));for(var s=r?n.length-1:n.length,o=0;o<s;o++)st(e,i,o-e.G,n[o],!1,a,t);if(r)for(var u in r)st(e,i,+u,r[u],!0,a,t);return i}function dt(e,t,n){null==e&&(e=Be),Be=void 0;var i,r=this.constructor.i||0,a=0<r,s=this.constructor.h,o=!1;if(null==e){var u=48,d=!0;a&&(r=0,u|=128),_e(e=s?[s]:[],u)}else{if(!Array.isArray(e))throw Error();if(s&&s!==e[0])throw Error();var l=u=Pe(e,0);if((d=!!(16&l))&&((o=!!(32&l))||(l|=32)),a){if(128&l)r=0;else if(0<e.length){var h=e[e.length-1];if(Le(h)&&"g"in h){r=0,l|=128,delete h.g;var p,c=!0;for(p in h){c=!1;break}c&&e.pop()}}}else if(128&l)throw Error();u!==l&&_e(e,l)}if(this.G=(s?0:-1)-r,this.h=void 0,this.o=e,r=(s=this.o.length)-1,s&&Le(s=this.o[r])?(this.B=s,this.i=r-this.G):void 0!==t&&-1<t?(this.i=Math.max(t,r+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE,!a&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(n)for(t=d&&!o&&!0,a=this.i,d=0;d<n.length;d++)(o=n[d])<a?(r=e[o+=this.G])?lt(r,t):e[o]=Oe:(i||(i=Ve(this)),(r=i[o])?lt(r,t):i[o]=Oe)}function lt(e,t){if(Array.isArray(e)){var n=ze(e),i=1;!t||2&n||(i|=16),(n&i)!==i&&_e(e,n|i)}}function ht(e,t,n){if(n){var i,r={};for(i in n){var a=n[i],s=a.ra;s||(r.J=a.xa||a.oa.W,a.ia?(r.aa=xt(a.ia),s=function(e){return function(t,n,i){return e.J(t,n,i,e.aa)}}(r)):a.ka?(r.Z=wt(a.da.P,a.ka),s=function(e){return function(t,n,i){return e.J(t,n,i,e.Z)}}(r)):s=r.J,a.ra=s),s(t,e,a.da),r={J:r.J,aa:r.aa,Z:r.Z}}}!function(e,t){if(t=t.R){$e(e,e.h.end());for(var n=0;n<t.length;n++)$e(e,pe(t[n])||U())}}(t,e)}_e(We,23),Oe=Object.freeze(We),dt.prototype.toJSON=function(){return nt(this.o,it,rt)},dt.prototype.C=function(){return!!(2&ze(this.o))},dt.prototype.ja=De,dt.prototype.toString=function(){return this.o.toString()};var pt=Symbol();function ct(e,t,n){return e[pt]||(e[pt]=function(e,i){return t(e,i,n)})}function ft(e){var t=e[pt];if(!t){var n=_t(e);t=function(e,t){return Tt(e,t,n)},e[pt]=t}return t}function mt(e){var t=function(e){var t=e.ia;return t?ft(t):(t=e.wa)?ct(e.da.P,t,e.ka):void 0}(e),n=e.da,i=e.oa.U;return t?function(e,r){return i(e,r,n,t)}:function(e,t){return i(e,t,n)}}function gt(e,t){var n=e[t];return"function"==typeof n&&0===n.length&&(n=n(),e[t]=n),Array.isArray(n)&&($t in n||vt in n||0<n.length&&"function"==typeof n[0])?n:void 0}function yt(e,t,n,i,r,a){t.P=e[0];var s=1;if(e.length>s&&"number"!=typeof e[s]){var o=e[s++];n(t,o)}for(;s<e.length;){n=e[s++];for(var u=s+1;u<e.length&&"number"!=typeof e[u];)u++;switch(o=e[s++],u-=s){case 0:i(t,n,o);break;case 1:(u=gt(e,s))?(s++,r(t,n,o,u)):i(t,n,o,e[s++]);break;case 2:r(t,n,o,u=gt(e,u=s++),e[s++]);break;case 3:a(t,n,o,e[s++],e[s++],e[s++]);break;case 4:a(t,n,o,e[s++],e[s++],e[s++],e[s++]);break;default:throw Error("unexpected number of binary field arguments: "+u)}}return t}var bt=Symbol();function xt(e){var t=e[bt];if(!t){var n=Rt(e);t=function(e,t){return Ft(e,t,n)},e[bt]=t}return t}function wt(e,t){var n=e[bt];return n||(n=function(e,n){return ht(e,n,t)},e[bt]=n),n}var vt=Symbol();function Ct(e,t){e.push(t)}function kt(e,t,n){e.push(t,n.W)}function St(e,t,n,i){var r=xt(i),a=Rt(i).P,s=n.W;e.push(t,(function(e,t,n){return s(e,t,n,a,r)}))}function It(e,t,n,i,r,a){var s=wt(i,a),o=n.W;e.push(t,(function(e,t,n){return o(e,t,n,i,s)}))}function Rt(e){var t=e[vt];return t||(t=yt(e,e[vt]=[],Ct,kt,St,It),$t in e&&vt in e&&(e.length=0),t)}var $t=Symbol();function At(e,t){e[0]=t}function Pt(e,t,n,i){var r=n.U;e[t]=i?function(e,t,n){return r(e,t,n,i)}:r}function Nt(e,t,n,i,r){var a=n.U,s=ft(i),o=_t(i).P;e[t]=function(e,t,n){return a(e,t,n,o,s,r)}}function zt(e,t,n,i,r,a,s){var o=n.U,u=ct(i,r,a);e[t]=function(e,t,n){return o(e,t,n,i,u,s)}}function _t(e){var t=e[$t];return t||(t=yt(e,e[$t]={},At,Pt,Nt,zt),$t in e&&vt in e&&(e.length=0),t)}function Tt(e,t,n){for(;ke(t)&&4!=t.i;){var i=t.l,r=n[i];if(!r){var a=n[0];a&&(a=a[i])&&(r=n[i]=mt(a))}if(!r||!r(t,e,i)){i=e,a=(r=t).j,Se(r);var s=r;if(!s.ca){if(r=s.h.h-a,s.h.h=a,s=s.h,0==r)r=he();else{if(a=ye(s,r),s.S&&s.m)r=s.i.subarray(a,a+r);else{s=s.i;var o=a;r=o===(r=a+r)?U():V?s.slice(o,r):new Uint8Array(s.subarray(o,r))}r=0==r.length?he():new le(r,M)}(a=i.R)?a.push(r):i.R=[r]}}}return e}function Ft(e,t,n){for(var i=n.length,r=1==i%2,a=r?1:0;a<i;a+=2)(0,n[a+1])(t,e,n[a]);ht(e,t,r?n[0]:void 0)}function Et(e,t){return{U:e,W:t}}var Dt=Et((function(e,t,n){if(5!==e.i)return!1;var i=(e=e.h).i,r=e.h,a=i[r],s=i[r+1],o=i[r+2];return i=i[r+3],me(e,e.h+4),e=2*((s=(a|s<<8|o<<16|i<<24)>>>0)>>31)+1,a=s>>>23&255,s&=8388607,He(t,n,255==a?s?NaN:1/0*e:0==a?e*Math.pow(2,-149)*s:e*Math.pow(2,a-150)*(s+Math.pow(2,23))),!0}),(function(e,t,n){if(null!=(t=Ke(t,n))){ve(e.h,8*n+5),e=e.h;var i=+t;0===i?0<1/i?G=H=0:(H=0,G=2147483648):isNaN(i)?(H=0,G=2147483647):34028234663852886e22<(i=(n=0>i?-2147483648:0)?-i:i)?(H=0,G=(2139095040|n)>>>0):11754943508222875e-54>i?(i=Math.round(i/Math.pow(2,-149)),H=0,G=(n|i)>>>0):(t=Math.floor(Math.log(i)/Math.LN2),i*=Math.pow(2,-t),16777216<=(i=Math.round(8388608*i))&&++t,H=0,G=(n|t+127<<23|8388607&i)>>>0),n=G,e.h.push(n>>>0&255),e.h.push(n>>>8&255),e.h.push(n>>>16&255),e.h.push(n>>>24&255)}})),Lt=Et((function(e,t,n){if(0!==e.i)return!1;var i=e.h,r=0,a=e=0,s=i.i,o=i.h;do{var u=s[o++];r|=(127&u)<<a,a+=7}while(32>a&&128&u);for(32<a&&(e|=(127&u)>>4),a=3;32>a&&128&u;a+=7)e|=(127&(u=s[o++]))<<a;if(me(i,o),!(128>u))throw J();return i=r>>>0,(e=2147483648&(u=e>>>0))&&(u=~u>>>0,0==(i=1+~i>>>0)&&(u=u+1>>>0)),i=4294967296*u+(i>>>0),He(t,n,e?-i:i),!0}),(function(e,t,n){null!=(t=Ge(t,n))&&("string"==typeof t&&Q(t),null!=t&&(ve(e.h,8*n),"number"==typeof t?(e=e.h,j(t),we(e,G,H)):(n=Q(t),we(e.h,n.i,n.h))))})),Ot=Et((function(e,t,n){return 0===e.i&&(He(t,n,ge(e.h)),!0)}),(function(e,t,n){if(null!=(t=Ge(t,n))&&null!=t)if(ve(e.h,8*n),e=e.h,0<=(n=t))ve(e,n);else{for(t=0;9>t;t++)e.h.push(127&n|128),n>>=7;e.h.push(1)}})),Bt=Et((function(e,t,n){if(2!==e.i)return!1;var i=ge(e.h)>>>0,r=ye(e=e.h,i);if(e=e.i,oe){var a,s=e;(a=ie)||(a=ie=new TextDecoder("utf-8",{fatal:!0})),e=r+i,s=0===r&&e===s.length?s:s.subarray(r,e);try{var o=a.decode(s)}catch(e){if(void 0===se){try{a.decode(new Uint8Array([128]))}catch(e){}try{a.decode(new Uint8Array([97])),se=!0}catch(e){se=!1}}throw!se&&(ie=void 0),e}}else{i=(o=r)+i,r=[];for(var u,d,l=null;o<i;)128>(u=e[o++])?r.push(u):224>u?o>=i?te():(d=e[o++],194>u||128!=(192&d)?(o--,te()):r.push((31&u)<<6|63&d)):240>u?o>=i-1?te():128!=(192&(d=e[o++]))||224===u&&160>d||237===u&&160<=d||128!=(192&(s=e[o++]))?(o--,te()):r.push((15&u)<<12|(63&d)<<6|63&s):244>=u?o>=i-2?te():128!=(192&(d=e[o++]))||d-144+(u<<28)>>30||128!=(192&(s=e[o++]))||128!=(192&(a=e[o++]))?(o--,te()):(u=(7&u)<<18|(63&d)<<12|(63&s)<<6|63&a,u-=65536,r.push(55296+(u>>10&1023),56320+(1023&u))):te(),8192<=r.length&&(l=ne(l,r),r.length=0);o=ne(l,r)}return He(t,n,o),!0}),(function(e,t,n){if(null!=(t=Ge(t,n))){var i=!1;if(i=void 0!==i&&i,ue){if(i&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(t))throw Error("Found an unpaired surrogate");t=(re||(re=new TextEncoder)).encode(t)}else{for(var r=0,a=new Uint8Array(3*t.length),s=0;s<t.length;s++){var o=t.charCodeAt(s);if(128>o)a[r++]=o;else{if(2048>o)a[r++]=o>>6|192;else{if(55296<=o&&57343>=o){if(56319>=o&&s<t.length){var u=t.charCodeAt(++s);if(56320<=u&&57343>=u){o=1024*(o-55296)+u-56320+65536,a[r++]=o>>18|240,a[r++]=o>>12&63|128,a[r++]=o>>6&63|128,a[r++]=63&o|128;continue}s--}if(i)throw Error("Found an unpaired surrogate");o=65533}a[r++]=o>>12|224,a[r++]=o>>6&63|128}a[r++]=63&o|128}}t=r===a.length?a:a.subarray(0,r)}ve(e.h,8*n+2),ve(e.h,t.length),$e(e,e.h.end()),$e(e,t)}})),Wt=Et((function(e,t,n,i,r){if(2!==e.i)return!1;t=Ze(t,n,i),n=e.h.j,i=ge(e.h)>>>0;var a=e.h.h+i,s=a-n;if(0>=s&&(e.h.j=a,r(t,e,void 0,void 0,void 0),s=a-e.h.h),s)throw Error("Message parsing ended unexpectedly. Expected to read "+i+" bytes, instead read "+(i-s)+" bytes, either the data ended unexpectedly or the message misreported its own length");return e.h.h=a,e.h.j=n,!0}),(function(e,t,n,i,r){if(null!=(t=qe(t,i,n)))for(i=0;i<t.length;i++){var a=e;ve(a.h,8*n+2);var s=a.h.end();$e(a,s),s.push(a.i),a=s,r(t[i],e),s=e;var o=a.pop();for(o=s.i+s.h.length()-o;127<o;)a.push(127&o|128),o>>>=7,s.i++;a.push(o),s.i++}}));function Ut(e){return function(t,n){e:{if(Ie.length){var i=Ie.pop();i.setOptions(n),fe(i.h,t,n),t=i}else t=new Ce(t,n);try{var r=_t(e),a=Tt(new r.P,t,r);break e}finally{(r=t.h).i=null,r.m=!1,r.l=0,r.j=0,r.h=0,r.S=!1,t.l=-1,t.i=-1,100>Ie.length&&Ie.push(t)}a=void 0}return a}}function Mt(e){return function(){var t=new Re;Ft(this,t,Rt(e)),$e(t,t.h.end());for(var n=new Uint8Array(t.i),i=t.j,r=i.length,a=0,s=0;s<r;s++){var o=i[s];n.set(o,a),a+=o.length}return t.j=[n],n}}function Vt(e){dt.call(this,e)}m(Vt,dt);var Gt=[Vt,1,Ot,2,Dt,3,Bt,4,Bt];function Ht(e){dt.call(this,e,-1,jt)}Vt.prototype.l=Mt(Gt),m(Ht,dt),Ht.prototype.addClassification=function(e,t){return Ze(this,1,Vt,e,t),this};var jt=[1],Xt=Ut([Ht,1,Wt,Gt]);function Kt(e){dt.call(this,e)}m(Kt,dt);var Yt=[Kt,1,Dt,2,Dt,3,Dt,4,Dt,5,Dt];function qt(e){dt.call(this,e,-1,Qt)}Kt.prototype.l=Mt(Yt),m(qt,dt);var Qt=[1],Zt=Ut([qt,1,Wt,Yt]);function Jt(e){dt.call(this,e)}m(Jt,dt);var en=[Jt,1,Dt,2,Dt,3,Dt,4,Dt,5,Dt,6,Lt],tn=Ut(en);function nn(e,t,n){if(n=e.createShader(0===n?e.VERTEX_SHADER:e.FRAGMENT_SHADER),e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+e.getShaderInfoLog(n));return n}function rn(e){return qe(e,Vt,1).map((function(e){var t=Ge(e,1);return{index:null==t?0:t,qa:et(e,2),label:null!=Ge(e,3)?Je(Ge(e,3),""):void 0,displayName:null!=Ge(e,4)?Je(Ge(e,4),""):void 0}}))}function an(e){return{x:et(e,1),y:et(e,2),z:et(e,3),visibility:null!=Ke(e,4)?et(e,4):void 0}}function sn(e){return qe(Zt(e),Kt,1).map(an)}function on(e,t){this.i=e,this.h=t,this.m=0}function un(e,t,n){return function(e,t){var n=e.h;if(void 0===e.s){var i=nn(n,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),r=nn(n,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),a=n.createProgram();if(n.attachShader(a,i),n.attachShader(a,r),n.linkProgram(a),!n.getProgramParameter(a,n.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+n.getProgramInfoLog(a));i=e.s=a,n.useProgram(i),r=n.getUniformLocation(i,"sampler0"),e.l={O:n.getAttribLocation(i,"aVertex"),N:n.getAttribLocation(i,"aTex"),ya:r},e.v=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,e.v),n.enableVertexAttribArray(e.l.O),n.vertexAttribPointer(e.l.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),e.u=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,e.u),n.enableVertexAttribArray(e.l.N),n.vertexAttribPointer(e.l.N,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.uniform1i(r,0)}i=e.l,n.useProgram(e.s),n.canvas.width=t.width,n.canvas.height=t.height,n.viewport(0,0,t.width,t.height),n.activeTexture(n.TEXTURE0),e.i.bindTexture2d(t.glName),n.enableVertexAttribArray(i.O),n.bindBuffer(n.ARRAY_BUFFER,e.v),n.vertexAttribPointer(i.O,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(i.N),n.bindBuffer(n.ARRAY_BUFFER,e.u),n.vertexAttribPointer(i.N,2,n.FLOAT,!1,0,0),n.bindFramebuffer(n.DRAW_FRAMEBUFFER?n.DRAW_FRAMEBUFFER:n.FRAMEBUFFER,null),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.colorMask(!0,!0,!0,!0),n.drawArrays(n.TRIANGLE_FAN,0,4),n.disableVertexAttribArray(i.O),n.disableVertexAttribArray(i.N),n.bindBuffer(n.ARRAY_BUFFER,null),e.i.bindTexture2d(0)}(e,t),"function"==typeof e.h.canvas.transferToImageBitmap?Promise.resolve(e.h.canvas.transferToImageBitmap()):n?Promise.resolve(e.h.canvas):"function"==typeof createImageBitmap?createImageBitmap(e.h.canvas):(void 0===e.j&&(e.j=document.createElement("canvas")),new Promise((function(t){e.j.height=e.h.canvas.height,e.j.width=e.h.canvas.width,e.j.getContext("2d",{}).drawImage(e.h.canvas,0,0,e.h.canvas.width,e.h.canvas.height),t(e.j)})))}function dn(e){this.h=e}Jt.prototype.l=Mt(en);var ln=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function hn(e,t){return t+e}function pn(e,t){window[e]=t}function cn(e){if(this.h=e,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=e&&e.locateFile||hn,"object"==typeof window)var t=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else{if("undefined"==typeof location)throw Error("solutions can only be loaded on a web page or in a web worker");t=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/"}if(this.ha=t,e.options)for(var n=(t=o(Object.keys(e.options))).next();!n.done;n=t.next()){n=n.value;var i=e.options[n].default;void 0!==i&&(this.l[n]="function"==typeof i?i():i)}}function fn(e){var t,n,i,r,a,s,o,d,l,h,p;return S((function(c){switch(c.h){case 1:return e.ga?(t=void 0===e.h.files?[]:"function"==typeof e.h.files?e.h.files(e.l):e.h.files,x(c,S((function(e){switch(e.h){case 1:return e.s=2,x(e,WebAssembly.instantiate(ln),4);case 4:e.h=3,e.s=0;break;case 2:return e.s=0,e.l=null,e.return(!1);case 3:return e.return(!0)}})),2)):c.return();case 2:if(n=c.i,"object"==typeof window)return pn("createMediapipeSolutionsWasm",{locateFile:e.locateFile}),pn("createMediapipeSolutionsPackedAssets",{locateFile:e.locateFile}),s=t.filter((function(e){return void 0!==e.data})),o=t.filter((function(e){return void 0===e.data})),d=Promise.all(s.map((function(t){var n=mn(e,t.url);if(void 0!==t.path){var i=t.path;n=n.then((function(t){return e.overrideFile(i,t),Promise.resolve(t)}))}return n}))),l=Promise.all(o.map((function(t){return void 0===t.simd||t.simd&&n||!t.simd&&!n?function(e){var t=document.createElement("script");return t.setAttribute("src",e),t.setAttribute("crossorigin","anonymous"),new Promise((function(e){t.addEventListener("load",(function(){e()}),!1),t.addEventListener("error",(function(){e()}),!1),document.body.appendChild(t)}))}(e.locateFile(t.url,e.ha)):Promise.resolve()}))).then((function(){var t,n,i;return S((function(r){if(1==r.h)return t=window.createMediapipeSolutionsWasm,n=window.createMediapipeSolutionsPackedAssets,i=e,x(r,t(n),2);i.i=r.i,r.h=0}))})),h=S((function(t){return e.h.graph&&e.h.graph.url?t=x(t,mn(e,e.h.graph.url),0):(t.h=0,t=void 0),t})),x(c,Promise.all([l,d,h]),7);if("function"!=typeof importScripts)throw Error("solutions can only be loaded on a web page or in a web worker");return i=t.filter((function(e){return void 0===e.simd||e.simd&&n||!e.simd&&!n})).map((function(t){return e.locateFile(t.url,e.ha)})),importScripts.apply(null,u(i)),r=e,x(c,createMediapipeSolutionsWasm(Module),6);case 6:r.i=c.i,e.m=new OffscreenCanvas(1,1),e.i.canvas=e.m,a=e.i.GL.createContext(e.m,{antialias:!1,alpha:!1,va:"undefined"!=typeof WebGL2RenderingContext?2:1}),e.i.GL.makeContextCurrent(a),c.h=4;break;case 7:if(e.m=document.createElement("canvas"),!(p=e.m.getContext("webgl2",{}))&&!(p=e.m.getContext("webgl",{})))return alert("Failed to create WebGL canvas context when passing video frame."),c.return();e.K=p,e.i.canvas=e.m,e.i.createContext(e.m,!0,!0,{});case 4:e.j=new e.i.SolutionWasm,e.ga=!1,c.h=0}}))}function mn(e,t){var n,i;return S((function(r){return t in e.L?r.return(e.L[t]):(n=e.locateFile(t,""),i=fetch(n).then((function(e){return e.arrayBuffer()})),e.L[t]=i,r.return(i))}))}function gn(e,t,n){var i,r,a,s,u,d,l,h,p,c,f,m,g,y;return S((function(b){switch(b.h){case 1:if(!n)return b.return(t);for(i={},r=0,a=o(Object.keys(n)),s=a.next();!s.done;s=a.next())u=s.value,"string"!=typeof(d=n[u])&&"texture"===d.type&&void 0!==t[d.stream]&&++r;1<r&&(e.M=!1),l=o(Object.keys(n)),s=l.next();case 2:if(s.done){b.h=4;break}if(h=s.value,"string"==typeof(p=n[h]))return g=i,y=h,x(b,function(e,t,n){var i;return S((function(r){return"number"==typeof n||n instanceof Uint8Array||n instanceof e.i.Uint8BlobList?r.return(n):n instanceof e.i.Texture2dDataOut?((i=e.v[t])||(i=new on(e.i,e.K),e.v[t]=i),r.return(un(i,n,e.M))):r.return(void 0)}))}(e,h,t[p]),14);if(c=t[p.stream],"detection_list"===p.type){if(c){for(var w=c.getRectList(),v=c.getLandmarksList(),C=c.getClassificationsList(),k=[],I=0;I<w.size();++I){var R=tn(w.get(I)),$=void 0;$=void 0===$?0:$,R={la:{sa:et(R,1),ta:et(R,2),height:et(R,3),width:et(R,4),rotation:et(R,5,0),pa:Je(Ge(R,6),$)},ea:sn(v.get(I)),ba:rn(Xt(C.get(I)))},k.push(R)}w=k}else w=[];i[h]=w,b.h=7;break}if("proto_list"===p.type){if(c){for(w=Array(c.size()),v=0;v<c.size();v++)w[v]=c.get(v);c.delete()}else w=[];i[h]=w,b.h=7;break}if(void 0===c){b.h=3;break}if("float_list"===p.type){i[h]=c,b.h=7;break}if("proto"===p.type){i[h]=c,b.h=7;break}if("texture"!==p.type)throw Error("Unknown output config type: '"+p.type+"'");return(f=e.v[h])||(f=new on(e.i,e.K),e.v[h]=f),x(b,un(f,c,e.M),13);case 13:m=b.i,i[h]=m;case 7:p.transform&&i[h]&&(i[h]=p.transform(i[h])),b.h=3;break;case 14:g[y]=b.i;case 3:s=l.next(),b.h=2;break;case 4:return b.return(i)}}))}function yn(e,t){for(var n=t.name||"$",i=[].concat(u(t.wants)),r=new e.i.StringList,a=o(t.wants),s=a.next();!s.done;s=a.next())r.push_back(s.value);a=e.i.PacketListener.implement({onResults:function(r){for(var a={},s=0;s<t.wants.length;++s)a[i[s]]=r.get(s);var o=e.listeners[n];o&&(e.I=gn(e,a,t.outs).then((function(n){n=o(n);for(var r=0;r<t.wants.length;++r){var s=a[i[r]];"object"==typeof s&&s.hasOwnProperty&&s.hasOwnProperty("delete")&&s.delete()}n&&(e.I=n)})))}}),e.j.attachMultiListener(r,a),r.delete()}function bn(e){switch(void 0===e&&(e=0),e){case 1:return"pose_landmark_full.tflite";case 2:return"pose_landmark_heavy.tflite";default:return"pose_landmark_lite.tflite"}}function xn(e){var t=this;e=e||{},this.h=new cn({locateFile:e.locateFile,files:function(e){return[{url:"pose_solution_packed_assets_loader.js"},{simd:!1,url:"pose_solution_wasm_bin.js"},{simd:!0,url:"pose_solution_simd_wasm_bin.js"},{data:!0,url:bn(e.modelComplexity)}]},graph:{url:"pose_web.binarypb"},listeners:[{wants:["pose_landmarks","world_landmarks","segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},poseLandmarks:{type:"proto",stream:"pose_landmarks",transform:sn},poseWorldLandmarks:{type:"proto",stream:"world_landmarks",transform:sn},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"object"==typeof window&&void 0!==window.navigator&&("iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(e){var n,i,r;return S((function(a){return 1==a.h?(n=bn(e),i="third_party/mediapipe/modules/pose_landmark/"+n,x(a,mn(t.h,n),2)):(r=a.i,t.h.overrideFile(i,r),a.return(!0))}))}},smoothLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothLandmarks",fieldName:"bool_value"}},enableSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorEnableSegmentation",fieldName:"bool_value"}},smoothSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothSegmentation",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"poselandmarkgpu__posedetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"poselandmarkgpu__poselandmarkbyroigpu__tensorstoposelandmarksandsegmentation__ThresholdingCalculator",fieldName:"threshold"}}}})}(e=cn.prototype).close=function(){return this.j&&this.j.delete(),Promise.resolve()},e.reset=function(){var e=this;return S((function(t){e.j&&(e.j.reset(),e.s={},e.v={}),t.h=0}))},e.setOptions=function(e,t){var n=this;if(t=t||this.h.options){for(var i=[],r=[],a={},s=o(Object.keys(e)),u=s.next();!u.done;a={X:a.X,Y:a.Y},u=s.next())if(!((u=u.value)in this.l)||this.l[u]!==e[u]){this.l[u]=e[u];var d=t[u];void 0!==d&&(d.onChange&&(a.X=d.onChange,a.Y=e[u],i.push(function(e){return function(){return S((function(t){if(1==t.h)return x(t,e.X(e.Y),2);!0===t.i&&(n.u=!0),t.h=0}))}}(a))),d.graphOptionXref&&(u=Object.assign({},{calculatorName:"",calculatorIndex:0},d.graphOptionXref,{valueNumber:1===d.type?e[u]:0,valueBoolean:0===d.type&&e[u],valueString:2===d.type?e[u]:""}),r.push(u)))}0===i.length&&0===r.length||(this.u=!0,this.H=(void 0===this.H?[]:this.H).concat(r),this.F=(void 0===this.F?[]:this.F).concat(i))}},e.initialize=function(){var e=this;return S((function(t){return 1==t.h?x(t,fn(e),2):3!=t.h?x(t,function(e){var t,n,i,r,a,s,u,d;return S((function(l){if(1==l.h)return e.h.graph&&e.h.graph.url&&e.fa===e.h.graph.url?l.return():(e.u=!0,e.h.graph&&e.h.graph.url?(e.fa=e.h.graph.url,x(l,mn(e,e.h.graph.url),3)):void(l.h=2));for(2!=l.h&&(t=l.i,e.j.loadGraph(t)),n=o(Object.keys(e.D)),i=n.next();!i.done;i=n.next())r=i.value,e.j.overrideFile(r,e.D[r]);if(e.D={},e.h.listeners)for(a=o(e.h.listeners),s=a.next();!s.done;s=a.next())u=s.value,yn(e,u);d=e.l,e.l={},e.setOptions(d),l.h=0}))}(e),3):x(t,function(e){var t,n,i,r,a,s;return S((function(u){switch(u.h){case 1:if(!e.u)return u.return();if(!e.F){u.h=2;break}t=o(e.F),n=t.next();case 3:if(n.done){u.h=5;break}return x(u,(0,n.value)(),4);case 4:n=t.next(),u.h=3;break;case 5:e.F=void 0;case 2:if(e.H){for(i=new e.i.GraphOptionChangeRequestList,r=o(e.H),a=r.next();!a.done;a=r.next())s=a.value,i.push_back(s);e.j.changeOptions(i),i.delete(),e.H=void 0}e.u=!1,u.h=0}}))}(e),0)}))},e.overrideFile=function(e,t){this.j?this.j.overrideFile(e,t):this.D[e]=t},e.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},e.send=function(e,t){var n,i,r,a,s,u,d,l,h,p=this;return S((function(c){switch(c.h){case 1:return p.h.inputs?(n=1e3*(null==t?performance.now():t),x(c,p.I,2)):c.return();case 2:return x(c,p.initialize(),3);case 3:for(i=new p.i.PacketDataList,r=o(Object.keys(e)),a=r.next();!a.done;a=r.next())if(s=a.value,u=p.h.inputs[s]){e:{var f=e[s];switch(u.type){case"video":var m=p.s[u.stream];if(m||(m=new on(p.i,p.K),p.s[u.stream]=m),0===m.m&&(m.m=m.i.createTexture()),"undefined"!=typeof HTMLVideoElement&&f instanceof HTMLVideoElement)var g=f.videoWidth,y=f.videoHeight;else"undefined"!=typeof HTMLImageElement&&f instanceof HTMLImageElement?(g=f.naturalWidth,y=f.naturalHeight):(g=f.width,y=f.height);y={glName:m.m,width:g,height:y},(g=m.h).canvas.width=y.width,g.canvas.height=y.height,g.activeTexture(g.TEXTURE0),m.i.bindTexture2d(m.m),g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,f),m.i.bindTexture2d(0),m=y;break e;case"detections":for((m=p.s[u.stream])||(m=new dn(p.i),p.s[u.stream]=m),m.data||(m.data=new m.h.DetectionListData),m.data.reset(f.length),y=0;y<f.length;++y){g=f[y];var b=m.data,w=b.setBoundingBox,v=y,C=g.la,k=new Jt;if(Qe(k,1,C.sa),Qe(k,2,C.ta),Qe(k,3,C.height),Qe(k,4,C.width),Qe(k,5,C.rotation),He(k,6,C.pa),C=k.l(),w.call(b,v,C),g.ea)for(b=0;b<g.ea.length;++b){k=g.ea[b],v=(w=m.data).addNormalizedLandmark,C=y,k=Object.assign({},k,{visibility:k.visibility?k.visibility:0});var S=new Kt;Qe(S,1,k.x),Qe(S,2,k.y),Qe(S,3,k.z),k.visibility&&Qe(S,4,k.visibility),k=S.l(),v.call(w,C,k)}if(g.ba)for(b=0;b<g.ba.length;++b)v=(w=m.data).addClassification,C=y,k=g.ba[b],Qe(S=new Vt,2,k.qa),k.index&&He(S,1,k.index),k.label&&He(S,3,k.label),k.displayName&&He(S,4,k.displayName),k=S.l(),v.call(w,C,k)}m=m.data;break e;default:m={}}}switch(d=m,l=u.stream,u.type){case"video":i.pushTexture2d(Object.assign({},d,{stream:l,timestamp:n}));break;case"detections":(h=d).stream=l,h.timestamp=n,i.pushDetectionList(h);break;default:throw Error("Unknown input config type: '"+u.type+"'")}}return p.j.send(i),x(c,p.I,4);case 4:i.delete(),c.h=0}}))},e.onResults=function(e,t){this.listeners[t||"$"]=e},$("Solution",cn),$("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"}),(e=xn.prototype).reset=function(){this.h.reset()},e.close=function(){return this.h.close(),Promise.resolve()},e.onResults=function(e){this.h.onResults(e)},e.initialize=function(){var e=this;return S((function(t){return x(t,e.h.initialize(),0)}))},e.send=function(e,t){var n=this;return S((function(i){return x(i,n.h.send(e,t),0)}))},e.setOptions=function(e){this.h.setOptions(e)},$("Pose",xn),$("POSE_CONNECTIONS",[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]]),$("POSE_LANDMARKS",{NOSE:0,LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,LEFT_EAR:7,RIGHT_EAR:8,LEFT_RIGHT:9,RIGHT_LEFT:10,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32}),$("POSE_LANDMARKS_LEFT",{LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,LEFT_EAR:7,LEFT_RIGHT:9,LEFT_SHOULDER:11,LEFT_ELBOW:13,LEFT_WRIST:15,LEFT_PINKY:17,LEFT_INDEX:19,LEFT_THUMB:21,LEFT_HIP:23,LEFT_KNEE:25,LEFT_ANKLE:27,LEFT_HEEL:29,LEFT_FOOT_INDEX:31}),$("POSE_LANDMARKS_RIGHT",{RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,RIGHT_EAR:8,RIGHT_LEFT:10,RIGHT_SHOULDER:12,RIGHT_ELBOW:14,RIGHT_WRIST:16,RIGHT_PINKY:18,RIGHT_INDEX:20,RIGHT_THUMB:22,RIGHT_HIP:24,RIGHT_KNEE:26,RIGHT_ANKLE:28,RIGHT_HEEL:30,RIGHT_FOOT_INDEX:32}),$("POSE_LANDMARKS_NEUTRAL",{NOSE:0}),$("VERSION","0.5.1675469404")}).call(this)},7511:(e,t,n)=>{"use strict";n.d(t,{l:()=>W,w:()=>i});var i={};n.r(i),n.d(i,{GPUBytesPerElement:()=>E,MatMulProgramType:()=>O,assertNotComplex:()=>L,computeDispatch:()=>N,computeWorkPerThreadForConv2d:()=>T,computeWorkgroupInfoForMatMul:()=>z,computeWorkgroupSizeForConv2d:()=>_,flatDispatchLayout:()=>F,isWebGPUSupported:()=>D,tilesFitEvenlyIntoShape:()=>P});var r=n(86748);
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
const a=(0,r.env)();a.registerFlag("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE",(()=>15)),a.registerFlag("WEBGPU_CPU_FORWARD",(()=>!0)),a.registerFlag("WEBGPU_MATMUL_PROGRAM_TYPE",(()=>-1)),a.registerFlag("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE",(()=>!0)),a.registerFlag("WEBGPU_USE_LOW_POWER_GPU",(()=>!1)),a.registerFlag("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD",(()=>1e3)),a.registerFlag("WEBGPU_USE_PROFILE_TOOL",(()=>!1)),a.registerFlag("WEBGPU_IMPORT_EXTERNAL_TEXTURE",(()=>!0)),a.registerFlag("WEBGPU_USE_NAIVE_CONV2D_DEBUG",(()=>!1)),a.registerFlag("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL",(()=>-1)),a.registerFlag("WEBGPU_CONV_SEPARATE_IM2COL_SHADER",(()=>!1)),a.registerFlag("WEBGPU_PRINT_SHADER",(()=>"")),a.registerFlag("WEBGPU_ENGINE_COMPILE_ONLY",(()=>!1));
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
class s{constructor(e){e&&(this.vendor=e.vendor,this.architecture=e.architecture,this.intelGPUGeneration=this.getIntelGPUGeneration())}getIntelGPUGeneration(){if(this.isIntel()){if(this.architecture.startsWith("gen"))return Number(this.architecture.match(/\d+/));if(this.architecture.startsWith("xe"))return 12}return 0}isIntel(){return"intel"===this.vendor}}
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
class o{constructor(e){this.device=e,this.numUsedBuffers=0,this.numFreeBuffers=0,this.freeBuffers=new Map,this.usedBuffers=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireBuffer(e,t,n=!1,i=!0){let r;const a=u(e,t);return i?(this.freeBuffers.has(a)||this.freeBuffers.set(a,[]),this.freeBuffers.get(a).length>0?(r=this.freeBuffers.get(a).pop(),this.numFreeBuffers--):(r=this.device.createBuffer({size:e,usage:t,mappedAtCreation:n}),this.numBytesAllocated+=e)):(r=this.device.createBuffer({size:e,usage:t,mappedAtCreation:n}),this.numBytesAllocated+=e),this.usedBuffers.has(a)||this.usedBuffers.set(a,[]),this.usedBuffers.get(a).push(r),this.numUsedBuffers++,this.numBytesUsed+=e,r}releaseBuffer(e,t=!0){if(0===this.freeBuffers.size)return;const n=e.size,i=u(n,e.usage),r=this.usedBuffers.get(i),a=r.indexOf(e);if(a<0)throw new Error("Cannot find the buffer in buffer manager");r[a]=r[r.length-1],r.pop(),this.numUsedBuffers--,this.numBytesUsed-=n,t?(this.freeBuffers.get(i).push(e),this.numFreeBuffers++):(e.destroy(),this.numBytesAllocated-=n)}getNumUsedBuffers(){return this.numUsedBuffers}getNumFreeBuffers(){return this.numFreeBuffers}dispose(){this.freeBuffers.forEach(((e,t)=>{e.forEach((e=>{e.destroy()}))})),this.usedBuffers.forEach(((e,t)=>{e.forEach((e=>{e.destroy()}))})),this.freeBuffers=new Map,this.usedBuffers=new Map,this.numUsedBuffers=0,this.numFreeBuffers=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function u(e,t){return`${e}_${t}`}
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
class d{constructor(e){this.device=e,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures=new Map,this.usedTextures=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireTexture(e,t,n,i){const r=e*t*h(n),a=l(e,t,n,i);if(this.freeTextures.has(a)||this.freeTextures.set(a,[]),this.usedTextures.has(a)||this.usedTextures.set(a,[]),this.numBytesUsed+=r,this.numUsedTextures++,this.freeTextures.get(a).length>0){this.numFreeTextures--;const e=this.freeTextures.get(a).shift();return this.usedTextures.get(a).push(e),e}this.numBytesAllocated+=r;const s=this.device.createTexture({size:[e,t],format:n,usage:i});return this.usedTextures.get(a).push(s),s}releaseTexture(e){if(0===this.freeTextures.size)return;const t=e.width,n=e.height,i=e.format,r=l(t,n,i,e.usage);this.freeTextures.has(r)||this.freeTextures.set(r,[]),this.freeTextures.get(r).push(e),this.numFreeTextures++,this.numUsedTextures--;const a=this.usedTextures.get(r),s=a.indexOf(e);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(s,1);const o=t*n*h(i);this.numBytesUsed-=o}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){this.freeTextures.forEach(((e,t)=>{e.forEach((e=>{e.destroy()}))})),this.usedTextures.forEach(((e,t)=>{e.forEach((e=>{e.destroy()}))})),this.freeTextures=new Map,this.usedTextures=new Map,this.numUsedTextures=0,this.numFreeTextures=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function l(e,t,n,i){return`${e}_${t}_${n}_${i}`}function h(e){if("rgba8unorm"===e)return 16;throw new Error(`${e} is not supported!`)}
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
function p(e,t){if(Math.max(...e)>5)throw new Error("Cannot symbolically compute strides for rank > 6 tensor.");const n=e.length,i=e.map((e=>`${t}.${"xyzwuv"[e]}`)),r=new Array(n-1);r[n-2]=i[n-1];for(let e=n-3;e>=0;--e)r[e]=`(${r[e+1]} * ${i[e+1]})`;return r}const c=(e,t,n)=>"int32"===n?`atomicAdd(${e}, bitcast<i32>(${t}));`:`\n          {\n            var oldValue = 0;\n            loop {\n              let newValueF32 = bitcast<f32>(oldValue) + (${t});\n              let newValue = bitcast<i32>(newValueF32);\n              let res = atomicCompareExchangeWeak(${e}, oldValue, newValue);\n              if res.exchanged {\n                break;\n              }\n              oldValue = res.old_value;\n            }\n          }`;
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
var f;!function(e){e[e.FROM_PIXELS=0]="FROM_PIXELS",e[e.DRAW=1]="DRAW"}(f||(f={}));const m=(e,t,n,i,a)=>{const s=function(e,t,n){const i=[],a=n.workgroupSize[0]*n.workgroupSize[1]*n.workgroupSize[2];if(n.outputComponent=n.outputComponent?n.outputComponent:1,i.push(`\n\n      var<private> localId: vec3<u32>;\n      var<private> localIndex: u32;\n      var<private> globalId: vec3<u32>;\n      var<private> numWorkgroups: vec3<u32>;\n      var<private> workgroupId: vec3<u32>;\n\n      // Only used when the y/z dimension of workgroup size is 1.\n      fn getGlobalIndex() -> i32 {\n        ${I(n)?"  return i32(globalId.x);":`  return i32((workgroupId.z * numWorkgroups.x * numWorkgroups.y +\n                workgroupId.y * numWorkgroups.x + workgroupId.x) * ${a}u +\n                localIndex);\n        `}\n      }\n    `),null!=n.pixelsOpType){const r=n.pixelsOpType===f.FROM_PIXELS?`@group(0) @binding(0) var<storage, read_write> result: array<${R(t.dtype,n.outputComponent)}>;`:`@group(0) @binding(1) var<storage, read> inBuf : array<${R(e[0].dtype,n.outputComponent)}>;`,a=3===t.shape.length?"vec2<i32>":"i32";i.push(`\n        struct Uniform {\n          outShapeStrides : ${a},\n          size            : i32,\n          numChannels     : i32,\n          alpha           : f32,\n        };\n\n        ${r}\n        @group(0) @binding(2) var<uniform> uniforms: Uniform;\n      `);const s=$(n);return[v,i.join("\n"),k(t.shape),n.getUserCode(),w(s,n)].join("\n")}let s,o,u="struct Uniforms { NAN : f32, INFINITY : f32, ";n.variableNames.forEach(((t,n)=>{const i=y(e[n].shape.length);u+=`${t.charAt(0).toLowerCase()+t.slice(1)}Shape : ${i}, `,s=e[n].shape.length-1,o=y(s),u+=`${t.charAt(0).toLowerCase()+t.slice(1)}ShapeStrides: ${o}, `}));const d=y(t.shape.length);u+=`outShape : ${d}, `,s=t.shape.length-1,o=y(s),u+=`\n         outShapeStrides: ${o}, `,n.size&&(u+="size : i32, ");n.uniforms&&(u+=n.uniforms);u+="};",u=function(e){const t=/(\w+)\s*:\s*vec(5|6)/g;e=e.replace(t,(e=>"@align(16) "+e));const n=/vec(5|6)\s*,\s*(\w+)/g;return e=e.replace(n,((e,t,n)=>`vec${t}, @align(16) ${n}`))}(u),i.push(u),n.atomic?i.push("\n      @group(0) @binding(0) var<storage, read_write> result: array<atomic<i32>>;\n    "):i.push(`\n      @group(0) @binding(0) var<storage, read_write> result: array<${R(t.dtype,n.outputComponent)}>;\n    `);n.variableNames.forEach(((t,r)=>{i.push(`\n      @group(0) @binding(${1+r}) var<storage, read> ${t}: array<${n.variableComponents?R(e[r].dtype,n.variableComponents[r]):R(e[r].dtype,n.outputComponent)}>;\n        `)})),""!==u&&i.push(`\n      @group(0) @binding(${1+n.variableNames.length}) var<uniform> uniforms: Uniforms;\n      `);const l=function(e,t){const{x:n,y:i=[],z:r=[]}=t,a=e.length,s=n.length+i.length+r.length;if(s!==a)return"";if(n.length===a){return`fn getOutputCoords() -> ${y(a)}{\n    let globalIndex = getGlobalIndex();\n    return getCoordsFromIndex(globalIndex);\n  }\n  `}let o="";const u=[n,i,r];for(let e=0;e<u.length;e++){const t=u[e];if(0!==t.length)if(1===t.length)o+=`let d${t[0]} = i32(globalId[${e}]);`;else{const n=p(t,"uniforms.outShape");o+=`var index${e} = i32(globalId[${e}]);`;for(let i=0;i<n.length;i++)o+=`let d${t[i]} = index${e} / ${n[i]};`,i===n.length-1?o+=`let d${t[i+1]} = index${e} - d${t[i]} * ${n[i]};`:o+=`index${e} = index${e} - d${t[i]} * ${n[i]};`}}const d=[];for(let e=0;e<s;e++)d.push(`d${e}`);const l=y(s);let h=`fn getOutputCoords() -> ${l} {\n  ${o}\n`;0===d.length?h+=`return ${l}(0); }`:h+=`return ${l}(${d.join(",")}); }`;return h}(t.shape,n.dispatchLayout),h=[v,i.join("\n")+C,k(t.shape),l,S(t.shape.length)];n.atomic||h.push(function(e,t,n){const i=e.length,r=R(t,n);let a=`fn setOutputAtIndex(flatIndex : i32, value : ${g(n)}) {\n      result[flatIndex] = ${r}(value);\n    }\n\n    fn setOutputAtIndexI32(flatIndex : i32, value : ${g(n,"i32")}) {\n      result[flatIndex] = ${r}(value);\n    }\n    `;if(i>=2){const e=["d0","d1","d2","d3","d4","d5"].slice(0,i),t=y(i);a+=`\n      fn setOutputAtCoords(${e.map((e=>`${e} : i32`)).join(", ")}, value : ${g(n)}) {\n        let flatIndex = getOutputIndexFromCoords(${t}(${e.join(", ")}));\n        setOutputAtIndex(flatIndex${1===n?"":` / ${n}`}, value);\n      }\n      fn setOutputAtCoordsI32(${e.map((e=>`${e} : i32`)).join(", ")}, value : ${g(n,"i32")}) {\n        let flatIndex = getOutputIndexFromCoords(${t}(${e.join(", ")}));\n        setOutputAtIndexI32(flatIndex${1===n?"":` / ${n}`}, value);\n      }\n    `}return a}(t.shape,t.dtype,n.outputComponent));n.variableNames.forEach(((t,n)=>{h.push(`${k(e[n].shape,t)}`)}));const c=e.map(((e,i)=>function(e,t,n,i){let a=function(e,t){const n=e.name,i=e.shape.length,r=y(i),a="get"+n.charAt(0).toUpperCase()+n.slice(1),s=["d0","d1","d2","d3","d4","d5"].slice(0,i),o=s.map((e=>`${e} : i32`)).join(", ");if(i<1)return`\n      fn ${a}() -> ${g(t)} {\n        return ${g(t)}(${n}[0]);\n      }\n    `;const u=`uniforms.${n.charAt(0).toLowerCase()+n.slice(1)}Shape`;let d=`${i}D`;0===i&&(d="1D");return`\n    fn ${a}(${o}) -> ${g(t)} {\n      return ${g(t)}(${n}[getIndexFromCoords${d}(${r}(${s.join(",")}),\n        ${u})${1===t?"":` / ${t}`}]);\n    }\n   `}(e,n);const s=e.shape;s.length<=t.length&&(a+=function(e,t,n,i){const a=e.name,s=a.charAt(0).toUpperCase()+a.slice(1),o="get"+s+"ByOutput",u=e.shape.length,d=t.length,l=y(d);if(r.util.arraysEqual(e.shape,t)&&i)return`\n    fn ${o}Index(globalIndex : i32) -> ${g(n)} {\n      return ${g(n)}(${a}[globalIndex]);\n    }\n\n    fn ${o}Coords(coords : ${l}) -> ${g(n)} {\n      return ${g(n)}(${a}[${d>1?"getOutputIndexFromCoords(coords)":"coords"}${1===n?"":` / ${n}`}]);\n    }\n    `;const h=r.backend_util.getBroadcastDims(e.shape,t),p=d-u;let c="";if(0===u)return`\n    fn ${o}Index(globalIndex : i32) -> ${g(n)}{\n      return get${s}();\n    }\n\n    fn ${o}Coords(coords : ${l}) -> ${g(n)}{\n      return get${s}();\n    }\n  `;c=d<2&&h.length>=1?"coords = 0;":h.map((e=>`coords.${b(e+p)} = 0;`)).join("\n");let f="";if(d<2&&u>0)f="coords";else if(d>1){const t=y(u),n=e.shape.map(((e,t)=>`coords.${b(t+p)}`)).join(", ");f=`${t}(${n})`}else f="coords";const m=`uniforms.${a.charAt(0).toLowerCase()+a.slice(1)}Shape`,x=`${u}D`;return`\n  fn ${o}Index(globalIndex : i32) -> ${g(n)} {\n    var coords = getCoordsFromIndex(globalIndex);\n    ${c}\n    return ${g(n)}(${a}[getIndexFromCoords${x}(${f}, ${m})${1===n?"":` / ${n}`}]);\n  }\n\n  fn ${o}Coords(coordsIn : ${l}) -> ${g(n)} {\n    var coords = coordsIn;\n    ${c}\n    return ${g(n)}(${a}[getIndexFromCoords${x}(${f}, ${m})${1===n?"":` / ${n}`}]);\n  }\n`}(e,t,n,i));return a}(e,t.shape,n.variableComponents?n.variableComponents[i]:n.outputComponent,n.dispatchLayout.x.length===t.shape.length))).join("\n");h.push(c),h.push(n.getUserCode());const m=$(n);h.push(w(m,n));const x=h.join("\n");return x}(n,{dtype:i.dtype,shape:i.shape},t),o=e.createShaderModule({code:s,label:t.constructor.name});let u=(0,r.env)().get("WEBGPU_PRINT_SHADER");if(""!==u){u=u.toLowerCase();const e=u.split(",");("all"===u||e.some((e=>t.shaderKey.toLowerCase().includes(e))))&&(console.group(t.shaderKey),console.debug(s),console.groupEnd())}return a?e.createComputePipelineAsync({compute:{module:o,entryPoint:"_start"},label:t.constructor.name,layout:"auto"}):e.createComputePipeline({compute:{module:o,entryPoint:"_start"},label:t.constructor.name,layout:"auto"})},g=(e,t="f32")=>{switch(e){case 1:return`${t}`;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component ${t} is not supported.`)}};function y(e){if(e<=1)return"i32";if(2===e)return"vec2<i32>";if(3===e)return"vec3<i32>";if(4===e)return"vec4<i32>";if(5===e)return"vec5";if(6===e)return"vec6";throw Error(`GPU for rank ${e} is not yet supported`)}function b(e){if(0===e)return"x";if(1===e)return"y";if(2===e)return"z";if(3===e)return"w";if(4===e)return"u";if(5===e)return"v";throw Error(`Index ${e} is not yet supported`)}function x(...e){let t;switch(e.length){case 0:t="\n        fn main()\n      ";break;case 1:t=`\n        fn main(${e[0]} : i32)\n      `;break;default:throw Error("Unreachable")}return t}function w(e,t){let n;return n=`\n     ${function(e){return`\n  @compute @workgroup_size(${e.workgroupSize[0]}, ${e.workgroupSize[1]}, ${e.workgroupSize[2]})\n`}(t)}\n      fn _start(@builtin(local_invocation_id) LocalId : vec3<u32>,\n                @builtin(global_invocation_id) GlobalId : vec3<u32>,\n                @builtin(local_invocation_index) LocalIndex: u32,\n                @builtin(workgroup_id) WorkgroupId : vec3<u32>,\n                @builtin(num_workgroups) NumWorkgroups : vec3<u32>) {\n        localId = LocalId;\n        localIndex = LocalIndex;\n        globalId = GlobalId;\n        numWorkgroups = NumWorkgroups;\n        workgroupId = WorkgroupId;\n        ${e?"main(getGlobalIndex());":"main();"};\n      }\n    `,n}const v="\n  struct vec5 {x: i32, y: i32, z: i32, w: i32, u: i32};\n  struct vec6 {x: i32, y: i32, z: i32, w: i32, u: i32, v: i32};\n\n  // Checks whether coordinates lie within the bounds of the shape.\n  fn coordsInBounds2D(coord : vec2<i32>, shape : vec2<i32>) -> bool {\n    return all(coord >= vec2<i32>(0)) && all(coord < shape);\n  }\n  fn coordsInBounds3D(coord : vec3<i32>, shape : vec3<i32>) -> bool {\n    return all(coord >= vec3<i32>(0)) && all(coord < shape);\n  }\n  fn coordsInBounds4D(coord : vec4<i32>, shape : vec4<i32>) -> bool {\n    return all(coord >= vec4<i32>(0)) && all(coord < shape);\n  }\n\n  fn getIndexFromCoords1D(coord : i32, shape : i32) -> i32 {\n    return coord;\n  }\n  fn getIndexFromCoords2D(coords : vec2<i32>, shape : vec2<i32>) -> i32 {\n    return dot(coords, vec2<i32>(shape.y, 1));\n  }\n  fn getIndexFromCoords3D(coords : vec3<i32>, shape : vec3<i32>) -> i32 {\n    return dot(coords, vec3<i32>(shape.y * shape.z, shape.z, 1));\n  }\n  fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {\n    return dot(coords, vec4<i32>(\n        shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));\n  }\n  fn getIndexFromCoords5D(coords : vec5, shape : vec5) -> i32 {\n    let shapeStrides: vec5 = vec5(shape.y * shape.z * shape.w * shape.u, shape.z * shape.w * shape.u, shape.w * shape.u, shape.u, 1);\n    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u;\n  }\n  fn getIndexFromCoords6D(coords : vec6, shape : vec6) -> i32 {\n    let shapeStrides: vec6 = vec6(shape.y * shape.z * shape.w * shape.u * shape.v, shape.z * shape.w * shape.u * shape.v, shape.w * shape.u * shape.v, shape.u * shape.v, shape.v, 1);\n    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u + coords.v*shapeStrides.v;\n  }\n\n  // NaN defination in IEEE 754-1985 is :\n  //   - sign = either 0 or 1.\n  //   - biased exponent = all 1 bits.\n  //   - fraction = anything except all 0 bits (since all 0 bits represents infinity).\n  // https://en.wikipedia.org/wiki/IEEE_754-1985#Representation_of_non-numbers\n  fn isnan(val: f32) -> bool {\n    let floatToUint: u32 = bitcast<u32>(val);\n    return (floatToUint & 0x7fffffffu) > 0x7f800000u;\n  }\n  fn isnanVec4(val : vec4<f32>) -> vec4<bool> {\n    let floatToUint: vec4<u32> = bitcast<vec4<u32>>(val);\n    return (floatToUint & vec4<u32>(0x7fffffffu)) > vec4<u32>(0x7f800000u);\n  }\n",C="\n  fn isinf(val: f32) -> bool {\n    return abs(val) == uniforms.INFINITY;\n  }\n";function k(e,t=""){const n=e.length,i=""!==t?`get${t.charAt(0).toUpperCase()+t.slice(1)}CoordsFromIndex`:"getCoordsFromIndex",a=""!==t?`${t.charAt(0).toLowerCase()+t.slice(1)}ShapeStrides`:"outShapeStrides";if(n<=1)return`fn ${i}(index : i32) -> i32 { return index; }`;const s=r.util.computeStrides(e),o=y(n),u=[];for(let e=0;e<n;e++)u.push(`d${e}`);if(1===s.length)return`    fn ${i}(index : i32) -> vec2<i32> {\n      let d0 = index / uniforms.${a}; let d1 = index - d0 * uniforms.${a};\n      return vec2<i32>(d0, d1);\n    }`;let d;return d="var index2 = index;"+s.map(((e,t)=>`${`let ${u[t]} = index2 / uniforms.${a}.${b(t)}`}; ${t===s.length-1?`let ${u[t+1]} = index2 - ${u[t]} * uniforms.${a}.${b(t)}`:`index2 = index2 - ${u[t]} * uniforms.${a}.${b(t)}`};`)).join(""),`\n    fn ${i}(index : i32) -> ${o} {\n      ${d}\n      return ${o}(${u.join(",")});\n    }\n  `}function S(e){let t="";switch(e){case 0:case 1:t+="\n        fn getOutputIndexFromCoords(coords : i32) -> i32 {\n          return coords;\n        }\n        ";break;case 2:t+="\n        fn getOutputIndexFromCoords(coords : vec2<i32>) -> i32 {\n          return dot(coords, vec2<i32>(uniforms.outShapeStrides, 1));\n        }\n        ";break;case 3:t+="\n        fn getOutputIndexFromCoords(coords : vec3<i32>) -> i32 {\n          return dot(coords, vec3<i32>(uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, 1));\n        }\n        ";break;case 4:t+="\n        fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {\n          return dot(coords, vec4<i32>(\n            uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, uniforms.outShapeStrides.z, 1));\n        }\n        ";break;case 5:t+="\n        fn getOutputIndexFromCoords(coords : vec5) -> i32 {\n          return coords.x * uniforms.outShapeStrides.x +\n              coords.y * uniforms.outShapeStrides.y +\n              coords.z * uniforms.outShapeStrides.z +\n              coords.w * uniforms.outShapeStrides.w +\n              coords.u;\n        }\n        ";break;case 6:t+="\n        fn getOutputIndexFromCoords(coords : vec6) -> i32 {\n          return coords.x * uniforms.outShapeStrides.x +\n              coords.y * uniforms.outShapeStrides.y +\n              coords.z * uniforms.outShapeStrides.z +\n              coords.w * uniforms.outShapeStrides.w +\n              coords.u * uniforms.outShapeStrides.u +\n              coords.v;\n        }\n        ";break;default:r.util.assert(!1,(()=>`Unsupported ${e}D shape`))}return t}function I(e){return 1===e.dispatch[1]&&1===e.dispatch[2]}function R(e,t=1){if("float32"===e)return g(t,"f32");if("int32"===e||"bool"===e)return g(t,"i32");throw new Error(`type ${e} is not supported.`)}function $(e){return(!e.dispatchLayout.hasOwnProperty("y")||0===e.dispatchLayout.y.length)&&(!e.dispatchLayout.hasOwnProperty("z")||0===e.dispatchLayout.z.length)}
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
const A=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t};function P(e,t){if(e.length!==t.length)throw new Error(`Cannot compute whether rank ${e.length} tiles fit evenly into rank ${t.length} shape - ranks must match.`);return t.every(((t,n)=>t%e[n]==0))}function N(e,t,n=[1,1,1],i=[1,1,1]){const[r,a,s]=[Math.ceil(A(e.x.map((e=>t[e])))/(n[0]*i[0])),e.y?Math.ceil(A(e.y.map((e=>t[e])))/(n[1]*i[1])):1,e.z?Math.ceil(A(e.z.map((e=>t[e])))/(n[2]*i[2])):1];return[r,a,s]}function z(e,t,n,i=!1){const r=[8,8,1],a=[4,4,1];return i||(e<=8&&(a[1]=1),t<=16&&n<=16&&(r[0]=4)),{workgroupSize:r,elementsPerThread:a}}function _(e,t,n=!1){if(n)return[8,8,1];const i=A(e.x.map((e=>t[e]))),r=A(e.y.map((e=>t[e])));return i<=4?[4,16,1]:r<=4?[16,4,1]:[16,16,1]}function T(e,t,n=!1){if(n)return[4,4,1];const i=A(e.x.map((e=>t[e]))),r=A(e.y.map((e=>t[e])));return i<=4?[1,2,1]:r<=4?[2,1,1]:[2,2,1]}function F(e){return{x:e.map(((e,t)=>t))}}function E(e){if("float32"===e||"int32"===e||"bool"===e||"string"===e)return 4;if("complex64"===e)return 8;throw new Error(`Unknown dtype ${e}`)}function D(){return!("undefined"==typeof globalThis||!globalThis.navigator||!globalThis.navigator.gpu)}function L(e,t){Array.isArray(e)||(e=[e]),e.forEach((e=>{null!=e&&r.util.assert("complex64"!==e.dtype,(()=>`${t} does not support complex64 tensors in the WebGPU backend.`))}))}var O;!function(e){e[e.MatMulReduceProgram=0]="MatMulReduceProgram",e[e.MatMulSplitKProgram=1]="MatMulSplitKProgram",e[e.MatMulSmallOutputSizeProgram=2]="MatMulSmallOutputSizeProgram",e[e.MatMulPackedProgram=3]="MatMulPackedProgram",e[e.MatMulMax=4]="MatMulMax"}(O||(O={}));
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
const B=(0,r.env)().getNumber("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD");class W extends r.KernelBackend{nextDataId(){return W.nextDataId++}constructor(e,t){if(super(),this.commandQueueOwnedIds=new WeakSet,this.dispatchCountInPass=0,this.disposed=!1,this.downloadWaitMs=0,this.tensorDataPendingDisposal=[],this.queryResolveBuffer=null,this.querySet=null,this.querySetCount=2,this.stagingPendingDisposal=[],this.uniformPendingDisposal=[],this.uploadWaitMs=0,this.hasReadSyncWarned=!1,this.hasTimestampQueryWarned=!1,!D())throw new Error("WebGPU is not supported on this device");this.pipelineCache={},this.device=e,this.queue=e.queue,this.commandEncoder=null,this.computePassEncoder=null,this.adapterInfo=new s(t),this.supportTimestampQuery=this.device.features.has("timestamp-query"),this.thresholdToIncreaseWorkgroups=this.adapterInfo.intelGPUGeneration>=12?16:8,this.bufferManager=new o(this.device),this.textureManager=new d(this.device),this.tensorMap=new r.DataStorage(this,(0,r.engine)()),(0,r.env)().getBool("WEBGPU_USE_PROFILE_TOOL")&&(this.dummyCanvas=document.createElement("canvas"),this.dummyCanvas.width=1,this.dummyCanvas.height=1,this.dummyContext=this.dummyCanvas.getContext("webgpu"),this.dummyContext.configure({device:e,format:"bgra8unorm"}),document.body.appendChild(this.dummyCanvas))}floatPrecision(){return 32}disposeData(e,t=!1){if(!this.tensorMap.has(e))return!0;const n=this.tensorMap.get(e);return t?n.refCount=0:n.refCount--,!(n.refCount>0)&&(null!=n.complexTensorInfos&&(this.disposeData(n.complexTensorInfos.real.dataId),this.disposeData(n.complexTensorInfos.imag.dataId)),this.commandQueueOwnedIds.has(e)?(this.tensorDataPendingDisposal.push(e),!0):(this.releaseResource(e),this.tensorMap.delete(e),!0))}memory(){return{numBytesInGPU:this.bufferManager.numBytesUsed,numBytesAllocatedInGPU:this.bufferManager.numBytesAllocated,unreliable:!1}}releaseResource(e){const t=this.tensorMap.get(e);t&&t.resource&&(t.external||(t.resource instanceof GPUBuffer?this.bufferManager.releaseBuffer(t.resource):t.resource instanceof GPUTexture&&this.textureManager.releaseTexture(t.resource)),t.resource=null)}refCount(e){if(this.tensorMap.has(e)){return this.tensorMap.get(e).refCount}return 0}incRef(e){this.tensorMap.get(e).refCount++}decRef(e){if(this.tensorMap.has(e)){this.tensorMap.get(e).refCount--}}write(e,t,n){if("complex64"===n&&null!=e)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const i={id:this.nextDataId()};return this.tensorMap.set(i,{dtype:n,shape:t,values:e,refCount:1}),i}move(e,t,n,i,r){if("complex64"===i)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.tensorMap.set(e,{dtype:i,shape:n,values:t,refCount:r})}submitQueue(){this.queue.submit([this.commandEncoder.finish()]),this.commandEncoder=null,this.dispatchCountInPass=0,this.commandQueueOwnedIds=new WeakSet,this.tensorDataPendingDisposal.forEach((e=>{this.releaseResource(e),this.tensorMap.delete(e)})),this.uniformPendingDisposal.forEach((e=>this.bufferManager.releaseBuffer(e))),this.stagingPendingDisposal.forEach((e=>this.bufferManager.releaseBuffer(e,!1))),this.tensorDataPendingDisposal=[],this.uniformPendingDisposal=[],this.stagingPendingDisposal=[]}ensureCommandEncoderReady(){this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder())}endComputePassEncoder(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}async checkCompileCompletionAsync(){let e;try{e=await Promise.all(Object.values(this.pipelineCache))}catch(e){throw new Error(e.message)}Object.keys(this.pipelineCache).map(((t,n)=>{this.pipelineCache[t]=e[n]}))}async getBufferData(e){if((0,r.env)().getBool("WEBGPU_ENGINE_COMPILE_ONLY"))return console.warn("The data may be invalid since WEBGPU_ENGINE_COMPILE_ONLY is true, this can only be called when WEBGPU_ENGINE_COMPILE_ONLY is false"),null;const t=e.size,n=this.bufferManager.acquireBuffer(t,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(e,0,n,0,t),this.submitQueue(),await n.mapAsync(GPUMapMode.READ);const i=n.getMappedRange().slice(0);return n.unmap(),null!=n&&this.bufferManager.releaseBuffer(n),(0,r.env)().getBool("WEBGPU_USE_PROFILE_TOOL")&&(r.util.assert(void 0!==this.dummyContext,(()=>"Fail to get context for profiling tool")),this.dummyContext.getCurrentTexture()),i}convertAndCacheOnCPU(e,t){const n=this.tensorMap.get(e);return n.values=t,n.values}readSync(e){const t=this.tensorMap.get(e),{values:n,complexTensorInfos:i}=t;if(null!=n||"string"===t.dtype)return n;if("complex64"===t.dtype){const t=this.readSync(i.real.dataId),n=this.readSync(i.imag.dataId),a=r.util.convertBackendValuesAndArrayBuffer(r.backend_util.mergeRealAndImagArrays(t,n).buffer,"float32");return this.convertAndCacheOnCPU(e,a),a}this.hasReadSyncWarned||(this.hasReadSyncWarned=!0,console.warn("The performance of synchronously reading data from GPU to CPU is poor on the webgpu backend, please use asynchronous APIs instead."));const a=["opaque","premultiplied"],s=t.resource,o=s.size;r.util.assert(o%4==0,(()=>"Because there is 4 bytes for one pixel, buffer size must be multiple of 4."));const u=o/4,d=new ArrayBuffer(o),l=256,h=256,p=a.map((e=>new OffscreenCanvas(l,h))),c=new OffscreenCanvas(l,h);this.endComputePassEncoder(),p.map(((e,t)=>{const n=e.getContext("webgpu");return n.configure({device:this.device,format:"bgra8unorm",usage:GPUTextureUsage.COPY_DST,alphaMode:a[t]}),n.getCurrentTexture()})).map(((e,t)=>{const n=(n,i,r)=>{this.ensureCommandEncoderReady(),this.commandEncoder.copyBufferToTexture({buffer:s,bytesPerRow:1024,offset:r},{texture:e},{width:n,height:i}),this.submitQueue();const o=c.getContext("2d",{willReadFrequently:!0});o.clearRect(0,0,n,i),o.drawImage(p[t],0,0);const u=o.getImageData(0,0,n,i).data,l=a[t],h=new Uint8ClampedArray(d,r,n*i*4);for(let e=0;e<h.length;e+=4)if("premultiplied"===l)h[e+3]=u[e+3];else{const t=u[e];h[e]=u[e+2],h[e+1]=u[e+1],h[e+2]=t}},i=Math.floor(u/65536);let r=l,o=h,f=0;for(let e=0;e<i;e++)n(r,o,f),f+=262144;const m=u%65536;o=Math.floor(m/l),o>0&&(n(r,o,f),f+=1024*o),r=m%l,r>0&&n(r,1,f)}));const f=r.util.convertBackendValuesAndArrayBuffer(d,t.dtype);return this.convertAndCacheOnCPU(e,f),f}async read(e){if(!this.tensorMap.has(e))throw new Error(`Tensor ${e} was not registered!`);const t=this.tensorMap.get(e),{values:n}=t;if(null!=n)return n;let i;if("complex64"===t.dtype){const e=await Promise.all([this.read(t.complexTensorInfos.real.dataId),this.read(t.complexTensorInfos.imag.dataId)]),n=e[0],a=e[1];i=r.backend_util.mergeRealAndImagArrays(n,a)}else{const e=await this.getBufferData(t.resource);i=r.util.convertBackendValuesAndArrayBuffer(e,t.dtype)}return this.convertAndCacheOnCPU(e,i),i}copyBuffer(e){const t=e.size,n=e.usage,i=this.bufferManager.acquireBuffer(t,n);return this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(e,0,i,0,t),this.submitQueue(),i}createTensorFromGPUData(e,t,n){let i=e.buffer;if("complex64"===n)throw new Error("Cannot write to a complex64 dtype. ");const a={id:this.nextDataId()};this.tensorMap.set(a,{dtype:n,shape:t,values:null,refCount:1,external:e.zeroCopy});const s=this.tensorMap.get(a),o=E(s.dtype)*r.util.sizeFromShape(s.shape);if(e.buffer.size<o)throw new Error(`GPUBuffer size(${e.buffer.size}) is smaller than tensor size(${o})!`);if((e.buffer.usage&(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))!=(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))throw new Error("GPUBuffer.usage should include GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC!");return!0!==e.zeroCopy&&(i=this.copyBuffer(i)),s.resource=i,(0,r.engine)().makeTensorFromDataId(a,t,n,this)}readToGPU(e){const t=this.tensorMap.get(e),{values:n,dtype:i,shape:a,resource:s}=t;if("complex64"===i)throw new Error("Does not support reading buffer for complex64 dtype.");if(null==s)throw null!=n?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const o=s,u=o.size,d=o.usage,l=this.bufferManager.acquireBuffer(u,d);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(s,0,l,0,u),this.submitQueue();const h=this.makeTensorInfo(a,i),p=(0,r.engine)().makeTensorFromTensorInfo(h);return this.tensorMap.get(h.dataId).resource=l,{tensorRef:p,buffer:l}}bufferSync(e){const t=this.readSync(e.dataId);if("string"===e.dtype)try{const n=t.map((e=>r.util.decodeString(e)));return(0,r.buffer)(e.shape,e.dtype,n)}catch(e){throw new Error("Failed to decode encoded string bytes into utf-8")}return(0,r.buffer)(e.shape,e.dtype,t)}async time(e){this.supportTimestampQuery||this.hasTimestampQueryWarned||(console.warn("This device doesn't support timestamp-query extension. Start Chrome browser with flag --enable-dawn-features=allow_unsafe_apis to try it again. Otherwise, zero will be shown for the kernel time when profiling mode is enabled."),this.hasTimestampQueryWarned=!0);const t=this.activeTimers,n=[];let i=!1;null==this.programTimersStack?(this.programTimersStack=n,i=!0):this.activeTimers.push(n),this.activeTimers=n,e();const a=r.util.flatten(this.activeTimers.map((e=>e.query))).filter((e=>null!=e)),s=r.util.flatten(this.activeTimers.map((e=>e.name))).filter((e=>null!=e));this.activeTimers=t,i&&(this.programTimersStack=null);const o={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},u=await Promise.all(a);return o.kernelMs=r.util.sum(u),o.getExtraProfileInfo=()=>u.map(((e,t)=>({name:s[t],ms:e}))).map((e=>`${e.name}: ${e.ms}`)).join(", "),this.uploadWaitMs=0,this.downloadWaitMs=0,o}makeTensorInfo(e,t,n){"string"===t&&null!=n&&n.length>0&&r.util.isString(n[0])&&(n=n.map((e=>r.util.encodeString(e))));return{dataId:this.write(n,e,t),shape:e,dtype:t}}tensorToBinding(e){if(!e)return null;const t=this.tensorMap.get(e.dataId).resource;return t instanceof GPUBuffer?{buffer:t}:t instanceof GPUTexture?t.createView():t}uploadToGPU(e){const t=this.tensorMap.get(e);if(null!=t.resource)return;const n=E(t.dtype)*r.util.sizeFromShape(t.shape);let i;const a=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;if(t.values){if(i=this.bufferManager.acquireBuffer(n,a,!0),"unmapped"===i.mapState){const e=this.bufferManager.acquireBuffer(n,GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC,!0,!1),r=e.getMappedRange();"int32"===t.dtype||"bool"===t.dtype?new Int32Array(r).set(t.values):new Float32Array(r).set(t.values),e.unmap(),this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(e,0,i,0,n),this.stagingPendingDisposal.push(e)}else{const e=i.getMappedRange();"int32"===t.dtype||"bool"===t.dtype?new Int32Array(e).set(t.values):new Float32Array(e).set(t.values),i.unmap()}t.values=null}else i=this.bufferManager.acquireBuffer(n,a);t.resource=i}makeUniforms(e){let t=0,n=0;const i=[];let a=1;e.forEach((e=>{let s;switch(0===e.data.length&&(e.data=[1]),e.data.length){case 1:s=4;break;case 2:s=8;break;case 3:case 4:case 5:case 6:s=16;break;default:r.util.assert(!1,(()=>`Unsupported ${e.data.length}D shape`))}5!==n&&6!==n||(s=16),s>a&&(a=s),t=Math.ceil(t/s)*s,n=e.data.length,i.push(t),t+=4*e.data.length})),t=Math.ceil(t/a)*a;const s=new ArrayBuffer(t);e.forEach(((e,t)=>{const n=i[t];"int32"===e.type?new Int32Array(s,n,e.data.length).set(e.data):"uint32"===e.type?new Uint32Array(s,n,e.data.length).set(e.data):new Float32Array(s,n,e.data.length).set(e.data)}));const o=this.bufferManager.acquireBuffer(t,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);return this.queue.writeBuffer(o,0,s,0,t),this.uniformPendingDisposal.push(o),{offset:0,size:t,buffer:o}}runWebGPUProgram(e,t,n,i,a){if(a||(a=this.makeTensorInfo(e.outputShape,n)),0===r.util.sizeFromShape(a.shape))return this.tensorMap.get(a.dataId).values=r.util.getTypedArrayFromDType(a.dtype,0),a;this.uploadToGPU(a.dataId),e.dispatch=((e,t)=>{const n=e.limits.maxComputeWorkgroupsPerDimension,i=t.dispatchLayout,a=t.dispatch;if(a.every((e=>e<=n)))return a;r.util.assert(a[0]>n&&void 0===i.y&&void 0===i.z,(()=>"Dispatch size exceeds WebGPU limits in Y or Z dimension."));let s=Math.ceil(Math.sqrt(a[0]));return s>n?(s=Math.ceil(Math.cbrt(a[0])),r.util.assert(s<=n,(()=>"Total dispatch size exceeds WebGPU maximum.")),[s,s,s]):[s,s,1]})(this.device,e);const s=t.map(((t,n)=>{if("complex64"===t.dtype)throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");return this.uploadToGPU(t.dataId),{dtype:this.tensorMap.get(t.dataId).dtype,shape:t.shape,name:e.variableNames[n]}}));e.shaderKey=function(e,t,n){let i=e.shaderKey;if(null!=e.pixelsOpType)return i;const a=[],s=[];t.forEach((e=>{a.push(e.shape),s.push(e.dtype)})),a.push(n.shape),s.push(n.dtype);const o=t.map((e=>r.backend_util.getBroadcastDims(e.shape,n.shape))),u=t.map((e=>r.util.arraysEqual(e.shape,n.shape))).join("_"),d=o.map((e=>e.join("_"))).join(";"),l=I(e)?"flatDispatch":"";return i+="_"+(e.workgroupSize?e.workgroupSize.join(","):"")+a.map((e=>e.length)).join(",")+s.join(",")+e.variableNames.join(",")+d+u+l,i}(e,s,a);const o=(0,r.env)().getBool("WEBGPU_ENGINE_COMPILE_ONLY");return e.shaderKey in this.pipelineCache||(this.pipelineCache[e.shaderKey]=m(this.device,e,s,a,o)),e.pipeline=this.pipelineCache[e.shaderKey],o||this.recordAndSubmit(e,a,t,i),a}recordAndSubmit(e,t,n,i){if(e.pipeline instanceof Promise)throw new Error("Please call checkCompileCompletionAsync to ensure parallel compilation is done!");let a=[],s=[];const o="int32";if(null==e.pixelsOpType){a.push({type:"float32",data:[NaN]},{type:"float32",data:[1/0]}),s=n.concat(t).map((e=>e.shape));const e="int32";s.map((t=>{a.push({type:e,data:t});const n=r.util.computeStrides(t);a.push({type:e,data:n})}))}else{const e=r.util.computeStrides(t.shape);a.push({type:o,data:e})}if(e.size){const t=r.util.sizeFromShape(e.outputShape);a.push({type:o,data:[e.outputComponent?t/e.outputComponent:t]})}i&&(a=[...a,...i]);const u=[this.tensorToBinding(t),...n.map((e=>this.tensorToBinding(e))),this.makeUniforms(a)];n.forEach((e=>{this.commandQueueOwnedIds.add(e.dataId)})),this.commandQueueOwnedIds.add(t.dataId);const d=this.device.createBindGroup({layout:e.pipeline.getBindGroupLayout(0),entries:u.map(((e,t)=>({binding:t,resource:e})))}),l=null!=this.activeTimers;this.ensureCommandEncoderReady();const h={};l&&this.supportTimestampQuery?(this.endComputePassEncoder(),null==this.querySet&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.querySetCount})),h.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1},this.computePassEncoder=this.commandEncoder.beginComputePass(h)):this.computePassEncoder||(this.computePassEncoder=this.commandEncoder.beginComputePass(h)),this.computePassEncoder.setPipeline(e.pipeline),this.computePassEncoder.setBindGroup(0,d),this.computePassEncoder.dispatchWorkgroups(e.dispatch[0],e.dispatch[1],e.dispatch[2]),this.dispatchCountInPass++,(l||(0,r.env)().get("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE")<=this.dispatchCountInPass||e.pixelsOpType===f.DRAW)&&(this.endComputePassEncoder(),l?this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime()}):this.submitQueue())}async getQueryTime(){if(!this.supportTimestampQuery)return 0;null==this.queryResolveBuffer&&(this.queryResolveBuffer=this.bufferManager.acquireBuffer(8*this.querySetCount,GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST|GPUBufferUsage.QUERY_RESOLVE)),this.commandEncoder.resolveQuerySet(this.querySet,0,this.querySetCount,this.queryResolveBuffer,0);const e=this.bufferManager.acquireBuffer(8*this.querySetCount,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,8*this.querySetCount),this.submitQueue(),await e.mapAsync(GPUMapMode.READ);const t=new BigUint64Array(e.getMappedRange()),n=Number(t[1]-t[0])/1e6;return e.unmap(),this.bufferManager.releaseBuffer(e),n}shouldExecuteOnCPU(e,t=B){return(0,r.env)().getBool("WEBGPU_CPU_FORWARD")&&e.every((e=>null==this.tensorMap.get(e.dataId).resource&&r.util.sizeFromShape(e.shape)<t))}numDataIds(){return this.tensorMap.numDataIds()-this.tensorDataPendingDisposal.length}dispose(){this.disposed||(null!=this.querySet&&this.querySet.destroy(),this.bufferManager.dispose(),this.textureManager.dispose(),this.disposed=!0)}}
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
var U;W.nextDataId=0,
/**
 * @license
 * Copyright 2022 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
D()&&(0,r.registerBackend)("webgpu",(async()=>{const e={powerPreference:(0,r.env)().get("WEBGPU_USE_LOW_POWER_GPU")?"low-power":"high-performance"},t=await navigator.gpu.requestAdapter(e),n={},i=[];t.features.has("timestamp-query")&&i.push("timestamp-query"),t.features.has("bgra8unorm-storage")&&i.push(["bgra8unorm-storage"]),n.requiredFeatures=i;const a=t.limits;n.requiredLimits={maxComputeWorkgroupStorageSize:a.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:a.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:a.maxStorageBufferBindingSize,maxBufferSize:a.maxBufferSize,maxComputeWorkgroupSizeX:a.maxComputeWorkgroupSizeX,maxComputeInvocationsPerWorkgroup:a.maxComputeInvocationsPerWorkgroup};const s=await t.requestDevice(n),o=await t.requestAdapterInfo();return new W(s,o)}),3),function(e){e[e.ADD=0]="ADD",e[e.ATAN2=1]="ATAN2",e[e.COMPLEX_MULTIPLY_IMAG=2]="COMPLEX_MULTIPLY_IMAG",e[e.COMPLEX_MULTIPLY_REAL=3]="COMPLEX_MULTIPLY_REAL",e[e.DIV=4]="DIV",e[e.ELU_DER=5]="ELU_DER",e[e.EQUAL=6]="EQUAL",e[e.FLOOR_DIV=7]="FLOOR_DIV",e[e.GREATER=8]="GREATER",e[e.GREATER_EQUAL=9]="GREATER_EQUAL",e[e.LESS=10]="LESS",e[e.LESS_EQUAL=11]="LESS_EQUAL",e[e.LOGICAL_AND=12]="LOGICAL_AND",e[e.LOGICAL_OR=13]="LOGICAL_OR",e[e.MAX=14]="MAX",e[e.MIN=15]="MIN",e[e.MOD=16]="MOD",e[e.MUL=17]="MUL",e[e.NOT_EQUAL=18]="NOT_EQUAL",e[e.POW=19]="POW",e[e.PRELU=20]="PRELU",e[e.SQUARED_DIFFERENCE=21]="SQUARED_DIFFERENCE",e[e.SUB=22]="SUB"}(U||(U={}));const M="let resultTemp = a + b;",V="let resultTemp = atan2(a, b);",G="let resultTemp = areal * breal - aimag * bimag;",H="let resultTemp = areal * bimag + aimag * breal;",j="let resultTemp = a / b;",X="let resultTemp = select(a * (b + 1.0), a, b >= b - b);",K="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a == b);\n",Y="\n  let remainder =\n      select(a % b, round(a % b), (round(a) == a) & (round(b) == b));\n  let quotient = (a - remainder) / b;\n  let resultTemp =\n      round(select(quotient, quotient - 1, sign(remainder) == -sign(b)));\n",q="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a > b);\n",Q="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a >= b);\n",Z="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a < b);\n",J="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a <= b);\n",ee="return f32(a >= 1.0 && b >= 1.0);",te="return (vec4<f32>(a >= vec4<f32>(1.0)) *\n  vec4<f32>(b >= vec4<f32>(1.0)));",ne="return f32(a >= 1.0 || b >= 1.0);",ie="return min(vec4<f32>(a >= vec4<f32>(1.0)) +\n  vec4<f32>(b >= vec4<f32>(1.0)), vec4<f32>(1.0));",re="let resultTemp = max(a, b);",ae="let resultTemp = min(a, b);",se="\n  let isNaN = b == 0.;\n  var resultTemp = a % b;\n  resultTemp = select((resultTemp + b) % b, resultTemp,\n      (a < 0. && b < 0.) || (a >= 0. && b > 0.));\n",oe="\n  let isNaN = !vec4<bool>(b);\n  var resultTemp = vec4<f32>(a % b);\n  if (!((a[0] < 0. && b[0] < 0.) || (a[0] >= 0. && b[0] > 0.))) {\n    resultTemp[0] = (resultTemp[0] + b[0]) % b[0];\n  }\n  if (!((a[1] < 0. && b[1] < 0.) || (a[1] >= 0. && b[1] > 0.))) {\n    resultTemp[1] = (resultTemp[1] + b[1]) % b[1];\n  }\n  if (!((a[2] < 0. && b[2] < 0.) || (a[2] >= 0. && b[2] > 0.))) {\n    resultTemp[2] = (resultTemp[2] + b[2]) % b[2];\n  }\n  if (!((a[3] < 0. && b[3] < 0.) || (a[3] >= 0. && b[3] > 0.))) {\n    resultTemp[3] = (resultTemp[3] + b[3]) % b[3];\n  }\n",ue="let resultTemp = a * b;",de="\n  var resultTemp = f32(a != b);\n  let valueForNaN = 1.0;\n",le="\n  var resultTemp = vec4<f32>(a != b);\n  let valueForNaN = 1.0;\n",he="\n  let isNaN = a < 0.0 && floor(b) < b;\n  if (b == 0.0) {\n    return 1.0;\n  }\n  var resultTemp = select(sign(a) * pow(abs(a), b), pow(abs(a), b),\n      round(abs(b) % 2.0) != 1.0);\n",pe="\n  let isModRound1Bool = vec4<i32>(round(abs(b) % vec4<f32>(2.0))) == vec4<i32>(1);\n  let isModRound1 = vec4<f32>(isModRound1Bool);\n  let multiplier = sign(a) * isModRound1 + (vec4<f32>(1.0) - isModRound1);\n  var resultTemp = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  let isExpZero = b == vec4<f32>(0.0);\n  if (isExpZero.r) {\n    resultTemp.r = 1.0;\n  }\n  if (isExpZero.g) {\n    resultTemp.g = 1.0;\n  }\n  if (isExpZero.b) {\n    resultTemp.b = 1.0;\n  }\n  if (isExpZero.a) {\n    resultTemp.a = 1.0;\n  }\n  let isNaN = (a < vec4<f32>(0.0)) & (floor(b) < b);\n",ce="if (a < 0.0) { return b * a; }  return a;",fe="\n  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));\n  return (aLessThanZero * (b * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);\n",me="let resultTemp = (a - b) * (a - b);",ge="let resultTemp = a - b;";function ye(e,t){let n;do{switch(e){case U.ATAN2:n=V;break;case U.MAX:n=re;break;case U.MIN:n=ae;break;case U.MOD:n=t?oe:se;break;case U.NOT_EQUAL:n=t?le:de;break;case U.POW:n=t?pe:he;break;default:continue}let i,r,a;return t?(i="isnanVec4",r="vec4<f32>",a="vec4<bool>"):(i="isnan",r="f32",a="bool"),`\n      let aIsNaN = ${i}(a);\n      let aPostLegalization = select(a, ${r}(42), aIsNaN);\n      let bIsNaN = ${i}(b);\n      let bPostLegalization = select(b, ${r}(42), bIsNaN);\n      let isNaN = false;\n      let valueForNaN = uniforms.NAN;\n      {\n        let a = aPostLegalization;\n        let b = bPostLegalization;\n        ${n}\n        return select(\n            resultTemp, ${r}(valueForNaN),\n            ${a}(isNaN) | aIsNaN | bIsNaN);\n      }\n    `}while(0);switch(e){case U.ADD:n=M;break;case U.COMPLEX_MULTIPLY_IMAG:n=H;break;case U.COMPLEX_MULTIPLY_REAL:n=G;break;case U.DIV:n=j;break;case U.ELU_DER:n=X;break;case U.EQUAL:n=K;break;case U.FLOOR_DIV:n=Y;break;case U.GREATER:n=q;break;case U.GREATER_EQUAL:n=Q;break;case U.LESS:n=Z;break;case U.LESS_EQUAL:n=J;break;case U.LOGICAL_AND:return t?te:ee;case U.LOGICAL_OR:return t?ie:ne;case U.MUL:n=ue;break;case U.PRELU:return t?fe:ce;case U.SQUARED_DIFFERENCE:n=me;break;case U.SUB:n=ge}return`\n    ${n}\n    return resultTemp;\n  `}
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
var be;!function(e){e[e.ABS=0]="ABS",e[e.ACOS=1]="ACOS",e[e.ACOSH=2]="ACOSH",e[e.ASIN=3]="ASIN",e[e.ASINH=4]="ASINH",e[e.ATAN=5]="ATAN",e[e.ATANH=6]="ATANH",e[e.CEIL=7]="CEIL",e[e.COS=8]="COS",e[e.COSH=9]="COSH",e[e.ELU=10]="ELU",e[e.ERF=11]="ERF",e[e.EXP=12]="EXP",e[e.EXPM1=13]="EXPM1",e[e.FLOOR=14]="FLOOR",e[e.IS_FINITE=15]="IS_FINITE",e[e.IS_INF=16]="IS_INF",e[e.IS_NAN=17]="IS_NAN",e[e.LINEAR=18]="LINEAR",e[e.LOG=19]="LOG",e[e.LOG1P=20]="LOG1P",e[e.LOGICAL_NOT=21]="LOGICAL_NOT",e[e.NEG=22]="NEG",e[e.RELU=23]="RELU",e[e.RELU6=24]="RELU6",e[e.LEAKYRELU=25]="LEAKYRELU",e[e.RECIPROCAL=26]="RECIPROCAL",e[e.ROUND=27]="ROUND",e[e.RSQRT=28]="RSQRT",e[e.SELU=29]="SELU",e[e.SIGMOID=30]="SIGMOID",e[e.SIGN=31]="SIGN",e[e.SIN=32]="SIN",e[e.SINH=33]="SINH",e[e.SOFTPLUS=34]="SOFTPLUS",e[e.SQRT=35]="SQRT",e[e.SQUARE=36]="SQUARE",e[e.STEP=37]="STEP",e[e.TAN=38]="TAN",e[e.TANH=39]="TANH",e[e.TO_INT=40]="TO_INT"}(be||(be={}));const xe="return abs(a);",we="\n  if (abs(a) > 1.) {\n    return uniforms.NAN;\n  }\n  return acos(a);\n",ve="\n  if (a < 1.) {\n    return uniforms.NAN;\n  }\n  return acosh(a);\n",Ce="\n  if (abs(a) > 1.) {\n    return uniforms.NAN;\n  }\n  return asin(a);\n",ke="return asinh(a);",Se="\n  if (isnan(a)) {\n    return uniforms.NAN;\n  }\n  return atan(a);\n",Ie="\n  if (abs(a) > 1.) {\n    return uniforms.NAN;\n  }\n  if (a == 1.) {\n    return uniforms.INFINITY;\n  }\n  if (a == -1.) {\n    return -uniforms.INFINITY;\n  }\n  return atanh(a);\n",Re="return ceil(a);",$e="return cos(a);",Ae="\n  let e2x = exp(-a);\n  return (e2x + 1.0 / e2x) / 2.0;\n",Pe="return exp(a) - 1.0;",Ne="if (a >= 0.0) { return a; }  return (exp(a) - 1.0);",ze="\n  var resFloat = exp(a) - vec4<f32>(1.0);\n  if (a.r >= 0.0) {\n    resFloat.r = a.r;\n  }\n  if (a.g >= 0.0) {\n    resFloat.g = a.g;\n  }\n  if (a.b >= 0.0) {\n    resFloat.b = a.b;\n  }\n  if (a.a >= 0.0) {\n    resFloat.a = a.a;\n  }\n  return resFloat;\n",_e=`\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  let p = ${r.backend_util.ERF_P};\n  let a1 = ${r.backend_util.ERF_A1};\n  let a2 = ${r.backend_util.ERF_A2};\n  let a3 = ${r.backend_util.ERF_A3};\n  let a4 = ${r.backend_util.ERF_A4};\n  let a5 = ${r.backend_util.ERF_A5};\n\n  let sign = sign(a);\n  let absA = abs(a);\n  let t = 1.0 / (1.0 + p * absA);\n  return sign * (1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * exp(-absA * absA));\n`,Te="return exp(a);",Fe="return floor(a);",Ee="return f32(!isnan(a) && !isinf(a));",De="return f32(isinf(a));",Le="return f32(isnan(a));",Oe="return a;",Be="if (a < 0.0) { return uniforms.NAN; }\n  return log(a);",We="\n  if (isnan(a)) { return a; }\n  return log(1.0 + a);\n",Ue="return f32(!(a >= 1.0));",Me="return -a;",Ve="if (a < 0.0) { return uniforms.alpha * a; } return a;",Ge="\n  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));\n  return (aLessThanZero * (uniforms.alpha * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);\n",He="return 1.0 / a;",je="return select(a, 0.0, a < 0.0);",Xe="return clamp(a, 0.0, 6.0);",Ke="return clamp(a, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(6.0, 6.0, 6.0, 6.0));",Ye="\n  return select(a, vec4<f32>(0.0), a < vec4<f32>(0.0));\n",qe="return round(a);",Qe="return inverseSqrt(a);",Ze=`\n  if (a >= 0.0) {\n    return ${r.backend_util.SELU_SCALE} * a;\n  } else {\n    return ${r.backend_util.SELU_SCALEALPHA} * (exp(a) - 1.0);\n  }\n`,Je="return 1.0 / (1.0 + exp(-1.0 * a));",et="return sign(a);",tt="return sin(a);",nt="\n  let e2x = exp(a);\n  return (e2x - 1.0 / e2x) / 2.0;\n",it="\n  let epsilon = 1.1920928955078125e-7;\n  let threshold = log(epsilon) + 2.0;\n\n  let too_large = a > -threshold;\n  let too_small = a < threshold;\n  let exp_a = exp(a);\n\n  if (too_large) {\n    return a;\n  } else if (too_small) {\n    return exp_a;\n  } else {\n    return log(exp_a + 1.0);\n  }\n",rt="return sqrt(a);",at="return a * a;",st="\n  if (isnan(a)) {\n    return a;\n  }\n\n  return select(uniforms.stepAlpha, 1.0, a > 0.0);\n",ot="return tan(a);",ut="\n  let e2x = exp(-2.0 * abs(a));\n  return sign(a) * (1.0 - e2x) / (1.0 + e2x);\n",dt="return f32(i32((a)));";function lt(e,t){switch(e){case be.ABS:return xe;case be.ACOS:return we;case be.ACOSH:return ve;case be.ASIN:return Ce;case be.ASINH:return ke;case be.ATAN:return Se;case be.ATANH:return Ie;case be.COS:return $e;case be.COSH:return Ae;case be.CEIL:return Re;case be.ELU:return t?ze:Ne;case be.ERF:return _e;case be.EXP:return Te;case be.EXPM1:return Pe;case be.FLOOR:return Fe;case be.IS_FINITE:return Ee;case be.IS_INF:return De;case be.IS_NAN:return Le;case be.LINEAR:return Oe;case be.LOG:return Be;case be.LOG1P:return We;case be.LOGICAL_NOT:return Ue;case be.NEG:return Me;case be.LEAKYRELU:return t?Ge:Ve;case be.RECIPROCAL:return He;case be.RELU:return t?Ye:je;case be.RELU6:return t?Ke:Xe;case be.ROUND:return qe;case be.RSQRT:return Qe;case be.SELU:return Ze;case be.SIGMOID:return Je;case be.SIGN:return et;case be.SIN:return tt;case be.SINH:return nt;case be.SOFTPLUS:return it;case be.SQRT:return rt;case be.SQUARE:return at;case be.STEP:return st;case be.TAN:return ot;case be.TANH:return ut;case be.TO_INT:return dt;default:throw new Error(`BinaryType ${e} is not implemented!`)}}
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
function ht(e,t=!1,n=!1,i=3){if(null===e)return"";let r="";if("linear"===e)r=lt(be.LINEAR);else if("relu"===e)r=lt(be.RELU,n);else if("elu"===e)r=lt(be.ELU,n);else if("relu6"===e)r=lt(be.RELU6,n);else if("prelu"===e)r=ye(U.PRELU,n);else if("sigmoid"===e)r=lt(be.SIGMOID,n);else{if("leakyrelu"!==e)throw new Error(`Activation ${e} has not been implemented for the WebGPU backend.`);r=lt(be.LEAKYRELU,n)}const a=g(n?4:1);let s="";return s=t?`\n      fn activation(a : ${a}, coords : vec${i}<i32>) -> ${a} {\n        let b = getPreluActivationWeightsByOutputCoords(coords);\n        ${r}\n      }`:`\n      fn activation(a : ${a}, coords : vec${i}<i32>) -> ${a} {\n        ${r}\n      }`,s}function pt(e,t){return`\n      ${e?"value = value + getBiasByOutputCoords(coords);":""}\n      ${t?"value = activation(value, coords);":""}\n      `}
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
function ct(e,t,n=!1,i=!1,a=!1,s=1){r.util.assert(e&&1===s||!e,(()=>`transposeA ${e} is not compatible with component size ${s}`));const o=`\n      ${e?"value = getA(batch, col, row);":"value = getA(batch, row, col);"}\n\n    `,u=t?"value = getB(batch, col, row);":"value = getB(batch, row, col);";return`\n  fn mm_readA(batch: i32, row: i32, col: i32) -> ${g(s)} {\n    var value = ${g(s)}(0.0);\n    ${n&&a?o:`\n    ${e?"if(row < uniforms.dimAOuter && col < uniforms.dimInner)":"if(row < uniforms.aShape[1] && col < uniforms.aShape[2])"}\n    {\n      ${o}\n    }\n    `}\n    return value;\n  }\n\n  fn mm_readB(batch: i32, row: i32, col: i32) -> ${g(s)} {\n    var value = ${g(s)}(0.0);\n    ${u}\n    return value;\n  }\n  `}function ft(e,t,n,i,r=!1,a=!1,s=!1,o=1){return`\n  ${ct(n,i,r,a,s,o)}\n  fn mm_write(batch: i32, row: i32, col: i32, valueIn: ${g(o)}) {\n    ${r&&a?"":"if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)"}\n    {\n      var value = valueIn;\n      let coords = vec3<i32>(batch, row, col);\n      ${pt(e,t)}\n      setOutputAtCoords(coords[0], coords[1], coords[2], value);\n    }\n  }\n  `}function mt(e,t,n=!1,i=32,a=!1,s=32,o=!1){const u=t[1]*e[1],d=t[0]*e[0],l=n?u:i,h=n?i:u,p=l/t[0],c=i/t[1],f=e[1],m=e[0];return r.util.assert((n&&4===p&&4===e[1]||!n&&(3===p||4===p))&&l%t[0]==0&&i%t[1]==0&&4===e[0],(()=>`If transposeA ${n} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.\n          Otherwise, innerElementSize ${p} must be 3 or 4.\n      tileAWidth ${l} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`)),`\n  var<workgroup> mm_Asub : array<array<vec${p}<f32>, ${l/p}>, ${h}>;\n  var<workgroup> mm_Bsub : array<array<vec4<f32>, ${d/e[0]}>, ${i}>;\n\n  ${x()} {\n    let localRow = i32(localId.y);\n    let tileRow = localRow * ${f};\n    let tileCol = i32(localId.x);\n\n    let globalRow = i32(globalId.y) * ${f};\n    let globalCol = i32(globalId.x) * ${m};\n    let batch = ${a?"0":"i32(globalId.z)"};\n    let batchA = ${a||!o?"batch":"batch % uniforms.aShape[0]"};\n    let batchB = ${a||!o?"batch":"batch % uniforms.bShape[0]"};\n    let globalRowStart = i32(workgroupId.y) * ${u};\n\n    let numTiles = ${a?`${Math.ceil(s/i)}`:`(uniforms.dimInner - 1) / ${i} + 1`};\n    var kStart = ${a?`i32(globalId.z) * ${s}`:"0"};\n\n    var acc: array<vec4<f32>, ${f}>;\n\n    // Loop over shared dimension.\n    let tileRowB = localRow * ${c};\n    for (var t = 0; t < numTiles; t++) {\n        // Load one tile of A into local memory.\n        for (var innerRow = 0; innerRow < ${f}; innerRow++) {\n            let inputRow = tileRow + innerRow;\n            let inputCol = tileCol;\n            ${((e,t)=>e?`\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          kStart + inputRow,\n          globalRowStart + inputCol * ${t});\n        `:`\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          globalRow + innerRow,\n          kStart + inputCol * ${t});\n        `)(n,p)}\n        }\n\n        // Load one tile of B into local memory.\n        for (var innerRow = 0; innerRow < ${c}; innerRow++) {\n            let inputRow = tileRowB + innerRow;\n            let inputCol = tileCol;\n            mm_Bsub[inputRow][inputCol] = mm_readB(batchB, kStart + inputRow, globalCol);\n        }\n        kStart = kStart + ${i};\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        ${((e,t,n,i)=>{if(e)return`\n      for (var k = 0; k < ${i}; k++) {\n        let BCached0 = mm_Bsub[k][tileCol];\n        let ACached0 = mm_Asub[k][localRow];\n        for (var i = 0; i < ${n}; i++) {\n          acc[i] = fma(BCached0, vec4<f32>(ACached0[i]), acc[i]);\n        }\n      }`;{let e="",r="";for(let n=0;n<t;n++)e+=`let BCached${n} = mm_Bsub[k * ${t} + ${n}][tileCol];`,r+=`acc[i] = fma(BCached${n}, vec4<f32>(ACached[${n}]), acc[i]);`;return`\n      for (var k = 0; k < ${i/t}; k++) {\n        ${e}\n        for (var i = 0; i < ${n}; i++) {\n          let ACached = mm_Asub[tileRow + i][k];\n          ${r}\n        }\n      }`}})(n,p,f,i)}\n        workgroupBarrier();\n    }\n\n    for (var innerRow = 0; innerRow < ${f}; innerRow++) {\n        mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);\n    }\n  }`}const gt=e=>e?"\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          kStart + inputRow,\n          globalRowStart + inputCol);\n        ":"\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          globalRowStart + inputRow,\n          kStart + inputCol);\n        ";function yt(e,t,n=!1,i=32,a=!1,s=32,o=!1,u=!1){const d=e[1]*t[1],l=e[0]*t[0],h=n?d:i,p=n?i:d;r.util.assert(p%t[1]==0&&h%t[0]==0&&i%t[1]==0,(()=>`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`));const c=p/t[1],f=h/t[0],m=i/t[1],g=e[1],y=e[0],b=o?`\n      let localRow = i32(localId.y);\n      let localCol = i32(localId.x);\n      let globalRowStart = i32(workgroupId.y) * ${d};\n      let globalColStart = i32(workgroupId.x) * ${l};\n\n      // Loop over shared dimension.\n      for (var t = 0; t < numTiles; t++) {\n        // Load one tile of A into local memory.\n        for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {\n          for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {\n            ${gt(n)}\n          }\n        }\n        // Load one tile of B into local memory.\n        for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {\n              for (var inputCol = localCol; inputCol < ${l}; inputCol = inputCol + ${t[0]}) {\n            mm_Bsub[inputRow][inputCol] = mm_readB(batchB,\n              kStart + inputRow,\n              globalColStart + inputCol);\n          }\n        }\n        kStart = kStart + ${i};\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        var BCached : array<f32, ${y}>;\n        for (var k = 0; k < ${i}; k++) {\n          for (var inner = 0; inner < ${y}; inner++) {\n            BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];\n          }\n          for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n            let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}\n            for (var innerCol = 0; innerCol < ${y}; innerCol++) {\n              acc[innerRow][innerCol] =\n                  fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);\n            }\n          }\n        }\n        workgroupBarrier();\n      }\n      for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n        let gRow = globalRowStart + localRow + innerRow * ${t[1]};\n        for (var innerCol = 0; innerCol < ${y}; innerCol++) {\n          let gCol = globalColStart + localCol + innerCol * ${t[0]};\n          mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);\n        }\n      }\n      `:`\n  let tileRow = i32(localId.y) * ${g};\n  let tileCol = i32(localId.x) * ${y};\n\n  let globalRow = i32(globalId.y) * ${g};\n  let globalCol = i32(globalId.x) * ${y};\n  let globalRowStart = i32(workgroupId.y) * ${d};\n\n  let tileRowA = i32(localId.y) * ${c};\n  let tileColA = i32(localId.x) * ${f};\n  let tileRowB = i32(localId.y) * ${m};\n  // Loop over shared dimension.\n  for (var t = 0; t < numTiles; t++) {\n    // Load one tile of A into local memory.\n    for (var innerRow = 0; innerRow < ${c}; innerRow++) {\n      for (var innerCol = 0; innerCol < ${f}; innerCol++) {\n        let inputRow = tileRowA + innerRow;\n        let inputCol = tileColA + innerCol;\n        ${gt(n)}\n      }\n    }\n\n    // Load one tile of B into local memory.\n    for (var innerRow = 0; innerRow < ${m}; innerRow++) {\n      for (var innerCol = 0; innerCol < ${y}; innerCol++) {\n        let inputRow = tileRowB + innerRow;\n        let inputCol = tileCol + innerCol;\n        mm_Bsub[inputRow][inputCol] = mm_readB(batchB,\n          kStart + inputRow,\n          globalCol + innerCol);\n      }\n    }\n    kStart = kStart + ${i};\n    workgroupBarrier();\n\n    // Compute acc values for a single thread.\n    var BCached : array<f32, ${y}>;\n    for (var k = 0; k < ${i}; k++) {\n      for (var inner = 0; inner < ${y}; inner++) {\n        BCached[inner] = mm_Bsub[k][tileCol + inner];\n      }\n\n      for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n        ${(e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];")(n)}\n        for (var innerCol = 0; innerCol < ${y}; innerCol++) {\n          acc[innerRow][innerCol] =\n              fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);\n        }\n      }\n    }\n\n    workgroupBarrier();\n  }\n\n  for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n    for (var innerCol = 0; innerCol < ${y}; innerCol++) {\n      mm_write(batch, globalRow + innerRow, globalCol + innerCol,\n          acc[innerRow][innerCol]);\n    }\n  }\n  `;return`\n    var<workgroup> mm_Asub : array<array<f32, ${h}>, ${p}>;\n    var<workgroup> mm_Bsub : array<array<f32, ${l}>, ${i}>;\n\n    ${x()} {\n      let batch = ${a?"0":"i32(globalId.z)"};\n      let batchA = ${a||!u?"batch":"batch % uniforms.aShape[0]"};\n      let batchB = ${a||!u?"batch":"batch % uniforms.bShape[0]"};\n      let numTiles = ${a?`${Math.ceil(s/i)}`:`(uniforms.dimInner - 1) / ${i} + 1`};\n      var kStart = ${a?`i32(globalId.z) * ${s}`:"0"};\n\n      var acc : array<array<f32, ${y}>, ${g}>;\n\n      // Without this initialization strange values show up in acc.\n      for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n        for (var innerCol = 0; innerCol < ${y}; innerCol++) {\n          acc[innerRow][innerCol] = 0.0;\n        }\n      }\n      ${b}\n    }\n  `}class bt{constructor(e,t,n=!1,i=!1,r=null,a=null,s=null,o=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=t,this.dispatchLayout={x:[2],y:[1],z:[0]};const u=n?e[1]:e[2];if(this.isVec4=(u%4==0&&!n||t[1]%4==0&&n)&&t[2]%4==0&&!i,this.outputComponent=this.isVec4?4:1,this.isVectorA=1===t[1]&&!n,!this.isVec4&&this.isVectorA)this.elementsPerThread=[1,1,1],this.workgroupSize=[32,1,1];else{const e=z(t[1],u,t[2],n);this.workgroupSize=e.workgroupSize,this.elementsPerThread=e.elementsPerThread}this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread);const d=null!=r,l=null!=s;d&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),this.sequentialAccessByThreads=o,this.transposeA=n,this.transposeB=i,this.addBias=d,this.activation=a,this.hasPreluActivationWeights=l,[this.fitAOuter,this.fitBOuter,this.fitInner]=this.getShapeFit(t[1],t[2],u),this.shaderKey=`matMulPacked_${this.elementsPerThread}_${n}_${i}_${this.activation}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.isVectorA}_${this.sequentialAccessByThreads}`}getShapeFit(e,t,n){const i=this.workgroupSize[1]*this.elementsPerThread[1],r=this.workgroupSize[0]*this.elementsPerThread[0];!this.isVec4&&this.isVectorA?this.tileInner=4*this.workgroupSize[0]:this.tileInner=r;return[e%i==0,t%r==0,n%this.tileInner==0]}getUserCode(){const e=`\n      ${ht(this.activation,this.hasPreluActivationWeights,this.isVec4)}\n      ${ft(this.addBias,this.activation,!1,this.transposeB,this.fitAOuter,this.fitBOuter,this.fitInner,this.isVec4?4:1)}\n      ${this.isVec4?mt(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,!0):this.isVectorA?function(e,t=!1){r.util.assert(1===e[1]&&1===e[2],(()=>`A linear work group size is required. But got ${e}.`));const n=4*e[0];return`\n    var<workgroup> mm_Asub : array<vec4<f32>, ${e[0]}>;\n\n    ${x()} {\n      let tileCol = i32(localId.x);\n      let globalCol = i32(globalId.x);\n      let globalRow = i32(globalId.y);\n\n      let numTiles = (uniforms.dimInner - 1) / ${n} + 1;\n      let batch = i32(globalId.z);\n      let batchA = batch % uniforms.aShape[0];\n      let batchB = batch % uniforms.bShape[0];\n      // Without this initialization strange values show up in acc.\n      var acc = 0.0;\n\n      // Loop over shared dimension.\n      for (var t = 0; t < numTiles; t++) {\n        // Load one tile of A into local memory.\n        let colA = t * ${n} + tileCol * 4;\n        mm_Asub[tileCol] = vec4<f32>(${(e=>e?"\n      mm_readA(batchA, colA, globalRow),\n      mm_readA(batchA, colA + 1, globalRow),\n      mm_readA(batchA, colA + 2, globalRow),\n      mm_readA(batchA, colA + 3, globalRow)\n  ":"\n      mm_readA(batchA, globalRow, colA),\n      mm_readA(batchA, globalRow, colA + 1),\n      mm_readA(batchA, globalRow, colA + 2),\n      mm_readA(batchA, globalRow, colA + 3)\n  ")(t)});\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        for (var k = 0; k < ${n/4}; k++) {\n          let rowB = t * ${n} + k * 4;\n          let BCached = vec4<f32>(mm_readB(batchB, rowB, globalCol),\n                              mm_readB(batchB, rowB + 1, globalCol),\n                              mm_readB(batchB, rowB + 2, globalCol),\n                              mm_readB(batchB, rowB + 3, globalCol));\n\n          let ACached = mm_Asub[k];\n          acc = acc + dot(ACached, BCached);\n        }\n\n        workgroupBarrier();\n      }\n\n      mm_write(batch, globalRow, globalCol, acc);\n    }\n  `}(this.workgroupSize,this.transposeA):yt(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,this.sequentialAccessByThreads,!0)}\n    `;return e}}class xt{constructor(e,t=!1,n=!1,i=null,r=null,a=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[256,1,1],this.outputShape=e,this.dispatchLayout={x:[],y:[1,2],z:[0]},this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize);const s=null!=i,o=null!=a;s&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),this.transposeA=t,this.transposeB=n,this.addBias=s,this.activation=r,this.hasPreluActivationWeights=o,this.shaderKey=`matMulReduce_${this.activation}_${t}_${n}`}getUserCode(){
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
var e;return`\n      ${ht(this.activation,this.hasPreluActivationWeights)}\n      ${ft(this.addBias,this.activation,this.transposeA,this.transposeB)}\n      ${e=this.workgroupSize[0],`\n    var<workgroup> sumValues : array<f32, ${e}>;\n    ${x()} {\n      let coords = getOutputCoords();\n      let batch = coords[0];\n      let batchA = batch % uniforms.aShape[0];\n      let batchB = batch % uniforms.bShape[0];\n      let row = coords[1];\n      let col = coords[2];\n      var sum = 0.0;\n      let Length = uniforms.dimInner;\n      for (var k = i32(localId.x); k < Length; k = k + ${e}) {\n        let dataA = mm_readA(batchA, row, k);\n        let dataB = mm_readB(batchB, k, col);\n        sum = sum + dataA * dataB;\n      }\n      sumValues[localId.x] = sum;\n      workgroupBarrier();\n\n      for(var currentSize = ${e/2}u; currentSize > 1u;\n          currentSize = currentSize / 2u) {\n        if (localId.x < currentSize)\n        {\n          sumValues[localId.x] = sumValues[localId.x] + sumValues[localId.x + currentSize];\n        }\n        workgroupBarrier();\n      }\n\n      if (localId.x == 0u) {\n        sum = sumValues[0] + sumValues[1];\n        mm_write(batch, row, col, sum);\n      }\n    }\n  `}\n    `}}class wt{constructor(e,t,n,i=!1,r=!1,a=null,s=null,o=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[16,8,1],this.outputShape=n,this.dispatchLayout={x:[2],y:[1],z:[0]},this.dispatch=[Math.ceil(n[2]/this.workgroupSize[0]),Math.ceil(n[1]/this.workgroupSize[1]),n[0]];const u=null!=a;u&&this.variableNames.push("bias");const d=null!=o;d&&this.variableNames.push("preluActivationWeights"),this.transposeA=i,this.transposeB=r,this.addBias=u,this.activation=s,this.hasPreluActivationWeights=d,this.shaderKey=`matMulSmallOutputSize_${this.activation}_${i}_${r}`}getUserCode(){return`\n      ${ht(this.activation,this.hasPreluActivationWeights)}\n      ${ft(this.addBias,this.activation,this.transposeA,this.transposeB)}\n      ${
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
function(e){const t=e[1],n=e[0],i=t>n?t:n;return`\n  var<workgroup> mm_Asub : array<array<f32, ${i}>, ${t}>;\n  var<workgroup> mm_Bsub : array<array<f32, ${n}>, ${i}>;\n\n  // If the output size is small for matrix multiplication, avoid to use vec4\n  // and handle some elements per thread to optimally utilize the ALU.\n  // Read data from global memory to registers firstly, then store them into\n  // shared memory, so it is instruction-Level parallelism for arithmetic\n  // operations and others handle IO operations between barrier api, makes ALU\n  // and load/store units work simultaneously, could improves the performance.\n  ${x()} {\n    let tileRow = i32(localId.y);\n    let tileCol = i32(localId.x);\n    let globalRow = i32(globalId.y);\n    let globalCol = i32(globalId.x);\n    let batch = i32(globalId.z);\n    let batchA = batch % uniforms.aShape[0];\n    let batchB = batch % uniforms.bShape[0];\n\n    // uniforms.dimInner should be greater than 0.\n    let numTiles = (uniforms.dimInner - 1) / ${i} + 1;\n    var acc = 0.0;\n\n    var globalColA = tileCol;\n    var globalRowB = 0;\n    var regA = mm_readA(batchA, globalRow, globalColA);\n    var regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);\n    var regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);\n    globalColA = globalColA + ${i};\n    globalRowB = globalRowB + ${i};\n\n    for (var t = 0; t < numTiles; t = t + 1) {\n      mm_Asub[tileRow][tileCol] = regA;\n      mm_Bsub[2 * tileRow][tileCol] = regB0;\n      mm_Bsub[2 * tileRow + 1][tileCol] = regB1;\n\n      workgroupBarrier();\n\n      regA = mm_readA(batchA, globalRow, globalColA);\n      regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);\n      regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);\n      globalColA = globalColA + ${i};\n      globalRowB = globalRowB + ${i};\n\n      for (var k = 0; k < ${i}; k = k + 1) {\n        acc = acc + mm_Asub[tileRow][k] * mm_Bsub[k][tileCol];\n      }\n      workgroupBarrier();\n    }\n\n    mm_write(batch, globalRow, globalCol, acc);\n  }\n  `}(this.workgroupSize)}\n    `}}
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
class vt{constructor(e,t,n=!1,i=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[8,8,1],this.atomic=!0,this.splitedDimInner=128,r.util.assert(1===e[0],(()=>"MatMulSplitKProgram only supports batch = 1.")),this.outputShape=e,this.dispatchLayout={x:[2],y:[1],z:[0,3]};const a=(n&&this.outputShape[1]%4==0||!n&&t%4==0)&&this.outputShape[2]%4==0;this.elementsPerThread=[4,4,this.splitedDimInner],this.outputComponent=a?4:1,a||(this.outputShape[1]<16&&(this.elementsPerThread[1]=1),this.outputShape[2]<16&&(this.elementsPerThread[0]=1)),this.dispatch=N(this.dispatchLayout,[this.outputShape[0],this.outputShape[1],this.outputShape[2],t],this.workgroupSize,this.elementsPerThread),this.transposeA=n,this.transposeB=i,this.shaderKey=`matMulSplitK_${n}_${i}_${this.elementsPerThread}_${this.outputComponent}`}getUserCode(){const e=this.outputComponent;return`\n      ${ct(!1,this.transposeB,!1,!1,!1,e)}\n      fn mm_write(batch: i32, row : i32, col : i32, value : ${g(e)}) {\n        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {\n          let coords = vec3<i32>(batch, row, col);\n          let flatIndex = getOutputIndexFromCoords(coords);\n          // The problem is that we should initialize output to zero before using.\n          // Otherwise, the original value will be added to the result.\n          for (var i = 0; i < ${e}; i = i + 1) {\n            ${c("&result[flatIndex + i]",""+(e>1?"value[i]":"value"),"float32")}\n          }\n        }\n      }\n      ${4===e?mt(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner):yt(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner)}\n    `}}class Ct{constructor(e,t=null,n=null,i=null){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=null!=t,this.hasPreluActivationWeights=null!=i,this.activation=n,this.addBias&&this.variableNames.push("bias"),this.hasPreluActivationWeights&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`biasActivation_${n}`}getUserCode(){return`\n    ${ht(this.activation,this.hasPreluActivationWeights)}\n    ${x("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        var value = getXByOutputIndex(index);\n        ${pt(this.addBias,this.activation)}\n        setOutputAtIndex(index, value);\n      }\n    }\n    `}}
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
class kt{constructor(e){this.variableNames=[],this.outputShape=[],this.uniforms="value : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="fill"}getUserCode(){return`\n    ${x("index")} {\n      if (index < uniforms.size) {\n        setOutputAtIndex(index, uniforms.value);\n      }\n    }\n  `}}
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
function St(e){const{backend:t,attrs:n}=e,{shape:i,value:a}=n;let{dtype:s}=n;if(s=s||r.util.inferDtype(a),"string"===s){const e=r.util.getArrayFromDType(s,r.util.sizeFromShape(i));return e.fill(a),t.makeTensorInfo(i,s,e)}{const e=new kt(i),n=[{type:"float32",data:[a]}];return t.runWebGPUProgram(e,[],s,n)}}const It={kernelName:r.Fill,backendName:"webgpu",kernelFunc:St};
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
function Rt(e){const{inputs:t,attrs:n}=e,{x:i}=t,{shape:a}=n,s=r.util.sizeFromShape(i.shape),o=r.util.inferFromImplicitShape(a,s),u=r.util.sizeFromShape(o);return r.util.assert(s===u,(()=>`The new shape (${o}) has ${u} elements and the old shape (${i.shape}) has ${s} elements. The new shape and old shape must have the same number of elements.`)),e.backend.incRef(i.dataId),{dataId:i.dataId,shape:o,dtype:i.dtype}}const $t={kernelName:r.Reshape,backendName:"webgpu",kernelFunc:Rt};
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
function At({a:e,b:t,transposeA:n,transposeB:i,backend:a,bias:s=null,preluActivationWeights:o=null,leakyreluAlpha:u=0,activation:d=null}){const l=e.shape.length,h=t.shape.length,p=n?e.shape[l-2]:e.shape[l-1],c=i?t.shape[h-1]:t.shape[h-2],f=n?e.shape[l-1]:e.shape[l-2],m=i?t.shape[h-2]:t.shape[h-1],g=e.shape.slice(0,-2),y=t.shape.slice(0,-2),b=r.util.sizeFromShape(g),x=r.util.sizeFromShape(y),w=r.broadcast_util.assertAndGetBroadcastShape(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([f,m]);r.util.assert(p===c,(()=>`Error in matMul: inner shapes (${p}) and (${c}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${i} must match.`));const v=n?[b,p,f]:[b,f,p],C=i?[x,m,c]:[x,c,m],k=Rt({inputs:{x:e},backend:a,attrs:{shape:v}}),S=Rt({inputs:{x:t},backend:a,attrs:{shape:C}}),I=[k,S],R=Math.max(b,x),$=[k,S],A=[{type:"int32",data:[f]},{type:"int32",data:[m]},{type:"int32",data:[p]}];let P,N;const z=[R,f,m];let _=(0,r.env)().get("WEBGPU_MATMUL_PROGRAM_TYPE");if(_<0){const e=(0,r.env)().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),t=e>0?e:a.thresholdToIncreaseWorkgroups,n=R*Math.ceil(f/32)*Math.ceil(m/32);_=n<=t||f<=8&&n<=2*t?R*f*m<=128?O.MatMulReduceProgram:1===R&&c>=2e3?O.MatMulSplitKProgram:O.MatMulSmallOutputSizeProgram:O.MatMulPackedProgram}switch(_){case O.MatMulReduceProgram:P=new xt(z,n,i,s,d,o);break;case O.MatMulSplitKProgram:if(N=St({backend:a,attrs:{shape:z,value:0,dtype:e.dtype}}),P=new vt(z,c,n,i),s||d){N=a.runWebGPUProgram(P,$,e.dtype,A,N);const t=new Ct(N.shape,s,d,o);let n=null;const i=[N];s&&i.push(s),o&&i.push(o),"leakyrelu"===d&&(n=[{type:"float32",data:[u]}],t.uniforms+=" alpha : f32,");const r=a.runWebGPUProgram(t,i,N.dtype,n);I.push(N);const l=Rt({inputs:{x:r},backend:a,attrs:{shape:w}});I.push(r);for(const e of I)a.disposeData(e.dataId);return l}break;case O.MatMulSmallOutputSizeProgram:P=new wt(v,C,z,n,i,s,d,o);break;case O.MatMulPackedProgram:const t=a.adapterInfo.isIntel();P=new bt(v,z,n,i,s,d,o,t);break;default:throw new Error(`Unsupported MatMulProgramType ${_}.`)}s&&$.push(s),o&&$.push(o),"leakyrelu"===d&&(A.push({type:"float32",data:[u]}),P.uniforms+=" alpha : f32,"),N=a.runWebGPUProgram(P,$,e.dtype,A,N);const T=Rt({inputs:{x:N},backend:a,attrs:{shape:w}});I.push(N);for(const e of I)a.disposeData(e.dataId);return T}const Pt={kernelName:r._FusedMatMul,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{a:r,b:a,bias:s,preluActivationWeights:o}=t,{transposeA:u,transposeB:d,activation:l,leakyreluAlpha:h}=i;return At({a:r,b:a,transposeA:u,transposeB:d,backend:n,bias:s,preluActivationWeights:o,leakyreluAlpha:h,activation:l})}};
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
class Nt{constructor(e,t,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.workgroupSize=[128,1,1],this.size=!0,this.outputShape=r.backend_util.assertAndGetBroadcastShape(t,n),this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`binaryOpComplex_${e}`,this.op=e}getUserCode(){return`\n      fn binaryOpComplex(\n          areal : f32, aimag : f32, breal : f32, bimag : f32) -> f32 {\n        ${ye(this.op,!1)}\n      }\n\n      ${x("index")} {\n        if(index < uniforms.size) {\n          let areal = getARealByOutputIndex(index);\n          let aimag = getAImagByOutputIndex(index);\n          let breal = getBRealByOutputIndex(index);\n          let bimag = getBImagByOutputIndex(index);\n          setOutputAtIndex(index, binaryOpComplex(areal, aimag, breal, bimag));\n        }\n      }\n    `}}
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
class zt{constructor(e,t,n){if(this.size=!0,this.variableNames=["A","B"],this.outputShape=r.backend_util.assertAndGetBroadcastShape(t,n),this.dispatchLayout=F(this.outputShape),this.op=e,this.useSharedMemoryWithA=t.length<=1&&n.length>1&&t[0]<128,this.useSharedMemoryWithB=n.length<=1&&t.length>1&&n[0]<128,this.useSharedMemoryWithA||this.useSharedMemoryWithB)this.outputComponent=1,this.variableComponents=[1,1],this.lastDimensionSize=this.useSharedMemoryWithB?n[0]:t[0],this.shaderKey=`binary_${e}_${this.lastDimensionSize}`,this.type="shared",this.workgroupSize=[256,1,1];else{const i=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;i&&a?(this.outputComponent=4,this.variableComponents=[4,4]):i&&(r.util.isScalarShape(n)||1===n[n.length-1])||a&&(r.util.isScalarShape(t)||1===t[t.length-1])?(this.outputComponent=4,this.variableComponents=i?[4,1]:[1,4]):(this.outputComponent=1,this.variableComponents=[1,1]),this.type="nonshared",this.shaderKey=`binary_${e}_${this.variableComponents}`,this.workgroupSize=[128,1,1]}this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.outputComponent,1,1])}getUserCode(){let e;const t=4===this.outputComponent?"vec4<f32>":"f32",n=`\n    fn binaryOperation(a : ${t}, b : ${t}) -> ${t} {\n      ${ye(this.op,4===this.outputComponent)}\n    };\n    `;if("shared"===this.type){const t=this.lastDimensionSize>1?`coords[${this.outputShape.length-1}]`:"0",i=this.useSharedMemoryWithB?`let a = getAByOutputIndex(index);\n          let b = sharedBuf[${t}];`:`let a = sharedBuf[${t}];\n          let b = getBByOutputIndex(index);`;e=`\n        ${n}\n        var<workgroup> sharedBuf : array<f32, ${this.lastDimensionSize}>;\n        ${x("index")} {\n          // Fill in the shared memory buffer.\n          let localIndex = i32(localId.x);\n          if(localIndex < ${this.lastDimensionSize}) {\n            sharedBuf[localIndex] = f32(${this.useSharedMemoryWithB?"B":"A"}[localIndex]);\n          }\n          workgroupBarrier();\n\n          if(index < uniforms.size) {\n            let coords = getCoordsFromIndex(index);\n            ${i}\n            setOutputAtIndex(index, binaryOperation(a, b));\n          }\n        }\n        `}else e=`\n       ${n}\n       ${x("index")} {\n         if (index < uniforms.size) {\n           let coords = getCoordsFromIndex(index * ${this.outputComponent});\n           let a = ${t}(getAByOutputCoords(coords));\n           let b = ${t}(getBByOutputCoords(coords));\n           setOutputAtIndex(index, binaryOperation(a, b));\n         }\n       }\n       `;return e}}
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
function _t(e){const{inputs:t}=e,{x:n}=t;return e.backend.incRef(n.dataId),{dataId:n.dataId,shape:n.shape,dtype:n.dtype}}const Tt={kernelName:r.Identity,backendName:"webgpu",kernelFunc:_t};
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
function Ft(e){const{inputs:t,backend:n}=e,{real:i,imag:r}=t,a=n.makeTensorInfo(i.shape,"complex64"),s=n.tensorMap.get(a.dataId),o=_t({inputs:{x:i},backend:n}),u=_t({inputs:{x:r},backend:n});return s.complexTensorInfos={real:o,imag:u},a}const Et={kernelName:r.Complex,backendName:"webgpu",kernelFunc:Ft};
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
class Dt{constructor(e,t,n=""){this.variableNames=["A"],this.size=!0;this.workgroupSize=[128,1,1],this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.op=t,""!==n&&(this.uniforms=n),this.shaderKey=`unary_${t}`}getUserCode(){return`\n      fn unaryOperation(a : f32) -> f32 {\n        ${lt(this.op,!1)}\n      }\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let a = getAByOutputIndex(index);\n          setOutputAtIndex(index, unaryOperation(a));\n        }\n      }\n      `}}
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
function Lt({opType:e,cpuKernelImpl:t,dtype:n}){return({inputs:i,backend:r})=>{const{x:a}=i,s=r,o=n||a.dtype;if(s.shouldExecuteOnCPU([a])&&null!=t){const e=s.tensorMap.get(a.dataId),n=t(e.values,o);return s.makeTensorInfo(a.shape,o,n)}const u=new Dt(a.shape,e);return s.runWebGPUProgram(u,[a],o)}}function Ot({opType:e,cpuKernelImpl:t,supportsComplex:n=!1,dtype:i}){return({inputs:a,backend:s})=>{const{a:o,b:u}=a,d=s;if(n&&"complex64"===o.dtype){const t=d.tensorMap.get(o.dataId),n=d.tensorMap.get(u.dataId);let i,a;if(e!==U.MUL)[i,a]=[[t.complexTensorInfos.real,n.complexTensorInfos.real],[t.complexTensorInfos.imag,n.complexTensorInfos.imag]].map((t=>{const[n,i]=t,a={dataId:n.dataId,dtype:n.dtype,shape:o.shape},s={dataId:i.dataId,dtype:i.dtype,shape:u.shape},l=new zt(e,o.shape,u.shape);return d.runWebGPUProgram(l,[a,s],(0,r.upcastType)(n.dtype,i.dtype))}));else{const e=new Nt(U.COMPLEX_MULTIPLY_REAL,o.shape,u.shape),r=new Nt(U.COMPLEX_MULTIPLY_IMAG,o.shape,u.shape),s=[{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:o.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:o.shape},{dataId:n.complexTensorInfos.real.dataId,dtype:n.complexTensorInfos.real.dtype,shape:u.shape},{dataId:n.complexTensorInfos.imag.dataId,dtype:n.complexTensorInfos.imag.dtype,shape:u.shape}];i=d.runWebGPUProgram(e,s,"float32"),a=d.runWebGPUProgram(r,s,"float32")}const s=Ft({inputs:{real:i,imag:a},backend:d});return d.disposeData(i.dataId),d.disposeData(a.dataId),s}const l=i||(0,r.upcastType)(o.dtype,u.dtype);if(("string"===o.dtype||"string"===u.dtype||d.shouldExecuteOnCPU([o,u]))&&null!=t){const e=d.tensorMap.get(o.dataId).values,n=d.tensorMap.get(u.dataId).values,i="string"===o.dtype?r.backend_util.fromUint8ToStringArray(e):e,a="string"===o.dtype?r.backend_util.fromUint8ToStringArray(n):n,[s,h]=t(o.shape,u.shape,i,a,l);return d.makeTensorInfo(h,l,s)}const h=new zt(e,o.shape,u.shape);return d.runWebGPUProgram(h,[o,u],l)}}var Bt=n(67466);
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
const{addImpl:Wt,castImpl:Ut,ceilImpl:Mt,concatImpl:Vt,equalImpl:Gt,expImpl:Ht,expm1Impl:jt,floorImpl:Xt,floorDivImpl:Kt,gatherNdImpl:Yt,gatherV2Impl:qt,greaterEqualImpl:Qt,greaterImpl:Zt,lessEqualImpl:Jt,lessImpl:en,logImpl:tn,maxImpl:nn,maximumImpl:rn,minimumImpl:an,multiplyImpl:sn,negImpl:on,notEqualImpl:un,prodImpl:dn,rangeImpl:ln,rsqrtImpl:hn,scatterImpl:pn,simpleAbsImpl:cn,sliceImpl:fn,stridedSliceImpl:mn,stringNGramsImpl:gn,subImpl:yn,tileImpl:bn,topKImpl:xn,transposeImpl:wn,uniqueImpl:vn}=Bt,Cn=Lt({opType:be.ABS,cpuKernelImpl:cn}),kn={kernelName:r.Abs,backendName:"webgpu",kernelFunc:Cn},Sn=Lt({opType:be.ACOS}),In={kernelName:r.Acos,backendName:"webgpu",kernelFunc:Sn},Rn=Lt({opType:be.ACOSH}),$n={kernelName:r.Acosh,backendName:"webgpu",kernelFunc:Rn},An=Ot({opType:U.ADD,cpuKernelImpl:Wt,supportsComplex:!0}),Pn={kernelName:r.Add,backendName:"webgpu",kernelFunc:An};
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
class Nn{constructor(e){this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e[0],this.variableNames=e.map(((e,t)=>`T${t}`)),this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="addN"}getUserCode(){const e=[];this.variableNames.forEach((t=>{e.push(`let v${t} = get${t}ByOutputCoords(coords);`)}));const t=this.variableNames.map((e=>`v${e}`)).join(" + ");return`\n      ${x("index")} {\n        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let flatIndex = index * ${this.workPerThread} + i;\n          if (flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndex);\n            ${e.join("\n        ")}\n            setOutputAtIndex(flatIndex, ${t});\n          }\n        }\n      }\n    `}}const zn={kernelName:r.AddN,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,i=t;if(1===i.length)return _t({inputs:{x:i[0]},backend:n});const a=i.map((e=>e.dtype)).reduce(((e,t)=>(0,r.upcastType)(e,t))),s=i.map((e=>e.shape)),o=new Nn(s);return n.runWebGPUProgram(o,i,a)}};
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
class _n{constructor(e,t){this.variableNames=["A"],this.workgroupSize=[16,16,1];const n=new Array(e.length);for(let i=0;i<n.length;i++)n[i]=e[t[i]];this.outputShape=n,this.dispatchLayout={x:[0],y:[1]},this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize,[1,1,1]),this.shaderKey="transposeShared"}getUserCode(){r.util.assert(this.workgroupSize[0]===this.workgroupSize[1],(()=>`Must be a square tile, current tile shape is ${this.workgroupSize[0]} x ${this.workgroupSize[1]}`));const e=this.workgroupSize[0];return`\n      var<workgroup> tile : array<array<f32, ${this.workgroupSize[0]+1}>, ${this.workgroupSize[0]}>;\n      ${x()} {\n        var x = i32(workgroupId.x) * ${e} + i32(localId.x);\n        var y = i32(workgroupId.y) * ${e} + i32(localId.y);\n        let width = uniforms.outShape[0];\n        let height = uniforms.outShape[1];\n        if (x < width && y < height) {\n          tile[localId.y][localId.x] = f32(A[y * width + x]);\n        }\n        workgroupBarrier();\n\n        x = i32(workgroupId.y) * ${e} + i32(localId.x);\n        y = i32(workgroupId.x) * ${e} + i32(localId.y);\n        if (x < height && y < width) {\n          setOutputAtIndex((y * height + x), tile[localId.x]\n            [localId.y]);\n        }\n      }\n    `}}
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
class Tn{constructor(e,t){this.variableNames=["A"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0;const n=new Array(e.length);for(let i=0;i<n.length;i++)n[i]=e[t[i]];this.outputShape=n,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.newDim=t,this.shaderKey=`transpose_${t}`}getUserCode(){const e=y(this.outputShape.length),t=Fn(this.newDim);return`\n      ${x("index")} {\n        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let flatIndex = index * ${this.workPerThread} + i;\n          if(flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndex);\n            setOutputAtIndex(flatIndex, A[getIndexFromCoords${this.outputShape.length}D(\n              ${e}(${t}), uniforms.aShape)]);\n          }\n        }\n      }\n    `}}function Fn(e){const t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const n=new Array(t);for(let t=0;t<e.length;t++)n[e[t]]=`coords.${b(t)}`;return n.join()}
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
function En(e){const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{perm:s}=i,o=n,u=a.shape.length,d=new Array(u);for(let e=0;e<d.length;e++)d[e]=a.shape[s[e]];if(n.shouldExecuteOnCPU([a])){const e=o.tensorMap.get(a.dataId).values,t=wn(e,a.shape,a.dtype,s,d);return n.makeTensorInfo(d,a.dtype,t)}if(2===a.shape.length&&r.util.arraysEqual(s,[1,0])){const e=new _n(a.shape,s);return o.runWebGPUProgram(e,[a],a.dtype)}const l=new Tn(a.shape,s);return o.runWebGPUProgram(l,[a],a.dtype)}const Dn={kernelName:r.Transpose,backendName:"webgpu",kernelFunc:En};
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
class Ln{constructor(e,t,n){this.variableNames=["x"],this.uniforms="reduceSize : i32,",this.size=!0,this.inputShape=[e.batchSize,e.inSize];const[i]=r.backend_util.computeOutAndReduceShapes(this.inputShape,[1]);this.outputShape=0===i.length?[1]:i,e.inSize>=32768&&n>=512?this.workgroupSize=[512,1,1]:e.inSize>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,[1,1,1]),this.reduceType=t,this.shaderKey=`reduce_${t}`}getUserCode(){let e="",t="0.0";const n=this.workgroupSize[0];"min"===this.reduceType||"max"===this.reduceType?(e=`\n         if (isnan(candidate)) {\n          bestValue = uniforms.NAN;\n         } else if (!isnan(bestValue) && candidate ${"min"===this.reduceType?"<":">"} bestValue)\n           {  bestValue = candidate; }`,t="f32(x[offset])"):"sum"===this.reduceType||"mean"===this.reduceType?e=" bestValue = bestValue + candidate; ":"prod"===this.reduceType?(e=" bestValue = bestValue * candidate; ",t="1.0"):"all"===this.reduceType?(e=" bestValue = f32(bestValue >= 1.0 && candidate >= 1.0); ",t="1.0"):"any"===this.reduceType&&(e=" bestValue = f32(bestValue >= 1.0 || candidate >= 1.0); ",t="0.0");const i="mean"===this.reduceType?"setOutputAtIndex(outputIndex, bestValue / f32(uniforms.reduceSize));":"setOutputAtIndex(outputIndex, bestValue);";return`\n       fn DIV_CEIL(a : u32, b : u32) -> u32 {\n        return ((a - 1u) / b + 1u);\n       }\n\n       ${`\n         var<workgroup> xBestValues : array<f32, ${n}>;\n       `}\n       fn getOffset(outputIndex : i32) -> i32 {\n         let outputCoords = getCoordsFromIndex(outputIndex);\n         let offset = ${1===this.outputShape.length?"outputCoords":"outputCoords[0]"} * uniforms.reduceSize;\n          return offset;\n       }\n       ${x("index")} {\n         let outputIndex = index / ${n};\n         let offset = getOffset(outputIndex);\n         var bestValue = ${t};\n         let Length = uniforms.reduceSize;\n         let WorkPerThread = DIV_CEIL(u32(Length), ${n}u);\n         for (var k = i32(localId.x); k < Length && outputIndex < uniforms.size;\n             k = k + ${n}) {\n           let candidate = f32(x[offset + k]);\n           ${e}\n         }\n         xBestValues[localId.x] = bestValue;\n         workgroupBarrier();\n\n         var reduceSize = min(u32(Length), ${n}u);\n         for (var currentSize = reduceSize / 2u; reduceSize > 1u;\n             currentSize = reduceSize / 2u) {\n           let interval = DIV_CEIL(reduceSize, 2u);\n           if (localId.x < currentSize) {\n            let candidate = xBestValues[localId.x + interval];\n            ${e}\n            xBestValues[localId.x] = bestValue;\n           }\n           reduceSize = interval;\n           workgroupBarrier();\n         }\n\n         if (localId.x == 0u && outputIndex < uniforms.size) {\n          ${i}\n        }\n       }\n     `}}
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
const On={mean:"float32",all:"bool",any:"bool"};function Bn(e,t,n,i,a){const s=e.shape.length,o=[],u=r.util.parseAxisParam(t,e.shape);let d=u;const l=r.backend_util.getAxesPermutation(d,s);let h=e;null!=l&&(h=En({inputs:{x:e},attrs:{perm:l},backend:a}),d=r.backend_util.getInnerMostAxes(d.length,s),o.push(h)),r.backend_util.assertAxesAreInnerMostDims(i,d,s);const[p,c]=r.backend_util.computeOutAndReduceShapes(h.shape,d);let f,m=p;if(n&&(m=r.backend_util.expandShapeToKeepDim(p,u)),"max"!==i&&"prod"!==i||!a.shouldExecuteOnCPU([h])){const t=r.util.sizeFromShape(c),n={windowSize:t,inSize:t,batchSize:r.util.sizeFromShape(h.shape)/t,outSize:1},s=On[i]||(0,r.sumOutType)(e.dtype),u=[{type:"int32",data:[t]}],d=new Ln(n,i,a.device.limits.maxComputeWorkgroupSizeX),l=a.runWebGPUProgram(d,[h],s,u);o.push(l),f=Rt({inputs:{x:l},attrs:{shape:m},backend:a})}else{const t=a.tensorMap.get(h.dataId).values;switch(i){case"max":const n=nn(t,r.util.sizeFromShape(c),m,e.dtype);f=a.makeTensorInfo(m,e.dtype,n);break;case"prod":const{outVals:s,outShape:o,outDtype:u}=dn(h.shape,h.dtype,t,d);f=a.makeTensorInfo(o,u,s);break;default:throw new Error(`${i} CPU implementation is not yet supported.`)}}return o.forEach((e=>a.disposeData(e.dataId))),f}const Wn={kernelName:r.All,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{keepDims:a,axis:s}=i;return Bn(r,s,a,"all",n)}};const Un={kernelName:r.Any,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{keepDims:a,axis:s}=i;return Bn(r,s,a,"any",n)}};
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
class Mn{constructor(e,t,n){this.workgroupSize=[64,1,1],this.variableNames=["x"],this.uniforms="infinityValue : f32,",this.size=!0;const i=[t];this.op="min"===n?"<":">";const[a,s]=r.backend_util.computeOutAndReduceShapes(e,i);this.outputShape=0===a.length?[1]:a,this.dispatchLayout=F(this.outputShape),r.util.sizeFromShape(s)<32?(this.type="plain",this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize)):(this.type="shared",this.dispatch=N(this.dispatchLayout,this.outputShape,[1,1,1])),this.inputShape=e,this.shaderKey=`argMinMax_${this.op}_${this.type}`}getUserCode(){const e=this.workgroupSize[0],t=()=>1===this.inputShape.length?"uniforms.xShape":`uniforms.xShape.${b(this.inputShape.length-1)}`,n=()=>{let e="";if(1===this.outputShape.length)1!==this.inputShape.length&&(e+="outputCoords,");else for(let t=0;t<this.outputShape.length;t++)e+=`outputCoords.${b(t)},`;return e};if("shared"===this.type){return`\n      fn DIV_CEIL(a : u32, b : u32) -> u32 {\n        return ((a - 1u) / b + 1u);\n      }\n\n      ${`\n      var<workgroup> xBestIndices : array<i32, ${e}>;\n      var<workgroup> xBestValues : array<f32, ${e}>;\n    `}\n\n      ${x("index")} {\n        let outputIndex = index / ${e};\n        let reduceLength = ${t()};\n\n        var bestIndex = i32(localId.x);\n        var bestValue = uniforms.infinityValue;\n        let outputCoords = getCoordsFromIndex(outputIndex);\n        for (var k = i32(localId.x); k < reduceLength && outputIndex < uniforms.size;\n            k = k + ${e}) {\n          let candidate = getX(${n()} k);\n          if (!isnan(candidate) && candidate ${this.op} bestValue) {\n            bestValue = candidate;\n            bestIndex = k;\n          }\n        }\n        xBestValues[localId.x] = bestValue;\n        xBestIndices[localId.x] = bestIndex;\n        workgroupBarrier();\n\n        var reduceSize = min(u32(reduceLength), ${e}u);\n        for (var currentSize = reduceSize / 2u; reduceSize > 1u;\n            currentSize = reduceSize / 2u) {\n          let interval = DIV_CEIL(reduceSize, 2u);\n          if (localId.x < currentSize) {\n            let candidate = xBestValues[localId.x + interval];\n            if (candidate ${this.op} bestValue) {\n              bestValue = candidate;\n              xBestValues[localId.x] = bestValue;\n              xBestIndices[localId.x] = xBestIndices[localId.x + interval];\n            }\n          }\n          reduceSize = interval;\n          workgroupBarrier();\n        }\n\n        if (localId.x == 0u && outputIndex < uniforms.size) {\n          setOutputAtIndexI32(outputIndex, xBestIndices[localId.x]);\n        }\n      }\n    `}return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let outputCoords = getCoordsFromIndex(index);\n          var bestIndex = 0;\n          var bestValue = getX(${n()} 0);\n          let reduceLength = ${t()};\n          for (var i = 1; i < reduceLength; i++) {\n            let candidate = getX(${n()} i);\n            if (candidate ${this.op} bestValue) {\n              bestValue = candidate;\n              bestIndex = i;\n            }\n          }\n          setOutputAtIndexI32(index, bestIndex);\n        }\n      }\n      `}}const Vn={kernelName:r.ArgMax,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{axis:s}=i;let o=r.util.parseAxisParam(s,a.shape);const u=r.backend_util.getAxesPermutation(o,a.shape.length);let d=a;const l=[];null!=u&&(d=En({inputs:{x:a},backend:n,attrs:{perm:u}}),l.push(d),o=r.backend_util.getInnerMostAxes(o.length,d.shape.length)),r.backend_util.assertAxesAreInnerMostDims("argMax",[o[0]],d.shape.length);const h=new Mn(d.shape,o[0],"max"),p=[{type:"float32",data:[Number.NEGATIVE_INFINITY]}],c=n.runWebGPUProgram(h,[d],"int32",p);return l.forEach((e=>n.disposeData(e.dataId))),c}};const Gn={kernelName:r.ArgMin,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{axis:s}=i;let o=r.util.parseAxisParam(s,a.shape);const u=r.backend_util.getAxesPermutation(o,a.shape.length);let d=a;const l=[];null!=u&&(d=En({inputs:{x:a},backend:n,attrs:{perm:u}}),l.push(d),o=r.backend_util.getInnerMostAxes(o.length,d.shape.length)),r.backend_util.assertAxesAreInnerMostDims("argMin",[o[0]],d.shape.length);const h=new Mn(d.shape,o[0],"min"),p=[{type:"float32",data:[Number.POSITIVE_INFINITY]}],c=n.runWebGPUProgram(h,[d],"int32",p);return l.forEach((e=>n.disposeData(e.dataId))),c}},Hn=Lt({opType:be.ASIN}),jn={kernelName:r.Asin,backendName:"webgpu",kernelFunc:Hn},Xn=Lt({opType:be.ASINH}),Kn={kernelName:r.Asinh,backendName:"webgpu",kernelFunc:Xn},Yn=Lt({opType:be.ATAN}),qn={kernelName:r.Atan,backendName:"webgpu",kernelFunc:Yn},Qn=Ot({opType:U.ATAN2}),Zn={kernelName:r.Atan2,backendName:"webgpu",kernelFunc:Qn},Jn=Lt({opType:be.ATANH}),ei={kernelName:r.Atanh,backendName:"webgpu",kernelFunc:Jn};
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
class ti{constructor(e){this.variableNames=["x"],this.uniforms="strides : vec2<i32>,",this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="poolWithFilterSizeEqualsOne"}getUserCode(){return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let batch = coords[0];\n          let d = coords[3];\n\n          let xRCCorner = coords.yz * uniforms.strides;\n          let xRCorner = xRCCorner.x;\n          let xCCorner = xRCCorner.y;\n\n          let value = getX(batch, xRCorner, xCCorner, d);\n          setOutputAtIndex(index, value);\n        }\n      }\n    `}}
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
class ni{constructor(e,t,n=!1,i=!1,r=!1){if(this.variableNames=["x"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, convDims : vec2<i32>, filterDims : vec2<i32>,",this.workgroupSize=[128,1,1],this.size=!0,"avg"===t&&n)throw new Error("Cannot compute positions for average pool.");this.outputShape=e.outShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=t,this.computePositions=n,this.flattenPositions=i,this.includeBatchIndex=r,this.shaderKey=`pool2D_${t}_${n}_${i}_${r}`}getUserCode(){let e;if("avg"===this.poolType)e="resultValue = resultValue + value; count = count + 1.0;";else if(this.computePositions){e=`let currMaxValue = mix(value, maxValue, maxValueFound);\n      if (value >= currMaxValue) {\n        maxValue = value;\n        maxValueFound = 1.0;\n        maxPosition = ${this.flattenPositions?this.includeBatchIndex?"((batch * uniforms.xShape[1] + xR) * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"(xR * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"wR * uniforms.filterDims.y + wC"};\n      }`}else e="resultValue = max(value, resultValue);";let t="resultValue";"avg"===this.poolType&&(t="resultValue / max(count, 1.0)");return`\n      ${x("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n          let batch = coords[0];\n          let d = coords[3];\n          let xRCCorner = vec2<i32>(coords.yz) * uniforms.strides - uniforms.pads;\n          let xRCorner = xRCCorner.x;\n          let xCCorner = xRCCorner.y;\n\n          ${this.computePositions?"var maxValue = 0.0;\n            var maxValueFound = 0.0;\n            var maxPosition = 0;":`var resultValue = ${"avg"===this.poolType?"0.0":"-1.0 / pow(10.0, -20.0)"};`}\n\n          var count = 0.0;\n          for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + uniforms.dilations.x) {\n            let xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= uniforms.convDims.x) {\n              continue;\n            }\n\n            for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + uniforms.dilations.y) {\n              let xC = xCCorner + wC;\n              if (xC < 0 || xC >= uniforms.convDims.y) {\n                continue;\n              }\n\n              let value = getX(batch, xR, xC, d);\n              ${e}\n            }\n          }\n\n          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${t});`}\n        }\n      }\n    `}}class ii{constructor(e,t,n=!1,i=!1,r=!1){if(this.variableNames=["x"],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, convDims : vec3<i32>, filterDims : vec3<i32>,",this.workgroupSize=[128,1,1],this.size=!0,"avg"===t&&n)throw new Error("Cannot compute positions for average pool.");this.outputShape=e.outShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=t,this.computePositions=n,this.flattenPositions=i,this.includeBatchIndex=r,this.shaderKey=`pool3D_${t}_${n}_${i}_${r}`}getUserCode(){let e;if("avg"===this.poolType)e="resultValue += value; count += 1.0;";else if(this.computePositions){e=`let currMaxValue = mix(value, maxValue, maxValueFound);\n      if (value >= currMaxValue) {\n        maxValue = value;\n        maxValueFound = 1.0;\n        maxPosition = ${this.flattenPositions?this.includeBatchIndex?"(((batch * uniforms.xShape.y + xD) * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"((xD * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"wD * uniforms.filterDims.y * uniforms.filterDims.y + wR * uniforms.filterDims.z + wC"};\n      }`}else e="resultValue = max(value, resultValue);";let t="resultValue";"avg"===this.poolType&&(t="resultValue / max(count, 1.0)");return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let batch = coords.x;\n          let ch = coords.u;\n\n          let xCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;\n          let xDCorner = xCorner.x;\n          let xRCorner = xCorner.y;\n          let xCCorner = xCorner.z;\n\n          ${this.computePositions?"var maxValue = 0.0;\n            var maxValueFound = 0.0;\n            var maxPosition = 0;":`var resultValue = ${"avg"===this.poolType?"0.0":"-1.0 / pow(10.0, -20.0)"};`}\n\n          var count = 0.0;\n          for (var wD = 0; wD < uniforms.filterDims.x; wD++) {\n            let xD = xDCorner + wD;\n            if (xD < 0 || xD >= uniforms.convDims.x) {\n              continue;\n            }\n\n            for (var wR = 0; wR < uniforms.filterDims.y; wR++) {\n              let xR = xRCorner + wR;\n              if (xR < 0 || xR >= uniforms.convDims.y) {\n                continue;\n              }\n\n              for (var wC = 0; wC < uniforms.filterDims.z; wC++) {\n                let xC = xCCorner + wC;\n                if (xC < 0 || xC >= uniforms.convDims.z) {\n                  continue;\n                }\n\n                let value = getX(batch, xD, xR, xC, ch);\n                ${e}\n              }\n            }\n          }\n\n          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${t});`}\n        }\n      }\n    `}}
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
function ri(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{reductionIndices:a,keepDims:s}=i;return Bn(r,a,s,"max",n)}const ai={kernelName:r.Max,backendName:"webgpu",kernelFunc:ri};
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
function si(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{keepDims:a,axis:s}=i;return Bn(r,s,a,"mean",n)}const oi={kernelName:r.Mean,backendName:"webgpu",kernelFunc:si};
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
function ui(e,t,n,i){if(1===t.filterWidth&&1===t.filterHeight&&r.util.arraysEqual(t.inShape,t.outShape))return _t({inputs:{x:e},backend:i});if(t.filterWidth===t.inWidth&&t.filterHeight===t.inHeight&&1===t.batchSize&&"VALID"===t.padInfo.type){const a=e.shape.length,s=Rt({inputs:{x:e},backend:i,attrs:{shape:[e.shape[a-3]*e.shape[a-2],e.shape[a-1]]}});let o;"avg"===n?o=si({inputs:{x:s},backend:i,attrs:{axis:0,keepDims:!1}}):(r.util.assert("max"===n,(()=>`Invalid pool type ${n}`)),o=ri({inputs:{x:s},backend:i,attrs:{reductionIndices:0,keepDims:!1}}));const u=Rt({inputs:{x:o},backend:i,attrs:{shape:t.outShape}});return i.disposeData(s.dataId),i.disposeData(o.dataId),u}let a;const s=[{type:"int32",data:[t.strideHeight,t.strideWidth]}];return 1===t.filterHeight&&1===t.filterWidth?a=new ti(t):("avg"===n?a=new ni(t,"avg"):(r.util.assert("max"===n,(()=>`Invalid pool type ${n}`)),a=new ni(t,"max")),s.push({type:"int32",data:[t.padInfo.top,t.padInfo.left]},{type:"int32",data:[t.dilationHeight,t.dilationWidth]},{type:"int32",data:[t.inHeight,t.inWidth]},{type:"int32",data:[t.effectiveFilterHeight,t.effectiveFilterWidth]})),i.runWebGPUProgram(a,[e],e.dtype,s)}const di={kernelName:r.AvgPool,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{filterSize:s,strides:o,pad:u,dimRoundingMode:d}=i;return ui(a,r.backend_util.computePool2DInfo(a.shape,s,o,1,u,d),"avg",n)}};const li={kernelName:r.AvgPool3D,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{filterSize:s,strides:o,pad:u,dataFormat:d,dimRoundingMode:l}=i,h=r.backend_util.computePool3DInfo(a.shape,s,o,[1,1,1],u,l,d),p=new ii(h,"avg"),c=[{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.padInfo.front,h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.inDepth,h.inHeight,h.inWidth]},{type:"int32",data:[h.effectiveFilterDepth,h.effectiveFilterHeight,h.effectiveFilterWidth]}];return n.runWebGPUProgram(p,[a],a.dtype,c)}};
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
class hi{constructor(e){this.variableNames=["dy"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,\n       outHeight : i32, outWidth : i32, avgMultiplier : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool2DBackprop"}getUserCode(){return`\n      ${x("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d = coords[3];\n\n        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;\n        let dyRCorner = dyRCCorner.x;\n        let dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var wR = 0; wR < uniforms.filterDims[0]; wR = wR + uniforms.dilations[0]) {\n          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);\n\n          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n            continue;\n          }\n          let idyR = i32(dyR);\n\n          for (var wC = 0; wC < uniforms.filterDims[1]; wC = wC + uniforms.dilations[1]) {\n            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);\n\n            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n              continue;\n            }\n            let idyC = i32(dyC);\n\n            let dyValue = getDy(batch, idyR, idyC, d);\n\n            dotProd = dotProd + dyValue * uniforms.avgMultiplier;\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}class pi{constructor(e){this.variableNames=["dy"],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,\n       outDepth : i32, outHeight : i32, outWidth : i32, avgMultiplier : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool3DBackprop"}getUserCode(){return`\n      ${x("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords.x;\n        let ch = coords.u;\n\n        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;\n        let dyDCorner = dyCorner.x;\n        let dyRCorner = dyCorner.y;\n        let dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {\n          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);\n\n          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {\n            continue;\n          }\n          let idyD = i32(dyD);\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);\n\n            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n              continue;\n            }\n            let idyR = i32(dyR);\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);\n\n              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n                continue;\n              }\n              let idyC = i32(dyC);\n\n              let dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              dotProd += dyValue * uniforms.avgMultiplier;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}const ci={kernelName:r.AvgPool3DGrad,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{dy:a,input:s}=t,o=s,{filterSize:u,strides:d,pad:l,dimRoundingMode:h}=i,p=r.backend_util.computePool3DInfo(o.shape,u,d,1,l,h),c=new pi(p),f=1/(p.filterDepth*p.filterHeight*p.filterWidth),m=[{type:"int32",data:[p.strideDepth,p.strideHeight,p.strideWidth]},{type:"int32",data:[p.effectiveFilterDepth-1-p.padInfo.front,p.effectiveFilterHeight-1-p.padInfo.top,p.effectiveFilterWidth-1-p.padInfo.left]},{type:"int32",data:[p.effectiveFilterDepth,p.effectiveFilterHeight,p.effectiveFilterWidth]},{type:"int32",data:[p.outDepth]},{type:"int32",data:[p.outHeight]},{type:"int32",data:[p.outWidth]},{type:"float32",data:[f]}];return n.runWebGPUProgram(c,[a],o.dtype,m)}};const fi={kernelName:r.AvgPoolGrad,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{dy:a,input:s}=t,o=s;L([a,s],"avgPoolGrad");const{filterSize:u,strides:d,pad:l}=i,h=r.backend_util.computePool2DInfo(o.shape,u,d,1,l),p=new hi(h),c=1/(h.filterHeight*h.filterWidth),f=[{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.effectiveFilterHeight-1-h.padInfo.top,h.effectiveFilterWidth-1-h.padInfo.left]},{type:"int32",data:[h.dilationHeight,h.dilationWidth]},{type:"int32",data:[h.effectiveFilterHeight,h.effectiveFilterWidth]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]},{type:"float32",data:[c]}];return n.runWebGPUProgram(p,[a],o.dtype,f)}};const mi={kernelName:r.BatchMatMul,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{a:r,b:a}=t,{transposeA:s,transposeB:o}=i;return At({a:r,b:a,transposeA:s,transposeB:o,backend:n})}};
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
class gi{constructor(e,t){this.variableNames=["source"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.rank=t.length,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.start=e,this.uniforms=`start : ${y(e.length)}, `,this.shaderKey="slice"}getUserCode(){const e=y(this.rank),t=function(e){if(1===e)return"sourceLoc";if(e<=6)return yi.slice(0,e).map((e=>`sourceLoc.${e}`)).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}(this.rank);let n;n=1===this.start.length?this.outputShape.map(((e,t)=>"sourceLoc = uniforms.start + coords;")):this.outputShape.map(((e,t)=>`sourceLoc.${yi[t]} = uniforms.start.${b(t)} + coords.${yi[t]};`));return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          var sourceLoc : ${e};\n          let coords = getCoordsFromIndex(index);\n          ${n.join("\n")}\n          setOutputAtIndex(index, getSource(${t}));\n        }\n      }\n    `}}const yi=["x","y","z","w","u","v"];
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
function bi(e){const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{begin:s,size:o}=i,[u,d]=r.slice_util.parseSliceParams(a,s,o);if(r.slice_util.assertParamsValid(a,u,d),n.shouldExecuteOnCPU([a])||"string"===a.dtype){const e=n.tensorMap.get(a.dataId),t=fn(e.values,u,d,a.shape,a.dtype);return n.makeTensorInfo(d,a.dtype,t)}if(0===r.util.sizeFromShape(d))return n.makeTensorInfo(d,a.dtype,[]);const l=new gi(u,d),h=[{type:"int32",data:u}];return n.runWebGPUProgram(l,[a],a.dtype,h)}const xi={kernelName:r.Slice,backendName:"webgpu",kernelFunc:bi},wi={kernelName:r.BatchToSpaceND,backendName:"webgpu",kernelFunc:e=>{const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{blockShape:s,crops:o}=i;r.util.assert(a.shape.length<=4,(()=>"batchToSpaceND for rank > 4 with a WebGPU backend not implemented yet"));const u=s.reduce(((e,t)=>e*t)),d=r.backend_util.getReshaped(a.shape,s,u),l=r.backend_util.getPermuted(d.length,s.length),h=r.backend_util.getReshapedPermuted(a.shape,s,u),p=r.backend_util.getSliceBeginCoords(o,s.length),c=r.backend_util.getSliceSize(h,o,s.length),f=[],m=Rt({inputs:{x:a},backend:n,attrs:{shape:d}}),g=En({inputs:{x:m},backend:n,attrs:{perm:l}}),y=Rt({inputs:{x:g},backend:n,attrs:{shape:h}}),b=bi({inputs:{x:y},backend:n,attrs:{begin:p,size:c}});return f.push(m),f.push(g),f.push(y),f.forEach((e=>n.disposeData(e.dataId))),b}},vi=`\n  fn bincount_write(index: i32, value: f32) {\n    ${c("&result[index]","value","float32")}\n  }\n`;class Ci{constructor(e,t,n=!1){this.outputShape=[],this.variableNames=["x"],this.uniforms="binCountSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.hasWeights=!0,this.binaryOutput=!1,this.outputShape=e,this.rank=e.length,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.binaryOutput=n,n&&(this.atomic=!1),this.hasWeights=t,this.hasWeights&&this.variableNames.push("w"),this.shaderKey=`bincount_${this.hasWeights}_${this.binaryOutput}_${this.rank}`}getUserCode(){return`\n    ${this.binaryOutput?"\n  fn bincount_write(index: i32, value: f32) {\n    atomicStore(&result[index], bitcast<i32>(value));\n  }\n":vi}\n  ${x("index")} {\n    ${1===this.rank?`if (index < uniforms.xShape) {\n      let indexVal = i32(getX(index));\n      if (indexVal < uniforms.binCountSize) {\n        let value = ${this.binaryOutput?1:this.hasWeights?"getW(index)":"1."};\n        bincount_write(indexVal, value);\n      }\n    }`:`let coord = getCoordsFromIndex(index);\n    if (coordsInBounds2D(coord, uniforms.xShape)) {\n      let indexVal = i32(getX(coord[0], coord[1]));\n      if (indexVal < uniforms.binCountSize) {\n        let value = ${this.binaryOutput?1:this.hasWeights?"getW(coord[0], coord[1])":"1."};\n        bincount_write(coord.x * uniforms.binCountSize + indexVal, value);\n      }\n    }`}\n  }\n  `}}const ki={kernelName:r.Bincount,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a,weights:s}=t,{size:o}=i,u=r.util.sizeFromShape(a.shape),d=r.util.sizeFromShape(s.shape)>0,l=[o],h=s.dtype,p=St({backend:n,attrs:{shape:l,value:0,dtype:h}}),c=new Ci([u],d),f=[{type:"int32",data:[o]}],m=d?[a,s]:[a];return n.runWebGPUProgram(c,m,h,f,p)}};
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
class Si{constructor(e){this.outputShape=[],this.variableNames=["s0","s1"],this.uniforms="s0Size : i32, s1Size : i32, ",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e],this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="broadcastArgs"}getUserCode(){return`\n  ${x("index")} {\n    if (index < uniforms.size) {\n      var s0 = 1.0;\n      var s1 = 1.0;\n      let indexS0 = index - uniforms.size + uniforms.s0Size;\n      let indexS1 = index - uniforms.size + uniforms.s1Size;\n      if (indexS0 >= 0) {\n        s0 = getS0(indexS0);\n      }\n      if (indexS1 >= 0) {\n        s1 = getS1(indexS1);\n      }\n\n      if (s0 == 1.0) {\n        setOutputAtIndex(index, s1);\n      } else if (s1 == 1.0) {\n        setOutputAtIndex(index, s0);\n      } else if (s0 != s1) {\n        setOutputAtIndex(index, uniforms.NAN);\n      } else {\n        setOutputAtIndex(index, s0);\n      }\n    }\n  }\n  `}}const Ii={kernelName:r.BroadcastArgs,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{s0:i,s1:a}=t;if(n.shouldExecuteOnCPU([i,a])){const e=n.tensorMap.get(i.dataId),t=n.tensorMap.get(a.dataId),s=e.values,o=t.values,u=r.backend_util.assertAndGetBroadcastShape(Array.from(s),Array.from(o));return n.makeTensorInfo([u.length],"int32",Int32Array.from(u))}const s=r.util.sizeFromShape(i.shape),o=r.util.sizeFromShape(a.shape),u=Math.max(s,o),d=new Si(u),l=[{type:"int32",data:[s]},{type:"int32",data:[o]}];return n.runWebGPUProgram(d,[i,a],"int32",l)}},Ri=Ot({opType:U.NOT_EQUAL,dtype:"bool",cpuKernelImpl:un}),$i={kernelName:r.NotEqual,backendName:"webgpu",kernelFunc:Ri};
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
function Ai(e){const{inputs:t,backend:n}=e,{input:i}=t;return _t({inputs:{x:n.tensorMap.get(i.dataId).complexTensorInfos.real},backend:n})}const Pi={kernelName:r.Real,backendName:"webgpu",kernelFunc:Ai};const Ni={kernelName:r.Cast,backendName:"webgpu",kernelFunc:
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
function e(t){const{inputs:n,backend:i,attrs:a}=t,{x:s}=n,{dtype:o}=a;if("complex64"===o){if("complex64"===s.dtype)return _t({inputs:{x:s},backend:i});const t=r.zeros(s.shape),n=e({inputs:{x:s},backend:i,attrs:{dtype:"float32"}}),a=Ft({inputs:{real:n,imag:t},backend:i});return t.dispose(),i.disposeData(n.dataId),a}if("complex64"===s.dtype){const t=Ai({inputs:{input:s},backend:i}),n=e({inputs:{x:t},backend:i,attrs:{dtype:o}});return i.disposeData(t.dataId),n}if(!r.util.hasEncodingLoss(s.dtype,o)){const e=_t({inputs:{x:s},backend:i});return{dataId:e.dataId,shape:e.shape,dtype:o}}if(i.shouldExecuteOnCPU([s])){const e=i.tensorMap.get(s.dataId).values,[t,n,r]=Ut(e,s.shape,s.dtype,o);return i.makeTensorInfo(t,n,r)}if("int32"===o)
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
return function(e,t){const n=new Dt(e.shape,be.TO_INT),i=t.runWebGPUProgram(n,[e],"int32");return{dataId:i.dataId,shape:i.shape,dtype:i.dtype}}(s,i);if("bool"===o){const e=i.makeTensorInfo([],"bool",r.util.getTypedArrayFromDType("bool",1)),t=Ri({inputs:{a:s,b:e},backend:i});return i.disposeData(e.dataId),t}throw new Error(`Error in Cast: failed to cast ${s.dtype} to ${o}`)}},zi=Lt({opType:be.CEIL,cpuKernelImpl:Mt}),_i={kernelName:r.Ceil,backendName:"webgpu",kernelFunc:zi};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ti{constructor(e){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workPerThread=4,this.workgroupSize=[64,1,1],this.outputComponent=4,this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="clipVec4"}getUserCode(){return`\n      ${x("index")} {\n        if(index < uniforms.size) {\n          let value = getAByOutputIndex(index);\n          var clampedValue = clamp(\n              value, vec4<f32>(uniforms.minVal), vec4<f32>(uniforms.maxVal));\n          clampedValue = select(clampedValue, value, isnanVec4(value));\n          setOutputAtIndex(index, clampedValue);\n        }\n      }\n    `}}
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
class Fi{constructor(e){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="clip"}getUserCode(){return`\n      ${x("index")} {\n        if(index < uniforms.size) {\n          let value = getAByOutputIndex(index);\n          if (isnan(value)) {\n            setOutputAtIndex(index, value);\n            return;\n          }\n          setOutputAtIndex(index, clamp(value, uniforms.minVal, uniforms.maxVal));\n        }\n      }\n    `}}const Ei={kernelName:r.ClipByValue,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{clipValueMin:s,clipValueMax:o}=i;let u;const d=[{type:"float32",data:[s]},{type:"float32",data:[o]}];return u=r.util.sizeFromShape(a.shape)%4==0?new Ti(a.shape):new Fi(a.shape),n.runWebGPUProgram(u,[a],a.dtype,d)}};
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
class Di{constructor(e){this.outputShape=[],this.variableNames=["real","imag"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="complexAbs"}getUserCode(){return`\n    ${x("index")} {\n      if (index < uniforms.size) {\n        let re = abs(getRealByOutputIndex(index));\n        let im = abs(getImagByOutputIndex(index));\n        let mx = max(re, im);\n\n        // The length function in wgsl may be not underflow-safe on some GPUs.\n        // So the safe solution is to ensure underflow-safety in all cases.\n        setOutputAtIndex(index, select(mx * length(vec2<f32>(1, min(re, im)/mx)), 0.0, mx == 0.0));\n      }\n    }\n  `}}
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
function Li(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}const Oi={kernelName:r.ComplexAbs,backendName:"webgpu",kernelFunc:function(e){const{inputs:t,backend:n}=e,{x:i}=t,r=n.tensorMap.get(i.dataId),a=new Di(i.shape),s=[Li(i,r.complexTensorInfos.real),Li(i,r.complexTensorInfos.imag)];return n.runWebGPUProgram(a,s,s[0].dtype)}};
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
class Bi{constructor(e){this.uniforms="",this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=r.backend_util.computeOutShape(e,1),this.variableNames=e.map(((e,t)=>`T${t}`)),this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.offsetLength=e.length-1;for(let e=0;e<this.offsetLength;e++)this.uniforms+=`offset${e} : i32,`;this.shaderKey="concat"}getUserCode(){const e=[];if(this.offsetLength>0){e.push("if (yC < uniforms.offset0){ setOutputAtCoords(coords.x, coords.y, getT0(yR, yC)); }");for(let t=1;t<this.offsetLength;t++)e.push(`else if (yC < uniforms.offset${[t]}){ setOutputAtCoords(coords.x, coords.y, getT${t}(yR, yC - uniforms.offset${t-1})); }`);const t=this.offsetLength,n=this.offsetLength-1;e.push(`else { setOutputAtCoords(coords.x, coords.y, getT${t}(yR, yC - uniforms.offset${n})); }`)}else e.push("setOutputAtCoords(coords.x, coords.y, getT0(yR, yC));");return`\n      ${x("index")} {\n        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let flatIndex = index * ${this.workPerThread} + i;\n          if(flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndex);\n            let yR = coords.x;\n            let yC = coords.y;\n\n            ${e.join("\n        ")}\n          }\n        }\n      }\n    `}}
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
function Wi(e){const{inputs:t,backend:n}=e,{input:i}=t;return _t({inputs:{x:n.tensorMap.get(i.dataId).complexTensorInfos.imag},backend:n})}const Ui={kernelName:r.Imag,backendName:"webgpu",kernelFunc:Wi};
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
function Mi(e,t,n){const i=e[0].dtype;if("complex64"===i){const i=e.map((e=>Ai({inputs:{input:e},backend:n}))),r=e.map((e=>Wi({inputs:{input:e},backend:n}))),a=Mi(i,t,n),s=Mi(r,t,n),o=Ft({inputs:{real:a,imag:s},backend:n});return i.forEach((e=>n.disposeData(e.dataId))),r.forEach((e=>n.disposeData(e.dataId))),n.disposeData(a.dataId),n.disposeData(s.dataId),o}let a=n.shouldExecuteOnCPU(e);if("string"===i&&(a=!0),a){const a=e.map((e=>{const i=r.util.sizeFromShape(e.shape.slice(t));return Rt({inputs:{x:e},backend:n,attrs:{shape:[-1,i]}})})),s=a.map((e=>({vals:n.readSync(e.dataId),shape:e.shape}))),o=r.backend_util.computeOutShape(a.map((e=>e.shape)),1),u=1===a[0].shape[0],d=Vt(s,o,i,u),l=r.backend_util.computeOutShape(e.map((e=>e.shape)),t),h=n.makeTensorInfo(l,i,d);return a.forEach((e=>n.disposeData(e.dataId))),h}const s=n.device.limits.maxStorageBuffersPerShaderStage-1;if(e.length>s){const i=[];for(let r=0;r<e.length;r+=s){const a=e.slice(r,r+s);i.push(Mi(a,t,n))}const r=Mi(i,t,n);for(const e of i)n.disposeData(e.dataId);return r}const{tensors2D:o,outShape:u}=function(e,t,n){const i=r.backend_util.computeOutShape(e.map((e=>e.shape)),t),a=e.map((e=>Rt({inputs:{x:e},backend:n,attrs:{shape:[r.util.sizeFromShape(e.shape.slice(0,t)),r.util.sizeFromShape(e.shape.slice(t))]}})));return{tensors2D:a,outShape:i}}(e,t,n),d=o.map((e=>e.shape)),l=new Bi(d),h=[],p=new Array(d.length-1);if(p.length>0){p[0]=d[0][1],h.push({type:"int32",data:[p[0]]});for(let e=1;e<p.length;e++)p[e]=p[e-1]+d[e][1],h.push({type:"int32",data:[p[e]]})}const c=n.runWebGPUProgram(l,o,o[0].dtype,h);o.forEach((e=>n.disposeData(e.dataId)));const f=Rt({inputs:{x:c},backend:n,attrs:{shape:u}});return n.disposeData(c.dataId),f}
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
function Vi(e){const{inputs:t,backend:n,attrs:i}=e,{axis:a}=i,s=r.util.parseAxisParam(a,t[0].shape)[0],o=t.map((e=>e.shape));r.backend_util.assertParamsConsistent(o,s);const u=r.backend_util.computeOutShape(t.map((e=>e.shape)),s);if(0===r.util.sizeFromShape(u))return n.makeTensorInfo(u,t[0].dtype,[]);const d=t.filter((e=>r.util.sizeFromShape(e.shape)>0));return 1===d.length?_t({inputs:{x:d[0]},backend:n}):Mi(d,s,n)}const Gi={kernelName:r.Concat,backendName:"webgpu",kernelFunc:Vi};class Hi{constructor(e,t,n,i,r=!1,a=null,s=!1,o=!1){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=e.outShape,this.isChannelsLast="channelsLast"===e.dataFormat,this.isVec4=((e.inChannels%4==0||e.inChannels%3==0)&&this.isChannelsLast||e.outWidth%4==0&&!this.isChannelsLast)&&e.outChannels%4==0,this.dispatchLayout=this.isChannelsLast?{x:[3],y:[1,2],z:[0]}:{x:[2,3],y:[1],z:[0]},this.workgroupSize=_(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=T(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4?(this.outputComponent=4,this.isChannelsLast&&e.inChannels%4!=0?(this.innerElementSize=3,this.variableComponents=[1,4]):(this.innerElementSize=4,this.variableComponents=[4,4]),r&&(this.variableNames.push("bias"),this.variableComponents.push(4)),s&&(this.variableNames.push("preluActivationWeights"),this.variableComponents.push(4))):(this.innerElementSize=this.elementsPerThread[0],r&&this.variableNames.push("bias"),s&&this.variableNames.push("preluActivationWeights")),this.sequentialAccessByThreads=o,this.addBias=r,this.activation=a,this.hasPreluActivationWeights=s,this.tileAOuter=this.workgroupSize[1]*this.elementsPerThread[1],this.tileBOuter=this.workgroupSize[0]*this.elementsPerThread[0],this.tileInner=Math.max(this.workgroupSize[0]*this.innerElementSize,this.workgroupSize[1]),this.fitAOuter=t%this.tileAOuter==0,this.fitBOuter=n%this.tileBOuter==0,this.fitInner=i%this.tileInner==0,this.shaderKey=`conv2DMM_${this.elementsPerThread}_${this.activation}}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.innerElementSize}_${this.isChannelsLast}_${this.sequentialAccessByThreads}`}getUserCode(){const e=this.isVec4?mt(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner):yt(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner,!1,null,this.sequentialAccessByThreads),t=this.isVec4?[this.innerElementSize,4,4]:[1,1,1];return`\n    ${
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
function(e,t,n,i,r=!1,a=null,s=!1,o=4,u=4,d=4){const l=e?"\n      let coord = vec4<i32>(batch, xRow, xCol, xCh);\n      ":"\n      let coord = vec4<i32>(batch, xCh, xRow, xCol);\n      ",h=e?"\n      let coords = vec4<i32>(\n        batch,\n        row / outWidth,\n        row % outWidth,\n        col);\n      ":"\n      let coords = vec4<i32>(\n        batch,\n        row,\n        col / outWidth,\n        col % outWidth);\n      ",p=e?"uniforms.xShape[1]":"uniforms.xShape[2]",c=e?"uniforms.xShape[2]":"uniforms.xShape[3]",f=e?"row":"col",m=e?"col":"row",y=`\n      let inChannels = uniforms.wShape[2];\n      let outWidth = ${e?"uniforms.outShape[2]":"uniforms.outShape[3]"};\n      let outRow = ${f} / outWidth;\n      let outCol = ${f} % outWidth;\n\n      let WRow = ${m} / (uniforms.filterDims[1] * inChannels);\n      let WCol = ${m} / inChannels % uniforms.filterDims[1];\n      let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * WRow - uniforms.pads[0];\n      let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * WCol - uniforms.pads[1];\n      let xCh = ${m} % inChannels;\n      var resData = ${g(o)}(0.0);\n      // The bounds checking is always needed since we use it to pad zero for\n      // the 'same' padding type.\n      if (xRow >= 0 && xRow < ${p} && xCol >= 0 && xCol < ${c}) {\n        ${l}\n        let xIndex = getIndexFromCoords4D(coord, uniforms.xShape);\n        ${(e=>{switch(e){case 1:return"resData = f32(x[xIndex]);";case 3:return"resData = vec3<f32>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);";case 4:return"resData = vec4<f32>(x[xIndex / 4]);";default:throw new Error(`innerElementSize ${e} is not supported.`)}})(o)}\n      }\n      return resData;`,b=e?t&&i?`\n      ${y}`:`\n      if (row < uniforms.dimAOuter && col < uniforms.dimInner) {\n        ${y}\n      }\n      return ${g(o)}(0.0);`:i&&n?`\n      ${y}`:`\n      if (row < uniforms.dimInner && col < uniforms.dimBOuter) {\n        ${y}\n      }\n      return ${g(o)}(0.0);`,x=`${(e=>{switch(e){case 1:return"return f32(W[row * uniforms.wShape[3] + col]);";case 4:return"return vec4<f32>(W[(row * uniforms.wShape[3] + col) / 4]);";default:throw new Error(`innerElementSize ${e} is not supported.`)}})(u)}`,w=g(d),v=g(e?o:u),C=g(e?u:o);return`\n      ${ht(a,s,4===d,4)}\n      fn mm_readA(batch: i32, row : i32, col : i32) -> ${v} {\n        ${e?b:x}\n      }\n\n      fn mm_readB(batch: i32, row : i32, col : i32) -> ${C} {\n        ${e?x:b}\n      }\n\n      fn mm_write(batch: i32, row : i32, col : i32, valueIn : ${w}) {\n        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)\n        {\n        var value = valueIn;\n        let outWidth = ${e?"uniforms.outShape[2]":"uniforms.outShape[3]"};\n        ${h}\n        ${pt(r,a)}\n        setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n        }\n      }`}(this.isChannelsLast,this.fitAOuter,this.fitBOuter,this.fitInner,this.addBias,this.activation,this.hasPreluActivationWeights,t[0],t[1],t[2])}\n    ${e}\n  `}}
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
class ji{constructor(e,t=!1,n=null,i=!1){this.variableNames=["x","W"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>,",this.workgroupSize=[4,4,8],this.outputShape=e.outShape,this.isChannelsLast="channelsLast"===e.dataFormat,this.dispatchLayout=this.isChannelsLast?{x:[2],y:[1],z:[0,3]}:{x:[3],y:[2],z:[0,1]},this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=t,this.activation=n,this.hasPreluActivationWeights=i,t&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`conv2dnaive_${this.activation}_${this.isChannelsLast}`}getUserCode(){return`\n       ${ht(this.activation,this.hasPreluActivationWeights,!1,4)}\n       fn readInp(batch : i32, row : i32, col : i32, chan : i32) -> f32{\n         let coords = vec4<i32>(batch, row, col, chan);\n         if (coordsInBounds4D(coords, uniforms.xShape)) {\n           return  getX(batch, row, col, chan);\n         } else {\n          return 0.0;\n         }\n       }\n       fn readFilt(row : i32, col : i32, xChannel : i32, outChannel : i32) -> f32{\n         let coords = vec4<i32>(row, col, xChannel, outChannel);\n         if(coordsInBounds4D(coords, uniforms.wShape)) {\n           return getW(row, col, xChannel, outChannel);\n          } else {\n            return 0.0;\n          }\n       }\n       fn writeResult(batch : i32, row : i32, col : i32, chan : i32, valueIn : f32) {\n         let coords = ${this.isChannelsLast?"vec4<i32>(batch, row, col, chan);":"vec4<i32>(batch, chan, row, col);"}\n         if (coordsInBounds4D(coords, uniforms.outShape)) {\n           var value = valueIn;\n           ${pt(this.addBias,this.activation)}\n           setOutputAtCoords(coords.x, coords.y, coords.z, coords.w, value);\n         }\n       }\n       ${x("index")} {\n         let coords = getOutputCoords();\n         let batch = coords[0];\n         let outChannel = ${this.isChannelsLast?"coords[3];":"coords[1];"}\n         let outRow = ${this.isChannelsLast?"coords[1];":"coords[2];"}\n         let outCol = ${this.isChannelsLast?"coords[2];":"coords[3];"}\n         var acc : f32 = 0.0;\n         for (var row = 0; row < uniforms.filterDims[0]; row = row + 1) {\n           for (var col = 0; col < uniforms.filterDims[1]; col = col + 1) {\n             let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * row - uniforms.pads[0];\n             let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * col - uniforms.pads[1];\n             for (var xChannel = 0; xChannel < ${this.isChannelsLast?"uniforms.xShape[3];":"uniforms.xShape[1];"} xChannel = xChannel + 1) {\n               ${this.isChannelsLast?"let v = readInp(batch, xRow, xCol, xChannel);":"let v = readInp(batch, xChannel, xRow, xCol);"}\n               let f = readFilt(row, col, xChannel, outChannel);\n               acc = acc + v * f;\n             }\n           }\n         }\n         writeResult(batch, outRow, outCol, outChannel, acc);\n       }\n     `}}
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
class Xi{constructor(e,t){this.variableNames=["x"],this.uniforms="pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, outWidth : i32, itemsPerBlockRow : i32,\n       inChannels : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=t,this.shaderKey=`im2col_${this.isChannelsLast}`}getUserCode(){const e=this.isChannelsLast?1:2,t=this.isChannelsLast?2:3,n=this.isChannelsLast?"coords[1]":"coords[2]",i=this.isChannelsLast?"coords[2]":"coords[1]",r=this.isChannelsLast?"getX(batch, xRow, xCol, ch)":"getX(batch, ch, xRow, xCol)";return`\n    ${x("index")} {\n      let coords = getCoordsFromIndex(index);\n      if(index < uniforms.size) {\n        let batch = coords[0];\n        let row = ${n};\n        let col = ${i};\n        let offsetY = (row / uniforms.outWidth) * uniforms.strides[0] - uniforms.pads[0];\n        let xRow = offsetY + uniforms.dilations[0] * (col / uniforms.itemsPerBlockRow);\n        var value = 0.0;\n        if(xRow < uniforms.xShape[${e}] && xRow >= 0) {\n          let offsetX = (row % uniforms.outWidth) * uniforms.strides[1] -\n              uniforms.pads[1];\n          let xCol = offsetX + uniforms.dilations[1] * ((col %\n              uniforms.itemsPerBlockRow) / uniforms.inChannels);\n          let ch = col % uniforms.inChannels;\n          if(xCol < uniforms.xShape[${t}] && xCol >= 0) {\n            value = ${r};\n          }\n        }\n        setOutputAtIndex(index, value);\n      }\n    }\n   `}}
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
function Ki(e,t){const n=e.length;return n>=3?t?[...e.slice(0,-3),e[n-3]*e[n-2],e[n-1]]:[...e.slice(0,-3),e[n-3],e[n-2]*e[n-1]]:!t&&1===n&&e[0]>1?[e[0],1]:null}function Yi({x:e,filter:t,convInfo:n,backend:i,bias:a=null,preluActivationWeights:s=null,leakyreluAlpha:o=0,activation:u=null}){const d=null!=a,l=null!=s,h="channelsLast"===n.dataFormat,p=h&&n.filterHeight===n.inHeight&&n.filterWidth===n.inWidth&&"VALID"===n.padInfo.type,c=(0,r.env)().getBool("WEBGPU_USE_NAIVE_CONV2D_DEBUG");if(!c&&(p||1===n.filterHeight&&1===n.filterWidth&&1===n.dilationHeight&&1===n.dilationWidth&&1===n.strideHeight&&1===n.strideWidth&&("SAME"===n.padInfo.type||"VALID"===n.padInfo.type)))return function({x:e,filter:t,convInfo:n,backend:i,bias:r=null,preluActivationWeights:a=null,leakyreluAlpha:s=0,activation:o=null}){const u="channelsLast"===n.dataFormat,d=!u,l=[];let h,p;if(u&&n.filterHeight===n.inHeight&&n.filterWidth===n.inWidth&&"VALID"===n.padInfo.type){const r=n.inHeight*n.inWidth*n.inChannels;h=Rt({inputs:{x:e},backend:i,attrs:{shape:[1,n.batchSize,r]}}),p=Rt({inputs:{x:t},backend:i,attrs:{shape:[1,r,n.outChannels]}})}else h=Rt({inputs:{x:e},backend:i,attrs:{shape:u?[n.batchSize,n.inHeight*n.inWidth,n.inChannels]:[n.batchSize,n.inChannels,n.inHeight*n.inWidth]}}),p=Rt({inputs:{x:t},backend:i,attrs:{shape:[1,n.inChannels,n.outChannels]}});if(l.push(h),l.push(p),null!=a){const e=Ki(a.shape,u);null!=e&&(a=Rt({inputs:{x:a},backend:i,attrs:{shape:e}}),l.push(a))}if(null!=r){const e=Ki(r.shape,u);null!=e&&(r=Rt({inputs:{x:r},backend:i,attrs:{shape:e}}),l.push(r))}const c=At({a:u?h:p,b:u?p:h,transposeA:d,transposeB:!1,backend:i,bias:r,activation:o,preluActivationWeights:a,leakyreluAlpha:s}),f=Rt({inputs:{x:c},backend:i,attrs:{shape:n.outShape}});l.push(c);for(const e of l)i.disposeData(e.dataId);return f}({x:e,filter:t,convInfo:n,backend:i,bias:a,activation:u,preluActivationWeights:s,leakyreluAlpha:o});const f=(0,r.env)().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),m=f>-1?f:i.thresholdToIncreaseWorkgroups,g=n.batchSize*Math.ceil(n.outHeight*n.outWidth/32)*Math.ceil(n.outChannels/32);if((0,r.env)().getBool("WEBGPU_CONV_SEPARATE_IM2COL_SHADER")||g<=m)return function({x:e,filter:t,convInfo:n,backend:i,bias:r=null,preluActivationWeights:a=null,leakyreluAlpha:s=0,activation:o=null}){const{filterWidth:u,filterHeight:d,inChannels:l,strideWidth:h,strideHeight:p,padInfo:c,outWidth:f,outHeight:m,dilationWidth:g,dilationHeight:y,dataFormat:b}=n,x="channelsLast"===b,w=u*d*l,v=m*f,C=x?[n.batchSize,v,w]:[n.batchSize,w,v],k=new Xi(C,x),S=[{type:"int32",data:[c.top,c.left]},{type:"int32",data:[p,h]},{type:"int32",data:[y,g]},{type:"int32",data:[f]},{type:"int32",data:[l*u]},{type:"int32",data:[l]}],I=i.runWebGPUProgram(k,[e],e.dtype,S),R=[];R.push(I);const $=Rt({inputs:{x:t},backend:i,attrs:{shape:[1,w,-1]}});if(R.push($),null!=a){const e=Ki(a.shape,x);null!=e&&(a=Rt({inputs:{x:a},backend:i,attrs:{shape:e}}),R.push(a))}if(null!=r){const e=Ki(r.shape,x);null!=e&&(r=Rt({inputs:{x:r},backend:i,attrs:{shape:e}}),R.push(r))}const A=At({a:x?I:$,b:x?$:I,transposeA:!x,transposeB:!1,backend:i,bias:r,activation:o,preluActivationWeights:a,leakyreluAlpha:s}),P=Rt({inputs:{x:A},backend:i,attrs:{shape:n.outShape}});R.push(A);for(const e of R)i.disposeData(e.dataId);return P}({x:e,filter:t,convInfo:n,backend:i,bias:a,preluActivationWeights:s,leakyreluAlpha:o,activation:u});let y;const b=[n.padInfo.top,n.padInfo.left],x=[{type:"int32",data:[n.filterHeight,n.filterWidth]},{type:"int32",data:[...b]},{type:"int32",data:[n.strideHeight,n.strideWidth]},{type:"int32",data:[n.dilationHeight,n.dilationWidth]}];if(c)y=new ji(n,d,u,l);else{const e=h?n.outHeight*n.outWidth:n.outChannels,t=h?n.outChannels:n.outHeight*n.outWidth,r=n.filterHeight*n.filterWidth*n.inChannels;x.push({type:"int32",data:[e]},{type:"int32",data:[t]},{type:"int32",data:[r]});const a=i.adapterInfo.isIntel();y=new Hi(n,e,t,r,d,u,l,a)}const w=[],v=[e,t];d&&(h||1!==a.shape.length||(a=Rt({inputs:{x:a},backend:i,attrs:{shape:[a.shape[0],1,1]}}),w.push(a)),v.push(a)),l&&(h||1!==s.shape.length||(s=Rt({inputs:{x:s},backend:i,attrs:{shape:[s.shape[0],1,1]}}),w.push(s)),v.push(s)),"leakyrelu"===u&&(x.push({type:"float32",data:[o]}),y.uniforms+=" alpha : f32,");const C=i.runWebGPUProgram(y,v,e.dtype,x);for(const e of w)i.disposeData(e.dataId);return C}const qi={kernelName:r.Conv2D,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,attrs:n,backend:i}=e,{x:a,filter:s}=t,{strides:o,pad:u,dataFormat:d,dilations:l,dimRoundingMode:h}=n,p=r.backend_util.convertConv2DDataFormat(d);return Yi({x:a,filter:s,convInfo:r.backend_util.computeConv2DInfo(a.shape,s.shape,o,l,u,h,!1,p),backend:i})}};
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
class Qi{constructor(e){this.variableNames=["dy","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>,",this.workgroupSize=[64,1,1],this.size=!1,this.isVec4=!1,this.workPerThread=1,this.outputShape=e.inShape,this.isChannelsLast="channelsLast"===e.dataFormat,this.isVec4=this.isChannelsLast&&e.outChannels%4==0&&e.inChannels%4==0,this.isVec4?(this.workPerThread=2,this.outputComponent=4,this.workgroupSize=[4,4,4],this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize,[4,this.workPerThread,1])):(this.size=!0,this.workPerThread=1,this.workgroupSize=[64,1,1],this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize)),this.shaderKey=`conv2DDerInput_${this.isChannelsLast}_${this.isVec4}_${this.workPerThread}`}getUserCode(){const e=this.isChannelsLast?1:2,t=this.isChannelsLast?2:3,n=this.isChannelsLast?3:1,i=`\n    ${x()} {\n      let batch = i32(globalId.z) / uniforms.outShape[1];\n      let r = i32(globalId.z) % uniforms.outShape[1];\n      let c = i32(globalId.y) * ${this.workPerThread};\n      let d1 = i32(globalId.x) * 4;\n\n      let dyCorner = vec2<i32>(r, c) - uniforms.pads;\n\n      // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n      // ? = to be determined. : = across all values in that axis.\n      var dotProd: array<vec4<f32>, ${this.workPerThread}>;\n      for (var i = 0; i < ${this.workPerThread}; i++) {\n        dotProd[i] = vec4<f32>(0.0);\n      }\n      for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {\n        let dyR = f32(dyCorner.x + wR) / f32(uniforms.strides.x);\n        let wRPerm = uniforms.filterDims.x - 1 - wR;\n        if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) ||\n            fract(dyR) > 0.0) {\n          continue;\n        }\n        let idyR = i32(dyR);\n\n        for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {\n          let dyC = f32(dyCorner.y + wC) / f32(uniforms.strides.y);\n          let dyC2 = f32(dyCorner.y + 1 + wC) / f32(uniforms.strides.y);\n          let wCPerm = uniforms.filterDims.y - 1 - wC;\n          var bDyCVal = true;\n          var bDyCVal2 = true;\n          if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||\n              fract(dyC) > 0.0) {\n            bDyCVal = false;\n          }\n          if (dyC2 < 0.0 || dyC2 >= f32(uniforms.outBackprop[2]) ||\n              fract(dyC2) > 0.0) {\n            bDyCVal2 = false;\n          }\n\n          let idyC = i32(dyC);\n          let idyC2 = i32(dyC2);\n          if (bDyCVal && bDyCVal2) {\n            let d2Length = uniforms.outBackprop[3];\n            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {\n              let wValue0 = getW(wRPerm, wCPerm, d1, d2);\n              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);\n              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);\n              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);\n              var xValue =  getDy(batch, idyR, idyC, d2);\n              let tmpval = vec4<f32>(dot(xValue, wValue0),\n                                     dot(xValue, wValue1),\n                                     dot(xValue, wValue2),\n                                     dot(xValue, wValue3));\n              dotProd[0] = dotProd[0] + tmpval;\n              xValue = getDy(batch, idyR, idyC2, d2);\n              dotProd[1] = dotProd[1] + vec4<f32>(dot(xValue, wValue0),\n                                                  dot(xValue, wValue1),\n                                                  dot(xValue, wValue2),\n                                                  dot(xValue, wValue3));\n            }\n          } else if (bDyCVal) {\n            let d2Length = uniforms.outBackprop[3];\n            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {\n              let wValue0 = getW(wRPerm, wCPerm, d1, d2);\n              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);\n              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);\n              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);\n              var xValue =  getDy(batch, idyR, idyC, d2);\n              let tmpval = vec4<f32>(dot(xValue, wValue0),\n                                     dot(xValue, wValue1),\n                                     dot(xValue, wValue2),\n                                     dot(xValue, wValue3));\n              dotProd[0] = dotProd[0] + tmpval;\n            }\n          } else if (bDyCVal2) {\n            let d2Length = uniforms.outBackprop[3];\n            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {\n              let wValue0 = getW(wRPerm, wCPerm, d1, d2);\n              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);\n              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);\n              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);\n              var xValue =  getDy(batch, idyR, idyC2, d2);\n              let tmpval = vec4<f32>(dot(xValue, wValue0),\n                                     dot(xValue, wValue1),\n                                     dot(xValue, wValue2),\n                                     dot(xValue, wValue3));\n              dotProd[1] = dotProd[1] + tmpval;\n            }\n          }\n        }\n      }\n\n      for (var i = 0; i < ${this.workPerThread}; i = i + 1) {\n        let coords = vec4<i32>(batch, r, c + i, d1);\n        if (coordsInBounds4D(coords, uniforms.outShape)) {\n          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], dotProd[i]);\n        }\n      }\n    }\n    `;return this.isVec4?`\n    ${i}\n    `:`\n    ${x("index")} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d1 = coords[${n}];\n\n        let dyCorner = vec2<i32>(coords[${e}], coords[${t}]) - uniforms.pads;\n        let dyRCorner = dyCorner.x;\n        let dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {\n          let dyR = (f32(dyRCorner) + f32(wR)) / f32(uniforms.strides.x);\n          let wRPerm = uniforms.filterDims.x - 1 - wR;\n          if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) || fract(dyR) > 0.0 ||\n              wRPerm < 0) {\n            continue;\n          }\n          let idyR = i32(dyR);\n\n          for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {\n            let dyC = (f32(dyCCorner) + f32(wC)) / f32(uniforms.strides.y);\n            let wCPerm = uniforms.filterDims.y - 1 - wC;\n            if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||\n                fract(dyC) > 0.0 || wCPerm < 0) {\n              continue;\n            }\n            let idyC = i32(dyC);\n\n            for (var d2 = 0; d2 < uniforms.outBackprop[3]; d2 = d2 + 1) {\n              let xValue = ${this.isChannelsLast?"getDy(batch, idyR, idyC, d2)":"getDy(batch, d2, idyR, idyC)"};\n              let wValue = getW(wRPerm, wCPerm, d1, d2);\n              dotProd = dotProd + xValue * wValue;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}}class Zi{constructor(e){this.variableNames=["x","dy"],this.uniforms="pads : vec2<i32>, strides : vec2<i32>, batchSize : i32, outHeight : i32, outWidth : i32, inHeight : i32, inWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.filterShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast="channelsLast"===e.dataFormat,this.shaderKey=`conv2DDerFilter_${this.isChannelsLast}`}getUserCode(){return`\n    ${x("index")} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let wR = coords[0];\n        let wC = coords[1];\n        let d1 = coords[2];\n        let d2 = coords[3];\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var b = 0; b < uniforms.batchSize; b = b + 1) {\n          for (var yR = 0; yR < uniforms.outHeight; yR = yR + 1) {\n            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];\n            if (xR < 0 || xR >= uniforms.inHeight) {\n              continue;\n            }\n\n            for (var yC = 0; yC < uniforms.outWidth; yC = yC + 1) {\n              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];\n\n              if (xC < 0 || xC >= uniforms.inWidth) {\n                continue;\n              }\n\n              if (${this.isChannelsLast}) {\n                let dyValue = getDy(b, yR, yC, d2);\n                let xValue = getX(b, xR, xC, d1);\n                dotProd = dotProd + xValue * dyValue;\n              } else {\n                let dyValue = getDy(b, d2, yR, yC);\n                let xValue = getX(b, d1, xR, xC);\n                dotProd = dotProd + xValue * dyValue;\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}}class Ji{constructor(e){this.variableNames=["x","dy"],this.uniforms="pads : vec3<i32>, strides : vec3<i32>, batchSize : i32, outDepth : i32,\n       outHeight : i32, outWidth : i32, inDepth : i32, inHeight : i32, inWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.filterShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerFilter"}getUserCode(){return`\n    ${x("index")} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let wF = coords.x;\n        let wR = coords.y;\n        let wC = coords.z;\n        let d1 = coords.w;\n        let d2 = coords.u;\n\n        var dotProd = 0.0;\n        for (var b = 0; b < uniforms.batchSize; b++) {\n          for (var yF = 0; yF < uniforms.outDepth; yF++) {\n            let xF = wF + yF * uniforms.strides[0] - uniforms.pads[0];\n            if (xF < 0 || xF >= uniforms.inDepth) {\n              continue;\n            }\n\n            for (var yR = 0; yR < uniforms.outHeight; yR++) {\n              let xR = wR + yR * uniforms.strides[1] - uniforms.pads[1];\n              if (xR < 0 || xR >= uniforms.inHeight) {\n                continue;\n              }\n\n              for (var yC = 0; yC < uniforms.outWidth; yC++) {\n                let xC = wC + yC * uniforms.strides[2] - uniforms.pads[2];\n                if (xC < 0 || xC >= uniforms.inWidth) {\n                  continue;\n                }\n\n                let dyValue = getDy(b, yF, yR, yC, d2);\n                let xValue = getX(b, xF, xR, xC, d1);\n                dotProd += xValue * dyValue;\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}}class er{constructor(e){this.variableNames=["dy","W"],this.uniforms="filterDims : vec3<i32>, pads : vec3<i32>, strides : vec3<i32>,\n      outDepth : i32, outHeight : i32, outWidth : i32, outChannels : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerInput"}getUserCode(){return`\n    ${x("index")} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords.x;\n        let d1 = coords.u;\n\n        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;\n        let dyFCorner = dyCorner.x;\n        let dyRCorner = dyCorner.y;\n        let dyCCorner = dyCorner.z;\n\n        var dotProd = 0.0;\n        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {\n          let dyF = f32(dyFCorner + wF) / f32(uniforms.strides[0]);\n          if (dyF < 0.0 || dyF >= f32(uniforms.outDepth) || fract(dyF) > 0.0) {\n            continue;\n          }\n          let idyF = i32(dyF);\n\n          let wFPerm = uniforms.filterDims[0] - 1 - wF;\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);\n\n            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n              continue;\n            }\n            let idyR = i32(dyR);\n\n            let wRPerm = uniforms.filterDims[1] - 1 - wR;\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);\n\n              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n                continue;\n              }\n              let idyC = i32(dyC);\n\n              let wCPerm = uniforms.filterDims[2] - 1 - wC;\n\n              for (var d2 = 0; d2 < uniforms.outChannels; d2++) {\n                let xValue = getDy(batch, idyF, idyR, idyC, d2);\n                let wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}}const tr={kernelName:r.Conv2DBackpropFilter,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a,dy:s}=t,{strides:o,pad:u,dataFormat:d,dimRoundingMode:l,filterShape:h}=i,p=r.backend_util.convertConv2DDataFormat(d),c=r.backend_util.computeConv2DInfo(a.shape,h,o,1,u,l,!1,p),f=new Zi(c),m=[{type:"int32",data:[c.padInfo.top,c.padInfo.left]},{type:"int32",data:[c.strideHeight,c.strideWidth]},{type:"int32",data:[c.batchSize]},{type:"int32",data:[c.outHeight]},{type:"int32",data:[c.outWidth]},{type:"int32",data:[c.inHeight]},{type:"int32",data:[c.inWidth]}];return n.runWebGPUProgram(f,[a,s],a.dtype,m)}};class nr{constructor(e){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=e.inShape,r.util.assert("channelsLast"===e.dataFormat,(()=>"TODO: NCHW is unimplemented")),this.isVec4=e.inChannels%4==0&&e.outChannels%4==0,this.dispatchLayout={x:[3],y:[1,2],z:[0]},this.workgroupSize=_(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=T(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4&&(this.outputComponent=4,this.variableComponents=[4,1]),this.shaderKey=`conv2DDerInputMM_${this.isVec4}_${this.elementsPerThread}`}getUserCode(){const e=this.isVec4?mt(this.elementsPerThread,this.workgroupSize):yt(this.elementsPerThread,this.workgroupSize);return`\n    ${
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
function(e=4){const t=`if (row < uniforms.dimAOuter && col < uniforms.dimInner) {\n        \n      let outRow = row / uniforms.outShape[2];\n      let outCol = row % uniforms.outShape[2];\n\n      let WRow = col / (uniforms.filterDims[1] * uniforms.outBackprop[3]);\n      let WCol = col / uniforms.outBackprop[3] % uniforms.filterDims[1];\n      let xR = f32(outRow - uniforms.pads[0] + WRow) / f32(uniforms.strides[0]);\n      let xC = f32(outCol - uniforms.pads[1] + WCol) / f32(uniforms.strides[1]);\n      if (xR < 0.0 || xR >= f32(uniforms.outBackprop[1]) || fract(xR) > 0.0) {\n        return ${g(e)}(0.0);\n      }\n      if (xC < 0.0 || xC >= f32(uniforms.outBackprop[2]) || fract(xC) > 0.0) {\n        return ${g(e)}(0.0);\n      }\n      let coord = vec4<i32>(\n          batch,\n          i32(xR),\n          i32(xC),\n          col % uniforms.outBackprop[3]);\n      return x[getIndexFromCoords4D(coord, uniforms.xShape)/${e}];\n      }\n      return ${g(e)}(0.0);`;return`\n  fn mm_readA(batch: i32, row : i32, col : i32) -> ${g(e)} {\n    ${t}\n  }\n\n  fn mm_readB(batch: i32, row : i32, col : i32) -> ${g(e)} {\n    let coordX = uniforms.filterDims.x - 1 -\n        row / (uniforms.filterDims[1] * uniforms.outBackprop[3]);\n    let coordY = uniforms.filterDims.y - 1 -\n        (row / uniforms.outBackprop[3]) % uniforms.filterDims[1];\n    if (row < uniforms.dimInner && col < uniforms.dimBOuter &&\n        coordX >= 0 && coordY >= 0) {\n      let rowInner = row % uniforms.outBackprop[3];\n      let coord = vec4<i32>(coordX, coordY, col, rowInner);\n      ${(e=>{switch(e){case 1:return"return W[getIndexFromCoords4D(coord, uniforms.wShape)];";case 4:return"\n            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);\n            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);\n            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);\n            let v0 = W[getIndexFromCoords4D(coord, uniforms.wShape)];\n            let v1 = W[getIndexFromCoords4D(coord1, uniforms.wShape)];\n            let v2 = W[getIndexFromCoords4D(coord2, uniforms.wShape)];\n            let v3 = W[getIndexFromCoords4D(coord3, uniforms.wShape)];\n            return vec4<f32>(v0, v1, v2, v3);\n            ";default:throw new Error(`innerElementSize ${e} is not supported.`)}})(e)}\n    }\n    return ${g(e)}(0.0);\n  }\n\n  fn mm_write(batch: i32, row : i32, col : i32, valueInput : ${g(e)}) {\n    if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {\n      var value = valueInput;\n      let outCoord = vec4<i32>(\n          batch,\n          row / uniforms.outShape[2],\n          row % uniforms.outShape[2],\n          col);\n      result[getIndexFromCoords4D(outCoord, uniforms.outShape)/${e}] = value;\n    }\n  }`}(this.isVec4?4:1)}\n    ${e}\n    `}}const ir={kernelName:r.Conv2DBackpropInput,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{dy:a,filter:s}=t,{inputShape:o,strides:u,pad:d,dataFormat:l,dimRoundingMode:h}=i,p=r.backend_util.convertConv2DDataFormat(l),c=r.backend_util.computeConv2DInfo(o,s.shape,u,1,d,h,!1,p),f=[{type:"int32",data:[c.filterHeight,c.filterWidth]},{type:"int32",data:[c.filterHeight-1-c.padInfo.top,c.filterWidth-1-c.padInfo.left]},{type:"int32",data:[c.strideHeight,c.strideWidth]},{type:"int32",data:[c.batchSize,c.outHeight,c.outWidth,c.outChannels]}];let m;if((0,r.env)().getBool("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE")||"channelsLast"!==c.dataFormat)m=new Qi(c);else{m=new nr(c);const e=c.inHeight*c.inWidth,t=c.inChannels,n=c.filterHeight*c.filterWidth*c.outChannels;f.push({type:"uint32",data:[e]},{type:"uint32",data:[t]},{type:"uint32",data:[n]})}return n.runWebGPUProgram(m,[a,s],"float32",f)}};
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
class rr{constructor(e){this.variableNames=["x","W"],this.uniforms="filterDims: vec3<i32>, pads: vec3<i32>, strides: vec3<i32>, dilations: vec3<i32>,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3dnaive"}getUserCode(){return`\n    ${x("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let batch = coords.x;\n        let d2 = coords.u;\n\n        let xFRCCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;\n        let xFCorner = xFRCCorner.x;\n        let xRCorner = xFRCCorner.y;\n        let xCCorner = xFRCCorner.z;\n\n        let inputDepthNearestVec4 = (uniforms.xShape.u / 4) * 4;\n        let inputDepthVec4Remainder = uniforms.xShape.u % 4;\n\n        var dotProd = 0.0;\n        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {\n          let xF = xFCorner + wF * uniforms.dilations[0];\n          if (xF < 0 || xF >= uniforms.xShape.y) {\n            continue;\n          }\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let xR = xRCorner + wR * uniforms.dilations[1];\n            if (xR < 0 || xR >= uniforms.xShape.z) {\n              continue;\n            }\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let xC = xCCorner + wC * uniforms.dilations[2];\n              if (xC < 0 || xC >= uniforms.xShape.w) {\n                continue;\n              }\n\n              for (var d1 = 0; d1 < inputDepthNearestVec4; d1 += 4) {\n                let xValues = vec4<f32>(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                let wValues = vec4<f32>(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (inputDepthVec4Remainder == 1) {\n                dotProd += getX(batch, xF, xR, xC, inputDepthNearestVec4) *\n                  getW(wF, wR, wC, inputDepthNearestVec4, d2);\n              } else if (inputDepthVec4Remainder == 2) {\n                let xValues = vec2<f32>(\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4),\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1)\n                );\n                let wValues = vec2<f32>(\n                  getW(wF, wR, wC, inputDepthNearestVec4, d2),\n                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (inputDepthVec4Remainder == 3) {\n                let xValues = vec3<f32>(\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4),\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2)\n                );\n                let wValues = vec3<f32>(\n                  getW(wF, wR, wC, inputDepthNearestVec4, d2),\n                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2),\n                  getW(wF, wR, wC, inputDepthNearestVec4 + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }`}}const ar={kernelName:r.Conv3D,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a,filter:s}=t,{strides:o,pad:u,dilations:d}=i,l=r.backend_util.computeConv3DInfo(a.shape,s.shape,o,d,u),h=[l.padInfo.front,l.padInfo.top,l.padInfo.left],p=[{type:"int32",data:[l.filterDepth,l.filterHeight,l.filterWidth]},{type:"int32",data:[...h]},{type:"int32",data:[l.strideDepth,l.strideHeight,l.strideWidth]},{type:"int32",data:[l.dilationDepth,l.dilationHeight,l.dilationWidth]}],c=new rr(l),f=(0,r.upcastType)(a.dtype,s.dtype);return n.runWebGPUProgram(c,[a,s],f,p)}};const sr={kernelName:r.Conv3DBackpropFilterV2,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a,dy:s}=t,{strides:o,pad:u,filterShape:d}=i,l=r.backend_util.computeConv3DInfo(a.shape,d,o,1,u),h=new Ji(l),p=[{type:"int32",data:[l.padInfo.front,l.padInfo.top,l.padInfo.left]},{type:"int32",data:[l.strideDepth,l.strideHeight,l.strideWidth]},{type:"int32",data:[l.batchSize]},{type:"int32",data:[l.outDepth]},{type:"int32",data:[l.outHeight]},{type:"int32",data:[l.outWidth]},{type:"int32",data:[l.inDepth]},{type:"int32",data:[l.inHeight]},{type:"int32",data:[l.inWidth]}];return n.runWebGPUProgram(h,[a,s],s.dtype,p)}};const or={kernelName:r.Conv3DBackpropInputV2,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{dy:a,filter:s}=t,{strides:o,pad:u,inputShape:d}=i,l=r.backend_util.computeConv3DInfo(d,s.shape,o,1,u),h=new er(l),p=[{type:"int32",data:[l.filterDepth,l.filterHeight,l.filterWidth]},{type:"int32",data:[l.filterDepth-1-l.padInfo.front,l.filterHeight-1-l.padInfo.top,l.filterWidth-1-l.padInfo.left]},{type:"int32",data:[l.strideDepth,l.strideHeight,l.strideWidth]},{type:"int32",data:[l.outDepth]},{type:"int32",data:[l.outHeight]},{type:"int32",data:[l.outWidth]},{type:"int32",data:[l.outChannels]}];return n.runWebGPUProgram(h,[a,s],a.dtype,p)}},ur=Lt({opType:be.COS}),dr={kernelName:r.Cos,backendName:"webgpu",kernelFunc:ur},lr=Lt({opType:be.COSH}),hr={kernelName:r.Cosh,backendName:"webgpu",kernelFunc:lr};
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
class pr{constructor(e,t,n,i){this.variableNames=["Image","Boxes","BoxInd"],this.uniforms="extrapolationValue : f32,",this.workgroupSize=[64,1,1],this.size=!0;const[r]=t;this.outputShape=[r,n[0],n[1],e],this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.methodId="bilinear"===i?1:0,this.cropHeightBiggerThan1=this.outputShape[1]>1,this.cropWidthBiggerThan1=this.outputShape[2]>1,this.shaderKey=`cropAndResize_${this.methodId}_${this.cropHeightBiggerThan1}_${this.cropWidthBiggerThan1}`}getUserCode(){const[e,t]=["f32(uniforms.imageShape[1] - 1)","f32(uniforms.imageShape[2] - 1)"],[n,i,r]=this.cropHeightBiggerThan1?[`(${e} / f32(uniforms.outShape[1] - 1))`,"(y2-y1) * height_ratio",`y1*${e} + f32(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${e}`],[a,s,o]=this.cropWidthBiggerThan1?[`(${t} / f32(uniforms.outShape[2] - 1))`,"(x2-x1) * width_ratio",`x1*${t} + f32(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${t}`];return`\n    ${x("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let height_ratio = f32(${n});\n        let width_ratio = f32(${a});\n        let b = coords[0];\n        let y = coords[1];\n        let x = coords[2];\n        let d = coords[3];\n        // get box vals\n        let y1 = getBoxes(b, 0);\n        let x1 = getBoxes(b, 1);\n        let y2 = getBoxes(b, 2);\n        let x2 = getBoxes(b, 3);\n        // get image in batch index\n        let bInd = i32(round(getBoxInd(b)));\n        if(bInd < 0 || bInd >= uniforms.outShape[0]) {\n          return;\n        }\n        let height_scale = ${i};\n        let width_scale = ${s};\n        let in_y = ${r};\n        if( in_y < 0.0 || in_y > ${e} ) {\n          setOutputAtIndex(index, uniforms.extrapolationValue);\n          return;\n        }\n        let in_x = ${o};\n        if( in_x < 0.0 || in_x > ${t} ) {\n          setOutputAtIndex(index, uniforms.extrapolationValue);\n          return;\n        }\n        let sourceFracIndexCR = vec2<f32>(in_x,in_y);\n        if(${this.methodId} == 1) {\n          // Compute the four integer indices.\n          let sourceFloorCR = vec2<i32>(sourceFracIndexCR);\n          let sourceCeilCR = vec2<i32>(ceil(sourceFracIndexCR));\n          let topLeft = getImage(bInd, sourceFloorCR.y, sourceFloorCR.x, d);\n          let bottomLeft = getImage(bInd, sourceCeilCR.y, sourceFloorCR.x, d);\n          let topRight = getImage(bInd, sourceFloorCR.y, sourceCeilCR.x, d);\n          let bottomRight = getImage(bInd, sourceCeilCR.y, sourceCeilCR.x, d);\n          let fracCR = sourceFracIndexCR - vec2<f32>(sourceFloorCR);\n          let top = topLeft + (topRight - topLeft) * fracCR.x;\n          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          let newValue = top + (bottom - top) * fracCR.y;\n          setOutputAtIndex(index, newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          let sourceNearestCR = vec2<i32>(floor(\n            sourceFracIndexCR + vec2<f32>(0.5,0.5)));\n          let newValue = getImage(\n            bInd, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    }\n    `}}
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
const cr={kernelName:r.CropAndResize,backendName:"webgpu",kernelFunc:e=>{const{inputs:t,backend:n,attrs:i}=e,{image:r,boxes:a,boxInd:s}=t,{cropSize:o,method:u,extrapolationValue:d}=i,l=new pr(r.shape[3],a.shape,o,u),h=[{type:"float32",data:[d]}];return n.runWebGPUProgram(l,[r,a,s],"float32",h)}};
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
var fr;!function(e){e.Prod="*",e.Sum="+"}(fr||(fr={}));class mr{constructor(e,t,n,i){this.variableNames=["x"],this.uniforms="index : f32,",this.size=!0,this.workgroupSize=[128,1,1],this.outputShape=t,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.exclusive=n,this.reverse=i,this.op=e,this.shaderKey=`cum_${this.op}_${this.exclusive}_${this.reverse}`}getUserCode(){const e=this.outputShape.length,t=this.op===fr.Prod?"1.0":"0.0",n=this.exclusive?t:`getX(${gr(e,"coords",this.op)})`,i=this.outputShape[this.outputShape.length-1];let r="",a="";return this.exclusive?(r=this.reverse?"end != "+(i-1):"end != 0",a=this.reverse?"end + 1":"end - 1"):(r=this.reverse?`end + pow2 < ${i}`:"end >= pow2",a=this.reverse?"end + pow2":"end - pow2"),`\n      ${x("index")} {\n       if (index < uniforms.size) {\n         var coords = getCoordsFromIndex(index);\n\n         let end = ${yr(e,"coords",this.op)};\n         var val = ${n};\n         let pow2 = i32(pow(2.0, uniforms.index));\n         if (${r}) {\n           let idx = ${a};\n           ${yr(e,"coords",this.op)} = idx;\n           val ${this.op}= getX(${gr(e,"coords",this.op)});\n         }\n         setOutputAtIndex(index, val);\n       }\n      }\n    `}}function gr(e,t,n){if(1===e)return`${t}`;if(2===e)return`${t}.x, ${t}.y`;if(3===e)return`${t}.x, ${t}.y, ${t}.z`;if(4===e)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function yr(e,t,n){if(1===e)return`${t}`;if(2===e)return`${t}.y`;if(3===e)return`${t}.z`;if(4===e)return`${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}
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
function br(e,t,n,i,a,s){const o=t.shape.length,u=r.backend_util.getAxesPermutation([i],o);let d=t;null!=u&&(d=En({inputs:{x:t},backend:n,attrs:{perm:u}}));const l=r.backend_util.getInnerMostAxes(1,o)[0];if(l!==o-1)throw new Error(`WebGPU cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${i}`);const h=d.shape[l];let p=_t({inputs:{x:d},backend:n});for(let t=0;t<=Math.ceil(Math.log2(h))-1;t++){const i=new mr(e,d.shape,!1,s),r=p,a=[{type:"float32",data:[t]}];p=n.runWebGPUProgram(i,[p],p.dtype,a),n.disposeData(r.dataId)}if(a){const t=new mr(e,d.shape,a,s),i=p,r=[{type:"float32",data:[0]}];p=n.runWebGPUProgram(t,[p],p.dtype,r),n.disposeData(i.dataId)}if(null!=u){const e=En({inputs:{x:p},backend:n,attrs:{perm:r.backend_util.getUndoAxesPermutation(u)}});return n.disposeData(p.dataId),n.disposeData(d.dataId),e}return p}const xr={kernelName:r.Cumprod,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{axis:a,exclusive:s,reverse:o}=i;return br(fr.Prod,r,n,a,s,o)}};const wr={kernelName:r.Cumsum,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{axis:a,exclusive:s,reverse:o}=i;return br(fr.Sum,r,n,a,s,o)}};const vr={kernelName:r.DenseBincount,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a,weights:s}=t,{size:o,binaryOutput:u}=i,d=1===a.shape.length,l=r.util.sizeFromShape(s.shape)>0,h=s.dtype,p=d?[a.shape[0]]:[a.shape[0],a.shape[1]],c=St({backend:n,attrs:{shape:d?[o]:[a.shape[0],o],value:0,dtype:h}}),f=new Ci(p,l,u),m=[{type:"int32",data:[o]}],g=l?[a,s]:[a];return n.runWebGPUProgram(f,g,h,m,c)}};
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
class Cr{constructor(e,t){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.uniforms="blockSize : i32,",this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`depthToSpace_${t}`,this.dataFormat=t}getUserCode(){return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let h = ${this.getHeightCoordString()};\n          let w = ${this.getWidthCoordString()};\n          let d = ${this.getDepthCoordString()};\n\n          let in_h = h / uniforms.blockSize;\n          let offset_h = h % uniforms.blockSize;\n          let in_w = w / uniforms.blockSize;\n          let offset_w = w % uniforms.blockSize;\n          let offset_d = (offset_h * uniforms.blockSize + offset_w) *\n            ${this.getOutputDepthSize()};\n          let in_d = d + offset_d;\n\n          let rlt = ${this.getInputSamplingString()};\n          setOutputAtIndex(index, rlt);\n        }\n      }`}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?"uniforms.outShape[3]":"uniforms.outShape[1]"}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}const kr={kernelName:r.DepthToSpace,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{blockSize:a,dataFormat:s}=i,o=r.shape[0],u=("NHWC"===s?r.shape[1]:r.shape[2])*a,d=("NHWC"===s?r.shape[2]:r.shape[3])*a,l=("NHWC"===s?r.shape[3]:r.shape[1])/(a*a),h=[{type:"int32",data:[a]}],p=new Cr("NHWC"===s?[o,u,d,l]:[o,l,u,d],s);return n.runWebGPUProgram(p,[r],r.dtype,h)}};
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
class Sr{constructor(e,t,n,i=!1,r=null,a=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>,",this.workgroupSize=[16,16,1],this.outputShape=e,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),i&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),this.addBias=i,this.activation=r,this.hasPreluActivation=a,this.filterHeight=t,this.filterWidth=n,this.shaderKey=`depthwiseNCHW_${this.activation}_${this.filterHeight}_${this.filterWidth}`}getUserCode(){const e=this.filterWidth*this.filterHeight,t=this.workgroupSize[0]*this.workgroupSize[1]*this.workgroupSize[2],n=this.workgroupSize[1]+this.filterHeight-1,i=this.workgroupSize[0]+this.filterWidth-1;return`\n      ${ht(this.activation,this.hasPreluActivation,!1,4)}\n\n      var<workgroup> mm_Asub : array<array<f32, ${i}>, ${n}>;\n      var<workgroup> mm_Bsub : array<array<f32, ${this.filterWidth}>, ${this.filterHeight}>;\n      fn readX(batch : i32, channel : i32, row : i32, col : i32) -> f32 {\n        var value = 0.0;\n        if (row >=0 && row < uniforms.inDims[0] && col >=0 && col < uniforms.inDims[1])\n        {\n          value = getX(batch, channel, row, col);\n        }\n        return value;\n      }\n\n      ${x()} {\n        let coords = getOutputCoords();\n        let batch = coords[0];\n        let xRCCorner = vec2<i32>(coords.zw) - uniforms.pads;\n        let channelMul = uniforms.wShape[3];\n        let d1 = coords[1] / channelMul;\n        let q = coords[1] % channelMul;\n\n        let inputRowStart = xRCCorner.x;\n        let inputColStart = xRCCorner.y;\n\n        let localRow = i32(localId.y);\n        let localCol = i32(localId.x);\n\n        // Load one tile of X into local memory.\n        for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${this.workgroupSize[1]}) {\n          for (var inputCol = localCol; inputCol < ${i}; inputCol = inputCol + ${this.workgroupSize[0]}) {\n            let rowOffset = inputRow - localRow;\n            let colOffset = inputCol - localCol;\n            mm_Asub[inputRow][inputCol] = readX(batch, d1, inputRowStart + rowOffset, inputColStart + colOffset);\n          }\n        }\n\n        // Load one tile of W into local memory.\n        var wIndex = i32(localIndex);\n        ${e<t?`if (wIndex < ${e})`:`for(; wIndex < ${e}; wIndex = wIndex + ${t})`}\n\n        {\n          let wRow = wIndex / ${this.filterWidth};\n          let wCol = wIndex % ${this.filterWidth};\n          mm_Bsub[wRow][wCol] = getW(wRow, wCol, d1, q);\n        }\n\n        workgroupBarrier();\n\n        var value = 0.0;\n        for (var wR = 0; wR < ${this.filterHeight}; wR = wR + 1) {\n          for (var wC = 0; wC < ${this.filterWidth}; wC = wC + 1) {\n            let xVal = mm_Asub[localRow + wR][localCol + wC];\n            let wVal = mm_Bsub[wR][wC];\n            value = fma(xVal, wVal, value);\n          }\n        }\n        ${pt(this.addBias,this.activation)}\n        if (coordsInBounds4D(coords, uniforms.outShape)) {\n          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n        }\n      }\n    `}}
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
class Ir{constructor(e,t=!1,n=null,i=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>, virtualWidth : i32,",this.workgroupSize=[64,1,1],this.workPerThread=4,this.outputComponent=4,this.outputShape=e.outShape,this.virtualWidth=Math.ceil(this.outputShape[2]/this.workPerThread)*this.workPerThread;const a=[this.outputShape[0],this.outputShape[1],this.virtualWidth,this.outputShape[3]];this.dispatchLayout=F(a),this.dispatch=N(this.dispatchLayout,a,this.workgroupSize,[this.outputComponent*this.workPerThread,1,1]),r.util.assert("channelsLast"===e.dataFormat,(()=>"TODO: NCHW is unimplemented")),t&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.convInfo=e,this.addBias=t,this.activation=n,this.hasPreluActivation=i,this.shaderKey=`depthwiseVec4_${n}_${this.convInfo.filterHeight}_${this.convInfo.filterWidth}_${this.convInfo.strideHeight}_${this.convInfo.strideWidth}_${this.workPerThread}`}getUserCode(){const e=(this.workPerThread-1)*this.convInfo.strideWidth+this.convInfo.filterWidth,t=this.convInfo.strideHeight,n=this.convInfo.strideWidth;return`\n      ${ht(this.activation,this.hasPreluActivation,!0,4)}\n      fn readX(batch : i32, row : i32, col : i32, channel : i32) -> vec4<f32> {\n        var value = vec4<f32>(0.0);\n        if (col >=0 && col < uniforms.inDims[1]) {\n          value = getX(batch, row, col, channel);\n        }\n        return value;\n      }\n\n      ${x("index")} {\n        let width0 = uniforms.outShape[3] / ${this.outputComponent};\n        let d1 = (index % width0) * ${this.outputComponent};\n        var index1 = index / width0;\n        let width1 = uniforms.virtualWidth / ${this.workPerThread};\n        let c = (index1 % width1) * ${this.workPerThread};\n        index1 = index1 / width1;\n        let r = index1 % uniforms.outShape[1];\n        let batch = index1 / uniforms.outShape[1];\n\n        let xRCCorner = vec2<i32>(r, c) * vec2<i32>(${t}, ${n}) - uniforms.pads;\n\n        let xRCorner = xRCCorner.x;\n        let xCCorner = xRCCorner.y;\n        var xVals : array<vec4<f32>, ${e}>;\n        var dotProd : array<vec4<f32>, ${this.workPerThread}>;\n        for (var i = 0; i < ${this.workPerThread}; i++) {\n          dotProd[i] = vec4<f32>(0.0);\n        }\n\n        // Use constant instead of uniform can give better performance.\n        for (var wR = 0; wR < ${this.convInfo.filterHeight}; wR = wR + 1) {\n          let xR = xRCorner + wR;\n          if (xR >=0 && xR < uniforms.inDims[0]) {\n            for (var i = 0; i < ${e}; i++) {\n              xVals[i] = readX(batch, xR, xCCorner + i, d1);\n            }\n            for (var wC = 0; wC < ${this.convInfo.filterWidth}; wC = wC + 1) {\n              let wValue = getW(wR, wC, d1, 0);\n              for (var i = 0; i < ${this.workPerThread}; i++) {\n                dotProd[i] = fma(xVals[i * ${n} + wC], wValue, dotProd[i]);\n              }\n            }\n          }\n        }\n\n        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let coords = vec4<i32>(batch, r, c + i, d1);\n          if (coordsInBounds4D(coords, uniforms.outShape)) {\n            var value = dotProd[i];\n            ${pt(this.addBias,this.activation)}\n            setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n          }\n        }\n      }\n    `}}
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
class Rr{constructor(e,t=!1,n=null,i=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>, filterHeight : i32,\n      filterWidth : i32, strides : vec2<i32>, dilations : vec2<i32>,",this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast="channelsLast"===e.dataFormat,t&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.convInfo=e,this.addBias=t,this.activation=n,this.hasPreluActivation=i,this.shaderKey=`depthwise_${this.activation}_${this.isChannelsLast}`}getUserCode(){const e=this.isChannelsLast?"getX(batch, xR, xC, d1);":"getX(batch, d1, xR, xC);";return`\n      ${ht(this.activation,this.hasPreluActivation,!1,4)}\n\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let batch = coords[0];\n          let xRCCorner = vec2<i32>(coords.${this.isChannelsLast?"yz":"zw"}) * uniforms.strides - uniforms.pads;\n          let d2 = coords[${this.isChannelsLast?3:1}];\n          let channelMul = uniforms.wShape[3];\n          let d1 = d2 / channelMul;\n          let q = d2 % channelMul;\n\n          let inputRowStart = xRCCorner.x;\n          let inputColStart = xRCCorner.y;\n          let inputRowEnd = inputRowStart + uniforms.filterHeight *\n              uniforms.dilations[0];\n          let inputColEnd = inputColStart + uniforms.filterWidth *\n              uniforms.dilations[1];\n\n          // Convolve x(?, ?, d1)|x(d1, ?, ?) with w(:, :, d1, q) to get\n          // y(yR, yC, d2)|y(d2, yR, yC). ? = to be determined. : = across all\n          // values in that axis. x(?, ?, d1) and y(yR, yC, d2) is for NHWC.\n          // x(d1, ?, ?) and y(d2, yR, yC) is for NCHW.\n          var value = 0.0;\n\n          // Extract if checking out of for loop for performance.\n          if (inputRowStart >= 0 && inputColStart >= 0 &&\n            inputRowEnd < uniforms.inDims[0] &&\n                inputColEnd < uniforms.inDims[1]) {\n              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {\n                let xR = inputRowStart + wR * uniforms.dilations[0];\n\n                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {\n                  let xC = inputColStart + wC * uniforms.dilations[1];\n\n                  let xVal = ${e};\n                  let wVal = getW(wR, wC, d1, q);\n                  value = value + xVal * wVal;\n                }\n              }\n            } else {\n              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {\n                let xR = inputRowStart + wR * uniforms.dilations[0];\n\n                if (xR < 0 || xR >= uniforms.inDims[0]) {\n                  continue;\n                }\n\n                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {\n                  let xC = inputColStart + wC * uniforms.dilations[1];\n\n                  if (xC < 0 || xC >= uniforms.inDims[1]) {\n                    continue;\n                  }\n\n                  let xVal = ${e};\n                  let wVal = getW(wR, wC, d1, q);\n                  value = value + xVal * wVal;\n                }\n              }\n            }\n            ${pt(this.addBias,this.activation)}\n          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n        }\n      }\n    `}}const $r={kernelName:r.DepthwiseConv2dNative,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a,filter:s}=t,{strides:o,pad:u,dataFormat:d,dilations:l,dimRoundingMode:h}=i,p=r.backend_util.convertConv2DDataFormat(d);let c=l;null==c&&(c=[1,1]);const f=r.backend_util.computeConv2DInfo(a.shape,s.shape,o,c,u,h,!0,p),m=[{type:"int32",data:[f.padInfo.top,f.padInfo.left]},{type:"int32",data:[f.inHeight,f.inWidth]}],g="channelsLast"===f.dataFormat;let y;return!g&&f.inHeight>16&&f.inWidth>16&&1===f.strideHeight&&1===f.strideWidth&&1===f.dilationWidth&&1===f.dilationHeight&&f.inChannels===f.outChannels?y=new Sr(f.outShape,f.filterHeight,f.filterWidth):g&&f.outHeight>4&&f.outWidth>4&&f.strideWidth<=2&&f.inChannels===f.outChannels&&1===f.dilationHeight&&1===f.dilationWidth&&f.inChannels%4==0?(y=new Ir(f),m.push({type:"int32",data:[y.virtualWidth]})):(y=new Rr(f),m.push({type:"int32",data:[f.filterHeight]},{type:"int32",data:[f.filterWidth]},{type:"int32",data:[f.strideHeight,f.strideWidth]},{type:"int32",data:[f.dilationHeight,f.dilationWidth]})),n.runWebGPUProgram(y,[a,s],a.dtype,m)}};
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
class Ar{constructor(e){this.variableNames=["x","dy"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>, outHeight : i32,\n      outWidth : i32, inHeight : i32, inWidth : i32, batchSize : i32, channelMul : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.filterShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_filter"}getUserCode(){return`\n      ${x("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let wR = coords[0];\n        let wC = coords[1];\n        let d1 = coords[2];\n        let dm = coords[3];\n        let d2 = d1 * uniforms.channelMul + dm;\n\n        var dotProd = 0.0;\n        for (var b = 0; b < uniforms.batchSize; b++) {\n          for (var yR = 0; yR < uniforms.outHeight; yR++) {\n            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];\n\n            if (xR < 0 || xR >= uniforms.inHeight) {\n              continue;\n            }\n\n            for (var yC = 0; yC < uniforms.outWidth; yC++) {\n              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];\n\n              if (xC < 0 || xC >= uniforms.inWidth) {\n                continue;\n              }\n\n              let dyValue = getDy(b, yR, yC, d2);\n              let xValue = getX(b, xR, xC, d1);\n              dotProd += xValue * dyValue;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}class Pr{constructor(e){this.variableNames=["dy","W"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>,\n       outHeight : i32, outWidth : i32, channelMul : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_input"}getUserCode(){return`\n      ${x("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d1 = coords[3];\n        let dyCorner = coords.yz - uniforms.pads;\n        let dyRCorner = dyCorner.x;\n        let dyCCorner = dyCorner.y;\n\n        var dotProd = 0.0;\n        for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {\n          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);\n\n          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n            continue;\n          }\n\n          let idyR = i32(dyR);\n          let wRPerm = uniforms.filterDims[0] - 1 - wR;\n\n          for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {\n            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);\n\n            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n              continue;\n            }\n\n            let idyC = i32(dyC);\n            let wCPerm = uniforms.filterDims[1] - 1 - wC;\n\n            for (var dm = 0; dm < uniforms.channelMul; dm++) {\n              let d2 = d1 * uniforms.channelMul + dm;\n              let xValue = getDy(batch, idyR, idyC, d2);\n              let wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}const Nr={kernelName:r.DepthwiseConv2dNativeBackpropFilter,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a,dy:s}=t,{strides:o,dilations:u,pad:d,dimRoundingMode:l,filterShape:h}=i,p=r.backend_util.computeConv2DInfo(a.shape,h,o,u,d,l,!0),c=new Ar(p),f=[{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.filterHeight,p.filterWidth]},{type:"int32",data:[p.outHeight]},{type:"int32",data:[p.outWidth]},{type:"int32",data:[p.inHeight]},{type:"int32",data:[p.inWidth]},{type:"int32",data:[p.batchSize]},{type:"int32",data:[p.outChannels/p.inChannels]}];return n.runWebGPUProgram(c,[a,s],"float32",f)}};const zr={kernelName:r.DepthwiseConv2dNativeBackpropInput,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{dy:a,filter:s}=t,{strides:o,dilations:u,pad:d,dimRoundingMode:l,inputShape:h}=i,p=r.backend_util.computeConv2DInfo(h,s.shape,o,u,d,l,!0),c=new Pr(p),f=[{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.filterHeight-1-p.padInfo.top,p.filterWidth-1-p.padInfo.left]},{type:"int32",data:[p.filterHeight,p.filterWidth]},{type:"int32",data:[p.outHeight]},{type:"int32",data:[p.outWidth]},{type:"int32",data:[p.outChannels/p.inChannels]}];return n.runWebGPUProgram(c,[a,s],a.dtype,f)}};
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
class _r{constructor(e){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e,e],this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="diag"}getUserCode(){return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let value = select(0.0, getX(coords[0]), coords[0] == coords[1]);\n          setOutputAtIndex(index, value);\n        }\n      }\n    `}}const Tr={kernelName:r.Diag,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{x:i}=t,a=[...i.shape,...i.shape],s=r.util.sizeFromShape(i.shape),o=Rt({inputs:{x:i},backend:n,attrs:{shape:[s]}}),u=new _r(s),d=n.runWebGPUProgram(u,[o],o.dtype),l=Rt({inputs:{x:d},backend:n,attrs:{shape:a}});return n.disposeData(o.dataId),n.disposeData(d.dataId),l}};
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
class Fr{constructor(e){this.variableNames=["x","w"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="dilation2d"}getUserCode(){return`\n       ${x("index")} {\n         if (index < uniforms.size) {\n           let neg_infinity = -3.4e38;\n           let coords = getOutputCoords();\n           let batch = coords.x;\n           let d1 = coords.w;\n           let outTopLeftCorner = coords.yz * uniforms.strides - uniforms.pads;\n           let hBeg = outTopLeftCorner.x;\n           let wBeg = outTopLeftCorner.y;\n\n           var curVal = neg_infinity;\n           for (var h = 0; h < uniforms.filterDims[0]; h = h + 1) {\n             let hIn = hBeg + h * uniforms.dilations[0];\n\n             if (hIn >= 0 && hIn < uniforms.xShape[1]) {\n               for (var w = 0; w < uniforms.filterDims[1]; w = w + 1) {\n                 let wIn = wBeg + w * uniforms.dilations[1];\n\n                 if (wIn >= 0 && wIn < uniforms.xShape[2]) {\n                   let val = getX(batch, hIn, wIn, d1) + getW(h, w, d1);\n                   if (val > curVal) {\n                     curVal = val;\n                   }\n                 }\n               }\n             }\n           }\n\n           setOutputAtIndex(index, curVal);\n         }\n       }\n     `}}const Er={kernelName:r.Dilation2D,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a,filter:s}=t,{strides:o,pad:u,dilations:d}=i,l=r.backend_util.computeDilation2DInfo(a.shape,s.shape,o,u,"NHWC",d),h=[l.padInfo.top,l.padInfo.left],p=[{type:"int32",data:[l.filterHeight,l.filterWidth]},{type:"int32",data:[...h]},{type:"int32",data:[l.strideHeight,l.strideWidth]},{type:"int32",data:[l.dilationHeight,l.dilationWidth]}],c=new Fr(l);return n.runWebGPUProgram(c,[a,s],a.dtype,p)}};
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
class Dr{constructor(e,t){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e.inShape,this.dispatchLayout=F(e.outShape),this.dispatch=N(this.dispatchLayout,e.outShape,this.workgroupSize),"float32"!==t&&"int32"!==t)throw new Error(`Dilation2DBackpropInput only supports float32 and int32\n          types, does not support ${t} type.`);this.type=t,this.shaderKey="dilation2DBackpropInput"}getUserCode(){return`\n       ${x("index")} {\n         if (index < uniforms.dySize) {\n           let coords = getDyCoordsFromIndex(index);\n           let b = coords[0];\n           let r = coords[1];\n           let c = coords[2];\n           let d = coords[3];\n\n           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;\n           var curVal = -3.4e38;  // neg_infinity\n           var xRMax = 0;\n           var xCMax = 0;\n\n           // In the case of multiple argmax branches, we only back-propagate\n           // along the last branch, i.e., the one with largest value of\n           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling\n           // backward routines.\n           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {\n             let xR = dyCorner.x + wR * uniforms.dilations[0];\n\n             if (xR >= 0 && xR < uniforms.xShape[1]) {\n               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {\n                 let xC = dyCorner.y + wC * uniforms.dilations[1];\n\n                 if (xC >= 0 && xC < uniforms.xShape[2]) {\n                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);\n                   if (val > curVal) {\n                     curVal = val;\n                     xRMax = xR;\n                     xCMax = xC;\n                   }\n                 }\n               }\n             }\n           }\n\n           let flatIndexIn = d + uniforms.xShape[3] *\n               (xCMax + uniforms.xShape[2] * (xRMax + uniforms.xShape[1] * b));\n           let value = getDy(b, r, c, d);\n           ${c("&result[flatIndexIn]","value",this.type)}\n         }\n       }\n     `}}class Lr{constructor(e,t,n){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e.filterShape,this.dispatchLayout=F(e.outShape),this.dispatch=N(this.dispatchLayout,e.outShape,this.workgroupSize),"float32"!==n&&"int32"!==n)throw new Error(`Dilation2DBackpropFilter only supports float32 and int32\n          types, does not support ${n} type.`);this.type=n,this.shaderKey="dilation2DBackpropFilter"}getUserCode(){return`\n       ${x("index")} {\n         if (index < uniforms.dySize) {\n           let coords = getDyCoordsFromIndex(index);\n           let b = coords[0];\n           let r = coords[1];\n           let c = coords[2];\n           let d = coords[3];\n\n           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;\n           var curVal = -3.4e38;  // neg_infinity\n           var wRMax = 0;\n           var wCMax = 0;\n\n           // In the case of multiple argmax branches, we only back-propagate\n           // along the last branch, i.e., the one with largest value of\n           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling\n           // backward routines.\n           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {\n             let xR = dyCorner.x + wR * uniforms.dilations[0];\n\n             if (xR >= 0 && xR < uniforms.xShape[1]) {\n               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {\n                 let xC = dyCorner.y + wC * uniforms.dilations[1];\n\n                 if (xC >= 0 && xC < uniforms.xShape[2]) {\n                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);\n                   if (val > curVal) {\n                     curVal = val;\n                     wRMax = wR;\n                     wCMax = wC;\n                   }\n                 }\n               }\n             }\n           }\n\n           let flatIndexIn = d + uniforms.wShape[2] * (wCMax + wRMax * uniforms.wShape[1]);\n           let value = getDy(b, r, c, d);\n           ${c("&result[flatIndexIn]","value",this.type)}\n         }\n       }\n     `}}const Or={kernelName:r.Dilation2DBackpropFilter,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a,filter:s,dy:o}=t,{strides:u,pad:d,dilations:l}=i,h=r.backend_util.computeDilation2DInfo(a.shape,s.shape,u,d,"NHWC",l),p=s.dtype,c=new Lr(h,s.shape,p),f=[{type:"int32",data:[h.filterHeight,h.filterWidth]},{type:"int32",data:[h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.dilationHeight,h.dilationWidth]},{type:"int32",data:[r.util.sizeFromShape(h.outShape)]}],m=St({backend:n,attrs:{shape:s.shape,value:0,dtype:p}});return n.runWebGPUProgram(c,[a,s,o],p,f,m)}};const Br={kernelName:r.Dilation2DBackpropInput,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a,filter:s,dy:o}=t,{strides:u,pad:d,dilations:l}=i,h=r.backend_util.computeDilation2DInfo(a.shape,s.shape,u,d,"NHWC",l),p=a.dtype,c=new Dr(h,p),f=[{type:"int32",data:[h.filterHeight,h.filterWidth]},{type:"int32",data:[h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.dilationHeight,h.dilationWidth]},{type:"int32",data:[r.util.sizeFromShape(h.outShape)]}],m=St({backend:n,attrs:{shape:h.inShape,value:0,dtype:p}});return n.runWebGPUProgram(c,[a,s,o],p,f,m)}};
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
class Wr{constructor(e,t,n){this.variableNames=["Image"],this.uniforms="alpha: f32,",this.workgroupSize=[64,1,1],this.pixelsOpType=f.DRAW,this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.type=t,this.textureFormat=n,this.shaderKey=`draw_${t}_${n}`}getUserCode(){let e;const t="float32"===this.type?"value":"value / 255.0";e=`\n      if (uniforms.numChannels == 1) {\n        rgba[0] = ${t};\n        rgba[1] = ${t};\n        rgba[2] = ${t};\n      } else {\n        rgba[d] = ${t};\n      }`;return`\n       @group(0) @binding(0) var outImage : texture_storage_2d<${this.textureFormat}, write>;\n       ${x("index")} {\n         if (index < uniforms.size) {\n           var rgba = vec4<f32>(0.0, 0.0, 0.0, uniforms.alpha);\n           for (var d = 0; d < uniforms.numChannels; d = d + 1) {\n             let value = f32(inBuf[index * uniforms.numChannels + d]);\n             ${e}\n           }\n           rgba.x = rgba.x * rgba.w;\n           rgba.y = rgba.y * rgba.w;\n           rgba.z = rgba.z * rgba.w;\n           let coords = getCoordsFromIndex(index);\n           textureStore(outImage, vec2<i32>(coords.yx), rgba);\n         }\n       }\n      `}}const Ur={kernelName:r.Draw,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use backend file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:i}=e,{image:r}=t,{canvas:a,options:s}=i,[o,u]=r.shape.slice(0,2),{imageOptions:d}=s||{},l=(null==d?void 0:d.alpha)||1,h=n.device.features.has("bgra8unorm-storage")?"bgra8unorm":"rgba8unorm",p=[o,u],c=new Wr(p,r.dtype,h);a.width=u,a.height=o;const f="webgpu";let m,g=a.getContext(f);g||(m=new OffscreenCanvas(u,o),g=m.getContext(f));const y=3===r.shape.length?r.shape[2]:1;g.configure({device:n.device,format:h,usage:GPUTextureUsage.STORAGE_BINDING,alphaMode:"premultiplied"});const b="int32",x=n.makeTensorInfo(p,b),w=n.tensorMap.get(x.dataId);w.resource=g.getCurrentTexture(),w.external=!0;const v=[{type:"uint32",data:[y]},{type:"float32",data:[l]}];if(n.runWebGPUProgram(c,[r],b,v,x),m){const e=a.getContext("2d");if(!e)throw new Error("Please make sure this canvas has only been used for 2d or webgpu context!");e.drawImage(m,0,0)}return n.disposeData(x.dataId),r}},Mr=Ot({opType:U.MUL,cpuKernelImpl:sn,supportsComplex:!0}),Vr={kernelName:r.Multiply,backendName:"webgpu",kernelFunc:Mr};
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
function Gr(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{axis:a,keepDims:s}=i;return Bn(r,a,s,"sum",n)}const Hr={kernelName:r.Sum,backendName:"webgpu",kernelFunc:Gr};const jr={kernelName:r.Einsum,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{equation:a}=i,s=t,{allDims:o,summedDims:u,idDims:d}=r.backend_util.decodeEinsumEquation(a,s.length);r.backend_util.checkEinsumDimSizes(o.length,d,s);const{path:l,steps:h}=r.backend_util.getEinsumComputePath(u,d),p=h.length;let c=null,f=o.length;const m=[];for(let e=0;e<p;++e){for(const t of h[e]){const{permutationIndices:e,expandDims:i}=r.backend_util.getEinsumPermutation(f,d[t]);let a;r.backend_util.isIdentityPermutation(e)?a=s[t]:(a=En({inputs:{x:s[t]},backend:n,attrs:{perm:e}}),m.push(a));const o=a.shape.slice();for(let e=0;e<i.length;++e)o.splice(i[e],0,1);r.util.arraysEqual(a.shape,o)||(a=Rt({inputs:{x:a},backend:n,attrs:{shape:o}}),m.push(a)),null===c?c=a:(c=Mr({inputs:{a,b:c},backend:n}),m.push(c))}e<p-1&&(l[e]>=0&&(c=Gr({inputs:{x:c},backend:n,attrs:{axis:l[e]-(o.length-f),keepDims:!1}}),m.push(c)),f--)}for(const e of m)e!==c&&n.disposeData(e.dataId);return c}},Xr=Lt({opType:be.ELU}),Kr={kernelName:r.Elu,backendName:"webgpu",kernelFunc:Xr},Yr={kernelName:r.EluGrad,backendName:"webgpu",kernelFunc:e=>{const{inputs:t,backend:n}=e,{dy:i,y:r}=t,a=new zt(U.ELU_DER,i.shape,r.shape);return n.runWebGPUProgram(a,[i,r],i.dtype)}},qr=Ot({opType:U.EQUAL,dtype:"bool",cpuKernelImpl:Gt}),Qr={kernelName:r.Equal,backendName:"webgpu",kernelFunc:qr},Zr=Lt({opType:be.ERF}),Jr={kernelName:r.Erf,backendName:"webgpu",kernelFunc:Zr},ea=Lt({opType:be.EXP,cpuKernelImpl:Ht,dtype:"float32"}),ta={kernelName:r.Exp,backendName:"webgpu",kernelFunc:ea};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
function na(e){const{inputs:t,attrs:n,backend:i}=e,{dim:a}=n,{input:s}=t,o=s.shape.length,u=s.shape.slice();let d=a;return a<0&&(r.util.assert(-(o+1)<=a,(()=>`Axis must be in the interval [${-(o+1)}, ${o}]`)),d=o+a+1),u.splice(d,0,1),Rt({inputs:{x:s},backend:i,attrs:{shape:u}})}const ia={kernelName:r.ExpandDims,backendName:"webgpu",kernelFunc:na},ra=Lt({opType:be.EXPM1,cpuKernelImpl:jt}),aa={kernelName:r.Expm1,backendName:"webgpu",kernelFunc:ra};
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
class sa{constructor(e,t){this.variableNames=["real","imag"],this.outputShape=[],this.uniforms="exponentMultiplier : f32, denominator: f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.component=e,this.shaderKey=`fft_${e}`}getUserCode(){return`\n    fn unaryOpComplex(real: f32, expR: f32, imag: f32, expI: f32) -> f32 {\n      ${"real"===this.component?"return real * expR - imag * expI;":"return real * expI + imag * expR;"}\n    }\n\n    fn mulMatDFT(batch: i32, index: i32) -> f32 {\n      let indexRatio = f32(index) / f32(uniforms.realShape[1]);\n      let exponentMultiplierTimesIndexRatio =\n          uniforms.exponentMultiplier * indexRatio;\n\n      var result = 0.0;\n\n      for (var i = 0; i < uniforms.realShape[1]; i = i + 1) {\n        // x = (-2|2 * PI / N) * index * i;\n        let x = exponentMultiplierTimesIndexRatio * f32(i);\n        let expR = cos(x);\n        let expI = sin(x);\n        let real = getReal(batch, i);\n        let imag = getImag(batch, i);\n\n        result = result +\n            unaryOpComplex(real, expR, imag, expI) / uniforms.denominator;\n      }\n\n      return result;\n    }\n\n    ${x("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        setOutputAtIndex(index, mulMatDFT(coords[0], coords[1]));\n      }\n    }\n  `}}
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
function oa(e,t,n){const i=n.tensorMap.get(e.dataId),a=r.util.sizeFromShape(e.shape),s=e.shape[e.shape.length-1],o=[],u=Rt({inputs:{x:e},backend:n,attrs:{shape:[a/s,s]}});o.push(u);const d=u.shape,l=new sa("real",d),h=new sa("imag",d),p=[{dataId:i.complexTensorInfos.real.dataId,dtype:i.complexTensorInfos.real.dtype,shape:d},{dataId:i.complexTensorInfos.imag.dataId,dtype:i.complexTensorInfos.imag.dtype,shape:d}],c=[{type:"float32",data:[t?2*Math.PI:-2*Math.PI]},{type:"float32",data:[t?d[1]:1]}],f=n.runWebGPUProgram(l,p,"float32",c);o.push(f);const m=n.runWebGPUProgram(h,p,"float32",c);o.push(m);const g=Ft({inputs:{real:f,imag:m},backend:n});o.push(g);const y=Rt({inputs:{x:g},backend:n,attrs:{shape:e.shape}});return o.forEach((e=>n.disposeData(e.dataId))),y}const ua={kernelName:r.FFT,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{input:i}=t;return oa(i,!1,n)}};
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
class da{constructor(e){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="flipLeftRight"}getUserCode(){return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let coordX = uniforms.xShape[2] - coords[2] - 1;\n          let outputValue = getX(coords[0], coords[1], coordX, coords[3]);\n          setOutputAtIndex(index, outputValue);\n        }\n      }\n    `}}
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
const la={kernelName:r.FlipLeftRight,backendName:"webgpu",kernelFunc:({inputs:e,backend:t})=>{const{image:n}=e,i=t,r=new da(n.shape);return i.runWebGPUProgram(r,[n],n.dtype)}},ha=Lt({opType:be.FLOOR,cpuKernelImpl:Xt}),pa={kernelName:r.Floor,backendName:"webgpu",kernelFunc:ha},ca=Ot({opType:U.FLOOR_DIV,cpuKernelImpl:Kt,dtype:"int32"}),fa={kernelName:r.FloorDiv,backendName:"webgpu",kernelFunc:ca};
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
class ma{constructor(e,t,n=!1){this.pixelsOpType=f.FROM_PIXELS,this.outputShape=[0],this.variableNames=[],this.workgroupSize=[256,1,1],this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize,[t,1,1]),this.importVideo=n,this.shaderKey=`fromPixels_${this.importVideo}`}getUserCode(){const e=this.importVideo?"textureLoad(src, vec2<i32>(coords.yx));":"textureLoad(src, vec2<i32>(coords.yx), 0)";return`\n      @binding(1) @group(0) var src: ${this.importVideo?"texture_external":"texture_2d<f32>"};\n      ${x("index")} {\n        let flatIndex = index * uniforms.numChannels;\n        if (flatIndex < uniforms.size) {\n          let coords = getCoordsFromIndex(flatIndex);\n          let values = ${e};\n          for (var i = 0; i < uniforms.numChannels; i = i + 1) {\n            result[flatIndex + i] = i32(floor(255.0 * values[i]));\n          }\n        }\n      }\n  `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use backend file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ga={kernelName:r.FromPixels,backendName:"webgpu",kernelFunc:function(e){const{inputs:t,backend:n,attrs:i}=e;let{pixels:a}=t;const{numChannels:s}=i;if(null==a)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");const o="undefined"!=typeof HTMLVideoElement&&a instanceof HTMLVideoElement,u="undefined"!=typeof HTMLImageElement&&a instanceof HTMLImageElement,d="undefined"!=typeof HTMLCanvasElement&&a instanceof HTMLCanvasElement||"undefined"!=typeof OffscreenCanvas&&a instanceof OffscreenCanvas,l="undefined"!=typeof ImageBitmap&&a instanceof ImageBitmap,[h,p]=o?[a.videoWidth,a.videoHeight]:[a.width,a.height],c=[p,h,s],f=(0,r.env)().getBool("WEBGPU_IMPORT_EXTERNAL_TEXTURE")&&o,m=o||u;if(l||d||m){let e;if(f)e=n.device.importExternalTexture({source:a});else{if(m){const e=(0,r.env)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");null!=ya&&e===ba||(ba=e,ya=document.createElement("canvas").getContext("2d",{willReadFrequently:ba})),ya.canvas.width=h,ya.canvas.height=p,ya.drawImage(a,0,0,h,p),a=ya.canvas}const t=GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,i="rgba8unorm",s=n.textureManager.acquireTexture(c[1],c[0],i,t);n.queue.copyExternalImageToTexture({source:a},{texture:s},[c[1],c[0]]),e=s}const t=r.util.sizeFromShape(c),i=r.util.computeStrides(c),o=new ma(c,s,f),u=[{type:"uint32",data:[t]},{type:"uint32",data:[s]},{type:"uint32",data:[...i]}],d=n.makeTensorInfo([p,h],"int32");n.tensorMap.get(d.dataId).resource=e;const l=n.runWebGPUProgram(o,[d],"int32",u);return n.disposeData(d.dataId),l}const g=a.data;let y=g;if(null!=s&&4!==s){y=new Uint8Array(a.width*a.height*s);const e=g.length;let t=0;for(let n=0;n<e;n++)n%4<s&&(y[t++]=g[n])}const b=n.makeTensorInfo(c,"int32",new Int32Array(y));return n.uploadToGPU(b.dataId),b}};let ya,ba=(0,r.env)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");
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
class xa{constructor(e,t,n,i,a){this.uniforms="varianceEpsilon : f32,",this.workgroupSize=[128,1,1],this.size=!0,this.variableNames=["x","mean","variance"],r.backend_util.assertAndGetBroadcastShape(e,t),r.backend_util.assertAndGetBroadcastShape(e,n),this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),null!=i&&(r.backend_util.assertAndGetBroadcastShape(e,i),this.variableNames.push("offset")),null!=a&&(r.backend_util.assertAndGetBroadcastShape(e,a),this.variableNames.push("scale")),this.offsetShape=i,this.scaleShape=a,this.shaderKey="batchNorm"}getUserCode(){let e="0.0";null!=this.offsetShape&&(e="getOffsetByOutputIndex(index)");let t="1.0";null!=this.scaleShape&&(t="getScaleByOutputIndex(index)");return`\n      ${x("index")} {\n        if (index < uniforms.size)\n        {\n          let xValue = getXByOutputIndex(index);\n          let meanValue = getMeanByOutputIndex(index);\n          let varianValue = getVarianceByOutputIndex(index);\n          let offsetValue = ${e};\n          let scaleValue = ${t};\n          let inv = scaleValue * inverseSqrt(varianValue + f32(uniforms.varianceEpsilon));\n          setOutputAtIndex(index,dot(vec3<f32>(xValue, -meanValue, offsetValue), vec3<f32>(inv, inv, 1.0)));\n        }\n      }\n  `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const wa={kernelName:r.FusedBatchNorm,backendName:"webgpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{x:i,scale:r,offset:a,mean:s,variance:o}=e,{varianceEpsilon:u}=t,d=n,l=[i,s,o];let h=null;null!=a&&(h=a.shape,l.push(a));let p=null;null!=r&&(p=r.shape,l.push(r));const c=new xa(i.shape,s.shape,o.shape,h,p),f=[{type:"float32",data:[u]}];return d.runWebGPUProgram(c,l,i.dtype,f)}};const va={kernelName:r.FusedConv2D,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a,filter:s,bias:o,preluActivationWeights:u}=t,{strides:d,pad:l,dataFormat:h,dilations:p,dimRoundingMode:c,activation:f,leakyreluAlpha:m}=i,g=r.backend_util.convertConv2DDataFormat(h);return Yi({x:a,filter:s,convInfo:r.backend_util.computeConv2DInfo(a.shape,s.shape,d,p,l,c,!1,g),backend:n,bias:o,preluActivationWeights:u,leakyreluAlpha:m,activation:f})}};const Ca={kernelName:r.FusedDepthwiseConv2D,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a,filter:s,bias:o,preluActivationWeights:u}=t,{strides:d,pad:l,dilations:h,dimRoundingMode:p,activation:c,leakyreluAlpha:f}=i;let m=h;null==m&&(m=[1,1]),r.util.assert(r.backend_util.eitherStridesOrDilationsAreOne(d,m),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${d} and dilations '${m}'`));const g=r.backend_util.computeConv2DInfo(a.shape,s.shape,d,m,l,p,!0),y=[a,s],b=null!=o,x=null!=u;b&&y.push(o),x&&y.push(u);const w=[{type:"int32",data:[g.padInfo.top,g.padInfo.left]},{type:"int32",data:[g.inHeight,g.inWidth]}];let v;return g.outHeight>4&&g.outWidth>4&&g.strideWidth<=2&&g.inChannels===g.outChannels&&1===g.dilationHeight&&1===g.dilationWidth&&g.inChannels%4==0?(v=new Ir(g,b,c,x),w.push({type:"int32",data:[v.virtualWidth]})):(v=new Rr(g,b,c,x),w.push({type:"int32",data:[g.filterHeight]},{type:"int32",data:[g.filterWidth]},{type:"int32",data:[g.strideHeight,g.strideWidth]},{type:"int32",data:[g.dilationHeight,g.dilationWidth]})),"leakyrelu"===c&&(w.push({type:"float32",data:[f]}),v.uniforms+=" alpha : f32,"),n.runWebGPUProgram(v,y,"float32",w)}};
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
class ka{constructor(e,t){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`gathernd_${e}`,this.sliceDim=e,this.uniforms=`sliceDim : i32, strides : ${y(e)},`}getUserCode(){let e;e=this.sliceDim>1?"uniforms.strides[j]":"uniforms.strides";return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          var flattenIndex = 0;\n          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {\n            let indexTemp = i32(round(getIndices(coords[0], j)));\n            let strideNum = ${e};\n            flattenIndex = flattenIndex + indexTemp * strideNum;\n          }\n\n          setOutputAtIndex(index, getA(flattenIndex, coords[1]));\n        }\n      }\n      `}}const Sa={kernelName:r.GatherNd,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{params:i,indices:a}=t,s=a.shape,o=s[s.length-1],u=r.util.sizeFromShape(i.shape),[d,l,h,p]=r.backend_util.prepareAndValidate(i,a),c=Rt({inputs:{x:a},backend:n,attrs:{shape:[l,o]}}),f=Rt({inputs:{x:i},backend:n,attrs:{shape:[r.util.sizeFromShape(i.shape)/h,h]}});if(n.shouldExecuteOnCPU([i,a])||"string"===i.dtype){const e=n.readSync(a.dataId),t=n.bufferSync(i),r=Yt(e,t,i.dtype,l,o,h,p,i.shape,u);return n.makeTensorInfo(d,i.dtype,r.values)}const m=new ka(o,[l,h]),g=[{type:"int32",data:[o]},{type:"int32",data:p}],y=n.runWebGPUProgram(m,[f,c],f.dtype,g),b=Rt({inputs:{x:y},backend:n,attrs:{shape:d}});return n.disposeData(c.dataId),n.disposeData(f.dataId),n.disposeData(y.dataId),b}};
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
class Ia{constructor(e,t){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.slice(),this.aShape=e,this.outputShape=t,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="gather"}getUserCode(){const e=function(e){const t=["resRC.x","resRC.y","resRC.z","resRC.w"],n=[];for(let i=0;i<e.length;i++)2===i?n.push("indexZ"):n.push(`${t[i]}`);return n.join()}(this.aShape);return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          let indexZ = i32(getIndices(resRC.x, resRC.z));\n          let inBounds = select(0.0, 1.0, indexZ >= 0 && indexZ < uniforms.aShape[2]);\n          setOutputAtIndex(index, inBounds * getA(${e}));\n        }\n      }\n    `}}
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
function Ra(e){const{inputs:t,backend:n,attrs:i}=e,{x:a,indices:s}=t,{axis:o,batchDims:u}=i,d=r.util.parseAxisParam(o,a.shape)[0],l=r.backend_util.segment_util.collectGatherOpShapeInfo(a,s,d,u),h=r.util.sizeFromShape(s.shape),p=[],c=Rt({inputs:{x:a},backend:n,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),f=Rt({inputs:{x:s},backend:n,attrs:{shape:[l.batchSize,h/l.batchSize]}});p.push(c),p.push(f);const m=[l.batchSize,l.outerSize,h/l.batchSize,l.sliceSize];if(n.shouldExecuteOnCPU([a,s])){const e=n.tensorMap.get(f.dataId).values,t=(0,r.buffer)(f.shape,f.dtype,e),i=n.tensorMap.get(c.dataId).values,a=(0,r.buffer)(c.shape,c.dtype,i),s=qt(a,t,m);return p.forEach((e=>n.disposeData(e.dataId))),n.makeTensorInfo(l.outputShape,s.dtype,s.values)}const g=new Ia(c.shape,m),y=n.runWebGPUProgram(g,[c,f],c.dtype);p.push(y);const b=Rt({inputs:{x:y},backend:n,attrs:{shape:l.outputShape}});return p.forEach((e=>n.disposeData(e.dataId))),b}const $a={kernelName:r.GatherV2,backendName:"webgpu",kernelFunc:Ra},Aa=Ot({opType:U.GREATER,cpuKernelImpl:Zt,dtype:"bool"}),Pa={kernelName:r.Greater,backendName:"webgpu",kernelFunc:Aa},Na=Ot({opType:U.GREATER_EQUAL,dtype:"bool",cpuKernelImpl:Qt}),za={kernelName:r.GreaterEqual,backendName:"webgpu",kernelFunc:Na};const _a={kernelName:r.IFFT,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{input:i}=t;return oa(i,!0,n)}},Ta=Lt({opType:be.IS_FINITE,dtype:"bool"}),Fa={kernelName:r.IsFinite,backendName:"webgpu",kernelFunc:Ta},Ea=Lt({opType:be.IS_INF,dtype:"bool"}),Da={kernelName:r.IsInf,backendName:"webgpu",kernelFunc:Ea},La=Lt({opType:be.IS_NAN,dtype:"bool"}),Oa={kernelName:r.IsNan,backendName:"webgpu",kernelFunc:La};const Ba={kernelName:r.LeakyRelu,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{alpha:a}=i,s=[{type:"float32",data:[a]}],o=new Dt(r.shape,be.LEAKYRELU,"alpha : f32,");return n.runWebGPUProgram(o,[r],"float32",s)}},Wa=Ot({opType:U.LESS,dtype:"bool",cpuKernelImpl:en}),Ua={kernelName:r.Less,backendName:"webgpu",kernelFunc:Wa},Ma=Ot({opType:U.LESS_EQUAL,dtype:"bool",cpuKernelImpl:Jt}),Va={kernelName:r.LessEqual,backendName:"webgpu",kernelFunc:Ma};
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
class Ga{constructor(e){this.variableNames=[],this.outputShape=[],this.uniforms="start : f32, step : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e],this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="linSpace"}getUserCode(){return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          setOutputAtIndex(index, uniforms.start + f32(index) * uniforms.step);\n        }\n      }\n    `}}const Ha={kernelName:r.LinSpace,backendName:"webgpu",kernelFunc:
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
function(e){const{backend:t,attrs:n}=e,{start:i,stop:r,num:a}=n,s=(r-i)/(a-1),o=new Ga(a),u=[{type:"float32",data:[i]},{type:"float32",data:[s]}];return t.runWebGPUProgram(o,[],"float32",u)}},ja=Lt({opType:be.LOG,cpuKernelImpl:tn}),Xa={kernelName:r.Log,backendName:"webgpu",kernelFunc:ja},Ka=Lt({opType:be.LOG1P}),Ya={kernelName:r.Log1p,backendName:"webgpu",kernelFunc:Ka},qa=Ot({opType:U.LOGICAL_AND,dtype:"bool"}),Qa={kernelName:r.LogicalAnd,backendName:"webgpu",kernelFunc:qa},Za=Lt({opType:be.LOGICAL_NOT}),Ja={kernelName:r.LogicalNot,backendName:"webgpu",kernelFunc:Za},es=Ot({opType:U.LOGICAL_OR}),ts={kernelName:r.LogicalOr,backendName:"webgpu",kernelFunc:es},ns="\n  var powValue = 0.0;\n  let basis = uniforms.bias + uniforms.alpha * sum;\n  if (uniforms.beta == 0.5) {\n    powValue = inverseSqrt(basis);\n  } else if (uniforms.beta == 1.0) {\n    powValue = 1.0 / basis;\n  } else {\n    powValue = exp(log(basis) * (-uniforms.beta));\n  }\n";class is{constructor(e){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn"}getUserCode(){return`\n    ${x("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let b = coords[0];\n        let r = coords[1];\n        let c = coords[2];\n        let d = coords[3];\n\n        let x = getX(b, r, c, d);\n        var sum = 0.0;\n        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {\n          let idx = d + i;\n          if (idx >= 0 && idx < uniforms.xShape[3]) {\n            let z = getX(b, r, c, idx);\n            sum = sum + z * z;\n          }\n        }\n        ${ns}\n\n        setOutputAtIndex(index, x * powValue);\n      }\n    }\n  `}}class rs{constructor(e,t){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[256,1,1],this.maxAllowRadius=16,r.util.assert(t<=this.maxAllowRadius,(()=>`Radius must be less than or equal to ${this.maxAllowRadius}, current radius is ${t}`)),this.outputShape=e,this.elementsPerWorkgroup=this.workgroupSize[0]-2*this.maxAllowRadius,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=N(this.dispatchLayout,this.outputShape,[this.elementsPerWorkgroup,this.workgroupSize[1],this.workgroupSize[2]]),this.shaderKey="lrn_shared"}getUserCode(){return`\n    var <workgroup>lrnSub: array<f32, ${this.workgroupSize[0]}>;\n    const elementsPerWorkgroup = ${this.elementsPerWorkgroup};\n    const maxAllowRadius = ${this.maxAllowRadius};\n\n    ${x()} {\n      let localDepth = i32(localId.x);\n      let workgroupDepth = i32(workgroupId.x) * elementsPerWorkgroup;\n      let xDepth = workgroupDepth + localDepth - maxAllowRadius;\n      let b = i32(globalId.z) / uniforms.xShape[1];\n      let r = i32(globalId.z) - b * uniforms.xShape[1];\n      let c = i32(globalId.y);\n      let d = workgroupDepth + localDepth;\n\n      var x = 0.0;\n      if (xDepth >= 0 && xDepth < uniforms.xShape[3]) {\n        x = getX(b, r, c, xDepth);\n      }\n      lrnSub[localDepth] = x;\n      workgroupBarrier();\n\n      if (localDepth < elementsPerWorkgroup && d < uniforms.outShape[3]) {\n        var sum = 0.0;\n        let index = localDepth + maxAllowRadius;\n        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {\n          let z = lrnSub[index + i];\n          sum = sum + z * z;\n        }\n        ${ns}\n\n        setOutputAtCoords(b, r, c, d, lrnSub[index] * powValue);\n      }\n    } `}}const as={kernelName:r.LRN,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{depthRadius:a,bias:s,alpha:o,beta:u}=i;let d;d=a>16?new is(r.shape):new rs(r.shape,a);const l=[{type:"int32",data:[a]},{type:"float32",data:[s]},{type:"float32",data:[o]},{type:"float32",data:[u]}];return n.runWebGPUProgram(d,[r],r.dtype,l)}};
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
class ss{constructor(e){this.outputShape=[],this.variableNames=["inputImage","outputImage","dy"],this.uniforms="depthRadius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn_grad"}getUserCode(){return`\n    ${x("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let b = coords[0];\n        let r = coords[1];\n        let c = coords[2];\n\n        let MIN_DEPTH_BEGIN = 0;\n        let MAX_DEPTH_END = uniforms.outShape[3];\n        var result = 0.0;\n        for (var d = MIN_DEPTH_BEGIN; d < MAX_DEPTH_END; d++) {\n          let depthBegin = max(MIN_DEPTH_BEGIN, d - uniforms.depthRadius);\n          let depthEnd = min(MAX_DEPTH_END, d + uniforms.depthRadius + 1);\n\n          var norm = 0.0;\n          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {\n            if (k < depthBegin) {\n              continue;\n            } else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            } else {\n              break;\n            }\n          }\n\n          norm = uniforms.alpha * norm + uniforms.bias;\n\n          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {\n            if (k < depthBegin) {\n              continue;\n            } else if (k >= depthBegin && k < depthEnd) {\n              var dyi = -2.0 * uniforms.alpha * uniforms.beta\n                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d) / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * uniforms.beta);\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            } else {\n              break;\n            }\n          }\n        }\n\n        setOutputAtIndex(index, result);\n      }\n    }\n  `}}const os={kernelName:r.LRNGrad,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:r,y:a,dy:s}=t,{depthRadius:o,bias:u,alpha:d,beta:l}=i,h=new ss(r.shape),p=[{type:"int32",data:[o]},{type:"float32",data:[u]},{type:"float32",data:[d]},{type:"float32",data:[l]}];return n.runWebGPUProgram(h,[r,a,s],r.dtype,p)}},us=Ot({opType:U.MAX,cpuKernelImpl:rn}),ds={kernelName:r.Maximum,backendName:"webgpu",kernelFunc:us};const ls={kernelName:r.MaxPool,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{filterSize:s,strides:o,pad:u,dimRoundingMode:d}=i;return ui(a,r.backend_util.computePool2DInfo(a.shape,s,o,1,u,d),"max",n)}};const hs={kernelName:r.MaxPool3D,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{filterSize:s,strides:o,pad:u,dataFormat:d,dimRoundingMode:l}=i,h=r.backend_util.computePool3DInfo(a.shape,s,o,[1,1,1],u,l,d),p=new ii(h,"max"),c=[{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.padInfo.front,h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.inDepth,h.inHeight,h.inWidth]},{type:"int32",data:[h.effectiveFilterDepth,h.effectiveFilterHeight,h.effectiveFilterWidth]}];return n.runWebGPUProgram(p,[a],a.dtype,c)}};
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
class ps{constructor(e){this.variableNames=["dy","maxPos"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,\n       outHeight : i32, outWidth : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool2DBackprop"}getUserCode(){return`\n      ${x("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d = coords[3];\n\n        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;\n        let dyRCorner = dyRCCorner.x;\n        let dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] - 1;\n        for (var wR = 0; wR < uniforms.filterDims[0]; wR += uniforms.dilations[0]) {\n          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);\n\n          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n            continue;\n          }\n          let idyR = i32(dyR);\n\n          for (var wC = 0; wC < uniforms.filterDims[1]; wC += uniforms.dilations[1]) {\n            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);\n\n            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n              continue;\n            }\n            let idyC = i32(dyC);\n\n            let dyValue = getDy(batch, idyR, idyC, d);\n            let maxPosValue = lastIndex - i32(getMaxPos(batch, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            let curPosValue = wR * uniforms.filterDims[1] + wC;\n            let mask = select(0.0, 1.0, maxPosValue == curPosValue);\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}class cs{constructor(e){this.variableNames=["dy","maxPos"],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,\n      outDepth : i32, outHeight : i32, outWidth : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool3DBackprop"}getUserCode(){return`\n      ${x("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords.x;\n        let ch = coords.u;\n\n        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;\n        let dyDCorner = dyCorner.x;\n        let dyRCorner = dyCorner.y;\n        let dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] * uniforms.filterDims[2] - 1;\n\n        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {\n          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);\n\n          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {\n            continue;\n          }\n          let idyD = i32(dyD);\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);\n\n            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n              continue;\n            }\n            let idyR = i32(dyR);\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);\n\n              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n                continue;\n              }\n              let idyC = i32(dyC);\n\n              let dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              let maxPosValue = lastIndex - i32(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              let curPosValue = wD * uniforms.filterDims[1] * uniforms.filterDims[2] + wR * uniforms.filterDims[2] + wC;\n              let mask = select(0.0, 1.0, maxPosValue == curPosValue);\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}const fs={kernelName:r.MaxPool3DGrad,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{dy:a,input:s}=t,o=s,{filterSize:u,strides:d,pad:l,dimRoundingMode:h}=i,p=r.backend_util.computePool3DInfo(o.shape,u,d,[1,1,1],l,h),c=new ii(p,"max",!0);let f=[{type:"int32",data:[p.strideDepth,p.strideHeight,p.strideWidth]},{type:"int32",data:[p.padInfo.front,p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.inDepth,p.inHeight,p.inWidth]},{type:"int32",data:[p.effectiveFilterDepth,p.effectiveFilterHeight,p.effectiveFilterWidth]}];const m=n.runWebGPUProgram(c,[o],"int32",f),g=new cs(p);f=[{type:"int32",data:[p.strideDepth,p.strideHeight,p.strideWidth]},{type:"int32",data:[p.effectiveFilterDepth-1-p.padInfo.front,p.effectiveFilterHeight-1-p.padInfo.top,p.effectiveFilterWidth-1-p.padInfo.left]},{type:"int32",data:[p.effectiveFilterDepth,p.effectiveFilterHeight,p.effectiveFilterWidth]},{type:"int32",data:[p.outDepth]},{type:"int32",data:[p.outHeight]},{type:"int32",data:[p.outWidth]}];const y=n.runWebGPUProgram(g,[a,m],o.dtype,f);return n.disposeData(m.dataId),y}};const ms={kernelName:r.MaxPoolGrad,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{dy:a,input:s,output:o}=t,u=s;L([s,o],"maxPoolGrad");const{filterSize:d,strides:l,pad:h,dimRoundingMode:p}=i,c=r.backend_util.computePool2DInfo(u.shape,d,l,1,h,p),f=new ni(c,"max",!0);let m=[{type:"int32",data:[c.strideHeight,c.strideWidth]},{type:"int32",data:[c.padInfo.top,c.padInfo.left]},{type:"int32",data:[c.dilationHeight,c.dilationWidth]},{type:"int32",data:[c.inHeight,c.inWidth]},{type:"int32",data:[c.effectiveFilterHeight,c.effectiveFilterWidth]}];const g=n.runWebGPUProgram(f,[u],"int32",m),y=new ps(c);m=[{type:"int32",data:[c.strideHeight,c.strideWidth]},{type:"int32",data:[c.effectiveFilterHeight-1-c.padInfo.top,c.effectiveFilterWidth-1-c.padInfo.left]},{type:"int32",data:[c.dilationHeight,c.dilationWidth]},{type:"int32",data:[c.effectiveFilterHeight,c.effectiveFilterWidth]},{type:"int32",data:[c.outHeight]},{type:"int32",data:[c.outWidth]}];const b=n.runWebGPUProgram(y,[a,g],u.dtype,m);return n.disposeData(g.dataId),b}};const gs={kernelName:r.MaxPoolWithArgmax,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{filterSize:a,strides:s,pad:o,includeBatchInIndex:u}=i,{x:d}=t;r.util.assert(4===d.shape.length,(()=>`Error in maxPool: input must be rank 4 but got rank ${d.shape.length}.`));const l=[1,1];r.util.assert(r.backend_util.eitherStridesOrDilationsAreOne(s,l),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${l}'`));const h=r.backend_util.computePool2DInfo(d.shape,a,s,l,o),p=[{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.dilationHeight,h.dilationWidth]},{type:"int32",data:[h.inHeight,h.inWidth]},{type:"int32",data:[h.effectiveFilterHeight,h.effectiveFilterWidth]}];let c=new ni(h,"max",!1);const f=n.runWebGPUProgram(c,[d],d.dtype,p);return c=new ni(h,"max",!0,!0,u),[f,n.runWebGPUProgram(c,[d],"int32",p)]}};const ys={kernelName:r.Min,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{axis:a,keepDims:s}=i;return Bn(r,a,s,"min",n)}},bs=Ot({opType:U.MIN,cpuKernelImpl:an}),xs={kernelName:r.Minimum,backendName:"webgpu",kernelFunc:bs};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ws{constructor(e,t,n){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.map(((t,n)=>t[0]+e[n]+t[1])),this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=e,t.map(((e,t)=>{this.uniforms+=` pad${t} : vec2<i32>,`})),this.offset="reflect"===n?0:1,this.shaderKey=`mirrorPad_${n}`}getUserCode(){const e=this.xShape.length,t=this.xShape.map(((e,t)=>`uniforms.pad${t}[0]`)).join(","),n=this.xShape.map(((t,n)=>`uniforms.pad${n}[0] + uniforms.xShape${e>1?`[${n}]`:""}`)).join(","),i=1===e?"start":"start[i]",r=1===e?"end":"end[i]",a=1===e?"outC":"outC[i]",s=y(e),o=e>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,e):"coords";return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let start = ${s}(${t});\n          let end = ${s}(${n});\n          var outC = getCoordsFromIndex(index);\n          for (var i = 0; i < ${e}; i = i + 1) {\n            if (${a} < ${i}) {\n              ${a} = ${i} * 2 - ${a} - ${this.offset};\n            } else if(${a} >= ${r}) {\n              ${a} = (${r} - 1) * 2 - ${a} + ${this.offset};\n            }\n          }\n          let coords = outC - start;\n          setOutputAtIndex(index, getX(${o}));\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const vs={kernelName:r.MirrorPad,backendName:"webgpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{x:i}=e,{paddings:r,mode:a}=t,s=n,o=r.map((e=>({type:"int32",data:[e[0],e[1]]}))),u=new ws(i.shape,r,a);return s.runWebGPUProgram(u,[i],i.dtype,o)}},Cs=Ot({opType:U.MOD}),ks={kernelName:r.Mod,backendName:"webgpu",kernelFunc:Cs};
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
class Ss{constructor(e,t){this.variableNames=["probs"],this.outputShape=[],this.uniforms="seed : f32, numOutcomes: i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e,t],this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="multinomial"}getUserCode(){return`\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    fn random (seed : f32, resultUV : vec2<f32>) -> f32 {\n      let HASHSCALE1 = 443.8975;\n      let p = resultUV * seed;\n      var p3  = fract(vec3<f32>(p.xyx) * HASHSCALE1);\n      p3 = p3 + dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    ${x("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let batch = coords[0];\n\n        let resUV = vec2<f32>(f32(coords[1]) / f32(uniforms.outShape[1]),\n            f32(coords[0]) / f32(uniforms.outShape[0]));\n        let r = random(uniforms.seed, resUV);\n        var cdf = 0.0;\n        for (var i = 0; i < uniforms.numOutcomes - 1; i = i + 1) {\n          cdf = cdf + getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutputAtIndexI32(index, i);\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutputAtIndexI32(index, uniforms.numOutcomes - 1);\n      }\n    }\n  `}}
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
class Is{constructor(e){this.variableNames=["logits"],this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=[this.outputShape[0],1,1],this.outputShape[1]>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.shaderKey="softmax"}getUserCode(){return`\n    var<workgroup> buf : array<f32, ${this.workgroupSize[0]}>;\n    var<workgroup> rowMaxShared : f32;\n    var<workgroup> rowSumShared : f32;\n    const blockSize = ${this.workgroupSize[0]};\n    ${x("index")} {\n      let row = index / blockSize;\n      let tid = i32(localId.x);\n      let cols = uniforms.outShape[1];\n\n      var threadMax = -3.402823e+38f;\n      for (var col = tid; col < cols; col += blockSize) {\n        let value = getLogits(row, col);\n        threadMax = max(threadMax, value);\n      }\n      if (tid < cols) {\n        buf[tid] = threadMax;\n      }\n      workgroupBarrier();\n\n      var reduceSize = min(cols, blockSize);\n      for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {\n        reduceSize = currSize + (reduceSize & 1);\n        if (tid < currSize) {\n          buf[tid] = max(buf[tid], buf[tid + reduceSize]);\n        }\n        workgroupBarrier();\n      }\n\n      if (tid == 0) {\n        rowMaxShared = buf[0];\n      }\n      workgroupBarrier();\n\n      var threadSum = 0.0;\n      for (var col = tid; col < cols; col += blockSize) {\n        let subExp = exp(getLogits(row, col) - rowMaxShared);\n        threadSum += subExp;\n      }\n      buf[tid] = threadSum;\n      workgroupBarrier();\n\n      for (var currSize = blockSize >> 1;  currSize > 0; currSize = currSize >> 1) {\n        if (tid < currSize) {\n          buf[tid] = buf[tid] + buf[tid + currSize];\n        }\n        workgroupBarrier();\n      }\n\n      if (tid == 0) {\n        rowSumShared = buf[0];\n      }\n      workgroupBarrier();\n\n      for (var col = tid; col < cols; col += blockSize) {\n        let value = exp(getLogits(row, col) - rowMaxShared) / rowSumShared;\n        setOutputAtCoords(row, col, value);\n      }\n  }\n    `}}
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
function Rs(e){const{inputs:t,backend:n,attrs:i}=e,{logits:a}=t,{dim:s}=i,o=Rt({inputs:{x:a},backend:n,attrs:{shape:[r.util.sizeFromShape(a.shape)/a.shape[s],a.shape[s]]}}),u=new Is(o.shape),d=n.runWebGPUProgram(u,[o],a.dtype),l=Rt({inputs:{x:d},backend:n,attrs:{shape:a.shape}});return n.disposeData(o.dataId),n.disposeData(d.dataId),l}const $s={kernelName:r.Softmax,backendName:"webgpu",kernelFunc:Rs};const As={kernelName:r.Multinomial,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{logits:r}=t,{numSamples:a,seed:s,normalized:o}=i,u=o?r:Rs({inputs:{logits:r},backend:n,attrs:{dim:r.shape.length-1}}),d=u.shape[0],l=u.shape[1],h=new Ss(d,a),p=[{type:"float32",data:[s]},{type:"int32",data:[l]}],c=n.runWebGPUProgram(h,[u],"int32",p);return o||n.disposeData(u.dataId),c}};const Ps={kernelName:r.Neg,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{x:i}=t;if(n.shouldExecuteOnCPU([i])){const e=n.tensorMap.get(i.dataId),[t,r]=on(e.values,i.shape,i.dtype);return n.makeTensorInfo(r,i.dtype,t)}const r=new Dt(i.shape,be.NEG);return n.runWebGPUProgram(r,[i],i.dtype)}};const Ns={kernelName:r.NonMaxSuppressionV3,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:i}=e,{boxes:a,scores:s}=t,{maxOutputSize:o,iouThreshold:u,scoreThreshold:d}=i,l=n.readSync(a.dataId),h=n.readSync(s.dataId),{selectedIndices:p}=r.kernel_impls.nonMaxSuppressionV3Impl(l,h,o,u,d);return n.makeTensorInfo([p.length],"int32",new Int32Array(p))}};const zs={kernelName:r.NonMaxSuppressionV5,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:n,attrs:i}=e,{boxes:a,scores:s}=t,{maxOutputSize:o,iouThreshold:u,scoreThreshold:d,softNmsSigma:l}=i,h=n.readSync(a.dataId),p=n.readSync(s.dataId),c=o,f=u,m=d,g=l,{selectedIndices:y,selectedScores:b}=r.kernel_impls.nonMaxSuppressionV5Impl(h,p,c,f,m,g);return[n.makeTensorInfo([y.length],"int32",new Int32Array(y)),n.makeTensorInfo([b.length],"float32",new Float32Array(b))]}};
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
class _s{constructor(e,t){this.variableNames=["x"],this.uniforms="onValue : f32, offValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e,t],this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="onehot"}getUserCode(){return`\n      ${x("index")} {\n        if(index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          setOutputAtIndex(index, mix(uniforms.offValue, uniforms.onValue,\n                                      f32(i32(round(getX(coords.x))) == coords.y)));\n        }\n      }\n    `}}const Ts={kernelName:r.OneHot,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{indices:a}=t,{dtype:s,depth:o,onValue:u,offValue:d}=i,l=r.util.sizeFromShape(a.shape),h=new _s(l,o),p=Rt({inputs:{x:a},backend:n,attrs:{shape:[l]}}),c=[{type:"float32",data:[u]},{type:"float32",data:[d]}],f=n.runWebGPUProgram(h,[p],s,c);n.disposeData(p.dataId);const m=Rt({inputs:{x:f},backend:n,attrs:{shape:[...a.shape,o]}});return n.disposeData(f.dataId),m}};
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
function Fs(e){const{inputs:t,backend:n}=e,{x:i}=t;if("complex64"===i.dtype){const e=Ai({inputs:{input:i},backend:n}),t=Fs({inputs:{x:e},backend:n}),r=Wi({inputs:{input:i},backend:n}),a=Fs({inputs:{x:r},backend:n}),s=Ft({inputs:{real:t,imag:a},backend:n});return n.disposeData(e.dataId),n.disposeData(t.dataId),n.disposeData(r.dataId),n.disposeData(a.dataId),s}return St({attrs:{shape:i.shape,dtype:i.dtype,value:"string"===i.dtype?"":0},backend:n})}const Es={kernelName:r.ZerosLike,backendName:"webgpu",kernelFunc:Fs};const Ds={kernelName:r.OnesLike,backendName:"webgpu",kernelFunc:
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
function e(t){const{inputs:n,backend:i}=t,{x:r}=n;if("string"===r.dtype)throw new Error("onesLike is not supported under string dtype");if("complex64"===r.dtype){const t=Ai({inputs:{input:r},backend:i}),n=e({inputs:{x:t},backend:i}),a=Wi({inputs:{input:r},backend:i}),s=Fs({inputs:{x:a},backend:i}),o=Ft({inputs:{real:n,imag:s},backend:i});return i.disposeData(t.dataId),i.disposeData(n.dataId),i.disposeData(a.dataId),i.disposeData(s.dataId),o}return St({attrs:{shape:r.shape,dtype:r.dtype,value:1},backend:i})}};const Ls={kernelName:r.Pack,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{axis:a}=i;if(1===t.length)return na({inputs:{input:t[0]},backend:n,attrs:{dim:a}});const s=t[0].shape,o=t[0].dtype;t.forEach((e=>{r.util.assertShapesMatch(s,e.shape,"All tensors passed to stack must have matching shapes"),r.util.assert(o===e.dtype,(()=>"All tensors passed to stack must have matching dtypes"))}));const u=[],d=Vi({inputs:t.map((e=>{const t=na({inputs:{input:e},backend:n,attrs:{dim:a}});return u.push(t),t})),backend:n,attrs:{axis:a}});return u.forEach((e=>n.disposeData(e.dataId))),d}};
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
function Os(e,t=!1){const n=e.length,i=y(n),r=e.map(((e,t)=>`uniforms.pad${t}[0]`)).join(","),a=e.map(((e,t)=>`uniforms.pad${t}[0] + uniforms.xShape${n>1?`[${t}]`:""}`)).join(",");return`\n        let start = ${n>1?`${i}(${r})`:`${r}`};\n        let end = ${n>1?`${i}(${a})`:`${a}`};\n        if (${n>1?"any(paddedCoords < start)":"paddedCoords < start"} || ${n>1?"any(paddedCoords >= end)":"paddedCoords >= end"}) {\n          setOutputAtIndex(index, ${t?0:"uniforms.constantValue"});\n        } else {\n          let coords = paddedCoords - start;\n          setOutputAtIndex(index, getX(${n>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n):"coords"}));\n        }\n  `}class Bs{constructor(e,t){this.variableNames=["x"],this.uniforms="constantValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.map(((t,n)=>t[0]+e[n]+t[1])),this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),t.map(((e,t)=>{this.uniforms+=` pad${t} : vec2<i32>,`})),this.xShape=e,this.shaderKey="pad"}getUserCode(){return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let paddedCoords = getCoordsFromIndex(index);\n          ${Os(this.xShape)}\n        }\n      }\n    `}}
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
const Ws={kernelName:r.PadV2,backendName:"webgpu",kernelFunc:e=>{const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{paddings:s,constantValue:o}=i;if(s.every((e=>r.util.arraysEqual(e,[0,0]))))return _t({inputs:{x:a},backend:n});if(0===r.util.sizeFromShape(a.shape)){return St({backend:n,attrs:{shape:s.map(((e,t)=>e[0]+a.shape[t]+e[1])),value:o,dtype:a.dtype}})}const u=[{type:"float32",data:[o]}];s.map((e=>u.push({type:"int32",data:[e[0],e[1]]})));const d=new Bs(a.shape,s);return n.runWebGPUProgram(d,[a],a.dtype,u)}},Us=Ot({opType:U.POW}),Ms={kernelName:r.Pow,backendName:"webgpu",kernelFunc:Us};const Vs={kernelName:r.Prelu,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{x:i,alpha:r}=t,a=new zt(U.PRELU,i.shape,r.shape);return n.runWebGPUProgram(a,[i,r],"float32")}};const Gs={kernelName:r.Prod,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:r}=t,{axis:a,keepDims:s}=i;return Bn(r,a,s,"prod",n)}},Hs={kernelName:r.Range,backendName:"webgpu",kernelFunc:e=>{const{backend:t,attrs:n}=e,{start:i,stop:r,step:a,dtype:s}=n,o=ln(i,r,a,s);return t.makeTensorInfo([o.length],s,o)}},js=Ot({opType:U.DIV}),Xs={kernelName:r.RealDiv,backendName:"webgpu",kernelFunc:js},Ks=Lt({opType:be.RECIPROCAL}),Ys={kernelName:r.Reciprocal,backendName:"webgpu",kernelFunc:Ks},qs=Lt({opType:be.RELU}),Qs={kernelName:r.Relu,backendName:"webgpu",kernelFunc:qs},Zs=Lt({opType:be.RELU6}),Js={kernelName:r.Relu6,backendName:"webgpu",kernelFunc:Zs};
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
class eo{constructor(e,t,n){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, halfPixelCenters : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e[0],t,n,e[3]],this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="resizeBilinear"}getUserCode(){return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let d = coords[3];\n          let rc = coords.yz;\n\n          let effectiveInSize = vec2<f32>(\n            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveOutSize = vec2<f32>(\n            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveInputOverOutputRatioRC =\n              effectiveInSize / effectiveOutSize;\n\n          // Fractional source index\n          let sourceFracIndexRC =\n            (vec2<f32>(rc) + vec2<f32>(uniforms.halfPixelCenters)) *\n            effectiveInputOverOutputRatioRC - vec2<f32>(uniforms.halfPixelCenters);\n\n          // Compute the four integer indices.\n          let sourceFloorRC = vec2<i32>(sourceFracIndexRC);\n          let sourceCeilRC = vec2<i32>(\n            min(vec2<f32>(uniforms.xShape.yz) - vec2<f32>(1.0), ceil(sourceFracIndexRC)));\n\n          let topLeft = getX(b, sourceFloorRC.x, sourceFloorRC.y, d);\n          let bottomLeft = getX(b, sourceCeilRC.x, sourceFloorRC.y, d);\n          let topRight = getX(b, sourceFloorRC.x, sourceCeilRC.y, d);\n          let bottomRight = getX(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n          let fracRC = sourceFracIndexRC - vec2<f32>(sourceFloorRC);\n\n          let top = topLeft + (topRight - topLeft) * fracRC.y;\n          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n          let newValue = top + (bottom - top) * fracRC.x;\n\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    `}}const to={kernelName:r.ResizeBilinear,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{images:r}=t,{alignCorners:a,size:s,halfPixelCenters:o}=i,[u,d]=s,l=[{type:"float32",data:[a&&u>1?1:0,a&&d>1?1:0]},{type:"float32",data:[o?.5:0]}],h=new eo(r.shape,u,d);return n.runWebGPUProgram(h,[r],"float32",l)}};
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
class no{constructor(e,t){this.variableNames=["dy"],this.uniforms="effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, heightScale : f32, widthScale : f32,\n       invHeightScale : f32, invWidthScale : f32, winHeight : i32, winWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=t,this.shaderKey=`resizeBilinearBackprop_${t}`}getUserCode(){return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let b = coords[0];\n          let d = coords[3];\n          let r = coords[1];\n          let c = coords[2];\n\n          var accumulator = 0.0;\n\n          // Compute bounds for where in dy we will look\n          let startRLerp = floor(f32(r) * uniforms.invHeightScale);\n          let startDyR = i32(startRLerp - f32(uniforms.winHeight / 2));\n\n          let startCLerp = floor(f32(c) * uniforms.invWidthScale);\n          let startDyC = i32(startCLerp - f32(uniforms.winWidth / 2));\n\n          // Loop over dy\n          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {\n            let dyR = startDyR + dyROffset;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {\n              continue;\n            }\n\n            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {\n              let dyC = startDyC + dyCOffset;\n\n              // Guard against the window exceeding the bounds of dy\n              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {\n                continue;\n              }\n\n              let dxR = f32(dyR) * uniforms.heightScale;\n              let topDxRIndex = i32(floor(dxR));\n              let bottomDxRIndex = i32(min(ceil(dxR), f32(uniforms.outShape[1] - 1)));\n              let dxRLerp = dxR - f32(topDxRIndex);\n              let inverseDxRLerp = 1.0 - dxRLerp;\n\n              let dxC = f32(dyC) * uniforms.widthScale;\n              let leftDxCIndex = i32(floor(dxC));\n              let rightDxCIndex = i32(min(ceil(dxC), f32(uniforms.outShape[2] - 1)));\n              let dxCLerp = dxC - f32(leftDxCIndex);\n              let inverseDxCLerp = 1.0 - dxCLerp;\n\n              if (r == topDxRIndex && c == leftDxCIndex) {\n                // topLeft\n                accumulator +=\n                  getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n              }\n\n              if (r == topDxRIndex && c == rightDxCIndex) {\n                // topRight\n                accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n              }\n\n              if (r == bottomDxRIndex && c == leftDxCIndex) {\n                // bottomLeft\n                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n              }\n\n              if (r == bottomDxRIndex && c == rightDxCIndex) {\n                // bottomRight\n                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n              }\n            }\n          }\n          // End loop over dy\n\n          setOutputAtIndex(index, accumulator);\n        }\n      }\n    `}}const io={kernelName:r.ResizeBilinearGrad,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{images:r,dy:a}=t,{alignCorners:s}=i,[,o,u]=r.shape,[,d,l]=a.shape,h=[s&&d>1?o-1:o,s&&l>1?u-1:u],p=[s&&d>1?d-1:d,s&&l>1?l-1:l],c=h[0]/p[0],f=h[1]/p[1],m=1/c,g=1/f,y=2*Math.ceil(m)+2,b=2*Math.ceil(g)+2,x=new no(r.shape,s),w=[{type:"int32",data:h},{type:"int32",data:p},{type:"float32",data:[c]},{type:"float32",data:[f]},{type:"float32",data:[m]},{type:"float32",data:[g]},{type:"int32",data:[y]},{type:"int32",data:[b]}];return n.runWebGPUProgram(x,[a],a.dtype,w)}};
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
class ro{constructor(e,t,n,i){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, roundBase : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e[0],t,n,e[3]],this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.halfPixelCenters=i,this.shaderKey=`resizeNearest_${i}`}getUserCode(){let e;e=this.halfPixelCenters?"max((vec2<f32>(rc) + vec2<f32>(0.5)) * effectiveInputOverOutputRatioRC, vec2<f32>(0.0))":"vec2<f32>(rc) * effectiveInputOverOutputRatioRC";return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let d = coords[3];\n          let rc = coords.yz;\n\n          let effectiveInSize = vec2<f32>(\n            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveOutSize = vec2<f32>(\n            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveInputOverOutputRatioRC =\n              effectiveInSize / effectiveOutSize;\n\n          // Fractional source index\n          let sourceFracIndexRC = ${e};\n\n          // Compute the coordinators of nearest neighbor point.\n          let inputShapeRC = vec2<f32>(f32(uniforms.xShape.y), f32(uniforms.xShape.z));\n          let sourceNearestRC = vec2<i32>(\n            min(inputShapeRC - 1.0, floor(sourceFracIndexRC + uniforms.roundBase)));\n          let newValue = getX(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    `}}const ao={kernelName:r.ResizeNearestNeighbor,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{images:r}=t,{alignCorners:a,halfPixelCenters:s,size:o}=i,[u,d]=o,l=[{type:"float32",data:[a&&u>1?1:0,a&&d>1?1:0]},{type:"float32",data:[a?.5:0]}],h=new ro(r.shape,u,d,s);return n.runWebGPUProgram(h,[r],r.dtype,l)}};
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
class so{constructor(e,t){this.variableNames=["dy"],this.uniforms="effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, invHeightScale : f32, invWidthScale : f32,\n       winHeight : i32, winWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=t,this.shaderKey=`resizeNearestNeigborBackprop_${t}`}getUserCode(){return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let b = coords[0];\n          let d = coords[3];\n          let r = coords[1];\n          let c = coords[2];\n\n          var accumulator = 0.0;\n\n          // Compute bounds for where in dy we will look\n          let startRLerp = floor(f32(r) * uniforms.invHeightScale);\n          let startDyR = i32(floor(startRLerp - f32(uniforms.winHeight / 2)));\n\n          let startCLerp = floor(f32(c) * uniforms.invWidthScale);\n          let startDyC = i32(floor(startCLerp - f32(uniforms.winWidth / 2)));\n\n          // Loop over dy\n          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {\n            let dyR = startDyR + dyROffset;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {\n              continue;\n            }\n\n            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {\n              let dyC = startDyC + dyCOffset;\n\n              // Guard against the window exceeding the bounds of dy\n              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {\n                continue;\n              }\n\n              let sourceFracRow = f32(uniforms.effectiveXSize[0]) *\n                  (f32(dyR) / f32(uniforms.effectiveYSize[0]));\n\n              let sourceFracCol = f32(uniforms.effectiveXSize[1]) *\n                  (f32(dyC) / f32(uniforms.effectiveYSize[1]));\n\n              let sourceNearestRow =\n                  i32(min(f32(uniforms.outShape[1] - 1),\n                  ${this.alignCorners?"floor(sourceFracRow + 0.5)":"floor(sourceFracRow)"}));\n\n              let sourceNearestCol =\n                  i32(min(f32(uniforms.outShape[2] - 1),\n                  ${this.alignCorners?"floor(sourceFracCol + 0.5)":"floor(sourceFracCol)"}));\n\n              if (r == sourceNearestRow && c == sourceNearestCol) {\n                accumulator += getDy(b, dyR, dyC, d);\n              }\n            }\n          }\n          // End loop over dy\n\n          setOutputAtIndex(index, accumulator);\n        }\n      }\n    `}}const oo={kernelName:r.ResizeNearestNeighborGrad,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{images:r,dy:a}=t,{alignCorners:s}=i,[,o,u]=r.shape,[,d,l]=a.shape,h=[s&&d>1?o-1:o,s&&l>1?u-1:u],p=[s&&d>1?d-1:d,s&&l>1?l-1:l],c=1/(h[0]/p[0]),f=1/(h[1]/p[1]),m=2*Math.ceil(c)+2,g=2*Math.ceil(f)+2,y=new so(r.shape,s),b=[{type:"int32",data:h},{type:"int32",data:p},{type:"float32",data:[c]},{type:"float32",data:[f]},{type:"int32",data:[m]},{type:"int32",data:[g]}];return n.runWebGPUProgram(y,[a],a.dtype,b)}};
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
class uo{constructor(e){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=" axis : vec4<i32>,",this.shaderKey="reverse"}getUserCode(){return`\n      \n      // Using uniform variables as judging conditions, so the function has\n      // coherent execution within all threads.\n      fn getReverseCoords(coords : vec4<i32>) -> vec4<i32> {\n        var reverseCoords = coords;\n        if (uniforms.axis[0] == 1) {\n          reverseCoords[0] = uniforms.xShape[0] - coords[0] - 1;\n        }\n        if (uniforms.axis[1] == 1) {\n          reverseCoords[1] = uniforms.xShape[1] - coords[1] - 1;\n        }\n        if (uniforms.axis[2] == 1) {\n          reverseCoords[2] = uniforms.xShape[2] - coords[2] - 1;\n        }\n        if (uniforms.axis[3] == 1) {\n          reverseCoords[3] = uniforms.xShape[3] - coords[3] - 1;\n        }\n\n        return reverseCoords;\n      }\n    \n      ${x("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let reverseCoords = getReverseCoords(coords);\n          setOutputAtIndex(index, getX(reverseCoords[0],\n              reverseCoords[1], reverseCoords[2], reverseCoords[3]));\n        }\n      }\n    `}}const lo={kernelName:r.Reverse,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{dims:s}=i,o=a.shape.length;if(0===o)return _t({inputs:{x:a},backend:n});const u=a.shape,d=[1,1,1,1];u.forEach(((e,t)=>{d[t+4-o]=e}));const l=r.util.parseAxisParam(s,a.shape),h=[0,0,0,0];l.forEach((e=>{h[e+4-o]=1}));const p=[{type:"int32",data:h}],c=Rt({inputs:{x:a},backend:n,attrs:{shape:d}}),f=new uo(d),m=n.runWebGPUProgram(f,[c],c.dtype,p);n.disposeData(c.dataId);const g=Rt({inputs:{x:m},backend:n,attrs:{shape:u}});return n.disposeData(m.dataId),g}};
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
class ho{constructor(e,t){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="centerX : f32, centerY : f32, sinRadians : f32,\n          cosRadians : f32,",this.shaderKey="rotate",this.outputShape=e,"number"==typeof t?(this.uniforms+=" fillValue : f32,",this.fillSnippet="var outputValue = uniforms.fillValue;",this.shaderKey+="_float"):(this.uniforms+=" fillValue : vec3<f32>,",this.fillSnippet="var outputValue = uniforms.fillValue[coords[3]];",this.shaderKey+="_vec3")}getUserCode(){return`\n        ${x("index")} {\n          if (index < uniforms.size) {\n            let coords = getCoordsFromIndex(index);\n            let coordXFloat = (f32(coords[2]) - uniforms.centerX) *\n                uniforms.cosRadians - (f32(coords[1]) - uniforms.centerY) *\n                uniforms.sinRadians;\n            let coordYFloat = (f32(coords[2]) - uniforms.centerX) *\n                uniforms.sinRadians + (f32(coords[1]) - uniforms.centerY) *\n                uniforms.cosRadians;\n            let coordX = i32(round(coordXFloat + uniforms.centerX));\n            let coordY = i32(round(coordYFloat + uniforms.centerY));\n            ${this.fillSnippet}\n            if(coordX >= 0 && coordX < uniforms.xShape[2] && coordY >= 0 &&\n                coordY < uniforms.xShape[1]) {\n              outputValue = getX(coords[0], coordY, coordX, coords[3]);\n            }\n            setOutputAtIndex(index, outputValue);\n          }\n        }\n      `}}
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
const po={kernelName:r.RotateWithOffset,backendName:"webgpu",kernelFunc:({inputs:e,attrs:t,backend:n})=>{const{image:i}=e,{radians:a,fillValue:s,center:o}=t,u=n,d=new ho(i.shape,s),[l,h]=r.backend_util.getImageCenter(o,i.shape[1],i.shape[2]),p=[{type:"float32",data:[l]},{type:"float32",data:[h]},{type:"float32",data:[Math.sin(a)]},{type:"float32",data:[Math.cos(a)]}];"number"==typeof s?p.push({type:"float32",data:[Number.parseFloat(s.toFixed(2))]}):p.push({type:"float32",data:s});return u.runWebGPUProgram(d,[i],i.dtype,p)}},co=Lt({opType:be.ROUND}),fo={kernelName:r.Round,backendName:"webgpu",kernelFunc:co},mo=Lt({opType:be.RSQRT,cpuKernelImpl:hn}),go={kernelName:r.Rsqrt,backendName:"webgpu",kernelFunc:mo};
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
class yo{constructor(e,t,n,i,r,a,s,o=!0){this.variableNames=["updates","indices"],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=a,this.type=s,this.sumDupeIndices=o,this.dispatchLayout=F(e),this.dispatch=N(this.dispatchLayout,e,this.workgroupSize),this.sliceDimGreaterThanOne=t>1,this.shaderKey=`scatter_${n}_${i}_${this.sliceDimGreaterThanOne}_${s}_${o}_${r.length}`;const u=y(r.length);this.uniforms=`sliceDim : i32, strides: ${u}, updatesSize: i32,`,this.updatesRank=i,this.indicesRank=n}getUserCode(){let e="";1===this.indicesRank?e="coords[0]":2===this.indicesRank&&(e="coords[0], j");const t=`getIndices(${e})`,n=this.sliceDimGreaterThanOne?"uniforms.strides[j]":"uniforms.strides";let i="",r="";1===this.dispatchLayout.x.length?(i="flattenedIndex",r="\n      fn getUpdatesCoordsFromFlatIndex(index : i32) -> i32 {\n        return index;\n      }\n      "):2===this.dispatchLayout.x.length&&(i="vec2<i32>(flattenedIndex, coords[1])",r="\n      fn getUpdatesCoordsFromFlatIndex(index : i32) -> vec2<i32> {\n        // N.B. |updates| could be a scalar tensor, conceptually representing a\n        // 2D tensor with all values equal to that. By design, its size must be\n        // the same as |outShape[1]| in one dimension, and |indicesShape[0]|\n        // gives the other.\n        let sliceSize = uniforms.outShape[1];\n        let d0 = index / sliceSize;\n        let d1 = index - d0 * sliceSize;\n        return vec2<i32>(d0, d1);\n      }\n      ");const a=`getUpdates(${Array.from({length:this.updatesRank},((e,t)=>`coords[${t}]`)).join(", ")})`;return`\n    ${r}\n      ${x("index")} {\n        if (index < uniforms.updatesSize) {\n          let coords = getUpdatesCoordsFromFlatIndex(index);\n          var flattenedIndex = 0;\n          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {\n            let indexInside = i32(round(${t}));\n            flattenedIndex = flattenedIndex + indexInside * ${n};\n          }\n          let updateValue =\n              ${R(this.type)}(${a});\n          let flatIndex = getOutputIndexFromCoords(${i});\n\n          ${this.sumDupeIndices?c("&result[flatIndex]","updateValue",this.type):"atomicStore(&result[flatIndex], bitcast<i32>(updateValue));"}\n        }\n      }`}}const bo={kernelName:r.ScatterNd,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{indices:a,updates:s}=t,{shape:o}=i,{sliceRank:u,numUpdates:d,sliceSize:l,strides:h,outputSize:p}=r.backend_util.calculateShapes(s,a,o),c=[p/l,l];if(0===p)return n.makeTensorInfo(o,a.dtype);const f=Rt({inputs:{x:a},backend:n,attrs:{shape:[d,u]}}),m=Rt({inputs:{x:s},backend:n,attrs:{shape:[d,l]}}),g=m.dtype,y=St({backend:n,attrs:{shape:c,value:0,dtype:g}}),b=[{type:"int32",data:[u]},{type:"int32",data:h},{type:"int32",data:[r.util.sizeFromShape(m.shape)]}],x=new yo(m.shape,u,f.shape.length,m.shape.length,h,c,g),w=n.runWebGPUProgram(x,[m,f],g,b,y),v=Rt({inputs:{x:w},backend:n,attrs:{shape:o}});return n.disposeData(f.dataId),n.disposeData(m.dataId),n.disposeData(w.dataId),v}};
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
class xo{constructor(e,t){this.outputShape=[],this.variableNames=["sortedSequence","values"],this.uniforms="numInputs : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.side=t,this.shaderKey=`search_sorted_${t}`}getUserCode(){return`\n      fn findBound(batch: i32, value: f32) -> i32 {\n        var left = i32(0);\n        var right = uniforms.numInputs;\n        while (left < right) {\n          var mid = (left + right) / 2;\n          if (getSortedSequence(batch, mid) ${"left"===this.side?"<":"<="} value) {\n            left = mid + 1;\n          } else {\n            right = mid;\n          }\n        }\n        return right;\n      }\n\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let value = getValuesByOutputIndex(index);\n          setOutputAtIndexI32(index, findBound(coords[0], value));\n        }\n      }\n    `}}const wo={kernelName:r.SearchSorted,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{sortedSequence:r,values:a}=t,{side:s}=i,o=new xo([a.shape[0],a.shape[1]],s),u=[{type:"int32",data:[r.shape[1]]}];return n.runWebGPUProgram(o,[r,a],"int32",u)}};
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
class vo{constructor(e,t,n){this.variableNames=["c","a","b"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.cRank=e,this.rank=n,this.shaderKey="select"}getUserCode(){let e,t;if(this.rank>4)throw Error(`Where for rank ${this.rank} is not yet supported`);if(1===this.rank)t="resRC",e="resRC";else{const n=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],r=[];for(let e=0;e<this.outputShape.length;e++)r.push(`${n[e]}`),e<this.cRank&&i.push(`${n[e]}`);e=i.join(),t=r.join()}return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          let cVal = getC(${e});\n          if (cVal >= 1.0) {\n            setOutputAtIndex(index, getA(${t}));\n          } else {\n            setOutputAtIndex(index, getB(${t}));\n          }\n        }\n      }\n    `}}const Co={kernelName:r.Select,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{condition:i,t:a,e:s}=t,o=new vo(i.shape.length,a.shape,a.shape.length);return n.runWebGPUProgram(o,[i,a,s],(0,r.upcastType)(a.dtype,s.dtype))}},ko=Lt({opType:be.SELU}),So={kernelName:r.Selu,backendName:"webgpu",kernelFunc:ko},Io=Lt({opType:be.SIGMOID}),Ro={kernelName:r.Sigmoid,backendName:"webgpu",kernelFunc:Io},$o=Lt({opType:be.SIGN}),Ao={kernelName:r.Sign,backendName:"webgpu",kernelFunc:$o},Po=Lt({opType:be.SIN}),No={kernelName:r.Sin,backendName:"webgpu",kernelFunc:Po},zo=Lt({opType:be.SINH}),_o={kernelName:r.Sinh,backendName:"webgpu",kernelFunc:zo},To=Lt({opType:be.SOFTPLUS}),Fo={kernelName:r.Softplus,backendName:"webgpu",kernelFunc:To};
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
class Eo{constructor(e,t,n,i,r,a){this.variableNames=["x"],this.outputShape=[],this.uniforms="",this.workgroupSize=[64,1,1],this.size=!0;const s=new Array(i.length);for(let e=0;e<s.length;e++)s[e]=i[r[e]];this.outputShape=s,this.newDim=r,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=e,this.paddedXShape=t,this.uniforms+=`reshapedPaddedXShape : ${y(i.length)}, paddedXShapeStrides : ${y(a)}, `,n.map(((e,t)=>{this.uniforms+=` pad${t} : vec2<i32>,`})),this.shaderKey=`spaceToBatchND_${r}`}getUserCode(){const e=y(this.outputShape.length),t=Fn(this.newDim);return`\n      ${k(this.paddedXShape,"PaddedX")}\n      ${x("index")} {\n        if(index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let switchedIndex = getIndexFromCoords${this.outputShape.length}D(${e}(${t}), uniforms.reshapedPaddedXShape);\n          let paddedCoords = getPaddedXCoordsFromIndex(switchedIndex);\n          ${Os(this.xShape,!0)}\n        }\n      }\n    `}}
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
const Do={kernelName:r.SpaceToBatchND,backendName:"webgpu",kernelFunc:e=>{const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{blockShape:s,paddings:o}=i;r.util.assert(a.shape.length<=4,(()=>"spaceToBatchND for rank > 4 with a WebGPU backend not implemented yet"));const u=s.reduce(((e,t)=>e*t)),d=[[0,0]];d.push(...o);for(let e=1+s.length;e<a.shape.length;++e)d.push([0,0]);const l=d.map(((e,t)=>e[0]+a.shape[t]+e[1])),h=r.backend_util.getReshaped(l,s,u,!1),p=r.backend_util.getPermuted(h.length,s.length,!1),c=r.backend_util.getReshapedPermuted(l,s,u,!1),f=r.util.computeStrides(l),m=new Eo(a.shape,l,d,h,p,f.length),g=[{type:"int32",data:h},{type:"int32",data:f}];d.map((e=>g.push({type:"int32",data:[e[0],e[1]]})));const y=n.runWebGPUProgram(m,[a],a.dtype,g),b=Rt({inputs:{x:y},backend:n,attrs:{shape:c}});return n.disposeData(y.dataId),b}};
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
class Lo{constructor(e,t,n){this.variableNames=["input","indices","segmentIds"],this.outputShape=[],this.uniforms="segmentSize : i32, sparseSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e,this.type=n,this.dispatchLayout=F([t]),this.dispatch=N(this.dispatchLayout,[t],this.workgroupSize),this.shaderKey="sparseSegmentSum"}getUserCode(){return`\n    ${x("index")} {\n      if (index < uniforms.sparseSize) {\n        let indexInSegmentIds = index / uniforms.segmentSize;\n        let indexInSegment = index % uniforms.segmentSize;\n        let indexInInput = indices[indexInSegmentIds];\n        let segmentId = segmentIds[indexInSegmentIds];\n\n        let value = input[indexInInput * uniforms.segmentSize + indexInSegment];\n        let outIndex = segmentId * uniforms.segmentSize + indexInSegment;\n        ${c("&result[outIndex]","value",this.type)}\n      }\n    }\n  `}}class Oo{constructor(e,t){this.variableNames=["segmentIds"],this.outputShape=[],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=[e],this.dispatchLayout=F(t),this.dispatch=N(this.dispatchLayout,t,this.workgroupSize),this.shaderKey="sparseSegmentIdCountProgram"}getUserCode(){return`\n    ${x("index")} {\n      if (index < uniforms.segmentIdsShape) {\n        let segmentId = segmentIds[index];\n        ${c("&result[segmentId]","1","int32")}\n      }\n    }\n  `}}class Bo{constructor(e,t){this.variableNames=["segmentSum","sameSegmentIdCount"],this.outputShape=[],this.uniforms="segmentSize : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.type=t,this.dispatchLayout=F(e),this.dispatch=N(this.dispatchLayout,e,this.workgroupSize),this.shaderKey="sparseSegmentMean"}getUserCode(){return`\n    ${x("index")} {\n      if (index < uniforms.size) {\n        let segmentId = index / uniforms.segmentSize;\n        let count = sameSegmentIdCount[segmentId];\n        if (count != 0) {\n          ${"float32"===this.type?"setOutputAtIndex(index, segmentSum[index] / f32(count));":"setOutputAtIndexI32(index, segmentSum[index] / count);"}\n        }\n      }\n    }\n  `}}
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
function Wo(e,t,n,i=!1,a){const s=r.util.sizeFromShape(e.shape)/e.shape[0],o=e.dtype,u=r.util.sizeFromShape(t.shape),d=a.readSync(n.dataId),l=u>0?d[u-1]+1:0;let h;const p=e.shape.slice();p[0]=l;const c=u*s,f=St({backend:a,attrs:{shape:p,value:0,dtype:o}});h=new Lo(p,c,o);let m=[{type:"int32",data:[s]},{type:"int32",data:[c]}];const g=a.runWebGPUProgram(h,[e,t,n],o,m,f);if(i)return g;const y=St({backend:a,attrs:{shape:[l],value:0,dtype:"int32"}});h=new Oo(l,n.shape);const b=a.runWebGPUProgram(h,[n],"int32",null,y),x=St({backend:a,attrs:{shape:p,value:0,dtype:o}});h=new Bo(p,o),m=[{type:"int32",data:[s]}];const w=a.runWebGPUProgram(h,[g,b],o,m,x);return a.disposeData(g.dataId),a.disposeData(b.dataId),w}const Uo={kernelName:r.SparseSegmentMean,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{data:i,indices:r,segmentIds:a}=t;return Wo(i,r,a,!1,n)}};const Mo={kernelName:r.SparseSegmentSum,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n}=e,{data:i,indices:r,segmentIds:a}=t;return Wo(i,r,a,!0,n)}};
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
class Vo{constructor(e,t){this.variableNames=["A"],this.workgroupSize=[64,1,1],this.size=!0;const n=new Array(e.length);for(let i=0;i<n.length;i++)n[i]=e[i]*t[i];this.outputShape=n,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.rank=this.outputShape.length,this.shaderKey="tile"}getUserCode(){const e=function(e,t=""){if(e>=5)throw Error(`Tile for rank ${e} is not yet supported`);if(1===e)return`(resRC % ${t}aShape)`;const n=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[];for(let r=0;r<e;r++)i.push(`(${n[r]} % ${t}aShape[${r}])`);return i.join()}(this.rank,"uniforms.");return`\n      ${x("index")} {\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          setOutputAtIndex(index, getA(${e}));\n        }\n      }\n    `}}
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
function Go(e){const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{reps:s}=i;if(n.shouldExecuteOnCPU([a])||"string"===a.dtype||a.shape.length>=5){const e=n.readSync(a.dataId),t="string"===a.dtype?e.map((e=>r.util.decodeString(e))):e,i=(0,r.buffer)(a.shape,a.dtype,t),o=bn(i,s);return n.makeTensorInfo(o.shape,o.dtype,o.values)}const o=new Vo(a.shape,s);return n.runWebGPUProgram(o,[a],a.dtype)}const Ho={kernelName:r.Tile,backendName:"webgpu",kernelFunc:Go};const jo={kernelName:r.SparseToDense,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{sparseIndices:a,sparseValues:s,defaultValue:o}=t,{outputShape:u}=i,{sliceRank:d,numUpdates:l,sliceSize:h,strides:p,outputSize:c}=r.backend_util.calculateShapes(s,a,u),f=!1;if("string"===s.dtype){const e=n.bufferSync(a),t=n.bufferSync(s),i=r.util.decodeString(n.readSync(o.dataId)[0]),m=pn(e,t,u,c,h,l,d,p,i,f);return n.makeTensorInfo(u,m.dtype,m.values)}const m=[c/h,h],g=Rt({inputs:{x:a},backend:n,attrs:{shape:[l,d]}}),y=s.shape.length?Rt({inputs:{x:s},backend:n,attrs:{shape:[l,h]}}):_t({inputs:{x:s},backend:n}),b=y.dtype,x=n.makeTensorInfo([],b,r.util.makeZerosTypedArray(1,b)),w=Rt({inputs:{x:o},backend:n,attrs:{shape:Array(m.length).fill(1)}}),v=Go({inputs:{x:w},backend:n,attrs:{reps:m}}),C=[{type:"int32",data:[d]},{type:"int32",data:p},{type:"int32",data:[r.util.sizeFromShape([l,h])]}];switch(l){case 0:break;case 1:{const e=new yo([l,h],d,g.shape.length,y.shape.length,p,m,b,f);n.runWebGPUProgram(e,[y,g],b,C,v)}break;default:{const e=new yo([l,h],d,g.shape.length,x.shape.length,p,m,b,f);n.runWebGPUProgram(e,[x,g],b,C,v)}{const e=new yo([l,h],d,g.shape.length,y.shape.length,p,m,b);n.runWebGPUProgram(e,[y,g],b,C,v)}}const k=Rt({inputs:{x:v},backend:n,attrs:{shape:u}});return n.disposeData(g.dataId),n.disposeData(y.dataId),n.disposeData(w.dataId),n.disposeData(x.dataId),n.disposeData(v.dataId),k}};const Xo={kernelName:r.SplitV,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{numOrSizeSplits:s,axis:o}=i,u=r.util.parseAxisParam(o,a.shape)[0],d=r.backend_util.prepareSplitSize(a,s,u),l=a.shape.length,h=new Array(l).fill(0),p=a.shape.slice();return d.map((e=>{const t=[...p];t[u]=e;const i=bi({inputs:{x:a},backend:n,attrs:{begin:h,size:t}});return h[u]+=e,i}))}},Ko=Lt({opType:be.SQRT}),Yo={kernelName:r.Sqrt,backendName:"webgpu",kernelFunc:Ko},qo={kernelName:r.Square,backendName:"webgpu",kernelFunc:({inputs:e,backend:t})=>{const{x:n}=e,i=t,r=new Dt(n.shape,be.SQUARE);return i.runWebGPUProgram(r,[n],n.dtype)}},Qo=Ot({opType:U.SQUARED_DIFFERENCE}),Zo={kernelName:r.SquaredDifference,backendName:"webgpu",kernelFunc:Qo};const Jo={kernelName:r.Step,backendName:"webgpu",kernelFunc:
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
function({inputs:e,attrs:t,backend:n}){const{x:i}=e,r=new Dt(i.shape,be.STEP,"stepAlpha : f32,"),a=[{type:"float32",data:[t.alpha]}];return n.runWebGPUProgram(r,[i],i.dtype,a)}};
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
class eu{constructor(e){this.variableNames=["x"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]);const t=y(this.outputShape.length);this.uniforms=`begin : ${t},  strides : ${t}, `,this.shaderKey="stridedSlice"}getUserCode(){let e="";if(1===this.outputShape.length)e="coords * uniforms.strides + uniforms.begin";else{let t=0;e=this.outputShape.map(((e,n)=>(t++,1===this.outputShape.length?`coords * uniforms.strides[${n}] + uniforms.begin[${n}]`:`coords[${t-1}] * uniforms.strides[${n}] + uniforms.begin[${n}]`))).join(",")}return`\n       ${x("index")} {\n         if (index < uniforms.size) {\n           let coords = getCoordsFromIndex(index);\n           setOutputAtIndex(index, getX(${e}));\n         }\n       }\n     `}}const tu={kernelName:r.StridedSlice,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{begin:s,end:o,strides:u,beginMask:d,endMask:l,ellipsisMask:h,newAxisMask:p,shrinkAxisMask:c}=i,{finalShapeSparse:f,finalShape:m,isIdentity:g,sliceDim0:y,isSimpleSlice:b,begin:x,end:w,strides:v}=r.slice_util.sliceInfo(a.shape,s,o,u,d,l,h,p,c);let C;if(g)C=Rt({inputs:{x:a},backend:n,attrs:{shape:m}});else if(y||b){r.util.assert(a.shape.length>=1,(()=>`Input must have rank at least 1, got: ${a.shape.length}`));const e=r.slice_util.computeOutShape(x,w,v),t=bi({inputs:{x:a},backend:n,attrs:{begin:x,size:e}});C=Rt({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeData(t.dataId)}else{if(n.shouldExecuteOnCPU([a])){const e=n.readSync(a.dataId),t=(0,r.buffer)(a.shape,a.dtype,e),i=mn(f,t,v,x);C=n.makeTensorInfo(m,a.dtype,i.values)}else{const e=new eu(f),t=[{type:"int32",data:x},{type:"int32",data:v}],i=n.runWebGPUProgram(e,[a],a.dtype,t);C=Rt({inputs:{x:i},backend:n,attrs:{shape:m}}),n.disposeData(i.dataId)}}return C}};const nu={kernelName:r.StringNGrams,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{separator:r,nGramWidths:a,leftPad:s,rightPad:o,padWidth:u,preserveShortSequences:d}=i,{data:l,dataSplits:h}=t,p=n.readSync(l.dataId),c=n.readSync(h.dataId),[f,m]=gn(p,c,r,a,s,o,u,d);return[n.makeTensorInfo([f.length],"string",f),n.makeTensorInfo(h.shape,"int32",m)]}},iu=Ot({opType:U.SUB,cpuKernelImpl:yn,supportsComplex:!0}),ru={kernelName:r.Sub,backendName:"webgpu",kernelFunc:iu},au=Lt({opType:be.TAN}),su={kernelName:r.Tan,backendName:"webgpu",kernelFunc:au},ou=Lt({opType:be.TANH}),uu={kernelName:r.Tanh,backendName:"webgpu",kernelFunc:ou};const du={kernelName:r.TensorScatterUpdate,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{tensor:a,indices:s,updates:o}=t,{}=i,{sliceRank:u,numUpdates:d,sliceSize:l,strides:h,outputSize:p}=r.backend_util.calculateShapes(o,s,a.shape),c=[p/l,l];if(0===p)return n.makeTensorInfo(a.shape,s.dtype);const f=[],m=Rt({inputs:{x:s},backend:n,attrs:{shape:[d,u]}});f.push(m);const g=Rt({inputs:{x:o},backend:n,attrs:{shape:[d,l]}});f.push(g);const y=Rt({inputs:{x:a},backend:n,attrs:{shape:c}});f.push(y);const b=Go({inputs:{x:y},backend:n,attrs:{reps:Array(c.length).fill(1)}}),x=new yo([d,l],u,m.shape.length,g.shape.length,h,c,a.dtype,!1),w=[{type:"int32",data:[u]},{type:"int32",data:h},{type:"int32",data:[r.util.sizeFromShape([d,l])]}],v=n.runWebGPUProgram(x,[g,m],y.dtype,w,b);f.push(v);const C=Rt({inputs:{x:v},backend:n,attrs:{shape:a.shape}});return f.forEach((e=>n.disposeData(e.dataId))),C}};
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
class lu{constructor(e){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="inputSize : i32, firstPass : i32, negativeInf : f32,\n        dir : i32, inc : i32,",this.shaderKey="swap"}getUserCode(){return`\n        ${x("index")} {\n          if (index < uniforms.size) {\n            let outC = getCoordsFromIndex(index);\n            let batch = outC[0];\n            let elemIdx = outC[1];\n            // We compare elements pair-wise within a group of size 2 * inc.\n            // The comparing rule for each group alternates between ascending\n            // and descending. Within each group, we compare each pair at\n            // positions i and i+inc. To decide whether an element at position i\n            // is x0 or x1, we mod it by 2 * inc, if the result is smaller than\n            // inc, it is in the first half of the group, we denote it as x0,\n            // otherwise we denote it as x1.\n            // For example, as shown in the Bitonic top K paper referenced\n            // above, Figure5(a) shows that element[1] is in the second half of\n            // the group when group size is 2, but it is in the first half of\n            // the group when group size is 4.\n            let isFirstInPair = elemIdx % (2 * uniforms.inc) < uniforms.inc;\n            var i = 0;\n            if (isFirstInPair) {\n              i = elemIdx;\n            } else {\n              i = elemIdx - uniforms.inc;\n            }\n\n            var i0 = 0;\n            if (uniforms.firstPass == 1) {\n              i0 = i;\n            } else {\n              i0 = i32(getIndices(batch, i));\n            }\n\n            var i1 = 0;\n            if (uniforms.firstPass == 1) {\n              i1 = i + uniforms.inc;\n            } else {\n              i1 = i32(getIndices(batch, i + uniforms.inc));\n            }\n\n            var x0 = f32(0.0);\n            var x1 = f32(0.0);\n            if (i0 < uniforms.inputSize) {\n              x0 = getX(batch, i0);\n            } else {\n              x0 = uniforms.negativeInf;\n            }\n            if (i1 < uniforms.inputSize) {\n              x1 = getX(batch, i1);\n            } else {\n              x1 = uniforms.negativeInf;\n            }\n\n            let reverse = elemIdx % (2 * uniforms.dir) >= uniforms.dir;\n            let isGreater = x0 > x1 || (x0 == x1 && i1 > i0);\n            if (reverse == isGreater) {\n              // Elements in opposite order of direction\n              let iTemp = i0;\n              i0 = i1;\n              i1 = iTemp;\n            }\n            if (isFirstInPair) {\n              setOutputAtIndex(index, f32(i0));\n            } else {\n              setOutputAtIndex(index, f32(i1));\n            }\n          }\n        }\n      `}}class hu{constructor(e){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="inputSize : i32, firstPass : i32, k : i32,",this.shaderKey="merge"}getUserCode(){return`\n        ${x("index")} {\n          if (index < uniforms.size) {\n            let outC = getCoordsFromIndex(index);\n            let batch = outC[0];\n            let elemIdx = outC[1];\n            // The output size is half of the previous size.\n            // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _\n            // (k=4), we only need to output the indices at positions |, the\n            // indices at positions _ can be thrown away, see Figure5(b) After\n            // Phase 2 (Merge phase) in the Bitonic Top K paper referenced\n            // above.\n            // For example, the paper shows we only need to output the orange\n            // bars. The output sequence should look like this | | | | | | | |.\n            // Because the sequence is halved, to map the output index back to\n            // the previous sequence to find the corresponding value, we need\n            // to double the index. When we double the index, we basically\n            // interpolate a position, so 2i looks like\n            // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k\n            // position of each 2k positions by - elemIdx % k. E.g. for output\n            // at index 4,5,6,7, we want to get the corresponding element at\n            // original index 8,9,10,11, for output at index 8,9,10,11,\n            // we want to get the corresponding element at original index\n            // 16,17,18,19, so on and so forth.\n\n            var i = 0;\n            if (elemIdx < uniforms.k) {\n              i = elemIdx;\n            } else {\n              i = elemIdx * 2 - elemIdx % uniforms.k;\n            }\n            var i0 = 0;\n            if (uniforms.firstPass == 1) {\n              i0 = i;\n            } else {\n              i0 = i32(getIndices(batch, i));\n            }\n            var i1 = 0;\n            if (uniforms.firstPass == 1) {\n              i1 = i + uniforms.k;\n            } else {\n              i1 = i32(getIndices(batch, i + uniforms.k));\n            }\n\n            let x0 = getX(batch, i0);\n            var x1 = f32(0.0);\n            if (i1 < uniforms.inputSize) {\n              x1 = getX(batch, i1);\n            } else {\n              x1 = x0;\n            }\n\n            if (x0 >= x1) {\n              setOutputAtIndex(index, f32(i0));\n            } else {\n              setOutputAtIndex(index, f32(i1));\n            }\n          }\n        }\n      `}}
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
function pu(e,t){null!==t&&e.disposeData(t.dataId)}function cu(e){let t=1;for(;t<e;)t*=2;return t}const fu={kernelName:r.TopK,backendName:"webgpu",kernelFunc:function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a}=t,{k:s,sorted:o}=i,u=a.shape,d=u[u.length-1];if(n.shouldExecuteOnCPU([a])){const e=n.readSync(a.dataId),[t,i]=xn(e,u,a.dtype,s,o);return[n.makeTensorInfo(t.shape,t.dtype,t.values),n.makeTensorInfo(i.shape,i.dtype,i.values)]}if(0===s)return u[u.length-1]=0,[n.makeTensorInfo(u,a.dtype,[]),n.makeTensorInfo(u,"int32",[])];if(1===d)return[a,St({attrs:{shape:u,dtype:"int32",value:0},backend:n})];const l=r.util.sizeFromShape(u)/d,h=Rt({inputs:{x:a},attrs:{shape:[l,d]},backend:n}),p=cu(s),c=cu(d);let f=null;const m=()=>null===f?[h,h]:[h,f],g=(e,t,i)=>{const r=m(),a=new lu(i),s=[{type:"int32",data:[d]},{type:"int32",data:[null===f?1:0]},{type:"float32",data:[Number.NEGATIVE_INFINITY]},{type:"int32",data:[e]},{type:"int32",data:[t]}],o=f;f=n.runWebGPUProgram(a,r,"int32",s),pu(n,o)};for(let e=1;e<p;e*=2){const t=2*e;for(let n=e;n>=1;n/=2)g(t,n,[l,c])}for(let e=c;e>p;e/=2){const t=m(),i=new hu([l,e/2]),r=[{type:"int32",data:[d]},{type:"int32",data:[null===f?1:0]},{type:"int32",data:[p]}],a=f;f=n.runWebGPUProgram(i,t,"int32",r),pu(n,a);const s=p/2,o=2*s;for(let e=s;e>=1;e/=2)g(o,e,f.shape)}let y=f;f=bi({inputs:{x:f},backend:n,attrs:{begin:0,size:[l,s]}}),pu(n,y);let b=Ra({inputs:{x:h,indices:f},backend:n,attrs:{axis:1,batchDims:1}});pu(n,h);const x=u.slice(0,-1);x.push(s),y=f,f=Rt({inputs:{x:f},attrs:{shape:x},backend:n}),pu(n,y);const w=b;return b=Rt({inputs:{x:b},attrs:{shape:x},backend:n}),pu(n,w),[b,f]}};
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
class mu{constructor(e){this.variableNames=["Image","Transforms"],this.uniforms="interpolationModeId : i32, fillModeId : i32, fillValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=F(this.outputShape),this.dispatch=N(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="transform"}getUserCode(){return`\n          fn mapCoord(outCoord : f32, len : f32) -> f32{\n            var inCoord = outCoord;\n            if(uniforms.fillModeId == 2) {\n              if (inCoord < 0.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz2 = 2.0 * len;\n                  if (inCoord < sz2) {\n                    inCoord = sz2 * f32(i32(f32(-inCoord / sz2))) +\n                    inCoord;\n                  }\n                  if (inCoord < -len) {\n                    inCoord = inCoord + sz2;\n                  } else {\n                    inCoord = -inCoord - 1.0;\n                  }\n                }\n              } else if (inCoord > len - 1.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz2 = 2.0 * len;\n                  inCoord = inCoord - sz2 * f32(i32(f32(inCoord / sz2)));\n                  if (inCoord >= len) {\n                    inCoord = sz2 - inCoord - 1.0;\n                  }\n                }\n              }\n              return clamp(inCoord, 0.0, len - 1.0);\n            } else if (uniforms.fillModeId == 3) {\n              if (inCoord < 0.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz = len - 1.0;\n                  inCoord = inCoord + len * (f32(i32(f32(-inCoord / sz))) + 1.0);\n                }\n              } else if (inCoord > len - 1.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz = len - 1.0;\n                  inCoord = inCoord - len * f32(i32(f32(inCoord / sz)));\n                }\n              }\n              return clamp(inCoord, 0.0, len - 1.0);\n            } else if (uniforms.fillModeId == 4) {\n              return clamp(outCoord, 0.0, len - 1.0);\n            }\n            return outCoord;\n          }\n          fn readWithFillValue(batch : i32, coordY : i32, coordX : i32,\n            channel : i32) -> f32 {\n            var outputValue : f32;\n            if (0 <= coordY && coordY < uniforms.imageShape[1] && 0 <= coordX && coordX < uniforms.imageShape[2]) {\n                outputValue = getImage(batch, coordY, coordX, channel);\n            } else {\n              outputValue = uniforms.fillValue;\n            }\n            return outputValue;\n          }\n\n          ${x("index")} {\n            if (index < uniforms.size) {\n              let coords = getCoordsFromIndex(index);\n              var outputValue : f32;\n              let batch = coords[0];\n              let x = coords[2];\n              let y = coords[1];\n              let channel = coords[3];\n              let xf = f32(x);\n              let yf = f32(y);\n              let a1 = getTransforms(batch, 0);\n              let a2 = getTransforms(batch, 1);\n              let a3 = getTransforms(batch, 2);\n              let b1 = getTransforms(batch, 3);\n              let b2 = getTransforms(batch, 4);\n              let b3 = getTransforms(batch, 5);\n              let c1 = getTransforms(batch, 6);\n              let c2 = getTransforms(batch, 7);\n              let projection = c1 * xf + c2 * yf + 1.0;\n              if (projection == 0.0) {\n                outputValue = uniforms.fillValue;\n              } else {\n                let inX = (a1 * xf + a2 * yf + a3) / projection;\n                let inY = (b1 * xf + b2 * yf + b3) / projection;\n                let mapX = mapCoord(inX, f32(uniforms.imageShape[2]));\n                let mapY = mapCoord(inY, f32(uniforms.imageShape[1]));\n\n                if (uniforms.interpolationModeId == 1) {\n                  let coordY = i32(round(mapY));\n                  let coordX = i32(round(mapX));\n                  outputValue = readWithFillValue(batch, coordY, coordX,\n                    channel);\n                } else {\n                  let yFloor = floor(mapY);\n                  let xFloor = floor(mapX);\n                  let yCeil = yFloor + 1.0;\n                  let xCeil = xFloor + 1.0;\n                  let valueYFloor = (xCeil - mapX) *\n                  readWithFillValue(batch, i32(yFloor), i32(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, i32(yFloor), i32(xCeil), channel);\n                  let valueYCeil = (xCeil - mapX) *\n                  readWithFillValue(batch, i32(yCeil), i32(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, i32(yCeil), i32(xCeil), channel);\n                  outputValue = (yCeil - mapY) * valueYFloor +\n                  (mapY - yFloor) * valueYCeil;\n                }\n              }\n              setOutputAtIndex(index, outputValue);\n            }\n          }\n        `}}const gu={kernelName:r.Transform,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{image:r,transforms:a}=t,{interpolation:s,fillMode:o,fillValue:u,outputShape:d}=i,[l,h,p,c]=r.shape,[f,m]=null!=d?d:[h,p],g=new mu([l,f,m,c]),y="nearest"===s?1:2;let b;switch(o){case"constant":default:b=1;break;case"reflect":b=2;break;case"wrap":b=3;break;case"nearest":b=4}const x=[{type:"int32",data:[y]},{type:"int32",data:[b]},{type:"float32",data:[u]}];return n.runWebGPUProgram(g,[r,a],"float32",x)}};const yu={kernelName:r.Unpack,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{value:r}=t;let{axis:a}=i;a<0&&(a+=r.shape.length);const s=r,o=s.shape.length,u=r.shape[a],d=new Array(o-1);let l=0;for(let e=0;e<o;e++)e!==a&&(d[l++]=s.shape[e]);const h=[],p=new Array(o).fill(0),c=s.shape.slice();c[a]=1;const f=new Array(u);for(let e=0;e<f.length;e++){p[a]=e;const t=bi({inputs:{x:s},backend:n,attrs:{begin:p,size:c}}),i=Rt({inputs:{x:t},backend:n,attrs:{shape:d}});f[e]=i,h.push(t)}return h.forEach((e=>n.disposeData(e.dataId))),f}};
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
class bu{constructor(e,t,n){if(this.outputShape=[],this.variableNames=["x","segmentIds"],this.uniforms="numSegments : i32, xSize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t,this.dispatchLayout=F(e),this.dispatch=N(this.dispatchLayout,e,this.workgroupSize),"float32"!==n&&"int32"!==n)throw new Error(`UnsortedSegmentSum only supports float32 and int32\n              types, does not support ${n} type.`);this.type=n,this.shaderKey="unsortedSegmentSum"}getUserCode(){return`\n    ${x("index")} {\n      if (index < uniforms.xSize) {\n        let coords = getXCoordsFromIndex(index);\n        let b = coords[0];\n        let inCol = coords[1];\n\n        let segmentId = i32(getSegmentIds(inCol));\n        if (segmentId >= 0) {\n          let flatIndex = b * uniforms.numSegments + segmentId % uniforms.numSegments;\n          let value = getX(b, inCol);\n\n          ${c("&result[flatIndex]","value",this.type)}\n        }\n      }\n    }\n  `}}const xu=[Pt,kn,In,$n,Pn,zn,Wn,Un,Vn,Gn,jn,Kn,qn,Zn,ei,di,li,ci,fi,mi,wi,ki,Ii,Ni,_i,Ei,Et,Oi,Gi,qi,tr,ir,ar,sr,or,dr,hr,cr,xr,wr,vr,kr,Nr,zr,$r,Tr,Er,Or,Br,Ur,jr,Kr,Yr,Qr,Jr,ta,ia,aa,ua,It,la,ga,pa,fa,wa,va,Ca,Sa,$a,Pa,za,Tt,_a,Ui,Fa,Da,Oa,Ba,Ua,Va,Ha,Ya,Xa,Qa,Ja,ts,as,os,ai,ds,ls,ms,hs,fs,gs,oi,ys,xs,vs,ks,As,Vr,Ps,Ns,zs,$i,Ts,Ds,Ls,Ws,Ms,Vs,Gs,Hs,Pi,Xs,Ys,Qs,Js,$t,to,io,ao,oo,lo,po,fo,go,bo,wo,Co,So,Ro,Ao,No,_o,xi,Jo,tu,nu,$s,Fo,Do,Uo,Mo,jo,Xo,Yo,qo,Zo,ru,Hr,su,uu,du,Ho,fu,gu,Dn,yu,{kernelName:r.UnsortedSegmentSum,backendName:"webgpu",kernelFunc:
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
function(e){const{inputs:t,backend:n,attrs:i}=e,{x:a,segmentIds:s}=t,{numSegments:o}=i,u=a.shape.length,d=[];let l=0;const h=r.backend_util.getAxesPermutation([l],u);let p=a;null!=h&&(p=En({inputs:{x:a},backend:n,attrs:{perm:h}}),d.push(p),l=r.backend_util.getInnerMostAxes(1,u)[0]);const c=r.backend_util.segment_util.computeOutShape(p.shape,l,o),f=r.util.sizeFromShape([p.shape[l]]),m=Rt({inputs:{x:p},backend:n,attrs:{shape:[-1,f]}});d.push(m);const g=a.dtype,y=[m.shape[0],o],b=St({backend:n,attrs:{shape:y,value:0,dtype:g}}),x=new bu(m.shape,y,g),w=[{type:"int32",data:[o]},{type:"int32",data:[r.util.sizeFromShape(m.shape)]}],v=n.runWebGPUProgram(x,[m,s],g,w,b),C=Rt({inputs:{x:v},backend:n,attrs:{shape:c}});d.push(v);let k=C;if(null!=h){d.push(C);const e=r.backend_util.getUndoAxesPermutation(h);k=En({inputs:{x:k},backend:n,attrs:{perm:e}})}return d.forEach((e=>n.disposeData(e.dataId))),k}},Es];for(const e of xu)(0,r.registerKernel)(e)}
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
 */}]);