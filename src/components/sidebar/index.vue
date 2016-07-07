<style lang="scss" scoped>

.container {
    height: 100%;
    width: 100%;
    background-color: red;
    overflow: hidden;
}

.sidemenu {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 80%;
    background: green;
    z-index: 1;
}

.content {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: skyblue;
    z-index: 2;
}

</style>

<template lang="html">

<div class="container">
    <div class="sidemenu">
        <slot name="menu">
        </slot>
    </div>
    <div class="content" v-el:content
     @touchstart="touchStart"
     @touchmove="touchMove"
     @touchend="touchEnd">
    </div>
</div>

</template>

<script>
import { once } from '../../common/js/utils'
export default {
    data: function() {
        return {
          start:{
            x:0,
            y:0,
            time:0
          },
          offsetX:0,
          offsetY:0,
          isOpen:false,
          offsetThreshold:0,
          maxOffset:0,
          content:null,
          onDrag:false
        }
    },
    ready: function() {
      this.offsetThreshold = this.$el.clientWidth * (8/10)
      this.content = this.$els.content
    },
    methods: {
        touchStart: function(e) {
          var touch = e.touches[0]
          this.start.x = touch.clientX
          this.start.y = touch.clientY
          this.start.time = new Date().getTime()
        },
        touchMove: function(e) {
            var touch = e.touches[0]
            var offset = touch.clientX - this.start.x
            if(!this.isOpen&&offset<0)return
            if(this.isOpen&&offset>0)return
            if(Math.abs(offset)>=this.offsetThreshold) return
            this.translate(offset)
        },
        touchEnd: function() {
          var timeoffset = new Date().getTime() - this.start.time
          var speed = this.offsetX/timeoffset
          if(this.offsetX === 0 ||this.offsetX === this.offsetThreshold) return
          // 判断自动滚动逻辑 现在真不想思考了
          // 当isOpen==false 时
          // translate到0的情况有
          // 1.移动距离小于this.offsetThreshold/2
          // translate到max的情况有
          // 1.移动距离大于this.offsetThreshold/2
          // 2.向右速度大于1

          // 当isOpen==true时
          // translate到0的情况有
          // 1.移动距离大于this.offsetThreshold/2
          // 2.移动速度大于1
          // translate到max的情况
          // 1.移动距离小于this.offsetThreshold/2且速度小于1
          if(!this.isOpen){
            if(this.offsetX > this.offsetThreshold/2 || speed > 1){
              this.translate(this.offsetThreshold,true,()=>{
                this.isOpen=true
              })
            }else{
              this.translate(0,true)
            }
          } else {
            if(Math.abs(this.offsetX) > this.offsetThreshold/2 || Math.abs(speed) > 1){
              this.translate(0,true,()=>{
                this.isOpen = false
              })
            } else {
              this.translate(this.offsetThreshold,true)
            }
          }
        },
        translate(offset,animate,cb){
          if(animate) {
          var speed = 300
          this.content.style.webkitTransition = `transform ${speed}ms ease`
          var called = false
          once(this.content, 'webkitTransitionEnd',() => {
            if(called) return
            called = true
            this.offsetX = offset
            this.content.style.webkitTransition =''
            this.content.style.transition =''
            cb && cb()
            this.onDrag = false
          })
          setTimeout(() =>  this.content.style.webkitTransform = `translate3d(${offset}px, 0, 0)`, 50)
        } else {
          if(this.isOpen) {
            this.content.style.webkitTransform = `translate3d(${this.offsetThreshold+offset}px,0,0)`
          } else{
            this.content.style.webkitTransform = `translate3d(${offset}px,0,0)`
          }
          this.onDrag=true
          this.offsetX = offset
        }
      }
    }
}

</script>
