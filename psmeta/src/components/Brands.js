import brand1 from "../assets/brand1.png"; 
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";

const Brands = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8">
        {[brand1, brand2, brand3, brand4].map((brand, idx) => (
          <img key={idx} src={brand} alt={`Brand ${idx + 1}`} className="h-10 md:h-14 opacity-70 hover:opacity-100 transition" />
        ))}
      </div>
    </section>
  );
};

export default Brands;
