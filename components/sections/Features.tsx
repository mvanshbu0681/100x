"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Globe,
  Shield,
  Zap,
  Users,
  Brain,
  Target,
  Smartphone,
  Database,
} from "lucide-react";

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Search",
      description:
        "Advanced machine learning algorithms analyze billions of data points to find the most relevant matches.",
      color: "from-blue-500 to-cyan-500",
      badge: "Core Feature",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description:
        "Search across 195+ countries with localized data sources and cultural context understanding.",
      color: "from-purple-500 to-pink-500",
      badge: "Worldwide",
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description:
        "Enterprise-grade security with GDPR compliance and ethical data sourcing practices.",
      color: "from-green-500 to-emerald-500",
      badge: "Secure",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description:
        "Get comprehensive results in milliseconds with real-time data processing and caching.",
      color: "from-yellow-500 to-orange-500",
      badge: "Fast",
    },
    {
      icon: Users,
      title: "Social Intelligence",
      description:
        "Discover connections, mutual contacts, and relationship mapping across platforms.",
      color: "from-indigo-500 to-purple-500",
      badge: "Smart",
    },
    {
      icon: Target,
      title: "Precision Matching",
      description:
        "99.5% accuracy with advanced disambiguation and verification algorithms.",
      color: "from-red-500 to-pink-500",
      badge: "Accurate",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description:
        "Full-featured mobile apps with offline caching and voice search capabilities.",
      color: "from-teal-500 to-blue-500",
      badge: "Mobile",
    },
    {
      icon: Database,
      title: "Rich Data Sources",
      description:
        "Aggregate data from 1000+ sources including social media, professional networks, and public records.",
      color: "from-violet-500 to-purple-500",
      badge: "Comprehensive",
    },
    {
      icon: Search,
      title: "Smart Filters",
      description:
        "Advanced filtering by location, industry, company, education, and custom criteria.",
      color: "from-cyan-500 to-teal-500",
      badge: "Advanced",
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="text-gray-900">To Find Anyone</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our comprehensive suite of AI-powered tools makes people search
            effortless, accurate, and respectful of privacy.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <Card className="h-full bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                <CardContent className="p-8">
                  {/* Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <Badge
                      variant="secondary"
                      className="text-xs font-medium bg-gray-100 text-gray-700"
                    >
                      {feature.badge}
                    </Badge>
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 opacity-10"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div
                        className={`w-full h-full rounded-full bg-gradient-to-br ${feature.color}`}
                      />
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 relative`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="w-8 h-8" />
                    <motion.div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
