import * as React from "react";
import LoginForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";

import "./Login.scss";

import {startLogInAction, logInIsSuccessAction, logOutAction} from "../../redux/actions"

@connect((store) => {
    return {
        user: store.auth.user
    }
})
export class Login extends React.Component{

    handleSubmit(values){
        this.props.dispatch(startLogInAction());
        setTimeout(() => {
            this.props.dispatch(logInIsSuccessAction(values));
        }, 1000);
    };

    render() {
        return (
            <div className="loginPage">
                <LoginForm onSubmit={this.handleSubmit.bind(this)}/>
            </div>
        );
    }
}