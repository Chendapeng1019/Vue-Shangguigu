<template>
    <div>
      Home
      <div>
        <router-link to="/home/message">message</router-link>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>

</style>
