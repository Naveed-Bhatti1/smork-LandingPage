"use client";

import {
  ChartColumn,
  Target,
  MessageCircleMore,
  Check,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Benefits = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  const Cards = [
    {
      number: 1,
      title: "Deliver Projects 40% Faster",
      description:
        "Streamlined workflows and automation mean less time on busy work, more time on what matters. Teams using Smork ship projects weeks ahead of schedule.",
      bullets: [
        "Automated task assignments",
        "Smart deadline tracking",
        "Bottleneck detection",
      ],
      icon: <ChartColumn size={40} />,
      gradient: "from-[#2F9AF8] to-blue-600",
      img: "/Benefit 1.jpg",
    },
    {
      number: 2,
      title: "Never Miss a Deadline",
      description:
        "Real-time notifications, dependency tracking, and visual timelines keep everyone aligned. Know exactly what's due and who's working on what.",
      bullets: [
        "Real-time notifications",
        "Dependency tracking",
        "Visual timelines",
      ],
      icon: <Target size={40} />,
      gradient: "from-purple-500 to-purple-700",
      img: "/Benefit 2.jpg",
    },
    {
      number: 3,
      title: "Collaborate Without the Chaos",
      description:
        "No more endless email threads or lost messages. Everything your team needs is in one place, organized by project and task.",
      bullets: [
        "Centralized communication",
        "Project-based organization",
        "No lost messages",
      ],
      icon: <MessageCircleMore size={40} />,
      gradient: "from-[#2F9AF8] to-blue-600",
      img: "/Benefit 3.jpg",
    },
  ];

  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
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

  // Individual benefit card component with parallax
  const BenefitCard = ({ card, index }) => {
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, { margin: "-100px" });
    const isOdd = index % 2 === 1;

    // Parallax effect for image
    const { scrollYProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

    // Animation variants based on position
    const contentVariants = {
      hidden: {
        opacity: 0,
        x: isOdd ? 100 : -100,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.4, 0.25, 1],
        },
      },
    };

    const imageVariants = {
      hidden: {
        opacity: 0,
        x: isOdd ? -100 : 100,
        scale: 0.9,
      },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: [0.25, 0.4, 0.25, 1],
        },
      },
    };

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
          damping: 15,
          delay: 0.2,
        },
      },
    };

    const bulletVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3,
          delay: 0.6 + i * 0.1,
          ease: "easeOut",
        },
      }),
    };

    return (
      <div
        ref={cardRef}
        className={`relative flex flex-col lg:flex-row items-center gap-12 ${
          isOdd ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Number Badge */}
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          animate={isCardInView ? "visible" : "hidden"}
          whileHover={{
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.3 },
          }}
          className={`
            absolute -top-8 left-1/2 lg:left-auto transform -translate-x-1/2 lg:translate-x-0
            ${isOdd ? "lg:right-1/2 lg:translate-x-1/2" : "lg:left-1/2 lg:-translate-x-1/2"}
            w-16 h-16 rounded-full
            bg-linear-to-br ${card.gradient}
            flex items-center justify-center
            shadow-xl z-10
            ring-4 ring-white
            cursor-pointer
          `}
        >
          <span className="text-white text-2xl font-bold">{card.number}</span>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isCardInView ? "visible" : "hidden"}
          className="w-full lg:w-1/2"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-150"
          >
            <motion.div style={{ y: imageY }}>
              <Image
                className="w-full h-100 object-cover"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                src={card.img}
                alt={card.title}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 bg-linear-to-br ${card.gradient}`}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={isCardInView ? "visible" : "hidden"}
          className="w-full lg:w-1/2"
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-150 p-8 lg:p-10"
          >
            {/* Icon */}
            <motion.div
              whileHover={{
                rotate: [0, -10, 10, -10, 0],
                scale: 1.1,
              }}
              transition={{ duration: 0.3 }}
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
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              {card.description}
            </p>

            {/* Bullets */}
            <ul className="space-y-3">
              {card.bullets.map((bullet, idx) => (
                <motion.li
                  key={idx}
                  custom={idx}
                  variants={bulletVariants}
                  initial="hidden"
                  animate={isCardInView ? "visible" : "hidden"}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                    className={`
                      w-6 h-6 rounded-full 
                      bg-linear-to-br ${card.gradient}
                      flex items-center justify-center
                      shrink-0 mt-0.5
                    `}
                  >
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </motion.div>
                  <span className="text-base leading-relaxed">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    );
  };

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="py-20 bg-linear-to-b from-white to-[#f9fafb] overflow-x-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.3 }}
            className="inline-block px-4 py-2 bg-blue-100 text-[#2F9AF8] rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Benefits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
          >
            Why teams choose Smork
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            See how Smork transforms the way you work
          </motion.p>
        </motion.div>

        {/* Timeline Line */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ originY: 0 }}
              className="h-full border-l-2 border-dashed border-blue-200"
            ></motion.div>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="space-y-20">
          {Cards.map((card, index) => (
            <BenefitCard key={index} card={card} index={index} />
          ))}
        </div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ isInView ? { opacity: 1, y: 0 }: { opacity: 0, y: 30 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.3 }}
          className="mt-20 bg-blue-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-700 text-lg font-semibold">
            See how Smork can help your team deliver faster
          </p>
          <motion.button
            aria-label="Start Free Trial"
            onClick={() => scrollToSection("pricing")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#2F9AF8] text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all duration-150 shadow-md flex items-center gap-2 whitespace-nowrap"
          >
            Start Free Trial
            <motion.div
              animate={ { x: [0, 5, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
