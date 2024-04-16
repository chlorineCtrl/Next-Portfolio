"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am Md Abir Hasan Fuad, a driven software engineering student with
        expertise in front-end, mobile, and back-end development. My skills
        include JavaScript, TypeScript, ReactJS, Flutter, and more, and I have
        experience in industry standard apps, hackathons, and delivering
        solutions to complex problems. With a keen interest in ideating
        applications to solve real-life challenges, I've excelled in internships
        at Greentech Apps Foundation, contributing to apps like Hadith
        Collection and Deen Quiz. Notable projects include the automated CV
        generator and NextHub, demonstrating my innovation and technical
        proficiency. My educational background includes a Bachelor of Science in
        Software Engineering from Islamic University of Technology, along with
        outstanding academic achievements in HSC and SSC. I hold certificates
        from prestigious hackathons, Udemy courses, and Google Cloud, and have
        completed a range of courses in software development and related fields.
        Passionate about generating application ideas and solving real-world
        problems, I am poised to make significant contributions to the software
        engineering industry.
      </p>
    </motion.section>
  );
}
