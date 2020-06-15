import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";


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

describe(`Render correct FilmCard`, () => {
  it(`Render FilmCard`, () => {
    const tree = renderer
    .create(<FilmCard
      films = {mokcsFilms}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
