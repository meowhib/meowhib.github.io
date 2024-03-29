import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar({ dict }: { dict: any }) {
  const navigation = [
    { name: dict?.navbar.work, href: "#work" },
    { name: dict?.navbar.about, href: "#about" },
  ];

  return (
    <header className="backdrop-blur-xl bg-white/40 fixed top-0 left-0 right-0 z-10 border-b-2 border-gray-100">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Image
            className="h-12 w-auto"
            src="/moji.png"
            alt=""
            height={64}
            width={64}
          />
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <div className="space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div>
            <Link href={"mailto:contact@meowhib.com?subject=Talk"}>
              <Button variant="default" size="sm" type="submit">
                {dict?.navbar?.contact}
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
