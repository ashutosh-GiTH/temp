"use client";

import { Jost, Libre_Baskerville } from "next/font/google";
import { motion } from "framer-motion";

const jost = Jost({ subsets: ["latin"], weight: ["100", "400", "700", "900"] });
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function HeroSection() {
  return (
    <>
      {/* Main Content (Text & Logo) */}
      <div className="relative min-h-[100vh] mt-20 z-10 flex flex-col items-center justify-center h-full px-6 md:flex-row md:justify-between text-white md:ml-15 md:mt-0">
        {/* Text Reveal Animation (Appearing from Left, No Position Shift) */}
        <motion.div
          className={`mb-8 w-full md:w-1/2 md:mb-0 ${jost.className}`}
          initial={{ opacity: 0, x: -50 }} // Start slightly to the left
          whileInView={{ opacity: 1, x: 0 }} // Smoothly appear without shifting
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }} // Triggers when 20% in view
        >
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${libreBaskerville.className} bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-[3rem] md:leading-[6rem]`}
          >
            Society of Computer Science and Engineering
          </h1>
          <p className="text-lg md:text-xl w-2/3">Solve | Develop | Deploy</p>
        </motion.div>

        {/* Logo Fade Animation */}
        <motion.div
          className="flex mt-20 justify-center items-center md:w-1/3 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src="/SCSElogo.svg"
            alt="SCSE Logo"
            className="w-70 h-70 object-contain"
          />
        </motion.div>
      </div>
    </>
  );
}
