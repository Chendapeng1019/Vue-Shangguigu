<template>
  <ul class="todo-main">
    <todo-item v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" ></todo-item>
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";
import {mapState} from 'vuex'
export default {
  name: "TodoList",
  computed: {
    ...mapState(['todos'])
  },
  components: { TodoItem},

};
</script>

<style scoped></style>
