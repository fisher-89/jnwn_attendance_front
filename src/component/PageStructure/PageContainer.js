import React, { Component } from 'react';

import './index.less';

class PageContainer extends Component {
  render() {
    const { children ,className} = this.props;
    return (
      <div className={`page_container ${className}`}>
        {children}
      </div>
    );
  }
}
export default PageContainer