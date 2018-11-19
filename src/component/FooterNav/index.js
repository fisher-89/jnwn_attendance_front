import React from 'react';
import { TabBar } from 'antd-mobile';
import { tabbar } from './tabbar';
import './index.less';

export default class Footer extends React.Component {
  render() {
    const { pathname, history } = this.props;
    return (
      <div className="footerbar">
        <TabBar
          tintColor="rgb(53,48,49)"
          unselectedTintColor="rgb(127,123,125)"
          barTintColor="white"
        >
          {tabbar.map((item, i) => {
            const idx = i;
            return (
              <TabBar.Item
                title={item.title}
                key={idx}

                icon={
                  <div style={{
                    width: '24px',
                    height: '24px',
                    background: `url(${item.icon}) center center /  24px 24px no-repeat`,
                  }}
                  />
                }
                selected={pathname === item.to}
                selectedIcon={<div style={{
                  width: '24px',
                  height: '24px',
                  background: `url(${item.selIcon}) center center /  24px 24px no-repeat`,
                }}
                />
                }
                onPress={() => {
                  history.push(item.to);
                }}
                data-seed="logId"
              />
            );
          }
          )}
        </TabBar>
      </div>
    );
  }
}
