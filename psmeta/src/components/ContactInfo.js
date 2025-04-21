import { Mail, Phone, MapPin } from "lucide-react"; 

const ContactInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Our Contact Information
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4 text-primary">
              <MapPin className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Address</h3>
            <p className="text-gray-600">
              Neohub - Levana<br />
              Lucknow, Uttar Pradesh 226001
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <Mail className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Email</h3>
            <p className="text-gray-600">contact@psmeta.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <Phone className="w-10 h-10 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Phone</h3>
            <p className="text-gray-600">+91 9876906542</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8588753308393!2d80.95396377524589!3d26.876562162897487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2b429dba131%3A0xf87c7a87e193d84b!2sLevana%20Cyber%20Heights%2C%20Vibhuti%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1713701992593!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
