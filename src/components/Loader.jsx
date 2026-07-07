import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[9999]">

      {/* Background Glow */}

      <div className="absolute w-80 h-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute w-64 h-64 rounded-full bg-cyan-500/20 blur-[100px]" />

      <div className="relative flex flex-col items-center">

        {/* Logo */}

        <motion.div
          initial={{
            scale: 0,
            rotate: -180,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="w-24 h-24 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center shadow-2xl"
        >
          <h1 className="text-4xl font-black text-white">
            S
          </h1>
        </motion.div>

        {/* Title */}

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .6,
          }}
          className="text-3xl font-bold mt-8 text-white"
        >
          SaaSify
        </motion.h2>

        {/* Loading */}

        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="text-slate-400 mt-2"
        >
          Loading Experience...
        </motion.p>

        {/* Progress Bar */}

        <div className="mt-8 w-72 h-2 bg-slate-800 rounded-full overflow-hidden">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 2.5,
            }}
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
          />

        </div>

      </div>

    </div>
  );
}

export default Loader;