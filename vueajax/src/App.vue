<template>
  <div id="app">
      <button @click="getStudents">点我获取学生数据</button>
      <button @click="getCar" >点我获取汽车数据</button>
      <button>实验</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'App',
    methods:{
      getStudents(){
          axios.get('http://localhost:8080/jojo/students').then(
              response => {
                  console.log('请求成功了',response.data)
              },
              error => {
                  console.log('请求失败了',error.message)
              }
          )
      },
      getCar(){
          axios.get('http://localhost:8080/atguigu/cars').then(
              response => {
                  console.log('请求成功了',response.data)
              },
              error => {
                  console.log('请求失败了',error.message)
              }
          )
      }
    }

}
</script>

