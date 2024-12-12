"use strict";(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[1550],{41550:(t,e,s)=>{var n,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},o=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),a=s(96540),r=(n=a)&&n.__esModule?n:{default:n},l=s(40961);var u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var s=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));s.state={style:{}};return s.width=null,s.height=null,s.left=null,s.top=null,s.transitionTimeout=null,s.updateCall=null,s.element=null,s.settings=Object.assign({},{reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0},s.props.options),s.reverse=s.settings.reverse?-1:1,s.onMouseEnter=s.onMouseEnter.bind(s,s.props.onMouseEnter),s.onMouseMove=s.onMouseMove.bind(s,s.props.onMouseMove),s.onMouseLeave=s.onMouseLeave.bind(s,s.props.onMouseLeave),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){this.element=(0,l.findDOMNode)(this)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}},{key:"onMouseEnter",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=arguments[1];return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:i({},this.state.style,{willChange:"transform"})})),this.setTransition(),t(e)}},{key:"reset",value:function(){var t=this;window.requestAnimationFrame((function(){t.setState(Object.assign({},t.state,{style:i({},t.state.style,{transform:"perspective("+t.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"})}))}))}},{key:"onMouseMove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=arguments[1];return e.persist(),null!==this.updateCall&&window.cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.update.bind(this,e)),t(e)}},{key:"setTransition",value:function(){var t=this;clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:i({},this.state.style,{transition:this.settings.speed+"ms "+this.settings.easing})})),this.transitionTimeout=setTimeout((function(){t.setState(Object.assign({},t.state,{style:i({},t.state.style,{transition:""})}))}),this.settings.speed)}},{key:"onMouseLeave",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=arguments[1];return this.setTransition(),this.settings.reset&&this.reset(),t(e)}},{key:"getValues",value:function(t){var e=(t.nativeEvent.clientX-this.left)/this.width,s=(t.nativeEvent.clientY-this.top)/this.height,n=Math.min(Math.max(e,0),1),i=Math.min(Math.max(s,0),1);return{tiltX:(this.reverse*(this.settings.max/2-n*this.settings.max)).toFixed(2),tiltY:(this.reverse*(i*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*n,percentageY:100*i}}},{key:"updateElementPosition",value:function(){var t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}},{key:"update",value:function(t){var e=this.getValues(t);this.setState(Object.assign({},this.state,{style:i({},this.state.style,{transform:"perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:e.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:e.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")"})})),this.updateCall=null}},{key:"render",value:function(){var t=Object.assign({},this.props.style,this.state.style);return r.default.createElement("div",{style:t,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave},this.props.children)}}]),e}(a.Component);e.A=u}}]);