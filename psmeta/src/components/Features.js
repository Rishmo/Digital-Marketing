const features = [
    {
      title: "Experienced Team",
      desc: "Our experts deliver top-notch solutions that meet business goals.",
      icon: "👨‍💼",
    },
    {
      title: "Creative Approach",
      desc: "We bring your ideas to life with innovation and style.",
      icon: "🎨",
    },
    {
      title: "Results Focused",
      desc: "Your success is our mission — backed by measurable results.",
      icon: "📈",
    },
  ];
  
  const Features = () => {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  