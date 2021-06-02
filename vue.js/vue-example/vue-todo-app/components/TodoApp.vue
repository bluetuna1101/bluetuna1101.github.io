<template>
  <div>
    <todo-item />
    <todo-creator />
  </div>
</template>

<script>
// 노드 모듈에서 가져오는 모듈은 상단에

import lowdb from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import TodoItem from "./TodoItem.vue"
import TodoCreator from "./TodoCreator.vue"

export default {
  components: {
    "todo-item": TodoItem,
    "todo-creator": TodoCreator,
  },
  data() {
    return {
      db: null,
    }
  },
  created() {
    this.initDB()
  },
  methods: {
    initDB() {
      const adapter = new LocalStorage("todo-app") //db 이름이 todoapp
      this.db = lowdb(adapter)

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
