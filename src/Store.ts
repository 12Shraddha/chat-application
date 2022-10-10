import {createStore,applyMiddleware}  from "redux";
import { Saga } from "./Saga";
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { Reducer } from "./Reducer";

const sagaMiddleware = createSagaMiddleware();

const store=configureStore({
    reducer:Reducer,
    middleware:()=> [sagaMiddleware]
});

sagaMiddleware.run(Saga);
console.log("YO")
export default store;


