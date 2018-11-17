import React, { Component } from 'react';
import moment from 'moment'
import MobileCalendar from './TestCalendar'
import './TestCalendar/css/style_1.less'
const morCount = 7;
const nightCount = 8;
const restCount = 5;
class test extends Component {

  renderWork = ( count, total) => {
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
    const todayStyle = isToday ? "border:1px solid rgb(253, 208, 0);background:#fff" : ''
    const morSpan = this.renderWork( morCount, 8);
    const nightSpan = this.renderWork( nightCount, 8);
    const restSpan = this.renderWork(restCount, 8);
    template = `<div class='em-calendar-item  isforbid${isforbid} tip${tip || ''}' date=${date} style='${todayStyle}'>\
        <div class="day">${day}</div>
        <div class="morwork">\
        ${morSpan}\
        </div>\
        <div class="nightwork">${nightSpan}</div>\
        <div class="restday">${restSpan}</div>\
        </div>`;
    return template
  }
  render() {
    return (
      <MobileCalendar
        renderDayItem={this.renderDayItem}
        onItemClick={this.onItemClick} />
    )
  }
}
export default test;
