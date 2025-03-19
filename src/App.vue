<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import {ArrowDown, Bell, Clock, SwitchButton, User} from "@element-plus/icons-vue";

const route = useRoute()

// 添加路由监听确保正确刷新
watch(
    () => route.path,
    (newVal) => {
      console.log('路由变化:', newVal) // 调试用
    }
)

// 时间显示逻辑
const currentTime = ref('')
let timer: number

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).replace(/\//g, '-')
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})

// 用户状态逻辑（示例）
const userName = ref('管理员')
const isLoggedIn = ref(true)
const unreadMessages = ref(3)

const handleLogout = () => {
  // 退出登录逻辑
  isLoggedIn.value = false
}
</script>


<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部栏区域 -->
      <el-header class="header-container">
        <div class="header-content">
          <!-- 左侧系统名称 -->
          <div class="system-info">
            <span class="system-name">信息管理系统后台</span>
          </div>

          <!-- 右侧功能区 -->
          <div class="right-area">
            <!-- 时间显示 -->
            <div class="time-display">
              <el-icon>
                <Clock/>
              </el-icon>
              <span>{{ currentTime }}</span>
            </div>

            <!-- 消息通知 -->
            <el-badge :value="unreadMessages" class="message-badge">
              <el-button circle plain>
                <el-icon :size="20">
                  <Bell/>
                </el-icon>
              </el-button>
            </el-badge>

            <!-- 用户信息 -->
            <div class="user-info" v-if="isLoggedIn">
              <el-avatar :size="36" :icon="User" class="user-avatar"/>
              <div class="user-detail">
                <span class="user-name">{{ userName }}</span>
              </div>
              <el-dropdown trigger="click">
                <el-button circle plain>
                  <el-icon>
                    <ArrowDown/>
                  </el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item divided @click="handleLogout">
                      <el-icon>
                        <SwitchButton/>
                      </el-icon>
                      退出登录
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>

            <!-- 未登录状态 -->
            <div class="login-area" v-else>
              <el-button type="primary" link>登录</el-button>
              <el-button type="info" link>注册</el-button>
            </div>
          </div>
        </div>
      </el-header>


      <!-- 主内容区域 -->
      <el-container class="content-main">
        <!-- 侧边栏区域 -->
        <el-aside width="240px" style="background: #f0f2f5; padding: 20px">
          <el-menu
              router
              :default-active="$route.path"
              class="side-menu"
          >
            <el-menu-item index="/home">
              <span>首页</span>
            </el-menu-item>

            <el-menu-item index="/news">
              <span>新闻中心</span>
            </el-menu-item>


            <el-menu-item index="/about">
              <span>关于我们</span>
            </el-menu-item>

            <el-menu-item index="/person">
              <span>人员信息</span>
            </el-menu-item>

            <el-menu-item index="/dog">
              <span>狗狗图鉴</span>
            </el-menu-item>


            <el-menu-item index="/sum">
              <span>求和</span>
            </el-menu-item>


            <el-menu-item index="/sweet">
              <span>土味情话</span>
            </el-menu-item>

            <el-menu-item index="/fuzi">
              <span>组件通信</span>
            </el-menu-item>

            <el-menu-item index="/demo1">
              <span>Element Demo1</span>
            </el-menu-item>

            <el-menu-item index="/demo2">
              <span>Element Demo2</span>
            </el-menu-item>


          </el-menu>
        </el-aside>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>


    </el-container>
  </div>
</template>


<style scoped>

.content-main {
  padding: 20px;
  background: #ffffff;
  height: 100%;
  overflow: auto;
}

/* 保持原有其他样式不变 */
.common-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header-container {
  height: 64px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #ebeef5;
  padding: 0 24px;
}

.header-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.system-name {
  font-size: 20px;
  font-weight: 600;
  color: #303133;
  letter-spacing: 1px;
}

.right-area {
  display: flex;
  align-items: center;
  gap: 24px;
}

.time-display {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #606266;
  font-size: 14px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 12px;
}

.user-avatar {
  background-color: #409eff;
}

.user-name {
  font-weight: 500;
  color: #303133;
}

.login-area {
  display: flex;
  gap: 12px;
}

.common-layout {
  height: 100vh;
}

.side-menu {
  height: 100%;
  border-right: none;
}

</style>



