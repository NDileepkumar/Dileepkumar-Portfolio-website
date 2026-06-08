"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Copy, Check, Terminal } from "lucide-react";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactEmail = "dileep4245kumar@gmail.com";
  const contactPhone = "+91 88259 30327";

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate database insertion & API callback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 dark:bg-secondary/1 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary text-xs font-mono font-extrabold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Connect With <span className="text-gradient">Me</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg">
              Let's discuss how my enterprise .NET experience and SQL optimizations can support your team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            {/* Left side: Contact details and socials */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card p-6 sm:p-8 rounded-3xl border space-y-8">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-primary dark:text-secondary" />
                  Contact Registry
                </h3>

                <div className="space-y-6">
                  {/* Location Info */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary rounded-2xl shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider">
                        Office Location
                      </h4>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1">
                        Puducherry, India
                      </p>
                    </div>
                  </div>

                  {/* Email Info */}
                  <div className="flex gap-4 items-start group">
                    <div className="p-3 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary rounded-2xl shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider">
                        Direct Email Address
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 break-all select-all">
                          {contactEmail}
                        </span>
                        <button
                          onClick={() => handleCopy(contactEmail, "email")}
                          className="p-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-slate-500 hover:text-primary dark:hover:text-secondary cursor-pointer shrink-0 transition-colors"
                          aria-label="Copy Email"
                        >
                          {copiedField === "email" ? (
                            <Check className="w-3.5 h-3.5 text-green-500" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Phone Info */}
                  <div className="flex gap-4 items-start group">
                    <div className="p-3 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary rounded-2xl shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider">
                        Mobile Phone
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          {contactPhone}
                        </span>
                        <button
                          onClick={() => handleCopy(contactPhone, "phone")}
                          className="p-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-slate-500 hover:text-primary dark:hover:text-secondary cursor-pointer shrink-0 transition-colors"
                          aria-label="Copy Phone"
                        >
                          {copiedField === "phone" ? (
                            <Check className="w-3.5 h-3.5 text-green-500" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Integrations */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-850 space-y-4">
                  <h4 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-550 uppercase tracking-widest pl-1">
                    Enterprise Sync Networks
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://www.linkedin.com/in/n-dileep-kumar-04b352287"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-200 hover:border-primary/50 dark:hover:border-secondary/50 font-semibold text-sm transition-all duration-300 group"
                    >
                      <Linkedin className="w-4 h-4 text-[#0077b5]" />
                      LinkedIn
                    </a>

                    <a
                      href="https://github.com/dileepkumarn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-200 hover:border-primary/50 dark:hover:border-secondary/50 font-semibold text-sm transition-all duration-300 group"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="glass-card p-6 sm:p-8 rounded-3xl border">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/50 dark:bg-slate-900/20 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                            : "border-slate-200 dark:border-slate-800 focus:ring-primary/20 focus:border-primary dark:focus:border-secondary"
                        }`}
                        placeholder="N. Dileep Kumar"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 font-mono mt-0.5">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/50 dark:bg-slate-900/20 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                            : "border-slate-200 dark:border-slate-800 focus:ring-primary/20 focus:border-primary dark:focus:border-secondary"
                        }`}
                        placeholder="dileep@example.com"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 font-mono mt-0.5">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/50 dark:bg-slate-900/20 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.subject
                          ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                          : "border-slate-200 dark:border-slate-800 focus:ring-primary/20 focus:border-primary dark:focus:border-secondary"
                      }`}
                      placeholder="Opportunity / Project Collaboration"
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-500 font-mono mt-0.5">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/50 dark:bg-slate-900/20 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                          : "border-slate-200 dark:border-slate-800 focus:ring-primary/20 focus:border-primary dark:focus:border-secondary"
                      }`}
                      placeholder="Hi Dileep, I would like to discuss a Software Developer role..."
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 font-mono mt-0.5">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 dark:hover:shadow-secondary/25 transition-all scale-100 hover:scale-101 disabled:opacity-75 disabled:scale-100 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting Package...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Dispatch Message
                      </>
                    )}
                  </button>

                  {/* Success Banner */}
                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-600 dark:text-emerald-400 text-sm font-semibold text-center mt-4"
                      >
                        API payload dispatched successfully! Thank you, I will respond to your query shortly.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
