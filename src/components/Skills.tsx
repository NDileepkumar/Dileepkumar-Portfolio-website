"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Code2, Database, Layout, ShieldAlert, Cpu } from "lucide-react";

type Skill = {
  name: string;
  level: number; // Percentage
  status: "Core Expert" | "Advanced" | "Proficient" | "Familiar";
};

type SkillCategories = {
  [key: string]: {
    icon: React.ComponentType<any>;
    skills: Skill[];
  };
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("backend");

  const categories: SkillCategories = {
    backend: {
      icon: Cpu,
      skills: [
        { name: "C# Language", level: 92, status: "Core Expert" },
        { name: ".NET Core / .NET 6+", level: 90, status: "Core Expert" },
        { name: "ASP.NET Web API", level: 92, status: "Core Expert" },
        { name: "ASP.NET MVC", level: 88, status: "Advanced" },
      ],
    },
    database: {
      icon: Database,
      skills: [
        { name: "MS SQL Server", level: 90, status: "Core Expert" },
        { name: "Database Design & Indexing", level: 86, status: "Advanced" },
        { name: "Stored Procedures & Functions", level: 88, status: "Advanced" },
        { name: "Swagger / OpenAPI Documentation", level: 92, status: "Core Expert" },
        { name: "Postman (API Testing)", level: 90, status: "Core Expert" },
      ],
    },
    frontend: {
      icon: Layout,
      skills: [
        { name: "React.js", level: 82, status: "Advanced" },
        { name: "JavaScript (ES6+)", level: 85, status: "Advanced" },
        { name: "HTML5 & CSS3", level: 88, status: "Advanced" },
      ],
    },
    tools: {
      icon: Code2,
      skills: [
        { name: "Git Version Control", level: 88, status: "Advanced" },
        { name: "GitLab CI/CD Basics", level: 80, status: "Proficient" },
        { name: "Azure Basics (App Services, SQL)", level: 75, status: "Proficient" },
        { name: "Agile & Scrum Methodologies", level: 90, status: "Core Expert" },
      ],
    },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Core Expert":
        return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
      case "Advanced":
        return "text-primary bg-primary/10 border-primary/20";
      case "Proficient":
        return "text-secondary bg-secondary/10 border-secondary/20";
      default:
        return "text-slate-500 bg-slate-500/10 border-slate-500/20";
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/3 dark:bg-secondary/1 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary text-xs font-mono font-extrabold uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" />
              Technical Competence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Skills & <span className="text-gradient">Proficiencies</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg">
              A comprehensive view of my enterprise .NET engineering stack and full-stack capabilities.
            </p>
          </div>

          {/* Interactive Navigation Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {Object.entries(categories).map(([key, category]) => {
              const Icon = category.icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 scale-100 active:scale-97 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-md shadow-primary/15 dark:shadow-secondary/10"
                      : "bg-var(--card-bg) text-slate-600 dark:text-slate-350 border-slate-200 dark:border-slate-800 hover:border-primary/40 dark:hover:border-secondary/40"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="capitalize">{key === "database" ? "APIs & Databases" : key}</span>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="max-w-4xl mx-auto min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {categories[activeTab].skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="glass-card p-6 rounded-2xl border flex flex-col justify-between space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-slate-800 dark:text-slate-100 text-base">
                        {skill.name}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${getStatusColor(skill.status)}`}>
                        {skill.status}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 font-mono">
                        <span>Proficiency Level</span>
                        <span className="font-bold text-primary dark:text-secondary">{skill.level}%</span>
                      </div>
                      
                      {/* Modern Progress Bar */}
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-850 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
