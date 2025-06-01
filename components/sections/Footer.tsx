"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github,
  ArrowRight,
  Heart,
} from "lucide-react";

export function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Demo", href: "#demo" },
      { name: "Pricing", href: "/pricing" },
      { name: "API", href: "/api" },
      { name: "Integrations", href: "/integrations" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "Webinars", href: "/webinars" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
      { name: "Security", href: "/security" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Github, href: "#", color: "hover:text-gray-400" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-b border-white/10 py-16"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div className="mb-8" whileHover={{ scale: 1.05 }}>
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Stay Updated with
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {" "}
                    PeopleGPT
                  </span>
                </h3>
                <p className="text-xl text-blue-100">
                  Get the latest updates, tips, and exclusive features delivered
                  to your inbox.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Input
                  placeholder="Enter your email"
                  className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 backdrop-blur-sm"
                />
                <Button className="h-12 px-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>

              <motion.p
                className="text-sm text-blue-200 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Join 50,000+ professionals already on our list. Unsubscribe
                anytime.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Company Info */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo */}
                <motion.div
                  className="flex items-center space-x-3 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative">
                    <Sparkles className="w-10 h-10 text-blue-400" />
                    <motion.div
                      className="absolute inset-0 bg-blue-400 rounded-full opacity-20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    PeopleGPT
                  </span>
                </motion.div>

                <p className="text-blue-100 mb-6 leading-relaxed">
                  The world's most advanced AI-powered people search engine.
                  Find anyone, anywhere, with unprecedented accuracy and speed.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-blue-200">
                    <Mail className="w-5 h-5 mr-3 text-blue-400" />
                    <span>hello@peoplegpt.com</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <Phone className="w-5 h-5 mr-3 text-blue-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 transition-all duration-300 ${social.color} hover:bg-white/20`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Footer Links */}
              {Object.entries(footerLinks).map(
                ([category, links], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-6 capitalize">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h4>
                    <ul className="space-y-3">
                      {links.map((link, linkIndex) => (
                        <motion.li
                          key={link.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: linkIndex * 0.05,
                          }}
                        >
                          <Link
                            href={link.href}
                            className="text-blue-200 hover:text-white transition-colors duration-200 hover:underline"
                          >
                            {link.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                className="text-blue-200 text-sm mb-4 md:mb-0"
                whileHover={{ scale: 1.02 }}
              >
                © {new Date().getFullYear()} PeopleGPT. All rights reserved.
              </motion.p>

              <motion.div
                className="flex items-center text-blue-200 text-sm"
                whileHover={{ scale: 1.02 }}
              >
                <span>Made with</span>
                <motion.div
                  className="mx-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                </motion.div>
                <span>by the PeopleGPT Team</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
