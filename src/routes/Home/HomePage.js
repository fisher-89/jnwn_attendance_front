
import React, { Component } from 'react';
import { PageContainer, PageHeader, PageFooter, PageContent } from '../../component/PageStructure'
class PageIndex extends Component {
  render() {
    console.log(this.props)
    return (
      <PageContainer>
        <PageHeader>
          shouye
        </PageHeader>
        <PageContent>
          内容
        </PageContent>
        <PageFooter>
          尾
        </PageFooter>
      </PageContainer>
    );
  }
}

export default PageIndex
