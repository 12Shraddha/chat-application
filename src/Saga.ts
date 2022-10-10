import { Action } from "history";
import { useEffect } from "react";
import takeEvery from "redux-saga";
// import { takeEvery } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { Actiontype } from "./Actions/ActionType";
import axios from "axios";
import { userDetail } from "./Constants";

function* getState(action:any): any {
  console.log("ME SAGA");
  let data = yield fetch("http://localhost:3500/userInfo");
  data = data.json();
  console.log("saga is called", data, "......");
  yield put({ type: Actiontype.SET_ACTION, data });
}

export function* Saga() {
  console.log("SAGA called");
  yield takeEvery(Actiontype.FORM_DATA, getState);
}

function* getFetchUserRequest(action: any): any {
  console.log("saga: users data", action);
  // const getData = () =>
  //   axios.get<userDetail[]>(
  //     `http://localhost:3500/userInfo?id=${action.payload.id}&password=${action.payload.password}`
  //   );
  // try {
  //   const response = yield call(getData);
  //   yield put({ type: Actiontype.FETCH_USER_SUCESS, response });
  // } catch (error) {
  //   yield put({ type: Actiontype.FETCH_USER_FAILURE, reponse });
  // }

  let users: any = yield fetch(`http://localhost:3500/userInfo?id=${action.payload.id}&password=${action.payload.password}`);
  users = users.json();
  console.log("saga: users data@@@", users);
  {
    (users) ? yield put({ type: Actiontype.FETCH_USER_SUCESS, users })
    : yield put({ type: Actiontype.FETCH_USER_FAILURE, users });
  }
}

// export function* SagaRequest():any {
//   // yield all([takeLatest(Actiontype.FETCH_USER_REQUEST, getFetchUserRequest)]);
//   yield takeEvery(Actiontype.FETCH_USER_REQUEST, getFetchUserRequest);
// }

// export default function* rootSaga() {
//   yield takeEvery(Actiontype.FETCH_USER_REQUEST, getFetchUserRequest);
//   yield takeEvery(Actiontype.FORM_DATA, getState);
// }
