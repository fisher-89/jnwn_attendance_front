
import React, { Component } from 'react';
import './index.less'
class ListLabel extends Component {
  render() {
    const { children, fillColor, style } = this.props;
    return (
      <div className="label" style={{ background: fillColor, ...style }}>
        {children}
      </div>
    )
  }
}

export default ListLabel
