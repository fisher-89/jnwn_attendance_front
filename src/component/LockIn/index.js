
import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
// import rasterizeHTML from 'rasterizehtml';
import html2canvas from 'html2canvas';


import './index.less'
let defaultState = {
  visible: false,
  alertTip: "提示",
  title: '弹框',
  closeAlert: function () { },
  onOk: () => { }
}
class LockIn extends Component {

  state = {
    ...defaultState
  };

  componentDidMount() {
    // const page = document.querySelector('.page_container');
    // domtoimage.toPng(page)
    //   .then((dataUrl) => {
    //     var img = new Image();
    //     img.src = dataUrl;
    //     this.setState({
    //       src: dataUrl
    //     })
    //     console.log(dataUrl)
    //     // document.body.appendChild(img);
    //   })
    //   .catch(function (error) {
    //     console.error('oops, something went wrong!', error);
    //   });
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps')
    if (newProps.visible !== this.props.visible) {
      this.setState({
        visible: newProps.visible,
      })
      // html2canvas(document.querySelector('.page_container')).then((canvas) => {
      //   var context = canvas.getContext('2d');
      //   var Img = new Image()
      //   context.drawImage(Img, 0, 0, canvas.width, canvas.height);
      //   const src = canvas.toDataURL();
      //   console.log(src)
      //   this.setState({
      //     src
      //   })
      //   // var img = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height);
      //   // document.getElementById('blur').appendChild(img);
      // });
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
    const { visible, src } = this.state;
    console.log('visible', visible)
    return (
      <div className="lockin" style={!visible ? { display: 'none' } : null}>
        <div className="blur" id="blur">
          <img src={src} alt="cut" />
        </div>
      </div>
    );
  }
}
export default LockIn