import {Actiontype
} from "./Actions/ActionType";

export type userDetail = {
  "id": string,
  "password": any
    
}


export interface userState {
  loading: boolean;
    user: userDetail;
  error: string | null;
}


export interface FetchSuccessPayload {
  user: userDetail;
}

export interface FetchFailurePayload {
  error: string;
}

export type LoginAction = {
  type: typeof Actiontype.FORM_DATA;
  payload: userDetail;
};

export interface fetchUserRequest {
  type: typeof Actiontype.FETCH_USER_REQUEST;
  payload: FetchSuccessPayload;
}

export type fetchUserSucess = {
  type: typeof Actiontype.FETCH_USER_SUCESS;
  payload: FetchSuccessPayload;
};

export type fetchUserFailure = {
  type: typeof Actiontype.FETCH_USER_FAILURE;
  payload: FetchFailurePayload;
};

export type allActions =
  | fetchUserRequest
  | fetchUserSucess
  | fetchUserFailure
  | LoginAction;
