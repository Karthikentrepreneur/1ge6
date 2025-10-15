import React from "react";
import { Package, Droplet, Code, Sun } from "lucide-react";

const services = [
  {
    icon: <Package className="w-6 h-6 text-sky-500" />,
    title: "Supply Chain Solutions",
  },
  {
    icon: <Droplet className="w-6 h-6 text-sky-500" />,
    title: "Lubricant Distribution",
  },
  {
    icon: <Code className="w-6 h-6 text-sky-500" />,
    title: "Software Development",
  },
  {
    icon: <Sun className="w-6 h-6 text-sky-500" />,
    title: "Renewable Energy",
  },
];

export default function ServicesSection() {
  return (
    <section className="px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] items-center gap-12">
        {/* Left Content */}
        <div>
          <p className="text-sky-600 font-medium tracking-wide mb-3">
            Integrated solutions powered by people, technology, and purpose
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            Our Services
          </h2>

          <div className="space-y-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.02]"
              >
                <div className="p-3 bg-sky-50 rounded-xl">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Right Video Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9]">
          <video
            src="/videos/port.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </div>
      </div>
    </section>
  );
}
