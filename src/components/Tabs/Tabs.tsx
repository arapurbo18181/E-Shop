import { TabsDemoProps } from "..";
import { Tab } from "./Tab";

export function TabsDemo({ tabs }: TabsDemoProps) {
  return (
    <div className="h-[25rem] md:h-[30rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-28 mb-24">
      <Tab tabs={tabs} />
    </div>
  );
}
