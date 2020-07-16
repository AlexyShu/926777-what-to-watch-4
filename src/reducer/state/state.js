import {extend} from "../utils.js";
import {ALL_GENRES} from "../constants.js";

// данные, объект начального состояния
const initialState = {
  filmsCount: 8,
  activeFilter: ALL_GENRES
};

// Action
const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`
};

const ActionCreator = {
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
    payload: null
  }),
  getFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films
  }),
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

export {reducer, ActionType, ActionCreator};
