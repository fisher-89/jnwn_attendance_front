
import React, { Component } from 'react';
import moment from 'moment';
import './index.less'

class SwitchDate extends Component {
  constructor(props) {
    super(props);
    const { date } = props;
    const format = this.formatCurrentDate(date);
    this.state = {
      ...format
    }
  }

  componentWillReceiveProps(newProps) {
    const { date } = newProps;
    if (date !== this.props.date) {
      const format = this.formatCurrentDate(date);
      this.setState({
        ...format
      })
    }
  }

  formatCurrentDate = (date) => {
    const week = moment(date).format('dddd');
    const today = `${moment(date).format('M')}.${moment(date).format('D')}`;
    return {
      date, week, today
    }
  }

  handleSwicthDate = (direction) => {
    const { date } = this.state;
    const { onChange } = this.props;
    let currentDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    if (direction === -1) {
      currentDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD')
    }
    const format = this.formatCurrentDate(currentDate);
    this.setState({
      ...format
    }, () => {
      onChange(format.date)
    })
  }

  render() {
    const { today, week, date } = this.state;
    const prevState = moment(date).subtract(1, 'days').month() === moment(date).month();
    const nextState = moment(date).add(1, 'days').month() === moment(date).month();
    return (
      <div className="switch_date">
        <span
          className={prevState ? 'last' : 'last_dis'}
          onClick={() => prevState && this.handleSwicthDate(-1)}
        ></span>
        <div className="date_info">
          <span>{today}</span><span>{week}</span>
        </div>
        <span
          className={nextState ? 'next' : 'next_dis'}
          onClick={() => nextState && this.handleSwicthDate(1)}
        >
        </span>
      </div >
    )
  }
}

export default SwitchDate
