<template>
  <div>
    <input type="text" 
    placeholder="请输入计划，回车确定" 
    v-model="plan" 
    @keyup.enter="getvalue">
  </div>
</template>

<script>
export default {
  name:'MyHeader',
  data() {
    return {
      plan:''
    }
  },
  methods: {
    getvalue(){
      if(!this.plan)return ;
      const p={id:Date.now(),name:this.plan,zhuang:false};
      this.$emit('tianjia',p);
      this.plan='';

    }
  },
}
</script>

<style scoped>
div{
    width: 900px;
    margin-top: 20px;
    margin-bottom: 30px;
    text-align: center;
}

input{
    font-size: 22px;
    text-indent: 1em;
    width: 860px;
    height: 60px;
}
input:focus{
    outline:none;
    border-color:deepskyblue ;
    box-shadow: 0px 0px 10px deepskyblue ;
}
</style>