import CircularJSON from 'circular-json';
import { isLogin, isAuthed } from '../utils/util'
import * as common from '../services/common'
export default {
  namespace: 'app',
  state: {
    UserInfo: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      //  曾经登录过，调到该权限可以看到的界面
      const pathname = history.location.pathname;
      if (pathname === '/get_access_token' || pathname === '/refresh_access_token' || pathname === '/redirect_to_authorize') {
        console.log(pathname)
        return;
      }
      else if (!isLogin()) {
        //  根据角色跳到该角色的首页
        window.location.href =
          `${process.env.REACT_APP_OA_PATH}/oauth/authorize?client_id=${process.env.REACT_APP_OA_CLIENT_ID}&response_type=code`;
        //    没有权限跳到login
        if (!isAuthed(history.location.pathname)) {
          console.log('没有权限')
        }
      }
    },
  },

  effects: {
    * getUserInfo(_, { call, put }) {
      const response = yield call(common.getUserInfo);
      if (response && !response.error) {
        yield put({
          type: 'saveUserInfo',
          payload: response.data
        })
      }
    },
  },

  reducers: {
    saveUserInfo(_, action) {
      const data = action.payload;
      localStorage.OA_UserInfo = CircularJSON.stringify(data);
      localStorage.OA_Authorities = CircularJSON.stringify(data.authorities);
    }
  },
}