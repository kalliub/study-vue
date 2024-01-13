<script setup lang="ts">
import { ref } from 'vue'
import SimpleComponent from './components/SimpleComponent/SimpleComponent.vue'

const message = ref('Hello World!')
</script>

<template>
  <h1>{{ message }}</h1>

  <div class="page-body">
    <!-- <AttributesBindings /> -->
    <!-- <ConditionalsAndLoops /> -->
    <!-- <FormBindings /> -->
    <SimpleComponent />
  </div>
</template>

<style scoped>
.page-body {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 200px;
}
</style>
