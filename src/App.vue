<template lang="html">
  <div class="container">
    <p style="text-align:center;font-size:1rem;height:3rem;line-height:3rem;">keep calm & coding</p>
    <cell class="cell" v-link="{ path: '/cell' }">
      <i class="fa fa-list"></i>
      Cell
    </cell>
    <cell class="cell" v-link="{ path: '/accordion' }">
      <i class="fa fa-indent"></i>
      Accordion
    </cell>
    <cell class="cell" v-link="{ path: '/swipe' }">
      <i class="fa fa-arrows-h"></i>
      Swipe
    </cell>
  </div>
</template>

<script>
import cell from './components/cell'

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
  .container{
    color:green;
  }
  .cell {
    font-size: .5rem;
  }
  i.fa{
    height: 32px;
    width: 32px;
    margin-right: 10px;
  }
</style>
