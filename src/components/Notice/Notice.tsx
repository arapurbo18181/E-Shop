import { GoDotFill } from "react-icons/go";
export const Notice = () => {
  return (
    <div>
      <div className="group relative overflow-hidden whitespace-nowrap text-white">
        {[...new Array(3)].map((_, i) => (
          <div
            key={i}
            className="inline-flex animate-slide items-center gap-x-8 py-4 text-3xl font-black uppercase group-hover:[animation-play-state:paused] xl:py-8 xl:text-4xl 3xl:py-14 3xl:text-5xl"
          >
            <span className="pl-8">
              <span className="text-[#e2b598]">Winter sale</span> - buy 4
              perfume oils get 100 taka off
            </span>
            <span>
              <GoDotFill />
            </span>
            <span>
              <span className="text-[#e2b598]">Winter kit</span> - buy 1 room
              mist + 1 body butter get 250 taka off
            </span>
            <span>
              <GoDotFill />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
