
import React, { Component } from 'react';
import './index.less'
class ShopLevel extends Component {
  render() {
    const { style, level } = this.props;
    const className = `shop_label${level}`;
    return (
      <span className={className} style={{ display: 'inline-block', ...style }}>
      </span>
    )
  }
}
ShopLevel.defaultProps = {
  level: 'A'
}
export default ShopLevel
