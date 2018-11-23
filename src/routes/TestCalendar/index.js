
import React, { Component } from 'react';
// import customBiz from './js/calendar_showcase.js'
import Calendar from './libs/calendar_base.js'
import { monthTransform } from './libs/datas'
// import './css/mui.min.css'
import './libs/swiper.min.css'
import './libs/calendar_base.less'
import './css/showcase.less'
class MobileCalendar extends Component {
  constructor(props) {
    super(props)
    this.customBiz = {
      init: function (template, onItemClick) {
        // 初始化日历
        var calendar = new Calendar({
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
          onItemClick: function (item) {
            // 设置标题
            setTitle(item);
            onItemClick(item);
          },
          // 滑动回调
          swipeCallback: function (item) {
            var defaultDate = item.date;
            // 设置标题
            setTitle(item);
            // 动态新增点击样式
            calendar.addActiveStyleFordate(defaultDate);
          },
          // 调试
          isDebug: false
        });
        // 设置标题
        var titleNode = document.querySelector('.current-month span.mid');
        var yearNode = document.querySelector('.em-journal-title .year');

        function setTitle(item) {
          const { month, year } = item
          titleNode.innerText = monthTransform(month) + "月";
          yearNode.innerText = year;

        }
      }
    }
  }

  componentWillReceiveProps(props) {
    const { key } = props;
    if (key !== this.props.key) {
      const { renderDayItem, onItemClick } = this.props;
      const el = document.getElementById('calendar');
      const swiperContainer = document.querySelector('.swiper-container')
      if (el && swiperContainer) {
        this.customBiz.init(renderDayItem, onItemClick);
      }
    }

  }
  componentDidMount() {
    const { renderDayItem, onItemClick } = this.props;
    const el = document.getElementById('calendar');
    const swiperContainer = document.querySelector('.swiper-container')
    if (el && swiperContainer) {
      this.customBiz.init(renderDayItem, onItemClick);
    }
  }

  render() {
    return (
      <div className="mui-content">
        <div className="em-journal-title">
          <div className="current-month">
            <span className="pre" />
            <span className="mid">...</span>
            <span className="next" />
          </div>
          <div className="year">2018</div>
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
            <div className="swiper-container">
              <div className="swiper-wrapper">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
MobileCalendar.defaultProps = {
  key: 'calendar',
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
