const services = [
    {
      title: "SEO Optimization",
      desc: "Improve your ranking on search engines with expert SEO.",
      icon: "🔍",
    },
    {
      title: "Social Media Marketing",
      desc: "Reach the right audience on the right platform.",
      icon: "📱",
    },
    {
      title: "PPC Advertising",
      desc: "Maximize ROI with smart paid campaigns.",
      icon: "💸",
    },
  ];
  
  const ServicesPreview = () => {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesPreview;
  