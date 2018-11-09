import React, { Component } from 'react';
import './index.less';

class PageFooter extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="page_footer">
        {children}
      </div>
    );
  }
}
export default PageFooter