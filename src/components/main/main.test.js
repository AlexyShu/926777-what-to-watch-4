import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const MockFilmCard = {
  name: `The Grand Budapest`,
  genre: `Drama`,
  posterSrc: `img/the-grand-budapest-hotel-poster.jpg`,
  year: 2014,
  ratingScore: `8,9`,
  ratingLevel: `Very good`,
  ratingCount: `240 ratings`,
  descriptionPartOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort,
  presided over by concierge Gustave H. (Ralph Fiennes).`,
  descriptionPartTwo: `Gustave prides himself on providing first-class service to the hotel's guests,
  including satisfying the sexual needs of the many elderly women who stay there.`,
  filmDirector: `Director: Wes Andreson`,
  filmStarring: `Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
};

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


describe(`Render correct Main`, () => {
  it(`Render Main`, () => {
    const tree = renderer
    .create(<Main
      filmCard = {MockFilmCard}
      films = {mockFilms}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
