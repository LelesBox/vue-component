<style>

.swipe {
    height: 5rem;
    width: 100%;
    font-size: 10em;
    color: #ffffff;
    text-align: center;
}

.my-swipe {
    height: 5rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
}

.slide1 {
    background-color: #0089dc;
    color: #fff;
}

.slide2 {
    background-color: #ffd705;
    color: #000;
}

.slide3 {
    background-color: #ff2d4b;
    color: #fff;
}

.item-1 {
    background: deepskyblue;
}

.item-2 {
    background: orange;
}

.item-3 {
    background: pink;
}

.item-4 {
    background: green;
}

.item-5 {
    background: #1d4a80;
}

</style>

<template>

<swipe class="swipe" :speed="300" :show-indicators="true" :auto="3000" v-el:swipe1>
    <swipe-item v-for="n in number">
        <div class="item-{{n+1}}" style="height: 100%;width: 100%">{{n}}</div>
    </swipe-item>
</swipe>
<br>
<swipe class="my-swipe" :auto="0">
    <swipe-item class="slide1">Slide1 楼上异步加载！</swipe-item>
    <swipe-item class="slide2">Slide2</swipe-item>
    <swipe-item class="slide3">Slide3</swipe-item>
</swipe>
<br>
<swipe class="my-swipe" :auto="0">
    <swipe-item class="slide1">Slide1</swipe-item>
    <swipe-item class="slide2">Slide2</swipe-item>
</swipe>
<br>
<swipe class="my-swipe" :speed="900" :auto="0" :show-indicators="false">
    <swipe-item class="slide1">SINGLE SLIDE</swipe-item>
</swipe>
<br>
<swipe class="my-swipe" :speed="900" :auto="0" :show-indicators="false" :no-drag="true">
    <swipe-item class="slide1">SINGLE SLIDE</swipe-item>
</swipe>

</template>

<script>

import {
    Swipe, SwipeItem
}
from '.'
    //  require('../component/vue-swiper.css')
    //  import { Swipe, SwipeItem } from '../component/vue-swiper'
export default {
    data: function() {
        return {
            number: 0
        }
    },
    components: {
        Swipe,
        SwipeItem
    },
    ready() {
        setTimeout(() => {
            this.number = 3
        }, 2000)
    }
}

</script>
