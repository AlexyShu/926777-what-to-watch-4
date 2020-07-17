// import {createSelector} from "reselect";
import Namespace from "../namespace.js";
// import {ALL_GENRES} from "../../utils/constants.js";

export const getFilms = (state) => {
  return state[Namespace.DATA].films;
};

export const getActiveFilter = (state) => {
  return state[Namespace.DATA].activeFilter;
};

