import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "SaimCis",
    description: "Medical care system, developed collaboratively as a team project. Built with Next.js and Supabase.",
    image: "/saimcis.png",
    demoUrl: "https://saimcis.vercel.app/",
  },
  {
    title: "Junker",
    description: "Auto parts marketplace, developed collaboratively as a team project. Built with Next.js, FastAPI, Cloudinary, Stripe and Supabase.",
    image: "/junker.png",
    demoUrl: "https://junker.vercel.app/",
    githubUrl: "https://github.com/Clarozzz/junker-frontend"
  },
    {
    title: "Todo app",
    description: "A simple todo app built with React native, SQLite and TypeScript.",
    image: "/todo.png",
    githubUrl: "https://github.com/Clarozzz/todo-app"
  },
  {
    title: "Portfolio",
    description: "My personal portfolio (this very website) built with Next.js and Tailwind CSS.",
    image: "/portfolio.png",
    demoUrl: "https://cesar-claros.vercel.app/",
    githubUrl: "https://github.com/Clarozzz/portfolio-v2"
  },
  {
    title: "Blog Template",
    description: "A responsive blog template built with Astro.",
    image: "/blog.png",
    demoUrl: "https://blog-clarozzz.vercel.app/",
    githubUrl: "https://github.com/Clarozzz/blog"
  },
];

export default function Projects() {
  return (
    <div id="projects" className="px-4 pt-28 pb-8">
      <h2 className="mb-6 font-bold text-5xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {projects.map((proj, i) => (
          <ProjectCard key={i} project={proj} />
        ))}
      </div>
    </div>
  )
}
