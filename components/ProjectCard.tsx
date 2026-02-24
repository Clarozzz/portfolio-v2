import Image from "next/image";
import Link from "next/link";
import { LuGithub, LuLink } from "react-icons/lu";

interface Project {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl drop-shadow-md">
      <div className="p-6">
        <div className="text-xl font-semibold flex gap-4">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              className="hover:text-purple-600 transition-colors"
            >
              <LuLink />
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="hover:text-blue-600 transition-colors"
            >
              <LuGithub />
            </Link>
          )}
        </div>

        {/* Imagen 4:3 */}
        <div className="relative w-full pt-[75%] mt-6 rounded-md overflow-hidden drop-shadow-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-102 cursor-pointer"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>

      <hr className="text-gray-400/50" />

      <div className="p-6">
        <h3 className="text-md font-semibold mb-2 text-blue-600">{project.title}</h3>
        <p className="text-gray-600 text-sm">{project.description}</p>
      </div>
    </div>
  )
}