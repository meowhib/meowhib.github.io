import Image from "next/image";

const toolbox = [
  {
    name: "Next.js",
    description: "Framework",
    url: "https://nextjs.org/",
    logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    url: "https://tailwindcss.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  },
  {
    name: "TypeScript",
    description: "JavaScript superset",
    url: "https://www.typescriptlang.org/",
    logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "React",
    description: "JavaScript library",
    url: "https://reactjs.org/",
    logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "Vercel",
    description: "Hosting",
    url: "https://vercel.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
  },
  {
    name: "Git",
    description: "Version control",
    url: "https://git-scm.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
  },
  {
    name: "GitHub",
    description: "Code hosting",
    url: "https://github.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  },
  {
    name: "Figma",
    description: "Design",
    url: "https://www.figma.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Docker",
    description: "Containerization",
    url: "https://www.docker.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/docker.svg",
  },
  {
    name: "PostgreSQL",
    description: "Database",
    url: "https://www.postgresql.org/",
    logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
  },
  // {
  //   name: "Nginx",
  //   description: "Load balancer",
  //   url: "https://www.nginx.com/",
  //   logo: "https://cdn.worldvectorlogo.com/logos/nginx-1.svg",
  // },
];

export default function Toolbox({ dict }: { dict: any }) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{dict?.toolbox?.title}</h1>
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
              <p className="text-sm text-gray-700">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
