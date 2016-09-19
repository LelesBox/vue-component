<template>

<accordion :auto-shrink="true">
    <accordion-item title="1.SHIPPING">
        <div style="height: 400px;width: 100%;background: #faca21">
            这是一个height 400px的div
        </div>
        <div style="height: 400px;width: 100%;background: #1aca21">
            这是一个height 400px的div
        </div>
    </accordion-item>
    <accordion-item title="2.BILLING">
        <div style="height: 400px;width: 100%;background: #aaca21">
            这是一个height 400px的div
        </div>
    </accordion-item>
    <accordion-item title="3.REVIEW">
        <div style="height: 200px;width: 100%;background: pink">
            这是一个height 200px的div
        </div>
    </accordion-item>
    <accordion-item title="3.TEST">
        <div style="height: 400px;width: 100%;background: #aaca21">
            这是一个height 400px的div
        </div>
    </accordion-item>
</accordion>
<div style="background-color:black;height:200px;color:#fff;text-align:center;line-height:200px;">
  这是内容
</div>
</template>

<script type="text/ecmascript-6">

import {
    accordion, accordionItem
}
from '.'
export default {
    data() {
            return {}
        },
        components: {
            accordion,
            accordionItem
        }
}

</script>
