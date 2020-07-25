import {extend, adapterData, adapterFilm} from "../../utils.js";

// данные, объект начального состояния
const initialState = {
  films: [],
  comments: [],
  promoFilm: {},
  // favoriteFilms: []
};

// Action
const ActionType = {
  GET_FILMS: `GET_FILMS`,
  GET_PROMO_FILM: `GET_PROMO_FILM`,
  GET_COMMENTS: `GET_COMMENTS`,
  // GET_FAVORITE_FILMS: `GET_FAVORITE_FILMS`,
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
  // getFavoriteFilms: (favoriteFilms) => ({
  //   type: ActionType.GET_FILMS,
  //   payload: favoriteFilms
  // }),
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
  },
  // getFavoriteFilms: () => (dispatch, getState, api) => {
  //   return api.get(`/favorite`)
  //   .then((response) => {
  //     dispatch(ActionCreator.getFilms(adapterData(response.data)));
  //   });
  // },
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
    // case ActionType.GET_FAVORITE_FILMS:
    //   return extend(state, {
    //     favoriteFilms: action.payload
    //   });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
