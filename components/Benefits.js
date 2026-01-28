import { ChartColumn, Target, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import React from "react";

const Benefits = () => {
  const Cards = [
    {
      title: "Deliver Projects 40% Faster",
      description:
        "Streamlined workflows and automation mean less time on busy work, more time on what matters. Teams using Smork ship projects weeks ahead of schedule.",
      bullets: [
        "Automated task assignments",
        "Smart deadline tracking",
        "Bottleneck detection",
      ],
      icon: <ChartColumn size={50} className="invert-100 " />,
      img: "/Benefit 1.jpg",
    },
    {
      title: "Never Miss a Deadline",
      description:
        "Real-time notifications, dependency tracking, and visual timelines keep everyone aligned. Know exactly what's due and who's working on what.",
        bullets: [
        "Automated task assignments",
        "Smart deadline tracking",
        "Bottleneck detection",
      ],
      icon: <Target size={50} className="invert-100 " />,
      img: "/Benefit 2.jpg",
    },
    {
      title: "Collaborate Without the Chaos",
      description:
        "No more endless email threads or lost messages. Everything your team needs is in one place, organized by project and task.",
        bullets: [
        "Automated task assignments",
        "Smart deadline tracking",
        "Bottleneck detection",
      ],
      icon: <MessageCircleMore size={50} className="invert-100 " />,
      img: "/Benefit 3.jpg",
    },
  ];
  return (
    <section
      className="flex flex-col items-center gap-8 justify-start min-h-screen pt-8 pb-30 px-4 bg-slate-50 "
      id="Benefits"
    >
      <h1 className="text-3xl font-bold uppercase">Benefits</h1>
      <h1 className="text-5xl font-black text-slate-800">
        Why teams choose Smork
      </h1>
      <p className="text-2xl">See how Smork transforms the way you work</p>
      <div className="flex items-center justify-center pt-10 mx-20 gap-8">
        {Cards.map((card, index) => {
          const isOdd = index % 2 === 1;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center m-4 p-2 border border-slate-200 rounded-xl shadow-md hover:shadow-xl w-full md:w-10/12 mx-auto hover:scale-105 transition-all duration-300 ${isOdd ? "md:flex-row-reverse md:translate-y-8" : "md:-translate-y-8"}`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 h-64 md:h-120 rounded-xl overflow-hidden shrink-0">
                <Image
                  className="w-full h-full object-cover object-center"
                  width={400}
                  height={400}
                  src={card.img}
                  alt={card.title}
                />
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-start p-4 gap-2">
                <div className="icon w-20 h-20 rounded-full bg-[#2F9AF8] flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center md:text-left">
                  {card.title}
                </h2>
                <p className="text-slate-600 text-center md:text-left leading-relaxed">
                  {card.description}
                </p>
                <ul>
                  {card.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-slate-600 text-center md:text-left leading-relaxed list-disc ml-5">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
