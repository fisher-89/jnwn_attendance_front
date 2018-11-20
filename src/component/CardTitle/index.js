
import React, { Component } from 'react';
import './index.less'
class CardTitle extends Component {

  render() {
    const { extra, style, title } = this.props;
    return (
      <div className="card_title" style={style}>
        <span className="title">{title}</span>
        {extra}
      </div>
    )
  }
}

CardTitle.defaultProps = {
}

export default CardTitle
