import React from "react";
import renderer from "react-test-renderer";
import FilmPage from "./film-page.jsx";

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


describe(`Render correct FilmPage`, () => {
  it(`Render FilmPage`, () => {
    const tree = renderer
    .create(<FilmPage
      filmCard = {MockFilmCard}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
