<template>
  <ul class="my-8 p-1">
    <li
      v-for="todo in completeTodos"
      :key="todo.id"
      class="flex justify-between bg-gray-100 rounded-md my-2 p-3"
    >
      <span>
        <span
          :class="todo.completed ? 'line-through' : 'flex'"
          v-if="todo.completed"
        >
          {{ todo.title }}
        </span>
      </span>
      <span>
        <button
          class="text-xs bg-red-500 text-white border rounded-md py-2 px-3"
          @click="deleteTodo(todo.id)"
        >
          Delete
        </button>
      </span>
    </li>
  </ul>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      newTodo: '',
    }
  },
  computed: {
    ...mapGetters(['fetchTodos']),
    completeTodos() {
      return this.fetchTodos.filter(todo => todo.completed)
    },
  },

  methods: {
    ...mapActions(['deleteTodo']),
  },
}
</script>
