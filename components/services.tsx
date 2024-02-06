import {
  DatabaseZap,
  Globe,
  MonitorSmartphoneIcon,
  PaintbrushIcon,
  ShieldCheck,
} from "lucide-react";

export default function Services({ dict }: { dict: any }) {
  const services = [
    {
      title: dict?.services?.service_1?.title,
      subtitle: dict?.services?.service_1?.subtitle,
      features: [
        {
          name: dict?.services?.service_1?.feature_1?.name,
          description: dict?.services?.service_1?.feature_1?.description,
          icon: PaintbrushIcon,
        },
        {
          name: dict?.services?.service_1?.feature_2?.name,
          description: dict?.services?.service_1?.feature_2?.description,
          icon: MonitorSmartphoneIcon,
        },
      ],
    },
    {
      title: dict?.services?.service_2?.title,
      subtitle: dict?.services?.service_2?.subtitle,
      features: [
        {
          name: dict?.services?.service_2?.feature_1?.name,
          description: dict?.services?.service_2?.feature_1?.description,
          icon: ShieldCheck,
        },
        {
          name: dict?.services?.service_2?.feature_2?.name,
          description: dict?.services?.service_2?.feature_2?.description,
          icon: MonitorSmartphoneIcon,
        },
      ],
    },
    {
      title: dict?.services?.service_3?.title,
      subtitle: dict?.services?.service_3?.subtitle,
      features: [
        {
          name: dict?.services?.service_3?.feature_1?.name,
          description: dict?.services?.service_3?.feature_1?.description,
          icon: DatabaseZap,
        },
        {
          name: dict?.services?.service_3?.feature_2?.name,
          description: dict?.services?.service_3?.feature_2?.description,
          icon: Globe,
        },
      ],
    },
  ];

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
