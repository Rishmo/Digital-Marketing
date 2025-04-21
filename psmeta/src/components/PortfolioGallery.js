import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import portfolio1 from "../assets/portfolio1.jpg";
import portfolio3 from "../assets/portfolio3.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import portfolio4 from "../assets/portfolio4.jpg";
import portfolio5 from "../assets/portfolio5.jpg";
import portfolio6 from "../assets/portfolio6.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  { id: 1, title: "Creative Branding", image: portfolio1 },
  { id: 2, title: "UI/UX Design", image: portfolio4 },
  { id: 3, title: "Digital Marketing", image: portfolio3 },
  { id: 4, title: "SEO Project", image: portfolio5 },
  { id: 5, title: "Web Development", image: portfolio2 },
  { id: 6, title: "Social Strategy", image: portfolio6 },
];

const PortfolioGallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-r from-white to-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">🚀 Recent Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div
              key={proj.id}
              onClick={() => setActiveIndex(i)}
              className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                <p className="text-white text-xl font-semibold">{proj.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center animate-fade-in"
            onClick={() => setActiveIndex(null)}
          >
            <div className="w-full max-w-4xl p-4 relative">
              <Swiper
                initialSlide={activeIndex}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="rounded-lg overflow-hidden"
              >
                {projects.map((proj) => (
                  <SwiperSlide key={proj.id}>
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-[500px] object-cover"
                    />
                    <p className="text-white text-lg mt-4 text-center font-medium tracking-wide">
                      {proj.title}
                    </p>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-4 right-4 text-white text-3xl bg-black/50 hover:bg-black p-2 rounded-full transition"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;
