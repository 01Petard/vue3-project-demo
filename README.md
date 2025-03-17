# 学习Vue3有感

> 之前虽然断断续续看了不少Vue的学习视频，但是从来没有系统性的去思考前端的一些问题，导致学习总是浅尝辄止。在经历过一个简单的[Vue2项目](https://github.com/01Petard/conc-admin)后，我开始对前端开发感兴趣，因此我决定这一次好好学习一下Vue3，其中简要记录一下我遇到的重要知识点。
>
> 学习视频：https://www.bilibili.com/video/BV1Za4y1r7KE

1. `setup`语法糖的出现，彻底改变了`script`部分的代码布局
2. `ref`和`reactive`的出现，改变了以往的基本类型和对象类型的响应式数据的修改方式
3. 如果需要对数据进行解构赋值，同时保持响应式数据，则可以使用`toRef()`和`toRefs()`，区别是`toRef()`一次只能拿一个值，`toRefs()`可以解构对象所有值
4. `computed`计算属性可以降低重复调用的次数，同时可以在里面使用`get`和`set`方法来调用值和设定值
5. `watch`支持深度监视和立即监视，可以监听一个`ref`、一个响应式对象、一个getter返回的值或多个数据源组成的数据
6. `watchEffect`可以全自动地监视响应式数据，不需要像`watch`那样指出需要监视的数据
7. 组件之间通信：
   1. 父传子：父组件通过组件标签的属性值传递值，子组件通过`defineProps<{}>()`获取，如果父组件没有传递值，但是子组件为了避免空数据可以在外面包一层`withDefaults`
   2. 子传父：

8. Vue2 和 Vue3 的生命周期对比

   | 阶段       | Vue2 生命周期钩子 | Vue3 生命周期钩子        | 变化说明                                                     |
   | ---------- | ----------------- | ------------------------ | ------------------------------------------------------------ |
   | **创建**   | `beforeCreate`    | **无**（改用 `setup()`） | 用 `setup()` 函数替代了 `beforeCreate` 和 `created`，两者的逻辑直接在 `setup` 中初始化 |
   |            | `created`         | **无**（改用 `setup()`） |                                                              |
   | **挂载**   | `beforeMount`     | `onBeforeMount`          | 改名                                                         |
   |            | `mounted`         | `onMounted`              | 改名                                                         |
   | **更新**   | `beforeUpdate`    | `onBeforeUpdate`         | 改名                                                         |
   |            | `updated`         | `onUpdated`              | 改名                                                         |
   | **销毁**   | `beforeDestroy`   | `onBeforeUnmount`        | **改名**：更准确描述组件卸载（unmount）而非“销毁”（destroy） |
   |            | `destroyed`       | `onUnmounted`            | **改名**：更准确描述组件卸载（unmount）而非“销毁”（destroy） |
   | ***其他*** | *`activated`*     | *`onActivated`*          | *`<keep-alive>` 激活时调用，名称改为 `onActivated`（组合式 API）* |
   |            | *`deactivated`*   | *`onDeactivated`*        | *`<keep-alive>` 停用时调用，名称改为 `onDeactivated`*        |
   |            | *`errorCaptured`* | *`onErrorCaptured`*      | *捕获子组件错误，名称改为 `onErrorCaptured`*                 |
   | ***调试*** | ***无***          | *`onRenderTracked`*      | *调试用钩子，追踪谁触发了渲染（如依赖变化）*                 |
   |            | ***无***          | *`onRenderTriggered`*    | *调试用钩子，追踪渲染触发的具体原因（如数据变化）*           |

9. Vue2 和 Vue3 的生命周期执行顺序对比

   - 父子组件挂载顺序一致：
     - 父组件的 `setup()` → 父 `onBeforeMount` → 子组件 `setup()` → 子 `onBeforeMount` → 子 `onMounted` → 父 `onMounted`。

   - 更新阶段顺序：
     - `onBeforeUpdate` → 数据更新 → `onUpdated`。

10.  `router`路由 Vue2 和 Vue3 差不多，重点学习一下编程式导航就行了，`router-link`用得比较少
11.  `Pinia`，这是我第一次学习，之前我只了解`vuex`，但是目前好像都用`pinia`来作为集中式状态管理，`pinia`主要用于全局参数、组件之间通信等等
12.  如果需要对`Pinia`的数据进行解构赋值，同时保持响应式数据，则可以使用`storeToRefs()`，不推荐用`toRefs()`
12. `Pinia`中同样有监听的功能，可以用`$subscribe`，但是为什么不用解构赋值+`storeToRefs()`将数据提取出来后，再用`watch`监听呢？
12. 

# vue-project-demo

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```
