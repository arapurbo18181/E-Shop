import { TypewriterEffectSmooth } from "./typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Featured",
    },
    {
      text: "Products",
      className: "text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
