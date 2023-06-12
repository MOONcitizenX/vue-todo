<script setup>
import { storeToRefs } from 'pinia'
import { useTodoStore } from './store/todoStore'
import TheHeader from './components/TheHeader.vue'
import TodoForm from './components/TodoForm.vue'
import TodoItem from './components/TodoItem.vue'
import TodoFilter from './components/TodoFilter.vue'

const todoStore = useTodoStore()
const { filteredTodoList } = storeToRefs(todoStore)
</script>

<template>
  <TheHeader />
  <div class="container">
    <main class="main">
      <TodoForm />
      <TodoFilter />
    </main>
  </div>
  <div class="container todo-list">
    <TodoItem v-for="todo in filteredTodoList" :key="todo.id" :todoItem="todo" />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}

.todo-list {
  width: 100%;
  max-width: 800px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
}
</style>
