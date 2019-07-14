<template>
    <div>
      Home
      <div>
        <uL class="nav nav-tabs">
          <router-link to="/home/news">News</router-link>
          <router-link to="/home/message">Message</router-link>
        </uL>

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
