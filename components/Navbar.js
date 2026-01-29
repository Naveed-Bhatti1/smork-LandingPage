"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = sectionId === "hero" ? -120 : -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  // Animation variants
  const navbarVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
        delay: 0.2,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const mobileItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="shadow-md py-4 px-6 md:px-10 fixed top-1 left-2 right-2 bg-white/50 text-slate-800 backdrop-blur-xl z-50 mx-auto rounded-xl md:rounded-3xl md:w-2/3"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          onClick={() => scrollToSection("hero")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="text-3xl md:text-4xl font-bold cursor-pointer"
        >
          <motion.span
            animate={{
              color: ["#2F9AF8", "#3b82f6", "#2F9AF8"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            SM
          </motion.span>
          ORK
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-lg font-medium">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer transition duration-300 relative"
            >
              <span
                className={`transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-[#2F9AF8] font-bold"
                    : "hover:text-[#2F9AF8]"
                }`}
              >
                {item.name}
              </span>

              {/* Animated Underline */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2F9AF8]"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <motion.button
          onClick={() => scrollToSection("pricing")}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#1e293b",
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:block bg-[#2F9AF8] text-white px-6 py-3 rounded-xl transition duration-300 font-semibold"
        >
          Get Started
        </motion.button>

        {/* Mobile Toggle */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-slate-800"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="lg:hidden overflow-hidden"
          >
            <ul className="flex flex-col gap-4 mt-6">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => scrollToSection(item.id)}
                  whileTap={{ scale: 0.98, x: 5 }}
                  className={`cursor-pointer transition py-2 border-b border-slate-200 last:border-0 ${
                    activeSection === item.id ? "text-[#2F9AF8] font-bold" : ""
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSectionMobile"
                      className="h-0.5 bg-[#2F9AF8] mt-2"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.li>
              ))}
            </ul>
            <motion.button
              onClick={() => scrollToSection("pricing")}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: menuItems.length * 0.1 + 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 mb-4 bg-[#2F9AF8] text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition font-semibold"
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
