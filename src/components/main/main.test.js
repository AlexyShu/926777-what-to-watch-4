import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from "./main.jsx";
import {mockFilmCard, mockFilms, mokcFunction, MOCK_FILMS_COUNT, mockString} from "../../mocks-for-tests.js";
import Namespace from "../../reducer/namespace.js";

const mockStore = configureStore([]);

describe(`Render correct Main`, () => {
  it(`Render Main`, () => {
    const store = mockStore({
      [Namespace.DATA]: {
        films: mockFilms,
      },
      [Namespace.STATE]: {
        filmsCount: MOCK_FILMS_COUNT
      },
      [Namespace.USER]: {
        authorizationStatus: mockString
      }
    });
    const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            promoFilm = {mockFilmCard}
            films = {mockFilms}
            filmsCount = {MOCK_FILMS_COUNT}
            showMoreFilms = {mokcFunction}
            onPlayBtnClick = {mokcFunction}
            authorizationStatus = {mockString}
          />
        </Provider>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
