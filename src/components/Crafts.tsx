import React from "react";
import left from "../icons/left.png";
import right from "../icons/right.png";
import wleft from "../icons/wleft.png";
import wright from "../icons/wright.png";
import punk from "../icons/punk.png";
import copy from "../icons/copy.png";
import eye from "../icons/eye.png";
import share from "../icons/share.png";
import download from "../icons/download.png";
import weye from "../icons/weye.png";
import wshare from "../icons/wshare.png";
import wdownload from "../icons/wdownload.png";
interface CraftsProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Crafts({ darkMode, setDarkMode }: CraftsProps) {
  return (
    <div className={darkMode ? "dark" : ""}>
   <div className="min-h-screen bg-[#F2F2F2] dark:bg-[#141D2A]">
    <div className="p-8 mx-8">
    <div className="p-2 m-2 pl-0 text-[#000000] dark:text-[#FFFFFF]" style={{
    fontFamily: '"IBM Plex Mono", monospace',
    fontWeight: 500,
    fontStyle: "normal",   
    fontSize: "48px",
    lineHeight: "60px",
    letterSpacing: "-0.07em",
  }}>
See what others are crafting
    </div>

    <div className="flex flex-wrap" style={{
    fontFamily: '"IBM Plex Mono", monospace',
    fontWeight: 500,
    fontStyle: "normal",   
    fontSize: "16px",
    lineHeight: "32px",
    letterSpacing: "0px",
  }}>
      <div className="flex flex-col">
        <div className="border-1 bg-[#FFFFFF] border-[#DBDBDB] dark:bg-[#17181A] dark:border-[#27282D]  py-4 px-2 m-2">
<div className="flex items-center gap-1">
<img 
   src={darkMode ? wleft : left}
    alt="Left" 
  />
<img 
    src='/images/fishes.png'
    alt="Fishes" 
  />
  <img 
    src={darkMode ? wright : right}
    alt="Right" 
  />
</div>
<div className="flex p-1 mr-1 ml-2">
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
v1.0.0
  </div>
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
MC 1.21.5
  </div>
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
Java
  </div>
  <div className="border-1 bg-[#FFDFDF] dark:bg-[#68EDB5] px-2 m-1">
Fun
  </div>
</div>
<div className="font-bold text-[24px] text-[#000000] dark:text-[#FFFFFF] p-2 mx-2">
  Squid gun
</div>
<div className="flex mx-3">
  
<img className="m-1 p-1"
    src={punk}
    alt="Punk" 
  />
  <div className="py-1  text-[#000000] dark:text-[#FFFFFF]">
    CraftingPro
  </div>
</div>
<div className="flex items-start justify-between bg-[#F2F2F2] dark:bg-[#25272F] m-4 w-90">
  <div className="w-75 m-2 py-2  text-[#250843] dark:text-[#FFFFFF] ">
    A wand of jungle vines and moss that grants the wearer temporary flight...
  </div>
  <button
  onClick={() => navigator.clipboard.writeText("A wand of jungle vines and moss that grants the wearer temporary flight...")}
>
  <img className="mt-4 p-2 mr-2"
    src={copy} 
    alt="Copy" 
  />
</button>
</div>
<div className="flex">
<button className="bg-[#37E155] dark:bg-[#51FF70] px-10 py-1 m-4 mr-0">
  Remix
</button>
<button className="flex bg-[#FFFFFF] dark:bg-[#25272F] border-1 border-[#DBDBDB] dark:border-[#27282D] px-2 py-1 m-4">
  <div className="pt-1 text-[#04150B] dark:text-[#FFFFFF]">View</div>
  <img className="px-2 py-4 dark:py-3"
       src={darkMode ? weye : eye}
    alt="View" 
  />

</button>

  <img className="py-8 px-4"
   src={darkMode ? wshare : share}
    alt="Share" 
  />
  <img className="py-8"
  src={darkMode ? wdownload : download}
    alt="Download" 
  />
  <div className="text-[#7D7D7D] pt-7 px-2">
    201
  </div>

</div>
</div>
</div>


<div className="flex flex-col">
        <div className="border-1 bg-[#FFFFFF] border-[#DBDBDB] dark:bg-[#17181A] dark:border-[#27282D] py-4 px-2 m-2">
<div className="flex items-center gap-1">
<img 
   src={darkMode ? wleft : left}
    alt="Left" 
  />
<img 
    src='/images/canon.png'
    alt="Canon" 
  />
  <img 
    src={darkMode ? wright : right}
    alt="Right" 
  />
</div>
<div className="flex p-1 mr-1 ml-2">
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
v1.0.0
  </div>
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
MC 1.21.5
  </div>
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
Java
  </div>
  <div className="border-1 bg-[#FFDFDF] dark:bg-[#68EDB5] px-2 m-1">
Fun
  </div>
</div>
<div className="font-bold text-[24px] text-[#000000] dark:text-[#FFFFFF] p-2 mx-2">
  Squid gun
</div>
<div className="flex mx-3">
  
<img className="m-1 p-1"
    src={punk}
    alt="Punk" 
  />
  <div className="py-1  text-[#000000] dark:text-[#FFFFFF]">
    CraftingPro
  </div>
</div>
<div className="flex items-start justify-between bg-[#F2F2F2] dark:bg-[#25272F] m-4 w-90">
  <div className="w-75 m-2 py-2  text-[#250843] dark:text-[#FFFFFF] ">
    A wand of jungle vines and moss that grants the wearer temporary flight...
  </div>
  <button
  onClick={() => navigator.clipboard.writeText("A wand of jungle vines and moss that grants the wearer temporary flight...")}
>
  <img className="mt-4 p-2 mr-2"
    src={copy} 
    alt="Copy" 
  />
</button>
</div>
<div className="flex">
<button className="bg-[#37E155] dark:bg-[#51FF70] px-10 py-1 m-4 mr-0">
  Remix
</button>
<button className="flex bg-[#FFFFFF] dark:bg-[#25272F] border-1 border-[#DBDBDB] dark:border-[#27282D] px-2 py-1 m-4">
  <div className="pt-1 text-[#04150B] dark:text-[#FFFFFF]">View</div>
  <img className="px-2 py-4 dark:py-3"
       src={darkMode ? weye : eye}
    alt="View" 
  />

</button>

  <img className="py-8 px-4"
   src={darkMode ? wshare : share}
    alt="Share" 
  />
  <img className="py-8"
  src={darkMode ? wdownload : download}
    alt="Download" 
  />
  <div className="text-[#7D7D7D] pt-7 px-2">
    201
  </div>

</div>
</div>
</div>

  <div className="flex flex-col">
         <div className="border-1 bg-[#FFFFFF] border-[#DBDBDB] dark:bg-[#17181A] dark:border-[#27282D] py-4 px-2 m-2">
<div className="flex items-center gap-1">
<img 
   src={darkMode ? wleft : left}
    alt="Left" 
  />
<img 
    src='/images/gun.png'
    alt="Gun" 
  />
  <img 
    src={darkMode ? wright : right}
    alt="Right" 
  />
</div>
<div className="flex p-1 mr-1 ml-2">
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
v1.0.0
  </div>
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
MC 1.21.5
  </div>
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
Java
  </div>
  <div className="border-1 bg-[#FFDFDF] dark:bg-[#68EDB5] px-2 m-1">
Fun
  </div>
</div>
<div className="font-bold text-[24px] text-[#000000] dark:text-[#FFFFFF] p-2 mx-2">
  Squid gun
</div>
<div className="flex mx-3">
  
<img className="m-1 p-1"
    src={punk}
    alt="Punk" 
  />
  <div className="py-1  text-[#000000] dark:text-[#FFFFFF]">
    CraftingPro
  </div>
</div>
<div className="flex items-start justify-between bg-[#F2F2F2] dark:bg-[#25272F] m-4 w-90">
  <div className="w-75 m-2 py-2  text-[#250843] dark:text-[#FFFFFF] ">
    A wand of jungle vines and moss that grants the wearer temporary flight...
  </div>
  <button
  onClick={() => navigator.clipboard.writeText("A wand of jungle vines and moss that grants the wearer temporary flight...")}
>
  <img className="mt-4 p-2 mr-2"
    src={copy} 
    alt="Copy" 
  />
</button>
</div>
<div className="flex">
<button className="bg-[#37E155] dark:bg-[#51FF70] px-10 py-1 m-4 mr-0">
  Remix
</button>
<button className="flex bg-[#FFFFFF] dark:bg-[#25272F] border-1 border-[#DBDBDB] dark:border-[#27282D] px-2 py-1 m-4">
  <div className="pt-1 text-[#04150B] dark:text-[#FFFFFF]">View</div>
  <img className="px-2 py-4 dark:py-3"
       src={darkMode ? weye : eye}
    alt="View" 
  />

</button>

  <img className="py-8 px-4"
   src={darkMode ? wshare : share}
    alt="Share" 
  />
  <img className="py-8"
  src={darkMode ? wdownload : download}
    alt="Download" 
  />
  <div className="text-[#7D7D7D] pt-7 px-2">
    201
  </div>

</div>
</div>
</div>

<div className="flex flex-col">
       <div className="border-1 bg-[#FFFFFF] border-[#DBDBDB] dark:bg-[#17181A] dark:border-[#27282D] py-4 px-2 m-2">
<div className="flex items-center gap-1">
<img 
   src={darkMode ? wleft : left}
    alt="Left" 
  />
<img 
    src='/images/metalhand.png'
    alt="Metal Hand" 
  />
  <img 
    src={darkMode ? wright : right}
    alt="Right" 
  />
</div>
<div className="flex p-1 mr-1 ml-2">
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
v1.0.0
  </div>
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
MC 1.21.5
  </div>
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
Java
  </div>
  <div className="border-1 bg-[#FFDFDF] dark:bg-[#68EDB5] px-2 m-1">
Fun
  </div>
</div>
<div className="font-bold text-[24px] text-[#000000] dark:text-[#FFFFFF] p-2 mx-2">
  Squid gun
</div>
<div className="flex mx-3">
  
<img className="m-1 p-1"
    src={punk}
    alt="Punk" 
  />
  <div className="py-1  text-[#000000] dark:text-[#FFFFFF]">
    CraftingPro
  </div>
</div>
<div className="flex items-start justify-between bg-[#F2F2F2] dark:bg-[#25272F] m-4 w-90">
  <div className="w-75 m-2 py-2  text-[#250843] dark:text-[#FFFFFF] ">
    A wand of jungle vines and moss that grants the wearer temporary flight...
  </div>
  <button
  onClick={() => navigator.clipboard.writeText("A wand of jungle vines and moss that grants the wearer temporary flight...")}
>
  <img className="mt-4 p-2 mr-2"
    src={copy} 
    alt="Copy" 
  />
</button>
</div>
<div className="flex">
<button className="bg-[#37E155] dark:bg-[#51FF70] px-10 py-1 m-4 mr-0">
  Remix
</button>
<button className="flex bg-[#FFFFFF] dark:bg-[#25272F] border-1 border-[#DBDBDB] dark:border-[#27282D] px-2 py-1 m-4">
  <div className="pt-1 text-[#04150B] dark:text-[#FFFFFF]">View</div>
  <img className="px-2 py-4 dark:py-3"
       src={darkMode ? weye : eye}
    alt="View" 
  />

</button>

  <img className="py-8 px-4"
   src={darkMode ? wshare : share}
    alt="Share" 
  />
  <img className="py-8"
  src={darkMode ? wdownload : download}
    alt="Download" 
  />
  <div className="text-[#7D7D7D] pt-7 px-2">
    201
  </div>

</div>
</div>
</div>

<div className="flex flex-col">
        <div className="border-1 bg-[#FFFFFF] border-[#DBDBDB] dark:bg-[#17181A] dark:border-[#27282D] py-4 px-2 m-2">
<div className="flex items-center gap-1">
<img 
   src={darkMode ? wleft : left}
    alt="Left" 
  />
<img 
    src='/images/shooter.png'
    alt="Shooter" 
  />
  <img 
    src={darkMode ? wright : right}
    alt="Right" 
  />
</div>
<div className="flex p-1 mr-1 ml-2">
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
v1.0.0
  </div>
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
MC 1.21.5
  </div>
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
Java
  </div>
  <div className="border-1 bg-[#FFDFDF] dark:bg-[#68EDB5] px-2 m-1">
Fun
  </div>
</div>
<div className="font-bold text-[24px] text-[#000000] dark:text-[#FFFFFF] p-2 mx-2">
  Squid gun
</div>
<div className="flex mx-3">
  
<img className="m-1 p-1"
    src={punk}
    alt="Punk" 
  />
  <div className="py-1  text-[#000000] dark:text-[#FFFFFF]">
    CraftingPro
  </div>
</div>
<div className="flex items-start justify-between bg-[#F2F2F2] dark:bg-[#25272F] m-4 w-90">
  <div className="w-75 m-2 py-2  text-[#250843] dark:text-[#FFFFFF] ">
    A wand of jungle vines and moss that grants the wearer temporary flight...
  </div>
  <button
  onClick={() => navigator.clipboard.writeText("A wand of jungle vines and moss that grants the wearer temporary flight...")}
>
  <img className="mt-4 p-2 mr-2"
    src={copy} 
    alt="Copy" 
  />
</button>
</div>
<div className="flex">
<button className="bg-[#37E155] dark:bg-[#51FF70] px-10 py-1 m-4 mr-0">
  Remix
</button>
<button className="flex bg-[#FFFFFF] dark:bg-[#25272F] border-1 border-[#DBDBDB] dark:border-[#27282D] px-2 py-1 m-4">
  <div className="pt-1 text-[#04150B] dark:text-[#FFFFFF]">View</div>
  <img className="px-2 py-4 dark:py-3"
       src={darkMode ? weye : eye}
    alt="View" 
  />

</button>

  <img className="py-8 px-4"
   src={darkMode ? wshare : share}
    alt="Share" 
  />
  <img className="py-8"
  src={darkMode ? wdownload : download}
    alt="Download" 
  />
  <div className="text-[#7D7D7D] pt-7 px-2">
    201
  </div>

</div>
</div>
</div>
<div className="flex flex-col">
        <div className="border-1 bg-[#FFFFFF] border-[#DBDBDB] dark:bg-[#17181A] dark:border-[#27282D] py-4 px-2 m-2">
<div className="flex items-center gap-1">
<img 
   src={darkMode ? wleft : left}
    alt="Left" 
  />
<img 
    src='/images/loop.png'
    alt="Loop" 
  />
  <img 
    src={darkMode ? wright : right}
    alt="Right" 
  />
</div>
<div className="flex p-1 mr-1 ml-2">
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
v1.0.0
  </div>
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
MC 1.21.5
  </div>
  <div className="border-1 border-[#DBDBDB] text-[#000000] dark:text-[#FFFFFF] dark:border-[#27282D] px-2 m-1">
Java
  </div>
  <div className="border-1 bg-[#FFDFDF] dark:bg-[#68EDB5] px-2 m-1">
Fun
  </div>
</div>
<div className="font-bold text-[24px] text-[#000000] dark:text-[#FFFFFF] p-2 mx-2">
  Squid gun
</div>
<div className="flex mx-3">
  
<img className="m-1 p-1"
    src={punk}
    alt="Punk" 
  />
  <div className="py-1  text-[#000000] dark:text-[#FFFFFF]">
    CraftingPro
  </div>
</div>
<div className="flex items-start justify-between bg-[#F2F2F2] dark:bg-[#25272F] m-4 w-90">
  <div className="w-75 m-2 py-2  text-[#250843] dark:text-[#FFFFFF] ">
    A wand of jungle vines and moss that grants the wearer temporary flight...
  </div>
  <button
  onClick={() => navigator.clipboard.writeText("A wand of jungle vines and moss that grants the wearer temporary flight...")}
>
  <img className="mt-4 p-2 mr-2"
    src={copy} 
    alt="Copy" 
  />
</button>
</div>
<div className="flex">
<button className="bg-[#37E155] dark:bg-[#51FF70] px-10 py-1 m-4 mr-0">
  Remix
</button>
<button className="flex bg-[#FFFFFF] dark:bg-[#25272F] border-1 border-[#DBDBDB] dark:border-[#27282D] px-2 py-1 m-4">
  <div className="pt-1 text-[#04150B] dark:text-[#FFFFFF]">View</div>
  <img className="px-2 py-4 dark:py-3"
       src={darkMode ? weye : eye}
    alt="View" 
  />

</button>

  <img className="py-8 px-4"
   src={darkMode ? wshare : share}
    alt="Share" 
  />
  <img className="py-8"
  src={darkMode ? wdownload : download}
    alt="Download" 
  />
  <div className="text-[#7D7D7D] pt-7 px-2">
    201
  </div>

</div>
</div>
</div>
    </div>



    <div className="flex justify-center" style={{
    fontFamily: '"IBM Plex Mono", monospace',
    fontWeight: 500,
    fontStyle: "normal",   
    fontSize: "16px",
    letterSpacing: "0px",
  }}>
<button className="flex bg-[#FFFFFF] border-1 border-[#DBDBDB] text-[#04150B] dark:text-[#FFFFFF]  dark:bg-[#141D2A] dark:border-[#27282D] p-2  m-4">
Load more
</button>
<button className="flex bg-[#E4E4E4] dark:bg-[#283140] text-[#04150B] dark:text-[#FFFFFF]   p-2 my-4">
View all
</button>
</div>

    </div>
    </div>
    </div>
  );
}