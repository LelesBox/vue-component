<template>
  <div class="container" @touchmove="touchMove" @touchstart="touchStart" @touchend="touchEnd">
    <div class="header"></div>
    <slot name="pulldown">
      <div class="pulldown-header">
        <span class="pull-down-text">pull down refresh</span>
      </div>
    </slot>
    <slot></slot>
    <div style="position: fixed;top: 0;height: 30px;">{{debug_value}}</div>
  </div>
</template>
<style>
  html {
    /*box-sizing: content-box!important;*/
    /*overflow: visible !important;*/
    /*border-top: 10px solid green !important;*/
  }
</style>
<style scoped>
  .container {
    /*transform: translateY(-30px);*/
    /*margin-top: -80px;*/
    /*height: 140%;*/
    width: 100%;
    background: skyblue;
    position: relative;
    /*margin-top: -1px;*/
    /*overflow: scroll;*/
  }

  /*.header {*/
  /*position: fixed;*/
  /*top: 0;*/
  /*height: 80px;*/
  /*width: 100%;*/
  /*background: white;*/
  /*}*/

  .pulldown-header {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background: lightpink;
    /*background: red;*/
    /*top: -30px;*/
    /*z-index: 999;*/
    text-align: center;
    /*overflow: visible;*/
  }

  .pull-down-text {
    display: inline-block;
    font-size: .5rem;
    background: red;
    /*height: ;*/
    transform: translateY(0px);
  }
</style>
<script type="text/ecmascript-6">
  import { addClass, removeClass, addVendor, once } from '../../common/js/utils'

  export default{
    data(){
      return {
        touchstartPoint: { x: 0, y: 0 },
        startTime: 0,
        offset: { x: 0, y: 0 },
        onPullDown: false,
        debug_value: 0
      }
    },
    methods: {
      touchStart(e){
        var touch = e.touches[ 0 ]
        this.touchstartPoint.x = touch.clientX
        this.touchstartPoint.y = touch.clientY
        this.$el.style.webkitTransition = ''
      },
      touchMove(e){
        var touch = e.touches[ 0 ]
        var offset = touch.clientY - this.touchstartPoint.y
        var top = this.$el.getBoundingClientRect().top;
        this.debug_value = top
        var threshold = 10
        if ( this.onPullDown && offset > threshold ) {
          console.log("下拉呗!")
//          window.alert(offset)
//          this.debug_value = offset
//          e.preventDefault()
//          this.translate(offset)
        } else if ( offset > 0 && top === 0 ) {
//          this.touchstartPoint.y = touch.clientY
          this.onPullDown = true
//          e.preventDefault()
        }
      },
      touchEnd(){
//        this.translate(0, true, ()=> {
//          this.onPullDown = false
//          this.debug_value = 0
//        })
        this.debug_value = 0
      },
      translate(offset, auto, callback){
        if ( auto ) {
          var element = this.$el
          element.style.webkitTransition = 'transform .2s ease-out'
          var called = false
          var transitionEndCallback = () => {
            if ( called ) return
            called = true
            element.style.webkitTransition = ''
            element.style.webkitTransform = ''
            if ( callback ) {
              callback.apply(this, arguments)
            }
          }
          once(element, 'webkitTransitionEnd', transitionEndCallback)
          setTimeout(() => element.style.webkitTransform = `translate3d(0, 0, 0)`, 50)
//          setTimeout(transitionEndCallback, 100 + 100) // webkitTransitionEnd maybe not fire on lower version android.
        } else {
          this.$el.style.webkitTransform = `translate3d(0,${offset * 0.3}px,0)`
        }
      }
    }
  }
</script>
