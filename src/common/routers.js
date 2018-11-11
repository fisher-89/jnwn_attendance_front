const menuGlobal = [
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