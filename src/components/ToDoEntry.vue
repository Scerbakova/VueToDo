<template>
  <div>
    {{ todo.todo }}
    <button v-if="todo.todo">Edit</button>
    <button v-if="todo.todo">Delete</button>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
