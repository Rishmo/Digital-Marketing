import { motion } from "framer-motion";

const blogs = [
  {
    title: "Top 10 SEO Tips for 2025",
    date: "Apr 1, 2025",
    excerpt: "Boost your site's visibility with these key strategies.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjcwMHwwfDF8c2VhY2h8Mnx8c2VvfGVufDB8fHx8fDE2NzM0NzE3MTY&ixlib=rb-1.2.1&q=80&w=1080", // SEO image
  },
  {
    title: "Why Social Media Ads Work",
    date: "Mar 20, 2025",
    excerpt: "Discover the power of targeted ads in digital marketing.",
    image: "https://thesocialmediamonthly.com/wp-content/uploads/2017/04/website-plus-social-media.jpg", 
  },
];

const BlogPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-gray-800"
        >
          Latest Blog Posts
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {blogs.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              {/* Blog Image */}
              <div className="mb-4 rounded-lg overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{b.title}</h3>
              <span className="text-sm text-gray-500">{b.date}</span>
              <p className="text-gray-600 mt-3">{b.excerpt}</p>
              <button className="mt-4 text-primary hover:underline font-semibold">
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
