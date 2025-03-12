"use client";

import Image from "next/image";
import { getAdviceData } from "@/app/data";
import { useState } from "react";
import { Advice } from "@/app/models";

export default function AdviceButton({ initial }: { initial: Advice }) {
  const [adviceData, setAdviceData] = useState(initial);

  const onClick = async () => {
    const updatedAdvice = await getAdviceData();
    setAdviceData(updatedAdvice);
  };

  return (
    <>
      <p className="text-center font-light text-[24px] md:max-w-md] md:text-[36px]">
        {adviceData.text}
      </p>

      <Image
        src={adviceData.imageName}
        width={128}
        height={128}
        alt={adviceData.alt}
        className="h-[128px] w-[128px] self-center md:h-[200px] md:w-[200px]"
      />

      <button
        className="rounded-full bg-primary text-white py-1.5 w-[200px] place-self-center font-light duration-[.25s] transition ease-in hover:bg-white hover:border-primary hover:border-solid hover:border-[1px] hover:text-primary"
        onClick={onClick}
      >
        Get another quote
      </button>
    </>
  );
}
