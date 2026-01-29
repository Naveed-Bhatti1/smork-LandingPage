"use client";

import { ChartColumn, Target, MessageCircleMore, Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Benefits = () => {
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

  return (
    <section
      id="benefits"
      className="py-20 bg-linear-to-b from-white to-[#f9fafb]"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-blue-100 text-[#2F9AF8] rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Benefits
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Why teams choose Smork
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            See how Smork transforms the way you work
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5">
            <div className="h-full border-l-2 border-dashed border-blue-200"></div>
          </div>

          <div className="space-y-20"></div>
        </div>

        <div className="space-y-20">
          {Cards.map((card, index) => {
            const isOdd = index % 2 === 1;

            return (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-12 ${
                  isOdd ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`
                  absolute -top-8 left-1/2 lg:left-auto transform -translate-x-1/2 lg:translate-x-0
                  ${isOdd ? "lg:right-1/2 lg:translate-x-1/2" : "lg:left-1/2 lg:-translate-x-1/2"}
                  w-16 h-16 rounded-full
                  bg-linear-to-br ${card.gradient}
                  flex items-center justify-center
                  shadow-xl z-10
                  ring-4 ring-white
                `}
                >
                  <span className="text-white text-2xl font-bold">
                    {card.number}
                  </span>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                    <Image
                      className="w-full h-100 object-cover"
                      width={600}
                      height={400}
                      src={card.img}
                      alt={card.title}
                    />
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-0 hover:opacity-10 transition-opacity duration-300`}
                    ></div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 lg:p-10">
                    <div
                      className={`
                      w-20 h-20 rounded-2xl
                      bg-linear-to-br ${card.gradient}
                      flex items-center justify-center
                      text-white mb-6
                      shadow-lg
                    `}
                    >
                      {card.icon}
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                      {card.title}
                    </h3>

                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      {card.description}
                    </p>

                    <ul className="space-y-3">
                      {card.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-slate-700"
                        >
                          <div
                            className={`
                            w-6 h-6 rounded-full 
                            bg-linear-to-br ${card.gradient}
                            flex items-center justify-center
                            shrink-0 mt-0.5
                          `}
                          >
                            <Check
                              size={14}
                              className="text-white"
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-base leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle CTA Bar */}
        <div className="mt-20 bg-blue-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 text-lg font-semibold">
            See how Smork can help your team deliver faster
          </p>
          <button className="bg-[#2F9AF8] text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-md flex items-center gap-2 whitespace-nowrap">
            Start Free Trial
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
