import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const MovieCard = {
  name: `The Grand Budapest`,
  genre: `Drama`,
  year: 2014,
};

ReactDOM.render(
    <App
      movieCard = {MovieCard}
      films = {films}
    />,
    document.querySelector(`#root`)
);

