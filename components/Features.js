"use client";

import {
  ChartColumn,
  ListChecks,
  UserRound,
  Zap,
  ArrowRight,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Cards = [
    {
      number: "01",
      title: "Smart Task Management",
      description:
        "Create, assign, and track tasks with drag-and-drop boards, lists, and timelines.",
      icon: <ListChecks size={40} />,
      gradient: "from-[#2F9AF8] to-blue-600",
    },
    {
      number: "02",
      title: "Team Collaboration",
      description:
        "Facilitate seamless communication with comments, mentions, and file sharing.",
      icon: <UserRound size={40} />,
      gradient: "from-purple-500 to-purple-700",
    },
    {
      number: "03",
      title: "Advanced Analytics",
      description:
        "Gain insights with real-time reporting, dashboards, and performance metrics.",
      icon: <ChartColumn size={40} />,
      gradient: "from-emerald-500 to-emerald-700",
    },
    {
      number: "04",
      title: "Automation & Integrations",
      description:
        "Automate workflows and integrate with popular tools to boost productivity.",
      icon: <Zap size={40} />,
      gradient: "from-orange-500 to-orange-700",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
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

  return (
    <section
      id="features"
      className="py-20 bg-linear-to-b from-white to-[#f9fafb]"
      ref={ref}
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
            whileInView={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
          >
            Everything you need to manage projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Powerful features designed for modern teams
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-10 lg:gap-12"
        >
          {Cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              {/* Number Badge */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`
                  absolute -top-6 -left-6 z-20
                  w-16 h-16 rounded-full
                  bg-linear-to-br ${card.gradient}
                  flex items-center justify-center
                  shadow-xl
                  ring-4 ring-white
                  transition-transform duration-300
                `}
              >
                <span className="text-white text-xl font-bold">
                  {card.number}
                </span>
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 pt-12"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-linear-to-br ${card.gradient} rounded-3xl`}
                ></motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 },
                    }}
                    className={`
                      w-20 h-20 rounded-2xl
                      bg-linear-to-br ${card.gradient}
                      flex items-center justify-center
                      text-white mb-6
                      shadow-lg
                    `}
                  >
                    {card.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl ${card.gradient} opacity-5 rounded-tl-full rounded-br-3xl`}
                ></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
