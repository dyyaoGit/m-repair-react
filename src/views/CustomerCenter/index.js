import React from 'react';
import './index.css';
import Cookies from 'js-cookie';
import $axios from '~/utils';
import {Button} from 'antd-mobile';

class CustomerCenter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            avatar: '',
            userId: '',
            all: 0,
            repaired: 0
        }
    }

    getUserData = () => {
        const userJson = Cookies.get('user');
        const userObj = JSON.parse(userJson);
        this.setState({
            avatar: userObj.avatar,
            username: userObj.nickname || userObj.phone,
            userId: userObj.id
        }, () => {
            this.getRepairData()
        })
        console.log(userObj);
    }

    getRepairData = () => {
        $axios.get('/admin/repairRecord/userRecord', {
            params: {
                userId: this.state.userId
            }
        }).then(res => {
            this.setState({
                all: res.data.all,
                repaired: res.data.repairRecord
            })
        })
    }

    logOut = () => {
        this.props.history.push('/');
        Cookies.remove('user');
    }

    componentWillMount () {
        this.getUserData();
    }

    render() {
        const {username, avatar, all, repaired} = this.state;

        return (
            <div className="my-center">
                <div className="header">
                    <div className="username">
                        {username}
                    </div>
                    <div className="avatar">
                        <img src={avatar} alt=""/>
                    </div>
                </div>
                <div className="content">
                    <div className="left content-item">
                        <div className="text">
                            待维修
                        </div>
                        <div className="num">
                            {repaired}
                        </div>
                    </div>
                    <div className="right content-item">
                        <div className="text">
                            已完成维修
                        </div>
                        <div className="num">
                            {all}
                        </div>
                    </div>
                </div>
                <div className="log-out">
                    <Button size="large" type="warning" onClick={this.logOut}>
                        退出登录
                    </Button>
                </div>
            </div>
        )
    }
}

export default CustomerCenter;
