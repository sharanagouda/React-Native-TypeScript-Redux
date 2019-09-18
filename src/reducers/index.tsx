import {combineReducers} from "redux";
import app from "./appReducer";
import {visibilityFilter,todos}from "./TodoReducer";

export default combineReducers({
    app:app,
    visibilityFilter,
    todos
})