import React from "react";
import renderer from "react-test-renderer";
import {FilmsList} from "./films-list.jsx";


const mockFilms = [
  {
    name: `Fantastic Beasts`,
    posterSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Fantastic`,
    year: 2014,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: `240 ratings`,
    descriptionPartOne: ``,
    descriptionPartTwo: ``,
    filmDirector: `Director: `,
    filmStarring: ``
  },
  {
    name: `Bohemian Rhapsody`,
    posterSrc: `img/bohemian-rhapsody.jpg`,
    genre: `Biography`,
    year: 2014,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: `240 ratings`,
    descriptionPartOne: ``,
    descriptionPartTwo: ``,
    filmDirector: `Director: `,
    filmStarring: ``
  },
  {
    name: `Macbeth`,
    posterSrc: `img/macbeth.jpg`,
    genre: `Drama`,
    year: 2014,
    ratingScore: `8,9`,
    ratingLevel: `Very good`,
    ratingCount: `240 ratings`,
    descriptionPartOne: ``,
    descriptionPartTwo: ``,
    filmDirector: `Director: `,
    filmStarring: ``
  }
];

const mokcFilmCardHandler = () => {};

const MOCK_FILMS_COUNT = 8;

describe(`Render correct FilmsList`, () => {
  it(`Render FilmsList`, () => {
    const tree = renderer
    .create(
        <FilmsList
          films = {mockFilms}
          filmsCount = {MOCK_FILMS_COUNT}
          onFilmCardClick = {mokcFilmCardHandler}
        />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

