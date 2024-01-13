<script setup lang="ts">
import { ref } from 'vue'

const c = ref(0)
const f = ref(32)

const setC = (e: Event, newValue = +(e.target as HTMLInputElement).value) => {
  c.value = newValue
  f.value = newValue * (9 / 5) + 32
}

const setF = (e: Event, newValue = +(e.target as HTMLInputElement).value) => {
  f.value = newValue
  c.value = (newValue - 32) * (5 / 9)
}
</script>

<template>
  <div>
    <input type="number" :value="c" @change="setC" />
    Celsius =
    <input type="number" :value="f" @change="setF" />
  </div>
</template>

<style scoped></style>
