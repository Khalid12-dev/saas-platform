import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

const comparisonData = [
  {
    title: "Analytics & Reports",
    open: true,
    features: [
      { name: "Real-Time Dashboard", starter: true, pro: true, enterprise: true },
      { name: "Advanced Reports", starter: false, pro: true, enterprise: true },
      { name: "Custom Reports", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    title: "Security",
    open: false,
    features: [
      { name: "SSL Encryption", starter: true, pro: true, enterprise: true },
      { name: "2FA Authentication", starter: false, pro: true, enterprise: true },
      { name: "Enterprise Security", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    title: "Support",
    open: false,
    features: [
      { name: "Email Support", starter: true, pro: true, enterprise: true },
      { name: "Priority Support", starter: false, pro: true, enterprise: true },
      { name: "Dedicated Manager", starter: false, pro: false, enterprise: true },
    ],
  },
];

function Comparison() {
  const [sections, setSections] = useState(comparisonData);

  const toggleSection = (index) => {
    setSections(
      sections.map((item, i) =>
        i === index ? { ...item, open: !item.open } : item
      )
    );
  };

  return (
    <section
      id="comparison"
      className="py-24 bg-slate-100 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 uppercase font-semibold tracking-widest">
            Comparison
          </span>

          <h2 className="text-5xl font-bold mt-4 dark:text-white">
            Compare Plans
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300">
            See which plan is perfect for your business.
          </p>
        </motion.div>

        {sections.map((section, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            className="mb-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg overflow-hidden"
          >

            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center px-8 py-6"
            >
              <h3 className="text-2xl font-bold dark:text-white">
                {section.title}
              </h3>

              {section.open ? (
                <FiChevronUp size={24} />
              ) : (
                <FiChevronDown size={24} />
              )}
            </button>

            <AnimatePresence>

              {section.open && (

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: .4 }}
                >

                  <div className="overflow-x-auto">

                    <table className="w-full">

                      <thead className="bg-blue-600 text-white">

                        <tr>

                          <th className="p-4 text-left">
                            Feature
                          </th>

                          <th>
                            Starter
                          </th>

                          <th>
                            Professional
                          </th>

                          <th>
                            Enterprise
                          </th>

                        </tr>

                      </thead>

                      <tbody>

                        {section.features.map((feature, i) => (

                          <tr
                            key={i}
                            className="border-b dark:border-slate-700"
                          >

                            <td className="p-5 font-medium dark:text-white">
                              {feature.name}
                            </td>

                            <td className="text-center">
                              {feature.starter ? (
                                <FiCheck className="mx-auto text-green-500" />
                              ) : (
                                <FiX className="mx-auto text-red-500" />
                              )}
                            </td>

                            <td className="text-center">
                              {feature.pro ? (
                                <FiCheck className="mx-auto text-green-500" />
                              ) : (
                                <FiX className="mx-auto text-red-500" />
                              )}
                            </td>

                            <td className="text-center">
                              {feature.enterprise ? (
                                <FiCheck className="mx-auto text-green-500" />
                              ) : (
                                <FiX className="mx-auto text-red-500" />
                              )}
                            </td>

                          </tr>

                        ))}

                      </tbody>

                    </table>

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Comparison;