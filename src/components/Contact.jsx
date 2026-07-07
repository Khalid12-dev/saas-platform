import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    setSuccess(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-400 uppercase tracking-widest font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Let's Build Something Amazing
          </h2>

          <p className="text-slate-300 mt-6 leading-8">
            We'd love to hear from you.
            Send us your ideas or project requirements,
            and we'll get back to you as soon as possible.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <FiMail />
              </div>

              <div>
                <p className="text-slate-400">Email</p>
                <h4>maharkhalid269kh@gmail.com</h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-600 flex items-center justify-center">
                <FiPhone />
              </div>

              <div>
                <p className="text-slate-400">Phone</p>
                <h4>+92 301 1277269</h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center">
                <FiMapPin />
              </div>

              <div>
                <p className="text-slate-400">Location</p>
                <h4>Pakistan</h4>
              </div>
            </div>

          </div>

          <div className="flex gap-5 mt-10">

            <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-600 transition">
              <FiGithub className="mx-auto mt-3" />
            </button>

            <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-600 transition">
              <FiLinkedin className="mx-auto mt-3" />
            </button>

            <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-600 transition">
              <FiTwitter className="mx-auto mt-3" />
            </button>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-5 p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-blue-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-5 p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-blue-500 outline-none"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            className="w-full mb-6 p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-blue-500 outline-none resize-none"
          />

          <button
            className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Send Message
            <FiSend />
          </button>

          {success && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 mt-5 text-center"
            >
              ✅ Message sent successfully!
            </motion.p>
          )}

        </motion.form>

      </div>
    </section>
  );
}

export default Contact;