import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import Message from './component/Message'
import './App.less';

class App extends Component {
  click=()=>{
    const config= {
      getContainer:()=>document.getElementById('test')
    }
    const option= {
      content:'异常提醒：连接失败，请检查网络。',
      duration:120000,
    }
    const no=Message.open(option,config);
  }
  render() {
    const { children, pathname } = this.props;
    return (
      <QueueAnim
        type={['left', 'right']}  
      >
        <div  
          className="container" 
          id="container" 
          onClick={this.click}>
        <div id="test"></div>
          {children}
        </div>
       </QueueAnim>
    );
  }
}
export default App