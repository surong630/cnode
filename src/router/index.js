import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '@/components/PostList.vue'
import Article from '@/components/Article.vue'
Vue.use(VueRouter)
const routes = [
  {
    name: 'root',
    path: '/',
    component: PostList
  },
  {
    name: 'post_content',
    path: '/topic/:id',
    component: Article
  }
]

const router = new VueRouter({
  routes
})

export default router
