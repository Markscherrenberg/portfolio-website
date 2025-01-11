import ShieldCheckIcon from "@/components/icons/ShieldCheckIcon";
import Settings from "@/components/icons/Settings";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { ScrollUp } from "@/components/ScrollAnimations";

export default function SafetyUsps(props: {
  data: {
    title: string;
    description: React.ReactNode;
    icon: React.ReactNode;
  }[];
}) {
  return (
    <ScrollUp>
      <section className="px-4 lg:px-20">
        <div className={"grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20"}>
          {props.data.map((item, index) => (
            <div key={index} className="flex justify-between">
              <div className="space-y-5 max-w-[400px]">
                {item.icon}
                <h3 className="font-display text-primary-50 text-[28px] font-semibold">
                  {item.title}
                </h3>
                <p className="text-primary-300 leading-[26px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollUp>
  );
}
