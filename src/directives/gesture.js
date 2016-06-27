import Vue from 'vue'

Vue.directive('gesture', {
  bind() {
    var $vm = this.vm
    this.vm[this.expression]('update')
    window.$vm = $vm
  },
  update() {},
  unbind() {
    console.log('unbind')
  }
})
