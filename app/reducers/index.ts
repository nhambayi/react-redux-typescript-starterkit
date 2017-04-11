import { combineReducers } from "redux";
const { routerReducer } = require("react-router-redux");
import mainReducer from "./MainReducer";

const rootReducer = combineReducers({
  main: mainReducer,
		routing: routerReducer
});

export default rootReducer;
