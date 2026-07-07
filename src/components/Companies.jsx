import { motion } from "framer-motion";

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  },
  {
    name: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
  },
];

function Companies() {
  return (
    <section className="py-16 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-12"
        >
          Trusted by Leading Companies
        </motion.h3>

        <div className="overflow-hidden">

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-20 w-max"
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[180px]"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 grayscale hover:grayscale-0 transition duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Companies;