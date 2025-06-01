"use client";

//import { AuthLayout } from "@/components/layout/AuthLayout";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Demo } from "@/components/sections/Demo";
//import { Testimonials } from "@/components/sections/Testimonials";
import { GlobalReach } from "@/components/sections/GlobalReach";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/layout/Navigation";

export default function Home() {
  return (
    // <AuthLayout>
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-16">
          <Hero />
          <Features />
          <Demo />
          {/* <Testimonials /> */}
          <GlobalReach />
          <Footer />
        </main>
      </div>
    // </AuthLayout>
  );
}
