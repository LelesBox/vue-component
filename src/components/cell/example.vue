<template lang="html">
  <br>
  <p style='text-align:center'>
    默认样式
  </p>
  <br>
  <cell v-for=' n in 3 ' class="cell">
    <span>  hello world {{ n }}</span>
  </cell>
  <br>
  <p style='text-align:center'>
    自定义icon样式
  </p>
  <br>
  <cell v-for=' n in 4 ' class="cell">
    <span>  hello world {{ n }}</span>
    <i slot="icon" class = "arrow">
      {{ n }}
    </i>
  </cell>
</template>

<script>
import cell from '.'

export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    cell
  }
}
</script>

<style lang="scss">
  @import "../../scss/common.scss";
  .cell {
    height: px2rem(50px);
    line-height: px2rem(50px);
  }

  .arrow{
    height: 35px;
    width: 55px;
    display: block;
    border-radius: 35px;
    background-color: red;
    line-height: 35px;
    text-align: center;
    color: #fff;
  }
</style>
