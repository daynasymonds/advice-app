import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdviceButton from "@/app/ui/advice-button";
import { Advice } from "@/app/models";
import { getAdviceData } from "@/app/data";

const initialState = {
  text: "a piece of advice",
  imageName: "image.svg",
  alt: "some alt text",
} as Advice;

const newState = {
  text: "a second piece of advice",
  imageName: "image.svg",
  alt: "some alt text",
} as Advice;

jest.mock("@/app/data", () => ({
  getAdviceData: jest.fn(() => Promise.resolve(newState)),
}));

describe("AdviceButton", () => {
  it("changes advice text after click", async () => {
    expect(jest.isMockFunction(getAdviceData)).toBeTruthy();

    const user = userEvent.setup();

    render(<AdviceButton initial={initialState} />);

    expect(screen.getByText(initialState.text)).toBeInTheDocument();

    await user.click(screen.getByRole("button"));

    expect(screen.getByText(newState.text)).toBeInTheDocument();
  });
});
