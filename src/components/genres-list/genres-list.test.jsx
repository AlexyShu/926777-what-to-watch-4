import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list.jsx";
import {mockFilms, mokcFunction, MOCK_ACTIVE_FILTER} from "../../mocks-for-tests.js";

describe(`Render correct GenresList`, () => {
  it(`Render GenresList`, () => {
    const tree = renderer
    .create(<GenresList
      films = {mockFilms}
      onFilterClick = {mokcFunction}
      activeFilter = {MOCK_ACTIVE_FILTER}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
