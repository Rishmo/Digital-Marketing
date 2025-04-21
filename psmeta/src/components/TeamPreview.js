import { motion } from "framer-motion";
import ceoImg from '../assets/ceo.jpg';
import devImg from '../assets/developer.jpg';

const team = [
  {
    name: "Om Pachauri",
    role: "CEO",
    img: ceoImg,
  },
  {
    name: "Natasha Lee",
    role: "Marketing Head",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=200&q=80",
  },
  {
    name: "Moon Sahu",
    role: "Developer",
    img: devImg,
  },
];

const TeamPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-gray-800"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover shadow mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
              <p className="text-primary mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
