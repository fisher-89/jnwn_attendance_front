
import React, { Component } from 'react';
import './index.less'
class ListLabel extends Component {
  render() {
    const { children} = this.props;
    return (
      <div className="label0">
        {children}
      </div>
    )
  }
}

export default ListLabel
