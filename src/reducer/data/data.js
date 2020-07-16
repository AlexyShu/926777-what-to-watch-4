import {extend, adapterData} from "../utils.js";

// данные, объект начального состояния
const initialState = {
  films: [],
};

// Action
const ActionType = {
  GET_FILMS: `GET_FILMS`,
};

const ActionCreator = {
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS:
      return extend(state, {
        films: action.payload
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
