<script setup lang="ts">
type TodoItemProps = {
  todo: {
    id: number
    text: string
  }
}
const props = defineProps<TodoItemProps>()
</script>

<template>
  <li>{{ todo.text }}</li>
</template>
