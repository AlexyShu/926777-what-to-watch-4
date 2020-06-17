import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mokcsFilms = [
  {
    name: `Fantastic Beasts`,
    pictureSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    key: 1
  },
  {
    name: `Bohemian Rhapsody`,
    pictureSrc: `img/bohemian-rhapsody.jpg`,
    key: 2
  },
  {
    name: `Macbeth`,
    pictureSrc: `img/macbeth.jpg`,
    key: 3
  },
  {
    name: `Aviator`,
    pictureSrc: `img/aviator.jpg`,
    key: 4
  },
  {
    name: `We need to talk about Kevin`,
    pictureSrc: `img/we-need-to-talk-about-kevin.jpg`,
    key: 5
  },
  {
    name: `What We Do in the Shadows`,
    pictureSrc: `img/what-we-do-in-the-shadows.jpg`,
    key: 6
  },
  {
    name: `Revenant`,
    pictureSrc: `img/revenant.jpg`,
    key: 7
  },
  {
    name: `Johnny English`,
    pictureSrc: `img/johnny-english.jpg`,
    key: 8
  }
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
