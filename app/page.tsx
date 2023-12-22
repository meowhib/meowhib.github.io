import Work from "@/components/Work";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Work />
    </div>
  );
}
