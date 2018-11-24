
import React, { Component } from 'react';
import { TextareaItem } from 'antd-mobile'
import './index.less'

class BlockTextArea extends Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      value
    }
  }

  componentWillReceiveProps(props) {
    const { value } = this.props;
    if (value !== this.props.value) {
      this.setState({
        value
      })
    }
  }

  onChange = (v) => {
    const { onChange } = this.props
    this.setState({
      value: v
    }, () => {
      onChange(v)
    })
  }

  render() {
    const { title, readonly, placeholder, clear } = this.props;
    return (
      <div className="text_area">
        <div className="title">{title}</div>
        <TextareaItem
          autoHeight
          clear={clear}
          disabled={readonly}
          placeholder={placeholder}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

BlockTextArea.defaultProps = {
  readonly: false,
  placeholder: '请输入...',
  clear: true
}

export default BlockTextArea
