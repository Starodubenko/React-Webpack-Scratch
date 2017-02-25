import * as React from "react";
import {Field, reduxForm, reducer} from "redux-form";
import validate from "./LoginFormValidation"

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const LoginForm = (props) => {
    const {handleSubmit, onLogOut,  pristine, reset, submitting} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="username" type="text" component={renderField} label="User name"/>
            <Field name="password" type="password" component={renderField} label="Password"/>
            <div>
                <button type="submit" disabled={submitting}>Log in</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                <button type="button"  onClick={onLogOut}>Log out</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'loginForm',
    validate
})(LoginForm);