<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'

const elapsed = ref(0)
const duration = ref(15 * 1000)

let lastTime: number
let handle: number

const update = () => {
  elapsed.value = performance.now() - lastTime
  if (elapsed.value >= duration.value) {
    cancelAnimationFrame(handle)
  } else {
    handle = requestAnimationFrame(update)
  }
}

const reset = () => {
  elapsed.value = 0
  lastTime = performance.now()
  update()
}

const progressRate = computed(() => Math.min(elapsed.value / duration.value, 1))

reset()

onUnmounted(() => {
  cancelAnimationFrame(handle)
})
</script>

<template>
  <div class="bg">
    <label>
      Elapsed Time:
      <progress :value="progressRate" />
    </label>

    <div>{{ (elapsed / 1000).toFixed(1) }}s</div>

    <div>
      Duration:
      <input type="range" v-model="duration" min="1" max="30000" />
      {{ (duration / 1000).toFixed(1) }}s
    </div>

    <button @click="reset">Reset</button>
  </div>
</template>

<style scoped>
.bg {
  background-color: lightgray;
  padding: 8px;
}

.elapsed-container {
  width: 300px;
}

.elapsed-bar {
  background-color: red;
  height: 10px;
}
</style>
