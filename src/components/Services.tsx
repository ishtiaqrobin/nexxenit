
import { Cloud, Shield, Code, Smartphone, Database, Settings } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to enhance your business agility and reduce costs."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards."
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions built with modern technologies to meet your specific business requirements."
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our advanced analytics and business intelligence solutions."
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description: "Strategic IT consulting to optimize your technology infrastructure and drive digital transformation."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive IT solutions designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
