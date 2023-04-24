<template>
  <div>
      <transition-group class="animate__animated animate__bounce"
      enter-active-class="animate__bounceIn" leave-active-class="animate__bounceOut">
          <MyItem v-for="todo of todos" :key="todo.id"  :todo="todo"></MyItem>
      </transition-group>
  </div>
</template>
<script>
</script>
<script>
import MyItem from './MyItem.vue';
import 'animate.css';
export default {

    name:'MyList',
    components:{
        MyItem
    },
    props:['todos'],
}
</script>

<style scoped>

</style>