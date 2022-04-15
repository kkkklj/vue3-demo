<script setup>
//proxy 测试，在vite.config.js配置
import $http from '@/utils/axios'
import { reactive,onMounted } from 'vue'

const reqData = reactive({a:1})
onMounted(async () => {
  
  const _d = await $http({
    url: `/api/action/intf/cookbook/detail.do?id=1058&stage=1`,
    method: 'get'
  })
  const data = _d.data.data;
  Object.keys(data).map(k => {
    reqData[k] = data[k]
  })
})

</script>

<template>
  <el-row>
    <el-col
      v-for="(o, index) in reqData.recommends"
      :key="o"
      :span="8"
      :offset="index > 0 ? 2 : 0"
      class="proxy-col"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          :src="o.image"
          class="image"
        />
        <div style="padding: 14px">
          <span>{{o.name}}</span>
          <div class="bottom">
            <!-- <time class="time">{{ currentDate }}</time> -->
            <el-button type="text" class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<style scoped lang="less">
.proxy-col{
  &:nth-child(2n-1) {
    margin-left: 0;
  }
}
</style>