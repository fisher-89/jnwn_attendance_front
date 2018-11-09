import React, {
  Component,
} from 'react';


export default class RedirectToAuthorize extends Component {
  componentDidMount() {
    window.location.href = `${process.env.OA_PATH}oauth/authorize?client_id=${process.env.OA_CLIENT_ID}&response_type=code`;
  }

  render() {
    return (
      <h1 style={{ textAlign: 'center' }}>跳转中。。。</h1>
    );
  }
}
