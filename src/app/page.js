"use client"

import ProjectCard from "@/components/projectcard";
import Threads from "@/components/threads";
import LogoLoop from "@/components/logoloop";
import Image from "next/image";
import { AiFillGithub, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiDocker } from "react-icons/si";
import { DiJava, DiNodejsSmall, DiRedis, DiPostgresql, DiMysql } from "react-icons/di";
import { useRef, useState, useEffect, useMemo } from "react";

const skillLogos = [
  //frontend
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },

  //backend
  { node: <DiNodejsSmall />, title: "Node.js", href: "https://nodejs.org" },
  { node: <DiRedis />, title: "Redis", href: "https://redis.io" },
  { node: <DiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <DiMysql />, title: "MySQL", href: "https://www.mysql.com" },

  //languages
  { node: <DiJava />, title: "Java", href: "https://www.java.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },

  //environment
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
];

export default function Page() {
  const [navHidden, setNavHidden] = useState(false);
  const lastY = useRef(0)

  const jumping = useRef(false);

  const [navExpanded, setNavExpanded] = useState(false);

  const threadsMemo = useMemo(() => <Threads />, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (jumping.current) {
        jumping.current = false;
      } else {
        setNavHidden(y > lastY.current && y > 50);
        setNavExpanded(false);
      }

      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = () => {
    jumping.current = true;
    setNavExpanded(false);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex justify-center bg-gradient-to-b from-black via-black/90 to-transparent md:px-[10%] transition-transform duration-500 ${navHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <nav className="w-full max-w-200 flex justify-center gap-2 px-6 md:rounded-full bg-black border-b md:border border-neutral-800 md:my-4 items-center overflow-hidden">
          <button
            className='cursor-pointer hover:bg-neutral-200 hover:text-black h-12 mb-auto items-center flex px-1 md:hidden'
            onClick={() => setNavExpanded(!navExpanded)}
          >
            <AiOutlineMenu className={`w-7 h-7 transition-transform duration-300 ${navExpanded ? "rotate-90" : "rotate-0"}`} />
          </button>
          <div className={`flex md:gap-3 transition-[max-height] duration-500 overflow-hidden flex-col md:flex-row mb-auto ${navExpanded ? "max-h-64" : "max-h-0 md:max-h-none"}`}>
            <a href="#home" onClick={jump} className="shrink-0 flex items-center px-2 h-12 hover:bg-neutral-200 hover:text-black transition">Home</a>
            <a href="#about" onClick={jump} className="shrink-0 flex items-center px-2 h-12 hover:bg-neutral-200 hover:text-black transition">About</a>
            <a href="#projects" onClick={jump} className="shrink-0 flex items-center px-2 h-12 hover:bg-neutral-200 hover:text-black transition">Projects</a>
            <a href="#contact" onClick={jump} className="shrink-0 flex items-center px-2 h-12 hover:bg-neutral-200 hover:text-black transition">Contact</a>
          </div>
          <a
            className='ml-auto hover:bg-neutral-200 hover:text-black transition h-12 mb-auto items-center flex px-1'
            href="https://github.com/coskyler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="w-7 h-7" />
          </a>
          <a
            className='hover:bg-neutral-200 hover:text-black transition h-12 mb-auto items-center flex px-1'
            href="https://www.linkedin.com/in/skyler-quinby/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>
        </nav>
      </header>

      {threadsMemo}


      <main>
        <section id='home' className='w-full h-screen flex flex-col items-center justify-center'>
          <div className="-translate-y-10 font-bold max-w-[80%]">
            <p className="text-md">Hi, I&#39;m</p>
            <h1 className="text-[clamp(1rem,10vw,5.5rem)] mb-2">Skyler Quinby</h1>
            <p className="text-lg font-semibold max-w-[clamp(20ch,80vw,50ch)]">CS student at UCF · Studying full-stack development and system architecture</p>
          </div>

        </section>

        <section id='about' className='py-[clamp(6rem,15vw,10rem)] w-full flex items-center justify-center px-[10%]'>
          <div className="relative max-w-[80vw] flex flex-col items-center justify-center">

            <div className="flex mb-[clamp(6rem,16vw,9rem)]">
              <div className='w-full max-w-[90ch] flex flex-col'>
                <h2 className='text-[clamp(1.5rem,8vw,4rem)] font-bold'>About Me</h2>
                <div className="h-1 bg-gradient-to-r from-white to-transparent mb-6 w-[75%]" />
                <p className='text-lg leading-relaxed text-gray-200 mb-4'>
                  I&apos;m a computer science student at the University of Central Florida with an interest in building full-stack applications. I focus mainly on backend development and enjoy learning how large systems process data at scale.
                </p>
                <p className='text-lg leading-relaxed text-gray-200'>
                  I value working with others and enjoy the challenge of making complex systems work simply. Over time, I&apos;ve found that clear, purposeful code tends to stand the test of time. When I&apos;m not doing coursework, I&apos;m usually learning something new or exploring a new idea to build on.
                </p>
              </div>

              <div className="relative aspect-[2/3] w-full max-w-[15rem] hidden lg:block ml-30 shadow-md shadow-white/50 rounded-lg overflow-hidden self-center">
                <Image
                  className="object-contain"
                  src="/media/headshot.png"
                  alt=""
                  fill
                />
              </div>

            </div>

            <div className="absolute bottom-0 left-0 right-0">
              <LogoLoop
                logos={skillLogos}
                speed={40}
                direction="left"
                logoHeight="clamp(2.2rem, 6vw, 3rem)"
                gap="clamp(1.3rem, 3vw, 2rem)"
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#000"
                ariaLabel="Technology partners"
              />
            </div>
          </div>
        </section>

        <section id='projects' className='py-[clamp(6rem,15vw,10rem)] w-full flex flex-col items-center justify-center px-[5%]'>
          <div className='w-[80vw] max-w-[90rem]'>
            <h2 className='text-[clamp(1.5rem,8vw,4rem)] font-bold'>Selected Work</h2>
            <div className="h-1 bg-gradient-to-r from-white to-transparent mb-6 w-[75%]" />
          </div>

          <div className="w-full max-w-[90rem] grid gap-4 grid-cols-1 [@media(min-width:50rem)]:grid-cols-2 [@media(min-width:75rem)]:grid-cols-3">
            <ProjectCard
              title="Fleet Control Dashboard"
              video="/media/projectVids/fcd.mp4"
              poster="/media/projectVidPosters/fcd.png"
              desc="A real-time dashboard for managing drone fleets, supporting live control, multi-user spectating, scan storage, and optimized 3D rendering."
              link="https://fleetcontrol.coskyler.com/scans/8"
              github="https://github.com/coskyler/Fleet-Control-Dashboard"
              tags={['react', 'threejs', 'node', 'express', 'websockets', 'redis', 'postgresql', 'docker', 'nginx']}
            />

            <ProjectCard
              title="Autonomous Indoor Drone Navigation"
              video="/media/projectVids/aidn.mp4"
              poster="/media/projectVidPosters/aidn.png"
              desc="Simulating a LiDAR-mounted drone that autonomously maps indoor spaces using frontier detection and custom pathfinding. Scans are streamed in real time to the Fleet Control Dashboard."
              github="https://github.com/coskyler/Autonomous-Indoor-Drone-Navigation"
              youtube="https://www.youtube.com/watch?v=1ApMZhoQgPc"
              tags={['unity', 'csharp', 'websockets']}
            />

            <ProjectCard
              title="Chang'e Finance"
              video="/media/projectVids/chang-e.mp4"
              poster="/media/projectVidPosters/chang-e.png"
              desc="A full-stack paper trading web app that lets users simulate investing with real-time stock data and AI-driven financial analysis."
              github="https://github.com/coskyler/Chang-e"
              link="https://changefinance.coskyler.com"
              tags={['nextjs', 'node', 'express', 'gemini', 'redis', 'postgresql', 'docker', 'nginx']}
            />

            <ProjectCard
              title="MyContacts"
              video="/media/projectVids/mycontacts.mp4"
              poster="/media/projectVidPosters/mycontacts.png"
              desc="A team-built app for adding and organizing contacts. Designed to be simple, scalable, and well-suited for collaborative development."
              github="https://github.com/coskyler/MyContacts"
              link="https://mycontacts.coskyler.com"
              tags={['apache', 'php', 'mysql', 'docker', 'nginx']}
            />
          </div>

          <a
            className='text-lg text-white mt-16 flex hover:underline'
            href="https://github.com/coskyler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="w-7 h-7 mr-2" />
            More on my GitHub
          </a>

        </section>

        <section id='contact' className='pt-[clamp(6rem,15vw,10rem)] pb-[clamp(4rem,30vw,20rem)] w-full flex items-center justify-center px-[10%]'>
          <div className='w-full max-w-[80ch] flex flex-col'>
            <h2 className='text-[clamp(1.5rem,8vw,4rem)] font-bold'>Let&apos;s Connect</h2>
            <div className="h-1 bg-gradient-to-r from-white to-transparent mb-6 w-[75%]" />
            <p className='text-lg text-gray-200 mb-16'>Get in touch with me:</p>
            <a href="https://www.linkedin.com/in/skyler-quinby/" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline mb-4 flex">
              <FaLinkedin className="w-7 h-7 mr-2" />
              LinkedIn
            </a>
            <a href="mailto:skylerpquinby@gmail.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline mb-4 flex">
              <TbMailFilled className="w-7 h-7 mr-2" />
              skylerpquinby@gmail.com
            </a>
          </div>
        </section>

        <footer className="py-6 text-center text-sm text-neutral-400 border-t border-neutral-700">
          <p className="mb-2">© 2025 Skyler Quinby</p>
          Built with <span className="font-semibold text-neutral-300">React</span> and <span className="font-semibold text-neutral-300">Next.js</span> · Deployed on <span className="font-semibold text-neutral-300">Vercel</span>
        </footer>
      </main>
    </>
  );
}