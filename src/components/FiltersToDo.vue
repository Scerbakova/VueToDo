<template>
  <div>
    <button @click="showAll()">
      {{ filters[0] }}
    </button>
    <button @click="showInProgress()">
      {{ filters[1] }}
    </button>
    <button @click="showCompleted()">
      {{ filters[2] }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["showAll", "showInProgress", "showCompleted"],
  data: () => {
    return {
      filters: ["All", "In Progress", "Completed"],
    };
  },
});
</script>
