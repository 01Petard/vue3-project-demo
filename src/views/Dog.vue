<script setup lang="ts">
import useDog from "@/hooks/useDog.ts";

const {dogList, getDog} = useDog();


</script>

<template>

  <div class="dog">
    <img
        v-for="(dog, index) in dogList"
        :key="index"
        :src="dog"
        :alt="`Dog ${index + 1}`"
    >
    <br>
    <button @click="getDog()">More Dog</button>
  </div>


</template>

<style scoped>
.dog {
  background-color: goldenrod;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

img {
  height: 100px;
  padding: 10px;
}
</style>