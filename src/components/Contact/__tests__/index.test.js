import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";


afterEach(cleanup);

describe("Contact component", () => {
  // baseline test
  it("renders", () => {
    render(<ContactForm />);
  });

  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("shows Submit on the button", () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId("subBut")).toHaveTextContent("Submit");
  });

  it("shows contact me", () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId("con")).toHaveTextContent("Contact me");
  });
});
