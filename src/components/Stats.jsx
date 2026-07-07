import { motion } from "framer-motion";
import {
  FiUsers,
  FiGlobe,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";

const stats = [
  {
    icon: <FiUsers size={36} />,
    value: "25K+",
    title: "Active Users",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: <FiGlobe size={36} />,
    value: "150+",
    title: "Countries",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: <FiTrendingUp size={36} />,
    value: "99.9%",
    title: "Uptime",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: <FiAward size={36} />,
    value: "500+",
    title: "Enterprise Clients",
    color: "from-orange-500 to-red-500",
  },
];

function Stats() {
  return (
    <section
      id="stats"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Blur */}

      <div className="absolute -top-32 left-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            Our Growth
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Trusted by Thousands
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            Our numbers speak for themselves. We help businesses grow
            faster with powerful SaaS solutions.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center shadow-xl"
            >

              <div
                className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}
              >
                {item.icon}
              </div>

              <h3 className="text-5xl font-black mt-6">
                {item.value}
              </h3>

              <p className="text-slate-400 mt-3">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;