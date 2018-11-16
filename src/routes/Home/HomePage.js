
import React, { Component } from 'react';
import { WhiteSpace, Button } from 'antd-mobile'
import { PageContainer, PageHeader, PageFooter, PageContent } from '../../component/PageStructure'
import {
  StatusLabel, ShopLevel, Card, Btn, CheckboxBtn, CardTitle, FileUpLoad, BlockTextArea, InlineTextArea,
  TextInput, PersonAdd, PersonIcon, FooterNav, GridNav, PageModal, ShopInfo
} from '../../component';
import MobileCalendar from '../TestCalendar'
import '../index.less'
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
    const { files, inlinetext, inputvalue } = this.state
    return (
      <PageContainer>
        <PageHeader>
          shouye
        </PageHeader>
        <PageContent>
          <MobileCalendar />
          <WhiteSpace size="lg" />
          <ShopInfo />
          <WhiteSpace size="lg" />
          <Button onClick={this.open} type="paimary">点击modal</Button>
          <CardTitle title="cardtitle" extra={<p >哈哈</p>} />
          <GridNav />
          <WhiteSpace size="lg" />
          <Card>
            <div style={{ margin: '0 0 -21px 0' }}>
              <PersonIcon
                header={<div className="status">tongg</div>}
                value={{ name: '魏颖' }}
                nameKey="name"
                handleDelClick={() => console.log('del')}
              />
              <PersonIcon
                value={{ name: '魏颖' }}
                borderStyle={{ style: { borderColor: 'rgb(27, 182, 182)' } }}
                nameKey="name" />
            </div>
          </Card>
          <WhiteSpace size="lg" />
          <Card extra={<ShopLevel />}>
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
              style={{ paddingTop: 0, }}
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
          <WhiteSpace size="lg" />

        </PageContent>
        <PageFooter>
          <FooterNav history={this.props.history} />
        </PageFooter>
      </PageContainer>
    );
  }
}

export default PageIndex
