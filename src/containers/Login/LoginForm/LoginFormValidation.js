function isNotEmptyObject(o){
    return o && Object.keys(o).length !== 0;
}

function checkLogin(username) {
    let result = [];
    let emptyUserName = !username;

    if (emptyUserName) {
        result.push('Enter your user name');
    }

    return result;
}

function checkPassword(password) {
    let result = [];
    let emptyPassword = !password;

    if (emptyPassword) {
        result.push('Enter your password');
    }
    return result;
}

const validate = formProps => {
    let errors = {};
    if (isNotEmptyObject(checkLogin(formProps.username))){
        errors.username = checkLogin(formProps.username);
    }
    if (isNotEmptyObject(checkPassword(formProps.password))){
        errors.password = checkPassword(formProps.password);
    }
    return errors;
};

export default validate;
