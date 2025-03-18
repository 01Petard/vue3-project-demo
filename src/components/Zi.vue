<script setup lang="ts">

import emitter from "@/utils/emitter.ts";
import {ref} from "vue";


// 父子之间传递数据
defineProps(['che','modelValue'])

// 自定义事件
const emit = defineEmits(['haha'])
emit('haha', '孩子笑了')


// 监听事件
emitter.on("switchComputer", (data: any) => {
  computer.value = data
})

let computer = ref('')
let toy = ref('奥特曼')


</script>

<template>
  <div class="zi">
    <h2>子组件</h2>
    <p>我是子组件</p>
    <button @click="emitter.emit('switchToy', toy)">给爸爸玩具</button>
    <p v-show="computer">父给的电脑: {{ computer }}</p>
    <p v-show="che">父给的车: {{ che }}</p>
  </div>
</template>

<style scoped>

</style>