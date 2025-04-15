//use the redux
// Redux is a JavaScript library used for managing the state of applications, particularly those with complex UI and data sharing needs, by providing a predictable and maintainable way to handle global state. 

import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";

//redux 6 step
/*
 1 Store - Holds the entire application state
 2 Actions- objects that describe events and chanages
 3 Reducers- Pure functions that update that state based on action
 4 Dispatch- Sends actions to store to trigger state updates
 5 selectors- Functions to retrieve specific state pieces
6 Middleware- Handle asynchronous actions
*/


import {combineReducers,legacy_createStore, applyMiddleware} from "redux";
import coinReducer from "./Coin/Reducer";
import walletReducer from "./Wallet/Reducer";
import withdrawalReducer from "./Withdrawal/Reducer";
import orderReducer from "./Order/Reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    //auth reducer available in our state 
    coin:coinReducer,
    wallet: walletReducer,
    withdrawal: withdrawalReducer,
    order: orderReducer,
});

//create our store
export const store =legacy_createStore(rootReducer, applyMiddleware(thunk))



