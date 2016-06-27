<style lang="css">
.container{
  height: 100%;
  width: 100%;
  background-color: green;
}

</style>

<template lang="html">
  <g-container @update="gContainerUpdate">
    <div class="container">
    </div>
  </g-container>
</template>

<script>

import gContainer from '.'

export default {
    data: function() {
        return {}
    },
    computed: {},
    ready: function() {},
    attached: function() {},
    methods: {
      gContainerUpdate: function (offsetx, offsety) {
        
      }
    },
    components: {
      gContainer
    }
}

</script>
