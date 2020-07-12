import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from "./app.jsx";
import {mockFilmCard, mockFilms, mokcFunction, MOCK_FILMS_COUNT} from "../../mocks-for-tests.js";

const mockStore = configureStore([]);

describe(`Render correct App`, () => {
  it(`Render App`, () => {
    const store = mockStore({
      films: mockFilms,
      filmsCount: MOCK_FILMS_COUNT
    });
    const tree = renderer
    .create(
        <Provider store={store}>
          <App
            filmCard = {mockFilmCard}
            films = {mockFilms}
            showMoreFilms = {mokcFunction}
          />
        </Provider>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
