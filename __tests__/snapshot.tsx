import { render } from "@testing-library/react";
import AdviceButton from "@/app/ui/advice-button";
import { Advice } from "@/app/models";

it("renders advice button unchanged", () => {
  const initial = {
    text: "a piece of advice",
    imageName: "rainbow.svg",
    alt: "A rainbow",
  } as Advice;

  const { container } = render(<AdviceButton initial={initial} />);
  
  expect(container).toMatchSnapshot();
});
