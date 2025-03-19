<script setup lang="ts">
import {ref} from 'vue';

const inputValue = ref('');
const tableData = ref([
  {name: 'John', age: 20, address: 'New York'},
  {name: 'Jane', age: 25, address: 'Los Angeles'},
  {name: 'Bob', age: 30, address: 'Chicago'}
]);
const form = ref({
  name: '',
  email: '',
  password: ''
});
const dialogVisible = ref(false);

const handleClick = () => {
  alert('Button clicked!');
};

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
  dialogVisible.value = false;
};

const openDialog = () => {
  dialogVisible.value = true;
};
</script>


<template>
  <div>
    <!-- 按钮 -->
    <el-button @click="handleClick">Click me</el-button>
    <!-- 输入框 -->
    <el-input v-model="inputValue" placeholder="Please input something"></el-input>
    <!-- 表格 -->
    <el-table :data="tableData">
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="age" label="Age"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
    </el-table>
    <!-- 表单 -->
    <el-button @click="openDialog">Open Form Dialog</el-button>
    <el-dialog :visible.sync="dialogVisible" title="Form Dialog">
      <template #content>
        <el-form :model="form">
          <el-form-item label="Name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="form.password" type="password"></el-input>
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="handleSubmit">Submit</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>


<style scoped>

</style>