import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    summary: "Learn the basics of React and how to build your first component.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Advanced CSS Techniques",
    summary: "Explore modern CSS features and how to use them effectively.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Web Development Best Practices",
    summary: "Discover the best practices for modern web development.",
    image: "https://via.placeholder.com/30",
  },
];

const BlogPost = ({ post, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="card"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h5 className="text-xl font-semibold mb-2">{post.title}</h5>
        <p className="text-gray-600 mb-4">{post.summary}</p>
        <button className="btn btn-primary">Read More</button>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="home">
      {/* Hero Section */}
      <motion.header
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="bg-primary text-white text-center py-20 mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            CLIFORD [KLEEFDEV] JEAN-LOUIS
          </h1>
          <p className="text-xl md:text-2xl">Bienvenue chez.</p>
        </div>
      </motion.header>

      {/* Blog Posts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={post.id} post={post} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
