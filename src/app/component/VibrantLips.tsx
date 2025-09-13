"use client";
import React, { useEffect, useRef, useState } from "react";
import { Montez } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const montez = Montez({ subsets: ["latin"], weight: ["400"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function VibrantLips() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Calculate progress based on how much of the section has been scrolled through
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      // Start animation when section enters viewport, end when it leaves
      if (sectionBottom <= 0) {
        setProgress(1); // Fully scrolled past
      } else if (sectionTop >= windowHeight) {
        setProgress(0); // Not yet in view
      } else {
        // Calculate progress based on scroll position within the section
        const totalScrollDistance = sectionHeight + windowHeight;
        const scrolled = windowHeight - sectionTop;
        const calculatedProgress = Math.max(
          0,
          Math.min(1, scrolled / totalScrollDistance)
        );
        setProgress(calculatedProgress);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Transform values for smooth horizontal movement
  const translateX = progress * -150; // Move 150px to the left
  const scale = 1 + progress * 0.05; // Slight zoom effect

  return (
    <section ref={sectionRef} className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[117vh] pt-20 md:pt-30">
        {/* Left panel */}
        <div
          ref={leftRef}
          className={`bg-black text-white flex flex-col justify-center gap-4 px-14 md:px-36 py-12 md:py-24 transition-all duration-700 ${
            leftInView
              ? "animate-slideUp opacity-100"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="font-extralight tracking-wide uppercase text-sm">
            HOT &amp; SPICY
          </div>
          <div
            className={`${playfair.className} text-3xl md:text-6xl font-extrabold leading-snug`}
          >
            Most{" "}
            <span className={`${montez.className} text-4xl md:text-7xl m-2`}>
              Vibrant
            </span>
            <br /> Lips in Town
          </div>
          <div className="text-gray-300 max-w-sm md:max-w-md text-sm md:text-base">
            I&apos;m a paragraph. Click here to add your own text and edit me.
            I&apos;m a great place for you to tell a story and let your users
            know a little more about you.
          </div>
          <button className="bg-white text-black px-4 py-2 md:px-6 md:py-3 mt-4 border hover:bg-black hover:text-white hover:border-white transition text-sm md:text-base">
            <Link href="/Lips">Shop Lips</Link>
          </button>
        </div>

        {/* Right panel: sticky container with moving content */}
        <div className="relative hidden md:block">
          <div className="absolute top-10 md:top-24 -left-14 right-0 h-[30vh] md:h-[77vh] overflow-hidden">
            <div
              className="w-full h-full transition-transform duration-400 ease-out"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
              }}
            >
              <Image
                src="/lips.jpg"
                alt="Lipsticks"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VibrantLips;
