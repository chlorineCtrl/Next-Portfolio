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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "All-good-cv-generator",
    description:
      "An Automated CV generator that is capable enough to brought us a Hackathon win! ",
    tags: ["React", "Next.js", "tRPC", "Tailwind", "Prisma"],
    imageUrl: image1Img,
  },
  {
    title: "Complexity-Analyzer",
    description:
      "This is a Maintainability Index calculation Tool for Golang Codebase capable to calcuate Cyclomatic Complexity,Halstead Metrics and Maintainability Index",
    tags: ["Golang", "Static Analyzer"],
    imageUrl: image2Img,
  },
  {
    title: "QuiKNote",
    description:
      "A lite note taking app which enables you to take note on the Go! ",
    tags: ["Flutter", "Firebase", "SQL"],
    imageUrl: image3Img,
  },
  {
    title: "WhatTodo",
    description: "RESTful APIs with Node.js and Express.",
    tags: ["ReactJS", "Express", "MongoDB", "JavaScript"],
    imageUrl: image3Img,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
