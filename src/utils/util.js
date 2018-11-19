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

export function dealThumbImg(url, str) {
  const i = url.lastIndexOf('.');
  const newImg = url.slice(0, i) + str + url.slice(i);
  return newImg;
}

export function reAgainImg(url, str) {
  const i = url.lastIndexOf(str);
  const newImg = url.slice(0, i) + url.slice(i + str.length);
  return newImg;
}

export function rebackImg(url, prefix, str) {
  const i = url.lastIndexOf('.');
  const m = prefix.length;
  const n = url.lastIndexOf(str);
  const newImg = url.slice(m, n) + url.slice(i);

  return newImg;
}

export function getUrlParams(url) {
  const d = decodeURIComponent;
  let queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  const obj = {};
  if (queryString) {
    queryString = queryString.split('#')[0]; // eslint-disable-line
    const arr = queryString.split('&');
    for (let i = 0; i < arr.length; i += 1) {
      const a = arr[i].split('=');
      let paramNum;
      const paramName = a[0].replace(/\[\d*\]/, (v) => {
        paramNum = v.slice(1, -1);
        return '';
      });
      const paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
      if (obj[paramName]) {
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = d([obj[paramName]]);
        }
        if (typeof paramNum === 'undefined') {
          obj[paramName].push(d(paramValue));
        } else {
          obj[paramName][paramNum] = d(paramValue);
        }
      } else {
        obj[paramName] = d(paramValue);
      }
    }
  }
  return obj;
}

export function findAppointParent(el, classname) {
  if (el.classList.contains(classname)) {
    return el
  }
  let parentNode = el.parentNode;

  while (parentNode !== null) {
    if (parentNode.classList.contains(classname)) {
      break;
    }
    parentNode = parentNode.parentNode;
  }
  return parentNode
}