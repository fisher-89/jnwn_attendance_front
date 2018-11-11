
import React, { Component } from 'react';

class BBB extends Component {
  render() {
    return (
      <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
        <div style={{ flexGrow: 0 }} >header</div>
        <div style={{ flex: 1 ,overflow:'auto'}}>
          <div style={{ height: '700px' }}></div>
        </div>
        <div style={{ flexGrow: 0 }} >footer</div>

      </div>
    );
  }
}

export default BBB;
