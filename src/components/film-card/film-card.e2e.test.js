import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card";

Enzyme.configure({
  adapter: new Adapter(),
});

const mokcsFilms = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`, `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`
];

describe(`Title click`, () => {
  it(`Should film title be pressed`, () => {
    const onFilmTitleClick = jest.fn();

    const filmCard = shallow(
        <FilmCard
          films = {mokcsFilms}
          onFilmTitleClick = {onFilmTitleClick}
        />
    );

    const filmTitles = filmCard.find(`h3.small-movie-card__title`);
    const filmTitlesCount = filmTitles.length;

    filmTitles.forEach((filmTitle) => {
      filmTitle.props().onClick();
    });

    expect(onFilmTitleClick).toHaveBeenCalledTimes(filmTitlesCount);
  });
});
