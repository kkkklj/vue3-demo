<script setup>
import vuexChild from './vuexChild.vue'
import { useStore } from 'vuex';
const store = useStore();
</script>
<template>
  <div>
    empty
  </div>
  <div>parent component count: {{store.state.count}}</div>
  <vuexChild></vuexChild>
</template>