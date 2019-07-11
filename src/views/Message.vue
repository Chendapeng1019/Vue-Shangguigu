<template>
<div>
  <li v-for="(message,index) in messages" :key="message.id"><a href="">{{ message.title}}</a></li>
</div>
</template>

<script>
  export default {
    name: "Message",
    data() {
      return {
        messages: []
      }
    },
    mounted() {
      //模拟ajax请求从后台获取数据
      setTimeout(() =>{
        this.messages =[
          { id:1,title: 'message001'},
          { id:2,title: 'message002'},
          { id:3,title: 'message003'}
        ]
      },1000)
    }
  }
</script>

<style scoped>

</style>
