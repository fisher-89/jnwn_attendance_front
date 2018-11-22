import React from 'react';
import './Loader.less';

export default class Loader extends React.PureComponent {
  render() {
    return (
      <div
        id="global_loading"
        className="loader fullScreen"
      >
        <div className="warpper">
          <div className="inner" />
          <div className="text" id="text">加载中</div>
        </div>
      </div>
    );
  }
}
