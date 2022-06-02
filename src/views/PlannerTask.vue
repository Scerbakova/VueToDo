<template>
  <div class="planner__wrapper">
    <h1 class="title">Planner</h1>
    <div>
      <form @submit.prevent>
        <input
          v-model.trim="newTask"
          class="todo-input"
          placeholder="Write New Tasks"
          type="text"
          ref="input"
          v-focus
        />
        <button class="btn" @click="addTask">ADD</button>
      </form>
    </div>
    <div class="title" v-if="tasks.length < 1">No New Tasks Added Yet</div>
    <TransitionGroup name="list" tag="div">
      <div v-for="task in tasksFiltered" :key="task.id" class="todo-item">
        <div>
          <div class="one__task">
            <input
              class="checkbox"
              :checked="task.completed"
              @change="isDoneToDo(task)"
              type="checkbox"
            />
            <div
              v-if="!task.editing"
              @dblclick="editTask(task)"
              class="todo-item-label"
              :class="task.completed ? 'isdone' : 'notdone'"
            >
              {{ task.title }}
            </div>
            <div v-else>
              <input
                class="todo-input"
                type="text"
                v-model="task.title"
                @blur="doneEdit(task)"
                @keyup.enter="doneEdit(task)"
                @keyup.esc="cancelEdit(task)"
                ref="editInput"
                v-focusEdit
              />
              <button class="btn" @click="doneEdit(task)">Save</button>
            </div>
            <div>
              <button
                class="btn"
                @click="editTask(task)"
                v-if="task.title && !task.editing"
              >
                Edit
              </button>
              <button
                class="btn"
                @click="deleteTask(task)"
                v-if="task.title && !task.editing"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </TransitionGroup>
    <div class="filters">
      <button class="btn btn__all" @click="filter = 'All'">
        {{ filters[0] }}
      </button>
      <button class="btn btn__progress" @click="filter = 'In Progress'">
        {{ filters[1] }}
      </button>
      <button class="btn btn__completed" @click="filter = 'Completed'">
        {{ filters[2] }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlannerTask",
  data: () => {
    return {
      filters: ["All", "In Progress", "Completed"],
      newTask: "",
      idForNewTask: 2,
      beforeEditCache: "",
      filter: "All",
      tasks: [
        {
          id: 1,
          title: "Learn Vue",
          completed: false,
          editing: false,
        },
      ],
    };
  },
  computed: {
    tasksFiltered() {
      if (this.filter === "All") {
        return this.tasks;
      } else if (this.filter === "In Progress") {
        return this.tasks.filter((task) => !task.completed);
      } else if (this.filter === "Completed") {
        return this.tasks.filter((task) => task.completed);
      }
      return this.tasks;
    },
  },
  directives: {
    focusEdit: {
      mounted: (el) => {
        el.focus();
      },
    },
    focus: {
      mounted: (el) => {
        el.focus();
      },
    },
  },
  methods: {
    addTask() {
      if (this.newTask.trim().length == 0) {
        return;
      }
      this.tasks.push({
        id: this.idForNewTask,
        title: this.newTask,
        completed: false,
        editing: false,
      });
      this.newTask = "";
      this.idForNewTask++;
    },
    isDoneToDo(task: { id: number; title: string; completed: boolean }) {
      this.tasks.map((t) =>
        t.id === task.id ? (t.completed = !t.completed) : t.title
      );
    },
    editTask(task: { title: string; editing: boolean }) {
      this.beforeEditCache = task.title;
      task.editing = true;
    },
    doneEdit(task: { title: string; editing: boolean }) {
      if (task.title.trim() == "") {
        task.title = this.beforeEditCache;
      }
      task.editing = false;
    },
    cancelEdit(task: { title: string; editing: boolean }) {
      task.title = this.beforeEditCache;
      task.editing = false;
    },
    deleteTask(task: { id: number; title: string }) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    },
  },
});
</script>

<style>
@import "@/styles/PlannerStyle.scss";
</style>
