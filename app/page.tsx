import Work from "@/components/Work";
import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Toolbox from "@/components/toolbox";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <div className="mx-auto max-w-7xl gap-x-12 gap-y-12 md:gap-y-6 p-6 lg:px-8 py-32 grid grid-cols-1 md:grid-cols-2">
        <Toolbox />
        <About />
      </div>
    </div>
  );
}
