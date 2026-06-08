"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, ChevronRight, Award, Zap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer (.NET Core / SQL Server)",
      company: "Enterprise Software Solutions (Lenovo & SPL Contracts)",
      period: "2024 - Present",
      description: "Spearheaded the engineering of high-performance backend layers, secure database architectures, and core transactional APIs for prominent enterprise suites, including project tracking networks and corporate governance security frameworks.",
      bullets: [
        "Architected and implemented 20+ secure REST APIs using .NET Core, C#, and Swagger, improving data exchange efficiencies between frontend layers and backend databases.",
        "Optimized MS SQL Server procedures, schemas, and non-clustered indexing setups, delivering a measurable 35% speedup in high-cost data transactions.",
        "Engineered strict Role-Based Access Control (RBAC) layers and document audit state machines for compliance tracking.",
        "Collaborated daily in an Agile/Scrum framework, contributing to sprint planning, stand-ups, and post-sprint retrospectives to deliver high-quality increments.",
      ],
      tech: [".NET Core", "C#", "SQL Server", "REST APIs", "Swagger", "Git", "Agile & Scrum"],
    },
    {
      role: "Full-Stack Software Developer",
      company: "Evoltec Solutions",
      period: "2023 - 2024",
      description: "Acted as a core full-stack developer in designing and building a unified CRM & HRMS business orchestration platform. Engineered robust server controllers and responsive front-end customer layouts.",
      bullets: [
        "Created secure authentication pipelines utilizing JSON Web Tokens (JWT), password salting configurations, and route authorization guards.",
        "Developed full payroll calculations and holiday/leave management logic inside Node.js and Express.js REST services.",
        "Designed and implemented interactive React-based customer transaction pipelines and real-time dashboard analytics cards.",
        "Managed database relational structures using SQL Server, building high-speed complex views to feed monthly dashboard reviews.",
      ],
      tech: ["Node.js", "Express.js", "React.js", "SQL Server", "JWT Auth", "GitLab"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/3 dark:bg-primary/1 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary text-xs font-mono font-extrabold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              Career Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg">
              A history of professional execution, database optimizations, and agile web application delivery.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="max-w-4xl mx-auto relative pl-4 sm:pl-8 border-l border-slate-200 dark:border-slate-800/80 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Timeline connector circle */}
                <div className="absolute -left-[25px] sm:-left-[41px] top-1.5 p-1 rounded-full bg-slate-50 dark:bg-[#08090c]">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <Zap className="w-2 h-2 text-white" />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="glass-card p-6 sm:p-8 rounded-3xl border space-y-6">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-800 dark:text-slate-100">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-primary dark:text-secondary mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-450 dark:text-slate-500 self-start sm:self-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-1.5 px-3 rounded-xl shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Card Description */}
                  <p className="text-slate-600 dark:text-slate-350 text-sm sm:text-base leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Contributions bullets */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-550 uppercase tracking-widest flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      Key Milestones & Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex gap-2.5 text-sm text-slate-650 dark:text-slate-350 leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-primary dark:text-secondary shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-850">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
