import Vue from 'vue'
import Vuex from 'vuex'

import todoApp from './todoApp'

Vue.use(Vuex)

export default new Vuex.Store({
  // 엄격한 문법 사용 여부(배포시에는 false해야함)
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    todoApp
  },

  // data
  state: {

  },
  //computed
  getters: {

  },
  // methods
  // 실제 값을 변경할 때 사용(비동기 불가)
  mutations: {

  },
  // methods
  // 비동기 포함 일반 로직/ 실제 값 변경 불가
  actions: {

  }
})