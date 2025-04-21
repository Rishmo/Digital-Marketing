const posts = [
  {
    id: 1,
    title: "10 Proven Ways to Boost Your SEO",
    excerpt: "Discover the strategies that top marketers use to boost SEO ranking in 2025.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjcwMHwwfDF8c2VhY2h8Mnx8c2VvfGVufDB8fHx8fDE2NzM0NzE3MTY&ixlib=rb-1.2.1&q=80&w=1080", 
    date: "April 15, 2025",
    category: "SEO",
  },
  {
    id: 2,
    title: "Why Branding Is More Than Just a Logo",
    excerpt: "Learn how branding creates meaningful connections with your audience.",
    image: "https://blog.flipsnack.com/wp-content/uploads/2021/09/how-to-create-a-brand-book-cover-900x507.png.webp",
    date: "April 10, 2025",
    category: "Branding",
  },
  {
    id: 3,
    title: "Social Media Trends to Watch This Year",
    excerpt: "Stay ahead of your competitors with the latest trends and tools in social marketing.",
    image: "https://thesocialmediamonthly.com/wp-content/uploads/2017/04/website-plus-social-media.jpg",
    date: "April 5, 2025",
    category: "Social Media",
  },
];

const BlogGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Latest Insights</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <span className="text-sm text-blue-600">{post.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
