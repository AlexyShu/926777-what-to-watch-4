import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {GenresList} from "./genres-list.jsx";

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

const MockActiveFilter = `All genres`;

describe(`Filter click`, () => {
  it(`Should filter be pressed`, () => {
    const onFilterClick = jest.fn();

    const filtersList = mount(
        <GenresList
          films = {mockFilms}
          onFilterClick = {onFilterClick}
          activeFilter = {MockActiveFilter}
        />
    );

    const filters = filtersList.find(`catalog__genres-item`);
    const filtersCount = filters.length;

    filters.forEach((filter) => {
      filter.simulate(`click`);
    });

    expect(onFilterClick).toHaveBeenCalledTimes(filtersCount);
  });
});
