<template lang="html">
  <div data-class="cell-container">
    <slot></slot>
    <i class="arrow"></i>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../scss/common.scss";

  [data-class]{
    min-height: px2rem(54);
    width: 100%;
    position: relative;
    &:before{
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      position: absolute;
      top:-1px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, .14), rgba(0, 0, 0, .3), rgba(0, 0, 0, .3), rgba(0, 0, 0, .14));
    }
    &:after{
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      position: absolute;
      bottom:0px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, .14), rgba(0, 0, 0, .2), rgba(0, 0, 0, .2), rgba(0, 0, 0, .14));
    }
  }

  .arrow{
    position: absolute;
    height: 15px;
    width: 15px;
    border-top:1px solid rgba(0, 0, 0, .8);
    border-right: 1px solid rgba(0, 0, 0, .8);
    top:50%;
    right: 5%;
    transform: translateY( -50% ) rotate( 45deg );
  }
</style>
