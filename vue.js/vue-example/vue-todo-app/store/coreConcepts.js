export default {
  namespaced: true,
  state: () => ({
    a: 123,
    b: []
  }),
  getters: {
    someGetter1(state, getters) {
      return state.a + 1
    },
    someGetter2(state, getters) {
      return state.a + getters.someGetter2
    }
  },
  mutations: {
    someMutation(state, payload) {
      state.a = 789
      state.b.push(payload)
    }
  },
  actions: {
    someAction1({
      state,
      getters,
      commit,
      dispatch
    }, payload) {
      state.a = 789 //ERR
      state.b.push(payload) //ERR
      commit('someMutation', payload)
    },
    someAction2(context, payload) {
      context.commit('someMutation')
      context.dispatch('someAction1', payload)
    }
  }
}