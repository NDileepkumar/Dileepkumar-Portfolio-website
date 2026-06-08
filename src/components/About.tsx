"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { BookOpen, GraduationCap, Briefcase, TrendingUp, Sparkles, Award } from "lucide-react";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "Pondicherry University",
      period: "2019 - 2021",
      highlight: "Specialization in systems analysis, process workflows, and business intelligence models.",
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "Pondicherry University",
      period: "2016 - 2019",
      highlight: "Foundation in finance, business mathematics, ledger structures, and organizational logic.",
    },
  ];

  const strategicEdges = [
    {
      title: "Business-Aligned Engineering",
      desc: "Armed with an MBA & B.Com, I bridge the gap between technical backend implementation and corporate business models.",
      icon: TrendingUp,
      color: "text-emerald-500 bg-emerald-500/10",
    },
    {
      title: "Clean Architecture Focus",
      desc: "Specialized in solid .NET structures, clean repository patterns, and modular API structures that scale with business growth.",
      icon: Briefcase,
      color: "text-primary bg-primary/10",
    },
    {
      title: "Agile Project Delivery",
      desc: "Deep experience working in Sprint-driven environments, actively participating in scrum, sprint planning, and retro sessions.",
      icon: Sparkles,
      color: "text-blue-500 bg-blue-500/10",
    },
    {
      title: "SQL & Performance Tuning",
      desc: "Proficient in stored procedures, schema design, and index optimization, reducing query response times significantly.",
      icon: Award,
      color: "text-secondary bg-secondary/10",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20 border-y border-slate-100 dark:border-slate-800/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 dark:bg-secondary/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary text-xs font-mono font-extrabold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              Professional Background
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-slate-500 dark:text-slate-400 text-base sm:text-lg">
              Understanding the intersection of clean software architecture and real-world business systems.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Summary & Strategic Edge */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div variants={itemVariants} className="glass-card p-6 sm:p-8 rounded-2xl border flex flex-col gap-5">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Professional Summary
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  I am a results-oriented **Software Developer** with **2.5+ years of experience** designing, engineering, and maintaining high-speed enterprise applications. My technical expertise spans **C#**, **.NET Core**, **ASP.NET MVC**, **ASP.NET Web API**, and **MS SQL Server**. 
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  Having a unique combined background in **Business (MBA)** and **Commerce (B.Com)**, I possess an exceptional advantage: I don't just write code; I design systems that optimize business logic, automate complex company workflows, and safeguard enterprise data. I thrive in Agile/Scrum teams and enjoy solving intricate database bottleneck challenges.
                </p>
              </motion.div>

              {/* Strategic Value Grid */}
              <div className="space-y-4">
                <motion.h4 variants={itemVariants} className="text-md font-mono font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-2">
                  My Strategic Value
                </motion.h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {strategicEdges.map((edge, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="glass-card p-5 rounded-2xl border flex gap-4 items-start"
                    >
                      <div className={`p-2.5 rounded-xl ${edge.color} shrink-0`}>
                        <edge.icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h5 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                          {edge.title}
                        </h5>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                          {edge.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Education Timeline */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div variants={itemVariants} className="glass-card p-6 sm:p-8 rounded-2xl border flex flex-col gap-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <GraduationCap className="w-5.5 h-5.5 text-primary dark:text-secondary" />
                  Education
                </h3>
                
                <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800/80 space-y-8">
                  {education.map((edu, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[31px] top-1.5 p-1 rounded-full bg-slate-50 dark:bg-[#08090c]">
                        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h4 className="font-extrabold text-slate-800 dark:text-slate-100 text-base">
                            {edu.degree}
                          </h4>
                          <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary rounded-full border border-primary/20 dark:border-secondary/20">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {edu.institution}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                          {edu.highlight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
