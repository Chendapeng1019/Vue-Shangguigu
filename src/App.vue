<template>
    <div class="todo-container">
      <div class="todo-wrap">
        <!--  给TodoHeader标签对象绑定addItems时间监听   -->
        <todo-header ref="header" ></todo-header>
        <todo-list :todos="todos" ></todo-list>
        <todo-footer :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"></todo-footer>
<!--        <todo-footer>-->
<!--          <input type="checkbox" v-model="ischeckAll" slot="checkAll" />-->
<!--          <span slot="count">已完成{{ completeSize }} / 全部{{ todos.length}}</span>-->
<!--          <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>-->
<!--        </todo-footer>-->
      </div>
    </div>
</template>
<!--
绑定事件监听  ---- 订阅消息
触发事件 ---- 发布消息
-->

<script>


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {

  },
  watch: { // 监视
    },
  mounted() { //执行异步代码
  },
}
</script>

<style>

</style>
