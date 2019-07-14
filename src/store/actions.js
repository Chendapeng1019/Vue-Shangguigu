/*
*
* 包含多个接收组件通知触发mutation调用间接状态的方法的对象*/
import {ADD_TODO,DELETE_TODO,SELECT_ALLTODOS,CLEAR_ALL_COMPLETED} from './mutation-types'
export default {
  addTodo({commit},todo) {
    //提交对mutation的请求
    commit(ADD_TODO, {todo})
  },
  deleteTodo({commit},index){
    commit(DELETE_TODO, {index})
  },
  selectAllTodos({commit},value){
    commit(SELECT_ALLTODOS,{value})
  },
  clearAllCompleted({commit}){
    commit(CLEAR_ALL_COMPLETED)
  }
}
