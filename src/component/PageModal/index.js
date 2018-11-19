
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { is, fromJS } from 'immutable';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Btn } from '../index'
import './index.less'
let defaultState = {
  alertStatus: false,
  alertTip: "提示",
  title: '弹框',
  closeAlert: function () { },
  onOk: () => { }
}
class Alert extends Component {

  state = {
    ...defaultState
  };

  // css动画组件设置为目标组件
  FirstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }
  // 关闭弹框
  confirm = () => {
    this.setState({
      alertStatus: false
    })
    this.state.closeAlert();
  }

  open = (options) => {
    options = options || {};
    options.alertStatus = true;
    this.setState({
      ...defaultState,
      ...options
    })
  }

  close = () => {
    this.state.closeAlert();
    this.setState({
      ...defaultState
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component={this.FirstChild}
        transitionName='hide'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        <div className="alert-con"
          style={this.state.alertStatus ? null : { display: 'none' }}
          onClick={this.close}
        >
          <div className="alert-context" onClick={(e) => e.stopPropagation()}>
            <div className="comfirm" >
              {this.state.title}
              <span className="close" onClick={this.close} />
            </div>
            <div className="alert-content-detail" >
              {this.state.content}
            </div>
            {this.state.footer && <div className="alert-footer">
              <Btn size="l" fill
                style={{ color: 'rgb(53, 48, 49)' }}
                handleClick={this.confirm}
              >确定</Btn>
            </div>}

          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

let div = document.createElement('div');
let props = {

};
document.body.appendChild(div);

let Box = ReactDOM.render(React.createElement(
  Alert,
  props
), div);
export default Box