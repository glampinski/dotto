const features = [
  {
    title: "Nano",
    description: "Precision monitoring for the smallest details. Ideal for IoT and micro-environments."
  },
  {
    title: "Ultra", 
    description: "Advanced analytics for ultra-fast insights and decision making."
  },
  {
    title: "Big Data",
    description: "Scalable solutions for massive data sets and enterprise needs."
  }
];

export function Features() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-12">
      <section className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 py-16 md:py-20">
        {features.map((feature, index) => (
          <div key={index} className="flex-1 max-w-[300px] text-center">
            {/* Person with laptop placeholder */}
            <div className="w-full h-[200px] mb-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-[16px] flex items-end justify-center pb-8 relative overflow-hidden">
              {/* Person silhouette */}
              <div className="w-[80px] h-[120px] bg-gradient-to-b from-orange-200 to-orange-300 rounded-t-[40px] relative">
                {/* Head */}
                <div className="w-[25px] h-[25px] bg-orange-300 rounded-full absolute -top-[30px] left-1/2 transform -translate-x-1/2"></div>
                {/* Arms */}
                <div className="w-[15px] h-[40px] bg-orange-300 rounded-full absolute top-[20px] -left-[20px] rotate-12"></div>
                <div className="w-[15px] h-[40px] bg-orange-300 rounded-full absolute top-[20px] -right-[20px] -rotate-12"></div>
              </div>
              {/* Laptop */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="w-[60px] h-[40px] bg-gray-800 rounded-t-[4px] relative">
                  <div className="w-[55px] h-[35px] bg-gray-100 rounded-t-[2px] m-[2.5px] flex items-center justify-center">
                    <div className="w-[45px] h-[25px] bg-white rounded-[1px]"></div>
                  </div>
                </div>
                <div className="w-[60px] h-[4px] bg-gray-600 rounded-b-[2px]"></div>
              </div>
            </div>
            <h2 className="text-[1.3rem] md:text-[1.4rem] font-semibold mb-3 text-gray-800">
              {feature.title}
            </h2>
            <p className="text-gray-600 text-[0.95rem] md:text-[1rem] leading-[1.5] max-w-[250px] mx-auto">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
