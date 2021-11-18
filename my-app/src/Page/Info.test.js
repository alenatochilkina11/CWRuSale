import { render, screen } from "@testing-library/react";
import Info from "./Info";

test("renders text on screen", () => {
  render(<Info />);
  const text = screen.getByText("Info Page");
  expect(text).toBeInTheDocument();
});

test("renders text on screen", () => {
  render(<Info />);
  const text = screen.getByText("About CWRUSale");
  expect(text).toBeInTheDocument();
});

test("renders text on screen", () => {
  render(<Info />);
  const text = screen.getByText(/User Agreement/i);
  expect(text).toBeInTheDocument();
});

test("renders text on screen", () => {
  render(<Info />);
  const text = screen.getByText(/Help Button/i);
  expect(text).toBeInTheDocument();
});

test("renders text on screen", () => {
  render(<Info />);
  const text = screen.getByText(/Fetch Forms/i);
  expect(text).toBeInTheDocument();
});
