"use strict";(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[9169],{9169:(e,r,n)=>{n.d(r,{A:()=>i});var t=n(96540),c=n(39437);const i=(e,r,n,i)=>{const u=(0,t.useRef)(null),s=(0,t.useRef)(null),o=(0,t.useRef)(null),a=(0,t.useRef)(0),l=()=>{u.current&&s.current&&o.current&&(i&&i(u.current,s.current,o.current),o.current.render(u.current,s.current),a.current=window.requestAnimationFrame(l))},d=()=>{if(e.current&&u.current&&s.current&&o.current){const{clientWidth:r,clientHeight:t}=e.current;s.current.aspect=r/t,s.current.updateProjectionMatrix(),o.current.setSize(r,t),o.current.setPixelRatio(window.devicePixelRatio),n&&n(u.current,s.current,o.current)}};return(0,t.useEffect)((()=>((()=>{if(e.current){const{clientWidth:n,clientHeight:t}=e.current,i=new c.Z58;u.current=i;const a=new c.ubm(75,n/t,.1,1e3);a.position.set(0,0,10),s.current=a;const d=new c.JeP({antialias:!0});o.current=d,d.setSize(n,t),d.setPixelRatio(window.devicePixelRatio),d.shadowMap.enabled=!0,e.current.append(d.domElement),l(),r&&r(i,a,d)}})(),window.addEventListener("resize",d),()=>{a.current&&window.cancelAnimationFrame(a.current),window.removeEventListener("resize",d)})),[]),{scene:u.current,camera:s.current,renderer:o.current,resize:d}}}}]);