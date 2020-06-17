import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const mockFilms = [
  {
    name: `Fantastic Beasts`,
    pictureSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    name: `Bohemian Rhapsody`,
    pictureSrc: `img/bohemian-rhapsody.jpg`,
  },
  {
    name: `Macbeth`,
    pictureSrc: `img/macbeth.jpg`,
  },
  {
    name: `Aviator`,
    pictureSrc: `img/aviator.jpg`,
  },
  {
    name: `We need to talk about Kevin`,
    pictureSrc: `img/we-need-to-talk-about-kevin.jpg`,
  },
  {
    name: `What We Do in the Shadows`,
    pictureSrc: `img/what-we-do-in-the-shadows.jpg`,
  },
  {
    name: `Revenant`,
    pictureSrc: `img/revenant.jpg`,
  },
  {
    name: `Johnny English`,
    pictureSrc: `img/johnny-english.jpg`,
  }
];

const mockfilm = mockFilms.map((el) => {
  return el;
});

const mokcFilmTitleHandler = () => {};

describe(`Render correct FilmCard`, () => {
  it(`Render FilmCard`, () => {
    const tree = renderer
    .create(<FilmCard
      film = {mockfilm}
      onFilmTitleClick = {mokcFilmTitleHandler}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
