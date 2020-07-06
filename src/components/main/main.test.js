import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from "./main.jsx";

const MockFilmCard = {
  name: `The Grand Budapest`,
  genre: `Drama`,
  posterSrc: `img/the-grand-budapest-hotel-poster.jpg`,
  year: 2014,
  ratingScore: `8,9`,
  ratingLevel: `Very good`,
  ratingCount: `240 ratings`,
  descriptionPartOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort,
  presided over by concierge Gustave H. (Ralph Fiennes).`,
  descriptionPartTwo: `Gustave prides himself on providing first-class service to the hotel's guests,
  including satisfying the sexual needs of the many elderly women who stay there.`,
  filmDirector: `Director: Wes Andreson`,
  filmStarring: `Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
};

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

const mokcFunction = () => {};

const MOCK_FILMS_COUNT = 8;

const mockStore = configureStore([]);

describe(`Render correct Main`, () => {
  it(`Render Main`, () => {
    const store = mockStore({
      films: mockFilms,
      filmsCount: MOCK_FILMS_COUNT
    });
    const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            filmCard = {MockFilmCard}
            films = {mockFilms}
            filmsCount = {MOCK_FILMS_COUNT}
            onFilmCardClick = {mokcFunction}
            showMoreFilms = {mokcFunction}
          />
        </Provider>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
