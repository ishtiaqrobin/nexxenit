import {
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  Settings,
  Code,
  FileText,
  Zap,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Modern, responsive web designs that captivate your audience and drive engagement across all devices.",
  },
  {
    icon: Code,
    title: "Web App Development",
    description:
      "Full-stack web applications built with cutting-edge technologies for optimal performance and scalability.",
  },
  {
    icon: Palette,
    title: "Graphics Design",
    description:
      "Creative visual solutions including branding, logos, and marketing materials that make your brand stand out.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
  },
  {
    icon: Layers,
    title: "ERP Solutions",
    description:
      "Comprehensive enterprise resource planning systems to streamline your business operations and workflows.",
  },
  {
    icon: Settings,
    title: "Custom Software",
    description:
      "Tailored software solutions built specifically for your unique business requirements and processes.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Sites",
    description:
      "Powerful online stores with secure payment processing and inventory management to boost your sales.",
  },
  {
    icon: FileText,
    title: "Landing & Sales Pages",
    description:
      "High-converting landing pages and sales funnels designed to maximize your marketing ROI.",
  },
  {
    icon: Zap,
    title: "Python Automation",
    description:
      "Automated workflows and scripts to streamline repetitive tasks and improve operational efficiency.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#F9FAFB] dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive IT solutions designed to accelerate your
            business growth and digital transformation journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg dark:shadow-none"
            >
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
