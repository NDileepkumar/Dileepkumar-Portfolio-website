"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Calendar, Database, Shield, CheckCircle, ExternalLink, X, Cpu } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  tech: string[];
  summary: string;
  description: string;
  responsibilities: string[];
  databaseHighlights: string[];
  metrics: string[];
  accentColor: string;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsList: Project[] = [
    {
      id: 1,
      title: "SPL – Project Management System",
      category: "Enterprise Workflow Suite",
      tech: [".NET Core", "C#", "SQL Server", "REST APIs", "Swagger"],
      summary: "An enterprise-grade project tracking suite designed to streamline resource mapping, sprint schedules, and project workflow milestones.",
      description: "SPL serves as the central administrative nervous system for orchestrating large-scale team operations. It facilitates high-speed tracking of task structures, employee billing allocations, budget burned hours, and delivery deliverables. My main engineering task was to design robust, clean web services and clean DB schemas capable of managing thousands of audit lines daily.",
      responsibilities: [
        "Architected and developed 20+ secure REST APIs using .NET Core and C#, adhering to strict REST guidelines and clean controller structures.",
        "Designed the database architecture, setting up relational schemas, constraints, and complex foreign key tracking with 0 data inconsistencies.",
        "Implemented transactional business workflows, integrating asynchronous background runners to update task status trees.",
        "Integrated custom internal services, linking identity controls with billing registries for seamless access.",
      ],
      databaseHighlights: [
        "Implemented SQL Server Non-Clustered Indexes on highly filtered task columns, boosting query retrievals by 35%.",
        "Configured custom database transactions ensuring ACID compliance across multi-table project log insertions.",
      ],
      metrics: [
        "REST API Average Response Time: <25ms",
        "Data Auditing Speedup: 35%",
        "Sprint Task Accuracy: 100%",
      ],
      accentColor: "from-blue-500 to-indigo-500",
    },
    {
      id: 2,
      title: "Lenovo Digital Security 2.0",
      category: "High-Security Auditing",
      tech: ["ASP.NET", "C#", "SQL Server", "Stored Procedures", "RBAC"],
      summary: "A high-security backend platform managing digital credentials, policy auditing, and role-based access control clearances.",
      description: "Digital Security 2.0 is a highly restricted, high-security audit platform built to control digital identities, device security certificates, and policy adherence reports. The platform tracks sensitive state shifts and records strict security compliance flags for device rollouts. I focused on making the security modules airtight and queries extremely optimized.",
      responsibilities: [
        "Engineered secure, role-based backend authorization modules (RBAC), establishing granular access privileges for admin, auditor, and employee profiles.",
        "Created complex database stored procedures and triggers to record all structural security changes in absolute safety.",
        "Enhanced core application functionalities, migrating slow procedural C# routines into highly optimized SQL logic.",
        "Implemented rigorous payload validation mechanisms to screen and protect incoming API queries from injection attacks.",
      ],
      databaseHighlights: [
        "Migrated raw ad-hoc database queries to parameterized, pre-compiled Stored Procedures, dropping CPU utilization spikes by 20%.",
        "Designed append-only security logs with custom DB triggers to prevent tampering or unauthorized changes.",
      ],
      metrics: [
        "Security Breach Incidents: 0",
        "Stored Procedure Query Speedup: 40%",
        "Auditing Trail Accuracy: 100%",
      ],
      accentColor: "from-emerald-500 to-teal-500",
    },
    {
      id: 3,
      title: "Lenovo AMC 2.0 (ISO Management Portal)",
      category: "Compliance & Governance Portal",
      tech: ["ASP.NET", "C#", "SQL Server", "Approval Workflows", "Performance Optimization"],
      summary: "An ISO compliance portal facilitating continuous audit logs, document version tracking, and automated approval workflows.",
      description: "AMC 2.0 is a critical compliance monitoring portal mapped to ISO quality standards. It manages document approvals, audit scheduling, non-conformance logging, and action plans. My work ensured that transactional states transitioned flawlessly and high-volume database lookups remained lightning-fast.",
      responsibilities: [
        "Developed full compliance management modules tracking audit parameters, version logs, and regulatory document life cycles.",
        "Designed database architectures supporting complex recursive document hierarchies (parent-child version trackers).",
        "Implemented multi-stage review and approval workflows with email alerts, managing state transitions inside SQL tables.",
        "Diagnosed database bottlenecks, optimized high-cost table scans, and rebuilt indexing maps for reporting pipelines.",
      ],
      databaseHighlights: [
        "Designed optimized SQL index strategies and partition models for compliance log tables containing millions of historical records.",
        "Restructured SQL approval states into a finite state machine representation, ensuring data locks are released instantly.",
      ],
      metrics: [
        "Audit Log Report Generation: Under 2 seconds",
        "Compliance Workflow Delays: Reduced by 50%",
        "SQL Deadlocks Encountered: 0 in production",
      ],
      accentColor: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Evoltec CRM & HRMS",
      category: "Full-Stack Business Suite",
      tech: ["Node.js", "Express.js", "React.js", "SQL Server", "JWT Auth"],
      summary: "A unified enterprise platform integrating customer pipelines with full employee lifecycle management, payroll, and logs.",
      description: "This comprehensive enterprise solution merges customer relation pipelines (CRM) with internal human resource management systems (HRMS). It coordinates client pipeline tracking alongside staff payroll, attendance records, leave management, and employee onboarding. I acted as a full-stack engineer, building robust REST APIs and responsive visual displays.",
      responsibilities: [
        "Developed clean Node.js / Express.js REST services handling payroll parameters, leave matrices, and contact details.",
        "Implemented full OAuth / JWT-based authentication pipelines featuring salted hashing, route guards, and token expiry cycles.",
        "Created dynamic CRM customer cards, transaction dashboards, and active pipeline visualizer grids.",
        "Designed and refined highly responsive React frontend pages, loading dense visual grids in under 300ms.",
      ],
      databaseHighlights: [
        "Optimized relational schemas connecting employee attendance matrices with complex variable-rate payroll rules.",
        "Constructed complex SQL views aggregating employee historical logs to speed up monthly reports.",
      ],
      metrics: [
        "Payroll Compilation Duration: Down from 4 hours to 10 minutes",
        "Client Response Speeds: ~150ms",
        "Mobile Rendering Lighthouse Score: 95+",
      ],
      accentColor: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20 border-y border-slate-100 dark:border-slate-800/40">
      <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-primary/5 dark:bg-primary/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary text-xs font-mono font-extrabold uppercase tracking-wider">
              <FolderGit2 className="w-3.5 h-3.5" />
              My Contributions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Enterprise <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg">
              A detailed showcase of business-critical systems I've engineered and optimized.
            </p>
          </div>

          {/* Projects Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectsList.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                className="glass-card rounded-2xl border flex flex-col justify-between overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Accent Header */}
                <div className={`h-2 bg-gradient-to-r ${project.accentColor}`} />

                <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-primary dark:text-secondary uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Technologies Pills */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-850/80 text-slate-600 dark:text-slate-350 rounded-full border border-slate-200 dark:border-slate-800/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Learn More Trigger */}
                    <div className="flex items-center text-xs font-bold text-primary dark:text-secondary group-hover:translate-x-1.5 transition-transform duration-300 gap-1 mt-2">
                      Explore Technical Architecture
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Immersive technical fullscreen detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass-panel w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border shadow-2xl border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-8 bg-white dark:bg-slate-950"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-primary dark:text-secondary uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-slate-100">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Detailed descriptions */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-sm font-mono font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Project Architecture Overview
                    </h4>
                    <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Core Technical Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-mono font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Technical Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-slate-655 dark:text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* DB / Performance optimizations */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-mono font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <Database className="w-4 h-4 text-primary dark:text-secondary" />
                      Database & API Performance tuning
                    </h4>
                    <ul className="space-y-2 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-900">
                      {selectedProject.databaseHighlights.map((high, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-350">
                          <span className="text-primary dark:text-secondary font-bold font-mono shrink-0">0{idx + 1}.</span>
                          <span>{high}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column - Stats & Tech */}
                <div className="space-y-6">
                  {/* Tech stack box */}
                  <div className="glass-card p-5 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3">
                    <h4 className="text-xs font-mono font-extrabold text-slate-450 dark:text-slate-550 uppercase tracking-widest flex items-center gap-1">
                      <Cpu className="w-3.5 h-3.5 text-primary dark:text-secondary" />
                      Tech Architecture
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[10px] font-mono font-semibold bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics box */}
                  <div className="glass-card p-5 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-4">
                    <h4 className="text-xs font-mono font-extrabold text-slate-455 dark:text-slate-555 uppercase tracking-widest">
                      Performance Outcomes
                    </h4>
                    <div className="space-y-3">
                      {selectedProject.metrics.map((met, idx) => {
                        const parts = met.split(":");
                        return (
                          <div key={idx} className="flex flex-col border-b border-slate-100 dark:border-slate-900 pb-2 last:border-b-0 last:pb-0">
                            <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 font-mono">
                              {parts[0]}
                            </span>
                            <span className="text-sm font-extrabold text-primary dark:text-secondary font-mono">
                              {parts[1] || ""}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
