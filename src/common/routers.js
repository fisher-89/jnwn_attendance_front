const menuGlobal = [
  {
    id: 'personscheduling',
    pid: '0',
    name: 'personscheduling',
    icon: 'user',
    path: '/person_scheduling',
    models: [], //models可多个
    component: () => import('../routes/Scheduling/personScheduling.js'),
  },
  {
    id: 'aaa',
    pid: '0',
    name: 'aaa页',
    icon: 'user',
    path: '/home',
    models: [], //models可多个
    component: () => import('../routes/Home/HomePage'),
  },
  {
    id: 'bbb',
    pid: '0',
    name: 'bbb页',
    icon: 'user',
    path: '/test',
    models: [], //models可多个
    component: () => import('../routes/test'),
  },
  {
    id: 'test',
    pid: '0',
    name: '测试日历',
    icon: 'user',
    path: '/testcalendar',
    models: [], //models可多个
    component: () => import('../routes/TestCalendar/index.js'),
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