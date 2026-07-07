import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiSend,
} from "react-icons/fi";

function Footer() {
const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");
const [error, setError] = useState("");
const handleSubscribe = () => {

  setError("");
  setMessage("");

  if (!email.trim()) {
    setError("Please enter your email.");
    return;
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    setError("Please enter a valid email.");
    return;
  }

  setLoading(true);

  setTimeout(() => {

    const oldEmails =
      JSON.parse(localStorage.getItem("newsletter")) || [];

    oldEmails.push(email);

    localStorage.setItem(
      "newsletter",
      JSON.stringify(oldEmails)
    );

    setLoading(false);
    setMessage("🎉 Successfully subscribed!");
    setEmail("");

  }, 1500);

};
  const socialLinks = [
    {
      icon: FiGithub,
      url: "https://github.com/Khalid12-dev",
    },
    {
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/khalid-hussain-935776408/",
    },
    {
      icon: FiTwitter,
      url: "",
    },
    {
      icon: FiFacebook,
      url: "",
    },
  ];

  const quickLinks = [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "Features",
      url: "#features",
    },
    {
      name: "Pricing",
      url: "#pricing",
    },
    {
      name: "Testimonials",
      url: "#testimonials",
    },
    {
      name: "FAQ",
      url: "#faq",
    },
    {
      name: "Blog",
      url: "#blog",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];

  const resources = [
    {
      name: "Documentation",
      url: "",
    },
    {
      name: "Blog",
      url: "",
    },
    {
      name: "Support",
      url: "",
    },
    {
      name: "Privacy Policy",
      url: "",
    },
    {
      name: "Terms & Conditions",
      url: "",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white pt-24">

      {/* Background */}

      <div className="absolute -top-24 left-0 w-80 h-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SaaSify
            </h2>

            <p className="mt-6 text-slate-400 leading-8">
              Build modern SaaS products with beautiful UI,
              powerful analytics and smooth user experience.
            </p>

            <div className="flex gap-4 mt-8">

              {socialLinks.map((social, index) => {

                const Icon = social.icon;

                return (

                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -6,
                      scale: 1.1,
                    }}
                    className="w-11 h-11 rounded-full bg-white/10 flex justify-center items-center hover:bg-blue-600 transition duration-300"
                  >
                    <Icon size={20} />
                  </motion.a>

                );

              })}

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((link) => (

                <li key={link.name}>

                  <a
                    href={link.url}
                    className="text-slate-400 hover:text-cyan-400 transition duration-300"
                  >
                    {link.name}
                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* Resources */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-bold mb-6">
              Resources
            </h3>

            <ul className="space-y-4">

              {resources.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition duration-300"
                  >
                    {item.name}
                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* Newsletter */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .3 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-bold mb-6">
              Newsletter
            </h3>

            <p className="text-slate-400 mb-6">
              Subscribe to receive our latest updates and offers.
            </p>

            <form className="flex rounded-xl overflow-hidden border border-white/10">

           <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full bg-slate-900 px-4 py-4 outline-none text-white"
/>

             <button
  onClick={handleSubscribe}
  disabled={loading}
  className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 flex items-center justify-center"
>
  {loading ? "..." : <FiSend />}
</button>

            </form>

          </motion.div>

        </div>
{error && (
  <p className="text-red-400 text-sm mt-3">
    {error}
  </p>
)}

{message && (
  <p className="text-green-400 text-sm mt-3">
    {message}
  </p>
)}
        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-400 text-center">
            © {new Date().getFullYear()} SaaSify. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm text-center">
            Designed & Developed with ❤️ using React, Tailwind CSS & Framer Motion.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;