import React, { Component } from 'react';
import { connect } from 'dva';

import './index.less';

@connect()

class PageContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="page_container">
        {children}
      </div>
    );
  }
}
export default PageContainer