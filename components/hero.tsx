import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8 py-40">
      <div className="md:flex flex-row w-full justify-start">
        <div className="w-full space-y-12">
          <div>
            <h1 className="font-bold text-5xl">Hi 👋</h1>
            <h1 className="font-bold text-5xl">I&apos;m Mouhib,</h1>
            <h1 className="font-bold text-5xl">Full stack web developer</h1>
          </div>
          <p className="text-xl text-gray-500">
            I have been helping businesses and startups<br></br>build
            professional websites to improve visitors into clients for the last
            5 years.
          </p>
          <Button variant="default" size="lg">
            Let&apos;s talk
          </Button>
        </div>
        {/* <div className="w-full justify-center mx-auto">
          <Image
            className="grayscale drop-shadow-lg rounded-3xl"
            src="/profile-picture.jpg"
            alt="/mouhib-ben-nasser-profile-picture"
            height={350}
            width={350}
          />
        </div> */}
      </div>
    </div>
  );
}
