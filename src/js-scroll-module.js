/*eslint no-console: 1*/

import JS_DOM from '@yama-dev/js-dom';
let DOM = new JS_DOM();

export default class SCROLL_MODULE {
  constructor(target, options={}){
    if(!target) return false;

    let _options_default = {
      duration : 600,
      easing: SCROLL_MODULE.easingEaseOutCubic
    };

    this.options = Object.assign(_options_default, options);

    // Set Version.
    this.version = process.env.VERSION;

    this.instance = null;

    this.state = {
      num_offset_frame_top: 0,
      num_offset_header: 0,

      numTopDefault    : null,
      numTopTarget     : null,
      numCountTop      : 0,
      numCountDuration : 0,

      elem_selector: target,
      elem_array: DOM.selectDom(target)
    };

    this._setModule();
  }

  _setModule(){
    if(document.readyState == 'complete' || document.readyState == 'interactive'){
      this._attachEvent();
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        this._attachEvent();
      });
    }
  }

  _attachEvent(){
    DOM.addEvent(this.state.elem_array, 'click', (e)=>{
      let _elem_target_data = e.currentTarget.getAttribute(this.state.elem_selector.replace(/(\[|\])/g,''));
      let _elem_target_data_header = e.currentTarget.getAttribute('data-scroll-header');
      let _elem_target_data_offset = e.currentTarget.getAttribute('data-scroll-offset');
      this._animeFunctionPrep(_elem_target_data, _elem_target_data_header, _elem_target_data_offset);
    });
  }

  anime(target=null,header=null,offset=0,duration=null){
    this._animeFunctionPrep(target, header, offset, duration);
  }

  static easingEaseOutCubic(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  }

  _animeFunctionPrep(target=null,header=null,offset=0,duration=null){
    // initialize
    this.state.numCountTop      = 0;     // used value at animation and easing functions.
    this.state.numCountDuration = 0;     // used value at animation and easing functions.
    this.state.num_offset_frame_top = 0; // Distance to target.

    if(!duration) duration = this.options.duration;

    if(target){
      if(typeof target !== 'number'){
        this.state.num_offset_frame_top = DOM.selectDom(target)[0].getBoundingClientRect().top;
      } else {
        this.state.num_offset_frame_top = window.pageYOffset * -1 + target;
      }
    } else {
      this.state.num_offset_frame_top = window.pageYOffset * -1;
    }
    if(header){
      this.state.num_offset_header = DOM.selectDom(header)[0].clientHeight; // header height.
      this.state.num_offset_frame_top = this.state.num_offset_frame_top - this.state.num_offset_header;
    }
    if(offset){
      this.state.num_offset_frame_top = this.state.num_offset_frame_top - offset;
    }

    this.state.numTopDefault = window.pageYOffset;
    this.state.numTopTarget = this.state.num_offset_frame_top + window.pageYOffset;

    // Cancel if the same coordinates as the target point.
    if(this.state.num_offset_frame_top === 0) return false;

    this._animeFunction(duration);
  }

  _animeFunction(duration){
    let _that = this;

    let startTime = new Date().getTime();
    let loop = ()=>{

      _that.instance = window.requestAnimationFrame(loop);
      let currentTime = new Date().getTime();
      let status = (startTime - currentTime);

      this.state.numCountDuration = this.state.numCountDuration + Math.abs(status);

      // Update top position.
      this.state.numCountTop = this.options.easing(
        this.state.numCountDuration,
        this.state.numTopDefault,
        (this.state.numTopTarget - this.state.numTopDefault),
        duration
      );

      // Update position.
      window.scrollTo(0, this.state.numCountTop);

      if(_that.state.num_offset_frame_top > 0){
        if (this.state.numCountTop >= this.state.numTopTarget)  window.cancelAnimationFrame(_that.instance);
      } else {
        if (this.state.numCountTop <= this.state.numTopTarget)  window.cancelAnimationFrame(_that.instance);
      }

      startTime = new Date().getTime();
    };
    loop();
  }
}
