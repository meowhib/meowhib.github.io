import Work from "@/components/Work";
import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Toolbox from "@/components/toolbox";
import { getDictionary } from "@/dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="relative">
      <Navbar dict={dict} />
      <Hero dict={dict} />
      <Services dict={dict} />
      <Work dict={dict} />
      <div className="mx-auto max-w-7xl gap-x-12 gap-y-12 md:gap-y-6 p-6 lg:px-8 py-32 grid grid-cols-1 md:grid-cols-2">
        <Toolbox dict={dict} />
        <About dict={dict} />
      </div>
    </div>
  );
}
