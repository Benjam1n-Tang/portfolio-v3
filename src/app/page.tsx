"use client";

import InteractiveDots from "@/components/backgrounds/CursifyBackground";
import VideoBackground from "@/components/backgrounds/VideoBackground";
import Navbar from "@/components/Navbar";
import TextType from "@/components/TextType";

export default function Home() {
  return (
    <main className="relative h-[100dvh] w-screen overflow-hidden bg-black">
      <VideoBackground />
      <Navbar />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center mix-blend-difference flex flex-col">
        <div className="font-graphik text-[clamp(3.75rem,5vw+2rem,5rem)] tracking-[8%] leading-[100%] pb-[0.2em]">
          <h1>BENJAMIN</h1>
          <h1>TANG</h1>
        </div>
        <div className="font-inter-display text-[clamp(1.5rem,1.9vw+0.9rem,2.25rem)] leading-[100%] font-medium">
          <TextType
            text={[
              "Software Engineer",
              "Undergraduate Student",
              "Data Scientist",
              "App Developer",
            ]}
            typingSpeed={80}
            deletingSpeed={60}
            pauseDuration={2000}
            cursorCharacter={"_"}
          />
        </div>
      </div>
      <div className="absolute mix-blend-difference bottom-20 left-20 text-white">
        <label className="font-neue-montreal font-bold">
          Based in New York{" "}
        </label>
      </div>
    </main>
  );
}
