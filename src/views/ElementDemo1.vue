<script setup lang="ts">
import {ref} from 'vue'
import {type MyFormData} from '@/types'


const formData = ref<MyFormData>({
  input: '',
  number: 0,
  select: '',
  virtualSelect: '',
  date: '',
  datetime: '',
  cascader: [],
  checkbox: [],
  radio: '',
  color: '#409EFF',
  tags: [],
  slider: 0,
  rate: 0,
  switch: false,
  time: ''
})

// 选项数据
const options = [
  {value: '1', label: '选项1'},
  {value: '2', label: '选项2'}
]

const largeOptions = Array.from({length: 1000}, (_, i) => ({
  value: `${i + 1}`,
  label: `选项 ${i + 1}`
}))

const cascaderOptions = [
  {
    value: 'province',
    label: '省份',
    children: [
      {value: 'zhejiang', label: '浙江'},
      {value: 'jiangsu', label: '江苏'}
    ]
  }
]

const submitForm = () => {
  console.log('提交数据:', formData.value)
}

const resetForm = () => {
  formData.value = {
    input: '',
    number: 0,
    select: '',
    virtualSelect: '',
    date: '',
    datetime: '',
    cascader: [],
    checkbox: [],
    radio: '',
    color: '#409EFF',
    tags: [],
    slider: 0,
    rate: 0,
    switch: false,
    time: ''
  }
}
</script>


<template>
  <el-form
      ref="formRef"
      :model="formData"
      label-width="120px"
      style="max-width: 800px; margin: 20px auto"
  >
    <!-- 基础输入组件 -->
    <el-form-item label="Input 输入框">
      <el-input v-model="formData.input" placeholder="请输入内容"/>
    </el-form-item>

    <el-form-item label="Input Number">
      <el-input-number v-model="formData.number" :min="1" :max="10"/>
    </el-form-item>

    <!-- 选择类组件 -->
    <el-form-item label="Select 选择器">
      <el-select v-model="formData.select" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Virtualized Select">
      <el-select
          v-model="formData.virtualSelect"
          :options="largeOptions"
          placeholder="请选择（虚拟滚动）"
      />
    </el-form-item>

    <!-- 日期时间组件 -->
    <el-form-item label="Date Picker">
      <el-date-picker
          v-model="formData.date"
          type="date"
          placeholder="选择日期"
      />
    </el-form-item>

    <el-form-item label="DateTime Picker">
      <el-date-picker
          v-model="formData.datetime"
          type="datetime"
          placeholder="选择日期时间"
      />
    </el-form-item>

    <!-- 选择器组件 -->
    <el-form-item label="Cascader 级联">
      <el-cascader
          v-model="formData.cascader"
          :options="cascaderOptions"
      />
    </el-form-item>

    <el-form-item label="Checkbox 多选">
      <el-checkbox-group v-model="formData.checkbox">
        <el-checkbox label="选项1"/>
        <el-checkbox label="选项2"/>
        <el-checkbox label="选项3"/>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="Radio 单选">
      <el-radio-group v-model="formData.radio">
        <el-radio label="选项1"/>
        <el-radio label="选项2"/>
      </el-radio-group>
    </el-form-item>

    <!-- 特殊输入组件 -->
    <el-form-item label="Color Picker">
      <el-color-picker v-model="formData.color"/>
    </el-form-item>

    <el-form-item label="Input Tag">
      <el-input-tag v-model="formData.tags"/>
    </el-form-item>

    <el-form-item label="Slider 滑块">
      <el-slider v-model="formData.slider"/>
    </el-form-item>

    <!-- 评分和时间选择 -->
    <el-form-item label="Rate 评分">
      <el-rate v-model="formData.rate"/>
    </el-form-item>

    <el-form-item label="Switch 开关">
      <el-switch v-model="formData.switch"/>
    </el-form-item>

    <el-form-item label="Time Picker">
      <el-time-picker
          v-model="formData.time"
          placeholder="选择时间"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>
