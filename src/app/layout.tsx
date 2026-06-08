import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "N. Dileep Kumar | Software Developer (.NET) | Backend Architect Portfolio",
  description: "Portfolio of N. Dileep Kumar, a results-oriented Software Developer (.NET) with 2.5+ years of experience designing and developing enterprise applications using C#, .NET Core, ASP.NET Web API, and SQL Server.",
  keywords: [
    "N. Dileep Kumar",
    "Software Developer",
    ".NET Developer",
    "C# Developer",
    "ASP.NET MVC",
    "ASP.NET Web API",
    "SQL Server",
    "React.js Developer",
    "Full Stack Developer",
    "Pondicherry University",
  ],
  authors: [{ name: "N. Dileep Kumar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#f8fafc] text-[#0f172a] dark:bg-[#08090c] dark:text-[#f1f5f9] transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
