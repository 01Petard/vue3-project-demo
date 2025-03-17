<script setup lang="ts">
import {computed, reactive, ref, watch} from "vue";
import {type Persons} from '@/types'

let name = ref('Jane')
let age = ref(18)
let phone = '132123123'

function updateName() {
  name.value = 'Hzx'
}

function updateAge() {
  age.value = 20
}

function showPhone() {
  alert(phone)
}


let goods = reactive({
  name: '可乐',
  price: 20,
})

function IncrPrice() {
  goods.price += 10
}

let students = reactive([
  {
    name: 'stu1',
    age: 8,
  },
  {
    name: 'stu2',
    age: 9,
  },
  {
    name: 'stu3',
    age: 10,
  },
])

function UpdateStuName() {
  students[0].name = '黄泽校'
}

function ClearStuInfo() {
  Object.assign(students, [{}])
}


let firstName = ref('zhang')
let lastName = ref('san')

let fullName = computed({
  get() {
    return firstName.value + lastName.value
  },
  set(newValue) {
    const names = newValue.split(' ')
    firstName.value = names[0]
    lastName.value = names[1]
  }
})

function updateFullName() {
  fullName.value = 'h zx'
}

const unwatch = watch(fullName, (newValue, oldValue) => {
  console.log('fullName', newValue, oldValue)
  if (newValue === 'h zx') {
    unwatch()
  }
})


let props = withDefaults(defineProps<
        {
          list?: Persons
        }>(),
    {
      list: () =>
          [
            {
              name: 'zhangsan',
              age: 18,
              phone: '132123123',
            },
            {
              name: 'lisi',
              age: 19,
              phone: '132123123',
            },
            {
              name: 'wangwu',
              age: 20,
              phone: '132123123',
            },
          ]
    }
);

</script>

<template>
  <div class="person">
    <div>
      <h2>{{ name }}</h2>
      <h2>{{ age }}</h2>
      <button @click="updateName">修改姓名</button>
      <button @click="updateAge">修改年龄</button>
      <button @click="showPhone">查看电话</button>
    </div>


    <div>
      <h2>这是一个学生：{{ goods.name }}，年龄：{{ goods.price }}</h2>
      <button @click="IncrPrice">增加价格</button>
    </div>


    <div>
      <ul>
        <li v-for="student in students" :key=student.name>
          {{ student.name }}, {{ student.age }}
        </li>
      </ul>
      <button @click="UpdateStuName">修改名称</button>
      <button @click="ClearStuInfo">清除信息</button>
    </div>

    <div>
      姓：<input type="text" v-model="firstName"/><br>
      名：<input type="text" v-model="lastName"/><br>
      全名：<span>{{ fullName }}</span> <br>

      <button @click="updateFullName()">修改全名</button>
    </div>

    <div>
      <ul>
        <li v-for="p in props.list" :key=p.name>
          {{ p.name }}, {{ p.age }}
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped>
.person {
  background-color: aquamarine;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>