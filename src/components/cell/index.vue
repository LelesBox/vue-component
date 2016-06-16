<template lang="html">
  <div data-class>
    <slot></slot>
    <div cell-icon>
      <slot name = "icon">
        <i class="default-arrow"></i>
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../scss/common.scss";

  [data-class]{
    min-height: px2rem(54);
    margin-left: px2rem(10);
    position: relative;
    &:before{
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      position: absolute;
      top:-1px;
      // background-image: linear-gradient(to right, rgba(0, 0, 0, .14), rgba(0, 0, 0, .3), rgba(0, 0, 0, .3), rgba(0, 0, 0, .14));
      background-color: #d9d9d9;
    }
    &:after{
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      position: absolute;
      bottom:0px;
      // background-image: linear-gradient(to right, rgba(0, 0, 0, .14), rgba(0, 0, 0, .2), rgba(0, 0, 0, .2), rgba(0, 0, 0, .14));
      background-color: #d9d9d9;
    }
  }

  [cell-icon]{
    position: absolute;
    top:50%;
    right: 5%;
    transform: translateY( -50% )
  }

  .default-arrow{
    height: 15px;
    width: 15px;
    display: block;
    border-top:1px solid rgba(0, 0, 0, .8);
    border-right: 1px solid rgba(0, 0, 0, .8);
    transform:rotate( 45deg );
  }
</style>
