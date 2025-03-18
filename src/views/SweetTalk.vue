<script setup lang="ts">
import {useSweetStore} from "@/store/sweet.ts";

// // 初始化sweetTalk为响应式空数组
// const sweetTalk = reactive<string[]>([]);
//
// // 土味情话列表
// const talks = [
//   '你今天有点怪，哪里怪？怪好看的！',
//   '草莓、蓝莓、蔓越莓，你想我了没？',
//   '心里给你留了一块地，我的死心塌地'
// ];
//
// function getSweetTalk() {
//   // 随机获取一个索引
//   const randomIndex = Math.floor(Math.random() * talks.length);
//   // 获取对应索引的情话
//   const selectedTalk = talks[randomIndex];
//
//   // 添加到sweetTalk数组中
//   // 注意：这里没有检查重复性，如果你不想重复添加相同的情话，可以增加去重逻辑
//   sweetTalk.push(selectedTalk);
// }

const sweetStore = useSweetStore();

</script>

<template>
  <div>

    <button @click="sweetStore.getSweetTalkFromApi()">获取一句土味情话</button>
    <ul v-if="sweetStore.sweetTalk.length > 0">
      <li v-for="talk in sweetStore.sweetTalk" :key="talk">{{ talk }}</li>
    </ul>
    <br>
    <button @click="sweetStore.clearSweetTalk()">清空</button>
  </div>
</template>

<style scoped>
</style>