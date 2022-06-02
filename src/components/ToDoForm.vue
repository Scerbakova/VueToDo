<template>
  <div>
    <form @submit.prevent>
      <div>
        <input
          v-model.trim="todo.todo"
          type="text"
          placeholder="Add new task..."
        />
        <button @click="addToDo">ADD</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => {
    return {
      todo: {
        id: Math.random(),
        todo: "",
        isEditing: false,
        isDone: false,
      },
    };
  },
  methods: {
    addToDo() {
      this.todo.id = Math.random();
      this.$emit("add", this.todo);
      this.todo = {
        id: Math.random(),
        todo: "",
        isEditing: false,
        isDone: false,
      };
    },
  },
});
</script>
