<script setup lang="ts">
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
  <div id="description">
    <h1>Kalliu learning Vue</h1>
    <p>This page is my personal path through learning Vue3.</p>
    <p>
      The examples here are the ones I found on the official
      <a target="_blank" href="https://vuejs.org/examples">Vue documentation</a>, so I followed the
      same path they did, trying to understand and reproduce the main features I already know using
      ReactJS.
    </p>
    <p>
      This website will not have great design or CSS, because I'm focusing on learning the Vue
      fundamentals.
    </p>
  </div>

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

#description {
  margin: 0px 16px;
  max-width: 800px;
}
</style>
