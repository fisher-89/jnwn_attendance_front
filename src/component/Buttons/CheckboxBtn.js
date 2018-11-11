
import React, { Component } from 'react';
import './index.less'
class Buttons extends Component {
  render() {
    const { children, checked, style } = this.props;
    const btnClass = checked ? 'checkbox_btn_checked' : 'checkbox_btn'
    return (
      <div className={btnClass} style={style}>{children}</div>
    );
  }
}

Buttons.defaultProps = {
}

export default Buttons
