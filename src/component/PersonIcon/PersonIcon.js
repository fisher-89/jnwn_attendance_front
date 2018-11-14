import React from 'react';
import './index.less';

class PersonIcon extends React.Component {
  // type标志有无删除
  render() {
    const {
      header,
      showNum = 2,
      handleClick,
      handleDelClick,
      footer = true,
      itemStyle = {},
      value = {},
      nameKey,
      borderStyle
    } = this.props;
    const name = value[nameKey] ? value[nameKey] : '';
    const newName = name.slice(name.length - (name.length < showNum ? name.length : showNum));
    return (
      <div
        className="person_item"
        style={itemStyle}
        onClick={handleClick ? () => handleClick(value) : null}
      >
        {header}
        <div className="person_icon" style={borderStyle.style}>
          <div className="name" >
            {newName}
            {handleDelClick ? <span onClick={e => handleDelClick(e, value)} /> : null}
          </div>
        </div>
        {footer ? <div className="user_info">{name}</div> : null}

      </div>
    );
  }
}
PersonIcon.defaultProps = {
  borderStyle: {
    border:'none'
  }
}
export default PersonIcon;
