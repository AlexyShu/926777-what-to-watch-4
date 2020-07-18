import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as state} from "./state/state.js";
import {reducer as user} from "./state/state.js";
import Namespace from "./namespace.js";

export default combineReducers({
  [Namespace.DATA]: data,
  [Namespace.STATE]: state,
  [Namespace.USER]: user
});
