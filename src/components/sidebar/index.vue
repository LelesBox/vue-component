<style lang="scss" scoped>

.container {
    height: 100%;
    width: 100%;
    background-color: red;
    overflow: hidden;
}

.sidemenu {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 70%;
    background: green;
    z-index: 1;
}

.content {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: skyblue;
    transform: translate3d(7rem, 0, 0);
    z-index: 2;
}

</style>

<template lang="html">

<div class="container">
    <div class="sidemenu">
        <slot name="menu">
        </slot>
    </div>
    <div class="content" v-gesture="gesture">

    </div>
</div>

</template>

<script>

export default {
    data: function() {
        return {}
    },
    computed: {},
    ready: function() {},
    attached: function() {},
    methods: {
        // touchStart: function() {
        //
        // },
        // touchMove: function(e) {
        //     console.log(e)
        // },
        // touchEnd: function() {
        //
        // },
        gesture: function(e) {
            console.log('e:', e)
            console.log('gesture!!!', e)
        }
    },
    components: {}
}

</script>
