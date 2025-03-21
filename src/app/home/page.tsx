"use client";
import React from "react";
import { useRef, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Competitions from "@/components/Competitions";
import Footer from "@/components/Footer";
import Events from "@/components/Events";
function page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4; // 0.5 = half speed
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-[100vw] h-[100vh] object-cover object-[60%_50%] md:object-center"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bgvid.mp4" type="video/mp4" />
        {/* Fallback message if the video isn't supported */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 md:bg-black/30 bg-black/40 " />
      <HeroSection />
      <AboutUs />
      <Competitions />
      <Events />
      <Footer />
    </div>
  );
}

export default page;
