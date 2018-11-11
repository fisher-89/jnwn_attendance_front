import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import './App.less';

class App extends Component {
  render() {
    const { children, pathname } = this.props;
    return (
      <QueueAnim
        type={['left', 'right']}  
      >
        <div  className="container" key={pathname}>
          {children}
        </div>
      </QueueAnim>
    );
  }
}
export default App