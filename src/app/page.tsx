"use client";

import InteractiveDots from "@/components/backgrounds/CursifyBackground";
import VideoBackground from "@/components/backgrounds/VideoBackground";
import TextType from "@/components/TextType";

export default function Home() {
  return (
    <main className="relative h-[100dvh] w-screen overflow-hidden bg-black">
      <VideoBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-8xl text-center mix-blend-difference font-semibold font-graphik">
        <h1>BENJAMIN TANG</h1>
        <TextType
          className="text-lg"
          text={["Software Engineer", "Web Dev"]}
          typingSpeed={80}
          deletingSpeed={60}
          pauseDuration={2000}
          cursorCharacter={"_"}
        />
      </div>
    </main>
  );
}
