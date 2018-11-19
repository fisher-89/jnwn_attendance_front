import React, { Component } from 'react';
import './index.less';

class SchedulingInfo extends Component {
  render() {
    const { style, tableTitle, dataSource } = this.props;
    return (
      <div className="scheduling_info" style={style}>
        <div className="table_header">
          {tableTitle.map((item, i) => (<div key={i} className="header_title">{item}</div>))}
        </div>
        {dataSource.map((item,i)=> (
          <div className="table_content" key={i}>
            <div className="staff_name">{item.name}</div>
            <div className="all_count">{item.type1}</div>
            <div className="all_count">{item.type2}</div>
            <div>{item.type3}</div>
            <div>{item.type4}</div>
            <div>{item.type5}</div>
          </div>
        ))}
        <div className="table_footer">单位：天</div>
      </div>
    );
  }
}
SchedulingInfo.defaultProps = {
  'tableTitle': ['员工姓名', '全勤', '出勤', '早/晚班', '通班', '排休'],
  dataSource: [
    { name: '王丽丽', 'type1': '18', 'type2': '18', 'type3': '4/7', 'type4': '18', 'type5': '18' },
    { name: '魏颖', 'type1': '18', 'type2': '18', 'type3': '4/7', 'type4': '18', 'type5': '18' }
  ]
}
export default SchedulingInfo