<script setup>
import {computed} from 'vue'
import { useStore } from 'vuex';
import toast from './toast.vue'

const store = useStore();
const count = computed(() => store.state.count);
</script>
<template>
  <div @click="store.commit('increment')">vuex child component count: {{count}},click++</div>
  <div class="compo-toast">
    <toast></toast>
  </div>
</template>