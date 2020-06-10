import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

const MovieCard = {
  name: `The Grand Budapest`,
  genre: `Drama`,
  year: 2014,
};

ReactDOM.render(
    <App movieCard = {MovieCard} />,
    document.querySelector(`#root`)
);
