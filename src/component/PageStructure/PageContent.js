import React, { Component } from 'react';
import './index.less';

class PageContent extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="page_content">
        {children}
      </div>
    );
  }
}
export default PageContent