
import { CheckCircle } from "lucide-react";

const features = [
  "10+ years of industry experience",
  "Certified technology experts",
  "24/7 customer support",
  "Agile development methodology",
  "ISO 27001 security certified",
  "Global delivery capabilities"
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose NexxenIT?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                We are a leading IT solutions provider committed to delivering 
                innovative technology services that transform businesses and drive success.
              </p>
            </div>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 dark:text-green-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">500+</div>
                  <div className="text-gray-600 dark:text-gray-400">Successful Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">100+</div>
                  <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-400">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">10+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
