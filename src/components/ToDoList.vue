<template>
  <ToDoEntry :todo="todo" :key="todo.id" v-for="todo in todoes"></ToDoEntry>
</template>
<script lang="ts">
import ToDoEntry from "./ToDoEntry.vue";
export default {
  props: {
    todoes: {
      type: Array,
      required: true,
    },
  },
  components: { ToDoEntry },
};
</script>
