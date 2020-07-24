import React from "react";
import renderer from "react-test-renderer";
import FilmPage from "./film-page.jsx";
import {mockFilms, mockString} from "../../mocks-for-tests.js";

describe(`Render correct FilmPage`, () => {
  it(`Render FilmPage`, () => {
    const tree = renderer
    .create(<FilmPage
      films = {mockFilms}
      authorizationStatus = {mockString}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
