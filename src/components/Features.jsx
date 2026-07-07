import { motion } from "framer-motion";
import {
  FiShield,
  FiBarChart2,
  FiUsers,
  FiZap,
  FiCloud,
  FiCpu,
} from "react-icons/fi";

const features = [
  {
    icon: <FiBarChart2 size={35} />,
    title: "Advanced Analytics",
    description:
      "Track your business performance with real-time analytics and detailed reports.",
  },
  {
    icon: <FiUsers size={35} />,
    title: "Team Collaboration",
    description:
      "Collaborate with your team members efficiently from one dashboard.",
  },
  {
    icon: <FiShield size={35} />,
    title: "Enterprise Security",
    description:
      "Industry-standard encryption keeps your business data safe and secure.",
  },
  {
    icon: <FiZap size={35} />,
    title: "Automation",
    description:
      "Automate repetitive workflows and save valuable time every day.",
  },
  {
    icon: <FiCloud size={35} />,
    title: "Cloud Storage",
    description:
      "Access your data securely from anywhere in the world.",
  },
  {
    icon: <FiCpu size={35} />,
    title: "AI Assistant",
    description:
      "AI-powered insights help you make smarter business decisions.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-slate-100 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Product Features
          </span>

          <h2 className="text-5xl font-bold mt-4 dark:text-white">
            Everything You Need
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Powerful tools designed to help startups and businesses grow faster,
            automate workflows, and improve customer experience.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold dark:text-white">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-4 leading-7">
                {item.description}
              </p>

              <button className="mt-8 text-blue-600 font-semibold hover:underline">
                Learn More →
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;