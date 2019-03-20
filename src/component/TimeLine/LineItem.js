import React, { Component } from 'react'
import classNames from 'classnames'
import './index.less'
class LineItem extends Component {
  render() {
    const { color, dot } = this.props
    return (
      <div className='timeline_item'>
        <div className='item_tail' />
        <div
          className="item_dot"
          style={{
            borderColor: /blue|red|green/.test(color) ? undefined : color
          }}
        >
          {dot}
        </div>
        <div className="content">
        {this.props.children}
        </div>
      </div>
    )
  }
}

export default LineItem
