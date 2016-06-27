<style lang="css" scoped>

[gcontainer] {
    height: inherit;
    width: inherit;
}

</style>

<template lang="html">

<div gcontainer @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <slot></slot>
</div>

</template>

<script>

export default {
    data: function() {
        return {
            startX: 0,
            startY: 0,
            startTime: 0,
            offsetX: 0,
            offsetY: 0
        }
    },
    computed: {},
    ready: function() {},
    attached: function() {},
    methods: {
        touchStart: function(e) {
            var touch = e.touches[0]
            this.startX = touch.clientX
            this.startY = touch.clientY
            this.startTime = new Date().getTime()
            console.log('touchStart')
        },
        touchMove: function(e) {
            var touch = e.touches[0]
            this.offsetX = touch.clientX - this.startX
            this.offsetY = touch.clientY - this.startY
            this.$broadcast('update')
            console.log(touch)
        },
        touchEnd: function() {
            console.log('touchEnd')
        }
    },
    components: {}
}

</script>
