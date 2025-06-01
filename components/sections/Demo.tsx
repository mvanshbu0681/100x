"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MapPin,
  Briefcase,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Globe,
  Star,
  CheckCircle,
  Play,
} from "lucide-react";

export function Demo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const demoResults = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior Product Manager",
      company: "Google",
      location: "San Francisco, CA",
      email: "s.chen@example.com",
      phone: "+1 (555) 123-4567",
      linkedin: "linkedin.com/in/sarahchen",
      twitter: "@sarahchen_pm",
      verified: true,
      accuracy: 98,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Software Engineer",
      company: "Meta",
      location: "Seattle, WA",
      email: "m.rodriguez@example.com",
      phone: "+1 (555) 987-6543",
      linkedin: "linkedin.com/in/mrodriguez",
      verified: true,
      accuracy: 95,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Emily Thompson",
      title: "Marketing Director",
      company: "Stripe",
      location: "Austin, TX",
      email: "e.thompson@example.com",
      linkedin: "linkedin.com/in/emilythompson",
      verified: true,
      accuracy: 97,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="demo"
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Play className="w-4 h-4 mr-2" />
              Live Demo
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900">See It In</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Action
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how our AI instantly finds comprehensive information about
              anyone, anywhere in the world with just a simple search.
            </p>
          </motion.div>

          {/* Demo Interface */}
          <motion.div
            variants={itemVariants}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Search Interface */}
            <div className="space-y-8">
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Try It Yourself
                  </h3>

                  {/* Demo Search Bar */}
                  <div className="relative mb-6">
                    <Input
                      placeholder="Type a name to search... (e.g., Sarah Chen)"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="h-14 pl-14 pr-32 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500 shadow-lg"
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                    <Button
                      onClick={handleSearch}
                      disabled={isSearching}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg"
                    >
                      {isSearching ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        "Search"
                      )}
                    </Button>
                  </div>

                  {/* Search Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: "Results Found", value: "3" },
                      { label: "Search Time", value: "0.2s" },
                      { label: "Accuracy", value: "97%" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center p-4 rounded-xl bg-blue-50 border border-blue-100"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                        }}
                      >
                        <div className="text-2xl font-bold text-blue-600">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {[
                      "Real-time data aggregation",
                      "Social media profile matching",
                      "Professional network analysis",
                      "Contact information verification",
                      "Privacy-compliant sourcing",
                    ].map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Display */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-4"
              >
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {demoResults.length} Results Found
                </Badge>
              </motion.div>

              {/* Results Cards */}
              <div className="space-y-4">
                {demoResults.map((person, index) => (
                  <motion.div
                    key={person.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group"
                  >
                    <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          {/* Avatar */}
                          <motion.div
                            className="relative"
                            whileHover={{ scale: 1.1 }}
                          >
                            <div className="w-16 h-16 rounded-xl overflow-hidden">
                              <img
                                src={person.avatar}
                                alt={person.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {person.verified && (
                              <motion.div
                                className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  delay: 1 + index * 0.2,
                                  type: "spring",
                                }}
                              >
                                <CheckCircle className="w-4 h-4 text-white" />
                              </motion.div>
                            )}
                          </motion.div>

                          {/* Person Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {person.name}
                              </h3>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm font-medium text-gray-600">
                                  {person.accuracy}%
                                </span>
                              </div>
                            </div>

                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-gray-600">
                                <Briefcase className="w-4 h-4 mr-2 flex-shrink-0" />
                                <span className="text-sm">
                                  {person.title} at {person.company}
                                </span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                                <span className="text-sm">
                                  {person.location}
                                </span>
                              </div>
                            </div>

                            {/* Contact Info */}
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              {person.email && (
                                <div className="flex items-center text-gray-500">
                                  <Mail className="w-3 h-3 mr-1" />
                                  <span className="truncate">
                                    {person.email}
                                  </span>
                                </div>
                              )}
                              {person.phone && (
                                <div className="flex items-center text-gray-500">
                                  <Phone className="w-3 h-3 mr-1" />
                                  <span>{person.phone}</span>
                                </div>
                              )}
                              {person.linkedin && (
                                <div className="flex items-center text-gray-500">
                                  <Linkedin className="w-3 h-3 mr-1" />
                                  <span className="truncate">LinkedIn</span>
                                </div>
                              )}
                              {person.twitter && (
                                <div className="flex items-center text-gray-500">
                                  <Twitter className="w-3 h-3 mr-1" />
                                  <span className="truncate">Twitter</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* View More Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center pt-4"
              >
                <Button
                  variant="outline"
                  className="bg-white/70 backdrop-blur-sm hover:bg-blue-50 border-blue-200 text-blue-600"
                >
                  View All Results
                  <Globe className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
