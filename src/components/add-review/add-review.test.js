import React from "react";
import renderer from "react-test-renderer";
import AddReview from "./add-review.jsx";
import {mokcFunction, MOCK_FILMS_COUNT, mockFilms, mockString} from "../../mocks-for-tests.js";
import Namespace from "../../reducer/namespace.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const match = {
  params: {
    id: 1,
  }
};

describe(`Render correct AddReview`, () => {
  it(`Render AddReview`, () => {
    const store = mockStore({
      [Namespace.DATA]: {
        films: mockFilms,
        comments: []
      },
      [Namespace.STATE]: {
        filmsCount: MOCK_FILMS_COUNT,
        activeFilter: mockString
      },
      [Namespace.USER]: {
        authorizationStatus: mockString
      }
    });
    const tree = renderer
    .create(
        <Provider store={store}>
          <AddReview
            match = {match}
            onMovieCaronSubmitdMouseOut = {mokcFunction}
            films = {mockFilms}
          />
        </Provider>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
