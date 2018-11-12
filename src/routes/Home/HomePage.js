
import React, { Component } from 'react';
import { WhiteSpace } from 'antd-mobile'
import { PageContainer, PageHeader, PageFooter, PageContent } from '../../component/PageStructure'
import {
  StatusLabel, ShopLevel,Card, Btn, CheckboxBtn, CardTitle, FileUpLoad, BlockTextArea, InlineTextArea,
  TextInput

} from '../../component';
import '../index.less'
class PageIndex extends Component {
  state = {
    files: [],
    text: '',
    inlinetext: '',
    inputvalue: ''
  }
  handleOnChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  textAareChange = () => {
    this.setState({

    })
  }

  render() {
    const { files, inlinetext, inputvalue } = this.state
    return (
      <PageContainer>
        <PageHeader>
          shouye
        </PageHeader>
        <PageContent>
          <CardTitle title="cardtitle" extra={<p >哈哈</p>} />
          <Card extra={<ShopLevel/>}>
            <FileUpLoad
              files={files}
              title="上传图片"
              onChange={(value) => this.handleOnChange('files', value)}
              multiple
            />
          </Card>
          <WhiteSpace size="lg" />
          <Card>
            <BlockTextArea
              value={inputvalue}
              title="多行文本"
              type="text"
              range={{ max: '10', min: '1' }}
              onChange={(value) => this.handleOnChange('text', value)}
            />
          </Card>
          <WhiteSpace size="lg" />
          <Card>
            <InlineTextArea
              value={inlinetext}
              title="培训地址"
              onChange={(value) => this.handleOnChange('inlinetext', value)}
            />
          </Card>

          <WhiteSpace size="lg" />
          <Card
            extra={<StatusLabel fillColor='red'>已完成</StatusLabel>}>
            <TextInput
              value={inlinetext}
              style={{ paddingTop: 0,  }}
              title="单行文本"
              onChange={(value) => this.handleOnChange('inlinetext', value)}
            />
            <TextInput
              value={inlinetext}
              
              title="单行文本"
              onChange={(value) => this.handleOnChange('inlinetext', value)}
            />
            <TextInput
              value={inlinetext}
              style={{ paddingBottom: 0, borderBottom: 'none' }}
              title="单行文本"
              onChange={(value) => this.handleOnChange('inlinetext', value)}
            />
          </Card>
          <WhiteSpace size="lg" />

          <Card>
            <CheckboxBtn>多选框</CheckboxBtn>
            <CheckboxBtn checked>中途打卡</CheckboxBtn>
            <div>
              内容
              <Btn size="xs" fill>按钮</Btn>
              <StatusLabel>标签</StatusLabel>
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
