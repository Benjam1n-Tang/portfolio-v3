"use client";

import * as React from "react";
import gsap from "gsap";
import Image, { StaticImageData } from "next/image";

interface RippleLogoProps {
  src: StaticImageData | string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  rippleColor1?: string;
  rippleColor2?: string;
  hoverFilterColor?: string;
}

function RippleLogo({
  src,
  alt,
  height = 48,
  width = 48,
  className = "",
  rippleColor1 = "#A7C7C5",
  rippleColor2 = "#B8DBD9",
  hoverFilterColor = "brightness(0.8) saturate(1.2)",
}: RippleLogoProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const imageRef = React.useRef<HTMLImageElement>(null);
  const ripplesRef = React.useRef<HTMLDivElement[]>([]);
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const container = containerRef.current;
    const ripples = ripplesRef.current;

    if (!container || ripples.length === 0) return;

    // Hover animation
    const hoverAnimation = () => {
      setIsHovering(true);
      const t1 = gsap.timeline();
      t1.set(ripples, { display: "block" });
      t1.to(
        container,
        {
          scale: 1.05,
          duration: 0.6,
          ease: "power2.out",
          force3D: true,
        },
        0,
      );

      if (imageRef.current) {
        t1.to(
          imageRef.current,
          {
            filter: hoverFilterColor,
            duration: 0.6,
            ease: "power2.out",
          },
          0,
        );
      }

      t1.set(ripples, { willChange: "transform" });
      t1.fromTo(
        ripples,
        { xPercent: -100 },
        {
          xPercent: 0,
          stagger: { each: 0.12 },
          duration: 0.7,
          ease: "power3.out",
          force3D: true,
        },
        0,
      );
      t1.set(ripples, { willChange: "auto" });
    };

    // Hover reset animation
    const hoverAnimationReset = () => {
      setIsHovering(false);
      const t2 = gsap.timeline();

      t2.to(
        container,
        {
          scale: 1,
          ease: "power2.out",
          duration: 0.5,
          force3D: true,
        },
        0,
      );

      if (imageRef.current) {
        t2.to(
          imageRef.current,
          {
            filter: "brightness(1) saturate(1)",
            duration: 0.5,
            ease: "power2.out",
          },
          0,
        );
      }

      t2.set(ripples, { willChange: "transform", xPercent: 0 }, 0);
      t2.to(
        ripples,
        {
          xPercent: 100,
          stagger: { each: 0.12, from: "end" },
          duration: 0.6,
          ease: "power3.out",
          immediateRender: false,
          force3D: true,
        },
        0,
      );
      t2.set(ripples, { willChange: "auto" });
    };

    container.addEventListener("mouseenter", hoverAnimation);
    container.addEventListener("mouseleave", hoverAnimationReset);

    // Handle browser back/forward cache
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted && imageRef.current) {
        // Kill all active animations
        gsap.killTweensOf(container);
        gsap.killTweensOf(imageRef.current);
        gsap.killTweensOf(ripples);
        // Force final state
        gsap.set(container, { scale: 1, clearProps: "all" });
        gsap.set(imageRef.current, {
          filter: "brightness(1) saturate(1)",
          clearProps: "filter",
        });
        gsap.set(ripples, {
          display: "none",
          xPercent: -100,
          clearProps: "all",
        });
      }
    };
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      container.removeEventListener("mouseenter", hoverAnimation);
      container.removeEventListener("mouseleave", hoverAnimationReset);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block cursor-pointer p-1 ${className}`}
      style={{ height, width }}
    >
      <div className="absolute inset-0 rounded-md overflow-hidden">
        <div
          ref={(el) => {
            if (el) ripplesRef.current[0] = el;
          }}
          className="hidden absolute inset-0 rounded-md"
          style={{ backgroundColor: rippleColor1 }}
        />
        <div
          ref={(el) => {
            if (el) ripplesRef.current[1] = el;
          }}
          className="hidden absolute inset-0 rounded-md"
          style={{ backgroundColor: rippleColor2 }}
        />
      </div>
      <div className="relative z-10">
        <Image
          ref={imageRef}
          src={src}
          alt={alt}
          height={height}
          width={width}
          style={{
            filter: isHovering ? hoverFilterColor : "brightness(1) saturate(1)",
            transition: "filter 0.6s ease-out",
          }}
        />
      </div>
    </div>
  );
}

export default RippleLogo;
