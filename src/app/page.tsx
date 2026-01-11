"use client";
import Video from "next-video";
import screenCoding from "../../videos/screen_coding.mp4";
import handsWorking from "../../videos/hands_working.mp4";
import handsKeyboard from "../../videos/hands_working.mp4";
import VideoBackground from "@/components/backgrounds/VideoBackground";

export default function Home() {
  return (
    <main className="relative h-[100dvh] w-screen overflow-hidden">
      <div className="absolute inset-0">
        <VideoBackground />
      </div>
      <h1
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-[34px] text-center"
        style={{ mixBlendMode: "difference" }}
      >
        Next.js background video
      </h1>
    </main>
  );
}
