import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "React",
    description:
      "Modern frontend library for building interactive user interfaces",
    color: "from-[#61DAFB] to-[#00D8FF]",
    icon: "logos:react",
  },
  {
    name: "Laravel",
    description: "Elegant PHP framework for robust backend development",
    color: "from-[#FF2D20] to-[#FF5C48]",
    icon: "logos:laravel",
  },
  {
    name: "Django",
    description: "High-level Python framework for rapid development",
    color: "from-[#092E20] to-[#44B78B]",
    icon: "logos:django-icon",
  },
  {
    name: "WordPress",
    description: "Popular CMS for content-driven websites and blogs",
    color: "from-[#21759B] to-[#464342]",
    icon: "logos:wordpress-icon",
  },
  {
    name: "Next.js",
    description: "Full-stack React framework for production-grade applications",
    color: "from-black to-gray-800",
    icon: "logos:nextjs-icon",
  },
  {
    name: "Astro",
    description:
      "Modern static site generator for fast, content-focused websites",
    color: "from-[#FF5D01] to-[#FF7E33]",
    icon: "logos:astro-icon",
  },
  {
    name: "MERN Stack",
    description: "MongoDB, Express, React, Node.js for full-stack development",
    color: "from-[#00ED64] to-[#00B74A]",
    icon: "logos:mongodb-icon",
  },
  {
    name: "Python",
    description:
      "Versatile programming language for automation and AI solutions",
    color: "from-[#3776AB] to-[#FFD43B]",
    icon: "logos:python",
  },
];

export const TechStack = () => {
  return (
    <section id="techstack" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Tech Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to deliver
            exceptional solutions that meet your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.75 }}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  // whileTap={{ scale: 0.75 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 p-3`}
                >
                  <Icon
                    icon={tech.icon}
                    className="w-full h-full"
                    style={{
                      filter: [
                        "React",
                        "Laravel",
                        "MERN Stack",
                        "WordPress",
                      ].includes(tech.name)
                        ? "brightness(0) invert(1)"
                        : "none",
                      color: [
                        "React",
                        "Laravel",
                        "MERN Stack",
                        "WordPress",
                      ].includes(tech.name)
                        ? "#FFFFFF"
                        : "inherit",
                    }}
                  />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
