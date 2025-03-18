<script setup lang="ts">
import Zi from "@/components/Zi.vue";
import {ref} from "vue";
import emitter from "@/utils/emitter.ts";


// 监听事件
emitter.on("switchToy", (data: any) => {
  toy.value = data
})

// 自定义事件的实现
function xyz(data: any) {
  console.log('xyz', data);
}


let car = ref('奔驰');
let toy = ref('');
let computer = ref('联想笔记本电脑');

const message = ref('Hello from parent');

</script>

<template>
  <div class="fu">
    <h2>父组件</h2>
    <p>我是父组件</p>
    <button @click="emitter.emit('switchComputer', computer)">给儿子买电脑</button>
    <p v-show="toy">玩具: {{ toy }}</p>
  </div>

  <Zi class="zi1" :che="car" @haha="xyz"></Zi>

  <Zi class="zi2"></Zi>
</template>

<style scoped>
.zi1 {
  background-color: cadetblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.zi2 {
  background-color: cornflowerblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>