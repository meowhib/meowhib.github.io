import Work from "@/components/Work";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Work />
    </div>
  );
}
