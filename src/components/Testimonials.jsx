import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    image: "https://i.pravatar.cc/150?img=32 " ,
    review:
      "This SaaS platform completely transformed our workflow. It's fast, modern, and extremely easy to use.",
  },
  {
    name: "Michael Brown",
    role: "Product Manager",
    image: "https://i.pravatar.cc/150?img=14",
    review:
      "The analytics dashboard and automation tools saved our team hundreds of hours every month.",
  },
  {
    name: "Emma Wilson",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/150?img=45",
    review:
      "Amazing UI, outstanding performance, and excellent customer support. Highly recommended.",
  },
  {
    name: "David Lee",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/150?img=51",
    review:
      "Our conversion rate increased significantly after switching to this platform.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 uppercase tracking-widest font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Loved by Thousands
          </h2>

          <p className="mt-5 text-slate-300 max-w-2xl mx-auto">
            See what our customers say about our SaaS platform.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 h-full"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover"
                  loading="lazy"
                />

                <div className="flex gap-1 text-yellow-400 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} fill="currentColor" />
                  ))}
                </div>

                <p className="text-slate-300 mt-6 leading-7">
                  "{item.review}"
                </p>

                <h3 className="text-xl font-bold mt-8">
                  {item.name}
                </h3>

                <span className="text-blue-400">
                  {item.role}
                </span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Testimonials;