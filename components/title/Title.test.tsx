import { render, screen } from "@testing-library/react";
import { Title } from "./Title";

describe("Title", () => {
  it("renders text in a h1", () => {
    const text = "some text";

    render(<Title>{text}</Title>);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(text);
  });
});
