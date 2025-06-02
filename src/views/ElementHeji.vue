<script setup lang="ts" xmlns="">
import Button from "@/components/Button.vue";
import ButtonDetail from "@/components/ButtonDetail.vue";
import Link from "@/components/Link.vue";
import Layout from "@/components/Layout.vue";
import Container from "@/components/Container.vue";
// import ContrainerExam from "@/components/ContrainerExam.vue";
import Radio from "@/components/Radio.vue";
import Checkbox from "@/components/Checkbox.vue";
import Input from "@/components/Input.vue";
import Select from "@/components/Select.vue";
import Switch from "@/components/Switchs.vue";
import DatePrickers from "@/components/DatePrickers.vue";
import Uploads from "@/components/Uploads.vue";
import Form from "@/components/Form.vue";
import Messages from "@/components/Messages.vue";
import Tables from "@/components/Tables.vue";
import {Upload} from "@element-plus/icons-vue";

</script>

<template>
  <div id="app">
    <hr>
    <h2>点我显示button</h2>
    <Button/>
    <hr>
    <h2>按钮组件的详细使用</h2>
    <ButtonDetail/>
    <hr>
    <h2>文字链接组件</h2>
    <Link/>
    <hr>
    <h2>布局组件的使用</h2>
    <Layout/>
    <hr>
    <h2>容器布局组件的使用</h2>
    <Container/>
<!--    <hr>-->
<!--    <h2>容器布局组件实例</h2>-->
<!--    <ContainerExam/>-->
    <hr>
    <h2>radio组件的使用</h2>
    <Radio/>
    <hr>
    <h2>checkbox组件的使用</h2>
    <Checkbox/>
    <hr>
    <h2>input组件的使用</h2>
    <Input/>
    <hr>
    <h2>Select组件的使用</h2>
    <Select/>
    <hr>
    <h2>switch组件的使用</h2>
    <Switch/>
    <hr>
    <h2>DatePicker组件的使用</h2>
    <DatePickers/>
    <hr>
    <h2>Upload组件的使用</h2>
    <Upload/>
    <hr>
    <h2>Form组件的使用</h2>
    <Form/>
    <hr>
    <h2>Message组件的使用</h2>
    <Msg/>
    <hr>
    <h2>Table组件的使用</h2>
    <Table/>
    <hr>
  </div>
</template>

<style scoped>


</style>