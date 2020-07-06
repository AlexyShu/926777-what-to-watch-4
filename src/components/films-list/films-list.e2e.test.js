import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FilmsList} from "./films-list.jsx";
import {mockFilms, MOCK_FILMS_COUNT} from "../../mocks-for-tests.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Title click`, () => {
  it(`Should film title be pressed`, () => {
    const onFilmCardClick = jest.fn();

    const filmsList = mount(
        <FilmsList
          films = {mockFilms}
          onFilmCardClick = {onFilmCardClick}
          filmsCount = {MOCK_FILMS_COUNT}
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
