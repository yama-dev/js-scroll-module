/*eslint no-console: 1*/

import JS_DOM from '@yama-dev/js-dom';
let DOM = new JS_DOM();

export default class SCROLL_MODULE {
  constructor(target, options){
    if(!target) return false;

    let _options_default = {
      numDuration : 800
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

    this.SetModule();
  }

  SetModule(){
    if(document.readyState == 'complete' || document.readyState == 'interactive'){
      this.attachEvent();
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        this.attachEvent();
      });
    }
  }

  attachEvent(){
    DOM.addEvent(this.state.elem_array, 'click', (e)=>{
      let _elem_target_data = e.currentTarget.getAttribute('data-scroll');
      let _elem_target_data_header = e.currentTarget.getAttribute('data-scroll-header');
      this.AnimeFunctionPrep(_elem_target_data,_elem_target_data_header);
    });
  }

  AnimeFunctionPrep(target=null,header=null){
    // 初期化
    this.state.numCountTop      = 0; // animation, easing 関数内で利用される値
    this.state.numCountDuration = 0; // animation, easing 関数内で利用される値
    this.state.num_offset_frame_top = 0; // 対象までの距離を判定
    this.state.num_offset_header = 0; // ヘッダーの高さを設定

    if(target){
      this.state.num_offset_frame_top = document.querySelector(target).getBoundingClientRect().top;
    } else {
      this.state.num_offset_frame_top = window.pageYOffset * -1;
    }
    if(header){
      this.state.num_offset_header = DOM.selectDom(header)[0].clientHeight;
    }
    this.state.numTopDefault = window.pageYOffset;
    this.state.numTopTarget = this.state.num_offset_frame_top + window.pageYOffset - this.state.num_offset_header;

    // 目標地点と同じ座標の場合は、キャンセル
    if(this.state.num_offset_frame_top === 0) return false;

    this.AnimeFunction();
  }

  anime(_elem_target = null){
    console.log(this);
    this.AnimeFunctionPrep(_elem_target);
  }

  static easingEaseOutCubic(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  }

  AnimeFunction(){
    let _that = this;

    let startTime = new Date().getTime();
    let loop = ()=>{
      _that.instance = window.requestAnimationFrame(loop);
      let currentTime = new Date().getTime();
      let status = (startTime - currentTime);

      this.state.numCountDuration = this.state.numCountDuration + Math.abs(status);

      // Update top position.
      this.state.numCountTop = SCROLL_MODULE.easingEaseOutCubic(
        this.state.numCountDuration,
        this.state.numTopDefault,
        (this.state.numTopTarget - this.state.numTopDefault),
        this.options.numDuration
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
