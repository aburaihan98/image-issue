import { motion } from "framer-motion";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// Corrected: Define MotionPlayArrowIcon OUTSIDE the component
const MotionPlayArrowIcon = motion(PlayArrowIcon);

function FramerMotion() {
  return (
    <motion.div
      className="
        relative flex justify-center items-center overflow-hidden
        w-[400px] h-[400px] rounded-2xl
        bg-gradient-to-br from-gray-200 to-orange-500
        dark:from-gray-700 dark:to-orange-700
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

      {/* Ripples2 */}
      {[0, 0.4, 0.8].map((delay, index) => (
        <motion.div
          key={index}
          className="
          absolute rounded-full border-2 border-white border-opacity-40
          w-[150px] h-[150px] box-border
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    "
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: [1, 1.4, 1.8], opacity: [1, 0.5, 0] }}
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
            dark:bg-gray-700
          "
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Material-UI Play Icon - now correctly defined in scope */}
          <MotionPlayArrowIcon className="w-[30px] h-[30px] text-white" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default FramerMotion;
