import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd-mobile'
import classnames from 'classnames'
import moment from 'moment'

import CalendarLegend from './legend.js'

import {
  getWeekNumber,
  getWeekLocale,
  getMonthLocale,
  getYearLocale,
  getDaysCountOfMonth
} from './util/utils'
import translateUtil from './util/translate'
import { legalHolidays } from './util/datas'
import './Calendar.less'

class Calendar extends Component {
  constructor(props) {
    super(props)
    const current = new Date(props.selectedDate)
    const startDateProps = new Date(props.startDateAt)
    var startDate
    this.changeToNextMonthOrWeek = this.changeToNextMonthOrWeek.bind(this)
    this.changeToPrevMonthOrWeek = this.changeToPrevMonthOrWeek.bind(this)
    if (props.view === 'month') {
      startDate = new Date(
        startDateProps.getFullYear(),
        startDateProps.getMonth()
      )
    } else {
      startDate = current
    }
    this.state = {
      selectedAt: current,
      dragging: false,
      startDateAt: startDate,
      scrollableData: this.getDefaultScrollableData(props.view, startDate),
      shouldTranslate: true,
      valueIndex: 2
    }
  }
  componentDidMount() {
    this.props.onSelectDate(this.state.selectedAt)
    this.props.onChange(this.state.startDateAt)
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (!nextState.shouldTranslate && this.state.shouldTranslate) {
      return false
    }
    return true
  }

  getFormatedMonth(current, number = 0) {
    const dateValue = new Date(
      current.getFullYear(),
      current.getMonth() + number
    )
    return dateValue.valueOf()
  }
  getFormatedWeek(current, number = 0) {
    const dateValue = new Date(
      current.getFullYear(),
      current.getMonth(),
      current.getDate() + 7 * number
    )
    var dowOffset = 0
    if (this.props.startOnMonday) {
      dowOffset = 1
    }
    return `${dateValue.getFullYear()}-${getWeekNumber(dateValue, dowOffset)}`
  }
  getDefaultScrollableData(view, current) {
    if (view === 'month') {
      return [-2, -1, 0, 1, 2].map(number => {
        return this.getFormatedMonth(current, number)
      })
    }
    return [-2, -1, 0, 1, 2].map(number => {
      return this.getFormatedWeek(current, number)
    })
  }
  getDays(startDate) {
    const { view, startOnMonday } = this.props
    var days = []
    let daysLenth, leftPadding
    let startDateAt = new Date(startDate)
    if (view === 'month') {
      daysLenth = 42
      startDateAt = new Date(startDateAt.getFullYear(), startDateAt.getMonth())
    } else {
      daysLenth = 7
    }
    const startDay = startDateAt.getDay()

    if (startOnMonday) {
      leftPadding = startDay ? startDay - 1 : 6
    } else {
      leftPadding = startDay
    }

    const dayMapCallback = delta => {
      const year = startDateAt.getFullYear()
      const month = startDateAt.getMonth()
      const date = startDateAt.getDate() + delta
      return new Date(year, month, date)
    }

    days = Array.from(
      {
        length: leftPadding
      },
      (v, i) => -(i + 1)
    )
      .reverse()
      .map(dayMapCallback)
    days.push(startDateAt)
    days = days.concat(
      Array.from(
        {
          length: daysLenth - days.length
        },
        (v, i) => i + 1
      ).map(dayMapCallback)
    )
    return days
  }
  getValueIndex(value) {
    const { view } = this.props
    const { scrollableData } = this.state
    let formatedValue
    if (view === 'month') {
      value = new Date(value)
      formatedValue = new Date(value.getFullYear(), value.getMonth()).valueOf()
    } else {
      if (typeof value === 'object') {
        formatedValue = this.getFormatedWeek(value)
      } else {
        formatedValue = value
      }
    }
    return scrollableData.indexOf(formatedValue)
  }

  isToday(day) {
    const now = new Date()
    return !!(
      day.getFullYear() === now.getFullYear() &&
      day.getMonth() === now.getMonth() &&
      day.getDate() === now.getDate()
    )
  }
  isBefore(day) {
    const { startDateAt } = this.state
    const start = new Date(startDateAt)
    const now = new Date()
    return !!(
      (day.getFullYear() === start.getFullYear() &&
        day.getMonth() === start.getMonth() &&
        day.getMonth() < now.getMonth()) ||
      (day.getFullYear() === now.getFullYear() &&
        day.getMonth() === now.getMonth() &&
        day.getDate() < now.getDate())
    )
  }
  isSelected(day) {
    const { selectedAt } = this.state
    return !!(
      day.getFullYear() === selectedAt.getFullYear() &&
      day.getMonth() === selectedAt.getMonth() &&
      day.getDate() === selectedAt.getDate()
    )
  }
  isPrevMonth(day) {
    const { startDateAt } = this.state
    const start = new Date(startDateAt)
    return (
      (day.getFullYear() === start.getFullYear() &&
        day.getMonth() < start.getMonth()) ||
      day.getFullYear() < start.getFullYear()
    )
  }
  isNextMonth(day) {
    const { startDateAt } = this.state
    const start = new Date(startDateAt)
    return (
      (day.getFullYear() === start.getFullYear() &&
        day.getMonth() > start.getMonth()) ||
      day.getFullYear() > start.getFullYear()
    )
  }

  isCurrentMonth(day) {
    const { startDateAt } = this.state
    const start = new Date(startDateAt)
    return (
      day.getMonth() === start.getMonth() &&
      day.getFullYear() === start.getFullYear()
    )
  }

  isDecorated(day) {
    const dateFormat = `${day.getFullYear()}-${`0${day.getMonth() + 1}`.slice(
      -2
    )}-${`0${day.getDate()}`.slice(-2)}`
    return this.props.decorate.find(item => item.value === dateFormat) || {}
    // return !!this.props.decorate.find(item=>item.value)[dateFormat]
  }

  isHoliday(day) {
    const date = moment(day).format('YYYY-MM-DD')
    return legalHolidays.indexOf(date) > -1 ? 1 : 0
  }
  onSelectDay = day => {
    const value = new Date(day)
    const { startDateAt } = this.state
    this.props.onSelectDate(value)
    const shouldTranslate = startDateAt.getMonth() !== value.getMonth();
    if (shouldTranslate) {
      this.updateCalendarDate(value)
    }
    this.setState({
      selectedAt: value
    })
  }

  parseWeekDate(weekDate) {
    const splitWeek = weekDate.split('-')
    const newYear = new Date(splitWeek[0], 0, 1)
    var deltaNumber
    // first week start at 4, so if the first day of that year is after
    // Thursday, add 3 to the date number, otherwise, add 1.
    if (newYear.getDay() >= 5) {
      deltaNumber = 3
    } else {
      deltaNumber = 1
    }
    if (this.props.startOnMonday) {
      deltaNumber++
    }
    return new Date(
      splitWeek[0],
      0,
      (parseInt(splitWeek[1], 10) - 1) * 7 + deltaNumber
    )
  }
  updateCalendarDate(currentValue) {
    const valueIndex = this.getValueIndex(currentValue)
    let newIndex = valueIndex
    if (valueIndex === -1) {
      return
    }
    const { view } = this.props
    const { scrollableData } = this.state
    var currentDate
    if (view === 'month') {
      currentDate = new Date(currentValue)
    } else {
      if (typeof currentValue === 'string') {
        currentDate = this.parseWeekDate(currentValue)
      } else {
        currentDate = currentValue
      }
    }
    const scrollableLength = scrollableData.length - 1
    if (valueIndex < 2) {
      for (let index = 2 - valueIndex; index > 0; index--) {
        if (view === 'month') {
          scrollableData.unshift(this.getFormatedMonth(currentDate, index - 3))
          newIndex = valueIndex + 1
        } else {
          scrollableData.unshift(this.getFormatedWeek(currentDate, index - 3))
        }
      }
    } else if (scrollableLength - valueIndex < 2) {
      for (
        let index = 2 - (scrollableLength - valueIndex);
        index > 0;
        index--
      ) {
        if (view === 'month') {
          scrollableData.push(this.getFormatedMonth(currentDate, 3 - index))
          newIndex = valueIndex
        } else {
          scrollableData.push(this.getFormatedWeek(currentDate, 3 - index))
        }
      }
    }
    this.props.onChange(currentDate)
    this.setState({
      startDateAt: currentDate,
      scrollableData: scrollableData,
      dragging: false,
      shouldTranslate: true,
      valueIndex: newIndex
    })
  }

  valueToTranslate(value) {
    const { view } = this.props
    const valueIndex = this.getValueIndex(value)
    if (valueIndex !== -1) {
      return valueIndex
    }
  }

  changeToPrevMonthOrWeek() {
    console.log('changeToPrevMonthOrWeek')
    var { startDateAt } = this.state
    var { view } = this.props
    var prevDate
    if (view === 'month') {
      prevDate = new Date(startDateAt.getFullYear(), startDateAt.getMonth() - 1)
    } else {
      prevDate = new Date(
        startDateAt.getFullYear(),
        startDateAt.getMonth(),
        startDateAt.getDate() - 7
      )
    }
    this.updateCalendarDate(prevDate)
  }
  changeToNextMonthOrWeek() {
    var { startDateAt } = this.state
    var { view } = this.props
    var nextDate
    if (view === 'month') {
      nextDate = new Date(startDateAt.getFullYear(), startDateAt.getMonth() + 1)
    } else {
      nextDate = new Date(
        startDateAt.getFullYear(),
        startDateAt.getMonth(),
        startDateAt.getDate() + 7
      )
    }
    this.updateCalendarDate(nextDate)
  }
  beforeChange = (from, to) => {
    console.log('beforeChange')
    console.log(from, to, this.state.valueIndex)
    if (from === to || to === this.state.valueIndex) {
      return
    }
    if (from > to) {
      this.changeToPrevMonthOrWeek()
    }
    if (from < to) {
      this.changeToNextMonthOrWeek()
    }
  }
  afterChange = current => {
    const { valueIndex } = this.state
    console.log(current, valueIndex)
    if (valueIndex === current) {
      return
    }
    if (valueIndex > current) {
      this.changeToPrevMonthOrWeek()
    }
    if (valueIndex < current) {
      this.changeToNextMonthOrWeek()
    }
    console.log('afterChange', current)
  }

  forbiddenPrevNext = curDate => {
    const {
      range: { max, min }
    } = this.props
    const maxDateStr = max ? moment(`${max}-01 00:00:00`).unix() : ''
    const minDateStr = min ? moment(`${min}-01 00:00:00`).unix() : ''
    const curDateStr = moment(curDate).unix()
    const prev = !minDateStr || curDateStr < minDateStr
    const next = !maxDateStr || curDateStr < maxDateStr
    return {
      prev,
      next
    }
  }
  renderHeader() {
    const { i18n, monthFormat, yearFormat } = this.props
    const month = getMonthLocale(this.state.startDateAt, i18n, monthFormat)
    const year = getYearLocale(this.state.startDateAt, i18n, yearFormat)
    const { prev, next } = this.forbiddenPrevNext(this.state.startDateAt)
    return (
      <div className="em-journal-title">
        <div className="current-month">
          <span
            className="swicth_pre"
            onClick={this.changeToPrevMonthOrWeek}
            style={!prev ? { display: 'none' } : null}
          />
          <span
            className="swicth_pre_disable"
            style={prev ? { display: 'none' } : null}
          />
          <span className="mid">{month}</span>
          <span
            className="swicth_next"
            onClick={this.changeToNextMonthOrWeek}
            style={!next ? { display: 'none' } : null}
          />
          <span
            className="next_disabled"
            style={next ? { display: 'none' } : null}
          />
        </div>
        <div className="year">{year}</div>
      </div>
    )
  }
  renderWeekTitle() {
    const { i18n, weekdayFormat } = this.props
    const weekdays = getWeekLocale(i18n, weekdayFormat)
    if (this.props.startOnMonday) {
      const sunday = weekdays.shift()
      weekdays.push(sunday)
    }
    return weekdays.map((w, i) => (
      <span key={i} className="react-calendar__weekday">
        {w}
      </span>
    ))
  }

  renderScrollableWrap() {
    const { scrollableData } = this.state
    const { view } = this.props
    return scrollableData.map((item, index) => {
      if (view === 'month') {
        return (
          <div key={index} className="react-calendar__days">
            {this.renderDays(new Date(item))}
          </div>
        )
      } else {
        let dateStringSplit = item.split('-')
        return (
          <div key={index} className="react-calendar__days">
            {this.renderDays(
              new Date(dateStringSplit[0], 0, dateStringSplit[1] * 7)
            )}
          </div>
        )
      }
    })
  }
  //默认得渲染方式
  renderDays(startedDateAt) {
    const { renderDay } = this.props
    const days = this.getDays(startedDateAt)
    const daysElm = days.map((day, i) => {
      if (renderDay) {
       return <div key={i} 
       data-value={day}
       onClick={()=>this.onSelectDay(day)}
       >
         {renderDay(day,this.state.startDateAt)}
       </div>
      } else {
        const { type } = this.isDecorated(day) || {}
        let className = classnames('react-calendar__day', {
          'react-calendar__day--today': this.isToday(day),
          'react-calendar__day--prevtoday': this.isBefore(day),
          'react-calendar__day--selected': this.isSelected(day),
          'react-calendar__day--nextmonth': this.isNextMonth(day),
          'react-calendar__day--prevmonth': this.isPrevMonth(day),
          'react-calendar__day--currentmonth': this.isCurrentMonth(day)
          // 'react-calendar__day--decorate': this.isDecorated(day)
        })
        return (
          <div
            key={i}
            data-value={day}
            className={`${className}`}
            onClick={()=>this.onSelectDay(day)}
          >
            <span data-value={day} className={type || ''}>
              {this.isHoliday(day) ? '节' : day.getDate()}
            </span>
          </div>
        )
      }
    })
    return daysElm
  }
  render() {
    const { className } = this.props
    const wrapClass = classnames('react-calendar', className)
    const daysWrapClass = classnames('react-calendar__scroll-wrapper')

    return (
      <div>
        <CalendarLegend />
        <div className={wrapClass}>
          <div className="react-calendar__header">{this.renderHeader()}</div>
          <div
            ref={main => (this.main = main)}
            className="react-calendar__main"
          >
            <div className="react-calendar__weekdays">
              {this.renderWeekTitle()}
            </div>
            <div
              ref={wrapper => (this.wrapper = wrapper)}
              className={daysWrapClass}
            >
              <Carousel
                dots={false}
                beforeChange={this.beforeChange}
                swipeSpeed={6}
                selectedIndex={this.state.valueIndex}
              >
                {this.renderScrollableWrap()}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Calendar.propTypes = {
  view: PropTypes.string,
  startOnMonday: PropTypes.bool,
  startDateAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
  selectedDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
  decorate: PropTypes.array,
  className: PropTypes.string,
  i18n: PropTypes.string,
  weekdayFormat: PropTypes.string,
  monthFormat: PropTypes.string,
  yearFormat: PropTypes.string,
  onSelectDate: PropTypes.func,
  onChange: PropTypes.func,
  disabledDirection: PropTypes.object
}

Calendar.defaultProps = {
  selectedDate: new Date(),
  startDateAt: new Date(),
  decorate: [],
  onSelectDate: value => {
    console.log(value)
  },
  view: 'month',
  i18n: 'zh-cn',
  weekdayFormat: 'narrow',
  monthFormat: 'long',
  yearFormat: 'numeric',
  onChange: value => {},
  range: {
    min: '',
    max: moment()
      .add(1, 'months')
      .format('YYYY-MM')
  }
}

export default Calendar
