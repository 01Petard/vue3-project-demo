<script setup lang="ts">
import {reactive} from 'vue';
import type {NewsInterface} from "@/types";
import router from "@/router";

// 模拟新闻数据
const newsList = reactive([
  {id: 'asdftrfay01', title: '很好的抗癌食物', content: '西兰花'},
  {id: 'asdftrfay02', title: '如何一夜暴富', content: '学IT'},
  {id: 'asdftrfay03', title: '震惊，万万没想到', content: '明天是周一'}
]);


const showDetail = (news: NewsInterface) => {
  router.push({
        name: 'xiangqing',
        params: {
          id: news.id,
          title: news.title,
          content: news.content
        }
      }
  )
}
</script>


<template>
  <div>
    <h2>新闻</h2>
    <!-- 导航区 -->
    <ul class="news-list">
      <li v-for="news in newsList" :key="news.id">
        <button @click="showDetail(news)">
          查看详情
        </button>
        <router-link
            :to="{
              name:'xiangqing',
              params:{
                id:news.id,
                title:news.title,
                content:news.content
            }}"
        >
          {{ news.title }}
        </router-link>
      </li>
    </ul>

    <!-- 展示区 -->
    <div>
      <router-view/>
    </div>
  </div>
</template>

<style scoped>

</style>
