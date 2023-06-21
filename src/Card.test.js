import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

// smoke test
it("renders without crashing", function() {
  render(
    <Card caption={"test"} src={"testimg.jpg"} currNum={1} totalNum={1} />
  );
});

// snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(
    <Card caption={"test"} src={"testimg.jpg"} currNum={1} totalNum={1} />
  );
  expect(asFragment()).toMatchSnapshot();
});
