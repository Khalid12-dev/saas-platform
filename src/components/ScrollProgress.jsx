import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent =
        (window.scrollY / totalHeight) * 100;

      setScroll(scrollPercent);
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Progress Bar */}

      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 z-[9999]"
        style={{
          width: `${scroll}%`,
        }}
      />

      {/* Back To Top */}

      {showButton && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 8,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={scrollTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-2xl z-50 flex justify-center items-center"
        >
          <FiArrowUp size={24} />
        </motion.button>
      )}
    </>
  );
}

export default ScrollProgress;