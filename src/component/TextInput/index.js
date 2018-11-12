import React from 'react';
import { connect } from 'dva';
import { Toast, InputItem } from 'antd-mobile';
import style from './index.less';

class TextInput extends React.Component {
  constructor(props) {
    const { value } = props;
    super(props);
    this.state = {
      value,
    };
  }

  componentWillReceiveProps(props) {
    const { value } = props;
    if (value === this.props.value) {
      this.setState({
        value,
      });
    }
  }

  onHandleBlur = (v) => {
    const { isRequire, type, onChange, title, range: { max, min } } = this.props;
    let newValue = v;
    if (isRequire && !v) {
      Toast.info(`请输入${title}`, 1.5);
    } else if (type === 'text') {
      if (min !== '' && v.length < min) {
        Toast.info(`${title}字符长度在${min || '0'}~${max}之间`, 1);
      }
      newValue = max && newValue.length > max ? newValue.slice(0, max) : newValue;
    } else if (type === 'int') {
      newValue = this.formatIntValue(newValue);
    }
    this.setState({ value: newValue }, () => {
      onChange(newValue);
    });
  }

  formatIntValue = (v) => {
    const { scale, range: { min } } = this.props;
    const value = (v !== '' && (min - v > 0)) ? min : v;
    const idx = value.indexOf('.');
    const curScale = idx > -1 ? value.slice(idx + 1).length : 0;
    // const newValue = curScale > scale ? (value.slice(0, value.indexOf('.') + (scale - 0) + 1))
    // : Number(value).toFixed(scale);
    let newValue;
    if (v !== '' && !isNaN(v)) {
      const tmpValue = `${Number(value)}`;
      newValue = curScale > scale ? (tmpValue.slice(0, tmpValue.indexOf('.') + (scale - 0) + 1)) : Number(value).toFixed(scale);
    } else {
      newValue = '';
    }
    return newValue;
  }

  handleOnChange = (v) => {
    const { onChange, range: { max }, scale, type } = this.props;
    let newValue = v;
    if (type === 'int') {
      const reg = /^(-|\d)\d*(\.)?(\d)*$/;
      if (max !== '' && reg.test(v) && (parseFloat(v) - max > 0)) {
        newValue = max;
      } else if (reg.test(v)) {
        if (v.indexOf('.') > 0 && (v.split('.')[1].length > scale)) {
          // newValue = Number(v).toFixed(scale);
          newValue = v.slice(0, v.indexOf('.') + (scale - 0) + 1);
        }
      } else {
        newValue = parseFloat(v);
      }
    }
    this.setState({
      value: newValue,
    }, () => {
      onChange(newValue);
    });
  }

  render() {
    const { title, type, range: { max }, description, readonly,style } = this.props;
    const { value } = this.state;
    return (
      <div className="input" style={style}>
        <InputItem
          clear
          disabled={readonly}
          maxLength={max || (type === 'int' ? 16 : max)}
          placeholder={description}
          onChange={e => this.handleOnChange(e)}
          onBlur={this.onHandleBlur}
          value={`${value || ''}`}
        >{title}
        </InputItem>
      </div>

    )
  }
}

TextInput.defaultProps = {
  readonly: false,
  value: '',
  range: { min: 0, max: 20 }
};

export default connect()(TextInput);
