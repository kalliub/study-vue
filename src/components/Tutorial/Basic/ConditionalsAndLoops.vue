<script setup lang="ts">
import { ref } from 'vue';

  const show = ref(true);
  const list = ref([1,2,3])

  const toggleList = () => show.value = !show.value
  const pushItemToList = (item: number) => list.value.push(item);
  const popFromList = () => list.value.pop();
  const reverseList = () => list.value.reverse();
</script>

<template>
  <button @click="toggleList">Toggle List</button>
  <button @click="pushItemToList(list.length + 1)">Push Number</button>
  <button @click="popFromList">Pop Number</button>
  <button @click="reverseList">Reverse List</button>

  <ul v-if="show && list.length > 0">
    <li v-for="item of list" v-bind:key="item">{{ item }}</li>
  </ul>

  <p v-else-if="list.length">List is not empty, but hidden.</p>

  <p v-else>List is empty</p>
</template>