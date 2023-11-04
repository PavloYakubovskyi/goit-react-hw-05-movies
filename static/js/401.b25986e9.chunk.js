"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[401],{6375:function(e,t,n){n.d(t,{Cq:function(){return p},PY:function(){return f},S3:function(){return v},dd:function(){return d},lU:function(){return m},xM:function(){return g}});var r,o,a,i,s,c,u=n(168),l=n(5867),d=l.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),f=l.ZP.ul(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  list-style: none;\n  max-width: 100%;\n"]))),p=l.ZP.li(a||(a=(0,u.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 20px;\n  box-shadow: 0px 0px 4px #242424;\n  overflow: hidden;\n  border-radius: 5px;\n  padding: 5px;\n"]))),m=l.ZP.div(i||(i=(0,u.Z)(["\n  padding: 0 20px 10px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),v=l.ZP.span(s||(s=(0,u.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: capitalize;\n"]))),g=l.ZP.p(c||(c=(0,u.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  text-align: center;\n"])))},7975:function(e,t,n){n.d(t,{Z:function(){return b}});var r,o,a,i,s,c=n(7689),u=n(4169),l=n(168),d=n(1087),f=n(5867),p=f.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 20px;\n  list-style: none;\n  margin: 0;\n"]))),m=f.ZP.li(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 200px;\n  text-align: center;\n"]))),v=(0,f.ZP)(d.rU)(a||(a=(0,l.Z)(["\n  text-decoration: none;\n  color: #242424;\n  transition: color 250ms ease-in-out;\n  &:hover {\n    color: orangered;\n  }\n"]))),g=f.ZP.div(i||(i=(0,l.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n  transition: box-shadow 250ms ease-in-out;\n  &:hover {\n    box-shadow: 0px 0px 15px orangered;\n  }\n"]))),h=f.ZP.p(s||(s=(0,l.Z)(["\n  padding: 10px;\n  margin: 0;\n  background-color: #f8f8f8;\n"]))),y=n(184);function b(e){var t=e.items,n=(0,c.TH)(),r=0;return(0,y.jsx)(u.W,{children:(0,y.jsx)(p,{children:t.map((function(e){var t,o,a,i,s;return(0,y.jsx)(m,{children:(0,y.jsx)(v,{to:"/movies/".concat(e.id),state:{from:n},children:(0,y.jsxs)(g,{children:[(0,y.jsx)("div",{children:(0,y.jsx)("img",{loading:"lazy",src:e.poster_path?"https://image.tmdb.org/t/p/original".concat(e.poster_path):"https://picsum.photos/200/300?random=".concat(r+=1),alt:null!==(t=null!==(o=e.title)&&void 0!==o?o:e.name)&&void 0!==t?t:e.original_title,width:"200",height:"300"})}),(0,y.jsx)(h,{children:null!==(a=null!==(i=null!==(s=e.title)&&void 0!==s?s:e.name)&&void 0!==i?i:e.original_title)&&void 0!==a?a:"Title"})]})})},e.id)}))})})}},2401:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var r=n(5861),o=n(9439),a=n(7757),i=n.n(a),s=n(2791),c=n(1087);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=n(3433);function m(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=m(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var v=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=m(e))&&(r&&(r+=" "),r+=t);return r},g=["theme","type"],h=["delay","staleId"],y=function(e){return"number"==typeof e&&!isNaN(e)},b=function(e){return"string"==typeof e},x=function(e){return"function"==typeof e},E=function(e){return b(e)||x(e)?e:null},T=function(e){return(0,s.isValidElement)(e)||b(e)||x(e)||y(e)};function w(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,a=e.position,c=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,m=o?"".concat(t,"--").concat(a):t,v=o?"".concat(n,"--").concat(a):n,g=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var e,t=d.current,n=m.split(" "),r=function e(r){var o;r.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,p.Z)(n)))};(e=t.classList).add.apply(e,(0,p.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,s.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};f||(c?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[f]),s.createElement(s.Fragment,null,r)}}function O(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var C={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,p.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},_=function(e){var t=e.theme,n=e.type,r=f(e,g);return s.createElement("svg",d({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},Z={info:function(e){return s.createElement(_,d({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(_,d({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(_,d({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(_,d({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function I(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,s.useState)([]),a=(0,o.Z)(r,2),i=a[0],c=a[1],u=(0,s.useRef)(null),l=(0,s.useRef)(new Map).current,m=function(e){return-1!==i.indexOf(e)},v=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return l.get(e)}}).current;function g(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function w(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function _(){var e=v.queue.shift();P(e.toastContent,e.toastProps,e.staleId)}function I(e,t){var r=t.delay,a=t.staleId,i=f(t,h);if(T(e)&&!function(e){return!u.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||l.has(e.toastId)&&null==e.updateId}(i)){var c=i.toastId,p=i.updateId,m=i.data,g=v.props,I=function(){return w(c)},k=null==p;k&&v.count++;var L,j,R=d(d(d({},g),{},{style:g.toastStyle,key:v.toastKey++},Object.fromEntries(Object.entries(i).filter((function(e){var t=(0,o.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:c,updateId:p,data:m,closeToast:I,isIn:!1,className:E(i.className||g.toastClassName),bodyClassName:E(i.bodyClassName||g.bodyClassName),progressClassName:E(i.progressClassName||g.progressClassName),autoClose:!i.isLoading&&(L=i.autoClose,j=g.autoClose,!1===L||y(L)&&L>0?L:j),deleteToast:function(){var e=O(l.get(c),"removed");l.delete(c),C.emit(4,e);var t=v.queue.length;if(v.count=null==c?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var r=null==c?v.props.limit:1;if(1===t||1===r)v.displayedToast++,_();else{var o=r>t?t:r;v.displayedToast=o;for(var a=0;a<o;a++)_()}}else n()}});R.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(x(o)?a=o(i):(0,s.isValidElement)(o)?a=(0,s.cloneElement)(o,i):b(o)||y(o)?a=o:r?a=Z.spinner():function(e){return e in Z}(n)&&(a=Z[n](i))),a}(R),x(i.onOpen)&&(R.onOpen=i.onOpen),x(i.onClose)&&(R.onClose=i.onClose),R.closeButton=g.closeButton,!1===i.closeButton||T(i.closeButton)?R.closeButton=i.closeButton:!0===i.closeButton&&(R.closeButton=!T(g.closeButton)||g.closeButton);var N=e;(0,s.isValidElement)(e)&&!b(e.type)?N=(0,s.cloneElement)(e,{closeToast:I,toastProps:R,data:m}):x(e)&&(N=e({closeToast:I,toastProps:R,data:m})),g.limit&&g.limit>0&&v.count>g.limit&&k?v.queue.push({toastContent:N,toastProps:R,staleId:a}):y(r)?setTimeout((function(){P(N,R,a)}),r):P(N,R,a)}}function P(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),c((function(e){return[].concat((0,p.Z)(e),[r]).filter((function(e){return e!==n}))})),C.emit(4,O(o,null==o.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return v.containerId=e.containerId,C.cancelEmit(3).on(0,I).on(1,(function(e){return u.current&&w(e)})).on(5,g).emit(2,v),function(){l.clear(),C.emit(3,v)}}),[]),(0,s.useEffect)((function(){v.props=e,v.isToastActive=m,v.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:m}}function P(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function L(e){var t=(0,s.useState)(!1),n=(0,o.Z)(t,2),r=n[0],a=n[1],i=(0,s.useState)(!1),c=(0,o.Z)(i,2),u=c[0],l=c[1],d=(0,s.useRef)(null),f=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,h=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",C),document.addEventListener("touchmove",O),document.addEventListener("touchend",C);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=P(t.nativeEvent),f.y=k(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(f.boundingRect){var n=f.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=r&&f.y<=o?w():T()}}function T(){a(!0)}function w(){a(!1)}function O(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,r&&w(),f.x=P(t),f.y=k(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function C(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",C);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return d.current&&d.current.addEventListener("d",T,{once:!0}),x(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;x(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||w(),window.addEventListener("focus",T),window.addEventListener("blur",w)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",w))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&v&&(_.onMouseEnter=w,_.onMouseLeave=T),y&&(_.onClick=function(e){h&&h(e),f.canCloseOnClick&&g()}),{playToast:T,pauseToast:w,isRunning:r,preventExitTransition:u,toastRef:d,eventHandlers:_}}function j(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function R(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,i=e.hide,c=e.className,l=e.style,f=e.controlledProgress,p=e.progress,m=e.rtl,g=e.isIn,h=e.theme,y=i||f&&0===p,b=d(d({},l),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});f&&(b.transform="scaleX(".concat(p,")"));var E=v("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":m}),T=x(c)?c({rtl:m,type:a,defaultClassName:E}):v(E,c);return s.createElement("div",u({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:T,style:b},f&&p>=1?"onTransitionEnd":"onAnimationEnd",f&&p<1?null:function(){g&&r()}))}var N=function(e){var t=L(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,f=e.type,p=e.hideProgressBar,m=e.closeToast,g=e.transition,h=e.position,y=e.className,b=e.style,E=e.bodyClassName,T=e.bodyStyle,w=e.progressClassName,O=e.progressStyle,C=e.updateId,_=e.role,Z=e.progress,I=e.rtl,P=e.toastId,k=e.deleteToast,N=e.isIn,M=e.isLoading,S=e.iconOut,D=e.closeOnClick,z=e.theme,B=v("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":I},{"Toastify__toast--close-on-click":D}),A=x(y)?y({rtl:I,position:h,type:f,defaultClassName:B}):v(B,y),F=!!Z||!u,H={closeToast:m,type:f,theme:z},q=null;return!1===i||(q=x(i)?i(H):(0,s.isValidElement)(i)?(0,s.cloneElement)(i,H):j(H)),s.createElement(g,{isIn:N,done:k,position:h,preventExitTransition:r,nodeRef:o},s.createElement("div",d(d({id:P,onClick:l,className:A},a),{},{style:b,ref:o}),s.createElement("div",d(d({},N&&{role:_}),{},{className:x(E)?E({type:f}):v("Toastify__toast-body",E),style:T}),null!=S&&s.createElement("div",{className:v("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},S),s.createElement("div",null,c)),q,s.createElement(R,d(d({},C&&!F?{key:"pb-".concat(C)}:{}),{},{rtl:I,theme:z,delay:u,isRunning:n,isIn:N,closeToast:m,hide:p,type:f,style:O,className:w,controlledProgress:F,progress:Z||0}))))},M=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},S=w(M("bounce",!0)),D=(w(M("slide",!0)),w(M("zoom")),w(M("flip")),(0,s.forwardRef)((function(e,t){var n=I(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,c=e.style,u=e.rtl,l=e.containerId;function f(e){var t=v("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return x(i)?i({position:e,rtl:u,defaultClassName:t}):v(t,E(i))}return(0,s.useEffect)((function(){t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:l},r((function(e,t){var n=t.length?d({},c):d(d({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:f(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return s.createElement(N,d(d({},o),{},{isIn:a(o.toastId),style:d(d({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:"top-right",transition:S,autoClose:5e3,closeButton:j,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var z,B=new Map,A=[],F=1;function H(){return""+F++}function q(e){return e&&(b(e.toastId)||y(e.toastId))?e.toastId:H()}function U(e,t){return B.size>0?C.emit(0,e,t):A.push({content:e,options:t}),t.toastId}function Q(e,t){return d(d({},t),{},{type:t&&t.type||e,toastId:q(t)})}function V(e){return function(t,n){return U(t,Q(e,n))}}function W(e,t){return U(e,Q("default",t))}W.loading=function(e,t){return U(e,Q("default",d({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},W.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=b(o)?W.loading(o,n):W.loading(o.render,d(d({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=d(d(d({type:e},s),n),{},{data:o}),i=b(t)?{render:t}:t;return r?W.update(r,d(d({},a),i)):W(i.render,d(d({},a),i)),o}W.dismiss(r)},u=x(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},W.success=V("success"),W.info=V("info"),W.error=V("error"),W.warning=V("warning"),W.warn=W.warning,W.dark=function(e,t){return U(e,Q("default",d({theme:"dark"},t)))},W.dismiss=function(e){B.size>0?C.emit(1,e):A=A.filter((function(t){return null!=e&&t.options.toastId!==e}))},W.clearWaitingQueue=function(e){return void 0===e&&(e={}),C.emit(5,e)},W.isActive=function(e){var t=!1;return B.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},W.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=B.get(n||z);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=d(d(d({delay:100},r),t),{},{toastId:t.toastId||e,updateId:H()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,U(i,a)}}),0)},W.done=function(e){W.update(e,{progress:1})},W.onChange=function(e){return C.on(4,e),function(){C.off(4,e)}},W.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},W.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},C.on(2,(function(e){z=e.containerId||e,B.set(z,e),A.forEach((function(e){C.emit(0,e.content,e.options)})),A=[]})).on(3,(function(e){B.delete(e.containerId||e),0===B.size&&C.off(0).off(1).off(5)}));var Y,G,X,K,J=n(168),$=n(5867),ee=$.ZP.div(Y||(Y=(0,J.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 30px 0;\n"]))),te=$.ZP.form(G||(G=(0,J.Z)(["\n  position: relative;\n"]))),ne=$.ZP.input(X||(X=(0,J.Z)(["\n  position: relative;\n  width: 250px;\n  border: 1px solid #909090;\n  border-radius: 20px;\n  outline: none;\n  font-size: 16px;\n  color: #242424;\n  padding: 10px 30px;\n  padding-right: 80px;\n  transition: box-shadow 250ms ease-in-out, border-color 250ms ease-in-out;\n  &:focus-within {\n    box-shadow: 0px 0px 5px orangered;\n    border-color: orangered;\n  }\n"]))),re=$.ZP.button(K||(K=(0,J.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(-50%, 60%);\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  background-color: transparent;\n  font-size: 16px;\n  color: #909090;\n  transition: color 250ms ease-in-out;\n  &:hover {\n    color: orangered;\n  }\n"]))),oe=n(184);function ae(e){var t=e.title,n=e.onChange,r=e.onSubmit;return(0,oe.jsx)(ee,{children:(0,oe.jsxs)(te,{onSubmit:r,children:[(0,oe.jsx)(ne,{type:"text",name:"title",autoComplete:"off",value:t,onChange:n,autoFocus:!0}),(0,oe.jsx)(re,{type:"submit",children:"Search"})]})})}var ie=n(7975),se=n(4169),ce=n(6375),ue=n(4390);function le(){var e,t=(0,c.lr)(),n=(0,o.Z)(t,2),a=n[0],u=n[1],l=null!==(e=a.get("title"))&&void 0!==e?e:"",d=(0,s.useState)((function(){return null!==l&&void 0!==l?l:""})),f=(0,o.Z)(d,2),p=f[0],m=f[1],v=(0,s.useState)([]),g=(0,o.Z)(v,2),h=g[0],y=g[1];(0,s.useEffect)((function(){if(l){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.Mu(l);case 3:if(0!==(t=e.sent).total_results){e.next=7;break}return W.warn("Sorry, we didn't find anything",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),e.abrupt("return");case 7:return y(t.results),e.abrupt("return");case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}}),[l]);return(0,oe.jsx)("main",{children:(0,oe.jsxs)(se.W,{children:[(0,oe.jsx)(ae,{title:p,onChange:function(e){m(e.target.value)},onSubmit:function(e){(e.preventDefault(),p.trim())?u(""!==p?{title:p}:{}):W.error("You have not entered anything in the search",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}}),h.length>0?(0,oe.jsx)(ie.Z,{items:h}):(0,oe.jsx)(ce.xM,{children:"Please, enter your request."}),(0,oe.jsx)(D,{})]})})}},4390:function(e,t,n){n.d(t,{Mu:function(){return l},fT:function(){return d},hR:function(){return c},rc:function(){return u},yJ:function(){return f}});var r=n(5861),o=n(7757),a=n.n(o),i=n(1243),s="e4ff78198eeecfb076bc58e389bbf0b9";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/all/week?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=401.b25986e9.chunk.js.map