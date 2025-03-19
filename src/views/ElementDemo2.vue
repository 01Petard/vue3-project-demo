<script setup lang="ts">
import {computed, ref} from 'vue'
import {ElMessage, ElMessageBox} from 'element-plus'
import {Delete, Edit} from '@element-plus/icons-vue'
import {handleCurrentChange} from "element-plus/es/components/tree/src/model/util";

// 模拟数据
interface Student {
  studentId: string
  name: string
  age: number
  gender: 'M' | 'F'
  className: string
  enrollDate: Date
  lastLogin: Date
  status: 'active' | 'inactive' | 'pending'
}

const students = ref<Student[]>([
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  },
  {
    studentId: 'S1001',
    name: '张三',
    age: 18,
    gender: 'M',
    className: '高一(3)班',
    enrollDate: new Date('2023-09-01'),
    lastLogin: new Date('2023-10-05'),
    status: 'active'
  }
])

// 搜索表单
const searchForm = ref({
  keyword: '',
  dateRange: [] as string[],
})

// 状态映射
const statusColor = {
  active: 'success',
  inactive: 'danger',
  pending: 'warning'
} as const

const statusText = {
  active: '正常',
  inactive: '禁用',
  pending: '待审核'
}

// 分页参数
const pagination = ref({
  currentPage: 1,
  pageSize: 10
})

// 过滤和分页计算
const filteredData = computed(() => {
  return students.value.filter(student => {
    const keywordMatch =
        student.name.includes(searchForm.value.keyword) ||
        student.studentId.includes(searchForm.value.keyword)

    const dateMatch =
        searchForm.value.dateRange.length === 0 ||
        (student.enrollDate >= new Date(searchForm.value.dateRange[0]) &&
            student.enrollDate <= new Date(searchForm.value.dateRange[1]))

    return keywordMatch && dateMatch
  })
})

const paginatedData = computed(() => {
  const startIndex = (pagination.value.currentPage - 1) * pagination.value.pageSize
  const endIndex = startIndex + pagination.value.pageSize
  return filteredData.value.slice(startIndex, endIndex)
})

// 时间格式化
const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${date.toTimeString().slice(0, 8)}`
}

// 操作方法
const handleSearch = () => {
  pagination.value.currentPage = 1
}

const resetSearch = () => {
  searchForm.value = {
    keyword: '',
    dateRange: []
  }
  pagination.value.currentPage = 1
}

const handleSizeChange = () => {
  pagination.value.currentPage = 1
}

const handleEdit = (row: Student) => {
  ElMessage.info(`编辑学生: ${row.name}`)
  // 这里可以跳转到编辑页面
}

const handleDelete = (row: Student) => {
  ElMessageBox.confirm('确定删除该学生信息吗？', '警告', {
    type: 'warning'
  }).then(() => {
    students.value = students.value.filter(s => s.studentId !== row.studentId)
    ElMessage.success('删除成功')
  }).catch(() => {
  })
}
</script>


<template>
  <div class="container">
    <!-- 搜索表单 -->
    <el-card class="search-card">
      <el-form :model="searchForm" label-width="100px">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="学号/姓名">
              <el-input v-model="searchForm.keyword" placeholder="请输入" clearable/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="注册日期">
              <el-date-picker
                  v-model="searchForm.dateRange"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  value-format="YYYY-MM-DD"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" @click="handleSearch">搜索</el-button>
              <el-button @click="resetSearch">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <!-- 数据表格 -->
    <el-table
        class="student-table"
        :data="paginatedData"
        border
        stripe
    >
      <el-table-column
          prop="studentId"
          label="学号"
          width="160"
      />
      <el-table-column
          prop="name"
          label="姓名"
          width="120"
      />
      <el-table-column
          prop="age"
          label="年龄"
          width="80"
      />
      <el-table-column
          prop="gender"
          label="性别"
          width="80"
      >
        <template #default="scope">
          {{ scope.row.gender === 'M' ? '男' : '女' }}
        </template>
      </el-table-column>
      <el-table-column
          prop="className"
          label="班级"
          width="150"
      />
      <el-table-column
          prop="enrollDate"
          label="注册日期"
          width="180"
      >
        <template #default="scope">
          {{ formatDate(scope.row.enrollDate) }}
        </template>
      </el-table-column>
      <el-table-column
          prop="lastLogin"
          label="最后登录"
          width="180"
      >
        <template #default="scope">
          {{ formatDate(scope.row.lastLogin) }}
        </template>
      </el-table-column>
      <el-table-column
          prop="status"
          label="状态"
          width="100"
      >
        <template #default="scope">
          <el-tag :type="statusColor[scope.row.status]">
            {{ statusText[scope.row.status] }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="scope">
          <el-button
              type="primary"
              size="small"
              @click="handleEdit(scope.row)"
          >
            <el-icon>
              <Edit/>
            </el-icon>
          </el-button>
          <el-button
              type="danger"
              size="small"
              @click="handleDelete(scope.row)"
          >
            <el-icon>
              <Delete/>
            </el-icon>
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
          v-model:current-page="pagination.currentPage"
          v-model:page-size="pagination.pageSize"
          :page-sizes="[10, 20, 30, 50]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="filteredData.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>


<style scoped>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.search-card {
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.student-table {
  border-radius: 8px;
  width: 100%;
  max-width: 100%;
  margin: 20px 0;
  white-space: nowrap !important;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

:deep(.el-table th) {
  background-color: #f3f4f6;
  color: #303133;
}

:deep(.el-table--enable-row-hover .el-table__body tr:hover>td) {
  background-color: #eef5fe !important;
}
</style>