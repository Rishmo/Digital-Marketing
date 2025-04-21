const steps = [
    {
      step: "01",
      title: "Discovery",
      desc: "We understand your business, goals, and audience.",
    },
    {
      step: "02",
      title: "Strategy",
      desc: "We craft a custom strategy tailored to your growth.",
    },
    {
      step: "03",
      title: "Execution",
      desc: "We bring your project to life with precision and creativity.",
    },
    {
      step: "04",
      title: "Optimization",
      desc: "We track results, refine, and scale for long-term success.",
    },
  ];
  
  const WorkProcess = () => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded shadow hover:shadow-xl transition"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {s.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WorkProcess;
  