<template>
  <div class="todo">
    <ToDoForm @add="addToDo" />
    <ToDoList :todoes="todoes" />
    <div>
      <button>All</button>
      <button>In progress</button>
      <button>Completed</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDoForm from "@/components/ToDoForm.vue";
import ToDoList from "@/components/ToDoList.vue";

export default defineComponent({
  components: {
    ToDoForm,
    ToDoList,
  },
  name: "ToDo",
  data() {
    return {
      todoes: [
        {
          id: 0,
          todo: "",
        },
      ],
    };
  },
  methods: {
    addToDo(todo: { id: number; todo: string }) {
      this.todoes.push(todo);
    },
  },
});
</script>
