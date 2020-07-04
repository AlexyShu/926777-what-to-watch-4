import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FilmsList} from "./films-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

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

describe(`Title click`, () => {
  it(`Should film title be pressed`, () => {
    const onFilmCardClick = jest.fn();

    const filmsList = mount(
        <FilmsList
          films = {mockFilms}
          onFilmCardClick = {onFilmCardClick}
        />
    );

    const filmCards = filmsList.find(`article.small-movie-card`);
    const filmCardsCount = filmCards.length;

    filmCards.forEach((film) => {
      film.simulate(`click`);
    });

    expect(onFilmCardClick).toHaveBeenCalledTimes(filmCardsCount);
  });
});
