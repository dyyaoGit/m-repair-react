import React from 'react';
import Upload from '~/components/upload';
import './index.css';

class TestUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgArr: []
        }
    }

    getUrl = (url) => {
        let arr = [...this.state.imgArr];
        arr.push(url);
        this.setState({
            imgArr: arr
        })
    }

    render() {
        const {imgArr} = this.state;
        return (
            <div className="test-upload">
                <h1>我是上传测试页面</h1>
                <div className="imgs">
                    {
                        imgArr.map((item,index) => (
                            <img src={item} className="upload-img" key={index} alt=""/>
                        ))

                    }
                    <Upload success={this.getUrl} />
                </div>
            </div>
        )
    }
}

export default TestUpload;
