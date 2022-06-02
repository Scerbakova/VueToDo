<template>
  <div v-if="todos.length < 1">No todos Added yet</div>
  <ToDoEntry
    @deleteToDo="$emit('deleteToDo', todo)"
    @editToDo="$emit('editToDo', todo)"
    @isDoneToDo="$emit('isDoneToDo', todo)"
    :todo="todo"
    :key="todo.id"
    v-for="todo in todos"
  >
  </ToDoEntry>
</template>
<script lang="ts">
import ToDoEntry from "./ToDoEntry.vue";
export default {
  emits: ["deleteToDo", "editToDo", "isDoneToDo"],
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  components: { ToDoEntry },
};
</script>
