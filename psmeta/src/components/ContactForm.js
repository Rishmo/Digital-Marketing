import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("❗ All fields are required to send the message.");
      return;
    }

    // Simulate successful submission
    alert("✅ Message sent successfully! Thank you for reaching out.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Get In Touch</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-10 shadow-2xl rounded-2xl transition-all duration-300"
        >
          <div className="mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 bg-gray-100 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 bg-gray-100 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 bg-gray-100 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-md hover:shadow-xl"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
