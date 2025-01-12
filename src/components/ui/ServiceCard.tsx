interface ServiceCardProps {
  type: string;
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  type,
  name,
  description,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <div className="group flex items-top space-x-4">
      <div className={"flex-shrink-0 mt-2 mb-4"}>{icon}</div>
      <div>
        <h3 className="mb-4 mt-2 text-display-6 lg:text-[32px]  font-semibold text-primary-50 font-display leading-none">
          {name}
        </h3>
        <p className="lg:text-lg text-primary-300">{description}</p>
      </div>
    </div>
  );
}
