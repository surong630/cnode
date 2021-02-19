<template>
  <div class="hello">
    <button @click="touch">点击获取</button>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  methods:{
    touch() {
      this.$http.get('https://cnodejs.org/api/v1/topics', {
        page: 1,
        limit: 20
      }).then((res) => {
        console.log(res);
      })
    }
  },
  beforeMount() {
    this.touch()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
