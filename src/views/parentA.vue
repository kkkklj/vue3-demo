<script setup>
import { ref,onMounted } from 'vue'
import {useRouter} from 'vue-router'
import comRef from '../components/componentRef.vue'
import empty from '../components/empty.vue'
const t = defineProps({
  msg: String
})
const childrenRef = ref(null);
//必须在setup中使用，函数里也不行
const router = useRouter();


onMounted(() => {
  console.log('child')
  console.log(childrenRef);
  console.log(childrenRef.value);
})

let count = ref(3);//响应式
const childPropObj = ref({parentVal: 'test child Object prop'});

function comRefEmit(val) {
  count.value += val.val;
  console.log(childrenRef.value);
}



function testExpose() {
  //子组件expose出来的变量/引用，必须要在mounted之后才能拿到
  console.log('-----------------------expose-----------------------');
  let {exposeFunc,exposeState,exposeVal,exposeObj} = childrenRef.value;
  console.log(exposeState)//被结构出来的只是个副本
  console.log(exposeVal)
  console.log(exposeObj)
  exposeFunc();
  //父组件可以直接修改子组件的状态
  childrenRef.value.exposeState = 'state change';
  //父组件修改子组件变量,可以发现子组件传递过来的变量是该变量的浅拷贝
  childrenRef.value.exposeVal = 'val change';
  childrenRef.value.exposeObj.val = 'obj change';
}

function toPageB() {
  
  router.push({
    name:'parentB',
    params: { username: 'posva' },
    query: { val:1 }
  })
}
</script>

<template>
  <h2>父组件状态</h2>
  <button type="button" @click="count++">count is: {{ count }}，click ++</button>
  <button @click="childPropObj.parentVal+=' add'">parent obj val is: {{childPropObj.parentVal}}</button>
  <h2>组件传参</h2>
  <comRef :propVal="count" @emitVal="comRefEmit" :propObj="childPropObj" ref="childrenRef"></comRef>

  <empty></empty>
  <h2>子组件暴露</h2>
  <div>
    <button @click="testExpose">test expose</button>
  </div>
  
  <h2>to pageB</h2>
  <button @click="toPageB">navigate</button>
  <!-- <h1>{{ msg }}</h1> -->


  
</template>

<style scoped>
a {
  color: #42b983;
}
button{
  margin: 5px auto 0;
  display: block;
}
</style>
