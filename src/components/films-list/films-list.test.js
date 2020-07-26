import React from "react";
import renderer from "react-test-renderer";
import {FilmsList} from "./films-list.jsx";
import {mockFilms, mokcFunction, MOCK_FILMS_COUNT, mockFilmCard, mockString} from "../../mocks-for-tests.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Namespace from "../../reducer/namespace.js";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureStore([]);

describe(`Render correct FilmsList`, () => {
  it(`Render FilmsList`, () => {
    const store = mockStore({
      [Namespace.DATA]: {
        films: mockFilms,
        promoFilm: mockFilmCard
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
          <MemoryRouter>
            <FilmsList
              films = {mockFilms}
              filmsCount = {MOCK_FILMS_COUNT}
              activeItem = {MOCK_FILMS_COUNT}
              handleChange = {mokcFunction}
              filteredFilms = {mockFilms}
            />
          </MemoryRouter>
        </Provider>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


