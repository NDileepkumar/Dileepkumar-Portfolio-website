"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Server, Database, Code, Cpu } from "lucide-react";

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

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const titles = [
    "Software Developer (.NET)",
    "Backend Architect",
    "API Specialist",
    "SQL Optimization Expert",
  ];

  // Typing effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let isDeleting = false;
    let charIndex = 0;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const pauseDelay = 2000;

    const type = () => {
      const activeTitle = titles[textIndex];
      if (!isDeleting) {
        setCurrentText(activeTitle.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === activeTitle.length) {
          isDeleting = true;
          timer = setTimeout(type, pauseDelay);
        } else {
          timer = setTimeout(type, typingSpeed);
        }
      } else {
        setCurrentText(activeTitle.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          setTextIndex((prev) => (prev + 1) % titles.length);
          timer = setTimeout(type, typingSpeed);
        } else {
          timer = setTimeout(type, erasingSpeed);
        }
      }
    };

    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, [textIndex]);

  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projects = document.getElementById("projects");
    if (projects) {
      projects.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center pt-24 pb-16 overflow-hidden tech-grid-overlay"
    >
      {/* Decorative Animated Blurred Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-secondary/15 dark:bg-secondary/5 blur-3xl animate-spin-slow z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 dark:border-secondary/20 bg-primary/5 dark:bg-secondary/5 text-primary dark:text-secondary text-xs font-mono font-bold uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for New Opportunities
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
              >
                Hi, I'm <span className="text-gradient">N. Dileep Kumar</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 h-10 flex items-center"
              >
                <span>Professional&nbsp;</span>
                <span className="text-primary dark:text-secondary font-mono border-r-2 border-primary dark:border-secondary pr-1 animate-pulse">
                  {currentText}
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-600 dark:text-slate-350 text-base sm:text-lg max-w-xl leading-relaxed"
              >
                A results-oriented Software Developer with 2.5+ years of specialized experience in designing and developing robust, high-performance enterprise applications using C#, .NET Core, ASP.NET MVC, ASP.NET Web API, and MS SQL Server. Specializing in secure REST APIs, scalable database architectures, and smooth third-party API integrations.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 dark:hover:shadow-secondary/25 transition-all duration-300 scale-100 hover:scale-103 cursor-pointer"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3.5 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-300 scale-100 hover:scale-103 cursor-pointer border border-transparent dark:border-slate-700/60"
              >
                View Projects
              </button>

              <a
                href="https://www.linkedin.com/in/n-dileep-kumar-04b352287"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 transition-all border border-transparent dark:border-slate-700/60"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#0077b5]" />
              </a>

              <a
                href="https://github.com/dileepkumarn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 transition-all border border-transparent dark:border-slate-700/60"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800/80 max-w-lg"
            >
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-primary dark:text-secondary font-mono">
                  2.5+
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Years Experience
                </p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-primary dark:text-secondary font-mono">
                  4+
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Enterprise Apps
                </p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-primary dark:text-secondary font-mono">
                  4
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Certifications
                </p>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual (Profile Image) */}
          <div className="lg:col-span-5 flex justify-center items-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-[420px] aspect-square rounded-2xl glass-card p-2 flex flex-col justify-between border-2 relative overflow-hidden group"
            >
              {/* Mesh background filter for the card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 pointer-events-none group-hover:scale-110 transition-transform duration-700" />

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src="/dileep-image.jpg"
                  alt="N. Dileep Kumar"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
