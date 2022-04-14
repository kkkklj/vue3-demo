<script setup>
//参数
import { useRouter,useRoute } from 'vue-router'
import { useStore } from 'vuex';
const store = useStore();

const router = useRouter(),
  curRoute = router.currentRoute,
  query = curRoute.value.query,
  params = curRoute.value.params;

  const route = useRoute();
console.log('rouetr query->', query,'\nrouetr params->',params,'\nroute',route.query)
console.log('store count-->',store.state)
</script>
<template>b</template>