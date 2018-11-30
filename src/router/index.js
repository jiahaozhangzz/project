import Vue from 'vue'
import Router from 'vue-router'
import find from '../components/Find/find'
import maillist from '../components/MailList/maillist'
import my from '../components/My/my'
import wechat from '../components/WeChat/wechat'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/find', name: 'find', component: find},
    {path: '/maillist', name: 'maillist', component: maillist},
    {path: '/my', name: 'my', component: my},
    {path: '/wechat', name: 'wechat', component: wechat}

  ]
})

export default router
