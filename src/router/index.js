import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '@/components/PostList.vue'
import Article from '@/components/Article.vue'
import Userinfo from '@/components/Userinfo.vue'
import SlideBar from '@/components/SlideBar.vue'
Vue.use(VueRouter)
const routes = [
  // 这里组件中写main主要是为了映射到router-view的name为main上面去
  {
    name: 'root',
    path: '/',
    components: {
      main: PostList
    }
  },
  {
    name: 'post_content',
    path: '/topic/:id&author=:name',
    components: {
      main: Article,
      slidebar: SlideBar
    }
  },
  {
    name: 'user_info',
    path: '/user/:name',
    components: {
      main: Userinfo
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
