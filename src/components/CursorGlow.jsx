import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CursorGlow() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 120,
        y: position.y - 120,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
      }}
      className="pointer-events-none fixed top-0 left-0 w-60 h-60 rounded-full bg-cyan-500/20 blur-3xl z-0"
    />
  );
}

export default CursorGlow;