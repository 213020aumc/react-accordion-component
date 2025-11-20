import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders Accordion and toggles open/close", () => {
  render(<App />);
  const firstTitle = screen.getByText("Where are these chairs assembled?");
  expect(firstTitle).toBeInTheDocument();

  fireEvent.click(firstTitle.closest(".item")!);
  const content = screen.getByText(/Lorem ipsum dolor sit amet/);
  expect(content).toBeInTheDocument();
});
