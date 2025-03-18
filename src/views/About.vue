<script setup lang="ts">

import Category from "@/components/Category.vue";
import {reactive} from "vue";

let newsList = reactive([
  {id: 'asdftrfay01', title: '很好的抗癌食物', content: '西兰花'},
  {id: 'asdftrfay02', title: '如何一夜暴富', content: '学IT'},
  {id: 'asdftrfay03', title: '震惊，万万没想到', content: '明天是周一'}
]);

let imgsrc = 'https://img.yzcdn.cn/vant/cat.jpeg';

let videosrc = 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4';

</script>

<template>
  <div>
    <h2>关于</h2>
    <p>这是关于内容。</p>
  </div>

  <div class="content">

    <Category title="文字">
      <ul>
        <li v-for="news in newsList" :key="news.id">{{ news.title }}</li>
      </ul>
    </Category>

    <Category title="图片">
      <img :src="imgsrc"/>

    </Category>

    <Category title="视频">
      <video :src="videosrc" controls/>

    </Category>
  </div>


</template>

<style scoped>
.content {
  display: flex;
  justify-content: space-evenly;
}

img, video {
  width: 200px;
}

</style>