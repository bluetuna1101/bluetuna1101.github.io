<template>
  <div class="todo-app">
    <todo-item />
    <todo-creator />
  </div>
</template>

<script>
// 노드 모듈에서 가져오는 모듈은 상단에
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import TodoCreator from './TodoCreator'
import TodoItem from './TodoItem'

export default {
  name: 'TodoApp',
  components: {
    TodoCreator,
    TodoItem
  },
  data() {
    return {
      db: null,
      todos: [],
    }
  },
  created() {
    this.initDB()
  },
  methods: {
    initDB() {
      const adapter = new LocalStorage("todo-app") //db 이름이 todoapp
      this.db = low(adapter)

      // Local DB 초기화
      this.db
        .defaults({
          todos: [], // Collection
        })
        .write()
    },
  },
}
</script>
