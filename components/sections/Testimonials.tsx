"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Users, TrendingUp, Award } from "lucide-react";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Head of Recruitment",
      company: "TechCorp",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "PeopleGPT revolutionized our hiring process. We found qualified candidates 3x faster than traditional methods. The AI accuracy is incredible!",
      metric: "3x faster hiring",
    },
    {
      id: 2,
      name: "Sarah Kim",
      role: "Sales Director",
      company: "Growth Labs",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The depth of information PeopleGPT provides is unmatched. We've increased our conversion rates by 150% since implementing it in our sales process.",
      metric: "150% conversion increase",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Private Investigator",
      company: "Chen Investigations",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a PI, accuracy is everything. PeopleGPT's 99.5% accuracy rate and global coverage have made my investigations more efficient and reliable.",
      metric: "99.5% accuracy",
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "Marketing Manager",
      company: "Brand Studio",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Finding the right influencers for our campaigns used to take weeks. Now with PeopleGPT, we identify and connect with them in minutes.",
      metric: "Weeks to minutes",
    },
    {
      id: 5,
      name: "David Park",
      role: "Cybersecurity Analyst",
      company: "SecureNet",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The privacy-first approach and ethical data sourcing make PeopleGPT our go-to tool for background verification while staying compliant.",
      metric: "100% compliant",
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "Business Development",
      company: "StartupXYZ",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "PeopleGPT helped us build our network from zero to hero. We've connected with industry leaders and closed deals worth millions.",
      metric: "Millions in deals",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Customers",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Average Rating",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Success Rate",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      value: "#1",
      label: "Industry Leader",
      color: "from-purple-500 to-pink-500",
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
      id="testimonials"
      ref={ref}
      className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-300 rounded-full blur-3xl" />
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Customer Stories
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900">Loved by</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Thousands
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how professionals across industries are using PeopleGPT to
              transform their work and achieve remarkable results.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="h-full p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Quote Icon */}
                    <motion.div
                      className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <Quote className="w-16 h-16 text-blue-600" />
                    </motion.div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 + i * 0.05 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 leading-relaxed mb-6 flex-grow">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Metric Badge */}
                    <div className="mb-6">
                      <motion.div
                        className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                      >
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {testimonial.metric}
                      </motion.div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <motion.div
                          className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 1.2 + index * 0.1,
                            type: "spring",
                          }}
                        />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-blue-600 font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
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
