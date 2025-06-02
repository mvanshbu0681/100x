"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, RefObject } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Database, Clock, Shield } from "lucide-react";

export function GlobalReach() {
  const ref = useRef(null);
  const isInView = useInView(ref as unknown as RefObject<HTMLElement>, { once: true, amount: 0.2 });
  const [mounted, setMounted] = useState(false);

  // Deterministic positions for floating orbs to prevent hydration errors
  const orbPositions = [
    { left: 10, top: 20 },
    { left: 85, top: 15 },
    { left: 45, top: 8 },
    { left: 70, top: 25 },
    { left: 20, top: 60 },
    { left: 90, top: 45 },
    { left: 35, top: 70 },
    { left: 65, top: 55 },
    { left: 15, top: 80 },
    { left: 80, top: 75 },
    { left: 50, top: 35 },
    { left: 25, top: 45 },
    { left: 75, top: 65 },
    { left: 40, top: 90 },
    { left: 60, top: 10 },
    { left: 30, top: 30 },
    { left: 85, top: 85 },
    { left: 5, top: 50 },
    { left: 95, top: 40 },
    { left: 55, top: 75 },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const worldStats = [
    { country: "United States", users: "2.5M+", flag: "🇺🇸", growth: "+23%" },
    { country: "United Kingdom", users: "890K+", flag: "🇬🇧", growth: "+18%" },
    { country: "Canada", users: "650K+", flag: "🇨🇦", growth: "+31%" },
    { country: "Australia", users: "420K+", flag: "🇦🇺", growth: "+27%" },
    { country: "Germany", users: "1.2M+", flag: "🇩🇪", growth: "+15%" },
    { country: "France", users: "780K+", flag: "🇫🇷", growth: "+22%" },
    { country: "Japan", users: "560K+", flag: "🇯🇵", growth: "+19%" },
    { country: "South Korea", users: "340K+", flag: "🇰🇷", growth: "+35%" },
  ];

  const globalFeatures = [
    {
      icon: Globe,
      title: "195+ Countries",
      description:
        "Complete coverage across all continents with localized data sources",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "50+ Languages",
      description: "Multi-language support with cultural context understanding",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "24/7 Updates",
      description: "Real-time data synchronization across global databases",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Local Compliance",
      description: "GDPR, CCPA, and regional privacy law compliance",
      color: "from-red-500 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="global-reach"
      ref={ref}
      className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs - Only render on client */}
        {mounted &&
          orbPositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
              <Globe className="w-4 h-4 mr-2" />
              Global Presence
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="block mb-2">Trusted</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Worldwide
              </span>
            </h2>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our AI-powered people search technology operates across the globe,
              connecting millions of users with accurate, real-time information.
            </p>
          </motion.div>

          {/* Global Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {globalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-0 text-center">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* World Map Visualization */}
          <motion.div variants={itemVariants} className="mb-20">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Real-time Global Activity
                  </h3>
                  <p className="text-blue-100">
                    Live searches happening around the world right now
                  </p>
                </div>

                {/* Simplified World Map with Pulse Points */}
                <div className="relative h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden">
                  {/* Pulse Points for Major Cities */}
                  {[
                    { city: "New York", left: "25%", top: "35%" },
                    { city: "London", left: "48%", top: "30%" },
                    { city: "Tokyo", left: "85%", top: "40%" },
                    { city: "Sydney", left: "88%", top: "75%" },
                    { city: "São Paulo", left: "35%", top: "70%" },
                    { city: "Mumbai", left: "70%", top: "50%" },
                    { city: "Berlin", left: "52%", top: "32%" },
                    { city: "Toronto", left: "22%", top: "33%" },
                  ].map((location, index) => (
                    <motion.div
                      key={location.city}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{ left: location.left, top: location.top }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1 + index * 0.2 }}
                    >
                      <motion.div
                        className="w-4 h-4 bg-blue-400 rounded-full relative"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-blue-400 rounded-full"
                          animate={{ scale: [1, 3], opacity: [0.8, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />
                      </motion.div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs text-blue-200 whitespace-nowrap font-medium">
                        {location.city}
                      </div>
                    </motion.div>
                  ))}

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {[
                      { x1: "25%", y1: "35%", x2: "48%", y2: "30%" },
                      { x1: "48%", y1: "30%", x2: "85%", y2: "40%" },
                      { x1: "85%", y1: "40%", x2: "88%", y2: "75%" },
                      { x1: "25%", y1: "35%", x2: "70%", y2: "50%" },
                    ].map((line, index) => (
                      <motion.line
                        key={index}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.5 + index * 0.3 }}
                      />
                    ))}
                  </svg>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Country Statistics */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {worldStats.map((stat) => (
              <motion.div
                key={stat.country}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{stat.flag}</span>
                      <Badge
                        variant="outline"
                        className="bg-green-500/20 text-green-300 border-green-500/30"
                      >
                        {stat.growth}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {stat.country}
                    </h3>

                    <div className="flex items-center text-blue-100">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-2xl font-bold text-blue-300">
                        {stat.users}
                      </span>
                    </div>

                    <p className="text-sm text-blue-200 mt-2">Active Users</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
