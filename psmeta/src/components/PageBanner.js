import { motion } from "framer-motion";

const PageBanner = ({ title }) => {
  return (
    <div className="relative bg-gradient-to-r from-orange-100 via-white to-blue-100 py-20 text-center overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full blur-2xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-30"></div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold text-gray-800"
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default PageBanner;
