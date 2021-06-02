<template>
  <div>
    <todo-item />
    <todo-creator />
  </div>
</template>

<script>
// 노드 모듈에서 가져오는 모듈은 상단에
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import TodoCreator from "./TodoCreator.vue"
import TodoItem from "./TodoItem.vue"

export default {
  name: 'TodoApp',
  components: {
    "todo-creator": TodoCreator,
    "todo-item": TodoItem,
  },
  data() {
    return {
      db: null,
      // todos: [],
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
