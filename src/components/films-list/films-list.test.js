import React from "react";
import renderer from "react-test-renderer";
import {FilmsList} from "./films-list.jsx";
import {mockFilms, mokcFunction, MOCK_FILMS_COUNT, mockBool} from "../../mocks-for-tests.js";

describe(`Render correct FilmsList`, () => {
  it(`Render FilmsList`, () => {
    const tree = renderer
    .create(
        <FilmsList
          films = {mockFilms}
          filmsCount = {MOCK_FILMS_COUNT}
          onFilmCardClick = {mokcFunction}
          selectedFilmId = {MOCK_FILMS_COUNT}
          isPlaying = {mockBool}
          onMovieCardMouseOver = {mokcFunction}
          onMovieCardMouseOut = {mokcFunction}
        />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

