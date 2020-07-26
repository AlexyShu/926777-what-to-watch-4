import React from "react";
import renderer from "react-test-renderer";
import MyList from "./my-list.jsx";
import {mockFilms, mockFilmCard, MOCK_FILMS_COUNT, mockString} from "../../mocks-for-tests.js";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Namespace from "../../reducer/namespace.js";

const mockStore = configureStore([]);


describe(`Render correct MyList`, () => {
  it(`Render MyList`, () => {
    const store = mockStore({
      [Namespace.DATA]: {
        films: mockFilms,
        promoFilm: mockFilmCard
      },
      [Namespace.STATE]: {
        filmsCount: MOCK_FILMS_COUNT
      },
      [Namespace.USER]: {
        authorizationStatus: mockString
      }
    });
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <MyList
              films = {mockFilms}
            />
          </MemoryRouter>
        </Provider>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
