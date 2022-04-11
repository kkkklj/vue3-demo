<script lang="ts">
//传送
import { ref,defineExpose } from 'vue';
const toastShow = ref(false);
const toggleToast = ({show,val = 'default val'}) => {
  toastShow.value = val;
  toastShow.value = show;
}
defineExpose({
  toggleToast
})
</script>
<template>
<teleport to="body">
  <div className="toast-wrap" v-show="toastShow">
    toast
  </div>
</teleport>
</template>
<style scoped>
.toast-wrap{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}
</style>