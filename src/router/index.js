import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../views/Login';
import Layout from '../views/Layout';
import AllRecord from '../views/AllRecoed'; // 所有维修记录
import Sended from '../views/Sended'; // 已派单

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
                    <Route path="/Layout" render={(props) => (
                        <Layout {...props}>
                            <Switch>
                                <Route path="/Layout" exact render={() => (
                                    <AllRecord {...props}  />
                                )}></Route>
                                <Route path="/Layout/sended" component={Sended}></Route>
                            </Switch>
                        </Layout>
                    )}></Route>
                </Switch>
            </Router>
        )
    }
}

export default Container;
