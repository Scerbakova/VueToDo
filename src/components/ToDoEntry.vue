<template>
  <div>
    <div v-if="todo.isEditing === true">
      <input
        :value="value"
        @input="$emit('inputValue', inputValue($event))"
        placeholder="edit"
        type="text"
      />
      <button>Save</button>
    </div>
    <div>
      <input @change="$emit('isDoneToDo', todo)" type="checkbox" />
      <span :class="todo.isDone ? 'isdone' : 'notdone'">{{ todo.todo }}</span>
      <button @click="$emit('editToDo', todo)" v-if="todo.todo">Edit</button>
      <button @click="$emit('deleteToDo', todo)" v-if="todo.todo">
        Delete
      </button>
    </div>
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
  methods: {
    inputValue(event: Event) {
      (event.target as HTMLInputElement).value;
    },
  },
};
</script>
<style>
.isdone {
  text-decoration: line-through;
}
</style>
