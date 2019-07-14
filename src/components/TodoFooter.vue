<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllComplete" />
    </label>
    <span>
      <span>已完成{{ completeCount }} / 全部{{totalCount}}</span>
    </span>
    <button class="btn btn-danger" v-show="completeCount" @click="clearAllCompleted">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
export default {
  name: "TodoFooter",
  data(){
    return {}
  },
  methods: {
    ...mapActions(['clearAllCompleted'])
  },
  computed: {
    ...mapGetters(['totalCount' ,'completeCount']),
    isAllComplete:{
      get(){
        return this.$store.getters.isAllSelect
      },
      set(value){ //value boolean类型
        this.$store.dispatch('selectAllTodos',value)
      }
    }
  }
};
</script>

<style scoped></style>
