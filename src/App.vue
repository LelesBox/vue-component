<template lang="html">
  <div class="container">
    <p style="text-align:center;font-size:1rem;height:3rem;line-height:3rem;">keep calm & coding</p>
    <cell class="cell" v-link="{ path: '/cell' }">
      Cell
    </cell>
    <cell class="cell" v-link="{ path: '/accordion' }">
      Accordion
    </cell>
    <cell class="cell" v-link="{ path: '/swipe' }">
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
  .cell {
    font-size: .5rem;
  }
</style>
