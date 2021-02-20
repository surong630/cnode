<template>
  <div class="UserInfo">
    <div v-if= '!loading' class="userInformation">
      <section>
        <img :src="userInfo.avatar_url" alt="">
        <span class="username">{{userInfo.loginname}}</span>
        <p>
          {{userInfo.score}}积分
        </p>
        <p class="date">
          注册时间: {{userInfo.create_at | formatDay}}
        </p>
      </section>
      <div class="replies">
        <p>最近创建的话题</p>
        <ul>
          <li v-for="item in userInfo.recent_topics">
            <span>{{item.author.loginname}}</span>
            <img :src="item.author.avatar_url" alt="">
            <router-link :to="{
              name: 'post_content',
              params:{
                id: item.id
              }
            }" class="title">{{item.title}}</router-link>
            <span class="last_reply">{{item.last_reply_at | formatDay}}</span>
          </li>
        </ul>
      </div>
      <div class="topics">
        <p>创建的主题</p>
        <ul>
          <li v-for="item in userInfo.recent_replies">
            <span>{{item.author.loginname}}</span>
            <img :src="item.author.avatar_url" alt="">
            <router-link :to="{
              name: 'post_content',
              params:{
                id: item.id
              }
            }"  class="title">{{item.title}}</router-link>
            <span class="last_reply">{{item.last_reply_at | formatDay}}</span>
          </li>
        </ul>
      </div>
    </div>
    <el-table v-if= 'loading'
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="#E1E1E1"
      style="width: 100%">
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true,
        userInfo: {}
      }
    },
    methods:{
      getUser() {
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          this.userInfo = res.data.data
          this.loading = false
        }).catch(err => {
          console.log(err);
        })
      }
    },
    beforeMount() {
      this.getUser()
    }
  }
</script>

<style lang="scss" scoped>
  .userInformation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }
  .userInformation section {
    padding: 12px;
    font-size: 14px;
  }
  .userInformation img {
    margin-right: 10px;
    width: 40px;
  }
  .userInformation .date {
    color: #ababab;
  }
  .userInformation .username {
    color: #ababab;
  }
  .userInformation li {
    list-style:none;
  }
  .userInformation ul {
    padding: 0;
  }
  .userInformation .replies,
  .userInformation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }
  .userInformation .replies .title,
  .userInformation .topics .title {
    font-size: 16px;
  }
  .userInformation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }
  .userInformation > div >ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }
  .userInformation > div >ul > li > a {
    color: #094E99;
    text-decoration: none;
  }
  .last_reply {
    float: right;
    margin-right: 20px;
  }
</style>