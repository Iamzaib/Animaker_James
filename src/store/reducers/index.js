// Root Reducer

import { combineReducers } from "redux";
import authUserReducer from "./authUser";
import animakerReducer from "./animakerReducer";

export let rootReducer = combineReducers({
    authUser: authUserReducer,
    animaker: animakerReducer,
});

export default rootReducer;
