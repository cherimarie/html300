// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import Form from '@/components/Form'

const NotFound = { template: '<p>Page not found</p>' }
const About = { template: '<p>About page</p>' }

const routes = {
  '/': HelloWorld,
  '/about': About,
  '/form': Form
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
