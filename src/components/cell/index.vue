<style lang="scss" scoped>

@import "../../scss/common.scss";
[data-class] {
    min-height: px2rem(54);
    margin-left: px2rem(10);
    position: relative;
    &:before {
        content: '';
        display: block;
        height: 1px;
        width: 100%;
        position: absolute;
        top: 0px;
        background-color: #d9d9d9;
    }
    &:after {
        content: '';
        display: block;
        height: 1px;
        width: 100%;
        position: absolute;
        bottom: -1px;
        background-color: #d9d9d9;
    }
}

[cell-content] {
    position: absolute;
    top: 50%;
    transform: translateY( -50%);
}

[cell-icon] {
    right: 5%;
}

.default-arrow {
    height: 20px;
    width: 20px;
    display: block;
    border-top: 1px solid rgba(0, 0, 0, .5);
    border-right: 1px solid rgba(0, 0, 0, .5);
    transform: rotate( 45deg);
}

</style>

<template lang="html">

<div data-class>
    <div cell-content>
        <slot></slot>
    </div>
    <div cell-icon cell-content>
        <slot name="icon">
            <i class="default-arrow"></i>
        </slot>
    </div>
</div>

</template>
