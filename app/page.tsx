import BentoGrid from "@/components/BentoGrid";
import FinalSection from "@/components/FinalSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="lg:max-w-3/4 mx-auto xl:h-screen pt-18 xl:pt-28 pb-6">
        <BentoGrid />
      </div>
      <div className="xl:max-w-3/4 mx-auto">
        <Projects />
        <FinalSection />
      </div>
    </>
  );
}
