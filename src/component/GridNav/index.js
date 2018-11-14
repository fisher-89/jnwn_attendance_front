
import React, { Component } from 'react';
import { Grid } from 'antd-mobile'
import './index.less'
class GridNav extends Component {
  render() {
    const { style, data } = this.props;
    return (
      <div style={style} className="grid">
        <Grid data={data} hasLine={false} />
      </div>
    )
  }
}

GridNav.defaultProps = {
  data: Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }))
}

export default GridNav
