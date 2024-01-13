<script setup lang="ts">
import { ref } from 'vue';
import ConditionalsAndLoops from './components/ConditionalsAndLoops.vue';

const message = ref('Hello World!')
</script>

<template>
  <h1>{{message}}</h1>

  <div class="page-body">
      <!-- <AttributesBindings /> -->
      <ConditionalsAndLoops />
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
