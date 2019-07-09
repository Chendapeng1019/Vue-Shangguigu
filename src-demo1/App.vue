<template>
  <div id="app">
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
   <div class="container"></div>
    <Add :addComment="addComment"></Add>
    <List :comments="comments" :deleteComment="deleteComment"></List>
  </div>
</template>

<script>

import Add from './components/Add'
import List from './components/List'
export default {
  name: 'App',
  components: {
    Add,
    List
  },
  data() {
    return {
      comments: [
        {
          name: 'BOB',
          content: 'Vue还不错'
        },
        {
          name: 'Cat',
          content: 'Vue So Easy'
        },
        {
          name: 'BZ',
          content: 'Vue So So'
        },

      ]
    }
  },
  methods: {
    //添加评论
    addComment(comment){
      this.comments.unshift(comment)
    },
    //删除评论
    deleteComment(index){
      this.comments.splice(index,1)
    }
  }
}
</script>

<style>
</style>
