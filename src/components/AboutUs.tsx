"use client";

import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }} // Start fully off-screen (left)
      whileInView={{ opacity: 1, x: 0 }} // Move smoothly to the right
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.2 }} // Triggers when 20% visible
    >
      <div className="relative min-h-screen z-10 mt-20 h-full px-2 text-white md:ml-12 flex flex-col items-center md:mt-5">
        {/* Stylish Header */}
        <h2 className="text-center mx-2 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-16 md:mb-26 flex flex-wrap items-center justify-center">
          <pre>⧼A̼⧽⧼b̼⧽⧼o̼⧽⧼u̼⧽⧼t̼⧽</pre>
          <pre> ⧼U̼⧽⧼s̼⧽</pre>
        </h2>

        {/* Embedded YouTube Video & Content */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 w-full">
          {/* Video Section (Left) */}
          <div className="w-full md:w-1/3 flex justify-center items-center">
            <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-[315px] overflow-hidden rounded-xl shadow-lg">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/k9WnfHcsCB4?si=QYcTKhPB5O5cXOdS"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="border-none"
              ></iframe>
            </div>
          </div>

          {/* Text Content (Right) */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center justify-center md:items-start">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Who Are We?
            </h2>
            <p className="text-lg text-gray-300 max-w-xl px-4 md:px-0 leading-relaxed">
              The Society of Computer Science and Engineering (SCSE) is a
              dynamic community of tech enthusiasts, innovators, and learners.
              We foster a culture of knowledge-sharing, problem-solving, and
              creativity to shape the future of technology together.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
