
import { Advice } from "@/app/models";
import { getInitialAdvice } from "@/app//data";
import AdviceButton from "@/app/ui/advice-button";

export default async function Home() {
  const initial: Advice = await getInitialAdvice();

  return (
    <div>
      <main>
        <div className="flex h-screen">
            <div className="flex flex-col m-auto px-4 gap-3 md:gap-12 md:px-6">
              <AdviceButton initial={initial}/>
            </div>
        </div>
      </main>
    </div>
  );
}
