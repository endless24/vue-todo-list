<template>
  <h1 class="font-bold text-center mt-10 text-3xl">Todo List</h1>
  <div class="mt-3 flex justify-center items-center">
    <div
      class="rounded-lg border border-gray-300 overflow-y-auto overflow-x-hidden"
    >
      <InputField />
    </div>
  </div>
</template>

<script>
import InputField from './components/InputField.vue'

export default {
  components: {
    InputField,
  },
}
</script>
