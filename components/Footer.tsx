import React from "react";
import discordIcon from "../icons/discord.png";
import tiktokIcon from "../icons/tiktok.png";
import youtubeIcon from "../icons/youtube.png";
import wdiscordIcon from "../icons/wdiscord.png";
import wtiktokIcon from "../icons/wtiktok.png";
import wyoutubeIcon from "../icons/wyoutube.png";
import sun from "../icons/sun.png";
import dmoon from "../icons/dmoon.png";

interface FooterProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer = ({ darkMode, setDarkMode }: FooterProps) => {
  const navLinkClass =
    "py-2 xl:px-0 hover:text-white hover:bg-[#AA00FF]  rounded w-max";
  const linkClass =
    "hover:underline text-[#98A1B4] text-xs block opacity-50 mx-2";
  const iconClass = "w-8 h-8 hover:bg-[#AA00FF] p-2 rounded";
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="w-full rotate-0 bg-[#FFFFFF] dark:bg-[#101011] px-5">
        <div className="xl:mx-8 flex flex-col xl:flex-row justify-between items-strech">
          {/* Top Link Columns */}
          <div
            className="flex flex-col xl:flex-row font-medium m-2"
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              color: darkMode ? "#FFFFFF" : "#000001",
            }}
          >
            {/* First Column */}
            <div className="flex flex-col p-1 m-0 xl:m-4">
              <a href="#" className={navLinkClass}>
                Explore
              </a>
              <a href="#" className={navLinkClass}>
                Create
              </a>
              <a href="#" className={navLinkClass}>
                Learn
              </a>
              <a href="#" className={navLinkClass}>
                Pricing
              </a>
            </div>

            {/* Second Column */}
            <div className="flex flex-col p-1 m-0 xl:m-4">
              <a href="#" className={navLinkClass}>
                Blog
              </a>
              <a href="#" className={navLinkClass}>
                My mods
              </a>
              <a href="#" className={navLinkClass}>
                Contact
              </a>
            </div>

            {/* Third Column */}
            <div className="flex flex-col p-1 m-0 xl:m-4">
              <a href="#" className={navLinkClass}>
                Get free coins
              </a>
              <a href="#" className={navLinkClass}>
                Sign in
              </a>
            </div>
          </div>

          {/* Right Section with Mode Icon, Social Media, and Text */}
          <div className="flex flex-col justify-start xl:justify-between items-start xl:items-end mx-0 xl:m-2 gap-y-6">
            {/* 🟢 Top-right Mode Icon Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-10 h-6 rounded-full flex items-center transition-colors duration-300 m-4
    ${darkMode ? "bg-black" : "bg-[#F5F5F5]"}`}
            >
              {/* Toggle Circle */}
              <div
                className={`absolute top-1 left-1 w-4 h-4 rounded-full transform transition-transform duration-300
      ${
        darkMode
          ? "translate-x-[16px] bg-[#484C5B]"
          : "translate-x-0 bg-gray-200"
      }`}
              ></div>

              {/* Icon on opposite side */}
              <img
                src={darkMode ? sun : dmoon}
                alt="Mode Icon"
                className={`absolute w-3 h-3 top-1/2 transform -translate-y-1/2 ${
                  darkMode ? "left-1" : "right-1"
                }`}
              />
            </button>

            {/* 🔵 Social Icons */}
            <div className="m-2  flex flex-col">
              <div className="flex flex-row xl:justify-end">
                <img
                  src={darkMode ? wtiktokIcon : tiktokIcon}
                  alt="TikTok"
                  className={iconClass}
                />
                <img
                  src={darkMode ? wdiscordIcon : discordIcon}
                  alt="Discord"
                  className={iconClass}
                />
                <img
                  src={darkMode ? wyoutubeIcon : youtubeIcon}
                  alt="YouTube"
                  className={iconClass}
                />
              </div>

              {/* 🟣 Social Text */}
              <div
                className="text-base leading-[32px] font-normal opacity-50 break-words whitespace-normal m-2 p-0"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  letterSpacing: "-0.02em",
                  color: darkMode ? "#FFFFFF" : "#000000",
                }}
              >
                Make the game your own. No coding required.
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer + Links */}

        {/* Disclaimer */}
        <div className="mx-0 xl:mx-10 flex flex-col xl:flex-row justify-between items-start gap-y-4">
          {/* Left: Disclaimer */}
          <div className="text-[#250843] mx-4 xl:mx-6">
            <p
              className="text-sm"
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                color: darkMode ? "#FFFFFF" : "#250843",
              }}
            >
              © 2025 Creativemode. Not an official Minecraft product. Not
              approved by or associated with Mojang or Microsoft.
            </p>
          </div>

          {/* Right: Links Container */}
          <div className="flex flex-row justify-between items-start mx-2 gap-y-4 mb-6 xl:mb-0">
            {/* Privacy Policy */}
            <a
              href="#"
              className={linkClass}
              style={{
                fontFamily: '"IBM Plex Mono", monospace',

                color: darkMode ? "#FFFFFF" : "#98A1B4",
              }}
            >
              Privacy Policy
            </a>

            {/* Terms & Conditions */}
            <a
              href="#"
              className={linkClass}
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "12px",
                color: darkMode ? "#FFFFFF" : "#98A1B4",
              }}
            >
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Logo */}
      </div>
      <div className="overflow-hidden bg-[#FFFFFF] dark:bg-[#101011]">
        <h1
          className="uppercase font-normal xl:text-[288.38px] text-[91.03px] text-center xl:leading-[180.24px] leading-[56.9px]"
          style={{
            fontFamily: '"Jersey 10", sans-serif',
            letterSpacing: "-0.02em",
            color: darkMode ? "#FFFFFF" : "#0F0F0F",
          }}
        >
          CREATIVEMODE
        </h1>
      </div>
    </div>
  );
};

export default Footer;
