<script setup>
import TheHeader from './components/TheHeader.vue'
import TodoForm from './components/TodoForm.vue'
import TodoItem from './components/TodoItem.vue'
import { ref } from 'vue'

const todoList = ref([])

const updatingTodoID = ref(null)

const removeTodo = (id) => {
  todoList.value = todoList.value.filter((t) => t.id !== id)
}

const updateTodo = (text, id) => {
  todoList.value.find((t) => t.id === id).text = text
  updatingTodoID.value = null
}

const updateDone = (id, done) => {
  todoList.value.find((t) => t.id === id).done = done
}
</script>

<template>
  <TheHeader />
  <div class="container">
    <main class="main">
      <TodoForm @addTodo="(todo) => todoList.push(todo)" />
    </main>
  </div>
  <div class="container todo-list">
    <TodoItem
      v-for="todo in todoList"
      :key="todo.id"
      :updatingTodoID="updatingTodoID"
      :removeTodo="removeTodo"
      :updateTodo="updateTodo"
      :todoItem="todo"
      @startUpdate="(id) => (updatingTodoID = id)"
      @updateDone="updateDone"
    />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}

.todo-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
</style>
