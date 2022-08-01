import { screen, render } from "@testing-library/react";
import React from "react";

import App from "./App";

import { Card } from "antd";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

describe("App", () => {
  test("render App component", () => {
    render(<App />);
    expect(screen.getByText("New List")).toBeInTheDocument();
  });
});

describe("Card", () => {
  test("render card", () => {
    render(<Card />);
    screen.findByTestId("card-test");
    screen.debug();
  });

  test("render div", () => {
    render(<App />);
    screen.findByTestId("app-div");
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
