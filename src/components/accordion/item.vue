<template>
  <div>
    <div class="header" :style="headerStyle" @touchend="openItem" @touchmove='move'>
      <div class="title" v-text="title"></div>
      <svg class="icon" viewBox="0,0,22,22" v-show="!open">
        <path d="M 0 11 L 22 11" stroke-width="2" stroke="#5F5F5F"></path>
        <path d="M 11 0 L 11 22" stroke-width="2" stroke="#5F5F5F"></path>
      </svg>
      <svg class="icon" viewBox="0,0,22,22" v-show="open">
        <path d="M 0 11 L 22 11" stroke-width="2" stroke="#5F5F5F"></path>
      </svg>
    </div>
    <div class="bottomLine"></div>
    <div class="content" :style="contentStyle" v-el:content>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../scss/_common.scss";

  .header {
    position: relative;
    width: 100%;
    background: white;
    height: px2rem(56.8);
    line-height: px2rem(56.8);
    letter-spacing: 2px;
    z-index: 2;
  }

  .bottomLine {
    width: 100%;
    height: px2rem(1.2);
    background-image: linear-gradient(to right, rgba(0, 0, 0, .14), rgba(0, 0, 0, .3), rgba(0, 0, 0, .3), rgba(0, 0, 0, .14));
  }

  .title {
    font-family: Gotham-Medium;
    display: inline-block;
    margin-left: px2rem(19);
  }

  .icon {
    position: absolute;
    height: px2rem(15);
    width: px2rem(15);
    right: px2rem(19);
    top: 50%;
    transform: translateY(-50%);
  }

  .content {
    width: 100%;
    overflow: hidden;
    height: 0;
    transition: height .3s ease-out;
  }
</style>
<script type="text/ecmascript-6">
  export default{
    props: {
      title: {
        type: String
      },
      open: {
        type: Boolean,
        default: false
      },
      index: {
        type: Number
      }
    },
    data(){
      return {
        contentHeight: 0,
        onmove:false
      }
    },
    ready(){
      this.contentHeight = this.$els.content.children[ 0 ].clientHeight
    },
    methods: {
      openItem: function () {
        if( !this.onmove ){
          this.open = !this.open
          this.$dispatch('tap', this.index)
        }
        this.onmove = false
      },
      move(){
        this.onmove = true
      }
    },
    computed: {
      contentStyle: function () {
        if ( this.open ) {
          return { height: this.contentHeight + 'px' }
        } else {
          return {}
        }
      }
    }
  }
</script>
