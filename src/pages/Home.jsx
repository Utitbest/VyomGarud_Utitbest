import React from "react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative h-screen bg-[#0c0c0c] text-white overflow-hidden">
      
      <motion.video
        src="/bestdrone.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-center"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />

      <div className="absolute inset-0 bg-[#000000e3] bg-opacity-60"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#ff7b00] opacity-20 blur-[120px] pointer-events-none"></div>

      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, staggerChildren: 0.2 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wide">
          VyomGarud
        </h1>

        <p className="text-lg md:text-xl max-w-xl text-gray-300 mb-8">
          Military-grade UAV systems built for precision, autonomy, and reliability.
        </p>
        <motion.button
            className="bg-[#ff8800] hover:bg-orange-500 text-black px-8 py-4 text-lg rounded font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}
        >
            Explore Capabilities
        </motion.button>
      </motion.div>
    </section>
  );
}
