import React from "react";
import { motion } from "framer-motion";

const bubbles = Array.from({ length: 10 });

export default function About() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-sky-100">
      {bubbles.map((_, index) => {
        const randomX = Math.random() * 100; // percentage
        const delay = Math.random() * 2;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 0, scale: 0.5 }}
            animate={{ opacity: 1, y: -400, scale: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              delay: delay,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 bg-blue-300 rounded-full"
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              left: `${randomX}%`,
            }}
          />
        );
      })}
    </div>
  );
}
