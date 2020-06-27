import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const mockfilm =
{
  name: `Fantastic Beasts`,
  posterSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

const mockMuted = false;

const mockAutoPlay = false;

const mokcFilmCardHandler = () => {};

describe(`Render correct FilmCard`, () => {
  it(`Render FilmCard`, () => {
    const tree = renderer
    .create(<FilmCard
      film = {mockfilm}
      onFilmCardClick = {mokcFilmCardHandler}
      muted = {mockMuted}
      autoPlay = {mockAutoPlay}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
