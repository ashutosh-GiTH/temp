"use client";
import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
export default function Events() {
  const events = [
    {
      quote:
        "Unleash your inner detective! Solve riddles, find hidden clues, and race against time to uncover the ultimate prize.",
      name: "Scavenger Hunt",
      designation: "Adventure & Mystery Challenge",
      src: "https://plus.unsplash.com/premium_photo-1661311950994-d263ea9681a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJlYXN1cmUlMjBodW50fGVufDB8fDB8fHww",
    },
    {
      quote:
        "Lights, camera, action! Compete in an epic showdown where teams recreate iconic movie scenes in the most hilarious way possible.",
      name: "Movie Battle",
      designation: "Cinematic Creativity Contest",
      src: "https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllJTIwYmF0dGxlfGVufDB8fDB8fHww",
    },
    {
      quote:
        "Locked in a room with only your wits to escape! Solve intricate puzzles and unlock the door before time runs out.",
      name: "Escape Room Challenge",
      designation: "Mind-Bending Puzzle Adventure",
      src: "https://plus.unsplash.com/premium_photo-1661892096390-0053f6cde1a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJvb20lMjBiYXR0bGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      quote:
        "Crack the code, decrypt the message, and outsmart the competition in this high-intensity cybersecurity challenge!",
      name: "Code Breakers",
      designation: "Cybersecurity & Hacking Challenge",
      src: "https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Solve technical challenges, decode encrypted messages, and navigate through tech-inspired puzzles to claim the ultimate treasure!",
      name: "Tech Treasure Quest",
      designation: "Technology & Innovation Hunt",
      src: "https://plus.unsplash.com/premium_photo-1664298863627-cb6771bbbf21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHV6emxlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <>
      <div className="relative min-h-screen mb-15 flex flex-col items-center px-6 py-10 text-white">
        <h2 className="text-center text-3xl md:text-6xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          <pre>⧼E̼⧽⧼v̼⧽⧼e̼⧽⧼n̼⧽⧼t̼⧽⧼s̼⧽</pre>
        </h2>
        <AnimatedTestimonials testimonials={events} />
      </div>
    </>
  );
}
