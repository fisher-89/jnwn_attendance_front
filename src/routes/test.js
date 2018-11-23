import React, { Component } from 'react';
import { debounce } from 'lodash';
import './index.less'
class test extends Component {
  dealDebounce = debounce((params) => {
    this.switchUpDown(params);
  }, 0);

  state = {
    checkdType: 2
  }

  switchUpDown = (checkdType) => {
    console.log('switchUpDown')

    this.setState({
      checkdType
    })
  }
  
  render() {
    console.log('render')
    const { checkdType } = this.state;
    const specalClass = `specil ${checkdType === 1 ? 'up' : 'down'}`;
    const normalClass = `normal ${checkdType === 2 ? 'up' : 'down'}`;

    return (
      <div className="test">
        <div className={specalClass} onClick={() => this.dealDebounce(1)}>
        </div>
        <div className={normalClass} onClick={() => this.dealDebounce(2)}></div>
      </div>
    )
  }
}
export default test;
