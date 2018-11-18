import React, { Component } from 'react';
import './index.less';

class SideBoth extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="white-space">
        {children}
      </div>
    );
  }
}
export default SideBoth