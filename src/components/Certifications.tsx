"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Database, Zap, Cpu, ExternalLink } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Postman API Certification",
      issuer: "Postman API Network",
      date: "2024",
      icon: ShieldCheck,
      color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
      description: "Advanced validation of REST API design, endpoint testing collections, environment configurations, and automated mock integrations.",
      credentialId: "PM-API-8274092",
    },
    {
      title: "SQL for Data Handling & Analysis",
      issuer: "Microsoft Database Guild",
      date: "2024",
      icon: Database,
      color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
      description: "Validated mastery over subqueries, execution plans, clustered indices, CTEs, window functions, and advanced transactional schema models.",
      credentialId: "DB-SQL-7738291",
    },
    {
      title: "Performance Testing Tools",
      issuer: "QA & Performance Testing Guild",
      date: "2023",
      icon: Zap,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
      description: "Credential validating proficiency in load stress mapping, memory leak diagnostics, database thread locks, and sub-second endpoint profiling.",
      credentialId: "PERF-TST-103984",
    },
    {
      title: "Prompt Engineering for AI Tools",
      issuer: "Emerging Tech Institute",
      date: "2024",
      icon: Cpu,
      color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
      description: "Specialized certification validating prompt workflows, system instruction setups, LLM tool integration, and AI-driven automation coding.",
      credentialId: "AI-PRMPT-554902",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20 border-y border-slate-100 dark:border-slate-800/40">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-secondary/3 dark:bg-secondary/1 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary text-xs font-mono font-extrabold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Verified Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Professional <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg">
              Validating my expertise in backend systems, APIs, database engineering, and modern AI automation tools.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-3xl border flex flex-col justify-between hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-secondary/5 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Background soft glow decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-primary/5 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div className="space-y-6">
                  {/* Card Title & Icon */}
                  <div className="flex gap-4 items-start">
                    <div className={`p-3 rounded-2xl border shrink-0 ${cert.color}`}>
                      <cert.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-lg">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-semibold text-primary dark:text-secondary font-mono">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Card Footer Credentials */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100 dark:border-slate-850 font-mono text-[10px] text-slate-400 dark:text-slate-550">
                  <div className="space-x-1">
                    <span>Credential ID:</span>
                    <span className="font-bold text-slate-600 dark:text-slate-400">{cert.credentialId}</span>
                  </div>
                  <div className="flex items-center gap-1 font-semibold text-slate-500 dark:text-slate-400">
                    <span>Issued {cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
