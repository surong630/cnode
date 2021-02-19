<template>
  <div class="article">
    <div class="topic_header" v-if="!loading">
      <div class="topic_title">{{post.title}}</div>
        <ul>
        <li>•发布于：{{post.create_at | formatDay}}</li>
        <li>• 作者：
        {{post.author.loginname}}
        </li>
        <li>• {{post.visit_count}}次浏览</li>
        <li>•来自{{post | formatTab}}</li>
        </ul>
      <div class="topic_content markdown-body" v-html="post.content">
      </div>
      <div id="reply">
        <div class="topbar">{{post.reply_count}}回复</div>
        <div v-for="(replie,index) in post.replies"  class="replySec markdown-body">
          <div class="replyUp">
            <router-link :to="{
              name:'user_info',
              params:{
                name: replie.author.loginname
              }
            }">
          <img :src="replie.author.avatar_url" alt="">
          </router-link>
          <router-link :to="{
              name:'user_info',
              params:{
                name: replie.author.loginname
              }
            }">
          <span>{{replie.author.loginname}}</span>
          </router-link>
          <span>{{index+1}}楼</span>
          <span>{{replie.create_at | formatDay}}</span>
          </div>
          <p v-html="replie.content">
          </p>
        </div>
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
  import 'github-markdown-css/github-markdown.css'
  export default {
    data() {
      return {
        loading: true,
        post: {}
      }
    },
    beforeMount() {
      this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`).then((res) => {
        this.loading = false
        this.post = res.data.data
      }).catch((err) => {
        console.log(err);
      })
    }
  }
</script>

<style>
  
 .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  #reply, .topic_header {
    background-color: #fff;
  }

  #reply {
    margin-top: 15px;
  }

  #reply img {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -9px;
  }

  #reply a, #reply span {
    font-size: 13px;
    color: #666;
    text-decoration: none;
  }
  .replySec{
    border-bottom:1px solid #e5e5e5;
    padding:0 10px;
  }

  .replyUp a:nth-of-type(2) {
    margin-left: 0px;
    display: inline-block;
  }

  .topic_header {
    padding: 10px;
  }

  .topic_title {
    font-size: 20px;
    font-weight: bold;
    padding-top: 8px;
  }

  .topic_header ul {
    list-style: none;
    padding: 0px 0px;
    margin: 6px 0px;
  }

  .topic_header li {
    display: inline-block;
    font-size: 12px;
    color: #838383;
  }

  .topic_content {
    border-top: 1px solid #e5e5e5;
    padding: 0 10px;
  }

  .markdown-text img {
    width: 92% !important;
  }
  
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}
 
@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}
</style>