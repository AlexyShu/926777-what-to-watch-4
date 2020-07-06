import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button.jsx";

const mockonFunc = () => {};

describe(`Render correct ShowMoreButton`, () => {
  it(`Render ShowMoreButton`, () => {
    const tree = renderer
    .create(<ShowMoreButton
      showMoreFilms = {mockonFunc}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


