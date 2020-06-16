import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const MockMovieCard = {
  name: `The Grand Budapest`,
  genre: `Drama`,
  year: 2014,
};

const mockFilms = [
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

describe(`Render correct App`, () => {
  it(`Render App`, () => {
    const tree = renderer
    .create(<App
      movieCard = {MockMovieCard}
      films = {mockFilms}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
