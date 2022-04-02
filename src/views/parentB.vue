<script setup>
//参数
import { useRouter } from 'vue-router'
const router = useRouter(),
  curRoute = router.currentRoute,
  query = curRoute.value.query,
  params = curRoute.value.params;

console.log('rouetr query->', query,'\nrouetr params->',params)
</script>
<template>b</template>