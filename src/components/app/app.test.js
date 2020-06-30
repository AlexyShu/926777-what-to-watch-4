import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const mockFilmCard = {
  name: `The Grand Budapest`,
  genre: `Drama`,
  posterSrc: `img/the-grand-budapest-hotel-poster.jpg`,
  year: 2014,
  ratingScore: `8,9`,
  ratingLevel: `Very good`,
  ratingCount: `240 ratings`,
  descriptionPartOne: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort,
  presided over by concierge Gustave H. (Ralph Fiennes).
  Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  descriptionPartTwo: `Gustave prides himself on providing first-class service to the hotel's guests,
  including satisfying the sexual needs of the many elderly women who stay there.
  When one of Gustave's lovers dies mysteriously,
  Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  filmDirector: `Director: Wes Andreson`,
  filmStarring: `Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  time: `1h 39m`,
  reviews: [
    {
      rating: 2,
      date: `June 29, 2020`,
      author: `Alexy Shu`,
      text: `This is an awesome movie! You should watch it!`
    },
    {
      rating: 3,
      date: `June 29, 2020`,
      author: `Alexy Shu`,
      text: `This is an awesome movie! You should watch it!`
    },
    {
      rating: 9,
      date: `June 29, 2020`,
      author: `Alexy Shu`,
      text: `This is an awesome movie! You should watch it!`
    }
  ]
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

describe(`Render correct App`, () => {
  it(`Render App`, () => {
    const tree = renderer
    .create(<App
      filmCard = {mockFilmCard}
      films = {mockFilms}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
