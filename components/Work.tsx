import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Work({ dict }: { dict: any }) {
  return (
    <div className="mx-auto max-w-7xl p-6 space-y-20 mt-24" id="work">
      <h1 className="text-4xl font-bold text-center">
        {dict?.work?.my_latest_work}
      </h1>
      <div className="flex flex-col space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
          <div className="col-span-5 md:col-span-3 py-6 space-y-4">
            <h1 className="text-2xl font-bold">
              {dict?.work?.eatourist.title}
            </h1>
            <Badge>{dict?.work?.eatourist.state}</Badge>
            <p className="text-lg">{dict?.work?.eatourist.paragraph_1}</p>
            <p className="text-lg">{dict?.work?.eatourist.paragraph_2}</p>
            <div className="flex flex-col space-y-6">
              <p className="text-lg">
                {dict?.work?.click_here_to_check_the_website_yourself}
              </p>
              <Link href="https://eatourist.com">
                <div className="flex w-ful py-3 rounded-lg space-x-4 items-center">
                  <div className="aspect-square h-16 w-16 bg-gray-300 rounded-lg relative">
                    <Image
                      className="rounded-lg object-cover object-center"
                      src="/eatourist-logo.png"
                      alt="bagagevoyage.com logo"
                      fill
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h1 className="font-bold">
                      {dict?.work?.eatourist.link_text}
                    </h1>
                    <p className="text-gray-600 text-sm">
                      {dict?.work?.eatourist.link_description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-5 w-full aspect-square grid grid-cols-8 grid-rows-2 gap-4">
            <div className="rounded-lg bg-gray-200 col-span-4 border-gray-200 border-2 relative">
              <Image
                className="rounded-lg object-cover object-center"
                src="/eatourist-logo.png"
                alt="eatourist logo"
                fill
              />
            </div>
            <div className="rounded-lg bg-white col-span-4 row-span-2 border-gray-200 border-2 relative">
              <Image
                className="rounded-lg object-contain object-center"
                src="/eatourist-menu-arabic.jpg"
                alt="eatourist logo"
                fill
              />
            </div>
            <div className="rounded-lg bg-white col-span-2 relative border-gray-200 border-2 ">
              <Image
                className="rounded-lg object-contain object-center"
                src="/eatourist-menu-english.jpg"
                alt="eatourist menu screenshot"
                fill
              />
            </div>
            {/* <div className="rounded-lg bg-white col-span-2 relative border-gray-200 border-2 ">
              <Image
                className="rounded-lg object-contain object-center"
                src="/eatourist-menu-arabic.jpg"
                alt="eatourist menu screenshot"
                fill
              />
            </div>
            <div className="rounded-lg bg-white col-span-2 relative border-gray-200 border-2 ">
              <Image
                className="rounded-lg object-contain object-center"
                src="/eatourist-menu-russian.jpg"
                alt="eatourist menu screenshot"
                fill
              />
            </div> */}
            <div className="rounded-lg bg-white col-span-2 relative border-gray-200 border-2 ">
              <Image
                className="rounded-lg object-contain object-center"
                src="/eatourist-menu-chinese.jpg"
                alt="eatourist menu screenshot"
                fill
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
          <div className="col-span-5 md:col-span-3 py-6 space-y-4">
            <h1 className="text-2xl font-bold">
              {dict?.work?.bagagevoyage.title}
            </h1>
            <Badge>{dict?.work?.bagagevoyage.state}</Badge>

            <p className="text-lg">
              {dict?.work?.bagagevoyage.paragraph_1}
              <Link
                className="underline decoration-2 hover:text-blue-500 inline-flex items-center"
                href="https://www.instagram.com/amwalancom/"
              >
                Amwalancom <ExternalLinkIcon className="h-4 w-4" />
              </Link>{" "}
              {dict?.work?.bagagevoyage.paragraph_2}
            </p>
            <p className="text-lg">{dict?.work?.bagagevoyage.paragraph_3}</p>
            <p className="text-lg">{dict?.work?.bagagevoyage.paragraph_4}</p>
            <p className="text-lg">{dict?.work?.bagagevoyage.reponsible_for}</p>
            <ul className="list-disc list-inside">
              <li>{dict?.work?.bagagevoyage.responsible_for_1}</li>
              <li>{dict?.work?.bagagevoyage.responsible_for_2}</li>
              <li>{dict?.work?.bagagevoyage.responsible_for_3}</li>
            </ul>
            <div className="flex flex-col space-y-6">
              <p className="text-lg">
                {dict?.work?.click_here_to_check_the_website_yourself}
              </p>
              <Link href="https://bagagevoyage.com">
                <div className="flex w-ful py-3 rounded-lg space-x-4 items-center">
                  <div className="aspect-square h-16 w-16 bg-gray-300 rounded-lg relative">
                    <Image
                      className="rounded-lg object-cover object-center"
                      src="/bagagevoyage-logo.jpg"
                      alt="bagagevoyage.com logo"
                      fill
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h1 className="font-bold">
                      {dict?.work?.bagagevoyage.link_text}
                    </h1>
                    <p className="text-gray-600 text-sm">
                      {dict?.work?.bagagevoyage.link_description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-span-5 w-full aspect-square grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-200 col-span-2 border-2 border-gray-200 relative">
              <Image
                className="rounded-lg object-cover object-top"
                src="/bagagevoyage-screenshot.jpg"
                alt="bagagevoyage.com screenshot"
                fill
              />
            </div>
            <div className="rounded-lg bg-gray-200 border-2 border-gray-200 relative">
              <Image
                className="rounded-lg object-cover object-center"
                src="/bagagevoyage-logo.jpg"
                alt="bagagevoyage.com logo"
                fill
              />
            </div>
            <div className="rounded-lg bg-white border-2 border-gray-200 relative">
              <Image
                className="rounded-lg object-contain object-center"
                src="/bagagevoyage-auth.png"
                alt="bagagevoyage.com logo"
                fill
              />
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-8 gap-x-6">
          <div className="col-span-3 py-6 space-y-4">
            <h1 className="text-2xl font-bold">Udefin</h1>
            <p className="text-lg">
              A side project of a web application that helps students learn
              through their downloaded materials like YouTube playlists or
              downloaded courses.
            </p>
            <p className="text-lg">
              Udefin acts like streaming service that streams courses to
              students, keep track of where they left off and an overview of the
              courses{" "}
            </p>
            <p className="text-lg">
              👇 click here to check the website yourself
            </p>
          </div>
          <div className="col-span-5 w-full aspect-square grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-200 col-span-2 border-gray-200 border-2"></div>
            <div className="rounded-lg bg-gray-200 border-gray-200 border-2"></div>
            <div className="rounded-lg bg-gray-200 border-gray-200 border-2"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
