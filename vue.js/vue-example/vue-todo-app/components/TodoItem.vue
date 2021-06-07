<template>
  <div 
    :class="{ done }"
    class="todo-item">
    <div
      v-if="isEditMode"
      class="item__inner item--edit"
    >
        <!-- 뷰 속성 ref  -->
      <input
        ref="titleInput"
        :value="editedTitle"
        type="text"
        @input="editedTitle = $event.target.value"
        @keypress.enter="editedTodo"
        @keypress.esc="offEditMode"
        >
      <div class="item__actions">
        <!-- button에 키를 추가해줘서 vue js 가 비슷한 양식으로 작성된 엘리멘트가 다르다고 인식시켜준다 -->
        <button
          class="btn btn--primary"
          key="complete"
          @click="editedTodo">
          <i class="material-icons">done</i>
          </button>
        <button 
          class="btn"
          key="cancel"
          @click="offEditMode">
          <i class="material-icons">clear</i>
          </button>
      </div>
    </div>
    <div 
      v-else
      class="item__inner item--normal"
    >
      <label>
            <input 
        v-model="done"
        type="checkbox"
      >
      <span class="icon" ><i class="material-icons">check</i></span>
      </label>
      <div class="item__title-wrap">
        <div class="item__title">
          {{ todo.title }}
        </div>
        <div class="item__date">
          {{ date }}
        </div>
      </div>
      <div class="item__actions">
        <button
          class="btn"
          key="update"
          @click="onEditMode">
          <i class="material-icons">edit</i>
          </button>
        <button 
          class="btn btn--danger"
          key="delete"
          @click="deleteTodo">
          <i class="material-icons">delete</i>
          </button>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'

export default {
  props: {
    todo: Object
  },
  data() {
    return {
      isEditMode: false,
      editedTitle: ''
    }
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
    editedTodo() {
      // 수정을 해야만 업데이트 투두 매써드가 실행되게
      if(this.todo.title !== this.editedTitle) {
        this.updateTodo({
          title: this.editedTitle,
          updatedAt: new Date()
        }) 
      }
      this.offEditMode()
    },
    onEditMode() {
      this.isEditMode = true
      this.editedTitle = this.todo.title

      //ref titleInput을 찾아서 포커싱
      //nextTick dom 사이클 이후 실행하는 콜백을 연기합니다
      this.$nextTick(() => {
        this.$refs.titleInput.focus()
      })
    },
    offEditMode() {
      this.isEditMode = false
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
