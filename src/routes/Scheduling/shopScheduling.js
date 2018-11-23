import React, { Component } from 'react';
import moment from 'moment'

import { WhiteSpace, Carousel } from 'antd-mobile'
import { PageContainer, PageFooter, PageContent, SideBoth } from '../../component/PageStructure'
import {
  CardTitle, SchedulingInfo, ShopInfo, Btn, MobileCalendar, PageModal, AttendenceType,
  PersonIcon, SwitchDate, Spin, LockIn
} from '../../component';
import '../../component/MobileCalendar/css/style_1.less'
import './index.less'
import '../index.less'
import { connect } from 'dva';
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

@connect()
class ShopScheduling extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { shopSn } } } = props;
    this.state = {
      shopSn,
      alertStatus: false,
      lockVisible: true,
      checkedDate: '2018-10-01',
      details: {
        '2018-11-01': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-02': [
          {
            "staff_sn": 110100,
            "staff_name": "张",
            "date": "2018-11-10",
            "duty_id": 0,
            "shift_status_id": 2
          },
        ],
        '2018-11-03': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-04': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-05': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-06': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-07': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-08': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-09': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-10': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-11': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-12': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-13': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-14': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-15': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-16': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-17': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-18': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-19': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-20': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-21': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-22': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-23': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-24': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-25': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-26': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-27': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-28': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-29': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
        '2018-11-30': [
          {
            "staff_sn": 110101,
            "staff_name": "张博涵1",
            "date": "2018-11-10",
            "duty_id": 1,
            "shift_status_id": 0
          },
        ],
      },

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
  }

  open = (item) => {
    this.setState({
      alertStatus: true
    })
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
    const { selectData = [] } = this.state
    this.setState({
      checkedDateInfo: item,
      checkedDate: item.checkedDate,
      selectData: [...selectData, { date: item.checkedDate }]
    }, () => {
      this.open(item);
    })
  }

  swicthDate = (date) => {
    this.setState({
      checkedDate: date
    })
  }

  swicthShiftStatus = (item, status) => {
    const { details, checkedDate } = this.state;
    const staffSchedule = details[checkedDate]
    const newStaffSchedule = staffSchedule.map(staff => {
      const newStaff = { ...staff }
      if (staff.staff_sn === item.staff_sn) {
        newStaff.shift_status_id = status;
      }
      return newStaff
    })
    this.setState({
      details: {
        ...details,
        [checkedDate]: newStaffSchedule
      }
    }, () => {
    })
  }

  renderSchedual = (item) => {
    const { checkedDate } = this.state;
    return (
      <div className="shop_scheduling_info">
        <SwitchDate onClick={this.swicthDate} date={checkedDate} />
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

  editSchedual = () => {
    const { checkedDate, details } = this.state;
    const staffSchedule = details[checkedDate] || [];
    return (
      <div className="shop_scheduling_info">
        <SwitchDate
          onChange={this.swicthDate}
          date={checkedDate}
        />
        <div className="staff_scheduling_info">
          <div className="eidt_title">
            {tableTitle.map(item => (
              <div key={item}>{item}</div>
            ))}
          </div>
          {staffSchedule.map(item => {
            const staffClass = item.duty_id === 1 ? 'shop_manager' : '';
            const days = item.shift_status_id !== 3 ? 1 : 0
            return (
              <div className="name_item" key={item.staff_sn}>
                <div className={staffClass}>{item.staff_name}</div>
                <div className="edit_morning " onClick={() => this.swicthShiftStatus(item, 0)}>
                  <span
                    className={item.shift_status_id === 0 ? 'active' : ''}>
                  </span>
                </div>
                <div className="edit_night" onClick={() => this.swicthShiftStatus(item, 1)}>
                  <span
                    className={item.shift_status_id === 1 ? 'active' : ''}>
                  </span>
                </div>
                <div className="edit_all" onClick={() => this.swicthShiftStatus(item, 2)}>
                  <span
                    className={item.shift_status_id === 2 ? 'active' : ''}>
                  </span>
                </div>
                <div className="edit_rest" onClick={() => this.swicthShiftStatus(item, 3)}>
                  <span
                    className={item.shift_status_id === 3 ? 'active' : ''}>
                  </span>
                </div>
                <div className="work_day">{days}</div>
              </div>
            )
          }
          )}
        </div>
      </div>
    )
  }

  submit = () => {
    const { details, shopSn } = this.state;
    const { dispatch } = this.props;

    dispatch({
      type: 'schedule/editSchedule',
      payload: {
        staff_sn: shopSn,
        params: {
          "ym":
            details
        }
      }

    })
  }

  renderWork = (count) => {
    let temp = '';
    let html = ''
    for (let i = 1; i <= count; i++) {
      temp = `<span class='work'></span>`;
      html = `${html}${temp}`
    }
    return html;
  }

  renderDayItem = (value, curr) => {
    const { selectData = [] } = this.state;
    const selectedDate = selectData.map(item => item.date)
    const nowDate = moment().format('YYYY-MM-DD');
    let template = '';
    const { isforbid, date, tip, day } = value;
    const isToday = date === nowDate;
    const todayStyle = isToday ? "border:1px solid rgb(253, 208, 0);background:#fff;" : '';
    const currentData = this.dealCurrentStyle(date);
    const { edit, borderTop, borderLeft } = currentData;
    const curentStyle = `${!borderTop ? 'border-top-color:transparent;' : ''}${!borderLeft ? 'border-left-color:transparent;' : ''}`
    const activeStyle = `${selectedDate.indexOf(date) !== -1 ? 'background:rgba(253, 208, 0, 0.1);' : ''}`;
    const morSpan = this.renderWork(morCount, 8);
    const nightSpan = this.renderWork(nightCount, 8);
    const allworkSpan = this.renderWork(allworkCount, 8);
    const restSpan = this.renderWork(restCount, 8);
    template = `<div class='em-calendar-item  isforbid${isforbid} tip${tip || ''} edit${edit}' date=${date} 
    style='${curentStyle}${todayStyle}${activeStyle}'>\
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
    const { alertStatus, lockVisible } = this.state;
    return (
      <Spin>
        <PageModal
          title='排班详情'
          alertTip="这是一个测试弹框"
          alertStatus={alertStatus}
          content={this.editSchedual()}
          closeAlert={
            (visible) => {
              this.setState({ alertStatus: visible })
            }
          }
        />
        <LockIn visible={lockVisible} />
        <PageContainer className={lockVisible ? 'blur' : ''}>
          <PageContent style={{ padding: 0 }}>
            <SideBoth >
              <CardTitle
                style={{ marginBottom: '0.2666667rem' }}
                title="店铺信息"
              />
            </SideBoth>
            <Carousel
              infinite
              afterChange={(i) => {
                this.setState({ curShop: data, shopSn: i })
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
                id={`shop_scheduling`}
                renderDayItem={this.renderDayItem}
                uniqueKey={this.props.location.pathname}
                onItemClick={this.onItemClick}
                selectData={this.state.selectData}
                checkedDate={this.state.checkedDateInfo}
              />
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
                <Btn type="primary"
                  fill size="l"
                  style={{ color: 'rgb(53,48,49)' }}
                  handleClick={this.submit}
                >提交</Btn>
              </div>
            </div>
          </PageFooter>
        </PageContainer >
      </Spin>

    )
  }
}
export default ShopScheduling;
