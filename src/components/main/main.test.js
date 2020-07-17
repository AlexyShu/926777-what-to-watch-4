import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from "./main.jsx";
import {mockFilmCard, mockFilms, mokcFunction, MOCK_FILMS_COUNT} from "../../mocks-for-tests.js";
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
      }
    });
    const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            filmCard = {mockFilmCard}
            films = {mockFilms}
            filmsCount = {MOCK_FILMS_COUNT}
            onFilmCardClick = {mokcFunction}
            showMoreFilms = {mokcFunction}
            onPlayBtnClick = {mokcFunction}
          />
        </Provider>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
