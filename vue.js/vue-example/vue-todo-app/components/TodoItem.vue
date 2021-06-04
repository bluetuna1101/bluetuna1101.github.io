<template>
  <div class="todo-item">
    <input 
      v-model="done"
      type="checkbox"
    >
    <div class="item__title-wrap">
      <div class="item__title">
        {{ todo.title }}
      </div>
      <div class="item__date">
        {{ date }}
      </div>
    </div>
    <div class="item__actions">
      <button @click="onEditMode">수정</button>
      <button @click="deleteTodo">삭제</button>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'

export default {
  props: {
    todo: Object
  },
  computed: {
    // 객체리터럴 상태를 가지고옴
    done: {
      get () {
        return this.todo.done
      },
      // done이 변경되었을때 분기시켜주는 셋
      set (done) {
        this.updateTodo({
          done
        })
      }
    },
    // 날짜 나오게
    date () {
      const date = dayjs(this.todo.createdAt)
      // 날짜 비교 - 같으면 트루 틀리면 펄스
      const isSame = date.isSame(this.todo.updatedAt)
      if (isSame) {
        return date.format('YYYY년 MM월 DD일')
      } else {
        return `${date.format('YYYY년 MM월 DD일')} (edited)`
      }

    }
  },
  methods: {
    onEditMode() {

    },
    offEditMode() {

    },
    updateTodo(value) {
      this.$emit('update-todo', this.todo, value)
    },
    deleteTodo () {
      this.$emit('delete-todo', this.todo)
    }
  }
}
</script>
