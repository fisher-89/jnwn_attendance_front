
import React, { Component } from 'react';
import { Card, ShopLevel, Btn } from '../index'
import './index.less'
class ShopInfo extends Component {
  render() {
    const { style, info: { shopSn, shopName, address, level } } = this.props;
    return (
      <Card extra={<ShopLevel level={level} />} style={style}>
        <div className="sno">{shopSn}</div>
        <div className="name">{shopName}</div>
        {address ?
          <div className="address">{address}</div> :
          <div className="address" >
            <Btn type="default" style={{ display: 'inline-block' }}>设置店铺定位</Btn>
          </div>
        }
      </Card>
    )
  }
}
ShopInfo.defaultProps = {
  info: {
    shopSn: 'NO.go0001',
    shopName: '黑龙江',
    address: '哈哈',
    level: 'A',
    handleClick: () => {

    }
  }
}
export default ShopInfo
