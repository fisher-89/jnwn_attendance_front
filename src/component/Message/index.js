import React, { Component } from 'react'
import Notification from 'rc-notification'
import { Icon, NoticeBar } from 'antd-mobile'

import './index.less'
let messageInstance
let defaultTop
let defaultDuration = 3
let key = 1
function getMessageInstance(config, callback) {
  if (messageInstance) {
    callback(messageInstance)
    return
  }
  Notification.newInstance({ ...config }, instance => {
    if (messageInstance) {
      callback(messageInstance)
      return
    }
    messageInstance = instance
    callback(instance)
  })
}

function notice(args, arg2) {
  const duration = args.duration !== undefined ? args.duration : defaultDuration
  const iconType = {
    info: 'info-circle',
    success: 'check-circle',
    error: 'cross-circle',
    warning: 'exclamation-circle',
    loading: 'loading'
  }[args.type]

  const target = key++
  const closePromise = new Promise(resolve => {
    const callback = () => {
      if (typeof args.onClose === 'function') {
        args.onClose()
      }
      return resolve(true)
    }
    getMessageInstance(arg2, instance => {
      const iconNode = iconType?<Icon type={iconType} size="xxs"/>:<span className="default_icon"></span>
      instance.notice({
        key: target,
        duration,
        style: {},
        content: (
          <div id="message" className="msg_container">
            <div className="content">
              <NoticeBar
                marqueeProps={{ loop: true }}
                icon={args.icon ? args.icon : iconNode}
              >
                {args.content}
              </NoticeBar>
            </div>
          </div>
        ),
        onClose: callback
      })
    })
  })
  const result = () => {
    if (messageInstance) {
      messageInstance.removeNotice(target)
    }
  }
  result.then = (filled, rejected) => closePromise.then(filled, rejected)
  result.promise = closePromise
  return result
}
const api = {
  open: notice,
  destroy() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  }
}

export default api

// class Message extends Component {
//   componentWillReceiveProps(props){
//     if(this.props.visible!==props.visible){
//       const {content,duration}=props;
//       Notification.newInstance({
//         getContainer:()=>document.getElementById('message')
//       }, notification => {
//         notification.notice({
//           content: <div>{content}</div>,
//           duration:duration,
//         });
//       })
//     }
//   }
//   renderContent = (content)=>{
//     return  (
//       <div className="msg_container">
//         {content}
//       </div>
//     )
//   }
//   render(){
//     return (
//       <div id="message"></div>
//     )
//   }
// }
// Message.defaultProps={
//   content:'异常提醒:连接失败，请检查网络'
// }
// export default Message
