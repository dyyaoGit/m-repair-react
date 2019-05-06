import React from 'react';
import {NavBar, TabBar} from 'antd-mobile';
import './index.css';

const tabArr = [
    {
        title: '所有记录',
        icon: 'icon-all',
        name: 'all',
        url: '/layout'
    },
    {
        title: '已派单',
        icon: 'icon-daiding',
        name: 'repaired',
        url: '/layout/sended'
    },
    {
        title: '已完成',
        icon: 'icon-yiwancheng',
        name: 'done',
        url: '/layout/done'
    },
    {
        title: '我的',
        icon: 'icon-wode',
        name: 'customercenter',
        url: '/layout/customercenter'
    }
]

class Layout extends React.Component {
    constructor(props) {
        super(props);
        const setTitle = (isInit=true) => {
            const pathName = props.location.pathname;
            let title = "";
            switch (pathName) {
                case "/layout":
                    title = "所有维修记录";
                    if(this.props.title == '所有维修记录');
                    break;
                case "/layout/sended":
                    title = "已派单";
                    break;
                default:
                    title = "维修记录";
            }
            if(isInit){
                this.state = {
                    title,
                    selectedTab: 'all'
                }
            } else {
                this.setState({
                    title
                })
            }
        }
        setTitle();
        this.setTitle = setTitle;
    }

    render() {
        return (
            <div className="layout-container">
                <NavBar>{this.state.title}</NavBar>
                {this.props.children}
                <TabBar
                    className="tabbar-wrap"
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    {
                        tabArr.map((item, index) => (
                            <TabBar.Item
                                key={index}
                                title={item.title}
                                icon={ <i className={'iconfont' + ' ' + item.icon}></i> }
                                selectedIcon={<i className={'iconfont' + ' ' + item.icon + ' active'}></i>}
                                selected={this.state.selectedTab === item.name}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: item.name
                                    })
                                    this.props.history.push(item.url)
                                }}
                            />
                        ))
                    }
                </TabBar>
            </div>
        )
    }
    componentDidMount () {
        console.log(this.props)
    }
    componentWillUpdate (nextProps, nextState) {
        const pathName = nextProps.location.pathname;
        let title = "";
        switch (pathName) {
            case "/layout":
                title = "所有维修记录";
                if(nextState.title == '所有维修记录'){
                    return
                }
                break;
            case "/layout/sended":
                title = "已派单";
                if(nextState.title == '已派单'){
                    return
                }
                break;
            case "/layout/customercenter":
                title = "我的";
                if(nextState.title == '我的'){
                    return
                }
                break;
        };
        this.setState({
            title
        })
    }
}

export default Layout;
