import { motion } from "framer-motion";

function Particles() {
  const particles = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((_, index) => {

        const size = Math.random() * 12 + 6;

        return (

          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-500/30 blur-sm"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, 30, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />

        );

      })}

    </div>
  );
}

export default Particles;