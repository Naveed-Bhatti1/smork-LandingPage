"use client";

import Image from "next/image";
import { Pencil, Users, Rocket, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Working = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    {
      number: 1,
      icon: <Pencil size={40} />,
      emoji: "✏️",
      label: "Create",
      title: "Set Up Your Workspace",
      description:
        "Sign up for free and create your first project in seconds. Customize boards, lists, and workflows to match how your team works.",
      gradient: "from-[#2F9AF8] to-blue-600",
      img: "/Step 1.jpeg",
    },
    {
      number: 2,
      icon: <Users size={40} />,
      emoji: "👥",
      label: "Invite",
      title: "Add Your Team",
      description:
        "Invite team members via email or link. Set permissions and roles to keep your projects secure and organized.",
      gradient: "from-purple-500 to-purple-700",
      img: "/Step 2.jpeg",
    },
    {
      number: 3,
      icon: <Rocket size={40} />,
      emoji: "🚀",
      label: "Launch",
      title: "Start Collaborating",
      description:
        "Create tasks, assign work, track progress, and celebrate wins together. Watch productivity soar.",
      gradient: "from-[#2F9AF8] to-blue-600",
      img: "/Step 3.jpeg",
    },
  ];

  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Container for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Individual step card variants
  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  // Number badge variants
  const badgeVariants = {
    hidden: { 
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
        delay: 0.3,
      },
    },
  };

  // Image fade variants
  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
      },
    },
  };

  return (
    <section
      id="working"
      ref={sectionRef}
      className="py-20 bg-linear-to-b from-white to-[#f9fafb]"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
          >
            Get started in minutes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            No complicated setup. Start managing projects in 3 simple steps.
          </motion.p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line - Desktop Only with Draw Animation */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 px-32">
            <div className="relative h-1">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ 
                  duration: 1.5,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
                style={{ originX: 0 }}
                className="absolute inset-0 bg-linear-to-r from-[#2F9AF8] via-purple-500 to-[#2F9AF8] opacity-20 rounded-full"
              ></motion.div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ 
                  duration: 1.5,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
                style={{ originX: 0 }}
                className="absolute inset-0 border-t-2 border-dashed border-blue-300"
              ></motion.div>
            </div>
          </div>

          {/* Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-3 gap-12 lg:gap-8"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={stepVariants}
                className="relative"
              >
                {/* Step Card */}
                <motion.div
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full"
                >
                  {/* Number Badge */}
                  <motion.div
                    variants={badgeVariants}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                    className={`
                      absolute -top-10 left-1/2 transform -translate-x-1/2
                      w-20 h-20 rounded-full
                      bg-linear-to-br ${step.gradient}
                      flex items-center justify-center
                      shadow-xl z-10
                      ring-4 ring-white
                      cursor-pointer
                    `}
                  >
                    <span className="text-white text-2xl font-bold">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="mt-12 text-center">
                    {/* Emoji with bounce */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                        delay: 0.5 + index * 0.3,
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                      className="text-5xl mb-4 inline-block cursor-pointer"
                    >
                      {step.emoji}
                    </motion.div>

                    {/* Label */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 0.6 + index * 0.3 }}
                      className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3"
                    >
                      {step.label}
                    </motion.p>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 0.7 + index * 0.3 }}
                      className="text-2xl font-bold text-slate-800 mb-4"
                    >
                      {step.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 0.8 + index * 0.3 }}
                      className="text-slate-600 leading-relaxed mb-6"
                    >
                      {step.description}
                    </motion.p>

                    {/* Screenshot/Mockup with fade */}
                    <motion.div
                      variants={imageVariants}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                      className="mt-6 rounded-xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm"
                    >
                      <Image
                        src={step.img}
                        width={400}
                        height={250}
                        alt={step.title}
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Mobile Arrow with pulse animation */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={isInView ? { 
                      opacity: 1, 
                      y: 0,
                    } : { 
                      opacity: 0, 
                      y: -20 
                    }}
                    transition={{ 
                      delay: 0.9 + index * 0.3,
                      duration: 0.5
                    }}
                    className="lg:hidden flex justify-center my-8"
                  >
                    <motion.div
                      whileInView={{
                        y: [0, 10, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className="text-blue-400" size={32} />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Working;