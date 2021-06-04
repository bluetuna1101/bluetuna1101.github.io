<template>
  <div class="todo-app">

    <div class="todo-app__actions">
      <div class="filters">
        <button
          :class="{ active: filter === 'all'}"
          @click="changeFilter('all')">
          all ({{ total }})
        </button>
        <button 
          :class="{ active: filter === 'active'}"
          @click="changeFilter('active')">
          to-do ({{ activeCount }})
        </button>
        <button 
          :class="{ active: filter === 'completed'}"
          @click="changeFilter('completed')">
          finish ({{ completedCount }})
        </button>
      </div>
      <div class="actions">
        <input 
          v-model="allDone"
          type="checkbox">
        <button @click="clearCompleted">
          완료 항목 삭제
        </button>
      </div>
    </div>

    <div class="todo-app__list">
      <todo-item 
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @update-todo="updateTodo"
      @delete-todo="deleteTodo"
    />
    </div>

    <hr>
    <!-- 자식인 todo-creator의 create-todo 이벤트가 실행될때 부모인 TodoApp 의 createTodo 메서드가 실행된다 -->
    <todo-creator
      class="todo-app__creator"
       @create-todo="createTodo" />
  </div>
</template>

<script>
// 노드 모듈에서 가져오는 모듈은 상단에
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import cryptoRandomString from 'crypto-random-string'
import _cloneDeep from 'lodash/cloneDeep'
import _find from 'lodash/find'
import _assign from 'lodash/assign'
import _findIndex from 'lodash/findIndex'
import _forEachRight from 'lodash/forEachRight'
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
      filter: 'all'
    }
  },
  computed: {
    // todos 필터링 하기
    filteredTodos() {
      switch(this.filter) {
        case 'all':
        default:
          return this.todos
        case 'active': // 해야 할 항목
          return this.todos.filter(todo => !todo.done)
        case 'completed': //완료된 항목
          return this.todos.filter(todo => todo.done)
      }
    },
    total() {
      return this.todos.length
    },
    activeCount() {
      return this.todos.filter(todo => !todo.done).length
    },
    completedCount() {
      return this.total - this.activeCount
    },
    allDone: {
      get() {
        return this.total === this.completedCount && this.total > 0   
      },
      set(checkd) {
        this.completeAll(checkd)
      }
    }
  },
  created() {
    this.initDB()
  },
  methods: {
    initDB() {
      const adapter = new LocalStorage("todo-app") //db 이름이 todoapp
      this.db = low(adapter)

      const hasTodos = this.db
      .has('todos') // Collection name
      .value() // has lodash 에서 db가 있는지 확인하는 메서드 .value -> 값을 뽑아냄

      if(hasTodos) {
      this.todos  = _cloneDeep(this.db.getState().todos) // getState 가져와라 _cloneDeep 참조까지 깊은복사해오기
      } else {
        // Local DB 초기화
        this.db
          .defaults({
            todos: [], // Collection
          })
          .write()
      }

    },
    createTodo (title) {
      const newTodo = {
        id: cryptoRandomString({ length: 10}),
        title,
        createdAt: new Date(),
        updatedAt: new Date(),
        done: false
      }

      //Create DB
      this.db
      // lodash 문법을 사용
      // todos 배열을 가져옴
      .get('todos')
      // 위에 선언한 nowTodo내용을 넣음
      .push(newTodo)
      .write() // lowdb (실제로 작성을 해라 !)
      
      //Create Client
      this.todos.push(newTodo)
    },
    // db update
    updateTodo(todo, value) {
      this.db
        .get('todos') //lowdb
        .find({ id: todo.id }) //lodash
        .assign(value) //특정한 객체 값 갱신 lodash
        .write()

      //Create Client
      const foundTodo = _find(this.todos, { id: todo.id }) //lodash
      _assign(foundTodo, value)
    },
    deleteTodo(todo) {
      this.db
        .get('todos')
        .remove({ id: todo.id })
        .write()

      // 실질적으로 데이터는 지워지지만 반응성을 가지지는 못한다
      // _remove(this.todos, { id: todo,id })

      // todo 에 인덱스를 찾기
      const foundIndex = _findIndex(this.todos, { id: todo.id })
      // vue api delete 객체의 속성을 삭제(객체가 반응형이면 뷰 업데이트를 발생)
      this.$delete(this.todos, foundIndex)
    },
    changeFilter (filter) {
      this.filter = filter
    },
    completeAll(checkd) {
      // DB 갱신
      const newTodos = this.db
      .get('todos')
      .forEach(todo => {
        todo.done = checkd
      })
      .write()
      // 로컬 todos 갱신
      // this.todos.forEach(todo => {
      //   todo.done = checked
      // })
      this.todos = _cloneDeep(newTodos)
    },
    clearCompleted() {
      // 배열을 앞에서부터 삭제하면 원하는 인덱스를 삭제 못한다(앞에꺼를 지우고 배열이 밀림). 
      // this.todos.forEach(todo => {
      //   if (todo.done) {
      //     this.deleteTodo(todo)
      //   }
      // })

      // 따라서 뒤에서부터 제거해야 한다
      // js native 로 작성
      // this.todos
      //   .reduce((list, todo, index) => {
      //     if (todo.done) {
      //       list.push(index)
      //     }
      //     return list 
      //   }, [])
      //   .reverse()
      //   .forEach(index => {
      //     this.deleteTodo(this.todos[index])
      //   })

      _forEachRight(this.todos, todo => {
        if (todo.done) {
          this.deleteTodo(todo)
        }
      })
    }
  },
}
</script>

<style scoped lang="scss">
  button.active {
    font-weight: bold;
    background: blue;
    color: #fff;
  }
</style>