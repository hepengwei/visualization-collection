(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[3872],{49856:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var a=n(96540),r=n(89740),l=n(68777),o=n(27444),s=n(6442),c=n(49706),i=(n(86748),n(9033),n(49527));const u="NotBlockPeopleBarrage_container__SwTln",p="NotBlockPeopleBarrage_content__NbVjJ",d="NotBlockPeopleBarrage_barrageBox__wNLFF",y="NotBlockPeopleBarrage_bottomBox__C90UC";var m=n(74848),g=function(e){return e[e.ready=0]="ready",e[e.playing=1]="playing",e[e.pause=2]="pause",e}(g||{});const f=324,h=576,x=()=>{const e=(0,s.A)(),t=(0,a.useRef)(null),n=(0,a.useRef)(null),[x,v]=(0,a.useState)(""),[w,_]=(0,a.useState)(g.ready),k=(0,a.useRef)(null),A=(0,a.useRef)(null),b=async()=>{if(t.current&&n.current){const e=(0,i.qF)(t.current,f,h);if(e){const t={flipHorizontal:!1,multiSegmentaion:!1,segmentBodyParts:!1,segmentationThreshold:1},a=await k.current.segmentPeople(e,t),r={r:0,g:0,b:0,a:0},l={r:0,g:0,b:0,a:255},o=await c.JM(a,r,l,false,.3),s=(0,i.sv)(o);n.current.style["-webkit-mask-image"]="url(".concat(s,")"),n.current.style["-webkit-mask-size"]="".concat(f,"px ").concat(h,"px");const{children:u}=n.current;u&&u.length>0&&Array.prototype.forEach.call(u,(e=>{const{left:t}=e.style;if(t<-324){var a;null===(a=n.current)||void 0===a||a.removeChild(e)}else{const{left:t}=e.style;e.style.left="".concat(Number(t.substring(0,t.length-2))-2,"px")}})),A.current=window.requestAnimationFrame(b)}}},B=()=>{if(x){if(n.current){const e=document.createElement("span");e.innerText=x,e.style.fontSize="".concat(20,"px"),e.style.fontWeight="500",e.style.color="#fff",e.style.whiteSpace="nowrap",e.style.position="absolute";const t=24*Math.floor(10*Math.random())+20;e.style.top="".concat(t,"px"),e.style.left="".concat(f,"px"),n.current.appendChild(e)}else r.Ay.warning(e.formatMessage({id:"common.tryingToLoad"}));v("")}};return(0,a.useEffect)((()=>((async()=>{if(t.current){t.current.oncanplay=()=>{var e;t.current&&(null===(e=t.current)||void 0===e?void 0:e.readyState)===t.current.HAVE_ENOUGH_DATA&&k.current&&(_(g.playing),t.current.play(),b())};const e=c.JZ.MediaPipeSelfieSegmentation,n={runtime:"mediapipe",modelType:"landscape",solutionPath:"https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation"},a=await c.TT(e,n);k.current=a,w===g.ready&&(_(g.playing),t.current.play(),b())}})(),()=>{A.current&&cancelAnimationFrame(A.current)})),[]),(0,m.jsxs)("div",{className:u,children:[(0,m.jsxs)("div",{className:p,style:{width:"".concat(f,"px"),height:"".concat(h,"px")},children:[(0,m.jsx)("video",{style:{width:"".concat(f,"px"),height:"".concat(h,"px")},muted:!1,preload:"true",loop:!0,"x5-video-player-fullscreen":"true","x5-playsinline":"true",playsInline:!0,"webkit-playsinline":"true",crossOrigin:"anonymous",ref:t,children:(0,m.jsx)("source",{src:"public/dance.mp4"})}),(0,m.jsx)("div",{className:d,ref:n}),w!==g.ready&&(0,m.jsx)(l.Ay,{type:"primary",ghost:!0,onClick:()=>{t.current&&(w===g.playing?(_(g.pause),t.current.pause()):(_(g.playing),t.current.play()))},children:w===g.playing?e.formatMessage({id:"common.pause"}):e.formatMessage({id:"common.play"})})]}),(0,m.jsxs)("div",{className:y,children:[(0,m.jsx)(o.A,{placeholder:e.formatMessage({id:"page.AIApplication.sendBarrage"}),value:x,maxLength:20,onChange:e=>v(e.target.value||""),onKeyDown:e=>{"Enter"===(null==e?void 0:e.key)&&B()}}),(0,m.jsx)(l.Ay,{type:"primary",onClick:B,children:e.formatMessage({id:"page.AIApplication.send"})})]})]})}},85817:()=>{},18590:()=>{},41234:()=>{}}]);