/*eslint-disable*/
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Accordion=e():t.Accordion=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="/",e(0)}([function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.accordionItem=e.accordion=void 0;var i=o(7),s=n(i),d=o(8),r=n(d);e.accordion=s["default"],e.accordionItem=r["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{autoShrink:{type:Boolean,"default":!0}},data:function(){return{childCount:0,lastIndex:-1}},ready:function(){this.autoShrink&&(this.childCount=this.$children.length,this.$children.forEach(function(t,e){t.index=e}))},events:{tap:function(t){this.autoShrink&&(t!==this.lastIndex&&-1!==this.lastIndex&&(this.$children[this.lastIndex].open=!1),this.lastIndex=t)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{title:{type:String},open:{type:Boolean,"default":!1},index:{type:Number}},data:function(){return{contentHeight:0,onmove:!1}},ready:function(){this.contentHeight=this.$els.content.children[0].clientHeight},methods:{openItem:function(){this.onmove||(this.open=!this.open,this.$dispatch("tap",this.index)),this.onmove=!1},move:function(){this.onmove=!0}},computed:{contentStyle:function(){return this.open?{height:this.contentHeight+"px"}:{}}}}},function(t,e){},function(t,e){},function(t,e){t.exports="<div class=container> <slot></slot> </div>"},function(t,e){t.exports='<div _v-0f8bb9d2=""> <div class=header :style=headerStyle @touchend=openItem @touchmove=move _v-0f8bb9d2=""> <div class=title v-text=title _v-0f8bb9d2=""></div> <svg class=icon viewBox=0,0,22,22 v-show=!open _v-0f8bb9d2=""> <path d="M 0 11 L 22 11" stroke-width=2 stroke=#5F5F5F _v-0f8bb9d2=""></path> <path d="M 11 0 L 11 22" stroke-width=2 stroke=#5F5F5F _v-0f8bb9d2=""></path> </svg> <svg class=icon viewBox=0,0,22,22 v-show=open _v-0f8bb9d2=""> <path d="M 0 11 L 22 11" stroke-width=2 stroke=#5F5F5F _v-0f8bb9d2=""></path> </svg> </div> <div class=content :style=contentStyle v-el:content="" _v-0f8bb9d2=""> <div _v-0f8bb9d2=""> <slot _v-0f8bb9d2=""></slot> </div> </div> </div>'},function(t,e,o){var n,i;o(3),n=o(1),i=o(5),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,o){var n,i;o(4),n=o(2),i=o(6),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});