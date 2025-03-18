<script setup lang="ts">
import {onMounted, ref} from "vue";
import router from "@/router";

// 创建一个响应式的秒数变量
const seconds = ref(5);

onMounted(() => {
  // 每隔一秒钟减少一次秒数
  const intervalId = setInterval(() => {
    seconds.value--;
    if (seconds.value <= 0) {
      clearInterval(intervalId);
      router.push('/news');
    }
  }, 1000);
});
</script>

<template>
  <div>
    <h2>首页</h2>
    <p>这是首页内容。</p>
    <p>{{ seconds }}秒后跳转……</p>
  </div>
</template>

<style scoped>
/* 样式保持不变 */
</style>