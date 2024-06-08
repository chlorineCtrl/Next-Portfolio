import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import image1Img from "@/public/image1.png";
import image2Img from "@/public/image2.png";
import image3Img from "@/public/image3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Secondary School",
    location: "BAF Shaheen School and College",
    description: "Gradutaed with scholarship.",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2017",
  },
  {
    title: "Graduated Higher School",
    location: "Adamjee Cantonment College",
    description: "Gradutaed with scholarship.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2019",
  },
  {
    title: "Mobile Application Developer",
    location: "Greentech Apps Foundation",
    description:
      "Worked with live applications hosted on Google Play Store to implement functionality using Flutter through SQLite database integration.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Bachalor of Science",
    location: "Islamic Universiy of Technology",
    description:
      "I will graduate this year and have a degree on Bachalor of Science(BSc) in Software Engineering at IUT.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "All-good-cv-generator",
    description:
      "An Automated CV generator that is capable enough to brought us a Hackathon win! ",
    tags: ["React", "Next.js", "tRPC", "Tailwind", "Prisma"],
    imageUrl: image1Img,
    githubUrl: "https://github.com/chlorineCtrl/all-good-cv-generator",
  },
  {
    title: "Complexity-Analyzer",
    description:
      "This is a Maintainability Index calculation Tool for Golang Codebase capable to calcuate Cyclomatic Complexity,Halstead Metrics and Maintainability Index",
    tags: ["Golang", "Static Analyzer"],
    imageUrl: image2Img,
    githubUrl: "https://github.com/chlorineCtrl/Complexity-Analyzer",
  },
  {
    title: "QuiKNote",
    description:
      "A lite note taking app which enables you to take note on the Go! ",
    tags: ["Flutter", "Firebase", "SQL"],
    imageUrl: image3Img,
    githubUrl: "https://github.com/chlorineCtrl/QuiKNote",
  },
  {
    title: "WhatTodo",
    description: "RESTful APIs with Node.js and Express.",
    tags: ["ReactJS", "Express", "MongoDB", "JavaScript"],
    imageUrl: image3Img,
    githubUrl: "https://github.com/chlorineCtrl/WhatTodo",
  },
] as const;

export const skillsData = [
  "Golang",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
