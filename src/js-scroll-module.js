/*eslint no-console: 1*/

import * as DOM from '@yama-dev/js-dom/core/';

export class SCROLL_MODULE {
  constructor(target, options={}){
    if(!target) return false;

    let _options_default = {
      duration : 600,
      easing: SCROLL_MODULE.easeOutQuart,
      offset: 0,
      header: null,
      trueFunction: function(){
        if(window.innerWidth <= 765){
          return true;
        }
      },
      onScrollEnd: ()=>{}
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
      e.preventDefault();
      let _elem_target_data = e.currentTarget.getAttribute(this.state.elem_selector.replace(/(\[|\]|\^|=|"|#)/g,''));
      let _elem_target_data_header = e.currentTarget.getAttribute('data-scroll-header') || this.options.header;
      let _elem_target_data_offset = e.currentTarget.getAttribute('data-scroll-offset') || this.options.offset;
      let _elem_target_data_true_offset = e.currentTarget.getAttribute('data-scroll-true-offset');
      this._animeFunctionPrep(_elem_target_data, null, _elem_target_data_header, _elem_target_data_offset, _elem_target_data_true_offset);
    });
  }

  _animeFunctionPrep(target=null, duration=null, header=null, offset=0, trueOffset=null){
    if(this.instance) window.cancelAnimationFrame(this.instance);

    // initialize
    this.state.numCountTop      = 0;     // used value at animation and easing functions.
    this.state.numCountDuration = 0;     // used value at animation and easing functions.
    this.state.num_offset_frame_top = 0; // Distance to target.

    if(duration === false) duration = false;
    if(duration < 0 || duration === null || duration === undefined) duration = this.options.duration;

    // Set target position.
    if(target){
      if(typeof target !== 'number'){
        this.state.num_offset_frame_top = DOM.selectDom(target)[0].getBoundingClientRect().top;
      } else {
        this.state.num_offset_frame_top = window.pageYOffset * -1 + target;
      }
    } else {
      this.state.num_offset_frame_top = window.pageYOffset * -1;
    }

    // Set header height.
    if(header){
      this.state.num_offset_header = DOM.selectDom(header)[0].clientHeight; // header height.
      this.state.num_offset_frame_top = this.state.num_offset_frame_top - this.state.num_offset_header;
    }

    // Set offset height.
    if(offset){
      this.state.num_offset_frame_top = this.state.num_offset_frame_top - offset;
    }

    // Set true-offset height.
    if(trueOffset){
      if(this.options.trueFunction()){
        this.state.num_offset_frame_top = this.state.num_offset_frame_top - Number(trueOffset);
      }
    }

    this.state.numTopDefault = window.pageYOffset;
    this.state.numTopTarget = this.state.num_offset_frame_top + window.pageYOffset;

    // Cancel if the same coordinates as the target point.
    if(this.state.num_offset_frame_top === 0) return false;

    this._animeFunction(duration);
  }

  _animeFunction(duration){
    let startTime = new Date().getTime();
    let loop = ()=>{

      this.instance = window.requestAnimationFrame(loop);
      let currentTime = new Date().getTime();
      let status = (startTime - currentTime);

      this.state.numCountDuration = Math.abs(status);

      // Update top position.
      this.state.numCountTop = this.options.easing(
        this.state.numCountDuration,
        this.state.numTopDefault,
        (this.state.numTopTarget - this.state.numTopDefault),
        duration
      );

      // Update position.
      window.scrollTo(0, this.state.numCountTop);

      if(this.state.num_offset_frame_top > 0){
        if(this.state.numCountTop >= this.state.numTopTarget)  window.cancelAnimationFrame(this.instance);
      } else {
        if (this.state.numCountTop <= this.state.numTopTarget)  window.cancelAnimationFrame(this.instance);
      }

      if(duration <= this.state.numCountDuration){
        window.cancelAnimationFrame(this.instance);
        this.options.onScrollEnd();
      }
    };
    if(duration == false || duration == 0) window.scrollTo(0, this.state.numTopTarget);
    else loop();
  }

  anime(target=null,duration=null,header=null,offset=0,trueOffset=null){
    this._animeFunctionPrep(target, duration, header, offset, trueOffset);
  }

  static easeOutQuart(t, b, c, d){
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }

  static easeOutCubic(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  }

}
