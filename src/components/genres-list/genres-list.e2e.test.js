import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {GenresList} from "./genres-list.jsx";
import {Provider} from "react-redux";
import Namespace from "../../reducer/namespace.js";
import configureStore from "redux-mock-store";
import {mockFilms, MOCK_ACTIVE_FILTER, mokcFunction, MOCK_FILMS_COUNT} from "../../mocks-for-tests.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`Filter click`, () => {
  it(`Should filter be pressed`, () => {
    const store = mockStore({
      [Namespace.DATA]: {
        films: mockFilms,
      },
      [Namespace.STATE]: {
        filmsCount: MOCK_FILMS_COUNT
      }
    });
    const onFilterClick = jest.fn();
    const handleChange = jest.fn();
    const filtersList = mount(
        <Provider store={store}>
          <GenresList
            films = {mockFilms}
            onFilterClick = {onFilterClick}
            activeFilter = {MOCK_ACTIVE_FILTER}
            handleChange = {handleChange}
            onFilmCardClick = {mokcFunction}
            filmsCount = {MOCK_FILMS_COUNT}
            filteredFilms = {mockFilms}
          />
        </Provider>);

    const filters = filtersList.find(`catalog__genres-item`);
    const filtersCount = filters.length;

    filters.forEach((filter) => {
      filter.simulate(`click`);
    });

    expect(onFilterClick).toHaveBeenCalledTimes(filtersCount);
  });
});

