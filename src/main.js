import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import 'github-markdown-css/github-markdown.css'
import hljs from 'highlight.js'

Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
