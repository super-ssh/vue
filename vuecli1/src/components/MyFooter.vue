<template>
  <div v-show="todos.length">
      <input type="checkbox" v-model="Peidui" style="transform:scale(1.5)">
      <span>已完成{{YiDian}}/全部{{todos.length}}</span>
      <button @click="CleanAll">清除勾选</button>
  </div>
</template>
<script></script>
<script>
export default {
    name:'MyFooter',
    props:['todos'],
    computed:{
        YiDian(){
            let sum=0;
            for(let i=0;i<this.todos.length;i++){
                if(this.todos[i].zhuang){
                    sum++;
                }
            }
            return sum;
        },
        Peidui:{
          get(){
              return this.YiDian===this.todos.length && this.todos.length>0;
          } ,
          set(value){
              this.$emit('Dianji',value);
              // this.Dianji(value);
          }
        },
    },
    methods:{
        CleanAll(){
            // this.Clean();
            this.$emit('Clean')
        }
    }
}
</script>

<style scoped>
div{
    width: 860px;
    height: 90px;
    line-height: 90px;
    margin-left: 20px;
    margin-right: 20px;
    border-top: #757575 1px solid;
}
input{
    display: inline-block;
    margin-left: 20px;
}
span{
    padding-left: 50px;
    font-size: 24px;
}
button{
    float: right;
    width: 188px;
    height: 50px;
    font-size: 24px;
    margin-top: 20px;
    border: none;
    background: #da4f49;
    color: white;
    border-radius: 5px;
}
</style>