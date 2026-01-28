import { ChartColumn, ListChecks, UserRound, Zap } from "lucide-react";
import React from "react";

const Features = () => {
  const Cards = [
    {
      title: "Smart Task Management",
      description:
        "Create, assign, and track tasks with drag-and-drop boards, lists, and timelines.",
      icon: <ListChecks size={50} className="invert-100 " />,
    },
    {
      title: "Team Collaboration",
      description:
        "Facilitate seamless communication with comments, mentions, and file sharing.",
      icon: <UserRound size={50} className="invert-100 " />,
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain insights with real-time reporting, dashboards, and performance metrics.",
      icon: <ChartColumn size={50} className="invert-100 " />,
    },
    {
      title: "Automation & Integrations",
      description:
        "Automate workflows and integrate with popular tools to boost productivity.",
      icon: <Zap size={50} className="invert-100 " />,
    },
  ];
  return (
    <section
      className="flex flex-col items-center gap-8 justify-start h-screen pt-8 pb-10 px-4 bg-slate-50"
      id="Features"
    >
      <h1 className="text-3xl font-bold uppercase">Features</h1>
      <h1 className="text-5xl font-black text-slate-800">
        Everything you need to manage projects
      </h1>
      <p className="text-2xl">Powerful features designed for modern teams</p>
      <div className="grid grid-cols-2 pt-10">
        {Cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center m-4 p-6 border w-11/12 hover:scale-110 transition-all border-slate-200 rounded-xl shadow-md hover:shadow-xl duration-300"
          >
            <div className="icon w-20 h-20 rounded-full bg-[#2F9AF8] flex items-center justify-center mb-4">
              {card.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">
              {card.title}
            </h2>
            <p className="text-slate-600 text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
