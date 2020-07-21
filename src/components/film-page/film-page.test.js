import React from "react";
import renderer from "react-test-renderer";
import FilmPage from "./film-page.jsx";
import {mockFilmCard, mockFilms, mokcFunction, mockString} from "../../mocks-for-tests.js";

describe(`Render correct FilmPage`, () => {
  it(`Render FilmPage`, () => {
    const tree = renderer
    .create(<FilmPage
      filmCard = {mockFilmCard}
      films = {mockFilms}
      onPlayBtnClick = {mokcFunction}
      authorizationStatus = {mockString}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
