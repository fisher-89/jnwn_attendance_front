
import React, { Component } from 'react';
import './index.less'
class Card extends Component {


  render() {
    const { children} = this.props;
    return (
      <div className="card">
        {children}
      </div>
    )
  }
}

Card.defaultProps = {
  size: 'l',
}

export default Card
