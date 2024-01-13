<script setup lang="ts">
import { ref } from 'vue'
import DemoGrid from './DemoGrid.vue'

const searchQuery = ref('')
const gridColumns = ['name', 'power']
const gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]
</script>

<template>
  <h1>Grid with Sort and Filter</h1>

  <form id="search">
    Search:
    <input name="query" v-model="searchQuery" />
  </form>

  <DemoGrid :filter-key="searchQuery" :columns="gridColumns" :data="gridData" />
</template>
