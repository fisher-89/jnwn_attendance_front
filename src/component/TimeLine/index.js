import React, { Component } from 'react'
import classNames from 'classnames'

import LineItem from './LineItem'
import './index.less'
class TimeLine extends Component {
  render() {
    const { children } = this.props
    const timeLineItems = [...React.Children.toArray(children)]
    const truthyItems = timeLineItems.filter(item => !!item)
    const itemsCount = React.Children.count(truthyItems)
    const lastCls = 'timeline_item_last'
    const items = React.Children.map(truthyItems, (ele, idx) => {
      return React.cloneElement(ele, {
        ...ele.props,
        className:classNames([
          ele.props.className,
          idx === itemsCount - 1 ? lastCls : ''
        ])
      })
    })
    return <div>{items}</div>
  }
}
TimeLine.defaultProps = {
  timesLines: []
}
export default TimeLine
export { LineItem }
