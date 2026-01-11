"use client";

import InteractiveDots from "@/components/backgrounds/CursifyBackground";
import VideoBackground from "@/components/backgrounds/VideoBackground";
import Navbar from "@/components/Navbar";
import TextType from "@/components/TextType";

export default function Home() {
  return (
    <main className="relative h-[100dvh] w-screen overflow-hidden bg-black">
      <div>
        <Navbar />
      </div>
      <VideoBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center mix-blend-difference flex flex-col gap-1 s:gap-2 md:gap-4">
        <div className="font-graphik md:text-8xl text-6xl s:text-7xl">
          <h1>BENJAMIN</h1>
          <h1>TANG</h1>
        </div>
        <div className="font-inter-display text-2xl md:text-4xl s:text-3xl">
          <TextType
            text={["Software Engineer", "Web Dev"]}
            typingSpeed={80}
            deletingSpeed={60}
            pauseDuration={2000}
            cursorCharacter={"_"}
          />
        </div>
      </div>
    </main>
  );
}
