import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { Terminal, Mail } from "lucide-react";

// Custom SVG components for Brand Icons
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sections Flow */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />

      {/* Corporate Professional Footer */}
      <footer className="bg-slate-100 dark:bg-[#07080a] border-t border-slate-200 dark:border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-900 pb-8 mb-8">
            {/* Logo and Brand */}
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10 dark:bg-secondary/10">
                <Terminal className="w-5 h-5 text-primary dark:text-secondary" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-slate-800 dark:text-slate-100">
                  Dileep Kumar
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono ml-2">
                  Software Developer (.NET)
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <a href="#about" className="hover:text-primary dark:hover:text-secondary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary dark:hover:text-secondary transition-colors">Skills</a>
              <a href="#experience" className="hover:text-primary dark:hover:text-secondary transition-colors">Experience</a>
              <a href="#projects" className="hover:text-primary dark:hover:text-secondary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary dark:hover:text-secondary transition-colors">Contact</a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://github.com/dileepkumarn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-405 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-primary dark:hover:text-secondary transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/n-dileep-kumar-04b352287"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-405 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-primary dark:hover:text-secondary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
              </a>
            </div>
          </div>

          {/* Copyright notice */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500 gap-4">
            <p>
              &copy; {new Date().getFullYear()} N. Dileep Kumar. All rights reserved.
            </p>
            <p className="font-mono">
              Designed with &hearts; using Next.js &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
