<script setup lang="ts">
import {ref, watch} from 'vue';
import {useCountStore} from "@/store/count.ts";
import {storeToRefs} from "pinia";

const optionNumber = ref<number>(1);
const countStore = useCountStore();

// const sum = ref<number>(0);
// function add() {
//   const number = parseInt(optionNumber.value);
//   sum.value += number;
// }
//
// function minus() {
//   const number = parseInt(optionNumber.value);
//   sum.value -= number;
// }

countStore.$subscribe((mutation, state) => {
  console.log(mutation.events, state);
})


const {sum} = storeToRefs(countStore)

watch(
    sum,
    (newValue, oldValue) => {
      console.log('sum', newValue, oldValue)
    }
)


</script>


<template>
  <div>
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <select v-model="optionNumber">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <button @click="countStore.add(Number(optionNumber))">加</button>
    <button @click="countStore.minus(Number(optionNumber))">减</button>
  </div>
</template>


<style scoped>
</style>