
import React, { Component } from 'react';
import './index.less'
class ShopLevel extends Component {
  render() {
    const { style } = this.props;
    return (
      <span className="shop_label" style={{ display: 'inline-block', ...style }}>
      </span>
    )
  }
}

export default ShopLevel
