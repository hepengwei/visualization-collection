"use strict";(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[7024],{17024:(e,t,n)=>{n.d(t,{N:()=>c});var o=n(39437);const a={type:"change"},i={type:"start"},s={type:"end"};class c extends o.Qev{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.Pq0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.kBv.ROTATE,MIDDLE:o.kBv.DOLLY,RIGHT:o.kBv.PAN},this.touches={ONE:o.wtR.ROTATE,TWO:o.wtR.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return m.phi},this.getAzimuthalAngle=function(){return m.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",q),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",q),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(a),n.update(),r=c.NONE},this.update=function(){const t=new o.Pq0,i=(new o.PTz).setFromUnitVectors(e.up,new o.Pq0(0,1,0)),s=i.clone().invert(),b=new o.Pq0,E=new o.PTz,f=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(i),m.setFromVector3(t),n.autoRotate&&r===c.NONE&&N(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(m.theta+=p.theta*n.dampingFactor,m.phi+=p.phi*n.dampingFactor):(m.theta+=p.theta,m.phi+=p.phi);let o=n.minAzimuthAngle,g=n.maxAzimuthAngle;return isFinite(o)&&isFinite(g)&&(o<-Math.PI?o+=f:o>Math.PI&&(o-=f),g<-Math.PI?g+=f:g>Math.PI&&(g-=f),m.theta=o<=g?Math.max(o,Math.min(g,m.theta)):m.theta>(o+g)/2?Math.max(o,m.theta):Math.min(g,m.theta)),m.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,m.phi)),m.makeSafe(),m.radius*=u,m.radius=Math.max(n.minDistance,Math.min(n.maxDistance,m.radius)),!0===n.enableDamping?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),t.setFromSpherical(m),t.applyQuaternion(s),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),h.set(0,0,0)),u=1,!!(d||b.distanceToSquared(n.object.position)>l||8*(1-E.dot(n.object.quaternion))>l)&&(n.dispatchEvent(a),b.copy(n.object.position),E.copy(n.object.quaternion),d=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",B),n.domElement.removeEventListener("pointerdown",X),n.domElement.removeEventListener("pointercancel",F),n.domElement.removeEventListener("wheel",U),n.domElement.removeEventListener("pointermove",Z),n.domElement.removeEventListener("pointerup",F),null!==n._domElementKeyEvents&&(n._domElementKeyEvents.removeEventListener("keydown",q),n._domElementKeyEvents=null)};const n=this,c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=c.NONE;const l=1e-6,m=new o.YHV,p=new o.YHV;let u=1;const h=new o.Pq0;let d=!1;const b=new o.I9Y,E=new o.I9Y,f=new o.I9Y,g=new o.I9Y,y=new o.I9Y,P=new o.I9Y,v=new o.I9Y,O=new o.I9Y,T=new o.I9Y,w=[],A={};function L(){return Math.pow(.95,n.zoomSpeed)}function N(e){p.theta-=e}function k(e){p.phi-=e}const Y=function(){const e=new o.Pq0;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),h.add(e)}}(),j=function(){const e=new o.Pq0;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),h.add(e)}}(),I=function(){const e=new o.Pq0;return function(t,o){const a=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let s=e.length();s*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*t*s/a.clientHeight,n.object.matrix),j(2*o*s/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),j(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function M(e){n.object.isPerspectiveCamera?u/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(e){n.object.isPerspectiveCamera?u*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function x(e){b.set(e.clientX,e.clientY)}function S(e){g.set(e.clientX,e.clientY)}function D(){if(1===w.length)b.set(w[0].pageX,w[0].pageY);else{const e=.5*(w[0].pageX+w[1].pageX),t=.5*(w[0].pageY+w[1].pageY);b.set(e,t)}}function _(){if(1===w.length)g.set(w[0].pageX,w[0].pageY);else{const e=.5*(w[0].pageX+w[1].pageX),t=.5*(w[0].pageY+w[1].pageY);g.set(e,t)}}function H(){const e=w[0].pageX-w[1].pageX,t=w[0].pageY-w[1].pageY,n=Math.sqrt(e*e+t*t);v.set(0,n)}function C(e){if(1==w.length)E.set(e.pageX,e.pageY);else{const t=G(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);E.set(n,o)}f.subVectors(E,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;N(2*Math.PI*f.x/t.clientHeight),k(2*Math.PI*f.y/t.clientHeight),b.copy(E)}function K(e){if(1===w.length)y.set(e.pageX,e.pageY);else{const t=G(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);y.set(n,o)}P.subVectors(y,g).multiplyScalar(n.panSpeed),I(P.x,P.y),g.copy(y)}function z(e){const t=G(e),o=e.pageX-t.x,a=e.pageY-t.y,i=Math.sqrt(o*o+a*a);O.set(0,i),T.set(0,Math.pow(O.y/v.y,n.zoomSpeed)),M(T.y),v.copy(O)}function X(e){!1!==n.enabled&&(0===w.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",Z),n.domElement.addEventListener("pointerup",F)),function(e){w.push(e)}(e),"touch"===e.pointerType?function(e){switch(V(e),w.length){case 1:switch(n.touches.ONE){case o.wtR.ROTATE:if(!1===n.enableRotate)return;D(),r=c.TOUCH_ROTATE;break;case o.wtR.PAN:if(!1===n.enablePan)return;_(),r=c.TOUCH_PAN;break;default:r=c.NONE}break;case 2:switch(n.touches.TWO){case o.wtR.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&H(),n.enablePan&&_(),r=c.TOUCH_DOLLY_PAN;break;case o.wtR.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&H(),n.enableRotate&&D(),r=c.TOUCH_DOLLY_ROTATE;break;default:r=c.NONE}break;default:r=c.NONE}r!==c.NONE&&n.dispatchEvent(i)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.kBv.DOLLY:if(!1===n.enableZoom)return;!function(e){v.set(e.clientX,e.clientY)}(e),r=c.DOLLY;break;case o.kBv.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;S(e),r=c.PAN}else{if(!1===n.enableRotate)return;x(e),r=c.ROTATE}break;case o.kBv.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;x(e),r=c.ROTATE}else{if(!1===n.enablePan)return;S(e),r=c.PAN}break;default:r=c.NONE}r!==c.NONE&&n.dispatchEvent(i)}(e))}function Z(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(V(e),r){case c.TOUCH_ROTATE:if(!1===n.enableRotate)return;C(e),n.update();break;case c.TOUCH_PAN:if(!1===n.enablePan)return;K(e),n.update();break;case c.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&z(e),n.enablePan&&K(e)}(e),n.update();break;case c.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&z(e),n.enableRotate&&C(e)}(e),n.update();break;default:r=c.NONE}}(e):function(e){switch(r){case c.ROTATE:if(!1===n.enableRotate)return;!function(e){E.set(e.clientX,e.clientY),f.subVectors(E,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;N(2*Math.PI*f.x/t.clientHeight),k(2*Math.PI*f.y/t.clientHeight),b.copy(E),n.update()}(e);break;case c.DOLLY:if(!1===n.enableZoom)return;!function(e){O.set(e.clientX,e.clientY),T.subVectors(O,v),T.y>0?M(L()):T.y<0&&R(L()),v.copy(O),n.update()}(e);break;case c.PAN:if(!1===n.enablePan)return;!function(e){y.set(e.clientX,e.clientY),P.subVectors(y,g).multiplyScalar(n.panSpeed),I(P.x,P.y),g.copy(y),n.update()}(e)}}(e))}function F(e){!function(e){delete A[e.pointerId];for(let t=0;t<w.length;t++)if(w[t].pointerId==e.pointerId)return void w.splice(t,1)}(e),0===w.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",Z),n.domElement.removeEventListener("pointerup",F)),n.dispatchEvent(s),r=c.NONE}function U(e){!1!==n.enabled&&!1!==n.enableZoom&&r===c.NONE&&(e.preventDefault(),n.dispatchEvent(i),function(e){e.deltaY<0?R(L()):e.deltaY>0&&M(L()),n.update()}(e),n.dispatchEvent(s))}function q(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function B(e){!1!==n.enabled&&e.preventDefault()}function V(e){let t=A[e.pointerId];void 0===t&&(t=new o.I9Y,A[e.pointerId]=t),t.set(e.pageX,e.pageY)}function G(e){const t=e.pointerId===w[0].pointerId?w[1]:w[0];return A[t.pointerId]}n.domElement.addEventListener("contextmenu",B),n.domElement.addEventListener("pointerdown",X),n.domElement.addEventListener("pointercancel",F),n.domElement.addEventListener("wheel",U,{passive:!1}),this.update()}}}}]);