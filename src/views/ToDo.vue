<template>
  <div class="todo">
    <ToDoForm @add="addToDo" />
    <ToDoList
      @isDoneToDo="isDoneToDo"
      @editToDo="editToDo"
      @deleteToDo="deleteToDo"
      :todos="todos"
    />
    <FiltersToDo
      @showAll="showAll"
      @showInProgress="showInProgress"
      @showComplted="showCompleted"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToDoForm from "@/components/ToDoForm.vue";
import ToDoList from "@/components/ToDoList.vue";
import FiltersToDo from "@/components/FiltersToDo.vue";

export default defineComponent({
  components: {
    ToDoForm,
    ToDoList,
    FiltersToDo,
  },
  name: "ToDo",
  data: () => {
    return {
      todos: [
        {
          id: Math.random(),
          todo: "Add ToDo",
          isEditing: false,
          isDone: false,
        },
      ],
    };
  },
  methods: {
    addToDo(todo: {
      id: number;
      todo: string;
      isEditing: boolean;
      isDone: boolean;
    }) {
      this.todos.push(todo);
    },
    deleteToDo(todo: { id: number; todo: string }) {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    },
    editToDo(todo: { id: number; todo: string; isEditing: boolean }) {
      this.todos.map((t) =>
        t.id === todo.id ? (t.isEditing = !t.isEditing) : t.todo
      );
    },
    isDoneToDo(todo: {
      id: number;
      todo: string;
      isEditing: boolean;
      isDone: boolean;
    }) {
      this.todos.map((t) =>
        t.id === todo.id ? (t.isDone = !t.isDone) : t.todo
      );
    },
    showAll() {
      return this.todos;
    },
    showInProgress() {
      return this.todos.filter((t) => t.isDone === false);
    },
    showCompleted() {
      return this.todos.filter((t) => t.isDone);
    },
  },
});
</script>
