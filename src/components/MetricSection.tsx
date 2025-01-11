import MetricItem from "@/components/ui/MetricItem";
import Scrollable from "@/components/Scrollable";

export default function MetricSection() {
  return (
    <Scrollable>
      <section className="mt-2.5 pl-4 lg:px-20 flex lg:grid lg:grid-cols-4 divide-x divide-primary-900 lg:w-full">
        <div className="flex justify-center">
          <MetricItem label="Jaar ervaring" value={"+10"} />
        </div>
        <div className="flex justify-center">
          <MetricItem label="Afgeronde projecten" value={"+50"} />
        </div>
        <div className="flex justify-center">
          <MetricItem label="Lines of code" value="+10M" />
        </div>
        <div className="flex justify-center">
          <MetricItem label="Skills" value={50} />
        </div>
      </section>
    </Scrollable>
  );
}
