import menuGlobal from '../common/routers'
export function isLogin() {
  let login = false
  if (localStorage.getItem('OA_access_token') &&
    localStorage.getItem('OA_access_token_expires_in') > new Date().getTime()) {
    login = true
  }
  return login
}

export function isAuthed(pathname) {
  const Authorities = localStorage.getItem('OA_Authorities')
  const userAuthorities = Authorities && Authorities !== 'undefined' ? JSON.parse(Authorities) : {};
  const userAuthority = userAuthorities.oa || [];
  const route = menuGlobal.find(router => pathname === router.path)
  const { authority } = route;
  if (authority === undefined) {
    return true
  }
  else if (userAuthority.indexOf(authority) === -1) {
    return false
  }
  else {
    return true
  }
}
export function modelNotExisted(app, model) {
  return !app._models.some(({ namespace }) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  })
};