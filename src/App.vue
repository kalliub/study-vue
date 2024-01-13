<script setup lang="ts">
import { ref } from 'vue';
import FormBindings from './components/FormBindings.vue';

const message = ref('Hello World!')
</script>

<template>
  <h1>{{message}}</h1>

  <div class="page-body">
      <!-- <AttributesBindings /> -->
      <!-- <ConditionalsAndLoops /> -->
      <FormBindings />
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
