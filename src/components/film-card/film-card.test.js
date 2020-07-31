import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";
import {mockFilm, mockBool, mokcFunction, mockFilms, MOCK_FILMS_COUNT, mockString} from "../../mocks-for-tests.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Namespace from "../../reducer/namespace.js";
import {MemoryRouter} from "react-router-dom";

const mockStore = configureStore([]);

describe(`Render correct FilmCard`, () => {
  it(`Render FilmCard`, () => {
    const store = mockStore({
      [Namespace.DATA]: {
        films: mockFilms,
        promoFilm: mockFilm
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
            <FilmCard
              film = {mockFilm}
              isPlaying = {mockBool}
              onMovieCardMouseOver = {mokcFunction}
              onMovieCardMouseOut = {mokcFunction}
            />
          </MemoryRouter>
        </Provider>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


