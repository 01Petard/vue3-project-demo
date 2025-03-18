<script setup lang="ts">
defineProps(['title'])
</script>

<template>
  <div class="category">
    <h2>{{ title }}</h2>
    <slot>默认内容</slot>
  </div>
</template>

<style scoped>
h2 {
  background-color: firebrick;
  text-align: center;
}

.category {
  background-color: cadetblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
}
</style>