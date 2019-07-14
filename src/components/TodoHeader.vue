<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="addTodo"
    />
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  data() {
    return {
      title: ""  //组件内部使用的状态，不存在共享的问题 -->不需要使用vuex管理
    }
  },
  methods: {
    addTodo(){
      //1.检查 输入的合法性
      let title = this.title.trim()
      if(!title){
        alert("必须输入")
        return
      }
      //2.根据输入生成todo对象
      let todo ={
        title: this.title,
        complete: false
      }
      //3.添加到todos
      this.$store.dispatch('addTodo',todo)
      //4.清除输入
      this.title = ''
    }
  }
};
</script>

<style scoped></style>
