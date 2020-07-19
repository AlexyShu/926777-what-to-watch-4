import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import mokcFunction from "../../mocks-for-tests.js";


describe(`Render correct SignIn`, () => {
  it(`Render SignIn`, () => {
    const tree = renderer
    .create(
        <SignIn
          onSubmit = {mokcFunction}
        />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
