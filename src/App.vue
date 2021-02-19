<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import PostList from '@/components/PostList.vue'
  export default {
    components: {
      Header,
      PostList
    }
  }
</script>

<style scoped>
.main {
  background: #E1E1E1;
  padding: 0 200px;
  padding-right: 400px;
}
</style>