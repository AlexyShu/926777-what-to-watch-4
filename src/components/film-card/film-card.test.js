import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";


const mokcsFilms = [
  {
    name: `Fantastic Beasts`,
    pictureSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    key: 1
  },
  {
    name: `Bohemian Rhapsody`,
    pictureSrc: `img/bohemian-rhapsody.jpg`,
    key: 2
  },
  {
    name: `Macbeth`,
    pictureSrc: `img/macbeth.jpg`,
    key: 3
  },
  {
    name: `Aviator`,
    pictureSrc: `img/aviator.jpg`,
    key: 4
  },
  {
    name: `We need to talk about Kevin`,
    pictureSrc: `img/we-need-to-talk-about-kevin.jpg`,
    key: 5
  },
  {
    name: `What We Do in the Shadows`,
    pictureSrc: `img/what-we-do-in-the-shadows.jpg`,
    key: 6
  },
  {
    name: `Revenant`,
    pictureSrc: `img/revenant.jpg`,
    key: 7
  },
  {
    name: `Johnny English`,
    pictureSrc: `img/johnny-english.jpg`,
    key: 8
  }
];

const mokcFilmTitleHandler = () => {};


describe(`Render correct FilmCard`, () => {
  it(`Render FilmCard`, () => {
    const tree = renderer
    .create(<FilmCard
      films = {mokcsFilms}
      onFilmTitleClick = {mokcFilmTitleHandler}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
