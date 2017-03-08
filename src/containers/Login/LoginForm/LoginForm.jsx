import * as React from "react";
import {Field, reduxForm, reducer} from "redux-form";
import validate from "./LoginFormValidation"
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

import "./LoginForm.scss"

const getInputComponent = (type, label, input, onCheck, errorMessage) => {
    switch (type){
        case "text":
        case "password":
            return <TextField
                {...input}
                floatingLabelText={label}
                type={type}
                errorText={errorMessage}
            />;
        case "checkbox":
            return <Checkbox
                {...input}
                label={label}
                checked={!!input.value}
                onClick={() => input.onChange(!input.checked)}
                // errorText={errorMessage}
            />;
    }
};

const Input = ({input, label, type, onCheck, meta: {touched, error, warning}}) => {
    let errorMessage = null;
    if (touched ){
        errorMessage = error ? error : warning;
    }
    return (
        <div>
            {getInputComponent(type, label, input, onCheck, errorMessage)}
        </div>
        )
};

const LoginForm = (props) => {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <form onSubmit={handleSubmit} className="loginForm">
            <Field name="username" type="text" component={Input} label="User name"/>
            <Field name="password" type="password" component={Input} label="Password"/>
            <Field name="isRemindMe" type="checkbox" component={Input} label="Remind me"/>
            <div className="actions">
                <FlatButton type="submit" label="Log in" primary={true} disabled={submitting}/>
                {/*<FlatButton type="button" label="Clear Values" primary={true} disabled={pristine || submitting} onClick={reset}/>*/}
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'loginForm',
    validate
})(LoginForm);