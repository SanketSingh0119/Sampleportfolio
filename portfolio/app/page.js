'use client';
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  const [isDarkmode, setIsDarkMode] = useState(false); // ✅ Fix camelCase

  // Load theme from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isDarkmode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("theme");
      }
    }
  }, [isDarkmode]);

  return (
    <>
      <Navbar isDarkmode={isDarkmode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkmode={isDarkmode} />
      <About isDarkmode={isDarkmode} />
      <Services isDarkmode={isDarkmode} />
      <Work isDarkmode={isDarkmode} />
      <Contact isDarkmode={isDarkmode} />
      <Footer isDarkmode={isDarkmode} />
    </>
  );
}

