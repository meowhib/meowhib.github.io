import {
  DatabaseZap,
  Globe,
  MonitorSmartphoneIcon,
  PaintbrushIcon,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Frontend development",
    subtitle:
      "I ensure your websites are well designed and look impeccable across all screen sizes like smartphones, tablets and computers",
    features: [
      {
        name: "UX UI Design",
        description: "Well done and modern website designs",
        icon: PaintbrushIcon,
      },
      {
        name: "Responsive",
        description: "Websites that work on all kinds of screens",
        icon: MonitorSmartphoneIcon,
      },
    ],
  },
  {
    title: "Backend development",
    subtitle:
      "I use the latest technologies to make websites load blazingly fast, work with no failures and convert visitors to clients",
    features: [
      {
        name: "Performance",
        description: "Snappy and blazingly fast websites ⚡",
        icon: ShieldCheck,
      },
      {
        name: "Secure",
        description:
          "I take security of websites seriously and only deliver what works",
        icon: MonitorSmartphoneIcon,
      },
    ],
  },
  {
    title: "DevOps",
    subtitle:
      "I take care of all the complex stuff that happen behind the hood, from domain names to servers to guarantee little to no down times",
    features: [
      {
        name: "Hosting",
        description: "Show your work to the internet!",
        icon: DatabaseZap,
      },
      {
        name: "Domain names",
        description:
          "I can take care of the domain names and everything behind the hood",
        icon: Globe,
      },
    ],
  },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-7xl grid grid-flow-row md:grid-cols-3 gap-x-6 p-6 grid-cols-1 space-y-20 md:space-y-0">
      {services.map((service: any) => (
        <div key={service.title} className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{service.title}</h1>
            <p className="text-gray-700">{service.subtitle}</p>
          </div>
          <div className="space-y-4">
            {service.features.map((feature: any) => (
              <div key={feature.name} className="flex space-x-4">
                <div className="h-12 w-12 aspect-square bg-gray-200 flex items-center justify-center rounded">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h1 className="font-bold">{feature.name}</h1>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
