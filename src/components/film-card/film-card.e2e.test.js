import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockFilms = [
  {
    name: `Fantastic Beasts`,
    pictureSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    name: `Bohemian Rhapsody`,
    pictureSrc: `img/bohemian-rhapsody.jpg`,
  },
  {
    name: `Macbeth`,
    pictureSrc: `img/macbeth.jpg`,
  },
  {
    name: `Aviator`,
    pictureSrc: `img/aviator.jpg`,
  },
  {
    name: `We need to talk about Kevin`,
    pictureSrc: `img/we-need-to-talk-about-kevin.jpg`,
  },
  {
    name: `What We Do in the Shadows`,
    pictureSrc: `img/what-we-do-in-the-shadows.jpg`,
  },
  {
    name: `Revenant`,
    pictureSrc: `img/revenant.jpg`,
  },
  {
    name: `Johnny English`,
    pictureSrc: `img/johnny-english.jpg`,
  }
];

const mockfilm = mockFilms.map((el) => {
  return el;
});

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
