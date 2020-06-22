import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const mockfilm =
{
  name: `Fantastic Beasts`,
  pictureSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};


const mokcFilmCardHandler = () => {};

describe(`Render correct FilmCard`, () => {
  it(`Render FilmCard`, () => {
    const tree = renderer
    .create(<FilmCard
      film = {mockfilm}
      onFilmCardClick = {mokcFilmCardHandler}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
