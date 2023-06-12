<script setup>
import { ref } from 'vue'

const todoList = ref([])

const todoInput = ref('')
let todoID = 1

const updatingTodoID = ref(null)

const addTodo = () => {
  todoList.value.push({
    id: todoID,
    text: todoInput.value,
    done: false
  })
  todoID++
  todoInput.value = ''
}

const removeTodo = (id) => {
  todoList.value = todoList.value.filter((t) => t.id !== id)
}

const updateTodo = (id) => {
  updatingTodoID.value = id
}
</script>

<template>
  <div class="container header-container">
    <header class="header">
      <img src="./assets/logo.png" class="header-logo" />
      <h1 class="header-title">MyTodos</h1>
    </header>
  </div>
  <div class="container">
    <main class="main">
      <form class="todo-form" @submit.prevent="addTodo">
        <input v-model="todoInput" type="text" class="todo-input" placeholder="what i need to do" />
        <button class="todo-add">Add todo</button>
      </form>
    </main>
  </div>
  <div class="container todo-list">
    <div v-for="todo in todoList" :key="todo.id" class="todo-item">
      <div class="todo-top">
        <h3
          v-if="updatingTodoID !== todo.id"
          class="todo-title"
          :class="{
            done: todo.done
          }"
        >
          {{ todo.text }}
        </h3>
        <form @submit.prevent="() => (updatingTodoID = null)">
          <input
            v-if="updatingTodoID === todo.id"
            v-model="todo.text"
            class="updating-todo"
            type="text"
          />
        </form>
        <button class="remove-button" @click="() => removeTodo(todo.id)">
          <img class="trash-icon" src="./assets/trash-full-svgrepo-com.svg" />
        </button>
        <button @click="() => updateTodo(todo.id)">update</button>
      </div>
      <input type="checkbox" v-model="todo.done" />
    </div>
  </div>
</template>

<style scoped>
.header-container {
  background-color: var(--bg-color);
}
.header {
  display: flex;
  justify-content: space-between;
}
.header-logo {
  width: 60px;
  aspect-ratio: 1/1;
}
.header-title {
  color: var(--main-color);
}

.main {
  display: flex;
  flex-direction: column;
}

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

.todo-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.todo-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
}

.todo-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.updating-todo {
  font-size: 20px;
  border: none;
  outline: 1px solid var(--bg-color);
  font-weight: bold;
  padding: 4px 6px;
}
.todo-title {
}

.done {
  text-decoration: line-through;
  color: var(--red-color);
}

.remove-button {
  margin-left: auto;
  margin-right: 6px;
}

.trash-icon {
  width: 15px;
  aspect-ratio: 1/1;
}
</style>
