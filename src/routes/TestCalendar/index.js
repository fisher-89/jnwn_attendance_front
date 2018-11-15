
import React, { Component } from 'react';
import customBiz from './js/calendar_showcase.js'
import './css/mui.min.css'
import './libs/swiper.min.css'
import './libs/calendar_base.css'
import './css/showcase.css'

class MobileCalendar extends Component {
  componentDidMount() {
    const el = document.getElementById('calendar');
    if (el) {
      customBiz.init(this.renderDayItem);
    }
  }

  renderDayItem = (value,curr)=> {
    let template='';
    if (value.date == curr) {
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
        const style='color:red';
        const test=1
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

export default MobileCalendar;
