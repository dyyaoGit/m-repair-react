import React from 'react';
import {NavBar} from 'antd-mobile';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        const pathName = props.location.pathname;
        let title = "";
        switch (pathName) {
            case "/Layout":
                title = "所有维修记录";
                break;
            case "/Layout/sended":
                title = "已派单";
                break;
            default:
                title = "维修记录";
        }
        this.state = {
            title
        }
    }

    render() {
        return (
            <div className="layout-container">
                <NavBar>{this.state.title}</NavBar>
                {this.props.children}
            </div>
        )
    }
    componentDidMount () {
        console.log(this.props)
    }
}

export default Layout;
