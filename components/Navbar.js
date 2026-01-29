"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const menuItems = [
    { name: "Home", id: "hero" },
    { name: "Features", id: "features" },
    { name: "Benefits", id: "benefits" },
    { name: "Working", id: "working" },
    { name: "Pricing", id: "pricing" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      // Find which section is currently in view
      for (let i = menuItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(menuItems[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(menuItems[i].id);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = sectionId === "hero" ? -120 : -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
      
      setIsOpen(false);
    }
  };

  return (
    <nav className="shadow-md py-4 px-6 md:px-10 fixed top-1 left-2 right-2 md:left-0 md:right-0 bg-white/50 text-slate-800 backdrop-blur-xl z-50 w-full md:w-2/3 mx-auto rounded-3xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1
          onClick={() => scrollToSection("hero")}
          className="text-3xl md:text-4xl font-bold cursor-pointer"
        >
          <span className="text-[#2F9AF8]">SM</span>ORK
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-lg font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer transition duration-300 ${
                activeSection === item.id
                  ? "text-[#2F9AF8] font-bold scale-110"
                  : "hover:text-[#2F9AF8] hover:scale-110"
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollToSection("pricing")}
          className="hidden lg:block bg-[#2F9AF8] hover:bg-slate-800 cursor-pointer hover:scale-110 text-white px-6 py-3 rounded-xl transition duration-300 font-semibold"
        >
          Get Started
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-800"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-6 pb-4">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer transition py-2 border-b border-slate-200 last:border-0 ${
                  activeSection === item.id ? "text-[#2F9AF8] font-bold" : ""
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <button
            onClick={() => scrollToSection("pricing")}
            className="w-full mt-4 bg-[#2F9AF8] text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition font-semibold"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;