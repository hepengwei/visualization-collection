"use strict";(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[5873],{11590:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var i=n(6442);const a="ModuleTitle_container__7ZCMv";var l=n(74848);const o=e=>{const t=(0,i.A)(),{intlTitle:n,style:o={}}=e;return(0,l.jsx)("div",{className:a,style:o,children:t.formatMessage({id:n})})}},45873:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var i=n(96540),a=n(6442),l=n(11590),o=n(74848);const r=400,s=200,c=()=>{const e=(0,a.A)(),t=(0,i.useRef)(null),n=e=>{e.clearRect(0,0,r,r);const t=new Date,n=t.getHours(),i=t.getMinutes(),a=t.getSeconds();(e=>{e.save(),e.translate(s,s),e.lineWidth=20,e.beginPath(),e.arc(0,0,s-e.lineWidth/2,0,2*Math.PI),e.stroke(),e.beginPath(),e.arc(0,0,s-e.lineWidth,0,2*Math.PI),e.fillStyle="#ffffff",e.fill(),e.font="36px Arial",e.textAlign="center",e.textBaseline="middle",[3,4,5,6,7,8,9,10,11,12,1,2].forEach(((t,n)=>{const i=2*Math.PI/12*n,a=140*Math.cos(i),l=140*Math.sin(i);e.fillStyle="#000000",e.fillText(t.toString(),a,l)}));for(let t=0;t<60;t++){const n=2*Math.PI/60*t,i=164*Math.cos(n),a=164*Math.sin(n);e.beginPath(),e.fillStyle=t%5==0?"#000":"#ccc",e.arc(i,a,4,0,2*Math.PI),e.fill()}})(e),((e,t,n)=>{e.save(),e.beginPath();const i=2*Math.PI/12*t;var a=2*Math.PI/12/60*n;e.rotate(i+a),e.lineWidth=12,e.lineCap="round",e.moveTo(0,20),e.lineTo(0,-100),e.stroke(),e.restore()})(e,n,i),((e,t)=>{e.save();const n=2*Math.PI/60*t;e.rotate(n),e.lineWidth=6,e.lineCap="round",e.beginPath(),e.moveTo(0,20),e.lineTo(0,-140),e.stroke(),e.restore()})(e,i),((e,t)=>{e.save();var n=2*Math.PI/60*t;e.rotate(n),e.fillStyle="#c14543",e.beginPath(),e.moveTo(-4,40),e.lineTo(4,40),e.lineTo(1,-164),e.lineTo(-1,-164),e.fill(),e.restore()})(e,a),(e=>{e.fillStyle="#fff",e.beginPath(),e.arc(0,0,6,0,2*Math.PI),e.fill()})(e),e.restore()};return(0,i.useEffect)((()=>{let e=0;if(t.current){const i=t.current;i.width=r,i.height=400;const a=i.getContext("2d");n(a),e=window.setInterval((function(){n(a)}),1e3)}return()=>{e&&clearInterval(e)}}),[]),(0,o.jsxs)("div",{style:{boxSizing:"border-box",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"linear-gradient(135deg, #224141, #162a2a)",position:"relative"},children:[(0,o.jsx)(l.A,{intlTitle:"page.canvasDynamicEffect.dynamicClock"}),(0,o.jsx)("canvas",{ref:t,children:e.formatMessage({id:"common.browserTooLow"})})]})}}}]);