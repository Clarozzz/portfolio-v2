import { LuArrowUpRight, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import BentoItem from "./BentoItem";
import Link from "next/link";
import Image from "next/image";
import { FaAws, FaDigitalOcean, FaDocker, FaGitAlt, FaLinux, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { SiKubernetes, SiSpringboot } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import TechBadge from "./TechBadge";
import { BiLogoTypescript } from "react-icons/bi";

const cardColor = "bg-linear-to-br from-white to-slate-100";
const cardBorder = "border border-slate-200/60";
const iconStyle = `
transition-all duration-300 
hover:text-blue-600 
text-4xl
`;

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 xl:auto-rows-fr gap-6 h-full px-4 py-10 xl:py-0 animate-fadeIn mx-auto">

      <BentoItem className={`col-span-1 md:col-span-2 xl:col-span-5 xl:row-span-4 border ${cardBorder} ${cardColor} flex flex-col justify-between`}>
        <div className="text-blue-600 font-medium mb-4 xl:mb-0">
          Who am I?
        </div>
        <div className="text-3xl xl:text-4xl leading-tight tracking-tight">
          Software
          <span className="font-bold text-purple-600"> Developer </span>
          and
          <span className="font-bold text-purple-600"> DevOps </span>
          engineer
        </div>
      </BentoItem>

      <BentoItem
        className={`col-span-1 md:col-span-1 xl:col-span-3 xl:row-span-4 relative overflow-hidden ${cardColor} p-0 min-h-75 xl:min-h-full`}
      >
        <Image
          src="/profile1.jpeg"
          alt="Profile picture"
          fill
          className="object-cover scale-105 hover:scale-110 transition duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </BentoItem>

      {/* Tech Stack */}
      <BentoItem className={`col-span-1 md:col-span-1 xl:col-span-4 xl:row-span-6 rounded-3xl p-8 ${cardColor} ${cardBorder}`}>
        <p className="text-blue-600 font-medium"> Tech Stack </p>
        <hr className="my-4 text-slate-300/80" />
        <div className="space-y-4 xl:space-y-8">
          <div>
            <h3 className="font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="Next.js"><RiNextjsFill className="text-xl" /></TechBadge>
              <TechBadge name="React"><RiReactjsFill className="text-xl" /></TechBadge>
              <TechBadge name="TypeScript"><BiLogoTypescript className="text-xl" /></TechBadge>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="Spring Boot"><SiSpringboot className="text-xl" /></TechBadge>
              <TechBadge name="Node.js"><FaNodeJs className="text-xl" /></TechBadge>
              <TechBadge name="SQL"><PiFileSql className="text-xl" /></TechBadge>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">DevOps & Tools</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="Docker"><FaDocker className="text-xl" /></TechBadge>
              <TechBadge name="Kubernetes"><SiKubernetes className="text-xl" /></TechBadge>
              <TechBadge name="Git"><FaGitAlt className="text-xl" /></TechBadge>
              <TechBadge name="Linux"><FaLinux className="text-xl" /></TechBadge>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Cloud</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="AWS"><FaAws className="text-xl" /></TechBadge>
              <TechBadge name="DigitalOcean"><FaDigitalOcean className="text-xl" /></TechBadge>
            </div>
          </div>
        </div>
      </BentoItem>

      {/* Description Text */}
      <BentoItem className={`col-span-1 md:col-span-1 xl:col-span-4 xl:row-span-3 border ${cardBorder} ${cardColor} flex flex-col justify-between`}>
        <div className="text-blue-600 font-medium mb-2">
          About me
        </div>
        <div className="text-slate-700 text-sm xl:text-base">
          Hi!, I&apos;m Cesar, a software developer and DevOps engineer based in Tegucigalpa, Honduras.
          Passionate about creating efficient solutions and continuously learning new technologies.
        </div>
      </BentoItem>

      <Link
        href="mailto:cesar.claros49@gmail.com"
        className="col-span-1 md:col-span-1 xl:col-span-4 xl:row-span-3 rounded-3xl px-6 py-8 drop-shadow-md bg-linear-to-br from-blue-600 to-purple-600 text-white transition-transform duration-300 hover:scale-[1.02]"
      >
        <div className="flex flex-col justify-between h-full min-h-40 xl:min-h-full">
          <div className="text-lg"> Have some questions? </div>
          <div className="text-3xl xl:text-4xl font-bold flex justify-between items-center">
            <span>Contact me</span>
            <LuArrowUpRight />
          </div>
        </div>
      </Link>

      {/* Socials */}
      <BentoItem className={`col-span-1 md:col-span-2 xl:col-span-4 xl:row-span-1 border ${cardBorder} ${cardColor} flex items-center justify-around text-3xl`}>
        <Link href="https://github.com/Clarozzz" target="_blank" className={`${iconStyle}`}>
          <LuGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/cesar-claros/" target="_blank" className={`${iconStyle}`}>
          <LuLinkedin />
        </Link>
        <Link href="mailto:cesar.claros49@gmail.com" target="_blank" className={`${iconStyle}`}>
          <LuMail />
        </Link>
      </BentoItem>
    </div>
  );
}