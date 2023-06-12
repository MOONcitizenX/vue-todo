<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../store/todoStore'

const props = defineProps(['todoItem'])
const todoStore = useTodoStore()
const text = ref(props.todoItem.text)
const done = ref(props.todoItem.done)
</script>

<template>
  <div class="todo-item">
    <div class="todo-top">
      <h3
        v-if="todoStore.updatingTodoId !== props.todoItem.id"
        class="todo-title"
        :class="{
          done: props.todoItem.done
        }"
      >
        {{ text }}
      </h3>
      <form @submit.prevent="todoStore.updateTodoText(props.todoItem.id, text)">
        <input
          v-if="todoStore.updatingTodoId === props.todoItem.id"
          v-model="text"
          class="updating-todo"
          type="text"
        />
      </form>
      <button class="remove-button" @click="todoStore.removeTodo(props.todoItem.id)">
        <img class="trash-icon" src="../assets/trash-full-svgrepo-com.svg" />
      </button>
      <button @click="todoStore.startUpdating(props.todoItem.id)">update</button>
    </div>
    <input
      type="checkbox"
      v-model="done"
      @change="todoStore.updateTodoDone(props.todoItem.id, done)"
    />
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
