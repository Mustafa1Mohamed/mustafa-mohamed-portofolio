// app/page.tsx
"use client";

import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/Projects";


export default function Page() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        <main>
          <Hero />
          <About />
          <ProjectsSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
