import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from "./app.jsx";
import {mockFilmCard, mockFilms, mokcFunction, MOCK_FILMS_COUNT, mockBool, mockString} from "../../mocks-for-tests.js";
import Namespace from "../../reducer/namespace.js";

const mockStore = configureStore([]);

describe(`Render correct App`, () => {
  it(`Render App`, () => {
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
          <App
            filmCard = {mockFilmCard}
            films = {mockFilms}
            showMoreFilms = {mokcFunction}
            onPlayBtnClick = {mokcFunction}
            onExitClick = {mokcFunction}
            muted = {mockBool}
            autoPlay = {mockBool}
            login = {mokcFunction}
            authorizationStatus = {mockString}
          />
        </Provider>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
