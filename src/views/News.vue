<!-- views/NewsPage.vue -->
<template>
  <div class="page-container">
    <h2>最新新闻</h2>
    <el-table :data="newsList" style="width: 100%">
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="date" label="日期" width="180" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
const newsList = [
  { title: '系统升级公告', date: '2023-08-01' },
  { title: '新功能发布', date: '2023-08-05' }
]
</script>