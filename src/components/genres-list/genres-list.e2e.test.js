import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {GenresList} from "./genres-list.jsx";
import {mockFilms, MOCK_ACTIVE_FILTER} from "../../mocks-for-tests.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Filter click`, () => {
  it(`Should filter be pressed`, () => {
    const onFilterClick = jest.fn();
    const filtersList = mount(
        <GenresList
          films = {mockFilms}
          onFilterClick = {onFilterClick}
          activeFilter = {MOCK_ACTIVE_FILTER}
        />
    );

    const filters = filtersList.find(`catalog__genres-item`);
    const filtersCount = filters.length;

    filters.forEach((filter) => {
      filter.simulate(`click`);
    });

    expect(onFilterClick).toHaveBeenCalledTimes(filtersCount);
  });
});
