<template>
  <div class="grid md:grid-cols-2 divide-x-2 w-screen">
    <form
      @submit.prevent="handleSubmit"
      class="rounded-tl-lg rounded-tr-lg col-span-1"
    >
      <div class="flex gap-x-4 py-6 px-2 bg-gray-100">
        <input
          type="text"
          class="border w-full rounded-md outline-none px-3"
          v-model="newTodo"
          placeholder="Enter new todo"
        />
        <button class="border py-3 p-5 rounded-md bg-blue-500 text-white">
          Submit
        </button>
      </div>
      <div>
        <todo-list />
      </div>
    </form>

    <div class="col-span-1 md:text-center text-xl">
      <h1 class="p-[33px] text-2xl bg-gray-100">completed Todo</h1>
      <div>
        <completed-todos />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CompletedTodos from './CompletedTodos.vue'
import TodoList from './TodoList.vue'

export default {
  components: {
    TodoList,
    CompletedTodos,
  },

  data() {
    return {
      newTodo: '',
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    handleSubmit() {
      if (this.newTodo.trim()) {
        this.addTodo({ title: this.newTodo })
      }
      this.newTodo = ''
    },
  },
}
</script>
