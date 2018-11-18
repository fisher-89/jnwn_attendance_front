import React, { Component } from 'react';
import moment from 'moment'
import MobileCalendar from './TestCalendar'
import { PageContainer, PageContent } from './../component/PageStructure'

import './TestCalendar/css/style_1.less'
const morCount = 7;
const nightCount = 8;
const restCount = 5;
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
class test extends Component {

  dealCurrentStyle = (date) => {
    const current = data.find(item => item.date === date);

    let borderTop = true;
    let borderLeft = true
    if (current) {
      const isEidt = current.edit;
      const lastDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
      const lastweekDate = moment(date).subtract(7, 'days').format('YYYY-MM-DD')
      const lastDateData = data.find(item => item.date === lastDate);
      const lastWeekData = data.find(item => item.date === lastweekDate);
      if (lastWeekData && lastWeekData.edit) {
        borderTop = false
      }
      if (lastDateData && lastDateData.edit) {
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
    const curentStyle = `${!borderTop?'border-top-color:transparent;':''}${!borderLeft?'border-left-color:transparent;':''}`
    const morSpan = this.renderWork(morCount, 8);
    const nightSpan = this.renderWork(nightCount, 8);
    const restSpan = this.renderWork(restCount, 8);
    template = `<div class='em-calendar-item  isforbid${isforbid} tip${tip || ''} edit${edit}' date=${date} 
    style='${todayStyle}${curentStyle}'>\
    <div class="day">${day}</div>\
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
      <PageContainer>
        <PageContent >
          <MobileCalendar
            renderDayItem={this.renderDayItem}
            onItemClick={this.onItemClick} />
        </PageContent>
      </PageContainer>

    )
  }
}
export default test;
