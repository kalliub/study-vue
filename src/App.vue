<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPath = computed(() => route.path)
</script>

<template>
  <div id="app" class="page-body">
    <div v-if="currentPath !== '/'">
      <p><RouterLink to="/">Home</RouterLink></p>
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
.page-body {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
