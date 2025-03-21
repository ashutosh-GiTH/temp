"use client";

import React, { useEffect, useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const comps = [
  {
    title: "Hackathon 2025",
    description:
      "A 24-hour coding marathon where participants collaborate to create innovative solutions to real-world problems using technology.",
    prize: "₹50,000",
  },
  {
    title: "AI Challenge",
    description:
      "Solve real-world AI problems by building intelligent models that can recognize patterns, make predictions, and improve automation.",
    prize: "₹30,000",
  },
  {
    title: "CTF Cybersecurity",
    description:
      "A thrilling Capture the Flag event where participants showcase their cybersecurity skills in ethical hacking, cryptography, and forensics.",
    prize: "₹25,000",
  },
  {
    title: "Game Dev Jam",
    description:
      "A 48-hour game development challenge to create unique and engaging games from scratch, testing creativity and programming skills.",
    prize: "₹40,000",
  },
  {
    title: "Blockchain Summit",
    description:
      "An insightful event exploring decentralized technologies, smart contracts, and the future of blockchain in industries.",
    prize: "₹20,000",
  },
  {
    title: "Tech Quiz",
    description:
      "A high-energy competition testing technical knowledge in coding, hardware, AI, networking, and emerging technologies.",
    prize: "₹10,000",
  },
  {
    title: "Tech Quiz",
    description:
      "A high-energy competition testing technical knowledge in coding, hardware, AI, networking, and emerging technologies.",
    prize: "₹10,000",
  },
  {
    title: "Hackathon 2025",
    description:
      "A 24-hour coding marathon where participants collaborate to create innovative solutions to real-world problems using technology.",
    prize: "₹50,000",
  },
  {
    title: "AI Challenge",
    description:
      "Solve real-world AI problems by building intelligent models that can recognize patterns, make predictions, and improve automation.",
    prize: "₹30,000",
  },
  {
    title: "CTF Cybersecurity",
    description:
      "A thrilling Capture the Flag event where participants showcase their cybersecurity skills in ethical hacking, cryptography, and forensics.",
    prize: "₹25,000",
  },
  {
    title: "Game Dev Jam",
    description:
      "A 48-hour game development challenge to create unique and engaging games from scratch, testing creativity and programming skills.",
    prize: "₹40,000",
  },
  {
    title: "Blockchain Summit",
    description:
      "An insightful event exploring decentralized technologies, smart contracts, and the future of blockchain in industries.",
    prize: "₹20,000",
  },
  {
    title: "Tech Quiz",
    description:
      "A high-energy competition testing technical knowledge in coding, hardware, AI, networking, and emerging technologies.",
    prize: "₹10,000",
  },
  {
    title: "Tech Quiz",
    description:
      "A high-energy competition testing technical knowledge in coding, hardware, AI, networking, and emerging technologies.",
    prize: "₹10,000",
  },
];

export default function Competitions() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(300);
  const [gap, setGap] = useState(16);
  const [isDragging, setIsDragging] = useState(false);

  const duplicatedcomps = useMemo(() => [...comps, ...comps], []);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;

      // Adjust card width based on viewport
      if (containerWidth < 768) {
        // Mobile
        setCardWidth(containerWidth * 0.8);
        setGap(8);
      } else {
        // Desktop
        setCardWidth(400);
        setGap(16);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= duplicatedcomps.length - 3) return 0;
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) return duplicatedcomps.length - 1;
      return prev - 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen z-10 mt-20 h-full mx-5 px-2 text-white md:mx-12 flex flex-col items-center md:mt-0">
      <h2 className="text-center text-5xl md:text-6xl font-bold mb-15 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        <span className="hidden lg:inline">
          ⧼C̼⧽⧼o̼⧽⧼m̼⧽⧼p̼⧽⧼e̼⧽⧼t̼⧽⧼i̼⧽⧼t̼⧽⧼i̼⧽⧼o̼⧽⧼n̼⧽⧼s̼⧽
        </span>
        <span className="lg:hidden">Competitions</span>
      </h2>

      <div className="relative w-full overflow-hidden py-8" ref={containerRef}>
        <motion.div
          className="flex cursor-grab"
          animate={{
            x: -currentIndex * (cardWidth + gap),
          }}
          transition={{ type: "tween", duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={(_, { offset, velocity }) => {
            setIsDragging(false);
            if (Math.abs(velocity.x) > 500) {
              const direction = velocity.x > 0 ? -1 : 1;
              setCurrentIndex((prev) =>
                Math.max(
                  0,
                  Math.min(prev + direction, duplicatedcomps.length - 1)
                )
              );
            } else if (Math.abs(offset.x) > cardWidth / 2) {
              const direction = offset.x > 0 ? -1 : 1;
              setCurrentIndex((prev) =>
                Math.max(
                  0,
                  Math.min(prev + direction, duplicatedcomps.length - 1)
                )
              );
            }
          }}
        >
          {duplicatedcomps.map((event, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-xl bg-black/30 p-6 backdrop-blur-sm h-[20rem] flex flex-col items-center justify-between"
              style={{
                width: cardWidth,
                marginRight: index !== duplicatedcomps.length - 1 ? gap : 0,
              }}
            >
              <h3 className="text-xl font-bold text-blue-400">{event.title}</h3>
              <p className="mt-4 text-gray-300 text-lg md:tracking-wider">
                {event.description}
              </p>
              <div className="mt-6 text-lg font-semibold text-purple-500 self-start ml-3">
                Prize: {event.prize}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 hover:bg-black/50 backdrop-blur-sm"
        >
          <ChevronLeft className="text-white h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 hover:bg-black/50 backdrop-blur-sm"
        >
          <ChevronRight className="text-white h-6 w-6" />
        </button>

        {/* Mobile indicator */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          {comps.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentIndex % comps.length === index
                  ? "bg-white"
                  : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
