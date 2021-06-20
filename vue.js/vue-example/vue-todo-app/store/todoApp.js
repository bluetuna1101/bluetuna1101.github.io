export default {
  // 네임스페이스 : 독립적으로 사용하기 위해선 옵션을 트루로 해야함
  namespaced: true,
  // 참조관계 형성을 방지하기 위해 함수로 사용해 객체를 리턴하도록 사용해야 함
  state: () => ({
    db: null,
    todos: [],
  }),
  getters: {},
  mutations: {
    assignDB(state, db) {
      state.db = db
    },
    assignTodos(state, todos) {
      state.todos = todos
    }

  },
  actions: {
    initDB({
      state,
      commit
    }) {
      const adapter = new LocalStorage("todo-app") //db 이름이 todoapp
      // state.db = low(adapter)
      commit('assignDB', lowdb(adapter))

      const hasTodos = state.db
        .has('todos') // Collection name
        .value() // has lodash 에서 db가 있는지 확인하는 메서드 .value -> 값을 뽑아냄

      if (hasTodos) {
        // state.todos = _cloneDeep(state.db.getState().todos) // getState 가져와라 _cloneDeep 참조까지 깊은복사해오기
        commit('assignTodos', _cloneDeep(state.db.getState().todos))
      } else {
        // Local DB 초기화
        state.db
          .defaults({
            todos: [], // Collection
          })
          .write()
      }
    },
  },
}