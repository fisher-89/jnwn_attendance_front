
import React, { Component } from 'react';
import { WhiteSpace, Carousel } from 'antd-mobile'
import { PageContainer, PageFooter, PageContent, SideBoth } from '../../component/PageStructure'
import {
  CardTitle,FooterNav, PageModal, ShopInfo
} from '../../component';
import MobileCalendar from '../TestCalendar'
import './index.less'
class PageIndex extends Component {
  state = {
    files: [],
    text: '',
    inlinetext: '',
    inputvalue: ''
  }

  open = () => {
    PageModal.open({
      title: '排班详情',
      alertTip: "这是一个测试弹框",
      content: <p>内容</p>,
      closeAlert: function () {
        console.log("关闭了...");
      }
    });
  }

  handleOnChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }


  render() {
    return (
      <PageContainer>
        <PageContent style={{ padding: 0 }}>
          <SideBoth >
            <CardTitle title="店铺信息" />
          </SideBoth>
          <Carousel infinite={true}>
            <div className="carousel_item">
              <ShopInfo style={{ width: '351px', margin: '0 auto', height: '116px' }} />
            </div>
            <div className="carousel_item">
              <ShopInfo style={{ width: '351px', margin: '0 auto', height: '116px' }} />
            </div>
            <div className="carousel_item">
              <ShopInfo style={{ width: '351px', margin: '0 auto', height: '116px' }} />
            </div>
          </Carousel>
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <SideBoth >
            <MobileCalendar key={this.props.location.pathname} />
          </SideBoth>
        </PageContent>
        <PageFooter>
          <FooterNav history={this.props.history} />
        </PageFooter>
      </PageContainer>
    );
  }
}

export default PageIndex
