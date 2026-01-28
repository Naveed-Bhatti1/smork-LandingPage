import { ChartColumn, Target, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import React from "react";

const Benefits = () => {
  const Cards = [
    {
      title: "Smart Task Management",
      description:
        "Create, assign, and track tasks with drag-and-drop boards, lists, and timelines.",
      icon: <ChartColumn size={50} className="invert-100 " />,
      img: "/Benefit 1.jpg",
    },
    {
      title: "Team Collaboration",
      description:
        "Facilitate seamless communication with comments, mentions, and file sharing.",
      icon: <Target size={50} className="invert-100 " />,
      img: "/Benefit 2.jpg",
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain insights with real-time reporting, dashboards, and performance metrics.",
      icon: <MessageCircleMore size={50} className="invert-100 " />,
      img: "/Benefit 3.jpg",
    },
  ];
  return (
    <section
      className="flex flex-col items-center gap-8 justify-start h-screen pt-8 pb-10 px-4 bg-slate-50"
      id="Benefits"
    >
      <h1 className="text-3xl font-bold uppercase">Benefits</h1>
      <h1 className="text-5xl font-black text-slate-800">
        Why teams choose Smork
      </h1>
      <p className="text-2xl">See how Smork transforms the way you work</p>
      <div className="flex items-center justify-center pt-10 px-40 gap-4">
        {Cards.map((card, index) => {
          const isOdd = index % 2 === 1;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center m-4 p-2 md:p-4 border border-slate-200 rounded-xl shadow-md hover:shadow-xl w-full md:w-10/12 mx-auto hover:scale-105 transition-all duration-300 ${isOdd ? "md:flex-row-reverse md:translate-y-8" : "md:-translate-y-8"}`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shrink-0">
                <Image
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                  src={card.img}
                  alt={card.title}
                />
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 gap-2">
                <div className="icon w-20 h-20 rounded-full bg-[#2F9AF8] flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center md:text-left">
                  {card.title}
                </h2>
                <p className="text-slate-600 text-center md:text-left leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
