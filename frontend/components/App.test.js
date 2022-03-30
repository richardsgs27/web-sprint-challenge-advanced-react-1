
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AppFunctional from "./AppFunctional";

test('sanity', () => {
  expect(true).toBe(true)
})

beforeEach(() => {
  render(<AppFunctional />);
});

test('Renders the heading', () => {
  const heading = screen.queryByText("Coordinates (2, 2)")
  expect (heading).toBeVisible()
  expect (heading).toBeInTheDocument()
})
  
test('Renders the movement', () => {
  const movement = screen.queryByText("You moved 0 times")
  expect(movement).toBeVisible()
  expect(movement).toBeInTheDocument()
})

test('Existence of the email input', () => {
  const email = screen.getByPlaceholderText('type email')
  expect(email).toBeVisible()
  expect(email).toBeInTheDocument()
})

test('Renders thet left button', () => {
  const left = screen.queryByText("LEFT")
  expect(left).toBeVisible()
  expect(left).toBeInTheDocument()
})

test('Renders the right button', () => {
  const right = screen.queryByText("RIGHT")
  expect(right).toBeVisible()
  expect(right).toBeInTheDocument()
})

test('Renders the up button', () => {
  const up = screen.queryByText("UP")
  expect(up).toBeVisible()
  expect(up).toBeInTheDocument()
})

test('Renders the down button', () => {
  const down = screen.queryByText("DOWN")
  expect(down).toBeVisible()
  expect(down).toBeInTheDocument()
})

test('Renders the reset button', () => {
  const reset = screen.queryByText("reset")
  expect(reset).toBeVisible()
  expect(reset).toBeInTheDocument()
})

