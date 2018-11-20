
import React, { Component } from 'react';
import moment from 'moment'
// import customBiz from './js/calendar_showcase.js'
import Calendar from './libs/calendar_base.js'
import { monthTransform } from './libs/datas'
import CalendarLegend from './legend.js'
import './css/mui.min.css'
import './libs/swiper.min.css'
import './libs/calendar_base.less'
import './css/showcase.less'

class MobileCalendar extends Component {
  constructor(props) {
    super(props);
    console.log('constructor:', props);
    this.state = {
      currentDate: { month: '08', year: '2018' },
      nowDate: { year: new Date().getFullYear(), month: new Date().getMonth() + 1 }
    }
  }

  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps')
    this.calendar.refresh();

    // const { id } = props;
    // // if (JSON.stringify(props) !== this.props) {
    // const { renderDayItem, onItemClick } = this.props;
    // const el = document.getElementById('calendar');
    // // const swiperContainer = document.querySelector('.swiper-container')
    // if (el ) {
    //   this.customBiz.init(renderDayItem, onItemClick, id);
    // }
    // }
  }

  componentDidMount() {
    console.log('componentDidMount')
    const { renderDayItem, onItemClick, id } = this.props;
    const el = document.getElementById('calendar');
    if (el) {
      this.initCalenda(renderDayItem, onItemClick, id);
    }
  }

  initCalenda = (template, onItemClick, id) => {
    this.calendar = new Calendar({
      swiper: `#${id}`,
      // swiper滑动容器
      container: "#calendar",
      // 上一月节点
      pre: ".pre",
      // 下一月节点
      next: ".next",
      template: template,
      // 回到今天
      backToToday: ".backToday",
      // 业务数据改变
      dataRequest: function (currdate, callback, _this) {
        // 无日程安排
        var data = [{
          "date": "2018-04-18"
        }, {
          "date": "2018-04-17"
        }, {
          "date": "2018-04-16"
        }];
        callback && callback(data);
      },
      // 点击日期事件
      onItemClick: (item) => {
        // 设置标题
        this.setTitle(item);
        onItemClick(item)
      },
      // 滑动回调
      swipeCallback: (item) => {
        var defaultDate = item.date;
        // 设置标题
        this.setTitle(item);
        // 动态新增点击样式
        this.calendar.addActiveStyleFordate(defaultDate);
      },
      // 调试
      isDebug: false
    });
  }

  setTitle = (item) => {
    const { month, year } = item;
    // currentDate = item.date;
    const mid = monthTransform(month) + "月";
    this.setState({
      currentDate: item,
      mid,
      year
    })
  }
  render() {
    const { id, className } = this.props;
    const { year, month } = this.state.currentDate;
    const { nowDate, mid } = this.state
    const nowDateStr = moment(`${nowDate.year}-${nowDate.month}-01 00:00:00`).unix();
    const curDateStr = moment(`${year}-${month}-01 00:00:00`).unix();
    const nextStyleClass = curDateStr < nowDateStr ? 'next' : 'next_disabled';
    return (
      <div className={className}>
        <CalendarLegend />
        <div className="mui-content">
          <div className="em-journal-title">
            <div className="current-month">
              <span className="pre" />
              <span className="mid">{mid}</span>
              <span className={nextStyleClass} />
            </div>
            <div className="year">{this.state.year}</div>
          </div>
          <div id="calendar">
            <div className="em-calendar-container">
              <div className="em-week">
                <span >日</span>
                <span>一</span>
                <span>二</span>
                <span>三</span>
                <span>四</span>
                <span>五</span>
                <span>六</span>
              </div>
              <div className="swiper-container" id={id}>
                <div className="swiper-wrapper">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
MobileCalendar.defaultProps = {
  uniqueKey: 'calendar',
  renderDayItem: (value, curr) => {
    let template = '';
    const { isforbid, date, tip, day, isholiday } = value;
    const realValue = isholiday === 1 ? '节' : day
    if (value.date === curr) {
      //今天
      if (value.isSelected) {
        template = `<div class='em-calendar-item em-calendar-active  isforbid${isforbid}' date=${date}>
          <span class="day">${realValue}</span>
        </div>`;
      } else {
        template = `<div class='em-calendar-item em-calendar-active  isforbid${isforbid}' date=${date}>
        <span class="day">${realValue}</span>
        </div>`;
      }
    } else {
      if (value.isSelected) {
        // 个性化和业务贴近
        template = `<div class='em-calendar-item em-calendar-active  isforbid${isforbid} tip${tip || ''}' date=${date}>
        <span class="day night">${realValue}</span>
        </div>`;
      } else {
        template = `<div class='em-calendar-item  isforbid${isforbid} tip${tip || ''}' date=${date}>
        <span class="day morning"  >${realValue}</span>
        </div>`;
      }
    }
    return template
  },
  onItemClick: () => {

  }
}
export default MobileCalendar;
