import left from "../icons/left.png";
import right from "../icons/right.png";
import punk from "../icons/punk.png";
import copy from "../icons/copy.png";
import eye from "../icons/eye.png";
import share from "../icons/share.png";
import download from "../icons/download.png";
export default function Crafts() {
  return (
   <div className="min-h-screen bg-[#F2F2F2]">
    <div className="p-8 m-8">
    <div className="p-2 m-2 pl-0" style={{
    fontFamily: '"IBM Plex Mono", monospace',
    fontWeight: 700,
    fontStyle: "normal",   
    fontSize: "24px",
    lineHeight: "32px",
    letterSpacing: "0px",
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
        <div className="border-1 bg-[#FFFFFF] border-[#DBDBDB] py-4 px-2 m-2">
<div className="flex items-center gap-1">
<img 
    src={left}
    alt="Left" 
  />
<img 
    src='/images/canon.png'
    alt="Canon" 
  />
  <img 
    src={right}
    alt="Right" 
  />
</div>
<div className="flex p-1 mr-1 ml-2">
  <div className="border-1 border-[#DBDBDB] px-2 m-1">
v1.0.0
  </div>
  <div className="border-1 border-[#DBDBDB]  px-2 m-1">
MC 1.21.5
  </div>
  <div className="border-1 border-[#DBDBDB] px-2 m-1">
Java
  </div>
  <div className="border-1 bg-[#FFDFDF] px-2 m-1">
Fun
  </div>
</div>
<div className="font-bold text-[24px] p-2 mx-2">
  Squid gun
</div>
<div className="flex mx-3">
  
<img className="m-1 p-1"
    src={punk}
    alt="Punk" 
  />
  <div className="py-1">
    CraftingPro
  </div>
</div>
<div className="flex items-start justify-between bg-[#F2F2F2] m-4 w-90">
  <div className="w-75 m-2 py-2">
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
<button className="bg-[#37E155] px-10 py-1 m-4 mr-0">
  Remix
</button>
<button className="flex bg-[#FFFFFF] border-1 border-[#DBDBDB] px-2 py-1 m-4">
  <div className="pt-1">View</div>
  <img className="px-2 py-4"
    src={eye} 
    alt="View" 
  />

</button>

  <img className="py-8 px-4"
    src={share} 
    alt="Share" 
  />
  <img className="py-8"
    src={download} 
    alt="Download" 
  />
  <div className="text-[#7D7D7D] pt-7 px-2">
    201
  </div>

</div>
</div>
</div>


<div className="flex flex-col">
        <div className="border-1 bg-[#FFFFFF] border-[#DBDBDB] py-4 px-2 m-2">
<div className="flex items-center gap-1">
<img 
    src={left}
    alt="Left" 
  />
<img 
    src='/images/fishes.png'
    alt="Fishes" 
  />
  <img 
    src={right}
    alt="Right" 
  />
</div>
<div className="flex p-1 mr-1 ml-2">
  <div className="border-1 border-[#DBDBDB] px-2 m-1">
v1.0.0
  </div>
  <div className="border-1 border-[#DBDBDB]  px-2 m-1">
MC 1.21.5
  </div>
  <div className="border-1 border-[#DBDBDB] px-2 m-1">
Java
  </div>
  <div className="border-1 bg-[#FFDFDF] px-2 m-1">
Fun
  </div>
</div>
<div className="font-bold text-[24px] p-2 mx-2">
  Squid gun
</div>
<div className="flex mx-3">
  
<img className="m-1 p-1"
    src={punk}
    alt="Punk" 
  />
  <div className="py-1">
    CraftingPro
  </div>
</div>
<div className="flex items-start justify-between bg-[#F2F2F2] m-4 w-90">
  <div className="w-75 m-2 py-2">
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
<button className="bg-[#37E155] px-10 py-1 m-4 mr-0">
  Remix
</button>
<button className="flex bg-[#FFFFFF] border-1 border-[#DBDBDB] px-2 py-1 m-4">
  <div className="pt-1">View</div>
  <img className="px-2 py-4"
    src={eye} 
    alt="View" 
  />

</button>

  <img className="py-8 px-4"
    src={share} 
    alt="Share" 
  />
  <img className="py-8"
    src={download} 
    alt="Download" 
  />
  <div className="text-[#7D7D7D] pt-7 px-2">
    201
  </div>

</div>
</div>
</div>

  <div className="flex flex-col">
         <div className="border-1 bg-[#FFFFFF] border-[#DBDBDB] py-4 px-2 m-2">
<div className="flex items-center gap-1">
<img 
    src={left}
    alt="Left" 
  />
<img 
    src='/images/gun.png'
    alt="Gun" 
  />
  <img 
    src={right}
    alt="Right" 
  />
</div>
<div className="flex p-1 mr-1 ml-2">
  <div className="border-1 border-[#DBDBDB] px-2 m-1">
v1.0.0
  </div>
  <div className="border-1 border-[#DBDBDB]  px-2 m-1">
MC 1.21.5
  </div>
  <div className="border-1 border-[#DBDBDB] px-2 m-1">
Java
  </div>
  <div className="border-1 bg-[#FFDFDF] px-2 m-1">
Fun
  </div>
</div>
<div className="font-bold text-[24px] p-2 mx-2">
  Squid gun
</div>
<div className="flex mx-3">
  
<img className="m-1 p-1"
    src={punk}
    alt="Punk" 
  />
  <div className="py-1">
    CraftingPro
  </div>
</div>
<div className="flex items-start justify-between bg-[#F2F2F2] m-4 w-90">
  <div className="w-75 m-2 py-2">
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
<button className="bg-[#37E155] px-10 py-1 m-4 mr-0">
  Remix
</button>
<button className="flex bg-[#FFFFFF] border-1 border-[#DBDBDB] px-2 py-1 m-4">
 <div className="pt-1">View</div>
  <img className="px-2 py-4"
    src={eye} 
    alt="View" 
  />

</button>

  <img className="py-8 px-4"
    src={share} 
    alt="Share" 
  />
  <img className="py-8"
    src={download} 
    alt="Download" 
  />
  <div className="text-[#7D7D7D] pt-7 px-2">
    201
  </div>

</div>
</div>
</div>  

<div className="flex flex-col">
       <div className="border-1 bg-[#FFFFFF] border-[#DBDBDB] py-4 px-2 m-2">
<div className="flex items-center gap-1">
<img 
    src={left}
    alt="Left" 
  />
<img 
    src='/images/metalhand.png'
    alt="Metal hand" 
  />
  <img 
    src={right}
    alt="Right" 
  />
</div>
<div className="flex p-1 mr-1 ml-2">
  <div className="border-1 border-[#DBDBDB] px-2 m-1">
v1.0.0
  </div>
  <div className="border-1 border-[#DBDBDB]  px-2 m-1">
MC 1.21.5
  </div>
  <div className="border-1 border-[#DBDBDB] px-2 m-1">
Java
  </div>
  <div className="border-1 bg-[#FFDFDF] px-2 m-1">
Fun
  </div>
</div>
<div className="font-bold text-[24px] p-2 mx-2">
  Squid gun
</div>
<div className="flex mx-3">
  
<img className="m-1 p-1"
    src={punk}
    alt="Punk" 
  />
  <div className="py-1">
    CraftingPro
  </div>
</div>
<div className="flex items-start justify-between bg-[#F2F2F2] m-4 w-90">
  <div className="w-75 m-2 py-2">
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
<button className="bg-[#37E155] px-10 py-1 m-4 mr-0">
  Remix
</button>
<button className="flex bg-[#FFFFFF] border-1 border-[#DBDBDB] px-2 py-1 m-4">
  <div className="pt-1">View</div>
  <img className="px-2 py-4"
    src={eye} 
    alt="View" 
  />

</button>

  <img className="py-8 px-4"
    src={share} 
    alt="Share" 
  />
  <img className="py-8"
    src={download} 
    alt="Download" 
  />
  <div className="text-[#7D7D7D] pt-7 px-2">
    201
  </div>

</div>
</div>
</div>

<div className="flex flex-col">
        <div className="border-1 bg-[#FFFFFF] border-[#DBDBDB] py-4 px-2 m-2">
<div className="flex items-center gap-1">
<img 
    src={left}
    alt="Left" 
  />
<img 
    src='/images/shooter.png'
    alt="Shooter" 
  />
  <img 
    src={right}
    alt="Right" 
  />
</div>
<div className="flex p-1 mr-1 ml-2">
  <div className="border-1 border-[#DBDBDB] px-2 m-1">
v1.0.0
  </div>
  <div className="border-1 border-[#DBDBDB]  px-2 m-1">
MC 1.21.5
  </div>
  <div className="border-1 border-[#DBDBDB] px-2 m-1">
Java
  </div>
  <div className="border-1 bg-[#FFDFDF] px-2 m-1">
Fun
  </div>
</div>
<div className="font-bold text-[24px] p-2 mx-2">
  Squid gun
</div>
<div className="flex mx-3">
  
<img className="m-1 p-1"
    src={punk}
    alt="Punk" 
  />
  <div className="py-1">
    CraftingPro
  </div>
</div>
<div className="flex items-start justify-between bg-[#F2F2F2] m-4 w-90">
  <div className="w-75 m-2 py-2">
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
<button className="bg-[#37E155] px-10 py-1 m-4 mr-0">
  Remix
</button>
<button className="flex bg-[#FFFFFF] border-1 border-[#DBDBDB] px-2 py-1 m-4">
  <div className="pt-1">View</div>
  <img className="px-2 py-4"
    src={eye} 
    alt="View" 
  />

</button>

  <img className="py-8 px-4"
    src={share} 
    alt="Share" 
  />
  <img className="py-8"
    src={download} 
    alt="Download" 
  />
  <div className="text-[#7D7D7D] pt-7 px-2">
    201
  </div>

</div>
</div>
</div>
<div className="flex flex-col">
        <div className="border-1 bg-[#FFFFFF] border-[#DBDBDB] py-4 px-2 m-2">
<div className="flex items-center gap-1">
<img 
    src={left}
    alt="Left" 
  />
<img 
    src='/images/loop.png'
    alt="Loop" 
  />
  <img 
    src={right}
    alt="Right" 
  />
</div>
<div className="flex p-1 mr-1 ml-2">
  <div className="border-1 border-[#DBDBDB] px-2 m-1">
v1.0.0
  </div>
  <div className="border-1 border-[#DBDBDB]  px-2 m-1">
MC 1.21.5
  </div>
  <div className="border-1 border-[#DBDBDB] px-2 m-1">
Java
  </div>
  <div className="border-1 bg-[#FFDFDF] px-2 m-1">
Fun
  </div>
</div>
<div className="font-bold text-[24px] p-2 mx-2">
  Squid gun
</div>
<div className="flex mx-3">
  
<img className="m-1 p-1"
    src={punk}
    alt="Punk" 
  />
  <div className="py-1">
    CraftingPro
  </div>
</div>
<div className="flex items-start justify-between bg-[#F2F2F2] m-4 w-90">
  <div className="w-75 m-2 py-2">
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
<button className="bg-[#37E155] px-10 py-1 m-4 mr-0">
  Remix
</button>
<button className="flex bg-[#FFFFFF] border-1 border-[#DBDBDB] px-2 py-1 m-4">
  <div className="pt-1">View</div>
  <img className="px-2 py-4"
    src={eye} 
    alt="View" 
  />

</button>

  <img className="py-8 px-4"
    src={share} 
    alt="Share" 
  />
  <img className="py-8"
    src={download} 
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
<button className="flex bg-[#FFFFFF] border-1 border-[#DBDBDB] p-2  m-4">
Load more
</button>
<button className="flex bg-[#E4E4E4] border-1 border-[#DBDBDB] p-2 my-4">
View all
</button>
</div>

    </div>
    </div>
  );
}