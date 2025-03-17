<script setup lang="ts">
defineProps(['id', 'title', 'content'])


</script>

<template>

  <ul>
    <li>{{ id }}</li>
    <li>{{ title }}</li>
    <li>{{ content }}</li>
  </ul>


</template>

<style scoped>

</style>