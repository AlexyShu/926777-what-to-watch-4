
import React from "react";
import renderer from "react-test-renderer";
import withPlayer from "./with-player.jsx";
import {mockBool} from "../../mocks-for-tests.js";

const MockComponent = () => <div></div>;
const MockComponentWrapped = withPlayer(MockComponent);

it(`withPlayer is rendered correctly`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped
          muted={mockBool}
          autoPlay={mockBool}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
