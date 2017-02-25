import {START_LOG_IN, END_LOG_IN, LOG_IN_REJECTED, LOG_OUT} from "../../reducers/AuthReducer/AuthReducer"


export function logInAction(data){
  return {
      type: START_LOG_IN,
      payload: {
        username: data.username,
        password: data.password,
      }
    }
}

export function logInIsSuccessAction(data){
  return {
      type: END_LOG_IN,
      payload: {
        username: data.username,
        password: data.password,
      }
    }
}

export function logOutAction(){
  return {
      type: LOG_OUT,
      payload: null
    }
}

// export function loginAction