import Router from 'vue-router'

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      // 此处采用异步路由的形式，第一个参数是路由所对应的组件路径，最后一个参数是指定[name]占位符
      component: resolve => require.ensure(['@/modules/moduleA/Home'], resolve, 'moduleA/js/home')
    },
    {
      path: '/add',
      name: 'Add',
      component: resolve => require.ensure(['@/components/Add'], resolve, 'moduleA/js/add')
    }
  ]
})
