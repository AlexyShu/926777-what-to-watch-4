import {extend} from "../../utils.js";

// данные, объект начального состояния
const initialState = {
  filmsCount: 8,
};

// Action
const ActionType = {
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`
};

const ActionCreator = {
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
    payload: null
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {
        filmsCount: state.filmsCount + 8
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
