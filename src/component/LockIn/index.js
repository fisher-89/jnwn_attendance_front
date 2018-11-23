
import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.less'
let defaultState = {
  visible: true,
  alertTip: "提示",
  title: '弹框',
  closeAlert: function () { },
  onOk: () => { }
}
class LockIn extends Component {

  state = {
    ...defaultState
  };

  componentWillReceiveProps(newProps) {
    if (newProps.visible !== this.props.visible) {
      this.setState({
        visible: newProps.visible
      })
    }
  }

  // css动画组件设置为目标组件
  FirstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }

  // 关闭弹框
  confirm = () => {
    const { closeAlert } = this.props;
    this.setState({
      visible: false
    }, () => {
      closeAlert(false)
    })
  }

  open = (options) => {
    options = options || {};
    options.visible = true;
    this.setState({
      ...defaultState,
      ...options
    })
  }

  close = () => {
    const { closeAlert } = this.props;
    this.setState({
      visible: false
    }, () => {
      closeAlert(false);
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }

  render() {
    return (
      <div className="lockin">
        <div className="lockin-inner">
          打卡
          </div>
      </div>
    );
  }
}
export default LockIn