<script setup>
import { ref } from 'vue'
const emit = defineEmits(['addTodo'])
const todoInput = ref('')
let todoID = 1

const addTodo = () => {
  emit('addTodo', {
    id: todoID,
    text: todoInput.value,
    done: false
  })
  todoInput.value = ''
  todoID++
}
</script>

<template>
  <form class="todo-form" @submit.prevent="addTodo">
    <input v-model="todoInput" type="text" class="todo-input" placeholder="what i need to do" />
    <button class="todo-add">Add todo</button>
  </form>
</template>

<style scoped>
.todo-form {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px 10px;
}
.todo-input {
  font-size: 18px;
  text-indent: 6px;
  color: var(--main-color);
}

.todo-add {
  font-size: 18px;
  padding: 4px 6px;
  color: var(--main-color);
  background-color: var(--bg-color);
}
</style>
