<style lang="scss">

.container {
    color: green;
}

.cell {
    font-size: .4rem;
}

i.fa {
    margin-right: 10px;
}

</style>

<template lang="html">

<div class="container">
    <p style="text-align:center;font-size:.6rem;height:2rem;line-height:2rem;">{{title}}</p>
    <!-- <p>
      请在移动端下使用
    </p> -->
    <cell class="cell" v-link="{ path: '/cell' }">
        <i class="fa fa-list"></i> Cell
    </cell>
    <cell class="cell" v-link="{ path: '/accordion' }">
        <i class="fa fa-indent"></i> Accordion
    </cell>
    <cell class="cell" v-link="{ path: '/swipe' }">
        <i class="fa fa-arrows-h"></i> Swipe
    </cell>
</div>

</template>

<script>

import cell from './components/cell'

export default {
    data: function() {
        return {
          title: '请在移动端下使用'
        }
    },
    ready: function() {
      if (window.navigator.userAgent.toLowerCase().indexOf('mobile') !== -1) {
        this.title = 'KEEP CALM & CODING'
      }
      window.onresize = () => {
        if (window.navigator.userAgent.toLowerCase().indexOf('mobile') !== -1) {
          this.title = 'KEEP CALM & CODING'
        }
      }
    },
    components: {
        cell
    }
}

</script>
