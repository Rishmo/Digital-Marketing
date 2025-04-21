const services = [
    {
      title: "Digital Strategy",
      desc: "Comprehensive strategies to grow your digital presence.",
      icon: "🧠",
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher on search engines and increase visibility.",
      icon: "🚀",
    },
    {
      title: "Content Marketing",
      desc: "Engaging and SEO-friendly content to attract leads.",
      icon: "✍️",
    },
    {
      title: "Social Media",
      desc: "Grow and manage your social media audience effectively.",
      icon: "📱",
    },
    {
      title: "Paid Advertising",
      desc: "High-ROI ad campaigns on Google, Meta, LinkedIn, and more.",
      icon: "💰",
    },
    {
      title: "Email Marketing",
      desc: "Convert leads and retain customers via email workflows.",
      icon: "📧",
    },
  ];
  
  const ServicesGrid = () => {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesGrid;
  