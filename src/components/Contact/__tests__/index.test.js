import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";
import ContactForm from "..";

// const categories = [
//     { name: 'portraits', description: 'Portraits of people in my life' }
//   ]
//   const mockCurrentCategory = jest.fn();
//   const mockSetCurrentCategory = jest.fn();
//   const mockContactSelected = jest.fn();
//   const mockSetContactSelected = jest.fn();

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
