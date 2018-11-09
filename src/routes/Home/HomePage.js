
import React, { Component } from 'react';
import {Button} from 'antd-mobile'
import { PageContainer, PageHeader, PageFooter, PageContent } from '../../component/PageStructure'
import '../index.less'
class PageIndex extends Component {
  render() {
    return (
      <PageContainer>
        <PageHeader>
          shouye
        </PageHeader>
        <PageContent>
          内容
          <Button className="test">Ceshi </Button>
        </PageContent>
        <PageFooter>
          尾
        </PageFooter>
      </PageContainer>
    );
  }
}

export default PageIndex
