"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  const Logos = [
    "/1-removebg-preview.png",
    "/2-removebg-preview.png",
    "/3-removebg-preview.png",
    "/4-removebg-preview.png",
    "/5-removebg-preview.png",
    "/6-removebg-preview.png",
    "/7-removebg-preview.png",
    "/8-removebg-preview.png",
    "/9-removebg-preview.png",
    "/10-removebg-preview.png",
    "/11-removebg-preview.png",
    "/12-removebg-preview.png",
  ];

  const invertIndexes = [0, 1, 2, 3, 5, 6, 8, 9];

  return (
    <div className="flex flex-col items-center justify-center pt-10 text-slate-50 ">
      <section className="text-white text-center py-6 " id="Hero">
        <span className="border border-slate-800 rounded-full py-1 px-2 bg-black/50">
          🚀 New: AI-Powered Task Suggestions
        </span>
      </section>
      <h1 className="text-5xl font-bold">Everything you need, one workspace</h1>
      <p className="text-xl py-6 text-slate-100">
        Unite your team and AI to plan, organize, and complete work efficiently
      </p>
      <div className="button">
        <button className="rounded-2xl border border-[#2F9AF8] py-3 px-4 text-2xl font-medium text-[#2F9AF8] bg-slate-50 cursor-pointer hover:bg-slate-800 hover:text-slate-50 hover:scale-110 transition duration-300">
          Get Started
        </button>
      </div>
      <div className="Image pt-4 overflow-hidden rounded-tl-full rounded-br-4xl">
        <Image
          src="/HeroImage.jpeg"
          width={1000}
          height={1000}
          alt="Picture of the author"
        />
      </div>
      <section
        className="flex items-center justify-center overflow-hidden absolute py-10 w-full mt-50 max-h-24 bg-slate-800/80 text-slate-50"
        id="SocialProof"
      >
        <motion.div
          className="flex gap-2 items-center justify-center"
          animate={{ x: ["0%", "50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {Logos.map((logo, index) => (
            <Image
              key={index}
              className={invertIndexes.includes(index) ? "invert-100" : ""}
              src={logo}
              width={150}
              height={75}
              alt="Social Proof Logos"
            />
          ))}
          {Logos.map((logo, index) => (
            <Image
              key={index}
              className={invertIndexes.includes(index) ? "invert-100" : ""}
              src={logo}
              width={150}
              height={75}
              alt="Social Proof Logos"
            />
          ))}
        </motion.div>
      </section>
      {/* <section
            className="flex gap-2 items-center justify-center overflow-x-auto overflow-y-hidden absolute py-10 w-full mt-50 max-h-24 bg-slate-800/80 text-slate-50"
            id="SocialProof"
          >
            <Image
            className="invert-100"
              src="/1-removebg-preview.png"
              width={150}
              height={75}
              alt="Social Proof Logos"
            />
            <Image
            className="invert-100"
              src="/2-removebg-preview.png"
              width={150}
              height={75}
              alt="Social Proof Logos"
            />
            <Image
            className="invert-100"
              src="/3-removebg-preview.png"
              width={150}
              height={75}
              alt="Social Proof Logos"
            />
            <Image
            className="invert-100"
              src="/4-removebg-preview.png"
              width={150}
              height={75}
              alt="Social Proof Logos"
            />
            <Image
              src="/5-removebg-preview.png"
              width={150}
              height={75}
              alt="Social Proof Logos"
            />
            <Image
            className="invert-100"
              src="/6-removebg-preview.png"
              width={150}
              height={75}
              alt="Social Proof Logos"
            />
            <Image
            className="invert-100"
              src="/7-removebg-preview.png"
              width={150}
              height={75}
              alt="Social Proof Logos"
            />
            <Image
              src="/8-removebg-preview.png"
              width={150}
              height={75}
              alt="Social Proof Logos"
            />
            <Image
            className="invert-100"
              src="/9-removebg-preview.png"
              width={150}
              height={75}
              alt="Social Proof Logos"
            />
            <Image
            className="invert-100"
              src="/10-removebg-preview.png"
              width={150}
              height={75}
              alt="Social Proof Logos"
            />
            <Image
              src="/11-removebg-preview.png"
              width={150}
              height={75}
              alt="Social Proof Logos"
            />
            <Image
              src="/12-removebg-preview.png"
              width={150}
              height={75}
              alt="Social Proof Logos"
            />
          </section> */}
    </div>
  );
};

export default Hero;
