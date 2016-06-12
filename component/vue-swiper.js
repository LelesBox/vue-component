!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.VueSwiper = e() : t.VueSwiper = e()
}(this, function () {
  return function (t) {
    function e(i) {
      if ( s[ i ] )return s[ i ].exports;
      var n = s[ i ] = { exports: {}, id: i, loaded: !1 };
      return t[ i ].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
    }

    var s = {};
    return e.m = t, e.c = s, e.p = "", e(0)
  }([ function (t, e, s) {
    "use strict";
    function i(t) {
      return t && t.__esModule ? t : { "default": t }
    }

    Object.defineProperty(e, "__esModule", { value: !0 }), e.SwipeItem = e.Swipe = void 0;
    var n = s(8), a = i(n), r = s(9), o = i(r);
    e.Swipe = a[ "default" ], e.SwipeItem = o[ "default" ]
  }, function (t, e) {
    "use strict";
    var s = function (t) {
      return (t || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "")
    }, i = function (t, e) {
      if ( !t || !e )return !1;
      if ( -1 != e.indexOf(" ") )throw new Error("className should not contain space.");
      return t.classList ? t.classList.contains(e) : (" " + t.className + " ").indexOf(" " + e + " ") > -1
    }, n = function (t, e) {
      if ( t ) {
        for ( var s = t.className, n = (e || "").split(" "), a = 0, r = n.length; r > a; a++ ) {
          var o = n[ a ];
          o && (t.classList ? t.classList.add(o) : i(t, o) || (s += " " + o))
        }
        t.classList || (t.className = s)
      }
    }, a = function (t, e) {
      if ( t && e ) {
        for ( var n = e.split(" "), a = " " + t.className + " ", r = 0, o = n.length; o > r; r++ ) {
          var l = n[ r ];
          l && (t.classList ? t.classList.remove(l) : i(t, l) && (a = a.replace(" " + l + " ", " ")))
        }
        t.classList || (t.className = s(a))
      }
    }, r = function (t, e) {
      return property + ":" + e
    }, o = function () {
      return document.addEventListener ? function (t, e, s) {
        t && e && s && t.addEventListener(e, s, !1)
      } : function (t, e, s) {
        t && e && s && t.attachEvent("on" + e, s)
      }
    }(), l = function () {
      return document.removeEventListener ? function (t, e, s) {
        t && e && t.removeEventListener(e, s, !1)
      } : function (t, e, s) {
        t && e && t.detachEvent("on" + e, s)
      }
    }(), d = function (t, e, s) {
      var i = function n() {
        s && s.apply(this, arguments), l(t, e, n)
      };
      o(t, e, i)
    };
    t.exports = { hasClass: i, addClass: n, removeClass: a, addVendor: r, on: o, off: l, once: d }
  }, function (t, e, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = s(1);
    e[ "default" ] = {
      props: { speed: { type: Number, "default": 300 }, auto: { type: Number, "default": 3e3 }, showIndicators: { type: Boolean, "default": !0 } }, ready: function () {
        this.init()
      }, data: function () {
        return {
          index: 0,
          pages: [],
          leftIndex: null,
          current: null,
          rightIndex: null,
          clientWidth: 0,
          container: null,
          timer: null,
          prefix: 0,
          dragState: { startClientX: 0, startClietnY: 0, endOffsetX: 0, endOffsetY: 0, startTime: 0, onDrag: !1, onAnimate: !1, verticalScrolling: !1 }
        }
      }, methods: {
        init: function () {
          this.container = this.$els.container, this.pages = this.container.children, this.clientWidth = this.$el.clientWidth, this.setPagePostion(0), this.autoScroll()
        }, setPagePostion: function (t, e) {
          "showPrev" === e ? this.pages[ this.rightIndex ].style.display = "none" : "showNext" === e && (this.pages[ this.leftIndex ].style.display = "none"), this.index = t, 0 === t ? this.leftIndex = this.pages.length - 1 : this.leftIndex = t - 1, t === this.pages.length - 1 ? this.rightIndex = 0 : this.rightIndex = t + 1, this.pages[ this.leftIndex ].style.transform = "translateX(0)", this.pages[ this.leftIndex ].style.display = "block", this.pages[ this.index ].style.transform = "translateX(100%)", this.pages[ this.index ].style.display = "block", this.pages[ this.rightIndex ].style.transform = "translateX(200%)", this.pages[ this.rightIndex ].style.display = "block"
        }, touchStart: function (t) {
          if ( clearInterval(this.timer), this.dragState.startTime = new Date, !this.dragState.onAnimate ) {
            var e = t.touches[ 0 ];
            this.dragState.startClientX = e.clientX, this.dragState.startClientY = e.clientY
          }
        }, touchMove: function (t) {
          if ( this.dragState.onAnimate )return void t.preventDefault();
          var e = t.touches[ 0 ];
          this.dragState.endOffsetX = e.clientX - this.dragState.startClientX;
          var s = 5;
          this.dragState.onDrag ? (t.preventDefault(), this.translate(this.dragState.endOffsetX - this.prefix)) : Math.abs(this.dragState.endOffsetX) > s && !this.dragState.verticalScrolling ? (t.preventDefault(), this.dragState.onDrag = !0, this.dragState.verticalScrolling = !1, this.prefix = this.dragState.endOffsetX > 0 ? s : -s) : (Math.abs(e.clientY - this.dragState.startClientY) > s && !this.dragState.onDrag || this.dragState.verticalScrolling) && (this.dragState.onDrag = !1, this.dragState.verticalScrolling = !0)
        }, touchEnd: function () {
          var t = this;
          if ( !this.dragState.onAnimate ) {
            this.dragState.verticalScrolling = !1;
            var e = new Date - this.dragState.startTime;
            0 !== this.dragState.endOffsetX && this.dragState.onDrag ? (this.dragState.onAnimate = !0, this.dragState.onDrag = !1, Math.abs(this.dragState.endOffsetX) > this.clientWidth / 2 || Math.abs(this.dragState.endOffsetX) > 20 && 500 > e ? this.dragState.endOffsetX > 0 ? this.translate(this.clientWidth, !0, function () {
              t.setPagePostion(t.leftIndex, "showPrev")
            }) : this.translate(-this.clientWidth, !0, function () {
              t.setPagePostion(t.rightIndex, "showNext")
            }) : this.translate(0, !0), setTimeout(function () {
              t.autoScroll()
            }, this.speed)) : this.autoScroll(), this.dragState.endOffsetX = 0
          }
        }, translate: function (t, e, s) {
          var n = this, a = arguments, r = this.container;
          if ( e ) {
            r.style.webkitTransition = "all " + this.speed + "ms ease", setTimeout(function () {
              return r.style.webkitTransform = "translate3d(" + t + "px, 0, 0)"
            }, 50);
            var o = !1, l = function () {
              o || (o = !0, r.style.webkitTransition = "", r.style.webkitTransform = "", s && s.apply(n, a), n.dragState.onAnimate = !1)
            };
            (0, i.once)(r, "webkitTransitionEnd", l), setTimeout(l, this.speed + 100)
          } else r.style.webkitTransition = "", r.style.transform = "translate3d(" + t + "px,0,0)"
        }, autoScroll: function () {
          var t = this;
          clearInterval(this.timer), this.timer = setInterval(function () {
            t.translate(-t.clientWidth, !0, function () {
              t.setPagePostion(t.rightIndex, "showNext")
            })
          }, this.auto)
        }
      }
    }
  }, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e[ "default" ] = {
      data: function () {
        return { msg: "hello vue" }
      }, components: {}
    }
  }, function (t, e) {
  }, function (t, e) {
  }, function (t, e) {
    t.exports = '<div class=wrap _v-19223090=""> <div class=container @touchstart=touchStart @touchmove=touchMove @touchend=touchEnd v-el:container="" _v-19223090=""> <slot _v-19223090=""></slot> </div> <div class=indicatorContainer v-show=showIndicators _v-19223090=""> <div class=indicator v-for="page in pages" :class="{ active: $index===index }" _v-19223090=""></div> </div> </div>'
  }, function (t, e) {
    t.exports = '<div class=swipe-item _v-e2a238a8=""> <slot _v-e2a238a8=""></slot> </div>'
  }, function (t, e, s) {
    var i, n;
    s(4), i = s(2), n = s(6), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports[ "default" ]), n && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = n)
  }, function (t, e, s) {
    var i, n;
    s(5), i = s(3), n = s(7), t.exports = i || {}, t.exports.__esModule && (t.exports = t.exports[ "default" ]), n && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = n)
  } ])
});
