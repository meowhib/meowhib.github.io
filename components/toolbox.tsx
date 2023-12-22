import Image from "next/image";

const toolbox = [
  {
    name: "Next.js",
    description: "The React framework for production",
    url: "https://nextjs.org/",
    logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  },
  {
    name: "Tailwind CSS",
    description:
      "Rapidly build modern websites without ever leaving your HTML.",
    url: "https://tailwindcss.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  },
  {
    name: "TypeScript",
    description: "TypeScript extends JavaScript by adding types.",
    url: "https://www.typescriptlang.org/",
    logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    url: "https://reactjs.org/",
    logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "Vercel",
    description:
      "Develop. Preview. Ship. For the best frontend teams – Vercel.",
    url: "https://vercel.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
  },
  {
    name: "Git",
    description:
      "Git is a free and open source distributed version control system.",
    url: "https://git-scm.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
  },
  {
    name: "GitHub",
    description:
      "GitHub is where over 56 million developers shape the future of software, together.",
    url: "https://github.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  },
  {
    name: "Figma",
    description: "The collaborative interface design tool.",
    url: "https://www.figma.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Docker",
    description: "Empowering App Development for Developers.",
    url: "https://www.docker.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/docker.svg",
  },
  {
    name: "PostgreSQL",
    description: "The world's most advanced open source database.",
    url: "https://www.postgresql.org/",
    logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
  },
  {
    name: "Nginx",
    description: "High Performance Load Balancer, Web Server, & Reverse Proxy.",
    url: "https://www.nginx.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/nginx-1.svg",
  },
];

export default function Toolbox() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">My toolbox</h1>
      <div className="w-full grid grid-cols-3 md:grid-cols-5 gap-8">
        {toolbox.map((tool) => (
          <div key={tool.name} className="flex flex-col space-y-4">
            <div className="w-full aspect-square bg-gray-100 flex items-center justify-center rounded">
              <Image
                className="h-12 w-12"
                height={64}
                width={64}
                src={tool.logo}
                alt="logo"
              />
            </div>
            <div className="space-y-2">
              <h1 className="font-bold">{tool.name}</h1>
              {/* <p className="text-gray-700">The React framework for production</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
