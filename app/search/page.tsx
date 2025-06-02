"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  Send,
  Plus,
  Menu,
  X,
  User,
  Briefcase,
  MessageSquare,
  Settings,
  Crown,
  ChevronDown,
  Clock,
  Star,
  Trash2,
  ArrowLeft,
  Users,
  Building,
  MapPin,
  Loader2,
  AlertCircle,
  Mail,
  Phone,
} from "lucide-react";

interface SearchHistory {
  id: string;
  query: string;
  type: string;
  timestamp: Date;
  isFavorite: boolean;
  results?: any; // Store API results
}

interface QueryRequest {
  query: string;
}

interface SearchResults {
  query: string;
  results: Array<{
    id: number;
    name: string;
    title: string;
    company: string;
    location: string;
    email: string;
    phone?: string;
    linkedin?: string;
    verified: boolean;
    accuracy: number;
    sources: string[];
    rawText?: string; // Add raw text field
  }>;
  metadata: {
    searchTime: string;
    totalResults: number;
    accuracy: number;
    timestamp: string;
  };
}

const searchTabs = [
  { id: "person", label: "Who are you looking for?", icon: User },
  { id: "job", label: "Job Description", icon: Briefcase },
  { id: "company", label: "Company Search", icon: Building },
  { id: "location", label: "Location Based", icon: MapPin },
];

const sidebarItems = [
  { id: "search", label: "People Search", icon: Search, active: true },
  { id: "contacts", label: "My Contacts", icon: Users },
  { id: "companies", label: "Companies", icon: Building },
  { id: "messages", label: "Messages", icon: MessageSquare, badge: 3 },
  { id: "settings", label: "Settings", icon: Settings },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function SearchPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("person");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([
    {
      id: "1",
      query: "John Smith Software Engineer",
      type: "person",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isFavorite: false,
    },
    {
      id: "2",
      query: "Marketing Manager at Google",
      type: "job",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      isFavorite: true,
    },
  ]);
  const [selectedHistory, setSelectedHistory] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<any>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const searchAPI = async (query: string): Promise<SearchResults> => {
    const response = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query } as QueryRequest),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Search failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setSearchError(null);

    try {
      // Call the backend API
      const results = await searchAPI(searchQuery);

      const newSearch: SearchHistory = {
        id: Date.now().toString(),
        query: searchQuery,
        type: activeTab,
        timestamp: new Date(),
        isFavorite: false,
        results: results,
      };

      setSearchHistory((prev) => [newSearch, ...prev]);
      setSearchResults(results);
      setSelectedHistory(newSearch.id);
      setSearchQuery("");
    } catch (error) {
      console.error("Search error:", error);
      setSearchError(
        error instanceof Error
          ? error.message
          : "Search failed. Please try again."
      );
    } finally {
      setIsSearching(false);
    }
  };

  const toggleFavorite = (id: string) => {
    setSearchHistory((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const deleteHistory = (id: string) => {
    setSearchHistory((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-80 bg-white/95 backdrop-blur-md border-r border-gray-200/60 shadow-xl flex flex-col"
            role="complementary"
            aria-label="Sidebar navigation"
          >
            {/* Sidebar Header */}
            <motion.div
              variants={itemVariants}
              className="p-6 border-b border-gray-200/60"
            >
              <div className="flex items-center justify-between mb-6">
                <motion.h1
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  100X Search
                </motion.h1>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Project Selection */}
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/60 hover:border-blue-300/80 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-3">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-800">
                      Current Project
                    </div>
                    <div className="text-xs text-gray-600">
                      People Finder Pro
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
              </motion.div>

              {/* Usage Progress */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 p-3 rounded-xl bg-gray-50/80"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-700">
                    Monthly Usage
                  </span>
                  <span className="text-xs text-gray-500">750/1000</span>
                </div>
                <Progress value={75} className="h-2" />
              </motion.div>
            </motion.div>

            {/* Navigation Items */}
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex-1 p-4 space-y-2"
            >
              {sidebarItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`flex items-center p-3 rounded-xl cursor-pointer transition-all duration-300 group ${
                      item.active
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "hover:bg-gray-100/80 text-gray-700"
                    }`}
                  >
                    <motion.div
                      className={`mr-3 ${
                        item.active
                          ? "text-white"
                          : "text-gray-500 group-hover:text-blue-500"
                      }`}
                      whileHover={{ rotate: item.active ? 0 : 10 }}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.div>
                    <span className="font-medium flex-1">{item.label}</span>
                    {item.badge && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                      >
                        {item.badge}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.nav>

            {/* User Profile */}
            <motion.div
              variants={itemVariants}
              className="p-4 border-t border-gray-200/60"
            >
              <motion.div
                className="flex items-center p-3 rounded-xl hover:bg-gray-100/80 cursor-pointer transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                    VM
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-800">
                    Vansh Mehta
                  </div>
                  <div className="text-xs text-gray-600">Premium User</div>
                </div>
                <Crown className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <motion.header
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/95 backdrop-blur-md border-b border-gray-200/60 p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {!sidebarOpen && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(true)}
                  className="mr-4"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              )}
              <motion.div
                className="flex items-center text-gray-600"
                whileHover={{ scale: 1.05 }}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Back to Dashboard</span>
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Plus className="w-4 h-4 mr-2" />
                New Search
              </Button>
            </motion.div>
          </div>
        </motion.header>

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Center Panel */}
          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="flex-1 flex flex-col p-8 overflow-y-auto"
          >
            {/* Logo and Title */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <motion.div
                className="inline-flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-4 shadow-xl">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI People Finder
                  </h1>
                  <p className="text-gray-600 font-medium">
                    Discover anyone, anywhere
                  </p>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
              >
                Use our advanced AI to find contact information, social
                profiles, and professional networks instantly.
              </motion.p>
            </motion.div>

            {/* Search Tabs */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-wrap gap-2 p-2 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/60 shadow-lg">
                {searchTabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-100/60"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    layout
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Search Input */}
            <motion.div variants={itemVariants} className="relative mb-12">
              <div className="relative group">
                <motion.div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500" />
                <div className="relative flex items-center bg-white border-2 border-gray-300 rounded-2xl shadow-lg p-3 focus-within:border-blue-500 focus-within:shadow-xl transition-all duration-300">
                  <div className="flex-1 flex items-center">
                    <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={`Enter ${
                        searchTabs
                          .find((tab) => tab.id === activeTab)
                          ?.label.toLowerCase() || "search query"
                      }...`}
                      className="w-full text-lg text-gray-800 placeholder:text-gray-400 bg-transparent border-0 outline-none focus:ring-0 py-3"
                      onKeyDown={(e) => e.key === "Enter" && !isSearching && handleSearch()}
                      disabled={isSearching}
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: isSearching ? 1 : 1.1 }}
                    whileTap={{ scale: isSearching ? 1 : 0.9 }}
                    className="ml-3"
                  >
                    <Button
                      onClick={handleSearch}
                      disabled={!searchQuery.trim() || isSearching}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                    >
                      {isSearching ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span className="ml-2 font-medium">Searching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span className="ml-2 font-medium">Search</span>
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Search Error */}
              {searchError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                  <div>
                    <p className="text-red-800 font-medium">Search Error</p>
                    <p className="text-red-600 text-sm">{searchError}</p>
                  </div>
                </motion.div>
              )}

              {/* Search Suggestions */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: searchQuery && !isSearching ? 1 : 0,
                  y: searchQuery && !isSearching ? 0 : 10,
                }}
                className="mt-4 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden"
              >
                {searchQuery && !isSearching && (
                  <div className="p-4">
                    <div className="text-sm text-gray-600 mb-2">
                      Quick suggestions:
                    </div>
                    <div className="space-y-2">
                      {[
                        `${searchQuery} LinkedIn`,
                        `${searchQuery} email`,
                        `${searchQuery} contact info`,
                      ].map((suggestion, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setSearchQuery(suggestion)}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          whileHover={{ scale: 1.02 }}
                        >
                          <Search className="w-4 h-4 inline mr-2 text-gray-400" />
                          {suggestion}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>

            {/* Search Results Display */}
            {searchResults && (
              <motion.div
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      Search Results
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {searchResults.metadata?.totalResults || searchResults.results?.length || 0} Results
                      </Badge>
                      <Badge variant="outline" className="text-gray-600">
                        {searchResults.metadata?.searchTime || "N/A"}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Results Grid */}
                  {searchResults.results && searchResults.results.length > 0 ? (
                    <div className="space-y-4">
                      {searchResults.results.map((person, index) => (
                        <motion.div
                          key={person.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h4 className="text-lg font-semibold text-gray-900">{person.name}</h4>
                                {person.verified && (
                                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                                    Verified
                                  </Badge>
                                )}
                              </div>
                              <p className="text-gray-600 mb-2">{person.title} at {person.company}</p>
                              <p className="text-gray-500 text-sm mb-3">{person.location}</p>
                              
                              {/* Display raw text if available */}
                              {person.rawText && (
                                <div className="mb-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                                  <p className="text-sm text-gray-700 italic">"{person.rawText}"</p>
                                </div>
                              )}
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                <div className="flex items-center text-gray-600">
                                  <Mail className="w-4 h-4 mr-2" />
                                  {person.email}
                                </div>
                                {person.phone && (
                                  <div className="flex items-center text-gray-600">
                                    <Phone className="w-4 h-4 mr-2" />
                                    {person.phone}
                                  </div>
                                )}
                                {person.linkedin && (
                                  <div className="flex items-center text-blue-600">
                                    <Users className="w-4 h-4 mr-2" />
                                    <a 
                                      href={person.linkedin} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="hover:underline"
                                    >
                                      LinkedIn Profile
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="flex items-center space-x-1 mb-2">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm font-medium">{person.accuracy}%</span>
                              </div>
                              <div className="text-xs text-gray-500">
                                Sources: {person.sources?.join(", ")}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No results found for this search.
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Search History */}
            <motion.div variants={itemVariants} className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">
                  Search History
                </h3>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  {searchHistory.length} searches
                </Badge>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {searchHistory.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -100, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                        selectedHistory === item.id
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300/60 shadow-lg"
                          : "bg-white/80 backdrop-blur-md border-gray-200/60 hover:border-blue-300/60 hover:shadow-lg"
                      }`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      onClick={() => {
                        setSelectedHistory(item.id);
                        if (item.results) {
                          setSearchResults(item.results);
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                                selectedHistory === item.id
                                  ? "bg-gradient-to-br from-blue-500 to-purple-500"
                                  : "bg-gray-100 group-hover:bg-blue-100"
                              }`}
                            >
                              {(() => {
                                const TabIcon = searchTabs.find(
                                  (tab) => tab.id === item.type
                                )?.icon;
                                return TabIcon ? (
                                  <TabIcon
                                    className={`w-4 h-4 ${
                                      selectedHistory === item.id
                                        ? "text-white"
                                        : "text-gray-600"
                                    }`}
                                  />
                                ) : null;
                              })()}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {
                                searchTabs.find((tab) => tab.id === item.type)
                                  ?.label
                              }
                            </Badge>
                            {item.results && (
                              <Badge
                                variant="secondary"
                                className="text-xs ml-2 bg-green-100 text-green-800"
                              >
                                Results Available
                              </Badge>
                            )}
                          </div>
                          <p className="text-lg font-semibold text-gray-800 mb-2">
                            {item.query}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {item.timestamp.toLocaleString()}
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <motion.button
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              toggleFavorite(item.id);
                            }}
                            className={`p-2 rounded-lg transition-colors ${
                              item.isFavorite
                                ? "text-yellow-500 hover:text-yellow-600"
                                : "text-gray-400 hover:text-yellow-500"
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Star
                              className={`w-4 h-4 ${
                                item.isFavorite ? "fill-current" : ""
                              }`}
                            />
                          </motion.button>
                          <motion.button
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation();
                              deleteHistory(item.id);
                            }}
                            className="p-2 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.main>
        </div>
      </div>
    </div>
  );
}
