import { Briefcase, Code, Cpu, Shield, Zap } from "lucide-react";
import TechBadge from "./TechBadge";
import OportunityBadge from "./OportunityBadge";

export default function FinalSection() {
  return (
    <div className="animate-fadeIn p-4 mb-12 mt-10 rounded-3xl drop-shadow-md">

      <div className="bg-linear-to-br from-white to-slate-100 p-10 border border-slate-200/60 rounded-3xl space-y-10">

        <div className="space-y-4">
          <h2 className="text-4xl max-w-sm md:text-5xl font-bold bg-linear-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
            How I Work
          </h2>
          <p className="text-slate-600">
            Specializing in the development of scalable systems and robust architectures with a DevOps mindset. My approach combines clean code efficiency with process automation to deliver high-performance solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="">
            <h3 className="flex items-center gap-3 text-xl font-bold mb-2">
              <Code className="text-blue-600" size={30} />
              Engineering principles
            </h3>
            <ul className="grid gap-1">
              {[
                { title: "Clean architecture", desc: "Clean and maintainable code.", icon: <Cpu size={18} /> },
                { title: "DevOps culture", desc: "Automation over manual processes.", icon: <Zap size={18} /> },
                { title: "Security by Design", desc: "Security integrated from day 0.", icon: <Shield size={18} /> },
              ].map((item, i) => (
                <li key={i} className="group flex gap-3 p-3">
                  <span className="mt-1 text-blue-600">{item.icon}</span>
                  <div>
                    <span className="block font-bold">{item.title}</span>
                    <span className="text-sm text-slate-600">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="flex items-center gap-3 text-xl font-bold mb-2">
                <Briefcase className="text-blue-600" size={30} />
                Open to oportunities
              </h3>
              <div className="flex flex-wrap gap-2 mt-6">
                <OportunityBadge name="Frontend roles" />
                <OportunityBadge name="Backend roles" />
                <OportunityBadge name="DevOps Engineering" />
                <OportunityBadge name="Freelance projects" />
                <OportunityBadge name="Startups" />
              </div>
            </div>
            <div className="mb-3">
              <a href="mailto:cesar.claros49@gmail.com" className="flex justify-center w-full px-6 py-3 font-bold text-white bg-linear-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
                ¿Hablamos de tu próximo proyecto?
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}