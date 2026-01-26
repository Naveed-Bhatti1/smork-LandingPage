import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="flex flex-col items-center justify-center pt-2 text-slate-50"
      id="Hero"
    >
      <div className="text-white text-center py-6">
        <span className="border border-slate-800 rounded-full py-1 px-2 bg-black/50">
          🚀 New: AI-Powered Task Suggestions
        </span>
      </div>
      <h1 className="text-5xl font-bold">Everything you need, one workspace</h1>
      <p className="text-xl py-6 text-slate-100">
        Unite your team and AI to plan, organize, and complete work efficiently
      </p>
      <div className="button">
        <button className="rounded-full border border-[#2F9AF8] py-4 px-6 text-2xl font-medium text-[#2F9AF8] bg-slate-50 cursor-pointer hover:bg-slate-800 hover:text-slate-50">Get Started</button>
      </div>
      <div className="Image pt-4 overflow-hidden rounded-tl-full rounded-br-4xl">
        <Image
          src="/HeroImage.jpeg"
          width={1000}
          height={1000}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
};

export default Hero;
