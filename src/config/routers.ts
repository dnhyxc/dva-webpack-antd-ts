export const RoutesConfig = [
  {
    title: '首页',
    key: 'home',
    path: '/app/home/:id?',
    component: () => import('@/routes/home'),
  },
  {
    title: '团队',
    key: 'team',
    path: '/app/team',
    component: () => import('@/routes/team'),
  },
  {
    title: '项目列表',
    key: 'project',
    path: '/app/project',
    component: () => import('@/routes/project'),
  },
  {
    title: '提交记录',
    key: 'records',
    path: '/app/records/:name?',
    component: () => import('@/routes/records'),
  },
  {
    title: '提交结果',
    key: 'result',
    path: '/app/result',
    component: () => import('@/routes/result'),
  },
]
