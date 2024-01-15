<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPath = computed(() => route.path)
</script>

<template>
  <div id="navbar">
    <h1>{{ route.name }}</h1>
    <RouterLink v-if="currentPath !== '/'" to="/">Back to Home</RouterLink>
  </div>
</template>

<style scoped>
#navbar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

#navbar h1 {
  font-size: medium;
}
</style>
