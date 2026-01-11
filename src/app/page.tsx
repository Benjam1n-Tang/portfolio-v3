"use client";

import InteractiveDots from "@/components/backgrounds/CursifyBackground";
import VideoBackground from "@/components/backgrounds/VideoBackground";

export default function Home() {
  return (
    <main className="relative h-[100dvh] w-screen overflow-hidden">
      <InteractiveDots />

      <h1
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-[34px] text-center"
        style={{ mixBlendMode: "difference" }}
      >
        Next.js background video
      </h1>
    </main>
  );
}
