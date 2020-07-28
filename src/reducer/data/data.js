import {extend, adapterData, adapterFilm} from "../../utils.js";

const SuccessComment = {
  SUCSESS: true,
  ERROR: false
};

// данные, объект начального состояния
const initialState = {
  films: [],
  comments: [],
  promoFilm: {},
  favoriteFilms: [],
  successComment: SuccessComment.ERROR
};

// Action
const ActionType = {
  GET_FILMS: `GET_FILMS`,
  GET_PROMO_FILM: `GET_PROMO_FILM`,
  GET_COMMENTS: `GET_COMMENTS`,
  ADD_COMMENTS: `ADD_COMMENTS`,
  GET_FAVORITE_FILMS: `GET_FAVORITE_FILMS`,
  SEND_SUCCESS_COMMENT: `SEND_SUCCESS_COMMENT`
};

const ActionCreator = {
  getFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films
  }),
  getPromoFilm: (film) => ({
    type: ActionType.GET_PROMO_FILM,
    payload: film
  }),
  getComments: (comments) => ({
    type: ActionType.GET_COMMENTS,
    payload: comments
  }),
  getFavoriteFilms: (favoriteFilms) => ({
    type: ActionType.GET_FAVORITE_FILMS,
    payload: favoriteFilms
  }),
  sendReview: (status) => ({
    type: ActionType.SEND_SUCCESS_COMMENT,
    payload: status,
  }),
};

const Operation = {
  getFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.getFilms(adapterData(response.data)));
    });
  },
  getPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
    .then((response) => {
      dispatch(ActionCreator.getPromoFilm(adapterFilm(response.data)));
    });
  },
  getComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
    .then((response) => {
      dispatch(ActionCreator.getComments(response.data));
    });
  },
  addComment: (id, commentData) => (dispatch, getState, api) => {
    return api
      .post(`/comments/${id}`, {
        rating: commentData.rating,
        comment: commentData.comment
      })
    .then(() => {
      // dispatch(Operation.addComment(true));
      dispatch(ActionCreator.sendReview(SuccessComment.SUCSESS));
    });
  },
  getFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
    .then((response) => {
      dispatch(ActionCreator.getFavoriteFilms(adapterData(response.data)));
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS:
      return extend(state, {
        films: action.payload
      });
    case ActionType.GET_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload
      });
    case ActionType.GET_COMMENTS:
      return extend(state, {
        comments: action.payload
      });
    case ActionType.GET_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload
      });
    case ActionType.SEND_SUCCESS_COMMENT:
      return extend(state, {
        successComment: action.payload
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
