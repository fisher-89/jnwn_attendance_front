
import React, { Component } from 'react';
import { AttendenceType } from '../index.js'
import './Calendar.less'
class CalendarLegend extends Component {
  render() {
    return (
      <div className="legend">
        <AttendenceType type="morning" />
        <AttendenceType type="night" />
        <AttendenceType type="all" />
        <AttendenceType type="rest" />
      </div>
    );
  }
}

export default CalendarLegend;
