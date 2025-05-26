
import { Code2 } from "lucide-react";

const technologies = [
  {
    name: "React",
    description: "Modern frontend library for building interactive user interfaces",
    color: "from-blue-400 to-cyan-400"
  },
  {
    name: "Laravel",
    description: "Elegant PHP framework for robust backend development",
    color: "from-red-400 to-orange-400"
  },
  {
    name: "Django",
    description: "High-level Python framework for rapid development",
    color: "from-green-400 to-emerald-400"
  },
  {
    name: "WordPress",
    description: "Popular CMS for content-driven websites and blogs",
    color: "from-blue-600 to-indigo-600"
  },
  {
    name: "Next.js",
    description: "Full-stack React framework for production-grade applications",
    color: "from-gray-700 to-gray-900"
  },
  {
    name: "Astro.js",
    description: "Modern static site generator for fast, content-focused websites",
    color: "from-orange-400 to-pink-400"
  },
  {
    name: "MERN Stack",
    description: "MongoDB, Express, React, Node.js for full-stack development",
    color: "from-green-500 to-teal-500"
  },
  {
    name: "Python",
    description: "Versatile programming language for automation and AI solutions",
    color: "from-yellow-400 to-blue-500"
  }
];

export const TechStack = () => {
  return (
    <section id="techstack" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Tech Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to deliver exceptional solutions that meet your business needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
