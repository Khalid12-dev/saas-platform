import { motion } from "framer-motion";
import { FiArrowRight, FiClock, FiUser } from "react-icons/fi";

const blogs = [
  {
    title: "How AI is Transforming SaaS Products",
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    author: "Khalid Hussain",
    date: "July 2026",
    read: "5 min read",
  },
  {
    title: "Top React Best Practices in 2026",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    author: "Khalid Hussain",
    date: "July 2026",
    read: "7 min read",
  },
  {
    title: "Why Tailwind CSS is Dominating Modern UI",
    category: "Tailwind",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    author: "Khalid Hussain",
    date: "July 2026",
    read: "6 min read",
  },
];

function Blog() {
  return (
    <section
      id="blog"
      className="py-24 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-widest text-blue-600 font-semibold">
            Blog
          </span>

          <h2 className="text-5xl font-bold mt-4 dark:text-white">
            Latest Articles
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn modern web development, SaaS strategies, AI, and frontend
            best practices.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              whileHover={{
                y: -12,
              }}
              className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800"
            >

              <div className="overflow-hidden">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-7">

                <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                  {blog.category}
                </span>

                <h3 className="text-2xl font-bold mt-5 dark:text-white">
                  {blog.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-gray-500 dark:text-gray-400 text-sm mt-5">

                  <div className="flex items-center gap-2">
                    <FiUser />
                    {blog.author}
                  </div>

                  <div className="flex items-center gap-2">
                    <FiClock />
                    {blog.read}
                  </div>

                </div>

                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  {blog.date}
                </p>

                <button className="mt-7 flex items-center gap-2 font-semibold text-blue-600 hover:gap-4 transition-all">
                  Read More
                  <FiArrowRight />
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Blog;