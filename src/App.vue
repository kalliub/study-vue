<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div id="app" class="page-body">
    <Navbar />
    <RouterView />
  </div>
</template>

<style scoped>
.page-body {
  display: flex;
  flex-direction: column;
}
</style>
