import {extend} from "./utils.js";
import films from "./mocks/films.js";

// данные, объект начального состояния
const initialState = {
  films
};

// Action
const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`
};

// функция возвращает фильм с нужным жанром
const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  })
};

// Редьюсер. Функция-редьюсер принимает в качестве параметров текущий state и
// действие (action). Результатом выполнение редьюсера станет новое состояние.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        films: films.filter((film) => film.genre === action.payload)
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
