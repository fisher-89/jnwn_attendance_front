
import React, { Component } from 'react';
import { WhiteSpace } from 'antd-mobile'
import { PageContainer, PageHeader, PageFooter, PageContent } from '../../component/PageStructure'
import { ListLabel, Card, Btn, CheckboxBtn, CardTitle, FileUpLoad } from '../../component';
import '../index.less'
class PageIndex extends Component {
  state = {
    files: []
  }
  fileOnChange = (files) => {
    console.log(files);
    this.setState({
      files
    })
  }
  render() {
    const { files } = this.state
    return (
      <PageContainer>
        <PageHeader>
          shouye
        </PageHeader>
        <PageContent>
          <CardTitle title="cardtitle" extra={<p >哈哈</p>} />
          <Card >
            <FileUpLoad
              files={files}
              title="上传图片"
              onChange={this.fileOnChange}
              history={this.props.history}
              multiple
            />
          </Card>
          <WhiteSpace size="lg"/>
          <Card>
            <CheckboxBtn>多选框</CheckboxBtn>
            <CheckboxBtn checked>中途打卡</CheckboxBtn>
            <div>
              内容
              <Btn size="xs" fill>按钮</Btn>
              <ListLabel>标签</ListLabel>
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
            </div>
          </Card>
        </PageContent>
        <PageFooter>
          尾
        </PageFooter>
      </PageContainer>
    );
  }
}

export default PageIndex
