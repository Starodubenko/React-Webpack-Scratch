import * as React from "react";
import LoginForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";

import {logInAction, logInIsSuccessAction, logOutAction} from "../../redux/actions"

@connect((store) => {
    return {
        user: store.auth.user
    }
})
export class Login extends React.Component{

    handleSubmit(values){
        this.props.dispatch(logInAction(values));
        this.props.dispatch(logInIsSuccessAction(values));
    };

    logOut(values){
        this.props.dispatch(logOutAction());
    };

    render() {
        return (
            <div>
                <h1>{!!this.props.user}</h1>
                <h1>{this.props.user ? this.props.user.fullName: "User name place"}</h1>
                <LoginForm onSubmit={this.handleSubmit.bind(this)} onLogOut={this.logOut.bind(this)}/>
            </div>
        );
    }
}