import aboutImg from "../assets/about-image.jpg"; 
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AboutPreview = () => {

  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="flex-1 mb-10 md:mb-0"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={aboutImg} alt="About" className="rounded-lg shadow-lg" />
        </motion.div>

        <motion.div
          className="flex-1 md:pl-12"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Our Agency</h2>
          <p className="text-gray-600 mb-4">
            We're a full-service digital marketing agency focused on driving real results.
          </p>
          <p className="text-gray-600 mb-6">
            Our strategies are built to connect your brand with the right audience at the right time.
          </p>
          <button  onClick={() => navigate("/about")} className="bg-primary text-white px-6 py-3 rounded hover:bg-orange-600 transition-all">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
