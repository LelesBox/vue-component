<template>
  <div class="swipe-item">
    <slot></slot>
  </div>
</template>
<style scoped>
  .swipe-item {
    height: 100%;
    width: 33.33%;
    position: absolute;
    display: none;
  }

  .swipe-item.active {
    display: block;
  }
</style>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
