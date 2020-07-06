import React from "react";
import renderer from "react-test-renderer";
import FilmPage from "./film-page.jsx";
import {mockFilmCard, mockFilms} from "../../mocks-for-tests.js";

describe(`Render correct FilmPage`, () => {
  it(`Render FilmPage`, () => {
    const tree = renderer
    .create(<FilmPage
      filmCard = {mockFilmCard}
      films = {mockFilms}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
