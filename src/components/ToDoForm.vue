<template>
  <div>
    <form @submit.prevent>
      <div>
        <input v-model="todo.todo" type="text" placeholder="Add new task..." />
        <button @click="addToDo">ADD</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      todo: {
        id: 0,
        todo: "",
      },
    };
  },
  methods: {
    addToDo() {
      this.todo.id = Math.random();
      this.$emit("add", this.todo);
      this.todo = {
        id: 0,
        todo: "",
      };
    },
  },
});
</script>
