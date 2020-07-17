import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer.js";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
import {composeWithDevTools} from "redux-devtools-extension";
import FilmCard from "./mocks/film-card.js";
import {createAPI} from "./api.js";
import {Operation as DataOperation} from "./reducer/data/data.js";

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.getFilms());

ReactDOM.render(
    <Provider store={store}>
      <App
        filmCard = {FilmCard}
      />,
    </Provider>,
    document.querySelector(`#root`)
);

