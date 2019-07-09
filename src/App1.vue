<template>
   <div>
     <div v-if="!repoUrl">loading</div>
     <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a> </div>
   </div>
</template>

<script>
  import axios from 'axios'

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
    let url= `https://api.github.com/search/repositories?q=vue&sort=stars`
    /*this.$http.get(url).then(
      success =>{

        let result = success.data
        //得到最受欢迎的repo
        let mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      } ,error =>{
        alert('请求失败')
      }
    )*/

    //使用axios 发送ajax请求
    axios.get(url).then(
      success =>{

        let result = success.data
        //得到最受欢迎的repo
        let mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }).catch(error=>{
        alert('请求失败')
    })
  },
}
</script>

<style>

</style>
