import React, { Component } from 'react';
import Calendar from '../../component/ReactCalendar/Calendar';
class Test extends Component {
 
  render() {
    const decorate={
      '2019-02-01':true
    }
    return (
    <div>
      <Calendar 
        decorate={decorate}
        renderScrollableWrap={this.renderScrollableWrap}
        disabledDirection={{prev:true,next:true}}
      />
    </div>
    );
  }
}
export default Test;
