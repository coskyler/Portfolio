"use client";

import { AiOutlineLink, AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

const tagProperties = " text-sm rounded-md px-2 border"

const tagList = {
  java: <div key="java" className={"border-red-400 text-red-400" + tagProperties}>Java</div>,
  node: <div key="node" className={"border-green-400 text-green-400" + tagProperties}>Node.js</div>,
  express: <div key="express" className={"border-orange-400 text-orange-400" + tagProperties}>Express</div>,
  docker: <div key="docker" className={"border-sky-400 text-sky-400" + tagProperties}>Docker</div>,
  postgresql: <div key="postgresql" className={"border-blue-400 text-blue-400" + tagProperties}>PostgreSQL</div>,
  mysql: <div key="mysql" className={"border-orange-400 text-orange-400" + tagProperties}>MySQL</div>,
  threejs: <div key="threejs" className={"border-purple-400 text-purple-400" + tagProperties}>Three.js</div>,
  typescript: <div key="typescript" className={"border-blue-400 text-blue-400" + tagProperties}>TypeScript</div>,
  javascript: <div key="javascript" className={"border-yellow-400 text-yellow-400" + tagProperties}>JavaScript</div>,
  php: <div key="php" className={"border-indigo-400 text-indigo-400" + tagProperties}>PHP</div>,
  react: <div key="react" className={"border-cyan-400 text-cyan-400" + tagProperties}>React</div>,
  redis: <div key="redis" className={"border-red-400 text-red-400" + tagProperties}>Redis</div>,
  websockets: <div key="websockets" className={"border-teal-400 text-teal-400" + tagProperties}>WebSockets</div>,
  unity: <div key="unity" className={"border-indigo-400 text-indigo-400" + tagProperties}>Unity</div>,
  csharp: <div key="csharp" className={"border-violet-400 text-violet-400" + tagProperties}>C#</div>,
  nginx: <div key="nginx" className={"border-lime-400 text-lime-400" + tagProperties}>Nginx</div>,
  apache: <div key="apache" className={"border-red-300 text-red-300" + tagProperties}>Apache</div>,
  nextjs: <div key="nextjs" className={"border-gray-300 text-gray-300" + tagProperties}>Next.js</div>,
  gemini: <div key="gemini" className={"border-emerald-400 text-emerald-400" + tagProperties}>Gemini</div>,
};


const cardColor = '#040404';

export default function ProjectCard({ title, video, poster, desc, link, youtube, github, tags }) {
  const videoRef = useRef(null);
  const pointRef = useRef(null);

  const [pointX, setPointX] = useState(0);
  const [pointY, setPointY] = useState(0);
  const [pointOpacity, setPointOpacity] = useState(0);

  return (
    <div 
      className={`relative flex flex-col w-full bg-[#040404] shadow-md shadow-white/20 rounded-lg border border-neutral-800 overflow-hidden`}
      onMouseEnter={() => {
        setPointOpacity(.05);
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        setPointOpacity(0);

        const v = videoRef.current;
        if (!v) return;

        v.pause();

        requestAnimationFrame(() => {
          v.currentTime = 0;
        });
      }}
      onMouseMove={(e) => {
        if(!pointRef.current) return;

        const rect = e.currentTarget.getBoundingClientRect(); // this div’s rect
        setPointX(e.clientX - rect.left);
        setPointY(e.clientY - rect.top);
      }}
    >
      <div
        ref={pointRef}
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out z-100"
        style={{
          opacity: pointOpacity,
          background: `radial-gradient(circle at ${pointX}px ${pointY}px, ${"#fff8e7"}, transparent 80%)`,
        }}
      />

      <h3 className="text-3xl mx-6 mt-6 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2 mx-6 mb-4">
        {tags.map((tag) => (
          tagList[tag]
        ))}
      </div>

      <div className="relative opacity-100">
        <video src={video} ref={videoRef} poster={poster} className="inset-0 w-full h-full" muted loop playsInline webkit-playsinline="true"/>
        <div className={`absolute top-0 w-full h-[5%] z-10`} style={{backgroundImage: `linear-gradient(to top, transparent, ${cardColor})`}}/>
        <div className={`absolute bottom-0 w-full h-[5%] z-10`} style={{backgroundImage: `linear-gradient(to bottom, transparent, ${cardColor})`}}/>
      </div>

      <h2 className="text-md mx-6 py-4 mb-auto">{desc}</h2>

      <div className="flex gap-2 mt-3 ml-auto m-4">
        <a href={link} target="_blank" rel="noopener noreferrer" className={`${link ? "" : "hidden"}`}>
          <AiOutlineLink className="w-7 h-7"/>
        </a>
        <a href={youtube} target="_blank" rel="noopener noreferrer" className={`${youtube ? "" : "hidden"}`}>
          <AiFillYoutube className="w-7 h-7"/>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className={`${github ? "" : "hidden"}`}>
          <AiFillGithub className="w-7 h-7"/>
        </a>
      </div>
    </div>
  );
}