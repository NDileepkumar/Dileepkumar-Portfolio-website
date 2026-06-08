"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";

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

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      setIsScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const sections = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.href.substring(1));
        if (el) {
          const rect = el.getBoundingClientRect();
          return {
            id: item.href.substring(1),
            // Offset to trigger earlier
            top: rect.top - 100,
            bottom: rect.bottom - 100,
          };
        }
        return null;
      }).filter(Boolean);

      const current = sections.find(
        (sec) => sec && sec.top <= 0 && sec.bottom > 0
      );
      if (current) {
        setActiveSection(current.id);
      } else if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-panel border-b bg-white/70 dark:bg-slate-950/70 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="p-2 rounded-lg bg-primary/10 dark:bg-secondary/10 group-hover:bg-primary/20 dark:group-hover:bg-secondary/20 transition-all duration-300">
              <Terminal className="w-5 h-5 text-primary dark:text-secondary" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-slate-800 dark:text-slate-100">
                Dileep
              </span>
              <span className="text-primary dark:text-secondary font-bold text-lg">.</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono ml-1 hidden sm:inline-block">
                dev
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 font-medium text-sm text-slate-600 dark:text-slate-300">
            {NAV_ITEMS.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(id)}
                  className={`px-3 py-2 rounded-full transition-all duration-200 cursor-pointer hover:text-primary dark:hover:text-secondary relative ${
                    isActive
                      ? "text-primary dark:text-secondary font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary dark:bg-secondary" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Tools */}
          <div className="hidden md:flex items-center gap-3">
            {/* Social Links */}
            <a
              href="https://github.com/dileepkumarn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-secondary hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/n-dileep-kumar-04b352287"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-secondary hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* Divider */}
            <div className="h-5 w-[1px] bg-slate-200 dark:bg-slate-800" />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-secondary hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850 transition-all"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 z-40 w-64 max-w-xs bg-white dark:bg-slate-950 shadow-xl border-l border-slate-200 dark:border-slate-800 p-6 transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="font-bold text-slate-800 dark:text-slate-100">
                Menu
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl transition-all cursor-pointer ${
                      isActive
                        ? "bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary font-bold"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-around">
              <a
                href="https://github.com/dileepkumarn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 w-full justify-center"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/n-dileep-kumar-04b352287"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 w-full justify-center"
              >
                <Linkedin className="w-5 h-5 text-[#0077b5]" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
