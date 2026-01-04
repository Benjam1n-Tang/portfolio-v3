"use client";
import Video from "next-video";
import codingVideo from "../../videos/coding-video.mp4";

export default function Home() {
  return (
    <main className="relative h-[100dvh] w-screen overflow-hidden">
      <div className="absolute inset-0">
        <Video
          src={codingVideo}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
          }}
        />
      </div>
      <h1
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-[34px] text-center"
        style={{ mixBlendMode: "difference" }}
      >
        Next.js background video
      </h1>
      <style jsx global>{`
        video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          object-fit: cover;
        }
      `}</style>
    </main>
  );
}
