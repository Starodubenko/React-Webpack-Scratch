import React, {Component}from "react";
import {Router, Route, hashHistory, browserHistory} from "react-router";
import {Login, App, Home, Profile, NotFound} from "./containers";
import { syncHistoryWithStore } from 'react-router-redux';

export default class Routes extends Component{

    // requireLogin(nextState, replace, cb){
    //     const {store} = this.props;
    //     function checkAuth() {
    //         const { auth: { user }} = store.getState();
    //         if (!user) {
    //             // oops, not logged in, so can't be here!
    //             replace('/');
    //         }
    //         cb();
    //     }
    //
    //     if (!isAuthLoaded(store.getState())) {
    //         store.dispatch(loadAuth()).then(checkAuth);
    //     } else {
    //         checkAuth();
    //     }
    // };

    render(){
        const {store} = this.props;
        const history = syncHistoryWithStore(hashHistory, store);
        return (
            <Router history={history}>
                <Route path="/" component={App}>
                    <Route path="login" component={Login}/>
                    <Route path="home" component={Home}/>
                    <Route path="profile" component={Profile}/>
                </Route>
                <Route path="*" component={NotFound}/>
            </Router>
        );
    }
};
