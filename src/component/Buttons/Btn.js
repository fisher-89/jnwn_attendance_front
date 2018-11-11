
import React, { Component } from 'react';
import classNames from 'classnames'
import './index.less'
class Buttons extends Component {
  switchSizeClass = (size) => {
    switch (size) {
      case 'xs': return 'xs_btn';
      case 's': return 's_btn';
      case 'm': return 'm_btn';
      case 'l': return 'l_btn';
      default: return 'sx_btn'
    }
  }

  switchTypeClass = (type) => {
    switch (type) {
      case 'primary': return 'primary_style';
      case 'warning': return 'warning_style';
      case 'default': return 'default_style';
      default: return 'primary'
    }
  }

  witchFillClass = (fill) => {
    return fill ? 'btn_fill' : 'btn_stroke'
  }

  render() {
    const { children, size, fill, style, type } = this.props;
    const sizeClass = this.switchSizeClass(size);
    const fillStyle = this.witchFillClass(fill);
    const typeClass = this.switchTypeClass(type);
    const btnClass = classNames("button", sizeClass, `${fillStyle}_${typeClass}`);
    return (
      <div className={btnClass} style={style}>{children}</div>
    );
  }
}

Buttons.defaultProps = {
  size: 'xs',
  fill: false,
  type: 'primary'
}

export default Buttons
