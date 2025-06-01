"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Search,
  ArrowRight,
  Sparkles,
  Users,
  Globe,
  TrendingUp,
} from "lucide-react";

export function Hero() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = "Find Anyone,";
  const highlightText = "Anywhere";

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      // Typewriter effect
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setIsTypingComplete(true), 300);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    }
  }, [isInView, controls, fullText]);

  const handleStartSearch = () => {
    // Navigate to search page
    router.push("/search");
  };

  const handleWatchDemo = () => {
    // Simple scroll to demo section instead of routing
    const demoSection = document.getElementById("demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const statCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 1.2 + i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const statsData = [
    {
      icon: Users,
      label: "People Found",
      value: "10M+",
      description: "Verified profiles",
      bgColor: "bg-blue-50",
      hoverBgColor: "group-hover:from-blue-50 group-hover:to-blue-100",
      iconBgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      iconTextColor: "text-blue-600",
      progressColor: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
      icon: Globe,
      label: "Countries",
      value: "195",
      description: "Global coverage",
      bgColor: "bg-purple-50",
      hoverBgColor: "group-hover:from-purple-50 group-hover:to-purple-100",
      iconBgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      iconTextColor: "text-purple-600",
      progressColor: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
    {
      icon: TrendingUp,
      label: "Accuracy",
      value: "99.5%",
      description: "Search precision",
      bgColor: "bg-pink-50",
      hoverBgColor: "group-hover:from-pink-50 group-hover:to-pink-100",
      iconBgColor: "bg-gradient-to-br from-pink-100 to-pink-200",
      iconTextColor: "text-pink-600",
      progressColor: "bg-gradient-to-r from-pink-400 to-pink-600",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-20 pb-16 overflow-hidden"
    >
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60" />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(600px circle at 0% 0%, rgba(59, 130, 246, 0.15), transparent 50%)",
            "radial-gradient(600px circle at 100% 100%, rgba(139, 92, 246, 0.15), transparent 50%)",
            "radial-gradient(600px circle at 0% 100%, rgba(236, 72, 153, 0.15), transparent 50%)",
            "radial-gradient(600px circle at 100% 0%, rgba(59, 130, 246, 0.15), transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Enhanced Badge */}
          <motion.div variants={badgeVariants} className="mb-10">
            <motion.div
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-blue-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-5 h-5 text-blue-600 mr-3" />
              </motion.div>
              <span className="text-xs font-semibold text-blue-800 mr-3">
                AI-Powered People Search
              </span>
              <motion.div
                className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-2"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
                LIVE
              </span>
            </motion.div>
          </motion.div>

          {/* Enhanced Main Headline with Typewriter Effect */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            <motion.span
              className="block mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {typedText}
              <motion.span
                className="inline-block w-1 h-10 sm:h-12 lg:h-16 bg-blue-600 ml-2"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={
                isTypingComplete
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                backgroundPosition: { duration: 3, repeat: Infinity },
              }}
              style={{ backgroundSize: "200% 100%" }}
            >
              {highlightText}
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-700 mb-14 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Discover and connect with people using our{" "}
            <motion.span
              className="text-blue-600 font-semibold relative"
              whileHover={{ scale: 1.05 }}
            >
              advanced AI search engine
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 block"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              />
            </motion.span>
            . Find contact information, social profiles, and professional
            networks{" "}
            <motion.span
              className="text-purple-600 font-semibold"
              animate={{
                textShadow: [
                  "0 0 0px rgba(139, 92, 246, 0)",
                  "0 0 10px rgba(139, 92, 246, 0.3)",
                  "0 0 0px rgba(139, 92, 246, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              instantly
            </motion.span>
            .
          </motion.p>

          {/* Enhanced Stats with Better Icons and Animations */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                variants={statCardVariants}
                className="relative p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.hoverBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Floating Particles Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      `radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
                      `radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
                      `radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.iconBgColor} ${stat.iconTextColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8" />
                  </motion.div>

                  <motion.div
                    className="text-4xl font-bold text-gray-900 mb-2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 1.5 + index * 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>

                  <div className="text-gray-800 font-semibold mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.description}
                  </div>

                  {/* Animated Progress Bar */}
                  <motion.div
                    className="mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 + index * 0.1 }}
                  >
                    <motion.div
                      className={`h-full ${stat.progressColor} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        delay: 2.2 + index * 0.1,
                        duration: 1.5,
                        ease: "easeOut",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Professional CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            {/* Primary CTA Button - Enhanced */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              {/* Animated Background Glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-700"
                animate={{
                  background: [
                    "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)",
                    "linear-gradient(90deg, #8B5CF6, #EC4899, #3B82F6)",
                    "linear-gradient(135deg, #EC4899, #3B82F6, #8B5CF6)",
                    "linear-gradient(180deg, #3B82F6, #8B5CF6, #EC4899)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <Button
                size="lg"
                onClick={handleStartSearch}
                className="relative h-14 px-10 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-purple-600 hover:to-purple-700 text-white text-base rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 overflow-hidden font-semibold border-0 group/btn"
              >
                {/* Shimmer Effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />

                {/* Particle Effect Background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundImage: [
                      "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 40% 60%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <span className="relative flex items-center">
                  <motion.div
                    className="mr-3 p-2 bg-white/10 rounded-lg backdrop-blur-sm"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Search className="w-5 h-5" />
                  </motion.div>

                  <span className="font-bold tracking-wide">
                    Start Free Search
                  </span>

                  <motion.div
                    className="ml-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>

                {/* Bottom Border Accent */}
                <motion.div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white/50 group-hover/btn:w-full group-hover/btn:left-0 transition-all duration-500" />
              </Button>
            </motion.div>

            {/* Secondary CTA Button - Enhanced */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              {/* Subtle Glow Effect */}
              <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 via-blue-200 to-purple-200 rounded-3xl blur opacity-0 group-hover:opacity-60 transition-all duration-500" />

              <Button
                variant="outline"
                size="lg"
                onClick={handleWatchDemo}
                className="relative h-14 px-10 text-base rounded-2xl border-2 border-gray-300/60 hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-50/90 hover:to-purple-50/90 transition-all duration-500 backdrop-blur-md bg-white/90 font-semibold group/btn shadow-lg hover:shadow-xl"
              >
                {/* Animated Background */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-purple-50/0 to-pink-50/0 group-hover/btn:from-blue-50/60 group-hover/btn:via-purple-50/40 group-hover/btn:to-pink-50/60 rounded-2xl transition-all duration-500" />

                {/* Subtle Pattern Overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-500"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                />

                <span className="relative flex items-center text-gray-700 group-hover/btn:text-gray-800">
                  <motion.div
                    className="mr-3 p-2 bg-gradient-to-br from-gray-100 to-gray-200 group-hover/btn:from-blue-100 group-hover/btn:to-purple-100 rounded-lg shadow-sm group-hover/btn:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full relative shadow-sm"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(239, 68, 68, 0.4)",
                          "0 0 0 8px rgba(239, 68, 68, 0)",
                        ],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {/* Pulse Ring */}
                      <motion.div
                        className="absolute inset-0 bg-red-400 rounded-full"
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />

                      {/* Inner Glow */}
                      <motion.div
                        className="absolute inset-0.5 bg-red-300 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.6, 0.9, 0.6],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>

                  <span className="font-bold tracking-wide">Watch Demo</span>

                  <motion.div
                    className="ml-4 text-gray-500 group-hover/btn:text-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                </span>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(90deg, transparent, transparent)`,
                  }}
                  whileHover={{
                    background: [
                      `linear-gradient(90deg, rgba(59,130,246,0.3) 0%, transparent 50%, transparent 100%)`,
                      `linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.3) 50%, transparent 100%)`,
                      `linear-gradient(90deg, transparent 0%, transparent 50%, rgba(139,92,246,0.3) 100%)`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
