/*!
 * JS SCROLL MODULE (JavaScript Library)
 *   @yama-dev/js-scroll-module
 * Version 0.2.0
 * Repository https://github.com/yama-dev/js-scroll-module
 * Copyright yama-dev
 * Licensed MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SCROLL_MODULE=e():t.SCROLL_MODULE=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return r(t,[{key:"isDom",value:function(t){try{return t instanceof HTMLElement}catch(t){return!1}}},{key:"isStr",value:function(t){try{return"string"==typeof t}catch(t){return!1}}},{key:"selectDom",value:function(t){if(!t)return!1;var e=void 0;if(!Array.isArray(t)&&!t.length||this.isStr(t))e=this.isDom(t)?Array(t):Array.prototype.slice.call(document.querySelectorAll(t));else{if(!this.isDom(t[0]))return!1;e=Array.prototype.slice.call(t)}return 0===e.length&&(e=null),e}},{key:"hasClass",value:function(t,e){return this.isDom(t)?t.classList.contains(e):document.querySelector(t).classList.contains(e)}},{key:"addClass",value:function(t,e){var n=this.selectDom(t);if(!n)return!1;n.map(function(t){t.classList.add(e)})}},{key:"removeClass",value:function(t,e){var n=this.selectDom(t);if(!n)return!1;n.map(function(t){t.classList.remove(e)})}},{key:"toggleClass",value:function(t,e){var n=this.selectDom(t);if(!n)return!1;n.map(function(t){t.classList.toggle(e)})}},{key:"setHtml",value:function(t,e){var n=this.selectDom(t);if(!n)return!1;n.map(function(t){t.innerHTML=e})}},{key:"appendHtml",value:function(t,e){var n=this.selectDom(t);if(!n)return!1;n.map(function(t){t.innerHTML+=e})}},{key:"addEvent",value:function(t,e,n){if(t===window)window.addEventListener(e,n);else{var r=this.selectDom(t);if(!r)return!1;r.map(function(t){t.addEventListener(e,n)})}}},{key:"removeEvent",value:function(t,e,n){if(t===window)window.removeEventListener(e,n);else{var r=this.selectDom(t);if(!r)return!1;r.map(function(t){t.removeEventListener(e,n)})}}},{key:"setStyle",value:function(t,e){var n=this.selectDom(t);if(!n)return!1;n.map(function(t){var n="";Object.keys(e).forEach(function(t){n+=t.replace(/([A-Z])/g,"-$1").toLowerCase()+":"+e[t]+";"}),t.setAttribute("style",n)})}}]),t}();
/*!
 * JS DOM (JavaScript Library)
 *   js-dom.js
 * Version 0.0.6
 * Repository https://github.com/yama-dev/js-dom
 * Copyright yama-dev
 * Licensed under the MIT license.
 */e.default=o}]).default},function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return a});var r=n(0);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=new(n.n(r).a),a=function(){function t(e,n){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e)return!1;this.options=o({numDuration:800},n),this.version="0.2.0",this.instance=null,this.state={num_offset_frame_top:0,num_offset_header:0,numTopDefault:null,numTopTarget:null,numCountTop:0,numCountDuration:0,elem_selector:e,elem_array:i.selectDom(e)},this.SetModule()}var e,n,r;return e=t,r=[{key:"easingEaseOutCubic",value:function(t,e,n,r){return t/=r,n*(--t*t*t+1)+e}}],(n=[{key:"SetModule",value:function(){var t=this;"complete"==document.readyState||"interactive"==document.readyState?this.attachEvent():document.addEventListener("DOMContentLoaded",function(){t.attachEvent()})}},{key:"attachEvent",value:function(){var t=this;i.addEvent(this.state.elem_array,"click",function(e){var n=e.currentTarget.getAttribute(t.state.elem_selector.replace(/(\[|\])/g,"")),r=e.currentTarget.getAttribute("data-scroll-header"),o=e.currentTarget.getAttribute("data-scroll-offset");t.AnimeFunctionPrep(n,r,o)})}},{key:"anime",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.AnimeFunctionPrep(t,e,n)}},{key:"AnimeFunctionPrep",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(this.state.numCountTop=0,this.state.numCountDuration=0,this.state.num_offset_frame_top=0,this.state.num_offset_frame_top=t?"number"!=typeof t?i.selectDom(t)[0].getBoundingClientRect().top:-1*window.pageYOffset+t:-1*window.pageYOffset,e&&(this.state.num_offset_header=i.selectDom(e)[0].clientHeight,this.state.num_offset_frame_top=this.state.num_offset_frame_top-this.state.num_offset_header),n&&(this.state.num_offset_frame_top=this.state.num_offset_frame_top-n),this.state.numTopDefault=window.pageYOffset,this.state.numTopTarget=this.state.num_offset_frame_top+window.pageYOffset,0===this.state.num_offset_frame_top)return!1;this.AnimeFunction()}},{key:"AnimeFunction",value:function(){var e=this,n=this,r=(new Date).getTime();!function o(){n.instance=window.requestAnimationFrame(o);var u=(new Date).getTime(),i=r-u;e.state.numCountDuration=e.state.numCountDuration+Math.abs(i),e.state.numCountTop=t.easingEaseOutCubic(e.state.numCountDuration,e.state.numTopDefault,e.state.numTopTarget-e.state.numTopDefault,e.options.numDuration),window.scrollTo(0,e.state.numCountTop),n.state.num_offset_frame_top>0?e.state.numCountTop>=e.state.numTopTarget&&window.cancelAnimationFrame(n.instance):e.state.numCountTop<=e.state.numTopTarget&&window.cancelAnimationFrame(n.instance),r=(new Date).getTime()}()}}])&&u(e.prototype,n),r&&u(e,r),t}()}]).default});