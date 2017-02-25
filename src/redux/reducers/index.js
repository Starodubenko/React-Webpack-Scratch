import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import AuthReducer from "./AuthReducer/AuthReducer"

export default combineReducers({
    form: formReducer,
    auth: AuthReducer,
})