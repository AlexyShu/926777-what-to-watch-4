import React from "react";
import renderer from "react-test-renderer";
import Player from "./player.jsx";
import {mockFilmCard, mockBool} from "../../mocks-for-tests.js";

describe(`Render correct Player`, () => {
  it(`Render Player`, () => {
    const tree = renderer
    .create(<Player
      film = {mockFilmCard}
      autoPlay = {mockBool}
      muted = {mockBool}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
