
import React, { Component } from 'react';
// import customBiz from './js/calendar_showcase.js'
import Calendar from './libs/calendar_base.js'
import { monthTransform } from './libs/datas'
import './css/mui.min.css'
import './libs/swiper.min.css'
import './libs/calendar_base.less'
import './css/showcase.less'
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

            // 设置标题
            setTitle(item);
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

  componentDidMount() {
    const el = document.getElementById('calendar');
    if (el) {
      this.customBiz.init(this.renderDayItem);
    }
  }

  renderDayItem = (value, curr) => {
    let template = '';
    const { isforbid, date, tip, day } = value;
    if (value.date === curr) {
      //今天
      if (value.isSelected) {
        template = `<div class='em-calendar-item em-calendar-active  isforbid${isforbid}' date=${date}><span class="day">${day}</span><span class="dot dot-type1"></span></div>`;
      } else {
        template = `<div class='em-calendar-item em-calendar-active  isforbid${isforbid}' date=${date}><span class="day">${day}</span></div>`;
      }
    } else {
      if (value.isSelected) {
        // 个性化和业务贴近
        template = `<div class='em-calendar-item em-calendar-active  isforbid${isforbid} tip${tip}' date=${date}><span class="day">${day}</span><span class="dot dot-type1"></span></div>`;
      } else {
        template = `<div class='em-calendar-item  isforbid${isforbid} tip${tip}' date=${date}><span class="day"  >${day}</span></div>`;
      }
    }
    return template
  }
  // <div className="em-per-block pre">
  //           <span className="mui-icon mui-icon-arrowleft"></span>
  //           <span>上一月</span>
  //         </div>
  //         <div className="em-per-block mid">
  //           <span>...</span>
  //         </div>
  //         <div className="em-per-block next">
  //           <span>下一月</span>
  //           <span className="mui-icon mui-icon-arrowright"></span>
  //         </div>
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
