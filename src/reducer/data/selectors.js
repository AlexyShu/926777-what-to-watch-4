import {createSelector} from "reselect";
import Namespace from "../namespace.js";
import {ALL_GENRES} from "../../constants.js";

export const getFilms = (state) => {
  return state[Namespace.DATA].films;
};

const filterFilmsByGenre = (state) => {
  const films = state[Namespace.DATA].films;
  const activeFilter = state[Namespace.STATE].activeFilter;

  return activeFilter === ALL_GENRES
    ? films.slice()
    : films.filter((film) => film.genre === activeFilter);
};

export const getFilmsByGenre = createSelector(
    (state) => state,
    filterFilmsByGenre
);
