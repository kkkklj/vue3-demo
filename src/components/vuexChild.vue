<script setup>
import {computed, ref, toRefs} from 'vue'
import { useStore } from 'vuex';
import toast from './toast.vue'

const store = useStore();
const count = computed(() => store.state.count);
const state2 = toRefs(store.state)
const toastRef = ref(null);
function showToast() {
  const {toggleToast} = toastRef.value;
  toggleToast({
    show: true,
    val: 'toast 测试'
  })
}
function tfn() {
  store.commit('increment');
  console.log('count-->',count,'\nstate->',state2.count.value)
}
</script>
<template>
  <div @click="tfn">vuex child component count: {{count}},click++</div>
  <div>{{state2.count}}</div>
  <button @click="showToast">show toast</button>
  <div class="compo-toast">
    <toast ref="toastRef"></toast>
  </div>
</template>