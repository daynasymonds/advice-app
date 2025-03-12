import { Advice, Slip } from "@/app/models";
import { getInitialAdvice, getAdviceData } from "@/app/data";

describe("data", () => {
  describe("initial advice state", () => {
    it("is static", async () => {
      const expected = {
        text: "Always seek out advice or opinions when making a decision.",
        imageName: "rainbow.svg",
        alt: "Rainbow",
      } as Advice;

      const actual = await getInitialAdvice();

      expect(actual.text).toBe(expected.text);
      expect(actual.imageName).toBe(expected.imageName);
      expect(actual.alt).toBe(expected.alt);
    });
  });

  describe("get advice", () => {
    const advice = {
      slip_id: 1,
      advice: "a second piece of advice",
    } as Slip;

    const successfulResponse = () =>
      Promise.resolve({
        json: () => Promise.resolve({ slip: advice }),
      });

    it("returns advice from API", async () => {
      global.fetch = jest.fn(successfulResponse) as jest.Mock;

      const result = await getAdviceData();

      expect(result.text).toBe("a second piece of advice");
      expect(result.imageName).toBeTruthy();
      expect(result.alt).toBeTruthy();
    });
  });
});
