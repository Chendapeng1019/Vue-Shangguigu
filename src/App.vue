<template>
    <div class="todo-container">
      <div class="todo-wrap">
        <!--  给TodoHeader标签对象绑定addItems时间监听   -->
        <todo-header />
        <todo-list /> ></todo-list>
        <todo-footer />
      </div>
    </div>
</template>
<!--
绑定事件监听  ---- 订阅消息
触发事件 ---- 发布消息
-->

<script>

 import TodoFooter from './components/TodoFooter'
 import TodoHeader from './components/TodoHeader'
 import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoFooter,
    TodoHeader,
    TodoList
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>
