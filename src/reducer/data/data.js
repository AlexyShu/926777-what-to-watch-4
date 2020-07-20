import {extend, adapterData} from "../../utils.js";

// данные, объект начального состояния
const initialState = {
  films: [],
  comments: []
};

// Action
const ActionType = {
  GET_FILMS: `GET_FILMS`,
  GET_COMMENTS: `GET_COMMENTS`
};

const ActionCreator = {
  getFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films
  }),
  getComments: (comments) => ({
    type: ActionType.GET_COMMENTS,
    payload: comments
  })
};

const Operation = {
  getFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.getFilms(adapterData(response.data)));
    });
  },
  getComments: () => (dispatch, getState, api) => {
    return api.get(`/comments/41`)
    .then((response) => {
      dispatch(ActionCreator.getComments(response.data));
    });
  },
  addComment: (commentData) => (dispatch, getState, api) => {
    return api
      .post(`/comments/41`, {
        rating: commentData.rating,
        comment: commentData.comment
      })
    .then(() => {
      dispatch(Operation.getComments());
    });
  }
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS:
      return extend(state, {
        films: action.payload
      });
    case ActionType.GET_COMMENTS:
      return extend(state, {
        comments: action.payload
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
