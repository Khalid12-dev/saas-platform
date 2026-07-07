import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const faqData = [
  {
    question: "What is this SaaS platform?",
    answer:
      "Our SaaS platform helps businesses automate workflows, manage customers, and analyze business performance from one dashboard.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes. Every new user receives a 14-day free trial with full access to all premium features.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. There are no long-term contracts. You can cancel or upgrade your plan whenever you want.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use enterprise-grade encryption, secure cloud infrastructure, and regular backups to protect your data.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Yes. Our support team is available 24/7 through email and live chat.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = faqData.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="faq"
      className="py-24 bg-slate-100 dark:bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            FAQ
          </span>

          <h2 className="text-5xl font-bold mt-4 dark:text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-300">
            Find answers to the most common questions.
          </p>

        </motion.div>

        {/* Search */}

        <div className="relative mt-12">

          <FiSearch
            className="absolute left-5 top-4 text-gray-500"
            size={20}
          />

          <input
            type="text"
            placeholder="Search FAQ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-14 pr-5 py-4 rounded-xl border border-gray-300 dark:bg-slate-800 dark:border-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

        </div>

        {/* Accordion */}

        <div className="mt-10 space-y-5">

          {filtered.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center px-8 py-6"
              >

                <h3 className="text-lg md:text-xl font-semibold text-left dark:text-white">
                  {item.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: active === index ? 180 : 0,
                  }}
                >
                  <FiChevronDown size={24} />
                </motion.div>

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: .3,
                    }}
                  >

                    <div className="px-8 pb-8 text-gray-600 dark:text-gray-300 leading-7">
                      {item.answer}
                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

          {filtered.length === 0 && (

            <div className="text-center text-gray-500 py-10">
              No FAQ found.
            </div>

          )}

        </div>

      </div>
    </section>
  );
}

export default FAQ;