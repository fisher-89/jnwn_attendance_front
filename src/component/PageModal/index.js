
import React, { Component } from 'react';
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

  componentWillReceiveProps(newProps) {
    if (newProps.alertStatus !== this.props.alertStatus) {
      this.setState({
        alertStatus: newProps.alertStatus
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
      alertStatus: false
    }, () => {
      closeAlert(false)
    })
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
    const { closeAlert } = this.props;
    this.setState({
      alertStatus: false
    }, () => {
      closeAlert(false);
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }

  render() {
    const { content, title } = this.props;
    return (
      <div>
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
                {title}
                <span className="close" onClick={this.close} />
              </div>
              <div className="alert-content-detail" >
                {content}
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
      </div>
    );
  }
}

let div = document.createElement('div');
let props = {

};
// document.body.appendChild(div);

// let Box = ReactDOM.render(React.createElement(
//   Alert,
//   props
// ), div);
export default Alert