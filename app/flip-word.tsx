import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["progress", "unity", "freedom", "rizz", "secretary"];

  return (
    <div className="text-4xl mx-auto font-normal">
      for
      <FlipWords className="text-violet-500 z-20" words={words} /> <br />
    </div>
  );
}
