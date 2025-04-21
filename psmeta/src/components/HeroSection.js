import { motion, useMotionValue, useTransform, animate, useScroll } from "framer-motion";
import { useEffect } from "react";
import heroImg from "../assets/hero-image.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const AnimatedCounter = ({ target }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [target]);

  return <motion.span>{rounded}</motion.span>;
};

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-gray-100">
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 mb-10 md:mb-0"
        >

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Digital Marketing <span className="text-primary">Experts</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We help businesses grow and succeed online.
          </p>
          <button  onClick={() => navigate("/services")} className="bg-primary text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-all shadow-lg">
            Get Started
          </button>
        </motion.div>

        {/* Right Content */}
        <motion.div
          style={{ y }}
          className="flex-1 relative flex justify-center items-center"
        >
          {/* Outer Dotted Circle */}
          <div className="relative w-[25rem] h-[25rem] rounded-full border-[3px] border-dashed border-primary flex items-center justify-center">
            {/* Inner Image */}
            <img
              src={heroImg}
              alt="Hero"
              className="w-[18rem] h-[18rem] object-cover rounded-full shadow-lg"
            />

            {/* Icons on dotted border */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <FaFacebookF className="text-primary text-4xl bg-white p-3 rounded-full shadow-lg hover:scale-110 transition" />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <FaInstagram className="text-pink-500 text-4xl bg-white p-3 rounded-full shadow-lg hover:scale-110 transition" />
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <FaTwitter className="text-blue-400 text-4xl bg-white p-3 rounded-full shadow-lg hover:scale-110 transition" />
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
              <FaLinkedinIn className="text-blue-700 text-4xl bg-white p-3 rounded-full shadow-lg hover:scale-110 transition" />
            </div>

            {/* Growth Box */}
            <div className="absolute -top-8 -left-8 bg-white px-4 py-2 rounded-lg shadow text-center">
              <p className="text-sm text-gray-500">Growth</p>
              <h3 className="text-xl font-bold text-primary">
                <AnimatedCounter target={85} />%
              </h3>
            </div>

            {/* Sales Box */}
            <div className="absolute -bottom-8 -right-8 bg-white px-4 py-2 rounded-lg shadow text-center">
              <p className="text-sm text-gray-500">Sales</p>
              <h3 className="text-xl font-bold text-primary">
                <AnimatedCounter target={120} />+
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
