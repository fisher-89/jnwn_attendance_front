
import React, { Component } from 'react';
import moment from 'moment'
import Mustache from 'mustache'

// import customBiz from './js/calendar_showcase.js'
import Calendar from './libs/calendar_base.js'
import { monthTransform } from './libs/datas'
import CalendarLegend from './legend.js'
// import './css/mui.min.css'
import './libs/swiper.min.css'
import './libs/calendar_base.less'
import './css/showcase.less'

class MobileCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: { month: '08', year: '2018' },
    }
  }

  componentWillReceiveProps(props) {
    const { selectData, checkedDate } = props;
    if (JSON.stringify(selectData) !== JSON.stringify(this.props.selectData)) {
      const mySwiper = this.calendar.mySwiper;
      const templ = this.calendar.SLIDER_ITEM_CONTAINER;
      this.calendar.refreshData({ ...checkedDate }, (html, onj) => {
        const activeIndex = mySwiper.activeIndex;
        const newHtml = Mustache.render(templ, { templ: html })
        mySwiper.removeSlide(activeIndex);
        mySwiper.addSlide(activeIndex, newHtml)
      })
    }
  }

  componentDidMount() {
    const { renderDayItem, onItemClick, id, selectData } = this.props;
    const el = document.getElementById('calendar');
    if (el) {
      this.initCalenda(renderDayItem, onItemClick, id, selectData);
    }
  }

  initCalenda = (template, onItemClick, id, selectData) => {
    this.calendar = new Calendar({
      swiper: `#${id}`,
      // swiper滑动容器
      container: "#calendar",
      // 上一月节点
      pre: ".swicth_pre",
      // 下一月节点
      next: ".swicth_next",
      disabledClass: 'button_disabled',
      template: template,
      // 回到今天
      backToToday: ".backToday",
      // 业务数据改变
      dataRequest: function (data, callback, _this) {
        // 无日程安排
        // var data = [{
        //   "date": "2018-11-18"
        // }, {
        //   "date": "2018-11-17"
        // }, {
        //   "date": "2018-11-16"
        // }];
        callback && callback(data);
      },
      // 点击日期事件
      onItemClick: (item) => {
        // 设置标题
        this.setTitle(item);
        onItemClick(item);
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
    const mid = monthTransform(month) + "月";
    this.setState({
      currentDate: item,
      mid,
      year
    })
    const { prev, next } = this.forbiddenPrevNext(item);
    this.calendar.mySwiper.allowSlideNext = !!next;
    this.calendar.mySwiper.allowSlidePrev = !!prev;
  }

  forbiddenPrevNext = (cur) => {
    const { month, year } = cur;
    const { range: { max, min } } = this.props;
    const maxDateStr = max ? moment(`${max}-01 00:00:00`).unix() : '';
    const minDateStr = min ? moment(`${min}-01 00:00:00`).unix() : '';
    const curDateStr = moment(`${year}-${month}-01 00:00:00`).unix();
    const prev = !minDateStr || curDateStr < minDateStr;
    const next = !maxDateStr || curDateStr < maxDateStr;
    return {
      prev, next
    }
  }

  render() {
    const { id, className } = this.props;
    const { mid } = this.state
    const { prev, next } = this.forbiddenPrevNext(this.state.currentDate);
    return (
      <div className={className}>
        <CalendarLegend />
        <div className="mui-content">
          <div className="em-journal-title">
            <div className="current-month">
              <span className="swicth_pre" style={!prev ? { display: 'none' } : null} />
              <span className="swicth_pre_disabled" style={prev ? { display: 'none' } : null} />
              <span className="mid">{mid}</span>
              <span className="swicth_next" style={!next ? { display: 'none' } : null} />
              <span className="next_disabled" style={next ? { display: 'none' } : null} />
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

  },
  range: {
    min: '',
    max: moment().add(1, 'months').format('YYYY-MM')
  }
}
export default MobileCalendar;
