import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import portfolio1 from "../assets/portfolio1.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import portfolio3 from "../assets/portfolio3.jpg";
import { motion } from "framer-motion";

const PortfolioPreview = () => {
  const items = [
    {
      img: portfolio1,
      title: "Creative Branding",
      desc: "Designed a full branding kit for a startup including logo, palette, and visuals.",
    },
    {
      img: portfolio2,
      title: "E-commerce Website",
      desc: "Developed a responsive e-commerce platform using React and Stripe API.",
    },
    {
      img: portfolio3,
      title: "Marketing Campaign",
      desc: "Executed a social media campaign boosting engagement by 200%.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Recent Projects</h2>
        <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 3 } }}>
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                {/* Image */}
                <img
                  src={item.img}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-64 object-cover transition duration-500 ease-in-out group-hover:blur-sm"
                />

                {/* Description Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-white/90 text-black flex flex-col items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PortfolioPreview;
