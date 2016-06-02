<template>
  <div class="wrap">
    <div class="container" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" v-el:container>
      <slot></slot>
    </div>
    <div class="indicatorContainer" v-show="showIndicators">
      <div class="indicator" v-for="page in pages" :class="{ active: $index===index }"></div>
    </div>
  </div>
</template>
<style scoped>
  .wrap {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .container {
    height: 100%;
    width: 300%;
    position: relative;
    left: -100%;
    background: red;
  }

  .indicatorContainer {
    position: absolute;
    opacity: .3;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .indicator {
    border-radius: 100%;
    height: 8px;
    width: 8px;
    float: left;
    margin: 0 3px;
    background: #000000;
  }

  .indicator.active {
    background: #ffffff;
  }
</style>
<script type="text/ecmascript-6">
  import { addClass, removeClass, addVendor, once } from './utils'

  export default{
    props: {
      speed: {
        type: Number,
        default: 300
      },
      auto: {
        type: Number,
        default: 3000
      },
      showIndicators: {
        type: Boolean,
        default: true
      }
    },
    ready(){
      this.init()
    },
    data(){
      return {
        index: 0,
        pages: [],
        offset: 0,
        leftIndex: null,
        current: null,
        rightIndex: null,
        clientWidth: 0,
        container: null,
        timer: null,
        prefix: 0,
        dragState: {
          startClientX: 0,
          startClietnY: 0,
          endOffsetX: 0,
          endOffsetY: 0,
          startTime: 0,
          onDrag: false,
          onAnimate: false,
          verticalScrolling: false
        }
      }
    },
    methods: {
      init(){
        this.container = this.$els.container
        this.pages = this.container.children
        this.clientWidth = this.$el.clientWidth
        this.setPagePostion(0)
        this.autoScroll()
      },
      setPagePostion(index, direction){
        if ( direction === 'showPrev' ) {
          this.pages[ this.rightIndex ].style.display = 'none'
        } else if ( direction === 'showNext' ) {
          this.pages[ this.leftIndex ].style.display = 'none'
        }
        this.index = index
        if ( index === 0 ) {
          this.leftIndex = this.pages.length - 1
        } else {
          this.leftIndex = index - 1
        }
        if ( index === this.pages.length - 1 ) {
          this.rightIndex = 0
        } else {
          this.rightIndex = index + 1
        }
        this.pages[ this.leftIndex ].style.transform = 'translateX(0)'
        this.pages[ this.leftIndex ].style.display = 'block'
        this.pages[ this.index ].style.transform = 'translateX(100%)'
        this.pages[ this.index ].style.display = 'block'
        this.pages[ this.rightIndex ].style.transform = 'translateX(200%)'
        this.pages[ this.rightIndex ].style.display = 'block'
      },
      touchStart(e){
        clearInterval(this.timer)
        if ( this.dragState.onAnimate )return
        var touches = e.touches[ 0 ]
        this.dragState.startClientX = touches.clientX
        this.dragState.startClientY = touches.clientY
        this.dragState.startTime = new Date()
      },
      touchMove(e){
        /*
         * 0.当上下移动距离小于8左右移动距离小于10时,我们不为所动
         * 1.当手指上下移动距离超过10px,则此次的所有操作都不会触发左右滚动 (需要额外全局参数,this.verticalScrolling)
         * 2.当收拾左右移动距离超过10px,则此次操作只会导致左右滚动而不会出现上下滚动,由于左右移动是超过10px时才会触发,所以真实
         * 移动距离得处理这10px的误差,当左移动时,减去10px,当右移动时加上10px
         * */
        if ( this.dragState.onAnimate ) {
          e.preventDefault()
          return
        }
        var touches = e.touches[ 0 ]
        this.dragState.endOffsetX = touches.clientX - this.dragState.startClientX
        var threshold = 5

        if ( this.dragState.onDrag ) {
          e.preventDefault()
          this.translate(this.dragState.endOffsetX - this.prefix)
        } else if ( Math.abs(this.dragState.endOffsetX) > threshold && !this.dragState.verticalScrolling ) {
          e.preventDefault()
          this.dragState.onDrag = true
          this.dragState.verticalScrolling = false
          this.prefix = this.dragState.endOffsetX > 0 ? threshold : -threshold
        }
//        这里this.dragState.verticalScrolling 存在的意义在于,当此次滚动中出现上下滚动,那直到手指离开前,都不会触发左右滚动
        else if ( Math.abs(touches.clientY - this.dragState.startClientY) > threshold && !this.dragState.onDrag || this.dragState.verticalScrolling ) {
          this.dragState.onDrag = false
          this.dragState.verticalScrolling = true
        }
      },
      touchEnd(){
        if ( this.dragState.onAnimate || this.dragState.startTime === 0 )return
        this.dragState.verticalScrolling = false
        /*
         * 这么做是为了当快速切换的时候,this.dragState.startTime 还没来记得触发touchstart事件初始化就开始触发touchend,导致
         * 时间参数还是上一次的参数,此时再去相减的话就会造成时间差变长
         * */
        var interval = new Date() - this.dragState.startTime
        this.dragState.startTime = 0

        if ( this.dragState.endOffsetX !== 0 && this.dragState.onDrag ) {
          this.dragState.onAnimate = true
          this.dragState.onDrag = false
          if ( Math.abs(this.dragState.endOffsetX) > this.clientWidth / 2 || (Math.abs(this.dragState.endOffsetX) > 20 && interval < 500) ) {
            if ( this.dragState.endOffsetX > 0 ) {
              this.translate(this.clientWidth, true, ()=> {
                this.setPagePostion(this.leftIndex, 'showPrev')
              })
            } else {
              this.translate(-this.clientWidth, true, ()=> {
                this.setPagePostion(this.rightIndex, 'showNext')
              })
            }
          } else {
            this.translate(0, true)
//            alert(`${Math.abs(this.dragState.endOffsetX)}:intertval:${interval}`)
          }
//        等待理论上的动画时间结束后才开始
          setTimeout(()=> {
            this.autoScroll()
          }, this.speed)
        } else {
          this.autoScroll()
        }
        this.dragState.endOffsetX = 0
      },
      translate(offset, auto, callback){
        var element = this.container
        if ( auto ) {
          element.style.webkitTransition = 'all ' + this.speed + 'ms ease'
          setTimeout(() => element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`, 50)
          var called = false
          var transitionEndCallback = () => {
            if ( called ) return
            called = true
            element.style.webkitTransition = ''
            element.style.webkitTransform = ''
            if ( callback ) {
              callback.apply(this, arguments)
            }
            this.dragState.onAnimate = false
          }
          once(element, 'webkitTransitionEnd', transitionEndCallback)
          setTimeout(transitionEndCallback, this.speed + 100) // webkitTransitionEnd maybe not fire on lower version android.
        } else {
          element.style.webkitTransition = ''
          element.style.transform = `translate3d(${offset}px,0,0)`
        }
      },
      autoScroll(){
        clearInterval(this.timer)
        this.timer = setInterval(()=> {
          this.translate(-this.clientWidth, true, ()=> {
            this.setPagePostion(this.rightIndex, 'showNext')
          })
        }, this.auto)
      }
    }
  }
</script>
