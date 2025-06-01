"use client";

import { motion } from "framer-motion";
import { Search, Users, Globe, Sparkles, Zap, Target } from "lucide-react";

export function FloatingElements() {
  const elements = [
    { icon: Search, x: "10%", y: "20%", delay: 0 },
    { icon: Users, x: "85%", y: "15%", delay: 0.5 },
    { icon: Globe, x: "15%", y: "70%", delay: 1 },
    { icon: Sparkles, x: "80%", y: "75%", delay: 1.5 },
    { icon: Zap, x: "5%", y: "45%", delay: 2 },
    { icon: Target, x: "90%", y: "45%", delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: Element.x, top: Element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0.3],
            scale: [0, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay: Element.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <Element.icon className="w-8 h-8 text-blue-500/60" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
