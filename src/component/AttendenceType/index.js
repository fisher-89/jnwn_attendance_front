
import React, { Component } from 'react';
import './index.less'
class AttendenceType extends Component {
  renderAttenceInfo = (type) => {
    switch (type) {
      case 'morning': return <div className="day_shift"><span>早班</span><span>08:30~15:30</span></div>;
      case 'night': return <div className="night_shift"><span>晚班</span><span>08:30~15:30</span></div>
      case 'all': return <div className="all_shift"><span>通班</span></div>;
      case 'rest': return <div className="notwork"><span>排休</span></div>;
      default: return <div className="notwork"><span>排休</span></div>;
    }
  }
  render() {
    const { type } = this.props;
    return this.renderAttenceInfo(type);
  }
}
AttendenceType.defaultProps = {
  type: 'rest'
}
export default AttendenceType;
