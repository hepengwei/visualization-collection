"use strict";(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[9527],{49527:(e,t,n)=>{n.d(t,{HP:()=>d,Lf:()=>r,Q1:()=>c,Rz:()=>g,_v:()=>o,qF:()=>u,sv:()=>l,ye:()=>a});const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const n=t<0?0:t,a=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,a)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][a]},o=(e,t)=>{if(!e)return void t(null);const{type:n}=e,a=n.split("/");if("image"!==a[0])return void t(null);let o=a[1].toUpperCase();var l=new FileReader;l.onload=function(n){const a=n.target.result,l=i(a);l&&(o=l);const c=new Blob([a]);r(c,(function(n){if(n){const a=new Image;a.onload=function(){const i=a.width,r=a.height,l=s(n,i,r);if(l){const a={name:e.name,fileType:o,size:e.size,width:i,height:r,imgUrl:n,imageData:l,blob:c};t(a)}else t(null)},a.onerror=function(){t(null)},a.src=n}else t(null)}))},l.readAsArrayBuffer(e)},i=e=>{let t="";if(e){const n=new DataView(e).getUint32(0,!1);switch(Number(n).toString(16).toUpperCase()){case"FFD8FFDB":t="JPG";break;case"FFD8FFE0":case"FFD8FFE1":case"FFD8FFE2":case"FFD8FFE3":t="JPEG";break;case"89504E47":t="PNG";break;case"47494638":t="GIF";break;case"49492A00":t="TIF";break;case"52494646":t="WEBP";break;case"25504446":case"AC9EBD8F":t="PDF";break;case"3C3F786D":t="XML";break;case"68746D6C":t="HTML";break;case"4D546864":t="MID";break;case"38425053":t="PSD";break;case"504B0304":t="ZIP";break;case"52617221":t="RAR";break;case"57415645":t="WAV";break;case"41564920":t="AVI";break;case"6d6f6f76":t="MOV"}}return t},r=(e,t)=>{if(!e)return void t(null);const n=new FileReader;n.readAsDataURL(e),n.onload=function(e){e.target?t(e.target.result):t(null)}},l=e=>{if(!e)return null;const{width:t,height:n}=e,a=document.createElement("canvas"),o=a.getContext("2d");a.width=t,a.height=n,o.putImageData(e,0,0,0,0,t,n);return a.toDataURL("image/png")},c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"png",n=arguments.length>2?arguments[2]:void 0;if(!e)return void n(null);const{width:a,height:o}=e,i=document.createElement("canvas"),r=i.getContext("2d");i.width=a,i.height=o,r.putImageData(e,0,0,0,0,a,o);const l="image/".concat(t?t.toLowerCase():"png");i.toBlob((e=>{n(e)}),l,1)},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e&&t&&n){const a=new Image;a.src=e;const o=document.createElement("canvas"),i=o.getContext("2d");o.width=t,o.height=n,i.drawImage(a,0,0,t,n);return i.getImageData(0,0,t,n)}return null},u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e&&t&&n){const a=document.createElement("canvas"),o=a.getContext("2d");a.width=t,a.height=n,o.drawImage(e,0,0,t,n);return o.getImageData(0,0,t,n)}return null},d=(e,t)=>{if(!e)return;var n=document.createElement("a");n.style.visibility="hidden",document.body.appendChild(n),n.download=t;const a=window.URL.createObjectURL(e);n.href=a,n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(a)},g=(e,t)=>{if(!e)return void t(null);const{type:n}=e;if("pdf"===n.split("/")[1]){var a=new FileReader;a.onload=function(n){const a=n.target.result;if("PDF"!==i(a))return void t(null);const o=new Blob([a]);r(o,(function(n){if(n){const a={name:e.name,size:e.size,pdfUrl:n,blob:o};t(a)}else t(null)}))},a.readAsArrayBuffer(e)}else t(null)}}}]);