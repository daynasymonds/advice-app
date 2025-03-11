import { Advice, Slip, ImageData } from "./models";

const images: ImageData[] = [
  { name: "calm-wave.svg", alt: "Calm wave" } as ImageData,
  { name: "rainbow-sun.svg", alt: "Rainbow and sun" } as ImageData,
  { name: "rainbow.svg", alt: "Rainbow" } as ImageData,
  { name: "stars.svg", alt: "Stars" } as ImageData,
  { name: "sunrise.svg", alt: "Sunrise" } as ImageData,
  { name: "sunset.svg", alt: "Sunset" } as ImageData,
];

function randomImangeNameIndex(): number {
  return Math.floor(Math.random() * images.length);
}

export async function getInitialAdvice(): Promise<Advice> {
    return {text: "Always seek out advice or opinions when making a decision.", imageName: "rainbow.svg", alt: "Rainbow"} as Advice;
}

export async function getAdviceData(): Promise<Advice> {
  const adviceData = await fetch("https://api.adviceslip.com/advice");
  const slipObj = await adviceData.json();
  const slip: Slip = slipObj.slip;

  const imageData = images.at(randomImangeNameIndex());

  if (!imageData) {
    throw new Error("Failed to retrieve image data");
  }

  return {
    text: slip.advice,
    imageName: imageData.name,
    alt: imageData.alt,
  } as Advice;
}
