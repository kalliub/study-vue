<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Hello World!')
const isRed = ref(true)
const color = ref("green")

const toggleRed = () => {
  isRed.value = !isRed.value
}

const toggleColor = () => {
  color.value = color.value === 'green' ? 'blue' : 'green'
}

</script>

<template>
  <h1>{{message}}</h1>

  <div class="page-body">
      <p>
        <span
          :title="message"
        >
          Hover your mouse over me for a few seconds to see my dynamically bound title!
        </span>
      </p>

      <p :class="{ red: isRed }" @click="toggleRed">
        This should be red... but click me to toggle it.
      </p>

      <p :style="{color}" @click="toggleColor">
        This should be green, and should toggle between green and blue on click.
      </p>
  </div>

</template>

<style scoped>
.red {
  color: red;
}

.page-body {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: fit-content;
}
</style>
