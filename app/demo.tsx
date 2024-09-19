"use client";
import { Boxes } from "@/components/ui/background-boxes";

export function BackgroundBoxesDemo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      {/* <h1
        className={cn(
          "text-3xl md:text-7xl font-bold text-center text-white relative z-20"
        )}
      >
        I've got the notes
      </h1>
      <p className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center mt-2 text-neutral-300 relative z-20">
        You've got the votes
      </p> */}
      {children}
    </div>
  );
}
