<template>
    <div id="root" >
        <input id="shuru" type="checkbox" v-model="todo.zhuang">
        <span v-show="!todo.indet">{{ todo.name }}</span>
        <input id="xougai" v-show="todo.indet"
               type="text"
               @blur="MyBlur(todo,$event)"
               ref="inputfl"
               :value="todo.name">
        <button id="delete" @click="Mydelete(todo.id)">删除</button>
        <button id="update" @click="Myupdate(todo)" v-show="!todo.indet">编辑</button>
    </div>
</template>
<script>
</script>
<script>
import 'animate.css'
export default {
    name:'MyItem',
    props:['todo'],
    methods: {
      Mydelete(id){
        this.$bus.$emit('Mydeletes',id);
      },
      Myupdate(todo){
          if(todo.hasOwnProperty('indet')){
              todo.indet=true;
          }else {
              this.$set(todo,'indet','true')
          }
          this.$nextTick(function () {
              this.$refs.inputfl.focus();
          })
      },
      MyBlur(todo,e){
          todo.indet=false;
          if(!e.target.value.trim())return
          this.$bus.$emit('Updatetodo',todo.id,e.target.value);
      }
    },
}
</script>

<style scoped>
#root{
    width: 860px;
    height: 60px;
    line-height: 60px;
    border: #757575 1px solid;
    border-bottom:none ;
    margin-left:20px ;
    margin-right: 20px;
}
#root:hover{
    background: #eee;
}
#root:hover button{
    display: block;
}
#shuru{
    margin-left: 20px;
    transform:scale(1.5);
}
#xougai{
    margin-left: 20px;
    height: 40px;
    width: 250px;
    font-size: 24px;
    border-radius: 5px;
    border: #757575 1px solid;
}
#xougai:focus{
    outline: none;
    border: #757575 1px solid;
}
span{
    padding-left: 20px;
    font-size: 24px;
}
button{
    font-size: 24px;
    float: right;
    display: none;
    height: 40px;
    border: none;
    background: #da4f49;
    margin-top: 10px;
    margin-left: 10px;
    padding: 0 20px;
    color: white;
    border-radius: 5px;
}

</style>