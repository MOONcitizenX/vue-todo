<script setup>
import { useTodoStore } from '../store/todoStore'

const todoStore = useTodoStore()
</script>

<template>
  <div class="todo-filter">
    <button class="button" @click="todoStore.setFilter('all')">All</button>
    <button class="button" @click="todoStore.setFilter('done')">Done</button>
    <button class="button" @click="todoStore.setFilter('undone')">Undone</button>
  </div>
</template>

<style scoped>
.todo-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.button {
  padding: 4px 6px;
}
</style>
