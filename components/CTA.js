"use client";

import { ArrowRight, Play, Lock, Zap, CreditCard } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {  margin: "-100px" });

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

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const trustBadgeVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.8 + i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const trustBadges = [
    {
      icon: <Lock size={20} />,
      text: "Bank-level security",
    },
    {
      icon: <Zap size={20} />,
      text: "Setup in 5 minutes",
    },
    {
      icon: <CreditCard size={20} />,
      text: "No credit card needed",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-linear-to-r from-[#3b82f6] via-purple-600 to-[#8b5cf6] overflow-hidden"
    >
      {/* Decorative Background Elements with Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative container mx-auto px-4 max-w-5xl text-center">
        {/* Heading with Text Reveal */}
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Ready to transform your workflow?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={subheadingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Join 10,000+ teams already using Smork to deliver projects faster
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={buttonContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <motion.button
            aria-label="Start Free Trial"
            variants={buttonVariants}
            onClick={() => scrollToSection("pricing")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white text-blue-600 px-10 py-4 rounded-2xl text-lg font-bold transition-all duration-150 shadow-2xl flex items-center gap-2 relative overflow-hidden"
          >
            {/* Pulse effect */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.5, 0, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute inset-0 bg-blue-400 rounded-2xl"
            />
            <span className="relative z-10">Start Free Trial</span>
            <motion.div
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>

          <motion.button
            aria-label="Schedule a Demo"
            variants={buttonVariants}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)" }}
            whileTap={{ scale: 0.98 }}
            className="group bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl text-lg font-bold hover:text-blue-600 transition-all duration-150 flex items-center gap-2"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <Play size={20} fill="currentColor" />
            </motion.div>
            Schedule a Demo
          </motion.button>
        </motion.div>

        {/* Small Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-white/80 text-sm mb-10"
        >
          No credit card required • 14-day free trial • Cancel anytime
        </motion.p>

        {/* Trust Badges with Slide-in Animation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={trustBadgeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="flex items-center gap-2 cursor-default"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              >
                {badge.icon}
              </motion.div>
              <span className="text-sm font-medium">{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;