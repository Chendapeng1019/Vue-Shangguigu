<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="addItem"
    />
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  props: {
    // addItems: Function,
  },
  data() {
    return {
      title: ""
    }
  },
  methods: {
    addItem(){
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
     // this.addItems(todo)
      //触发自定义事件：addTodo
      this.$emit('addItems',todo)
      //4.清除输入
      this.title = ''
    }
  }
};
</script>

<style scoped></style>
