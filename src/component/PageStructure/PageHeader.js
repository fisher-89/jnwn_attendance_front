import React, { Component } from 'react';
import './index.less';

class PageHeader extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="page_header">
        {children}
      </div>
    );
  }
}
export default PageHeader