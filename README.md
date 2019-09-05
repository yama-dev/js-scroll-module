# SCROLL MODULE

<br>

## Feature

It's a scroll utility.

<br>

## Demo

- [https://yama-dev.github.io/js-scroll-module/examples/](https://yama-dev.github.io/js-scroll-module/examples/)

<br>

## Installation,Download

- Standalone(CDN) -> [https://cdn.jsdelivr.net/gh/yama-dev/js-scroll-module@v0.3.1/dist/js-scroll-module.js](https://cdn.jsdelivr.net/gh/yama-dev/js-scroll-module@v0.3.1/dist/js-scroll-module.js)

<br>

## Using

### NPM

``` bash
# install npm.
npm install --save @yama-dev/js-scroll-module
```

``` javascript
// import.
import SCROLL_MODULE from '@yama-dev/js-scroll-module';
```

``` javascript
SCROLL_MODULE.anime('.target',3000);
```

### Browser

// Basic.

``` html
<button type="button" data-scroll=".p-top">.p-top</button>
<button type="button" data-scroll=".p-btm">.p-btm</button>
<button type="button" data-scroll=".p-mid" data-scroll-header=".p-nav">.p-mid +.p-nav</button>
<button type="button" data-scroll=".p-mid" data-scroll-offset="-100">.p-mid -100</button>
<button type="button" data-scroll=".p-mid" data-scroll-offset="100">.p-mid +100</button>

<script src="./js-scroll-module.js"></script>
<script> new SCROLL_MODULE('[data-scroll]'); </script>
```

// Advanced.

``` html
<button type="button" data-scroll=".p-mid" data-scroll-true-offset="-200">.p-mid true-offset -200</button>
<button type="button" onclick="JSM.anime('.p-btm');">JSM.anime('.p-btm');</button>
<button type="button" onclick="JSM.anime(300);">JSM.anime(300);</button>
<button type="button" onclick="JSM.anime(1000, 3000);">JSM.anime(1000, 3000);</button>
<button type="button" onclick="JSM.anime(1000, 3000, '.p-nav', 0, 0);">JSM.anime(1000, 3000, '.p-nav', 0, 0);</button>

<script src="./js-scroll-module.js"></script>
<script>
  var JSM = new SCROLL_MODULE('[data-scroll]', {
    duration: 500,
    easing: SCROLL_MODULE.easeOutQuart,
    // data-scroll-true-offset=""
    trueFunction: function(){
      if(window.innerWidth <= 765){
        return true;
      }
    }
  });
</script>
```

<br>

## Dependencies

'@yama-dev/js-dom'  // imoprt

<br><br><br>

___

**For Developer**

## Contribution

1. Fork it ( https://github.com/yama-dev/js-scroll-module/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

<br>

## Licence

[MIT](https://github.com/yama-dev/js-scroll-module/blob/master/LICENSE)

<br>

## Author

[yama-dev](https://github.com/yama-dev)

