import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders accordion with FAQ items", () => {
  render(<App />);
  const firstFaqTitle = screen.getByText("Where are these chairs assembled?");
  expect(firstFaqTitle).toBeInTheDocument();
});
