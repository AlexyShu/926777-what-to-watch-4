import {extend, adapterData} from "../../utils.js";
import {ALL_GENRES} from "../../constants.js";

// данные, объект начального состояния
const initialState = {
  films: [],
  activeFilter: ALL_GENRES
};

// Action
const ActionType = {
  GET_FILMS: `GET_FILMS`,
  CHANGE_GENRE: `CHANGE_GENRE`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
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
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
