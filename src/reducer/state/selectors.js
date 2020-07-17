import Namespace from "../namespace.js";

export const getShowMoreFilms = (state) => {
  return state[Namespace.STATE].filmsCount;
};
