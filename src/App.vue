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
    <p style="text-align:center;font-size:.6rem;height:2rem;line-height:2rem;">KEEP CALM & CODING</p>
    <cell class="cell" v-link="{ path: '/cell' }">
        <i class="fa fa-list"></i> Cell
    </cell>
    <cell class="cell" v-link="{ path: '/accordion' }">
        <i class="fa fa-indent"></i> Accordion
    </cell>
    <cell class="cell" v-link="{ path: '/swipe' }">
        <i class="fa fa-arrows-h"></i> Swipe
    </cell>
    <cell class="cell" v-link="{ path: '/sidebar'}">
      <i class="fa fa-bars"></i> SideBar
    </cell>
</div>

</template>

<script>

import cell from './components/cell'

export default {
    data: function() {
        return {}
    },
    computed: {},
    ready: function() {},
    attached: function() {},
    methods: {},
    components: {
        cell
    }
}

</script>
