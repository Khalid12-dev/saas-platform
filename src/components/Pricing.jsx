import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const pricingPlans = [
  {
    title: "Starter",
    monthly: 19,
    yearly: 190,
    popular: false,
    features: [
      "5 Projects",
      "5 GB Storage",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    title: "Professional",
    monthly: 49,
    yearly: 490,
    popular: true,
    features: [
      "Unlimited Projects",
      "50 GB Storage",
      "Advanced Analytics",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    monthly: 99,
    yearly: 990,
    popular: false,
    features: [
      "Unlimited Everything",
      "Cloud Backup",
      "AI Automation",
      "24/7 Support",
    ],
  },
];

function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="py-24 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-blue-600 uppercase font-semibold tracking-widest">
            Pricing
          </span>

          <h2 className="text-5xl font-bold mt-4 dark:text-white">
            Choose Your Plan
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Flexible pricing plans designed for startups,
            businesses and enterprises.
          </p>

          {/* Toggle */}

          <div className="mt-10 flex justify-center items-center gap-5">

            <span className={!yearly ? "font-bold " : ""}>
              Monthly
            </span>

            <button
              onClick={() => setYearly(!yearly)}
              className="relative w-16 h-8 bg-blue-600 rounded-full"
            >

              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all duration-300 ${
                  yearly ? "left-9" : "left-1"
                }`}
              ></div>

            </button>

            <span className={yearly ? "font-bold " : ""}>
              Yearly
            </span>

          </div>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {pricingPlans.map((plan, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0,y:50 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{
                duration:.5,
                delay:index*.2,
              }}
              viewport={{ once:true }}
              whileHover={{
                scale:1.04,
              }}
              className={`relative rounded-3xl p-8 border transition-all shadow-xl
              ${
                plan.popular
                  ? "bg-blue-600 text-white border-blue-600 scale-105"
                  : "bg-white dark:bg-slate-900 dark:text-white"
              }`}
            >

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold">
                {plan.title}
              </h3>

              <h1 className="text-6xl font-bold mt-8">
                $
                {yearly ? plan.yearly : plan.monthly}
              </h1>

              <p className="mt-2 opacity-80">
                {yearly ? "/year" : "/month"}
              </p>

              <div className="mt-10 space-y-4">

                {plan.features.map((feature, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <FiCheck />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              <button
                className={`mt-10 w-full py-4 rounded-xl font-semibold transition
                ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;