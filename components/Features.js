'use client';

import { ChartColumn, ListChecks, UserRound, Zap, ArrowRight } from "lucide-react";
import React from "react";

const Features = () => {
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

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-[#f9fafb]"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Everything you need to manage projects
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Powerful features designed for modern teams
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {Cards.map((card, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Number Badge */}
              <div className={`
                absolute -top-6 -left-6 z-20
                w-16 h-16 rounded-full
                bg-gradient-to-br ${card.gradient}
                flex items-center justify-center
                shadow-xl
                ring-4 ring-white
                group-hover:scale-110 transition-transform duration-300
              `}>
                <span className="text-white text-xl font-bold">
                  {card.number}
                </span>
              </div>

              {/* Card */}
              <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 pt-12 hover:-translate-y-2">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`
                    w-20 h-20 rounded-2xl
                    bg-gradient-to-br ${card.gradient}
                    flex items-center justify-center
                    text-white mb-6
                    shadow-lg
                  `}>
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Learn More Link */}
                  <button className={`
                    group/btn flex items-center gap-2 
                    text-transparent bg-clip-text bg-gradient-to-r ${card.gradient}
                    font-semibold
                    hover:gap-3 transition-all duration-300
                  `}>
                    Learn more
                    <ArrowRight size={16} className={`text-[#2F9AF8]`} />
                  </button>
                </div>

                {/* Decorative corner */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${card.gradient} opacity-5 rounded-tl-full rounded-br-3xl`}></div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Features;