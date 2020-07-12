import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";
import {mockFilmCard, mockBool, mokcFunction} from "../../mocks-for-tests.js";

describe(`Render correct FilmCard`, () => {
  it(`Render FilmCard`, () => {
    const tree = renderer
    .create(<FilmCard
      film = {mockFilmCard}
      onFilmCardClick = {mokcFunction}
      isPlaying = {mockBool}
      onMovieCardMouseOver = {mokcFunction}
      onMovieCardMouseOut = {mokcFunction}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


