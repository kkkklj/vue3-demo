<script setup>
import {computed} from 'vue'
import { useStore } from 'vuex';

const store = useStore();
const count = computed(() => store.state.count);
</script>
<template>
  <div @click="store.commit('increment')">vuex child component count: {{count}},click++</div>
  
</template>