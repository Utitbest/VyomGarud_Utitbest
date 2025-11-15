import React from "react";
import { motion } from "framer-motion";

export default function Capabilities() {
  const items = [
    {
      title: "Recon UAV",
      desc: "High-altitude surveillance drone with long-range communication.",
      Image: "/NASM-A20000794000-NASM2018-10275.jpg"
    },
    {
      title: "Cargo Drone",
      desc: "Heavy-lift autonomous UAV built for logistics and defense supply.",
      Image: "/1756374116984305.png"
    },
    {
      title: "Autonomy Suite",
      desc: "AI-powered navigation, mapping, and control software.",
      Image: "/NASM-A20000794000-NASM2018-10275.jpg"
    },
    {
      title: "GCS System",
      desc: "Cloud-connected ground control station with telemetry analytics.",
      Image: "/GCS System.jpg"
    },
  ];

  return (
    <div className="bg-[#0f0f0f] text-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">Our Capabilities</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#1a1a1a] border border-gray-700 p-6 rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <img src={item.Image} alt={item.title} className="mb-2 w-full rounded-xl"/>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
