import React, { Component } from 'react';
import './index.less';

class PageContent extends Component {
  render() {
    const { children,style } = this.props;
    return (
      <div className="page_content" style={style}>
        {children}
      </div>
    );
  }
}
export default PageContent