
import React, { Component } from 'react';
import { WhiteSpace } from 'antd-mobile'
import { PageContainer, PageHeader, PageFooter, PageContent } from '../../component/PageStructure'
import { Btn } from '../../component'
import '../index.less'
class PageIndex extends Component {
  render() {
    return (
      <PageContainer>
        <PageHeader>
          shouye
        </PageHeader>
        <PageContent>
        <div>
          内容
        <Btn size="xs" fill>按钮</Btn>

          <WhiteSpace />
          <Btn size="s" fill type="warning">按钮</Btn>
          <WhiteSpace />
          <Btn size="m" fill type="default">按钮</Btn>
          <WhiteSpace />
          <Btn size="l" fill>按钮</Btn>
          <WhiteSpace />
          <Btn size="xs" type="warning">按钮</Btn>
          <WhiteSpace />
          <Btn size="s" type="default">按钮</Btn>
          <WhiteSpace />
          <Btn size="m" style={{ color: '#7f7b7d' }}>按钮</Btn>
        <WhiteSpace />
        <Btn size="l" >按钮</Btn>
        <div style={{height:'500px'}}></div>


        <WhiteSpace />
        </div>
        </PageContent>
      <PageFooter>
        尾
        </PageFooter>
      </PageContainer >
    );
  }
}

export default PageIndex
