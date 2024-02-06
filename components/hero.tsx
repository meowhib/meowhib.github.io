import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero({ dict }: { dict: any }) {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8 py-48">
      <div className="md:flex flex-row w-full justify-start">
        <div className="w-full space-y-8">
          <h1 className="font-bold text-5xl whitespace-pre-line">
            {dict?.hero?.title}{" "}
          </h1>
          <p className="text-xl text-gray-500 whitespace-pre-line">
            {dict?.hero?.description}
          </p>
          <div>
            <Link href={"mailto:contact@meowhib.com?subject=Contact"}>
              <Button variant="default" size="lg">
                {dict?.hero?.cta}
              </Button>
            </Link>
          </div>
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
