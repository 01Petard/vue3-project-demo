<script setup lang="ts">
import {onMounted} from "vue";
import router from "@/router";

onMounted(() => {
  setTimeout(() => {
    router.push('/news')
  },1000)


})


</script>

<template>
  <div>
    <h2>首页</h2>
    <p>这是首页内容。</p>
  </div>
</template>

<style scoped>

</style>