import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "SQL",
    "Git",
    "Docker",
  ];

  return (
    <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who am I?</h2>
            <p className="text-gray-600 mb-6">
              I'm a passionate developer with a love for creating beautiful and
              functional web applications. With years of experience in the
              industry, I specialize in building modern web solutions using
              cutting-edge technologies.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and tutorials.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-100 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-3 rounded-md shadow-sm text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
