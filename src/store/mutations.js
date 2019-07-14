/*
*包含多个由action触发mutation直接更新状态的方法对象
* */
import {ADD_TODO,DELETE_TODO,SELECT_ALLTODOS,CLEAR_ALL_COMPLETED} from './mutation-types'
//使用一个字符串的常量作为函数名 使用 [name]
export default {
  [ADD_TODO] (state,{todo}){
    state.todos.unshift(todo)
  },
  [DELETE_TODO] (state,{index}){
    state.todos.splice(index,1)
  },
  [SELECT_ALLTODOS](state,{value}){
    state.todos.forEach(todo => todo.complete = value)
  },
  [CLEAR_ALL_COMPLETED](state){
    state.todos = state.todos.filter(todo => !todo.complete)
  }
}
