import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todoList: [],
    updatingTodoId: null,
    todoFilter: 'all'
  }),
  actions: {
    addTodo(todo) {
      this.todoList.push(todo)
    },
    removeTodo(id) {
      this.todoList = this.todoList.filter((t) => t.id !== id)
    },
    updateTodoText(id, text) {
      this.todoList.find((t) => t.id === id).text = text
      this.updatingTodoId = null
    },
    updateTodoDone(id, done) {
      this.todoList.find((t) => t.id === id).done = done
    },
    startUpdating(id) {
      this.updatingTodoId = id
    },
    setFilter(filter) {
      this.todoFilter = filter
    }
  },
  getters: {
    filteredTodoList() {
      if (this.todoFilter === 'done') {
        return this.todoList.filter((t) => t.done)
      }
      if (this.todoFilter === 'undone') {
        return this.todoList.filter((t) => !t.done)
      }
      return this.todoList
    }
  },
  persist: true
})
