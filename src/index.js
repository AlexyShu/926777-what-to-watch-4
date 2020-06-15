import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const MovieCard = {
  name: `The Grand Budapest`,
  genre: `Drama`,
  year: 2014,
};

const films = [
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

ReactDOM.render(
    <App
      movieCard = {MovieCard}
      films = {films}
    />,
    document.querySelector(`#root`)
);

