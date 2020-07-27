import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";
import {mockFilm, mockComments} from "../../mocks-for-tests.js";

describe(`Render correct Tabs`, () => {
  it(`Render Tabs`, () => {
    const tree = renderer
    .create(<Tabs
      film = {mockFilm}
      comments={mockComments}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
