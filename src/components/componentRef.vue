<script setup>
//emit nextTick expose
import { nextTick,ref,getCurrentInstance } from 'vue';

const propsRef = defineProps({
  propVal: Number,
  propObj: Object
})
const emitRef = defineEmits(['emitVal']);

const compoInstance = getCurrentInstance();
console.log('组件实例->',compoInstance)



const valRef = ref(3)
async function emitFn(v) {
  v('emitVal',{
    val: valRef.value
  })
  await nextTick();
  valRef.value = propsRef.propVal;
}

function exposeFunc() {
  console.log('child expose fn ',exposeState.value,exposeVal,exposeObj)
}

const exposeState = ref('exposeState');
let exposeVal = 'exposeVal';
let exposeObj = {
  val:'exposeObj'
}

defineExpose({
  // emitFn
  exposeFunc,
  exposeState,
  exposeVal,
  exposeObj
})

const a = 1;
</script>

<template>
  <h5>基本类型</h5>
  <div class="prop-val" @click="propVal++">
    <!-- 子组件的prop属于父组件值的浅拷贝,符合基本/引用类型值修改的规律 -->
    <!-- 优先取父组件值，引用类型可在同引用下修改其中的值直接影响父组件 -->
    <br>
    parent count:{{propVal}}
    <button class="add-val" @click.stop="emitFn($emit)">
      emit excute double
    </button>
  </div>
  <h5>引用类型</h5>
  <div class="prop-obj" @click="propObj.parentVal+=' add'">
    parent obj val: {{propObj.parentVal}}
  </div>
  <h5>无法响应</h5>
  <button @click="a++">unreactive val:{{a}}</button>
</template>
<style scoped>
button{
  margin: 5px auto 0;
  display: block;
}
.prop-obj{
  margin-bottom: 20px;
}
</style>