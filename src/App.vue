<template>
  <div class="app__wrapper">
    <nav class="navigation__bar">
      <router-link class="link" to="/">ToDo</router-link> |
      <router-link class="link" to="/services">Services</router-link> |
      <router-link class="link" to="/planner">PlannerTask</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/styles/App.scss";
</style>
