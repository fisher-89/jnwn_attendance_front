
import React, { Component } from 'react';
import { ImagePicker } from 'antd-mobile'
import ImageViewer from 'react-wx-images-viewer';
import { dealThumbImg, rebackImg, reAgainImg } from '../../utils/util'
import './index.less'
class FileUpLoad extends Component {
  constructor(props) {
    super(props);
    const { files } = props;
    const newFiles = this.initFiles(files)
    this.state = {
      upfiles: newFiles,
      reviewImg: files,
      review: false
    }
  }

  componentWillReceiveProps(props) {
    const { files } = props;
    if (JSON.stringify(files) !== JSON.stringify(this.props.files)) {
      const newFiles = this.initFiles(files)
      this.setState({
        upfiles: newFiles
      })
    }
  }

  onChangeView = (visible) => {
    this.setState({
      review: !!visible
    })
  }

  initFiles = (files) => {
    const newFiles = (files || []).map((file, i) => {
      let fileObj = { url: `${process.env.REACT_APP_HOST_PATH}${dealThumbImg(file, '_thumb')}`, id: i };
      return fileObj
    })
    return newFiles;
  }

  filePreview = (i) => {
    const { upfiles } = this.state;
    const bigImgs = upfiles.map((item) => {
      return reAgainImg(item.url, '_thumb');
    });
    const params = {
      reviewImg: bigImgs,
      curIndex: i,
    };
    this.setState({
      ...params
    }, () => {
      this.onChangeView(true)
    })
  }

  fileOnChange = (files, type) => {
    const { onChange, dispatch } = this.props;
    if (type === 'remove') {
      this.setState({
        upfiles: files
      }, () => {
        onChange(files);
      })
    }
    if (type === 'add') {
      // lrz(files[files.length - 1].url, { width: 500 })
      // .then((rst) => {
      // 处理成功会执行
      const imgformData = new FormData();
      imgformData.append('upFile', files[files.length - 1].file);
      imgformData.append('field_id', 302);
      dispatch({
        type: 'app/fileUpload',
        payload: {
          data: imgformData,
          cb: (f) => {
            const { upfiles } = this.state;
            const newImgs = [...upfiles, { url: `${process.env.REACT_APP_HOST_PATH}${dealThumbImg(f.path, '_thumb')}` }];
            this.setState({
              upfiles: newImgs,
            }, () => {
              const newFile = newImgs.map((its) => {
                return rebackImg(its.url, `${process.env.REACT_APP_HOST_PATH}`, '_thumb');
              });
              onChange(newFile);
            });
          },
        },
      });
    }
  }
  render() {
    const { upfiles, reviewImg, curIndex, review } = this.state;
    const { multiple, title } = this.props;
    return (
      <div className="image_picker">
        <div className="title">{title}</div>
        <ImagePicker
          multiple={multiple}
          files={upfiles}
          onChange={this.fileOnChange}
          onImageClick={(index) => this.filePreview(index)}
          selectable={upfiles.length < 5}
          accept="image/gif,image/jpeg,image/jpg,image/png"
        />
        {review && <ImageViewer
          urls={reviewImg}
          index={curIndex}
          onClose={this.onChangeView}
        />}

      </div>
    )
  }
}

FileUpLoad.defaultProps = {
  files: [],
  multiple: true
}

export default FileUpLoad
