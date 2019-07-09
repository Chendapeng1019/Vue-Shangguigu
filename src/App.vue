<template>
   <div>
     <div v-if="!repoUrl">loading</div>
     <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a> </div>
   </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  methods: {

  },
  watch: { // 监视
    },
  mounted() { //执行异步代码
              //发送ajax请求获取数据
    
  },
}
</script>

<style>

</style>
