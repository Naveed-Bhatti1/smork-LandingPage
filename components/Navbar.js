"use client";
import React from "react";

const Navbar = () => {
  const Menu = [
    {Name: "Home",
      ID: "Hero"
    },
    {Name: "Features",
      ID: "Features"
    },
    {Name: "Benefits",
      ID: "Benefits"
    },
    {Name: "Working",
      ID: "Working"
    },
    {Name: "Pricing",
      ID: "Pricing"
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      
      const yOffset = (sectionId === "Hero") ? 0 : -50;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    } else {
      console.warn(`Element with ID ${sectionId} not found.`);
    }
  };
  return (
    <nav className="shadow-md py-4 px-10 fixed top-1 left-0 right-0 bg-white/50 text-slate-800 backdrop-blur-xl z-10 w-2/3 mx-auto rounded-3xl">
      <div className="flex items-center justify-between">
        <h1
          onClick={() => scrollToSection("Hero")}
          className="text-4xl font-bold cursor-pointer"
        >
          <span className="text-[#2F9AF8]">SM</span>ORK
        </h1>
        <ul className="flex gap-6 text-lg font-medium">
          {Menu.map((item, index) => (
            <li
              key={index}
              onClick={() => scrollToSection(item.ID)}
              className="hover:underline hover:scale-110 cursor-pointer transition duration-300"
            >
              {item.Name}
            </li>
          ))}
        </ul>
        <button className="hover:bg-slate-800 cursor-pointer hover:scale-110 text-white px-4 py-2 rounded-xl bg-[#2F9AF8] transition duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
