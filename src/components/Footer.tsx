import React from "react";
import { useState, useEffect } from "react";
import discordIcon from '../icons/discord.png';
import tiktokIcon from '../icons/tiktok.png';
import youtubeIcon from '../icons/youtube.png';
import modeIcon from '../icons/mode.png';

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const root = window.document.documentElement;
  if (darkMode) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}, [darkMode]);
  return (
    <footer className="w-[1440px] h-[493px] rotate-0 bg-[#FFFFFF]">
      <div className="flex flex-col items-left justify-center h-screen">
        <div className="w-[1312px] h-[164px] mt-[64px] ml-[64px] mr-[64px] flex justify-between">
          
          {/* Top Link Columns */}
          <div
            className="w-[391px] h-[164px] flex gap-[60px] font-medium"
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              color: '#000001',
              fontSize: '16px',
            }}
          >
            {/* First Column */}
            <div className="w-[68px] h-[164px] flex flex-col gap-[20px]">
              <a href="#">Explore</a>
              <a href="#">Create</a>
              <a href="#">Learn</a>
              <a href="#">Pricing</a>
            </div>

            {/* Second Column */}
            <div className="w-[68px] h-[119px] flex flex-col gap-[20px]">
              <a href="#">Blog</a>
              <a href="#">My mods</a>
              <a href="#">Contact</a>
            </div>

            {/* Third Column */}
            <div className="w-[135px] h-[74px] flex flex-col gap-[20px]">
              <a href="#">Get free coins</a>
              <a href="#">Sign in</a>
            </div>
          </div>

          {/* Right Section with Mode Icon, Social Media, and Text */}
          <div className="w-[400px] h-[164px] relative ml-auto flex flex-col justify-end items-end gap-[12px]">
            {/* 🟢 Top-right Mode Icon */}
           <button
  onClick={() => setDarkMode(!darkMode)}
  className="absolute top-0 right-0 w-[36px] h-[20px]"
>
  <img src={modeIcon} alt="Mode Icon" className="w-full h-full" />
</button>
            {/* 🔵 Social Icons */}
            <div className="w-[86px] h-[18px] flex justify-end gap-[12px]">
              <img src={discordIcon} alt="Discord logo" className="w-[18px] h-[18px]" />
              <img src={tiktokIcon} alt="TikTok" className="w-[18px] h-[18px]" />
              <img src={youtubeIcon} alt="YouTube" className="w-[18px] h-[18px]" />
            </div>

            {/* 🟣 Bottom Text */}
            <div
              className="w-[400px] h-[32px] text-[16px] leading-[32px] font-normal opacity-50"
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                letterSpacing: '-0.02em',
              }}
            >
              Make the game your own. No coding required.
            </div>
          </div>
        </div>

        {/* Disclaimer + Links + Logo */}
        <div className="w-[1312px] h-[213px] mt-[67px] ml-[64px] gap-[8px]">
          {/* Disclaimer */}
          <div className="w-[1312px] h-[24px] flex justify-between items-start">
  {/* Left: Disclaimer */}
  <div className="text-[#250843] w-[1060px] h-[24px]">
    <p
      style={{
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: '12px',
        color: '#000001',
      }}
    >
      © 2025 Creativemode. Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.
    </p>
  </div>

  {/* Right: Links Container */}
  <div className="flex gap-[21px]">
    {/* Privacy Policy */}
    <a
      href="#"
      className=" text-[#98A1B4] w-[101px] h-[17px] block"
      style={{
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: '12px',
        color: '#98A1B4',
      }}
    >
      Privacy Policy
    </a>

    {/* Terms & Conditions */}
    <a
      href="#"
      className=" text-[#98A1B4] w-[130px] h-[17px] block"
      style={{
        fontFamily: '"IBM Plex Mono", monospace',
        fontSize: '12px',
        color: '#98A1B4',
      }}
    >
      Terms & Conditions
    </a>
  </div>
</div>


          {/* Logo */}
          <h1
          className="text-[#0F0F0F] uppercase font-normal"
  style={{
    fontFamily: '"Jersey 10", sans-serif',
    fontSize: '288.38px',
    lineHeight: '180.24px',
    letterSpacing: '-0.02em',
  }}
          >
            CREATIVEMODE
          </h1>
        </div>
      </div>
    </footer>
  );
}
