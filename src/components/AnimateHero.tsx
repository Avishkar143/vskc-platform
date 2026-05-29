// src/components/AnimateHero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroChappalImage = {
  src: string;
  alt: string;
};

type AnimatedHeroProps = {
  chappalImages?: HeroChappalImage[];
};

export default function AnimatedHero({ chappalImages = [] }: AnimatedHeroProps) {
  const baseImages =
    chappalImages.length > 0
      ? chappalImages
      : Array.from({ length: 6 }, () => ({
          src: "/hero-chappal.png",
          alt: "VSKC Kolhapuri Chappal",
        }));

  const marqueeImages = [...baseImages, ...baseImages, ...baseImages];

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-vskc-white text-vskc-espresso">
      {/* Industrial Dot-Matrix Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.08)_1px,_transparent_1px)] bg-[size:24px_24px] opacity-[0.4]" />

      <div className="z-10 mt-16 flex w-full flex-col items-center px-4 text-center sm:mt-20">
        {/* Shutter Reveal Text */}
        <motion.h1
          initial={{ y: 50, opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          animate={{ y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.1,
          }}
          className="mb-6 font-serif text-5xl tracking-tight text-vskc-espresso sm:text-6xl md:text-8xl"
        >
          PURE HERITAGE.
        </motion.h1>

        {/* Scrolling chappal images instead of static hero image */}
        <motion.div
          initial={{
            scale: 0.92,
            opacity: 0,
            filter: "blur(10px)",
            clipPath: "inset(100% 0 0 0)",
          }}
          animate={{
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            clipPath: "inset(0% 0 0 0)",
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.3,
          }}
          className="relative my-8 w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-vskc-white via-vskc-white/80 to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-vskc-white via-vskc-white/80 to-transparent sm:w-32" />
          <motion.div
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{ ease: "linear", duration: 38, repeat: Infinity }}
            className="flex w-max items-center gap-10 sm:gap-12"
          >
            {marqueeImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                initial={{ opacity: 0.55, scale: 0.94 }}
                animate={{ opacity: [0.55, 1, 1, 0.55], scale: [0.94, 1, 1, 0.94] }}
                transition={{ duration: 7, repeat: Infinity, delay: (index % 6) * 0.4 }}
                className="relative h-[230px] w-[270px] shrink-0 sm:h-[320px] sm:w-[380px] md:h-[380px] md:w-[460px]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 270px, (max-width: 768px) 380px, 460px"
                  priority={index < 3}
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom text marquee stays same */}
      <div className="absolute bottom-6 z-20 w-full overflow-hidden border-y border-vskc-sand bg-vskc-white/80 py-3 backdrop-blur-md [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:bottom-8 sm:py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 22, repeat: Infinity }}
          className="flex whitespace-nowrap text-xs font-bold uppercase tracking-[0.3em] text-vskc-tan md:text-sm"
        >
          <div className="flex gap-8">
            <span>AUTHENTIC CRAFTSMANSHIP</span>
            <span>•</span>
            <span>THE SIGNATURE SERIES</span>
            <span>•</span>
            <span>KOLHAPUR ORIGINALS</span>
            <span>•</span>
            <span>AUTHENTIC CRAFTSMANSHIP</span>
            <span>•</span>
            <span>THE SIGNATURE SERIES</span>
            <span>•</span>
            <span>KOLHAPUR ORIGINALS</span>
            <span>•</span>
          </div>

          <div className="flex gap-8 pl-8">
            <span>AUTHENTIC CRAFTSMANSHIP</span>
            <span>•</span>
            <span>THE SIGNATURE SERIES</span>
            <span>•</span>
            <span>KOLHAPUR ORIGINALS</span>
            <span>•</span>
            <span>AUTHENTIC CRAFTSMANSHIP</span>
            <span>•</span>
            <span>THE SIGNATURE SERIES</span>
            <span>•</span>
            <span>KOLHAPUR ORIGINALS</span>
            <span>•</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}