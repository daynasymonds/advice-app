import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdviceButton from "@/app/ui/advice-button";
import { Advice, Slip } from "@/app/models";

describe("AdviceButton", () => {
  it("changes advice text after click", async () => {
    const initialState = {
      text: "a piece of advice",
      imageName: "image.svg",
      alt: "some alt text",
    } as Advice;

    const newAdvice = {
      slip_id: 1,
      advice: "a second piece of advice",
    } as Slip;

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ slip: newAdvice }),
      })
    ) as jest.Mock;

    const user = userEvent.setup();

    render(<AdviceButton initial={initialState} />);

    expect(screen.getByText(initialState.text)).toBeInTheDocument();

    await user.click(screen.getByRole("button"));

    expect(screen.getByText(newAdvice.advice)).toBeInTheDocument();
  });
});
