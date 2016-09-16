<style>

/*这里设定z-index的功能自己体会*/

.container {
    /*position: relative;*/
    /*z-index: 999;*/
}

</style>

<template>

<div class="container">
    <slot></slot>
</div>

</template>

<script type="text/ecmascript-6">

export default {
    props: {
        autoShrink: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            childCount: 0,
            lastIndex: -1
        }
    },
    ready() {
        if (this.autoShrink) {
            this.childCount = this.$children.length
            this.$children.forEach((item, index) => {
                item.index = index
            })
        }
    },
    events: {
        tap: function(index) {
            if (this.autoShrink) {
                if (index !== this.lastIndex && this.lastIndex !== -1) {
                    this.$children[this.lastIndex].open = false
                }
                this.lastIndex = index
            }
        }
    }
}

</script>
