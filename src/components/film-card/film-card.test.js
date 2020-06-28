import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const mockfilm =
{
  name: `Fantastic Beasts`,
  posterSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

const mockIsPlaying = false;
const mockonFunc = () => {};


describe(`Render correct FilmCard`, () => {
  it(`Render FilmCard`, () => {
    const tree = renderer
    .create(<FilmCard
      film = {mockfilm}
      onFilmCardClick = {mockonFunc}
      isPlaying = {mockIsPlaying}
      onMovieCardMouseOver = {mockonFunc}
      onMovieCardMouseOut = {mockonFunc}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


