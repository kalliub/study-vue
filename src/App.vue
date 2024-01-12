<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Hello World!')

const reverseMessage = () => {
  message.value = message.value.split(' ').reverse().join(' ')
}

const notify = () => {
  alert("navigation was prevented.")
}

</script>

<template>
  <h1>{{message}}</h1>

  <div class="page-body">
      <button @click="reverseMessage">Reverse Message</button>
    
      <button @click="message += '!'">Append "!"</button>
    
      <a href="https://vuejs.org" target="_blank" @click.prevent="notify">
        A link with e.preventDefault()
      </a>
  </div>

</template>

<style scoped>
.page-body {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: fit-content;
}
</style>
