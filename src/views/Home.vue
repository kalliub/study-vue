<script setup lang="ts">
import Presentation from '@/components/Presentation.vue'
import basicRoutes from '@/router/basicRoutes'
import guisRoutes from '@/router/guisRoutes'
import practicalRoutes from '@/router/practicalRoutes'

const projects = [
  {
    title: 'Basic',
    routes: basicRoutes
  },
  {
    title: 'Practical',
    routes: practicalRoutes
  },
  {
    title: 'GUIs',
    routes: guisRoutes
  }
]
</script>

<template>
  <Presentation />

  <ul>
    <li v-for="{ title, routes } in projects" v-bind:key="title" style="list-style: none">
      <h2>{{ title }}</h2>
      <ul>
        <li v-for="{ path, name } in routes" v-bind:key="path">
          <RouterLink :to="path">{{ name }}</RouterLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
ul:first-of-type {
  margin: 0px;
}
</style>
