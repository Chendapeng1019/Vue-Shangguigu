<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
    <p> click {{count}} times, count is {{eventOrOdd}}</p>
  </div>

</template>

<script>
  //mapGetters() 返回值对象
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    name: "App",
    components: {
    },
    data() {
      return {
      }
    },
    computed: {
        ...mapState(['count']), //mapState()返回值：{ count() {return this.$store.state['count']}}
        ...mapGetters(['eventOrOdd']), // mapGetters() 返回值；{ eventOrOdd() { return this.$store.getters['evenOrOdd'] }}
     /* eventOrOdd() {
        return this.$store.getters.eventOrOdd
      }
      count(){
        return this.$store.state.count
      }
      */
    },

    methods: {
      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
    }

    /*methods: {
      increment() {
        //通知vuex去增加
        this.$store.dispatch('increment')  //触发store中对应的action调用
      },
      decrement() {
        this.$store.dispatch('decrement')  //触发store中对应的action调用
      },
      incrementIfOdd() {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync() {
        this.$store.dispatch('incrementAsync')
      }
    }*/
  }
</script>

<style scoped>

</style>
