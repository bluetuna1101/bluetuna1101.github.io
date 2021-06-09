// vue 라는 모듈을 가지고오겠다
import Vue from 'vue'
// main.js 진입점 
// App.vue 연결할것임 (최상위 컴포넌트) 한번만 연결하면 되게 설정할것임
import App from './App.vue'
import router from './router'

new Vue({
  el: '#app',
  // 아래와 같이 축약 가능
  // render (createElement) {
  //   return createElement(App)
  // },
  router,
  render: h => h(App)
})