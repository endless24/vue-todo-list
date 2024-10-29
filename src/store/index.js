import { createStore } from 'vuex'

const store = createStore({
  state: {
    todos: [
      {
        id: Math.random(),
        title: 'cooking egusi soup',
        checked: false,
        completed: false,
      },
      {
        id: Math.random(),
        title: 'lifting',
        checked: false,
        completed: false,
      },
      {
        id: Math.random(),
        title: 'praying',
        checked: false,
        completed: false,
      },
    ],
  },

  getters: {
    fetchTodos(state) {
      return state.todos
    },
  },

  mutations: {
    ADD_TODO(state, payload) {
      state.todos.push({
        id: Math.random(),
        title: payload.title,
        completed: false,
      })
    },

    DELETE_TODO(state, todoId) {
      state.todos = state.todos.filter(todo => todo.id !== todoId)
    },

    EDIT_TODO(state, { title, todoId }) {
      const todo = state.todos.find(todo => todo.id === todoId)
      console.log(todo)

      if (todo) {
        todo.title = title
      }
    },
  },

  actions: {
    addTodo({ commit }, payload) {
      commit('ADD_TODO', payload)
    },

    deleteTodo({ commit }, payload) {
      commit('DELETE_TODO', payload)
    },

    editTodo({ commit }, payload) {
      commit('EDIT_TODO', { todoId: payload.id, title: payload.title })
    },
  },
})

export default store
