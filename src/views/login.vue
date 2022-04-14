<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input v-model="form.name" placeholder="随便输点" />
    </el-form-item>
    <el-form-item label="地址">
      <el-select v-model="form.region" placeholder="随便选点">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="勾选协议">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="一条协议" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="">
      <el-button type="primary" @click="onSubmit">login</el-button>

      <el-popconfirm title="确定取消?" @confirm="confirmCancel">
        <template #reference>
          <el-button >Cancel</el-button>
        </template>
      </el-popconfirm>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import 'element-plus/es/components/message/style/css'
// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  type: [],
})

const onSubmit = () => {
  console.log('submit!', form)
}
const confirmCancel = () => {
  ElMessage({
    message: '取消',
    type: 'success',
  })
}
</script>