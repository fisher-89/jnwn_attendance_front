import React, { Component } from 'react'
import {Icon} from "antd-mobile"
import { PageContainer, PageHeader, PageContent } from '../../component/PageStructure'

import Message from '../../component/Message'
import TimeLine, { LineItem } from '../../component/TimeLine'
import { Btn } from '../../component/index'
import './index.less'


class PageIndex extends Component {
  render() {

    return (
      <PageContainer>
        <PageHeader>
        </PageHeader>
        <PageContent>
          <div style={{marginTop:'20px'}} >
        <TimeLine>
          <LineItem>
            <div className="time">
              <span >打卡时间</span>
              <span>8:28</span>
              <Btn size="xs" type="normal" inline>按钮</Btn>
            </div>
            <div className="img">
              <img src="/icons/all_shift.png" alt="打卡地点"/>
              </div>
            <div className="clock_address">地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址 </div>
            <div className={"change_shop"}>
             <span></span>
            打卡店铺
            </div>
          </LineItem>
          <LineItem>
            <div className="time">
              <span>打卡时间</span>
              <span>8:28</span>
              <Btn size="xs" type="warning" inline>中途打卡</Btn>
            </div>
            <div className="img">
              <img src="/icons/all_shift.png" alt="打卡地点"/>
              </div>
            <div className="clock_address">地址 </div>
            
          </LineItem>
          <LineItem>
            <div className="time">
              <span>打卡时间</span>
              <span>8:28</span>
              <Btn size="xs" type="warning" inline>中途打卡</Btn>
            </div>
            <div className="img">
              <img src="/icons/all_shift.png" alt="打卡地点"/>
              </div>
            <div className="clock_address">地址 </div>
            
          </LineItem>
           <LineItem>
            <div className="time">
              <span>打卡时间</span>
              <span>8:28</span>
              <Btn size="xs" type="warning" inline>中途打卡</Btn>
            </div>
            <div className="img">
              <img src="/icons/all_shift.png" alt="打卡地点"/>
              </div>
            <div className="clock_address">地址 </div>   
          </LineItem>
        </TimeLine>
        </div>
        </PageContent>
       
        </PageContainer>
    )
  }
}

export default PageIndex
