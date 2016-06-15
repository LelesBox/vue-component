<template lang="html">
  <br>
  <cell v-for=' n in 9 ' class="cell">
    <span>  hello world {{ n }}</span>
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
    line-height: px2rem(35px);
    padding: px2rem(10);
  }
</style>
