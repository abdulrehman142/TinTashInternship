import React from "react";
import { useState, useEffect, useRef } from "react";
import dragon from "../icons/dragon.png";
import sword from "../icons/sword.png";
import wdown from "../icons/wdown.png";
import mobs from "../icons/mob.png";
import structures from "../icons/structure.png";
import biomes from "../icons/biome.png";
import fullmobs from "../icons/fullmob.png";
import magic from "../icons/magic_sword.png";
import wdiscordIcon from "../icons/wdiscord.png";
import wtiktokIcon from "../icons/wtiktok.png";
import wyoutubeIcon from "../icons/wyoutube.png";
import moon from "../icons/moon.png";
import down from "../icons/down.png";
import creeper from "../icons/creeper.png";

interface HeroProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero = ({ darkMode, setDarkMode }: HeroProps) => {
  const iconClass = "hover:bg-[#AA00FF] rounded  p-2 m-1 ";
  const [appearance, setAppearance] = useState("|Creeper's appearance");
  const [behaviour, setBehaviour] = useState("How it should behave");
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const ComingSoonTag = () => (
    <div
      className="text-sm"
      style={{
        border: "1px solid",
        borderImageSource:
          "linear-gradient(93.28deg, #FF4646 0%, #FF55C6 19.8%, #4ED6FF 52.56%, #FFC401 77.2%, #59E418 100%)",
        borderImageSlice: 1,
        display: "inline-block",
        padding: "4px 8px",
        fontFamily: '"IBM Plex Mono", monospace',
        fontWeight: 700,
      }}
    >
      Coming soon!
    </div>
  );
  const renderEditableBox = (
    id: string,
    text: string,
    setText: (val: string) => void
  ) => (
    <div
      className={`ml-4 mr-4 mt-2 border-2 ${
        isFocused === id
          ? "border-[#825BD6] bg-[#825BD61A]"
          : "border-transparent dark:border-[#FFFFFF1A] border-1 bg-[#F2F2F2] dark:bg-[#27282D]"
      }`}
      onClick={() => document.getElementById(id)?.focus()}
    >
      <div
        id={id}
        className="p-2 m-2 text-base [#6C6C84] dark:text-[#FFFFFF] outline-none"
        style={{
          fontFamily: '"IBM Plex Mono", monospace',
          fontWeight: 700,
          letterSpacing: "0",
          direction: "ltr",
        }}
        contentEditable
        suppressContentEditableWarning
        onFocus={() => setIsFocused(id)}
        onBlur={(e) => {
          if (isFocused === id) setIsFocused(null);
          setText(e.target.innerText);
        }}
      >
        {text}
      </div>
    </div>
  );

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen">
        <div
          className="bg-contain bg-no-repeat bg-bottom  bg-[#3878FB] dark:bg-[#090909] p-2 "
          style={{
            backgroundImage: darkMode
              ? "url('/images/darkminecraft.png')"
              : "url('/images/minecraft.png')",
          }}
        >
          {/* Full height flex container */}
          <div className=" sticky top-0 flex text-white p-2 m-2 w-full z-[999]">
            {/* Logo / Title */}
            <div className="flex items-start  p-2">
              <img src={magic} alt="magic sword" className="w-9 h-9" />
              <h1
                className="uppercase text-2xl leading-[15px]"
                style={{ fontFamily: '"Jersey 10", sans-serif' }}
              >
                Creative <br /> Mode
              </h1>
            </div>

            {/* Navigation Links */}
            <div
              className="flex items-start pl-8 font-mono text-base font-medium gap-4 "
              style={{ fontFamily: '"IBM Plex Mono", monospace' }}
            >
              <a href="#" className="p-2  hover:bg-[#AA00FF] rounded">
                Explore
              </a>
              <a href="#" className="p-2 hover:bg-[#AA00FF] rounded">
                Create your own
              </a>

              <div>
                <img src={sword} alt="Sword" className="p-2" />
              </div>
              {/* Dropdown Trigger */}

              <div
                className="relative flex items-center gap-2 p-2 cursor-pointer hover:bg-[#AA00FF] rounded"
                onClick={() => setOpen(!open)}
                ref={dropdownRef}
              >
                <span>Item</span>
                <img src={wdown} alt="Down" />
              </div>

              <a href="#" className="p-2 hover:bg-[#AA00FF] rounded">
                Blog
              </a>
              <a href="#" className="p-2 hover:bg-[#AA00FF] rounded">
                Pricing
              </a>
              <div className="flex">
                <img src={wtiktokIcon} alt="TikTok" className={iconClass} />

                <img src={wdiscordIcon} alt="Discord" className={iconClass} />

                <img src={wyoutubeIcon} alt="YouTube" className={iconClass} />
                <button onClick={() => setDarkMode(!darkMode)}>
                  <img src={moon} alt="Dark Mode" className={iconClass} />
                </button>
              </div>
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute mt-2  top-14 left-127 bg-white border border-gray-200 text-black dark:text-white dark:bg-[#17181A] font-mono text-base font-bold z-[9999]">
                {[
                  { icon: sword, label: "Items" },
                  { icon: mobs, label: "Mobs" },
                  { icon: structures, label: "Structures", soon: true },
                  { icon: biomes, label: "Biomes", soon: true },
                  { icon: fullmobs, label: "Full Mobs", soon: true },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 m-2 hover:bg-gray-100 dark:hover:bg-gray-400 border-[#0000001A] dark:bg-[#27282D] border-4 flex items-center gap-2 cursor-pointer"
                  >
                    <img src={item.icon} alt={item.label} className="w-8 h-8" />
                    <span>{item.label}</span>
                    {item.soon && (
                      <div className="ml-auto bg-white dark:bg-[#27282D]">
                        <ComingSoonTag />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div
              className=" ml-auto"
              style={{ fontFamily: '"IBM Plex Mono", monospace' }}
            >
              <button className="px-4 py-2 m-1 border-1 text-[#FFFFFF]">
                Sign In
              </button>
              <button className="px-4 py-2 m-1 text-[#191919] bg-[#51FF70]">
                Get Started
              </button>
            </div>
          </div>

          <div className="top-0 flex flex-col items-center justify-center">
            {/* Centered box */}

            <div className="p-4 m-8">
              <h1
                className="font-semibold text-[#FFFFFF] text-6xl text-center leading-[62px] pt-16"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  letterSpacing: "-0.06em",
                  fontWeight: 600,
                }}
              >
                Create Minecraft mods <br />
                without coding
              </h1>
            </div>

            <div className="relative bg-[#FFFFFF] dark:bg-[#17181A] border-transparent dark:border-[#FFFFFF1A] border-1  ml-4 p-4 pb-6 w-190">
              {/* Dragon Icon - half inside, half outside */}
              <div className="absolute -top-16 -right-22  p-2">
                <img src={dragon} alt="Dragon" className="" />
              </div>

              {/* Main content */}
              <div
                className="flex items-center text-1.5xl"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontWeight: 500,

                  letterSpacing: "0.06em",
                }}
              >
                <div className="leading-[100%] p-2 ml-2 mt-2 dark:text-[#FFFFFF]">
                  Craft
                </div>
                <div className="pt-2">
                  <img src={mobs} alt="Mob" className="w-6 h-6" />
                </div>
                <div className="mt-2 p-1 mr-1 dark:text-[#FFFFFF]">Mob</div>

                <div>
                  <img
                    src={darkMode ? wdown : down}
                    alt="Down"
                    className="mt-2 py-2 mr-3"
                  />
                </div>
                <div className="mt-2">
                  <img src={creeper} alt="Creeper" className="w-6 h-6" />
                </div>
                <div className="mt-2 p-1 mr-1 dark:text-[#FFFFFF]">Creeper</div>
                <div>
                  <img
                    src={darkMode ? wdown : down}
                    alt="Down"
                    className="mt-2 py-2"
                  />
                </div>
              </div>
              {/*Editable box Reusable Component*/}
              {renderEditableBox("editableDiv1", appearance, setAppearance)}
              {renderEditableBox("editableDiv2", behaviour, setBehaviour)}
              <div
                className="flex justify-end mt-2 mr-4 text-base"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontWeight: 700,
                  letterSpacing: "0",
                }}
              >
                <button className="bg-[#51FF70] text-[#000000] px-2 py-2 w-60">
                  Generate Item
                </button>
              </div>
            </div>

            <div
              className="p-4 flex flex-wrap items-center justify-center leading-4 w-180 text-base"
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontWeight: 500,
                letterSpacing: "0",
                textAlign: "center",
              }}
            >
              <div className="flex">
                <div className="bg-[#FFFFFFB2] dark:bg-[#17181A] dark:text-[#FFFFFF] border-transparent dark:border-[#FFFFFF1A] border-1 p-2 m-0.5">
                  BackPack Golem
                </div>
                <div className="bg-[#FFFFFFB2] dark:bg-[#17181A] dark:text-[#FFFFFF] border-transparent dark:border-[#FFFFFF1A] border-1  p-2 m-0.5">
                  Time Compass
                </div>
                <div className="bg-[#FFFFFFB2] dark:bg-[#17181A] dark:text-[#FFFFFF] border-transparent dark:border-[#FFFFFF1A] border-1  p-2 m-0.5">
                  Portable Nether Rift
                </div>
                <div className="bg-[#FFFFFFB2] dark:bg-[#17181A] dark:text-[#FFFFFF] border-transparent dark:border-[#FFFFFF1A] border-1  p-2 m-0.5">
                  Biome Stabilizer
                </div>
              </div>

              <div className="flex">
                <div className="bg-[#FFFFFFB2] dark:bg-[#17181A] dark:text-[#FFFFFF] border-transparent dark:border-[#FFFFFF1A] border-1 p-2 m-0.5">
                  Soul Mirror
                </div>
                <div className="bg-[#FFFFFFB2] dark:bg-[#17181A] dark:text-[#FFFFFF] border-transparent dark:border-[#FFFFFF1A] border-1 p-2 m-0.5">
                  Astral Dust
                </div>
                <div className="bg-[#FFFFFFB2] dark:bg-[#17181A] dark:text-[#FFFFFF] border-transparent dark:border-[#FFFFFF1A] border-1 p-2 m-0.5">
                  Warden's Eye
                </div>
                <div className="bg-[#FFFFFFB2] dark:bg-[#17181A] dark:text-[#FFFFFF] border-transparent dark:border-[#FFFFFF1A] border-1 p-2 m-0.5">
                  Bloomshroom
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
