
import React, { Component } from 'react';
import { WhiteSpace, Carousel } from 'antd-mobile'
import { PageContainer, PageFooter, PageContent, SideBoth } from '../../component/PageStructure'
import {
  CardTitle, FooterNav, PageModal, ShopInfo, Btn, MobileCalendar
} from '../../component';
import './index.less'
class PersonScheduling extends Component {
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

  handleClick = () => {
    this.props.history.push('/shop_scheduling')
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
            <CardTitle
              style={{ marginBottom: '0.2666667rem' }}
              title="店铺信息"
              extra={<Btn type="default" size="s" handleClick={this.handleClick}>查看店铺信息</Btn>}
            />
          </SideBoth>
          <Carousel infinite>
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
          <SideBoth>
            <MobileCalendar uniqueKey={this.props.location.pathname} />
            <div className="attendence">
                <div>
                出勤：10天
               （<span>早班：5天</span><span>晚班：5天</span><span>通班：5天</span>）
                </div>
                <div>排休：2天</div>
            </div>
          </SideBoth>
        </PageContent>
        <PageFooter>
          <FooterNav
            pathname={this.props.location.pathname}
            history={this.props.history}
          />
        </PageFooter>
      </PageContainer>
    );
  }
}

export default PersonScheduling
