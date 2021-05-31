import Vue from 'vue'
import App from './App.vue'

require('./directives'); // directives 모듈 추가

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')