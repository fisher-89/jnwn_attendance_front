
import React, { Component } from 'react';
// import customBiz from './js/calendar_showcase.js'
import Calendar from './libs/calendar_base.js'

import './css/mui.min.css'
import './libs/swiper.min.css'
import './libs/calendar_base.css'
import './css/showcase.css'
class MobileCalendar extends Component {
  constructor(props) {
    super(props)
    this.customBiz = {
      init: function (template) {
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

            var defaultDate = item.date;
            // 设置标题
            setTitle(defaultDate);
          },
          // 滑动回调
          swipeCallback: function (item) {
            var defaultDate = item.date;
            // 设置标题
            setTitle(defaultDate);
            // 动态新增点击样式
            calendar.addActiveStyleFordate(defaultDate);

          },
          // 调试
          isDebug: false
        });
        // 设置标题
        var titleNode = document.querySelector('.mid span');

        function setTitle(date) {
          titleNode.innerText = date;
        }
      }
    }
  }

  componentDidMount() {
    const el = document.getElementById('calendar');
    if (el) {
      this.customBiz.init();
    }
  }

  renderDayItem = (value, curr) => {
    let template = '';
    if (value.date === curr) {
      //今天
      if (value.isSelected) {
        template = '<div class="em-calendar-item em-calendar-active  isforbid{{isforbid}}" date="{{date}}"><span class="day">{{day}}</span><span class="dot dot-type1"></span></div>';
      } else {
        template = '<div class="em-calendar-item em-calendar-active  isforbid{{isforbid}}" date="{{date}}"><span class="day">{{day}}</span></div>';
      }
    } else {
      if (value.isSelected) {
        // 个性化和业务贴近
        template = '<div>"{{date}}"</div>';
      } else {
        const style = 'color:red';
        const test = 1
        template = `<div class='em-calendar-item  isforbid tip{{tip}}' date={{date}}><span class="day" test=${test} style=${style}>{{day}}</span></div>`;
      }
    }
    return template
  }
  render() {
    return (
      <div>
        <div className="mui-content">
          <div className="em-journal-title">
            <div className="em-per-block pre">
              <span className="mui-icon mui-icon-arrowleft"></span>
              <span>上一月</span>
            </div>
            <div className="em-per-block mid">
              <span>...</span>
            </div>
            <div className="em-per-block next">
              <span>下一月</span>
              <span className="mui-icon mui-icon-arrowright"></span>
            </div>
          </div>

          <div id="calendar">

          </div>

        </div>
        <div className="backToday">
          返回今天
    </div>
      </div>
    );
  }
}
MobileCalendar.defaultProps = {
  template: () => {

  }
}
export default MobileCalendar;
