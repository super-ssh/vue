<template>
  <div id="app">
    <MyHeader @tianjia="tianjia"></MyHeader>
    <MyList :todos="todos"></MyList>
    <MyFooter :todos="todos" @Dianji="Dianji" @Clean="Clean"></MyFooter>
  </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
export default {
  name: 'App',
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    tianjia(x){
      this.todos.unshift(x);
    },
    Mydeletes(id){
      for(let i=0 ; i<this.todos.length ;i++){
        if(this.todos[i].id===id){
          this.todos.splice(i,1);
        }
      }
    },
    Dianji(yn){
        for(let i=0 ; i<this.todos.length ;i++){
            this.todos[i].zhuang=yn;
        }
    },
    Clean(){
        for(let i=0 ; i<this.todos.length ;i++){
            if(this.todos[i].zhuang){
                this.todos.splice(i,1);
                i=-1;
            }
        }
        // this.todos = this.todos.filter(todo => !todo.zhuang)
    },
    Myupdate(id,value) {
        for(let i=0 ; i<this.todos.length ;i++){
            if(this.todos[i].id===id){
                this.todos[i].name=value;
            }
        }
    }

  },
  watch:{
     todos:{
         deep:true,
         handler(value){
             localStorage.setItem('todos',JSON.stringify(value));
         }
     }
  },
  mounted() {
     this.$bus.$on('Mydeletes',this.Mydeletes);
     this.$bus.$on('Updatetodo',this.Myupdate);
  },
  beforeDestroy() {
    this.$bus.$off('Mydeletes');
    this.$bus.$off('Updatetodo',this.Myupdate);
  },
    components: {
    MyHeader,
    MyFooter,
    MyList
  }
}
</script>

<style >
*{
    padding: 0;
    margin: 0;
}
#app{
    width: 900px;
    margin:20px auto;
    border-radius: 5px;
    border: #757575 1px solid;
}
</style>
