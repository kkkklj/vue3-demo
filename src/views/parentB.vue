<script setup>
//参数
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
const store = useStore();

const router = useRouter(),
  curRoute = router.currentRoute,
  query = curRoute.value.query,
  params = curRoute.value.params;

console.log('rouetr query->', query,'\nrouetr params->',params)
console.log('store count-->',store.state.count)
</script>
<template>b</template>