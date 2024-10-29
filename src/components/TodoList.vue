<template>
  <ul class="my-8 p-1">
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="flex justify-between bg-gray-100 rounded-md my-2 p-3"
    >
      <span class="flex gap-x-6 items-center">
        <input
          type="checkbox"
          class="w-4 h-4 flex-none"
          v-model="todo.completed"
        />
        <span v-if="!isEditing(todo.id)" class="flex text-xl">
          {{ todo.title }}
        </span>
        <input
          v-else
          type="text"
          v-model="editingTitle"
          @keyup.enter="updateTodo(todo.id)"
          @blur="cancelEdit"
          class="border rounded-md px-2 py-2"
        />
      </span>
      <span class="flex gap-x-2">
        <button
          v-if="!isEditing(todo.id)"
          class="text-xs bg-green-500 border text-white rounded-md py-2 px-3"
          @click="startEdit(todo.title, todo.id)"
        >
          Edit
        </button>
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
      editingId: null, // Track the ID of the todo being edited
      editingTitle: '', // Store the title of the todo being edited
    }
  },
  computed: {
    ...mapGetters(['fetchTodos']),
    todos() {
      return this.fetchTodos.filter(todo => !todo.completed)
    },
  },

  methods: {
    ...mapActions(['deleteTodo', 'editTodo']),

    startEdit(title, id) {
      this.editingTitle = title // Set the title for editing
      this.editingId = id // Set the ID of the todo being edited
    },

    isEditing(id) {
      return this.editingId === id // Check if the current todo is being edited
    },

    updateTodo(id) {
      if (this.editingTitle.trim()) {
        this.editTodo({ id, title: this.editingTitle }) // Call Vuex action to update
      }
      this.cancelEdit() // Reset editing state
    },

    cancelEdit() {
      this.editingId = null // Reset the editing state
      this.editingTitle = '' // Clear the editing title
    },
  },
}
</script>
