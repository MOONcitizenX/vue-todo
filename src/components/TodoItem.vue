<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../store/todoStore'

const props = defineProps(['todoItem'])
const todoStore = useTodoStore()

const { updatingTodoId } = storeToRefs(todoStore)

const text = ref(props.todoItem.text)
const done = ref(props.todoItem.done)

const todoId = ref(props.todoItem.id)

const handleUpdateClick = () => {
  updatingTodoId.value !== todoId.value
    ? todoStore.startUpdating(todoId.value)
    : todoStore.updateTodoText(todoId.value, text)
}
</script>

<template>
  <div class="todo-item">
    <div class="todo-top">
      <h3
        v-if="updatingTodoId !== todoId"
        class="todo-title"
        :class="{
          done: props.todoItem.done
        }"
      >
        {{ text }}
      </h3>
      <form @submit.prevent="todoStore.updateTodoText(todoId, text)">
        <input v-if="updatingTodoId === todoId" v-model="text" class="updating-todo" type="text" />
      </form>
      <button class="remove-button" @click="todoStore.removeTodo(todoId)">
        <img class="trash-icon" src="../assets/trash-full-svgrepo-com.svg" />
      </button>
      <button @click="handleUpdateClick">update</button>
    </div>
    <input type="checkbox" v-model="done" @change="todoStore.updateTodoDone(todoId, done)" />
  </div>
</template>

<style scoped>
.todo-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
  padding-bottom: 4px;
  border-bottom: 1px dashed var(--bg-color);
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
