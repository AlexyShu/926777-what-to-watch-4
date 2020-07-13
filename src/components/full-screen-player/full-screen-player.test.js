import React from "react";
import renderer from "react-test-renderer";
import FullScreenPlayer from "./full-screen-player.jsx";
import {mockFilmCard, mokcFunction, mockBool} from "../../mocks-for-tests.js";


describe(`Render correct FullScreenPlayer`, () => {
  it(`Render FullScreenPlayer`, () => {
    const tree = renderer
    .create(
        <FullScreenPlayer
          filmCard = {mockFilmCard}
          videoRef = {mokcFunction}
          isPlaying = {mockBool}
          getToggleProgress = {mokcFunction}
          getTimeDuration = {mokcFunction}
          onLoadedMetadata = {mokcFunction}
          onTimeUpdate = {mokcFunction}
          onFullscreenButtonClick = {mokcFunction}
          onPlayButtonClick = {mokcFunction}
          onExitButtonClick = {mokcFunction}
          onExitClick = {mokcFunction}
        />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
