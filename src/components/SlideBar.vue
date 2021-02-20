<template>
  <div class="autherinfo">
    <div v-if="!loading">
      <div class="authersummay">
        <div class="topbar">
          作者
        </div>
        <div class="message">
          <router-link :to="{
              name: 'user_info',
              params:{
                name: posts.loginname
              }
            }">
              <img :src="posts.avatar_url" alt="">
            </router-link>
          <span>{{posts.loginname}}</span>
        </div>
        <div>
          积分:{{posts.score}}
        </div>
      </div>
      <div class="recent_topics">
        <div class="topbar">作者其他话题</div>
        <ul>
          <li v-for="item in getLength">
            <router-link :to="{
              name:'post_content',
              params:{
                id: item.id,
                name: item.author.loginname
              }
            }">
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="recent_replies">
        <div class="topbar">最近回复的话题</div>
        <ul>
          <li v-for="item in posts.recent_replies">
            <router-link :to="{
              name:'post_content',
              params:{
                id: item.id,
                name: item.author.loginname
              }
            }">
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
     <el-table 
     v-if="loading"
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
        posts: {},
        loading: true
      }
    },
    methods:{
      get() {
        console.log('ss');
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then((res) => {
          this.posts = res.data.data
          this.loading = false
        })
      }
    },
    computed:{
      getLength() {
        if(this.posts.recent_topics) {
          return this.posts.recent_topics.slice(0,5)
        }else {
          return this.posts.recent_topics
        }
      }
    },
    beforeMount() {
      this.get()
    },
    watch:{
      '$route'(to,from) {
        this.get()
      }
    }
  }
</script>

<style lang="scss" scoped>
 .authersummay, .recent_replies, .recent_topics {
    background-color: #fff;
  }
  .autherinfo {
    width: 328px;
    margin-top: 0;
    position: absolute;
    right: 70px;
    top: 100px;
  }
  li{
    padding: 3px 0 ;
  }
  .recent_replies ul, .recent_topics ul {
    margin-top: 0px;
    margin-bottom: 0px;
    list-style: none;
    padding-left: 14px;
  }

  ul a {
    font-size: 12px;
    text-decoration: none;
    color: #778087;
  }

  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .loginname {
    width: 100px;
    float: right;
    margin-top: 22px;
    margin-right: 159px;
    font-size: 14px;
  }

  .loginname a {
    text-decoration: none;
    color: #778087;
  }

  .authersummay .topbar {
    margin-top: 0px;
  }
</style>