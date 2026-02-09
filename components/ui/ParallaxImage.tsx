"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  overlayClassName?: string;
  speed?: number;
}

export function ParallaxImage({
  src,
  alt,
  priority = false,
  className = "object-cover",
  overlayClassName = "bg-black/30",
  speed = 0.6,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);
  const y = useSpring(rawY, { stiffness: 80, damping: 30, mass: 0.5 });

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute -inset-[15%] lg:-inset-[40%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className={className}
          priority={priority}
        />
      </motion.div>
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
