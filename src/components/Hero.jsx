import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import Particles from "./Particles";
function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white pt-32 pb-20"
    > 
      {/* Background Blur */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[95px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[95px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6"
          >
            🚀 New Generation SaaS Platform
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Build Faster.
            <br />
            Scale Smarter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="text-slate-300 mt-8 text-lg leading-8 max-w-xl"
          >
            The all-in-one SaaS platform that helps startups manage
            customers, automate workflows, analyze data, and grow faster.
          </motion.p>

         <motion.dev className="flex gap-2">

            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl font-semibold transition">
              Get Started
              <FiArrowRight />
            </button>

            <button className="flex items-center gap-2 border border-slate-600 hover:bg-white hover:text-black px-7 py-4 rounded-xl transition">
              <FiPlay />
              Watch Demo
            </button>

          </motion.dev>

        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity:0,x:100 }}
          animate={{ opacity:1,x:0 }}
          transition={{ duration:1 }}
          className="relative"
        >

          {/* Dashboard Card */}

          <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">

            <div className="flex justify-between items-center">

              <h2 className="font-bold text-xl">
                Dashboard
              </h2>

              <span className="bg-green-500 px-3 py-1 rounded-full text-xs">
                Live
              </span>

            </div>

            <div className="mt-8 space-y-5">

              <div className="bg-slate-800 rounded-xl p-5">

                <p className="text-slate-400 text-sm">
                  Revenue
                </p>

                <h1 className="text-3xl font-bold">
                  $98,430
                </h1>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-slate-800 rounded-xl p-5">

                  <p className="text-slate-400 text-sm">
                    Users
                  </p>

                  <h2 className="text-2xl font-bold">
                    12K
                  </h2>

                </div>

                <div className="bg-slate-800 rounded-xl p-5">

                  <p className="text-slate-400 text-sm">
                    Growth
                  </p>

                  <h2 className="text-2xl font-bold">
                    +28%
                  </h2>

                </div>

              </div>

            </div>

          </div>

          {/* Floating Card */}

          <motion.div
            animate={{ y:[0,-15,0] }}
            transition={{
              duration:3,
              repeat:Infinity
            }}
            className="absolute -left-10 top-12 bg-white text-black rounded-2xl shadow-xl p-5"
          >

            <h3 className="font-bold">
              New Customer
            </h3>

            <p className="text-sm text-gray-500">
              +124 Today
            </p>

          </motion.div>

          <motion.div
            animate={{ y:[0,15,0] }}
            transition={{
              duration:4,
              repeat:Infinity
            }}
            className="absolute -right-8 bottom-10 bg-blue-600 rounded-2xl p-5 shadow-xl"
          >

            <h3 className="font-bold">
              AI Insights
            </h3>

            <p className="text-sm">
              Productivity +46%
            </p>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;