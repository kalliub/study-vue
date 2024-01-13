<script setup lang="ts">
import { Basic, Practical, GUIs } from './components/Tutorial/index'
</script>

<template>
  <div class="page-body">
    <!-- <Basic.AttributesBindings /> -->
    <!-- <Basic.ConditionalsAndLoops /> -->
    <!-- <Basic.FormBindings /> -->
    <!-- <Basic.SimpleComponent /> -->

    <!-- <Practical.MarkdownEditor /> -->
    <!-- <Practical.FetchingData /> -->
    <!-- <Practical.GridSortFilter /> -->

    <!-- <GUIs.Counter /> -->
    <GUIs.TemperatureConverter />
  </div>
</template>

<style scoped>
.page-body {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
