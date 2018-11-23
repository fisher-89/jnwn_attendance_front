const menuGlobal = [
  {
    id: 'personscheduling',
    pid: '0',
    name: 'personscheduling',
    icon: 'user',
    path: '/person_scheduling/:staffSn',
    models: [], //models可多个
    component: () => import('../routes/Scheduling/personScheduling.js'),
  },
  {
    id: 'shopscheduling',
    pid: '0',
    name: 'shopscheduling',
    icon: 'user',
    path: '/shop_scheduling/:shopSn',
    models: [], //models可多个
    component: () => import('../routes/Scheduling/shopScheduling.js'),
  },
  {
    id: 'home',
    pid: '0',
    name: 'home',
    icon: 'user',
    path: '/home',
    models: [], //models可多个
    component: () => import('../routes/Home/HomePage'),
  },
  {
    id: 'lockin',
    pid: '0',
    name: 'lockin',
    icon: 'lockin',
    path: '/lockin',
    models: [], //models可多个
    component: () => import('../component/LockIn/index.js'),
  },
  {
    id: 'test',
    pid: '0',
    name: '测试日历',
    icon: 'user',
    path: '/test',
    models: [], //models可多个
    component: () => import('../routes/test.js'),
  },
];
export default menuGlobal
export const aouthPath = [
  {
    id: 'get_access',
    pid: '0',
    name: 'bbb页',
    icon: 'user',
    path: '/get_access_token',
    models: ['oauth'],
    component: () =>
      import('../routes/Oauth/GetAccessToken'),
  },
  {
    id: 'refresh',
    pid: '0',
    name: 'refresh',
    icon: 'user',
    path: '/refresh_access_token',
    models: ['oauth'],
    component: () =>
      import('../routes/Oauth/RefreshAccessToken'),
  },
  {
    id: 'redirect',
    pid: '0',
    name: 'redirect',
    icon: 'user',
    path: '/redirect_to_authorize',
    models: ['oauth'],
    component: () =>
      import('../routes/Oauth/RedirectToAuthorize'),
  }
]