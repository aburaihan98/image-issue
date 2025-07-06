import { motion } from "framer-motion";
import React from "react";

function FramerMotion() {
  return (
    <motion.div
      className="
        relative flex justify-center items-center overflow-hidden
        w-[400px] h-[400px] rounded-2xl
        bg-gradient-to-br from-gray-200 to-orange-500
        dark:from-gray-700 dark:to-orange-700 /* Optional: dark mode support */
      "
    >
      {/* Ripples */}
      {[0, 0.4, 0.8].map((delay, index) => (
        <motion.div
          key={index}
          className="
            absolute rounded-full border-2 border-white border-opacity-40
            w-[200px] h-[200px] box-border
          "
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: [0, 1.2, 1.5], opacity: [1, 0.5, 0] }}
          transition={{
            duration: 2.5,
            ease: "easeOut",
            repeat: Infinity,
            delay: delay,
            repeatDelay: 0.5,
          }}
        />
      ))}

      {/* Play Button Outer Circle (White Ring) */}
      <motion.div
        className="
          relative z-10 flex justify-center items-center
          w-[150px] h-[150px] rounded-full
          border-[5px] border-white border-opacity-80
          bg-transparent
        "
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Play Button Inner Circle (Dark Grey) */}
        <motion.div
          className="
            flex justify-center items-center
            w-[100px] h-[100px] rounded-full
            bg-gray-800
            dark:bg-gray-700 /* Optional: dark mode support */
          "
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Play Icon (SVG) */}
          <motion.svg
            className="w-[30px] h-[30px] fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default FramerMotion;
