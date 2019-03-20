
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
      case 'normal': return 'normal_style';
      case 'default': return 'default_style';
      default: return 'primary'
    }
  }

  witchFillClass = (fill) => {
    return fill ? 'btn_fill' : 'btn_stroke'
  }

  render() {
    const { children, size, fill, style, type, handleClick,block } = this.props;
    const sizeClass = this.switchSizeClass(size);
    const fillStyle = this.witchFillClass(fill);
    const typeClass = this.switchTypeClass(type);
    const btnClass = classNames("button", sizeClass, `${fillStyle}_${typeClass}`);
    return (
      <span
        className={btnClass}
        style={block?{'display':'block',...style}:{}}
        onClick={handleClick}
      >
        {children}
      </span>
    );
  }
}

Buttons.defaultProps = {
  size: 'xs',
  fill: false,
  type: 'primary'
}

export default Buttons
