"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const Logos = [
    "/1-removebg-preview.png",
    "/2-removebg-preview.png",
    "/3-removebg-preview.png",
    "/4-removebg-preview.png",
    "/5-removebg-preview.png",
    "/6-removebg-preview.png",
    "/7-removebg-preview.png",
    "/8-removebg-preview.png",
    "/9-removebg-preview.png",
    "/10-removebg-preview.png",
    "/11-removebg-preview.png",
    "/12-removebg-preview.png",
  ];

  const invertIndexes = [0, 1, 2, 3, 5, 6, 8, 9];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1],
        delay: 0.5,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  // Counter Animation Component
  const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime;
      let animationFrame;

      if (!isInView) {
        setCount(0); // reset when out of view
        return;
      }

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1,
        );

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return (
      <span ref={ref}>
        {count}
        {suffix}
      </span>
    );
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8 + i * 0.1,
        ease: "easeOut",
      },
    }),
  };

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
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          whileInView={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          whileInView={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="relative container mx-auto px-4 pt-12 pb-20"
      >
        {/* Announcement Badge */}
        <motion.div
          variants={badgeVariants}
          className="flex mb-8 w-full justify-center"
        >
          <motion.div
            whileHover="hover"
            variants={badgeVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white shadow-lg hover:bg-white/30 transition-all duration-300 cursor-pointer"
          >
            <motion.div
              whileInView={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Sparkles size={16} className="text-yellow-300" />
            </motion.div>
            <span className="text-sm font-semibold">
              New: AI-Powered Task Suggestions
            </span>
            <motion.div
              whileInView={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <motion.h1
            variants={headingVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Everything you need,
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-slate-100"
            >
              one workspace
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-center text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Unite your team and AI to plan, organize, and complete work
          efficiently
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={() => scrollToSection("pricing")}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="group bg-white text-[#2F9AF8] px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-100 transition-all duration-300 shadow-2xl flex items-center gap-2"
          >
            Get Started Free
            <motion.div
              whileInView={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Hero Image */}
        <motion.div variants={imageVariants} className="max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-tl-full"
          >
            <Image
              src="/HeroImage.jpeg"
              width={1200}
              height={800}
              alt="Smork Dashboard Preview"
              className="w-full h-auto"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#2F9AF8]/20 to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Stats with Counter Animation */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 text-center">
          <motion.div
            custom={0}
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-4xl font-bold text-white mb-2"
            >
              <AnimatedCounter end={10} suffix="K+" />
            </motion.div>
            <div className="text-white/80 text-sm">Active Teams</div>
          </motion.div>
          <motion.div
            custom={1}
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-4xl font-bold text-white mb-2"
            >
              <AnimatedCounter end={98} suffix="%" />
            </motion.div>
            <div className="text-white/80 text-sm">Satisfaction Rate</div>
          </motion.div>
          <motion.div
            custom={2}
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-4xl font-bold text-white mb-2"
            >
              <AnimatedCounter end={50} suffix="+" />
            </motion.div>
            <div className="text-white/80 text-sm">Integrations</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Logo Scroll Section */}
      <div className="relative bg-slate-800/80 backdrop-blur-sm py-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="container mx-auto px-4 mb-4"
        >
          <p className="text-center text-white/60 text-sm uppercase tracking-wider">
            Trusted by teams at
          </p>
        </motion.div>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 items-center"
            whileInView={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* First set */}
            {Logos.map((logo, index) => (
              <motion.div
                key={`first-${index}`}
                className="shrink-0"
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  className={`${invertIndexes.includes(index) ? "invert" : ""} opacity-70 hover:opacity-100 transition-opacity`}
                  src={logo}
                  width={120}
                  height={60}
                  alt="Company Logo"
                />
              </motion.div>
            ))}
            {/* Duplicate set */}
            {Logos.map((logo, index) => (
              <motion.div
                key={`second-${index}`}
                className="shrink-0"
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  className={`${invertIndexes.includes(index) ? "invert" : ""} opacity-70 hover:opacity-100 transition-opacity`}
                  src={logo}
                  width={120}
                  height={60}
                  alt="Company Logo"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
