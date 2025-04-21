import aboutImg from "../assets/about-image.jpg";

const AboutContent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="flex-1 mb-10 md:mb-0">
          <img src={aboutImg} alt="About" className="rounded-lg shadow-lg" />
        </div>
        <div className="flex-1 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            P S Meta is a results-driven digital agency that combines strategy,
            creativity, and technology to build strong brands.
          </p>
          <p className="text-gray-600">
            We focus on long-term growth through data-driven marketing and
            customer-first strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
