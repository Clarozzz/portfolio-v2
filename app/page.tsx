import BentoGrid from "@/components/BentoGrid";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="lg:max-w-3/4 mx-auto md:h-screen pt-28 pb-6">
        <BentoGrid />
        <Projects />
      </div>
    </>
  );
}
