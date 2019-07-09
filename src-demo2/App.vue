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

 import PubSub from 'pubsub-js'
 import TodoFooter from './components/TodoFooter'
 import TodoHeader from './components/TodoHeader'
 import TodoList from './components/TodoList'
 import storageUtil from './util/storageUtil'

export default {
  name: 'App',
  components: {
    TodoFooter,
    TodoHeader,
    TodoList
  },
  data() {
    return {
      //从localStorage 读取todos
      todos: storageUtil.readTodos()
      // todos: [
      //   {title: '吃饭', complete: false },
      //   {title: '睡觉', complete: true },
      //   {title: 'coding', complete: false }
      // ]
    }
  },
  methods: {
    addItems(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    //删除所有选中的
    deleteCompleteTodos(){
      //过滤
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    //全选/全不选
    selectAllTodos(check){
      this.todos.forEach(todo => todo.complete = check)
    }
  },
  watch: { // 监视
    todos: {
      deep:true, // 深度监视
      // handler: function (newValue) {
      //   //将todos 最新的值(json数据)保存到localStorage
      //  // window.localStorage.setItem('todos_key',JSON.stringify(newValue))
      //   storageUtil.saveTodos(newValue)
      //}
    handler: storageUtil.saveTodos
    }
  },
  mounted() { //执行异步代码
    // 给 <TodoHeader/>绑定 addItems事件监听
    this.$refs.header.$on('addItems',this.addItems)

    //订阅消息
    PubSub.subscribe('deleteTodo',(msg,index)=> {
      this.deleteTodo(index)
    })
  },
}
</script>

<style>

</style>
