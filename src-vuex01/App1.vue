<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
    <p> click {{$store.state.count}} times, count is {{eventOrOdd}}</p>
  </div>

</template>

<script>
  export default {
    name: "App",
    components: {
    },
    data() {
      return {

      }
    },
    computed: {
      eventOrOdd() {
        return this.$store.getters.eventOrOdd
      }
    },
    methods: {
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
    }
  }
</script>

<style scoped>

</style>
