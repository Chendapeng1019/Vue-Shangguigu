<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="ischeckAll" />
<!--      <slot name="checkAll"></slot>-->
    </label>
    <span>
      <span>已完成{{ completeSize }} / 全部{{todos.length}}</span>
<!--      <slot name="count"></slot>-->
    </span>
    <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>
<!--    <slot name="delete"></slot>-->
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: {
    todos: Array,
    deleteCompleteTodos: Function,
    selectAllTodos: Function
  },
  data(){
    return {
    }
  },
  methods: {
  },
  computed: {
    completeSize(){
      return this.todos.reduce((preTotal, todo) => preTotal +(todo.complete?1:0),0)
    },
    ischeckAll:{
      get(){
        return this.completeSize ===this.todos.length && this.completeSize > 0
      },
      set(value){
         this.selectAllTodos(value)
      }
    }
  }
};
</script>

<style scoped></style>
