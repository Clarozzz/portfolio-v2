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

const cardColor = "bg-gradient-to-br from-white to-slate-100";
const cardBorder = "border border-slate-200/60";
const iconStyle = `
transition-all duration-300 
hover:text-blue-600 
text-4xl
`;
const iconSize = "text-xl";

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:auto-rows-fr gap-6 h-full px-4 py-10 lg:py-0 animate-fadeIn">

      {/* About Me Title */}
      <BentoItem className={`col-span-1 lg:col-span-5 lg:row-span-4 border ${cardBorder} ${cardColor} flex flex-col justify-between p-8`}>
        <div className="text-blue-600 font-medium mb-4 lg:mb-0">
          About me
        </div>
        <div className="text-3xl lg:text-4xl leading-tight tracking-tight">
          Software
          <span className="font-bold text-purple-600"> Developer </span>
          and
          <span className="font-bold text-purple-600"> DevOps </span>
          engineer
        </div>
      </BentoItem>

      {/* Profile Image */}
      <BentoItem
        className={`col-span-1 lg:col-span-3 lg:row-span-4 relative overflow-hidden ${cardColor} p-0 min-h-75 lg:min-h-full`}
      >
        <Image
          src="/profile1.jpeg"
          alt="Profile picture"
          fill
          className="object-cover scale-105 hover:scale-110 transition duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </BentoItem>

      {/* Tech Stack */}
      <BentoItem className={`col-span-1 lg:col-span-4 lg:row-span-6 rounded-3xl p-8 ${cardColor} ${cardBorder}`}>
        <p className="text-blue-600 font-medium"> Tech Stack </p>
        <hr className="my-4 text-slate-300/80" />
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              <TechBadge name="Next.js"><RiNextjsFill className={iconSize} /></TechBadge>
              <TechBadge name="React"><RiReactjsFill className={iconSize} /></TechBadge>
              <TechBadge name="TypeScript"><BiLogoTypescript className={iconSize} /></TechBadge>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Backend</h3>
            <div className="flex flex-wrap gap-3">
              <TechBadge name="Spring Boot"><SiSpringboot className={iconSize} /></TechBadge>
              <TechBadge name="Node.js"><FaNodeJs className={iconSize} /></TechBadge>
              <TechBadge name="SQL"><PiFileSql className={iconSize} /></TechBadge>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">DevOps & Tools</h3>
            <div className="flex flex-wrap gap-3">
              <TechBadge name="Docker"><FaDocker className={iconSize} /></TechBadge>
              <TechBadge name="Kubernetes"><SiKubernetes className={iconSize} /></TechBadge>
              <TechBadge name="Git"><FaGitAlt className={iconSize} /></TechBadge>
              <TechBadge name="Linux"><FaLinux className={iconSize} /></TechBadge>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Cloud</h3>
            <div className="flex flex-wrap gap-3">
              <TechBadge name="AWS"><FaAws className={iconSize} /></TechBadge>
              <TechBadge name="DigitalOcean"><FaDigitalOcean className={iconSize} /></TechBadge>
            </div>
          </div>
        </div>
      </BentoItem>

      {/* Description Text */}
      <BentoItem className={`col-span-1 lg:col-span-4 lg:row-span-3 border ${cardBorder} ${cardColor} flex flex-col justify-between p-8`}>
        <div className="text-blue-600 font-medium mb-2">
          About me
        </div>
        <div className="text-slate-700">
          Hi!, I&apos;m Cesar, a software developer and DevOps engineer based in Tegucigalpa, Honduras.
          Passionate about creating efficient solutions and continuously learning new technologies.
        </div>
      </BentoItem>

      {/* Contact Link */}
      <Link
        href="mailto:cesar.claros49@gmail.com"
        className="col-span-1 lg:col-span-4 lg:row-span-3 rounded-3xl px-6 py-8 drop-shadow-md bg-linear-to-br from-blue-600 to-purple-600 text-white transition-transform duration-300 hover:scale-[1.02]"
      >
        <div className="flex flex-col justify-between h-full min-h/30 lg:min-h-full">
          <div> Have some questions? </div>
          <div className="text-3xl lg:text-4xl font-bold flex justify-between items-center">
            <span>Contact me</span>
            <LuArrowUpRight />
          </div>
        </div>
      </Link>

      {/* Socials */}
      <BentoItem className={`col-span-1 lg:col-span-4 lg:row-span-1 border ${cardBorder} ${cardColor} flex items-center justify-around text-3xl py-6 lg:py-0`}>
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
  )
}