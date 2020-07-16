import {extend, adapterData} from "../utils.js";
import {ALL_GENRES} from "../constants.js";

// данные, объект начального состояния
const initialState = {
  films: [],
  filmsCount: 8,
  activeFilter: ALL_GENRES
};

// Action
const ActionType = {
  GET_FILMS: `GET_FILMS`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
    payload: null
  }),
  getFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films
  }),
};

const Operation = {
  getFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.getFilms(adapterData(response.data)));
    });
  }
};

const getFilmsByGenre = (movies, payload) => {
  if (payload === ALL_GENRES) {
    movies = movies.slice();
  } else {
    movies = movies.filter((movie) => movie.genre === payload);
  }
  return movies;
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS:
      return extend(state, {
        films: action.payload
      });
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        films: getFilmsByGenre(state.films, action.payload),
        activeFilter: action.payload
      });
    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {
        filmsCount: state.filmsCount + 8
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};

// import {combineReducers} from "redux";
// import {reducer as data} from "./data/data.js";
// import {reducer as state} from "./state/state.js";
// import Namespace from "./namespace.js";

// export default combineReducers({
//   [Namespace.DATA]: data,
//   [Namespace.STATE]: state
// });
