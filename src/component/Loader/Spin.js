import React from 'react';
import './Loader.less';

export default class Spin extends React.PureComponent {
  render() {
    const { children, loading } = this.props;
    const spinningStyle = !loading? { display: 'none' }: null
    return (
      <div className="spinning" >
        <div className="spinning-wrapper" style={spinningStyle}>
          <div className="spin_loading">
            <div className="spin_cir">
            </div>
            <div className="text" >加载中</div>
          </div>
        </div>
        {children}

      </div>
    );
  }
}
