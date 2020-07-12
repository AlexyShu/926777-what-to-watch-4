import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";
import {mockFilmCard, mockBool} from "../../mocks-for-tests.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Title click and film card mouse over, mouse out`, () => {
  it(`Should film title be pressed`, () => {
    const onFilmCardClick = jest.fn();
    const onMovieCardMouseOver = jest.fn();
    const onMovieCardMouseOut = jest.fn();
    const filmCard = shallow(
        <FilmCard
          film = {mockFilmCard}
          onFilmCardClick = {onFilmCardClick}
          isPlaying = {mockBool}
          onMovieCardMouseOver = {onMovieCardMouseOver}
          onMovieCardMouseOut = {onMovieCardMouseOut}
        />
    );

    const filmCards = filmCard.find(`article.small-movie-card`);
    const filmCardsCount = filmCards.length;

    filmCards.forEach((film) => {
      film.props().onClick();
    });
    filmCards.simulate(`mouseover`);
    filmCards.simulate(`mouseout`);

    expect(onFilmCardClick).toHaveBeenCalledTimes(filmCardsCount);
    expect(onMovieCardMouseOver.mock.calls.length).toBe(1);
    expect(onMovieCardMouseOver.mock.calls[0][0]).toMatchObject(mockFilmCard);
    expect(onMovieCardMouseOut.mock.calls.length).toBe(1);
  });
});
