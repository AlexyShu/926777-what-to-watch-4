import React from "react";
import renderer from "react-test-renderer";
import Player from "./player.jsx";

const mockfilm =
{
  name: ``,
  video: ``,
  genre: ``,
  posterSrc: ``,
  year: 2015,
  ratingScore: ``,
  ratingLevel: ``,
  ratingCount: ``,
  descriptionPartOne: ``,
  descriptionPartTwo: ``,
  filmDirector: ``,
  filmStarring: ``,
};

const mockBool = false;

const mokcFilmCardHandler = () => {};

describe(`Render correct Player`, () => {
  it(`Render Player`, () => {
    const tree = renderer
    .create(<Player
      film = {mockfilm}
      onClick = {mokcFilmCardHandler}
      autoPlay = {mockBool}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});