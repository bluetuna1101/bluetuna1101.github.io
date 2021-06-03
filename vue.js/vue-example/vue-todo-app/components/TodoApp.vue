<template>
  <div class="todo-app">
    <todo-item />
    <!-- 자식인 todo-creator의 create-todo 이벤트가 실행될때 부모인 TodoApp 의 createTodo 메서드가 실행된다 -->
    <todo-creator @create-todo="createTodo" />
  </div>
</template>

<script>
// 노드 모듈에서 가져오는 모듈은 상단에
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import cryptoRandomString from 'crypto-random-string'
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
    createTodo (title) {
      const newTodo = {
        id: cryptoRandomString({ length: 10}),
        title,
        createdAt: new Date(),
        updatedAt: new Date(),
        done: false
      }

      this.db
      // lodash 문법을 사용
      // todos 배열을 가져옴
      .get('todos')
      // 위에 선언한 nowTodo내용을 넣음
      .push(newTodo)
      .write() // lowdb (실제로 작성을 해라 !)
    }
  },
}
</script>
