import React, { Component } from 'react';
import moment from 'moment'
import { WhiteSpace, Carousel } from 'antd-mobile'
import { PageContainer, PageFooter, PageContent, SideBoth } from '../../component/PageStructure'
import {
  CardTitle, SchedulingInfo, ShopInfo, Btn, MobileCalendar, PageModal, AttendenceType,
  PersonIcon, SwitchDate
} from '../../component';
import '../../component/MobileCalendar/css/style_1.less'
import './index.less'
const morCount = 7;
const nightCount = 8;
const restCount = 1;
const allworkCount = 6;
const tableTitle = ['员工姓名', '早班', '晚班', '通过', '排班', '出勤(天)'];

const data = [
  { date: '2018-11-01', edit: true },
  { date: '2018-11-02', edit: true },
  { date: '2018-11-03', edit: true },
  { date: '2018-11-04', edit: true },
  { date: '2018-11-05', edit: false },
  { date: '2018-11-06', edit: false },
  { date: '2018-11-07', edit: true },
  { date: '2018-11-08', edit: true },
  { date: '2018-11-09', edit: true },
  { date: '2018-11-10', edit: true },
  { date: '2018-11-11', edit: false },
  { date: '2018-11-12', edit: false },
  { date: '2018-11-13', edit: false },
  { date: '2018-11-14', edit: false },
  { date: '2018-11-15', edit: false },
  { date: '2018-11-16', edit: false },
  { date: '2018-11-17', edit: false },
  { date: '2018-11-18', edit: false },
  { date: '2018-11-19', edit: false },
  { date: '2018-11-20', edit: true },
  { date: '2018-11-21', edit: true },
  { date: '2018-11-22', edit: true },
  { date: '2018-11-23', edit: true },
  { date: '2018-11-24', edit: true },
  { date: '2018-11-25', edit: true },
  { date: '2018-11-26', edit: true },
  { date: '2018-11-27', edit: true },
  { date: '2018-11-28', edit: true },
  { date: '2018-11-29', edit: true },
  { date: '2018-11-30', edit: true },



]
class ShopScheduling extends Component {
  state = {

    curShop: [{ date: '2018-11-01', edit: true },
    { date: '2018-11-02', edit: true },
    { date: '2018-11-03', edit: true },
    { date: '2018-11-04', edit: true },
    { date: '2018-11-05', edit: false },
    { date: '2018-11-06', edit: true },
    { date: '2018-11-07', edit: true },
    { date: '2018-11-08', edit: true },
    { date: '2018-11-09', edit: true },
    { date: '2018-11-10', edit: true },
    { date: '2018-11-11', edit: false },
    { date: '2018-11-12', edit: false },
    { date: '2018-11-13', edit: false },
    { date: '2018-11-14', edit: false },
    { date: '2018-11-15', edit: false },
    { date: '2018-11-16', edit: false },
    { date: '2018-11-17', edit: false },
    { date: '2018-11-18', edit: false },
    { date: '2018-11-19', edit: false },
    { date: '2018-11-20', edit: true },
    { date: '2018-11-21', edit: true },
    { date: '2018-11-22', edit: true },
    { date: '2018-11-23', edit: true },
    { date: '2018-11-24', edit: true },
    { date: '2018-11-25', edit: true },
    { date: '2018-11-26', edit: true },
    { date: '2018-11-27', edit: true },
    { date: '2018-11-28', edit: true },
    { date: '2018-11-29', edit: true },
    { date: '2018-11-30', edit: true },]
  }
  open = (item) => {
    PageModal.open({
      title: '排班详情',
      alertTip: "这是一个测试弹框",
      content: this.eidtSchedual(item),
      footer: false,
      closeAlert: function () {
        console.log("关闭了...");
      }
    });
  }

  dealCurrentStyle = (date) => {
    const data = this.state.curShop
    const current = data.find(item => item.date === date);
    let borderTop = true;
    let borderLeft = true;
    if (current) {
      const isEidt = current.edit;
      const lastDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
      const lastweekDate = moment(date).subtract(7, 'days').format('YYYY-MM-DD');
      const lastDateData = data.find(item => item.date === lastDate);
      const lastWeekData = data.find(item => item.date === lastweekDate);
      if (lastWeekData && lastWeekData.edit) {
        borderTop = false
      }
      if (lastDateData && lastDateData.edit && moment(date).format('d') !== '0') {
        borderLeft = false
      }
      return {
        edit: isEidt ? 1 : 0,
        borderTop,
        borderLeft
      }
    }
    else {
      return {
        edit: 0,
        borderTop,
        borderLeft
      }
    }

  }

  onItemClick = (item) => {
    this.open(item);
  }

  swicthDate = (direction) => {
    console.log(direction)
  }

  renderSchedual = (item) => {
    return (
      <div className="shop_scheduling_info">
        <SwitchDate />
        <div className="staff_scheduling_info">
          <AttendenceType type="morning" />
          <div className="staff_name_container">
            <PersonIcon
              itemStyle={{ width: '1.70666667rem', height: '2.24rem' }}
              value={{ staff_name: '王丽丽' }}
              nameKey="staff_name"
            />
            <PersonIcon
              itemStyle={{ width: '1.70666667rem', height: '2.24rem' }}
              value={{ staff_name: '王丽丽' }}
              nameKey="staff_name"
            />
            <PersonIcon
              itemStyle={{ width: '1.70666667rem', height: '2.24rem' }}
              value={{ staff_name: '王丽丽' }}
              nameKey="staff_name"
            />
            <PersonIcon
              itemStyle={{ width: '1.70666667rem', height: '2.24rem' }}
              value={{ staff_name: '王丽丽' }}
              nameKey="staff_name"
            />
            <PersonIcon
              itemStyle={{ width: '1.70666667rem', height: '2.24rem' }}
              value={{ staff_name: '王丽丽' }}
              nameKey="staff_name"
            />
            <PersonIcon
              itemStyle={{ width: '1.70666667rem', height: '2.24rem' }}
              value={{ staff_name: '王丽丽' }}
              nameKey="staff_name"
            />
          </div>
          <AttendenceType type="night" />
          <div className="staff_name_container">
            <PersonIcon
              itemStyle={{ width: '1.70666667rem', height: '2.24rem' }}
              value={{ staff_name: '王丽丽' }}
              nameKey="staff_name"
            />
          </div>
          <AttendenceType type="rest" />
          <div className="staff_name_container">
            <PersonIcon
              itemStyle={{ width: '1.70666667rem', height: '2.24rem' }}
              value={{ staff_name: '王丽丽' }}
              nameKey="staff_name"
            />
          </div>
          <AttendenceType type="all" />
          <div className="staff_name_container">
            <PersonIcon
              itemStyle={{ width: '1.70666667rem', height: '2.24rem' }}
              value={{ staff_name: '王丽丽' }}
              nameKey="staff_name"
            />
          </div>
        </div>
      </div>
    )
  }

  eidtSchedual = () => {
    return (
      <div className="shop_scheduling_info">
        <SwitchDate onClick={this.swicthDate} date="2018-11-01" />
        <div className="staff_scheduling_info">
          <div className="eidt_title">
            {tableTitle.map(item => (
              <div key={item}>{item}</div>
            ))}
          </div>
          {[1, 2, 4, 5, 6, 7, 8, 9, 11, 12].map(item => (
            <div className="name_item" key={item}>
              <div>wanglili</div>
              <div className="edit_morning ">
                <span className="active"></span>
              </div>
              <div className="edit_night readonly">
                <span className="active"></span>
              </div>
              <div className="edit_all">
                <span className="active"></span>
              </div>
              <div className="edit_rest">
                <span className="active"></span>
              </div>
              <div className="work_day">0</div>
            </div>
          ))}

        </div>
      </div>
    )
  }

  renderWork = (count, total) => {
    let temp = '';
    let html = ''
    for (let i = 1; i <= total; i++) {
      if (i <= count) {
        temp = `<span class='work'></span>`;
      }
      else {
        temp = '<span></span>';
      }
      html = `${html}${temp}`
    }
    return html;
  }

  renderDayItem = (value, curr) => {
    const nowDate = moment().format('YYYY-MM-DD');
    let template = '';
    const { isforbid, date, tip, day } = value;
    const isToday = date === nowDate;
    const todayStyle = isToday ? "border:1px solid rgb(253, 208, 0);background:#fff;" : '';
    const currentData = this.dealCurrentStyle(date);
    const { edit, borderTop, borderLeft } = currentData;
    const curentStyle = `${!borderTop ? 'border-top-color:transparent;' : ''}${!borderLeft ? 'border-left-color:transparent;' : ''}`
    const morSpan = this.renderWork(morCount, 8);
    const nightSpan = this.renderWork(nightCount, 8);
    const allworkSpan = this.renderWork(allworkCount, 8);
    const restSpan = this.renderWork(restCount, 8);
    template = `<div class='em-calendar-item  isforbid${isforbid} tip${tip || ''} edit${edit}' date=${date} 
    style='${curentStyle}${todayStyle}'>\
    <div class="day">${day}</div>\
        <div class="morwork">\
        ${morSpan}\
        </div>\
        <div class="nightwork">${nightSpan}</div>\
        <div class="allwork">${allworkSpan}</div>\
        <div class="restday">${restSpan}</div>\
        </div>`;
    return template
  }

  render() {
    return (
      <PageContainer>
        <PageContent style={{ padding: 0 }}>
          <SideBoth >
            <CardTitle
              style={{ marginBottom: '0.2666667rem' }}
              title="店铺信息"
            />
          </SideBoth>
          <Carousel
            infinite
            afterChange={() => {
              this.setState({ curShop: data })
            }}
          >
            <div className="carousel_item">
              <ShopInfo style={{ width: '9.36rem', margin: '0 auto', height: '3.09333333rem' }} />
            </div>
            <div className="carousel_item">
              <ShopInfo style={{ width: '9.36rem', margin: '0 auto', height: '3.09333333rem' }} />
            </div>
            <div className="carousel_item">
              <ShopInfo style={{ width: '9.36rem', margin: '0 auto', height: '3.09333333rem' }} />
            </div>
          </Carousel>
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <SideBoth>
            <MobileCalendar
              className="shop_scheduling"
              type="1"
              id="shop_scheduling"
              renderDayItem={this.renderDayItem}
              uniqueKey={this.props.location.pathname}
              onItemClick={this.onItemClick} />
            <WhiteSpace size="lg" />
            <SchedulingInfo />
          </SideBoth>
        </PageContent>
        <PageFooter>
          <div className="footer_btn">
            <div>
              <Btn type="default" size="l">取消</Btn>
            </div>
            <div>
              <Btn type="primary" fill size="l" style={{ color: 'rgb(53,48,49)' }}>提交</Btn>
            </div>
          </div>
        </PageFooter>
      </PageContainer >

    )
  }
}
export default ShopScheduling;
