
export const Clients = () => {
  const clients = [
    { name: "Sky Buy", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop&crop=center" },
    { name: "OrenMart", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
    { name: "China Source", logo: "https://images.unsplash.com/photo-1560472355-a9a6be4a4b56?w=200&h=100&fit=crop&crop=center" },
    { name: "DearBD", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop&crop=center" },
    { name: "ChinaShip", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
    { name: "Buyer Zone BD", logo: "https://images.unsplash.com/photo-1560472355-a9a6be4a4b56?w=200&h=100&fit=crop&crop=center" },
    { name: "DeshMART", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop&crop=center" },
    { name: "Boritta", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center" },
    { name: "TourMART", logo: "https://images.unsplash.com/photo-1560472355-a9a6be4a4b56?w=200&h=100&fit=crop&crop=center" },
    { name: "SkyShip", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop&crop=center" }
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Esteemed <span className="text-purple-500">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're proud to work with amazing companies that trust us with their digital transformation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 bg-white dark:bg-gray-700/50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="w-24 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    {client.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join our growing list of satisfied clients
          </p>
        </div>
      </div>
    </section>
  );
};
