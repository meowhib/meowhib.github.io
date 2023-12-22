import { Button } from "./ui/button";

const navigation = [
  { name: "Work", href: "#" },
  { name: "About", href: "#" },
];

export default function Navbar() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
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
            <Button variant="default" size="sm">
              Contact
            </Button>
          </div>
        </nav>
      </header>
    </div>
  );
}
