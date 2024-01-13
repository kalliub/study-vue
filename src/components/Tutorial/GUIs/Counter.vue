<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="container">
    <span>Count: {{ count }}</span>

    <button @click="count++">Increment</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 16px;
}
</style>
