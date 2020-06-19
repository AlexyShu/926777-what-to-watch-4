import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";
import FilmCard from "./mocks/film-card.js";

ReactDOM.render(
    <App
      filmCard = {FilmCard}
      films = {films}
    />,
    document.querySelector(`#root`)
);

