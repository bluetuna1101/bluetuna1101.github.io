<template>
  <div>
    <todo-item />
    <todo-creator />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue"
import TodoCreator from "./TodoCreator.vue"

export default {
  components: {
    "todo-item": TodoItem,
    "todo-creator": TodoCreator,
  },
}
</script>
