import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../views/Login';
import Layout from '../views/Layout';
import AllRecord from '../views/AllRecoed'; // 所有维修记录
import Sended from '../views/Sended'; // 已派单
import CustomerCenter from '~/views/CustomerCenter'; // 我的
import TestUploadPage from '~/views/TestUpload'; // 上传测试页面

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Login} exact></Route>
                    <Route path="/layout" render={(props) => (
                        <Layout {...props}>
                            <Switch>
                                <Route path="/layout" component={AllRecord} exact></Route>
                                <Route path="/layout/sended"
                                       component={Sended}
                                />
                                <Route path="/layout/customercenter"
                                   component={CustomerCenter}
                                />
                                <Route path="/layout/testuploadpage"
                                   component={TestUploadPage}
                                />
                            </Switch>
                        </Layout>
                        )} />
                </Switch>
            </Router>
        )
    }
}

export default Container;
