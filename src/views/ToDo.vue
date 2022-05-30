<template>
  <div class="todo">
    <form @submit.prevent>
      <div>
        <input
          @input="todo = $event.target.value"
          :value="todo"
          type="text"
          placeholder="Add new task..."
        />
        <button @click="addToDo()">ADD</button>
      </div>
    </form>
    <div :key="todo.id" v-for="todo in todoes">
      <div>{{ todo.todo }}</div>
    </div>
    <div>
      <button>All</button>
      <button>In progress</button>
      <button>Completed</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToDo",
  data() {
    return {
      todoes: [
        {
          id: 0,
          todo: "",
        },
      ],
      todo: "",
    };
  },
  methods: {
    addToDo() {
      const newtodo = {
        id: Date.now(),
        todo: this.todo,
      };
      this.todoes.push(newtodo);
      this.todo = "";
    },
  },
});
</script>
