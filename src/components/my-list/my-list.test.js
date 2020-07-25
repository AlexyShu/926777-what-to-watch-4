import React from "react";
import renderer from "react-test-renderer";
import MyList from "./my-list.jsx";
import {mockFilms} from "../../mocks-for-tests.js";
import {MemoryRouter} from "react-router-dom";


describe(`Render correct MyList`, () => {
  it(`Render MyList`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <MyList
            films = {mockFilms}
          />
        </MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
