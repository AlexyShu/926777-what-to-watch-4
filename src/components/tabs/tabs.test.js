import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";
import {mockFilmCard} from "../../mocks-for-tests.js";

describe(`Render correct Tabs`, () => {
  it(`Render Tabs`, () => {
    const tree = renderer
    .create(<Tabs
      filmCard = {mockFilmCard}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
