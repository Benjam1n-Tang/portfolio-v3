"use client";

import * as React from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

interface RippleButtonProps extends Omit<
  React.ComponentProps<"button">,
  "ref"
> {
  rippleColor1?: string;
  rippleColor2?: string;
  onAnimationLoad?: () => void;
  showDownloadIcon?: boolean;
  iconColor?: string;
  iconBgColor?: string;
}

function RippleButton({
  className,
  rippleColor1 = "#A7C7C5",
  rippleColor2 = "#B8DBD9",
  children,
  onAnimationLoad,
  showDownloadIcon = false,
  iconColor = "#839B9A",
  iconBgColor = "#000000",
  ...props
}: RippleButtonProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);
  const iconRef = React.useRef<HTMLDivElement>(null);
  const ripplesRef = React.useRef<HTMLDivElement[]>([]);

  React.useEffect(() => {
    const button = buttonRef.current;
    const title = titleRef.current;
    const ripples = ripplesRef.current;

    if (!button || !title || ripples.length === 0) return;

    // Immediately ensure button is visible on mount/remount
    gsap.killTweensOf(button);
    gsap.killTweensOf(title);
    gsap.set(button, { opacity: 1, scaleX: 1, scaleY: 1 });
    gsap.set(title, { opacity: 1 });

    // Load animation
    const tl = gsap.timeline();
    tl.set(button, { willChange: "transform", opacity: 1 }, 0);
    tl.from(button, { opacity: 0, duration: 0.1 }, 0);
    tl.from(
      button,
      {
        scaleX: 0.3,
        duration: 1.6,
        ease: "elastic.out(0.4, 0.3)",
        force3D: true,
      },
      0,
    );
    tl.from(title, { opacity: 0, duration: 0.2 }, 0.2);
    tl.set(title, { willChange: "auto" });

    onAnimationLoad?.();

    // Hover animation
    const hoverAnimation = () => {
      const t1 = gsap.timeline();
      t1.set(ripples, { display: "block" });
      t1.set(button, { willChange: "transform", scale: 1 });
      t1.to(
        button,
        {
          scaleX: 1.03,
          scaleY: 0.98,
          duration: 0.8,
          ease: "power2.out",
          force3D: true,
        },
        0,
      );
      t1.set(button, { willChange: "auto" });

      t1.set(ripples, { willChange: "transform" });
      t1.fromTo(
        ripples,
        { xPercent: -100 },
        {
          xPercent: 0,
          stagger: { each: 0.15 },
          duration: 0.9,
          ease: "power3.out",
          force3D: true,
        },
        0,
      );
      t1.set(ripples, { willChange: "auto" });

      if (showDownloadIcon && iconRef.current) {
        t1.to(
          iconRef.current,
          {
            width: "0.9rem",
            height: "0.9rem",
            padding: "0.6rem",
            rotation: 0,
            duration: 0.9,
            ease: "power2.out",
          },
          0, // Start at the same time as ripple
        );
      }
    };

    // Hover reset animation
    const hoverAnimationReset = () => {
      const t2 = gsap.timeline();

      t2.set(
        button,
        { scaleX: 1.03, scaleY: 0.98, willChange: "transform" },
        0,
      );
      t2.to(
        button,
        {
          scaleX: 1,
          scaleY: 1,
          ease: "power2.out",
          duration: 0.6,
          force3D: true,
        },
        0,
      );
      t2.set(button, { willChange: "auto" });

      if (showDownloadIcon && iconRef.current) {
        t2.to(
          iconRef.current,
          {
            width: "0rem",
            height: "0rem",
            padding: "0rem",
            rotation: -180,
            duration: 0.5,
            ease: "power2.in",
          },
          0,
        );
      }

      t2.set(ripples, { willChange: "transform", xPercent: 0 }, 0);
      t2.to(
        ripples,
        {
          xPercent: 100,
          stagger: { each: 0.15, from: "end" },
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
          force3D: true,
        },
        0,
      );
      t2.set(ripples, { willChange: "auto" });
    };

    button.addEventListener("mouseenter", hoverAnimation);
    button.addEventListener("mouseleave", hoverAnimationReset);

    // Handle browser back/forward cache
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted && button && title) {
        // Kill all active animations on this button
        gsap.killTweensOf([button, title, ripples]);
        // Force final state without clearProps to maintain visibility
        gsap.set(button, {
          opacity: 1,
          scaleX: 1,
          scaleY: 1,
          willChange: "auto",
        });
        gsap.set(title, { opacity: 1 });
        gsap.set(ripples, { display: "none" });
      }
    };
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      button.removeEventListener("mouseenter", hoverAnimation);
      button.removeEventListener("mouseleave", hoverAnimationReset);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [onAnimationLoad, showDownloadIcon]);

  return (
    <button
      ref={buttonRef}
      className={cn(
        "relative px-6 py-[0.75rem] rounded-[70px] font-semibold text-base font-neue-montreal uppercase text-white overflow-hidden cursor-pointer",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-[70px] bg-[#839B9A] overflow-hidden">
        <div
          ref={(el) => {
            if (el) ripplesRef.current[0] = el;
          }}
          className="hidden absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] rounded-[70px]"
          style={{ backgroundColor: rippleColor1 }}
        />
        <div
          ref={(el) => {
            if (el) ripplesRef.current[1] = el;
          }}
          className="hidden absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] rounded-[70px]"
          style={{ backgroundColor: rippleColor2 }}
        />
      </div>
      <div
        ref={titleRef}
        className="relative z-10 flex items-center justify-center h-full"
      >
        {children}
        {showDownloadIcon && (
          <div className="icon flex items-center justify-center ml-2 h-8">
            <span
              ref={iconRef}
              className="rounded-full flex items-center justify-center overflow-hidden"
              style={{
                backgroundColor: iconBgColor,
                width: "0rem",
                height: "0rem",
                padding: "0rem",
                transform: "rotate(-180deg)",
                mixBlendMode: "normal",
              }}
            >
              <Download size={12} className="text-white shrink-0" />
            </span>
          </div>
        )}
      </div>
    </button>
  );
}

export default RippleButton;
