<template>
  <div>
    <button @click="createTodo">추가</button>
    <!-- 작성 순서 : 바인딩 - 일반 - 이벤트 -->
    <input
      :value="title"
      :placeholder="placeholder"
      type="text"
      @input="title = $event.target.value"
      @keypress.enter="createTodo"
      />
  </div>
</template>
<script>
export default {
  name: 'TodoCreator',
  data() {
    return {
      title: '',
      placeholder: '할 일을 추가하세요!'
    }
  },
  methods: {
    createTodo () {
      // 타이틀이 있고 앞뒤에 공백이 없는상태면 트루
      const validatedTitle = this.title && this.title.trim()
      if (!validatedTitle) {
        alert('유효하지 않은 제목입니다!')
        this.title = this.title.trim()
        return
      }

      this.$emit('create-todo', this.title)
      // 입력 후 타이틀 초기화 시켜줌
      this.title = ''
    }
  }
}
</script>
