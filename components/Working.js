"use client";

import Image from "next/image";
import { Pencil, Users, Rocket, ArrowRight } from "lucide-react";

const Working = () => {
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

  return (
    <section
      id="working"
      className="py-20 bg-linear-to-b from-white to-[#f9fafb]"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Get started in minutes
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            No complicated setup. Start managing projects in 3 simple steps.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 px-32">
            <div className="relative h-1">
              <div className="absolute inset-0 bg-linear-to-r from-[#2F9AF8] via-purple-500 to-[#2F9AF8] opacity-20 rounded-full"></div>
              <div className="absolute inset-0 border-t-2 border-dashed border-blue-300"></div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full">
                  {/* Number Badge */}
                  <div
                    className={`
                      absolute -top-10 left-1/2 transform -translate-x-1/2
                      w-20 h-20 rounded-full
                      bg-linear-to-br ${step.gradient}
                      flex items-center justify-center
                      shadow-xl z-10
                      ring-4 ring-white
                    `}
                  >
                    <span className="text-white text-2xl font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-12 text-center">
                    {/* Emoji */}
                    <div className="text-5xl mb-4">{step.emoji}</div>

                    {/* Label */}
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      {step.label}
                    </p>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Screenshot/Mockup */}
                    <div className="mt-6 rounded-xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm">
                      <Image
                        src={step.img}
                        width={400}
                        height={250}
                        alt={step.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-8">
                    <ArrowRight className="text-blue-400" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
