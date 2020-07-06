import {extend} from "./utils.js";
import films from "./mocks/films.js";
import {ALL_GENRES} from "./constants.js";

// данные, объект начального состояния
const initialState = {
  films,
  filmsCount: 8,
  activeFilter: ALL_GENRES
};

// Action
const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`
};

// функция возвращает фильм с нужным жанром
const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
    payload: null
  })
};

// Редьюсер. Функция-редьюсер принимает в качестве параметров текущий state и
// действие (action). Результатом выполнение редьюсера станет новое состояние.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        films: films.filter((film) => film.genre === action.payload),
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
