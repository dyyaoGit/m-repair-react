import React from 'react';
import './index.css';
import axios from 'axios';
import PropTypes from 'prop-types';

class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount () {
        this.getToken();
    }

    getToken = () => {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
            this.token = res.data.data;
        })
    }

    handleChange = (e) => {
        console.log(e.target.files[0]);
        // 用ajax上传文件:
        // 1. 新建一个表单对象

        const formData = new FormData();
        formData.append('file', e.target.files[0])
        formData.append('token', this.token)
        axios.post('https://upload-z1.qiniup.com', formData).then(res => {
            console.log(res.data.url);
            this.props.success(res.data.url);
        })


    }

    render() {
        return (
            <label className="upload-wrap" >
                <input type="file" name="file"
                        onChange={this.handleChange}
                       className="upload-input" />
                <i className="iconfont icon-add"></i>
            </label>
        )
    }
}

Upload.propTypes = {
    success: PropTypes.func
}

export default Upload;
