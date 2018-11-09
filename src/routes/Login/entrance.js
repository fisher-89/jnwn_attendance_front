import React, { Component } from 'react';

class Entrance extends Component {
  componentDidMount() {
    if (localStorage.getItem('OA_access_token') &&
      localStorage.getItem('OA_access_token_expires_in') > new Date().getTime()) {
      window.location.href = '/home';
    } else {
      window.location.href =
        `${process.env.REACT_APP_OA_PATH}/oauth/authorize?client_id=${process.env.REACT_APP_OA_CLIENT_ID}&response_type=code`;
    }
  }
  render() {
    return (
      <h1 style={{ textAlign: 'center' }}>登录中1。。。</h1>
    );
  }
}
export default Entrance;
