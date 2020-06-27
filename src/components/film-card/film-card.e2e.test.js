import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockfilm =
{
  name: `Fantastic Beasts`,
  posterSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

describe(`Title click`, () => {
  it(`Should film title be pressed`, () => {
    const onFilmCardClick = jest.fn();
    const filmCard = shallow(
        <FilmCard
          film = {mockfilm}
          onFilmCardClick = {onFilmCardClick}
        />
    );

    const filmCards = filmCard.find(`article.small-movie-card`);
    const filmCardsCount = filmCards.length;

    filmCards.forEach((film) => {
      film.props().onClick();
    });

    expect(onFilmCardClick).toHaveBeenCalledTimes(filmCardsCount);
  });
});
