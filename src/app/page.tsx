"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GlareCard } from "@/components/ui/glare-card";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Society of Computer Science and Engineering";
  const router = useRouter();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setCheck(true);
      }
    }, 53);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col overflow-y-hidden lg:flex-row w-full h-[100vh] px-6 bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white justify-center items-center">
      {/* Text Container */}
      <div className="flex mt-40 md:mt-50 lg:mt-0 flex-col justify-center w-full md:w-3/4 lg:w-1/2 text-center lg:text-left">
        <p
          className={`text-lg md:text-2xl font-light tracking-wide text-gray-300 ${dancingScript.className}`}
        >
          Welcome to the
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          <span>{text}</span>
          <span className="animate-blink text-white">|</span>
        </h1>
      </div>

      {/* Button with Right-to-Left Animation */}
      {check && (
        <motion.div
          initial={{ x: "100vw", opacity: 0 }} // Start from right
          animate={{ x: 0, opacity: 1 }} // Move to original position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          className="mt-12 lg:mt-0 lg:ml-30 md:mt-15 flex items-center"
        >
          <Link href={"/home"}>
            <GlareCard className="flex flex-col items-center justify-center">
              <svg
                width="50"
                height="40"
                viewBox="0 0 66 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
              >
                <path
                  d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                  stroke="currentColor"
                  strokeWidth="15"
                  strokeMiterlimit="3.86874"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-white font-bold text-xl mt-4">Visit Home</p>
            </GlareCard>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
