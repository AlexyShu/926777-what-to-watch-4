import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import mokcFunction from "../../mocks-for-tests.js";
import {MemoryRouter} from "react-router-dom";


describe(`Render correct SignIn`, () => {
  it(`Render SignIn`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <SignIn
            onSubmit = {mokcFunction}
          />
        </MemoryRouter>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
