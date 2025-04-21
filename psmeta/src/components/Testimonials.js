import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

// Dummy data with image, rating, and stat badge
const testimonials = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "P S Meta helped us grow online significantly. Highly recommended!",
    rating: 5,
    stat: "92% Satisfaction",
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Very professional team and great results with SEO!",
    rating: 4,
    stat: "85% SEO Boost",
  },
  {
    name: "Alex Johnson",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "Absolutely fantastic experience with the team at P S Meta.",
    rating: 5,
    stat: "98% Client Retention",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          What Our Clients Say
        </motion.h2>

        {/* Static Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl relative"
            >
              {/* Stat badge */}
              <span className="absolute top-4 right-4 text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold shadow">
                {t.stat}
              </span>

              {/* Client Image */}
              <div className="w-32 h-32 mx-auto mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover rounded-full border-4 border-primary shadow-md"
                />
              </div>

              {/* Text */}
              <p className="text-gray-600 italic mb-4 leading-relaxed">"{t.text}"</p>

              {/* Rating */}
              <div className="flex justify-center mb-2">
                {[...Array(t.rating)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400" />
                ))}
              </div>

              {/* Client Name */}
              <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
