import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-orange-500 to-yellow-400 text-white text-center overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white bg-opacity-10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-white bg-opacity-10 rounded-full blur-2xl animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Ready to <span className="underline decoration-white/70">Grow</span> Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-8 font-light text-white/90">
            Let's create something <span className="font-semibold">amazing</span> together.
          </p>
          
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-white text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all"
            >
              <FaRocket className="text-xl" />
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
