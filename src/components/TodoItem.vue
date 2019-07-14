<template>
  <li @mouseenter="handleShow(true)" @mouseleave="handleShow(false)" :style="{ background: bgColor}">
    <input type="checkbox" v-model="todo.complete" />
    <span>{{ todo.title }}</span>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem(index)">删除</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object,
    index: Number
  },
  data(){
    return {
      bgColor: 'white', //默认的背景颜色
      isShow: false // 按钮默认是否显示
    }
  },
  methods: {
    handleShow(isEnter){
      if(isEnter){
        this.bgColor = '#aaaaaa'
        this.isShow = true
      }else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    deleteItem(index){
      let {todo} = this
      if(window.confirm(`是否删除${todo.title}吗？`)){
        this.$store.dispatch('deleteTodo',index)
      }

    }
  }
};
</script>

<style scoped></style>
