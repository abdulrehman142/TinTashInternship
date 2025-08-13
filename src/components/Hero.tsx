import React, { useState } from "react";
import dragon from "../icons/dragon.png";
import sword from "../icons/sword.png";
import down from "../icons/down.png";
import mobs from "../icons/mob.png";
import structures from "../icons/structure.png";
import biomes from "../icons/biome.png";
import fullmobs from "../icons/fullmob.png";

export default function Hero() {
  const [text, setText] = useState(
    "|Describe items appearance and what it should do"
  );
  const [isFocused, setIsFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const ComingSoonTag = () => (
  <div
    style={{
      border: "1px solid",
      borderImageSource:
        "linear-gradient(93.28deg, #FF4646 0%, #FF55C6 19.8%, #4ED6FF 52.56%, #FFC401 77.2%, #59E418 100%)",
      borderImageSlice: 1,
      display: "inline-block",
      padding: "4px 8px",
      backgroundColor: "#fff",
      fontFamily: '"IBM Plex Mono", monospace',
      fontWeight: 700,
      fontSize: "14px",
    }}
  >
    Coming soon!
  </div>
);
  return (
    <div className="min-h-screen">
      <div
        className="bg-contain bg-no-repeat bg-bottom bg-[#0040C1] p-10 pt-32"
        style={{ backgroundImage: "url('/images/minecraft.png')" }}
      >
        {/* Full height flex container */}

        <div className="top-0 flex flex-col items-center justify-center">
          {/* Centered box */}

          <div className="p-4 m-8">
            <h1
              className="font-semibold text-[#FFFFFF] xl:text-[54px] text-center xl:leading-[62px]"
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

          <div className="relative bg-[#FFFFFF] ml-4 p-4 pb-6 w-190">
            {/* Dragon Icon - half inside, half outside */}
            <div className="absolute -top-16 -right-22  p-2">
              <img src={dragon} alt="Dragon" className="" />
            </div>

            {/* Main content */}
            <div className="flex items-center">
              <div
                className="leading-[100%] p-2 ml-2 mt-6"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontWeight: 500,
                  fontSize: "22px",
                  letterSpacing: "0.06em",
                }}
              >
                Craft
              </div>
              <div className="mt-6">
                <img src={sword} alt="Sword" className="" />
              </div>
              <div
  className="flex items-center gap-2 mt-6 cursor-pointer"
  onClick={() => setOpen(!open)}
>
  <div
    className="leading-[100%] p-2"
    style={{
      fontFamily: '"IBM Plex Mono", monospace',
      fontWeight: 500,
      fontSize: "22px",
      letterSpacing: "0.06em",
    }}
  >
    Item
  </div>
  <img src={down} alt="Down" />
</div>

{open && (
  <div
    className="absolute top-18 left-28 bg-white border border-gray-200 mt-2"
    style={{
      fontFamily: '"IBM Plex Mono", monospace',
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0",
    }}
  >
    {/* Dropdown items */}
    <div className="p-2 m-2 hover:bg-gray-100 border-[#0000001A] border-4 cursor-pointer flex items-center gap-2">
      <img src={sword} alt="sword" className="w-8 h-8" />
      <span>Items</span>
    </div>

    <div className="p-2 m-2 hover:bg-gray-100 border-[#0000001A] border-4 cursor-pointer flex items-center gap-2">
      <img src={mobs} alt="Mob" />
      <span>Mobs</span>
    </div>

    <div className="p-2 m-2 hover:bg-gray-100 border-[#0000001A] border-4 cursor-pointer flex items-center gap-2">
      <img src={structures} alt="Structures" />
      <span>Structures</span>
      <div className="ml-auto">
      <ComingSoonTag />
      </div>
    </div>

    <div className="p-2 m-2 hover:bg-gray-100 border-[#0000001A] border-4 cursor-pointer flex items-center gap-2">
      <img src={biomes} alt="Biomes" />
      <span>Biomes</span>
      <div className="ml-auto">
      <ComingSoonTag />
      </div>
    </div>

    <div className="p-2 m-2 hover:bg-gray-100 border-[#0000001A] border-4 cursor-pointer flex items-center gap-2">
      <img src={fullmobs} alt="Full Mobs" />
      <span>Full Mobs</span>
      <div className="ml-auto">
      <ComingSoonTag />
      </div>
    </div>
  </div>
)}

            </div>

            <div
              className={`ml-4 mr-4 mt-2 pb-10 border-2 transition-colors duration-200 ${
                isFocused
                  ? "border-[#825BD6] bg-[#825BD61A]"
                  : "border-transparent bg-gray-200"
              }`}
              onClick={() => document.getElementById("editableDiv").focus()} // click anywhere to focus
            >
              <div
                id="editableDiv"
                className="p-2 m-2 text-[#6C6C84] outline-none"
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontWeight: 700,
                  fontSize: "16px",
                  letterSpacing: "0",
                  direction: "ltr",
                }}
                contentEditable
                suppressContentEditableWarning
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => {
                  setIsFocused(false);
                  setText(e.target.innerText);
                }}
              >
                {text}
              </div>
            </div>
            <div
              className="flex justify-end mt-2 mr-4"
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                fontWeight: 700,
                fontSize: "16px",
                letterSpacing: "0",
              }}
            >
              <button className="bg-[#51FF70] text-[#000000] px-2 py-2 w-60">
                Generate Item
              </button>
            </div>
          </div>

          <div
            className="p-4 gap-2 flex flex-wrap items-center justify-center leading-4"
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              fontWeight: 500,
              fontSize: "16px",
              letterSpacing: "0",
              textAlign: "center",
            }}
          >
            <div className="flex flex-row gap-2 mr-2">
              <div className="bg-[#FFFFFFB2] p-2">BackPack Golem</div>
              <div className="bg-[#FFFFFFB2] p-2">Time Compass</div>
              <div className="bg-[#FFFFFFB2] p-2">Portable Nether Rift</div>
              <div className="bg-[#FFFFFFB2] p-2">Biome Stabilizer</div>
            </div>

            <div className="flex flex-row gap-2 mr-2">
              <div className="bg-[#FFFFFFB2] p-2">Soul Mirror</div>
              <div className="bg-[#FFFFFFB2] p-2">Portable Nether Rift</div>
              <div className="bg-[#FFFFFFB2] p-2">Biome Stabilizer</div>
              <div className="bg-[#FFFFFFB2] p-2">Time Compass</div>
            </div>

            <div className="flex flex-row gap-2 mr-2">
              <div className="bg-[#FFFFFFB2] p-2">Portable Nether Rift</div>
              <div className="bg-[#FFFFFFB2] p-2">BackPack Golem</div>
              <div className="bg-[#FFFFFFB2] p-2">Portable Nether Rift</div>
              <div className="bg-[#FFFFFFB2] p-2">Soul Mirror</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
