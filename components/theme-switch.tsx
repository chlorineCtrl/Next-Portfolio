"use client";

import { useTheme } from "@/components/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
// @ts-ignore
import useSound from "use-sound";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  const audioFile = "/switch.mp3";
  const [play] = useSound(audioFile, { volume: 0.25 });
  const handleClick = () => {
    play();
    toggleTheme();
  };

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={handleClick}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
