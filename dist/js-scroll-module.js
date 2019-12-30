/*!
 * JS SCROLL MODULE (JavaScript Library)
 *   @yama-dev/js-scroll-module
 * Version 0.5.0
 * Repository https://github.com/yama-dev/js-scroll-module
 * Copyright yama-dev
 * Licensed MIT
 */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t){try{return t instanceof HTMLElement}catch(t){return!1}}function r(t){if(!t)return!1;var e;if(!Array.isArray(t)&&!t.length||function(t){try{return"string"==typeof t}catch(t){return!1}}(t))e=o(t)?Array(t):Array.prototype.slice.call(document.querySelectorAll(t));else{if(!o(t[0]))return!1;e=Array.prototype.slice.call(t)}return 0===e.length&&(e=null),e}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.r(e),n.d(e,"SCROLL_MODULE",function(){return u});var u=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e)return!1;var o={duration:600,easing:t.easeOutQuart,trueFunction:function(){if(window.innerWidth<=765)return!0}};this.options=a(o,n),this.version="0.4.0",this.instance=null,this.state={num_offset_frame_top:0,num_offset_header:0,numTopDefault:null,numTopTarget:null,numCountTop:0,numCountDuration:0,elem_selector:e,elem_array:r(e)},this._setModule()}var e,n,o;return e=t,o=[{key:"easeOutQuart",value:function(t,e,n,o){return-n*((t=t/o-1)*t*t*t-1)+e}},{key:"easeOutCubic",value:function(t,e,n,o){return t/=o,n*(--t*t*t+1)+e}}],(n=[{key:"_setModule",value:function(){var t=this;"complete"==document.readyState||"interactive"==document.readyState?this._attachEvent():document.addEventListener("DOMContentLoaded",function(){t._attachEvent()})}},{key:"_attachEvent",value:function(){var t=this;!function(t,e,n){if(t===window)window.addEventListener(e,n);else{var o=r(t);if(!o)return!1;o.map(function(t){t.addEventListener(e,n)})}}(this.state.elem_array,"click",function(e){var n=e.currentTarget.getAttribute(t.state.elem_selector.replace(/(\[|\]|\^|=|"|#)/g,"")),o=e.currentTarget.getAttribute("data-scroll-header"),r=e.currentTarget.getAttribute("data-scroll-offset"),a=e.currentTarget.getAttribute("data-scroll-true-offset");t._animeFunctionPrep(n,null,o,r,a)})}},{key:"_animeFunctionPrep",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(this.instance&&window.cancelAnimationFrame(this.instance),this.state.numCountTop=0,this.state.numCountDuration=0,this.state.num_offset_frame_top=0,e||(e=this.options.duration),this.state.num_offset_frame_top=t?"number"!=typeof t?r(t)[0].getBoundingClientRect().top:-1*window.pageYOffset+t:-1*window.pageYOffset,n&&(this.state.num_offset_header=r(n)[0].clientHeight,this.state.num_offset_frame_top=this.state.num_offset_frame_top-this.state.num_offset_header),o&&(this.state.num_offset_frame_top=this.state.num_offset_frame_top-o),a&&this.options.trueFunction()&&(this.state.num_offset_frame_top=this.state.num_offset_frame_top-Number(a)),this.state.numTopDefault=window.pageYOffset,this.state.numTopTarget=this.state.num_offset_frame_top+window.pageYOffset,0===this.state.num_offset_frame_top)return!1;this._animeFunction(e)}},{key:"_animeFunction",value:function(t){var e=this,n=(new Date).getTime();!function o(){e.instance=window.requestAnimationFrame(o);var r=(new Date).getTime(),a=n-r;e.state.numCountDuration=Math.abs(a),e.state.numCountTop=e.options.easing(e.state.numCountDuration,e.state.numTopDefault,e.state.numTopTarget-e.state.numTopDefault,t),window.scrollTo(0,e.state.numCountTop),e.state.num_offset_frame_top>0?e.state.numCountTop>=e.state.numTopTarget&&window.cancelAnimationFrame(e.instance):e.state.numCountTop<=e.state.numTopTarget&&window.cancelAnimationFrame(e.instance),t<=e.state.numCountDuration&&window.cancelAnimationFrame(e.instance)}()}},{key:"anime",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this._animeFunctionPrep(t,e,n,o,r)}}])&&i(e.prototype,n),o&&i(e,o),t}()}])});