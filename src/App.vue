<template>
  <div id="app">
    <swipe class="swipe" :speed="300" :show-indicators="true" :auto="3000">
      <swipe-item class="item-1">0</swipe-item>
      <swipe-item class="item-2">1</swipe-item>
      <swipe-item class="item-3">2</swipe-item>
      <swipe-item class="item-4">3</swipe-item>
      <swipe-item class="item-5">4</swipe-item>
    </swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from './components/swipe'
  export default {
    components: {
      Swipe,
      SwipeItem
    }
  }
</script>

<style>
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  html * {
    box-sizing: border-box;
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .swipe {
    /*margin-top: 200px;*/
    height: 200px;
    width: 100%;
    /*background: blue;*/
    font-size: 10em;
    color: #ffffff;
    text-align: center;
  }

  .item-1 {
    background: deepskyblue;
  }

  .item-2 {
    background: orange;
  }

  .item-3 {
    background: yellow;
  }

  .item-4 {
    background: green;
  }

  .item-5 {
    background: #1d4a80;
  }
</style>
