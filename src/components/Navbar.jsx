import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiMoon,
  FiSun,
} from "react-icons/fi";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Pricing", id: "pricing" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  // Load Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  // Theme Toggle
  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  // Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;

      navLinks.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition <
            section.offsetTop + section.offsetHeight
        ) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-black/5 dark:shadow-black/40 border-b border-white/10 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          SaaSify
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm lg:text-base
                ${
                  active === item.id
                    ? "text-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/20"
                    : "text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-500/5 dark:hover:bg-cyan-500/10"
                }`}
            >
              {item.name}
              {active === item.id && (
                <motion.div
                  layoutId="activeLink"
                  className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-200/70 dark:bg-slate-800/70 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/20 border border-white/20 dark:border-slate-700/50"
          >
            {dark ? (
              <FiSun className="text-yellow-400 text-lg sm:text-xl" />
            ) : (
              <FiMoon className="text-slate-700 text-lg sm:text-xl dark:text-white" />
            )}
          </button>

          {/* CTA Button */}
          <button
            className="hidden md:block px-5 lg:px-7 py-2.5 lg:py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm lg:text-base hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Get Started
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative w-10 h-10 rounded-2xl bg-slate-200/70 dark:bg-slate-800/70 backdrop-blur-sm flex items-center justify-center text-2xl sm:text-3xl text-slate-900 dark:text-white hover:scale-110 transition-all duration-300 border border-white/20 dark:border-slate-700/50"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50 shadow-2xl"
          >
            <div className="flex flex-col p-6 sm:p-8 gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 text-center
                    ${
                      active === item.id
                        ? "text-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/20"
                        : "text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-500/5 dark:hover:bg-cyan-500/10"
                    }`}
                >
                  {item.name}
                </a>
              ))}

              <button
                onClick={() => setOpen(false)}
                className="mt-4 w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}

export default Navbar;