import * as p from "../Constants"
import { FetchSuccessPayload } from "../Constants";
import { Actiontype } from "./ActionType";

export const loginAction = (payload: p.userDetail) => {
    console.log("action is called", payload);
    return {
        type: Actiontype.FORM_DATA,
        payload,
    }
       }
export const fetchUserFailure=(payload:p.FetchFailurePayload )=>{
    return{
        type: typeof Actiontype.FETCH_USER_FAILURE,
        payload
    }
}

export const fetchUserRequest=(data:any)=>{

    return{
        type: typeof Actiontype.FETCH_USER_REQUEST,
        payload:data

    }
}

export const fetchUserSucess=( payload: FetchSuccessPayload)=>{

    return{
        type:typeof Actiontype.FETCH_USER_SUCESS,
        payload
        
    }
}

export const logout = () => {

    return {
        type: typeof Actiontype.LOGOUT,
    }
}

