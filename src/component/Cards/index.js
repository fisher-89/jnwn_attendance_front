
import React, { Component } from 'react';
import './index.less'
class Card extends Component {
  render() {
    const { children, extra, style } = this.props;
    return (
      <div className="card" style={style}>
        {extra && (
          <div className="extra">
            {extra}
          </div>)
        }
        {children}
      </div>
    )
  }
}

Card.defaultProps = {
  extra: null
}

export default Card
