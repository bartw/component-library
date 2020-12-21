import { render, screen } from "@testing-library/react";
import { Title } from "./Title";

describe("Title", () => {
  it("renders text in a h1", () => {
    const text = "some text";

    render(<Title>{text}</Title>);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(text);
  });

  const levels: Array<1 | 2 | 3 | 4 | 5 | 6> = [1, 2, 3, 4, 5, 6];
  it.each(levels)("renders text in a header of the correct level", (level) => {
    const text = "some text";

    render(<Title level={level}>{text}</Title>);

    expect(screen.getByRole("heading", { level })).toHaveTextContent(text);
  });
});
