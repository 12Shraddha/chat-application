import { Actiontype } from "./Actions/ActionType";
import {allActions, userDetail, userState } from "./Constants";


const initialState: userState = {
  loading: false,
  user: {
    id: "",
    password: null,
  },
  error: "Incorrect Credentials",
};

export const Reducer = (state = initialState, action:allActions) => {
         console.log("REDUCERRRRRRRR", state);
         switch (action.type) {
           case Actiontype.SET_ACTION:
             console.log("reducer is called", action.payload);
             return ({
               ...state,
               ...action.payload
             });
             
          //  case Actiontype.FETCH_USER_REQUEST:
          //    return {
          //      ...state,
          //      loading: true,
          //        };
             
          //  case Actiontype.FETCH_USER_SUCESS:
          //    console.log("reducer, FETCH_USER_SUCESS");
          //    return {
          //      ...state,
          //      users: action.payload,
          //      loading: false,
          //      error: "",
          //    };
          //  case Actiontype.FETCH_USER_FAILURE:
          //    console.log("reducer, FETCH_USER_FAILURE");
          //    return {
          //      ...state,
          //      loading: false,
          //      users: [],
          //      error: action.payload,
          //    };
          //  case Actiontype.LOGOUT:
          //    console.log("reducer,LOGOUT");
          //    return {
          //      users: [],
          //    };
           default:
             console.log("reducer is not called", state);
             return state;
         }
       };
