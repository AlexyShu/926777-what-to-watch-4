import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Player from "./player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockfilm =
{
  name: ``,
  video: ``,
  genre: ``,
  posterSrc: ``,
  year: 2015,
  ratingScore: ``,
  ratingLevel: ``,
  ratingCount: ``,
  descriptionPartOne: ``,
  descriptionPartTwo: ``,
  filmDirector: ``,
  filmStarring: ``,
};

it(`Should play video on click`, () => {
  const fakePlay = jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => {});

  const moviePlayer = mount(
      <Player
        film = {mockfilm}
        autoPlay = {false} />
  );

  expect(moviePlayer.state(`isPlaying`)).toBe(false);
  moviePlayer.simulate(`click`);
  expect(moviePlayer.state(`isPlaying`)).toBe(true);

  expect(fakePlay).toHaveBeenCalled();
  fakePlay.mockRestore();
});
