<script setup lang="ts">

</script>


<template>
  <div id="app">
    <header class="header">
      <h1 class="title">Vue路由测试</h1>
    </header>
    <nav class="nav">
      <router-link to="/home" class="nav-link">首页</router-link>
      <router-link to="/news" class="nav-link">新闻</router-link>
      <router-link to="/about" class="nav-link">关于</router-link>
      <router-link :to="{name:'人'}" class="nav-link">人的信息</router-link>
      <router-link :to="{path:'/dog'}" class="nav-link">狗图片</router-link>
      <router-link to="/sum" class="nav-link">求和</router-link>
      <router-link to="/sweet" class="nav-link">土味情话</router-link>
      <router-link to="/fuzi" class="nav-link">组件通信emitter</router-link>
    </nav>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>


<style scoped>
.header {
  background: linear-gradient(90deg, #666, #fff);
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 24px;
  color: #333;
}

.nav {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.nav-link {
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #666;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #888;
}

.content {
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: cadetblue 10px  10px;
  padding: 40px;
  margin: 20px 100px 0 100px;
}
</style>