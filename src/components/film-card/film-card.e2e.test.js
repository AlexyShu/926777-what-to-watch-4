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
  pictureSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

describe(`Title click`, () => {
  it(`Should film title be pressed`, () => {
    const onFilmTitleClick = jest.fn();
    const filmCard = shallow(
        <FilmCard
          film = {mockfilm}
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
